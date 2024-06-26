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

form.onsubmit = function(e) {
    e.preventDefault();

    let title = form.elements['title-input'].value;
    let author = form.elements['input-author'].value;
    let pages = form.elements['input-page'].value;
    let read = form.elements['input-read'].checked ? "Yes" : "No";

    //create a new book object with the input values
    const temp = new Book(title, author, pages, read);

    //add to myLibrary array
    myLibrary.push(temp);

    modal.classList.add("hidden");
    modalBackdrop.classList.remove("on");
    form.reset();

    viewLibrary();
}

function viewLibrary() {
    //it resets the current grid content and recreates the bookInfo again
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.innerHTML = '';

    myLibrary.forEach(book => {
        book.info();
    });
}


class Book {
    //object constructor
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; //yes or no
    }

    //prototype function
    info() {
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
                    <p class="read"><span class="tag">Read:   </span>${this.read}</p>
                </div>
                <div class="button-group">
                    <button class="read-button" data-index = "${myLibrary.indexOf(this)}">Read</button>
                    <button class="remove-button" data-index = "${myLibrary.indexOf(this)}">Remove</button>
                </div>
            </div>
        `;
        gridContainer.appendChild(bookInfo);
        
        const removeButton = document.querySelectorAll('.remove-button');
        const readButton = document.querySelectorAll('.read-button');

        //removeButton returns a NodeList so we need to reiterate each remove-button class
        removeButton.forEach(button => {
            button.onclick = function() {
                let removeAt = parseInt(button.getAttribute('data-index'));

                myLibrary.splice(removeAt, 1)
                viewLibrary();
            }
        });

        readButton.forEach(button => {
            button.onclick = function() {
                let readAt = parseInt(button.getAttribute('data-index'));
                console.log(readAt)

                if(myLibrary[readAt].read == 'No') {
                    myLibrary[readAt].read = 'Yes'
                    console.log(myLibrary[readAt].read)
                } 
                else {
                    myLibrary[readAt].read = 'No'
                    console.log(myLibrary[readAt].read )
                }
                viewLibrary();
            }
        });
    }
}