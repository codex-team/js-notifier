/**
 * Add CSS to js-build
 */
require('./css/main.css');

/**
 * Codex JavaScript Notification module
 *
 * @see https://github.com/codex-team/js-notifier
 */
module.exports = (function () {
  const draw = require('./draw.js');
  const bounceInClass = 'cdx-notify--bounce-in';

  let wrapper_ = null;

  /**
   * @private
   * @return {boolean}
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
   * @param {NotificationOptions | ConfirmNotificationOptions  | PromptNotificationOptions} options
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
    show,
  };
})({});
