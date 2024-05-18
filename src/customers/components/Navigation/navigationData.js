export const navigation = {
  categories: [
    {
      id: 'medicine',
      name: 'Medicine',
      featured: [
        {
          name: 'Prescription Drugs',
          href: '/medicine/prescription_drugs',
          imageSrc: 'https://example.com/prescription_drugs.jpg',
          imageAlt: 'Prescription drugs',
        },
        {
          name: 'Over-the-Counter (OTC) Medications',
          href: '/medicine/otc_medications',
          imageSrc: 'https://example.com/otc_medications.jpg',
          imageAlt: 'Over-the-counter medications',
        },
      ],
      sections: [
        {
          id: 'generics',
          name: 'Generics',
          items: [
            { name: 'Painkiller', id : 'painkiller' },
            { name: 'Diabetes', id: 'diabetes' }, // Update the href to point to the correct URL
            { name: 'Asthma', href: '/medicine/generics/asthma' },
            { name: 'Allergies', href: '/medicine/generics/allergies' },
            { name: 'Pain Relief', href: '/medicine/generics/pain_relief' },
        ],
        },
        {
          id: 'categories',
          name: 'Categories',
          items: [
            { name: 'Vitamins & Supplements', href: '/medicines/vitamins_supplements' },
            { name: 'Cold & Flu', href: '/medicines/cold_flu' },
            { name: 'Digestive Health', href: '/medicines/digestive_health' },
            { name: 'Skin Care', href: '/medicines/skin_care' },
            { name: 'Eye Care', href: '/medicines/eye_care' },
          ],
        },
      ],
    },
    {
      id: 'medical_devices',
      name: 'Medical Devices',
      featured: [
        {
          name: 'Blood Pressure Monitors',
          href: '/',
          imageSrc: 'https://example.com/blood_pressure_monitors.jpg',
          imageAlt: 'Blood pressure monitors',
        },
        {
          name: 'Glucose Meters',
          href: '/',
          imageSrc: 'https://example.com/glucose_meters.jpg',
          imageAlt: 'Glucose meters',
        },
      ],
      sections: [
        {
          id: 'categories',
          name: 'Categories',
          items: [
            { name: 'Monitoring & Testing', href: '/medical_devices/monitoring_testing' },
            { name: 'Support & Braces', href: '/medical_devices/support_braces' },
            { name: 'Mobility Aids', href: '/medical_devices/mobility_aids' },
            { name: 'Respiratory Aids', href: '/medical_devices/respiratory_aids' },
            { name: 'Home Health Care', href: '/medical_devices/home_health_care' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],
};
