import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/shared/services/api-data.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ChartsDataService } from 'src/app/shared/services/charts-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Api } from 'src/app/shared/models/api';

@Component({
  selector: 'app-detalhamento-api',
  templateUrl: './detalhamento-api.component.html',
  styleUrls: ['./detalhamento-api.component.css']
})
export class DetalhamentoApiComponent implements OnInit {

  constructor(private chartsService: ChartsDataService, private route: ActivatedRoute, 
    private loginService: LoginService,
    private apdata: ApiDataService){}
    apis: Api;

    percentageUp: string;
    numberTimesDown: string;

    async ngOnInit(){
      let id = this.route.snapshot.params.id;
      this.apdata.getOne(id).subscribe(data => {
        this.apis = data;
        console.log(data)
      });

      this.apdata.getPorcentagemApi(id)
        .subscribe(data => {
          //this.percentageUp = data.percentageUp
          this.apis.percentageUp = data.percentageUp
        })

      this.apdata.getQuantidadeQuedas(id)
        .subscribe(data => {
          //this.numberTimesDown = data.numberTimesDown
          this.apis.numberTimesDown = data.numberTimesDown
        })
     
    }
}
