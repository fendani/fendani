

const prefixes = 

[
    {
        prefixe: "Antonio Solario",
        traduction: "1465-1530",
        signification: "Peintre italien."
    },
    {
        prefixe: "María de Cabrera",
        traduction: "1467-1527",
        signification: "Cavalière et danseuse espagnole."
    },
    {
        prefixe: "Don Martin de Mendoza",
        traduction: "1489-1555",
        signification: "Archidiacre et abbé espagnol."
    },
    {
        prefixe: "Jerónimo da Costa",
        traduction: "XVIIe siècle",
        signification: "Soldat portugais."
    },
    {
        prefixe: "Rosa Cortés",
        traduction: "1726-1753?",
        signification: "Personnage historique espagnol."
    },
    {
        prefixe: "Luis Montoya Garcés",
        traduction: "1750-1830",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "El Planeta",
        traduction: "1789-1856",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Jan Nepomuk Kubicek",
        traduction: "1801-1880",
        signification: "Grand-père du Juscelino, brésilien."
    },
    {
        prefixe: "Antonio Ortega Heredia",
        traduction: "1806-1854",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Maria Severa Onofriana",
        traduction: "1820-1846",
        signification: "Chanteuse mezzo-so. de fado, portugaise."
    },
    {
        prefixe: "Pepita de Oliva",
        traduction: "1830-1872",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Julián Arcas",
        traduction: "1832-1882",
        signification: "Compositeur espagnol."
    },
    {
        prefixe: "Adolfo Bezerra de Menezes Cavalcanti",
        traduction: "1831-1900",
        signification: "Médecin, écrivain et activiste brésilien."
    },
    {
        prefixe: "T. F. Lázaro de la Santa Trinidad Ortega López (El Nitri)",
        traduction: "1838-1877",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Antônio Frederico de Castro Alves",
        traduction: "1847-1871",
photo: "castroalves.png",
        signification: "Poète brésilien."
    },
    {
        prefixe: "Ana Amaya Molina",
        traduction: "1855-1933",
        signification: "Chanteuse et guitariste espagnole."
    },
    {
        prefixe: "Rosario Monge Monge",
        traduction: "1858-1920",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Ceferino Giménez Malla",
        traduction: "1861-1936",
        signification: "Martyr espagnol."
    },
    {
        prefixe: "Antonio Casino",
        traduction: "1865-1954",
        signification: "Danseur espagnol."
    },
    {
        prefixe: "Gabriela Ortega Feria",
        traduction: "1862-1919",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Rafael Flores Nieto",
        traduction: "1864-1940",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Paca Aguilera",
        traduction: "1867-1913",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Fabian de Castro",
        traduction: "1868-1948",
        signification: "Peintre espagnol."
    },
    {
        prefixe: "Washington Luís Pereira de Sousa",
        traduction: "1869-1957",
        signification: "Président brésilien."
    },
    {
        prefixe: "Juana la Macarrona (Juana Vargas)",
        traduction: "1870-1947",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Sampion Bouglione",
        traduction: "1875-1941",
        signification: "Directeur de cirque français."
    },
    {
        prefixe: "Ramón Montoya",
        traduction: "1879-1949",
        signification: "Compositeur espagnol."
    },
    {
        prefixe: "Rafael Gómez Ortega",
        traduction: "1882-1960",
        signification: "Toréro espagnol."
    },
    {
        prefixe: "Consuelo Giménez Escuder",
        traduction: "1888-1905",
        signification: "Modèle artistique espagnole."
    },
    {
        prefixe: "Maria Gracia Lucas Lorente",
        traduction: "1890-1983",
        signification: "Joueuse de pelote espagnole."
    },
    {
        prefixe: "Pastora María Pavón Cruz",
        traduction: "1890-1969",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Pastora Rojas Monge",
        traduction: "1885/1892-1979",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Francisco Tomás Pavón Cruz",
        traduction: "1893-1952",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "José Gómez Ortega",
        traduction: "1895-1920",
        signification: "Toréro espagnol."
    },
    {
        prefixe: "Elisa Cansino",
        traduction: "1896-1990",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Agustina García y Escudero",
        traduction: "XIXe siècle",
        signification: "Modèle, danseuse espagnole."
    },
    {
        prefixe: "Juan Vargas Cortés",
        traduction: "1900-1980",
        signification: "Sculpteur espagnol."
    },
    {
        prefixe: "Cecília Benevides de Carvalho Meireles",
        traduction: "1901-1964",
        signification: "Poétesse brésilienne."
    },
    {
        prefixe: "Maria Dalbaicin",
        traduction: "1902-1931",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Juscelino Kubicek",
        traduction: "1902-1976",
photo: "kubit.jpg",
        signification: "Président du Brésil, brésilienne."
    },
    {
        prefixe: "Francisco Vega de los Reyes",
        traduction: "1904-1931",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Joaquín Rodríguez Ortega",
        traduction: "1903-1984",
        signification: "Toréro espagnol."
    },
    {
        prefixe: "Carlos García Montoya",
        traduction: "1903-1993",
        signification: "Guitariste espagnol."
    },
    {
        prefixe: "Joseph Bouglione",
        traduction: "1904-1987",
        signification: "Directeur de cirque, française."
    },
    {
        prefixe: "Helios Gómez",
        traduction: "1905-1956",
        signification: "Peintre, activiste, poète, espagnole."
    },
    {
        prefixe: "Diego Amaya Flores",
        traduction: "1908-1973",
        signification: "Guitariste espagnol."
    },
    {
        prefixe: "María Lozano Hernández",
        traduction: "1909-1940",
        signification: "Militante espagnole."
    },
    {
        prefixe: "Mariano Rodríguez Vázquez",
        traduction: "1909-1937",
        signification: "Activiste espagnol."
    },
    {
        prefixe: "Manolo Caracol",
        traduction: "1909-1973",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Antonio Cruz García",
        traduction: "1909-1983",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Rosa Bouglione",
        traduction: "1910-2018",
        signification: "Directrice de cirque, française."
    },
    {
        prefixe: "Carmen Amaya",
        traduction: "1913-1963",
        signification: "Danseuse, espagnole."
    },
    {
        prefixe: "Emilía Fernández Rodríguez de Cortés",
        traduction: "1914-1939",
        signification: "Martyr espagnole."
    },
    {
        prefixe: "Soledad Casilda Hernáez Vargas",
        traduction: "1914-1992",
        signification: "Militante espagnole."
    },
    {
        prefixe: "César Guerra-Peixe",
        traduction: "1914-1993",
        signification: "Compositeur brésilien."
    },
    {
        prefixe: "Gabriela Ortega Gómez",
        traduction: "1915-1995",
        signification: "Universitaire, artiste espagnole."
    },
    {
        prefixe: "José Fernández Granados",
        traduction: "1915-1992",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Rafael Albaicin",
        traduction: "1919-1981",
        signification: "Matador espagnol."
    },
    {
        prefixe: "Rafael Salazar Motos",
        traduction: "1919-1986",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Luis Heredia Amaya",
        traduction: "1920-1985",
        signification: "Sculpteur, espagnole."
    },
    {
        prefixe: "Osiride Pevarello",
        traduction: "1920-2016",
        signification: "Acteur italien."
    },
    {
        prefixe: "María Fernández Granados",
        traduction: "1922-2005",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Rafael Antonio Salazar Motos",
        traduction: "1923-1995",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "José Salazar Molina",
        traduction: "1924-1977",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Luis Miguel González Lucas",
        traduction: "1926-1996",
        signification: "Torero espagnol."
    },
    {
        prefixe: "Antonio González Batista",
        traduction: "1925-1999",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Amilcare Debar",
        traduction: "1927-2010",
        signification: "Résistant italien."
    },
    {
        prefixe: "Ático Vilas-Boas da Mota",
        traduction: "1928-2016",
        signification: "Écrivain brésilien."
    },
    {
        prefixe: "Enrique Castellón Vargas",
        traduction: "1928-2020",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Yana Rondolotto",
        traduction: "1928",
        signification: "Peintre, comédien, française."
    },
    {
        prefixe: "Manuel Morao",
        traduction: "1929-",
        signification: "Guitariste, espagnole."
    },
    {
        prefixe: "Arturo Pavón Sánchez",
        traduction: "1930-2005",
        signification: "Pianiste et compositeur espagnol."
    },
    {
        prefixe: "Antonio Núñez \"Chocolate\"",
        traduction: "1930-2005",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Gaspar Viana Blanco",
        traduction: "1930?",
        signification: "Résistant espagnol."
    },
    {
        prefixe: "Salvador Távora",
        traduction: "1930-2019",
        signification: "Metteur en scène espagnol."
    },
    {
        prefixe: "Miranda Orfei",
        traduction: "1931-2015",
        signification: "Actrice italienne."
    },
    {
        prefixe: "Carmen Salazar Vargas",
        traduction: "1931-2021",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Floriano Debar",
        traduction: "1933",
        signification: "Poète italien."
    },
    {
        prefixe: "Manuel de los Santos Pastor",
        traduction: "1933-2015",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Nando Orfei",
        traduction: "1934-2014",
        signification: "Acteur italien."
    },
    {
        prefixe: "Terremoto de Jerez",
        traduction: "1934-1981",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Farruco",
        traduction: "1935-1997",
        signification: "Danseur, espagnole."
    },
    {
        prefixe: "Pedro Pubill Calaf \"Peret\"",
        traduction: "1935-2014",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Dolores Vargas",
        traduction: "1936-2016",
        signification: "Chanteuse et actrice, espagnole."
    },
    {
        prefixe: "Luisa Ortega Gómez",
        traduction: "1936-2024",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Manfried Sant'Anna (Dede Santana)",
        traduction: "1936",
        signification: "Humoriste brésilien."
    },
    {
        prefixe: "Argentina Giménez García",
        traduction: "1936-2023",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Kóstas Chatzis",
        traduction: "1936",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Manuela Vargas",
        traduction: "1937-2007",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Gino D'Auri",
        traduction: "1937-2007",
        signification: "Guitariste italien."
    },
    {
        prefixe: "Mario Maya Fajardo",
        traduction: "1937-2018",
        signification: "Chorégraphe espagnol."
    },
    {
        prefixe: "Liana Orfei",
        traduction: "1937",
        signification: "Actrice italienne."
    },
    {
        prefixe: "Micaela Flores Amaya",
        traduction: "1938-",
        signification: "Peintre, espagnole."
    },
    {
        prefixe: "Sandra Jayat",
        traduction: "1939-",
        signification: "Peintre, poétesse, française."
    },
    {
        prefixe: "Manolis Angelopoulos",
        traduction: "1939-1989",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Rafael de Paula",
        traduction: "1940-",
        signification: "Torero espagnol."
    },
    {
        prefixe: "Gnugo De Bar",
        traduction: "1940-2005",
        signification: "Écrivain italien."
    },
    {
        prefixe: "Moncho",
        traduction: "1940-2018",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Benito de Paula",
        traduction: "1941-",
        signification: "Chanteur brésilien."
    },
    {
        prefixe: "Mio Vacite",
        traduction: "1941-2029",
        signification: "Musicien brésilien."
    },
    {
        prefixe: "Juan de Dios Ramirez Heredia",
        traduction: "1942-",
        signification: "Membre du Parlement Européen, espagnole."
    },
    {
        prefixe: "Olimpio Cari",
        traduction: "1942-2020",
        signification: "Artiste, italienne."
    },
    {
        prefixe: "María Garrido Fernández",
        traduction: "1942-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Soledad Miranda",
        traduction: "1943-1970",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Márcia Yáskara Guelpa",
        traduction: "1943-",
        signification: "Journaliste brésilienne."
    },
    {
        prefixe: "Márcia Kubitschek",
        traduction: "1943-2000",
        signification: "Journaliste et politique, brésilienne."
    },
    {
        prefixe: "Sandro de América",
        traduction: "1945-2010",
        signification: "Chanteur, argentine."
    },
    {
        prefixe: "María Adelina Jiménez Jiménez",
        traduction: "1945-",
        signification: "1re enseignante gitane en Espagne."
    },
    {
        prefixe: "Bartolomé Jiménez",
        traduction: "1945-",
        signification: "Activiste espagnol."
    },
    {
        prefixe: "José Cortés Jiménez (Pansequito)",
        traduction: "1945-2023",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Alonso Núñez Núñez",
        traduction: "1945-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Wagner Tiso",
        traduction: "1945-",
        signification: "Compositeur brésilien."
    },
    {
        prefixe: "Antonia Santiago Amador",
        traduction: "1946-",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Pilar Clavería Mendoza",
        traduction: "1946-2023",
        signification: "Activiste espagnole."
    },
    {
        prefixe: "Makis Christodoulopoulos",
        traduction: "1948-",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Luis Fernández Soto",
        traduction: "1949-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Ricardo Arroyo",
        traduction: "1950-",
        signification: "Acteur, espagnole."
    },
    {
        prefixe: "Vassilis Paiteris",
        traduction: "1950-",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Olga Mariano",
        traduction: "1950-",
        signification: "Médiatrice socio-culturelle portugaise."
    },
    {
        prefixe: "Camarón de la Isla",
        traduction: "1950-1992",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Pedro Bacán Peña",
        traduction: "1951-1997",
        signification: "Guitariste et compositeur espagnol."
    },
    {
        prefixe: "Juan Rosa Mateo",
        traduction: "1951-2002",
        signification: "Humoriste et acteur espagnol."
    },
    {
        prefixe: "Cancanilla de Marbella",
        traduction: "1951-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Carmen Linares",
        traduction: "1951-",
        signification: "Chanteuse, Grammy espagnole."
    },
    {
        prefixe: "Sebastián Cortés Amado",
        traduction: "1951-",
        signification: "Torero espagnol."
    },
    {
        prefixe: "Alexandre Romanès",
        traduction: "1951-",
        signification: "Poète, artiste circassien, française."
    },
    {
        prefixe: "Josefina Silva Jiménez",
        traduction: "1953-",
        signification: "Cuisinière, espagnole."
    },
    {
        prefixe: "Rogelio Duran",
        traduction: "1953-2006",
        signification: "Acteur espagnol."
    },
    {
        prefixe: "Paco Suarez",
        traduction: "1953-",
        signification: "Chef d'orchestre espagnol."
    },
    {
        prefixe: "Paola Schöpf",
        traduction: "1953-",
        signification: "Poétesse italienne."
    },
    {
        prefixe: "Manuela Carrasco Salazar",
        traduction: "1954-",
        signification: "Danseuse espagnole."
    },
    {
        prefixe: "Vicente Soto Sordera",
        traduction: "1954-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Diego Carrasco",
        traduction: "1954-",
        signification: "Guitariste espagnol."
    },
    {
        prefixe: "Manuel Miguel Bustamante Bautista",
        traduction: "1954-",
        signification: "Politique espagnol."
    },
    {
        prefixe: "Eleni Vitali",
        traduction: "1954-",
        signification: "Chanteuse grecque."
    },
    {
        prefixe: "José Mercé",
        traduction: "1955-",
        signification: "Chanteur, espagnole."
    },
    {
        prefixe: "Encarnación Amador Santiago",
        traduction: "1955-2020",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Miguel Bosé",
        traduction: "1956-",
        signification: "Chanteur italo-espagnol."
    },
    {
        prefixe: "José Manuel Ortega Heredia (Mansanita)",
        traduction: "1956-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Moraíto Chico",
        traduction: "1956-",
        signification: "Guitariste espagnol."
    },
    {
        prefixe: "Carlos Miguel",
        traduction: "1957-",
        signification: "Avocat et secrétaire d'Etat portugais."
    },
    {
        prefixe: "Rafael Soto Andrade",
        traduction: "1957-",
        signification: "Cavalier médaillé olympique espagnol."
    },
    {
        prefixe: "Bruno Morelli",
        traduction: "1957-",
        signification: "Critique d'art italien."
    },
    {
        prefixe: "Lolita Flores",
        traduction: "1958-",
        signification: "Chanteuse et actrice, espagnole."
    },
    {
        prefixe: "José Fernández Torres (El Tomatito)",
        traduction: "1958-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Manuel Valencia Lazo",
        traduction: "1958-",
        signification: "Cuisinier, espagnole."
    },
    {
        prefixe: "Vassilis Saleas",
        traduction: "1958-",
        signification: "Clarinettiste grec."
    },
    {
        prefixe: "Jorge Emilio Nedich",
        traduction: "1959-",
        signification: "Écrivain argentin."
    },
    {
        prefixe: "Pilar Tavora",
        traduction: "1959-",
        signification: "Réalisatrice espagnole."
    },
    {
        prefixe: "María del Carmen Carrillo Losada",
        traduction: "1959-",
        signification: "Conseillère à la mairie de Jaén (Espagne)."
    },
    {
        prefixe: "Miryam Amaya",
        traduction: "1959-",
        signification: "Performer et activiste espagnole."
    },
    {
        prefixe: "Raimundo Amador",
        traduction: "1959-",
        signification: "Guitariste flamenco et rock espagnol."
    },
    {
        prefixe: "Sandrine Bouglione",
        traduction: "1959-",
        signification: "Directrice de cirque française."
    },
    {
        prefixe: "Paola Dominguin",
        traduction: "1960-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Dolores de los Santos Bermúdez",
        traduction: "1960-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Pastora Vega Aparicio",
        traduction: "1960-",
        signification: "Présentatrice télé espagnole."
    },
    {
        prefixe: "Rafael Amador Fernández",
        traduction: "1960-",
        signification: "Membre du groupe << Pata negra >> (espagnol)."
    },
    {
        prefixe: "Carlos Muñoz Cobo",
        traduction: "1961-",
        signification: "Footballeur, espagnole."
    },
    {
        prefixe: "Alfonso Mejía-Arias",
        traduction: "1961-",
        signification: "Musicien, écrivain et politique, mexicaine."
    },
    {
        prefixe: "Lita Cabellut",
        traduction: "1961-",
        signification: "Plasticienne espagnole."
    },
    {
        prefixe: "Diego Fernández Jiménez",
        traduction: "1961-",
        signification: "Docteur en droit espagnol."
    },
    {
        prefixe: "Antonio Flores",
        traduction: "1961-1995",
        signification: "Chanteur pop/rock espagnol."
    },
    {
        prefixe: "Antonio Canales",
        traduction: "1961-",
        signification: "Chorégraphe espagnol."
    },
    {
        prefixe: "Lorenzo Armendáriz",
        traduction: "1961-",
        signification: "Photographe, mexicaine."
    },
    {
        prefixe: "Ana Giménez Adelantado",
        traduction: "1962-",
        signification: "Enseignante/Chercheuse et anthropologue espagnole."
    },
    {
        prefixe: "Paca Torres",
        traduction: "1962-",
        signification: "Poétesse espagnole."
    },
    {
        prefixe: "Toñi Salazar",
        traduction: "1963-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Remedios Cervantes",
        traduction: "1964-",
        signification: "Animatrice espagnole et Miss Espagne 1986."
    },
    {
        prefixe: "Santino Spinelli",
        traduction: "1964-",
        signification: "Musicien et enseignant italien."
    },
    {
        prefixe: "Ramon Barrull",
        traduction: "1964-2003",
        signification: "Danseur espagnol."
    },
    {
        prefixe: "Idália Serrão",
        traduction: "1964-",
        signification: "Ancienne députée, portugaise."
    },
    {
        prefixe: "Pilar Heredia Iglesias",
        traduction: "1964-",
        signification: "Politique espagnole."
    },
    {
        prefixe: "Kostas Pavlidis",
        traduction: "1964-",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Agostino Cardamone",
        traduction: "1965-",
        signification: "Boxeur champion du monde, italienne."
    },
    {
        prefixe: "Stathis Angelopoulos",
        traduction: "1965-",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Juan Rafael Cortés Santiago",
        traduction: "1965-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Joaquin Albaicin",
        traduction: "1965-",
        signification: "Écrivain, espagnole."
    },
    {
        prefixe: "Enrique \"Quique\" Sánchez Flores",
        traduction: "1965-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Belén Maya García",
        traduction: "1966-",
        signification: "Chorégraphe espagnole et américaine."
    },
    {
        prefixe: "Esperanza Fernández Vargas",
        traduction: "1966-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Manolo Gomez Romero",
        traduction: "1967-",
        signification: "Peintre, espagnole."
    },
    {
        prefixe: "Ginesa Ortega Cortés",
        traduction: "1967-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Joan Manuel Oleaque Moreno",
        traduction: "1968-",
        signification: "Journaliste espagnol."
    },
    {
        prefixe: "Jorge Bernal",
        traduction: "1968-",
        signification: "Politique et activiste, argentine."
    },
    {
        prefixe: "Diego El Cigala",
        traduction: "1968-",
        signification: "Chanteur, espagnole, dom."
    },
    {
        prefixe: "Celia Montoya Montoya",
        traduction: "1969-",
        signification: "Actrice et militante espagnole."
    },
    {
        prefixe: "Ildefonso de los Reyes",
        traduction: "1969-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Antonio Carbonell Muñoz",
        traduction: "1969-",
photo: "antoniocarbonell.jpg",
source: "Source : Diario de Madrid / Wikipedia / Tous droits réservés. ",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Araceli Cañadas Ortega",
        traduction: "1969-",
        signification: "Enseignante/chercheuse en philologie (espagnole)."
    },
    {
        prefixe: "Juan José Cortés Fernández",
        traduction: "1969-",
        signification: "Pasteur, activiste espagnol."
    },
    {
        prefixe: "David Peña Dorantes",
        traduction: "1969-",
        signification: "Pianiste, Compositeur classique, espagnole."
    },
    {
        prefixe: "Joaquin Cortes",
        traduction: "1969-",
        signification: "Danseur, espagnole."
    },
    {
        prefixe: "Demetrio << Deme » Gómez",
        traduction: "1970-",
        signification: "Militant mexicano-espagnol."
    },
    {
        prefixe: "Sótis Volánis",
        traduction: "1971-",
        signification: "Chanteur grec."
    },
    {
        prefixe: "Lila Zellet Elias",
        traduction: "1971-",
        signification: "Danseuse mexicaine."
    },
    {
        prefixe: "Raquel Bollo",
        traduction: "1972-",
        signification: "Animatrice espagnole."
    },
    {
        prefixe: "Montse Cortés",
        traduction: "1972-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Ricardo Vacite",
        traduction: "1972-",
        signification: "Violoniste brésilien."
    },
    {
        prefixe: "Maria Gil",
        traduction: "1972-",
        signification: "Actrice et activiste portugaise."
    },
    {
        prefixe: "José Luis Mesas",
        traduction: "1973-",
        signification: "Artiste espagnol."
    },
    {
        prefixe: "Los Chunguitos",
        traduction: "1973-",
        signification: "Groupe de musique rumba espagnol."
    },
    {
        prefixe: "Sebastián Fernández Reyes",
        traduction: "1974-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Niño Josele",
        traduction: "1974-",
        signification: "Guitariste, espagnole."
    },
    {
        prefixe: "Jesús Seba",
        traduction: "1974-",
        signification: "Footballeur, espagnole."
    },
    {
        prefixe: "Juana Martín",
        traduction: "1974-",
        signification: "Créatrice de mode, espagnole."
    },
    {
        prefixe: "Shane Chaplin Saura",
        traduction: "1974-",
        signification: "Psychologue, espagnole."
    },
    {
        prefixe: "Sarah Carmona",
        traduction: "1974-",
        signification: "Chercheuse en histoire de l'art espagnole et française."
    },
    {
        prefixe: "Bimba Bosé",
        traduction: "1975-2017",
        signification: "Mannequin espagnole."
    },
    {
        prefixe: "Beatriz Micaela Carrillo de los Reyes",
        traduction: "1975-",
        signification: "Députée espagnole."
    },
    {
        prefixe: "Faustino Reyes López",
        traduction: "1975-",
        signification: "Boxeur, médaillé olympique espagnol."
    },
    {
        prefixe: "Raquel Bollo",
        traduction: "1975-",
        signification: "Présentatrice télé et femme d'affaire, espagnole."
    },
    {
        prefixe: "Julio Jiménez \"Chaboli\"",
        traduction: "1975-",
        signification: "Producteur de musique, guitariste, espagnole."
    },
    {
        prefixe: "Eustaquia Cortés",
        traduction: "1975-",
        signification: "Enologue, espagnole."
    },
    {
        prefixe: "Blanca Romero Ezama",
        traduction: "1976-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Antonio Vargas Cortés (El Potito)",
        traduction: "1976-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Moreno Borja",
        traduction: "1976-",
        signification: "Acteur espagnol."
    },
    {
        prefixe: "Victoria Santiago Borja",
        traduction: "1976-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Luis Rollán",
        traduction: "1976-",
        signification: "Animateur de télévision espagnol."
    },
    {
        prefixe: "Amara Carmona Camacho",
        traduction: "1977-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Iván Amaya",
        traduction: "1978-",
        signification: "Footballeur, médaillé olympique espagnol."
    },
    {
        prefixe: "André Ricardo Bankoff",
        traduction: "1978-",
        signification: "Acteur, mannequin brésilien."
    },
    {
        prefixe: "Diego El Morao",
        traduction: "1978-",
        signification: "Guitariste, espagnole."
    },
    {
        prefixe: "Rafael Ojeda Roja (Falete)",
        traduction: "1978-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Miguel Ángel Vargas",
        traduction: "1978-",
        signification: "Historien de l'art et directeur de théâtre, espagnole."
    },
    {
        prefixe: "Niña Pastori",
        traduction: "1978-",
        signification: "Chanteuse, espagnole."
    },
    {
        prefixe: "Denis Vega",
        traduction: "1978-",
        signification: "Acteur pour adultes espagnol."
    },
    {
        prefixe: "Estrella Morente",
        traduction: "1980-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Iván Periáñez Bolaño",
        traduction: "1980?-",
        signification: "Anthropologue espagnol."
    },
    {
        prefixe: "Rosario Montoya",
        traduction: "1979-",
        signification: "Pianiste, espagnole."
    },
    {
        prefixe: "Christos Patsatzoglou",
        traduction: "1979-",
        signification: "Footballeur, grecque."
    },
    {
        prefixe: "Silvia Heredia Martín",
        traduction: "1979-",
        signification: "Femme politique espagnole."
    },
    {
        prefixe: "Dani Güiza",
        traduction: "1980-",
        signification: "Footballeur, espagnole."
    },
    {
        prefixe: "Gonzalo Montaño Peña",
        traduction: "1980?-",
        signification: "Musicologue, espagnole."
    },
    {
        prefixe: "Marcos Santiago Cortés",
        traduction: "1980?-",
        signification: "Député et avocat au barreau de Cordoue."
    },
    {
        prefixe: "Cátia Montes",
        traduction: "1980?-",
        signification: "Politique portugaise."
    },
    {
        prefixe: "María Teresa Peña Fernández",
        traduction: "1980?-",
        signification: "Journaliste espagnole."
    },
    {
        prefixe: "Séfora Vargas",
        traduction: "1980-",
        signification: "Avocate espagnole."
    },
    {
        prefixe: "Domenico Spada",
        traduction: "1980-",
        signification: "Boxeur italien."
    },
    {
        prefixe: "Patxi Ruiz",
        traduction: "1980-",
        signification: "Champion de pelote basque."
    },
    {
        prefixe: "Antonio Manuel Álvarez Vélez (Pitingo)",
        traduction: "1980-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Virginia Raffaele",
        traduction: "1980-",
        signification: "Actrice, humoriste, italienne."
    },
    {
        prefixe: "Pastora Filigrana",
        traduction: "1981-",
        signification: "Avocate espagnole."
    },
    {
        prefixe: "Irini Merkouri",
        traduction: "1981-",
        signification: "Chanteuse grecque."
    },
    {
        prefixe: "Rosa María López Cortés",
        traduction: "1981-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Lagarder Danciu",
        traduction: "1981-",
        signification: "Activiste espagnol."
    },
    {
        prefixe: "Natalia Altea Jiménez Sarmento",
        traduction: "1981-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Marco Navas",
        traduction: "1982-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Patricia Caro Maya",
        traduction: "1982-",
        signification: "Députée européenne, espagnole."
    },
    {
        prefixe: "Michele di Rocco",
        traduction: "1982-",
        signification: "Boxeur, italienne."
    },
    {
        prefixe: "José Amador",
        traduction: "1983-",
        signification: "Basketteur espagnol."
    },
    {
        prefixe: "Ricardo Quaresma",
        traduction: "1983-",
        signification: "Footballeur portugais."
    },
    {
        prefixe: "José Antonio Reyes",
        traduction: "1983-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Antonio Amaya Carazo",
        traduction: "1983-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Jairo Barrull Fernández",
        traduction: "1983-",
        signification: "Danseur espagnol."
    },
    {
        prefixe: "Antonio Galdeano Benítez",
        traduction: "1984-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Tamara Clavería Jiménez",
        traduction: "1984-",
        signification: "Militante espagnole."
    },
    {
        prefixe: "Tamara Macarena Valcárcel Serrano",
        traduction: "1984-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Felisa Reyes Ortega",
        traduction: "1984-",
        signification: "Scientifique espagnole."
    },
    {
        prefixe: "Soleá Morente",
        traduction: "1984-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Ainhoa Carbonell Allué",
        traduction: "1984-",
photo: "ainhoa.jpg",
source: "Source : Ajuntament de Vallmoll / Tous droits réservés. ",
        signification: "Travailleuse sociale."
    },
    {
        prefixe: "Silvia Agüero Fernández",
        traduction: "1985-",
        signification: "Écrivaine espagnole."
    },
    {
        prefixe: "Javier Monsálvez Carazo",
        traduction: "1985-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "María Hernández Pérez",
        traduction: "1985-",
        signification: "Politique espagnole."
    },
    {
        prefixe: "Ismael Cortés Gómez",
        traduction: "1985-",
        signification: "Politique espagnol."
    },
    {
        prefixe: "Oona Chaplin",
        traduction: "1986-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Lazaros Christodoulopoulos",
        traduction: "1986-",
        signification: "Footballeur grec."
    },
    {
        prefixe: "Tommaso Vailatti",
        traduction: "1986-",
        signification: "Footballeur italien."
    },
    {
        prefixe: "Tayrone Cardoso Machado",
        traduction: "1986-",
        signification: "Chanteur brésilien."
    },
    {
        prefixe: "Toya Prudêncio",
        traduction: "1987-",
        signification: "Activiste portugaise."
    },
    {
        prefixe: "Rainer Cadete",
        traduction: "1987-",
        signification: "Acteur brésilien."
    },
    {
        prefixe: "Israel David Bascón Gigato",
        traduction: "1987-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Farru",
        traduction: "1988-",
        signification: "Danseur, espagnole."
    },
    {
        prefixe: "Vicente Rodriguez Fernandez",
        traduction: "1988-",
        signification: "Scénariste et expert en pop-culture espagnol."
    },
    {
        prefixe: "Avelino Vaz Maia",
        traduction: "1988-",
        signification: "Chanteur portugais."
    },
    {
        prefixe: "Elena Furiase",
        traduction: "1988-",
        signification: "Actrice, espagnole."
    },
    {
        prefixe: "Jorge González González",
        traduction: "1988-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Kiki Morente",
        traduction: "1989-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Ana Dalila Gómez Baos",
        traduction: "1989-",
        signification: "Activiste colombienne."
    },
    {
        prefixe: "Jonathan Vera Granja (Canelita)",
        traduction: "1989-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Israel Fernández",
        traduction: "1989-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Laura Halilovic",
        traduction: "1989-",
        signification: "Réalisatrice italienne."
    },
    {
        prefixe: "Brunn Morais",
        traduction: "1989-",
        signification: "Artiste brésilien."
    },
    {
        prefixe: "Luna de Rosa",
        traduction: "1991-",
        signification: "Artiste contemporaine, suisse italienne."
    },
    {
        prefixe: "Ana Segovia Montoya",
        traduction: "1991/1992?",
        signification: "Journaliste, espagnole."
    },
    {
        prefixe: "Leonor Teles",
        traduction: "1992-",
        signification: "Réalisatrice, portugaise."
    },
    {
        prefixe: "Gennaro Spinelli",
        traduction: "1992-",
        signification: "Violoniste et activiste italien."
    },
    {
        prefixe: "Nyno Vargas",
        traduction: "1992-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Jesús Castro",
        traduction: "1993-",
        signification: "Acteur, espagnole."
    },
    {
        prefixe: "Rafael Giménez Jarque",
        traduction: "1993-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Guillermo Furiase",
        traduction: "1993-",
        signification: "Acteur, espagnole."
    },
    {
        prefixe: "César Emilio Morales Flores",
        traduction: "1993-",
        signification: "Acteur chilien."
    },
    {
        prefixe: "Antón Cortés",
        traduction: "1994-",
        signification: "Chanteur pop espagnol."
    },
    {
        prefixe: "Giorgos Giakoumatis",
        traduction: "1994-",
        signification: "Footballeur grec."
    },
    {
        prefixe: "Enzo Romani",
        traduction: "1994-",
        signification: "Acteur et rappeur brésilien."
    },
    {
        prefixe: "Maria Jose Llergo",
        traduction: "1994-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "José Rodríguez Martínez",
        traduction: "1994-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Estefanía Ruiz Molina",
        traduction: "1995-",
        signification: "Designeuse et militante espagnole."
    },
    {
        prefixe: "Manuel Cortés Bollo",
        traduction: "1995-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Angelina << Maman >>",
        traduction: "1995?",
        signification: "Youtubeuse française."
    },
    {
        prefixe: "Noelia Cortés",
        traduction: "1996-",
        signification: "Écrivaine espagnole."
    },
    {
        prefixe: "Palito Dominguin",
        traduction: "1996-",
        signification: "Mannequin espagnole."
    },
    {
        prefixe: "Rafael Salvador \"Salvi\" Jiménez Mañueco",
        traduction: "1996-",
        signification: "Boxeur espagnol."
    },
    {
        prefixe: "Samuel Carmona Heredia",
        traduction: "1996-",
        signification: "Boxeur espagnol."
    },
    {
        prefixe: "Miguel Fernández Rivas",
        traduction: "1996-",
        signification: "Danseur espagnol."
    },
    {
        prefixe: "Marc Cortes",
        traduction: "1996-",
        signification: "Acteur français."
    },
    {
        prefixe: "Yasmim Bublitz Sant'Anna",
        traduction: "1996-",
        signification: "Actrice brésilienne."
    },
    {
        prefixe: "Tony Gabarry",
        traduction: "1998?",
        signification: "Danseur et acteur espagnol."
    },
    {
        prefixe: "Dimítris Limniós",
        traduction: "1998-",
        signification: "Footballeur grec."
    },
    {
        prefixe: "Giulia Miranda Monetta",
        traduction: "1998-",
        signification: "Actrice brésilienne."
    },
    {
        prefixe: "Albany",
        traduction: "1998-",
        signification: "Chanteuse espagnole."
    },
    {
        prefixe: "Rosy Rodríguez",
        traduction: "1999-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Lider J",
        traduction: "1999-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Daviles de Novelda",
        traduction: "1999-",
        signification: "Chanteur espagnol."
    },
    {
        prefixe: "Zaira Romero",
        traduction: "1999-",
        signification: "Actrice espagnole."
    },
    {
        prefixe: "Ricardo Fernández",
        traduction: "2000-",
        signification: "Danseur espagnol."
    },
    {
        prefixe: "Antonio Cortés Heredia",
        traduction: "2000-",
        signification: "Footballeur espagnol."
    },
    {
        prefixe: "Aaron Escudero",
        traduction: "2001-",
        signification: "Youtubeur espagnol."
    },
    {
        prefixe: "Alexander Gabrielsson Meijer",
        traduction: "1679-1761",
        signification: "Tireur d'élite suédois."
    },
    {
        prefixe: "Peter Detlofsson",
        traduction: "1738-1815",
        signification: "Geôlier norvégien et suédois."
    },
    {
        prefixe: "Karl Johansen Rosenberg",
        traduction: "1775-1855",
        signification: "Musicien norvégien."
    },
    {
        prefixe: "Karl Johan Algodt Fredriksen Löfgren",
        traduction: "1844-1946",
        signification: "Marchand norvégien."
    },
    {
        prefixe: "August Krogh",
        traduction: "1874-1949",
        signification: "Prix Nobel de Médecine danois."
    },
    {
        prefixe: "Johan Demitri Taikon",
        traduction: "1879-1950",
        signification: "Marchand suédois."
    },
    {
        prefixe: "Jenny Emilie Pettersen",
        traduction: "1886-1976",
        signification: "Femme de la communauté rom norvégienne."
    },
    {
        prefixe: "Anna Sofia Santamo",
        traduction: "1887-1932",
        signification: "Enseignante finlandaise."
    },
    {
        prefixe: "Nils Fredriksen Bakke",
        traduction: "1887-1969",
        signification: "Violoniste norvégien."
    },
    {
        prefixe: "Karl Oskar Jularbo",
        traduction: "1893-1966",
        signification: "Accordéoniste suédois."
    },
    {
        prefixe: "Ferdinand (Veerti) Nikkinen",
        traduction: "1894-1971",
        signification: "Politique finlandais."
    },
    {
        prefixe: "Hilmar Alexandersen",
        traduction: "1902-1993",
        signification: "Violoniste norvégien."
    },
    {
        prefixe: "Arvo Valte Palmroth",
        traduction: "1916-1997",
        signification: "Prédicateur laïc et chanteur finlandais."
    },
    {
        prefixe: "Bodil Schmidt-Nielsen",
        traduction: "1918-2015",
        signification: "Scientifique dano-américaine."
    },
    {
        prefixe: "Mirjam Aila Karimus",
        traduction: "1920-1995",
        signification: "Militante finlandaise."
    },
    {
        prefixe: "Frans Pertti Hörman",
        traduction: "1921-1941",
        signification: "Acteur et chanteur finlandais."
    },
    {
        prefixe: "Rosa Taikon",
        traduction: "1926-2017",
        signification: "Orfèvre et militante suédoise."
    },
    {
        prefixe: "Uno Birger Tord \"Målle\" Lindberg",
        traduction: "1929-",
        signification: "Prédicateur norvégien."
    },
    {
        prefixe: "Viljo Aleksanteri Koivisto",
        traduction: "1931-2020",
        signification: "Enseignant finlandais."
    },
    {
        prefixe: "Katarina Taikon",
        traduction: "1932-1995",
        signification: "Actrice et danseuse suédoise."
    },
    {
        prefixe: "Anneli Sauli",
        traduction: "1932-2022",
        signification: "Actrice finlandaise."
    },
    {
        prefixe: "Oskar Vilhelm Adel \"Willie\" Andréason",
        traduction: "1933-2019",
        signification: "Acteur suédois."
    },
    {
        prefixe: "Raya Bielenberg",
        traduction: "1935-",
        signification: "Danseuse norvégienne."
    },
    {
        prefixe: "Ludvig Karlsen",
        traduction: "1935-2004",
        signification: "Prédicateur norvégien."
    },
    {
        prefixe: "Allan Hagert",
        traduction: "1939-1999",
        signification: "Businessman finlandais."
    },
    {
        prefixe: "Monica Caldaras",
        traduction: "1943-",
        signification: "Enseignante suédoise."
    },
    {
        prefixe: "Reima Vesa Aleksanteri Nikkinen",
        traduction: "1944-2018",
        signification: "Danseuse finlandaise."
    },
    {
        prefixe: "Taisto Lundberg",
        traduction: "1945-1979",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Fred Taikon",
        traduction: "1945-",
        signification: "Auteur suédois."
    },
    {
        prefixe: "Aatos Emmanuel Bollström",
        traduction: "1946-1971",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Anneli Sari",
        traduction: "1947-",
        signification: "Chanteuse finlandaise."
    },
    {
        prefixe: "Elias Akselsen",
        traduction: "1947-",
        signification: "Chanteur norvégien."
    },
    {
        prefixe: "Hans Caldaras",
        traduction: "1948-",
        signification: "Chanteur suédois."
    },
    {
        prefixe: "Feija Åkerlund",
        traduction: "1948-",
        signification: "Chanteuse finlandaise."
    },
    {
        prefixe: "Taisto-Juhani Lundberg",
        traduction: "1949-",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Åge Aleksandersen",
        traduction: "1949-",
        signification: "Rockeur norvégien."
    },
    {
        prefixe: "Gabriel Werner Johansen",
        traduction: "1950-",
        signification: "Militant norvégien."
    },
    {
        prefixe: "Aale Asser Armas Lindgren",
        traduction: "1951-",
        signification: "Hauboïste/Musicien finlandais."
    },
    {
        prefixe: "Seppo Isberg",
        traduction: "1952-2018",
        signification: "Militant finlandais."
    },
    {
        prefixe: "Henry Matti Vihtori Hedman",
        traduction: "1952-",
        signification: "Enseignant finlandais."
    },
    {
        prefixe: "Hilja Orvokki Grönfors",
        traduction: "1952-",
        signification: "Enseignante et chanteuse finlandaise."
    },
    {
        prefixe: "Natacha Bielenberg",
        traduction: "1954-",
        signification: "Chorégraphe norvégienne."
    },
    {
        prefixe: "Valfrid Åkerlund",
        traduction: "1955-",
        signification: "Musicien finlandais."
    },
    {
        prefixe: "Kiba Lumberg",
        traduction: "1956-",
        signification: "Artiste finlandaise."
    },
    {
        prefixe: "Soraya Viola Heléna Post",
        traduction: "1956-",
        signification: "Ancienne députée européenne suédoise."
    },
    {
        prefixe: "Rainer Friman",
        traduction: "1978",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Miranda Vuolasranta",
        traduction: "1959-",
        signification: "Femme politique finlandaise."
    },
    {
        prefixe: "Heikki David Lampela",
        traduction: "1961-",
        signification: "Juge adjoint finlandais."
    },
    {
        prefixe: "Rainer Bollström",
        traduction: "1963-",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Katariina Lillqvist",
        traduction: "1963-",
        signification: "Réalisatrice finlandaise."
    },
    {
        prefixe: "Robert Rydberg",
        traduction: "1964-",
        signification: "Homme politique norvégien."
    },
    {
        prefixe: "Kai Tanner",
        traduction: "1969-",
        signification: "Metteur en scène finlandais."
    },
    {
        prefixe: "Bagir Kwiek",
        traduction: "1971-",
        signification: "Editeur suédois."
    },
    {
        prefixe: "Lindy Larsson Fross",
        traduction: "1974-",
        signification: "Acteur suédois."
    },
    {
        prefixe: "Sarita Friman",
        traduction: "1975-",
        signification: "Politologue finlandaise."
    },
    {
        prefixe: "Jasmine Tatjana Anette Valentin",
        traduction: "1976-",
        signification: "Chanteuse finlandaise."
    },
    {
        prefixe: "Rikhard \"Riku\" Lumberg",
        traduction: "1977-",
        signification: "Champion mondial de boxe (finlandais)."
    },
    {
        prefixe: "Noomi Rapace",
        traduction: "1979-",
        signification: "Productrice de cinéma finlandaise."
    },
    {
        prefixe: "Leif Lindeman",
        traduction: "1979-",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Katja Mäntyniemi",
        traduction: "1979-",
        signification: "Entrepreneuse de café finlandaise."
    },
    {
        prefixe: "Joni Bollström (Bulle)",
        traduction: "1980?-",
        signification: "Rappeur finlandais."
    },
    {
        prefixe: "Domino Kai",
        traduction: "1980?-",
        signification: "Activiste suédois."
    },
    {
        prefixe: "Saska Helmikallio",
        traduction: "1980-",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Dimitri Sjöberg",
        traduction: "1980-2017",
        signification: "Chanteur finlandais."
    },
    {
        prefixe: "Kasimir Baltzar",
        traduction: "1982-",
        signification: "Acteur finlandais."
    },
    {
        prefixe: "Henri Bollström",
        traduction: "1984-",
        signification: "Instructeur de trot finlandais."
    },
    {
        prefixe: "Markus Bollström",
        traduction: "1985-",
        signification: "Joueur d'unihockey finlandais."
    },
    {
        prefixe: "Veronica Akselsen",
        traduction: "1986-",
        signification: "Chanteuse norvégienne."
    },
    {
        prefixe: "Meeri Koutaniemi",
        traduction: "1987-",
        signification: "Photographe finlandaise."
    },
    {
        prefixe: "Juha Grigori Amadeus Lundberg",
        traduction: "1989-",
        signification: "Chanteur de tango finlandais."
    },
    {
        prefixe: "Fanni Noroila",
        traduction: "1992-",
        signification: "Chanteuse et actrice finlandaise."
    },
    {
        prefixe: "Mercedes Bentso",
        traduction: "1993-",
        signification: "Rappeuse finlandaise."
    },
    {
        prefixe: "Jami Faltin",
        traduction: "2000-",
        signification: "Rappeur finlandais."
    },
    {
        prefixe: "Mirella Roininen",
        traduction: "2005-",
        signification: "Chanteuse finlandaise."
    },
    {
        prefixe: "Stefan VIII",
        traduction: "1565-",
        signification: "Prince moldave."
    },
    {
        prefixe: "Panna Czinka",
        traduction: "1711-1772",
        signification: "Violoniste hongroise."
    },
    {
        prefixe: "Janoś Bihari",
        traduction: "1764-1827",
        signification: "Compositeur hongrois."
    },
    {
        prefixe: "Ilya Osipovitch Sokolov",
        traduction: "1777-1848",
        signification: "Compositeur russe."
    },
    {
        prefixe: "Stepanida Sidorovna Soldatova",
        traduction: "1784-1822",
        signification: "Chanteuse russe."
    },
    {
        prefixe: "Jozef Pita",
        traduction: "1800-1886",
        signification: "Violoniste slovaque."
    },
    {
        prefixe: "Vasily Vasilyevich Korvin-Krukovsky",
        traduction: "1803-1875",
        signification: "Général, Lieutenant, russe."
    },
    {
        prefixe: "Jansci Balogh Sági",
        traduction: "1803-1876",
        signification: "Violoniste, compositeur, hongroise."
    },
    {
        prefixe: "Károly Boka",
        traduction: "1808-1860",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "Sara Tolstoi",
        traduction: "1820-1838",
        signification: "Poétesse russe."
    },
    {
        prefixe: "Ferenc Sárközi",
        traduction: "1820-1897",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "József Boldizsár",
        traduction: "1823-1878",
        signification: "Musicien et écrivain hongrois."
    },
    {
        prefixe: "János Salamon",
        traduction: "1824-1899",
        signification: "Chef d'orchestre hongrois."
    },
    {
        prefixe: "Károly Fátyol",
        traduction: "1830-1888",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "Gina Ranjičić",
        traduction: "1830-1891",
        signification: "Poétesse serbe."
    },
    {
        prefixe: "Alexandra (Sacha) Osipovna Golitsyna",
        traduction: "1841-1913",
        signification: "Danseuse russe."
    },
    {
        prefixe: "Anna Jaclard",
        traduction: "1843-1887",
        signification: "Révolutionnaire, russe."
    },
    {
        prefixe: "Náci Erdélyi",
        traduction: "1845-1893",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "Nikolai Ivanovich Shishkin",
        traduction: "1845-1911",
        signification: "Compositeur russe."
    },
    {
        prefixe: "Sofia Kovalevskaїа",
        traduction: "1850-1891",
        signification: "Mathématicienne, russe."
    },
    {
        prefixe: "Aranka Hegyi",
        traduction: "1855-1906",
        signification: "Chanteuse et comédienne hongroise."
    },
    {
        prefixe: "František Horvath",
        traduction: "1855-1939",
        signification: "Violoniste slovaque."
    },
    {
        prefixe: "Pista Dankó",
        traduction: "1858-1903",
        signification: "Compositeur, hongroise."
    },
    {
        prefixe: "János Rigó",
        traduction: "1858-1927",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "Magyari Imre",
        traduction: "1864-1929",
        signification: "Compositeur hongrois."
    },
    {
        prefixe: "Sergei Alliluyev",
        traduction: "1866-1945",
        signification: "Révolutionnaire russe."
    },
    {
        prefixe: "József Babári",
        traduction: "1869-1933",
        signification: "Violoniste hongrois."
    },
    {
        prefixe: "Varvara Vasilievna Panina",
        traduction: "1872-1911",
        signification: "Chanteuse russe."
    },
    {
        prefixe: "Michał II Kwiek",
        traduction: "1878-1940?",
        signification: "Politique polonais."
    },
    {
        prefixe: "Mikhail Gavrilovitch Erdenko",
        traduction: "1885-1940",
        signification: "Compositeur russe."
    },
    {
        prefixe: "Eižens Finks",
        traduction: "1885-1958",
        signification: "Photographe; clairvoyant, lettone."
    },
    {
        prefixe: "Aladar Racz",
        traduction: "1886-1958",
        signification: "Cymbaliste, hongroise."
    },
    {
        prefixe: "Miko Veronika",
        traduction: "1887-1937",
        signification: "Chanteuse hongroise."
    },
    {
        prefixe: "Jozef Vašek",
        traduction: "1888-1957",
        signification: "Couturier slovaque."
    },
    {
        prefixe: "Grigoraş Dinicu",
        traduction: "1889-1949",
        signification: "Violoniste, compositeur, roumaine."
    },
    {
        prefixe: "Alexander Germano",
        traduction: "1893-1955",
        signification: "Écrivain russe."
    },
    {
        prefixe: "George Pantazi (George Boulanger)",
        traduction: "1893-1958",
        signification: "Compositeur roumain."
    },
    {
        prefixe: "Ştefan Luca Iordache (Fănică Luca)",
        traduction: "1894-1968",
        signification: "Musicien roumain."
    },
    {
        prefixe: "Imre Magyari",
        traduction: "1894-1940",
        signification: "Violiniste, hongroise."
    },
    {
        prefixe: "Nikolay Aleksandrovich Pankov",
        traduction: "1895-1959",
        signification: "Traducteur et écrivain russe."
    },
    {
        prefixe: "Fiodor Sergueïevitch Alliluyev",
        traduction: "1898-1955",
        signification: "Secrétaire de Staline."
    },
    {
        prefixe: "Šakir Mahmudov Pašov",
        traduction: "1898-1981",
        signification: "Journaliste bulgare."
    },
    {
        prefixe: "Ioana Rudăreasa",
        traduction: "XIXe siècle",
        signification: "Abolitionniste, roumaine."
    },
    {
        prefixe: "Constantin S. Nicolăescu-Plopșor",
        traduction: "1900-1968",
        signification: "Ethnographe, Antropologue, roumaine."
    },
    {
        prefixe: "Josef Serinek",
        traduction: "1900-1974",
        signification: "Soldat, victime 2GM, tchèque."
    },
    {
        prefixe: "Nadejda Sergueïevna Allilouïeva",
        traduction: "1901-1932",
        signification: "Femme de Staline."
    },
    {
        prefixe: "Ivan Rom Lebedev",
        traduction: "1903-1991",
photo: "ivanrom.jpg",
source: "Source : Wikipedia / Tous droits réservés. ",
        signification: "Dramaturge russe."
    },
    {
        prefixe: "Nina Dudarova",
        traduction: "1903-1992",
        signification: "Poétesse et enseignante, russe."
    },
    {
        prefixe: "Vadim Kozin",
        traduction: "1903-1994",
        signification: "Ténor, russe."
    },
    {
        prefixe: "János Balázs",
        traduction: "1905-1977",
        signification: "Peintre, poète, hongroise."
    },
    {
        prefixe: "Bronisława Wajs",
        traduction: "1908-1987",
        signification: "Poétesse, polonaise."
    },
    {
        prefixe: "Lialia Tchornaïa",
        traduction: "1909-1982",
        signification: "Danseuse russe."
    },
    {
        prefixe: "Gregor Serban",
        traduction: "1909-1997",
        signification: "Chanteur roumain."
    },
    {
        prefixe: "Piotr Stepanovich Demeter",
        traduction: "1910-1995",
        signification: "Compositeur russe."
    },
    {
        prefixe: "Tomáš Holomek",
        traduction: "1911-1988",
        signification: "Politique, membre du Parlement tchèque."
    },
    {
        prefixe: "Timofey Prokofiev",
        traduction: "1913-1944",
        signification: "Soldat, Héros de la Nation, russe."
    },
    {
        prefixe: "Alexey (Aliocha) Ivanovitch Dimitrievich",
        traduction: "1913-1986",
        signification: "Musicien russe."
    },
    {
        prefixe: "Alexeï Mikhaïlovitch Ilinski",
        traduction: "1918-2013",
        signification: "Lieutenant russe."
    },
    {
        prefixe: "Jenő Horváth",
        traduction: "1915-1973",
        signification: "Compositeur hongrois."
    },
    {
        prefixe: "Ljatif Sucuri",
        traduction: "1915-1945",
        signification: "Résistant yougoslave."
    },
    {
        prefixe: "Slobodan Berberski",
        traduction: "1919-1989",
        signification: "Militant et écrivain, serbe."
    },
    {
        prefixe: "Anton Facuna",
        traduction: "1920-1980",
        signification: "Soldat slovaque."
    },
    {
        prefixe: "Roman Stepanovich Demeter",
        traduction: "1920-1989",
        signification: "Poète russe."
    },
    {
        prefixe: "Olga Ivanovna Petrova",
        traduction: "1920-1999",
        signification: "Actrice russe."
    },
    {
        prefixe: "Jakab Orsos",
        traduction: "1920-2002",
        signification: "Artiste hongrois."
    },
    {
        prefixe: "Elena Lacková",
        traduction: "1921-2003",
        signification: "Dramaturge tchèque."
    },
    {
        prefixe: "Yoska Nemeth",
        traduction: "1921-1965",
        signification: "Violoniste hongrois."
    },
    {
        prefixe: "Ján Gašpar Hrisko",
        traduction: "1921-1980",
        signification: "Musicien slovaque."
    },
    {
        prefixe: "Olga Efimovna Yankovskaya",
        traduction: "1922-1986",
        signification: "Actrice russe."
    },
    {
        prefixe: "Postol Stoilkov Spasov",
        traduction: "1923-1944",
        signification: "Partisan macédonien."
    },
    {
        prefixe: "Ion Voicu",
        traduction: "1923-1997",
        signification: "Violiniste, et chef d'orchestre, roumaine."
    },
    {
        prefixe: "Ljubica Adžović",
        traduction: "1924-2006",
        signification: "Actrice yougoslave."
    },
    {
        prefixe: "Natalia Pankova",
        traduction: "1924-1991",
        signification: "Chimiste russe."
    },
    {
        prefixe: "Žarko Jovanović Jagdino",
        traduction: "1925-1985",
        signification: "Compositeur serbe."
    },
    {
        prefixe: "Lubov Pankova",
        traduction: "1925-1991",
        signification: "Biologiste russe."
    },
    {
        prefixe: "Lajos Boross",
        traduction: "1925-2014",
        signification: "Violoniste hongrois."
    },
    {
        prefixe: "Romica Puceanu",
        traduction: "1926-1996",
        signification: "Chanteuse roumaine."
    },
    {
        prefixe: "Memo Sulejmanov",
        traduction: "1926-1984",
        signification: "Athlète macédonien."
    },
    {
        prefixe: "Menyhért Lakatos",
        traduction: "1926-2007",
        signification: "Écrivain hongrois."
    },
    {
        prefixe: "Emil Rigo",
        traduction: "1926-2017",
        signification: "Politique slovaque."
    },
    {
        prefixe: "Alfreda Noncia Markowska",
        traduction: "1926-2021",
        signification: "Militante polonaise."
    },
    {
        prefixe: "József Fenyvesi",
        traduction: "1928-2005",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Margarete Kraus",
        traduction: "1928-2005",
        signification: "Survivante de l'Holocauste Rom, tchèque."
    },
    {
        prefixe: "Allilouev Sergueï Pavlovitch",
        traduction: "1928-2017",
        signification: "Physicien russe."
    },
    {
        prefixe: "Usan Kerim",
        traduction: "1929-1983",
        signification: "Poète bulgare."
    },
    {
        prefixe: "Toni Arpad",
        traduction: "1929-",
        signification: "Cymbaliste, hongroise."
    },
    {
        prefixe: "Tera Fabianova",
        traduction: "1930-2007",
        signification: "Écrivaine, hongroise."
    },
    {
        prefixe: "Ľudovít Didi",
        traduction: "1931-2013",
        signification: "Écrivain slovaque."
    },
    {
        prefixe: "Johnny Răducanu",
        traduction: "1931-2011",
        signification: "Pianiste et compositeur jazz, roumaine."
    },
    {
        prefixe: "Hasan Chinchiri",
        traduction: "1932-1994",
        signification: "Musicien, bulgare."
    },
    {
        prefixe: "Jan Cibula",
        traduction: "1932-2013",
        signification: "Médecin et candidat au Nobel de la Paix (slovaque)."
    },
    {
        prefixe: "Vladislav Petrovitch Demeter",
        traduction: "1932-2007",
        signification: "Musicien russe."
    },
    {
        prefixe: "Stefan Constantin Banica",
        traduction: "1933-1995",
        signification: "Acteur, roumaine."
    },
    {
        prefixe: "Šaip Yusuf",
        traduction: "1933-2010",
        signification: "Traducteur yougoslave."
    },
    {
        prefixe: "Valentin Grigorievich Baglaenko",
        traduction: "1934-1991",
        signification: "Chanteur classique russe."
    },
    {
        prefixe: "Oleg Yakovlevich Fandera",
        traduction: "1934-2002",
        signification: "Acteur russe."
    },
    {
        prefixe: "Nikolaï Slitchenko",
        traduction: "1934-2021",
        signification: "Acteur et metteur en scène, russe."
    },
    {
        prefixe: "Edward Dębicki",
        traduction: "1935-",
        signification: "Poète, polonaise."
    },
    {
        prefixe: "Saban Bajramovic",
        traduction: "1936-2008",
        signification: "Chanteur et compositeur, serbe."
    },
    {
        prefixe: "Mondine Garcia",
        traduction: "1936-2010",
        signification: "Guitariste français."
    },
    {
        prefixe: "Andrej Gina",
        traduction: "1936-2015",
        signification: "Écrivain tchèque."
    },
    {
        prefixe: "Lev Cherenkov",
        traduction: "1936-2016",
        signification: "Militant russe."
    },
    {
        prefixe: "Faik Abdiu",
        traduction: "1937-2016",
        signification: "Militant, député parlementaire, macédonienne."
    },
    {
        prefixe: "Dragoslav Šekularac",
        traduction: "1937-2019",
        signification: "Footballeur yougoslave."
    },
    {
        prefixe: "Karel Holomek",
        traduction: "1937-2023",
        signification: "Ingénieur civil, politique tchèque."
    },
    {
        prefixe: "Karol Gierliński",
        traduction: "1938-2015",
        signification: "Poète polonais."
    },
    {
        prefixe: "Leonid Cherepovskii",
        traduction: "1938-",
        signification: "Écrivain moldave."
    },
    {
        prefixe: "Valentin Baglaenko",
        traduction: "1938-1988",
        signification: "Chanteur, russe."
    },
    {
        prefixe: "Krystyna Gil",
        traduction: "1938-2021",
        signification: "Résistante polonaise."
    },
    {
        prefixe: "Irina Mikhailovna Nekrasova",
        traduction: "1938-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Irena Borisovna Morozova",
        traduction: "1938-",
        signification: "Comédienne russe."
    },
    {
        prefixe: "Titov Anatoly Grigorievich",
        traduction: "1938-2008",
        signification: "Acteur russe."
    },
    {
        prefixe: "Desider Banga",
        traduction: "1939-",
        signification: "Enseignant et écrivain slovaque."
    },
    {
        prefixe: "Ladislav Goral",
        traduction: "1939-",
        signification: "Acteur slovaque."
    },
    {
        prefixe: "Jan Berky-Mrenica",
        traduction: "1939-2008",
        signification: "Violiniste slovaque."
    },
    {
        prefixe: "Valentina Dmitrievna Ponomariova",
        traduction: "1939-",
        signification: "Chanteuse russe."
    },
    {
        prefixe: "Karlis Rudevičs",
        traduction: "1939-2002",
        signification: "Peintre, lettone."
    },
    {
        prefixe: "Pege Aladár",
        traduction: "1939-2006",
        signification: "Musicien hongrois."
    },
    {
        prefixe: "József Choli Daróczi",
        traduction: "1939-2018",
        signification: "Écrivain, poète et traducteur, hongroise."
    },
    {
        prefixe: "Arturs Kopiļenko",
        traduction: "1939-2018",
        signification: "Chanteur, lettone."
    },
    {
        prefixe: "Ля ля Анатольевна Боброва",
        traduction: "1940-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Valdemar Kalinin",
        traduction: "1941 ou 1946",
        signification: "Écrivain biélorusse."
    },
    {
        prefixe: "George Kantya",
        traduction: "1941-",
        signification: "Écrivain moldave."
    },
    {
        prefixe: "Raisa Ivanovna Dement",
        traduction: "1941-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Antonín Gondolán",
        traduction: "1942-",
        signification: "Chanteur slovaque."
    },
    {
        prefixe: "Toni Iordache",
        traduction: "1942-1987",
        signification: "Cymbaliste virtuose, roumaine."
    },
    {
        prefixe: "Janos Farkas",
        traduction: "1942-1989",
        signification: "Footballeur, médaillé or mondial, hongroise."
    },
    {
        prefixe: "Leksa Manus",
        traduction: "1942-1997",
        signification: "Linguiste, lettone."
    },
    {
        prefixe: "Yoshka Igraf Igorevich",
        traduction: "1942-2019",
        signification: "Compositeur russe."
    },
    {
        prefixe: "Raisa Nabaranchuk",
        traduction: "1943-",
        signification: "Poétesse ukrainienne."
    },
    {
        prefixe: "Esma Rejepova",
        traduction: "1943-2016",
        signification: "Musicienne macédonienne."
    },
    {
        prefixe: "Michaj Burano",
        traduction: "1944-",
        signification: "Chanteur polonais."
    },
    {
        prefixe: "Oláh Aranka",
        traduction: "1944-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Géza Csemer",
        traduction: "1944-2012",
        signification: "Écrivain hongrois."
    },
    {
        prefixe: "Ljiljana Butler, née Petrović",
        traduction: "1944-2010",
        signification: "Chanteuse, serbe."
    },
    {
        prefixe: "Nikolai Erdenko",
        traduction: "1945-",
        signification: "Musicien russe."
    },
    {
        prefixe: "Margita Reiznerová",
        traduction: "1945-2020",
        signification: "Écrivaine slovaque."
    },
    {
        prefixe: "Nikolaï Ivanovitch Erdenko",
        traduction: "1945-2006",
        signification: "Violoniste russe."
    },
    {
        prefixe: "Vincent Danihel",
        traduction: "1946-",
        signification: "Avocat et politique, slovaque."
    },
    {
        prefixe: "Youri Alekseïevitch Tsourilo",
        traduction: "1946-",
        signification: "Acteur et comédien russe."
    },
    {
        prefixe: "Sally Sellingová",
        traduction: "1946-1999",
        signification: "Chanteuse tchèque."
    },
    {
        prefixe: "Viktor Petrovich Svetlov",
        traduction: "1946-",
        signification: "Chanteur russe."
    },
    {
        prefixe: "Vincent Danihel",
        traduction: "1946-2011",
        signification: "Militant slovaque."
    },
    {
        prefixe: "Čeněk Růžička",
        traduction: "1946-2022",
        signification: "Militant tchèque."
    },
    {
        prefixe: "Tamas Peli",
        traduction: "1948-1994",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Béla Osztojkán",
        traduction: "1948-2008",
        signification: "Poète hongrois."
    },
    {
        prefixe: "Jeta Duka",
        traduction: "1948-",
        signification: "Militante, albanaise."
    },
    {
        prefixe: "Rahim Burhan",
        traduction: "1949-",
        signification: "Metteur en scène, macédonienne."
    },
    {
        prefixe: "Ladislav Body",
        traduction: "1949-2017",
        signification: "Ancien député et membre du conseil national tchèque."
    },
    {
        prefixe: "Nikolay Nikolaevich Sergienko",
        traduction: "1949-",
        signification: "Acteur russe."
    },
    {
        prefixe: "György Rostás-Farkas",
        traduction: "1949-",
        signification: "Écrivain et linguiste hongrois."
    },
    {
        prefixe: "Vassilievski Nikolaï Alexandrovitch",
        traduction: "1949-2018",
        signification: "Poète russe."
    },
    {
        prefixe: "Don Vasyl",
        traduction: "1950-",
        signification: "Musicien polonais."
    },
    {
        prefixe: "Ferus Mustafov",
        traduction: "1950-",
        signification: "Musicien macédonien."
    },
    {
        prefixe: "Šemso Avdić",
        traduction: "1950-",
        signification: "Poète yougoslave."
    },
    {
        prefixe: "Quick, Georgy Alekseevich",
        traduction: "1950-",
        signification: "Artiste russe-letton."
    },
    {
        prefixe: "Georgy Nikolaevich Tsvetkov",
        traduction: "1950-",
        signification: "Écrivain russe."
    },
    {
        prefixe: "Boris Petrovich Vasilevsky",
        traduction: "1950-",
        signification: "Acteur russe."
    },
    {
        prefixe: "Dzhura (Yuri) Alekseevich Makhotin",
        traduction: "1951-2004",
        signification: "Poète et artiste russe."
    },
    {
        prefixe: "József Holdosi",
        traduction: "1951-2005",
        signification: "Poète hongrois."
    },
    {
        prefixe: "Lajos Palotai",
        traduction: "1951-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Bada Márta",
        traduction: "1951-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Šaban Šaulić",
        traduction: "1951-2019",
        signification: "Chanteur serbe."
    },
    {
        prefixe: "Gustav Balazs",
        traduction: "1951-",
        signification: "Ethnographe, Peintre, hongrois."
    },
    {
        prefixe: "Gejza Adam",
        traduction: "1951-",
        signification: "Éducateur, militant et membre du Parlement slovaque, slovaque."
    },
    {
        prefixe: "Karoly Bari",
        traduction: "1952-",
        signification: "Poète, hongroise."
    },
    {
        prefixe: "Horváth M. Judit",
        traduction: "1952-",
        signification: "Photographe hongroise."
    },
    {
        prefixe: "Milan Horvát",
        traduction: "1953-",
        signification: "Politique tchèque."
    },
    {
        prefixe: "Irena Eliášová",
        traduction: "1953-",
        signification: "Écrivaine slovaque."
    },
    {
        prefixe: "Dezső Szegedi",
        traduction: "1953-",
        signification: "Acteur et réalisateur hongrois."
    },
    {
        prefixe: "Nadejda Georgievna Demeter",
        traduction: "1953-",
        signification: "Historienne russe."
    },
    {
        prefixe: "Lajos Feka",
        traduction: "1953-2011",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Rudko Kawczynski",
        traduction: "1954-",
        signification: "Homme politique polonais."
    },
    {
        prefixe: "Agnès Daroczi",
        traduction: "1954-",
        signification: "Responsable culturelle hongroise."
    },
    {
        prefixe: "Ladislav Fízik",
        traduction: "1954-2016",
        signification: "Politique, slovaque."
    },
    {
        prefixe: "Baja Saitović-Lukin",
        traduction: "1954-2017",
        signification: "Écrivain, serbe."
    },
    {
        prefixe: "Vera Bila",
        traduction: "1954-2019",
        signification: "Musicienne, tchèque."
    },
    {
        prefixe: "Věra Gondolánová",
        traduction: "1954-2021",
        signification: "Chanteuse slovaque."
    },
    {
        prefixe: "Sinan Sakić",
        traduction: "1956-2018",
        signification: "Chanteur serbe."
    },
    {
        prefixe: "Géza Lajhó",
        traduction: "1956-2020",
        signification: "Contrebassiste hongrois."
    },
    {
        prefixe: "Rozi Csampai",
        traduction: "1956-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Oto Pestner",
        traduction: "1956-",
        signification: "Musicien et politique slovène."
    },
    {
        prefixe: "Trifun Dimić",
        traduction: "1956-2001",
        signification: "Poète et romologue serbe."
    },
    {
        prefixe: "Klara Orgovánova",
        traduction: "1956-",
        signification: "Psychologue slovaque."
    },
    {
        prefixe: "Attila Balogh",
        traduction: "1956-",
        signification: "Écrivain, hongroise."
    },
    {
        prefixe: "Dervo Sejdic",
        traduction: "1956-",
        signification: "Policier et militant, bosnienne."
    },
    {
        prefixe: "Ilona Ferková",
        traduction: "1956-",
        signification: "Écrivaine tchèque."
    },
    {
        prefixe: "Terez Orsos",
        traduction: "1956-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Ferenc Snétberger",
        traduction: "1957-",
        signification: "Guitariste classique hongrois."
    },
    {
        prefixe: "Luminița Cioabă",
        traduction: "1957-",
        signification: "Poétesse, roumaine."
    },
    {
        prefixe: "Emil Ščuka",
        traduction: "1957-",
        signification: "Procureur, avocat et écrivain tchèque."
    },
    {
        prefixe: "Nikolay Grigorievich Lekarev",
        traduction: "1957-",
        signification: "Acteur russe."
    },
    {
        prefixe: "Ibolya Nagy",
        traduction: "1957-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Dmitry Mikhailovich Buzylev",
        traduction: "1957-2018",
        signification: "Acteur de théâtre russe."
    },
    {
        prefixe: "István Szentandrássy",
        traduction: "1957-2020",
        signification: "Artiste hongrois."
    },
    {
        prefixe: "Vojtěch Vágai starší",
        traduction: "1958-2011",
        signification: "Prêtre tchèque."
    },
    {
        prefixe: "Irén Nyári",
        traduction: "1958-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Nedzo Osman",
        traduction: "1958-",
        signification: "Acteur yougoslave et allemand."
    },
    {
        prefixe: "Magda Szécsi",
        traduction: "1958-",
        signification: "Écrivaine, artiste hongroise."
    },
    {
        prefixe: "Nikolaï Nikolaïevitch Vassiliev",
        traduction: "1958-",
        signification: "Chanteur russe."
    },
    {
        prefixe: "Iva Bittová",
        traduction: "1958-",
        signification: "Violoniste, compositrice, tchèque."
    },
    {
        prefixe: "Janos Bogdan",
        traduction: "1963-1999",
        signification: "Enseignant et militant, hongroise."
    },
    {
        prefixe: "Hedina Tahirović-Sijerčić",
        traduction: "1960-",
        signification: "Journaliste, bosnienne."
    },
    {
        prefixe: "Ivailo Marinov",
        traduction: "1960-",
        signification: "Boxeur, bulgare."
    },
    {
        prefixe: "Ljuan Koka",
        traduction: "1960-",
        signification: "Scénariste serbe."
    },
    {
        prefixe: "Karel Karika",
        traduction: "1960-",
        signification: "Politique tchèque."
    },
    {
        prefixe: "Liljana Kowacheva",
        traduction: "1960-",
        signification: "Enseignante, 1re docteure rom en Bulgarie."
    },
    {
        prefixe: "Ilona Varga",
        traduction: "1960-",
        signification: "Journaliste hongroise."
    },
    {
        prefixe: "Roman Andreevich Grokholsky",
        traduction: "1960-",
        signification: "Acteur et boxeur russe."
    },
    {
        prefixe: "Mustafa Asan",
        traduction: "1960-2022",
        signification: "Artiste macédonien."
    },
    {
        prefixe: "Katarzina Pollok",
        traduction: "1961-",
        signification: "Artiste ukrainienne."
    },
    {
        prefixe: "Eugen Raportoru",
        traduction: "1961-",
        signification: "Artiste roumain."
    },
    {
        prefixe: "Šaban Saliu",
        traduction: "1961-",
        signification: "Politique macédonien."
    },
    {
        prefixe: "Gjulistana Markovska",
        traduction: "1961-",
        signification: "Médecin et politique macédonienne."
    },
    {
        prefixe: "József Ferkovics",
        traduction: "1961-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Riccardo M Sahiti",
        traduction: "1961-",
        signification: "Chef d'orchestre yougoslave."
    },
    {
        prefixe: "Árpád Rostás",
        traduction: "1962-",
        signification: "Restaurateur d'art hongrois."
    },
    {
        prefixe: "Hristo (Slavov) Kyuchukov",
        traduction: "1962-",
        signification: "Linguiste bulgare."
    },
    {
        prefixe: "László Varga",
        traduction: "1963-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Džej Ramadanovski",
        traduction: "1964-2020",
        signification: "Chanteur yougoslave."
    },
    {
        prefixe: "Nicolae Păun",
        traduction: "1964-",
        signification: "Député roumain."
    },
    {
        prefixe: "Adam Cibuľa",
        traduction: "1964-",
        signification: "Athlète slovaque."
    },
    {
        prefixe: "Nihad Nino Pušija",
        traduction: "1965-",
        signification: "Photographe bosnien."
    },
    {
        prefixe: "Jarmila Vaňová",
        traduction: "1965-",
        signification: "Pédagogue slovaque."
    },
    {
        prefixe: "Dimov Zoran",
        traduction: "1965-",
        signification: "Producteur, macédonienne."
    },
    {
        prefixe: "Ráczné Kalányos Gyöngyi",
        traduction: "1965-",
        signification: "Peintre hongroise."
    },
    {
        prefixe: "Zoran Tairović",
        traduction: "1966-",
        signification: "Peintre, serbe."
    },
    {
        prefixe: "Bogdan Trojanek",
        traduction: "1966-",
        signification: "Musicien polonais."
    },
    {
        prefixe: "Jacek Milewski",
        traduction: "1966-",
        signification: "Écrivain polonais."
    },
    {
        prefixe: "József Füzesi",
        traduction: "1966-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Bajram Severjan",
        traduction: "1966-",
        signification: "Acteur macédonien."
    },
    {
        prefixe: "Dejan Savićević",
        traduction: "1966-",
        signification: "Entraîneur de football; footballeur, monténégrine."
    },
    {
        prefixe: "Hristo Stoichkov",
        traduction: "1966-",
        signification: "Footballeur bulgare, Ballon d'or 1994."
    },
    {
        prefixe: "Tomass Kleins",
        traduction: "1966-",
        signification: "Musicien letton."
    },
    {
        prefixe: "Jana Horvathova",
        traduction: "1967-",
        signification: "Historienne, tchèque."
    },
    {
        prefixe: "Alexander Nikolaevich Martsinkevich",
        traduction: "1967-",
        signification: "Chanteur russe."
    },
    {
        prefixe: "Ján Stojka",
        traduction: "1967-",
        signification: "Footballeur slovaque."
    },
    {
        prefixe: "Oksana Fandera",
        traduction: "1967-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Stefan Banica Jr.",
        traduction: "1967-",
        signification: "Acteur et chanteur, roumaine."
    },
    {
        prefixe: "Cyril Koky",
        traduction: "1968-",
        signification: "Politique tchèque."
    },
    {
        prefixe: "Oszkár Nyári",
        traduction: "1968-",
        signification: "Acteur hongrois."
    },
    {
        prefixe: "Zvonimir Boban",
        traduction: "1968-",
        signification: "Footballeur, médaillé or mondial, croate."
    },
    {
        prefixe: "Indira Bajramovic",
        traduction: "1968-",
        signification: "Économiste et militante, bosnienne."
    },
    {
        prefixe: "Elena Gorolova",
        traduction: "1969-",
        signification: "Militante, tchèque."
    },
    {
        prefixe: "Serafim Todorov",
        traduction: "1969-",
        signification: "Boxeur, bulgare."
    },
    {
        prefixe: "Lyalya (Olga) Georgievna Zhemchuzhnaya",
        traduction: "1969-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Zuzana Kumanova",
        traduction: "1970-",
        signification: "Secrétaire d'Etat au Ministère de la Culture, slovaquie."
    },
    {
        prefixe: "Erika Varga",
        traduction: "1970-",
        signification: "Créatrice de mode hongroise."
    },
    {
        prefixe: "Valery Novoselsky",
        traduction: "1970-2016",
        signification: "Activiste ukrainien."
    },
    {
        prefixe: "Damian Drăghici",
        traduction: "1970-",
        signification: "Musicien et politique polonais."
    },
    {
        prefixe: "Najo Adžović",
        traduction: "1971-",
        signification: "Écrivain monténégrin (italien)."
    },
    {
        prefixe: "SLAVIŠA MARKOVIĆ",
        traduction: "1971-",
        signification: "Acteur serbe."
    },
    {
        prefixe: "Ondrej Giňa",
        traduction: "1971-",
        signification: "Animateur télé tchèque."
    },
    {
        prefixe: "Václav Miko",
        traduction: "1971-",
        signification: "Écrivain et journaliste tchèque."
    },
    {
        prefixe: "Štefan Pongo",
        traduction: "1972-2022",
        signification: "Politique tchèque."
    },
    {
        prefixe: "David Daroczi",
        traduction: "1972-2010",
        signification: "Porte-parole du gouvernement, hongroise."
    },
    {
        prefixe: "Edyta Górniak",
        traduction: "1972-",
        signification: "Chanteuse, polonaise."
    },
    {
        prefixe: "Leonsia Erdenko",
        traduction: "1972-",
        signification: "Musicienne russe."
    },
    {
        prefixe: "Mónika Juhász Miczura",
        traduction: "1972-",
        signification: "Musicienne hongroise."
    },
    {
        prefixe: "Túró Zoltán",
        traduction: "1972-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Annamanna Orsós",
        traduction: "1972-",
        signification: "Écrivaine hongroise."
    },
    {
        prefixe: "Eugene Hütz",
        traduction: "1972-",
        signification: "Musicien russo-ukrainien."
    },
    {
        prefixe: "Maroš Bango",
        traduction: "1972-",
        signification: "Chanteur lyrique slovaque."
    },
    {
        prefixe: "Jarmila Balážová",
        traduction: "1972-",
        signification: "Journaliste tchèque."
    },
    {
        prefixe: "Delia Grigore",
        traduction: "1972-",
        signification: "Écrivaine, roumaine."
    },
    {
        prefixe: "Tamás Jónás",
        traduction: "1973-",
        signification: "Écrivain hongrois."
    },
    {
        prefixe: "Monika Mihaličková",
        traduction: "1973-",
        signification: "Députée tchèque."
    },
    {
        prefixe: "Janette Maziniová",
        traduction: "1973-",
        signification: "Autrice slovaque."
    },
    {
        prefixe: "Peter Pollak",
        traduction: "1973-",
        signification: "Membre du Conseil National rom en Slovaquie."
    },
    {
        prefixe: "Sorin Aurel Sandu",
        traduction: "1973-",
        signification: "Acteur et cinéaste roumain."
    },
    {
        prefixe: "Livia Jaroka",
        traduction: "1974-",
        signification: "Membre du Parlement Européen, hongroise."
    },
    {
        prefixe: "Zsolt Vári",
        traduction: "1974-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Vebi Rushitoski",
        traduction: "1974-2001",
        signification: "Héros national macédonien."
    },
    {
        prefixe: "Pavol Polaković",
        traduction: "1974-",
        signification: "Boxeur médaillé tchèque."
    },
    {
        prefixe: "Zoltan Maga",
        traduction: "1974-",
        signification: "Violoniste hongrois."
    },
    {
        prefixe: "Elemér Tóth",
        traduction: "1974-",
        signification: "Peintre hongrois."
    },
    {
        prefixe: "Marian Simion",
        traduction: "1975-",
        signification: "Boxeur, roumaine."
    },
    {
        prefixe: "Zdeněk Godla",
        traduction: "1975-",
        signification: "Acteur tchèque."
    },
    {
        prefixe: "Timea Junghaus",
        traduction: "1975-",
        signification: "Commissaire d'exposition, hongroise."
    },
    {
        prefixe: "Viktoria Mohacsi",
        traduction: "1975-",
        signification: "Membre du Parlement Européen, hongroise."
    },
    {
        prefixe: "Sofiya Marinova Kamenova",
        traduction: "1975-",
        signification: "Chanteuse bulgare."
    },
    {
        prefixe: "Dijana Pavlović",
        traduction: "1976-",
        signification: "Activiste serbe."
    },
    {
        prefixe: "Karol Csino",
        traduction: "1976-",
        signification: "Chanteur lyrique et acteur slovaque."
    },
    {
        prefixe: "Denisa Balážová",
        traduction: "1976-",
        signification: "Actrice pour adultes tchèque."
    },
    {
        prefixe: "Jaroslav Miko",
        traduction: "1976-",
        signification: "Candidat au Parlement européen (tchèque)."
    },
    {
        prefixe: "Dorel Simion",
        traduction: "1977-",
        signification: "Boxeur, roumaine."
    },
    {
        prefixe: "Mário Bihári",
        traduction: "1977-",
        signification: "Musicien slovaque."
    },
    {
        prefixe: "Rytmus",
        traduction: "1977-",
        signification: "Rappeur slovaque."
    },
    {
        prefixe: "Vsevolod Tsurilo",
        traduction: "1977-",
        signification: "Acteur russe."
    },
    {
        prefixe: "Gelu Duminică",
        traduction: "1977-",
        signification: "Sociologue roumain."
    },
    {
        prefixe: "Robi Botos",
        traduction: "1978-",
        signification: "Pianiste jazz, hongroise."
    },
    {
        prefixe: "Ibolya Oláh",
        traduction: "1978-",
        signification: "Chanteuse hongroise."
    },
    {
        prefixe: "Małgorzata Mirga-Tas",
        traduction: "1978-",
        signification: "Artiste, polonaise."
    },
    {
        prefixe: "Wassil Trajanow Bojanów",
        traduction: "1978-",
        signification: "Chanteur bulgare."
    },
    {
        prefixe: "Vera Kurtić",
        traduction: "1978-",
        signification: "Militante serbe."
    },
    {
        prefixe: "Bajsa Arifovska",
        traduction: "1978-",
        signification: "Musicienne macédonienne."
    },
    {
        prefixe: "Gejza Dezorz",
        traduction: "1978-",
        signification: "Cinéaste slovaque."
    },
    {
        prefixe: "Petra Gelbart",
        traduction: "1978-",
        signification: "Musicologue tchèque."
    },
    {
        prefixe: "Richard Samko",
        traduction: "1978-",
        signification: "Présentateur tchèque."
    },
    {
        prefixe: "Diana Alexandrovna Savelyeva",
        traduction: "1979-",
        signification: "Actrice et chanteuse russe."
    },
    {
        prefixe: "Selimonda Selimović",
        traduction: "1979-",
        signification: "Comédienne serbe."
    },
    {
        prefixe: "Irena Bihariová",
        traduction: "1980-",
        signification: "Militante slovaque."
    },
    {
        prefixe: "Gabriela Csinová",
        traduction: "1980-",
        signification: "Actrice slovaque."
    },
    {
        prefixe: "Erdovan Shabanoski",
        traduction: "1980-",
        signification: "Héros de la nation macédonien."
    },
    {
        prefixe: "Myroslav Horvat",
        traduction: "1980?-",
        signification: "Activiste ukrainien."
    },
    {
        prefixe: "Veli Mumin",
        traduction: "1980-",
        signification: "Boxeur macédonien."
    },
    {
        prefixe: "Mirko Petrović",
        traduction: "1981-",
        signification: "Coureur de fond, serbe."
    },
    {
        prefixe: "Saša Barbul",
        traduction: "1981-",
        signification: "Cinéaste, serbe."
    },
    {
        prefixe: "Emilia Rigova",
        traduction: "1981-",
        signification: "Artiste, slovaque."
    },
    {
        prefixe: "David Dudáš",
        traduction: "1981-",
        signification: "Archiprêtre orthodoxe tchèque."
    },
    {
        prefixe: "Sandra Selimović",
        traduction: "1981-",
        signification: "Actrice serbe."
    },
    {
        prefixe: "Jelena Krstic",
        traduction: "1981-",
        signification: "Chanteuse serbe."
    },
    {
        prefixe: "József Pápai",
        traduction: "1981-",
        signification: "Artiste hongrois."
    },
    {
        prefixe: "Marian Dancso",
        traduction: "1981-",
        signification: "Politique tchèque."
    },
    {
        prefixe: "Erik Tollas",
        traduction: "1981-",
        signification: "Artiste hongrois."
    },
    {
        prefixe: "Angel Dark",
        traduction: "1982-",
        signification: "Actrice pour adultes slovaque."
    },
    {
        prefixe: "Katalin Bársony",
        traduction: "1982-",
        signification: "Réalisatrice hongroise."
    },
    {
        prefixe: "Radek Banga",
        traduction: "1982-",
        signification: "Chanteur/rappeur tchèque."
    },
    {
        prefixe: "Ferenc Molnár Caramel",
        traduction: "1982-",
        signification: "Chanteur hongrois."
    },
    {
        prefixe: "Štěpán Horváth",
        traduction: "1982-",
        signification: "Boxeur, tchèque."
    },
    {
        prefixe: "Boris Georgiev",
        traduction: "1982-",
        signification: "Boxeur médaillé olympique bulgare."
    },
    {
        prefixe: "Connect-R",
        traduction: "1982-",
        signification: "Rappeur, roumaine."
    },
    {
        prefixe: "Hermina Fatyol",
        traduction: "1982-",
        signification: "Actrice hongroise."
    },
    {
        prefixe: "Kamilla Fatyol",
        traduction: "1983-",
        signification: "Actrice hongroise."
    },
    {
        prefixe: "Eduard Herak",
        traduction: "1983-",
        signification: "Peintre slovaque."
    },
    {
        prefixe: "Petre Florin Manole",
        traduction: "1983-",
        signification: "Député au Parlement Roumain, roumaine."
    },
    {
        prefixe: "Durmish Kjazim",
        traduction: "1983-",
        signification: "Artiste, macédonienne."
    },
    {
        prefixe: "100 Kila",
        traduction: "1983-",
        signification: "Rappeur bulgare."
    },
    {
        prefixe: "Gábor Vadász",
        traduction: "1984-",
        signification: "Acteur hongrois."
    },
    {
        prefixe: "Vojtěch Vágai Jr.",
        traduction: "1984-",
        signification: "Prêtre tchèque."
    },
    {
        prefixe: "Franciska Farkas",
        traduction: "1984-",
        signification: "Actrice hongroise."
    },
    {
        prefixe: "Marija Serifović",
        traduction: "1984-",
        signification: "Chanteuse, gagnante de l'Eurovision, serbe."
    },
    {
        prefixe: "David Tiser",
        traduction: "1984-",
        signification: "Militant, tchèque."
    },
    {
        prefixe: "Tanja Savić",
        traduction: "1985-",
        signification: "Chanteuse, serbe."
    },
    {
        prefixe: "Dragos Dumitru",
        traduction: "1985-",
        signification: "Acteur roumain."
    },
    {
        prefixe: "Mary Nótár",
        traduction: "1985-",
        signification: "Chanteuse hongroise."
    },
    {
        prefixe: "Anita Bertóková",
        traduction: "1985-",
        signification: "Chanteuse slovaque."
    },
    {
        prefixe: "Bănel Nicoliţă",
        traduction: "1985-",
        signification: "Footballeur roumain."
    },
    {
        prefixe: "Dalibor Karvay",
        traduction: "1985-",
        signification: "Violoniste slovaque."
    },
    {
        prefixe: "Anna Mirga-Kruszelnicka",
        traduction: "1985-",
        signification: "Chercheuse polonaise."
    },
    {
        prefixe: "György Rostás-Farkas Jr.",
        traduction: "1985-",
        signification: "Journaliste hongrois."
    },
    {
        prefixe: "Jasko Balint",
        traduction: "1986-",
        signification: "Acteur hongrois."
    },
    {
        prefixe: "Pavel Berky",
        traduction: "1986-",
        signification: "Cuisinier, Designer de mode tchèque."
    },
    {
        prefixe: "Atanas Stoyanov",
        traduction: "1986-",
        signification: "Analyste politique bulgare."
    },
    {
        prefixe: "Mihaela Dragan",
        traduction: "1986-",
        signification: "Actrice roumaine."
    },
    {
        prefixe: "Tomáš Kačo",
        traduction: "1987-",
        signification: "Pianiste tchèque."
    },
    {
        prefixe: "Krzysztof Gil",
        traduction: "1987-",
        signification: "Artiste, chercheur hongrois."
    },
    {
        prefixe: "Barbora Botošová",
        traduction: "1987-",
        signification: "Violiniste slovaque."
    },
    {
        prefixe: "Péter Kovács",
        traduction: "1987-",
        signification: "Universitaire hongrois."
    },
    {
        prefixe: "Radži Aleksandrovičius",
        traduction: "1987-",
        signification: "Chanteur lithuanien."
    },
    {
        prefixe: "Gyula Antal Horvath",
        traduction: "1987-",
        signification: "Acteur roumain."
    },
    {
        prefixe: "Sead Kazanxhiu",
        traduction: "1987-",
        signification: "Artiste albanais."
    },
    {
        prefixe: "Arthur Bogdanov",
        traduction: "1987-",
        signification: "Acteur, comédien russe."
    },
    {
        prefixe: "Gilbert Costache",
        traduction: "1987-88",
        signification: "Mannequin roumain."
    },
    {
        prefixe: "Klaudia Dudová",
        traduction: "1988-",
        signification: "Actrice tchèque."
    },
    {
        prefixe: "Jan Cina",
        traduction: "1988-",
        signification: "Acteur tchèque."
    },
    {
        prefixe: "Vera Lacková",
        traduction: "1989-",
        signification: "Réalisatrice slovaque."
    },
    {
        prefixe: "Ivan Yankovski",
        traduction: "1990-",
        signification: "Acteur russe."
    },
    {
        prefixe: "Norbert Oláh",
        traduction: "1990-",
        signification: "Artiste contemporain hongrois."
    },
    {
        prefixe: "Julian Kondur",
        traduction: "1990-",
        signification: "Avocat et militant ukrainien."
    },
    {
        prefixe: "Anina Ciuciu",
        traduction: "1990-",
        signification: "Écrivaine et avocate roumaine (et française)."
    },
    {
        prefixe: "Selma Selman",
        traduction: "1991-",
        signification: "Artiste contemporaine bosnienne."
    },
    {
        prefixe: "András Kazári",
        traduction: "1991-",
        signification: "Acteur hongrois."
    },
    {
        prefixe: "Alžbeta Ferencová",
        traduction: "1991-",
        signification: "Actrice et mannequin slovaque."
    },
    {
        prefixe: "Ľuboš Kotlár",
        traduction: "1991-",
        signification: "Artiste slovaque."
    },
    {
        prefixe: "Oleksandr Noyok",
        traduction: "1992-",
        signification: "Footballeur ukrainien."
    },
    {
        prefixe: "Ferenc Varga",
        traduction: "1993-",
        signification: "Membre du Parlement hongrois."
    },
    {
        prefixe: "Jan Bendig",
        traduction: "1994-",
        signification: "Chanteur tchèque."
    },
    {
        prefixe: "Emanuel Barica",
        traduction: "1994-",
        signification: "Artiste roumain."
    },
    {
        prefixe: "Monika Bagárová",
        traduction: "1994-",
        signification: "Chanteuse tchèque."
    },
    {
        prefixe: "Alfredo Minea",
        traduction: "1994-",
        signification: "Acteur roumain."
    },
    {
        prefixe: "Elisa Yankovskaya",
        traduction: "1995-",
        signification: "Actrice russe."
    },
    {
        prefixe: "Justyna Matkowska",
        traduction: "1995?",
        signification: "Chercheuse polonaise."
    },
    {
        prefixe: "Tea Tairović",
        traduction: "1996-",
        signification: "Chanteuse serbe."
    },
    {
        prefixe: "Gigi Radics",
        traduction: "1996-",
        signification: "Chanteuse hongroise."
    },
    {
        prefixe: "Dominik Lakatos",
        traduction: "1997-",
        signification: "Joueur de hockey tchèque."
    },
    {
        prefixe: "Nicole Cherry",
        traduction: "1998-",
        signification: "Chanteuse roumaine."
    },
    {
        prefixe: "Raisa Mihai",
        traduction: "1998-",
        signification: "Chanteuse roumaine."
    },
    {
        prefixe: "Ornella Rudeviča",
        traduction: "1998-",
        signification: "Peintre lettone."
    },
    {
        prefixe: "Emil Abaz",
        traduction: "1998-",
        signification: "Footballeur macédonien."
    },
    {
        prefixe: "Václav Sivák",
        traduction: "1999-",
        signification: "Kickboxeur champion du monde tchèque."
    },
    {
        prefixe: "Nikola Kokyova",
        traduction: "1999-",
        signification: "Miss République Tchèque."
    },
    {
        prefixe: "Marsell Bendig",
        traduction: "1999-",
        signification: "Acteur tchèque."
    },
    {
        prefixe: "Andro",
        traduction: "2001-",
        signification: "Rappeur russe."
    },
    {
        prefixe: "Radu Stefan Banica",
        traduction: "2002-",
        signification: "Acteur roumain."
    },
    {
        prefixe: "Viki Gabor",
        traduction: "2007-",
        signification: "Chanteuse polonaise."
    },
    {
        prefixe: "Vanesa Horáková",
        traduction: "2008-",
        signification: "Chanteuse tchèque?."
    },
    {
        prefixe: "Nicoleta Ghiţă",
        traduction: "Inconnue",
        signification: "Actrice roumaine."
    },
    {
        prefixe: "Manuel Jelakaev",
        traduction: "Inconnue",
        signification: "Danseur russe."
    },
    {
        prefixe: "Taisiya Schumacher",
        traduction: "Inconnue",
        signification: "Actrice russe."
    },
    {
        prefixe: "Jeanne Harvilliers",
        traduction: "1528-1578",
        signification: "Victime condamnée pour sorcellerie."
    },
    {
        prefixe: "Jean-Charles",
        traduction: "XVIe siècle",
        signification: "Capitaine français."
    },
    {
        prefixe: "Augustine Bearce",
        traduction: "1618-1686",
        signification: "Agriculteur britannique."
    },
    {
        prefixe: "John Bunyan",
        traduction: "1628-1688",
        signification: "Auteur écossais."
    },
    {
        prefixe: "Charles de la Grave",
        traduction: "16?-1631",
        signification: "Militaire français."
    },
    {
        prefixe: "James Squire",
        traduction: "1754-1822",
        signification: "Entrepreneur australien."
    },
    {
        prefixe: "Isaac Jowles",
        traduction: "1772-1841",
        signification: "Roi >> gitan britannique."
    },
    {
        prefixe: "Owen << The King >> Stanley",
        traduction: "1794-1860",
        signification: "Roi >> gitan américain."
    },
    {
        prefixe: "Sylvester \"Wester\" Boswell",
        traduction: "1812-1890",
        signification: "Traducteur britannique."
    },
    {
        prefixe: "Gilderoy Scamp",
        traduction: "1812-1893",
        signification: "Boxeur britannique."
    },
    {
        prefixe: "John Roberts",
        traduction: "1816-1894",
        signification: "Harpiste gallois."
    },
    {
        prefixe: "Levi Stanley",
        traduction: "1818-1908",
        signification: "Personnalité américaine."
    },
    {
        prefixe: "Matilda Jowles Stanley",
        traduction: "1821-1878",
        signification: "Personnalité américaine."
    },
    {
        prefixe: "Ellen Chapman",
        traduction: "1831-1899",
        signification: "Dompteuse de lions, musicienne britannique."
    },
    {
        prefixe: "Ambrose Gwinnett Bierce",
        traduction: "1842-1914",
        signification: "Écrivain américain."
    },
    {
        prefixe: "Lafcadio Hearn",
        traduction: "1850-1904",
        signification: "Écrivain britannique."
    },
    {
        prefixe: "M. L. J. M. E. B. Sackville-West",
        traduction: "1858-1936",
        signification: "Noble britannique."
    },
    {
        prefixe: "Rodney \"Gipsy\" Smith",
        traduction: "1860-1947",
        signification: "Évangéliste britannique."
    },
    {
        prefixe: "Victoria J. D. C. Sackville-West",
        traduction: "1862-1936",
        signification: "Baronne et poétesse britannique."
    },
    {
        prefixe: "Charles Spencer Chaplin Sr.",
        traduction: "1863-1901",
        signification: "Artiste de music-hall britannique."
    },
    {
        prefixe: "Lydie Elenore Sackville-West",
        traduction: "1866-?",
        signification: "Danseuse franco-britannique."
    },
    {
        prefixe: "Hannah Chaplin",
        traduction: "1866-1928",
        signification: "Artiste britannique."
    },
    {
        prefixe: "Ruth Cavendish Bentinck",
        traduction: "1867-1953",
        signification: "Suffragette britannique."
    },
    {
        prefixe: "Kelly Mitchell",
        traduction: "1868-1915",
        signification: "Reine des gitans américaine."
    },
    {
        prefixe: "Rabbi Howell",
        traduction: "1869-1937",
        signification: "Footballeur britannique."
    },
    {
        prefixe: "Martin Joseph Frail",
        traduction: "1869-1939",
        signification: "Footballeur britannique."
    },
    {
        prefixe: "Harold St-Maur",
        traduction: "1869-1927",
        signification: "Député libéral britannique."
    },
    {
        prefixe: "Ladislas Lazaro",
        traduction: "1872-1927",
        signification: "Politique américain."
    },
    {
        prefixe: "Otto Mueller",
        traduction: "1874-1930",
        signification: "Peintre, allemande."
    },
    {
        prefixe: "Tikno Adjam",
        traduction: "1875-1948",
        signification: "Poète et résistant, française."
    },
    {
        prefixe: "Xavier Petulengro",
        traduction: "1878-1957",
        signification: "Marchand de chevaux britannique."
    },
    {
        prefixe: "George Bramwell Evens",
        traduction: "1884-1943",
        signification: "Animateur radio britannique."
    },
    {
        prefixe: "Romany Marie",
        traduction: "1885-1961",
        signification: "Restauratrice américaine."
    },
    {
        prefixe: "Sydney Chaplin",
        traduction: "1885-1965",
        signification: "Acteur britannique."
    },
    {
        prefixe: "Ferdinand Cavendish-Bentinck",
        traduction: "1889-1980",
        signification: "8e Duc de Portland, britannique."
    },
    {
        prefixe: "Charlie Chaplin",
        traduction: "1889-1977",
        signification: "Cinéaste, britannique (anglet.)."
    },
    {
        prefixe: "Richard W. Maxwell St. Maur",
        traduction: "1892-1978",
        signification: "Officier, britannique."
    },
    {
        prefixe: "Vita Josefa Sackville-West",
        traduction: "1892-1962",
        signification: "Écrivain, britannique."
    },
    {
        prefixe: "Silvester Gordon Boswell",
        traduction: "1895-1977",
        signification: "Soldat pendant la 1e GM britannique."
    },
    {
        prefixe: "John Cunningham",
        traduction: "1897-1941",
        signification: "Soldat pdt la 1GM britannique."
    },
    {
        prefixe: "Pola Negri",
        traduction: "1897-1987",
        signification: "Actrice de Hollywood polonaise, naturalisée américaine."
    },
    {
        prefixe: "Victor Cavendish-Bentinck",
        traduction: "1897-1990",
        signification: "9e Duc de Portland, britannique."
    },
    {
        prefixe: "John Robert Osborn",
        traduction: "1899-1941",
        signification: "Soldat britannique."
    },
    {
        prefixe: "Sylvester Gordon Boswell",
        traduction: "XIX-XXe",
        signification: "Britannique."
    },
    {
        prefixe: "Serge Poliakoff",
        traduction: "1900-1969",
        signification: "Peintre, russe et française."
    },
    {
        prefixe: "Jaja Sattler",
        traduction: "1902-1944",
        signification: "Missionnaire et traducteur allemand."
    },
    {
        prefixe: "Johann Trollmann",
        traduction: "1907-1944",
        signification: "Boxeur, allemande."
    },
    {
        prefixe: "Valia Dimitrievitch",
        traduction: "1905-1983",
        signification: "Chanteuse, franco-russe."
    },
    {
        prefixe: "Tela Tchaï",
        traduction: "1909-1993",
        signification: "Artiste, française."
    },
    {
        prefixe: "Django Reinhardt",
        traduction: "1910-1953",
        signification: "Musicien, française et belge."
    },
    {
        prefixe: "Jakob Bamberger",
        traduction: "1913-1989",
        signification: "Boxeur, allemande."
    },
    {
        prefixe: "Albert Eckstein",
        traduction: "1913-1992",
        signification: "Violoniste et collectionneur allemand."
    },
    {
        prefixe: "Constantin Nepo",
        traduction: "1914-1976",
        signification: "Artiste, française."
    },
    {
        prefixe: "Matéo Maximoff",
        traduction: "1917-1999",
        signification: "Écrivain français."
    },
    {
        prefixe: "Eldra Jarman",
        traduction: "1917-2000",
        signification: "Écrivaine, galloise."
    },
    {
        prefixe: "Nigel Nicolson",
        traduction: "1917-2004",
        signification: "Britannique."
    },
    {
        prefixe: "Matelo Ferret",
        traduction: "1918-1989",
        signification: "Guitariste, française."
    },
    {
        prefixe: "Rita Hayworth",
        traduction: "1918-1987",
        signification: "Actrice, américaine."
    },
    {
        prefixe: "Walter Stanoski Winter",
        traduction: "1919-2012",
        signification: "Résistant allemand."
    },
    {
        prefixe: "Yul Brynner",
        traduction: "1920-1985",
        signification: "Acteur, américaine."
    },
    {
        prefixe: "Jean-Baptiste Reilles",
        traduction: "1920-1987",
        signification: "Batteur de jazz français."
    },
    {
        prefixe: "György Cziffra",
        traduction: "1921-1994",
        signification: "Pianiste, hongroise, française."
    },
    {
        prefixe: "Josef Laubinger",
        traduction: "1921-1994",
        signification: "Victime de l'Holocauste, allemand."
    },
    {
        prefixe: "Franz << Schnuckenack >> Reinhardt",
        traduction: "1921-2006",
        signification: "Violoniste et compositeur allemand."
    },
    {
        prefixe: "Philomena Franz",
        traduction: "1921-2013",
        signification: "Écrivaine allemande."
    },
    {
        prefixe: "Tchan Tchou Vidal",
        traduction: "1923-1999",
        signification: "Guitariste français."
    },
    {
        prefixe: "Rosa Johanna Winter",
        traduction: "1923-2005",
        signification: "Survivante de l'Holocauste Rom."
    },
    {
        prefixe: "Hugo Höllenreiner",
        traduction: "1923-2015",
        signification: "Survivant à l'Holocauste Rom."
    },
    {
        prefixe: "Lily van Angeren-Franz",
        traduction: "1924-2011",
        signification: "Survivante allemande."
    },
    {
        prefixe: "Zarko Jovanovic",
        traduction: "1925-1985",
        signification: "Compositeur serbe."
    },
    {
        prefixe: "Raymond Gurême",
        traduction: "1925-2020",
        signification: "Écrivain et militant français."
    },
    {
        prefixe: "Elek Basik",
        traduction: "1926-1993",
        signification: "Musicien, hongroise, américai."
    },
    {
        prefixe: "Pisla Helmstetter",
        traduction: "1926-2013",
        signification: "Écrivaine française."
    },
    {
        prefixe: "Anna Mettbach",
        traduction: "1926-2015",
        signification: "Survivante de l'Holocauste allemande."
    },
    {
        prefixe: "Elisabeth Guttenberger",
        traduction: "1926-2024",
        signification: "Survivante de l'Holocauste allemande."
    },
    {
        prefixe: "Hannes Weiss",
        traduction: "1928-2011",
        signification: "Victime de l'Holocauste, activiste néerlandais."
    },
    {
        prefixe: "Karl Stojka",
        traduction: "1931-2003",
        signification: "Artiste autrichien."
    },
    {
        prefixe: "Joe Zawinul",
        traduction: "1932-2007",
        signification: "Musicien, autrichienne."
    },
    {
        prefixe: "Ceija Stojka",
        traduction: "1933-2013",
        signification: "Auteure et peintre autrichienne."
    },
    {
        prefixe: "Michael Caine",
        traduction: "1933-",
        signification: "Acteur, britannique."
    },
    {
        prefixe: "Hermann <<< Mano » Höllenreiner",
        traduction: "1933-",
        signification: "Survivant allemand."
    },
    {
        prefixe: "Raymond Buckland",
        traduction: "1934-2017",
        signification: "Écrivain américain."
    },
    {
        prefixe: "Ronald Lee",
        traduction: "1934-2020",
        signification: "Auteur, canadienne."
    },
    {
        prefixe: "Gérard Gartner",
        traduction: "1935-",
        signification: "Boxeur et sculpteur, française."
    },
    {
        prefixe: "John Bunyan",
        traduction: "1935-2000",
        signification: "Chirurgien, britannique-améric."
    },
    {
        prefixe: "Zoni Weisz",
        traduction: "1937-",
        signification: "Survivant de l'Holocauste/Fleuriste néerlandais."
    },
    {
        prefixe: "Richard Marcinko",
        traduction: "1940-2021",
        signification: "Vétéran de la marine américaine."
    },
    {
        prefixe: "Mariano Baliardo",
        traduction: "1940-",
        signification: "Chanteur, française."
    },
    {
        prefixe: "Koos Petalo",
        traduction: "1942-1996",
        signification: "Activiste néerlandais."
    },
    {
        prefixe: "Bob Hoskins",
        traduction: "1942-2014",
        signification: "Acteur, britannique."
    },
    {
        prefixe: "Paul Polansky",
        traduction: "1942-2021",
        signification: "Écrivain et activiste, américaine."
    },
    {
        prefixe: "Margaret Anne Lake",
        traduction: "1942-2023",
        signification: "Astrologue britannique."
    },
  {
    prefixe: "Ian Hancock",
    traduction: "1942-",
    signification: "Linguiste, britannique."
  },
  {
    prefixe: "Ralf Roberts",
    traduction: "1942-",
    signification: "Chanteur, allemand."
  },
  {
    prefixe: "Jerry Mason",
    traduction: "1942-",
    signification: "Chanteur, américain."
  },
  {
    prefixe: "Albert Lee",
    traduction: "1943-",
    signification: "Guitariste, britannique."
  },
  {
    prefixe: "Rita Prigomore",
    traduction: "1943-",
    signification: "Survivante de l'Holocauste, allemande."
  },
  {
    prefixe: "Danny Laine",
    traduction: "1944-2023",
    signification: "Guitariste, britannique."
  },
  {
    prefixe: "Helen Mirren",
    traduction: "1945-",
    signification: "Actrice, britannique et américaine."
  },
  {
    prefixe: "Melanie Spitta",
    traduction: "1946-2005",
    signification: "Réalisatrice, allemande."
  },
  {
    prefixe: "Romani Rose",
    traduction: "1946-",
    signification: "Militant, survivant de l'Holocauste Rom, allemande."
  },
  {
    prefixe: "Bill Clinton",
    traduction: "1946-",
    signification: "Président des Etats-Unis, américaine."
  },
  {
    prefixe: "Drafi Deutscher",
    traduction: "1946-2006",
    signification: "Musicien, allemand."
  },
  {
    prefixe: "Nicolae Gheorghe",
    traduction: "1946-2013",
    signification: "Militant, roumaine."
  },
  {
    prefixe: "Billy Drago",
    traduction: "1946-2019",
    signification: "Acteur, américaine."
  },
  {
    prefixe: "Amber L. Hollibaugh",
    traduction: "1946-2023",
    signification: "Ecrivaine et cinéaste, américaine."
  },
  {
    prefixe: "Ron Wood",
    traduction: "1947-",
    signification: "Guitariste des Rolling Stones, britannique."
  },
  {
    prefixe: "David Essex",
    traduction: "1947-",
    signification: "Musicien, Acteur, britannique."
  },
  {
    prefixe: "Christian Escoudé",
    traduction: "1947-2024",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Mariella Mehr",
    traduction: "1947-",
    signification: "Ecrivaine, suisse."
  },
  {
    prefixe: "Mariska Veres",
    traduction: "1947-2006",
    signification: "Chanteuse, hollandaise."
  },
  {
    prefixe: "Wally Tax",
    traduction: "1948-2005",
    signification: "Musicien, Chanteur, hollandaise."
  },
  {
    prefixe: "Johnny Frankham",
    traduction: "1948-",
    signification: "Boxeur, britannique."
  },
  {
    prefixe: "Alfred Ullrich",
    traduction: "1948-",
    signification: "Artiste, allemande."
  },
  {
    prefixe: "Stefan Horvath",
    traduction: "1949-",
    signification: "Ecrivain, autrichien."
  },
  {
    prefixe: "Stiv Bators",
    traduction: "1949-1990",
    signification: "Chanteur punk, américaine."
  },
  {
    prefixe: "Yasmin Aga Khan",
    traduction: "1949-",
    signification: "Philanthrope, américaine."
  },
  {
    prefixe: "Torino Ziegler",
    traduction: "1949-2001",
    signification: "Peintre, français."
  },
  {
    prefixe: "Fapy Lafertin",
    traduction: "1950-",
    signification: "Guitariste, belge."
  },
  {
    prefixe: "Karl Ratzer",
    traduction: "1950-",
    signification: "Guitariste jazz."
  },
  {
    prefixe: "Ilija Jovanović",
    traduction: "1950-2010",
    signification: "Poète, serbo-autrichien."
  },
  {
    prefixe: "Leonard Whiting",
    traduction: "1950-",
    signification: "Acteur, britannique."
  },
  {
    prefixe: "Elios Ferre",
    traduction: "1951-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "Jacques Delfeld Sr.",
    traduction: "1951-",
    signification: "Activiste, luxembourgeois."
  },
  {
    prefixe: "Frances Roberts-Reilly",
    traduction: "1952?",
    signification: "Harpiste, Productrice de films et poétesse, britannique."
  },
  {
    prefixe: "Sandra Lee-Vercoe",
    traduction: "1952-",
    signification: "Politique, néo-zélandaise."
  },
  {
    prefixe: "Dan Turner",
    traduction: "1953-",
    signification: "Artiste, britannique."
  },
  {
    prefixe: "Damian Le Bas",
    traduction: "1953-2017",
    signification: "Artiste, britannique."
  },
  {
    prefixe: "Patrick Saussois",
    traduction: "1954-2012",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Juliet Nicolson",
    traduction: "1954-",
    signification: "Journaliste, britannique."
  },
  {
    prefixe: "Tchavolo Schmitt",
    traduction: "1954-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "François Marie Reyes",
    traduction: "1954-",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Adam Ant",
    traduction: "1954-",
    signification: "Chanteur, britannique."
  },
  {
    prefixe: "Jovan Nikolić",
    traduction: "1955-",
    signification: "Activiste, serbe et allemand."
  },
  {
    prefixe: "Joe Longthorne",
    traduction: "1955-2019",
    signification: "Chanteur, britannique."
  },
  {
    prefixe: "Charlie Smith",
    traduction: "1956-2005",
    signification: "Poète, britannique."
  },
  {
    prefixe: "Titi Winterstein",
    traduction: "1956-2008",
    signification: "Violoniste, allemand."
  },
  {
    prefixe: "Anita Awosusi",
    traduction: "1956-",
    signification: "Ecrivaine, allemande."
  },
  {
    prefixe: "Cecilia Woloch",
    traduction: "1956-",
    signification: "Ecrivaine, américaine."
  },
  {
    prefixe: "Karen Finley",
    traduction: "1956-",
    signification: "Performeuse, américaine."
  },
  {
    prefixe: "Marcel Loeffler",
    traduction: "1956-",
    signification: "Accordéoniste, français."
  },
  {
    prefixe: "Rafaël Fays",
    traduction: "1957-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "Harri Stojka",
    traduction: "1957-",
    signification: "Musicien, autrichien."
  },
  {
    prefixe: "Adam Nicolson",
    traduction: "1957-",
    signification: "Auteur, britannique."
  },
  {
    prefixe: "Kálmán Várady",
    traduction: "1958-",
    signification: "Artiste, allemand."
  },
  {
    prefixe: "Nicolás Reyes",
    traduction: "1958-",
    signification: "Artiste, français."
  },
  {
    prefixe: "Tracey Ullman",
    traduction: "1959-",
    signification: "Actrice, britannique."
  },
  {
    prefixe: "Cas Holmes",
    traduction: "1960-",
    signification: "Auteure, écrivaine, britannique."
  },
  {
    prefixe: "Daniel Baker",
    traduction: "1960?",
    signification: "Artiste plasticien, britannique."
  },
  {
    prefixe: "Sani Rifati",
    traduction: "1960?",
    signification: "Activiste, allemand."
  },
  {
    prefixe: "Zielwa (Lalla) Weiss",
    traduction: "1961-",
    signification: "Activiste, néerlandaise."
  },
  {
    prefixe: "Mito Loeffler",
    traduction: "1961-2011",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Karola Fings",
    traduction: "1962-",
    signification: "Historienne, allemande."
  },
  {
    prefixe: "Angelo Debarre",
    traduction: "1962-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "Richard O'Neill",
    traduction: "1962-",
    signification: "Chercheur, Artiste et Conservateur d'art, britannique."
  },
  {
    prefixe: "Rein Mercha",
    traduction: "1963-",
    signification: "Chanteur, néerlandaise."
  },
  {
    prefixe: "Lucien Moreno",
    traduction: "1963-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "Tracey Emin",
    traduction: "1963-",
    signification: "Artiste contemporaine, britannique."
  },
  {
    prefixe: "Louise Doughty",
    traduction: "1963-",
    signification: "Ecrivaine, britannique."
  },
  {
    prefixe: "David Morley",
    traduction: "1964-",
    signification: "Universitaire, Poète, britannique."
  },
  {
    prefixe: "Elizabeta Jonuz",
    traduction: "1964-",
    signification: "Sociologue, allemande."
  },
  {
    prefixe: "Gabi Jiménez",
    traduction: "1964-",
    signification: "Artiste contemporain, français."
  },
  {
    prefixe: "Delaine Le Bas",
    traduction: "1965-",
    signification: "Artiste, britannique."
  },
  {
    prefixe: "WC Rosenberg",
    traduction: "1965-",
    signification: "Guitariste, néerlandais."
  },
  {
    prefixe: "Christophe Lartilleux",
    traduction: "1965-",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Romeo Franz",
    traduction: "1966-",
    signification: "Député européen, allemand."
  },
  {
    prefixe: "Biréli Lagrène",
    traduction: "1966-",
    signification: "Guitariste, française."
  },
  {
    prefixe: "Darren E. Burrows",
    traduction: "1966-",
    signification: "Acteur, américain."
  },
  {
    prefixe: "Daran Arthur Peter Little",
    traduction: "1966-",
    signification: "Ecrivain de télévision, britannique."
  },
  {
    prefixe: "Henry Wharton",
    traduction: "1967-",
    signification: "Boxeur."
  },
  {
    prefixe: "Ethel Brooks",
    traduction: "1967-",
    signification: "Militante, américaine."
  },
  {
    prefixe: "Stochelo Rosenberg",
    traduction: "1968-",
    signification: "Guitariste, néerlandaise."
  },
  {
    prefixe: "William Bila",
    traduction: "1968-",
    signification: "Développeur, Consultant business, tchèque/américaine."
  },
  {
    prefixe: "Django Wagner",
    traduction: "1970-",
    signification: "Chanteur, néerlandais."
  },
  {
    prefixe: "Shamus McPhee",
    traduction: "1971-",
    signification: "Activiste, britannique."
  },
  {
    prefixe: "Richard Carpenter",
    traduction: "1972-",
    signification: "Footballeur, britannique."
  },
  {
    prefixe: "Joe Machine",
    traduction: "1973-",
    signification: "Artiste contemporain, britannique."
  },
  {
    prefixe: "Caren Gussoff",
    traduction: "1973-",
    signification: "Auteure, américaine."
  },
  {
    prefixe: "Fairuza Balk",
    traduction: "1974-",
    signification: "Actrice, américaine."
  },
  {
    prefixe: "Mario Reyes",
    traduction: "1974-",
    signification: "Chanteur, français."
  },
  {
    prefixe: "Félix Lajkó",
    traduction: "1974-",
    signification: "Violoniste et compositeur, hongrois."
  },
  {
    prefixe: "Oksana Marafioti",
    traduction: "1974-",
    signification: "Ecrivaine, américaine."
  },
  {
    prefixe: "Robert Czibi",
    traduction: "1975-",
    signification: "Artiste, britannique-hongro."
  },
  {
    prefixe: "Steeve Laffont",
    traduction: "1975-",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Freddie Prince Jr.",
    traduction: "1976-",
    signification: "Acteur, américain."
  },
  {
    prefixe: "Jesse Wood",
    traduction: "1976-",
    signification: "Musicien, Mannequin, britannique."
  },
  {
    prefixe: "Francis Barrett",
    traduction: "1977-",
    signification: "Boxeur, irlandaise."
  },
  {
    prefixe: "Tiff Stevenson",
    traduction: "1978-",
    signification: "Humoriste, britannique."
  },
  {
    prefixe: "Jacques Abardonado",
    traduction: "1978-",
    signification: "Footballeur, français."
  },
  {
    prefixe: "Tayo Awosusi",
    traduction: "1978-",
    signification: "Chanteuse, allemande."
  },
  {
    prefixe: "Seanan McGuire",
    traduction: "1978-",
    signification: "Ecrivaine, américaine."
  },
  {
    prefixe: "Gianni Jovanovic",
    traduction: "1978-",
    signification: "Entrepreneur, allemande."
  },
  {
    prefixe: "Teddy Lussi-Modeste",
    traduction: "1978-",
    signification: "Cinéaste, français."
  },
  {
    prefixe: "Paulus Schäfer",
    traduction: "1978-",
    signification: "Guitariste, néerlandais."
  },
  {
    prefixe: "Isaac Blake",
    traduction: "1979-",
    signification: "Chorégraphe, britannique."
  },
  {
    prefixe: "Yorgui Loeffler",
    traduction: "1979-",
    signification: "Guitariste, français."
  },
  {
    prefixe: "Dezso Mate",
    traduction: "1980?",
    signification: "Docteur en philosophie ; Activiste, hongroise/allemande."
  },
  {
    prefixe: "Adrian Marsh",
    traduction: "1980?",
    signification: "Activiste, britannique."
  },
  {
    prefixe: "Béla Váradi",
    traduction: "1980?",
    signification: "Photographe, hongroise/britanique."
  },
  {
    prefixe: "Hilary Monahan",
    traduction: "1980?",
    signification: "Ecrivaine (SF), galloise."
  },
  {
    prefixe: "Toby Gorniak",
    traduction: "1980?",
    signification: "Danseur, Directeur artistique Hip-hop, britannique."
  },
  {
    prefixe: "Jimmy Rosenberg",
    traduction: "1980-",
    signification: "Guitariste, hollandaise."
  },
  {
    prefixe: "Chelsea Clinton",
    traduction: "1980-",
    signification: "Journaliste, américaine."
  },
  {
    prefixe: "Marina Rousselle",
    traduction: "1980-",
    signification: "Artiste, française."
  },
  {
    prefixe: "Ayo",
    traduction: "1980-",
    signification: "Chanteuse et compositrice, allemande."
  },
  {
    prefixe: "Andrijano Dzeladin",
    traduction: "1980-",
    signification: "Créateur média, français."
  },
  {
    prefixe: "Mikey Walsh",
    traduction: "1980-",
    signification: "Ecrivain, britannique."
  },
  {
    prefixe: "Petr Torak",
    traduction: "1981-",
    signification: "Policier, MBE, britannique."
  },
  {
    prefixe: "Sandra Selimović",
    traduction: "1981-",
    signification: "Actrice, autrichienne."
  },
  {
    prefixe: "Clifford Codona",
    traduction: "1981 (?)",
    signification: "Militant, britannique."
  },
  {
    prefixe: "Danny Lee Wynter",
    traduction: "1982-",
    signification: "Acteur, britannique."
  },
  {
    prefixe: "Freddy Eastwood",
    traduction: "1983-",
    signification: "Footballeur, galloise."
  },
  {
    prefixe: "Michael Costello",
    traduction: "1983-",
    signification: "Designer, américaine."
  },
  {
    prefixe: "Gilda Horvath",
    traduction: "1983-",
    signification: "Journaliste, autrichienne."
  },
  {
    prefixe: "Andy Lee",
    traduction: "1984-",
    signification: "Boxeur, irlandaise."
  },
  {
    prefixe: "Kevyn Diana",
    traduction: "1984-",
    signification: "Acteur, français."
  },
  {
    prefixe: "André-Pierre Gignac",
    traduction: "1985-",
    signification: "Footballeur, française."
  },
  {
    prefixe: "David Weiss",
    traduction: "1985-",
    signification: "Artiste, allemand."
  },
  {
    prefixe: "Dr. Aleksandar G. Marinov",
    traduction: "1985?",
    signification: "Docteur en Histoire ; Militant, britannique."
  },
  {
    prefixe: "Chrissy Teigen",
    traduction: "1985-",
    signification: "Mannequin, américaine."
  },
  {
    prefixe: "Gary Buckland",
    traduction: "1986-",
    signification: "Boxeur, galloise."
  },
  {
    prefixe: "Jo Clement",
    traduction: "1986-",
    signification: "Poétesse, britannique."
  },
  {
    prefixe: "Adrian Coriolan Gaspar",
    traduction: "1987-",
    signification: "Compositeur et pianiste, autrichien."
  },
  {
    prefixe: "Charles Newland",
    traduction: "1987-",
    signification: "Cinéaste, britannique."
  },
  {
    prefixe: "Tyson Fury",
    traduction: "1988-",
    signification: "Boxeur, irlandaise."
  },
  {
    prefixe: "Jeremy Demester",
    traduction: "1988-",
    signification: "Artiste, français."
  },
  {
    prefixe: "Billy Joe Sanders",
    traduction: "1989-",
    signification: "Boxeur, britannique."
  },
  {
    prefixe: "John Charles Smith (Johnboy Smith)",
    traduction: "1989-",
    signification: "Médaillé paralympique, britannique."
  },
  {
    prefixe: "Yohan Mollo",
    traduction: "1989-",
    signification: "Footballeur, français."
  },
  {
    prefixe: "Gratiela Brancusi",
    traduction: "1989-",
    signification: "Actrice, roumaine,Américaine."
  },
  {
    prefixe: "Artur Conka",
    traduction: "1990-",
    signification: "Photographe, Cinéaste, britannique."
  },
  {
    prefixe: "John Connors",
    traduction: "1990-",
    signification: "Acteur, irlandais."
  },
  {
    prefixe: "Andy Delort",
    traduction: "1991-",
    signification: "Footballeur, française/Algérienne."
  },
  {
    prefixe: "Téji Savanier",
    traduction: "1991-",
    signification: "Footballeur, français."
  },
  {
    prefixe: "Charlie Clapham",
    traduction: "1991-",
    signification: "Acteur, britannique."
  },
  {
    prefixe: "Charly Bechaimont",
    traduction: "1991-",
    signification: "Artiste, français."
  },
  {
    prefixe: "James Lee Williams",
    traduction: "1992-",
    signification: "Drag Queen, britannique."
  },
  {
    prefixe: "Jonathan Lee",
    traduction: "1992-",
    signification: "Ecrivain, activiste, et spécialiste études arabes, britannique."
  },
  {
    prefixe: "Cher Lloyd",
    traduction: "1993-",
    signification: "Chanteuse, britannique."
  },
  {
    prefixe: "George Ward (Cherry Valentine)",
    traduction: "1993-2022",
    signification: "Drag queen, britannique."
  },
  {
    prefixe: "Connor Swindells",
    traduction: "1996-",
    signification: "Acteur, britannique."
  },
  {
    prefixe: "Riah Knight",
    traduction: "1996-",
    signification: "Chanteuse et actrice, britannique."
  },
  {
    prefixe: "Gigi Dolin",
    traduction: "1997-",
    signification: "Lutteuse, américaine."
  },
  {
    prefixe: "Spartacus Ursu",
    traduction: "1997-",
    signification: "Acteur, français."
  },
  {
    prefixe: "Lila Loissé",
    traduction: "2000-",
    signification: "Artiste, belge."
  },
  {
    prefixe: "Anastasia Dymitrow",
    traduction: "2003-",
    signification: "Actrice, britannique."
  },
  {
    prefixe: "Jessica Reidy",
    traduction: "",
    signification: "Journaliste, américaine."
  },
  {
    prefixe: "Lee Fulher",
    traduction: "1963-",
    signification: "Poète, australien."
  },
  {
    prefixe: "Tony Gatlif",
    traduction: "1948-",
    signification: "Cinéaste, algérien."
  },
  {
    prefixe: "Zhena Muzyka",
    traduction: "",
    signification: "Businesswoman, américaine."
  }
];

