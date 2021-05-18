'use strict';
let firstImageElement = document.getElementById('first-image')
let secondImageElement = document.getElementById('second-image')
let thirdImageElement = document.getElementById('third-image')
// let maxAttempts;

// let enter=prompt('enter maxAttempts')
// if (enter>25) {
//     maxAttempts=25
// }
// else if (enter<25) {

//     maxAttempts=enter
// }

let userAttempt = 0;

// console.log(maxAttempts);


let firstImageindex;
let secondImageindex ;
let thirdImageindex ;

let allImages = []
function GetImage(name, path, ) {
    this.name = name;
    this.path = path;
    this.numberOfVewis = 0;
    this.votes = 0;
    allImages.push(this);
}
new GetImage('bag', 'Img/bag.jpg');
new GetImage('banana', 'Img/banana.jpg');
new GetImage('bathroom', 'Img/bathroom.jpg');
new GetImage('boots', 'Img/boots.jpg');
new GetImage('breakfast', 'Img/breakfast.jpg');
new GetImage('bubblegum', 'Img/bubblegum.jpg');
new GetImage('chair', 'Img/chair.jpg');
new GetImage('cthulhu', 'Img/cthulhu.jpg');
new GetImage('dog-duck', 'Img/dog-duck.jpg');
new GetImage('dragon', 'Img/dragon.jpg');
new GetImage('pen', 'Img/pen.jpg');
new GetImage('scissors', 'Img/scissors.jpg');
new GetImage('shark', 'Img/shark.jpg');
new GetImage('sweep', 'Img/sweep.png');
new GetImage('tauntaun', 'Img/tauntaun.jpg');
new GetImage('unicorn', 'Img/unicorn.jpg');
new GetImage('water-can', 'Img/water-can.jpg');
new GetImage('wine-glass', 'Img/wine-glass.jpg');
new GetImage('pet-sweep', 'Img/pet-sweep.jpg');

function random () {
    // for (let i = 0; i < allImages.length; i++) {
        
        
    // }
        return (Math.floor(Math.random () * allImages.length));
    }
    // random()

function render () {
 firstImageindex= random();
 secondImageindex = random();
 thirdImageindex = random();
while (firstImageindex===secondImageindex)
secondImageindex= random();

while (firstImageindex===thirdImageindex)
firstImageindex= random();

while (secondImageindex===thirdImageindex)
thirdImageindex= random();

// console.log(firstImageindex);
// console.log(secondImageindex);
// console.log(thirdImageindex);
firstImageElement.src = allImages [firstImageindex].path
secondImageElement.src = allImages [secondImageindex].path
thirdImageElement.src = allImages [thirdImageindex].path


allImages[firstImageindex].numberOfVewis=allImages[firstImageindex].numberOfVewis + 1
allImages[secondImageindex].numberOfVewis=allImages[secondImageindex].numberOfVewis+1 
allImages[thirdImageindex].numberOfVewis=allImages[thirdImageindex].numberOfVewis+1 



}
render () 

firstImageElement.addEventListener('click' , userClick);
secondImageElement.addEventListener('click' , userClick);
thirdImageElement.addEventListener('click' , userClick);



let Form=document.getElementById('Form')
Form.addEventListener('submit', clicktoAdd);

let maxAttempts=25;
function clicktoAdd (event) {
    
    event.preventDefault();
    maxAttempts=event.target.NumberOfAttempts.value;
if (maxAttempts<25) {
    maxAttempts=event.target.NumberOfAttempts.value;
    
// } else {
//     maxAttempts=25;
    
}
}









function userClick(event) {
    // console.log(event.target.id);
    userAttempt = userAttempt +1 

    if (userAttempt <=  maxAttempts){
if (event.target.id==='first-image'){
allImages[firstImageindex].votes=allImages[firstImageindex].votes + 1


// console.log('first-votes', allImages[firstImageindex].votes++);
}
  else if (event.target.id==='second-image'){
        allImages[secondImageindex].votes=allImages[secondImageindex].votes+1 
        
       
        // console.log('secong-votes', allImages[secondImageindex].votes++);
            }
   else  if  (event.target.id==='third-image'){
                allImages[thirdImageindex].votes=allImages[thirdImageindex].votes+1 
                
                
                // console.log('third-votes', allImages[thirdImageindex].votes++);
                    }      

                                
         
    render(); 

    // Results()
                }
                
     else {
     firstImageElement.removeEventListener('click', userClick);
     secondImageElement.removeEventListener('click', userClick);
     thirdImageElement.removeEventListener('click', userClick); 


    //  let list=document.getElementById('result')
    //  for (let i = 0; i < allImages.length; i++) {
    //      let listelements=document.createElement('li');
    //      list.appendChild(listelements);
    //      listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes`
     
    //  }
    }
}







     let resultBottom=document.getElementById('btn')
    resultBottom.addEventListener('click', Results);

