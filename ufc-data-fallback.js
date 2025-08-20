// Données UFC avec URLs d'images fonctionnelles (fallback)
const ufcFallbackData = {
    p4p: [
        { rank: 1, name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://static.ufc.ca/img/Fighters/Islam_Makhachev_statistics.png' },
        { rank: 2, name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://static.ufc.ca/img/Fighters/Jon_Jones_statistics.png' },
        { rank: 3, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://static.ufc.ca/img/Fighters/Alexander_Volkanovski_statistics.png' },
        { rank: 4, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://static.ufc.ca/img/Fighters/Leon_Edwards_statistics.png' },
        { rank: 5, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://static.ufc.ca/img/Fighters/Sean_OMalley_statistics.png' },
        { rank: 6, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://static.ufc.ca/img/Fighters/Charles_Oliveira_statistics.png' },
        { rank: 7, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://static.ufc.ca/img/Fighters/Max_Holloway_statistics.png' },
        { rank: 8, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://static.ufc.ca/img/Fighters/Dustin_Poirier_statistics.png' },
        { rank: 9, name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://static.ufc.ca/img/Fighters/Dricus_du_Plessis_statistics.png' },
        { rank: 10, name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://static.ufc.ca/img/Fighters/Alex_Pereira_statistics.png' }
    ],
    heavyweight: [
        { rank: 'C', name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://static.ufc.ca/img/Fighters/Jon_Jones_statistics.png' },
        { rank: 1, name: 'Stipe Miocic', nickname: '', record: '20-4-0', photo: 'https://static.ufc.ca/img/Fighters/Stipe_Miocic_statistics.png' },
        { rank: 2, name: 'Tom Aspinall', nickname: '', record: '13-3-0', photo: 'https://static.ufc.ca/img/Fighters/Tom_Aspinall_statistics.png' },
        { rank: 3, name: 'Ciryl Gane', nickname: 'Bon Gamin', record: '11-2-0', photo: 'https://static.ufc.ca/img/Fighters/Ciryl_Gane_statistics.png' },
        { rank: 4, name: 'Curtis Blaydes', nickname: 'Razor', record: '17-4-0', photo: 'https://static.ufc.ca/img/Fighters/Curtis_Blaydes_statistics.png' }
    ]
};

// Si les données scrapées ne sont pas disponibles, utiliser le fallback
if (typeof ufcRankingsData === 'undefined') {
    window.ufcRankingsData = ufcFallbackData;
    console.log('📋 Utilisation des données de fallback');
} else {
    console.log('✅ Données scrapées chargées');
}