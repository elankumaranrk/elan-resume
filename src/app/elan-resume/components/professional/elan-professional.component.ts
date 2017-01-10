import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'elan-professional',
    styleUrls:['./elan-professional.component.scss'],
    templateUrl: './elan-professional.component.html'
})
export class ElanProfessionalComponent implements OnInit {
      title:String = "Professional"
    constructor() { }

    ngOnInit() { }
}