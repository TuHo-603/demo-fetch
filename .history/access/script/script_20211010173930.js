function xyz() {
    let checkboxNodes = document.getElementsByTagName('input');
    console.log(checkboxNodes);
    let checkbox1Element = document.querySelector('[type="checkbox"][value="1"]');
    console.log(checkbox1Element);
    let checkboxCheckedAndNotDisabled = document.querySelector('[type="checkbox"][value="1"]');
    console.log(checkbox1Element);
    let checkboxDisabledAndNotChecked = document.querySelector('[type="checkbox"][value="1"]');
    console.log(checkbox1Element);
    let checkbox1Element = document.querySelector('[type="checkbox"][value="1"]');
    console.log(checkbox1Element);
}
xyz();