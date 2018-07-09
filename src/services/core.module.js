import routerHelperService from './router-helper/router-helper.service';
import userService from './user/user.service';
import {translateService, languageService} from './language.service';

const coreModule = angular.module('app.core', [
	'ui.router',
	'ngCookies',
	'pascalprecht.translate'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);
coreModule.config(translateService);

coreModule.service('userService', userService);
coreModule.service('languageService', languageService);

export default coreModule;
