import { IBonus } from '../types/Bonus';
import { IUser } from '../types/User';

export const filterBonuses = (bonuses: IBonus[], user: IUser, brand: string): IBonus[] => {
  const today = new Date();

  return bonuses.filter((bonus) => {
    if (bonus.brand !== brand) return false;
    if (bonus.requiresKYC && !user.isKYCApproved) return false;
    if (user.depositCount < bonus.depositCountMin) return false;
    if (bonus.depositCountMax !== undefined && user.depositCount > bonus.depositCountMax) return false;
    if (bonus.balanceMustBeZero && user.currentBalance !== 0) return false;

    if (bonus.registrationWithinLastDays !== undefined) {
      const registrationDate = new Date(user.registrationDate);
      const daysSinceRegistration =
        (today.getTime() - registrationDate.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceRegistration > bonus.registrationWithinLastDays) return false;
    }

    if (bonus.availableCountries && bonus.availableCountries.length > 0) {
      if (!bonus.availableCountries.includes(user.country)) return false;
    }

    return true;
  });
};
