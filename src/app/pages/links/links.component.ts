import { AfterViewInit } from '@angular/core';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Socials } from 'src/assets/data/social-links/socials.Socials';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, AfterViewInit {

    public socials: Socials[] = [];

  constructor(
    private _linksService: LinksService
  ) { }

  ngOnInit(): void {
    this.socials = this._linksService.getSocialMedia();
  }

  ngAfterViewInit() {
    const linkCards = document.getElementsByClassName('link-card');  
    for(let i = 0; i < linkCards.length; i++){
      linkCards[i].setAttribute('style', `animation: fade-in 2s ${i * .2}s forwards;`)
    }
  }

  goToLink(social: Socials): void {
    window.open(social.links);
  }

}
