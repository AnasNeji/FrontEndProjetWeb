var flouss;
var total_cote = 1;
var nb_matchs = 0;
var winning;
var Tabtest=[];  

const A=document.createElement("div");
A.innerHTML="<h4 style='padding:5%;'>Fiche de  paris :</h4><p class='text-center' style='padding:10%; background-color: gray; '>Cliquez sur les cotes pour ajouter à votre fiche de pari</p>"
if(nb_matchs==0){document.getElementById("chay7a").appendChild(A); } 


function createDiv(type, choix,cote,id) {
  if(setrouve(id,Tabtest)){
      alert("Le match est déjà parié, veuillez le supprimer d'abord suppriemr le d'abord");
  }
 else {Tabtest.push(id);
  if(nb_matchs==0) document.getElementById("chay7a").removeChild(A);
  total_cote *= cote;
  winning = total_cote;
  var deletee = document.createElement("button");
  deletee.textContent = "X";
  deletee.classList.add("btn", "btn-danger", "btn-small", "text-center");
  deletee.style.padding = "0%";


  var monbet = document.createElement("div");
  var lematch = document.createElement("div");

  lematch.innerHTML = "<p class='text-center' style='padding:8%;background-color:#d3d0d0;margin-bottom:0%'><strong>Espérance Sportive de Tunis - Club Africain</strong></p>";
  lematch.style.border = "2px solid #d3d0d0";
  lematch.style.backgroundColor = "white";

  monbet.innerHTML = "<p style='background-color:white;padding-top:3%;margin-bottom:0%;'> " + "<strong>" + type + "</strong>" + ":&nbsp" + choix + "<a style='float:right;'><strong>" + cote.toFixed(2) + "</strong></a></p>";

  lematch.appendChild(deletee);
  lematch.appendChild(monbet);

  document.getElementById("matchs").appendChild(lematch);
  deletee.addEventListener("click", (removee) => {
    var index=Tabtest.indexOf(id);
    if(index>-1) Tabtest.splice(index,1);
    nb_matchs--;
    total_cote /= cote;
    winning = total_cote;
    updateFlouss();
    if (nb_matchs == 0) {
      document.getElementById("mch_chay7a").removeChild(flouss);
      document.getElementById("chay7a").appendChild(A);
    }
    document.getElementById("matchs").removeChild(lematch);
  });

  if (nb_matchs == 0) {
    flouss = document.createElement("form");
    flouss.innerHTML = "<br><input type='float' value='1' placeholder='Mise Total' id='total-stake' name='total-stake' style='width:90px;'>&nbsp&nbsp&nbsp";
    var winningDisplay = document.createElement("span");
    winningDisplay.innerHTML = winning.toFixed(2) + "&nbspTND&nbsp";
    flouss.appendChild(winningDisplay);
    flouss.innerHTML += "<button type='submit' class='btn btn-danger text-center'>Parier</button>";
    document.getElementById("mch_chay7a").appendChild(flouss);
    flouss.addEventListener("submit", (event) => {
      event.preventDefault();
      if (document.getElementById('total-stake').value < 0.5) {
        alert('Minimum mise=0.5');
      } else {
        /*mabda2iyan*/ window.location.href="Bet.html";
      }
    });
  } else {
    updateFlouss();
  }
  console.log(document.getElementById("total-stake").value);
  const totalStakeInput = document.getElementById("total-stake");

  totalStakeInput.addEventListener("input", () => {
    updateFlouss();
  });

  nb_matchs++;
}
}


function updateFlouss() {
  const totalStakeInput = document.getElementById("total-stake");
  const totalStake = parseFloat(totalStakeInput.value);
  const winningDisplay = flouss.querySelector("span");
  winning = totalStake * total_cote;
  winningDisplay.innerHTML = winning.toFixed(2) + "&nbspTND&nbsp";
}


function setrouve(x,tab){
  var i=0;
  var b=0;
  while((b==0)&&(i<tab.length))
    {if(tab[i]==x)
      {b=1;
       return(1);}
     else i++; 
    }
  return(0);  
    }