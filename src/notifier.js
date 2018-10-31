/**
 * Add CSS to js-build
 */
require('./css/main.css');

/*!
 * Codex JavaScript Notification module
 * https://github.com/codex-team/js-notifier
 */
module.exports = (function () {
  const draw = require('./draw.js');
  const bounceInClass = 'cdx-notify--bounce-in';

  let wrapper_ = null;

  /**
   *
   * @return {boolean}
   * @private
   */
  function prepare_() {
    if (wrapper_) {
      return true;
    }

    wrapper_ = draw.getWrapper();

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
   * @property {Number} [time=8000]  - expiring time (8 sec by default)
   *
   * Optional properties for confirm and prompt types
   * @property {String} [okText]          - text for confirmation button
   * @property {Function} [okHandler]     - confirmation (or user's input) handler
   * @property {String} [cancelText]      - (for confirm type only) text for cancel button
   * @property {Function} [cancelHandler] - cancel handler (when cancel button was pressed or notification was closed)
   * @property {String} [placeholder]     - (for prompt type only) input placeholder
   * @property {String} [default]         - (for prompt type only) input initial value
   * @property {String} [inputType]       - (for prompt type only) prompt input type
   */
  function show(options) {
    if (!options.message) {
      return;
    }

    prepare_();

    let notify = null;
    const time = options.time || 8000;

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
    show
  };
})({});
