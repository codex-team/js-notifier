/*!
 * Codex JavaScript Notification module
 * https://github.com/codex-team/js-notifier
 *
 * Codex Team - https://ifmo.su
 *
 * MIT License | (c) Codex 2017
 */
module.exports = (function () {

  require('./css/main.css');

  let draw = require('./draw.js'),
      bounceInClass = 'cdx-notifies__notification--bounce-in';

  let wrapper_ = null;

  function prepare_() {

    if ( wrapper_ ) {

      return true;

    }

    wrapper_ = draw.wrapper();

    document.body.appendChild(wrapper_);

  }

  function show(options) {

    if (!options.message) {

      return;

    }

    prepare_();
    let notify = null,
        time = options.time || 8000;

    switch (options.type) {

      case 'confirm':
        notify = draw.confirm(options);
        break;

      case 'prompt':
        notify = draw.prompt(options);
        break;

      default:
        notify = draw.alert(options);
        window.setTimeout(function () {

          notify.remove();

        }, time);

    }

    wrapper_.appendChild(notify);
    notify.classList.add(bounceInClass);

  }

  return {
    show : show
  };

})({});