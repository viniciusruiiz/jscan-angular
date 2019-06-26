import { PcService } from './../../shared/services/pc.service';
import { LoginService } from './../../shared/services/login.service';
import { ReadService } from './../../shared/services/read.service';
import { Component, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Color, BaseChartDirective, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.scss']
})
export class PcDetailComponent implements OnInit, OnDestroy {
  constructor(private readService: ReadService, private loginService: LoginService, private route: ActivatedRoute, private pcService: PcService) { }

  public wait: Boolean = true;
  public gambiarra: Boolean = false;
  private interval;

  async ngOnInit() {
    //let idPc = !!this.loginService.funcionario.pc.id ? this.loginService.funcionario.pc.id : this.route.snapshot.params.id;
    let idPc = this.route.snapshot.params.id;

    if (!idPc) {
      await this.pcService.getByEmployer(this.loginService.funcionario.id).forEach(data => {
        idPc = data[0].idComputador
      })
    }

    this.dataSetCpu = []
    this.dataSetRam = []
    this.dataSetDiskAvarage = []

    this.pcService.get(idPc).forEach(data => {

      let memoriaRam = Math.round(data[0].vlMemoriaRam / 1000).toString();

      document.getElementById("namePc").innerHTML = data[0].nmComputador;
      document.getElementById("model").innerHTML = data[0].nmModeloSistema;
      document.getElementById("processor").innerHTML = data[0].nmProcessador;
      document.getElementById("SO").innerHTML = data[0].nmSistemaOperacional;
      document.getElementById("memory").innerHTML = memoriaRam
      document.getElementById("storage").innerHTML = data[0].vlArmazenamento
    })

    this.readService.getPcAvailableStoragePercentage(idPc).forEach(data => {
      this.pieChartData = [(data.total - data.available), data.available];
    })

    this.readService.getPcProcessNumber(idPc).forEach(data => {
      document.getElementById("processNumber").innerHTML = data[0].processNumber
    })

    this.readService.getPcUpTime(idPc).forEach(data => {
      document.getElementById("upTime").innerHTML = data[0].upTime
    })

    await this.readService.getPcCpuPercentage(idPc).forEach(data => {
      data.forEach(item => {
        this.dataSetCpu.unshift(item.percentageCpu)
        this.lineChartLabels.unshift(item.readDate)
      })
    })

    await this.readService.getPcRamPercentage(idPc).forEach(data => {
      data.forEach(item => {
        this.dataSetRam.unshift(item.percentageMemoryAvailable)
      })
    })

    await this.readService.getPcDiskReadAverage(idPc).forEach(data => {
      data.forEach(item => {
        this.dataSetDiskAvarage.unshift(item.diskReadAvarage)
      })
    })

    this.lineChartDataCPU[0].data = this.dataSetCpu;
    this.lineChartDataRAM[0].data = this.dataSetRam;
    this.lineChartDataDiskReadAverage[0].data = this.dataSetDiskAvarage;

    this.chart.forEach(child => {
      child.update();
    })

    this.wait = false;

    this.gambiarra = true;
    this.interval = setInterval(() => this.pushOne(idPc), 2000);
  }

  @ViewChildren(BaseChartDirective) chart: QueryList<BaseChartDirective>;

  //#region .: Gráfico de linha :.

  private dataSetCpu: number[]// = [20, 25, 40, 30, 40, 30, 35] //MOCK
  private dataSetRam: number[]// = [69, 99, 91, 80, 77, 67, 75] //MOCK
  private dataSetDiskAvarage: number[]// = [273, 299, 255, 280, 277, 267, 275] //MOCK

  //DATA CPU
  public lineChartDataCPU: ChartDataSets[] = [
    { label: 'Processamento (%)' },
  ];

  //DATA RAM
  public lineChartDataRAM: ChartDataSets[] = [
    { label: 'RAM (%)' },
  ];

  //DATA MEDIA LEITURA DE DISCO
  public lineChartDataDiskReadAverage: ChartDataSets[] = [
    { label: 'Leituras (por minuto)' },
  ];

  public lineChartLabels: Label[] = [];

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
  public pieChartLabels: Label[] = ['Em Uso (GB)', 'Disponível (GB)'];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //#endregion

  public async pushOne(idPc: number) {

    await this.readService.getPcLastReadTime(idPc).forEach(data => {

      if (data[0].readDate != this.lineChartLabels[this.lineChartLabels.length - 1]) {
        this.dataSetCpu.shift();
        this.readService.getPcCpuPercentage(idPc).forEach(data => {
          this.dataSetCpu.push(data[0].percentageCpu);

          this.lineChartLabels.shift();
          this.lineChartLabels.push(data[0].readDate);
        })

        this.dataSetRam.shift();
        this.readService.getPcRamPercentage(idPc).forEach(data => {
          this.dataSetRam.push(data[0].percentageMemoryAvailable);
        })

        this.dataSetDiskAvarage.shift();
        this.readService.getPcDiskReadAverage(idPc).forEach(data => {
          this.dataSetDiskAvarage.push(data[0].diskReadAvarage);
        })

        this.lineChartDataCPU[0].data = this.dataSetCpu;
        this.lineChartDataRAM[0].data = this.dataSetRam;
        this.lineChartDataDiskReadAverage[0].data = this.dataSetDiskAvarage;

        this.chart.forEach(child => {
          child.update();
        })
      }
    })
  }

  async ngOnDestroy() {
    if (this.gambiarra)
      clearInterval(this.interval)
    else {
      this.pushOne = async () => { }
    }
  }
}

