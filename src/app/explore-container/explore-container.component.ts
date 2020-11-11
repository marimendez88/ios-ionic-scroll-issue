import { Component, OnInit, Input } from '@angular/core';
import {DataFakeUsers} from './data'
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;


  userList: any = [];


  constructor() { }

  ngOnInit() {

    console.log(DataFakeUsers)
    this.userList = DataFakeUsers;
  }

}
