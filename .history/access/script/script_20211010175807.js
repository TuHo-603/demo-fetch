function xyz() {
    let listItem1 = document.querySelectorAll('.parent > li');
    console.log(listItem1);
    let listItem2 = document.querySelectorAll('.parent:first-child > ul > li');
    console.log(listItem2);
    let listItem3 = document.querySelectorAll('.ul:nth-child(2) > li');
    console.log(listItem3);
}
xyz();