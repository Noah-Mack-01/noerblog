import { Component } from '@angular/core';
import { ListElement, ListElementComponent } from '../../shared/list-element/list-element.component';

@Component({
  selector: 'app-projects-list',
  imports: [ListElementComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {

  list?: ListElement[] = [{
    link: "https://github.com/Noah-Mack-01/mr-grep",
    boldText: "Map Reduce Grep",
    descriptionText: "Implementation of Google's 2004 distributed processing algorithm.",
    timestamp: new Date(Date.parse("1/01/2025"))

  }]
}
