// === RESTAURANTS (pas d'indien, on aime écossais, italien, casual, pas guindé) ===
const RESTAURANTS = [
  // PROCHES (< 5 min)
  { nom: 'Urban Angel', adresse: '121 Hanover Street', lat: 55.9547, lng: -3.1958, distance: '0 min de l\'hôtel', type: 'Brunch et café healthy, bio', budget: '€€ (£8–14)', ambiance: 'cosy, calme, bio et local', giuliaFriendly: true, phone: '0131 225 6215', horaires: 'ouvert 8h30–15h30 uniquement' },
  { nom: 'Newtown Fox', adresse: '2 Dundas Street', lat: 55.9560, lng: -3.1925, distance: '3 min à pied', type: 'Café-resto moderne, brunch all-day', budget: '€€ (£10–18)', ambiance: 'laid-back, décontracté', giuliaFriendly: true, phone: '0131 557 0066' },
  { nom: 'The Cambridge Bar', adresse: '20 Young Street', lat: 55.9538, lng: -3.2010, distance: '5 min à pied', type: 'Burgers gourmet dans un pub', budget: '€€ (£10–16)', ambiance: 'pub décontracté, sans chichi', giuliaFriendly: true, phone: '0131 226 2120', note: 'Les meilleurs burgers du quartier — idéal en mode no-brainer le midi' },
  { nom: 'Café St Honoré', adresse: '34 NW Thistle Street Lane', lat: 55.9542, lng: -3.2035, distance: '5 min à pied', type: 'Bistrot français raffiné mais pas guindé', budget: '€€€ (£22–32)', ambiance: 'intime, classe, comme à Paris', giuliaFriendly: true, phone: '0131 226 2211' },
  { nom: 'Chaophraya', adresse: '4th Floor, 33 Castle Street', lat: 55.9522, lng: -3.2020, distance: '5 min à pied', type: 'Cuisine thaï, rooftop avec vue château', budget: '€€€€ (£25+)', ambiance: 'romantique, spectaculaire, spécial occasions', giuliaFriendly: true, phone: '0131 226 7614', note: 'Le restaurant d\'anniversaire de Vanessa — réservation indispensable' },
  // MOYENS (5–15 min)
  { nom: 'The Piemaker', adresse: '38 South Bridge', lat: 55.9492, lng: -3.1878, distance: '8 min à pied', type: 'Pies écossaises artisanales (haggis, steak, mac & cheese)', budget: '€ (£4–7)', ambiance: 'comptoir rapide, zéro chichi', giuliaFriendly: true, note: 'La pie mac & cheese = rêve de toddler. Counter service, parfait quand on a faim vite' },
  { nom: 'Civerinos', adresse: '5 Hunter Square (Royal Mile)', lat: 55.9503, lng: -3.1882, distance: '10 min à pied', type: 'Pizza New York style à la part', budget: '€ (£5–12)', ambiance: 'super casual, counter service', giuliaFriendly: true, phone: '0131 556 5882', note: 'Parts géantes, pas d\'attente — parfait quand Giulia craque et qu\'on a besoin de manger VITE' },
  { nom: 'Vittoria', adresse: '19 George IV Bridge', lat: 55.9488, lng: -3.1920, distance: '10 min à pied', type: 'Trattoria italienne familiale depuis 1970', budget: '€€ (£10–18)', ambiance: 'vieille école italienne, nappes à carreaux, zéro prétention', giuliaFriendly: true, phone: '0131 225 1740', note: 'Institution familiale — ils adorent les enfants. Menu kids, crayons, chaises hautes' },
  { nom: 'Bertie\'s Fish & Chips', adresse: '9 Victoria Street, Old Town', lat: 55.9489, lng: -3.1946, distance: '10 min à pied', type: 'Fish & chips écossais authentique', budget: '€ (£7–12)', ambiance: 'coloré, décontracté', giuliaFriendly: true, phone: '0131 322 1000', note: 'Sur la fameuse rue colorée de Victoria Street — cuisine ouverte, Giulia peut regarder' },
  { nom: 'Mums Great Comfort Food', adresse: '4A Forrest Road', lat: 55.9468, lng: -3.1917, distance: '12 min à pied', type: 'Comfort food écossais — saucisses-purée, pies, mac & cheese, haggis', budget: '€€ (£8–14)', ambiance: 'rétro, tables en Formica, ketchup sur la table, ZÉRO chichi', giuliaFriendly: true, phone: '0131 260 9806', note: 'LE resto le moins guindé d\'Édimbourg — portions gigantesques, menu kids, sticky toffee pudding légendaire. Ouvert 9h–22h' },
  { nom: 'Bread Meats Bread', adresse: '2 Lothian Road', lat: 55.9493, lng: -3.2055, distance: '12 min à pied', type: 'Smash burgers, poulet frit, milkshakes', budget: '€€ (£10–16)', ambiance: 'street food bruyant — personne ne remarque le bazar de bébé', giuliaFriendly: true, phone: '0131 285 1288', note: 'Burgers cultes d\'Édimbourg. Milkshakes = arme secrète pour calmer Giulia' },
  { nom: 'L\'Alba D\'Oro', adresse: '5-7 Henderson Row', lat: 55.9580, lng: -3.2010, distance: '12 min à pied', type: 'Chippy italo-écossais — fish & chips + pizza', budget: '€ (£6–10)', ambiance: 'takeaway avec coin assis, familial', giuliaFriendly: true, phone: '0131 557 2580', note: 'Légende locale — la fusion chippy écossais + cuisine italienne, unique à Édimbourg' },
  { nom: 'The Last Drop', adresse: '74-78 Grassmarket', lat: 55.9474, lng: -3.1955, distance: '12 min à pied', type: 'Pub écossais traditionnel — haggis, pies, fish & chips', budget: '€€ (£8–15)', ambiance: 'pub spacieux, familial en journée', giuliaFriendly: true, phone: '0131 225 4851', note: 'Spacieux = poussette OK. Grassmarket dehors est top pour que Giulia se dégourdit après' },
  { nom: 'Mary\'s Milk Bar', adresse: '19 Grassmarket', lat: 55.9477, lng: -3.1970, distance: '12 min à pied', type: 'Gelato artisanal, hot chocolate, glaces', budget: '€ (£3–6)', ambiance: 'petit comptoir mignon', giuliaFriendly: true, phone: '0131 602 5731', note: 'Le meilleur hot chocolate d\'Édimbourg — même en février c\'est un incontournable' },
  { nom: 'The Pantry', adresse: '1 North West Circus Place, Stockbridge', lat: 55.9585, lng: -3.2085, distance: '12 min à pied', type: 'Brunch écossais fait maison — pancakes, granola, Scottish breakfast', budget: '€€ (£8–14)', ambiance: 'cosy, chaleureux', giuliaFriendly: true, phone: '0131 629 0206', note: 'Tout est fait maison — allez-y tôt le weekend (queue possible). Porridge et pancakes = Giulia approuve' },
  { nom: 'Cannonball Restaurant', adresse: '356 Castlehill, Royal Mile', lat: 55.9491, lng: -3.1968, distance: '15 min à pied', type: 'Écossais — haggis bon bons, cullen skink, steak pies', budget: '€€€ (£15–25 au bar)', ambiance: 'vue spectaculaire sur le château, bar décontracté', giuliaFriendly: true, phone: '0131 225 1550', note: 'Menu bar accessible (pas guindé). Vue imprenable. Haggis bon bons = à goûter absolument' },
  // PLUS LOIN MAIS VALENT LE COUP
  { nom: 'The Scran & Scallie', adresse: '1 Comely Bank Rd, Stockbridge', lat: 55.9612, lng: -3.2150, distance: '20 min à pied', type: 'Gastropub écossais (chef étoilé Tom Kitchin)', budget: '€€€ (£18–28)', ambiance: 'relax, qualité, très familial', giuliaFriendly: true, phone: '0131 332 6281', note: 'SALLE DE JEUX pour Giulia — le n°1 pour manger bien avec un toddler. Réservation conseillée' },
  { nom: 'Loudon\'s Cafe & Bakery', adresse: '94b Fountainbridge', lat: 55.9443, lng: -3.2120, distance: '20 min à pied ou taxi', type: 'Brunch, pâtisseries maison', budget: '€€ (£8–14)', ambiance: 'café familial avec aire de jeux', giuliaFriendly: true, phone: '0131 228 9774', note: 'AIRE DE JEUX pour enfants avec jouets et livres — les parents mangent en paix pendant que Giulia joue' },
  { nom: 'La Favorita', adresse: '325-331 Leith Walk', lat: 55.9655, lng: -3.1730, distance: '25 min à pied ou taxi', type: 'Pizzeria napolitaine au feu de bois', budget: '€€ (£10–18)', ambiance: 'grande salle animée, four visible, bruit joyeux', giuliaFriendly: true, phone: '0131 554 2430', note: 'Les meilleures pizzas d\'Édimbourg — Giulia va adorer regarder le four. Menu kids, chaises hautes' },
  { nom: 'Little Foxes Play Cafe', adresse: '49 Morningside Road', lat: 55.9275, lng: -3.2060, distance: '10 min en taxi', type: 'Café + espace de jeux dédié 0–4 ans', budget: '€ (£6 enfant + café)', ambiance: 'fait pour les parents avec toddlers', giuliaFriendly: true, note: 'SOFT PLAY dédié bébés/toddlers + café excellent — LE plan B pluie quand Giulia a besoin de se défouler' },
];

