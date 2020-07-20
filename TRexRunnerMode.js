

let runnerobj = Runner.prototype.gameOver;


function godmode() {
      Runner.prototype.gameOver = function(){console.log('Saved by JS');}
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




godmode();
setspeed(100);

// resethacks();


// UI

var div = document.getElementById('main-content');
var newdiv = document.createElement( 'div' ); 
newdiv.style.backgroundColor = "black";
newdiv.style.color = "white";
newdiv.innerHTML = '<p>Test</p>';
div.parentNode.insertBefore( newdiv, div.nextSibling );


