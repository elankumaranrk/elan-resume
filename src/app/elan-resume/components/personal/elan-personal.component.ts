import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'elan-personal',
    styleUrls:['./elan-personal.component.scss'],
    templateUrl: './elan-personal.component.html'
})
export class ElanPersonalComponent implements OnInit {
    title:String = "Personal"
    constructor() { }

    ngOnInit() { }
}