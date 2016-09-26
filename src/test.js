'use strict';
const { describe, it, beforeEach, afterEach } = require('mocha');
const expect = require('expect');
const { spyOn } = expect;
const ChildProcess = require('child_process');
const spy = spyOn(ChildProcess, 'fork');
const Manager = require('./Manager');

describe('A manager', () => {

	let manager;

	beforeEach(() => {
		manager = new Manager();
	});

	afterEach(() => spy.reset());

	it('should be constructable without `new`', () => {
		const manager = Manager();
		expect(manager).toBeA(Manager);
	});

	describe('`.start()` call', () => {

		it('should throw if given no input', () => {
			const fail = () => manager.start();
			expect(fail).toThrow(/Missing configuration object/i);
		});

		it('should throw if not given a panic url', () => {
			const fail = () => manager.start({ clients: [] });
			expect(fail).toThrow(/config.panic/i);
		});

		it('should throw if not given a clients array', () => {
			const fail = () => manager.start({ panic: 'url' });
			expect(fail).toThrow(/config.clients/i);
		});

		it('should throw if a client is not an object', () => {
			const fail = () => manager.start({
				clients: [null],
				panic: 'url',
			});
			expect(fail).toThrow(/not an object/i);
		});

		it('should throw if a client is missing the type', () => {
			const fail = () => manager.start({
				clients: [{ noType: true }],
				panic: 'url',
			});
			expect(fail).toThrow(/client.type/i);
		});

		it('should spawn the requested processes', () => {
			manager.start({
				clients: [{ type: 'node' }],
				panic: 'url',
			});
			expect(spy).toHaveBeenCalled();
		});

	});

});
