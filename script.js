// Constanten - verwijzing naar html elementen
const quizContainer = document.getElementById('quizContainer');
const resultatenContainer = document.getElementById('resultaten'); //getElementById gebruiken we om elementen uit de html te selecteren
const klaarButton = document.getElementById('klaar');


//variabelen
let nummerCorrect = 0;


// quizvragen en antwoorden

// Mijn eerste quizvraag begint bij 0 en niet bij 1
// de antwoorden werken als een naam en wat die naam dus betekent (name value)

const opgaven = [ //dit variabel bevat een array van objecten (dus de vragen en antwoorden) (dictionary array)
    {
        vraag: "Wat is de beste manier om aandacht te krijgen van de luisteraars?",
        antwoordOpties: {
            a: "Roepen of iedereen stil kan zijn",
            b: "Beginnen met presenteren ook al praten mensen erdoorheen",
            c: "Zorgen voor een krachtige opening", 
            d: "Een stilte laten vallen totdat iedereen luistert", 
        },
        correcteAntwoord: "c"
    },
    {
        vraag: "Wat moet je doen voordat je je presentatie gaat geven?",
        antwoordOpties: {
            a: "Alleen even snel je slides doornemen", 
            b: "Paar keer je presentatie oefenen voor bijvoorbeeld familieleden", 
            c: "1 Keer je presentatie oefenen", 
            d: "Weinig informatie voorbereiden", 
        },
        correcteAntwoord: "b"
    },
    {
        vraag: "Hoe kan je professioneel overkomen tijdens het geven van je presentatie?",
        antwoordOpties: {
            a: "Vaak naar de docent of 1 persoon kijken", 
            b: "Alleen de focus leggen op de inhoud",
            c: "In het begin het onderwerp lang inleiden", 
            d: "Voldoende aandacht besteden aan non-verbale communicatie en intonatie", 
        },
        correcteAntwoord: "d"
    },
    {
        vraag: "Hoe kan je je Powerpoint professioneel weergeven?",
        antwoordOpties: {
            a: "De woorden die in de Powerpoint staan voorlezen", 
            b: "Lange zinnen gebruiken in je Powerpoint",
            c: "Je PowerPoint publieksgericht maken", 
            d: "Veel informatie tonen op de beamer", 
        },
        correcteAntwoord: "c"
    },
    {
        vraag: "Hoe interacteer je op de juiste manier met de luisteraar?",
        antwoordOpties: {
            a: "Sta er stijfjes bij", 
            b: "Maak oogcontact met de luisteraars", 
            c: "Je presentatie beginnen met heel veel informatie in een keer", 
            d: "Alleen maar naar het scherm kijken",
        },
        correcteAntwoord: "b"
    },
    {
        vraag: "Hoe kan je goed praten tijdens je presentatie?",
        antwoordOpties: {
            a: "Snel praten", 
            b: "Praat niet eentonig", 
            c: "Veel 'euhm' gebruiken", 
            d: "Zenuwachtig overkomen tijdens het spreken", 
        },
        correcteAntwoord: "b"
    }
];

//math.random maken voor antwoorden en vragen

// --------------------- BOUW QUIZ --------------------------

// Voor elke vraag in mijnVragen ga ik iets doen (loop)
// createElement inlezen

// functions

