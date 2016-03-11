var express = require ('express')
	, app = express()
	, port = 8181
	, bodyParser = require ('body-parser');

app.use(bodyParser.json());

app.listen(port, function (){
	console.log('Listening on ' + port)
});

var middleware = require('./controllers/middleware.js');

var mainCtrl  = require('./controllers/mainCtrl.js');


app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getLatestOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:hobbyType', mainCtrl.getHobbiesByType);


app.put('/name', mainCtrl.editName);

app.put('/location', mainCtrl.editLocation);

app.post('/hobbies', mainCtrl.addHobby);

app.post('/occupations', mainCtrl.addOccupation);

app.route('/skills')
	.get(mainCtrl.getSkills)
	.post(middleware.addId, mainCtrl.addSkill);






















