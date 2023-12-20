import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPostamat14КлючLForm from './forms/i-i-s-postamat14-ключ-l';
import IISPostamat14ЛогистикаLForm from './forms/i-i-s-postamat14-логистика-l';
import IISPostamat14ПользовательLForm from './forms/i-i-s-postamat14-пользователь-l';
import IISPostamat14ПостаматLForm from './forms/i-i-s-postamat14-постамат-l';
import IISPostamat14ПосылкаLForm from './forms/i-i-s-postamat14-посылка-l';
import IISPostamat14СлужбаДоставкиLForm from './forms/i-i-s-postamat14-служба-доставки-l';
import IISPostamat14УведомлениеLForm from './forms/i-i-s-postamat14-уведомление-l';
import IISPostamat14ХранениеLForm from './forms/i-i-s-postamat14-хранение-l';
import IISPostamat14ЯчейкаLForm from './forms/i-i-s-postamat14-ячейка-l';
import IISPostamat14КлючEForm from './forms/i-i-s-postamat14-ключ-e';
import IISPostamat14ЛогистикаEForm from './forms/i-i-s-postamat14-логистика-e';
import IISPostamat14ПользовательEForm from './forms/i-i-s-postamat14-пользователь-e';
import IISPostamat14ПостаматEForm from './forms/i-i-s-postamat14-постамат-e';
import IISPostamat14ПосылкаEForm from './forms/i-i-s-postamat14-посылка-e';
import IISPostamat14СлужбаДоставкиEForm from './forms/i-i-s-postamat14-служба-доставки-e';
import IISPostamat14УведомлениеEForm from './forms/i-i-s-postamat14-уведомление-e';
import IISPostamat14ХранениеEForm from './forms/i-i-s-postamat14-хранение-e';
import IISPostamat14ЯчейкаEForm from './forms/i-i-s-postamat14-ячейка-e';
import IISPostamat14КлючModel from './models/i-i-s-postamat14-ключ';
import IISPostamat14ЛогистикаModel from './models/i-i-s-postamat14-логистика';
import IISPostamat14ПользовательModel from './models/i-i-s-postamat14-пользователь';
import IISPostamat14ПостаматModel from './models/i-i-s-postamat14-постамат';
import IISPostamat14ПосылкаModel from './models/i-i-s-postamat14-посылка';
import IISPostamat14РегистрПосылкиModel from './models/i-i-s-postamat14-регистр-посылки';
import IISPostamat14РегистрХранModel from './models/i-i-s-postamat14-регистр-хран';
import IISPostamat14СлужбаДоставкиModel from './models/i-i-s-postamat14-служба-доставки';
import IISPostamat14УведомлениеModel from './models/i-i-s-postamat14-уведомление';
import IISPostamat14ХранениеModel from './models/i-i-s-postamat14-хранение';
import IISPostamat14ЯчейкаModel from './models/i-i-s-postamat14-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat14-ключ': IISPostamat14КлючModel,
    'i-i-s-postamat14-логистика': IISPostamat14ЛогистикаModel,
    'i-i-s-postamat14-пользователь': IISPostamat14ПользовательModel,
    'i-i-s-postamat14-постамат': IISPostamat14ПостаматModel,
    'i-i-s-postamat14-посылка': IISPostamat14ПосылкаModel,
    'i-i-s-postamat14-регистр-посылки': IISPostamat14РегистрПосылкиModel,
    'i-i-s-postamat14-регистр-хран': IISPostamat14РегистрХранModel,
    'i-i-s-postamat14-служба-доставки': IISPostamat14СлужбаДоставкиModel,
    'i-i-s-postamat14-уведомление': IISPostamat14УведомлениеModel,
    'i-i-s-postamat14-хранение': IISPostamat14ХранениеModel,
    'i-i-s-postamat14-ячейка': IISPostamat14ЯчейкаModel
  },

  'application-name': 'Postamat14',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Postamat14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat14',
          title: 'Postamat14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        postamat14: {
          caption: 'Postamat14',
          title: 'Postamat14',
          'i-i-s-postamat14-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat14-посылка-l': {
            caption: 'Посылка',
            title: ''
          },
          'i-i-s-postamat14-ячейка-l': {
            caption: 'Ячейка',
            title: ''
          },
          'i-i-s-postamat14-ключ-l': {
            caption: 'Ключ',
            title: ''
          },
          'i-i-s-postamat14-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat14-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat14-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat14-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat14-уведомление-l': {
            caption: 'Уведомление',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-postamat14-ключ-l': IISPostamat14КлючLForm,
    'i-i-s-postamat14-логистика-l': IISPostamat14ЛогистикаLForm,
    'i-i-s-postamat14-пользователь-l': IISPostamat14ПользовательLForm,
    'i-i-s-postamat14-постамат-l': IISPostamat14ПостаматLForm,
    'i-i-s-postamat14-посылка-l': IISPostamat14ПосылкаLForm,
    'i-i-s-postamat14-служба-доставки-l': IISPostamat14СлужбаДоставкиLForm,
    'i-i-s-postamat14-уведомление-l': IISPostamat14УведомлениеLForm,
    'i-i-s-postamat14-хранение-l': IISPostamat14ХранениеLForm,
    'i-i-s-postamat14-ячейка-l': IISPostamat14ЯчейкаLForm,
    'i-i-s-postamat14-ключ-e': IISPostamat14КлючEForm,
    'i-i-s-postamat14-логистика-e': IISPostamat14ЛогистикаEForm,
    'i-i-s-postamat14-пользователь-e': IISPostamat14ПользовательEForm,
    'i-i-s-postamat14-постамат-e': IISPostamat14ПостаматEForm,
    'i-i-s-postamat14-посылка-e': IISPostamat14ПосылкаEForm,
    'i-i-s-postamat14-служба-доставки-e': IISPostamat14СлужбаДоставкиEForm,
    'i-i-s-postamat14-уведомление-e': IISPostamat14УведомлениеEForm,
    'i-i-s-postamat14-хранение-e': IISPostamat14ХранениеEForm,
    'i-i-s-postamat14-ячейка-e': IISPostamat14ЯчейкаEForm
  },

});

export default translations;
