export default function ContactDetails() {
  return (
    <aside className="rounded-2xl border bg-ivoire p-6">
      <h2 className="text-lg font-semibold text-anthracite">Coordonnées</h2>
      <ul className="mt-3 space-y-2 text-sm text-anthracite">
        <li>
          <span className="font-medium">Entreprise :</span> MCBC-ACI SARL
        </li>
        <li>
          <span className="font-medium">Adresse :</span> Zone Artisanale de Trianon Nord, Bonnaire 97240 LE FRANÇOIS
        </li>
        <li>
          <span className="font-medium">Tel :</span>{" "}
          <a href="tel:0596543898" className="text-anthracite font-semibold hover:text-bronze">
            0596 54 38 98
          </a>
        </li>
        <li>
          <span className="font-medium">Mobile :</span>{" "}
          <a href="tel:0696456773" className="text-anthracite font-semibold hover:text-bronze">
            0696 45 67 73
          </a>
        </li>
        <li>
          <span className="font-medium">Email :</span>{" "}
          <a href="mailto:mcbc.aci@wanadoo.fr" className="text-anthracite font-semibold hover:text-bronze">
            mcbc.aci@wanadoo.fr
          </a>
        </li>
      </ul>

      <h3 className="mt-6 font-semibold text-anthracite">Horaires d'ouverture</h3>
      <p className="mt-2 text-sm text-anthracite/80">
        Lundi au jeudi :<br />
        07h00 - 12h00 / 12h30 - 16h00
        <br />
        <br />
        Vendredi :<br />
        07h00 - 12h00
      </p>

      <div className="mt-6 rounded-lg bg-white p-3 border border-bronze/30">
        <p className="text-xs font-semibold text-bronze">✓ Démarche sécurisée</p>
        <p className="mt-1 text-xs text-anthracite/70">
          Devis sans engagement. Réponse sous 48h. Données sécurisées.
        </p>
      </div>
    </aside>
  );
}
