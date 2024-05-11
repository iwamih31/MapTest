/**
 *
 */

const tiles = document.images;
let mouse_X;
let mouse_Y;

const map_Click = () => {
  alert("X = " + mouse_X + " Y = " + mouse_Y);
  alert(tiles.length);
};

const map_Move = () => {


  // alert("X = " + screenX() + "Y = " + screenY())
  // document.addEventListener("mousemove", (e) => {
  //   console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
  // });
};

window.onload = () => {
	document.addEventListener("mousemove", (e)  => {
		console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
		if (mouse_Y > e.clientY) {
		    console.log("上");
		}
		if (mouse_Y < e.clientY) {
		    console.log("下");
		}
		if (mouse_X > e.clientX) {
		    console.log("左");
		}
		if (mouse_X < e.clientX) {
		    console.log("右");
		};
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
	});
};


window.addEventListener("keydown", (e) => {
  const key = e.key;
  switch(key){
    case "ArrowUp":

      break;
    case "ArrowUp":

      break;
    case "ArrowLeft":

      break;
    case "ArrowRight":

      break;
  };
  alert(keyCode);

});



const n3 = document.getElementsByClassName('num3');
for (var i = 0; n3.length; i++){
	let p = n3[i].textContent.replace('\xA5', '');
	if(isFinite(p)){
		n3[i].innerHTML = Number(p).toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"});
	}
};
