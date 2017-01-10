import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'elan-resume',
    styleUrls:['./elan-resume.component.scss'],
    templateUrl: './elan-resume.component.html'
})
export class ElanResumeComponent implements OnInit {
    title:String = "Elankumaran Kuppusamy";
    constructor() { }

    ngOnInit() { }
}