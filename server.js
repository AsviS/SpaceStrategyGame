var express = require('express');

var server = express();


var http = require('http');

class Space {
	var id = 0;
	var size,ships, planets, alliances, users, wars, map;
	constructor(size) {
		this.ships = {};
		this.planets = {};
		this.alliances = {};
		this.users = {};
		this.wars = {};
		this.map = {};
		this.size = size;
	}

	function getid() {
		id += 1;
		return id;
	}	
	
	function addAlliance(alliance) {
		this.alliances[alliance.id] = alliance;
	}
	
	function addWar(war) {
		this.wars[war.id] = war;
	}	

	function addShip(ship) {
		this.map[ship.location] = ship.id;
		this.ships[ship.id] = ship;
	}

	function addUser(user) {
		this.users[user.id] = this.user;
	}	

	function addPlanet(planet) {
		this.planets[planet.id] = this.planet;
		this.map[planet.location] = planet.id;
	}

	function generateLocation() {
		var try = [Math.floor(Math.random()*this.size),Math.floor(Math.random()*this.size),Math.floor(Math.random()*this.size)];
		while(this.map[try] !== underfined) {
		try = [Math.floor(Math.random()*this.size),Math.floor(Math.random()*this.size),Math.floor(Math.random()*this.size)];
		}
		return try;
	}
}

class User {
	var id,username,ships,planets,money;
	constructor(username, space) {
		this.id = space.getid();
		var startShip = new Ship(space.generateLocation(), 10, 100, username, 'Pilot', space);
		space.addShip(startShip)
		this.ships = {startShip.id: startShip};
		this.planets = {};
		this.money = 1000;
	}
}

class Ship {
	var id, location, damage, shield, resources, username, shipname;
	constructor(location,damage,shield, username, shipname, space) {
		this.id = space.getid();
		this.location = location;
		this.damage = damage;
		this.shield = shield;
		this.resources = {'building': 1000};
		this.username = username;
		this.shipname = shipname;
	}
}

var space = new Space();

server.get('/',function(req,res) {
	res.end('Welcome to space');
});


http.createServer(server).listen(80);
