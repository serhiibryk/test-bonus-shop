import { IBonus } from '../types/Bonus';
import { IUser } from '../types/User';

export const checkEligibilityReason = (bonus: IBonus, user: IUser): string | null => {
  const today = new Date();

  if (bonus.requiresKYC && !user.isKYCApproved) return 'KYC not approved';
  if (user.depositCount < bonus.depositCountMin) return 'Not enough deposits';
  if (bonus.depositCountMax !== undefined && user.depositCount > bonus.depositCountMax)
    return 'Too many deposits';
  if (bonus.balanceMustBeZero && user.currentBalance !== 0) return 'Balance must be zero';

  if (bonus.registrationWithinLastDays !== undefined) {
    const registrationDate = new Date(user.registrationDate);
    const daysSinceRegistration =
      (today.getTime() - registrationDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceRegistration > bonus.registrationWithinLastDays) return 'Too long since registration';
  }

  if (bonus.availableCountries && bonus.availableCountries.length > 0) {
    if (!bonus.availableCountries.includes(user.country)) return 'Not available in your country';
  }

  return null;
};
