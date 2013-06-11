//var Person = function(config) {
//	this.name = config.name;
//	this.age = config.age;
//	this.job = config.job;
//};
//
//var nick = new Person({ name: 'Nick', age: 24, job: 'Front-end developer' });


var Person = Backbone.Model.extend({
});

var Person = Backbone.Model.extend({
	defaults: {
		name: 'Dima',
		age: 23,
		job: 'web developer'
	},

	validate: function( attrs ) {
		console.log(attrs);

		if ( attrs.age <= 0 ) {
			return 'Возраст должен быть положительным!';
		}

	},

	work: function() {
		return this.get('name') + ' is working.';
	}


});

var person = new Person;

person.set({'age': 50});
//console.log(person.age + '==');

person.on('error', function(model, error){
	console.log(error);
});