'use strict'

const Service = require('trails/service')

/**
 * @module ProjectService
 * @description TODO document Service
 */
module.exports = class ProjectService extends Service {

	saveProject () {
		console.log("servicio 1");
		var project = new this.app.orm.Project({
			name: 'projecto uno',
			description: 'mi projecto',
			active: 'TRUE'
		});
		console.log("servicio 2");
		/*return project.save(function (err) {
		  if (err) {
		    console.log(err);
		  } else {
		    console.log('OK');
		  }
		});*/
		return project.save()

  	}

}

