const title = document.querySelector('.book-title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');


const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; //yes or no
}

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

function getUserInput(){
    //get input from forms
    let title = prompt('title:')
    let author = prompt('author:')
    let pages = prompt('pages:')
    let read = prompt('read:')

    //instantiate every time its called
    const temp = new Book(title, author, pages, read);

    //add to myLibrary array
    myLibrary.push(temp);

    //display info

    temp.info();
}

getUserInput();
getUserInput();
getUserInput();
