import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mainData } from 'src/app/data/data.config';
import { IconsSVGNames, getIconAssetInfos } from 'src/app/utils/functions';
@Component({
  selector: 'app-contacts-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts-bar.component.html',
  styleUrls: ['./contacts-bar.component.scss'],
})
export class ContactsBarComponent {
  readonly mailIconInfo = { url: mainData.contact.mail, ...getIconAssetInfos('mail') };
  readonly phoneIconInfo = { url: mainData.contact.phone, ...getIconAssetInfos('phone') };
  readonly socialContacts = mainData.contact.social.map((socialItem) => ({
    url: socialItem.url,
    ...getIconAssetInfos(socialItem.icon as IconsSVGNames),
  }));

  readonly allIconsArr = [this.mailIconInfo, this.phoneIconInfo, this.socialContacts].flat(1);
}
