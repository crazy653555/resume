import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  experience: Experience[];
  constructor(private dataServer: ResumeService) { }

  ngOnInit() {
    this.dataServer.getExperience()
    .subscribe(data => {
      this.experience = data;
    });
  }

}
