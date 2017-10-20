import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private dataServer:ResumeService) { }

  personal:Profile;

  ngOnInit() {
    this.dataServer.getProfile()
    .subscribe(data => {
      this.personal = data;
    });
  }

}
