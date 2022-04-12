const request = new XMLHttpRequest();

request.onload = function () {
    console.log('All done with request.');
    const data = JSON.parse(this.responseText);
    console.log(data.airdate)
}

request.onerror = function () {
    console.log('Error 404');
    console.log(this);
}

request.open('GET', 'https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1')
request.send();