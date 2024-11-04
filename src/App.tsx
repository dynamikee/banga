import React from 'react';
import Hero from './components/hero'; 
import TextAction from './components/text-action';
import ProductOverview from './components/product-overview'
import ImageGrid from './components/image-grid'
import ImageGridViewport from './components/image-grid-viewport'
import ContentFeature from './components/content-feature'
import ContentFeatureRight from './components/content-feature-right'
import SquareImageGrid from './components/square-image-grid'
import ProductPresentation from './components/product'
import Footer from './components/footer'

function App() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Hero />
      <TextAction 
        title="Det goda hantverket" 
        text="Vi värnar om det traditionella hantverket och tillverkar tidlösa knoppar och handtag som kommer älskas i generationer. Vi tror på småskalig produktion - fri från ytbehandlingar och kemiska processer - där kvalitet får ta tid med omtanke om både människor och miljö."
        buttonText="Kontakta oss"
      />
      <ProductOverview />
      
      {/* Image Grid */}
      <ImageGrid
        images={[
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ma%CC%88ssing.jpg?alt=media&token=f09539e4-3880-4b18-b948-04f6062c0488",
            alt: "Large Image Description",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF4204.jpg?alt=media&token=7c0128d3-5ce8-48e7-a472-9ef48eeb6d86",
            alt: "Small Image 1",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF4871.jpg?alt=media&token=d662d101-fd3f-4982-9c34-8c347424d368",
            alt: "Small Image 2",
          }
        ]}
      />

      {/* Content Feature */}
      <ContentFeature 
        headline="Hantverk med omsorg" 
        text="Alla handtag och knoppar gjuts för hand med gamla traditionella metoder. Vi gjuter i små serier där varje handtag får ett unikt utseende och särpräglad taktil känsla präglat av hantverket. <br><br> <block-quote class='custom-quote'> “Vi tror på att hantverk får ta tid. Det är i de långsamma processerna som den sanna skönheten och kvaliteten växer fram – och det är något som bidrar till livskvalitet för både oss och de som använder våra produkter.” - Mikael Mattsson, grundare</block-quote> 

        <br><br>Våra handtag bearbetas minimalt efter gjutningen och vi använder inga kemiska ämnen eller ytbehandlingar. Detta gör att våra handtag och knoppar kommer patineras naturligt och bli vackrare med åren, präglade av platsen och människorna som brukar dem. Våra handtag är gjorda för att gå i arv och älskas av kommande generationer. Det är vad vi kallar hållbarhet. "
        imageSrc="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ba%CC%8Anga%CC%8A%20hantverk%20produkt-40.jpg?alt=media&token=d2372001-9cc9-4d8e-9098-0848acecac1d"
      />

      <ContentFeatureRight 
        headline="Lokalt återbruk" 
        text="För oss är det ett måste att ta vara på de resurser som redan finns och ge dem ett nytt liv. Att arbeta med återvunnet material kräver tid och omsorg, både i att hitta och välja ut rätt material för varje gjutning, eftersom återvunnet material varierar mer. Men just detta ger också varje gjutning sin egen karaktär och historia. <br><br>Vi använder enbart metall som vi återvinner här på Gotland. Genom att arbeta lokalt undviker vi mellanhänder och långa transportsträckor, som ofta är en stor del av problemet med återvunnen metall på marknaden. När vi har kontroll över hela kedjan, från återvinning till färdig produkt, kan vi garantera att varje handtag tillverkas på ett hållbart sätt, med en djupare koppling till platsen där varje föremål tar form."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/tempImageaOSNG3.jpg?alt=media&token=83ff1ae1-2d16-49c5-9386-502eea06462f"
      />

      {/* Image Grid */}
      <ImageGrid
        images={[
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_6766.JPG?alt=media&token=ea623bca-4d15-4374-8716-09862a7e757e",
            alt: "Large Image Description",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_3366.JPG?alt=media&token=78048a88-edc0-430c-84ba-5440d681cd02",
            alt: "Small Image 1",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8430.JPG?alt=media&token=7d2f3642-9f73-4d17-ba49-04755cb3f971",
            alt: "Small Image 2",
          }
        ]}
      />


      <ContentFeature 
        headline="För kommande generationer" 
        text="Våra handtag och knoppar är skapade för att följa med genom livet. Deras skönhet växer med tiden, där varje dag av användning ger dem mer karaktär och liv. Vi låter materialen åldras naturligt, och istället för att se på det som något negativt, hyllar vi det som ett bevis på tidens gång. <br><br> Med åren får varje föremål en patina som berättar en egen historia – formad av platsen och människorna som använt det. Det är detta som ger våra produkter ett känslomässigt värde, långt bortom deras praktiska användning. När du håller i våra handtag, håller du i något som skapats för att vara med dig länge och bli en del av ditt hem och din historia."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ma%CC%88ssing.jpg?alt=media&token=f09539e4-3880-4b18-b948-04f6062c0488"
      />
      <ContentFeatureRight 
        headline="Beställningsvaror utan slöseri"
        text="Vi utmanar traditionella konsumtionsmönster och produktionsmetoder genom att endast tillverka på beställning. Det gör att vi kan undvika överproduktion och onödigt slöseri med resurser. Genom att fokusera på kvalitet framför kvantitet bidrar vi till ett mer hållbart sätt att tänka kring konsumtion – där varje föremål är tänkt att hålla, användas och älskas över tid.<br><br>

