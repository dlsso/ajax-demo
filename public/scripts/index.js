$(function() {

	$('#random').on('click', function(e) {

		e.preventDefault();

		$.get('/numbers', function(numbers) {

			$('#numbers').append(numbers.map(function(n) {
				return $('<li>').text(n);
			}))
		})
	})

	$('#submitt').on('click', function(e) {

		e.preventDefault();

		$.post('/numbers', {n:$('#userNumber').val()}, function(total) {

			$('form').append('<p> Total: '+ total )

		})
	})
})