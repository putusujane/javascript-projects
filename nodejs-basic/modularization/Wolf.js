class Wolf {
    constructor() {
        // Property
        this.strength = Math.floor(Math.random() * 100);
    }

    // Method
    howl() {
        console.log("Aoouuuwww!");
    }
}

// TODO 2
module.exports = Wolf;