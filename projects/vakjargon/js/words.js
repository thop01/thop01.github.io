
const words = [
    {
        //300 woorden
        term: "Algorithm",
        descriptionNL: "Een algoritme is een geordende reeks stappen die wordt gebruikt om een specifieke taak uit te voeren of een probleem op te lossen. Algoritmen zijn een fundamenteel concept in de informatica en vormen de basis voor het ontwikkelen van software en het oplossen van complexe problemen. Ze worden vaak gebruikt om gegevens te verwerken, te sorteren, te doorzoeken en te analyseren, en ze spelen een cruciale rol in verschillende toepassingen, zoals zoekmachines, routeplanners, en data-analyse. Het ontwerpen van efficiënte algoritmen is van groot belang omdat ze de prestaties en schaalbaarheid van softwaretoepassingen beïnvloeden. Algoritmen kunnen in verschillende programmeertalen worden geïmplementeerd en kunnen variëren in complexiteit, van eenvoudige lineaire zoekalgoritmen tot geavanceerde optimalisatiealgoritmen.",
        relatedTerms: ["Datastructuur", "Complexiteit", "Pseudocode", "Recursie"]
    },
    {
        //300 woorden
        term: "Array",
        descriptionNL: "Een array is een veelgebruikte gegevensstructuur in de informatica en programmeerwereld. Het fungeert als een container voor het opslaan en organiseren van een reeks waarden van hetzelfde gegevenstype, zoals getallen, teksten of objecten. Een array kan worden beschouwd als een geordende lijst waarin elk element toegankelijk is via een numerieke index, beginnend bij nul voor het eerste element. Hierdoor kunnen programmeurs efficiënt gegevens beheren en manipuleren op een gestructureerde manier.",
        relatedTerms: ["Index", "Lengte", "Iteratie", "Datastructuur"]
    },
     //150 woorden 3F - engels termen
     {
        term: "Function",
        descriptionNL: "Een functie is een belangrijk concept in de wereld van programmeren. Het is een benoemde reeks instructies die een specifieke taak uitvoert wanneer deze wordt aangeroepen. Functies worden gebruikt om code te structureren en herbruikbaar te maken. Ze accepteren vaak invoer, die bekend staat als parameters, en kunnen resultaten teruggeven. Hierdoor kunnen programmeurs complexe taken opdelen in kleinere, beheersbare stukken. Gerelateerde Engelse termen zijn 'Parameter' (parameter), 'Return Value' (teruggegeven waarde) en 'Scope' (scope). Functies zijn essentieel in programmeren, omdat ze de efficiëntie, leesbaarheid en onderhoudbaarheid van code verbeteren.",
        relatedTerms: ["Parameter", "Return Value", "Scope"]
    },
    {
        term: "Repository",
        descriptionNL: "Een repository, in de context van softwareontwikkeling, is een centrale locatie waarin alle broncode, configuratiebestanden, documentatie en andere bestanden voor een softwareproject worden opgeslagen en beheerd. Het fungeert als een verzamelplaats waar ontwikkelaars kunnen samenwerken, wijzigingen kunnen bijhouden en de geschiedenis van het project kunnen beheren. Repositories worden vaak gebruikt in combinatie met versiebeheersystemen zoals Git, waarbij elke wijziging aan de code wordt vastgelegd en gecontroleerd. Gerelateerde Engelse termen zijn 'Version Control' (versiebeheer), 'Commit' (toewijzen) en 'Collaboration' (samenwerking). Het gebruik van repositories vergemakkelijkt effectieve samenwerking en zorgt voor een georganiseerde en traceerbare ontwikkelingsworkflow.",
        relatedTerms: ["Version Control", "Commit", "Collaboration"]
    },



    // {
    //     term: "Variable",
    //     descriptionNL: "Een variabele is een fundamenteel concept in de wereld van programmeren. Het is een naam die wordt gebruikt om een locatie in het geheugen aan te duiden waarin gegevens kunnen worden opgeslagen. Een variabele kan verschillende soorten gegevens bevatten, zoals getallen, tekst of booleans. Tijdens de uitvoering van een programma kan de waarde van een variabele veranderen. Dit maakt variabelen krachtige hulpmiddelen voor het opslaan en manipuleren van gegevens in een programma. Gerelateerde Engelse termen zijn 'Declaration' (declaratie), 'Assignment' (toewijzing) en 'Datatype' (gegevenstype).",
    //     relatedTerms: ["Declaration", "Assignment", "Datatype"]
    // },
    // {   
    //     term: "Library",
    //     descriptionNL: "Een bibliotheek is een verzameling herbruikbare code die wordt gebruikt om specifieke taken te vereenvoudigen. Het bevordert efficiëntie en consistentie in softwareontwikkeling. Bibliotheken stellen ontwikkelaars in staat om bewezen oplossingen te gebruiken voor veelvoorkomende problemen, waardoor de ontwikkeltijd wordt verkort en de codekwaliteit wordt verbeterd.",
    //     relatedTerms: ["function", "react"]
    // },
    // {
    //     term: "Function",
    //     descriptionNL: "Functies zijn stukjes code die buiten de rest van de script worden geschreven. Die code worden alleen maar uitgevoerd wanneer de script er expliciet om vraagt. Als een script veel dezelfde code bevat kun je de code die altijd hetzelfde is apart zetten in een functie en die functie telkens opnieuw oproepen.",
    //     relatedTerms: ["Library"]
    // },
    // {
    //     term: "Variable",
    //     descriptionEN: "A variable is a storage location for data.",
    //     descriptionNL: "Een variabele is een opslagplaats voor gegevens.",
    //     relatedTerms: ["Declaration", "Assignment", "Datatype"]
    // },
    // {
    //     term: "Function",
    //     descriptionEN: "A function is a named sequence of statements that performs a specific task.",
    //     descriptionNL: "Een functie is een benoemde reeks instructies die een specifieke taak uitvoert.",
    //     relatedTerms: ["Parameters", "Return Value", "Scope"]
    // },
    // {
    //     term: "Array",
    //     descriptionEN: "An array is a data structure that stores a collection of elements, each identified by an index.",
    //     descriptionNL: "Een array is een gegevensstructuur die een verzameling van elementen opslaat, elk geïdentificeerd door een index.",
    //     relatedTerms: ["Index", "Length", "Iteration"]
    // },
    // {
    //     term: "Object",
    //     descriptionEN: "An object is a complex data structure that contains properties and methods.",
    //     descriptionNL: "Een object is een complexe gegevensstructuur die eigenschappen en methoden bevat.",
    //     relatedTerms: ["Property", "Method", "Instance"]
    // },
    // {
    //     term: "Conditional Statement",
    //     descriptionEN: "A conditional statement executes certain instructions based on a condition.",
    //     descriptionNL: "Een conditiestatement voert bepaalde instructies uit op basis van een voorwaarde.",
    //     relatedTerms: ["If Statement", "Switch Statement", "Comparison"]
    // },
    // {
    //     term: "Loop",
    //     descriptionEN: "A loop repeats a sequence of statements until a certain condition is met.",
    //     descriptionNL: "Een lus herhaalt een reeks instructies totdat een bepaalde voorwaarde is voldaan.",
    //     relatedTerms: ["For Loop", "While Loop", "Do-While Loop"]
    // },
    // {
    //     term: "Debugging",
    //     descriptionEN: "Debugging is the process of identifying and fixing errors in code.",
    //     descriptionNL: "Debugging is het proces van identificeren en oplossen van fouten in de code.",
    //     relatedTerms: ["Breakpoint", "Console.log", "Step-by-Step Execution"]
    // },
    // {
    //     term: "Library",
    //     descriptionEN: "A library is a collection of reusable code used to simplify specific tasks.",
    //     descriptionNL: "Een bibliotheek is een verzameling herbruikbare code die wordt gebruikt om specifieke taken te vereenvoudigen.",
    //     relatedTerms: ["Framework", "Module", "Dependency"]
    // },
    // {
    //     term: "Version Control",
    //     descriptionEN: "Version Control is a system that tracks and manages changes to code, enabling collaboration and versioning.",
    //     descriptionNL: "Version Control is een systeem dat wijzigingen in de code bijhoudt en beheert, waardoor samenwerking en versiebeheer mogelijk zijn.",
    //     relatedTerms: ["Git", "Repository", "Commit"]
    // },
    // {
    //     term: "API (Application Programming Interface)",
    //     descriptionEN: "An API is a set of rules and protocols that allow different software applications to communicate with each other.",
    //     descriptionNL: "Een API is een set van regels en protocollen waarmee verschillende softwaretoepassingen met elkaar kunnen communiceren.",
    //     relatedTerms: ["Endpoint", "RESTful", "HTTP Request"]
    // }
];

