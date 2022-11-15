import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  Honour_data = [{
    awardName: "Graduate Outstanding Publication Award",
    university: "Kansas State University",
    Year: 2021,
    price: ", ($500)"
  },
  {
    awardName: "Gattanni Outstanding Graduate Student Award",
    university: "Kansas State University",
    Year: 2019,
    price: ", ($1000)"
  },
  {
    awardName: "Graduate Outstanding Publication Award",
    university: "Kansas State University",
    Year: 2019,
    price: ", ($500)"
  },
  {
    awardName: "Graduate Outstanding Student Award",
    university: "Kansas State University",
    Year: 2019,
    price: null
  }]

  Travel_data = [{
    AwardDomain:"SSFT 2019",
    awardName: "Summer School on Formal Techniques",
    place: "California",
    price: ", ($600)"
  },
  {
    AwardDomain:"IEEE 2019",
    awardName: " Embedded Systems Week (ESWEEK)",
    place: "New York",
    price: ", ($1000)"
  },
  {
    AwardDomain:"GSC 2019",
    awardName: "Graduate Student Council",
    place: "Kansas State University",
    price: ", ($600)"
  },
  {
    AwardDomain:"ERGP 2018",
    awardName: " Engineering Research and Graduate Programs",
    place: "Kansas State University",
    price: ", ($200)"
  },
  {
    AwardDomain:"MVD 2018",
    awardName: "Midwest Verification Day Workshop",
    place: "University of Iowa",
    price: ", ($300)"
  },
  {
    AwardDomain:"MVD 2016",
    awardName: "Midwest Verification Day Workshop",
    place: "Iowa State University",
    price: ", ($300)"
  },
  {
    AwardDomain:"Dagstuhl Seminar 2016",
    awardName: "Computer-Assisted Engineering for Robotics and Autonomous Systems",
    place: "Germany",
    price: ", (Funded by NSF)"
  },
  {
    AwardDomain:"Marktoberdorf 2016",
    awardName: "International Summer School",
    place: "Germany",
    price: ", ($1400)"
  },
  {
    AwardDomain:"VMW 2016",
    awardName: "Verification Mentoring Workshop",
    place: "Canada",
    price: ", ($600)"
  }]
  HonourDisplay = true
  TravelDisplay = true
  constructor() { }

  ngOnInit(): void {
  }

  Dishonour(){
    if(this.HonourDisplay){
      this.HonourDisplay = false
    }
    else{
      this.HonourDisplay = true
    }

  }
  DisTravel(){
    if(this.TravelDisplay){
      this.TravelDisplay = false
    }
    else{
      this.TravelDisplay = true
    }

  }

}
