export const serviceCategories = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    icon: '💇‍♀️',
    services: [
      { name: 'Hair Wash', price: 400 },
      { name: 'Hair Wash + Conditioner', price: 600 },
      { name: 'Hair Wash + Straight Blow Dry', price: 600 },
      { name: 'Hair Wash + Blow Dry Setting', price: 800 },
      { name: 'Temporary Ironing', price: 1200 },
      { name: 'Temporary Curlers', price: 1000, note: 'Starting' },
      { name: 'Tongs', price: 1500 }
    ]
  },
  {
    id: 'hair-spas',
    name: 'Hair Spas',
    icon: '🌿',
    services: [
      { name: 'Smoothening Hair Spa', price: 1800 },
      { name: 'Color Protect Hair Spa', price: 2000 },
      { name: 'Repairing Hair Spa', price: 1800 }
    ]
  },
  {
    id: 'scalp-treatments',
    name: 'Scalp Treatments',
    icon: '💆‍♀️',
    services: [
      { name: 'Collagen Treatment', price: 2000 },
      { name: 'Anti Dandruff Treatment', price: 2500 },
      { name: 'Hair Fall Treatment', price: 2500 },
      { name: 'Scalp Purifying', price: 2500 },
      { name: 'Scalp Soothing', price: 2500 }
    ]
  },
  {
    id: 'hair-colors',
    name: 'Hair Colors',
    icon: '🎨',
    services: [
      { name: 'Root Touch Up (Ammonia Free)', price: 1800 },
      { name: 'Full Hair Color', price: 2500 },
      { name: 'Global Color', price: 3000 }
    ]
  },
  {
    id: 'hair-color-techniques',
    name: 'Hair Color Techniques',
    icon: '✨',
    services: [
      { name: 'Fashion Color Per Foil (Streaks)', price: 400 },
      { name: 'Full Highlights', price: 3000 },
      { name: 'French Balayage', price: 4000 }
    ]
  },
  {
    id: 'hair-texture-women',
    name: 'Hair Texture (Women)',
    icon: '💁‍♀️',
    services: [
      { 
        name: 'Hair Straightening',
        variants: [
          { size: 'Short', price: 4500 },
          { size: 'Medium', price: 6000 },
          { size: 'Long', price: 6500 }
        ]
      },
      { 
        name: 'Hair Smoothening',
        variants: [
          { size: 'Short', price: 5500 },
          { size: 'Medium', price: 7000 },
          { size: 'Long', price: 9000 }
        ]
      },
      { 
        name: 'Keratin Treatment',
        variants: [
          { size: 'Short', price: 6000 },
          { size: 'Medium', price: 8000 },
          { size: 'Long', price: 12000 }
        ]
      },
      { 
        name: 'Hair Botox',
        variants: [
          { size: 'Short', price: 7000 },
          { size: 'Medium', price: 9000 },
          { size: 'Long', price: 13000 }
        ]
      }
    ]
  },
  {
    id: 'clean-ups',
    name: 'Clean Ups',
    icon: '✨',
    services: [
      { name: 'Clean Up', price: 600 },
      { name: 'Fruit Clean Up', price: 700 },
      { name: 'De-Tan Clean Up', price: 700 },
      { name: 'Herbal Clean Up', price: 900 },
      { name: 'Tightening Pack', price: 1000 },
      { name: 'Face & Neck De-Tan Pack', price: 1200 },
      { name: 'O3 De-Tan Pack', price: 1200 }
    ]
  },
  {
    id: 'de-tan',
    name: 'De-Tan',
    icon: '☀️',
    services: [
      { 
        name: 'Full Face',
        variants: [
          { type: 'Normal', price: 500 },
          { type: 'Premium', price: 800 }
        ]
      },
      { 
        name: 'Face & Neck',
        variants: [
          { type: 'Normal', price: 800 },
          { type: 'Premium', price: 1200 }
        ]
      },
      { 
        name: 'Back Neck',
        variants: [
          { type: 'Normal', price: 500 },
          { type: 'Premium', price: 800 }
        ]
      },
      { 
        name: 'Half Arms',
        variants: [
          { type: 'Normal', price: 700 },
          { type: 'Premium', price: 1000 }
        ]
      },
      { 
        name: 'Full Arms',
        variants: [
          { type: 'Normal', price: 800 },
          { type: 'Premium', price: 1200 }
        ]
      },
      { 
        name: 'Half Legs',
        variants: [
          { type: 'Normal', price: 1000 },
          { type: 'Premium', price: 1200 }
        ]
      },
      { 
        name: 'Full Legs',
        variants: [
          { type: 'Normal', price: 1200 },
          { type: 'Premium', price: 1500 }
        ]
      },
      { 
        name: 'Full Body',
        variants: [
          { type: 'Normal', price: 3000 },
          { type: 'Premium', price: 4500 }
        ]
      }
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing',
    icon: '🕯️',
    services: [
      { name: 'Upper Lip', prices: [70, 150, 200] },
      { name: 'Chin', prices: [70, 100, 200] },
      { name: 'Side Locks', prices: [100, 150, 250] },
      { name: 'Forehead', prices: [100, 150, 250] },
      { name: 'Full Face', prices: [200, 300, 450] },
      { name: 'Under Arms', prices: [200, 300, 400] },
      { name: 'Half Arms', prices: [500, 400, 400] },
      { name: 'Full Arms', prices: [500, 700, 550] },
      { name: 'Half Legs', prices: [600, 700, 800] },
      { name: 'Full Legs', prices: [800, 1000, 1300] },
      { name: 'Full Body', prices: [2000, 2500, 3500] }
    ]
  },
  {
    id: 'manicure',
    name: 'Manicure',
    icon: '💅',
    services: [
      { name: 'Nail Cut + File', price: 80 },
      { name: 'Nail Cut + File + Nail Polish', price: 120 },
      { name: 'Regular Manicure', price: 350 },
      { name: 'French Manicure', price: 500 },
      { name: 'Radiant Manicure', price: 600 },
      { name: 'Spa Manicure', price: 700 },
      { name: 'Crystal Manicure', price: 850 },
      { name: 'Ice Cream Manicure', price: 1500 }
    ]
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    icon: '🦶',
    services: [
      { name: 'Nail Cut + File', price: 80 },
      { name: 'Nail Cut + Filing + Nail Polish', price: 120 },
      { name: 'Regular Pedicure', price: 600 },
      { name: 'French Pedicure', price: 800 },
      { name: 'Radiant Pedicure', price: 900 },
      { name: 'Spa Pedicure', price: 1000 },
      { name: 'Crystal Pedicure', price: 1200 },
      { name: 'Heel Peel', price: 1500 },
      { name: 'Ice Cream Pedicure', price: 2200 }
    ]
  },
  {
    id: 'premium-clean-ups',
    name: 'Premium Clean Ups',
    icon: '⭐',
    services: [
      { name: 'Purify For Oil Control', price: 1000 },
      { name: 'Moisture Balance For Hydration', price: 1000 },
      { name: 'White & Bright For Brightening', price: 1200 },
      { name: 'Youth Revival For Anti Ageing', price: 1200 },
      { name: 'Rejuvenating For Rejuvenation', price: 1200 }
    ]
  },
  {
    id: 'regular-facials',
    name: 'Regular Facials',
    icon: '🌸',
    services: [
      { name: 'Mixed Fruit Facial', price: 1000 },
      { name: 'De-Tan Facial', price: 1000 },
      { name: 'Herbal Facial', price: 800 },
      { name: 'Oxy Blast', price: 1200 },
      { name: 'Clary Glow', price: 1500 }
    ]
  },
  {
    id: 'facials',
    name: 'Facials',
    icon: '💎',
    services: [
      { name: 'Acne Facial', price: 2000 },
      { name: 'Vita Lift', price: 2000 },
      { name: 'Fairness Facial', price: 2000 },
      { name: 'Gold Facial', price: 2000 },
      { name: 'Silver Facial', price: 2200 },
      { name: 'Pearl Facial', price: 2200 },
      { name: 'Diamond Facial', price: 2200 },
      { name: 'Anti-Aging', price: 2500 },
      { name: 'Pigmentation Facial', price: 2500 },
      { name: 'Whitening & Brightening', price: 2500 },
      { name: '4 Layer Facial', price: 2500 },
      { name: 'Vitamin C Facial', price: 2500 },
      { name: 'O3 + Whitening', price: 2500 },
      { name: 'Bridal Facial', price: 3000 },
      { name: 'Saffron Facial', price: 1500 }
    ]
  },
  {
    id: 'premium-facials',
    name: 'Premium Facials',
    icon: '👑',
    services: [
      { name: 'Gloss It For Hydration & Glow', price: 2000 },
      { name: 'Brightening Up', price: 2000 },
      { name: 'Energize For Anti Pollution', price: 2000 },
      { name: 'Mango Mousse For Smoothing', price: 2000 },
      { name: 'Define For Firming', price: 2000 },
      { name: 'Pomegranate For Radiance', price: 2500 },
      { name: 'Ultra Bright For Ultimate Glow', price: 2500 }
    ]
  },
  {
    id: 'skin-treatments',
    name: 'Skin Treatments',
    icon: '🧴',
    services: [
      { name: 'Face Color Impairment', price: 3000 },
      { name: 'Pimples & Acne Control', price: 3000 },
      { name: 'Pigment Perfector (Per Sitting)', price: 3500 },
      { name: 'Hydra Facial Treatment (Per Sitting)', price: 5500 },
      { name: 'Ageing & Face Lifting', price: 3500 },
      { name: 'BB Glow Treatment', price: 3500 },
      { name: 'Under Eye & Dark Circle', price: 2000 },
      { name: 'Underarms Lightening', price: 2000 },
      { name: 'Melasma Treatment', price: 5000 }
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    icon: '💄',
    services: [
      { name: 'Eye Makeup', price: 1500 },
      { name: 'Light Makeup', price: 2500 },
      { name: 'Party Makeup', price: 3500 },
      { name: 'Bridal Makeup', price: 9000, note: 'Starting' },
      { name: 'Glossy Makeup', price: 15000 }
    ]
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    icon: '🎨',
    services: [
      { name: 'Arabic Per Side', price: 200 },
      { name: 'Bridal Mehendi', price: 3500 }
    ]
  },
  {
    id: 'saree-draping',
    name: 'Saree Draping',
    icon: '👗',
    services: [
      { name: 'Normal Saree Draping', price: 500 },
      { name: 'Bridal Saree Draping', price: 1000 },
      { name: 'Bengali Style Draping', price: 1500 },
      { name: 'North Style Draping', price: 1500 }
    ]
  },
  {
    id: 'hair-styles',
    name: 'Hair Styles',
    icon: '💇',
    services: [
      { name: 'Party Hair Style', price: 1000 },
      { name: 'Messy Hair Style', price: 1000 },
      { name: 'Bride Hair Style', price: 1500 }
    ]
  },
  {
    id: 'head-massage',
    name: 'Head Massage',
    icon: '💆',
    services: [
      { name: 'Coconut Oil', price: 600 },
      { name: 'Mint (Cooling)', price: 700 },
      { name: 'Aloe Vera Oil', price: 700 },
      { name: 'Almond Oil', price: 800 },
      { name: 'Olive Oil', price: 800 },
      { name: 'Aroma', price: 800 }
    ]
  },
  {
    id: 'piercing',
    name: 'Piercing',
    icon: '💫',
    services: [
      { name: 'Gun Shot', price: 500 },
      { name: 'Mole Removal', price: 500 }
    ]
  },
  {
    id: 'nail-extensions',
    name: 'Nail Extensions',
    icon: '💅',
    services: [
      { name: 'Gel Nail Extension', price: 'Contact' },
      { name: 'Acrylic Nail Extension', price: 'Contact' },
      { name: 'Nail Extension Removing', price: 'Contact' },
      { name: 'Nails Refilling', price: 'Contact' },
      { name: 'Gel Polishing', price: 'Contact' },
      { name: 'Gel Polish Removing', price: 'Contact' }
    ]
  },
  {
    id: 'eyelash-extensions',
    name: 'Eye Lash Extensions',
    icon: '👁️',
    services: [
      { name: 'Classic Volume', price: 'Contact' },
      { name: 'Hybrid Volume', price: 'Contact' },
      { name: 'Russian Volume', price: 'Contact' },
      { name: 'Mega Volume', price: 'Contact' }
    ]
  },
  {
    id: 'hair-extensions',
    name: 'Hair Extensions',
    icon: '💇‍♀️',
    services: [
      { name: 'Nano Ring Hair Extension', price: 'Contact' },
      { name: 'Micro Ring Hair Extension', price: 'Contact' },
      { name: 'Glue Hair Extension', price: 'Contact' }
    ]
  },
  {
    id: 'cosmetology',
    name: 'Cosmetology Treatment',
    icon: '🔬',
    services: [
      { name: 'Hair PRP', price: 'Contact' },
      { name: 'Chemical Peels', price: 'Contact' },
      { name: 'Mole Removal', price: 'Contact' },
      { name: 'Microneedling', price: 'Contact' },
      { name: 'Laser Hair Removal', price: 'Contact' },
      { name: 'Laser Skin Rejuvenation', price: 'Contact' },
      { name: 'Warts & Skin Tags Removal', price: 'Contact' }
    ]
  }
];

export const mensServices = {
  id: 'mens-services',
  name: "Men's Services",
  icon: '👨',
  categories: [
    {
      name: 'Haircut',
      services: [
        { name: 'Basic', price: 200 },
        { name: 'Advance', price: 300 },
        { name: 'Shave', price: 100 },
        { name: 'Beard Trim', price: 150 }
      ]
    },
    {
      name: 'Colours',
      services: [
        { name: 'Highlight Per Streak', price: 250 },
        { name: 'Beard Mustache (With Ammonia)', price: 300 },
        { name: 'Beard Mustache (Ammonia Free)', price: 500 },
        { name: 'Hair Colour (With Ammonia)', price: 800 },
        { name: 'Hair Colour (Ammonia Free)', price: 1000 }
      ]
    },
    {
      name: 'Hair Treatments',
      services: [
        { name: 'Deep Conditioning', price: 1000 },
        { name: 'Hair Spa', price: 1000 },
        { name: 'Dandruff Treatment', price: 1500 },
        { name: 'Anti Hair Loss Treatment', price: 1500 }
      ]
    }
  ]
};
