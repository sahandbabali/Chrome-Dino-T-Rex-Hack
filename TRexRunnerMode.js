

let runnerobj = Runner.prototype.gameOver;


function godmode() {
      Runner.prototype.gameOver = function(){console.log('Saved by JS');}
}


function skinchager() {
      let select = document.getElementById("skins");
      let value = select.options[select.selectedIndex].value;
      console.log(value);

}


function setspeed(speed) {
      let newspeed = speed;
      Runner.instance_.setSpeed(newspeed);
      console.log(`New Speed: ${newspeed}`);

}

function resethacks() {
      Runner.prototype.gameOver = runnerobj;
      console.log('God mode reseted.');
}


// UI
var div = document.getElementById('main-content');
var newdiv = document.createElement( 'div' ); 
newdiv.style.backgroundColor = "#535353";
newdiv.style.color = "white";
newdiv.style.padding = "1em";

newdiv.innerHTML = '<form action="#" method="get"> <p>Menu</p> <span>God Mode</span> <span style="border: 1px solid white; padding: 2px" id="godmode">Activate</span> </br> <span>Speed</span> <input type="text"></input> </br> <span>Skin</span> <select name="skins" id="skins"> <option value="Color">Color</option> <option value="Salad Cat">Salad Cat</option> </select> </form>';
div.parentNode.insertBefore( newdiv, div.nextSibling );

// Remove main message
document.getElementById('main-message').remove();



// Events

document.getElementById("godmode").addEventListener("click", godmode );

document.getElementById("skins").addEventListener("change", skinchager);




