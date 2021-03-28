const kiosk = {
    Fruit: "Avocado",
    get getFruit() {
        return this.Fruit;

    },
    set setFruit(newFruit) {
        this.Fruit = newFruit;
    }


};
console.log(kiosk.Fruit);
kiosk.newFruit = "Grapes"
console.log(kiosk.newFruit)