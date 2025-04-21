import { Component } from '@angular/core';
import { ListElement, ListElementComponent } from '../../shared/list-element/list-element.component';

@Component({
  selector: 'app-projects-list',
  imports: [ListElementComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  list?: ListElement[] = [
    {
      link: "https://github.com/meilisearch/meilisearch-java/pull/840",
      boldText: "Meilisearch Java Filter API",
      descriptionText: "JSON serialization/deserialization for backwards-compatible filtration configurations",
      timestamp: new Date(Date.parse("04/21/2025"))
    },
    {
    link: "https://github.com/Noah-Mack-01/mr-grep",
    boldText: "Map Reduce Grep",
    descriptionText: "Implementation of Google's 2004 distributed processing algorithm.",
    timestamp: new Date(Date.parse("2/01/2025"))
  },
  {
    link: "https://github.com/justagoodfriend/web-dev-final",
    boldText: "E-commerce MVP",
    descriptionText: "React and Node.js full stack application.",
    timestamp: new Date(Date.parse("5/01/2023"))
  },{
    link: "https://github.com/Noah-Mack-01/first-blockchain-project",
    boldText: "Blockchain implementation",
    timestamp: new Date(Date.parse("03/20/2025")),
    descriptionText: "SQLite repository layer for a blockchain service written in Go."
  }, {
    link: "https://github.com/Noah-Mack-01/derivatives-model",
    boldText: "Binomial Model API",
    timestamp: new Date(Date.parse("03/30/25")),
    descriptionText: "Kotlin and Spring API for calcualting the price of American stock options."
  }
].sort((a,b) => b.timestamp.getTime() - a.timestamp.getTime())
}
