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

// const map_Move = () => {
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
	let move = "";
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
	
	const action = (move) => {
		map_rows = document.querySelectorAll(".map_row");
		if (move === "上") map.appendChild(map_rows[0]);
		if (move === "下") map.insertBefore(map_rows[map_rows.length - 1], map_rows[0]);
		if (move === "左") map_Left();
		if (move === "右") map_right();
		if (move === "中") ;
	};

	const stop = () => {
		alert("stop イベント発動");
	};

	const loop_Start = () => {
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
		// move = "";
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

			default:
				break;
			
		}
		alert(button_Name + "ボタンが押されました");
		alert_Position(event_Data);
	}

	map.addEventListener("click", (e) => {
		move = "中";
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
		alert(`X = ${mouse_X} Y = ${mouse_Y}`);
		alert("総タイル数 = " + tiles.length);
		alert("行の列数 = " + map_rows.length);
		stop();
		setTimeout(() => {
			loop_Start
		}, 3000);
	});

	const loop = setInterval(() => {

		if (move === "") {
			map.addEventListener("pointermove", (e) => {
				console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
				if (mouse_Y > e.clientY) {
					move = "上";
					console.log(move);
				}
				if (mouse_Y < e.clientY) {
					move = "下";
					console.log(move);
				}
				if (mouse_X > e.clientX) {
					move = "左";
					console.log(move);
				}
				if (mouse_X < e.clientX) {
					move = "右";
					console.log(move);
				};
				mouse_X = e.clientX;
				mouse_Y = e.clientY;
				// repaint(); // 画面を再描画して待つ
			});
		}

		button_A.addEventListener("mouseover", (e) => {button("A", e);}); 
		button_B.addEventListener("mouseover", (e) => {button("B", e);});
		button_C.addEventListener("mouseover", (e) => {button("C", e);});
		button_D.addEventListener("mouseover", (e) => {button("D", e);});
		up.addEventListener("mouseover", (e) => {move("上", e);});
		down.addEventListener("mouseover", (e) => {move("下", e);});
		left.addEventListener("mouseover", (e) => {move("左", e);});
		right.addEventListener("mouseover", (e) => {move("右", e);});
			
		window.addEventListener("keydown", (e) => {
			const key = e.key;
			switch(key){
				case "ArrowUp":
					move = "上"
				break;
				case "ArrowUp":
					move = "下";
				break;
				case "ArrowLeft":
					move = "左";
				break;
				case "ArrowRight":
					move = "右";
				break;
			};
			alert(key);
		});

		action(move);

		// if (clicked === true) {
		// 	clearInterval(loop);
		// 	clicked === false;
		// }
	}, 1000);

	if (move === ""){
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
