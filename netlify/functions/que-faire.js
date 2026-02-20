const RESTAURANTS = [
  { nom: 'Mowgli Street Food', adresse: '20 Hanover Street', distance: '0 min de l\'hôtel', type: 'Street food indienne', budget: '€€ (£6–12)', ambiance: 'coloré, animé, guirlandes et balançoires', giuliaFriendly: true, phone: '0131 560 2510' },
  { nom: 'Urban Angel', adresse: '121 Hanover Street', distance: '0 min de l\'hôtel', type: 'Brunch et café healthy', budget: '€€ (£8–14)', ambiance: 'cosy, calme, bio et local', giuliaFriendly: true, phone: '0131 225 6215', horaires: 'ouvert 8h30–15h30 uniquement' },
  { nom: 'Dishoom', adresse: '3A St Andrew Square', distance: '2 min à pied', type: 'Cuisine indienne de Bombay, mythique', budget: '€€€ (£15–25)', ambiance: 'colonial magnifique, animé, bruyant', giuliaFriendly: true, phone: '0131 202 6406', note: 'Walk-in uniquement le soir — venez avant 18h pour éviter la queue' },
  { nom: 'The Scran & Scallie', adresse: '1 Comely Bank Rd, Stockbridge', distance: '20 min à pied ou 5 min en taxi', type: 'Gastropub écossais (chef étoilé Tom Kitchin)', budget: '€€€ (£18–28)', ambiance: 'relax, qualité, très familial', giuliaFriendly: true, phone: '0131 332 6281', note: 'Salle de jeux dédiée pour Giulia — réservation conseillée' },
  { nom: 'Newtown Fox', adresse: '2 Dundas Street', distance: '3 min à pied', type: 'Café-resto moderne, brunch all-day', budget: '€€ (£10–18)', ambiance: 'laid-back, décontracté', giuliaFriendly: true, phone: '0131 557 0066' },
  { nom: 'Bertie\'s Fish & Chips', adresse: '9 Victoria Street, Old Town', distance: '10 min à pied', type: 'Fish & chips écossais authentique', budget: '€ (£7–12)', ambiance: 'coloré, touristique, décontracté', giuliaFriendly: true, phone: '0131 322 1000', note: 'Sur la fameuse rue colorée de Victoria Street' },
  { nom: 'Chaophraya', adresse: '4th Floor, 33 Castle Street', distance: '5 min à pied', type: 'Cuisine thaï, rooftop avec vue château', budget: '€€€€ (£25+)', ambiance: 'romantique, spectaculaire, spécial occasions', giuliaFriendly: true, phone: '0131 226 7614', note: 'Le restaurant d\'anniversaire de Vanessa — réservation indispensable' },
  { nom: 'Café St Honoré', adresse: '34 NW Thistle Street Lane', distance: '5 min à pied', type: 'Bistrot français raffiné', budget: '€€€ (£22–32)', ambiance: 'intime, classe, comme à Paris', giuliaFriendly: true, phone: '0131 226 2211' },
];

