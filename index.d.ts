export as namespace notifier;

/**
 * Show notification
 * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options
 */
export function show(options: NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions): void;

/**
 * Base options interface for notifications
 */
export interface NotifierOptions {
  /**
   * Notification message (can contains HTML)
   */
  message: string;

  /**
   * Type of notification:
   * - 'alert' (default)
   * - 'confirm'
   * - 'prompt'
   */
  type?: string;

  /**
   * Add class `cdx-notify--${style}` to popup
   * We have some default styles: 'success' and 'error'
   */
  style?: string;

  /**
   * Notification expire time in ms (8s by default)
   * Only 'alert' notifies expires
   */
  time?: number;
}

/**
 * Confirm notification options
 */
export interface ConfirmNotifierOptions extends NotifierOptions {
  /**
   * Text for confirmation button
   * 'Confirm' by default
   */
  okText?: string;

  /**
   * Confirm button pressing callback
   * @param {MouseEvent} event
   */
  okHandler?: (event: MouseEvent) => void;

  /**
   * Text for cancel button
   * 'Cancel' by default
   */
  cancelText?: string;

  /**
   * Cancel button or cross button pressing callback
   * @param {MouseEvent} event
   */
  cancelHandler?: (event: MouseEvent) => void;
}

/**
 * Prompt notification options
 */
export interface PromptNotifierOptions extends NotifierOptions {
  /**
   * Text for the Submit button
   * 'Ok' by default
   */
  okText?: string;

  /**
   * Submit button pressing callback
   * Gets input's value as a parameter
   * @param {string} value
   */
  okHandler: (value: string) => void;

  /**
   * Cross button pressing callback
   * @param {MouseEvent} event
   */
  cancelHandler?: (event: MouseEvent) => void;

  /**
   * Type of input
   * 'text' by default
   */
  inputType?: string;

  /**
   * Input placeholder
   */
  placeholder?: string;

  /**
   * Input default value
   */
  default?: string;
}

export default notifier;