Eftersom vi inte lagerför varor och varje handtag och knopp gjuts på beställning, har vi en leveranstid på 4–6 veckor. Denna process gör att vi kan vara noggranna med både materialval och tillverkning, samtidigt som vi minimerar onödig produktion och resursanvändning."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF6961.jpg?alt=media&token=0cf75bb2-b8d4-4b46-97b7-6efc37b14ff7"
      />

<h2 className="text-4xl font-serif text-gray-800 text-center mt-20">Nu också i tenn</h2>
      {/* Square Image Grid */}
      <SquareImageGrid
        images={[
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8452.JPG?alt=media&token=daeb3c8c-a2ac-4ff1-b636-73afb2e6cd12", alt: "Square Image 6" },
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8391.JPG?alt=media&token=bf214f8a-f67e-4a81-882c-d88a50978377", alt: "Square Image 1" },
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8421.JPG?alt=media&token=be0171e5-cb5e-459d-8f21-f5a18fd5ef16", alt: "Square Image 2" },
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8430.JPG?alt=media&token=7d2f3642-9f73-4d17-ba49-04755cb3f971", alt: "Square Image 3" },
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8438.JPG?alt=media&token=1e38d29c-8fb2-450c-9bd1-c132efcc5e50", alt: "Square Image 4" },
          { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8450.JPG?alt=media&token=747f96ac-abbc-41bb-9dcd-d2ab35e18534", alt: "Square Image 5" }
          
        ]}
      />

<h2 className="text-4xl font-serif text-gray-800 text-center mt-12">Våra produkter</h2>

<section id="skålhandtag"/>
<ProductPresentation
  images={[
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0182-2.jpg?alt=media&token=8b550d6e-e1f9-431f-a84e-c67a9f2a6824", alt: "Cup handle Image 1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0123.jpg?alt=media&token=c0f5216b-bed5-4815-8029-ffd55d482c53", alt: "Cup handle Image 2" },
  ]}
  productName="Skålhandtag"
  price="550 kr"
  description="Ett klassiskt skålhandtag med rötter i tidigt 1800-tal, där funktion och stil möts i ett stilrent formspråk. Den generösa skålformen ger ett stabilt grepp och gör det särskilt lämpat för kök och andra möbler där ett robust handtag behövs.<br><br>

Den obehandlade ytan låter materialets naturliga skönhet komma fram, där tidens gång tillför en patina som gradvis fördjupar dess utseende och känsla. Ett handtag för dig som uppskattar gedigna klassiska former och genuint hantverk."
  details={[
    { label: 'Bredd', value: '95 mm' },
    { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
    { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
    { label: 'Mått', value: '95Lx20D mm' },
    { label: 'Vikt', value: 'ca 150g' },
    { label: 'Skruvar', value: '3.5mm träskruv inkluderad' }
  ]}
/>

<section id="oval-knopp"/>
<ProductPresentation
  images={[
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0170.jpg?alt=media&token=eba047ad-ab56-4daa-b7cc-e2fd1c5cce53", alt: "Oval knob Image 1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0107.jpg?alt=media&token=32cdb2e6-926d-4d85-897c-0ffa732c16ed", alt: "Oval knob Image 2" },
  ]}
  productName="Oval knopp"
  price="520 kr"
  description="Den här ovala knoppen är noggrant handgjord och har en organisk form som utstrålar både balans och tidlös enkelhet. Med sin mjukt rundade topp och avsmalnande fot, känns den lika behaglig att röra vid som att använda i vardagen. Varje knopp bär på små skiftningar i ytan, vilket speglar hantverket och gör varje exemplar unikt och personligt. <br><br>

Den obehandlade ytan låter materialets naturliga skönhet komma fram, där tidens gång tillför en patina som gradvis fördjupar dess utseende och känsla. En knopp för dig som uppskattar genuint hantverk och okonstlade detaljer."
  details={[
    { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
    { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
    { label: 'Mått', value: '34Dx26Bx44L mm' },
    { label: 'Vikt', value: 'ca 115g' },
    { label: 'Skruvar', value: 'M4 skruv inkluderad' }
  ]}
/>

<section id="rund-knopp"/>
<ProductPresentation 
  images={[
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0150.jpg?alt=media&token=424a7bb7-8cf8-43ea-b6bf-08fafa3d6259", alt: "Round knob Image 1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0105.jpg?alt=media&token=35a52b8b-6e5e-4efb-b3e8-319508a336ac", alt: "Round knob Image 2" },
  ]}
  productName="Rund knopp"
  price="480 kr"
  description="Den runda knoppen är inspirerad av klassiska former med mjuka linjer och en symmetrisk design som skapar en känsla av balans och harmoni. Tillverkad för hand i små serier, är denna knopp en tidlös detalj som bara blir vackrare med åren. Finns i obehandlad mässing, tenn och brons – material som åldras naturligt och ger varje knopp en unik patina. Passar perfekt för den som vill bevara eller förhöja en rustik och klassisk känsla."
  details={[
    { label: 'Diameter', value: '~ 32 mm' },
    { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
    { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
    { label: 'Mått', value: '~ ⌀32xD30 mm' },
    { label: 'Vikt', value: '~ 105g' },
    { label: 'Skruvar', value: 'M4 skruv inkluderad' }
  ]}
/>

<section id="bygelhandtag"/>
<ProductPresentation 
  images={[
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0129-4.jpg?alt=media&token=4a9c7a62-38a0-4996-8b0b-3a27e8b678e5", alt: "Bygelhandtag Image 1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0114-2.jpg?alt=media&token=7ff71717-474d-4762-b19d-a9a38edbab45", alt: "Bygelhandtag Image 2" },
  ]}
  productName="Bygelhandtag"
  price="630 kr"
  description="Vårt bygelhandtag, med sina karaktäristiska hjärtformade fästen och slanka, avlånga design, kombinerar klassisk estetik med praktisk funktion. Det är särskilt lämpligt för högre skåp eller dörrar där ett stadigt grepp behövs för att öppna och stänga med lätthet. Tillverkat i återvunnen mässing, tenn eller brons, åldras handtaget naturligt och får med tiden en unik patina som gör varje exemplar personligt och levande. "
  details={[
    { label: 'Längd', value: '~ 221 mm' },
    { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
    { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
    { label: 'Mått', value: '~ L221xD31xB20 mm' },
    { label: 'Vikt', value: '~ 200g' },
    { label: 'Skruvar', value: '3.5mm träskruv inkluderad' }
  ]}
/>

      <ImageGrid
        images={[
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_4256-2%202.jpg?alt=media&token=eaf78470-420b-4fac-89d2-19256c9176b7",
            alt: "Bron över Bångå",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0362.JPG?alt=media&token=65a28f48-2f9a-45fc-a253-829c2d2256b4",
            alt: "Hideviken",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF4832.jpeg?alt=media&token=8a556e5b-c075-46c3-8d4f-b9d52508bb1e",
            alt: "Gjuteriet",
          }
        ]}
      />


<Footer/>
    </main>
  );
}

export default App;