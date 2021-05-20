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

let preventIteriation=[];
let firstImageindex;
let secondImageindex;
let thirdImageindex;
let votesArr =[];
let numberOfVewisArr=[];

function GetImage(name, path,) {
    this.name = name;
    this.path = path;
    this.numberOfVewis = 0;
    this.votes = 0;
    GetImage.allImages.push(this);


    

}
GetImage.allImages = [];

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

// console.log(GetImage.allImages);


function random() {
    // for (let i = 0; i < GetImage.allImages.length; i++) {


    // }
    return (Math.floor(Math.random() * GetImage.allImages.length));
}
// random()
let imagesArray = [
    'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon',
    'pen', ' scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass', 'pet-sweep']


function render() {
    firstImageindex = random();
    secondImageindex = random();
    thirdImageindex = random();


    // console.log(preventIteriation);
    // console.log(GetImage.allImages[firstImageindex].name);
    while (firstImageindex === secondImageindex || firstImageindex === thirdImageindex || secondImageindex === thirdImageindex


        ||  preventIteriation.includes(firstImageindex)
        || preventIteriation.includes(secondImageindex) || preventIteriation.includes(thirdImageindex)) {
       
        firstImageindex = random();

        secondImageindex = random();
        
        thirdImageindex = random();
        
    }

    preventIteriation = [firstImageindex, secondImageindex, thirdImageindex]

  console.log(preventIteriation);


    firstImageElement.src = GetImage.allImages[firstImageindex].path
    secondImageElement.src = GetImage.allImages[secondImageindex].path
    thirdImageElement.src = GetImage.allImages[thirdImageindex].path
    // }

    GetImage.allImages[firstImageindex].numberOfVewis = GetImage.allImages[firstImageindex].numberOfVewis + 1
    GetImage.allImages[secondImageindex].numberOfVewis = GetImage.allImages[secondImageindex].numberOfVewis + 1
    GetImage.allImages[thirdImageindex].numberOfVewis = GetImage.allImages[thirdImageindex].numberOfVewis + 1

    // GetImage.allImages[firstImageindex].numberOfVewis+1
    // GetImage.allImages[secondImageindex].numberOfVewis+1
    // GetImage.allImages[thirdImageindex].numberOfVewis+1
}
render()

firstImageElement.addEventListener('click', userClick);
secondImageElement.addEventListener('click', userClick);
thirdImageElement.addEventListener('click', userClick);


// function notduplicatedImages() {
// if (userAttempt>1) {


//     while (|| secondImageElement.src ===imagesArray[i] || thirdImageElement.src === imagesArray[i] ) {



//     }



// }





let Form = document.getElementById('Form')
Form.addEventListener('submit', clicktoAdd);
let maxAttempts=25;
function clicktoAdd(event) {
    event.preventDefault();
    maxAttempts = event.target.NumberOfAttempts.value;
    if (maxAttempts < 25) {
        maxAttempts = event.target.NumberOfAttempts.value;
//     } else {
//         maxAttempts = 25;
  }
  Number1.reset()
 }

 
function userClick(event) {
    // console.log(event.target.id);
    userAttempt = userAttempt + 1
    if (userAttempt <= maxAttempts) {
        if (event.target.id === 'first-image') {
            GetImage.allImages[firstImageindex].votes = GetImage.allImages[firstImageindex].votes + 1
            // console.log('first-votes', GetImage.allImages[firstImageindex].votes++);
        }
        else if (event.target.id === 'second-image') {
            GetImage.allImages[secondImageindex].votes = GetImage.allImages[secondImageindex].votes + 1
            // console.log('secong-votes', GetImage.allImages[secondImageindex].votes++);
        }
        else if (event.target.id === 'third-image') {
            GetImage.allImages[thirdImageindex].votes = GetImage.allImages[thirdImageindex].votes + 1
            // console.log('third-votes', GetImage.allImages[thirdImageindex].votes++);
        }
        render();
        // Results()
    }
    else {
        firstImageElement.removeEventListener('click', userClick);
        secondImageElement.removeEventListener('click', userClick);
        thirdImageElement.removeEventListener('click', userClick);
        //  let list=document.getElementById('result')
        //  for (let i = 0; i < GetImage.allImages.length; i++) {
        //      let listelements=document.createElement('li');
        //      list.appendChild(listelements);
        //      listelements.textContent=`${GetImage.allImages[i].name} have ${GetImage.allImages[i].votes}  Votes`
        //  }
    }
}
let resultBottom = document.getElementById('btn')
resultBottom.addEventListener('click', Results);
function Results(event) {
    event.preventDefault();
    let list = document.getElementById('result')
    for (let i = 0; i < GetImage.allImages.length; i++) {
        let listelements = document.createElement('li');
        list.appendChild(listelements);
        listelements.textContent = `${GetImage.allImages[i].name} have ${GetImage.allImages[i].votes}  Votes and had ${GetImage.allImages[i].numberOfVewis}`
        votesArr.push(GetImage.allImages[i].votes)
numberOfVewisArr.push(GetImage.allImages[i].numberOfVewis)
    }
    chart();
    let convertNumbers=JSON.stringify(GetImage.allImages)
   localStorage.setItem('allImages',convertNumbers)
}





