import { Component, OnInit } from '@angular/core';
import { PUBLICATION } from 'src/interface/publications';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  years = ["All",2021, 2020, 2019, 2018, 2017, 2016, 2015]

  Publications_data = [{
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "",
    PubName: "Time-Optimal Multi-Quadrotor Trajectory Planning for Pesticide Spraying",
    Domain: "International Conference on Robotics and Automation (ICRA)",
    Year: 2021,
  },
  {
    Author: "Ratan Lal, Weikang Duan, and Pavithra Prabhakar",
    PubUrl: "https://iitjammu.ac.in/conferences/memocode2020/listofacceptedpapers.html",
    PubName: "Bayesian Statistical Model Checking for Continuous Stochastic Logic",
    Domain: "ACM-IEEE International Conference on Formal Methods and Models for System Design (MEMOCODE)",
    Year: 2020,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://esweek.org/program/",
    PubName: "Safety Analysis of Linear Discrete-time Stochastic Systems",
    Domain: "International Conference on Embedded Software (EMSOFT) (WIP)",
    Year: 2020,
  },
  {
    Author: "Daksh Shukla, Ratan Lal, Dustin Hauptman, Shawn S. Keshmiri, Pavithra Prabhakar and Nicole Beckage",
    PubUrl: "https://arc.aiaa.org/doi/abs/10.2514/6.2020-3093",
    PubName: "Flight Test Validation of a Safety-Critical Neural Network Based Longitudinal Controller for a Fixed-Wing UAS",
    Domain: "AIAA AVIATION",
    Year: 2020,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://dl.acm.org/doi/abs/10.1145/3359986.3361210",
    PubName: "Compositional construction of bounded error over-approximations of acyclic interconnected continuous dynamical systems",
    Domain: "ACM-IEEE International Conference on Formal Methods and Models for System Design (MEMOCODE)",
    Year: 2019,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://dl.acm.org/doi/abs/10.1145/3358217",
    PubName: "Counterexample guided abstraction refinement for polyhedral probabilistic hybrid systems",
    Domain: "ACM Transactions on Embedded Computing Systems (TECS), Accepted at EMSOFT",
    Year: 2019,
  },
  {
    Author: "Pavithra Prabhakar, Ratan Lal and James Kapinski",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/8603214",
    PubName: "Automatic Trace Generation for Signal Temporal Logic",
    Domain: "39th IEEE Real-Time Systems Symposium (RTSS)",
    Year: 2018,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://link.springer.com/chapter/10.1007/978-3-319-99154-2_15",
    PubName: "Bounded Verification of Reachability of Probabilistic Hybrid Systems",
    Domain: "International Conference on Quantitative Evaluation of Systems (QEST)",
    Year: 2018,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/8635976",
    PubName: "Hierarchical Abstractions for Reachability Analysis of Probabilistic Hybrid Systems",
    Domain: "Annual Allerton Conference on Communication, Control, and Computing (Allerton)",
    Year: 2018,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/8263997",
    PubName: "Safety Analysis using Compositional Bounded Error Approximations of Communicating Hybrid Systems",
    Domain: "IEEE Conference on Decision and Control (CDC)",
    Year: 2017,
  },
  {
    Author: "Ratan Lal, Ajay Sharda and Pavithra Prabhakar",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/8264538",
    PubName: "Optimal Multi-robot Path Planning for Pesticide Spraying in Agricultural Fields",
    Domain: "IEEE Conference on Decision and Control (CDC)",
    Year: 2017,
  },
  {
    Author: "Pavithra Prabhakar, Miriam Garcia Soto and Ratan Lal",
    PubUrl: "https://link.springer.com/chapter/10.1007/978-3-319-47169-3_61",
    PubName: "Verification Techniques for Hybrid Systems",
    Domain: "International Symposium, ISoLA ",
    Year: 2016,
  },
  {
    Author: "Pierre Ganty, Samir Genaim, Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/7340490",
    PubName: "From Non-Zenoness Verification to Termination",
    Domain: "ACM-IEEE International Conference on Formal Methods and Models for System Design (MEMOCODE)",
    Year: 2015,
  },
  {
    Author: "Ratan Lal and Pavithra Prabhakar",
    PubUrl: "https://ieeexplore.ieee.org/abstract/document/7318279",
    PubName: "Bounded error flowpipe computation of parameterized linear systems",
    Domain: "International Conference on Embedded Software (EMSOFT)",
    Year: 2015,
  },

  ]

  chosenMod: any;
  Pub_data!: PUBLICATION[]
  constructor() { }

  ngOnInit(): void {
    this.Pub_data = this.Publications_data
  }

  modo() {
    console.log(this.chosenMod)
    if (this.chosenMod == "All") {
      this.Pub_data = this.Publications_data
    }
    else {
      console.log("Hi")
      this.Pub_data = this.Publications_data.filter((e1) => {
        return e1.Year == Number(this.chosenMod)
      });
    }
  }

}
