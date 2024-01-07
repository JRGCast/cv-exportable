import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainData } from 'src/app/data/data.config';
import { IconsSVGNames, getIconAssetInfos } from 'src/app/utils/functions';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  readonly workExperiences = mainData.contact.social.map((socialItem) => ({
    url: socialItem.url,
    innerTxt: socialItem.url,
    ...getIconAssetInfos(socialItem.icon as IconsSVGNames),
  }));
}
