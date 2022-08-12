const drivers = [
    {
        id: "1",
        givenName: "Max",
        surName: " Verstappen",
        country: "Netherlands",
        age: "24",
        team: "Oracle Red Bull Racing",
        worldChampionships: "1",
        podiums: "70",
        races: "154",
        bestResult: "1st",
        wins: "28",
        points: "1815.5"
    },
    {
        id: "16",
        givenName: "Charles",
        surName: " Leclerc",
        country: "Monaco",
        age: "24",
        team: "Scuderia Ferrari",
        worldChampionships: "0",
        podiums: "18",
        races: "94",
        bestResult: "1st",
        wins: "5",
        points: "738"
    },
    {
        id: "11",
        givenName: "Sergio",
        surName: " Perez",
        country: "Mexico",
        age: "32",
        team: "Oracle Red Bull Racing",
        worldChampionships: "0",
        podiums: "21",
        races: "227",
        bestResult: "1st",
        wins: "3",
        points: "1069"
    },
    {
        id: "63",
        givenName: "George",
        surName: "Russell",
        country: "United Kingdom",
        age: "2",
        team: "Mercedes-AMG Petronas F1 Team",
        worldChampionships: "0",
        podiums: "6",
        races: "73",
        bestResult: "2nd",
        wins: "0",
        points: "177"
    },
    {
        id: "55",
        givenName: "Carlos",
        surName: "Sainz",
        country: "Spain",
        age: "28",
        team: "Scuderia Ferrari",
        worldChampionships: "0",
        podiums: "12",
        races: "154",
        bestResult: "1st",
        wins: "1",
        points: "692.5"
    },
    {
        id: "44",
        givenName: "Lewis",
        surName: "Hamilton",
        country: "United Kingdom",
        age: "37",
        team: "Mercedes-AMG Petronas F1 Team",
        worldChampionships: "7",
        podiums: "188",
        races: "301",
        bestResult: "1st",
        wins: "103",
        points: "4311.5"
    },
    {
        id: "4",
        givenName: "Lando",
        surName: "Norris",
        country: "United Kingdom",
        age: "22",
        team: "McLaren F1 Team",
        worldChampionships: "0",
        podiums: "6",
        races: "73",
        bestResult: "2nd",
        wins: "0",
        points: "382"
    },
    {
        id: "31",
        givenName: "Esteban",
        surName: "Ocon",
        country: "France",
        age: "25",
        team: "BWT Alpine F1 Team",
        worldChampionships: "0",
        podiums: "2",
        races: "102",
        bestResult: "3rd",
        wins: "0",
        points: "330"
    },
    {
        id: "77",
        givenName: "Valtteri",
        surName: "Bottas",
        country: "Finland",
        age: "32",
        team: "Alfa Romeo F1 Team ORLEN",
        worldChampionships: "0",
        podiums: "67",
        races: "191",
        bestResult: "1st",
        wins: "10",
        points: "1784"
    },
    {
        id: "14",
        givenName: "Fernando",
        surName: "Alonso",
        country: "Spain",
        age: "41",
        team: "BWT Alpine F1 Team",
        worldChampionships: "2",
        podiums: "98",
        races: "349",
        bestResult: "1st",
        wins: "32",
        points: "2021"
    },
    {
        id: "20",
        givenName: "Kevin",
        surName: "Magnussen",
        country: "Denmark",
        age: "30",
        team: "Haas F1 Team",
        worldChampionships: "0",
        podiums: "1",
        races: "133",
        bestResult: "2nd",
        wins: "0",
        points: "180"
    },
    {
        id: "3",
        givenName: "Daniel",
        surName: "Ricciardo",
        country: "Australia",
        age: "33",
        team: "McLaren F1 Team",
        worldChampionships: "0",
        podiums: "32",
        races: "223",
        bestResult: "1st",
        wins: "8",
        points: "1293"
    },
    {
        id: "10",
        givenName: "Pierre",
        surName: "Gasly",
        country: "France",
        age: "26",
        team: "Scuderia AlphaTauri",
        worldChampionships: "0",
        podiums: "3",
        races: "99",
        bestResult: "1st",
        wins: "1",
        points: "325"
    },
    {
        id: "5",
        givenName: "Sebastian",
        surName: "Vettel",
        country: "Germany",
        age: "35",
        team: "Aston Martin Aramco Cognizant F1 Team",
        worldChampionships: "4",
        podiums: "122",
        races: "291",
        bestResult: "1st",
        wins: "53",
        points: "3077"
    },
    {
        id: "47",
        givenName: "Mick",
        surName: "Schumacher",
        country: "Germany",
        age: "23",
        team: "Haas F1 Team",
        worldChampionships: "0",
        podiums: "0",
        races: "34",
        bestResult: "6th",
        wins: "0",
        points: "12"
    },
    {
        id: "22",
        givenName: "Yuki",
        surName: "Tsunoda",
        country: "Japan",
        age: "22",
        team: "Scuderia AlphaTauri",
        worldChampionships: "0",
        podiums: "0",
        races: "35",
        bestResult: "4th",
        wins: "0",
        points: "43"
    },
    {
        id: "24",
        givenName: "Zhou",
        surName: "Guanyu",
        country: "China",
        age: "23",
        team: "Alfa Romeo F1 Team ORLEN",
        worldChampionships: "0",
        podiums: "0",
        races: "13",
        bestResult: "8th",
        wins: "0",
        points: "5"
    },
    {
        id: "18",
        givenName: "Lance",
        surName: "Stroll",
        country: "Canada",
        age: "23",
        team: "Aston Martin Aramco Cognizant F1 Team",
        worldChampionships: "0",
        podiums: "3",
        races: "113",
        bestResult: "3rd",
        wins: "0",
        points: "180"
    },
    {
        id: "23",
        givenName: "Alexander",
        surName: "Albon",
        country: "Thailand",
        age: "26",
        team: "Williams Racing",
        worldChampionships: "0",
        podiums: "2",
        races: "51",
        bestResult: "3rd",
        wins: "0",
        points: "200"
    },
    {
        id: "6",
        givenName: "Nicholas",
        surName: "Latifi",
        nationality: "Canada",
        age: "27",
        team: "Williams Racing",
        worldChampionships: "0",
        podiums: "0",
        races: "52",
        bestResult: "7th",
        wins: "0",
        points: "7"
    },
    {
    id: "27",
    givenName: "Nico",
    surName: " Hulkenberg",
    country: "Germany",
    age: "34",
    team: "Aston Martin Aramco Cognizant F1 Team",
    worldChampionships: "0",
    podiums: "0",
    races: "181",
    bestResult: "4th",
    wins: "0",
    points: "521"
    }
];
module.exports = {drivers};