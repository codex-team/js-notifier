# Custom styles

### General appearance
You can use your own notifications design by rewriting the following classes

#### Wrappers
- `cdx-notifies` — wrapper for all notifications
- `cdx-notify__btns-wrapper` — wrapper for buttons using in confirm and prompt types

#### Notification
- `cdx-notify__notification` — notification block
- `cdx-notify__cross` — notification cross button

#### Buttons and input
- `cdx-notify__button` — general rules for buttons
- `cdx-notify__button--confirm` — confirm button rules
- `cdx-notify__button--cancel` — cancel button rules
- `cdx-notify__input` — prompt input rules

#### Animation
- `cdx-notify--bounce-in`

### Notification modifiers
Passing `style` property to `show` method adds `'cdx-notifies__notification--' + style` class.
Using that feature you can create custom notification styles. We provide two styles example: `error` and `success`

#### Example
This is rules for our default `success` notification 
```css
.cdx-notify--success {
    background: #fafffe;
}
.cdx-notify__notification--success::before {
    background: #41ffb1;
}
```
![Success](https://github.com/codex-team/js-notifier/blob/initial/docs/examples/success.png)
