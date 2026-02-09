const tableau = document.querySelector('table');
const bouton_enregistrerProf = document.getElementById('enregistrerProf');
const bouton_reset = document.getElementById('reset');
const bouton_dashboard = document.getElementById("dashboard");
const bouton_enregistrerEleve = document.getElementById("enregistrerEleve");
const bouton_effacerUtilisateur = document.getElementById("bouton_effacer");

function enregistrerProf(){
  const age1 = document.getElementById('age1').value;
  const nom1 = document.getElementById('nom1').value;
  const email1 = document.getElementById('email1').value;
  const identifiant1 = document.getElementById('identifiant1').value;

  const tr = document.createElement('tr');
  tableau.appendChild(tr);

  if(age1 > 0 && !isNaN(identifiant1)){
    
    const td_nom = document.createElement('td');
    td_nom.innerText = nom1;
    tr.appendChild(td_nom);

    const td_age = document.createElement('td')
    td_age.innerText = age1;
    tr.appendChild(td_age);

    const td_email = document.createElement('td');
    td_email.innerText = email1;
    tr.appendChild(td_email);
    
    const td_identifiant = document.createElement('td');
    td_identifiant.innerText = identifiant1;
    tr.appendChild(td_identifiant);
  } else {
    console.log("Informations invalides")
  }
}
bouton_enregistrerProf.addEventListener('click', enregistrerProf);

function enregistrerEleve(){
  const age2 = document.getElementById('age2').value;
  const nom2 = document.getElementById('nom2').value;
  const email2 = document.getElementById('email2').value;
  const identifiant2 = document.getElementById('identifiant2').value;

  const tr = document.createElement('tr');
  tableau.appendChild(tr);

  if(age2 > 0 && !isNaN(identifiant2)){
    
    const td_nom = document.createElement('td');
    td_nom.innerText = nom2;
    tr.appendChild(td_nom);

    const td_age = document.createElement('td')
    td_age.innerText = age2;
    tr.appendChild(td_age);

    const td_email = document.createElement('td');
    td_email.innerText = email2;
    tr.appendChild(td_email);
    
    const td_identifiant = document.createElement('td');
    td_identifiant.innerText = identifiant2;
    tr.appendChild(td_identifiant);

    const td_action = document.createElement('td');
    td_action.innerHTML = bouton_effacerUtilisateur;
    tr.appendChild(td_action);

  } else {
    console.log("Informations invalides")
  }
}
bouton_enregistrerEleve.addEventListener('click', enregistrerEleve);


function reset(){
  //on veut qu'on reset tout le form d'un coup, pas un input un à un donc:
  document.querySelector("form").reset();
}
bouton_reset.addEventListener('click', reset);


function counter(){
  const tr_count = document.querySelectorAll('tr');
  const p = document.querySelector('p');
  p.innerText = 'Total des inscrits : ' + (tr_count.length-1);
}
bouton_dashboard.addEventListener("click", counter);

function effacerUtilisateur(){

}

bouton_effacerUtilisateur.addEventListener("click", effacerUtilisateur);