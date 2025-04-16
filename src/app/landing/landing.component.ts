import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <div [classList]="['homepage-header']">
    <h2 [classList]="'subtitled'">Noerkrieg</h2>
    <span [classList]="['subtitle']">noun | no • ur • kreeg</span>
    <ol>
      <li>A conflict of attrition between many parties with high costs and trivial reward.</li>
      <li>An inevitable yet tiresome contest of personality.</li>
    </ol>
    <h2>My name is Noah. Welcome to my website.</h2>
    <p>I am a full stack software developer writing in Typescript, Java and SQL. I enjoy writing, cooking, theology and BJJ.</p>
    <p>When I have more to show  and/or document, this page will be more fruitful.</p>
    <p>For now, my socials are available by clicking on the below icons.</p>
  </div>
  `,
  styles: ``
})
export class LandingComponent {

}
