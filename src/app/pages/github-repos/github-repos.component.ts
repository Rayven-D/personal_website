import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngAfterViewInit(): void {
    this.getMyRepos().then( () => {
      this.reposLoaded = true;
    }, () => {
      this.reposLoaded = true;
      this.errorEncounterd = true;
    });
  }

  
  public async getMyRepos(){
    fetch( GlobalVars.GITHUB_URL_BASE + "getRepos").then( (response) => {
      response.json().then( (data) => {
        data.forEach((info: any) => {
          this.repos.push({
            name: info.name.split(/[\s-_]/).map((word:any) => word.charAt(0).toUpperCase() + word.substring(1)).join(" "),
            url: info.html_url,
          })
        })
      }).catch( (error) => this.errorEncounterd = true)
    }).catch( (error) => {console.log("Failed to fetch repos:", error); this.errorEncounterd = true;})
  }

  public navToRepo(url:string){
    console.log(url)
    window.open(url, "_blank")
  }

}
