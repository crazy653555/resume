import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private apiBase = 'http://localhost:3000/profile';

  profile:Profile;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.apiBase)
      .subscribe(data => {
        this.profile = data;
      })
  }

}
