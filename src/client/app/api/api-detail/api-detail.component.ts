import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../shared/services/api.service';
import { Label, SingleDataSet, BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets, ChartScales } from 'chart.js';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ReadService } from '../../shared/services/read.service';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.scss']
})
export class ApiDetailComponent implements OnInit {

  //#region .: Utils :.

  public wait: Boolean = true;
  private month: number = new Date().getMonth();
  dataSetPercentageTimeUp: number[]

  private getMonthName(month: number) {
    switch (month) {
      case -3 || 9:
        return "Outubro"
        break;
      case -2 || 10:
        return "Novembro"
        break;
      case -1 || 11:
        return "Dezembro"
        break;
      case 0:
        return "Janeiro"
        break;
      case 1:
        return "Fevereiro"
        break;
      case 2:
        return "Março"
        break;
      case 3:
        return "Abril"
        break;
      case 4:
        return "Maio"
        break;
      case 5:
        return "Junho"
        break;
      case 6:
        return "Julho"
        break;
      case 7:
        return "Agosto"
        break;
      case 8:
        return "Setembro"
        break;
    }
  }

  //#endregion

  constructor(private apiService: ApiService, private router: ActivatedRoute, private readService: ReadService) { }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    rotation: Math.PI,
    circumference: Math.PI,
  };
  public pieChartLabels: Label[] = ['Tempo desativado (minutos)', 'Tempo ativo(minutos)'];
  public pieChartData: SingleDataSet = [0, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //BAR CHART

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ gridLines: { display: false } }],
      yAxes: [{ gridLines: { display: false } }],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [this.getMonthName(this.month)];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Número de quedas' }
  ];

  @ViewChildren(BaseChartDirective) chart: QueryList<BaseChartDirective>;

  async ngOnInit() {
    let idApi = this.router.snapshot.params.apiId;
    this.dataSetPercentageTimeUp = [];

    this.apiService.get(idApi).forEach(data => {
      document.getElementById('name').innerHTML = data[0].nmApi;
      document.getElementById('endPoint').innerHTML = data[0].nmEndPoint;
      document.getElementById('description').innerHTML = data[0].dsApi;
      //document.getElementById('endPoint').href = data[0].nmEndPoint;
    })

    await this.readService.getApiPercentageTimeUp(idApi).forEach(data => {
      this.dataSetPercentageTimeUp.push(data.timeDown);
      this.dataSetPercentageTimeUp.push(data.timeUp);
      this.pieChartData = this.dataSetPercentageTimeUp;
    })

    await this.readService.getApiTimesDownInMonth(idApi).forEach(data => {
      this.barChartData[0].data = [data.numberTimesDown]
    })

    this.chart.forEach(child => {
      child.update();
    })

    this.wait = false;

    //setTimeout(() => this.wait = false, 2400)
  }
}
