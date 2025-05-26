export interface ILocalizedText {
  [lng: string]: string;
}

export interface IBonus {
  brand: 'cosmoswin' | 'betfinal';
  id: string;
  name: ILocalizedText;
  description: ILocalizedText;
  requiresKYC: boolean;
  depositCountMin: number;
  depositCountMax?: number;
  balanceMustBeZero?: boolean;
  registrationWithinLastDays?: number;
  availableCountries?: string[];
}