const fs = require('fs');

// Lire les photos Wikipedia
const wikipediaPhotos = JSON.parse(fs.readFileSync('wikipedia-photos.json', 'utf8'));

// Corriger les URLs en supprimant les formats incorrects
const fixedPhotos = {};
Object.keys(wikipediaPhotos).forEach(name => {
    let url = wikipediaPhotos[name];
    // Supprimer les formats incorrects comme /300px-250px-
    url = url.replace(/\/\d+px-\d+px-/g, '/250px-');
    // Assurer qu'on a une taille raisonnable
    if (!url.includes('/250px-') && !url.includes('/300px-')) {
        // Si pas de taille, ajouter une taille par défaut
        url = url.replace('/wikipedia/commons/thumb/', '/wikipedia/commons/thumb/').replace(/\.jpg$/, '/250px-' + url.split('/').pop());
        url = url.replace(/\.png$/, '/250px-' + url.split('/').pop());
    }
    fixedPhotos[name] = url;
});

// Générer les données UFC avec URLs corrigées
const ufcData = {
    p4p: [
        { rank: 1, name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Islam_Makhachev_2022_UFC_belt_%28cropped%29.png/250px-Islam_Makhachev_2022_UFC_belt_%28cropped%29.png' },
        { rank: 2, name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jon_Jones_-_Supporting_Brain_Health_Study.jpg/250px-Jon_Jones_-_Supporting_Brain_Health_Study.jpg' },
        { rank: 3, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Alexander_Volkanovski_at_UFC_232.jpg/250px-Alexander_Volkanovski_at_UFC_232.jpg' },
        { rank: 4, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Leon_Edwards_2021.png/250px-Leon_Edwards_2021.png' },
        { rank: 5, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg/250px-Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg' },
        { rank: 6, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Charles_Oliveira_do_Bronxs.jpg/250px-Charles_Oliveira_do_Bronxs.jpg' },
        { rank: 7, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg/250px-Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg' },
        { rank: 8, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dustin_Poirier_%28cropped%29.jpg/250px-Dustin_Poirier_%28cropped%29.jpg' },
        { rank: 9, name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dricus_du_Plessis_%28cropped%29.png/250px-Dricus_du_Plessis_%28cropped%29.png' },
        { rank: 10, name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Alex_Pereira_%28cropped%29.png/250px-Alex_Pereira_%28cropped%29.png' }
    ],
    heavyweight: [
        { rank: 'C', name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jon_Jones_-_Supporting_Brain_Health_Study.jpg/250px-Jon_Jones_-_Supporting_Brain_Health_Study.jpg' },
        { rank: 1, name: 'Stipe Miocic', nickname: '', record: '20-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Stipe_Miocic_2017_%28cropped%29.jpg/250px-Stipe_Miocic_2017_%28cropped%29.jpg' },
        { rank: 2, name: 'Tom Aspinall', nickname: '', record: '13-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tom_Aspinall_%28cropped%29.jpg/250px-Tom_Aspinall_%28cropped%29.jpg' },
        { rank: 3, name: 'Ciryl Gane', nickname: 'Bon Gamin', record: '11-2-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ciryl_Gane_%28cropped%29.jpg/250px-Ciryl_Gane_%28cropped%29.jpg' },
        { rank: 4, name: 'Curtis Blaydes', nickname: 'Razor', record: '17-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Curtis_Blaydes_%28cropped%29.jpg/250px-Curtis_Blaydes_%28cropped%29.jpg' }
    ]
};

// Appliquer les photos corrigées
Object.keys(ufcData).forEach(division => {
    ufcData[division].forEach(fighter => {
        if (fixedPhotos[fighter.name]) {
            fighter.photo = fixedPhotos[fighter.name];
        }
    });
});

// Générer le fichier final corrigé
const finalData = `// Données UFC avec photos Wikipedia corrigées
const ufcRankingsData = ${JSON.stringify(ufcData, null, 2)};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos Wikipedia corrigées');`;

fs.writeFileSync('ufc-data-working.js', finalData);
console.log('🎉 Fichier corrigé créé : ufc-data-working.js');