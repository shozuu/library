
const myLibrary = []; //books are to be put in the library using a function

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; //read or not read
    this.read = read;
}

Book.prototype.info = function() {
    console.log(this.title + ', ' + this.author + ', ' + this.pages + ', ' + this.read)
}

function getUserInput(){
    let title = prompt('title:')
    let author = prompt('author:')
    let pages = prompt('pages:')
    let read = prompt('read:')

    const temp = new Book(title, author, pages, read);
    myLibrary.push(temp);
}


//need a function to get user input and push it to the myLibrary

// const myBook = new Book('TITLE', 'AUTHOR', 'PAGES', 'READ');
// myLibrary.push(myBook);

// const urBook = new Book('TITLE1', 'AUTHOR1', 'PAGES1', 'READ1');
// myLibrary.push(urBook);
// const myLibrary = [myBook, urBook];

// getUserInput();
// getUserInput();
// getUserInput();

myLibrary.forEach(book => {
    book.info();
});