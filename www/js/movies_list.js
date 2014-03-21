var serviceURL = "http://sonyad-al.com/InAppCinemaTickets/";

var movies;

$('#moviesListPage').bind('pageinit', function(event) {
	getMoviesList();
});

function getMoviesList() {
	$.getJSON(serviceURL + 'movies_list.php', function(data) {
		$('#moviesList li').remove();
		movies = data.movies;
		$.each(movies, function(index, movie) {
			$('#moviesList').append('<li><a href="moviedetails.html?id=' + movie.movie_id + '">' +
					'<img src="pics/' + movie.image + '.jpg"/>' +
					'<h4>' + movie.title + '</h4>' +
					'<p>' + movie.director + '</p>' +
					'<p>' + movie.stars + '</p>' +
					'<p>' + movie.duration + '</p>' +
					'</a></li>');
		});
		$('#moviesList').listview('refresh');
	});
}