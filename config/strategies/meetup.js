'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	url = require('url'),
	MeetupStrategy = require('passport-meetup').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

module.exports = function() {
	// Use the MeetupStrategy within Passport.
	//   Strategies in passport require a `verify` function, which accept
	//   credentials (in this case, a token, tokenSecret, and Meetup profile), and
	//   invoke a callback with a user object.
	passport.use(new MeetupStrategy({
			consumerKey: config.meetup.clientID,
			consumerSecret: config.meetup.clientSecret,
			callbackURL: config.meetup.callbackURL
		},
		function(req, accessToken, refreshToken, profile, done) {
			// Set the provider data and include tokens

			var providerData = profile._json;
			providerData.accessToken = accessToken;
			providerData.refreshToken = refreshToken;

			// Create the user OAuth profile
			var providerUserProfile = {
				firstName: '',
				lastName: '',
				displayName: profile.displayName,
				email: '',
				username: profile.id,
				provider: profile.provider,
				providerIdentifierField: 'id',
				providerData: providerData
			};

			// Save the user OAuth profile
			users.saveOAuthUserProfile(req, providerUserProfile, done);
		}
	));
};
