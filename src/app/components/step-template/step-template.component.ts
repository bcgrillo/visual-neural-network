import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-template',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './step-template.component.html',
  styleUrl: './step-template.component.scss'
})
export class StepTemplateComponent {
  @Input() previousStep: string | null = null;
  @Input() nextStep: string | null = null;
}
