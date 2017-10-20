import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[];

  constructor(private dataServer: ResumeService) { }

  ngOnInit() {
    this.dataServer.getSkills()
      .subscribe(data => {
        this.skills = data;
      })
  }

}
