import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';
import { CertificationsComponent } from '../components/certifications/certifications.component';
import { EducationComponent } from '../components/education/education.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { WorkExperienceComponent } from '../components/work-experience/work-experience.component';
import { ExportableToolbarComponent } from '../components/exportable-toolbar/exportable-toolbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    CertificationsComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ExportableToolbarComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {}
