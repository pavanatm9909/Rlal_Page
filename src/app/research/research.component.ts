import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  isValid: boolean | undefined;
  research_desc: any;
  research_name: any;
  research_data = [{
    name: "Safety Verification",
    description: "Safety is an important challenge for the critical systems, specifically cyber physical systems (CPS), such as robots and drones. It becomes even more challenging when uncertainties are involved in CPS due to the disturbance in noise or sensor/actuator noise. Hence, our broad goal is to develop safety verification methods/tools for CPS using formal methods towards enabling the formal verification practical. Towards this, we have developed tool BEAVer: bounded error approximation based verifier for linear hybrid systems and networked linear hybrid systems, and tool ProCEGARVer: probabilistic counter-example guided abstraction refinement based verifier for probabilistic polyhedral hybrid systems."
  },
  {
    name: "Requirement Validation",
    description: "Cyber physical systems are commonly developed according to model-based design. Engineers use Verification-Validation (V-V) approach to implement the model-based design. In V-V approach, The requirement specification of CPS is divided into sub-requirements in top-down fashion, and the system is implemented and validated its requirement in bottom-up fashion. At any stage, if validation is failed, then one possibility is that the requirement may not be formulated correctly. Hence, our broad goal is to develop methods for identifying inconsistencies in the requirement prior to the development. Towards this,we have developed an automatic trace generation method which generates a set of satisfying and violating behaviors of the system with respect to its requirement. In the method, the requirement is expressed in the form of signal temporal logic (STL), which is a popular formalism of expressing continuous behaviors. The development of tool STLTraceGen: Signal Temporal Logic Trace Generator is under the process."
  },
  {
    name: "Optimal Path/Motion Planning for Autonomous Systems",
    description: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field."
  },
  {
    name: "Optimal Path/Motion Planning for Autonomous Systems",
    description: "Autonomous systems are popularly used in many applications, such as mail delivery, pesticide spraying, data collection from the crops, which are performed using autonomous vehicles, ground robots, and drones, respectively. Due to limited resources, these tasks are required to be performed in an optimal way. Hence, optimal path/motion for the autonomous systems save both energy and time. Towards this, we have developed an optimal multi-robot path planning and a time-optimal multi quad-rotor trajectory generation for pesticide spraying in an agricultural field. We have developed tools MRPPlaner: multi-robot path planer and MQTGen: multi quad-rotor trajectory generator for pesticide spraying in an agricultural field."
  }]
  constructor() { }

  ngOnInit(): void {
    this.isValid = true
    this.research_data = this.research_data;
  }

  ChangeToDetails(name: any, desc: any) {
    this.research_desc = desc;
    this.research_name = name;
    if (this.isValid) {
      this.isValid = false
    }
    else {
      this.isValid = true
    }
  }

}
