import { Component, OnInit } from '@angular/core';
import { Pcs } from '../../mock/pc-mock'

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pcs = Pcs;

}
