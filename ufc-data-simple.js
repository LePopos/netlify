// Données UFC avec photos simples qui fonctionnent
const ufcRankingsData = {
    p4p: [
        { rank: 1, name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://picsum.photos/200/250?random=1' },
        { rank: 2, name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://picsum.photos/200/250?random=2' },
        { rank: 3, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://picsum.photos/200/250?random=3' },
        { rank: 4, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://picsum.photos/200/250?random=4' },
        { rank: 5, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://picsum.photos/200/250?random=5' },
        { rank: 6, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://picsum.photos/200/250?random=6' },
        { rank: 7, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://picsum.photos/200/250?random=7' },
        { rank: 8, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://picsum.photos/200/250?random=8' },
        { rank: 9, name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://picsum.photos/200/250?random=9' },
        { rank: 10, name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://picsum.photos/200/250?random=10' }
    ],
    heavyweight: [
        { rank: 'C', name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://picsum.photos/200/250?random=11' },
        { rank: 1, name: 'Stipe Miocic', nickname: '', record: '20-4-0', photo: 'https://picsum.photos/200/250?random=12' },
        { rank: 2, name: 'Tom Aspinall', nickname: '', record: '13-3-0', photo: 'https://picsum.photos/200/250?random=13' },
        { rank: 3, name: 'Ciryl Gane', nickname: 'Bon Gamin', record: '11-2-0', photo: 'https://picsum.photos/200/250?random=14' },
        { rank: 4, name: 'Curtis Blaydes', nickname: 'Razor', record: '17-4-0', photo: 'https://picsum.photos/200/250?random=15' }
    ],
    lightheavyweight: [
        { rank: 'C', name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://picsum.photos/200/250?random=16' },
        { rank: 1, name: 'Jamahal Hill', nickname: 'Sweet Dreams', record: '12-1-0', photo: 'https://picsum.photos/200/250?random=17' },
        { rank: 2, name: 'Magomed Ankalaev', nickname: '', record: '18-1-0', photo: 'https://picsum.photos/200/250?random=18' },
        { rank: 3, name: 'Jan Blachowicz', nickname: '', record: '29-9-0', photo: 'https://picsum.photos/200/250?random=19' },
        { rank: 4, name: 'Aleksandar Rakic', nickname: 'Rocket', record: '14-3-0', photo: 'https://picsum.photos/200/250?random=20' }
    ],
    middleweight: [
        { rank: 'C', name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://picsum.photos/200/250?random=21' },
        { rank: 1, name: 'Sean Strickland', nickname: 'Tarzan', record: '28-5-0', photo: 'https://picsum.photos/200/250?random=22' },
        { rank: 2, name: 'Israel Adesanya', nickname: 'The Last Stylebender', record: '24-3-0', photo: 'https://picsum.photos/200/250?random=23' },
        { rank: 3, name: 'Robert Whittaker', nickname: 'The Reaper', record: '25-7-0', photo: 'https://picsum.photos/200/250?random=24' },
        { rank: 4, name: 'Marvin Vettori', nickname: 'The Italian Dream', record: '19-6-0', photo: 'https://picsum.photos/200/250?random=25' }
    ],
    welterweight: [
        { rank: 'C', name: 'Belal Muhammad', nickname: 'Remember the Name', record: '23-3-0', photo: 'https://picsum.photos/200/250?random=26' },
        { rank: 1, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://picsum.photos/200/250?random=27' },
        { rank: 2, name: 'Shavkat Rakhmonov', nickname: 'Nomad', record: '18-0-0', photo: 'https://picsum.photos/200/250?random=28' },
        { rank: 3, name: 'Kamaru Usman', nickname: 'The Nigerian Nightmare', record: '20-3-0', photo: 'https://picsum.photos/200/250?random=29' },
        { rank: 4, name: 'Colby Covington', nickname: 'Chaos', record: '17-3-0', photo: 'https://picsum.photos/200/250?random=30' }
    ],
    lightweight: [
        { rank: 'C', name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://picsum.photos/200/250?random=31' },
        { rank: 1, name: 'Arman Tsarukyan', nickname: 'Ahalkalakets', record: '21-3-0', photo: 'https://picsum.photos/200/250?random=32' },
        { rank: 2, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://picsum.photos/200/250?random=33' },
        { rank: 3, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://picsum.photos/200/250?random=34' },
        { rank: 4, name: 'Justin Gaethje', nickname: 'The Highlight', record: '25-5-0', photo: 'https://picsum.photos/200/250?random=35' }
    ],
    featherweight: [
        { rank: 'C', name: 'Ilia Topuria', nickname: 'El Matador', record: '15-0-0', photo: 'https://picsum.photos/200/250?random=36' },
        { rank: 1, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://picsum.photos/200/250?random=37' },
        { rank: 2, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://picsum.photos/200/250?random=38' },
        { rank: 3, name: 'Brian Ortega', nickname: 'T-City', record: '15-3-0', photo: 'https://picsum.photos/200/250?random=39' },
        { rank: 4, name: 'Josh Emmett', nickname: '', record: '18-4-0', photo: 'https://picsum.photos/200/250?random=40' }
    ],
    bantamweight: [
        { rank: 'C', name: 'Merab Dvalishvili', nickname: 'The Machine', record: '17-4-0', photo: 'https://picsum.photos/200/250?random=41' },
        { rank: 1, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://picsum.photos/200/250?random=42' },
        { rank: 2, name: 'Cory Sandhagen', nickname: 'The Sandman', record: '17-4-0', photo: 'https://picsum.photos/200/250?random=43' },
        { rank: 3, name: 'Petr Yan', nickname: 'No Mercy', record: '17-4-0', photo: 'https://picsum.photos/200/250?random=44' },
        { rank: 4, name: 'Jose Aldo', nickname: 'Junior', record: '32-8-0', photo: 'https://picsum.photos/200/250?random=45' }
    ],
    flyweight: [
        { rank: 'C', name: 'Alexandre Pantoja', nickname: 'The Cannibal', record: '27-5-0', photo: 'https://picsum.photos/200/250?random=46' },
        { rank: 1, name: 'Brandon Royval', nickname: 'Raw Dawg', record: '15-6-0', photo: 'https://picsum.photos/200/250?random=47' },
        { rank: 2, name: 'Kai Kara-France', nickname: 'Don\'t Blink', record: '24-10-0', photo: 'https://picsum.photos/200/250?random=48' },
        { rank: 3, name: 'Amir Albazi', nickname: 'The Prince', record: '17-1-0', photo: 'https://picsum.photos/200/250?random=49' },
        { rank: 4, name: 'Brandon Moreno', nickname: 'The Assassin Baby', record: '21-6-2', photo: 'https://picsum.photos/200/250?random=50' }
    ],
    womensbantamweight: [
        { rank: 'C', name: 'Raquel Pennington', nickname: 'Rocky', record: '16-8-0', photo: 'https://picsum.photos/200/250?random=51' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://picsum.photos/200/250?random=52' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://picsum.photos/200/250?random=53' },
        { rank: 3, name: 'Ketlen Vieira', nickname: 'Fenomeno', record: '13-3-0', photo: 'https://picsum.photos/200/250?random=54' },
        { rank: 4, name: 'Mayra Bueno Silva', nickname: 'Sheetara', record: '10-2-1', photo: 'https://picsum.photos/200/250?random=55' }
    ],
    womensfeatherweight: [
        { rank: 'C', name: 'Amanda Nunes', nickname: 'The Lioness', record: '22-5-0', photo: 'https://picsum.photos/200/250?random=56' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://picsum.photos/200/250?random=57' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://picsum.photos/200/250?random=58' },
        { rank: 3, name: 'Germaine de Randamie', nickname: 'The Iron Lady', record: '10-5-0', photo: 'https://picsum.photos/200/250?random=59' },
        { rank: 4, name: 'Kayla Harrison', nickname: '', record: '16-1-0', photo: 'https://picsum.photos/200/250?random=60' }
    ],
    womensflyweight: [
        { rank: 'C', name: 'Alexa Grasso', nickname: 'The Mexican Dynamite', record: '16-3-1', photo: 'https://picsum.photos/200/250?random=61' },
        { rank: 1, name: 'Valentina Shevchenko', nickname: 'Bullet', record: '23-4-0', photo: 'https://picsum.photos/200/250?random=62' },
        { rank: 2, name: 'Katlyn Chookagian', nickname: 'Blond Fighter', record: '19-5-0', photo: 'https://picsum.photos/200/250?random=63' },
        { rank: 3, name: 'Manon Fiorot', nickname: 'The Beast', record: '11-1-0', photo: 'https://picsum.photos/200/250?random=64' },
        { rank: 4, name: 'Erin Blanchfield', nickname: 'Cold Blooded', record: '12-1-0', photo: 'https://picsum.photos/200/250?random=65' }
    ],
    womensstrawweight: [
        { rank: 'C', name: 'Zhang Weili', nickname: 'Magnum', record: '24-3-0', photo: 'https://picsum.photos/200/250?random=66' },
        { rank: 1, name: 'Tatiana Suarez', nickname: '', record: '10-0-0', photo: 'https://picsum.photos/200/250?random=67' },
        { rank: 2, name: 'Jessica Andrade', nickname: 'Bate Estaca', record: '25-12-0', photo: 'https://picsum.photos/200/250?random=68' },
        { rank: 3, name: 'Virna Jandiroba', nickname: '', record: '20-3-0', photo: 'https://picsum.photos/200/250?random=69' },
        { rank: 4, name: 'Amanda Lemos', nickname: 'Amandinha', record: '13-3-1', photo: 'https://picsum.photos/200/250?random=70' }
    ]
};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos de test Picsum');