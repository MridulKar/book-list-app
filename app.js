//define constants
const title= document.querySelector('#title');
const author= document.querySelector('#author');
const year= document.querySelector('#year');
const btn= document.querySelector('.btn');
const bookList= document.querySelector('#book-list');

//addEventListeners
btn.addEventListener('click',function(e){
    e.preventDefault();

    if(title.value=='' && author.value=='' && year.value=='' ){
        alert("Don't keep any field empty");
    } else{
        const newRow=document.createElement('tr');

        //new title
        const newTitle=document.createElement('th');
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);

        //new author
        const newAuthor=document.createElement('th');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);

        //new year
        const newYear=document.createElement('th');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
})