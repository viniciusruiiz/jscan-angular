import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../shared/services/api.service';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.scss']
})
export class ApiDetailComponent implements OnInit {

    //#region .: Utils :.

    public wait : Boolean = true;
    private month: number = new Date().getMonth();

    private getMonthName(month:number){
      switch(month){
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

  constructor(private apiService: ApiService, private router: ActivatedRoute) { }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    rotation: Math.PI,
    circumference: Math.PI,
  };
  public pieChartLabels: Label[] = ['Tempo desativado', 'Tempo ativo'];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //BAR CHART

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [this.getMonthName(this.month - 3), this.getMonthName(this.month - 2), this.getMonthName(this.month - 1), this.getMonthName(this.month)];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56], label: 'Número de quedas' }
  ];

  ngOnInit(){
    let idApi = this.router.snapshot.params.apiId;

    this.apiService.get(idApi).forEach(data => {
      document.getElementById('name').innerHTML = data[0].nmApi; 
      document.getElementById('endPoint').innerHTML = data[0].nmEndPoint; 
      document.getElementById('endPoint').href = data[0].nmEndPoint;
    })

    setTimeout(() => this.wait = false, 3000)
  }
}
