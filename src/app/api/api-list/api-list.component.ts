
import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../shared/services/filtro.service';
import { ApiDataService } from 'src/app/shared/services/api-data.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  constructor(private filt: FiltroService, private apdata: ApiDataService) { }
  ngOnInit(){
  }
}