const ACTIVITIES = [
  { nom: 'Edinburgh Castle', adresse: 'Castlehill, Old Town', distance: '10 min à pied', duree: '1h30–2h', prix: '£19.50/adulte, gratuit <5 ans', indoor: false, energie: 'moyen', giuliaOk: true, note: 'Porte-bébé obligatoire — pas de poussette', highlights: 'Joyaux de la Couronne, vue panoramique sur la ville, canon Mons Meg' },
  { nom: 'National Museum of Scotland', adresse: 'Chambers Street', distance: '10 min à pied', duree: '1h30–2h', prix: 'Gratuit', indoor: true, energie: 'faible', giuliaOk: true, note: 'Tables à langer, café, accessible en poussette', highlights: 'Dinosaures, étage sciences interactif — absolument parfait pour Giulia !' },
  { nom: 'Scottish National Gallery', adresse: 'The Mound', distance: '5 min à pied', duree: '1h', prix: 'Gratuit', indoor: true, energie: 'faible', giuliaOk: true, highlights: 'Rembrandt, Monet, Van Gogh — idéal par pluie ou quand on est fatigués' },
  { nom: 'Dean Village & Water of Leith', adresse: 'Dean Village', distance: '15 min à pied', duree: '45min–1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Sentier praticable en poussette', highlights: 'Village médiéval au bord de la rivière — hors du temps, très pittoresque' },
  { nom: 'Princes Street Gardens & Playground', adresse: 'Princes Street', distance: '3 min à pied', duree: '30min–1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Aire de jeux parfaite pour Giulia avec vue directe sur le château' },
  { nom: 'Victoria Street & Grassmarket', adresse: 'Old Town', distance: '10 min à pied', duree: '45min', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Rue colorée ayant inspiré Harry Potter, fudge, shortbread, shopping sympa' },
  { nom: 'Royal Mile & Closes', adresse: 'Old Town', distance: '10 min à pied', duree: '1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Ruelles médiévales secrètes, histoire vivante, photos incroyables' },
  { nom: 'Calton Hill', adresse: 'Waterloo Place', distance: '15 min à pied', duree: '40min', prix: 'Gratuit', indoor: false, energie: 'moyen', giuliaOk: true, note: 'Porte-bébé recommandé pour la montée — pas trop long', highlights: 'Vue 360° spectaculaire sur toute la ville — parfait en fin de journée' },
  { nom: 'Edinburgh Zoo', adresse: 'Corstorphine', distance: '20 min en bus (n°26) ou 15 min en taxi', duree: '2–3h', prix: '£20/adulte, gratuit <3 ans', indoor: false, energie: 'élevé', giuliaOk: true, highlights: 'Parade des manchots à 14h15 — Giulia va adorer ! Tigres, pandas roux, koalas' },
  { nom: 'Dynamic Earth', adresse: 'Holyrood Road', distance: '15 min à pied', duree: '1h30', prix: '£17/adulte, gratuit <3 ans', indoor: true, energie: 'faible', giuliaOk: true, highlights: 'Volcans 4D, glaciers, formation de la Terre — captivant même pour les tout-petits' },
  { nom: 'Stockbridge', adresse: 'Quartier Stockbridge', distance: '20 min à pied', duree: '1h', prix: 'Gratuit (shopping optionnel)', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Quartier bohème et local, cafés de qualité, marché du dimanche' },
  { nom: 'Palace of Holyroodhouse', adresse: 'Canongate, bas du Royal Mile', distance: '20 min à pied', duree: '1h', prix: '£18/adulte, gratuit <5 ans', indoor: true, energie: 'faible', giuliaOk: true, highlights: 'Résidence officielle du Roi, espace famille avec déguisements pour les enfants' },
];

const BALADES = [
  { nom: 'Princes Street Gardens', description: 'La promenade iconique au pied du château — vue imprenable', duree: '20–30 min', difficulte: 'Très facile, plat', poussetteOk: true, depart: '3 min de l\'hôtel', envies: ['vue', 'facile', 'proche', 'bébé'] },
  { nom: 'Water of Leith Walkway', description: 'Le long de la rivière depuis Dean Village jusqu\'à Stockbridge — hors du temps et magnifique', duree: '45min–1h', difficulte: 'Facile, plat', poussetteOk: true, depart: '15 min de l\'hôtel', envies: ['nature', 'pittoresque', 'rivière', 'calme'] },
  { nom: 'Old Town Discovery', description: 'Royal Mile, closes médiévales secrètes, Victoria Street, Grassmarket — le cœur historique', duree: '1h–1h30', difficulte: 'Moyen (pavés et quelques côtes)', poussetteOk: false, note: 'Porte-bébé très recommandé sur les pavés irréguliers', depart: '10 min de l\'hôtel', envies: ['histoire', 'pittoresque', 'photo', 'animation'] },
  { nom: 'New Town Architecture Walk', description: 'Charlotte Square, Heriot Row, Moray Place — architecture géorgienne classée au Patrimoine Mondial', duree: '45 min', difficulte: 'Facile, peu de dénivelé', poussetteOk: true, depart: '5 min de l\'hôtel', envies: ['architecture', 'calme', 'élégant', 'historique'] },
  { nom: 'Dean Village Loop', description: 'Descente vers l\'ancien village de meuniers au bord de la rivière, puis remontée tranquille', duree: '45min–1h', difficulte: 'Facile', poussetteOk: true, depart: '15 min de l\'hôtel', envies: ['pittoresque', 'nature', 'calme', 'village'] },
  { nom: 'Calton Hill Sunset Walk', description: 'Montée douce pour une vue panoramique spectaculaire sur toute la ville', duree: '30–40 min', difficulte: 'Moyen (montée 10 min)', poussetteOk: false, note: 'Porte-bébé indispensable pour la montée', depart: '15 min de l\'hôtel', envies: ['vue', 'panorama', 'coucher de soleil', 'photo'] },
  { nom: 'Stockbridge & Circus Lane', description: 'Quartier bohème adorable + Circus Lane, la plus jolie petite ruelle de la ville', duree: '1h', difficulte: 'Facile', poussetteOk: true, depart: '20 min à pied', envies: ['pittoresque', 'photo', 'local', 'shopping'] },
];

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Variable GEMINI_API_KEY manquante dans Netlify.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Corps de requête invalide.' }) };
  }

  const { mode, preferences, context } = body;

  const energyLabels = { tired: 'fatigués 😴', normal: 'énergie normale 😊', energetic: 'en pleine forme 💪' };
  const weatherLabels = { sun: 'beau temps ensoleillé ☀️', rain: 'pluie ou temps couvert ☔' };
  const locationLabels = {
    hotel: 'près de l\'hôtel au 4 Hanover Street (New Town)',
    oldtown: 'dans ou près de l\'Old Town / Royal Mile',
    stockbridge: 'vers Stockbridge / Dean Village',
    autre: 'quelque part dans Édimbourg'
  };

  let dataForPrompt = '';
  let specificPrefs = '';

  if (mode === 'manger') {
    dataForPrompt = JSON.stringify(RESTAURANTS, null, 2);
    const repasLabel = { snack: 'Snack rapide ou café (pas un vrai repas)', repas: 'Vrai repas assis', peu_importe: 'Peu importe' };
    const budgetLabel = { petit: 'Petit budget (£10–15 max)', moyen: 'Moyen (£15–25)', libre: 'Sans limite de budget' };
    const ambianceLabel = { calme: 'Calme et cosy, endroit reposant', anime: 'Animé et coloré, ambiance fun', peu_importe: 'Peu importe l\'ambiance' };
    specificPrefs = `- Type de repas souhaité : ${repasLabel[preferences.repas] || preferences.repas}
- Budget : ${budgetLabel[preferences.budget] || preferences.budget}
- Ambiance souhaitée : ${ambianceLabel[preferences.ambiance] || preferences.ambiance}`;
  } else if (mode === 'activite') {
    dataForPrompt = JSON.stringify(ACTIVITIES, null, 2);
    const typeLabel = { indoor: 'Intérieur fortement préféré (musée, galerie)', outdoor: 'Extérieur préféré', peu_importe: 'Peu importe intérieur/extérieur' };
    const dureeLabel = { court: '30–45 minutes max', moyen: '1 à 2 heures', long: 'Demi-journée ou plus' };
    const budgetLabel = { gratuit: 'Gratuit fortement préféré', ok: 'Payant tout à fait OK' };
    specificPrefs = `- Type : ${typeLabel[preferences.type] || preferences.type}
- Temps disponible : ${dureeLabel[preferences.duree] || preferences.duree}
- Budget : ${budgetLabel[preferences.budget] || preferences.budget}`;
  } else if (mode === 'balade') {
    dataForPrompt = JSON.stringify(BALADES, null, 2);
    const dureeLabel = { court: 'Rapide (20–30 min)', moyen: 'Tranquille (45min–1h)', long: 'Grande balade (1h30+)' };
    const poussetteLabel = { oui: 'Oui, poussette obligatoire — trajet doit être praticable', non: 'Non, porte-bébé possible' };
    const envieLabel = { peu_importe: 'Pas de préférence particulière', vue: 'Vue panoramique', pittoresque: 'Pittoresque et instagrammable', nature: 'Nature, verdure, calme' };
    specificPrefs = `- Durée souhaitée : ${dureeLabel[preferences.duree] || preferences.duree}
- Avec poussette : ${poussetteLabel[preferences.poussette] || preferences.poussette}
- Envie de voir : ${envieLabel[preferences.envie] || preferences.envie}`;
  }

  const modeLabels = { manger: 'trouver où manger', activite: 'trouver une activité', balade: 'faire une balade' };

  const prompt = `Tu es un expert local d'Édimbourg, bienveillant et très pratique. Une famille française avec leur fille Giulia (19 mois) te demande de les aider à ${modeLabels[mode] || mode}.

**Contexte de la famille EN CE MOMENT :**
- Ils sont : ${locationLabels[context.location] || context.location}
- Énergie : ${energyLabels[context.energie] || context.energie}
- Météo : ${weatherLabels[context.meteo] || context.meteo}
- Heure actuelle : ${context.heure || 'inconnue'}

**Leurs préférences :**
${specificPrefs}

**Options disponibles (issues du site de voyage de la famille) :**
${dataForPrompt}

**Ta mission :** Recommande exactement 2 ou 3 meilleures options dans CE contexte précis. Sois TRÈS spécifique sur POURQUOI c'est le bon choix maintenant (pas une liste générique). Tiens compte de la fatigue, de la météo, de l'heure, de la localisation et de Giulia. Si pluie → favorise l'indoor. Si fatigués → activités douces et proches. Si en forme → tu peux proposer quelque chose de plus ambitieux.

Réponds UNIQUEMENT avec un tableau JSON valide, sans markdown, sans texte avant ou après :
[{"emoji":"🍴","nom":"Nom exact du lieu","pourquoi":"Raison très concrète et spécifique pourquoi c'est le bon choix MAINTENANT (2 phrases max)","detail":"Info pratique clé : prix, horaire, astuce de la maison","adresse":"Adresse complète + distance depuis hôtel","contact":"Numéro de téléphone si disponible","badge":"Badge court et percutant ex: ⭐ Top choix | 🌧️ Parfait par pluie | 👶 Giulia va adorer | 🆓 Gratuit"}]`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.75, maxOutputTokens: 1100 }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: `Erreur Gemini ${response.status} : ${errorText}` })
      };
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ suggestions: text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
