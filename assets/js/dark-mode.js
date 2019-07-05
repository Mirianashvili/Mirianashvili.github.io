$(document).ready(function() {
    setThemeFromCookie();
	function setThemeFromCookie() {
		// Check if the cookie is set 
		if (typeof Cookies.get('mode') !== "undefined" ) {
			$('body').addClass("dark-mode");
			$('#darkmode').attr('checked', true); // toggle change
			console.log('Cookie: dark mode' );
		} else {
			$('body').removeClass("dark-mode");
			$('#darkmode').attr('checked', false); // toggle change
			console.log('Cookie: light mode' );
		}
	}

	$('#darkmode').on('change', function(e){
		if ($(this).is(':checked')) {
			$('body').addClass('dark-mode');
			//Set cookies for 7 days 
			document.getElementById('dark-mode-text').innerText = "Light Mode"
			Cookies.set('mode', 'dark-mode', { expires: 7 });
			
		} else {
			$('body').removeClass('dark-mode');
			//Remove cookies
			document.getElementById('dark-mode-text').innerText = "Dark Mode"
			Cookies.remove('mode');
		}
	});	
});	