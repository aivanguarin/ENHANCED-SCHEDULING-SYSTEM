import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AuthenticationService } from "./../authentication.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import {
  USER,
  INSTRUCTOR,
  COLLEGE,
  SUBJECTS,
  COURSE,
  ROOM,
  SEMESTER
} from '../types';
import { Data } from '@angular/router';

export interface Users {
  id: number;
  name: string;
  username: string;
  active: string;
}

@Component({
  selector: 'app-manage-entities',
  templateUrl: './manage-entities.component.html',
  styleUrls: ['./manage-entities.component.css']
})
export class ManageEntitiesComponent implements OnInit {


  /*=============================== TABLE DATA ======================================== */
  
  usersRowDef: string[] = ['id', 'name', 'username', 'active', 'action'];
  usersData: USER[] = [];

  instructorsData: INSTRUCTOR[] = [];
  instructorsRowDef: string[] = ['id', 'name', 'username', 'active', 'action'];

  collegeRowDef: string[] = ['id', 'code', 'name', 'active', 'action'];
  collegeData: COLLEGE[] = [];

  
  subjectsRowDef: string[] = ['id', 'code', 'name','lec_units','lab_units','active', 'action'];
  subjectsData: SUBJECTS[] = [];

    coursesRowDef : string[] = ['id', 'code', 'name', 'active', 'action'];
    courseData : COURSE[] = [];

    roomsRowDef : string[] = ['id', 'code', 'name', 'active', 'action'];
    roomsData : ROOM[] = [];

    semesterRowDef : string[] = ['id', 'school_year', 'sem','campus_director', 'active', 'action'];
    semesterData : SEMESTER[] = [];


   
  /*===================================== USER ===================================== */

  newUserForm = new FormGroup({
    id: new FormControl(''),
    first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middle_name: new FormControl('', [Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    suffix_name: new FormControl('', [Validators.maxLength(5)]),
    sex: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    is_active: new FormControl('', [Validators.required]),
    college_id: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    salutation: new FormControl('', [Validators.maxLength(5)]),
    admin_function: new FormControl('', [Validators.maxLength(20)]),
    admin_hrs: new FormControl('', [Validators.maxLength(8)]),
    max_load: new FormControl('', [Validators.maxLength(8)]),
    course_id: new FormControl('', [Validators.maxLength(8)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required])
  });
  

  editUserForm = new FormGroup({
    id: new FormControl(''),
    first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middle_name: new FormControl('', [Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    suffix_name: new FormControl('', [Validators.maxLength(5)]),
    sex: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    is_active: new FormControl('', [Validators.required]),
    college_id: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    salutation: new FormControl('', [Validators.maxLength(5)]),
    admin_function: new FormControl('', [Validators.maxLength(20)]),
    admin_hrs: new FormControl('', [Validators.maxLength(8)]),
    max_load: new FormControl('', [Validators.maxLength(8)]),
    course_id: new FormControl('', [Validators.maxLength(8)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required])
  });

  /*==================================== SEMESTER ===================================== */
  newSemesterForm = new FormGroup({
    school_year: new FormControl('',[Validators.required, Validators.maxLength(9)]),
    sem: new FormControl('',[Validators.required, Validators.maxLength(1)]),
    is_active: new FormControl('',[Validators.required]),
    campus_director: new FormControl('',[Validators.required, Validators.maxLength(30)])
  });

  editSemesterForm = new FormGroup({
    id: new FormControl(''),
    school_year: new FormControl('',[Validators.required, Validators.maxLength(9)]),
    sem: new FormControl('',[Validators.required, Validators.maxLength(1)]),
    is_active: new FormControl('',[Validators.required]),
    campus_director: new FormControl('',[Validators.required, Validators.maxLength(30)])
  });

  /*=================================== END OF SEMESTER ================================ */

  /*================================== COLLEGE ======================================= */
  newCollegeForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    name: new FormControl('', [Validators.required]),
    is_active: new FormControl('', [Validators.required])
  });

  editCollegeForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    name: new FormControl('', [Validators.required]),
    is_active: new FormControl('', [Validators.required])
  })

  /*================================= END OF COLLEGE ==================================== */

  /*================================== COURSE ============================================ */

