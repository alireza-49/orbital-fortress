export enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
  rollRight = "rollRight",
  rollLeft = "rollLeft",
  up = "up",
  down = "down",
  accelerate = "accelerate",
  pause = "pause",
}

export type KeyboardCode =
  // Letters
  | "KeyA"
  | "KeyB"
  | "KeyC"
  | "KeyD"
  | "KeyE"
  | "KeyF"
  | "KeyG"
  | "KeyH"
  | "KeyI"
  | "KeyJ"
  | "KeyK"
  | "KeyL"
  | "KeyM"
  | "KeyN"
  | "KeyO"
  | "KeyP"
  | "KeyQ"
  | "KeyR"
  | "KeyS"
  | "KeyT"
  | "KeyU"
  | "KeyV"
  | "KeyW"
  | "KeyX"
  | "KeyY"
  | "KeyZ"

  // Numbers (top row)
  | "Digit0"
  | "Digit1"
  | "Digit2"
  | "Digit3"
  | "Digit4"
  | "Digit5"
  | "Digit6"
  | "Digit7"
  | "Digit8"
  | "Digit9"

  // Numpad
  | "Numpad0"
  | "Numpad1"
  | "Numpad2"
  | "Numpad3"
  | "Numpad4"
  | "Numpad5"
  | "Numpad6"
  | "Numpad7"
  | "Numpad8"
  | "Numpad9"
  | "NumpadAdd"
  | "NumpadSubtract"
  | "NumpadMultiply"
  | "NumpadDivide"
  | "NumpadDecimal"
  | "NumpadEnter"
  | "NumpadEqual"

  // Function Keys
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"

  // Modifiers
  | "ShiftLeft"
  | "ShiftRight"
  | "ControlLeft"
  | "ControlRight"
  | "AltLeft"
  | "AltRight"
  | "MetaLeft"
  | "MetaRight"

  // Arrows
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"

  // Navigation / Editing
  | "Escape"
  | "Tab"
  | "CapsLock"
  | "Backspace"
  | "Enter"
  | "Delete"
  | "Insert"
  | "Home"
  | "End"
  | "PageUp"
  | "PageDown"

  // Symbols
  | "Minus"
  | "Equal"
  | "BracketLeft"
  | "BracketRight"
  | "Backslash"
  | "Semicolon"
  | "Quote"
  | "Backquote"
  | "Comma"
  | "Period"
  | "Slash"

  // Media Keys (supported by most browsers)
  | "MediaPlayPause"
  | "MediaStop"
  | "MediaTrackNext"
  | "MediaTrackPrevious"
  | "AudioVolumeMute"
  | "AudioVolumeDown"
  | "AudioVolumeUp"

  // Others
  | "Space"
  | "ContextMenu"
  | "ScrollLock"
  | "Pause"
  | "PrintScreen";

type KeyboardControlsEntry = {
  name: Controls;
  keys: KeyboardCode[];
}[];

export const controlsMap: KeyboardControlsEntry = [
  { name: Controls.forward, keys: ["KeyW"] },
  { name: Controls.backward, keys: ["KeyS"] },
  { name: Controls.accelerate, keys: ["ShiftLeft"] },
  { name: Controls.down, keys: ["ControlLeft"] },
  { name: Controls.up, keys: ["Space"] },
  { name: Controls.rollLeft, keys: ["KeyQ"] },
  { name: Controls.rollRight, keys: ["KeyE"] },
  { name: Controls.right, keys: ["KeyD"] },
  { name: Controls.left, keys: ["KeyA"] },
  { name: Controls.pause, keys: ["Escape"] },
];
