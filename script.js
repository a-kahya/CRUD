const tableau = document.querySelector('table');
const bouton_enregistrer = document.getElementById('enregistrer')
const bouton_reset = document.getElementById('reset');
const bouton_dashboard = document.getElementById("dashboard");

function enregistrer(){
  const age = document.getElementById('age').value;
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const identifiant = document.getElementById('identifiant').value;

  const tr = document.createElement('tr');
  tableau.appendChild(tr);

  if(age > 0 && identifiant != NaN){
    
    const td_nom = document.createElement('td');
    td_nom.innerText = nom;
    tr.appendChild(td_nom);

    const td_age = document.createElement('td')
    td_age.innerText = age;
    tr.appendChild(td_age);

    const td_email = document.createElement('td');
    td_email.innerText = email;
    tr.appendChild(td_email);
    
    const td_identifiant = document.createElement('td');
    td_identifiant.innerText = identifiant;
    tr.appendChild(td_identifiant);


  } else {
    console.log("Informations invalides")
  }

}

bouton_enregistrer.addEventListener('click', enregistrer);

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

