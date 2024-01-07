import { Injectable, Signal, signal } from '@angular/core';
import { mainData } from 'src/app/data/data.config';
import { MainData } from 'src/app/data/types/dataconfig.model';
import { LanguagesAvailable, mDataTranslations } from 'src/app/data/types/languages.model';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly mainDataSignal = signal<MainData>(mainData);

  translateTo(languageDesired: LanguagesAvailable): void {
    this.mainDataSignal.update((mData) => {
      mData = { ...mData, ...mDataTranslations[languageDesired] };
      return mData;
    });
  }

  get getMDataSignal(): Signal<MainData> {
    return this.mainDataSignal;
  }

  translateToPTBR(): void {
    this.mainDataSignal.update((mData) => {
      mData.summary = 'Desenvolvedor Full Stack focado na solução de problemas';
      mData.country = 'Brasil';
      mData.about =
        'Ex-advogado transformado em desenvolvedor Full Stack. Minha formação jurídica me ajudou a me tornar um comunicador, analista de detalhes, uma pessoa empática e, em geral, um solucionador de problemas. Tenho o compromisso de me adaptar a todos os ambientes para entregar o meu melhor trabalho, tanto sozinho quanto em equipe. Atualmente, estou trabalhando principalmente com Angular, TypeScript, Java e Spring Boot. Tenho 2 anos de experiência trabalhando remotamente com essas tecnologias';
      return mData;
    });
  }

  translateToENUS(): void {
    this.mainDataSignal.update((mData) => {
      mData.summary = 'Full Stack developer focused on problem solving.';
      mData.country = 'Brazil';
      mData.about =
        "Former lawyer turned into a Full Stack developer. My legal background helped me become a communicator, detail analyst, an empathetic person and overall a problem solver. I'm commited to adapt on every environment and deliver my best work, both alone and as part of a team. Currently I'm working mostly with Angular, TypeScript, Java and Spring Boot. I have 2 years of experience working remotely with those techs";
      return mData;
    });
  }
}
