function xyz() {
    let checkboxNodes = document.getElementsByTagName('input');
    console.log(checkboxNodes);
    let checkbox1Element = document.querySelector('input [type="checkbox"] [value="1"]');
    console.log(checkbox1Element);
}
xyz();