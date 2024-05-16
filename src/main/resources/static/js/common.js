/**
 *
 */


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
	let row_Size = 15;
	let column_Size = 15;
	let map_rows = document.querySelectorAll(".map_row");
	// let tiles = document.images;
	// let clicked = false;
	let mode = "○";
	let mouse_X = e.clientX;;
	let mouse_Y = e.clientY;


	const map_Up = () => {
		up.classList.add("click_button");
		down.classList.remove("click_button");
		left.classList.remove("click_button");
		right.classList.remove("click_button");
		map.insertBefore(map_rows[map_rows.length - 1], map_rows[0]);
	}
	const map_Down = () => {
		up.classList.remove("click_button");
		down.classList.add("click_button");
		left.classList.remove("click_button");
		right.classList.remove("click_button");
		map.appendChild(map_rows[0]);
	}
	const map_Left = () => {
		up.classList.remove("click_button");
		down.classList.remove("click_button");
		left.classList.add("click_button");
		right.classList.remove("click_button");
		map_rows.forEach(map_row => {
			pieces = map_row.querySelectorAll(".map_piece");
			map_row.insertBefore(pieces[pieces.length - 1], pieces[0]);
		});
	}
	const map_right = () => {
		up.classList.remove("click_button");
		down.classList.remove("click_button");
		left.classList.remove("click_button");
		right.classList.add("click_button");
		map_rows.forEach(map_row => {
			pieces = map_row.querySelectorAll(".map_piece");
			map_row.appendChild(pieces[0]);
		});
	}

	const map_stop = () => {
		up.classList.remove("click_button");
		down.classList.remove("click_button");
		left.classList.remove("click_button");
		right.classList.remove("click_button");
	}
	
	const action = (mode) => {
		map_rows = document.querySelectorAll(".map_row");
		if (mode === "上") map_Up();
		if (mode === "下") map_Down();
		if (mode === "左") map_Left();
		if (mode === "右") map_right();
		if (mode === "○") map_stop();
	};

	const map_View_Range = (row_Size, column_Size) => {
		map_rows = document.querySelectorAll(".map_row");
		let offset = (map_rows.length - row_Size) / 2;
		for (let i = 0; i < map_rows.length; i++) {
			let map_row = map_rows[i];
			if (i < offset || offset + row_Size < i) {
				map_row.classList.add("display_none");
			} else {
				map_row.classList.remove("display_none");
				const pieces = map_row.querySelectorAll(".map_piece");
				offset = (pieces.length - column_Size) / 2;
				for (let j = 0; j < pieces.length; j++) {
					let piece = pieces[j];
					if (j < offset || offset + column_Size < j) {
						piece.classList.add("display_none");
					} else {
						piece.classList.remove("display_none");
					}
				}
			}
		}
	};

	const stop = (event_Data) => {
		alert("stop イベント発動");
		mouse_X = event_Data.clientX;
		mouse_Y = event_Data.clientY;
		alert(`X = ${mouse_X} Y = ${mouse_Y}`);
		alert("総タイル数 = " + tiles.length);
		alert("行の列数 = " + map_rows.length);
	};

	const position = (event_Data) => {
		return `X = ${event_Data.clientX} Y = ${event_Data.clientY}`;
	}

	const button = (button_Name, event_Data) => {
		switch (button_Name) {
			case "A":
			case "B":
			case "C":
				case "D":
				case "○":
				alert(button_Name + "ボタンが押されました");
				alert_Position(event_Data);
				break;
			case "上":
			case "下":
			case "左":
			case "右":
				move(button_Name);
				break;
			default:
				break;
			
		}
		console.log(button_Name + "ボタンが押されました");
		console.log(position(event_Data));
	}

	const move = (destination) => {
		if (destination !== mode) {
			mode = destination;
			console.log("移動先 = " + destination);
			walk();
		}
	}

	// center.addEventListener("click", (e) => {
	// 	if (clicked === false) {
	// 		clicked = true;
	// 		mouse_X = e.clientX;
	// 		mouse_Y = e.clientY;
	// 		alert(`クリック時の座標 X = ${mouse_X} Y = ${mouse_Y}`);
	// 		stop(e);
	// 		move("移動");
	// 	} else {
	// 		clicked = false;
	// 	}
	// 	// walk();
	// });

	button_A.addEventListener("click", (e) => { button("A", e); });
	button_B.addEventListener("click", (e) => { button("B", e); });
	button_C.addEventListener("click", (e) => { button("C", e); });
	button_D.addEventListener("click", (e) => { button("D", e); });
	center.addEventListener("click", (e) => { button("○", e); });
	up.addEventListener("mouseover", (e) => { button("上", e); });
	down.addEventListener("mouseover", (e) => { button("下", e); });
	left.addEventListener("mouseover", (e) => { button("左", e); });
	right.addEventListener("mouseover", (e) => { button("右", e); });
	
	const walk = () => {
		up.addEventListener("mouseout", () => { move("○"); });
		down.addEventListener("mouseout", () => { move("○"); });
		left.addEventListener("mouseout", () => { move("○"); });
		right.addEventListener("mouseout", () => { move("○"); });
		const current_Mode = mode;
		mouse_X = e.clientX;
		mouse_Y = e.clientY;
		setTimeout(() => {
			const loop = setInterval(() => {
				action(mode);
				if (current_Mode !== mode) {
					clearInterval(loop);
				}
			}, 1000);
		}, 2000);
	}

	// map.addEventListener("pointermove", (e) => {
	// 	if (mode === "移動") {
	// 		console.log(`Mouse position: X = ${e.clientX}, Y = ${e.clientY}`);
	// 		if (mouse_Y > e.clientY) move("上");
	// 		if (mouse_Y < e.clientY) move("下");
	// 		if (mouse_X > e.clientX) move("左");
	// 		if (mouse_X < e.clientX) move("右");
	// 		if (mouse_X == e.clientX) move("○");
	// 		mouse_X = e.clientX;
	// 		mouse_Y = e.clientY;
	// 		// repaint(); // 画面を再描画して待つ
	// 	}
	// });


			
	window.addEventListener("keydown", (e) => {
		// alert(e.key + " キーが押されました");
		console.log(e.key + " キーが押されました");
		switch (e.key){
			case "ArrowUp"   : move("上"); break;
			case "ArrowDown" : move("下"); break;
			case "ArrowLeft" : move("左"); break;
			case "ArrowRight": move("右"); break;
		};
	});

	// if (mode === ""){
	// 	walk();
	// }
	map_View_Range(row_Size, column_Size);
	
});



const n3 = document.getElementsByClassName('num3');
for (var i = 0; n3.length; i++){
	let p = n3[i].textContent.replace('\xA5', '');
	if(isFinite(p)){
		n3[i].innerHTML = Number(p).toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"});
	}
};
