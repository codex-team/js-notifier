# JavaScript Notifier

Lightweight notification module for websites

# What's news doc?

- 1.1.3  Fixed incompatibility with eslint 6-7x in formatters/stylish, and provide the example
- 1.2.0  Layout support has been added:  (Live demo)[http://sosie.sos-productions.com/js-notifier/example/index.html]
- 1.3.0  Sosie class sosie-panel.css for the logo panel added

## Instalation

### Install via NPM/Yarn

Install package

```shell
npm install codex-notifier --save
```

```shell
yarn add codex-notifier
```

#### Require module

```javascript
const notifier = require('codex-notifier');
```

```javascript
import notifier from 'codex-notifier';
import {ConfirmNotifierOptions, NotifierOptions, PromptNotifierOptions} from 'codex-notifier';
```

## Usage

Module has only one public method — `show`.
You should pass there object with notification properties

#### General properties

- `message` — notification message (can contains HTML)
- `type` — type of notification: `alert`, `confirm` or `prompt`. `Alert` by default
- `style` — just add `'cdx-notify--' + style` class. We have some default styles: `success` and `error`
- `time` — notification expire time in ms. Only for `alert` notifies expires (8s by default)
- `layout` — either 'middle' or string with comma holding a combinaison of 'top' or 'bottom' with 'left' or 'right'

#### Confirm notifications properties

- `okText` — text for confirmation button (*Confirm* by default)
- `cancelText` — text for cancel button (*Cancel* by default)
- `okHandler` — fires when *Confirm* button was pressed
- `cancelHandler` — fires when *Cancel* button was pressed or notification was closed

#### Prompt notifications properties

- `okText` — text for submit button (*Ok* by default)
- `okHandler` — fires when submit button was pressed. Gets input's value as a parameter
- `cancelHandler` — fires when notification was closed
- `placeholder` — input placeholder
- `default` — input default value
- `inputType` — type of input  (text by default)

## Examples

```javascript
notifier.show({
  message: 'Refresh the page'
})
```

![Notify](https://github.com/codex-team/js-notifier/raw/master/docs/examples/notify.png)

```javascript
notifier.show({
  message: 'Message was sent',
  style: 'success',
  time: 5000
})
```

![Success](https://github.com/codex-team/js-notifier/raw/master/docs/examples/success.png)

```javascript
notifier.show({
  message: 'Sorry, server is busy now',
  style: 'error'
})
```

![Error](https://github.com/codex-team/js-notifier/raw/master/docs/examples/error.png)

```javascript
notifier.show({
  message: 'Delete account?',
  type: 'confirm',
  okText: 'Yes',
  cancelText: 'Oh, wait',
  okHandler: account.delete
})
```

![Confirm](https://github.com/codex-team/js-notifier/raw/master/docs/examples/confirm.png)

```javascript
notifier.show({
  message: 'Enter your email',
  type: 'prompt',
  okText: 'Enter',
  okHandler: checkEmail,
  inputType: 'email',
  placeholder: 'team@ifmo.su'
})
```

![Prompt](https://github.com/codex-team/js-notifier/raw/master/docs/examples/prompt.png)

## Custom styles

You can easily customize notifications appearance. Read more about it [here](https://github.com/codex-team/js-notifier/blob/master/docs/styles.md)
