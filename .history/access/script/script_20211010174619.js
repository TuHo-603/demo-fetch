function xyz() {
    let checkboxNodes = document.getElementsByTagName('input');
    console.log(checkboxNodes);
    let checkbox1Element = document.querySelector('input[type="checkbox"][value="1"]');
    console.log(checkbox1Element);
    let checkboxCheckedAndNotDisabled = document.querySelector(':checked:not(disabled)');
    console.log(checkboxCheckedAndNotDisabled);
    let checkboxDisabledAndNotChecked = document.querySelector(':disabled:not(checked)');
    console.log(checkboxDisabledAndNotChecked);
    let checkboxCheckedAndDisabled = document.querySelector(':checked:disabled');
    console.log(checkboxCheckedAndDisabled);
}
xyz();