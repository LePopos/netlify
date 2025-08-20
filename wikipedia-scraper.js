const { chromium } = require('playwright');
const fs = require('fs');

// Liste des combattants avec leurs noms Wikipedia
const fighters = {
    p4p: [
        { name: 'Islam Makhachev', wikiName: 'Islam_Makhachev' },
        { name: 'Jon Jones', wikiName: 'Jon_Jones' },
        { name: 'Alexander Volkanovski', wikiName: 'Alexander_Volkanovski' },
        { name: 'Leon Edwards', wikiName: 'Leon_Edwards' },
        { name: 'Sean O\'Malley', wikiName: 'Sean_O\'Malley' },
        { name: 'Charles Oliveira', wikiName: 'Charles_Oliveira' },
        { name: 'Max Holloway', wikiName: 'Max_Holloway' },
        { name: 'Dustin Poirier', wikiName: 'Dustin_Poirier' },
        { name: 'Dricus du Plessis', wikiName: 'Dricus_du_Plessis' },
        { name: 'Alex Pereira', wikiName: 'Alex_Pereira' }
    ],
    champions: [
        { name: 'Jon Jones', wikiName: 'Jon_Jones' },
        { name: 'Alex Pereira', wikiName: 'Alex_Pereira' },
        { name: 'Dricus du Plessis', wikiName: 'Dricus_du_Plessis' },
        { name: 'Belal Muhammad', wikiName: 'Belal_Muhammad' },
        { name: 'Islam Makhachev', wikiName: 'Islam_Makhachev' },
        { name: 'Ilia Topuria', wikiName: 'Ilia_Topuria' },
        { name: 'Merab Dvalishvili', wikiName: 'Merab_Dvalishvili' },
        { name: 'Alexandre Pantoja', wikiName: 'Alexandre_Pantoja' },
        { name: 'Raquel Pennington', wikiName: 'Raquel_Pennington' },
        { name: 'Amanda Nunes', wikiName: 'Amanda_Nunes' },
        { name: 'Alexa Grasso', wikiName: 'Alexa_Grasso' },
        { name: 'Zhang Weili', wikiName: 'Zhang_Weili' }
    ],
    contenders: [
        { name: 'Stipe Miocic', wikiName: 'Stipe_Miocic' },
        { name: 'Tom Aspinall', wikiName: 'Tom_Aspinall' },
        { name: 'Ciryl Gane', wikiName: 'Ciryl_Gane' },
        { name: 'Curtis Blaydes', wikiName: 'Curtis_Blaydes' },
        { name: 'Jamahal Hill', wikiName: 'Jamahal_Hill' },
        { name: 'Magomed Ankalaev', wikiName: 'Magomed_Ankalaev' },
        { name: 'Jan Blachowicz', wikiName: 'Jan_Błachowicz' },
        { name: 'Sean Strickland', wikiName: 'Sean_Strickland' },
        { name: 'Israel Adesanya', wikiName: 'Israel_Adesanya' },
        { name: 'Robert Whittaker', wikiName: 'Robert_Whittaker' },
        { name: 'Marvin Vettori', wikiName: 'Marvin_Vettori' },
        { name: 'Shavkat Rakhmonov', wikiName: 'Shavkat_Rakhmonov' },
        { name: 'Kamaru Usman', wikiName: 'Kamaru_Usman' },
        { name: 'Colby Covington', wikiName: 'Colby_Covington' },
        { name: 'Arman Tsarukyan', wikiName: 'Arman_Tsarukyan' },
        { name: 'Justin Gaethje', wikiName: 'Justin_Gaethje' },
        { name: 'Brian Ortega', wikiName: 'Brian_Ortega' },
        { name: 'Josh Emmett', wikiName: 'Josh_Emmett' },
        { name: 'Cory Sandhagen', wikiName: 'Cory_Sandhagen' },
        { name: 'Petr Yan', wikiName: 'Petr_Yan' },
        { name: 'Jose Aldo', wikiName: 'José_Aldo' },
        { name: 'Brandon Royval', wikiName: 'Brandon_Royval' },
        { name: 'Kai Kara-France', wikiName: 'Kai_Kara-France' },
        { name: 'Brandon Moreno', wikiName: 'Brandon_Moreno' },
        { name: 'Julianna Peña', wikiName: 'Julianna_Peña' },
        { name: 'Holly Holm', wikiName: 'Holly_Holm' },
        { name: 'Valentina Shevchenko', wikiName: 'Valentina_Shevchenko' },
        { name: 'Katlyn Chookagian', wikiName: 'Katlyn_Chookagian' },
        { name: 'Jessica Andrade', wikiName: 'Jessica_Andrade' }
    ]
};

