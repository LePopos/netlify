// Données UFC avec photos Wikipedia (version temporaire)
const ufcRankingsData = {
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
    ],
    lightheavyweight: [
        { rank: 'C', name: 'Alex Pereira', nickname: 'Poatan', record: '9-2-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Alex_Pereira_%28cropped%29.png/250px-Alex_Pereira_%28cropped%29.png' },
        { rank: 1, name: 'Jamahal Hill', nickname: 'Sweet Dreams', record: '12-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jamahal_Hill_%28cropped%29.jpg/250px-Jamahal_Hill_%28cropped%29.jpg' },
        { rank: 2, name: 'Magomed Ankalaev', nickname: '', record: '18-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Magomed_Ankalaev_%28cropped%29.jpg/250px-Magomed_Ankalaev_%28cropped%29.jpg' },
        { rank: 3, name: 'Jan Blachowicz', nickname: '', record: '29-9-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Jan_B%C5%82achowicz_%28cropped%29.jpg/250px-Jan_B%C5%82achowicz_%28cropped%29.jpg' },
        { rank: 4, name: 'Aleksandar Rakic', nickname: 'Rocket', record: '14-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aleksandar_Rakic_%28cropped%29.jpg/250px-Aleksandar_Rakic_%28cropped%29.jpg' }
    ],
    middleweight: [
        { rank: 'C', name: 'Dricus du Plessis', nickname: 'Stillknocks', record: '21-2-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dricus_du_Plessis_%28cropped%29.png/250px-Dricus_du_Plessis_%28cropped%29.png' },
        { rank: 1, name: 'Sean Strickland', nickname: 'Tarzan', record: '28-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sean_Strickland_%28cropped%29.jpg/250px-Sean_Strickland_%28cropped%29.jpg' },
        { rank: 2, name: 'Israel Adesanya', nickname: 'The Last Stylebender', record: '24-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Israel_Adesanya_%28cropped%29.jpg/250px-Israel_Adesanya_%28cropped%29.jpg' },
        { rank: 3, name: 'Robert Whittaker', nickname: 'The Reaper', record: '25-7-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Robert_Whittaker_%28cropped%29.jpg/250px-Robert_Whittaker_%28cropped%29.jpg' },
        { rank: 4, name: 'Marvin Vettori', nickname: 'The Italian Dream', record: '19-6-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Marvin_Vettori_%28cropped%29.jpg/250px-Marvin_Vettori_%28cropped%29.jpg' }
    ],
    welterweight: [
        { rank: 'C', name: 'Belal Muhammad', nickname: 'Remember the Name', record: '23-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Belal_Muhammad_%28cropped%29.jpg/250px-Belal_Muhammad_%28cropped%29.jpg' },
        { rank: 1, name: 'Leon Edwards', nickname: 'Rocky', record: '22-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Leon_Edwards_2021.png/250px-Leon_Edwards_2021.png' },
        { rank: 2, name: 'Shavkat Rakhmonov', nickname: 'Nomad', record: '18-0-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Shavkat_Rakhmonov_%28cropped%29.jpg/250px-Shavkat_Rakhmonov_%28cropped%29.jpg' },
        { rank: 3, name: 'Kamaru Usman', nickname: 'The Nigerian Nightmare', record: '20-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kamaru_Usman_%28cropped%29.jpg/250px-Kamaru_Usman_%28cropped%29.jpg' },
        { rank: 4, name: 'Colby Covington', nickname: 'Chaos', record: '17-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Colby_Covington_%28cropped%29.jpg/250px-Colby_Covington_%28cropped%29.jpg' }
    ],
    lightweight: [
        { rank: 'C', name: 'Islam Makhachev', nickname: 'The Dagestani Destroyer', record: '25-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Islam_Makhachev_2022_UFC_belt_%28cropped%29.png/250px-Islam_Makhachev_2022_UFC_belt_%28cropped%29.png' },
        { rank: 1, name: 'Arman Tsarukyan', nickname: 'Ahalkalakets', record: '21-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arman_Tsarukyan_%28cropped%29.jpg/250px-Arman_Tsarukyan_%28cropped%29.jpg' },
        { rank: 2, name: 'Charles Oliveira', nickname: 'Do Bronx', record: '34-9-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Charles_Oliveira_do_Bronxs.jpg/250px-Charles_Oliveira_do_Bronxs.jpg' },
        { rank: 3, name: 'Dustin Poirier', nickname: 'The Diamond', record: '29-8-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dustin_Poirier_%28cropped%29.jpg/250px-Dustin_Poirier_%28cropped%29.jpg' },
        { rank: 4, name: 'Justin Gaethje', nickname: 'The Highlight', record: '25-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Justin_Gaethje_%28cropped%29.jpg/250px-Justin_Gaethje_%28cropped%29.jpg' }
    ],
    featherweight: [
        { rank: 'C', name: 'Ilia Topuria', nickname: 'El Matador', record: '15-0-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ilia_Topuria_%28cropped%29.jpg/250px-Ilia_Topuria_%28cropped%29.jpg' },
        { rank: 1, name: 'Max Holloway', nickname: 'Blessed', record: '25-7-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg/250px-Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg' },
        { rank: 2, name: 'Alexander Volkanovski', nickname: 'The Great', record: '26-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Alexander_Volkanovski_at_UFC_232.jpg/250px-Alexander_Volkanovski_at_UFC_232.jpg' },
        { rank: 3, name: 'Brian Ortega', nickname: 'T-City', record: '15-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Brian_Ortega_%28cropped%29.jpg/250px-Brian_Ortega_%28cropped%29.jpg' },
        { rank: 4, name: 'Josh Emmett', nickname: '', record: '18-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Josh_Emmett_%28cropped%29.jpg/250px-Josh_Emmett_%28cropped%29.jpg' }
    ],
    bantamweight: [
        { rank: 'C', name: 'Merab Dvalishvili', nickname: 'The Machine', record: '17-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Merab_Dvalishvili_%28cropped%29.jpg/250px-Merab_Dvalishvili_%28cropped%29.jpg' },
        { rank: 1, name: 'Sean O\'Malley', nickname: 'Suga', record: '17-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg/250px-Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg' },
        { rank: 2, name: 'Cory Sandhagen', nickname: 'The Sandman', record: '17-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cory_Sandhagen_%28cropped%29.jpg/250px-Cory_Sandhagen_%28cropped%29.jpg' },
        { rank: 3, name: 'Petr Yan', nickname: 'No Mercy', record: '17-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Petr_Yan_%28cropped%29.jpg/250px-Petr_Yan_%28cropped%29.jpg' },
        { rank: 4, name: 'Jose Aldo', nickname: 'Junior', record: '32-8-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jos%C3%A9_Aldo_%28cropped%29.jpg/250px-Jos%C3%A9_Aldo_%28cropped%29.jpg' }
    ],
    flyweight: [
        { rank: 'C', name: 'Alexandre Pantoja', nickname: 'The Cannibal', record: '27-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alexandre_Pantoja_%28cropped%29.jpg/250px-Alexandre_Pantoja_%28cropped%29.jpg' },
        { rank: 1, name: 'Brandon Royval', nickname: 'Raw Dawg', record: '15-6-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Brandon_Royval_%28cropped%29.jpg/250px-Brandon_Royval_%28cropped%29.jpg' },
        { rank: 2, name: 'Kai Kara-France', nickname: 'Don\'t Blink', record: '24-10-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kai_Kara-France_%28cropped%29.jpg/250px-Kai_Kara-France_%28cropped%29.jpg' },
        { rank: 3, name: 'Amir Albazi', nickname: 'The Prince', record: '17-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Amir_Albazi_%28cropped%29.jpg/250px-Amir_Albazi_%28cropped%29.jpg' },
        { rank: 4, name: 'Brandon Moreno', nickname: 'The Assassin Baby', record: '21-6-2', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Brandon_Moreno_%28cropped%29.jpg/250px-Brandon_Moreno_%28cropped%29.jpg' }
    ],
    womensbantamweight: [
        { rank: 'C', name: 'Raquel Pennington', nickname: 'Rocky', record: '16-8-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Raquel_Pennington_%28cropped%29.jpg/250px-Raquel_Pennington_%28cropped%29.jpg' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Julianna_Pe%C3%B1a_%28cropped%29.jpg/250px-Julianna_Pe%C3%B1a_%28cropped%29.jpg' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Holly_Holm_%28cropped%29.jpg/250px-Holly_Holm_%28cropped%29.jpg' },
        { rank: 3, name: 'Ketlen Vieira', nickname: 'Fenomeno', record: '13-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ketlen_Vieira_%28cropped%29.jpg/250px-Ketlen_Vieira_%28cropped%29.jpg' },
        { rank: 4, name: 'Mayra Bueno Silva', nickname: 'Sheetara', record: '10-2-1', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mayra_Bueno_Silva_%28cropped%29.jpg/250px-Mayra_Bueno_Silva_%28cropped%29.jpg' }
    ],
    womensfeatherweight: [
        { rank: 'C', name: 'Amanda Nunes', nickname: 'The Lioness', record: '22-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Amanda_Nunes_%28cropped%29.jpg/250px-Amanda_Nunes_%28cropped%29.jpg' },
        { rank: 1, name: 'Julianna Peña', nickname: 'The Venezuelan Vixen', record: '11-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Julianna_Pe%C3%B1a_%28cropped%29.jpg/250px-Julianna_Pe%C3%B1a_%28cropped%29.jpg' },
        { rank: 2, name: 'Holly Holm', nickname: 'The Preacher\'s Daughter', record: '15-6-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Holly_Holm_%28cropped%29.jpg/250px-Holly_Holm_%28cropped%29.jpg' },
        { rank: 3, name: 'Germaine de Randamie', nickname: 'The Iron Lady', record: '10-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Germaine_de_Randamie_%28cropped%29.jpg/250px-Germaine_de_Randamie_%28cropped%29.jpg' },
        { rank: 4, name: 'Kayla Harrison', nickname: '', record: '16-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kayla_Harrison_%28cropped%29.jpg/250px-Kayla_Harrison_%28cropped%29.jpg' }
    ],
    womensflyweight: [
        { rank: 'C', name: 'Alexa Grasso', nickname: 'The Mexican Dynamite', record: '16-3-1', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alexa_Grasso_%28cropped%29.jpg/250px-Alexa_Grasso_%28cropped%29.jpg' },
        { rank: 1, name: 'Valentina Shevchenko', nickname: 'Bullet', record: '23-4-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Valentina_Shevchenko_%28cropped%29.jpg/250px-Valentina_Shevchenko_%28cropped%29.jpg' },
        { rank: 2, name: 'Katlyn Chookagian', nickname: 'Blond Fighter', record: '19-5-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Katlyn_Chookagian_%28cropped%29.jpg/250px-Katlyn_Chookagian_%28cropped%29.jpg' },
        { rank: 3, name: 'Manon Fiorot', nickname: 'The Beast', record: '11-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Manon_Fiorot_%28cropped%29.jpg/250px-Manon_Fiorot_%28cropped%29.jpg' },
        { rank: 4, name: 'Erin Blanchfield', nickname: 'Cold Blooded', record: '12-1-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Erin_Blanchfield_%28cropped%29.jpg/250px-Erin_Blanchfield_%28cropped%29.jpg' }
    ],
    womensstrawweight: [
        { rank: 'C', name: 'Zhang Weili', nickname: 'Magnum', record: '24-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Zhang_Weili_%28cropped%29.jpg/250px-Zhang_Weili_%28cropped%29.jpg' },
        { rank: 1, name: 'Tatiana Suarez', nickname: '', record: '10-0-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tatiana_Suarez_%28cropped%29.jpg/250px-Tatiana_Suarez_%28cropped%29.jpg' },
        { rank: 2, name: 'Jessica Andrade', nickname: 'Bate Estaca', record: '25-12-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jessica_Andrade_%28cropped%29.jpg/250px-Jessica_Andrade_%28cropped%29.jpg' },
        { rank: 3, name: 'Virna Jandiroba', nickname: '', record: '20-3-0', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Virna_Jandiroba_%28cropped%29.jpg/250px-Virna_Jandiroba_%28cropped%29.jpg' },
        { rank: 4, name: 'Amanda Lemos', nickname: 'Amandinha', record: '13-3-1', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Amanda_Lemos_%28cropped%29.jpg/250px-Amanda_Lemos_%28cropped%29.jpg' }
    ]
};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos Wikipedia');