  newCourseForm = new FormGroup({
    code: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    college_id: new FormControl(1),
    is_active: new FormControl('', [Validators.required])
  });

  editCourseForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    college_id: new FormControl(1),
    is_active: new FormControl('', [Validators.required])
  });

  /*================================= END OF COURSE =====================================*/

  /*================================= SUBJECTS ========================================= */
  newSubjectForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    lec_units: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    lab_units: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    lec_hrs: new FormControl(''),
    lab_hrs: new FormControl(''),
    is_active: new FormControl('', Validators.required)
  });

  editSubjectForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    lec_units: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    lab_units: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    lec_hrs: new FormControl(''),
    lab_hrs: new FormControl(''),
    is_active: new FormControl('', Validators.required)
  });

  /*================================ END OF SUJECT ==================================== */

  /*================================ ROOM ============================================= */

  newRoomForm = new FormGroup({
    code: new FormControl('', [Validators.required,Validators.maxLength(10)]),
    name: new FormControl('',[Validators.required, Validators.maxLength(80)]),
    college_id: new FormControl(1),
    is_active: new FormControl('',[Validators.required])
  });

  editRoomForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required,Validators.maxLength(10)]),
    name: new FormControl('',[Validators.required, Validators.maxLength(80)]),
    college_id: new FormControl(1),
    is_active: new FormControl('',[Validators.required])
  });

  /*=============================== END OF ROOM ======================================= */

  public usersTableReady = false;
  public semesterTableReady = false;
  public collegeTableReady = false;
  public courseTableReady = false;
  public subjectTableReady = false;
  public roomTableReady = false;

  public showNewUserPopup = false; 
  public showNewSemesterPopup = false;
  public showNewCollegePopup = false;
  public showNewCoursePopup = false;
  public showNewSubjectPopup = false;
  public showNewRoomPopup = false;
  
  public showEditUserPopup = false;
  public showEditCollegePopup = false;
  public showEditCoursePopup = false;
  public showEditSemesterPopup = false;
  public showEditSubjectPopup = false;
  public showEditRoomPopup = false;

 

  row!: Users;
  

  constructor(private authService:AuthenticationService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getInstructors();
    this.getSemester();
    this.getCollege();
    this.getCourse();
    this.getSubject();
    this.getRoom();
    
  }

  /*=============================== INTRUCTORS ===================================*/
  getInstructors(){
    this.authService.getInstructors().subscribe(
        (res) => {
          this.instructorsData = res['data'];
          console.log(this.instructorsData);
        },
        (err) => {
          console.log(err);
          this.instructorsData = [];
        }
    );
  }

  deleteInstructorsProcess(username:any){
    this.authService.deleteInstructors(username).subscribe(
      (res) => {
        console.log(res);
        this.usersTableReady = false;
        this.getInstructors();
      }
    );
  }

  instructorNameUtil(username:string){
    let inst = this.instructorsData.find(
      data => data.username == username
    );
    
    if(inst){
      console.log(inst);
      return inst.last_name + ", " + inst.first_name;
    }
    return "";
  }
  /* ============================================================================== */

  /*===================================== USERS ====================================*/

  getUsers(){
    this.authService.getUsers().subscribe(
        (res) => {
          this.usersData = res['data'];
          console.log(this.usersData);
          
        },
        (err) => {
          console.log(err);
          this.usersData = [];
        }
    );
    this.usersTableReady = true;
  }

  newUserProcess(){
    if(this.newUserForm.valid){
      this.authService.newUser(this.newUserForm.value).subscribe(
        (res) => {
          if(res.success){
            this.showNewUserPopup = false;
            this.usersTableReady = true;
            this.getUsers();
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }
    console.log(this.newUserForm);
  }

  deleteUserProcess(id: number){
    this.authService.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.usersTableReady = false;
        this.getUsers();
      }
    );
  }

  editUser(data:any){
    this.editUserForm.patchValue({
      id: data.id,
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      suffix_name: data.suffix_name,
      sex: data.sex,
      is_active: data.is_active,
      college_id: data.college_id,
      salutation: data.salutation,
      admin_function: data.admin_function,
      admin_hrs: data.admin_hrs,
      max_load: data.max_load,
      course_id: data.course_id,
      username: data.username,
      password: data.password
    });
    this.showEditUserPopup = true;
  }

  editUserProcess(){
    if(this.editUserForm.valid){
      this.authService.editUser(this.editUserForm.value).subscribe(
        (res) => {
          if(res.success){
            console.log(res);
            this.showEditUserPopup = false;
            this.usersTableReady = false;
            this.getUsers();
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

 /* ========================================================================================= */

 /*========================================= SEMESTER ======================================= */

 getSemester(){
  this.authService.getSemesters().subscribe(
      (res) => {
        this.semesterData = res['data'];
        console.log(this.semesterData);
      },
      (err) => {
        console.log(err);
        this.semesterData = [];
      }
  );
  this.semesterTableReady = true;
}
 
 deleteSemesterProcess(id: number){
   this.authService.deleteSemester(id).subscribe(
     (res) => {
       console.log(res);
       this.semesterTableReady = false;
       this.getSemester();
     }
   )

 }

 newSemesterProcess(){
  if(this.newSemesterForm.valid){
    this.authService.newSemester(this.newSemesterForm.value).subscribe(
      (res) => {
        if(res.success){
          this.showNewSemesterPopup = false;
          this.semesterTableReady = true;
          this.getSemester();
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
  console.log(this.newUserForm);
}

editSemester(data:any) {
  this.editSemesterForm.patchValue({
    id: data.id,
    school_year: data.school_year,
    sem: data.sem,
    is_active: data.is_active,
    campus_director: data.campus_director
  });
  console.log(data);
  this.showEditSemesterPopup = true;
}

editSemesterProcess(){
  if(this.editSemesterForm.valid) {
    this.authService.editSemester(this.editSemesterForm.value).subscribe(
      (res) => {
        if(res.success) {
          console.log(res);
          this.showEditSemesterPopup = false;
          this.semesterTableReady = false;
          this.getSemester();
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}

 /* ========================================================================================= */

 /*========================================== COLLEGE ======================================= */
 newCollegeProcess(){
  if(this.newCollegeForm.valid){
    this.authService.newCollege(this.newCollegeForm.value).subscribe(
      (res) => {
        if(res.success){
          this.showNewCollegePopup = false;
          this.collegeTableReady = true;
          this.getCollege();
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
  console.log(this.newUserForm);
}


 deleteCollegeProcess(id: number) {
   this.authService.deleteCollege(id).subscribe(
     (res) => {
         console.log(res);
         this.collegeTableReady = false;
         this.getCollege();
       }
   )
 }

 getCollege(){
   this.authService.getColleges().subscribe(
     (res) => {
       this.collegeData = res['data'];
       console.log(this.collegeData);
     },
     (err) => {
       console.log(err);
       this.collegeData = [];
     }
   )
   this.collegeTableReady = true;
 }

editCollege(data:any) {
  this.editCollegeForm.patchValue({
    id: data.id,
    code: data.code,
    name: data.name,
    is_active: data.is_active
  });

  console.log(data);
  this.showEditCollegePopup = true;
}

editCollegeProcess(){
  if(this.editCollegeForm.valid){
    this.authService.editCollege(this.editCollegeForm.value).subscribe(
      (res) => {
        if(res.success) {
          console.log(res);
          this.showEditCollegePopup = false;
          this.collegeTableReady = false;
          this.getCollege();
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
 


 /*========================================================================================== */

 /*======================================== COURSE ========================================== */
newCourseProcess(){
  if(this.newCourseForm.valid){
    this.authService.newCourse(this.newCourseForm.value).subscribe(
      (res) => {
        if(res.success){
          this.showNewCoursePopup = false;
          this.courseTableReady = true;
          this.getCourse();
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}

 deleteCourseProcess(id: number) {
   this.authService.deleteCourse(id).subscribe(
     (res) => {
       console.log(res);
       this.courseTableReady = false;
       this.getCourse();
     }
   )
 }

 getCourse() {
   this.authService.getCourses().subscribe(
     (res) => {
       this.courseData = res['data'];
       console.log(this.courseData);
     },
     (err) => {
       console.log(err);
       this.courseData = [];
     }
   )
   this.courseTableReady = true;
 }

 editCourse(data:any){
   this.editCourseForm.patchValue({
     id: data.id,
     code: data.code,
     name: data.name,
     is_active: data.is_active
   })
   console.log(data);
   this.showEditCoursePopup = true;
 };

 editCourseProcess(){
   if(this.editCourseForm.valid) {
     this.authService.editCourse(this.editCourseForm.value).subscribe(
       (res) => {
         if (res.success) {
           console.log(res);
           this.showEditCoursePopup = false;
           this.courseTableReady = false;
           this.getCourse();
         }
       },
       (err) => {
         console.log(err);
       }
     )
   }
 }

 /* ======================================================================================== */

 /*======================================= SUBJECT ========================================= */
 newSubjectProcess(){
   if(this.newSubjectForm.valid){
     this.newSubjectForm.patchValue({
       lab_hrs: this.newSubjectForm.value.lab_units *3,
       lec_hrs: this.newSubjectForm.value.lec_units
     });
     this.authService.newSubject(this.newSubjectForm.value).subscribe(
      (res) => {
        if(res.success){
          this.showNewSubjectPopup = false;
          this.subjectTableReady = true;
          this.getSubject();
        }
      },
      (err) => {
        console.log(err);
      }
    )
   }
 }

 deleteSubjectProcess(id:number) {
   this.authService.deleteSubject(id).subscribe(
     (res) => {
       console.log(res);
       this.subjectTableReady = false;
       this.getSubject();
     }
   )
 }

 getSubject(){
   this.authService.getSubjects().subscribe(
     (res) => {
       this.subjectsData = res['data'];
       console.log(this.subjectsData);
     },
     
     (err) => {
       console.log(err);
       this.subjectsData = [];
     }
   )
   this.subjectTableReady = true;
 }

 editSubject(data: any) {
   this.editSubjectForm.patchValue({
     id: data.id,
     code: data.code,
     name: data.name,
     lec_units: data.lec_units * 3,
     lab_units: data.lab_units
   });
   this.showEditSubjectPopup = true;
 }

 editSubjectProcess(){
   if(this.editSubjectForm.valid){
    this.editSubjectForm.patchValue({
      lab_hrs : this.editSubjectForm.value.lab_units *3,
      lec_hrs: this.editSubjectForm.value.lec_units
    });
     this.authService.editSubject(this.editSubjectForm.value).subscribe(
       (res) => {
         if(res.success){
           console.log(res);
           this.showEditSubjectPopup = false;
           this.subjectTableReady = false;
           this.getSubject();
         }
       },
       (err) => {
         console.log(err);
       }
     )
   }
 }

 /* ========================================================================================= */

 /*======================================= ROOM ============================================= */
 newRoomProcess(){
   if(this.newRoomForm.valid){
     this.authService.newRoom(this.newRoomForm.value).subscribe(
       (res) => {
         if(res.success){
           this.showNewRoomPopup = false;
           this.roomTableReady = true;
           this.getRoom();
         }
       },
       (err) => {
         console.log(err);
       }
     )
   }
 }

 deleteRoomProcess(id:number) {
   this.authService.deleteRoom(id).subscribe(
     (res) => {
       console.log(res);
       this.roomTableReady = false;
       this.getRoom();
     }
   )
 }

 getRoom() {
   this.authService.getRooms().subscribe(
     (res) => {
       this.roomsData = res['data'];
       console.log(this.roomsData);
     },
     (err) => {
       console.log(err);
       this.roomsData = [];
     }
   )
   this.roomTableReady = true;
 }

 editRoom(data:any) {
   this.editRoomForm.patchValue({
     id: data.id,
     code: data.code,
     name: data.name,
     is_active: data.is_active
   });
   this.showEditRoomPopup = true;
 }

 editRoomProcess(){
   if(this.editRoomForm.valid) {
     this.authService.editRoom(this.editRoomForm.value).subscribe(
       (res)=> {
         if(res.success) {
           console.log(res);
           this.showEditRoomPopup = false;
           this.roomTableReady = false;
           this.getRoom();
         }
       },
       (err)=> {
         console.log(err);
       }
     )
   }
 }

 /*========================================================================================== */
 dataSource = new MatTableDataSource(this.usersData);
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim();
 }

}