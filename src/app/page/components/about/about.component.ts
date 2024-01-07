import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  tService = inject(TranslationService);
  aboutTxt = computed(() => this.tService.getMDataSignal().about);
}
