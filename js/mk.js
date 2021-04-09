//! moment.js locale configuration

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('../moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
 
     var mk = moment.defineLocale('mk', {
         months : 'СР°РЅСѓР°СЂРё_С„РµРІСЂСѓР°СЂРё_РјР°СЂС‚_Р°РїСЂРёР»_РјР°С_ССѓРЅРё_ССѓР»Рё_Р°РІРіСѓСЃС‚_СЃРµРїС‚РµРјРІСЂРё_РѕРєС‚РѕРјРІСЂРё_РЅРѕРµРјРІСЂРё_РґРµРєРµРјРІСЂРё'.split('_'),
         monthsShort : 'СР°РЅ_С„РµРІ_РјР°СЂ_Р°РїСЂ_РјР°С_ССѓРЅ_ССѓР»_Р°РІРі_СЃРµРї_РѕРєС‚_РЅРѕРµ_РґРµРє'.split('_'),
         weekdays : 'РЅРµРґРµР»Р°_РїРѕРЅРµРґРµР»РЅРёРє_РІС‚РѕСЂРЅРёРє_СЃСЂРµРґР°_С‡РµС‚РІСЂС‚РѕРє_РїРµС‚РѕРє_СЃР°Р±РѕС‚Р°'.split('_'),
         weekdaysShort : 'РЅРµРґ_РїРѕРЅ_РІС‚Рѕ_СЃСЂРµ_С‡РµС‚_РїРµС‚_СЃР°Р±'.split('_'),
         weekdaysMin : 'РЅe_Рїo_РІС‚_СЃСЂ_С‡Рµ_РїРµ_СЃa'.split('_'),
         longDateFormat : {
             LT : 'H:mm',
             LTS : 'H:mm:ss',
             L : 'D.MM.YYYY',
             LL : 'D MMMM YYYY',
             LLL : 'D MMMM YYYY H:mm',
             LLLL : 'dddd, D MMMM YYYY H:mm'
         },
         calendar : {
             sameDay : 'Денес LT',
             nextDay : 'Утре LT',
             nextWeek : 'Следна недела LT',
             lastDay : '[Р’С‡РµСЂР° РІРѕ] LT',
             lastWeek : function () {
                 switch (this.day()) {
                     case 0:
                     case 3:
                     case 6:
                         return 'Денес LT';
                     case 1:
                     case 2:
                     case 4:
                     case 5:
                         return 'Денес LT';
                 }
             },
             sameElse : 'L'
         },
         relativeTime : {
             future : 'РїРѕСЃР»Рµ %s',
             past : 'РїСЂРµРґ %s',
             s : 'РЅРµРєРѕР»РєСѓ СЃРµРєСѓРЅРґРё',
             ss : '%d СЃРµРєСѓРЅРґРё',
             m : 'РјРёРЅСѓС‚Р°',
             mm : '%d РјРёРЅСѓС‚Рё',
             h : 'С‡Р°СЃ',
             hh : '%d С‡Р°СЃР°',
             d : 'РґРµРЅ',
             dd : '%d РґРµРЅР°',
             M : 'РјРµСЃРµС†',
             MM : '%d РјРµСЃРµС†Рё',
             y : 'РіРѕРґРёРЅР°',
             yy : '%d РіРѕРґРёРЅРё'
         },
         dayOfMonthOrdinalParse: /\d{1,2}-(РµРІ|РµРЅ|С‚Рё|РІРё|СЂРё|РјРё)/,
         ordinal : function (number) {
             var lastDigit = number % 10,
                 last2Digits = number % 100;
             if (number === 0) {
                 return number + '-РµРІ';
             } else if (last2Digits === 0) {
                 return number + '-РµРЅ';
             } else if (last2Digits > 10 && last2Digits < 20) {
                 return number + '-С‚Рё';
             } else if (lastDigit === 1) {
                 return number + '-РІРё';
             } else if (lastDigit === 2) {
                 return number + '-СЂРё';
             } else if (lastDigit === 7 || lastDigit === 8) {
                 return number + '-РјРё';
             } else {
                 return number + '-С‚Рё';
             }
         },
         week : {
             dow : 1, // Monday is the first day of the week.
             doy : 7  // The week that contains Jan 7th is the first week of the year.
         }
     });
 
     return mk;
 
 })));