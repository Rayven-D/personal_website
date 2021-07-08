import { Injectable } from '@angular/core';
import { Socials } from 'src/assets/data/social-links/socials.Socials';
import { SOCIALS } from 'src/assets/data/social-links/socials';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  getSocialMedia(): Socials[]{
    return SOCIALS;
  }
}
