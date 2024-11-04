function evenNumbers() {
    let total = 0;
    for (i = 0; i < 100; i++) {
        if (i % 2 === 0 && i > 0) {
            console.log(i)
        }
    }
}

evenNumbers();
// expected output 2,4,6,8,10......98