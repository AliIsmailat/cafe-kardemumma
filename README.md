# Café Kardemumma (Demo)

Demo-landningssida för ett påhittat kafé i Malmö. Caféet, adressen, telefonnumret och mejladressen är påhittade, och sidan är inte ett riktigt företag. Projektet visar hur en snabb, tillgänglig och lättanpassad sida för en liten lokal verksamhet kan se ut.

**Live:** _https://cafekardemumma.netlify.app_

## Funktioner

- Mobilen först, responsiv från små mobiler till stora skärmar
- Sektioner: hero, meny, öppettider, hitta hit (karta), kontakt och sidfot
- Knappen "Boka bord" leder till kontaktsektionen (kan bytas till en `mailto:`-länk)
- Dagens veckodag markeras i öppettiderna
- Inbäddad karta från OpenStreetMap, ingen API-nyckel behövs
- Semantisk HTML, tydliga fokusmarkeringar och tillräcklig färgkontrast

## Prestanda

Uppmätt med Lighthouse (mobil) på ett lokalt produktionsbygge:

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     98      |      100      |      100       | 92  |

Bilder skalas och konverteras till WebP vid bygget (max 1600 px bredd, flera storlekar via `srcset`). Alla bilder utom hero-bilden lazy-laddas.

## Teknik

- [Vite](https://vite.dev), [React](https://react.dev) och TypeScript
- [Tailwind CSS](https://tailwindcss.com) v3
- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) för bildoptimering
- Google Fonts (Fraunces och DM Sans)

## Komma igång

Du behöver Node.js installerat.

```bash
npm install
npm run dev
```

Öppna adressen som visas i terminalen, oftast `http://localhost:5173`.

Bygg och förhandsgranska produktionsversionen:

```bash
npm run build
npm run preview
```

## Projektstruktur

```
src/
├── content.ts          All kundspecifik data: texter, meny, tider, färger, bildnamn
├── App.tsx             Sätter ihop sektionerna i rätt ordning
├── index.css           Tailwind och grundstil
├── assets/             Bilder och logotyp
│   └── placeholders/   Platshållare som används tills riktiga bilder finns
└── components/
    ├── Hero.tsx
    ├── Menu.tsx
    ├── OpeningHours.tsx
    ├── Location.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── Picture.tsx     Visar bilder från content.ts (lazy loading, srcset, platshållare)
```

## Byta till en annan kund

All kundspecifik information ligger i `src/content.ts`. Sidan byts till en annan kund genom att ändra:

1. **Texter, meny, öppettider, adress och kontaktuppgifter** i `src/content.ts`.
2. **Färger** i `theme` i `src/content.ts`. Tailwind läser färgerna därifrån.
3. **Bilder:** lägg nya bilder i `src/assets/` med samma filnamn som i `images` i `content.ts` (`hero`, `menu-bulle`, `menu-kaffe`, med ändelsen .jpg, .png eller .webp). De ersätter platshållarna automatiskt.
4. **Logotyp:** byt ut `src/assets/logo.svg`.
5. **`<title>` och `<meta name="description">`** i `index.html`.

Skriv också in fotografens namn i `photographer` för varje bild, så visas de i sidfoten.

## Bildkrediter

Foton från [Unsplash](https://unsplash.com): sergey-kotenev, chris-curry och jonas-jacobsson.
