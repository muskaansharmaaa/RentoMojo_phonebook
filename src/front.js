import $ from 'jquery';


$(document).ready(function() {
	
  
	$('.js-insert').on('click', function(event) {
		event.preventDefault();
    $('.js-form').toggleClass('is-visible');
		$('.delete-row').removeClass('is-visible');
		$('.js-form-overlay').addClass('is-visible');
	}); 


	/*Form cancel button event*/
	
	$('.js-form').on('click', '.js-cancel', function(event) {
		$(this).closest('form').find("input, textarea").val("");
		$('.js-form').removeClass('is-visible');
		$('.js-form-overlay').removeClass('is-visible');
	}); 

	/**
	*	Form submit button event*/
	
	$('.js-form').submit(function(event) {
		event.preventDefault();
		$('.contact-list').prepend('<tr class="contact"><td class="delete-row"><span class="glyphicon glyphicon-remove"></span></td><td>' +
		$('.form-name').val()+'</td><td>' +
		$('.form-phone').val()+'</td><td>' +
		$('.form-email').val()+'</td><td>' +
		$('.form-dob').val()+'</td></tr>');
		$(this).closest('form').find("input, textarea").val("");
		$('.js-form').removeClass('is-visible');
		$('.js-form-overlay').removeClass('is-visible');
	});

});