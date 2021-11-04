function sellectST() {
    for (const argum in arguments) {
        if (Object.hasOwnProperty.call(arguments, argum)) {
            const myString = arguments[argum];
            console.log(myString);
        }
    }
}
sellectST(1, 2, 3, 4, 5, 6, 7, 8, 9);