// Données UFC avec photos Wikipedia corrigées
const ufcRankingsData = {
  "p4p": [
    {
      "rank": 1,
      "name": "Islam Makhachev",
      "nickname": "The Dagestani Destroyer",
      "record": "25-1-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Islam_Makhachev_2022_UFC_belt_%28cropped%29.png/250px-Islam_Makhachev_2022_UFC_belt_%28cropped%29.png"
    },
    {
      "rank": 2,
      "name": "Jon Jones",
      "nickname": "Bones",
      "record": "27-1-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jon_Jones_-_Supporting_Brain_Health_Study.jpg/250px-Jon_Jones_-_Supporting_Brain_Health_Study.jpg"
    },
    {
      "rank": 3,
      "name": "Alexander Volkanovski",
      "nickname": "The Great",
      "record": "26-3-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Alexander_Volkanovski_at_UFC_232.jpg/250px-Alexander_Volkanovski_at_UFC_232.jpg"
    },
    {
      "rank": 4,
      "name": "Leon Edwards",
      "nickname": "Rocky",
      "record": "22-3-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Leon_Edwards_2021.png/250px-Leon_Edwards_2021.png"
    },
    {
      "rank": 5,
      "name": "Sean O'Malley",
      "nickname": "Suga",
      "record": "17-1-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg/250px-Sean_O%27Malley_at_UFC_276_ceremonial_weigh-ins_%28cropped%29.jpg"
    },
    {
      "rank": 6,
      "name": "Charles Oliveira",
      "nickname": "Do Bronx",
      "record": "34-9-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Charles_Oliveira_do_Bronxs.jpg/250px-Charles_Oliveira_do_Bronxs.jpg"
    },
    {
      "rank": 7,
      "name": "Max Holloway",
      "nickname": "Blessed",
      "record": "25-7-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg/250px-Blue_Angels%27_VIP_Rider_Max_Holloway_%281%29_%28cropped%29.jpg"
    },
    {
      "rank": 8,
      "name": "Dustin Poirier",
      "nickname": "The Diamond",
      "record": "29-8-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/DustinPoirier.png/250px-DustinPoirier.png"
    },
    {
      "rank": 9,
      "name": "Dricus du Plessis",
      "nickname": "Stillknocks",
      "record": "21-2-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/IMG-Dricus-Duplessis%28cropped%29.jpg/250px-IMG-Dricus-Duplessis%28cropped%29.jpg"
    },
    {
      "rank": 10,
      "name": "Alex Pereira",
      "nickname": "Poatan",
      "record": "9-2-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Alex_Pereira_UFC_300.png/250px-Alex_Pereira_UFC_300.png"
    }
  ],
  "heavyweight": [
    {
      "rank": "C",
      "name": "Jon Jones",
      "nickname": "Bones",
      "record": "27-1-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jon_Jones_-_Supporting_Brain_Health_Study.jpg/250px-Jon_Jones_-_Supporting_Brain_Health_Study.jpg"
    },
    {
      "rank": 1,
      "name": "Stipe Miocic",
      "nickname": "",
      "record": "20-4-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stipe_Miocic_%2848086643396%29_%28cropped%29.jpg/250px-Stipe_Miocic_%2848086643396%29_%28cropped%29.jpg"
    },
    {
      "rank": 2,
      "name": "Tom Aspinall",
      "nickname": "",
      "record": "13-3-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tom_Aspinall_at_Premier_League_football_match.jpg/250px-Tom_Aspinall_at_Premier_League_football_match.jpg"
    },
    {
      "rank": 3,
      "name": "Ciryl Gane",
      "nickname": "Bon Gamin",
      "record": "11-2-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ciryl_Gane_en_visite_au_centre_d%27entra%C3%AEnement_du_MHSC_%28cropped%29.jpg/250px-Ciryl_Gane_en_visite_au_centre_d%27entra%C3%AEnement_du_MHSC_%28cropped%29.jpg"
    },
    {
      "rank": 4,
      "name": "Curtis Blaydes",
      "nickname": "Razor",
      "record": "17-4-0",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Curtis_Blaydes_at_UFC_221.png/250px-Curtis_Blaydes_at_UFC_221.png"
    }
  ]
};

// Remplacer les données mockées
Object.assign(mockRankings, ufcRankingsData);
console.log('✅ Données UFC chargées avec photos Wikipedia corrigées');