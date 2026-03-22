# Jolpi Ergast F1 API Reference

The following are the exact JSON structures returned by the Jolpi API. Always refer to these data paths when writing data fetching functions or Recharts components.

## 1. season
**Endpoint:** `https://api.jolpi.ca/ergast/f1/seasons`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/seasons/",
        "limit": "30",
        "offset": "0",
        "total": "77",
        "SeasonTable": {
            "Seasons": [
                {
                    "season": "1950",
                    "url": "https://en.wikipedia.org/wiki/1950_Formula_One_season"
                },
                {
                    "season": "1951",
                    "url": "https://en.wikipedia.org/wiki/1951_Formula_One_season"
                },
                {
                    "season": "1952",
                    "url": "https://en.wikipedia.org/wiki/1952_Formula_One_season"
                },
                {
                    "season": "1953",
                    "url": "https://en.wikipedia.org/wiki/1953_Formula_One_season"
                },
                {
                    "season": "1954",
                    "url": "https://en.wikipedia.org/wiki/1954_Formula_One_season"
                },
                {
                    "season": "1955",
                    "url": "https://en.wikipedia.org/wiki/1955_Formula_One_season"
                },
                {
                    "season": "1956",
                    "url": "https://en.wikipedia.org/wiki/1956_Formula_One_season"
                },
                {
                    "season": "1957",
                    "url": "https://en.wikipedia.org/wiki/1957_Formula_One_season"
                },
                {
                    "season": "1958",
                    "url": "https://en.wikipedia.org/wiki/1958_Formula_One_season"
                },
                {
                    "season": "1959",
                    "url": "https://en.wikipedia.org/wiki/1959_Formula_One_season"
                },
                {
                    "season": "1960",
                    "url": "https://en.wikipedia.org/wiki/1960_Formula_One_season"
                },
                {
                    "season": "1961",
                    "url": "https://en.wikipedia.org/wiki/1961_Formula_One_season"
                },
                {
                    "season": "1962",
                    "url": "https://en.wikipedia.org/wiki/1962_Formula_One_season"
                },
                {
                    "season": "1963",
                    "url": "https://en.wikipedia.org/wiki/1963_Formula_One_season"
                },
                {
                    "season": "1964",
                    "url": "https://en.wikipedia.org/wiki/1964_Formula_One_season"
                },
                {
                    "season": "1965",
                    "url": "https://en.wikipedia.org/wiki/1965_Formula_One_season"
                },
                {
                    "season": "1966",
                    "url": "https://en.wikipedia.org/wiki/1966_Formula_One_season"
                },
                {
                    "season": "1967",
                    "url": "https://en.wikipedia.org/wiki/1967_Formula_One_season"
                },
                {
                    "season": "1968",
                    "url": "https://en.wikipedia.org/wiki/1968_Formula_One_season"
                },
                {
                    "season": "1969",
                    "url": "https://en.wikipedia.org/wiki/1969_Formula_One_season"
                },
                {
                    "season": "1970",
                    "url": "https://en.wikipedia.org/wiki/1970_Formula_One_season"
                },
                {
                    "season": "1971",
                    "url": "https://en.wikipedia.org/wiki/1971_Formula_One_season"
                },
                {
                    "season": "1972",
                    "url": "https://en.wikipedia.org/wiki/1972_Formula_One_season"
                },
                {
                    "season": "1973",
                    "url": "https://en.wikipedia.org/wiki/1973_Formula_One_season"
                },
                {
                    "season": "1974",
                    "url": "https://en.wikipedia.org/wiki/1974_Formula_One_season"
                },
                {
                    "season": "1975",
                    "url": "https://en.wikipedia.org/wiki/1975_Formula_One_season"
                },
                {
                    "season": "1976",
                    "url": "https://en.wikipedia.org/wiki/1976_Formula_One_season"
                },
                {
                    "season": "1977",
                    "url": "https://en.wikipedia.org/wiki/1977_Formula_One_season"
                },
                {
                    "season": "1978",
                    "url": "https://en.wikipedia.org/wiki/1978_Formula_One_season"
                },
                {
                    "season": "1979",
                    "url": "https://en.wikipedia.org/wiki/1979_Formula_One_season"
                }
            ]
        }
    }
}

## 2. circuit
**Endpoint:** `https://api.jolpi.ca/ergast/f1/circuits`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/circuits/",
        "limit": "30",
        "offset": "0",
        "total": "78",
        "CircuitTable": {
            "Circuits": [
                {
                    "circuitId": "adelaide",
                    "url": "https://en.wikipedia.org/wiki/Adelaide_Street_Circuit",
                    "circuitName": "Adelaide Street Circuit",
                    "Location": {
                        "lat": "-34.9272",
                        "long": "138.617",
                        "locality": "Adelaide",
                        "country": "Australia"
                    }
                },
                {
                    "circuitId": "ain-diab",
                    "url": "https://en.wikipedia.org/wiki/Ain-Diab_Circuit",
                    "circuitName": "Ain Diab",
                    "Location": {
                        "lat": "33.5786",
                        "long": "-7.6875",
                        "locality": "Casablanca",
                        "country": "Morocco"
                    }
                },
                {
                    "circuitId": "aintree",
                    "url": "https://en.wikipedia.org/wiki/Aintree_Motor_Racing_Circuit",
                    "circuitName": "Aintree",
                    "Location": {
                        "lat": "53.4769",
                        "long": "-2.94056",
                        "locality": "Liverpool",
                        "country": "UK"
                    }
                },
                {
                    "circuitId": "albert_park",
                    "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                    "circuitName": "Albert Park Grand Prix Circuit",
                    "Location": {
                        "lat": "-37.8497",
                        "long": "144.968",
                        "locality": "Melbourne",
                        "country": "Australia"
                    }
                },
                {
                    "circuitId": "americas",
                    "url": "https://en.wikipedia.org/wiki/Circuit_of_the_Americas",
                    "circuitName": "Circuit of the Americas",
                    "Location": {
                        "lat": "30.1328",
                        "long": "-97.6411",
                        "locality": "Austin",
                        "country": "USA"
                    }
                },
                {
                    "circuitId": "anderstorp",
                    "url": "https://en.wikipedia.org/wiki/Anderstorp_Raceway",
                    "circuitName": "Scandinavian Raceway",
                    "Location": {
                        "lat": "57.2653",
                        "long": "13.6042",
                        "locality": "Anderstorp",
                        "country": "Sweden"
                    }
                },
                {
                    "circuitId": "avus",
                    "url": "https://en.wikipedia.org/wiki/AVUS",
                    "circuitName": "AVUS",
                    "Location": {
                        "lat": "52.4806",
                        "long": "13.2514",
                        "locality": "Berlin",
                        "country": "Germany"
                    }
                },
                {
                    "circuitId": "bahrain",
                    "url": "https://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                    "circuitName": "Bahrain International Circuit",
                    "Location": {
                        "lat": "26.0325",
                        "long": "50.5106",
                        "locality": "Sakhir",
                        "country": "Bahrain"
                    }
                },
                {
                    "circuitId": "baku",
                    "url": "https://en.wikipedia.org/wiki/Baku_City_Circuit",
                    "circuitName": "Baku City Circuit",
                    "Location": {
                        "lat": "40.3725",
                        "long": "49.8533",
                        "locality": "Baku",
                        "country": "Azerbaijan"
                    }
                },
                {
                    "circuitId": "boavista",
                    "url": "https://en.wikipedia.org/wiki/Circuito_da_Boavista",
                    "circuitName": "Circuito da Boavista",
                    "Location": {
                        "lat": "41.1705",
                        "long": "-8.67325",
                        "locality": "Oporto",
                        "country": "Portugal"
                    }
                },
                {
                    "circuitId": "brands_hatch",
                    "url": "https://en.wikipedia.org/wiki/Brands_Hatch",
                    "circuitName": "Brands Hatch",
                    "Location": {
                        "lat": "51.3569",
                        "long": "0.263056",
                        "locality": "Kent",
                        "country": "UK"
                    }
                },
                {
                    "circuitId": "bremgarten",
                    "url": "https://en.wikipedia.org/wiki/Circuit_Bremgarten",
                    "circuitName": "Circuit Bremgarten",
                    "Location": {
                        "lat": "46.9589",
                        "long": "7.40194",
                        "locality": "Bern",
                        "country": "Switzerland"
                    }
                },
                {
                    "circuitId": "buddh",
                    "url": "https://en.wikipedia.org/wiki/Buddh_International_Circuit",
                    "circuitName": "Buddh International Circuit",
                    "Location": {
                        "lat": "28.3487",
                        "long": "77.5331",
                        "locality": "Uttar Pradesh",
                        "country": "India"
                    }
                },
                {
                    "circuitId": "catalunya",
                    "url": "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                    "circuitName": "Circuit de Barcelona-Catalunya",
                    "Location": {
                        "lat": "41.57",
                        "long": "2.26111",
                        "locality": "Barcelona",
                        "country": "Spain"
                    }
                },
                {
                    "circuitId": "charade",
                    "url": "https://en.wikipedia.org/wiki/Circuit_de_Charade",
                    "circuitName": "Charade Circuit",
                    "Location": {
                        "lat": "45.7472",
                        "long": "3.03889",
                        "locality": "Clermont-Ferrand",
                        "country": "France"
                    }
                },
                {
                    "circuitId": "dallas",
                    "url": "https://en.wikipedia.org/wiki/Fair_Park",
                    "circuitName": "Fair Park",
                    "Location": {
                        "lat": "32.7774",
                        "long": "-96.7587",
                        "locality": "Dallas",
                        "country": "USA"
                    }
                },
                {
                    "circuitId": "detroit",
                    "url": "https://en.wikipedia.org/wiki/Detroit_street_circuit",
                    "circuitName": "Detroit Street Circuit",
                    "Location": {
                        "lat": "42.3298",
                        "long": "-83.0401",
                        "locality": "Detroit",
                        "country": "USA"
                    }
                },
                {
                    "circuitId": "dijon",
                    "url": "https://en.wikipedia.org/wiki/Dijon-Prenois",
                    "circuitName": "Dijon-Prenois",
                    "Location": {
                        "lat": "47.3625",
                        "long": "4.89913",
                        "locality": "Dijon",
                        "country": "France"
                    }
                },
                {
                    "circuitId": "donington",
                    "url": "https://en.wikipedia.org/wiki/Donington_Park",
                    "circuitName": "Donington Park",
                    "Location": {
                        "lat": "52.8306",
                        "long": "-1.37528",
                        "locality": "Castle Donington",
                        "country": "UK"
                    }
                },
                {
                    "circuitId": "essarts",
                    "url": "https://en.wikipedia.org/wiki/Rouen-Les-Essarts",
                    "circuitName": "Rouen-Les-Essarts",
                    "Location": {
                        "lat": "49.3306",
                        "long": "1.00458",
                        "locality": "Rouen",
                        "country": "France"
                    }
                },
                {
                    "circuitId": "estoril",
                    "url": "https://en.wikipedia.org/wiki/Circuito_do_Estoril",
                    "circuitName": "Autódromo do Estoril",
                    "Location": {
                        "lat": "38.7506",
                        "long": "-9.39417",
                        "locality": "Estoril",
                        "country": "Portugal"
                    }
                },
                {
                    "circuitId": "fuji",
                    "url": "https://en.wikipedia.org/wiki/Fuji_Speedway",
                    "circuitName": "Fuji Speedway",
                    "Location": {
                        "lat": "35.3717",
                        "long": "138.927",
                        "locality": "Oyama",
                        "country": "Japan"
                    }
                },
                {
                    "circuitId": "galvez",
                    "url": "https://en.wikipedia.org/wiki/Autódromo_Oscar_y_Juan_Gálvez",
                    "circuitName": "Autódromo Juan y Oscar Gálvez",
                    "Location": {
                        "lat": "-34.6943",
                        "long": "-58.4593",
                        "locality": "Buenos Aires",
                        "country": "Argentina"
                    }
                },
                {
                    "circuitId": "george",
                    "url": "https://en.wikipedia.org/wiki/Prince_George_Circuit",
                    "circuitName": "Prince George Circuit",
                    "Location": {
                        "lat": "-33.0486",
                        "long": "27.8736",
                        "locality": "Eastern Cape Province",
                        "country": "South Africa"
                    }
                },
                {
                    "circuitId": "hockenheimring",
                    "url": "https://en.wikipedia.org/wiki/Hockenheimring",
                    "circuitName": "Hockenheimring",
                    "Location": {
                        "lat": "49.3278",
                        "long": "8.56583",
                        "locality": "Hockenheim",
                        "country": "Germany"
                    }
                },
                {
                    "circuitId": "hungaroring",
                    "url": "https://en.wikipedia.org/wiki/Hungaroring",
                    "circuitName": "Hungaroring",
                    "Location": {
                        "lat": "47.5789",
                        "long": "19.2486",
                        "locality": "Budapest",
                        "country": "Hungary"
                    }
                },
                {
                    "circuitId": "imola",
                    "url": "https://en.wikipedia.org/wiki/Imola_Circuit",
                    "circuitName": "Autodromo Enzo e Dino Ferrari",
                    "Location": {
                        "lat": "44.3439",
                        "long": "11.7167",
                        "locality": "Imola",
                        "country": "Italy"
                    }
                },
                {
                    "circuitId": "indianapolis",
                    "url": "https://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway",
                    "circuitName": "Indianapolis Motor Speedway",
                    "Location": {
                        "lat": "39.795",
                        "long": "-86.2347",
                        "locality": "Indianapolis",
                        "country": "USA"
                    }
                },
                {
                    "circuitId": "interlagos",
                    "url": "https://en.wikipedia.org/wiki/Interlagos_Circuit",
                    "circuitName": "Autódromo José Carlos Pace",
                    "Location": {
                        "lat": "-23.7036",
                        "long": "-46.6997",
                        "locality": "São Paulo",
                        "country": "Brazil"
                    }
                },
                {
                    "circuitId": "istanbul",
                    "url": "https://en.wikipedia.org/wiki/Istanbul_Park",
                    "circuitName": "Istanbul Park",
                    "Location": {
                        "lat": "40.9517",
                        "long": "29.405",
                        "locality": "Istanbul",
                        "country": "Turkey"
                    }
                }
            ]
        }
    }
}

