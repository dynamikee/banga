import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';

const Footer = () => {
  return (
    <footer className="label-small py-28 bg-white text-center relative">
      <p className="label-small-prominent">BÅNGÅ HANTVERK</p>
      
      {/* Instagram Link */}
      <p>
        <a 
          href="https://www.instagram.com/bangahantverk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="no-underline hover:underline text-gray-600"
        >
          @bangahantverk
        </a>
      </p>
      
      {/* Email Link */}
      <p>
        <a 
          href="mailto:hi@bangahantverk.com" 
          className="no-underline hover:underline text-gray-600"
        >
          hi@bangahantverk.com
        </a>
      </p>
      
      {/* Phone Number */}
      <p>+46 702 98 25 79</p>

      {/* Terms Link */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="no-underline hover:underline text-gray-600 mt-4">
            Våra villkor
          </button>
        </DialogTrigger>

        <DialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto p-10">
          <h2 className="text-4xl font-serif text-center w-full mb-4 mt-2 px-4">Våra villkor</h2>
          <p className="text-lg leading-relaxed mb-4">
            Produkter du köper av oss är handgjutna och därför unika för varje gjutning. Det innebär att den vara du får hem inte alltid är exakt som på de bilder som visas på vår webbplats eller i andra sammanhang. De är också obehandlade vilket innebär att de kommer att förändra sitt utseende över tid. De kommer inte alltid ha det utseende du ser på våra produktbilder utan kommer mörkna och patineras på olika sätt beroende av material och användning. Denna förändring av utseende är något du måste uppskatta om du ska köpa våra produkter.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Priser & betalning</strong><br />
            Priserna som gäller är de som visas på vår webbplats. Dessa är också riktpriser för butiker som återförsäljer våra produkter. Betalning sker i förskott via konto- / kreditkort.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Leverans</strong><br />
            Produkterna gjuts bara på beställning för att minska resursslöseri och för att få en serie där alla handtag harmonierar med varandra. Räkna med cirka 4-6 veckors leveranstid från beställning. Vi levererar till närmaste Postnord-ombud i Sverige för 49 kr.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Ångerrätt</strong><br />
            Eftersom alla handtag och knoppar tillverkas vid beställning kan vi inte erbjuda öppet köp. Alla handtag är tillverkade för hand och variationer kommer att förekomma från handtag till handtag. Märken från hantverket såsom gropar och ytstrukturer gör varje handtag unikt. Vi rekommenderar att du köper alla handtag vid ett och samma tillfälle. Varje gjutning är unik och när du beställer vid ett tillfälle kan vi gjuta en samling som harmonierar.
            Skulle det vara något fel på varan vid leverans ber vi dig kontakta oss på hi@bangahantverk.com inom 7 dagar. Vi prioriterar då att få fram en ersättningsvara till dig och skickar den till dig utan kostnad.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Reklamation</strong><br />
            Om du vill reklamera en vara hör du av dig till oss på hi@bangahantverk.com. Inkludera följande information:<br />
            • Vad du har köpt och när du gjorde köpet.<br />
            • En beskrivning av felet<br />
            • Bilder eller annat underlag som tydligt visar felet<br />
            Observera att vi inte godkänner reklamationer av förändringar i utseende utan enbart skador som påverkar varans dagliga funktion. Påverkar skadan varans funktion kommer vi be dig skicka varan till oss (vi står givetvis för frakten). När vi fått varan kommer vi avgöra om den är möjlig att laga eller gjuta om den. Vi skickar dig sedan den lagade eller omgjutna varan utan kostnad.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Begränsningar</strong><br />
            Din reklamationsrätt gäller enbart så länge du inte försökt modifiera varan. Du får inte borra, slipa, hamra, etc.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Integritet och datainsamling</strong><br />
            När du besöker vår webbplats samlar vi inte in någon personlig information eller data om dig. Vi använder inga spårningsverktyg, cookies eller analytiska tjänster för att följa ditt beteende på webbplatsen. Ditt besök är helt anonymt och vi respekterar din integritet fullt ut.
          </p>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;