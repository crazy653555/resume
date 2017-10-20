import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[];

  constructor(private dataServer:ResumeService ) { }

  ngOnInit() {
    this.dataServer.getEducation()
      .subscribe(data => {
        this.education = data;
      });
  }

}
