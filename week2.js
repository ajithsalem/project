function Book(title, author, yearPublished, readStatus) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.readStatus=readStatus;
}

Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.yearPublished}. Read: ${this.readStatus}`;
};

Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
};

const library = [];

function addBook(book) {
    library.push(book);
}

function removeLastBook() {
    library.pop();
}

function addBookToFront(book) {
    library.unshift(book);
}

function removeFirstBook() {
    library.shift();
}

function getAllTitles() {
    return library.map(book => book.title);
}

function getBooksByAuthor(author) {
    return library.filter(book => book.author === author);
}

function getTotalBooksPublishedBefore(year) {
    return library.filter(book => book.yearPublished < year).length;
}

function removeBookByTitle(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
    }
}

function getBooksByReadStatus(status) {
    return library.filter(book => book.readStatus === status);
}

function getSubLibrary(start, end) {
    return library.slice(start, end);
}

const book1=new Book('Thirukural','Thiruvalluvar',300,true);
const book2=new Book('Kambaramayanam','Kambar',1180,true);
const book3=new Book('Book','Booker',2023,false);
const book4=new Book('Matrix','Lauren Groff',2021,true);
const book5=new Book('Codeing','suiii',2023,false);
const book6=new Book('Life basicis','messi',2025,false);
const book7=new Book('Mahabaratham','Author',2026,false);

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBookToFront(book5);
addBookToFront(book6);
addBookToFront(book7);

console.log(library);

book2.toggleReadStatus();
book5.toggleReadStatus();
for(let i=0;i<library.length;i++){
    console.log(library[i].getSummary()+"\n");
}

console.log(getAllTitles());
console.log(getBooksByAuthor('Kambar'));
console.log(getTotalBooksPublishedBefore(1180));
removeBookByTitle('kambaramayam');
console.log(library);
const subLibrary = getSubLibrary(0, 2);
console.log(subLibrary);
