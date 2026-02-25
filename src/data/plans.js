export const plans = [
  {
    id: 'glow-facial',
    name: 'Glow Facial',
    price: 499,
    duration: '45 mins',
    shortDescription: 'Rejuvenate your skin with our signature glow facial',
    description: 'Experience the ultimate skin rejuvenation with our Glow Facial. This treatment is designed to cleanse, exfoliate, and nourish your skin, leaving you with a radiant, healthy glow.',
    includes: [
      'Deep cleansing',
      'Scrub',
      'Face massage',
      'Face pack',
      'Moisturizer'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400'
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
      'Hair wash'
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
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    price: 799,
    duration: '90 mins',
    shortDescription: 'Complete hand and foot care for beautiful nails',
    description: 'Treat your hands and feet to our premium Manicure & Pedicure service. Enjoy complete nail care with relaxing massage and beautiful polish.',
    includes: [
      'Nail shaping',
      'Cuticle care',
      'Massage',
      'Polish'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400'
    ],
    popular: false
  },
  {
    id: 'bridal-glow-package',
    name: 'Bridal Glow Package',
    price: 2499,
    duration: '4 hours',
    shortDescription: 'Complete bridal makeover for your special day',
    description: 'Look absolutely stunning on your special day with our comprehensive Bridal Glow Package. This all-inclusive package ensures you look and feel your best.',
    includes: [
      'Full facial',
      'Hair spa',
      'Manicure & pedicure',
      'Makeup',
      'Saree draping'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400'
    ],
    popular: true
  }
];

export const addOns = [
  {
    id: 'eyebrow-upperlip',
    name: 'Eyebrow + Upper Lip',
    price: 99
  },
  {
    id: 'head-massage',
    name: 'Head Massage',
    price: 199
  },
  {
    id: 'hair-spa-addon',
    name: 'Hair Spa Add-on',
    price: 499
  },
  {
    id: 'cleanup',
    name: 'Cleanup',
    price: 299
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    price: 399
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Very professional home service. Highly recommended! The facial was amazing and Tanuja is very skilled.'
  },
  {
    id: 2,
    name: 'Lakshmi Reddy',
    rating: 5,
    text: 'Excellent service at home. Very convenient and the results are fantastic. Will definitely book again!'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 5,
    text: 'Best home salon service in Vizag! Professional, hygienic, and affordable. Loved the bridal package!'
  }
];

export const serviceAreas = [
  'Tuni',
  'Payakaraopeta',
  'Managavaram',
  'Kakinada',
  'Rajahmundry',
  'Vizag'
];
