import { GLOBAL } from '../../common/constants';
export default class rootController {
	constructor($log, $translate,$cookies, languageService) {
		'ngInject';
		this.$log = $log;
		this.$translate = $translate;
		this.availableLang = GLOBAL.LOCALE;
		this.languageService = languageService;
		this.$cookies = $cookies;
		this.selectedLang = this.$cookies.get('') || GLOBAL.LOCALE[GLOBAL.PREFERRED_LANG];
	}

	$onInit = () => {
		this.menuTitle = "School App";
		$(document).on("click", "#menu-toggle", function (e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});
	};

	changeLanguage(key){
		this.$translate.use(this.languageService.getLanguage(key));
		this.selectedLang = GLOBAL.LOCALE[key];
	};
}
