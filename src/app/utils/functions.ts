export type IconsSVGNames = 'github' | 'location' | 'linkedin' | 'mail' | 'phone';

export const getIconAssetInfos = (imgName: IconsSVGNames): { src: string; alt: string } => {
  return { src: `assets/images/icons/${imgName}.svg`, alt: `${imgName}-icon` };
};

export const cleanUTCDateObj = (dateString: string): Date => {
  return new Date(dateString + 'T00:00:00.000');
};
