$(function() {

	$('#random').on('click', function(e) {

		e.preventDefault();

		$.get('/numbers', function(numbers) {

			$('#numbers').append(numbers.map(function(n) {
				return $('<li>').text(n);
			}))
		})
	})
})