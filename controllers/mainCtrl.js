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
			type: "relief"
			}]
}

exports.getName = function (req, res) {
	res.send({name: personInfo.name});
	
}

exports.editName = function (req, res) {
	personInfo.name = req.body.name;
	res.send({name: personInfo.name});

}

exports.getLocation = function (req, res) {
	res.send({location: personInfo.location});
	console.log({location: personInfo.location});
}

exports.editLocation = function (req, res) {
	personInfo.location = req.body.location;
	res.send({location: personInfo.location});
}

exports.getOccupations = function (req, res) {
	var sortedArr = personInfo.occupations;
	if (req.query.order === 'desc'){
		sortedArr.sort();
		res.send({occupations: sortedArr});
	}
	else if (req.query.order === 'asc'){
		sortedArr.sort().reverse();
		res.send({occupations: sortedArr});
	}
	else {
	res.send({occupations: personInfo.occupations});
	console.log({occupations: personInfo.occupations});
	}
}

exports.addOccupation = function (req, res) {
	personInfo.occupations.push(req.body.occupation);
	res.send({occupations: personInfo.occupations});
}

exports.getLatestOccupation = function (req, res) {
	res.send({latestOccupation: personInfo.occupations[personInfo.occupations.length -1]});
	console.log({latestOccupation: personInfo.occupations[personInfo.occupations.length -1]});
}

exports.getHobbies = function (req, res) {
	res.send({hobbies: personInfo.hobbies})
}

exports.addHobby = function (req, res) {
	personInfo.hobbies.push(req.body);
	res.send({hobbies: personInfo.hobbies});
}

exports.getHobbiesByType = function (req, res) {
	var hobbyType = req.params.hobbyType;
	for (var i = 0; i < personInfo.hobbies.length; i ++) {
		if (personInfo.hobbies[i].type === hobbyType) {
			res.send({hobby: personInfo.hobbies[i].name})
		}
	}
}

skills = [
	{
	  "id": 1,
	  "name": "Javascript",
	  "experience": "Intermediate"
	},
	{
	  "id": 2,
	  "name": "HTML/CSS",
	  "experience": "Beginner"
	},
	{
	  "id": 3,
	  "name": "Angular",
	  "experience": "Intermediate"
	},
]

exports.getSkills = function (req, res){
	var skillsMatch = [];
	if (req.query.experience){
	for (var i=0; i<skills.length; i++){
		if(skills[i].experience === "Intermediate"){
			skillsMatch.push(skills[i]);
		}
	}
	res.send({skills: skillsMatch});
	console.log({skills: skillsMatch});
	}
	else {
		res.send({skills: skills})
	}
}

exports.addSkill = function (req, res){
	skills.push(req.body);
	res.send({skills: skills})
}



