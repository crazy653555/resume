import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile;

  constructor(private dataServer: ResumeService) { }

  ngOnInit() {
    this.dataServer.getProfile()
      .subscribe(data => {
        this.profile = data;
      })
  }

}
