import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { StepTemplateComponent } from '../../components/step-template/step-template.component';
import p5 from 'p5';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ StepTemplateComponent ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements AfterViewInit   {
  private p5!: p5;
  @ViewChild('stepCanvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    //this.draw();
    //this.p5 = new p5(this.sketch);
  }

  /*draw(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(10, 10, 50, 50);
    }
  }*/

  /*private sketch = (p: p5) => {
    p.preload = () => {};
  
    p.setup = () => {
      //p.createCanvas(p.windowWidth, p.windowHeight);
      p.createGraphics(p.windowWidth, p.windowHeight, this.canvas);
      p.background(220);
      p.line(0, 0, 200, 200);
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  
    let x = 0;
  
    p.draw = () => {
      if (x < 300) {
        p.ellipse(x, p.height / 2, 20, 20);
        x = x + 1;
      }
    };
  };*/
}
