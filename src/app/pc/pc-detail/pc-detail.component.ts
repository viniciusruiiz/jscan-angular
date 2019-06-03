import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartsDataService } from 'src/app/shared/services/charts-data.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { Subscription, Observable } from 'rxjs';
import { Pc } from 'src/app/shared/models/pc';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.scss']
})
export class PcDetailComponent implements OnInit, OnDestroy {
  sub: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  pcDetail$: Pc;
  constructor(private chartsService: ChartsDataService, private route: ActivatedRoute,
    private ls: LoginService){
    this.pieChartLabels = ['Usado', 'Disponivel'];
    
  }
  data = [];
  horario = [];
  armazenamentoTotal: any;
  armazenamentoTotalRam: any;
  async ngOnInit(){
    
    let id = this.route.snapshot.params.id;
    if(id == undefined){
      id = this.ls.resposta.IDCOMPUTADOR
    }
    this.getArmazenamentoTotal(id);
    this.pieChartData = [100, 0];
    this.pieChartDataRam = [100, 0];
    
    this.pcDetail$
    this.chartsService.getDadosPc(id)
      .subscribe(data =>{
        console.log(data)
        this.pcDetail$ = data[0]
      })

   setInterval(()=>{ 
    this.sub = this.chartsService.getDadosProcessamentoPC(id)
        .subscribe(data => {
          for (let index = 0; index < 10 ; index++) {
            this.data[index] = parseFloat(data[index].vlLeituraCpu.toFixed(2));
            this.horario[index] = data[index].dtregistro;
          }

          this.data.reverse();
          this.horario.reverse();
        })
        
    }, 2000);

    setInterval(()=>{ 
      this.sub2 = this.chartsService.getArmazenamentoUtilizado(id)
      .subscribe(data => { 
          this.alterargrafico(data[0].vlleituraarmazenamento)
      })
    }, 1000);

    setInterval(()=>{ 
      this.sub3 = this.chartsService.getRamUtilizado(id)
      .subscribe(data => {  
          this.alterargraficoRam(data[0].vlLeituraMemoria)
      })
    }, 1000);
    
  }


    alterargrafico(valor){
      this.pieChartData = [valor, this.armazenamentoTotal - valor];
    }

    alterargraficoRam(valor){
      this.pieChartDataRam = [valor, this.armazenamentoTotalRam - valor];
    }

    getArmazenamentoTotal(id){
      
      this.chartsService.getMemoriaeRamTotal(id)
        .subscribe(
          resultado => {
            console.log(resultado)
            let string: any = resultado[0].vlarmazenamento;
            if(string.includes('TiB')){
              let nova = string.split(" ");
              this.armazenamentoTotal = nova[0] * 1000;
              console.log(nova )
              console.log(this.armazenamentoTotal)
            }else if (string.includes('GiB')){
              let nova = string.split(" ");
              this.armazenamentoTotal  = nova[0];
            }
            
            let string2: any = resultado[0].vlmemoriaram;
            let nova = string2.split(" ");
            this.armazenamentoTotalRam = nova[0];

          }
        )
   }

    //colocar um array de numeros que será recebido do node
    public lineChartData: ChartDataSets[] = [
      { data: this.data, label: 'Processamento' }
    ];

    //labels, talvez seria legal tirar o horario do banco, como no semestre anterior, ou talvez uma média diaria
    public lineChartLabels: Label[] = this.horario.reverse();
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          },
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
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
  
//------------------------------PIE CHART -----------------------------------------
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
      this.sub.unsubscribe()
      this.sub2.unsubscribe()
      this.sub3.unsubscribe()
    }
}

