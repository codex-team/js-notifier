/**
 * Notifications tips module
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

  /**
   * @param {Object} options:
   *
   * @property {String} type    - type of notification. Just adds {CSS_.notification + '--' + type} class. 'notify' by default
   * @property {String} message - text to notify, can contains HTML
   * @property {String} time    - expiring time
   */
  function show(options) {

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