import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from './education';
import { Profile } from './profile';
import { Skills } from './skills';
import { Experience } from './experience';

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

  getProfile() {
    return this.http.get<Profile>(this.apiProfile);
  }

  //profile end


  //skills
  private apiSkills = 'http://localhost:3000/skills';

  getSkills() {
    return this.http.get<Skills[]>(this.apiSkills);
  }
  //skills end


//Experience
  private apiExperience = 'http://localhost:3000/experience';

  getExperience(){
    return this.http.get<Experience[]>(this.apiExperience)
  }
  //Experience end

  constructor(private http: HttpClient) { }

}
