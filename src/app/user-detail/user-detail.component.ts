import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserModelResponse } from '../models/user-model-response';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute) {
  }
  data: UserModel;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let selectedId = params.get("id");
      this.userService.getUserDetail(selectedId).subscribe(d => {
        this.data = d.data;
      });
    }
    );
  }
}
