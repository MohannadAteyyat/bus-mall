'use strict';
let firstImageElement = document.getElementById('first-image')
let secondImageElement = document.getElementById('second-image')
let thirdImageElement = document.getElementById('third-image')


let maxAttempts = 25;
let userAttempt = 0;




let firstImageindex;
let secondImageindex ;
let thirdImageindex ;




let allImages = []

function GetImage(name, path, numberOfVewis) {

    this.name = name;
    this.path = path;
    this.numberOfVewis = numberOfVewis;
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
new GetImage('pet-sweep', 'Img/pet-sweep.jpg');
new GetImage('scissors', 'Img/scissors.jpg');
new GetImage('shark', 'Img/shark.jpg');
new GetImage('sweep', 'Img/sweep.png');

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
firstImageindex= random();
// console.log(firstImageindex);
// console.log(secondImageindex);
// console.log(thirdImageindex);
firstImageElement.src = allImages [firstImageindex].path;
secondImageElement.src = allImages [secondImageindex].path;
thirdImageElement.src = allImages [thirdImageindex].path;
}
render () 

firstImageElement.addEventListener('click' , userClick);
secondImageElement.addEventListener('click' , userClick);
thirdImageElement.addEventListener('click' , userClick);



function userClick(event) {
    // console.log(event.target.id);
    userAttempt = userAttempt +1 

    if (userAttempt <  maxAttempts){
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
     
    
     let resultBottom=document.getElementById('print')
    resultBottom.addEventListener('submit', userClick);

                let list=document.getElementById('result')
                for (let i = 0; i < allImages.length; i++) {
                    let listelements=document.createElement('li');
                    list.appendChild(listelements);
                    listelements.textContent=`${allImages[i].name} have ${allImages[i].votes}  Votes`
                
            }

}
    
}






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