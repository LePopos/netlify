const fs = require('fs');

// Lire les photos Wikipedia
const wikipediaPhotos = JSON.parse(fs.readFileSync('wikipedia-photos.json', 'utf8'));

// Lire les données temporaires
const tempDataContent = fs.readFileSync('ufc-data-wiki-temp.js', 'utf8');
let ufcData;
eval(tempDataContent.replace('const ufcRankingsData = ', 'ufcData = ').replace('Object.assign(mockRankings, ufcRankingsData);', '').replace('console.log(\'✅ Données UFC chargées avec photos Wikipedia\');', ''));

// Mettre à jour avec les vraies photos Wikipedia
Object.keys(ufcData).forEach(division => {
    ufcData[division].forEach(fighter => {
        if (wikipediaPhotos[fighter.name]) {
            fighter.photo = wikipediaPhotos[fighter.name];
            console.log(`📸 Photo mise à jour pour ${fighter.name}`);
        }
    });
});

// Générer le fichier final
const finalData = `// Données UFC avec vraies photos Wikipedia
const ufcRankingsData = ${JSON.stringify(ufcData, null, 2)};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec vraies photos Wikipedia (${Object.keys(wikipediaPhotos).length} photos)');`;

fs.writeFileSync('ufc-data-final.js', finalData);
console.log(`🎉 Fichier final créé avec ${Object.keys(wikipediaPhotos).length} photos Wikipedia !`);