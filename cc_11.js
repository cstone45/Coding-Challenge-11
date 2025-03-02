//Task 1: Creating a Book Class
class Book { //Creates the Book Class and establishes its properties
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() { //Establishes the getDetails function and shows which data will be displayed
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) { //Establishes the updateCopies method and creates its formula
        this.copies += quantity;
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //Establishes the original information pertaining to The Great Gatsby
console.log(book1.getDetails()); //Logs the original data about The Great Gatsby and its avalible copies
book1.updateCopies(-1); //Logs that a copy of The Great Gatsby is checked out
console.log(book1.getDetails()); //Generates Updated output after a copy is checked out