function Results (event) {
    event.preventDefault(); 
    let list=document.getElementById('result')
    for (let i = 0; i < allImages.length; i++) {
        let listelements=document.createElement('li');
        list.appendChild(listelements);
        listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes and had ${allImages[i].numberOfVewis}`
    
    }
    
}










    
//      let resultBottom=document.getElementById('print')
//     resultBottom.addEventListener('submit', userClick);

//                 let list=document.getElementById('result')
//                 for (let i = 0; i < allImages.length; i++) {
//                     let listelements=document.createElement('li');
//                     list.appendChild(listelements);
//                     listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes`
                
//             }


// maxAttempts = allImages [firstImageindex].path;


// function userClick(event) {

//     maxAttempts=document.getElementById('NumberOfAttempts').value
// }


// maxAttempts.addEventListener('submit' , userClick);

// console.log(maxAttempts);


// maxAttempts= document.getElementById('NumberOfAttempts').value,


// let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
// const addMovie = (ev)=>{
//     ev.preventDefault();  //to stop the form submitting
//     let movie = {
//         id: Date.now(),
//         title: document.getElementById('title').value,
//         year: document.getElementById('yr').value
//     }
//     movies.push(movie);
//     document.forms[0].reset(); // to clear the form for the next entries
//     //document.querySelector('form').reset();

//     //for display purposes only
//     console.warn('added' , {movies} );
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

//     //saving to localStorage
//     localStorage.setItem('MyMovieList', JSON.stringify(movies) );
// }
// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btn').addEventListener('click', addMovie);
// });



// function Results(event){ 
//     event.preventDefault();
//     // let inputF = document.getElementById("NumberOfAttempts");
//     // inputF.value = maxAttempts;
//     document.getElementById("NumberOfAttempts").value = maxAttempts;

//     // maxAttempts.event.target.NumberOfAttempts.value
   
   
// }
// // maxAttempts=document.getElementById('NumberOfAttempts');
// // maxAttempts.addEventListener('submit', Results);
// console.log(maxAttempts);




// let list=document.getElementById('result')
// for (let i = 0; i < allImages.length; i++) {
//     let listelements=document.createElement('li');
//     list.appendChild(listelements);
//     listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes`

// }




// let resultBottom=document.getElementById('print')
//     resultBottom.addEventListener('submit', Results);


//     let list=document.getElementById('result')
// function Results(event)  {
//     let result4=event.target.print.value
//     console.log(result4);

//         firstImageElement.removeEventListener('click', userClick);
//         secondImageElement.removeEventListener('click', userClick);
//         thirdImageElement.removeEventListener('click', userClick);
    
           
           
    

//     firstImageElement.removeEventListener('click', userClick);
//     secondImageElement.removeEventListener('click', userClick);
//     thirdImageElement.removeEventListener('click', userClick);

//         let list=document.getElementById('result')
//         for (let i = 0; i < allImages.length; i++) {
//             let listelements=document.createElement('li');
//             list.appendChild(listelements);
//             listelements.textContent=`${allImages[i].name} have ${allImages[i].votes} Vote`



//     }

// }
    // while (event.target.id==='first-image') {
    //     allImages[firstImageindex].votes=allImages[firstImageindex].votes + 1
    
    // }
    // while (event.target.id==='second-image') {
    //     allImages[secondImageindex].votes=allImages[secondImageindex].votes + 1
    
    // }
    // while (event.target.id==='third-image') {
    //     allImages[thirdImageindex].votes=allImages[thirdImageindex].votes + 1
    
    // }
    
    
    
    
    
    // {
    //         firstImageElement.removeEventListener('click', userClick);
    //         secondImageElement.removeEventListener('click', userClick);
    //         thirdImageElement.removeEventListener('click', userClick);
        
    //             let list=document.getElementById('result')
    //             for (let i = 0; i < allImages.length; i++) {
    //                 let listelements=document.createElement('li');
    //                 list.appendChild(listelements);
    //                 listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes`
                
            //}
            // render(); 