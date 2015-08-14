/* global $ */
$(function(){
	$('#login').click(function(){
		$(".login-container").hide();
		$(".app-container").show();
		window.location.hash = "dashboard";
	})
})
