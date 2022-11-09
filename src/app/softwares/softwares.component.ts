import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css']
})
export class SoftwaresComponent implements OnInit {
  isValid: boolean | undefined;
  software_info: any;
  software_name: any;
  software_data = [{
    name: "Bearcat Bulleting",
    description: "University web site",
    info: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field.",
    source: ""
  },
  {
    name: "News App",
    description: "new updates",
    info: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field.",
    source: ""
  },
  {
    name: "Optimal Path/Motion Planning for Autonomous Systems",
    description: "Description",
    info: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field.",
    source: ""
  },
  {
    name: "Optimal Path/Motion Planning for Autonomous Systems",
    description: "Description",
    info: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field.",
    source: ""
  }]

  constructor() { }

  ngOnInit(): void {
    this.isValid = true
    this.software_data = this.software_data;
  }

  ChangeToDetails(name: any, info: any) {
    this.software_info = info;
    this.software_name = name;
    if (this.isValid) {
      this.isValid = false
    }
    else {
      this.isValid = true
    }
  }

}
