'use strict';

var isArray = require('isarray');
var spawn = require('./spawn-clients');

/**
 * Validate a config object.
 *
 * @throws {TypeError} - Reports any missing inputs.
 * @param  {Object} config - The configuration object.
 * @returns {undefined}
 */
function validate (config) {

	/** Make sure the config object was passed. */
	if (!config) {
		throw new TypeError('Missing configuration object.');
	}

	/** Make sure the panic url is provided. */
	if (typeof config.panic !== 'string') {
		throw new TypeError('Panic server URL "config.panic" not provided.');
	}

	/** Make sure config.clients is an array. */
	if (isArray(config.clients) === false) {
		throw new TypeError('"config.clients" is not an array.');
	}

	var str = JSON.stringify;

	/** Validate the client objects. */
	config.clients.forEach(function (client) {
		if (!client) {
			throw new Error('Client "' + client + '" is not an object.');
		}

		if (!client.type) {
			throw new Error('Missing client.type attribute: ' + str(client));
		}
	});
}

/**
 * Manage panic clients in bulk, either locally or remotely.
 *
 * @class Manager
 */
function Manager () {

	/** Allow usage without `new`. */
	if (!(this instanceof Manager)) {
		return new Manager();
	}
}

Manager.prototype = {
	constructor: Manager,

	/**
	 * Dispatch the request to the manager responsible.
	 *
	 * @param  {Object} config - The configuration object.
	 * @returns {undefined}
	 */
	start: function (config) {

		/** May throw validation errors. */
		validate(config);

		/** Creates the requested clients. */
		spawn(config);
	},
};

module.exports = Manager;
