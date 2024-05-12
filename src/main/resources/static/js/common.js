/**
 *
 */

const map = document.querySelector("#map");
let map_rows = document.querySelectorAll(".map_row");
const tiles = document.images;

const repaint = async () => {
    for (let i = 0; i < 2; i++) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
};


const map_Click = () => {


};

const map_Move = () => {


  // alert("X = " + screenX() + "Y = " + screenY())
  // document.addEventListener("mousemove", (e) => {
  //   console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
  // });
};

window.addEventListener("load", (e) => {
	let mouse_X;
	let mouse_Y;

	map.addEventListener("click", (e) => {
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
	    alert(`X = ${mouse_X} Y = ${mouse_Y}`);
	    alert(tiles.length);
	    alert(map_rows.length);
	});

	map.addEventListener("pointermove", (e)  => {
	    console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
	    map_rows = document.querySelectorAll(".map_row");
		if (mouse_Y > e.clientY) {
		  console.log("上");
			map.appendChild(map_rows[0]);
		}
		if (mouse_Y < e.clientY) {
		  console.log("下");
			map.insertBefore(map_rows[map_rows.length - 1], map_rows[0]);
		}
		if (mouse_X > e.clientX) {
		  console.log("左");
		}
		if (mouse_X < e.clientX) {
		  console.log("右");
		};
		mouse_X = e.clientX;
		mouse_Y = e.clientY;

		// repaint(); // 画面を再描画して待つ
	});
});


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
