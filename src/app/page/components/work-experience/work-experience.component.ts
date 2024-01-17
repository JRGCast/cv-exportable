import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  tService = inject(TranslationService);
  readonly workExperiences = computed(() => this.tService.getMDataSignal().workExps);
}
