const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeUFCRankings() {
    console.log('🚀 Démarrage du scraping UFC Rankings...');
    
    const browser = await chromium.launch({ 
        headless: false, // Voir le navigateur en action
        slowMo: 1000 // Ralentir pour éviter la détection
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    
    const page = await context.newPage();
    
    try {
        console.log('📡 Navigation vers UFC Rankings...');
        await page.goto('https://www.ufc.com/rankings', { 
            waitUntil: 'networkidle',
            timeout: 60000 
        });
        
        // Attendre que la page soit chargée
        await page.waitForSelector('.view-rankings', { timeout: 30000 });
        console.log('✅ Page chargée avec succès');
        
        const rankings = {};
        
        // Scraper Pound for Pound
        console.log('🏆 Extraction Pound for Pound...');
        const p4pFighters = await page.$$eval('.view-rankings .view-content .views-row', (rows) => {
            return rows.slice(0, 10).map((row, index) => {
                const nameElement = row.querySelector('.views-field-title a, .views-field-field-fighter-short-name a');
                const nicknameElement = row.querySelector('.views-field-nickname .field-content, .views-field-field-fighter-nickname .field-content');
                const recordElement = row.querySelector('.views-field-field-fighter-record .field-content, .views-field-record .field-content');
                const imageElement = row.querySelector('img');
                
                return {
                    rank: index + 1,
                    name: nameElement ? nameElement.textContent.trim() : `Fighter ${index + 1}`,
                    nickname: nicknameElement ? nicknameElement.textContent.trim().replace(/['"]/g, '') : '',
                    record: recordElement ? recordElement.textContent.trim() : '0-0-0',
                    photo: imageElement ? imageElement.src : ''
                };
            });
        });
        
        rankings.p4p = p4pFighters;
        console.log(`✅ P4P: ${p4pFighters.length} combattants extraits`);
        
        // Scraper les divisions par poids
        const divisions = [
            { name: 'heavyweight', selector: '[data-drupal-selector="edit-men-heavyweight"]' },
            { name: 'lightheavyweight', selector: '[data-drupal-selector="edit-men-light-heavyweight"]' },
            { name: 'middleweight', selector: '[data-drupal-selector="edit-men-middleweight"]' },
            { name: 'welterweight', selector: '[data-drupal-selector="edit-men-welterweight"]' },
            { name: 'lightweight', selector: '[data-drupal-selector="edit-men-lightweight"]' },
            { name: 'featherweight', selector: '[data-drupal-selector="edit-men-featherweight"]' },
            { name: 'bantamweight', selector: '[data-drupal-selector="edit-men-bantamweight"]' },
            { name: 'flyweight', selector: '[data-drupal-selector="edit-men-flyweight"]' },
            { name: 'womensbantamweight', selector: '[data-drupal-selector="edit-women-bantamweight"]' },
            { name: 'womensfeatherweight', selector: '[data-drupal-selector="edit-women-featherweight"]' },
            { name: 'womensflyweight', selector: '[data-drupal-selector="edit-women-flyweight"]' },
            { name: 'womensstrawweight', selector: '[data-drupal-selector="edit-women-strawweight"]' }
        ];
        
        for (const division of divisions) {
            console.log(`🥊 Extraction ${division.name}...`);
            
            try {
                // Cliquer sur l'onglet de la division
                await page.click(division.selector);
                await page.waitForTimeout(2000);
                
                const fighters = await page.$$eval('.view-rankings .view-content .views-row', (rows) => {
                    return rows.slice(0, 5).map((row, index) => {
                        const nameElement = row.querySelector('.views-field-title a, .views-field-field-fighter-short-name a');
                        const nicknameElement = row.querySelector('.views-field-nickname .field-content, .views-field-field-fighter-nickname .field-content');
                        const recordElement = row.querySelector('.views-field-field-fighter-record .field-content, .views-field-record .field-content');
                        const imageElement = row.querySelector('img');
                        const championElement = row.querySelector('.views-field-field-fighter-title .field-content');
                        
                        const isChampion = championElement && championElement.textContent.includes('Champion');
                        
                        return {
                            rank: isChampion ? 'C' : (index === 0 && !isChampion ? 'C' : index + 1),
                            name: nameElement ? nameElement.textContent.trim() : `Fighter ${index + 1}`,
                            nickname: nicknameElement ? nicknameElement.textContent.trim().replace(/['"]/g, '') : '',
                            record: recordElement ? recordElement.textContent.trim() : '0-0-0',
                            photo: imageElement ? imageElement.src : ''
                        };
                    });
                });
                
                rankings[division.name] = fighters;
                console.log(`✅ ${division.name}: ${fighters.length} combattants extraits`);
                
            } catch (divisionError) {
                console.log(`⚠️  Erreur ${division.name}: ${divisionError.message}`);
                // Données de fallback
                rankings[division.name] = [
                    { rank: 'C', name: 'Champion TBD', nickname: '', record: '0-0-0', photo: '' },
                    { rank: 1, name: 'Contender #1', nickname: '', record: '0-0-0', photo: '' },
                    { rank: 2, name: 'Contender #2', nickname: '', record: '0-0-0', photo: '' },
                    { rank: 3, name: 'Contender #3', nickname: '', record: '0-0-0', photo: '' },
                    { rank: 4, name: 'Contender #4', nickname: '', record: '0-0-0', photo: '' }
                ];
            }
        }
        
        // Sauvegarder les données
        const jsonData = JSON.stringify(rankings, null, 2);
        fs.writeFileSync('fighters-data.json', jsonData);
        console.log('💾 Données sauvegardées dans fighters-data.json');
        
        // Générer le JavaScript pour la page
        const jsData = `// Données UFC extraites automatiquement
const ufcRankingsData = ${jsonData};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
`;
        
        fs.writeFileSync('ufc-data.js', jsData);
        console.log('📄 Script JavaScript généré: ufc-data.js');
        
        console.log('🎉 Scraping terminé avec succès !');
        console.log(`📊 Total des divisions extraites: ${Object.keys(rankings).length}`);
        
    } catch (error) {
        console.error('❌ Erreur lors du scraping:', error);
    } finally {
        await browser.close();
    }
}

// Exécution
scrapeUFCRankings().catch(console.error);