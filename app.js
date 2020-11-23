const btn = document.getElementById('btn');
const input = document.getElementById('input');

const stopbtn = document.getElementById('stopbtn');


/*window.addEventListener('DOMContentLoaded', function () {
    alert(`Note: This just a Demo and sometime this programme might not work depending upon the browser you're currently using!!! If you're using Opera mini browser, this programme sometime won't work. Try use Chrome or Firefox browser.`)
})*/

let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = input.value;
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 0.7;

btn.addEventListener("click", function () {
    window.speechSynthesis.speak(speech);
    if (input.value == "") {
        alert("there's no text inside text box. please type in a text and press the speak button below");

        btn.style.display = "flex";
    }else{
        window.speechSynthesis.speak(speech);
        btn.style.display = "none";
        stopbtn.style.display = "flex";
    }
   
});


stopbtn.addEventListener("click", function () {
   
    window.speechSynthesis.cancel();
    this.style.display = "none";
    btn.style.display = "flex";
});