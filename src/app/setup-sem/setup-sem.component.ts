import { Component, OnInit } from '@angular/core';
import { setupCOLLEGE, setupCOURSE, setupSECTION } from '../types';

@Component({
  selector: 'app-setup-sem',
  templateUrl: './setup-sem.component.html',
  styleUrls: ['./setup-sem.component.css']
})
export class SetupSemComponent implements OnInit {
  collegeRowDef: string[] = ['id', 'name', 'dean','action'];
  collegeData: setupCOLLEGE[] = [{
    "id": 1,
    "name": "College of Engineering and Architecture",
    "dean": "ENGR.JULIUS C. CASTRO"
  }];

  courseRowDef: string[] = ['id', 'code', 'name','college','chairman','action'];
  courseData: setupCOURSE[] = [{
    "id": 1,
    "code": "BSCpE",
    "name": "Bachelor of Science in Computer Engineering",
    "college": "CEA",
    "chairman": "Engr. Roselle P. Cimagala"
  },
{
    "id": 2,
    "code": "BSEE",
    "name": "Bachelor of Science in Engineer Engineering",
    "college": "CEA",
    "chairman": "Engr. Myriam Polinar"
}];

sectionRowDef: string[] = ['id', 'section', 'course', 'year','action'];
sectionData: setupSECTION[]=[{
  "id": 1,
  "section": "BSCpE-4A",
  "course": "BSCpE",
  "year": 4
},
{
  "id": 2,
  "section": "BSCpE-4B",
  "course": "BSCpE",
  "year": 4
},
{
  "id": 3,
  "section": "BSCpE-3A",
  "course": "BSCpE",
  "year": 3
},
{
  "id": 4,
  "section": "BSCpE-3B",
  "course": "BSCpE",
  "year": 3
},
]

  constructor() { }

  ngOnInit(): void {
  }

}
