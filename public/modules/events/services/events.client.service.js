'use strict';

angular.module('events').factory('Events', ['$http',
	function($http) {
		// Public API
		return {
			getNextEvent: function() {
				var url = 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json' +
					'&limited_events=False&topic=angular&photo-host=public&page=1&radius=25.0&status=upcoming' +
					'&desc=false&sig_id=140800322&sig=463ba5f646dc7b123868a6c10358ab347f0c6d0d&callback=JSON_CALLBACK';

				var returnFirstElement = function (data, headers) {
						return data.results[0];
					};

                var request = $http.jsonp(url, {transformResponse : returnFirstElement});

                request.success(function(data, status, headers, config) {
                    console.log('SUCCESS');
                    console.log(data);
                });
                request.error(function(data, status, headers, config) {
                    console.log('ERROR');
                    console.log(data);
                });

				return request;
			}
		};
	}
]);
