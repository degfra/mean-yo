'use strict';

angular.module('events').factory('Events', ['$http',
	function($http) {
		// Events service logic
		// ...

		// Public API
		return {
			getNextEvent: function() {
				var url = 'http://api.meetup.com/2/events?status=upcoming&order=time' +
                    '&limited_events=False&group_urlname=Frontend-Meetup-Romandie' +
                    '&desc=false&offset=0&photo-host=public&format=json&page=1' +
                    '&fields=&sig_id=13848777' +
                    '&sig=7aa5d53f450ee5449945e8ee89b8cba8968d9e30&callback=JSON_CALLBACK';

                var request = $http.jsonp(url);
				return request;
			}
		};
	}
]);
