import { Component } from '@angular/core';
import { StepTemplateComponent } from '../../components/step-template/step-template.component';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [ StepTemplateComponent ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent {

}
