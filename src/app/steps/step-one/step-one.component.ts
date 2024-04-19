import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepTemplateComponent } from '../../components/step-template/step-template.component';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [ RouterLink, StepTemplateComponent ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent {

}
