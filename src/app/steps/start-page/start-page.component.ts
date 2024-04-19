import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepTemplateComponent } from '../../components/step-template/step-template.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ RouterLink, StepTemplateComponent ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit  {
  @ViewChild('stepCanvas') canvas: ElementRef<HTMLCanvasElement> | null = null;

  ngOnInit(): void {
    this.draw();
  }

  draw(): void {
    if (this.canvas) {
      const ctx = this.canvas.nativeElement.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 50, 50);
      }
    }
  }
}
