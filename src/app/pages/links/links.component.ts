import { Component, OnInit } from '@angular/core';
import { Socials } from 'src/assets/data/social-links/socials.Socials';
import { LinksService } from './links.service';
import { MatDialog } from '@angular/material/dialog';
import { MailingComponent } from './mailing/mailing.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    public socials: Socials[] = [];
    public mailingOpen: boolean = false;

  constructor(
    private _linksService: LinksService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.socials = this._linksService.getSocialMedia();
  }

  goToLink(social: Socials): void {
    window.open(social.links);
  }

  public openEmailDialog(){
    const dialogRef = this.dialog.open(MailingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
