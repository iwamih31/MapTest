/**
 *
 */


// const repaint = async () => {
//     for (let i = 0; i < 2; i++) {
//         await new Promise(resolve => requestAnimationFrame(resolve));
//     }
// };

// const map_Click = () => {
// };

// const map_mode = () => {
//   // alert("X = " + screenX() + "Y = " + screenY())
//   // document.addEventListener("mousemove", (e) => {
//   //   console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
//   // });
// };

window.addEventListener("load", (e) => {

	const map = document.querySelector("#map");
	const button_A = document.querySelector("#A");
	const button_B = document.querySelector("#B");
	const button_C = document.querySelector("#C");
	const button_D = document.querySelector("#D");
	const up = document.querySelector("#up");
	const down = document.querySelector("#down");
	const left = document.querySelector("#left");
	const right = document.querySelector("#right");
	let map_rows = document.querySelectorAll(".map_row");
	let tiles = document.images;
	// let clicked = false;
	let mode = "";
	let mouse_X = e.clientX;;
	let mouse_Y = e.clientY;

	const map_Left = () => {
		map_rows.forEach(map_row => {
			pieces = map_row.querySelectorAll(".map_piece");
			map_row.appendChild(pieces[0]);
		});
	}
	const map_right = () => {
		map_rows.forEach(map_row => {
			pieces = map_row.querySelectorAll(".map_piece");
			map_row.insertBefore(pieces[pieces.length - 1], pieces[0]);
		});
	}
	
	const action = (mode) => {
		map_rows = document.querySelectorAll(".map_row");
		if (mode === "上") map.appendChild(map_rows[0]);
		if (mode === "下") map.insertBefore(map_rows[map_rows.length - 1], map_rows[0]);
		if (mode === "左") map_Left();
		if (mode === "右") map_right();
		if (mode === "中") ;
	};

	const stop = () => {
		alert("stop イベント発動");
	};

	const loop_Start = () => {
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
		// mode = "";
		loop();
	};

	const alert_Position = (event_Data) => {
		alert(`X = ${event_Data.clientX} Y = ${event_Data.clientY}`);
	}

	const button = (button_Name, event_Data) => {
		switch (button_Name) {
			case "A":

				break;
			case "B":

				break;
			case "C":

				break;
			case "D":

				break;
			case "上":
			case "下":
			case "左":
			case "右":
			case "○":
				move(button_Name);
				break;
			default:
				break;
			
		}
		alert(button_Name + "ボタンが押されました");
		alert_Position(event_Data);
	}

	const move = (destination) => {
		mode = destination;
		console.log("移動先 = " + destination);
	}

	map.addEventListener("click", (e) => {
		move("○");
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
		alert(`クリック時の座標 X = ${mouse_X} Y = ${mouse_Y}`);
		alert("総タイル数 = " + tiles.length);
		alert("行の列数 = " + map_rows.length);
		stop();
		setTimeout(() => {
			loop_Start
		}, 3000);
	});

	const loop = setInterval(() => {

		if (mode === "") {
			map.addEventListener("pointermove", (e) => {
				console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
				if (mouse_Y > e.clientY) move("上");
				if (mouse_Y < e.clientY) move("下");
				if (mouse_X > e.clientX) move("左");
				if (mouse_X < e.clientX) move("右");
				if (mouse_X == e.clientX) move("○");
				mouse_X = e.clientX;
				mouse_Y = e.clientY;
				// repaint(); // 画面を再描画して待つ
			});
		}

		button_A.addEventListener("mouseover", (e) => {button("A", e);}); 
		button_B.addEventListener("mouseover", (e) => {button("B", e);});
		button_C.addEventListener("mouseover", (e) => {button("C", e);});
		button_D.addEventListener("mouseover", (e) => {button("D", e);});
		up.addEventListener("mouseover", (e) => { button("上", e);});
		down.addEventListener("mouseover", (e) => { button("下", e);});
		left.addEventListener("mouseover", (e) => { button("左", e);});
		right.addEventListener("mouseover", (e) => { button("右", e); });
		right.addEventListener("mouseover", (e) => { button("○", e); });
			
		window.addEventListener("keydown", (e) => {
			alert(e.key + " キーが押されました");
			switch (e.key){
				case "ArrowUp"   : move("上"); break;
				case "ArrowDown" : move("下"); break;
				case "ArrowLeft" : move("左"); break;
				case "ArrowRight": move("右"); break;
			};
		});

		action(mode);

		// if (clicked === true) {
		// 	clearInterval(loop);
		// 	clicked === false;
		// }
	}, 1000);

	if (mode === ""){
		loop();
	}
	
});



const n3 = document.getElementsByClassName('num3');
for (var i = 0; n3.length; i++){
	let p = n3[i].textContent.replace('\xA5', '');
	if(isFinite(p)){
		n3[i].innerHTML = Number(p).toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"});
	}
};