## 3. race
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/races`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/races/",
        "limit": "30",
        "offset": "0",
        "total": "22",
        "RaceTable": {
            "season": "2026",
            "Races": [
                {
                    "season": "2026",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2026_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
                        "circuitId": "albert_park",
                        "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                        "circuitName": "Albert Park Grand Prix Circuit",
                        "Location": {
                            "lat": "-37.8497",
                            "long": "144.968",
                            "locality": "Melbourne",
                            "country": "Australia"
                        }
                    },
                    "date": "2026-03-08",
                    "time": "04:00:00Z",
                    "FirstPractice": {
                        "date": "2026-03-06",
                        "time": "01:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-03-06",
                        "time": "05:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-03-07",
                        "time": "01:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-03-07",
                        "time": "05:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "2",
                    "url": "https://en.wikipedia.org/wiki/2026_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
                        "circuitId": "shanghai",
                        "url": "https://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                        "circuitName": "Shanghai International Circuit",
                        "Location": {
                            "lat": "31.3389",
                            "long": "121.22",
                            "locality": "Shanghai",
                            "country": "China"
                        }
                    },
                    "date": "2026-03-15",
                    "time": "07:00:00Z",
                    "FirstPractice": {
                        "date": "2026-03-13",
                        "time": "03:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-03-14",
                        "time": "07:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-03-14",
                        "time": "03:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-03-13",
                        "time": "07:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "3",
                    "url": "https://en.wikipedia.org/wiki/2026_Japanese_Grand_Prix",
                    "raceName": "Japanese Grand Prix",
                    "Circuit": {
                        "circuitId": "suzuka",
                        "url": "https://en.wikipedia.org/wiki/Suzuka_International_Racing_Course",
                        "circuitName": "Suzuka Circuit",
                        "Location": {
                            "lat": "34.8431",
                            "long": "136.541",
                            "locality": "Suzuka",
                            "country": "Japan"
                        }
                    },
                    "date": "2026-03-29",
                    "time": "05:00:00Z",
                    "FirstPractice": {
                        "date": "2026-03-27",
                        "time": "02:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-03-27",
                        "time": "06:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-03-28",
                        "time": "02:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-03-28",
                        "time": "06:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "4",
                    "url": "https://en.wikipedia.org/wiki/2026_Miami_Grand_Prix",
                    "raceName": "Miami Grand Prix",
                    "Circuit": {
                        "circuitId": "miami",
                        "url": "https://en.wikipedia.org/wiki/Miami_International_Autodrome",
                        "circuitName": "Miami International Autodrome",
                        "Location": {
                            "lat": "25.9581",
                            "long": "-80.2389",
                            "locality": "Miami",
                            "country": "USA"
                        }
                    },
                    "date": "2026-05-03",
                    "time": "20:00:00Z",
                    "FirstPractice": {
                        "date": "2026-05-01",
                        "time": "16:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-05-02",
                        "time": "20:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-05-02",
                        "time": "16:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-05-01",
                        "time": "20:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "5",
                    "url": "https://en.wikipedia.org/wiki/2026_Canadian_Grand_Prix",
                    "raceName": "Canadian Grand Prix",
                    "Circuit": {
                        "circuitId": "villeneuve",
                        "url": "https://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
                        "circuitName": "Circuit Gilles Villeneuve",
                        "Location": {
                            "lat": "45.5",
                            "long": "-73.5228",
                            "locality": "Montreal",
                            "country": "Canada"
                        }
                    },
                    "date": "2026-05-24",
                    "time": "20:00:00Z",
                    "FirstPractice": {
                        "date": "2026-05-22",
                        "time": "16:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-05-23",
                        "time": "20:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-05-23",
                        "time": "16:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-05-22",
                        "time": "20:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "6",
                    "url": "https://en.wikipedia.org/wiki/2026_Monaco_Grand_Prix",
                    "raceName": "Monaco Grand Prix",
                    "Circuit": {
                        "circuitId": "monaco",
                        "url": "https://en.wikipedia.org/wiki/Circuit_de_Monaco",
                        "circuitName": "Circuit de Monaco",
                        "Location": {
                            "lat": "43.7347",
                            "long": "7.42056",
                            "locality": "Monte Carlo",
                            "country": "Monaco"
                        }
                    },
                    "date": "2026-06-07",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-06-05",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-06-05",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-06-06",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-06-06",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "7",
                    "url": "https://en.wikipedia.org/wiki/2026_Barcelona-Catalunya",
                    "raceName": "Barcelona Grand Prix",
                    "Circuit": {
                        "circuitId": "catalunya",
                        "url": "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                        "circuitName": "Circuit de Barcelona-Catalunya",
                        "Location": {
                            "lat": "41.57",
                            "long": "2.26111",
                            "locality": "Barcelona",
                            "country": "Spain"
                        }
                    },
                    "date": "2026-06-14",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-06-12",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-06-12",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-06-13",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-06-13",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "8",
                    "url": "https://en.wikipedia.org/wiki/2026_Austrian_Grand_Prix",
                    "raceName": "Austrian Grand Prix",
                    "Circuit": {
                        "circuitId": "red_bull_ring",
                        "url": "https://en.wikipedia.org/wiki/Red_Bull_Ring",
                        "circuitName": "Red Bull Ring",
                        "Location": {
                            "lat": "47.2197",
                            "long": "14.7647",
                            "locality": "Spielberg",
                            "country": "Austria"
                        }
                    },
                    "date": "2026-06-28",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-06-26",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-06-26",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-06-27",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-06-27",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "9",
                    "url": "https://en.wikipedia.org/wiki/2026_British_Grand_Prix",
                    "raceName": "British Grand Prix",
                    "Circuit": {
                        "circuitId": "silverstone",
                        "url": "https://en.wikipedia.org/wiki/Silverstone_Circuit",
                        "circuitName": "Silverstone Circuit",
                        "Location": {
                            "lat": "52.0786",
                            "long": "-1.01694",
                            "locality": "Silverstone",
                            "country": "UK"
                        }
                    },
                    "date": "2026-07-05",
                    "time": "14:00:00Z",
                    "FirstPractice": {
                        "date": "2026-07-03",
                        "time": "11:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-07-04",
                        "time": "15:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-07-04",
                        "time": "11:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-07-03",
                        "time": "15:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "10",
                    "url": "https://en.wikipedia.org/wiki/2026_Belgian_Grand_Prix",
                    "raceName": "Belgian Grand Prix",
                    "Circuit": {
                        "circuitId": "spa",
                        "url": "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
                        "circuitName": "Circuit de Spa-Francorchamps",
                        "Location": {
                            "lat": "50.4372",
                            "long": "5.97139",
                            "locality": "Spa",
                            "country": "Belgium"
                        }
                    },
                    "date": "2026-07-19",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-07-17",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-07-17",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-07-18",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-07-18",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "11",
                    "url": "https://en.wikipedia.org/wiki/2026_Hungarian_Grand_Prix",
                    "raceName": "Hungarian Grand Prix",
                    "Circuit": {
                        "circuitId": "hungaroring",
                        "url": "https://en.wikipedia.org/wiki/Hungaroring",
                        "circuitName": "Hungaroring",
                        "Location": {
                            "lat": "47.5789",
                            "long": "19.2486",
                            "locality": "Budapest",
                            "country": "Hungary"
                        }
                    },
                    "date": "2026-07-26",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-07-24",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-07-24",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-07-25",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-07-25",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "12",
                    "url": "https://en.wikipedia.org/wiki/2026_Dutch_Grand_Prix",
                    "raceName": "Dutch Grand Prix",
                    "Circuit": {
                        "circuitId": "zandvoort",
                        "url": "https://en.wikipedia.org/wiki/Circuit_Zandvoort",
                        "circuitName": "Circuit Park Zandvoort",
                        "Location": {
                            "lat": "52.3888",
                            "long": "4.54092",
                            "locality": "Zandvoort",
                            "country": "Netherlands"
                        }
                    },
                    "date": "2026-08-23",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-08-21",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-08-22",
                        "time": "14:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-08-22",
                        "time": "10:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-08-21",
                        "time": "14:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "13",
                    "url": "https://en.wikipedia.org/wiki/2026_Italian_Grand_Prix",
                    "raceName": "Italian Grand Prix",
                    "Circuit": {
                        "circuitId": "monza",
                        "url": "https://en.wikipedia.org/wiki/Monza_Circuit",
                        "circuitName": "Autodromo Nazionale di Monza",
                        "Location": {
                            "lat": "45.6156",
                            "long": "9.28111",
                            "locality": "Monza",
                            "country": "Italy"
                        }
                    },
                    "date": "2026-09-06",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-09-04",
                        "time": "10:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-09-04",
                        "time": "14:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-09-05",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-09-05",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "14",
                    "url": "https://en.wikipedia.org/wiki/2026_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
                        "circuitId": "madring",
                        "url": "https://en.wikipedia.org/wiki/Madring",
                        "circuitName": "Madring",
                        "Location": {
                            "lat": "40.46528",
                            "long": "-3.61528",
                            "locality": "Madrid",
                            "country": "Spain"
                        }
                    },
                    "date": "2026-09-13",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-09-11",
                        "time": "11:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-09-11",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-09-12",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-09-12",
                        "time": "14:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "15",
                    "url": "https://en.wikipedia.org/wiki/2026_Azerbaijan_Grand_Prix",
                    "raceName": "Azerbaijan Grand Prix",
                    "Circuit": {
                        "circuitId": "baku",
                        "url": "https://en.wikipedia.org/wiki/Baku_City_Circuit",
                        "circuitName": "Baku City Circuit",
                        "Location": {
                            "lat": "40.3725",
                            "long": "49.8533",
                            "locality": "Baku",
                            "country": "Azerbaijan"
                        }
                    },
                    "date": "2026-09-26",
                    "time": "11:00:00Z",
                    "FirstPractice": {
                        "date": "2026-09-24",
                        "time": "08:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-09-24",
                        "time": "12:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-09-25",
                        "time": "08:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-09-25",
                        "time": "12:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "16",
                    "url": "https://en.wikipedia.org/wiki/2026_Singapore_Grand_Prix",
                    "raceName": "Singapore Grand Prix",
                    "Circuit": {
                        "circuitId": "marina_bay",
                        "url": "https://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
                        "circuitName": "Marina Bay Street Circuit",
                        "Location": {
                            "lat": "1.2914",
                            "long": "103.864",
                            "locality": "Marina Bay",
                            "country": "Singapore"
                        }
                    },
                    "date": "2026-10-11",
                    "time": "12:00:00Z",
                    "FirstPractice": {
                        "date": "2026-10-09",
                        "time": "08:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-10-10",
                        "time": "13:00:00Z"
                    },
                    "Sprint": {
                        "date": "2026-10-10",
                        "time": "09:00:00Z"
                    },
                    "SprintQualifying": {
                        "date": "2026-10-09",
                        "time": "12:30:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "17",
                    "url": "https://en.wikipedia.org/wiki/2026_United_States_Grand_Prix",
                    "raceName": "United States Grand Prix",
                    "Circuit": {
                        "circuitId": "americas",
                        "url": "https://en.wikipedia.org/wiki/Circuit_of_the_Americas",
                        "circuitName": "Circuit of the Americas",
                        "Location": {
                            "lat": "30.1328",
                            "long": "-97.6411",
                            "locality": "Austin",
                            "country": "USA"
                        }
                    },
                    "date": "2026-10-25",
                    "time": "20:00:00Z",
                    "FirstPractice": {
                        "date": "2026-10-23",
                        "time": "17:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-10-23",
                        "time": "21:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-10-24",
                        "time": "17:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-10-24",
                        "time": "21:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "18",
                    "url": "https://en.wikipedia.org/wiki/2026_Mexico_City_Grand_Prix",
                    "raceName": "Mexico City Grand Prix",
                    "Circuit": {
                        "circuitId": "rodriguez",
                        "url": "https://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
                        "circuitName": "Autódromo Hermanos Rodríguez",
                        "Location": {
                            "lat": "19.4042",
                            "long": "-99.0907",
                            "locality": "Mexico City",
                            "country": "Mexico"
                        }
                    },
                    "date": "2026-11-01",
                    "time": "20:00:00Z",
                    "FirstPractice": {
                        "date": "2026-10-30",
                        "time": "18:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-10-30",
                        "time": "22:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-10-31",
                        "time": "17:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-10-31",
                        "time": "21:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "19",
                    "url": "https://en.wikipedia.org/wiki/2026_Brazilian_Grand_Prix",
                    "raceName": "Brazilian Grand Prix",
                    "Circuit": {
                        "circuitId": "interlagos",
                        "url": "https://en.wikipedia.org/wiki/Interlagos_Circuit",
                        "circuitName": "Autódromo José Carlos Pace",
                        "Location": {
                            "lat": "-23.7036",
                            "long": "-46.6997",
                            "locality": "São Paulo",
                            "country": "Brazil"
                        }
                    },
                    "date": "2026-11-08",
                    "time": "17:00:00Z",
                    "FirstPractice": {
                        "date": "2026-11-06",
                        "time": "15:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-11-06",
                        "time": "19:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-11-07",
                        "time": "14:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-11-07",
                        "time": "18:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "20",
                    "url": "https://en.wikipedia.org/wiki/2026_Las_Vegas_Grand_Prix",
                    "raceName": "Las Vegas Grand Prix",
                    "Circuit": {
                        "circuitId": "vegas",
                        "url": "https://en.wikipedia.org/wiki/Las_Vegas_Grand_Prix#Circuit",
                        "circuitName": "Las Vegas Strip Street Circuit",
                        "Location": {
                            "lat": "36.1147",
                            "long": "-115.173",
                            "locality": "Las Vegas",
                            "country": "USA"
                        }
                    },
                    "date": "2026-11-22",
                    "time": "04:00:00Z",
                    "FirstPractice": {
                        "date": "2026-11-20",
                        "time": "00:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-11-20",
                        "time": "04:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-11-21",
                        "time": "00:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-11-21",
                        "time": "04:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "21",
                    "url": "https://en.wikipedia.org/wiki/2026_Qatar_Grand_Prix",
                    "raceName": "Qatar Grand Prix",
                    "Circuit": {
                        "circuitId": "losail",
                        "url": "https://en.wikipedia.org/wiki/Lusail_International_Circuit",
                        "circuitName": "Losail International Circuit",
                        "Location": {
                            "lat": "25.49",
                            "long": "51.4542",
                            "locality": "Lusail",
                            "country": "Qatar"
                        }
                    },
                    "date": "2026-11-29",
                    "time": "16:00:00Z",
                    "FirstPractice": {
                        "date": "2026-11-27",
                        "time": "13:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-11-27",
                        "time": "17:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-11-28",
                        "time": "14:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-11-28",
                        "time": "18:00:00Z"
                    }
                },
                {
                    "season": "2026",
                    "round": "22",
                    "url": "https://en.wikipedia.org/wiki/2026_Abu_Dhabi_Grand_Prix",
                    "raceName": "Abu Dhabi Grand Prix",
                    "Circuit": {
                        "circuitId": "yas_marina",
                        "url": "https://en.wikipedia.org/wiki/Yas_Marina_Circuit",
                        "circuitName": "Yas Marina Circuit",
                        "Location": {
                            "lat": "24.4672",
                            "long": "54.6031",
                            "locality": "Abu Dhabi",
                            "country": "UAE"
                        }
                    },
                    "date": "2026-12-06",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2026-12-04",
                        "time": "09:30:00Z"
                    },
                    "SecondPractice": {
                        "date": "2026-12-04",
                        "time": "13:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2026-12-05",
                        "time": "10:30:00Z"
                    },
                    "Qualifying": {
                        "date": "2026-12-05",
                        "time": "14:00:00Z"
                    }
                }
            ]
        }
    }
}


## 4. constructor
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/constructors`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/constructors/",
        "limit": "30",
        "offset": "0",
        "total": "11",
        "ConstructorTable": {
            "season": "2026",
            "Constructors": [
                {
                    "constructorId": "alpine",
                    "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                    "name": "Alpine F1 Team",
                    "nationality": "French"
                },
                {
                    "constructorId": "aston_martin",
                    "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                    "name": "Aston Martin",
                    "nationality": "British"
                },
                {
                    "constructorId": "audi",
                    "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                    "name": "Audi",
                    "nationality": "German"
                },
                {
                    "constructorId": "cadillac",
                    "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                    "name": "Cadillac F1 Team",
                    "nationality": "American"
                },
                {
                    "constructorId": "ferrari",
                    "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                    "name": "Ferrari",
                    "nationality": "Italian"
                },
                {
                    "constructorId": "haas",
                    "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                    "name": "Haas F1 Team",
                    "nationality": "American"
                },
                {
                    "constructorId": "mclaren",
                    "url": "https://en.wikipedia.org/wiki/McLaren",
                    "name": "McLaren",
                    "nationality": "British"
                },
                {
                    "constructorId": "mercedes",
                    "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                    "name": "Mercedes",
                    "nationality": "German"
                },
                {
                    "constructorId": "rb",
                    "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                    "name": "RB F1 Team",
                    "nationality": "Italian"
                },
                {
                    "constructorId": "red_bull",
                    "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                    "name": "Red Bull",
                    "nationality": "Austrian"
                },
                {
                    "constructorId": "williams",
                    "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                    "name": "Williams",
                    "nationality": "British"
                }
            ]
        }
    }
}


