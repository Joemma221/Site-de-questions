let questionBox = document.getElementById("question-box");
let reponseBox = document.getElementById("reponse");
let choix1 = document.getElementById("button1");
let choix2 = document.getElementById("button2");

questionBox.style.display = "block";
reponseBox.style.display = "none";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(questions);

let i = 0;
choix1.innerText = questions[i][0];
choix2.innerText = questions[i][1];

let buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => { 
      i++;
        questionsPosees.push(btn.innerText);
        if (i < questions.length) {
            choix1.innerText = questions[i][0];
            choix2.innerText = questions[i][1];
        } else {
            console.log("Questions posées :", questionsPosees);
            questionBox.style.display = "none";
            reponseBox.style.display = "block";
          for (index = 0; index < questionsPosees.length; index++) {
            let liste = document.createElement("li");
            if (questionsPosees[index] === questions[index][0]) {
              liste.innerText = questionsPosees[index] + " au lieu de " + questions[index][1];
              document.getElementById("liste").appendChild(liste);
            } else {
              liste.innerText = questionsPosees[index] + " au lieu de " + questions[index][0];
              document.getElementById("liste").appendChild(liste);
            }
          }
        }
    });
});

