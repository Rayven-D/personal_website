import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';
import { GithubRepos } from 'src/assets/data/github/github-repos';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {

  public repos: GithubRepos[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getMyRepos();
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
      })
    }).catch( (error) => console.log("Failed to fetch repos:", error))
  }

  public navToRepo(url:string){
    console.log(url)
    window.open(url, "_blank")
  }

}
