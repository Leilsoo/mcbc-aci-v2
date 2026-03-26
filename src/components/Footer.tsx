/**
 * Footer simple et clair
 * - Zone de contact
 * - Copyright
 * - Facile à enrichir (réseaux sociaux, liens légaux)
 */
export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-ivoire">
      <div className="mx-auto max-w-6xl p-6 text-sm text-anthracite">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-anthracite">MCBC-ACI</span> — Martinique Charpente Bois Couverture
          </p>
          <div className="space-y-1">
            <p>
              Tel : <a href="tel:0596543898" className="text-anthracite hover:underline">0596 54 38 98</a> ou <a href="tel:0696456773" className="text-anthracite hover:underline">0696 45 67 73</a>
            </p>
            <p>
              Email: <a href="mailto:mcbc.aci@wanadoo.fr" className="text-anthracite hover:underline">mcbc.aci@wanadoo.fr</a>
            </p>
          </div>
        </div>
  <p className="mt-2 text-xs text-anthracite/70">&copy; {new Date().getFullYear()} MCBC.ACI. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
