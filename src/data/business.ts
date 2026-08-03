export const business = {
  name: "TRIFIX",
  tagline: "Votre boutique mobile à Ixelles",
  address: {
    street: "Chaussée d'Ixelles 75",
    postalCode: "1050",
    locality: "Ixelles",
    country: "BE",
    full: "Chaussée d'Ixelles 75, 1050 Ixelles",
    plusCode: "R9P7+77 Ixelles",
  },
  geo: { latitude: 50.8357074, longitude: 4.3632378 },
  phone: {
    display: "0465 16 43 82",
    international: "+32 465 16 43 82",
    href: "tel:+32465164382",
  },
  links: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=50.8357074,4.3632378",
    location:
      "https://www.google.com/maps/search/?api=1&query=50.8357074%2C4.3632378",
    mapEmbed:
      "https://www.google.com/maps?q=50.8357074,4.3632378&hl=fr&z=17&output=embed",
  },
  hours: [
    { day: "Lundi", value: "09:30 – 19:00", closed: false },
    { day: "Mardi", value: "09:30 – 19:00", closed: false },
    { day: "Mercredi", value: "09:30 – 19:00", closed: false },
    { day: "Jeudi", value: "09:30 – 19:00", closed: false },
    { day: "Vendredi", value: "09:30 – 19:00", closed: false },
    { day: "Samedi", value: "09:30 – 19:00", closed: false },
    { day: "Dimanche", value: "Fermé", closed: true },
  ],
  hoursSummary: "Lun–Sam · 09:30–19:00",
  payments: [
    "Cartes de crédit",
    "Cartes de débit",
    "Paiements mobiles sans contact NFC",
  ],
  rating: { value: "5,0", count: 6, label: "5,0 sur Google · 6 avis" },
  nav: [
    { id: "accueil", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "avis", label: "Avis" },
    { id: "infos-pratiques", label: "Infos pratiques" },
  ],
  // Chemins d'images centralisés.
  // `logo` = marque officielle TRIFIX : ne jamais remplacer ni régénérer.
  // Les fichiers `temp-*` sont des photos d'illustration provisoires : il suffit
  // de remplacer ces chemins par les photographies réelles du client.
  images: {
    logo: "/images/logo-trifix.png",
    heroImage: "/images/trifix/temp-hero-boutique.webp",
    customerServiceImage: "/images/trifix/temp-conseil-client.webp",
    dataTransferImage: "/images/trifix/temp-transfert-donnees.webp",
    cosmeticsImage: "/images/trifix/temp-cosmetiques.webp",
  },
  reviews: [
    {
      author: "Fati Fati",
      text: "Souligne la variété des cosmétiques, les petits prix et une vendeuse sympathique et attentionnée.",
    },
    {
      author: "Gaelle Kubu",
      text: "Met en avant l’ambiance accueillante de la boutique et remercie M. Papito pour son service.",
    },
    {
      author: "Abdoul Mouslim Mahama",
      text: "Se dit satisfait de son Samsung Galaxy S25 Ultra, de l’accueil reçu et de l’aide au transfert de ses données.",
    },
    {
      author: "Syd Weaver",
      text: "Décrit une équipe sympathique et serviable.",
    },
    {
      author: "ZITA DJUIGNE",
      text: "Souligne un accueil chaleureux et un vendeur sympathique et souriant.",
    },
  ],
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  name: business.name,
  telephone: "+32465164382",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.postalCode,
    addressLocality: business.address.locality,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
  ],
};
