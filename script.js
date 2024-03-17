const addBook = document.querySelector('.add');
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const form = document.getElementById('form');
const myLibrary = [];


addBook.onclick = function() {
    modal.classList.remove("hidden");
    modalBackdrop.classList.add("on");
}

modalBackdrop.onclick = function() {
    modal.classList.add("hidden");
    modalBackdrop.classList.remove("on");
}

//object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; //yes or no
}

//prototype function
Book.prototype.info = function() {
    const gridContainer = document.querySelector('#grid-container');

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info')

    bookInfo.innerHTML = `
        <div class="title-group">
            <p class="book-title"><strong>${this.title}</strong></p>
            <p class="author"><em>${this.author}</em></p>
        </div>
        <div class="details">
            <div class="info-group">
                <p class="pages"><span class="tag">Pages:   </span>${this.pages}</p>
                <p class="read"><span class="tag">Status:   </span>${this.read}</p>
            </div>
            <div class="button-group">
                <button class="read-button">Read</button>
                <button class="remove-button">Remove</button>
            </div>
        </div>
    `;
    gridContainer.appendChild(bookInfo);
}

form.onsubmit = function(e) {
    e.preventDefault();

    let title = form.elements['title-input'].value;
    let author = form.elements['input-author'].value;
    let pages = form.elements['input-page'].value;
    let read = form.elements['input-read'].checked ? "Yes" : "No";

    console.log(read);

    //create a new book object with the input values
    const temp = new Book(title, author, pages, read);

    //add to myLibrary array
    myLibrary.push(temp);

    modal.classList.add("hidden");
    modalBackdrop.classList.remove("on");

    viewLibrary();
}

function viewLibrary() {
    myLibrary.forEach(book => {
        book.info();
    });
}