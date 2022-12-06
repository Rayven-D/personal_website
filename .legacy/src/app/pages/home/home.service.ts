import { Injectable } from '@angular/core';
import { ProgLanguages } from 'src/assets/data/prog-languages/prog-languages.Languages';
import { LANGUAGES } from 'src/assets/data/prog-languages/prog-languages';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getLanguages(): ProgLanguages[]{
    return LANGUAGES;
  }
}
