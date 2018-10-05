export function selectElement(targetElement) {
    const range = document.createRange(); // create new range object
    const selection = window.getSelection(); // get Selection object from currently user selected text

    range.selectNodeContents(targetElement); // set range to encompass desired element text
    selection.removeAllRanges(); // unselect any user selected text (if any)
    selection.addRange(range); // add range to Selection object to select it
  }

export function copySelectedElement(targetElement) {
    selectElement(targetElement);
    document.execCommand('copy'); // copy selected text to clipboard
    window.getSelection().removeAllRanges(); // remove range after successful copy
  }
