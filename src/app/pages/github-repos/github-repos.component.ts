import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/common/api-controller.service';
import { GlobalVars } from 'src/app/common/global-vars';
import { GithubRepos } from 'src/assets/data/github/github-repos';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements AfterViewInit {

  public repos: GithubRepos[] = [];
  public reposLoaded: boolean = false;
  public errorEncounterd: boolean = false;

  constructor(
    private _apiService: ApiControllerService
  ) { }

  ngAfterViewInit(): void {
    this.getMyRepos();
  }

  
  public async getMyRepos(){
    this._apiService.getGithubRepos()
      .then( (data:any) => {
          data.forEach((info: any) => {
            this.repos.push({
              name: info.name.split(/[\s-_]/).map((word:any) => word.charAt(0).toUpperCase() + word.substring(1)).join(" "),
              url: info.html_url,
            });
          });
          this.reposLoaded = true;
      })
      .catch( () => {
        this.errorEncounterd = true;
        this.reposLoaded = true;
      })
  }

  public navToRepo(url:string){
    console.log(url)
    window.open(url, "_blank")
  }

}