// chart///////////////////////////////////////



function chart() {

        let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imagesArray,
        datasets: [{
            label: '# of Votes',
            data: votesArr,
            // label: '# of number of vews',
            // data: numberOfVewisArr,
            backgroundColor: [
                
                'rgba(54, 162, 235, 0.2)',
                
               
            ],
            borderColor: [
                
                
                'rgba(255, 206, 86, 1)',
               
            ],
            borderWidth: 1
        },
    {
    
            label: '# of number of vews',
            data: numberOfVewisArr,
            backgroundColor: [
              
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 1
    }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}


// console.log(votesArr);
// console.log(numberOfVewisArr);
























  // firstImageElement.src = GetImage.allImages[firstImageindex].path
    // secondImageElement.src = GetImage.allImages[secondImageindex].path
    // thirdImageElement.src = GetImage.allImages[thirdImageindex].path


    //    firstImageElement.src = GetImage.allImages [firstImageindex].path
    //    secondImageElement.src = GetImage.allImages [secondImageindex].path
    //    thirdImageElement.src = GetImage.allImages [thirdImageindex].path
    // let preventIteriation = [GetImage.allImages[firstImageindex], GetImage.allImages[secondImageindex], GetImage.allImages[thirdImageindex]]
    //  while  (firstImageElement === preventIteriation[0]
    //     || secondImageElement === preventIteriation[1] || thirdImageElement === preventIteriation[2]) {

    //     firstImageindex = random();
    //     console.log(' firstImageindex after second attept ', firstImageindex);
    //     secondImageindex = random();
    //     console.log(' secondImageindex after second attept ', secondImageindex);
    //     thirdImageindex = random();
    //     console.log(' thirdImageindex afre second attept ', thirdImageindex);

    // firstImageElement.src = GetImage.allImages[firstImageindex].path
    // secondImageElement.src = GetImage.allImages[secondImageindex].path
    // thirdImageElement.src = GetImage.allImages[thirdImageindex].path








    // while (GetImage.allImages [firstImageindex].name === preventIteriation[0] || GetImage.allImages [secondImageindex].name === preventIteriation[1] || GetImage.allImages [thirdImageindex].name === preventIteriation[2] ); 
    // {
    //     firstImageindex= random();
    //     console.log(' firstImageindex after second attept ' , firstImageindex);
    //     secondImageindex= random();
    //     console.log(' secondImageindex after second attept ' , secondImageindex);
    //     thirdImageindex= random();
    //     console.log(' thirdImageindex after second attept ' , thirdImageindex);
    // if (firstImageindex===secondImageindex || firstImageindex===thirdImageindex  || secondImageindex=== thirdImageindex) {
    //     firstImageindex= random();
    //     secondImageindex= random();
    //     thirdImageindex= random();
    // }





    // if (
    //     firstImageElement.src=== preventIteriation[0] 
    //      || secondImageElement.src === preventIteriation[1] || thirdImageElement.src=== preventIteriation[2] )
    // {
    //      firstImageindex= random();
    //  console.log(' firstImageindex before second attept ' , firstImageindex);
    //  // while (firstImageindex===thirdImageindex)

    //  secondImageindex= random();
    //  console.log(' secondImageindex before second attept ' , secondImageindex);

    //  // while (secondImageindex===thirdImageindex)
    //  thirdImageindex= random();

    //  console.log(' thirdImageindex before second attept ' , thirdImageindex);

    // }

    // console.log(firstImageindex);
    // console.log(secondImageindex);
    // console.log(thirdImageindex);
    // else {









// ++++++++++++++++++++++++++++++++++++++++++++++++++++


// let convertNumbers=JSON.stringify(GetImage.allImages)
//    localStorage.setItem('allImages',convertNumbers)

//   console.log(convertNumbers);


function getFromlocal() {
    

let getNumberFromStorage = JSON.parse(localStorage.getItem('allImages'));
console.log('jjjj' , getNumberFromStorage);
do {
    GetImage.allImages=getNumberFromStorage
    
} while (getNumberFromStorage !== null);

render()


}












































