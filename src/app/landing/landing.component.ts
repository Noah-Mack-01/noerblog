import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <div [classList]="['homepage-header']">
    <h2>My name is Noah. Welcome to my website.</h2>
    <p>I am a full stack software developer building Typescript & Java web applications. I enjoy writing, cooking and Jiu-Jitsu.</p>
    <p>When I have more to show  and/or document, this page will be more fruitful.</p>
    <p>For now, my socials are available by clicking on the below icons.</p>
  </div>
  `,
  styles: ``
})
export class LandingComponent {

}
