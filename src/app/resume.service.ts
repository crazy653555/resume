import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from './education';
import { Profile } from './profile';

@Injectable()
export class ResumeService {

  // Education
  private apiEducation = 'http://localhost:3000/education';

  getEducation() {
    return this.http.get<Education[]>(this.apiEducation);
  }
  // Education end

  // profile
  private apiProfile = 'http://localhost:3000/profile';

  getProfile(){
    return this.http.get<Profile>(this.apiProfile);
  }

  //profile end




  constructor(private http: HttpClient) { }

}
