export interface IUser {
  username: string;
  depositCount: number;
  registrationDate: string;
  country: string;
  isKYCApproved: boolean;
  currentBalance: number;
}