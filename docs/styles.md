# Custom styles

### General appearance
You can use your own notifications design by rewriting the following classes

#### Wrappers
- `cdx-notifies` — wrapper for all notifications
- `cdx-notifies__btns-wrapper` — wrapper for buttons using in confirm and prompt types

#### Notification
- `cdx-notifies__notification` — notification block
- `cdx-notifies__cross` — notification cross button

#### Buttons and input
- `cdx-notifies__button` — general rules for buttons
- `cdx-notifies__button--confirm` — confirm button rules
- `cdx-notifies__button--cancel` — cancel button rules
- `cdx-notifies__input` — prompt input rules

#### Animation
- `cdx-notifies__notification--bounce-in`

### Notification modifiers
Passing `style` property to `show` method adds `'cdx-notifies__notification--' + style` class.
Using that feature you can create custom notification styles. We provide two styles example: `error` and `success`

#### Example
This is rules for our default `success` notification 
```css
.cdx-notifies__notification--success {
    background: #fafffe;
}
.cdx-notifies__notification--success::before {
    background: #41ffb1;
}
```