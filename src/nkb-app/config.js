var root = this;

//
root._APP_CONFIG = {
    lang: {
        defaultLang: 'ru'
    },
    meta: {
        // Параметр: Объём продаж за последний год
        lastSalesVolumeField: 'p20103_2012',
        currencyOrder: 1000
    }
};

//
root._RESOURCES_CONFIG = {
    baseUrl: '/rsearch',

    paths: {
        'angular':              'src/bower-components/angular/angular',
        'angular-locale_ru':    'src/bower-components/angular-i18n/angular-locale_ru',
        'angular-locale_en':    'src/bower-components/angular-i18n/angular-locale_en',
        'ng-infinite-scroll':   'src/bower-components/ngInfiniteScroll/ng-infinite-scroll',

        'jquery':               'src/bower-components/jquery/jquery',
        'jquery.cookie':        'src/bower-components/jquery.cookie/jquery.cookie',

        'underscore':           'src/bower-components/underscore/underscore',
        'underscore.string':    'src/bower-components/underscore.string/underscore.string',

        'purl':                 'src/bower-components/purl/purl',

        'uuid':                 'src/bower-components/node-uuid/uuid',

        'i18n':                 'src/bower-components/nullpointer-i18n/i18n'
    },

    packages: [{
        name: 'app',
        location: 'src/nkb-app',
        main: 'app'
    }, {
        name: 'app.login',
        location: 'src/nkb-app/components/login',
        main: 'login'
    }, {
        name: 'app.lang',
        location: 'src/nkb-app/components/lang',
        main: 'lang'
    }, {
        name: 'icons',
        location: 'src/icons',
        main: 'icons'
    }, {
        name: 'l10n',
        location: 'src/l10n',
        main: 'l10n'
    }, {
        name: 'resource',
        location: 'src/resource',
        main: 'resource'
    }, {
        name: 'user',
        location: 'src/user',
        main: 'user'
    }, {
        name: 'rsearch',
        location: 'src/rsearch',
        main: 'rsearch'
    }],

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-locale_ru': {
            deps: ['angular']
        },
        'angular-locale_en': {
            deps: ['angular']
        },
        'ng-infinite-scroll': {
            deps: ['angular']
        },

        'jquery.cookie': {
            deps: ['jquery']
        },

        'underscore': {
            exports: '_',
            deps: ['underscore.string'],
            init: function(UnderscoreString) {
                _.templateSettings = {
                    evaluate:       /\{%([\s\S]+?)%\}/g,
                    interpolate:    /\{%=([\s\S]+?)%\}/g,
                    escape:         /\{%-([\s\S]+?)%\}/g
                };

                _.mixin(UnderscoreString);
            }
        }
    },

    config: {
        'i18n': {
            // Должны отличаться от общих настроек шаблонизатора (например, underscore),
            // т.к. смысл шаблонизации i18n:
            //   только перевести текст шаблона,
            //   а далее использовать переведённый шаблон с шаблонизатором по умолчанию
            templateSettings: {
                evaluate:       '',
                interpolate:    /\$\{([\s\S]+?)\}/g,
                escape:         ''
            },
            escape: false
        }
    },

    map: {
        '*': {
            'css': 'src/bower-components/require-css/css',
            'less': 'src/bower-components/require-less/less',
            'text': 'src/bower-components/requirejs-text/text'
        }
    },

    less: {
        relativeUrls: true
    },

    urlArgs: new Date().getTime()
};
