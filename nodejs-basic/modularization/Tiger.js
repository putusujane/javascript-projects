class Tiger {
    constructor() {
        // Property
        this.strength = Math.floor(Math.random() * 100);
    }

    // Method
    growl() {
        console.log("Grrrrrrr!");
    }
}

// TODO 1
module.exports = Tiger;