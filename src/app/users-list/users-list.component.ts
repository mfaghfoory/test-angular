import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { UserModelResponse } from '../models/user-model-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  data: UserModelResponse;
  currentPage: number = 1;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userService.getAllUsers(this.currentPage).subscribe(d => {
      this.data = d;
      this.pageCount = [...Array(d.total_pages).keys()]
    })
  }

  pageCount: number[];

  changePage(page: number) {
    this.currentPage = page;
    this.loadData();
  }
}
