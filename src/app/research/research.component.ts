import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  isValid: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    this.isValid = true
  }

  ChangeToDetails() {
    if (this.isValid) {
      this.isValid = false
    }
    else {
      this.isValid = true
    }
  }

}
