import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepTemplateComponent } from '../../components/step-template/step-template.component';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [ RouterLink, StepTemplateComponent ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent {

}
