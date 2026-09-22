export type Page = 'home' | 'about' | 'services' | 'contact';

export interface BusinessDetails {
  readonly name: string;
  readonly category: string;
  readonly address: string;
  readonly street: string;
  readonly postalCode: string;
  readonly locality: string;
  readonly country: string;
  readonly phone: string;
  readonly phoneRaw: string;
  readonly phoneInternational: string;
  readonly reviews: string;
  readonly description: string;
}

export const BUSINESS_INFO: BusinessDetails = {
  name: 'Gaberell Elsbeth',
  category: 'Hair Salon',
  address: 'Lommiswilerstrasse 33, 4512 Bellach, Switzerland',
  street: 'Lommiswilerstrasse 33',
  postalCode: '4512',
  locality: 'Bellach',
  country: 'Switzerland',
  phone: '032 618 20 38',
  phoneRaw: '0326182038',
  phoneInternational: '+41 32 618 20 38',
  reviews: '0 listed',
  description: 'Local hairdressing service',
};

export interface ContactFormData {
  fullName: string;
  phone: string;
  preferredTiming: string;
  message: string;
  haircareInterest: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  message?: string;
}
