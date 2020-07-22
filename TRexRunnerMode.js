

let runnerobj = Runner.prototype.gameOver;


function godmode() {
      Runner.prototype.gameOver = function(){console.log('Saved by JS')};
      document.getElementById("godmode").innerText = "Activated";
}


function skinchager() {
      let select = document.getElementById("skins");
      let value = select.options[select.selectedIndex].value;
      console.log(value);

}


function setspeed() {
      let newspeed = document.getElementById("speedti").value;
      Runner.instance_.setSpeed(newspeed);
      console.log(`New Speed: ${newspeed}`);

}

function resethacks() {
      Runner.prototype.gameOver = runnerobj;
      console.log('God mode reseted.');
}



// Remove main message
document.getElementById('main-message').remove();


// UI
var div = document.getElementById('main-content');
var newdiv = document.createElement( 'div' ); 
newdiv.style.backgroundColor = "#535353";
newdiv.style.color = "white";
newdiv.style.padding = "1em";

newdiv.innerHTML = '<form action="#" method="get"> <p>Menu</p> <span>God Mode</span> <span  style="border: 1px solid white; padding: 2px; cursor: pointer" id="godmode">Activate</span> </br> <span>Speed</span> <input id="speedti" type="text"></input> </br> <span>Skin</span> <select name="skins" id="skins"> <option value="Color">Color</option> <option value="Salad Cat">Salad Cat</option> </select> </form>';
div.parentNode.insertBefore( newdiv, div.nextSibling );


// Events
document.getElementById("godmode").addEventListener("click", godmode );
document.getElementById("skins").addEventListener("change", skinchager);

document.getElementById("speedti").value = Runner.instance_.currentSpeed;
document.getElementById("speedti").addEventListener("change", setspeed );
