function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function isTablet() {
  return /Tablet|iPad/i.test(navigator.userAgent);
}

export function checkScreen() {
  if (isTablet()) {
    return "tab";
  } else if (isMobileDevice()) {
    return "mob";
  } else {
    return "desk";
  }
}
