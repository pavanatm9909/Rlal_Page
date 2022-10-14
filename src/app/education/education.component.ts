import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Education_data = [{
    Degree: "Doctor of Philosophy (PhD) in Computer Science",
    UniUrl: "https://www.k-state.edu/",
    UniName: "Kansas State University, USA",
    Place: "Manhattan, KS, march 2016",
  },
  {
    Degree: "M.Tech in Computer Science",
    UniUrl: "https://www.isical.ac.in/",
    UniName: "Indian Statistical Institute, India",
    Place: "Kolkota, India, march 2014",
  },
  {
    Degree: "M.C.A in Computer Application",
    UniUrl: "http://www.mnnit.ac.in/",
    UniName: "Motilal Nehru National Institute of Technology, India",
    Place: "Allahabad, India, march 2010",
  },
  {
    Degree: "B.Sc in Mathematics and Statistics",
    UniUrl: "https://www.allduniv.ac.in/",
    UniName: "University of Allahabad, India",
    Place: "Allahabad, India, march 2003",
  },]

  constructor() { }

  ngOnInit(): void {
  }

}
