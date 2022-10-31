const btn = document.getElementById('btn');
const f1 = document.getElementsByClassName('feature');


const swot = document.getElementsByClassName('feature__desc');

btn.addEventListener('click', function onClick() {
    const drzaveSelect = document.getElementById('zemlje');
    const drzava = drzaveSelect.selectedIndex;

  if (drzava==0){
    swot[0].innerHTML = "Regulisani zakoni <br> Najveća povrišina obradivog zemljišta i broj stanovnika. <br> Jeftina radna snaga. <br> THC Limit <0.3%";
    swot[1].innerHTML = "Visoka cena nekretnine.";
    swot[2].innerHTML = "Najveća površina obradivog neiskorišćenog zemljišta. <br> Visoka isplativost. <br> Potencijal za kapital.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode.";
  } else if (drzava==1){
    swot[0].innerHTML = "Regulisani zakoni sa vise olakšica. <br>  Dostupnost svih vrsta transporta. <br> Ćlanica EU. <br> Niska cena poljoprivrednog <br> zemljišta.";
    swot[1].innerHTML = "Visoka cena nekretnine i radne snage.";
    swot[2].innerHTML = "Svest o konoplji je na zavidnom nivou. <br> Visoka isplativost. <br> Potencijal za kapital.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode. ";
  }else if (drzava==2){
    swot[0].innerHTML = "Niska cena nekretnina.";
    swot[1].innerHTML = "Mala površina obradivog područja. <br> Smanjenje diplomiranih studenata.";
    swot[2].innerHTML = "Razvijen turizam koji se može iskoristiti kao poslovna prilika za veleprodaju.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode. <br> Neprohodni predeli.";
  }else if (drzava==3){
    swot[0].innerHTML = "Najmanja prosečna bruto plata. <br> ";
    swot[1].innerHTML = "Mali broj diplomiranih studenata. <br> Zakoni nisu u potpunosti regulisani. <br> Dostupnost transporta.";
    swot[2].innerHTML = "Niska cena radne snage i nerazvijeno trzište otvara priliku za monopolom.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode. <br> Zakonske regulative.";
  }else if (drzava==4){
    swot[0].innerHTML = "Najjeftinije nekretnine. <br> Površina obradivog zemljišta.";
    swot[1].innerHTML = "Smanjenje diplomiranih studenata. <br> Dozvoljeno samo na teritoriji Republike Srpske ali ne i na ostatku teritorije BiH. ";
    swot[2].innerHTML = "Nisu potrebna velika ulaganja. <br> Nerazvijeno tržište.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode.";
  }
  else if (drzava==5){
    swot[0].innerHTML = "Članica EU. <br> Jasne zakonske regulative. ";
    swot[1].innerHTML = "Najskuplja radna snaga. <br> Najmanja površina obradivog zemljišta.";
    swot[2].innerHTML = "Članica EU dug niz godina što je omogućilo državi da se razvije, kako i poslovno tako i društveno.";
    swot[3].innerHTML = "Mali broj kompetitora. <br> Vremenske nepogode.";
  }
  

  f1[0].style.visibility = "visible";
  f1[1].style.visibility = "visible";
  f1[2].style.visibility = "visible";
  f1[3].style.visibility = "visible";
  f1[4].style.visibility = "visible";
});
