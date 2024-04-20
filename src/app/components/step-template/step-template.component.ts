import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { state, animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-step-template',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './step-template.component.html',
  styleUrl: './step-template.component.scss',
  animations: [
    trigger('contentAnimation', [
      state('inL', style({ opacity: 1, transform: 'translateX(0)' })),
      state('inR', style({ opacity: 1, transform: 'translateX(0)' })),
      state('outL', style({ opacity: 0 })),
      state('outR', style({ opacity: 0 })),
      transition('* => inL', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('0.3s ease-in-out')
      ]),
      transition('* => inR', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate('0.3s ease-in-out')
      ]),
      transition('* => outL', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateX(-10%)' })),
      ]),
      transition('* => outR', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateX(10%)' })),
      ])
    ])
  ]
})
export class StepTemplateComponent {
  @Input() previousStep: string | null = null;
  @Input() nextStep: string | null = null;

  leavingAnimationTriggered = false;
  leavingReverseAnimationTriggered = false;
  nextStepRoute = '';
  reverseAnimation: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Retrieve reverseAnimation flag from sessionStorage
    const storedReverseAnimation = sessionStorage.getItem('reverseAnimation');
    if (storedReverseAnimation) {
      this.reverseAnimation = storedReverseAnimation === 'true';
      // Clear stored reverseAnimation flag
      sessionStorage.removeItem('reverseAnimation');
    }
  }

  // Method to navigate to the specified route
  navigate(route: string, reverseAnimation: boolean = false): void {
    if (reverseAnimation) this.leavingReverseAnimationTriggered = true;
    else this.leavingAnimationTriggered = true;

    // Store reverseAnimation flag in sessionStorage
    sessionStorage.setItem('reverseAnimation', reverseAnimation.toString());
    this.nextStepRoute = route;

    setTimeout(() => {
      this.router.navigateByUrl(this.nextStepRoute);
    }, 300); // Adjust the timeout value to match the duration of your leaving animation
  }

  stateFunction(): string {
    if (this.leavingAnimationTriggered) {
      return 'outL';
    } else if (this.leavingReverseAnimationTriggered) {
      return 'outR';
    } else if (this.reverseAnimation) {
      return 'inR';
    } else {
      return 'inL';
    }
  }
}
