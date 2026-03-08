export const plans = [
  {
    id: 'hydra-facial',
    name: 'Hydra Facial',
    price: 1999,
    originalPrice: 5999,
    duration: '60 mins',
    shortDescription: 'Advanced skincare treatment - Reveal fresh, glowing, hydrated skin',
    description: 'Experience our premium Hydra Facial treatment that provides deep cleansing, instant glow, and intense hydration. This advanced skincare procedure reduces fine lines, minimizes pores, and improves skin tone and elasticity.',
    includes: [
      'Deep Cleaning',
      'Vacuum-Assisted Microdermabrasion',
      'Nutrient-Rich Serum Infusion',
      'Intense Hydration',
      'Instant glow & smooth texture',
      'Reduces fine lines & pores'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400'
    ],
    popular: true
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Treatment',
    price: 2999,
    duration: '120 mins',
    shortDescription: 'Transform your hair with professional keratin smoothing',
    description: 'Get salon-quality smooth, shiny, and manageable hair with our professional Keratin Treatment. Perfect for frizzy and unmanageable hair.',
    includes: [
      'Deep cleansing shampoo',
      'Keratin application',
      'Heat sealing',
      'Blow dry & styling',
      'Lasts 3-4 months'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400'
    ],
    popular: false
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    price: 699,
    duration: '60 mins',
    shortDescription: 'Nourish and revitalize your hair with our luxurious spa treatment',
    description: 'Pamper your hair with our comprehensive Hair Spa treatment. This therapy deeply nourishes your hair, repairs damage, and promotes healthy hair growth.',
    includes: [
      'Oil massage',
      'Hair mask',
      'Steam treatment',
      'Hair wash',
      'Conditioning'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400'
    ],
    popular: false
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    price: 4999,
    duration: '3 hours',
    shortDescription: 'Perfect bridal look by certified makeup artist',
    description: 'Look absolutely stunning on your special day with our professional Bridal Makeup service by certified and experienced makeup artists. Complete bridal transformation for your big day.',
    includes: [
      'HD Bridal Makeup',
      'Hair styling',
      'Saree draping',
      'False lashes',
      'Airbrush makeup option',
      'Pre-bridal consultation'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400'
    ],
    popular: false
  },
  {
    id: 'hair-botox',
    name: 'Hair Botox',
    price: 3499,
    duration: '90 mins',
    shortDescription: 'Deep conditioning treatment for damaged hair',
    description: 'Restore your hair with our Hair Botox treatment. This intensive conditioning therapy repairs damage, adds shine, and makes hair smooth and manageable.',
    includes: [
      'Deep conditioning',
      'Protein treatment',
      'Moisture restoration',
      'Shine enhancement',
      'Frizz control'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400'
    ],
    popular: false
  },
  {
    id: 'balayage-hair-colour',
    name: 'Balayage Hair Colour',
    price: 3999,
    duration: '150 mins',
    shortDescription: 'Trendy hand-painted hair coloring technique',
    description: 'Get the perfect sun-kissed look with our Balayage hair coloring. This hand-painted technique creates natural-looking highlights and dimension.',
    includes: [
      'Consultation',
      'Hand-painted highlights',
      'Toning',
      'Hair treatment',
      'Styling'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400'
    ],
    popular: false
  }
];

export const addOns = [
  {
    id: 'threading',
    name: 'Threading (Eyebrow + Upper Lip)',
    price: 150
  },
  {
    id: 'head-massage',
    name: 'Head Massage',
    price: 199
  },
  {
    id: 'd-tan',
    name: 'D-Tan Treatment',
    price: 399
  },
  {
    id: 'cleanup',
    name: 'Cleanup Facial',
    price: 499
  },
  {
    id: 'waxing',
    name: 'Full Arms & Legs Waxing',
    price: 799
  },
  {
    id: 'beard-styling',
    name: 'Beard Styling (Men)',
    price: 299
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Amazing Hydra Facial experience at MODAK! My skin has never looked better. The staff is professional and the salon is very hygienic.'
  },
  {
    id: 2,
    name: 'Lakshmi Reddy',
    rating: 5,
    text: 'Best keratin treatment in Vizag! My hair is so smooth and manageable now. Highly recommend MODAK Natural Beauty Care!'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 5,
    text: 'The bridal makeup was perfect! The makeup artist is certified and very talented. Thank you MODAK for making my special day beautiful!'
  }
];

export const serviceAreas = [
  'Dondaparthy',
  'MVP Colony',
  'Seethammadhara',
  'Gajuwaka',
  'Madhurawada',
  'Vizag'
];

export const salonInfo = {
  name: 'MODAK Natural Beauty Care',
  tagline: 'Redefining Style, Beauty & Confidence',
  phone: '+91 63057 63388',
  address: '13, 1st Floor, D.No: 46-15 Diamond Park Road, Dondaparthy',
  city: 'Visakhapatnam',
  pincode: '530016'
};
