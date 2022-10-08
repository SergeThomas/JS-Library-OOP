class Media {
    // constructor for attributes they all share
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getters and setter methods for media class
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }

    // method to toggle checkout status
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    // method to get average ratings
    getAverageRating() {
        let sum = this._ratings.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        let average = sum / this._ratings.length;
        return average;
    }

    // method to push into ratings array
    addRating(arrValue) {
        this._ratings.push(arrValue);
    }
}

// child class of media class: Book
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

// child class of media class: Movie
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// driver code below

// creating new book instance
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);
// toggling checkout status, when calling a method remember brackets
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// adding values to the instance array
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
// getting average rating
console.log(historyOfEverything.getAverageRating());

// Creating new movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
