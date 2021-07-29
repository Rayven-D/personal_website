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
    try{
      const fetched = await this._apiService.getGithubRepos();
      fetched.forEach( (elem) => {
        this.repos.push({
          name: elem.name.split(/[\s-_]/).map((word:any) => word.charAt(0).toUpperCase() + word.substring(1)).join(" "),
          url: elem.html_url,
        })
      })
      this.reposLoaded = true;
    }catch(err){
      this.errorEncounterd = true;
      this.reposLoaded = true;
    }
  }

  public navToRepo(url:string){
    console.log(url)
    window.open(url, "_blank")
  }

}