function randomizeOpgaven(array) { //array is een parameter
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function bouwQuiz() { 
    opgaven.forEach((opgave)=> { 
        //Vragen
        let vraagVanOpgave = opgave.vraag;
        const vraagP = document.createElement("p");  //dit is een container voor elke vraag
        vraagP.classList.add("vraag"); //hiermee voeg je een class toe voor het stylen
        vraagP.textContent = vraagVanOpgave;
        quizContainer.appendChild(vraagP); 

        // Antwoordopties
        let antwoordOptiesVanOpgave = opgave.antwoordOpties;
        const antwoordenLijst = document.createElement("ul");
        

        const antwoordenA = document.createElement("p");
        const antwoordenB = document.createElement("p");
        const antwoordenC = document.createElement("p");
        const antwoordenD = document.createElement("p");

        antwoordenA.classList.add("antwoord");
        antwoordenB.classList.add("antwoord");
        antwoordenC.classList.add("antwoord");
        antwoordenD.classList.add("antwoord");

        antwoordenA.textContent = antwoordOptiesVanOpgave.a;
        antwoordenB.textContent = antwoordOptiesVanOpgave.b;
        antwoordenC.textContent = antwoordOptiesVanOpgave.c;
        antwoordenD.textContent = antwoordOptiesVanOpgave.d;

        quizContainer.appendChild(antwoordenA); 
        quizContainer.appendChild(antwoordenB); 
        quizContainer.appendChild(antwoordenC); 
        quizContainer.appendChild(antwoordenD); 

        //Checkboxen van antwoordopties A
        
        const checkBoxA = document.createElement("input");
        checkBoxA.setAttribute("type", "checkbox");
        checkBoxA.setAttribute("name", "antwoordOptie");
        checkBoxA.setAttribute("value", antwoordOptiesVanOpgave.a);
        antwoordenA.appendChild(checkBoxA);

         //Checkboxen van antwoordopties B

        const checkBoxB = document.createElement("input");
        checkBoxB.setAttribute("type", "checkbox");
        checkBoxB.setAttribute("name", "antwoordOptie");
        checkBoxB.setAttribute("value", antwoordOptiesVanOpgave.b);
        antwoordenB.appendChild(checkBoxB);

        //Checkboxen van antwoordopties C

        const checkBoxC = document.createElement("input");
        checkBoxC.setAttribute("type", "checkbox");
        checkBoxC.setAttribute("name", "antwoordOptie");
        checkBoxC.setAttribute("value", antwoordOptiesVanOpgave.c);
        antwoordenC.appendChild(checkBoxC);

        //Checkboxen van antwoordopties D

        const checkBoxD = document.createElement("input");
        checkBoxD.setAttribute("type", "checkbox");
        checkBoxD.setAttribute("name", "antwoordOptie");
        checkBoxD.setAttribute("value", antwoordOptiesVanOpgave.a);
        antwoordenD.appendChild(checkBoxD);


    })};


    function showResultaten() {
    
    }

    

document.addEventListener("DOMContentLoaded", function() {
    let timerContainer = document.getElementById('timer'); 
    let timer = 3 * 60; // 3 keer 60 seconden = 120 seconden
  
    function updateTimer() {
      let minuten = Math.floor(timer / 60); //dit is dus 180 : 60= ... afgerond naar beneden 
      let seconden = timer % 60; //hierdoor kan je minuten en seconden vweergeven, dit laat de seconden zien nadat de minuten zijn berekent
      timerContainer.textContent = (minuten < 10 ? '0' : '') + minuten + ':' + (seconden < 10 ? '0' : '') + seconden;
    }
  
    function aftellen() {
      timer--; //-- is: telt naar beneden
      if (timer < 0) {
        clearInterval(interval); //clearInterval laat de timer stoppen voordat timer onder de 0 komt
        timerContainer.textContent = '00:00';
        alert('De tijd is om!'); //bericht van de browser die je krijgt te zien wanneer timer op 00:00 staat
      } else {
        updateTimer(); //als de timer niet op 00:00 staat voert hij updateTimer uit, dus hij blijft aftellen
      }
    }

    updateTimer();
    var interval = setInterval(aftellen, 1000); // 1000 is ook wel 1000 miliseconden = (1 seconde) hij update telkens met 1 seconde
  });



//aanroep functies
randomizeOpgaven(opgaven);
bouwQuiz();
























  /*
        for (let antwoordOptiesWeergave in opgave.antwoordOpties) {
            console.log(opgave.antwoordOpties);

            const antwoordOptiesVanOpgave = document.createElement("p");
            antwoordOptiesVanOpgave.innerHTML = `<input type="radio" name="vraag${index}" value="${optie}"> ${opgave.antwoordOpties[optie]} <br>`;
            quizContainer.appendChild(antwoordOptiesVanOpgave);
        }
        */


//ANTWOORDOPTIES
      /*  antwoordOpties.forEach((antwoordOptie)=> { 

        let antwoordOptiesVanOpgave = opgaven.antwoordOpties;

        const antwoordOptiesP = document.createElement("p");
        antwoordOptiesP.classList.add("antwoordOpties");

        console.log(antwoordOptiesP.classList.add("antwoordOpties"));

        antwoordOptiesP.textContent = antwoordOptiesVanOpgave;
        console.log(antwoordOptiesP.textContent = antwoordOptiesVanOpgave);

        quizContainer.appendChild(antwoordOptiesP);
       */     
        
// '{}' dit is een object 
//nu wordt er een loop (iets wat opnieuw gebeurt) gecreeerd met forEach
 /* Dit deel van de code maakt een <div> element aan 
waarin de vraagtekst wordt weergegeven. ${quizVraag.vraag} haalt 
de vraagtekst op uit het quizVraag object en plaatst deze binnen de <div> met de class "vraag".*/
        /*nieuweQuizVraag.innerHTML = 
        `<div class="vraag">${quizVraag.vraag}</div>
        <div class="antwoorden">
            ${quizVraag.antwoorden.map((antwoord, index) => ` 
                <label>
                    <input type="radio" name="vraag${vraagNummer}" value="${index}">
                    ${antwoord}
                </label>
            `).join('')}
        </div>` //met het label element zorgt ervoor dat de antwoorden met radiobuttons klikbaar zijn
        ; */

        // het label element wordt gemaakt voor elke antwoordoptie
        // quivraag.antwoorden.map itereert over elk element van het quizVraag object
        // => betekent ook wel een function
        // 'name' wordt ingesteld op basis van het vraagNummer, elke radiobutton heeft een unieke naam nu
        // de 'value' wordt ingesteld op de index van de antwoordopties in 'antwoorden'
        // 'join' betekent de labels samen voegen tot een groepje, zodat dit als html in de <div> genaamd antwoorden kan worden ingevoegd

        // appendChild is een kind toevoegen aan iets wat je al hebt
        

/*



mijnVragen.forEach( (huidigeVraag, questionNumber) => {
    const antwoordContainer2 = antwoordContainer[questionNumber];
    const selector = `input[name=vraag${questionNumber}]:checked`;
    const antwoordGebruiker = (antwoordContainer.querySelector(selector)) || {}.waarde;

    if(antwoordGebruiker === huidigeVraag.correcteAntwoord){
        nummerCorrect++;

        antwoordContainer[questionNumber].style.color = 'lightgreen';
    }

    else{
        antwoordContainer[questionNumber].style.color = 'red';
    }
});

    resultatenContainer.innerHTML = `${nummerCorrect} out of ${mijnVragen.length}`;



 correcte structuur: functies, variabelen, kick things off, event listeners
 */