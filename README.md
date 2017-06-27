# JavaScript Notifier
Light-weight notification module for your website


## Instalation

### Install directly
1. Download `notifier.js` and `notifier.css` files
2. Add them to your page

### Add from CDN
Add script and stylesheets files from GitHub
```html
<script src="https://cdn.rawgit.com/codex-team/js-notifier/master/notifier.js"></script>
<link rel="stylesheet" href="https://cdn.rawgit.com/codex-team/js-notifier/master/notifier.css">
```

## Usage
Module has only one public method — `show`. 
You should pass there object with notification properties

#### General properties
- `message` — notification message (can contains HTML)
- `type` — type of notification: `alert`, `confirm` or `prompt`. `Alert` by default
- `style` — just add `'cdx-notifies__notification--' + style` class. We have some default styles: `success` and `error` 
- `time` — notification expire time in ms. Only for `alert` notifies expires (8s by default)

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

```javascript
notifier.show({
  message: 'Message was sent',
  style: 'success',
  time: 5000
})
```

```javascript
notifier.show({
  message: 'Sory, server is busy now',
  style: 'error'
})
```

```javascript
notifier.show({
  message: 'Delete account?',
  type: 'confirm',
  okText: 'Yes',
  cancelText: 'Oh, wait',
  okHandler: account.delete
})
```

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

## Custom styles
You can easily customize notifications appearance. Read more about it here