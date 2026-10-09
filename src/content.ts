
export interface ImageEntry {
  file: string
  alt: string
  photographer: string
}

export interface MenuItem {
  name: string
  description: string
  price: number
}

export interface OpeningRow {
  day: string
  hours: string
}
export const theme = {
  beige: '#F4EBDD',
  cream: '#FBF6EE', 
  sand: '#E8D9C3',
  terracotta: '#9E4423',
  terracottaDark: '#7E3519',
  brown: '#2E1F17',
  brownMuted: '#5C4636',
  line: '#D9C6AA',
}

export const site = {
  name: 'Café Kardemumma (Demo)',
  footerText: 'Demo, inte ett riktigt företag',

  hero: {
    heading: 'Doften av nybakat och kardemumma',
    subheading:
      'Ett litet kafé i Malmö med hembakat bröd, riktigt bra kaffe och gott om tid.',
    ctaLabel: 'Boka bord',
    ctaHref: '#kontakt',
  },

  menu: {
    heading: 'Meny',
    intro: 'Vi bakar varje morgon. När det är slut är det slut.',
    items: [
      {
        name: 'Kardemummabulle',
        description: 'Vår husfavorit, bakad med mycket kardemumma och pärlsocker.',
        price: 38,
      },
      {
        name: 'Kanelbulle',
        description: 'Mjuk och saftig, gräddad tills kanten är lite knaprig.',
        price: 36,
      },
      {
        name: 'Filterkaffe',
        description: 'Medelrostat, med gratis påfyllning.',
        price: 34,
      },
      {
        name: 'Cappuccino',
        description: 'Dubbel espresso, ångad mjölk och ett tjockt lager skum.',
        price: 45,
      },
      {
        name: 'Chai latte',
        description: 'Hemgjord kryddblandning med kardemumma, kanel och ingefära.',
        price: 48,
      },
      {
        name: 'Surdegsmacka',
        description: 'Getost, rödbetor, valnötter och honung på nybakat surdegsbröd.',
        price: 89,
      },
      {
        name: 'Dagens soppa',
        description: 'Serveras med bröd och smör. Fråga i kassan vad som kokar idag.',
        price: 99,
      },
      {
        name: 'Chokladkaka med havssalt',
        description: 'Tät, mörk och lite sältande. Gärna till kaffet.',
        price: 42,
      },
    ] satisfies MenuItem[],
  },

  openingHours: {
    heading: 'Öppettider',
    todayLabel: 'Idag',
    note: 'Kom gärna en stund innan stängning, vi plockar undan kvart i.',
    days: [
      { day: 'Måndag', hours: '07:30-17:00' },
      { day: 'Tisdag', hours: '07:30-17:00' },
      { day: 'Onsdag', hours: '07:30-17:00' },
      { day: 'Torsdag', hours: '07:30-19:00' },
      { day: 'Fredag', hours: '07:30-19:00' },
      { day: 'Lördag', hours: '09:00-17:00' },
      { day: 'Söndag', hours: '10:00-16:00' },
    ] satisfies OpeningRow[],
  },

  location: {
    heading: 'Hitta hit',
    addressLines: ['Demogatan 1', '211 22 Malmö'],
    description: 'Vi ligger en kort promenad från Lilla Torg. Ta bussen eller cykla, det finns cykelställ utanför dörren.',
    mapTitle: 'Karta över centrala Malmö där Café Kardemumma (Demo) skulle ligga',
    mapLinkLabel: 'Öppna större karta',
    map: { lat: 55.6076, lon: 13.0 },
  },

  contact: {
    heading: 'Boka bord',
    intro: 'Ring eller skicka ett mejl, så ordnar vi ett bord åt er.',
    phoneLabel: 'Telefon',
    phoneDisplay: '040-000 00 00',
    phoneHref: 'tel:+46400000000',
    emailLabel: 'E-post',
    email: 'hej@cafekardemumma.example',
    instagramLabel: 'Instagram',
    instagramHandle: '@cafekardemumma.demo',
    instagramUrl: 'https://www.instagram.com/cafekardemumma.demo',
  },
}

export const logo = {
  alt: 'Logotyp: en kaffekopp med kardemummaskida och blad som stiger ur ångan',
}

export const images = {
  hero: {
    file: 'hero',
    alt: 'En kopp kaffe samt kaffebönor sedd uppifrån på ett träbord',
    photographer: 'sergey-kotenev', 
  },
  menuPastry: {
    file: 'menu-bulle',
    alt: 'Närbild på en nybakad kardemummabulle med pärlsocker',
    photographer: 'chris-curry',
  },
  menuCoffee: {
    file: 'menu-kaffe',
    alt: 'En kopp cappuccino med skummönster på ett träbord',
    photographer: 'jonas-jacobsson',
  },
} satisfies Record<string, ImageEntry>
