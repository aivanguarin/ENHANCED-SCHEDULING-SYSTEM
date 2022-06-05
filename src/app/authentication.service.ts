import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';


 const baseurl: string = `https://stark-oasis-25068.herokuapp.com/api/`;
// const baseurl: string = `http://localhost:3000/api/`;
// const baseurl: string = `http://scheduler.rf.gd/api/api/`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http:HttpClient) { }


    isLoggedIn(): boolean{
      var token = localStorage.getItem('token');
      if(token != null){
        var expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) < expiry;
        
      }
      else{
        return false;
      }
    }


    login(data: any): Observable<any> {
      return this.http.post(baseurl + `users/login`, data);
    }

    /*==================USER ====================*/

    getUsers(): Observable<any>{
      return this.http.get(baseurl + 'users');
    }
    newUser(data: any): Observable<any>{
      return this.http.post(baseurl + 'users', data);
    }
    deleteUser(id:number): Observable<any>{
      return this.http.delete(baseurl + 'users/' + id);
    }
    editUser(data:any): Observable<any>{
      return this.http.patch(baseurl + 'users', data);
    }
    /*=========================================== */
    
    /*================= INSTRUCTOR ==================*/
    getInstructors(): Observable<any>{
      return this.http.get(baseurl + 'instructors');
    }
    deleteInstructors(username:any): Observable<any> {
      return this.http.delete(baseurl + 'instructors/' + username );
    }
    /*================================================*/

    /*================= SEMESTER ====================== */

    getSemesters(): Observable<any>{
      return this.http.get(baseurl + 'semesters');
    }

    deleteSemester(id:number) : Observable<any>{
      return this.http.delete(baseurl + 'semesters/' + id);
    }

    newSemester(data: any): Observable<any>{
      return this.http.post(baseurl + 'semesters', data);
    }

    editSemester(data: any): Observable<any>{
      return this.http.patch(baseurl + 'semesters', data);
    }

    /*================================================*/

    /*===================COLLEGES========================= */
    deleteCollege(id:number) : Observable<any>{
      return this.http.delete(baseurl + 'colleges/' + id);
    }

    getColleges(): Observable<any>{
      return this.http.get(baseurl + 'colleges');
    }

    newCollege(data: any): Observable<any>{
      return this.http.post(baseurl + 'colleges', data);
    }
    
    editCollege(data:any): Observable<any>{
      return this.http.patch(baseurl + 'colleges', data);
    }
    /*==================================================== */

    /*==================== COURSE ============================== */
    editCourse(data:any): Observable<any>{
      return this.http.patch(baseurl + 'courses', data);
    }

    deleteCourse(id:number) : Observable<any>{
      return this.http.delete(baseurl + 'courses/' + id);
    }

    getCourses(): Observable<any>{
      return this.http.get(baseurl + 'courses');
    }

    newCourse(data: any): Observable<any>{
      return this.http.post(baseurl + 'courses', data);
    }


    /*========================================================= */

    /*====================== SUBJECTS ========================= */
    getSubjects(): Observable<any>{
      return this.http.get(baseurl + 'subjects');
    }

    newSubject(data:any): Observable<any> {
      return this.http.post(baseurl + 'subjects', data);
    }

    deleteSubject(id:number):Observable<any> {
      return this.http.delete(baseurl + 'subjects/' + id);
    }

    editSubject(data:any): Observable<any>{
      return this.http.patch(baseurl + 'subjects', data);
    }
    /*========================================================== */

    /*======================= ROOMS ============================= */
    getRooms(): Observable<any> {
      return this.http.get(baseurl + 'rooms');
    }

    newRoom(data:any): Observable<any> {
      return this.http.post(baseurl + 'rooms', data);
    }

    deleteRoom(id:number): Observable<any> {
      return this.http.delete(baseurl + 'rooms/' + id);
    }

    editRoom(data:any): Observable<any> {
      return this.http.patch(baseurl + 'rooms', data)
    }
}