async function getWikipediaPhoto(fighterName, wikiName) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
        console.log(`📸 Recherche photo pour ${fighterName}...`);
        
        const wikiUrl = `https://en.wikipedia.org/wiki/${wikiName}`;
        await page.goto(wikiUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
        
        // Chercher l'image principale dans l'infobox
        const photoSelectors = [
            '.infobox img',
            '.infobox-image img',
            '.vcard img',
            'table.infobox img',
            'table.vcard img'
        ];
        
        let photoUrl = null;
        
        for (const selector of photoSelectors) {
            try {
                const img = await page.$(selector);
                if (img) {
                    let src = await img.getAttribute('src');
                    if (src && !src.includes('commons-logo') && !src.includes('Edit-icon')) {
                        // Convertir en URL complète
                        if (src.startsWith('//')) {
                            src = 'https:' + src;
                        } else if (src.startsWith('/')) {
                            src = 'https://en.wikipedia.org' + src;
                        }
                        
                        // Prendre une résolution plus élevée si possible
                        if (src.includes('/thumb/')) {
                            src = src.replace(/\/\d+px-[^/]*$/, '/300px-' + src.split('/').pop());
                        }
                        
                        photoUrl = src;
                        break;
                    }
                }
            } catch (e) {
                continue;
            }
        }
        
        await browser.close();
        
        if (photoUrl) {
            console.log(`✅ Photo trouvée pour ${fighterName}: ${photoUrl}`);
            return photoUrl;
        } else {
            console.log(`❌ Pas de photo trouvée pour ${fighterName}`);
            return null;
        }
        
    } catch (error) {
        console.log(`⚠️  Erreur pour ${fighterName}: ${error.message}`);
        await browser.close();
        return null;
    }
}

async function scrapeAllWikipediaPhotos() {
    console.log('🚀 Démarrage du scraping Wikipedia...');
    
    const photoData = {};
    
    // Combiner tous les combattants
    const allFighters = [
        ...fighters.p4p,
        ...fighters.champions,
        ...fighters.contenders
    ];
    
    // Supprimer les doublons
    const uniqueFighters = allFighters.filter((fighter, index, self) => 
        index === self.findIndex(f => f.name === fighter.name)
    );
    
    console.log(`📋 Total de ${uniqueFighters.length} combattants à traiter`);
    
    for (const fighter of uniqueFighters) {
        const photo = await getWikipediaPhoto(fighter.name, fighter.wikiName);
        if (photo) {
            photoData[fighter.name] = photo;
        }
        
        // Pause pour éviter de surcharger Wikipedia
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Sauvegarder les données
    fs.writeFileSync('wikipedia-photos.json', JSON.stringify(photoData, null, 2));
    console.log('💾 Photos sauvegardées dans wikipedia-photos.json');
    
    // Générer le fichier de données UFC mis à jour
    await updateUFCDataWithPhotos(photoData);
    
    console.log('🎉 Scraping Wikipedia terminé !');
    console.log(`📊 ${Object.keys(photoData).length} photos récupérées`);
}

async function updateUFCDataWithPhotos(photoData) {
    // Lire les données UFC existantes
    let ufcData;
    try {
        const existingData = fs.readFileSync('ufc-data.js', 'utf8');
        eval(existingData.replace('const ufcRankingsData = ', 'ufcData = '));
    } catch (error) {
        console.log('⚠️  Impossible de lire ufc-data.js, utilisation des données par défaut');
        return;
    }
    
    // Mettre à jour avec les photos Wikipedia
    Object.keys(ufcData).forEach(division => {
        ufcData[division].forEach(fighter => {
            if (photoData[fighter.name]) {
                fighter.photo = photoData[fighter.name];
                console.log(`📸 Photo mise à jour pour ${fighter.name}`);
            }
        });
    });
    
    // Générer le nouveau fichier
    const jsData = `// Données UFC avec photos Wikipedia
const ufcRankingsData = ${JSON.stringify(ufcData, null, 2)};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos Wikipedia');`;
    
    fs.writeFileSync('ufc-data-wikipedia.js', jsData);
    console.log('📄 Nouveau fichier généré: ufc-data-wikipedia.js');
}

// Exécution
scrapeAllWikipediaPhotos().catch(console.error);