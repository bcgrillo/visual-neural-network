import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './steps/start-page/start-page.component';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';

export const routes: Routes = [
    { path: '', component: StartPageComponent },
    { path: 'step-1', component: StepOneComponent },
    { path: 'step-2', component: StepTwoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
