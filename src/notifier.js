/**
 * Add CSS to js-build
 */
require('./css/main.css');

/**
 * Codex JavaScript Notification module
 *
 * @see https://github.com/sosie-js/js-notifier
 */
module.exports = (function () {
  const draw = require('./draw.js');
  const bounceInClass = 'cdx-notify--bounce-in';

  
  const wrappers_ = {};
  
  /**
   * @private
   * @param {String} layout - either 'middle' or string with comma holding a combinaison of 'top' or 'bottom' with 'left' or 'right'
   * @returns {boolean}
   */
  function prepare_(layout) {
      
    let wrapper_;
    
    if (Object.prototype.hasOwnProperty.call(wrappers_,layout)) {
      wrapper_ = wrappers_[layout]; 
    } else {
      wrapper_ = draw.getWrapper(layout.split(','));
      wrappers_[layout] = wrapper_;
    }
    document.body.appendChild(wrapper_);
    return wrapper_;
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

    const wrapper_ = prepare_(options.layout || 'bottom,left');

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
