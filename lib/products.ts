export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  downloadUrl: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: 'novabot-3days',
    name: 'NovaBot',
    description: '3 Days Access',
    price: 24.99,
    currency: 'EUR',
    duration: '3 Days',
    downloadUrl: 'https://gofile.io/d/Ug7EMd',
    features: [
      'Full bot access for 3 days',
      'All premium features included',
      'Priority support',
      'Auto-updates enabled'
    ]
  },
  {
    id: 'novabot-1week',
    name: 'NovaBot',
    description: '1 Week Access',
    price: 49.99,
    currency: 'EUR',
    duration: '1 Week',
    downloadUrl: 'https://gofile.io/d/Ug7EMd',
    features: [
      'Full bot access for 1 week',
      'All premium features included',
      'Priority support',
      'Auto-updates enabled'
    ]
  },
  {
    id: 'novabot-1month',
    name: 'NovaBot',
    description: '1 Month Access',
    price: 99.99,
    currency: 'EUR',
    duration: '1 Month',
    downloadUrl: 'https://gofile.io/d/Ug7EMd',
    features: [
      'Full bot access for 1 month',
      'All premium features included',
      'Priority support',
      'Auto-updates enabled'
    ],
    popular: true
  },
  {
    id: 'novabot-3months',
    name: 'NovaBot',
    description: '3 Months Access',
    price: 199.99,
    currency: 'EUR',
    duration: '3 Months',
    downloadUrl: 'https://gofile.io/d/Ug7EMd',
    features: [
      'Full bot access for 3 months',
      'All premium features included',
      'Priority support',
      'Auto-updates enabled',
      'Exclusive bot updates'
    ]
  },
  {
    id: 'novabot-lifetime',
    name: 'NovaBot',
    description: 'Lifetime Access',
    price: 384.99,
    currency: 'EUR',
    duration: 'Lifetime',
    downloadUrl: 'https://gofile.io/d/Ug7EMd',
    features: [
      'Lifetime bot access',
      'All premium features included',
      'Priority support',
      'Auto-updates enabled',
      'Exclusive bot updates',
      'Free future upgrades'
    ],
    badge: 'BEST VALUE'
  },
  {
    id: 't2-1month',
    name: 'T2',
    description: '1 Month Access',
    price: 49.99,
    currency: 'EUR',
    duration: '1 Month',
    downloadUrl: 'https://gofile.io/d/T2Download',
    features: [
      'Full bot access for 1 month',
      'Standard features',
      'Email support',
      'Regular updates'
    ]
  },
  {
    id: 't2-3months',
    name: 'T2',
    description: '3 Months Access',
    price: 99.99,
    currency: 'EUR',
    duration: '3 Months',
    downloadUrl: 'https://gofile.io/d/T2Download',
    features: [
      'Full bot access for 3 months',
      'Standard features',
      'Email support',
      'Regular updates'
    ]
  },
  {
    id: 't2-lifetime',
    name: 'T2',
    description: 'Lifetime Access',
    price: 199.99,
    currency: 'EUR',
    duration: 'Lifetime',
    downloadUrl: 'https://gofile.io/d/T2Download',
    features: [
      'Lifetime bot access',
      'Standard features',
      'Email support',
      'Regular updates',
      'Free future upgrades'
    ]
  }
];