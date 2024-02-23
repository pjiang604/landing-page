//Components
interface IHeadline {
    headline: string,
    text: string
}

interface IFeaturesCard {
    featureName: string,
    featureDesc: string,
}

interface IReviewsCard {
    text: string,
    name: string,
    location: string
}

interface IPricingCard {
    tier: string;
    phrase: string;
    price: string;
    list1: string;
    list2: string;
    list3: string;
    list4?: string;
    list5?: string;
    large: boolean;
    monthly: string;
    splineUrl: string;
}

interface IGetStarted {
    text?: string
}

interface IAdvantagesCard{
  splineUrl: string;
  text: string;
}

declare module '@mui/material/styles' {
    interface Palette {
      custom: Palette['primary'];
    }
  
    interface PaletteOptions {
      custom?: PaletteOptions['primary'];
    }
  }

  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      custom: true;
    }
  }