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

  const { dayTitle, dayDate, activities, wakeUpTime, energyLevel, napTime, weather } = body;

  const energyLabels = { tired: 'Fatigués 😴', normal: 'Énergie normale 😊', energetic: 'En pleine forme 💪' };
  const weatherLabels = { sun: 'Ensoleillé ☀️', rain: 'Pluie prévue ☔' };

  const activitiesText = (activities || [])
    .map(a => `- ${a.time} : ${a.title}\n  ${a.description}`)
    .join('\n');

  const prompt = `Tu es un assistant de voyage expert et bienveillant. Une famille française en vacances à Édimbourg avec leur fille Giulia (19 mois) te demande d'adapter leur planning du jour.

**Journée : ${dayTitle} — ${dayDate}**

Contexte de la journée :
- Heure de réveil : ${wakeUpTime}
- Énergie de la famille : ${energyLabels[energyLevel] || energyLevel}
- Sieste de Giulia prévue autour de : ${napTime}
- Météo : ${weatherLabels[weather] || weather}

Programme original prévu :
${activitiesText}

**Ta mission :** Réorganise et adapte ce programme intelligemment :
- Si la famille est **fatiguée** → Décale les horaires si réveil tardif, propose des activités plus calmes, intègre des pauses café, favorise les activités gratuites ou peu exigeantes physiquement.
- Si la famille est **en forme** → Tu peux ajouter une activité bonus ou enrichir les descriptions.
- En cas de **pluie** → Privilégie les activités couvertes (musées, cafés, galeries), signale les alternatives indoor.
- Respecte toujours la sieste de Giulia en créant un créneau calme autour de l'heure indiquée.
- Adapte les heures en fonction du réveil (si réveil à 10h, ne commence pas à 8h30).
- Garde un ton chaleureux et pratique, en français.

Réponds UNIQUEMENT avec un tableau JSON valide, sans markdown, sans texte avant ou après. Format exact :
[{"heure":"HHhMM","titre":"Emoji + Titre court","description":"Description courte et concrète","conseil":"Petit conseil contextuel lié à la fatigue/météo (optionnel, peut être null)"}]`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1200,
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
