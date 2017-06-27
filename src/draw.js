module.exports = function () {

  const CSS_ = {
    wrapper : 'cdx-notifies',
    notification : 'cdx-notifies__notification',
    crossBtn: 'cdx-notifies__cross',
    okBtn: 'cdx-notifies__button--confirm',
    cancelBtn: 'cdx-notifies__button--cancel',
    input: 'cdx-notifies__input',
    btn: 'cdx-notifies__button',
    btnsWrapper: 'cdx-notifies__btns-wrapper'
  };

  let alert = function (options) {

    let notify  = document.createElement('DIV'),
        cross   = document.createElement('DIV'),
        message = options.message,
        style    = options.style || 'notify';

    if (!message) {

      return;

    }

    notify.classList.add(CSS_.notification);
    notify.classList.add(CSS_.notification + '--' + style);
    notify.innerHTML = message;

    cross.classList.add(CSS_.crossBtn);
    cross.addEventListener('click', notify.remove.bind(notify));

    notify.appendChild(cross);

    return notify;

  }

  let confirm = function (options) {

    let notify = alert(options);

    let btnsWrapper = document.createElement('div'),
        okBtn = document.createElement('button'),
        cancelBtn = document.createElement('button'),
        crossBtn = notify.querySelector(CSS_.crossBtn),
        cancelHandler = options.cancelHandler,
        okHandler = options.okHandler;

    btnsWrapper.classList.add(CSS_.btnsWrapper);

    okBtn.innerHTML = options.okText || 'Confirm';
    cancelBtn.innerHTML = options.cancelText || 'Cancel';

    okBtn.classList.add(CSS_.btn);
    cancelBtn.classList.add(CSS_.btn);
    okBtn.classList.add(CSS_.okBtn);
    cancelBtn.classList.add(CSS_.cancelBtn);

    if (cancelHandler && typeof cancelHandler === 'function') {

      cancelBtn.addEventListener('click', cancelHandler)
      crossBtn.addEventListener('click', cancelHandler)

    }

    if (okHandler && typeof okHandler === 'function') {

      okBtn.addEventListener('click', okHandler);

    }

    okBtn.addEventListener('click', notify.remove.bind(notify));
    cancelBtn.addEventListener('click', notify.remove.bind(notify));

    btnsWrapper.appendChild(okBtn);
    btnsWrapper.appendChild(cancelBtn);

    notify.appendChild(btnsWrapper);

    return notify;

  }

  let prompt = function (options) {

    let notify = alert(options);

    let btnsWrapper = document.createElement('div'),
      okBtn = document.createElement('button'),
      input = document.createElement('input'),
      crossBtn = notify.querySelector(CSS_.crossBtn),
      cancelHandler = options.cancelHandler,
      okHandler = options.okHandler;

    btnsWrapper.classList.add(CSS_.btnsWrapper);

    okBtn.innerHTML = options.okText || 'Ok';
    okBtn.classList.add(CSS_.btn);
    okBtn.classList.add(CSS_.okBtn);

    input.classList.add(CSS_.input);

    if (options.placeholder) {

      input.setAttribute('placeholder', options.placeholder);

    }

    if (cancelHandler && typeof cancelHandler === 'function') {

      crossBtn.addEventListener('click', cancelHandler)

    }

    if (okHandler && typeof okHandler === 'function') {

      okBtn.addEventListener('click', function () {

        okHandler(input.value);

      });

    }

    okBtn.addEventListener('click', notify.remove.bind(notify));

    btnsWrapper.appendChild(input);
    btnsWrapper.appendChild(okBtn);

    notify.appendChild(btnsWrapper);

    return notify;


  }

  let wrapper = function () {

    let wrapper = document.createElement('DIV');

    wrapper.classList.add(CSS_.wrapper);

    return wrapper;

  }

  return {
    alert: alert,
    confirm: confirm,
    prompt: prompt,
    wrapper: wrapper
  }

}()