// === ACTIVITÉS (30+ options avec toddler de 20 mois) ===
const ACTIVITIES = [
  // MUSÉES & INDOOR
  { nom: 'National Museum of Scotland', adresse: 'Chambers Street', lat: 55.9470, lng: -3.1893, distance: '10 min à pied', duree: '1h30–2h', prix: 'Gratuit', indoor: true, energie: 'faible', giuliaOk: true, note: 'Galerie "Imagine" dédiée aux <5 ans : jeu sensoriel, eau, déguisements. Tables à langer, café, poussette OK', highlights: 'Dinosaures, sciences interactives, T-Rex géant — LE spot toddler n°1 d\'Édimbourg' },
  { nom: 'Dynamic Earth', adresse: 'Holyrood Road', lat: 55.9510, lng: -3.1744, distance: '15 min à pied', duree: '1h30', prix: '£17.50/adulte, gratuit <3 ans', indoor: true, energie: 'faible', giuliaOk: true, note: 'Espace "Little Earth" soft play dédié aux <5 ans. Billets en ligne = –10%', highlights: 'Volcans 4D avec sol qui tremble, salle de glace à toucher, forêt tropicale — multi-sensoriel !' },
  { nom: 'Camera Obscura & World of Illusions', adresse: 'Castlehill, Royal Mile', lat: 55.9498, lng: -3.1985, distance: '10 min à pied', duree: '1h–1h30', prix: '£19.50/adulte, gratuit <5 ans', indoor: true, energie: 'faible', giuliaOk: true, note: 'PAS de poussette (tour historique étroite) — porte-bébé obligatoire. Ils gardent la poussette à l\'accueil', highlights: 'Labyrinthe de miroirs, tunnel de lumière, kaléidoscope géant — magique pour les petits !' },
  { nom: 'The Vennel Viewpoint', adresse: 'The Vennel (escalier entre Grassmarket et Lauriston Place)', lat: 55.9469, lng: -3.1960, distance: '5 min à pied', duree: '15min', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Escalier en pierre avec LA vue iconique sur le château. Photo parfaite avec bébé en écharpe !', highlights: 'LE spot photo n°1 d\'Édimbourg — marches en pierre, château majestueux en arrière-plan, wow garanti' },
  { nom: 'Greyfriars Bobby', adresse: 'Candlemaker Row / George IV Bridge', lat: 55.9468, lng: -3.1910, distance: '8 min à pied', duree: '15min', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Toucher le nez du petit chien porte bonheur ! Le cimetière derrière est magnifique et paisible', highlights: 'Statue adorable d\'un petit chien, les enfants adorent. Cimetière de Greyfriars atmosphérique juste derrière' },
  { nom: 'Museum of Childhood', adresse: '42 High Street, Royal Mile', lat: 55.9504, lng: -3.1865, distance: '10 min à pied', duree: '30–45 min', prix: 'Gratuit', indoor: true, energie: 'faible', giuliaOk: true, note: 'Premier musée au monde dédié à l\'enfance. Petit — 30 min suffisent. Vérifier réouverture après rénovation', highlights: 'Jouets historiques, poupées, ours en peluche, jeux — Giulia va pointer du doigt partout' },
  { nom: 'Edinburgh Butterfly & Insect World', adresse: 'Dobbies Garden Centre, Lasswade', lat: 55.8785, lng: -3.1385, distance: '20 min en taxi', duree: '1h–1h30', prix: '£7.95/adulte, gratuit <3 ans', indoor: true, energie: 'faible', giuliaOk: true, note: 'Serre tropicale chauffée — parfait quand il fait froid dehors ! Café familial juste à côté', highlights: 'Papillons en vol libre qui se posent sur vous, suricates, insectes à toucher — Giulia va être fascinée' },
  { nom: 'Royal Yacht Britannia', adresse: 'Ocean Terminal, Leith', lat: 55.9820, lng: -3.1770, distance: '15 min en bus ou 10 min taxi', duree: '1h–1h30', prix: '£18.50/adulte, gratuit <5 ans', indoor: true, energie: 'faible', giuliaOk: true, note: 'Prêt de porte-bébé sur place. Combiner avec Playtown juste à côté pour une journée Leith', highlights: 'Explorer un vrai yacht royal — les couloirs, le pont, la salle des machines. Toddlers adorent les bateaux !' },
  { nom: 'Palace of Holyroodhouse', adresse: 'Canongate, bas du Royal Mile', lat: 55.9527, lng: -3.1718, distance: '20 min à pied', duree: '1h', prix: '£18.50/adulte, gratuit <5 ans', indoor: true, energie: 'faible', giuliaOk: true, highlights: 'Espace famille avec déguisements (couronnes, capes). Ruines de l\'abbaye atmosphériques. Poussette OK' },
  { nom: 'Scottish Storytelling Centre', adresse: '43-45 High Street, Royal Mile', lat: 55.9510, lng: -3.1850, distance: '10 min à pied', duree: '30min–1h', prix: 'Gratuit (certains événements payants)', indoor: true, energie: 'faible', giuliaOk: true, note: 'Sessions "Wee Stories" avec marionnettes et chansons — vérifier calendrier février', highlights: 'Histoires interactives pour toddlers, café familial, bâtiment John Knox fascinant' },
  // SOFT PLAY & JEUX
  { nom: 'Little Foxes Play Cafe', adresse: '49 Morningside Road', lat: 55.9275, lng: -3.2060, distance: '10 min en taxi', duree: '1h–2h', prix: '£6/enfant + café', indoor: true, energie: 'élevé', giuliaOk: true, note: 'Zone dédiée 0–4 ans séparée des grands. Arriver tôt — très populaire. Excellent café pour les parents', highlights: 'Soft play bébé/toddler + jouets en bois + cuisine miniature + toboggan — pendant que les parents prennent un café' },
  { nom: 'Playtown Edinburgh', adresse: 'Ocean Terminal, Leith', lat: 55.9818, lng: -3.1775, distance: '15 min bus ou 10 min taxi', duree: '1h30–2h', prix: '£7–9/enfant', indoor: true, energie: 'élevé', giuliaOk: true, note: 'Section "Toddler Town" séparée des grands enfants. Combiner avec Britannia et shopping', highlights: 'Immense soft play avec section dédiée toddlers : mini-toboggans, piscine à balles, jeux de rôle (magasin, cuisine)' },
  { nom: 'Clambers (Royal Commonwealth Pool)', adresse: '21 Dalkeith Road', lat: 55.9400, lng: -3.1760, distance: '15 min bus ou 8 min taxi', duree: '1h', prix: '£6–8/session', indoor: true, energie: 'élevé', giuliaOk: true, note: 'Section séparée pour les <3 ans. La piscine à côté a aussi des "Toddler Splash" sessions', highlights: 'Soft play dédié + possibilité de session piscine bébé dans la foulée' },
  { nom: 'Bookbug Session (Bibliothèque Centrale)', adresse: 'George IV Bridge', lat: 55.9482, lng: -3.1920, distance: '8 min à pied', duree: '30 min', prix: 'Gratuit', indoor: true, energie: 'faible', giuliaOk: true, note: 'Sessions mar/jeu matin ~10h30. Drop-in, pas de résa. Les visiteurs étrangers sont bienvenus — les chansons et instruments sont universels', highlights: 'Histoires, comptines, instruments de musique pour bébés — programme national écossais gratuit' },
  // OUTDOOR
  { nom: 'Edinburgh Castle', adresse: 'Castlehill, Old Town', lat: 55.9486, lng: -3.1999, distance: '10 min à pied', duree: '1h30–2h', prix: '£19.50/adulte, gratuit <5 ans', indoor: false, energie: 'moyen', giuliaOk: true, note: 'Porte-bébé OBLIGATOIRE (pas de poussette). Réserver en ligne = plus rapide', highlights: 'Joyaux de la Couronne, Pierre du Destin, vue panoramique, canon Mons Meg' },
  { nom: 'Edinburgh Zoo', adresse: 'Corstorphine', lat: 55.9425, lng: -3.2685, distance: '20 min en bus (n°26) ou 15 min taxi', duree: '2–3h', prix: '£20/adulte, gratuit <3 ans', indoor: false, energie: 'élevé', giuliaOk: true, note: 'En pente — prendre aussi un porte-bébé. Commencer en haut et descendre. Février = calme, animaux plus proches', highlights: 'Parade des manchots 14h15, volière couverte (chaud en hiver), pandas roux, zone "Wee Beasties" à hauteur de toddler' },
  { nom: 'Princes Street Gardens & Playground', adresse: 'Princes Street', lat: 55.9510, lng: -3.2000, distance: '3 min à pied', duree: '30min–1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Aire de jeux avec balançoires bébé + vue château. À 3 min — parfait quand Giulia a besoin de sortir' },
  { nom: 'Royal Botanic Garden', adresse: '20A Inverleith Row', lat: 55.9650, lng: -3.2090, distance: '20 min à pied via Stockbridge', duree: '1h–1h30', prix: 'Gratuit (serres £7.50, gratuit <15 ans)', indoor: false, energie: 'faible', giuliaOk: true, note: 'Les 10 serres chauffées sont parfaites en février — on se croirait sous les tropiques. Aire de jeux côté East Gate', highlights: 'Serres tropicales chauffées, écureuils partout, grands espaces pour trottiner, playground' },
  { nom: 'Gorgie City Farm', adresse: '51 Gorgie Road', lat: 55.9385, lng: -3.2380, distance: '15 min bus ou 10 min taxi', duree: '1h', prix: 'Gratuit (donations bienvenues)', indoor: false, energie: 'faible', giuliaOk: true, note: 'Bottes ou chaussures imperméables recommandées (boue possible). Café basique sur place', highlights: 'Vraie ferme en ville — cochons, chèvres, poules, lapins à hauteur de Giulia. Moments de nourrissage quotidiens' },
  { nom: 'Holyrood Park & St Margaret\'s Loch', adresse: 'Queen\'s Drive', lat: 55.9445, lng: -3.1620, distance: '20 min à pied', duree: '45min–1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Rester sur les chemins plats autour du loch, pas besoin de grimper Arthur\'s Seat', highlights: 'Canards et cygnes à observer (amener des flocons d\'avoine), sentier plat autour du loch, ruines atmosphériques' },
  { nom: 'Portobello Beach', adresse: 'Portobello Promenade', lat: 55.9530, lng: -3.1140, distance: '20 min bus ou 12 min taxi', duree: '1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Même en février, la plage est magique. Cafés le long de la promenade pour se réchauffer (The Espy, Beach House)', highlights: 'Plage de sable, vagues, promenade — les toddlers adorent le sable même en hiver. Piscine couverte juste à côté' },
  { nom: 'Toddler Splash (Royal Commonwealth Pool)', adresse: '21 Dalkeith Road', lat: 55.9400, lng: -3.1760, distance: '15 min bus ou 8 min taxi', duree: '45 min', prix: '£5–6/session', indoor: true, energie: 'élevé', giuliaOk: true, note: 'Couches de bain obligatoires (en vente sur place). Vestiaires familiaux. Réserver en ligne', highlights: 'Piscine chauffée peu profonde avec jouets et bouées — parfait pour un toddler qui bouge !' },
  // HIDDEN GEMS
  { nom: 'Victoria Street & Grassmarket', adresse: 'Old Town', lat: 55.9484, lng: -3.1948, distance: '10 min à pied', duree: '45min', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Rue colorée qui a inspiré Harry Potter, fudge, shortbread, pubs avec terrasses' },
  { nom: 'Royal Mile & Closes', adresse: 'Old Town', lat: 55.9505, lng: -3.1895, distance: '10 min à pied', duree: '1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Ruelles médiévales secrètes — Dunbar\'s Close = jardin caché du 17e, Giulia peut explorer en sécurité' },
  { nom: 'Calton Hill', adresse: 'Waterloo Place', lat: 55.9548, lng: -3.1825, distance: '15 min à pied', duree: '40min', prix: 'Gratuit', indoor: false, energie: 'moyen', giuliaOk: true, note: 'Porte-bébé recommandé. Montée 10 min — ça vaut le coup', highlights: 'Vue 360° spectaculaire — le meilleur panorama d\'Édimbourg, surtout en fin de journée' },
  { nom: 'Stockbridge', adresse: 'Quartier Stockbridge', lat: 55.9580, lng: -3.2080, distance: '20 min à pied', duree: '1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, highlights: 'Quartier bohème, cafés branchés, Circus Lane (ruelle la plus instagrammable de la ville)' },
  { nom: 'Dean Village & Water of Leith', adresse: 'Dean Village', lat: 55.9530, lng: -3.2170, distance: '15 min à pied', duree: '45min–1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Sentier praticable en poussette', highlights: 'Village médiéval au bord de la rivière — hors du temps, canards, cascades miniatures' },
  { nom: 'Gallery of Modern Art + Sculpture Park', adresse: '75 Belford Road', lat: 55.9520, lng: -3.2190, distance: '20 min à pied', duree: '1h', prix: 'Gratuit', indoor: false, energie: 'faible', giuliaOk: true, note: 'Juste à côté de Dean Village — combiner les deux', highlights: 'Sculptures en plein air que Giulia peut approcher, collines herbeuses pour trottiner, art coloré et fun' },
];

// === BALADES ===
const BALADES = [
  { nom: 'Princes Street Gardens', lat: 55.9510, lng: -3.2000, description: 'La promenade iconique au pied du château — vue imprenable', duree: '20–30 min', difficulte: 'Très facile, plat', poussetteOk: true, depart: '3 min de l\'hôtel', envies: ['vue', 'facile', 'proche', 'bébé'] },
  { nom: 'Water of Leith Walkway', lat: 55.9540, lng: -3.2170, description: 'Le long de la rivière depuis Dean Village jusqu\'à Stockbridge — hors du temps et magnifique', duree: '45min–1h', difficulte: 'Facile, plat', poussetteOk: true, depart: '15 min de l\'hôtel', envies: ['nature', 'pittoresque', 'rivière', 'calme'] },
  { nom: 'Old Town Discovery', lat: 55.9500, lng: -3.1900, description: 'Royal Mile, closes médiévales secrètes, Victoria Street, Grassmarket — le cœur historique', duree: '1h–1h30', difficulte: 'Moyen (pavés et quelques côtes)', poussetteOk: false, note: 'Porte-bébé très recommandé sur les pavés irréguliers', depart: '10 min de l\'hôtel', envies: ['histoire', 'pittoresque', 'photo', 'animation'] },
  { nom: 'New Town Architecture Walk', lat: 55.9535, lng: -3.2070, description: 'Charlotte Square, Heriot Row, Moray Place — architecture géorgienne classée UNESCO', duree: '45 min', difficulte: 'Facile', poussetteOk: true, depart: '5 min de l\'hôtel', envies: ['architecture', 'calme', 'élégant', 'historique'] },
  { nom: 'Dean Village Loop', lat: 55.9530, lng: -3.2170, description: 'Descente vers l\'ancien village de meuniers au bord de la rivière', duree: '45min–1h', difficulte: 'Facile', poussetteOk: true, depart: '15 min de l\'hôtel', envies: ['pittoresque', 'nature', 'calme', 'village'] },
  { nom: 'Calton Hill Sunset Walk', lat: 55.9548, lng: -3.1825, description: 'Montée douce pour une vue panoramique spectaculaire sur toute la ville', duree: '30–40 min', difficulte: 'Moyen (montée 10 min)', poussetteOk: false, note: 'Porte-bébé indispensable', depart: '15 min de l\'hôtel', envies: ['vue', 'panorama', 'coucher de soleil', 'photo'] },
  { nom: 'Stockbridge & Circus Lane', lat: 55.9580, lng: -3.2080, description: 'Quartier bohème + Circus Lane, la plus jolie petite ruelle instagrammable de la ville', duree: '1h', difficulte: 'Facile', poussetteOk: true, depart: '20 min à pied', envies: ['pittoresque', 'photo', 'local', 'shopping'] },
  { nom: 'Royal Botanic Garden', lat: 55.9650, lng: -3.2090, description: 'Serres tropicales chauffées + jardins avec écureuils et playground', duree: '1h–1h30', difficulte: 'Facile, plat', poussetteOk: true, depart: '20 min via Stockbridge', envies: ['nature', 'jardin', 'calme', 'tropiques'] },
  { nom: 'Portobello Beach', lat: 55.9530, lng: -3.1140, description: 'La plage d\'Édimbourg — sable, vagues et promenade avec cafés', duree: '1h', difficulte: 'Facile', poussetteOk: true, note: 'Le sable peut bloquer la poussette — porte-bébé sur la plage', depart: '20 min en bus ou taxi', envies: ['plage', 'nature', 'espace', 'dépaysement'] },
  { nom: 'Holyrood Park & Loch', lat: 55.9445, lng: -3.1620, description: 'Tour du loch avec canards et cygnes, au pied d\'Arthur\'s Seat', duree: '45 min', difficulte: 'Facile, plat autour du loch', poussetteOk: true, depart: '20 min à pied', envies: ['nature', 'animaux', 'calme', 'historique'] },
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
    grassmarket: 'dans le quartier Grassmarket / Victoria Street',
    stockbridge: 'vers Stockbridge / Dean Village',
    leith: 'dans le quartier de Leith (port, Ocean Terminal)',
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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
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
