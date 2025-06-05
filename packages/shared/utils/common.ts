import { rtlLangs } from './consts';

export const getIsRtlDir = (lang: string): boolean => {
  return rtlLangs.includes(lang);
}