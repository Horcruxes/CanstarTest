import { EmployeesComponent } from './components/employees/employees.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { RouterModule, Routes} from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