const showWord = (i = Math.floor(Math.random() * (words.length - 0) + 0)) => {
    const wordObject = words[i];
    console.log(i);
    const ii = i;
    console.log(wordObject);
    term.textContent = wordObject.term;
    description.textContent = wordObject.descriptionNL;
    //rt = related term
    relatedwords.replaceChildren();
    for (const rt of wordObject.relatedTerms) {
        let found = false;
        // t = word in dictionary
        heavy: for(let index = 0; index<words.length; index++){
            const t = words[index].term;
            if(rt.toLocaleLowerCase() == t.toLocaleLowerCase()){
                const span = document.createElement("span");
                span.textContent += t + " ";
                span.classList.add("link");
                span.addEventListener("click", ()=>{showWord(index)});
                relatedwords.appendChild(span);
                found = true;
                break heavy;
            }
        }
        if(!found){
            const span = document.createElement("span");
            span.textContent += rt + " ";
            // span.addEventListener("click", ()=>{showWord(index)});
            relatedwords.appendChild(span);
        }

    }
    // relatedwords.textContent = wordObject.relatedTerms;
}

const showIndex = (words) =>{
    index.replaceChildren(); 
    words.forEach((wordObject, i)  => {
        const t = document.createElement("li");
        t.textContent = wordObject.term;
        t.addEventListener("click", ()=>{ showWord(i) })
        index.appendChild(t);
    });
}

showWord();
showIndex(words);