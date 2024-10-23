const assessmentForm = [
    {
        workProcess: "K1-W1 Plant werkzaamheden en bewaakt de voortgang",
        criteria: [
            {
                name: "Op basis van de user stories is een realistische planning gemaakt. Product(en): Scrumboard",
                descriptions: [
                    "De planning is niet compleet en niet realistisch. Er ontbreken teveel user stories en het tijdspad is niet realistisch ingeschat.", // 0 points
                    "De planning is enigszins compleet en realistisch. Er ontbreken nog user stories en het tijdspad is niet overal goed ingeschat.", // 1 points
                    "Er is een planning. De planning is grotendeels compleet en de taken zijn doorgaans realistisch ingepland.", // 2 points
                    "Er is een complete en realistische planning. De planning is compleet en realistisch ingeschat." // 3 points
                ]
            },
            {
                name: "De voortgang is bewaakt en de juiste keuzes/afwegingen zijn gemaakt op basis van prioriteiten. Product(en): Scrum logboek, voortgangsbewakingdocument (bijgehouden door project docent)",
                descriptions: [
                    "De voortgang is niet bewaakt. Het is onduidelijk welke zaken wel of niet zijn afgerond.", // 0 points
                    "Er is een vorm van voortgangsbewaking. Men heeft beelden bij hetgeen is gemaakt en wat er nog moet worden gerealiseerd, maar onduidelijk is waar de prioriteiten liggen en hoe de voortgang past in de planning.", // 1 points
                    "Er is een voortgangsbewaking. Er wordt gewerkt op basis van een tijdsplanning en prioritering. Er is echter een beperkt besef van keuzes en afwegingen wanneer zaken de planning verstoren.", // 2 points
                    "Er is een duidelijke voortgangsbewaking op basis van prioritering. In de planning en prioritering is er zichtbaar sprake van keuzes en afwegingen. Dit niet alleen in het ontwikkelteam, maar ook met de opdrachtgever." // 3 points
                ]
            }
            // Add more criteria here
        ]
    },
    {
        workProcess: " K1-W2 Ontwerpt software",
        criteria: [
            {
                name: "De user stories zijn vertaald naar een passend, eenduidig en volledig ontwerp (sluit aan op wensen en eisen). Product(en): Ontwerptekening Spelregelsdocument",
                descriptions: [
                    "Het ontwerp ontbreekt", // 0 points
                    "Er is een ontwerp, maar deze dekt niet de functionaliteit die is aangeven in de eisen en wensen en de user stories. Er ontbreekt functionaliteit, toelichting is beperkt en het ontwerp past niet/beperkt bij de eisen en wensen van de opdrachtgever.", // 1 points
                    "Er is een ontwerp waarin functionaliteit uit de eisen en wensen en de user stories gelezen kan worden. De ontwerpen zijn toegelicht en zijn passend.", // 2 points
                    "Er is een volledig ontwerp waarin alle eisen en wensen en de user stories gelezen kunnen worden. Het ontwerp is duidelijk toegelicht zodat de lezer direct een relatie legt met de eisen en wensen." // 3 points
                ]
            },
            {
                name: "De voortgang is bewaakt en de juiste keuzes/afwegingen zijn gemaakt op basis van prioriteiten. Product(en): Scrum logboek, voortgangsbewakingdocument (bijgehouden door project docent)",
                descriptions: [
                    "De voortgang is niet bewaakt. Het is onduidelijk welke zaken wel of niet zijn afgerond.", // 0 points
                    "Er is een vorm van voortgangsbewaking. Men heeft beelden bij hetgeen is gemaakt en wat er nog moet worden gerealiseerd, maar onduidelijk is waar de prioriteiten liggen en hoe de voortgang past in de planning.", // 1 points
                    "Er is een voortgangsbewaking. Er wordt gewerkt op basis van een tijdsplanning en prioritering. Er is echter een beperkt besef van keuzes en afwegingen wanneer zaken de planning verstoren.", // 2 points
                    "Er is een duidelijke voortgangsbewaking op basis van prioritering. In de planning en prioritering is er zichtbaar sprake van keuzes en afwegingen. Dit niet alleen in het ontwikkelteam, maar ook met de opdrachtgever." // 3 points
                ]
            }
        ]
    },
    {
        workProcess: "K1-W3 Realiseert (delen van) software",
        criteria: [
            {
                name: "Er is voldoende inhoud van de user stories gerealiseerd binnen de gestelde/geplande tijd. Product(en): Opgeleverde website, broncode.",
                descriptions: [
                    "Er is geen functionaliteit gerealiseerd op basis van de toegewezen user stories en geplande tijd", // 0 points
                    "Er is functionaliteit gerealiseerd binnen de gestelde tijd, maar dit leidt niet tot een werkend geheel.", // 1 points
                    "Er zijn voldoende user stories gerealiseerd binnen de gestelde tijd, zodat de applicatie functioneert. Er ontbreekt basale functionaliteit.", // 2 points
                    "De user stories die aan de kandidaat zijn toegewezen zijn gerealiseerd binnen de geplande tijd. Dit conform de uitgangspunten van het ontwerp." // 3 points
                ]
            },
            {
                name: "De opgeleverde  functionaliteiten voldoen aan de eisen en wensen zoals beschreven in de betreffende user story.",
                descriptions: [
                    "Er is geen functionaliteit opgeleverd conform de user stories.", // 0 points
                    "Er is functionaliteit opgeleverd, maar dit leidt niet tot een werkend geheel. De functionaliteit past niet bij de eisen en wensen die op basis van de user stories gerealiseerd dienden te worden", // 1 points
                    "Er is functionaliteit bij alle user stories gerealiseerd. Echter niet alle eisen en wensen zijn op de juiste wijze geïmplementeerd.", // 2 points
                    "Er is functionaliteit bij alle user stories gerealiseerd. En alle eisen en wensen zijn op de juiste wijze geïmplementeerd. De applicatie werkt." // 3 points
                ]
            },
            {
                name: "De kwaliteit van de code is goed. Dit uit zich o.a. in structuur van de code, validatie, efficiëntie, foutafhandeling en terugkoppeling. Product(en): Opgeleverde website, broncode. ",
                descriptions: [
                    "Er is geen kwaliteit van code. Er is wel gecodeerd, maar zaken als validatie, foutafhandeling en security ontbreken volledig en de code is weinig gestructureerd.", // 0 points
                    "Er is enige kwaliteit van code. De code is hier en daar gevalideerd, is beperkt efficiënt en foutafhandelingen en security zijn deels consequent doorgevoerd. De code is redelijk gestructureerd.", // 1 points
                    "De code is kwalitatief juist en de programmeur heeft duidelijk aandacht besteed aan de structuur van de code, validatie, efficiëntie, foutafhandeling en terugkoppeling. Alleen zijn niet alle elementen consequent doorgevoerd. In de code is zichtbaar dat zaken ontbreken.", // 2 points
                    "De code is kwalitatief op een hoog niveau en de programmeur heeft duidelijk aandacht besteed aan de structuur van de code, Validatie, efficiëntie, foutafhandeling en terugkoppeling. Deze elementen zijn consequent doorgevoerd." // 3 points
                ]
            },
            {
                name: "Versiebeheer is effectief toegepast. Product(en): Github commits/history (per week minimaal 2 commits)",
                descriptions: [
                    "Er is geen versiebeheer toegepast.",
                    "Er is versiebeheer toegepast, maar onduidelijk is welke versies er zijn en welke aanpassingen er per versie zijn doorgevoerd. Ook is er geen onderliggende tool gebruikt om het versiebeheer te organiseren",
                    "Er is versiebeheer toegepast met een daarvoor geschikte tool. Versies zijn herkenbaar en terug te halen. Echter er ontbreken in het versiebeheer stappen of de samenhang tussen de versies is onduidelijk. Er is een passende workflow gekozen, maar niet goed toegepast.",
                    "Er is gestructureerd gebruikgemaakt van versiebeheer. Er is een geëigende tool gebruikt en alle versies zijn juist vastgelegd en terug te halen."
                ]
            }]

    },
    {
        workProcess: "K1-W4 Test software",
        criteria: [
            {
                name: "Het testrapport bevat de juiste resultaten en conclusies. Product(en): Testrapport",
                descriptions: [
                    "De juiste verbetervoorstellen zijn gedaan vanuit het testen.",
                    "Er is een testrapport maar de resultaten zijn beperkt. Niet alle scenario’s hebben een resultaat en de conclusie is basaal.",
                    "Er is een testrapport met uitgebreide resultaten. Alle scenario’s hebben een resultaat en de conclusie is vooral technisch van aard.",
                    "Er is een testrapport met uitgebreide resultaten. Alle scenario’s hebben een resultaat en de conclusie geeft inzicht in de samenhang van de applicatie en het gebruik.",

                ]
            },
            {
                name: "De juiste verbetervoorstellen zijn gedaan vanuit het testen. Product(en): Testrapport",
                descriptions: [
                    "er zijn geen verbetervoorstellen.",
                    "Er zijn enkele verbetervoorstellen genoemd, maar deze raken niet de kern van de problemen in de applicatie. De verbetervoorstellen raken ook niet echt aan de conclusie van de integratietest",
                    "Er zijn verbetervoorstellen genoemd die ook een duidelijke relatie hebben met de resultaten van de test en de conclusie. De voorstellen hebben vooral betrekking op technische en/of functionele oplossingen van de losse onderdelen.",
                    "Er zijn verbetervoorstellen genoemd die ook een duidelijke relatie hebben met de resultaten van de test en de conclusie. De verbetervoorstellen hebben betrekking op de technische en/of functio-nele oplos-singen die de samengestelde functionaliteit verbeteren."

                ]
            },
            {
                name: "De kwaliteit van de code is goed. Dit uit zich o.a. in structuur van de code, validatie, efficiëntie, foutafhandeling en terugkoppeling. Product(en): Opgeleverde website, broncode. ",
                descriptions: [
                    "Er is geen kwaliteit van code. Er is wel gecodeerd, maar zaken als validatie, foutafhandeling en security ontbreken volledig en de code is weinig gestructureerd.", // 0 points
                    "Er is enige kwaliteit van code. De code is hier en daar gevalideerd, is beperkt efficiënt en foutafhandelingen en security zijn deels consequent doorgevoerd. De code is redelijk gestructureerd.", // 1 points
                    "De code is kwalitatief juist en de programmeur heeft duidelijk aandacht besteed aan de structuur van de code, validatie, efficiëntie, foutafhandeling en terugkoppeling. Alleen zijn niet alle elementen consequent doorgevoerd. In de code is zichtbaar dat zaken ontbreken.", // 2 points
                    "De code is kwalitatief op een hoog niveau en de programmeur heeft duidelijk aandacht besteed aan de structuur van de code, Validatie, efficiëntie, foutafhandeling en terugkoppeling. Deze elementen zijn consequent doorgevoerd." // 3 points
                ]
            },
            {
                name: "Versiebeheer is effectief toegepast. Product(en): Github commits/history (per week minimaal 2 commits)",
                descriptions: [
                    "Er is geen versiebeheer toegepast.",
                    "Er is versiebeheer toegepast, maar onduidelijk is welke versies er zijn en welke aanpassingen er per versie zijn doorgevoerd. Ook is er geen onderliggende tool gebruikt om het versiebeheer te organiseren",
                    "Er is versiebeheer toegepast met een daarvoor geschikte tool. Versies zijn herkenbaar en terug te halen. Echter er ontbreken in het versiebeheer stappen of de samenhang tussen de versies is onduidelijk. Er is een passende workflow gekozen, maar niet goed toegepast.",
                    "Er is gestructureerd gebruikgemaakt van versiebeheer. Er is een geëigende tool gebruikt en alle versies zijn juist vastgelegd en terug te halen."
                ]
            },
        ],

    },
    {
        workProcess: "Interview",
        criteria: [
            {
                name: "De beoordelaar is overtuigd van de authenticiteit van het door de kandidaat gemaakte werk.",
                descriptions: [
                    "De beoordelaar is niet overtuigd van de authenticiteit van het door de kandidaat gemaakte werk.",
                    "De beoordelaar is weinig overtuigd van de authenticiteit van het door de kandidaat gemaakte werk.",
                    "De beoordelaar is grotendeels overtuigd van de authenticiteit van het door de kandidaat gemaakte werk.",
                    "De beoordelaar is overtuigd van de authenticiteit van het door de kandidaat gemaakte werk.",

                ]
            },
          
        ],

    },

    // Add more work processes here
];