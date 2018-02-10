import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http:HttpClient) { }
  searchHospitalByLocationName(loc:any)
{
  return this.http.post ('http://localhost:3000/hospital/LoadByLocationName',loc, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

searchDoctorByLocationName(loc:any)
{
  return this.http.post ('http://localhost:3000/doctors/LoadByLocName',loc, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}



}
