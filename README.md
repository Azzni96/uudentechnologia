# 3D-näytöks sovellus

Tämä on **Next.js-projekti**, joka on luotu `create-next-app`-työkalulla. Projektin pääominaisuudet:

## 📋 Pääsivun rakenne
- **3D-näytös** (`Scene`-komponentti) - Lataa dynaamisesti ilman palvelinpuolen renderöintiä
- **Tietopaneeli** (`InfoPanel`) - Näytetään oikealla puolella
- **Virhesuoja** (`ErrorBoundary`) - Hallitsee sovelluksen virheet

## 🎨 Ulkoasu
- Pimeä teema: liukuväri harmaasta mustaan
- Responsiivinen asettelu (mobiili ja pöytäkone)
- Täysikorkea näkymä ilman vierityspalkissa

## ⚙️ Toiminta
- **Avaus/sulkeminen** - Paneeli avautuu ja sulkeutuu
- **Kääntäminen** - 3D-objektia voidaan kääntää
- Latausindikattori spinnerinä kun 3D-näytös latautuu

## 🚀 Käyttö

Kehityspalvelimen käynnistäminen:

```bash
npm run dev
# tai
yarn dev
# tai
pnpm dev
# tai
bun dev
```

Avaa [http://localhost:3000](http://localhost:3000) selaimessa nähdäksesi tuloksen.

## 📁 Tiedostorakenne
- `app/page.tsx` - Pääsivu
- `app/components/` - UI-komponentit (Badge, Button, Scene, jne.)
- `tailwind.config.ts` - Tyylittelysäännöt
- `next.config.ts` - Next.js-asetukset
- `public/` - Staattisen sisällön kansio

## 📚 Kehitys

Voit alkaa muokata sivua muuttamalla `app/page.tsx`-tiedostoa. Sivu päivittyy automaattisesti muokkaamisen yhteydessä.

Lisätietoja Next.js:stä:

- [Next.js dokumentaatio](https://nextjs.org/docs) - Next.js-ominaisuuksista ja API:sta
- [Learn Next.js](https://nextjs.org/learn) - interaktiivinen Next.js-opetusohjelma

## 🔧 Käytetyt tekniologiat

- **Next.js** - React-sovelluskehys
- **Tailwind CSS** - Utility-first CSS-kehys
- **Three.js** - 3D-grafiikkakirjasto
- **TypeScript** - Tyypitty JavaScript

## 🚀 Julkaiseminen Vercelissa

Helpoin tapa julkaista Next.js-sovelluksen on käyttää [Vercel-alustaa](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Katso lisätiedot [Next.js-julkaisemisen dokumentaatiosta](https://nextjs.org/docs/app/building-your-application/deploying).
