export type LanguageCode = "pt" | "en" | "es";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface ProductDetail {
  title: string;
  badge: string;
  price: string;
  strike: string;
  description: string;
  benefits: string[];
}

export interface CopyDatabase {
  topWarning: string;
  systemBadge: string;
  metaBadge: string;
  domainName: string;
  
  // Hero
  headline: string;
  subheadline: string;
  ctaButtonText: string;
  ctaSubText: string;
  videoSubtitle: string;

  // Before vs After Slider
  sliderTitle: string;
  sliderDesc: string;
  sliderPhoneLabel: string;
  sliderIpadLabel: string;
  sliderInstruction: string;

  // The Problem Section
  problemTitle: string;
  problemHeading: string;
  problemText1: string;
  problemText2: string;
  problemStat1Title: string;
  problemStat1Text: string;
  problemStat2Title: string;
  problemStat2Text: string;

  // Product Comparison Grid
  comparisonHeading: string;
  comparisonSub: string;
  ipadCardTitle: string;
  ipadCardDesc: string;
  ipadCardSpecs: string[];
  fpsCardTitle: string;
  fpsCardDesc: string;
  fpsCardSpecs: string[];

  // Pricing Table Section
  pricingHeading: string;
  pricingSub: string;
  bundleBadge: string;
  buyButtonText: string;

  // Product Cards
  products: {
    ipad: ProductDetail;
    fps: ProductDetail;
    bundle: ProductDetail;
  };

  // FAQs
  faqHeading: string;
  faqSub: string;
  faqs: FAQItem[];

  // Support
  supportTitle: string;
  supportHeading: string;
  supportDesc: string;
  supportButtonText: string;

  // Footer
  footerDisclaimer: string;
}
