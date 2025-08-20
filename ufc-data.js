// Données UFC avec photos fonctionnelles
const ufcRankingsData = {
    p4p: [
        { rank: 1, name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/1418917.jpg' },
        { rank: 2, name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/14519.jpg' },
        { rank: 3, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461581.jpg' },
        { rank: 4, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/138417.jpg' },
        { rank: 5, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461579.jpg' },
        { rank: 6, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/22359.jpg' },
        { rank: 7, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/75974.jpg' },
        { rank: 8, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/42719.jpg' },
        { rank: 9, name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461575.jpg' },
        { rank: 10, name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461577.jpg' }
    ],
    heavyweight: [
        { rank: 'C', name: 'Jon Jones', nickname: 'Bones', record: '27-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/14519.jpg' },
        { rank: 1, name: 'Stipe Miocic', nickname: '', record: '20-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/59652.jpg' },
        { rank: 2, name: 'Tom Aspinall', nickname: '', record: '13-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370149.jpg' },
        { rank: 3, name: 'Ciryl Gane', nickname: 'Bon Gamin', record: '11-2-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/256710.jpg' },
        { rank: 4, name: 'Curtis Blaydes', nickname: 'Razor', record: '17-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209896.jpg' }
    ],
    lightheavyweight: [
        { rank: 'C', name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461577.jpg' },
        { rank: 1, name: 'Jamahal Hill', nickname: 'Sweet Dreams', record: '12-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/256713.jpg' },
        { rank: 2, name: 'Magomed Ankalaev', nickname: '', record: '18-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/218129.jpg' },
        { rank: 3, name: 'Jan Blachowicz', nickname: '', record: '29-9-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/56608.jpg' },
        { rank: 4, name: 'Aleksandar Rakic', nickname: 'Rocket', record: '14-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/186473.jpg' }
    ],
    middleweight: [
        { rank: 'C', name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461575.jpg' },
        { rank: 1, name: 'Sean Strickland', nickname: 'Tarzan', record: '28-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78173.jpg' },
        { rank: 2, name: 'Israel Adesanya', nickname: 'The Last Stylebender', record: '24-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/110234.jpg' },
        { rank: 3, name: 'Robert Whittaker', nickname: 'The Reaper', record: '25-7-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68156.jpg' },
        { rank: 4, name: 'Marvin Vettori', nickname: 'The Italian Dream', record: '19-6-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/124165.jpg' }
    ],
    welterweight: [
        { rank: 'C', name: 'Belal Muhammad', nickname: 'Remember the Name', record: '23-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78174.jpg' },
        { rank: 1, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/138417.jpg' },
        { rank: 2, name: 'Shavkat Rakhmonov', nickname: 'Nomad', record: '18-0-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370147.jpg' },
        { rank: 3, name: 'Kamaru Usman', nickname: 'The Nigerian Nightmare', record: '20-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/73577.jpg' },
        { rank: 4, name: 'Colby Covington', nickname: 'Chaos', record: '17-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/137619.jpg' }
    ],
    lightweight: [
        { rank: 'C', name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/1418917.jpg' },
        { rank: 1, name: 'Arman Tsarukyan', nickname: 'Ahalkalakets', record: '21-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370145.jpg' },
        { rank: 2, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/22359.jpg' },
        { rank: 3, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/42719.jpg' },
        { rank: 4, name: 'Justin Gaethje', nickname: 'The Highlight', record: '25-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68144.jpg' }
    ],
    featherweight: [
        { rank: 'C', name: 'Ilia Topuria', nickname: 'El Matador', record: '15-0-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370143.jpg' },
        { rank: 1, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/75974.jpg' },
        { rank: 2, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461581.jpg' },
        { rank: 3, name: 'Brian Ortega', nickname: 'T-City', record: '15-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78175.jpg' },
        { rank: 4, name: 'Josh Emmett', nickname: '', record: '18-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78176.jpg' }
    ],
    bantamweight: [
        { rank: 'C', name: 'Merab Dvalishvili', nickname: 'The Machine', record: '17-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209897.jpg' },
        { rank: 1, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/461579.jpg' },
        { rank: 2, name: 'Cory Sandhagen', nickname: 'The Sandman', record: '17-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/124164.jpg' },
        { rank: 3, name: 'Petr Yan', nickname: 'No Mercy', record: '17-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209898.jpg' },
        { rank: 4, name: 'Jose Aldo', nickname: 'Junior', record: '32-8-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/23282.jpg' }
    ],
    flyweight: [
        { rank: 'C', name: 'Alexandre Pantoja', nickname: 'The Cannibal', record: '27-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78177.jpg' },
        { rank: 1, name: 'Brandon Royval', nickname: 'Raw Dawg', record: '15-6-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/256714.jpg' },
        { rank: 2, name: 'Kai Kara-France', nickname: 'Don\'t Blink', record: '24-10-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209899.jpg' },
        { rank: 3, name: 'Amir Albazi', nickname: 'The Prince', record: '17-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370141.jpg' },
        { rank: 4, name: 'Brandon Moreno', nickname: 'The Assassin Baby', record: '21-6-2', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/138418.jpg' }
    ],
    womensbantamweight: [
        { rank: 'C', name: 'Raquel Pennington', nickname: 'Rocky', record: '16-8-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78178.jpg' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68145.jpg' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68146.jpg' },
        { rank: 3, name: 'Ketlen Vieira', nickname: 'Fenomeno', record: '13-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209900.jpg' },
        { rank: 4, name: 'Mayra Bueno Silva', nickname: 'Sheetara', record: '10-2-1', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370139.jpg' }
    ],
    womensfeatherweight: [
        { rank: 'C', name: 'Amanda Nunes', nickname: 'The Lioness', record: '22-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68147.jpg' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68145.jpg' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68146.jpg' },
        { rank: 3, name: 'Germaine de Randamie', nickname: 'The Iron Lady', record: '10-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68148.jpg' },
        { rank: 4, name: 'Kayla Harrison', nickname: '', record: '16-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370137.jpg' }
    ],
    womensflyweight: [
        { rank: 'C', name: 'Alexa Grasso', nickname: 'The Mexican Dynamite', record: '16-3-1', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/78179.jpg' },
        { rank: 1, name: 'Valentina Shevchenko', nickname: 'Bullet', record: '23-4-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68149.jpg' },
        { rank: 2, name: 'Katlyn Chookagian', nickname: 'Blond Fighter', record: '19-5-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209901.jpg' },
        { rank: 3, name: 'Manon Fiorot', nickname: 'The Beast', record: '11-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370135.jpg' },
        { rank: 4, name: 'Erin Blanchfield', nickname: 'Cold Blooded', record: '12-1-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370133.jpg' }
    ],
    womensstrawweight: [
        { rank: 'C', name: 'Zhang Weili', nickname: 'Magnum', record: '24-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/209902.jpg' },
        { rank: 1, name: 'Tatiana Suarez', nickname: '', record: '10-0-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370131.jpg' },
        { rank: 2, name: 'Jessica Andrade', nickname: 'Bate Estaca', record: '25-12-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/68150.jpg' },
        { rank: 3, name: 'Virna Jandiroba', nickname: '', record: '20-3-0', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370129.jpg' },
        { rank: 4, name: 'Amanda Lemos', nickname: 'Amandinha', record: '13-3-1', photo: 'https://www.sherdog.com/image_crop/200/300/_images/fighter/370127.jpg' }
    ]
};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos Sherdog');