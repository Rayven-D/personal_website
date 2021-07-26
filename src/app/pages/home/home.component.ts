import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProgLanguages } from 'src/assets/data/prog-languages/prog-languages.Languages';
import { HomeService } from './home.service';
import { GlobalVars } from '../../common/global-vars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public test: number = 0;
  public languages: ProgLanguages[] = [];
  public languageInFocus: ProgLanguages | null = null;
  public showAllLanguages: boolean = GlobalVars.isMobile;
  public isMobile: boolean = GlobalVars.isMobile;

  constructor(
    private homeService: HomeService
    ) { }

  private getLanguages(): void{
    this.languages = this.homeService.getLanguages();
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  ngAfterViewInit() {
      const langCards = document.getElementsByClassName('language-card');  
      for(let i = 0; i < langCards.length; i++){
        langCards[i].setAttribute('style', `animation: fade-in 2s ${i * .2}s forwards;`)
      }
  }

  onClick() {
    this.test = (this.test + 7) % 8;
  }

}
