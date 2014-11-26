#!/usr/bin/env node

var fs = require('fs');
var legislators = require('./data/legislators-current.json');

var legislatorsByThomas = {},
		legislatorsSocialMediaByThomas = {};

process();

function process() {
	legislators.forEach(function(d, i) {
		legislatorsByThomas[d.id.thomas] = i; 
	});

	socialMedia();
	committeeMembership();

	fs.writeFile('legislators.json', JSON.stringify(legislators, null, 2));
}

function socialMedia() {
	console.log("Processing social media...");
	var count = 0;
	var data = require('./data/legislators-social-media.json');
	data.forEach(function(d) {
		var legislator = legislatorForThomas(d.id.thomas);

		if(legislator) {
			count++;
			legislator.social = d.social;
		}
	});

	console.log("Added social media info for %d/%d legislators", count, legislators.length);
}

function committeeMembership() {
	console.log("Processing committee membership...");
	var data = require('./data/committee-membership-current.json');
	for(var key in data) {
		var members = data[key];
		members.forEach(function(member) {
			var legislator = legislatorForThomas(member.thomas);

			if(legislator) {
				if(!legislator.committees) legislator.committees = [];
				legislator.committees.push({
					committee_id: key,
					rank: member.rank,
					title: member.title,
					party: member.party
				});
			}
		});
	}

	console.log("Added committees");
}

function legislatorForThomas(id) {
	return legislators[legislatorsByThomas[id]];
}