## 5. driver
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/drivers`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/drivers/",
        "limit": "30",
        "offset": "0",
        "total": "22",
        "DriverTable": {
            "season": "2026",
            "Drivers": [
                {
                    "driverId": "albon",
                    "permanentNumber": "23",
                    "code": "ALB",
                    "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                    "givenName": "Alexander",
                    "familyName": "Albon",
                    "dateOfBirth": "1996-03-23",
                    "nationality": "Thai"
                },
                {
                    "driverId": "alonso",
                    "permanentNumber": "14",
                    "code": "ALO",
                    "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                    "givenName": "Fernando",
                    "familyName": "Alonso",
                    "dateOfBirth": "1981-07-29",
                    "nationality": "Spanish"
                },
                {
                    "driverId": "antonelli",
                    "permanentNumber": "12",
                    "code": "ANT",
                    "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                    "givenName": "Andrea Kimi",
                    "familyName": "Antonelli",
                    "dateOfBirth": "2006-08-25",
                    "nationality": "Italian"
                },
                {
                    "driverId": "bearman",
                    "permanentNumber": "87",
                    "code": "BEA",
                    "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                    "givenName": "Oliver",
                    "familyName": "Bearman",
                    "dateOfBirth": "2005-05-08",
                    "nationality": "British"
                },
                {
                    "driverId": "bortoleto",
                    "permanentNumber": "5",
                    "code": "BOR",
                    "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                    "givenName": "Gabriel",
                    "familyName": "Bortoleto",
                    "dateOfBirth": "2004-10-14",
                    "nationality": "Brazilian"
                },
                {
                    "driverId": "bottas",
                    "permanentNumber": "77",
                    "code": "BOT",
                    "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                    "givenName": "Valtteri",
                    "familyName": "Bottas",
                    "dateOfBirth": "1989-08-28",
                    "nationality": "Finnish"
                },
                {
                    "driverId": "colapinto",
                    "permanentNumber": "43",
                    "code": "COL",
                    "url": "http://en.wikipedia.org/wiki/Franco_Colapinto",
                    "givenName": "Franco",
                    "familyName": "Colapinto",
                    "dateOfBirth": "2003-05-27",
                    "nationality": "Argentine"
                },
                {
                    "driverId": "gasly",
                    "permanentNumber": "10",
                    "code": "GAS",
                    "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                    "givenName": "Pierre",
                    "familyName": "Gasly",
                    "dateOfBirth": "1996-02-07",
                    "nationality": "French"
                },
                {
                    "driverId": "hadjar",
                    "permanentNumber": "6",
                    "code": "HAD",
                    "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                    "givenName": "Isack",
                    "familyName": "Hadjar",
                    "dateOfBirth": "2004-09-28",
                    "nationality": "French"
                },
                {
                    "driverId": "hamilton",
                    "permanentNumber": "44",
                    "code": "HAM",
                    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                    "givenName": "Lewis",
                    "familyName": "Hamilton",
                    "dateOfBirth": "1985-01-07",
                    "nationality": "British"
                },
                {
                    "driverId": "hulkenberg",
                    "permanentNumber": "27",
                    "code": "HUL",
                    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                    "givenName": "Nico",
                    "familyName": "Hülkenberg",
                    "dateOfBirth": "1987-08-19",
                    "nationality": "German"
                },
                {
                    "driverId": "lawson",
                    "permanentNumber": "30",
                    "code": "LAW",
                    "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                    "givenName": "Liam",
                    "familyName": "Lawson",
                    "dateOfBirth": "2002-02-11",
                    "nationality": "New Zealander"
                },
                {
                    "driverId": "leclerc",
                    "permanentNumber": "16",
                    "code": "LEC",
                    "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                    "givenName": "Charles",
                    "familyName": "Leclerc",
                    "dateOfBirth": "1997-10-16",
                    "nationality": "Monegasque"
                },
                {
                    "driverId": "arvid_lindblad",
                    "permanentNumber": "41",
                    "code": "LIN",
                    "url": "https://en.wikipedia.org/wiki/Arvid_Lindblad",
                    "givenName": "Arvid",
                    "familyName": "Lindblad",
                    "dateOfBirth": "2007-08-08",
                    "nationality": "British"
                },
                {
                    "driverId": "norris",
                    "permanentNumber": "1",
                    "code": "NOR",
                    "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                    "givenName": "Lando",
                    "familyName": "Norris",
                    "dateOfBirth": "1999-11-13",
                    "nationality": "British"
                },
                {
                    "driverId": "ocon",
                    "permanentNumber": "31",
                    "code": "OCO",
                    "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                    "givenName": "Esteban",
                    "familyName": "Ocon",
                    "dateOfBirth": "1996-09-17",
                    "nationality": "French"
                },
                {
                    "driverId": "piastri",
                    "permanentNumber": "81",
                    "code": "PIA",
                    "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                    "givenName": "Oscar",
                    "familyName": "Piastri",
                    "dateOfBirth": "2001-04-06",
                    "nationality": "Australian"
                },
                {
                    "driverId": "perez",
                    "permanentNumber": "11",
                    "code": "PER",
                    "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                    "givenName": "Sergio",
                    "familyName": "Pérez",
                    "dateOfBirth": "1990-01-26",
                    "nationality": "Mexican"
                },
                {
                    "driverId": "russell",
                    "permanentNumber": "63",
                    "code": "RUS",
                    "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                    "givenName": "George",
                    "familyName": "Russell",
                    "dateOfBirth": "1998-02-15",
                    "nationality": "British"
                },
                {
                    "driverId": "sainz",
                    "permanentNumber": "55",
                    "code": "SAI",
                    "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                    "givenName": "Carlos",
                    "familyName": "Sainz",
                    "dateOfBirth": "1994-09-01",
                    "nationality": "Spanish"
                },
                {
                    "driverId": "stroll",
                    "permanentNumber": "18",
                    "code": "STR",
                    "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                    "givenName": "Lance",
                    "familyName": "Stroll",
                    "dateOfBirth": "1998-10-29",
                    "nationality": "Canadian"
                },
                {
                    "driverId": "max_verstappen",
                    "permanentNumber": "3",
                    "code": "VER",
                    "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                    "givenName": "Max",
                    "familyName": "Verstappen",
                    "dateOfBirth": "1997-09-30",
                    "nationality": "Dutch"
                }
            ]
        }
    }
}

## 6. result
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/results`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/results/",
        "limit": "30",
        "offset": "0",
        "total": "44",
        "RaceTable": {
            "season": "2026",
            "Races": [
                {
                    "season": "2026",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2026_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
                        "circuitId": "albert_park",
                        "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                        "circuitName": "Albert Park Grand Prix Circuit",
                        "Location": {
                            "lat": "-37.8497",
                            "long": "144.968",
                            "locality": "Melbourne",
                            "country": "Australia"
                        }
                    },
                    "date": "2026-03-08",
                    "time": "04:00:00Z",
                    "Results": [
                        {
                            "number": "63",
                            "position": "1",
                            "positionText": "1",
                            "points": "25",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "1",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "4986801",
                                "time": "1:23:06.801"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "21",
                                "Time": {
                                    "time": "1:22.670"
                                }
                            }
                        },
                        {
                            "number": "12",
                            "position": "2",
                            "positionText": "2",
                            "points": "18",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "2",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "4989775",
                                "time": "+2.974"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "57",
                                "Time": {
                                    "time": "1:22.417"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "4",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5002320",
                                "time": "+15.519"
                            },
                            "FastestLap": {
                                "rank": "5",
                                "lap": "38",
                                "Time": {
                                    "time": "1:22.579"
                                }
                            }
                        },
                        {
                            "number": "44",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "7",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5002945",
                                "time": "+16.144"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "55",
                                "Time": {
                                    "time": "1:22.423"
                                }
                            }
                        },
                        {
                            "number": "1",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "1",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "6",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5038542",
                                "time": "+51.741"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "53",
                                "Time": {
                                    "time": "1:22.358"
                                }
                            }
                        },
                        {
                            "number": "3",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "max_verstappen",
                                "permanentNumber": "3",
                                "code": "VER",
                                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                "givenName": "Max",
                                "familyName": "Verstappen",
                                "dateOfBirth": "1997-09-30",
                                "nationality": "Dutch"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "20",
                            "laps": "58",
                            "status": "Finished",
                            "Time": {
                                "millis": "5041418",
                                "time": "+54.617"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "43",
                                "Time": {
                                    "time": "1:22.091"
                                }
                            }
                        },
                        {
                            "number": "87",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "12",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "4991394",
                                "time": "+4.593"
                            },
                            "FastestLap": {
                                "rank": "11",
                                "lap": "22",
                                "Time": {
                                    "time": "1:24.020"
                                }
                            }
                        },
                        {
                            "number": "41",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "arvid_lindblad",
                                "permanentNumber": "41",
                                "code": "LIN",
                                "url": "https://en.wikipedia.org/wiki/Arvid_Lindblad",
                                "givenName": "Arvid",
                                "familyName": "Lindblad",
                                "dateOfBirth": "2007-08-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "grid": "9",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "4998617",
                                "time": "+11.816"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "21",
                                "Time": {
                                    "time": "1:24.182"
                                }
                            }
                        },
                        {
                            "number": "5",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "bortoleto",
                                "permanentNumber": "5",
                                "code": "BOR",
                                "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                                "givenName": "Gabriel",
                                "familyName": "Bortoleto",
                                "dateOfBirth": "2004-10-14",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "grid": "10",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "4999576",
                                "time": "+12.775"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "45",
                                "Time": {
                                    "time": "1:23.257"
                                }
                            }
                        },
                        {
                            "number": "10",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "grid": "14",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "5015828",
                                "time": "+29.027"
                            },
                            "FastestLap": {
                                "rank": "15",
                                "lap": "56",
                                "Time": {
                                    "time": "1:24.486"
                                }
                            }
                        },
                        {
                            "number": "31",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "ocon",
                                "permanentNumber": "31",
                                "code": "OCO",
                                "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                                "givenName": "Esteban",
                                "familyName": "Ocon",
                                "dateOfBirth": "1996-09-17",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "13",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "5016651",
                                "time": "+29.850"
                            },
                            "FastestLap": {
                                "rank": "14",
                                "lap": "25",
                                "Time": {
                                    "time": "1:24.424"
                                }
                            }
                        },
                        {
                            "number": "23",
                            "position": "12",
                            "positionText": "12",
                            "points": "0",
                            "Driver": {
                                "driverId": "albon",
                                "permanentNumber": "23",
                                "code": "ALB",
                                "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                                "givenName": "Alexander",
                                "familyName": "Albon",
                                "dateOfBirth": "1996-03-23",
                                "nationality": "Thai"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "15",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "5042876",
                                "time": "+56.075"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "36",
                                "Time": {
                                    "time": "1:24.375"
                                }
                            }
                        },
                        {
                            "number": "30",
                            "position": "13",
                            "positionText": "13",
                            "points": "0",
                            "Driver": {
                                "driverId": "lawson",
                                "permanentNumber": "30",
                                "code": "LAW",
                                "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                                "givenName": "Liam",
                                "familyName": "Lawson",
                                "dateOfBirth": "2002-02-11",
                                "nationality": "New Zealander"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "grid": "8",
                            "laps": "57",
                            "status": "Lapped",
                            "Time": {
                                "millis": "5043974",
                                "time": "+57.173"
                            },
                            "FastestLap": {
                                "rank": "10",
                                "lap": "47",
                                "Time": {
                                    "time": "1:23.783"
                                }
                            }
                        },
                        {
                            "number": "43",
                            "position": "14",
                            "positionText": "14",
                            "points": "0",
                            "Driver": {
                                "driverId": "colapinto",
                                "permanentNumber": "43",
                                "code": "COL",
                                "url": "http://en.wikipedia.org/wiki/Franco_Colapinto",
                                "givenName": "Franco",
                                "familyName": "Colapinto",
                                "dateOfBirth": "2003-05-27",
                                "nationality": "Argentine"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "grid": "16",
                            "laps": "56",
                            "status": "Lapped",
                            "Time": {
                                "millis": "4995288",
                                "time": "+8.487"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "48",
                                "Time": {
                                    "time": "1:22.926"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "15",
                            "positionText": "15",
                            "points": "0",
                            "Driver": {
                                "driverId": "sainz",
                                "permanentNumber": "55",
                                "code": "SAI",
                                "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                                "givenName": "Carlos",
                                "familyName": "Sainz",
                                "dateOfBirth": "1994-09-01",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "21",
                            "laps": "56",
                            "status": "Lapped",
                            "Time": {
                                "millis": "5023687",
                                "time": "+36.886"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "52",
                                "Time": {
                                    "time": "1:23.590"
                                }
                            }
                        },
                        {
                            "number": "11",
                            "position": "16",
                            "positionText": "16",
                            "points": "0",
                            "Driver": {
                                "driverId": "perez",
                                "permanentNumber": "11",
                                "code": "PER",
                                "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                                "givenName": "Sergio",
                                "familyName": "Pérez",
                                "dateOfBirth": "1990-01-26",
                                "nationality": "Mexican"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "grid": "18",
                            "laps": "55",
                            "status": "Lapped",
                            "Time": {
                                "millis": "4994651",
                                "time": "+7.850"
                            },
                            "FastestLap": {
                                "rank": "19",
                                "lap": "47",
                                "Time": {
                                    "time": "1:26.070"
                                }
                            }
                        },
                        {
                            "number": "18",
                            "position": "17",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "stroll",
                                "permanentNumber": "18",
                                "code": "STR",
                                "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                                "givenName": "Lance",
                                "familyName": "Stroll",
                                "dateOfBirth": "1998-10-29",
                                "nationality": "Canadian"
                            },
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            },
                            "grid": "22",
                            "laps": "43",
                            "status": "Lapped",
                            "FastestLap": {
                                "rank": "17",
                                "lap": "36",
                                "Time": {
                                    "time": "1:25.410"
                                }
                            }
                        },
                        {
                            "number": "14",
                            "position": "18",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "alonso",
                                "permanentNumber": "14",
                                "code": "ALO",
                                "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                                "givenName": "Fernando",
                                "familyName": "Alonso",
                                "dateOfBirth": "1981-07-29",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            },
                            "grid": "17",
                            "laps": "21",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "18",
                                "lap": "15",
                                "Time": {
                                    "time": "1:25.713"
                                }
                            }
                        },
                        {
                            "number": "77",
                            "position": "19",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "bottas",
                                "permanentNumber": "77",
                                "code": "BOT",
                                "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                                "givenName": "Valtteri",
                                "familyName": "Bottas",
                                "dateOfBirth": "1989-08-28",
                                "nationality": "Finnish"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "grid": "19",
                            "laps": "15",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "20",
                                "lap": "8",
                                "Time": {
                                    "time": "1:27.364"
                                }
                            }
                        },
                        {
                            "number": "6",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "3",
                            "laps": "10",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "9",
                                "Time": {
                                    "time": "1:25.239"
                                }
                            }
                        },
                        {
                            "number": "81",
                            "position": "21",
                            "positionText": "W",
                            "points": "0",
                            "Driver": {
                                "driverId": "piastri",
                                "permanentNumber": "81",
                                "code": "PIA",
                                "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                                "givenName": "Oscar",
                                "familyName": "Piastri",
                                "dateOfBirth": "2001-04-06",
                                "nationality": "Australian"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "5",
                            "laps": "0",
                            "status": "Did not start"
                        },
                        {
                            "number": "27",
                            "position": "22",
                            "positionText": "W",
                            "points": "0",
                            "Driver": {
                                "driverId": "hulkenberg",
                                "permanentNumber": "27",
                                "code": "HUL",
                                "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                                "givenName": "Nico",
                                "familyName": "Hülkenberg",
                                "dateOfBirth": "1987-08-19",
                                "nationality": "German"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "grid": "11",
                            "laps": "0",
                            "status": "Did not start"
                        }
                    ]
                },
                {
                    "season": "2026",
                    "round": "2",
                    "url": "https://en.wikipedia.org/wiki/2026_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
                        "circuitId": "shanghai",
                        "url": "https://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                        "circuitName": "Shanghai International Circuit",
                        "Location": {
                            "lat": "31.3389",
                            "long": "121.22",
                            "locality": "Shanghai",
                            "country": "China"
                        }
                    },
                    "date": "2026-03-15",
                    "time": "07:00:00Z",
                    "Results": [
                        {
                            "number": "12",
                            "position": "1",
                            "positionText": "1",
                            "points": "25",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "1",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5595607",
                                "time": "1:33:15.607"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "52",
                                "Time": {
                                    "time": "1:35.275"
                                }
                            }
                        },
                        {
                            "number": "63",
                            "position": "2",
                            "positionText": "2",
                            "points": "18",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "2",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5601122",
                                "time": "+5.515"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "56",
                                "Time": {
                                    "time": "1:35.400"
                                }
                            }
                        },
                        {
                            "number": "44",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "3",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5620874",
                                "time": "+25.267"
                            },
                            "FastestLap": {
                                "rank": "5",
                                "lap": "55",
                                "Time": {
                                    "time": "1:36.092"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "4",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5624501",
                                "time": "+28.894"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "56",
                                "Time": {
                                    "time": "1:36.011"
                                }
                            }
                        },
                        {
                            "number": "87",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "10",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5652875",
                                "time": "+57.268"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "56",
                                "Time": {
                                    "time": "1:36.429"
                                }
                            }
                        },
                        {
                            "number": "10",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "grid": "7",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5655254",
                                "time": "+59.647"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "53",
                                "Time": {
                                    "time": "1:36.505"
                                }
                            }
                        },
                        {
                            "number": "30",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
                            "Driver": {
                                "driverId": "lawson",
                                "permanentNumber": "30",
                                "code": "LAW",
                                "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                                "givenName": "Liam",
                                "familyName": "Lawson",
                                "dateOfBirth": "2002-02-11",
                                "nationality": "New Zealander"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "grid": "14",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5676195",
                                "time": "+1:20.588"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "56",
                                "Time": {
                                    "time": "1:37.096"
                                }
                            }
                        },
                        {
                            "number": "6",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "9",
                            "laps": "56",
                            "status": "Finished",
                            "Time": {
                                "millis": "5682854",
                                "time": "+1:27.247"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "46",
                                "Time": {
                                    "time": "1:37.311"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}

## 7. sprint
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/sprint`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/sprint/",
        "limit": "30",
        "offset": "0",
        "total": "22",
        "RaceTable": {
            "season": "2026",
            "Races": [
                {
                    "season": "2026",
                    "round": "2",
                    "url": "https://en.wikipedia.org/wiki/2026_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
                        "circuitId": "shanghai",
                        "url": "https://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                        "circuitName": "Shanghai International Circuit",
                        "Location": {
                            "lat": "31.3389",
                            "long": "121.22",
                            "locality": "Shanghai",
                            "country": "China"
                        }
                    },
                    "date": "2026-03-15",
                    "time": "07:00:00Z",
                    "SprintResults": [
                        {
                            "number": "63",
                            "position": "1",
                            "positionText": "1",
                            "points": "8",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "1",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2018998",
                                "time": "33:38.998"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "18",
                                "Time": {
                                    "time": "1:35.101"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "2",
                            "positionText": "2",
                            "points": "7",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "6",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2019672",
                                "time": "+0.674"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "18",
                                "Time": {
                                    "time": "1:34.753"
                                }
                            }
                        },
                        {
                            "number": "44",
                            "position": "3",
                            "positionText": "3",
                            "points": "6",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "4",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2021552",
                                "time": "+2.554"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "18",
                                "Time": {
                                    "time": "1:34.926"
                                }
                            }
                        },
                        {
                            "number": "1",
                            "position": "4",
                            "positionText": "4",
                            "points": "5",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "1",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "3",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2023431",
                                "time": "+4.433"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "19",
                                "Time": {
                                    "time": "1:35.708"
                                }
                            }
                        },
                        {
                            "number": "12",
                            "position": "5",
                            "positionText": "5",
                            "points": "4",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "2",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2024686",
                                "time": "+5.688"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "18",
                                "Time": {
                                    "time": "1:34.760"
                                }
                            }
                        },
                        {
                            "number": "81",
                            "position": "6",
                            "positionText": "6",
                            "points": "3",
                            "Driver": {
                                "driverId": "piastri",
                                "permanentNumber": "81",
                                "code": "PIA",
                                "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                                "givenName": "Oscar",
                                "familyName": "Piastri",
                                "dateOfBirth": "2001-04-06",
                                "nationality": "Australian"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "5",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2025807",
                                "time": "+6.809"
                            },
                            "FastestLap": {
                                "rank": "5",
                                "lap": "19",
                                "Time": {
                                    "time": "1:35.635"
                                }
                            }
                        },
                        {
                            "number": "30",
                            "position": "7",
                            "positionText": "7",
                            "points": "2",
                            "Driver": {
                                "driverId": "lawson",
                                "permanentNumber": "30",
                                "code": "LAW",
                                "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                                "givenName": "Liam",
                                "familyName": "Lawson",
                                "dateOfBirth": "2002-02-11",
                                "nationality": "New Zealander"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "grid": "13",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2029898",
                                "time": "+10.900"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "19",
                                "Time": {
                                    "time": "1:37.882"
                                }
                            }
                        },
                        {
                            "number": "87",
                            "position": "8",
                            "positionText": "8",
                            "points": "1",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "9",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2030269",
                                "time": "+11.271"
                            },
                            "FastestLap": {
                                "rank": "11",
                                "lap": "18",
                                "Time": {
                                    "time": "1:37.374"
                                }
                            }
                        },
                        {
                            "number": "3",
                            "position": "9",
                            "positionText": "9",
                            "points": "0",
                            "Driver": {
                                "driverId": "max_verstappen",
                                "permanentNumber": "3",
                                "code": "VER",
                                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                "givenName": "Max",
                                "familyName": "Verstappen",
                                "dateOfBirth": "1997-09-30",
                                "nationality": "Dutch"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "8",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2030617",
                                "time": "+11.619"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "19",
                                "Time": {
                                    "time": "1:35.774"
                                }
                            }
                        },
                        {
                            "number": "31",
                            "position": "10",
                            "positionText": "10",
                            "points": "0",
                            "Driver": {
                                "driverId": "ocon",
                                "permanentNumber": "31",
                                "code": "OCO",
                                "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                                "givenName": "Esteban",
                                "familyName": "Ocon",
                                "dateOfBirth": "1996-09-17",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "12",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2032885",
                                "time": "+13.887"
                            },
                            "FastestLap": {
                                "rank": "10",
                                "lap": "18",
                                "Time": {
                                    "time": "1:37.363"
                                }
                            }
                        },
                        {
                            "number": "10",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "grid": "7",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2033778",
                                "time": "+14.780"
                            },
                            "FastestLap": {
                                "rank": "17",
                                "lap": "17",
                                "Time": {
                                    "time": "1:38.349"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "12",
                            "positionText": "12",
                            "points": "0",
                            "Driver": {
                                "driverId": "sainz",
                                "permanentNumber": "55",
                                "code": "SAI",
                                "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                                "givenName": "Carlos",
                                "familyName": "Sainz",
                                "dateOfBirth": "1994-09-01",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "17",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2034751",
                                "time": "+15.753"
                            },
                            "FastestLap": {
                                "rank": "14",
                                "lap": "18",
                                "Time": {
                                    "time": "1:37.913"
                                }
                            }
                        },
                        {
                            "number": "5",
                            "position": "13",
                            "positionText": "13",
                            "points": "0",
                            "Driver": {
                                "driverId": "bortoleto",
                                "permanentNumber": "5",
                                "code": "BOR",
                                "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                                "givenName": "Gabriel",
                                "familyName": "Bortoleto",
                                "dateOfBirth": "2004-10-14",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "grid": "14",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2034856",
                                "time": "+15.858"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "18",
                                "Time": {
                                    "time": "1:37.800"
                                }
                            }
                        },
                        {
                            "number": "43",
                            "position": "14",
                            "positionText": "14",
                            "points": "0",
                            "Driver": {
                                "driverId": "colapinto",
                                "permanentNumber": "43",
                                "code": "COL",
                                "url": "http://en.wikipedia.org/wiki/Franco_Colapinto",
                                "givenName": "Franco",
                                "familyName": "Colapinto",
                                "dateOfBirth": "2003-05-27",
                                "nationality": "Argentine"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "grid": "16",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2035391",
                                "time": "+16.393"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "18",
                                "Time": {
                                    "time": "1:37.278"
                                }
                            }
                        },
                        {
                            "number": "6",
                            "position": "15",
                            "positionText": "15",
                            "points": "0",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "10",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2035428",
                                "time": "+16.430"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "18",
                                "Time": {
                                    "time": "1:36.912"
                                }
                            }
                        },
                        {
                            "number": "23",
                            "position": "16",
                            "positionText": "16",
                            "points": "0",
                            "Driver": {
                                "driverId": "albon",
                                "permanentNumber": "23",
                                "code": "ALB",
                                "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                                "givenName": "Alexander",
                                "familyName": "Albon",
                                "dateOfBirth": "1996-03-23",
                                "nationality": "Thai"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "22",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2039012",
                                "time": "+20.014"
                            },
                            "FastestLap": {
                                "rank": "16",
                                "lap": "19",
                                "Time": {
                                    "time": "1:38.158"
                                }
                            }
                        },
                        {
                            "number": "14",
                            "position": "17",
                            "positionText": "17",
                            "points": "0",
                            "Driver": {
                                "driverId": "alonso",
                                "permanentNumber": "14",
                                "code": "ALO",
                                "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                                "givenName": "Fernando",
                                "familyName": "Alonso",
                                "dateOfBirth": "1981-07-29",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            },
                            "grid": "18",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2040597",
                                "time": "+21.599"
                            },
                            "FastestLap": {
                                "rank": "19",
                                "lap": "19",
                                "Time": {
                                    "time": "1:38.487"
                                }
                            }
                        },
                        {
                            "number": "18",
                            "position": "18",
                            "positionText": "18",
                            "points": "0",
                            "Driver": {
                                "driverId": "stroll",
                                "permanentNumber": "18",
                                "code": "STR",
                                "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                                "givenName": "Lance",
                                "familyName": "Stroll",
                                "dateOfBirth": "1998-10-29",
                                "nationality": "Canadian"
                            },
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            },
                            "grid": "19",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2040969",
                                "time": "+21.971"
                            },
                            "FastestLap": {
                                "rank": "20",
                                "lap": "18",
                                "Time": {
                                    "time": "1:38.532"
                                }
                            }
                        },
                        {
                            "number": "11",
                            "position": "19",
                            "positionText": "19",
                            "points": "0",
                            "Driver": {
                                "driverId": "perez",
                                "permanentNumber": "11",
                                "code": "PER",
                                "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                                "givenName": "Sergio",
                                "familyName": "Pérez",
                                "dateOfBirth": "1990-01-26",
                                "nationality": "Mexican"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "grid": "21",
                            "laps": "19",
                            "status": "Finished",
                            "Time": {
                                "millis": "2047239",
                                "time": "+28.241"
                            },
                            "FastestLap": {
                                "rank": "21",
                                "lap": "18",
                                "Time": {
                                    "time": "1:38.862"
                                }
                            }
                        },
                        {
                            "number": "27",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "hulkenberg",
                                "permanentNumber": "27",
                                "code": "HUL",
                                "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                                "givenName": "Nico",
                                "familyName": "Hülkenberg",
                                "dateOfBirth": "1987-08-19",
                                "nationality": "German"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "grid": "11",
                            "laps": "12",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "15",
                                "lap": "5",
                                "Time": {
                                    "time": "1:38.027"
                                }
                            }
                        },
                        {
                            "number": "77",
                            "position": "21",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "bottas",
                                "permanentNumber": "77",
                                "code": "BOT",
                                "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                                "givenName": "Valtteri",
                                "familyName": "Bottas",
                                "dateOfBirth": "1989-08-28",
                                "nationality": "Finnish"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "grid": "20",
                            "laps": "12",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "22",
                                "lap": "9",
                                "Time": {
                                    "time": "1:39.262"
                                }
                            }
                        },
                        {
                            "number": "41",
                            "position": "22",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "arvid_lindblad",
                                "permanentNumber": "41",
                                "code": "LIN",
                                "url": "https://en.wikipedia.org/wiki/Arvid_Lindblad",
                                "givenName": "Arvid",
                                "familyName": "Lindblad",
                                "dateOfBirth": "2007-08-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "grid": "15",
                            "laps": "11",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "18",
                                "lap": "6",
                                "Time": {
                                    "time": "1:38.475"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}


## 8. qualifying
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/qualifying`

**Response Structure:**

{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/qualifying/",
        "limit": "30",
        "offset": "0",
        "total": "41",
        "RaceTable": {
            "season": "2026",
            "Races": [
                {
                    "season": "2026",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2026_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
                        "circuitId": "albert_park",
                        "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                        "circuitName": "Albert Park Grand Prix Circuit",
                        "Location": {
                            "lat": "-37.8497",
                            "long": "144.968",
                            "locality": "Melbourne",
                            "country": "Australia"
                        }
                    },
                    "date": "2026-03-08",
                    "time": "04:00:00Z",
                    "QualifyingResults": [
                        {
                            "number": "63",
                            "position": "1",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "Q1": "1:19.507",
                            "Q2": "1:18.934",
                            "Q3": "1:18.518"
                        },
                        {
                            "number": "12",
                            "position": "2",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "Q1": "1:20.120",
                            "Q2": "1:19.435",
                            "Q3": "1:18.811"
                        },
                        {
                            "number": "6",
                            "position": "3",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "Q1": "1:20.023",
                            "Q2": "1:19.653",
                            "Q3": "1:19.303"
                        },
                        {
                            "number": "16",
                            "position": "4",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "Q1": "1:20.226",
                            "Q2": "1:19.357",
                            "Q3": "1:19.327"
                        },
                        {
                            "number": "81",
                            "position": "5",
                            "Driver": {
                                "driverId": "piastri",
                                "permanentNumber": "81",
                                "code": "PIA",
                                "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                                "givenName": "Oscar",
                                "familyName": "Piastri",
                                "dateOfBirth": "2001-04-06",
                                "nationality": "Australian"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "Q1": "1:19.664",
                            "Q2": "1:19.525",
                            "Q3": "1:19.380"
                        },
                        {
                            "number": "1",
                            "position": "6",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "1",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "Q1": "1:20.010",
                            "Q2": "1:19.882",
                            "Q3": "1:19.475"
                        },
                        {
                            "number": "44",
                            "position": "7",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "Q1": "1:19.811",
                            "Q2": "1:19.921",
                            "Q3": "1:19.478"
                        },
                        {
                            "number": "30",
                            "position": "8",
                            "Driver": {
                                "driverId": "lawson",
                                "permanentNumber": "30",
                                "code": "LAW",
                                "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                                "givenName": "Liam",
                                "familyName": "Lawson",
                                "dateOfBirth": "2002-02-11",
                                "nationality": "New Zealander"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "Q1": "1:20.491",
                            "Q2": "1:20.144",
                            "Q3": "1:19.994"
                        },
                        {
                            "number": "41",
                            "position": "9",
                            "Driver": {
                                "driverId": "arvid_lindblad",
                                "permanentNumber": "41",
                                "code": "LIN",
                                "url": "https://en.wikipedia.org/wiki/Arvid_Lindblad",
                                "givenName": "Arvid",
                                "familyName": "Lindblad",
                                "dateOfBirth": "2007-08-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            },
                            "Q1": "1:20.409",
                            "Q2": "1:19.971",
                            "Q3": "1:21.247"
                        },
                        {
                            "number": "5",
                            "position": "10",
                            "Driver": {
                                "driverId": "bortoleto",
                                "permanentNumber": "5",
                                "code": "BOR",
                                "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                                "givenName": "Gabriel",
                                "familyName": "Bortoleto",
                                "dateOfBirth": "2004-10-14",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "Q1": "1:20.495",
                            "Q2": "1:20.221",
                            "Q3": ""
                        },
                        {
                            "number": "27",
                            "position": "11",
                            "Driver": {
                                "driverId": "hulkenberg",
                                "permanentNumber": "27",
                                "code": "HUL",
                                "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                                "givenName": "Nico",
                                "familyName": "Hülkenberg",
                                "dateOfBirth": "1987-08-19",
                                "nationality": "German"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "Q1": "1:21.024",
                            "Q2": "1:20.303"
                        },
                        {
                            "number": "87",
                            "position": "12",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "Q1": "1:21.247",
                            "Q2": "1:20.311"
                        },
                        {
                            "number": "31",
                            "position": "13",
                            "Driver": {
                                "driverId": "ocon",
                                "permanentNumber": "31",
                                "code": "OCO",
                                "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                                "givenName": "Esteban",
                                "familyName": "Ocon",
                                "dateOfBirth": "1996-09-17",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "Q1": "1:20.759",
                            "Q2": "1:20.491"
                        },
                        {
                            "number": "10",
                            "position": "14",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "Q1": "1:21.138",
                            "Q2": "1:20.501"
                        },
                        {
                            "number": "23",
                            "position": "15",
                            "Driver": {
                                "driverId": "albon",
                                "permanentNumber": "23",
                                "code": "ALB",
                                "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                                "givenName": "Alexander",
                                "familyName": "Albon",
                                "dateOfBirth": "1996-03-23",
                                "nationality": "Thai"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "Q1": "1:21.051",
                            "Q2": "1:20.941"
                        },
                        {
                            "number": "43",
                            "position": "16",
                            "Driver": {
                                "driverId": "colapinto",
                                "permanentNumber": "43",
                                "code": "COL",
                                "url": "http://en.wikipedia.org/wiki/Franco_Colapinto",
                                "givenName": "Franco",
                                "familyName": "Colapinto",
                                "dateOfBirth": "2003-05-27",
                                "nationality": "Argentine"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "Q1": "1:21.200",
                            "Q2": "1:21.270"
                        },
                        {
                            "number": "14",
                            "position": "17",
                            "Driver": {
                                "driverId": "alonso",
                                "permanentNumber": "14",
                                "code": "ALO",
                                "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                                "givenName": "Fernando",
                                "familyName": "Alonso",
                                "dateOfBirth": "1981-07-29",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            },
                            "Q1": "1:21.969"
                        },
                        {
                            "number": "11",
                            "position": "18",
                            "Driver": {
                                "driverId": "perez",
                                "permanentNumber": "11",
                                "code": "PER",
                                "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                                "givenName": "Sergio",
                                "familyName": "Pérez",
                                "dateOfBirth": "1990-01-26",
                                "nationality": "Mexican"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "Q1": "1:22.605"
                        },
                        {
                            "number": "77",
                            "position": "19",
                            "Driver": {
                                "driverId": "bottas",
                                "permanentNumber": "77",
                                "code": "BOT",
                                "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                                "givenName": "Valtteri",
                                "familyName": "Bottas",
                                "dateOfBirth": "1989-08-28",
                                "nationality": "Finnish"
                            },
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            },
                            "Q1": "1:23.244"
                        }
                    ]
                },
                {
                    "season": "2026",
                    "round": "2",
                    "url": "https://en.wikipedia.org/wiki/2026_Chinese_Grand_Prix",
                    "raceName": "Chinese Grand Prix",
                    "Circuit": {
                        "circuitId": "shanghai",
                        "url": "https://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                        "circuitName": "Shanghai International Circuit",
                        "Location": {
                            "lat": "31.3389",
                            "long": "121.22",
                            "locality": "Shanghai",
                            "country": "China"
                        }
                    },
                    "date": "2026-03-15",
                    "time": "07:00:00Z",
                    "QualifyingResults": [
                        {
                            "number": "12",
                            "position": "1",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "Q1": "1:33.305",
                            "Q2": "1:32.443",
                            "Q3": "1:32.064"
                        },
                        {
                            "number": "63",
                            "position": "2",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "Q1": "1:33.262",
                            "Q2": "1:32.523",
                            "Q3": "1:32.286"
                        },
                        {
                            "number": "44",
                            "position": "3",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "Q1": "1:33.522",
                            "Q2": "1:32.567",
                            "Q3": "1:32.415"
                        },
                        {
                            "number": "16",
                            "position": "4",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "Q1": "1:33.175",
                            "Q2": "1:32.486",
                            "Q3": "1:32.428"
                        },
                        {
                            "number": "81",
                            "position": "5",
                            "Driver": {
                                "driverId": "piastri",
                                "permanentNumber": "81",
                                "code": "PIA",
                                "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                                "givenName": "Oscar",
                                "familyName": "Piastri",
                                "dateOfBirth": "2001-04-06",
                                "nationality": "Australian"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "Q1": "1:33.590",
                            "Q2": "1:33.130",
                            "Q3": "1:32.550"
                        },
                        {
                            "number": "1",
                            "position": "6",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "1",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "Q1": "1:33.535",
                            "Q2": "1:32.910",
                            "Q3": "1:32.608"
                        },
                        {
                            "number": "10",
                            "position": "7",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            },
                            "Q1": "1:33.788",
                            "Q2": "1:33.003",
                            "Q3": "1:32.873"
                        },
                        {
                            "number": "3",
                            "position": "8",
                            "Driver": {
                                "driverId": "max_verstappen",
                                "permanentNumber": "3",
                                "code": "VER",
                                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                "givenName": "Max",
                                "familyName": "Verstappen",
                                "dateOfBirth": "1997-09-30",
                                "nationality": "Dutch"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "Q1": "1:33.417",
                            "Q2": "1:33.098",
                            "Q3": "1:33.002"
                        },
                        {
                            "number": "6",
                            "position": "9",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "Q1": "1:33.632",
                            "Q2": "1:33.352",
                            "Q3": "1:33.121"
                        },
                        {
                            "number": "87",
                            "position": "10",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "Q1": "1:33.687",
                            "Q2": "1:33.197",
                            "Q3": "1:33.292"
                        },
                        {
                            "number": "5",
                            "position": "16",
                            "Driver": {
                                "driverId": "bortoleto",
                                "permanentNumber": "5",
                                "code": "BOR",
                                "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                                "givenName": "Gabriel",
                                "familyName": "Bortoleto",
                                "dateOfBirth": "2004-10-14",
                                "nationality": "Brazilian"
                            },
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            },
                            "Q1": "1:33.549",
                            "Q2": "1:33.965"
                        }
                    ]
                }
            ]
        }
    }
}


## 9. pitstop
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/1/pitstops`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/1/pitstops/",
        "limit": "30",
        "offset": "0",
        "total": "32",
        "RaceTable": {
            "season": "2026",
            "round": "1",
            "Races": [
                {
                    "season": "2026",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2026_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
                        "circuitId": "albert_park",
                        "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                        "circuitName": "Albert Park Grand Prix Circuit",
                        "Location": {
                            "lat": "-37.8497",
                            "long": "144.968",
                            "locality": "Melbourne",
                            "country": "Australia"
                        }
                    },
                    "date": "2026-03-08",
                    "time": "04:00:00Z",
                    "PitStops": [
                        {
                            "driverId": "colapinto",
                            "lap": "9",
                            "stop": "1",
                            "time": "15:16:40",
                            "duration": "27.733"
                        },
                        {
                            "driverId": "norris",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:21",
                            "duration": "18.266"
                        },
                        {
                            "driverId": "ocon",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:26",
                            "duration": "18.570"
                        },
                        {
                            "driverId": "gasly",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:27",
                            "duration": "18.672"
                        },
                        {
                            "driverId": "sainz",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:35",
                            "duration": "19.859"
                        },
                        {
                            "driverId": "lawson",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:42",
                            "duration": "19.112"
                        },
                        {
                            "driverId": "alonso",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:19:50",
                            "duration": "25.895"
                        },
                        {
                            "driverId": "stroll",
                            "lap": "11",
                            "stop": "1",
                            "time": "15:20:00",
                            "duration": "36.686"
                        },
                        {
                            "driverId": "russell",
                            "lap": "12",
                            "stop": "1",
                            "time": "15:20:57",
                            "duration": "17.794"
                        },
                        {
                            "driverId": "antonelli",
                            "lap": "12",
                            "stop": "1",
                            "time": "15:20:59",
                            "duration": "20.985"
                        },
                        {
                            "driverId": "albon",
                            "lap": "12",
                            "stop": "1",
                            "time": "15:21:28",
                            "duration": "18.118"
                        },
                        {
                            "driverId": "bottas",
                            "lap": "12",
                            "stop": "1",
                            "time": "15:22:42",
                            "duration": "30.387"
                        },
                        {
                            "driverId": "alonso",
                            "lap": "13",
                            "stop": "2",
                            "time": "15:23:55",
                            "duration": "16:12.356"
                        },
                        {
                            "driverId": "arvid_lindblad",
                            "lap": "18",
                            "stop": "1",
                            "time": "15:30:28",
                            "duration": "18.506"
                        },
                        {
                            "driverId": "max_verstappen",
                            "lap": "18",
                            "stop": "1",
                            "time": "15:30:29",
                            "duration": "19.070"
                        },
                        {
                            "driverId": "bearman",
                            "lap": "18",
                            "stop": "1",
                            "time": "15:30:30",
                            "duration": "18.774"
                        },
                        {
                            "driverId": "bortoleto",
                            "lap": "18",
                            "stop": "1",
                            "time": "15:30:35",
                            "duration": "18.916"
                        },
                        {
                            "driverId": "perez",
                            "lap": "18",
                            "stop": "1",
                            "time": "15:31:24",
                            "duration": "21.371"
                        },
                        {
                            "driverId": "leclerc",
                            "lap": "25",
                            "stop": "1",
                            "time": "15:40:29",
                            "duration": "17.664"
                        },
                        {
                            "driverId": "stroll",
                            "lap": "26",
                            "stop": "2",
                            "time": "15:43:52",
                            "duration": "33.182"
                        },
                        {
                            "driverId": "hamilton",
                            "lap": "28",
                            "stop": "1",
                            "time": "15:44:45",
                            "duration": "17.741"
                        },
                        {
                            "driverId": "bortoleto",
                            "lap": "33",
                            "stop": "2",
                            "time": "15:52:30",
                            "duration": "22.619"
                        },
                        {
                            "driverId": "albon",
                            "lap": "33",
                            "stop": "2",
                            "time": "15:53:04",
                            "duration": "18.404"
                        },
                        {
                            "driverId": "sainz",
                            "lap": "33",
                            "stop": "2",
                            "time": "15:53:09",
                            "duration": "25.939"
                        },
                        {
                            "driverId": "lawson",
                            "lap": "33",
                            "stop": "2",
                            "time": "15:53:16",
                            "duration": "18.190"
                        },
                        {
                            "driverId": "norris",
                            "lap": "34",
                            "stop": "2",
                            "time": "15:53:48",
                            "duration": "17.649"
                        },
                        {
                            "driverId": "stroll",
                            "lap": "34",
                            "stop": "3",
                            "time": "15:56:24",
                            "duration": "18:01.553"
                        },
                        {
                            "driverId": "max_verstappen",
                            "lap": "41",
                            "stop": "2",
                            "time": "16:03:37",
                            "duration": "18.078"
                        },
                        {
                            "driverId": "perez",
                            "lap": "43",
                            "stop": "2",
                            "time": "16:08:53",
                            "duration": "18.951"
                        },
                        {
                            "driverId": "sainz",
                            "lap": "45",
                            "stop": "3",
                            "time": "16:10:48",
                            "duration": "34.615"
                        }
                    ]
                }
            ]
        }
    }
}

## 10. lap
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/1/laps`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/1/laps/",
        "limit": "30",
        "offset": "0",
        "total": "1003",
        "RaceTable": {
            "season": "2026",
            "round": "1",
            "Races": [
                {
                    "season": "2026",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2026_Australian_Grand_Prix",
                    "raceName": "Australian Grand Prix",
                    "Circuit": {
                        "circuitId": "albert_park",
                        "url": "https://en.wikipedia.org/wiki/Albert_Park_Circuit",
                        "circuitName": "Albert Park Grand Prix Circuit",
                        "Location": {
                            "lat": "-37.8497",
                            "long": "144.968",
                            "locality": "Melbourne",
                            "country": "Australia"
                        }
                    },
                    "date": "2026-03-08",
                    "time": "04:00:00Z",
                    "Laps": [
                        {
                            "number": "1",
                            "Timings": [
                                {
                                    "driverId": "norris",
                                    "time": "1:36.458"
                                },
                                {
                                    "driverId": "gasly",
                                    "time": "1:37.980"
                                },
                                {
                                    "driverId": "perez",
                                    "time": "1:42.557"
                                },
                                {
                                    "driverId": "antonelli",
                                    "time": "1:36.966"
                                },
                                {
                                    "driverId": "alonso",
                                    "time": "1:38.271"
                                },
                                {
                                    "driverId": "leclerc",
                                    "time": "1:31.929"
                                },
                                {
                                    "driverId": "stroll",
                                    "time": "1:43.370"
                                },
                                {
                                    "driverId": "albon",
                                    "time": "1:39.376"
                                },
                                {
                                    "driverId": "max_verstappen",
                                    "time": "1:41.333"
                                },
                                {
                                    "driverId": "lawson",
                                    "time": "1:42.188"
                                },
                                {
                                    "driverId": "ocon",
                                    "time": "1:37.500"
                                },
                                {
                                    "driverId": "arvid_lindblad",
                                    "time": "1:36.081"
                                },
                                {
                                    "driverId": "colapinto",
                                    "time": "1:41.613"
                                },
                                {
                                    "driverId": "hamilton",
                                    "time": "1:35.261"
                                },
                                {
                                    "driverId": "bortoleto",
                                    "time": "1:38.755"
                                },
                                {
                                    "driverId": "sainz",
                                    "time": "1:39.815"
                                },
                                {
                                    "driverId": "hadjar",
                                    "time": "1:36.046"
                                },
                                {
                                    "driverId": "russell",
                                    "time": "1:32.694"
                                },
                                {
                                    "driverId": "bottas",
                                    "time": "1:40.850"
                                },
                                {
                                    "driverId": "bearman",
                                    "time": "1:39.765"
                                }
                            ]
                        },
                        {
                            "number": "2",
                            "Timings": [
                                {
                                    "driverId": "norris",
                                    "time": "1:27.344"
                                },
                                {
                                    "driverId": "gasly",
                                    "time": "1:27.281"
                                },
                                {
                                    "driverId": "perez",
                                    "time": "1:28.763"
                                },
                                {
                                    "driverId": "antonelli",
                                    "time": "1:27.129"
                                },
                                {
                                    "driverId": "alonso",
                                    "time": "1:27.598"
                                },
                                {
                                    "driverId": "leclerc",
                                    "time": "1:26.212"
                                },
                                {
                                    "driverId": "stroll",
                                    "time": "1:28.773"
                                },
                                {
                                    "driverId": "albon",
                                    "time": "1:27.780"
                                },
                                {
                                    "driverId": "max_verstappen",
                                    "time": "1:26.828"
                                },
                                {
                                    "driverId": "lawson",
                                    "time": "1:28.537"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}


## 11. driverstanding
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/driverstandings`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/driverstandings/",
        "limit": "30",
        "offset": "0",
        "total": "22",
        "StandingsTable": {
            "season": "2026",
            "round": "2",
            "StandingsLists": [
                {
                    "season": "2026",
                    "round": "2",
                    "DriverStandings": [
                        {
                            "position": "1",
                            "positionText": "1",
                            "points": "51",
                            "wins": "1",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "mercedes",
                                    "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                    "name": "Mercedes",
                                    "nationality": "German"
                                }
                            ]
                        },
                        {
                            "position": "2",
                            "positionText": "2",
                            "points": "47",
                            "wins": "1",
                            "Driver": {
                                "driverId": "antonelli",
                                "permanentNumber": "12",
                                "code": "ANT",
                                "url": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli",
                                "givenName": "Andrea Kimi",
                                "familyName": "Antonelli",
                                "dateOfBirth": "2006-08-25",
                                "nationality": "Italian"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "mercedes",
                                    "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                    "name": "Mercedes",
                                    "nationality": "German"
                                }
                            ]
                        },
                        {
                            "position": "3",
                            "positionText": "3",
                            "points": "34",
                            "wins": "0",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "ferrari",
                                    "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                    "name": "Ferrari",
                                    "nationality": "Italian"
                                }
                            ]
                        },
                        {
                            "position": "4",
                            "positionText": "4",
                            "points": "33",
                            "wins": "0",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "ferrari",
                                    "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                    "name": "Ferrari",
                                    "nationality": "Italian"
                                }
                            ]
                        },
                        {
                            "position": "5",
                            "positionText": "5",
                            "points": "17",
                            "wins": "0",
                            "Driver": {
                                "driverId": "bearman",
                                "permanentNumber": "87",
                                "code": "BEA",
                                "url": "http://en.wikipedia.org/wiki/Oliver_Bearman",
                                "givenName": "Oliver",
                                "familyName": "Bearman",
                                "dateOfBirth": "2005-05-08",
                                "nationality": "British"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "haas",
                                    "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                    "name": "Haas F1 Team",
                                    "nationality": "American"
                                }
                            ]
                        },
                        {
                            "position": "6",
                            "positionText": "6",
                            "points": "15",
                            "wins": "0",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "1",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "mclaren",
                                    "url": "https://en.wikipedia.org/wiki/McLaren",
                                    "name": "McLaren",
                                    "nationality": "British"
                                }
                            ]
                        },
                        {
                            "position": "7",
                            "positionText": "7",
                            "points": "9",
                            "wins": "0",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "alpine",
                                    "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                    "name": "Alpine F1 Team",
                                    "nationality": "French"
                                }
                            ]
                        },
                        {
                            "position": "8",
                            "positionText": "8",
                            "points": "8",
                            "wins": "0",
                            "Driver": {
                                "driverId": "max_verstappen",
                                "permanentNumber": "3",
                                "code": "VER",
                                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                "givenName": "Max",
                                "familyName": "Verstappen",
                                "dateOfBirth": "1997-09-30",
                                "nationality": "Dutch"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "red_bull",
                                    "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                    "name": "Red Bull",
                                    "nationality": "Austrian"
                                }
                            ]
                        },
                        {
                            "position": "9",
                            "positionText": "9",
                            "points": "8",
                            "wins": "0",
                            "Driver": {
                                "driverId": "lawson",
                                "permanentNumber": "30",
                                "code": "LAW",
                                "url": "http://en.wikipedia.org/wiki/Liam_Lawson",
                                "givenName": "Liam",
                                "familyName": "Lawson",
                                "dateOfBirth": "2002-02-11",
                                "nationality": "New Zealander"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "rb",
                                    "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                    "name": "RB F1 Team",
                                    "nationality": "Italian"
                                }
                            ]
                        },
                        {
                            "position": "10",
                            "positionText": "10",
                            "points": "4",
                            "wins": "0",
                            "Driver": {
                                "driverId": "arvid_lindblad",
                                "permanentNumber": "41",
                                "code": "LIN",
                                "url": "https://en.wikipedia.org/wiki/Arvid_Lindblad",
                                "givenName": "Arvid",
                                "familyName": "Lindblad",
                                "dateOfBirth": "2007-08-08",
                                "nationality": "British"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "rb",
                                    "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                    "name": "RB F1 Team",
                                    "nationality": "Italian"
                                }
                            ]
                        },
                        {
                            "position": "11",
                            "positionText": "11",
                            "points": "4",
                            "wins": "0",
                            "Driver": {
                                "driverId": "hadjar",
                                "permanentNumber": "6",
                                "code": "HAD",
                                "url": "https://en.wikipedia.org/wiki/Isack_Hadjar",
                                "givenName": "Isack",
                                "familyName": "Hadjar",
                                "dateOfBirth": "2004-09-28",
                                "nationality": "French"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "red_bull",
                                    "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                    "name": "Red Bull",
                                    "nationality": "Austrian"
                                }
                            ]
                        },
                        {
                            "position": "12",
                            "positionText": "12",
                            "points": "3",
                            "wins": "0",
                            "Driver": {
                                "driverId": "piastri",
                                "permanentNumber": "81",
                                "code": "PIA",
                                "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
                                "givenName": "Oscar",
                                "familyName": "Piastri",
                                "dateOfBirth": "2001-04-06",
                                "nationality": "Australian"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "mclaren",
                                    "url": "https://en.wikipedia.org/wiki/McLaren",
                                    "name": "McLaren",
                                    "nationality": "British"
                                }
                            ]
                        },
                        {
                            "position": "13",
                            "positionText": "13",
                            "points": "2",
                            "wins": "0",
                            "Driver": {
                                "driverId": "sainz",
                                "permanentNumber": "55",
                                "code": "SAI",
                                "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                                "givenName": "Carlos",
                                "familyName": "Sainz",
                                "dateOfBirth": "1994-09-01",
                                "nationality": "Spanish"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "williams",
                                    "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                    "name": "Williams",
                                    "nationality": "British"
                                }
                            ]
                        },
                        {
                            "position": "14",
                            "positionText": "14",
                            "points": "2",
                            "wins": "0",
                            "Driver": {
                                "driverId": "bortoleto",
                                "permanentNumber": "5",
                                "code": "BOR",
                                "url": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto",
                                "givenName": "Gabriel",
                                "familyName": "Bortoleto",
                                "dateOfBirth": "2004-10-14",
                                "nationality": "Brazilian"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "audi",
                                    "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                    "name": "Audi",
                                    "nationality": "German"
                                }
                            ]
                        },
                        {
                            "position": "15",
                            "positionText": "15",
                            "points": "1",
                            "wins": "0",
                            "Driver": {
                                "driverId": "colapinto",
                                "permanentNumber": "43",
                                "code": "COL",
                                "url": "http://en.wikipedia.org/wiki/Franco_Colapinto",
                                "givenName": "Franco",
                                "familyName": "Colapinto",
                                "dateOfBirth": "2003-05-27",
                                "nationality": "Argentine"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "alpine",
                                    "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                    "name": "Alpine F1 Team",
                                    "nationality": "French"
                                }
                            ]
                        },
                        {
                            "position": "16",
                            "positionText": "16",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "ocon",
                                "permanentNumber": "31",
                                "code": "OCO",
                                "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                                "givenName": "Esteban",
                                "familyName": "Ocon",
                                "dateOfBirth": "1996-09-17",
                                "nationality": "French"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "haas",
                                    "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                    "name": "Haas F1 Team",
                                    "nationality": "American"
                                }
                            ]
                        },
                        {
                            "position": "17",
                            "positionText": "17",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "hulkenberg",
                                "permanentNumber": "27",
                                "code": "HUL",
                                "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                                "givenName": "Nico",
                                "familyName": "Hülkenberg",
                                "dateOfBirth": "1987-08-19",
                                "nationality": "German"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "audi",
                                    "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                    "name": "Audi",
                                    "nationality": "German"
                                }
                            ]
                        },
                        {
                            "position": "18",
                            "positionText": "18",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "albon",
                                "permanentNumber": "23",
                                "code": "ALB",
                                "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                                "givenName": "Alexander",
                                "familyName": "Albon",
                                "dateOfBirth": "1996-03-23",
                                "nationality": "Thai"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "williams",
                                    "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                    "name": "Williams",
                                    "nationality": "British"
                                }
                            ]
                        },
                        {
                            "position": "19",
                            "positionText": "19",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "bottas",
                                "permanentNumber": "77",
                                "code": "BOT",
                                "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                                "givenName": "Valtteri",
                                "familyName": "Bottas",
                                "dateOfBirth": "1989-08-28",
                                "nationality": "Finnish"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "cadillac",
                                    "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                    "name": "Cadillac F1 Team",
                                    "nationality": "American"
                                }
                            ]
                        },
                        {
                            "position": "20",
                            "positionText": "20",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "perez",
                                "permanentNumber": "11",
                                "code": "PER",
                                "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                                "givenName": "Sergio",
                                "familyName": "Pérez",
                                "dateOfBirth": "1990-01-26",
                                "nationality": "Mexican"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "cadillac",
                                    "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                    "name": "Cadillac F1 Team",
                                    "nationality": "American"
                                }
                            ]
                        },
                        {
                            "position": "21",
                            "positionText": "21",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "alonso",
                                "permanentNumber": "14",
                                "code": "ALO",
                                "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
                                "givenName": "Fernando",
                                "familyName": "Alonso",
                                "dateOfBirth": "1981-07-29",
                                "nationality": "Spanish"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "aston_martin",
                                    "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                    "name": "Aston Martin",
                                    "nationality": "British"
                                }
                            ]
                        },
                        {
                            "position": "22",
                            "positionText": "22",
                            "points": "0",
                            "wins": "0",
                            "Driver": {
                                "driverId": "stroll",
                                "permanentNumber": "18",
                                "code": "STR",
                                "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                                "givenName": "Lance",
                                "familyName": "Stroll",
                                "dateOfBirth": "1998-10-29",
                                "nationality": "Canadian"
                            },
                            "Constructors": [
                                {
                                    "constructorId": "aston_martin",
                                    "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                    "name": "Aston Martin",
                                    "nationality": "British"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

## 11. constructorstanding
**Endpoint:** `https://api.jolpi.ca/ergast/f1/2026/constructorstandings`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/2026/constructorstandings/",
        "limit": "30",
        "offset": "0",
        "total": "11",
        "StandingsTable": {
            "season": "2026",
            "round": "2",
            "StandingsLists": [
                {
                    "season": "2026",
                    "round": "2",
                    "ConstructorStandings": [
                        {
                            "position": "1",
                            "positionText": "1",
                            "points": "98",
                            "wins": "2",
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            }
                        },
                        {
                            "position": "2",
                            "positionText": "2",
                            "points": "67",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "https://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            }
                        },
                        {
                            "position": "3",
                            "positionText": "3",
                            "points": "18",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "https://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            }
                        },
                        {
                            "position": "4",
                            "positionText": "4",
                            "points": "17",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "https://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            }
                        },
                        {
                            "position": "5",
                            "positionText": "5",
                            "points": "12",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "https://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            }
                        },
                        {
                            "position": "6",
                            "positionText": "6",
                            "points": "12",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "rb",
                                "url": "https://en.wikipedia.org/wiki/Racing_Bulls",
                                "name": "RB F1 Team",
                                "nationality": "Italian"
                            }
                        },
                        {
                            "position": "7",
                            "positionText": "7",
                            "points": "10",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "alpine",
                                "url": "https://en.wikipedia.org/wiki/Alpine_F1_Team",
                                "name": "Alpine F1 Team",
                                "nationality": "French"
                            }
                        },
                        {
                            "position": "8",
                            "positionText": "8",
                            "points": "2",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "audi",
                                "url": "https://en.wikipedia.org/wiki/Audi_in_Formula_One",
                                "name": "Audi",
                                "nationality": "German"
                            }
                        },
                        {
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "https://en.wikipedia.org/wiki/Williams_Racing",
                                "name": "Williams",
                                "nationality": "British"
                            }
                        },
                        {
                            "position": "10",
                            "positionText": "10",
                            "points": "0",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "cadillac",
                                "url": "https://en.wikipedia.org/wiki/Cadillac_in_Formula_One",
                                "name": "Cadillac F1 Team",
                                "nationality": "American"
                            }
                        },
                        {
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "wins": "0",
                            "Constructor": {
                                "constructorId": "aston_martin",
                                "url": "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
                                "name": "Aston Martin",
                                "nationality": "British"
                            }
                        }
                    ]
                }
            ]
        }
    }
}

## 11. status
**Endpoint:** `https://api.jolpi.ca/ergast/f1/status`

**Response Structure:**
{
    "MRData": {
        "xmlns": "",
        "series": "f1",
        "url": "https://api.jolpi.ca/ergast/f1/status/",
        "limit": "30",
        "offset": "0",
        "total": "136",
        "StatusTable": {
            "Status": [
                {
                    "statusId": "1",
                    "count": "8018",
                    "status": "Finished"
                },
                {
                    "statusId": "11",
                    "count": "3850",
                    "status": "+1 Lap"
                },
                {
                    "statusId": "5",
                    "count": "2011",
                    "status": "Engine"
                },
                {
                    "statusId": "12",
                    "count": "1593",
                    "status": "+2 Laps"
                },
                {
                    "statusId": "3",
                    "count": "1047",
                    "status": "Accident"
                },
                {
                    "statusId": "4",
                    "count": "833",
                    "status": "Collision"
                },
                {
                    "statusId": "6",
                    "count": "805",
                    "status": "Gearbox"
                },
                {
                    "statusId": "20",
                    "count": "792",
                    "status": "Spun off"
                },
                {
                    "statusId": "13",
                    "count": "731",
                    "status": "+3 Laps"
                },
                {
                    "statusId": "22",
                    "count": "431",
                    "status": "Suspension"
                },
                {
                    "statusId": "14",
                    "count": "405",
                    "status": "+4 Laps"
                },
                {
                    "statusId": "7",
                    "count": "321",
                    "status": "Transmission"
                },
                {
                    "statusId": "10",
                    "count": "315",
                    "status": "Electrical"
                },
                {
                    "statusId": "143",
                    "count": "315",
                    "status": "Lapped"
                },
                {
                    "statusId": "31",
                    "count": "254",
                    "status": "Retired"
                },
                {
                    "statusId": "23",
                    "count": "250",
                    "status": "Brakes"
                },
                {
                    "statusId": "54",
                    "count": "246",
                    "status": "Withdrew"
                },
                {
                    "statusId": "15",
                    "count": "221",
                    "status": "+5 Laps"
                },
                {
                    "statusId": "8",
                    "count": "214",
                    "status": "Clutch"
                },
                {
                    "statusId": "62",
                    "count": "172",
                    "status": "Not classified"
                },
                {
                    "statusId": "69",
                    "count": "155",
                    "status": "Fuel system"
                },
                {
                    "statusId": "16",
                    "count": "153",
                    "status": "+6 Laps"
                },
                {
                    "statusId": "2",
                    "count": "153",
                    "status": "Disqualified"
                },
                {
                    "statusId": "101",
                    "count": "146",
                    "status": "Turbo"
                },
                {
                    "statusId": "9",
                    "count": "138",
                    "status": "Hydraulics"
                },
                {
                    "statusId": "25",
                    "count": "130",
                    "status": "Overheating"
                },
                {
                    "statusId": "80",
                    "count": "128",
                    "status": "Ignition"
                },
                {
                    "statusId": "44",
                    "count": "123",
                    "status": "Oil leak"
                },
                {
                    "statusId": "37",
                    "count": "111",
                    "status": "Throttle"
                },
                {
                    "statusId": "60",
                    "count": "100",
                    "status": "Out of fuel"
                }
            ]
        }
    }
}