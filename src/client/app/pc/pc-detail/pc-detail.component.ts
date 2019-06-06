import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.scss']
})
export class PcDetailComponent implements OnInit {
  ngOnInit() {
    setInterval(() => this.pushOne(), 2000);
  }

  //getCharts
  @ViewChildren(BaseChartDirective) chart: QueryList<BaseChartDirective>;

  //#region .: Gráfico de linha :.

  private randomDataSet: number[] = [20, 25, 40, 30, 40, 30, 35] //MOCK
  private randomDataSet2: number[] = [69, 99, 91, 80, 77, 67, 75] //MOCK
  private randomDataSet3: number[] = [273, 299, 255, 280, 277, 267, 275] //MOCK

  //DATA CPU
  public lineChartDataCPU: ChartDataSets[] = [
    { data: this.randomDataSet, label: 'Processamento (%)' },
  ];

  //DATA RAM
  public lineChartDataRAM: ChartDataSets[] = [
    { data: this.randomDataSet2, label: 'RAM (%)' },
  ];

  //DATA MEDIA LEITURA DE DISCO
  public lineChartDataDiskReadAverage: ChartDataSets[] = [
    { data: this.randomDataSet3, label: 'Leituras (por minuto)' },
  ];

  public lineChartLabels: Label[] = ['12:00', '12:02', '12:04', '12:06', '12:08', '12:10', '12:12'];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      gridLines: {
        display: false,
        color: "rgba(0, 0, 0, 0)",
      },
      xAxes: [{ gridLines: { display: false } }],
      yAxes: [{ gridLines: { display: true } },
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 1,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  //colocar em um json e fazer a chamada da pagina para tirar a "poluição" do código atual
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  //#endregion

  //#region .: Gráfico de Pizza :.

  public pieChartOptions: ChartOptions = {
    responsive: true,
    rotation: Math.PI,
    circumference: Math.PI,
  };
  public pieChartLabels: Label[] = ['Em Uso', 'Disponível'];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //#endregion

  ///MÉTODO PARA PLOT COM RANDOM NUMBERS
  private generateNumber() {
    return Math.round(Math.random() * 50)
  }

  //MÉTODO POR HORA MOCKADO, QUE DEVERÁ RECEBER DADOS REAIS DO SERVIÇO DE PEGAR DADOS DA API NO LUGAR DO PUSH 
  public pushOne() {
    this.randomDataSet.shift();
    this.randomDataSet.push(this.generateNumber());

    this.randomDataSet2.shift();
    this.randomDataSet2.push(100 - this.generateNumber());

    this.randomDataSet3.shift();
    this.randomDataSet3.push(290 - this.generateNumber());

    this.lineChartDataCPU[0].data = this.randomDataSet;
    this.lineChartDataRAM[0].data = this.randomDataSet2;
    this.lineChartDataDiskReadAverage[0].data = this.randomDataSet3;

    //this.chart[0].chart.data.labels.shift();
    this.lineChartLabels.shift();
    this.lineChartLabels.push(new Date().toLocaleTimeString())

    this.chart.forEach(child => {
      child.update();
    })

  }

  // public changeColor() {
  //   this.lineChartColors[2].borderColor = 'green';
  //   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  // }

  // public changeLabel() {
  //   this.lineChartLabels[2] = ['1st Line'];
  //   // this.chart.update();
  // }
}

