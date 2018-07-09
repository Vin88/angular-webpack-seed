import { GLOBAL } from '.././common/constants';

export class languageService{

    constructor(){
        'ngInject';
    }

    getLanguage(selectedLang){
        let _lang = null;
        angular.forEach(GLOBAL.LOCALE,  function(value, key){
            _lang = (key === selectedLang) ? key : _lang;
        });
        return _lang || GLOBAL.PREFERRED_LANG;
    }
}


export function translateService($translateProvider, $translatePartialLoaderProvider){
	'ngInject';
	$translateProvider.useLoader('$translatePartialLoader', {
	  urlTemplate: '/assets/locale/{lang}/{part}.json'
	});
	$translatePartialLoaderProvider.addPart('master');
    $translateProvider.preferredLanguage(GLOBAL.PREFERRED_LANG);
    // remember language
    $translateProvider.useLocalStorage();
}
