var exports = module.exports = {};

var personInfo = {
	name: "Larry Clem"

	, location: "Dallas"

	, occupations: ["Project Coordinator", "Writer", "QA Coordinator"]

	, hobbies: [{
			name: "Reading",
			type: "Enrichment"
			},
			{
			name: "Writing",
			type: "Expression"
			},
			{
			name: "Drinking",
			type: "Relief"
			}]
}

exports.getName = function (req, res) {
	res.send({name: personInfo.name});
	console.log({name: personInfo.name});
}

exports.getLocation = function (req, res) {
	res.send({location: personInfo.location});
	console.log({location: personInfo.location});
}

exports.getOccupations = function (req, res) {
	res.send({occupations: personInfo.occupations});
	console.log({occupations: personInfo.occupations});
}

exports.getLatestOccupation = function (req, res) {
	res.send({latestOccupation: personInfo.occupations[personInfo.occupations.length -1]});
	console.log({latestOccupation: personInfo.occupations[personInfo.occupations.length -1]});
}

exports.getHobbies = function (req, res) {
	res.send({hobbies: personInfo.hobbies})
}

exports.getHobbiesByType = function (req, res) {
	res.send(personInfo.hobbies[req.params.hobbyType])
}