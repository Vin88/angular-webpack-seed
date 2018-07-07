export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Welcome to Admin Portal';
		this.today = new Date();
	};
}
