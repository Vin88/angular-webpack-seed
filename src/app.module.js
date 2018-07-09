// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';
import GLOBAL from './common/constants';

const appModule = angular
	.module('schoolApp', [
		// 3rd party modules
		'ui.router',
		'ngCookies',
		'pascalprecht.translate',
		// shared module
		'app.core',
		// application specific modules
		'app.root',
		'app.footer',
		'app.home',
		'app.user'
	]);

export default appModule;
