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
      bounceInClass = 'cdx-notify--bounce-in';

  let wrapper_ = null;

  function prepare_() {

    if ( wrapper_ ) {

      return true;

    }

    wrapper_ = draw.wrapper();

    document.body.appendChild(wrapper_);

  }

  /**
   * Show new notification
   *
   * @param {Object} options:
   *
   * @property {String} type    - type of notification. Alert, confirm or prompt (alert by default)
   * @property {String} message - text to notify, can contains HTML
   * @property {String} style   - style of notification. Just add 'cdx-notify--' + type class. ('success' or 'error' for example)
   * @property {Number} time    - (optional) expiring time (8 sec by default)
   *
   * Optional properties for confirm and prompt types
   * @property {String} okText          - text for confirmation button
   * @property {String} cancelText      - (for confirm type only) text for cancel button
   * @property {Function} okHandler     - confirmation (or user's input) handler
   * @property {Function} cancelHandler - cancel handler (when cancel button was pressed or notification was closed)
   * @property {String} placeholder     - (for prompt type only) input placeholder
   * @property {String} default         - (for prompt type only) input initial value
   * @property {String} inputType       - (for prompt type only) prompt input type
   */
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