/**
 *
 */

// classListに'header'が含まれているエレメントを取得
var head_element = document.getElementsByClassName("header")[0];
// クエリパラメータに応じたcssに切り替える
head_element.classList.replace('bg_skyblue', 'bg_lightgreen');
//head_element.classList.add('bg_pink');
//head_element.style.backgroundColor = 'pink';
//head_element.class = 'header bg_pink';

// ￥マーク3桁区切り
 var n3 = document.getElementsByClassName('num3');
for (var i = 0; n3.length; i++){
	let p = n3[i].textContent.replace('\xA5', '');
	if(isFinite(p)){
		n3[i].innerHTML = Number(p).toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"});
	}
}