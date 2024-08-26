function showGif() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';
}
function hideGif() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'none'; // Skrýt GIF
}

let countdown = document.getElementById("countdown")//do tohodle se uklada text do countdown


let seconds = 200//promena
countdown.innerText = seconds

const intervalgg = setInterval(function(){//loop
    seconds--//odpocitavani
    countdown.innerText = seconds
    if(seconds<1){//kdyz sekundy jsou menci nez 1 zastavi se interval
        clearInterval(intervalgg);
        countdown.innerText = ("Bomba vybuchla")//vypise ze bomba vybuchla

        showGif();//ukazat gif
        setTimeout(() => {
            hideGif(); // Zastavit GIF (ve skutečnosti skrytí GIF)
        }, 2200);
        

       
       
    }
}, 1000)//cas v milisekundach



let odpoved1spravne = false;
let odpoved2spravne = false;
let odpoved3spravne = false;


var odpoved1 = document.getElementById('o1');//id elementu s kterym budeme pracovat 01

odpoved1.addEventListener("change", (event) => {//kontroluje jesli se neco nenapsalo do ramecku
   
    if(odpoved1.value == "31,5cm2"){//sem dame spravnou odpoved
        odpoved1.style.backgroundColor = "green"//zmena barvy podle spravnosti odpovedi
        odpoved1spravne = true;//kdyz je odpovet spravne ymeni se na true
        
           if(odpoved1spravne == true, odpoved2spravne == true, odpoved3spravne == true){
            clearInterval(intervalgg);
            countdown.innerText = ("Výborně zachránil jsi stranku :D")//vypise stranka zachranena

        }
        

    }
    else{
        odpoved1.style.backgroundColor = "red"
    }
  });








  var odpoved2 = document.getElementById('o2');//id elementu s kterym budeme pracovat 02

odpoved2.addEventListener("change", (event) => {//kontroluje jesli se neco nenapsalo do ramecku
   
    if(odpoved2.value == "Arpanet"){//sem dame spravnou odpoved
        odpoved2.style.backgroundColor = "green"//zmena barvy podle spravnosti odpovedi
        odpoved2spravne = true;//kdyz je odpovet spravne ymeni se na true

        if(odpoved1spravne == true, odpoved2spravne == true, odpoved3spravne == true){
            clearInterval(intervalgg);
            countdown.innerText = ("Výborně zachránil jsi stranku :D")//vypise stranka zachranena

        }
        


    }
    else{
        odpoved2.style.backgroundColor = "red"
    }
  });

 






  var odpoved3 = document.getElementById('o3');//id elementu s kterym budeme pracovat 03

odpoved3.addEventListener("change", (event) => {//kontroluje jesli se neco nenapsalo do ramecku
   
    if(odpoved3.value == "8"){//sem dame spravnou odpoved
        odpoved3.style.backgroundColor = "green"//zmena barvy podle spravnosti odpovedi
        odpoved3spravne = true;//kdyz je odpovet spravne ymeni se na true

        if(odpoved1spravne == true, odpoved2spravne == true, odpoved3spravne == true){
            clearInterval(intervalgg);
            countdown.innerText = ("Výborně zachránil jsi stranku :D")//vypise stranka zachranena

        }
        

    }
    else{
        odpoved3.style.backgroundColor = "red"
    }
  });

 







