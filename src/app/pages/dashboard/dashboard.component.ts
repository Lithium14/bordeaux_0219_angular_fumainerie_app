import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }


  user: User;
  StatusAccountIsComplete = true;

  ngOnInit() {

  }
  changeStatus() {
    this.StatusAccountIsComplete = !this.StatusAccountIsComplete;
  }
  getAccountStatus() {

  }
}