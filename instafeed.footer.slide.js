$(document).ready(function(){
	var instaFeed = new Instafeed({
			      get: 'user',
			      userId: 1577157414,
        		  accessToken: '610124342.1677ed0.c3f27fd84a494c2e92742d43c5ffb39c',
			      target: 'feed',
			      sortBy: 'most-liked',
			      limit: 200,
			      resolution: 'thumbnail'
});	instaFeed.run();
});