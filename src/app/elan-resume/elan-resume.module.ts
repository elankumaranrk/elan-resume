import { NgModule } from '@angular/core';

import { ElanResumeComponent }   from './containers/elan-resume.component';

import {ElanPersonalComponent} from './components/personal/elan-personal.component';
import {ElanProfessionalComponent} from './components/professional/elan-professional.component';

@NgModule({
    imports: [],
    exports: [ElanResumeComponent],
    declarations: [ElanResumeComponent, ElanPersonalComponent, ElanProfessionalComponent],
    providers: [],
})
export class ElanResumeModule { }
