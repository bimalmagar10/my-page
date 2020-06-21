const navButtons = document.querySelector('#nav-btns').children;



for(i=0;i < navButtons.length;i++){
	for(j=0;j< navButtons.length;j++){
		navButtons[j].classList.remove('active');
		console.log(navButtons[j]);
	}

}