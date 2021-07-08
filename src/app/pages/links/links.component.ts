import { Component, OnInit } from '@angular/core';
import { Socials } from 'src/assets/data/social-links/socials.Socials';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    public socials: Socials[] = [];

  constructor(
    private _linksService: LinksService
  ) { }

  ngOnInit(): void {
    this.socials = this._linksService.getSocialMedia();
    console.log(this.socials);
  }

  goToLink(social: Socials): void {
    window.open(social.links);
  }

}
