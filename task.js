function setCookie(name, value, daysToLive) {
  	let data = JSON.stringify(value);
 	let cookieString = name + '=' + encodeURIComponent(data);
  	if (typeof daysToLive==='number') {
  		cookieString + 'max-age' + (daysToLive*60*60*24);
  	}
  	document.cookie = cookieString;
}
  
function addToLocalStorage(key, value) {
	if (value === undefined) {
    	localStorage.removeItem('key');
 	} else {
    	localStorage.setItem(key, JSON.stringify(value));
  	}
}

$('#AddToLocal').click(function(){
 	let userData = {
   		name: $('#userName').val(),
  		age: $('#userAge').val()
 	};

	addToLocalStorage('Your Data', userData);
});

$('#AddToCookie').click(function(){
 	let userData = {
    	name: $('#userName').val(),
    	age: $('#userAge').val()
 	};
  
    setCookie('Your Data', userData, 3);
});