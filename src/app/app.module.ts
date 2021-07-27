import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CellSimulationComponent } from './pages/projects/cell-simulation/cell-simulation.component';
import { DiceGameComponent } from './pages/projects/dice-game/dice-game.component';
import { HealthcareComponent } from './pages/projects/healthcare/healthcare.component';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ApiProjectsComponent } from './pages/api-projects/api-projects.component';
import { GithubReposComponent } from './pages/github-repos/github-repos.component';
import { LoadingComponent } from './common/loading/loading.component';
import { MailingComponent } from './pages/links/mailing/mailing.component';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent,
    ResumeComponent,
    ProjectsComponent,
    CellSimulationComponent,
    DiceGameComponent,
    HealthcareComponent,
    ApiProjectsComponent,
    GithubReposComponent,
    LoadingComponent,
    MailingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
