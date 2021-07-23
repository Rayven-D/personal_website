import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVars } from './common/global-vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'rayven-website';
  navLinks: any[];
  activeLinkIndex = -1;
  isMobile = GlobalVars.isMobile;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0
      }, {
        label: 'Projects',
        link: './projects',
        index: 1
      }, {
        label: 'Resume',
        link: './resume',
        index: 2
      }, {
        label: 'Links',
        link: './links',
        index: 3
      }, {
        label: 'API Projects',
        link: './api-projects',
        index: 4
      }
    ]
  }

  ngOnInit(): void{
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementsByTagName("body")[0].classList.add('mobile');
      })
      GlobalVars.isMobile = true;
      this.isMobile = true;

    }else{
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementsByTagName("body")[0].classList.add('desktop')
      })
      GlobalVars.isMobile = false;
      this.isMobile = false;
    }
  }

}
