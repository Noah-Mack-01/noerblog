import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-portal',
  imports: [],
  templateUrl: './blog-portal.component.html',
  styles: ``
})
export class BlogPortalComponent implements OnInit {
  widgetScript?: HTMLScriptElement;
  script?: HTMLScriptElement 
  ngOnInit(): void {
    this.widgetScript = document.createElement('script');
    this.widgetScript.type = "text/javascript"
    this.widgetScript.innerHTML = `
      window.SubstackFeedWidget = {
      substackUrl: "noerkrieg.substack.com",
      posts: 10,
      colors: {
        primary: "#000000",
        secondary: "#000000",
        background: "#F3F7F0",
  } } `;

    this.script = document.createElement('script');
    let embeddedJS = "https://substackapi.com/embeds/feed.js";
    if (this.validateUrl(embeddedJS)) {
      this.script.src = embeddedJS;
      this.script.async = true;
      this.script.type = "text/javascript";
      document.body.appendChild(this.widgetScript)
      document.body.appendChild(this.script);
    }
  }

  private validateUrl(url: string): boolean {
    return (url.endsWith('substackapi.com/embeds/feed.js'))
  }
}