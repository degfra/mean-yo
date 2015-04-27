'use strict';

angular.module('events').controller('EventsController', ['$scope',
	function($scope) {
		$scope.title = 'High Performance WebSocket';
		$scope.event = {
			'name': '"Developing Offline Applications" and "HTML 5 Animations"',
			'time': 1411430400000,
			'event_url': 'http://www.meetup.com/Frontend-Meetup-Romandie/events/221571857/',
			'description': '<p><b>6 pm : "Developing Offline Applications with HTML 5" by Venkat Subraniam</b></p>',
			'venue': {
				'name': 'Rally Software',
				'address_1': '1550 Wynkoop',
				'city': 'Lausanne',
				'state': 'Vaud'
			}
		}
	}
]);
