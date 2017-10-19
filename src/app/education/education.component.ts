import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  private apiBase = 'http://localhost:3000/education';

  education: Education[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Education[]>(this.apiBase)
      .subscribe(data => {
        this.education = data;
      });
  }

}
