export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Recalde",
  alternateName: "David García Recalde",
  jobTitle: "Brand & Communication Strategist",
  url: "https://davidrecalde.com",
  sameAs: [
    "https://www.linkedin.com/in/davidrecalde/",
    "https://noda.tokyo",
    "https://supein.club",
  ],
  worksFor: {
    "@type": "Organization",
    name: "NODA.Tokyo",
    url: "https://noda.tokyo",
  },
  knowsLanguage: ["Spanish", "Japanese", "English"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tokyo",
    addressCountry: "JP",
  },
};
