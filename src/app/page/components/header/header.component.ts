import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mainData } from 'src/app/data/data.config';
import { getIconAssetInfos } from 'src/app/utils/functions';
import { ContactsBarComponent } from '../contacts-bar/contacts-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ContactsBarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly userData = mainData;
  readonly locationIconInfo = {
    url: `https://www.google.com/maps/place/${this.userData.location}`,
    ...getIconAssetInfos('location'),
    innerTxt: `${this.userData.location}, ${this.userData.country}`,
  };
  readonly mailIconInfo = { url: null, ...getIconAssetInfos('mail'), innerTxt: mainData.contact.mail };
  readonly phoneIconInfo = { url: null, ...getIconAssetInfos('phone'), innerTxt: mainData.contact.phone };

  readonly allIconInfos = [this.mailIconInfo, this.phoneIconInfo, this.locationIconInfo];
}
