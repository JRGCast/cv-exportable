import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { mainData } from 'src/app/data/data.config';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { IconsSVGNames, getIconAssetInfos } from 'src/app/utils/functions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  tService = inject(TranslationService);
  readonly userData = computed(() => this.tService.getMDataSignal());
  readonly locationIconInfo = {
    url: `https://www.google.com/maps/place/${this.userData().location}`,
    ...getIconAssetInfos('location'),
    innerTxt: `${this.userData().location}, ${this.userData().country}`,
  };
  readonly mailIconInfo = { url: `mailto:${mainData.contact.mail}`, ...getIconAssetInfos('mail'), innerTxt: mainData.contact.mail };
  readonly phoneIconInfo = { url: null, ...getIconAssetInfos('phone'), innerTxt: mainData.contact.phone };
  readonly socialContacts = mainData.contact.social.map((socialItem) => ({
    url: socialItem.url,
    innerTxt: socialItem.url,
    ...getIconAssetInfos(socialItem.icon as IconsSVGNames),
  }));

  readonly allIconInfos = [this.mailIconInfo, this.phoneIconInfo, this.socialContacts, this.locationIconInfo].flat(1);
}
