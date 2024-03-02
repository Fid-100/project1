let btn = document.getElementById('btn')
let flag = true;

function buy() {

	if (flag) {
		btn.style.background = 'red';
		btn.innerHTML = 'В корзине'
		btn.style.width = '100px'
		flag = false;
	}else {
		btn.style.background = 'blue'
		btn.innerHTML = 'купить'
		flag = true;
	}

}

