import React from 'react';
import Hero from './components/hero';
import TextAction from './components/text-action';
import ProductOverview from './components/product-overview';
import ImageGrid from './components/image-grid';
import ContentFeature from './components/content-feature';
import SquareImageGrid from './components/square-image-grid';
import ProductPresentation from './components/product';
import Footer from './components/footer';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, null),
        React.createElement(TextAction, { title: "Det goda hantverket", text: "Vi v\u00E4rnar om det traditionella hantverket och tillverkar tidl\u00F6sa, historiska knoppar och handtag som kommer att \u00E4lskas av generationer. Vi tror p\u00E5 sm\u00E5skalig produktion - fri fr\u00E5n ytbehandlingar och kemiska processer - d\u00E4r kvalitet f\u00E5r ta tid med omtanke om b\u00E5de m\u00E4nniskor och milj\u00F6.", buttonText: "Kontakta oss" }),
        React.createElement(ProductOverview, null),
        React.createElement(ImageGrid, { images: [
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
            ] }),
        React.createElement(ContentFeature, { headline: "Hantverk med omsorg", text: "Alla handtag och knoppar gjuts f\u00F6r hand med gamla traditionella metoder. Vi gjuter i sm\u00E5 serier d\u00E4r varje handtag f\u00E5r ett unikt utseende och s\u00E4rpr\u00E4glad taktil k\u00E4nsla pr\u00E4glat av hantverket. <br><br> <block-quote class='custom-quote'> \u201CVi tror p\u00E5 att hantverk f\u00E5r ta tid. Det \u00E4r i de l\u00E5ngsamma processerna som den sanna sk\u00F6nheten och kvaliteten v\u00E4xer fram \u2013 och det \u00E4r n\u00E5got som bidrar till livskvalitet f\u00F6r b\u00E5de oss och de som anv\u00E4nder v\u00E5ra produkter.\u201D - Mikael Mattsson, grundare</block-quote> \n\n        <br><br>V\u00E5ra handtag bearbetas minimalt efter gjutningen och vi anv\u00E4nder inga kemiska \u00E4mnen eller ytbehandlingar. Detta g\u00F6r att v\u00E5ra handtag och knoppar kommer patineras naturligt och bli vackrare med \u00E5ren, pr\u00E4glade av platsen och m\u00E4nniskorna som brukar dem. V\u00E5ra handtag \u00E4r gjorda f\u00F6r att g\u00E5 i arv och \u00E4lskas av kommande generationer. Det \u00E4r vad vi kallar h\u00E5llbarhet. ", imageSrc: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ba%CC%8Anga%CC%8A%20hantverk%20produkt-40.jpg?alt=media&token=d2372001-9cc9-4d8e-9098-0848acecac1d" }),
        React.createElement(ContentFeature, { headline: "Lokalt \u00E5terbruk", text: "F\u00F6r oss \u00E4r det ett m\u00E5ste att ta vara p\u00E5 de resurser som redan finns och ge dem ett nytt liv. Att arbeta med \u00E5tervunnet material kr\u00E4ver tid och omsorg, b\u00E5de i att hitta och v\u00E4lja ut r\u00E4tt material f\u00F6r varje gjutning, eftersom \u00E5tervunnet material varierar mer. Men just detta ger ocks\u00E5 varje gjutning sin egen karakt\u00E4r och historia. <br><br>Vi anv\u00E4nder enbart metall som vi \u00E5tervinner h\u00E4r p\u00E5 Gotland. Genom att arbeta lokalt undviker vi mellanh\u00E4nder och l\u00E5nga transportstr\u00E4ckor, som ofta \u00E4r en stor del av problemet med \u00E5tervunnen metall p\u00E5 marknaden. N\u00E4r vi har kontroll \u00F6ver hela kedjan, fr\u00E5n \u00E5tervinning till f\u00E4rdig produkt, kan vi garantera att varje handtag tillverkas p\u00E5 ett h\u00E5llbart s\u00E4tt, med en djupare koppling till platsen d\u00E4r varje f\u00F6rem\u00E5l tar form.", imageSrc: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/tempImageaOSNG3.jpg?alt=media&token=83ff1ae1-2d16-49c5-9386-502eea06462f" }),
        React.createElement(ContentFeature, { headline: "Skapade f\u00F6r att \u00E4lskas i generationer", text: "V\u00E5ra handtag och knoppar \u00E4r skapade f\u00F6r att f\u00F6lja med genom livet. Deras sk\u00F6nhet v\u00E4xer med tiden, d\u00E4r varje dag av anv\u00E4ndning ger dem mer karakt\u00E4r och liv. Vi l\u00E5ter materialen \u00E5ldras naturligt, och ist\u00E4llet f\u00F6r att se p\u00E5 det som n\u00E5got negativt, hyllar vi det som ett bevis p\u00E5 tidens g\u00E5ng. <br><br> Med \u00E5ren f\u00E5r varje f\u00F6rem\u00E5l en patina som ber\u00E4ttar en egen historia \u2013 formad av platsen och m\u00E4nniskorna som anv\u00E4nt det. Det \u00E4r detta som ger v\u00E5ra produkter ett k\u00E4nslom\u00E4ssigt v\u00E4rde, l\u00E5ngt bortom deras praktiska anv\u00E4ndning. N\u00E4r du h\u00E5ller i v\u00E5ra handtag, h\u00E5ller du i n\u00E5got som skapats f\u00F6r att vara med dig l\u00E4nge och bli en del av ditt hem och din historia.", imageSrc: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ma%CC%88ssing.jpg?alt=media&token=f09539e4-3880-4b18-b948-04f6062c0488" }),
        React.createElement(ContentFeature, { headline: "Endast p\u00E5 best\u00E4llning, minskat sl\u00F6seri", text: "Vi utmanar traditionella konsumtionsm\u00F6nster och produktionsmetoder genom att endast tillverka p\u00E5 best\u00E4llning. Det g\u00F6r att vi kan undvika \u00F6verproduktion och on\u00F6digt sl\u00F6seri med resurser. Genom att fokusera p\u00E5 kvalitet framf\u00F6r kvantitet bidrar vi till ett mer h\u00E5llbart s\u00E4tt att t\u00E4nka kring konsumtion \u2013 d\u00E4r varje f\u00F6rem\u00E5l \u00E4r t\u00E4nkt att h\u00E5lla, anv\u00E4ndas och \u00E4lskas \u00F6ver tid.<br><br>\n\nEftersom vi inte lagerf\u00F6r varor och varje handtag och knopp gjuts p\u00E5 best\u00E4llning, har vi en leveranstid p\u00E5 4\u20136 veckor. Denna process g\u00F6r att vi kan vara noggranna med b\u00E5de materialval och tillverkning, samtidigt som vi minimerar on\u00F6dig produktion och resursanv\u00E4ndning.", imageSrc: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF6961.jpg?alt=media&token=0cf75bb2-b8d4-4b46-97b7-6efc37b14ff7" }),
        React.createElement("h2", { className: "text-4xl font-serif text-gray-800 text-center mt-20" }, "Tenn - nytt material"),
        React.createElement(SquareImageGrid, { images: [
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8452.JPG?alt=media&token=daeb3c8c-a2ac-4ff1-b636-73afb2e6cd12", alt: "Square Image 6" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8391.JPG?alt=media&token=bf214f8a-f67e-4a81-882c-d88a50978377", alt: "Square Image 1" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8421.JPG?alt=media&token=be0171e5-cb5e-459d-8f21-f5a18fd5ef16", alt: "Square Image 2" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8430.JPG?alt=media&token=7d2f3642-9f73-4d17-ba49-04755cb3f971", alt: "Square Image 3" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8438.JPG?alt=media&token=1e38d29c-8fb2-450c-9bd1-c132efcc5e50", alt: "Square Image 4" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF8450.JPG?alt=media&token=747f96ac-abbc-41bb-9dcd-d2ab35e18534", alt: "Square Image 5" }
            ] }),
        React.createElement("h2", { className: "text-4xl font-serif text-gray-800 text-center mt-20" }, "V\u00E5ra produkter"),
        React.createElement("section", { id: "sk\u00E5lhandtag" }),
        React.createElement(ProductPresentation, { images: [
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0182-2.jpg?alt=media&token=8b550d6e-e1f9-431f-a84e-c67a9f2a6824", alt: "Cup handle Image 1" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0123.jpg?alt=media&token=c0f5216b-bed5-4815-8029-ffd55d482c53", alt: "Cup handle Image 2" },
            ], productName: "Sk\u00E5lhandtag", price: "550 kr", description: "Ett klassiskt sk\u00E5lhandtag med r\u00F6tter i tidigt 1800-tal, d\u00E4r funktion och stil m\u00F6ts i ett stilrent formspr\u00E5k. Den gener\u00F6sa sk\u00E5lformen ger ett stabilt grepp och g\u00F6r det s\u00E4rskilt l\u00E4mpat f\u00F6r k\u00F6k och andra m\u00F6bler d\u00E4r ett robust handtag beh\u00F6vs.<br><br>\n\nDen obehandlade ytan l\u00E5ter materialets naturliga sk\u00F6nhet komma fram, d\u00E4r tidens g\u00E5ng tillf\u00F6r en patina som gradvis f\u00F6rdjupar dess utseende och k\u00E4nsla. Ett handtag f\u00F6r dig som uppskattar gedigna klassiska former och genuint hantverk.", details: [
                { label: 'Längd', value: '95 mm' },
                { label: 'Material', value: 'Solid mässing, tenn eller brons' },
                { label: 'Ytskikt', value: 'Polerad, obehandlad, fritt från kemiska processer' },
                { label: 'Mått', value: '95 D x 20 H mm' },
                { label: 'Vikt', value: 'ca 150g' },
                { label: 'Skruvar', value: '3.5mm träskruv inkluderad' }
            ] }),
        React.createElement("section", { id: "oval-knopp" }),
        React.createElement(ProductPresentation, { images: [
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0170.jpg?alt=media&token=eba047ad-ab56-4daa-b7cc-e2fd1c5cce53", alt: "Oval knob Image 1" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0107.jpg?alt=media&token=32cdb2e6-926d-4d85-897c-0ffa732c16ed", alt: "Oval knob Image 2" },
            ], productName: "Oval knopp", price: "520 kr", description: "Den h\u00E4r ovala knoppen \u00E4r noggrant handgjord och har en organisk form som utstr\u00E5lar b\u00E5de balans och tidl\u00F6s enkelhet. Med sin mjukt rundade topp och avsmalnande fot, k\u00E4nns den lika behaglig att r\u00F6ra vid som att anv\u00E4nda i vardagen. Varje knopp b\u00E4r p\u00E5 sm\u00E5 skiftningar i ytan, vilket speglar hantverket och g\u00F6r varje exemplar unikt och personligt. <br><br>\n\nDen obehandlade ytan l\u00E5ter materialets naturliga sk\u00F6nhet komma fram, d\u00E4r tidens g\u00E5ng tillf\u00F6r en patina som gradvis f\u00F6rdjupar dess utseende och k\u00E4nsla. En knopp f\u00F6r dig som uppskattar genuint hantverk och okonstlade detaljer.", details: [
                { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
                { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
                { label: 'Mått', value: '34 D x 26 W x 44 H mm' },
                { label: 'Vikt', value: 'ca 115g' },
                { label: 'Skruvar', value: 'M4 skruv inkluderad' }
            ] }),
        React.createElement("section", { id: "rund-knopp" }),
        React.createElement(ProductPresentation, { images: [
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0150.jpg?alt=media&token=424a7bb7-8cf8-43ea-b6bf-08fafa3d6259", alt: "Round knob Image 1" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0105.jpg?alt=media&token=35a52b8b-6e5e-4efb-b3e8-319508a336ac", alt: "Round knob Image 2" },
            ], productName: "Rund knopp", price: "480 kr", description: "Den runda knoppen \u00E4r inspirerad av klassiska former med mjuka linjer och en symmetrisk design som skapar en k\u00E4nsla av balans och harmoni. Tillverkad f\u00F6r hand i sm\u00E5 serier, \u00E4r denna knopp en tidl\u00F6s detalj som bara blir vackrare med \u00E5ren. Finns i obehandlad m\u00E4ssing, tenn och brons \u2013 material som \u00E5ldras naturligt och ger varje knopp en unik patina. Passar perfekt f\u00F6r den som vill bevara eller f\u00F6rh\u00F6ja en rustik och klassisk k\u00E4nsla.", details: [
                { label: 'Diameter', value: '~ 32 mm' },
                { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
                { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
                { label: 'Mått', value: '~ ⌀ 32 x 30 D mm' },
                { label: 'Vikt', value: '~ 105g' },
                { label: 'Skruvar', value: 'M4 skruv inkluderad' }
            ] }),
        React.createElement("section", { id: "bygelhandtag" }),
        React.createElement(ProductPresentation, { images: [
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0129-4.jpg?alt=media&token=4a9c7a62-38a0-4996-8b0b-3a27e8b678e5", alt: "Bygelhandtag Image 1" },
                { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0114-2.jpg?alt=media&token=7ff71717-474d-4762-b19d-a9a38edbab45", alt: "Bygelhandtag Image 2" },
            ], productName: "Bygelhandtag", price: "630 kr", description: "V\u00E5rt bygelhandtag med robust och tidl\u00F6s design k\u00E4nnetecknas av sina klassiska hj\u00E4rtformade f\u00E4sten och slanka, avl\u00E5nga form. Handtaget \u00E4r tillverkat f\u00F6r att h\u00E5lla i generationer och kommer patineras naturligt \u00F6ver tid med daglig anv\u00E4ndning.", details: [
                { label: 'Längd', value: '~ 221 mm' },
                { label: 'Material', value: 'Återvunnen mässing, tenn eller brons' },
                { label: 'Ytskikt', value: 'Obehandlat, fritt från kemiska processer' },
                { label: 'Mått', value: '~ L 221 x D 31 x B 20 mm' },
                { label: 'Vikt', value: '~ 200g' },
                { label: 'Skruvar', value: '3.5mm träskruv inkluderad' }
            ] }),
        React.createElement(ImageGrid, { images: [
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
            ] }),
        React.createElement(Footer, null)));
}
export default App;
