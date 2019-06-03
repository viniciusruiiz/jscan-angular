import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartsDataService } from 'src/app/shared/services/charts-data.service';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../shared/models/api';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { ApiDataService } from '../shared/services/api-data.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.component.html',
  styleUrls: ['./desenvolvedor.component.css']
})
export class DesenvolvedorComponent implements OnInit, OnDestroy {
  
  apis: Observable<Api[]>;

   constructor(private chartsService: ChartsDataService, private route: ActivatedRoute, 
    private loginService: LoginService,
    private apdata: ApiDataService){
    this.pieChartLabels = ['Problema', 'Funcionando'];
    
  }


  async ngOnInit(){
    this.pieChartData = [10, 90];
    this.apis = await this.apdata.getAll(this.loginService.resposta.IDGESTOR);
   
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      position: 'top',
    },
    // plugins: {
    //   datalabels: {
    //     formatter: (value, ctx) => {
    //       const label = ctx.chart.data.labels[ctx.dataIndex];
    //       return label;
    //     },
    //   },
    // }
  };
  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartDataRam: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];

  

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
    
  }

  ngOnDestroy(){
    console.log('destruiu');
  }
}






