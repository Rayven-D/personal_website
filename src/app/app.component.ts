import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


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
  smallWidth: boolean = window.innerWidth < 850;
  isNavOpen: boolean = false;
  darkModeOn: boolean = true;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0
      },
      {
        label: 'Github Repos',
        link: './github-repos',
        index: 1
      }, 
      {
        label: 'Web Projects',
        link: './api-projects',
        index: 2
      }, 
      {
        label: 'Other Projects',
        link: './projects',
        index: 3
      },
      {
        label: 'Resume',
        link: './resume',
        index: 4
      }, {
        label: 'Links',
        link: './links',
        index: 5
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


    }else{
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementsByTagName("body")[0].classList.add('desktop')
      })

    }
  }

  public goHome(){
    this.router.navigate(["./home"]);
  }

  @HostListener('window:resize')
  public onResize(){
    this.smallWidth = window.innerWidth < 850;
  }

  public navOpen(event: any){
    this.isNavOpen = event;
  }

  public toggleDarkMode(){
    this.darkModeOn = !this.darkModeOn;
    if(this.darkModeOn)
      document.getElementsByTagName("body")[0].classList.add('dark');
    else
      document.getElementsByTagName("body")[0].classList.remove('dark');
 }

}
