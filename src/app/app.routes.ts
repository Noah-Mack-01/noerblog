import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { LandingComponent } from './landing/landing.component';
import { BlogPortalComponent } from './blog/blog-portal.component';

export const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: 'projects', component: ProjectsListComponent},
  { path: 'blog', component: BlogPortalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
