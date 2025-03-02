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

//Task 2: Creating a Borrower Class
class Borrower { //Establishes the Borrower Class and its corresponding properties
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) { //Establishes the borrowBook Method and creates a way for a book to be added to the Array
        this.borrowedBooks.push(book)
    }
    returnBook(book) { //Establishes the returnBook method and creates a way to remove books from the Array
        this.borrowedBooks.pop(book)
    }
}
const borrower1 = new Borrower("Alice Johnson", 201); //Establishes the first Borrower
borrower1.borrowBook("The Great Gatsby"); //Logs The Great Gatsby to the Array
console.log(borrower1.borrowedBooks); //Logs Borrower 1's checked out book to the console
borrower1.returnBook("The Great Gatsby"); //Removes the checked out book from the Array
console.log(borrower1.borrowedBooks); //Logs that the book is returned to the console