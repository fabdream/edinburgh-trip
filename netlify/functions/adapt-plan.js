exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Clé API GEMINI_API_KEY manquante dans les variables d\'environnement Netlify.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Corps de requête invalide.' }) };
  }

  const { dayTitle, dayDate, activities, wakeUpTime, energyLevel, napTime, weather, freeText } = body;

  const energyLabels = { tired: 'Fatigués 😴', normal: 'Énergie normale 😊', energetic: 'En pleine forme 💪' };
  const weatherLabels = { sun: 'Ensoleillé ☀️', rain: 'Pluie prévue ☔' };

  const activitiesText = (activities || [])
    .map(a => `- ${a.time} : ${a.title}\n  ${a.description}`)
    .join('\n');

  const prompt = `Tu es un assistant de voyage expert et bienveillant. Une famille française en vacances à Édimbourg avec leur fille Giulia (19 mois) te demande d'adapter leur planning du jour.

**Journée : ${dayTitle} — ${dayDate}**

Contexte de la journée :
- Heure de sortie de l'hôtel : ${wakeUpTime} (la famille se lève vers 8h30, se prépare, et sort à cette heure)
- Énergie de la famille : ${energyLabels[energyLevel] || energyLevel}
- Sieste de Giulia : ${napTime === 'pas de sieste' ? 'PAS DE SIESTE prévue aujourd\'hui — Giulia ne dort pas, on peut enchaîner les activités sans pause sieste' : 'prévue autour de ' + napTime}
- Météo : ${weatherLabels[weather] || weather}
${freeText ? `- Message de la famille : "${freeText}"` : ''}

Programme original prévu :
${activitiesText}

**Activités alternatives disponibles à Édimbourg** (utilise-les pour remplacer ou enrichir le programme selon le contexte) :
- The Vennel Viewpoint (escalier en pierre avec vue iconique sur le château — LE spot photo !)
- Greyfriars Bobby (statue du chien fidèle, cimetière paisible, les enfants adorent)
- Victoria Street (rue colorée Harry Potter, boutiques magiques)
- Grassmarket (place animée au pied du château, architecture typique, cafés)
- Museum of Childhood (Royal Mile, gratuit, jouets historiques — parfait toddler)
- Camera Obscura & World of Illusions (Castlehill, £19.50, illusions interactives)
- Royal Botanic Garden (gratuit, serres tropicales, écureuils, playground)
- Gorgie City Farm (gratuit, animaux de ferme en ville)
- Little Foxes Play Cafe (soft play 0–4 ans, £6)
- Playtown Edinburgh (soft play géant, £7–9)
- Holyrood Park & St Margaret's Loch (gratuit, canards, nature)
- Mary's Milk Bar (gelato artisanal + hot chocolate, Grassmarket)
- Portobello Beach (plage de sable, promenade, 20 min en bus)
- Circus Lane (ruelle pavée instagrammable, Stockbridge)
- Princes Street Gardens playground (gratuit, vue château)
- Scottish Storytelling Centre (contes pour enfants, gratuit)
- Soirée appart : Deliveroo/Uber Eats, fish & chips Bertie's à emporter, M&S Dine In

**Ta mission :** Réorganise et adapte ce programme intelligemment :
- **IMPORTANT : Ne propose PAS toujours les mêmes activités.** Sois créatif et varie les suggestions. Propose des alternatives différentes du programme original en piochant dans la liste ci-dessus.
- Si la famille est **fatiguée** → Décale les horaires, propose des activités calmes et douces (café, gelato, balade courte, play cafe). Remplace les activités exigeantes par des alternatives détente.
- Si la famille est **en forme** → Ajoute 1–2 activités bonus originales, propose des choses plus ambitieuses (Calton Hill, Portobello Beach, deux quartiers dans la même demi-journée).
- En cas de **pluie** → Remplace les activités extérieures par des alternatives indoor variées (pas toujours le même musée !). Pense aux play cafes, Camera Obscura, Museum of Childhood, galeries.
- Si une sieste est prévue, respecte-la en créant un créneau calme autour de l'heure indiquée. Si PAS DE SIESTE, profites-en pour proposer un programme plus rempli et enchaîner les activités.
- Adapte les heures en fonction de l'heure de sortie de l'hôtel. La première activité ne doit PAS commencer avant cette heure. Si sortie à 10h, commence à 10h.
- Si la famille a laissé un message libre, prends-le en compte en PRIORITÉ et adapte le programme en conséquence.
- La famille a un appartement et peut petit-déjeuner chez eux. La première activité proposée doit commencer à l'heure de sortie de l'hôtel (pas de petit-déj en ville sauf si c'est voulu).
- Garde un ton chaleureux et pratique, en français.

Réponds UNIQUEMENT avec un tableau JSON valide, sans markdown, sans texte avant ou après. Format exact :
[{"heure":"HHhMM","titre":"Emoji + Titre court","description":"Description courte et concrète","conseil":"Petit conseil contextuel lié à la fatigue/météo (optionnel, peut être null)"}]`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 1500,
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: `Erreur API Gemini : ${response.status}. ${errorText}` })
      };
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ adapted: text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
