import { BrandTypeEnum } from '../types/common';
import { IBonus } from '../types/Bonus';

export const bonuses: IBonus[] = [
  {
    brand: BrandTypeEnum.cosmoswin,
    id: "CWS-Welcome",
    name: { en: "Cosmos Welcome", ar: "مرحباً بكم في كوزموس" },
    description: {
      en: "A welcome bonus for players who haven’t deposited yet.",
      ar: "مكافأة ترحيبية للاعبين الذين لم يودعوا بعد.",
    },
    requiresKYC: true,
    depositCountMin: 0,
    depositCountMax: 0,
  },
  {
    brand: BrandTypeEnum.cosmoswin,
    id: "CWS-OneTime",
    name: { en: "Cosmos One-Time Deposit", ar: "إيداع كوزموس لمرة واحدة" },
    description: {
      en: "Bonus for users with exactly 1 deposit and zero balance.",
      ar: "مكافأة للمستخدمين الذين لديهم إيداع واحد ورصيد صفر.",
    },
    requiresKYC: true,
    depositCountMin: 1,
    depositCountMax: 1,
    balanceMustBeZero: true,
  },
  {
    brand: BrandTypeEnum.cosmoswin,
    id: "CWS-NewcomerAdvantage",
    name: { en: "Newcomer Advantage", ar: "ميزة القادم الجديد" },
    description: {
      en: "For users with more than 3 deposits who registered within the last week.",
      ar: "للمستخدمين الذين قاموا بأكثر من 3 إيداعات وسجلوا خلال الأسبوع الماضي.",
    },
    requiresKYC: true,
    depositCountMin: 4,
    registrationWithinLastDays: 7,
  },
  {
    brand: BrandTypeEnum.cosmoswin,
    id: "CWS-SamuraiGift",
    name: { en: "Samurai's Gift", ar: "هدية الساموراي" },
    description: {
      en: "Exclusive bonus for users from Japan.",
      ar: "مكافأة حصرية للمستخدمين من اليابان.",
    },
    requiresKYC: true,
    depositCountMin: 0,
    availableCountries: ["Japan"],
  },
  {
    brand: BrandTypeEnum.betfinal,
    id: "BTF-Welcome",
    name: { en: "Betfinal Welcome", ar: "مرحباً بكم في بيتفاينال" },
    description: {
      en: "A welcome bonus for players who haven’t deposited yet.",
      ar: "مكافأة ترحيبية للاعبين الذين لم يودعوا بعد.",
    },
    requiresKYC: false,
    depositCountMin: 0,
    depositCountMax: 0,
  },
  {
    brand: BrandTypeEnum.betfinal,
    id: "BTF-OneShot",
    name: { en: "One-Shot Deposit Booster", ar: "تعزيز الإيداع لمرة واحدة" },
    description: {
      en: "Bonus for users with exactly 1 deposit and zero balance.",
      ar: "مكافأة للمستخدمين الذين لديهم إيداع واحد ورصيد صفر.",
    },
    requiresKYC: false,
    depositCountMin: 1,
    depositCountMax: 1,
    balanceMustBeZero: true,
  },
  {
    brand: BrandTypeEnum.betfinal,
    id: "BTF-WeekStarter",
    name: { en: "Week Starter", ar: "بداية الأسبوع" },
    description: {
      en: "For users with more than 3 deposits who registered within the last week.",
      ar: "للمستخدمين الذين قاموا بأكثر من 3 إيداعات وسجلوا خلال الأسبوع الماضي.",
    },
    requiresKYC: false,
    depositCountMin: 4,
    registrationWithinLastDays: 7,
  },
  {
    brand: BrandTypeEnum.betfinal,
    id: "BTF-JapanExclusive",
    name: { en: "Japan Exclusive", ar: "عرض حصري لليابان" },
    description: {
      en: "Exclusive bonus for users from Japan.",
      ar: "مكافأة حصرية للمستخدمين من اليابان.",
    },
    requiresKYC: false,
    depositCountMin: 0,
    availableCountries: ["Japan"],
  },
];