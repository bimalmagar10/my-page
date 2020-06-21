const navButtons = document.querySelector('#nav-btns').children;
const items = document.querySelector('.favourites-gallery').children;
const navActive = document.querySelector('.sidenav').children;
console.log(navActive.length);
//sidenav js here
for (var i = 0; i < navActive.length; i++) {
	navActive[i].addEventListener("click",function(){
		for (var j = 0; j < navActive.length; j++) {
			navActive[j].classList.remove('nav-active');
		}
		this.classList.add('nav-active');
        
	});
	
}
//topnav js here
function myFunction() {
		  var x = document.getElementById("myLinks");
		  if (x.style.display === "block") {
		    x.style.display = "none";
		  } else {
		    x.style.display = "block";
		  }
		}
//favourites section js here
for(k=0; k < items.length;k++){
		
		if (items[k].getAttribute("data-id") === "movies") {
			items[k].style.display="block";
		} else {
			items[k].style.display="none";
		}
		
	}

for(i=0;i < navButtons.length;i++){
	navButtons[i].addEventListener("click",function(){
		for(j=0;j< navButtons.length;j++){
		navButtons[j].classList.remove('active');
		
	}
	this.classList.add('active');
	const target = this.getAttribute('data-target');
	for(k=0; k < items.length;k++){
		items[k].style.display="none";
		if (target === items[k].getAttribute("data-id")) {
			items[k].style.display="block";
		}

	}

});
}



