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
let secondImageindex;
let thirdImageindex;
let votesArr =[];
let numberOfVewisArr=[];
let allImages = [];
function GetImage(name, path,) {
    this.name = name;
    this.path = path;
    this.numberOfVewis = 0;
    this.votes = 0;
    allImages.push(this);
}
new GetImage('bag', 'Img/Img/bag.jpg');
new GetImage('banana', 'Img/Img/banana.jpg');
new GetImage('bathroom', 'Img/Img/bathroom.jpg');
new GetImage('boots', 'Img/Img/boots.jpg');
new GetImage('breakfast', 'Img/Img/breakfast.jpg');
new GetImage('bubblegum', 'Img/Img/bubblegum.jpg');
new GetImage('chair', 'Img/Img/chair.jpg');
new GetImage('cthulhu', 'Img/Img/cthulhu.jpg');
new GetImage('dog-duck', 'Img/Img/dog-duck.jpg');
new GetImage('dragon', 'Img/Img/dragon.jpg');
new GetImage('pen', 'Img/Img/pen.jpg');
new GetImage('scissors', 'Img/Img/scissors.jpg');
new GetImage('shark', 'Img/Img/shark.jpg');
new GetImage('sweep', 'Img/Img/sweep.png');
new GetImage('tauntaun', 'Img/Img/tauntaun.jpg');
new GetImage('unicorn', 'Img/Img/unicorn.jpg');
new GetImage('water-can', 'Img/Img/water-can.jpg');
new GetImage('wine-glass', 'Img/Img/wine-glass.jpg');
new GetImage('pet-sweep', 'Img/Img/sweep.png');

// console.log(allImages);


function random() {
    // for (let i = 0; i < allImages.length; i++) {


    // }
    return (Math.floor(Math.random() * allImages.length));
}
// random()
let imagesArray = [
    'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon',
    'pen', ' scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass', 'pet-sweep']


function render() {
    firstImageindex = random();
    secondImageindex = random();
    thirdImageindex = random();


    let preventIteriation = [allImages[firstImageindex].name, allImages[secondImageindex].name, allImages[thirdImageindex].name]
    // console.log(preventIteriation);
    // console.log(allImages[firstImageindex].name);
    while (firstImageindex === secondImageindex || firstImageindex === thirdImageindex || secondImageindex === thirdImageindex


        || imagesArray[firstImageindex] === preventIteriation[0]
        || imagesArray[secondImageindex] === preventIteriation[1] || imagesArray[thirdImageindex] === preventIteriation[2]) {
        // console.log(preventIteriation[0]);
        firstImageindex = random();

        // console.log(' firstImageindex before second attept ', firstImageindex);
        // while (firstImageindex===thirdImageindex)

        secondImageindex = random();
        // console.log(' secondImageindex before second attept ', secondImageindex);


        // while (secondImageindex===thirdImageindex)
        thirdImageindex = random();
        // console.log(' thirdImageindex before second attept ', thirdImageindex);
    }

    // firstImageElement.src = allImages[firstImageindex].path
    // secondImageElement.src = allImages[secondImageindex].path
    // thirdImageElement.src = allImages[thirdImageindex].path


    //    firstImageElement.src = allImages [firstImageindex].path
    //    secondImageElement.src = allImages [secondImageindex].path
    //    thirdImageElement.src = allImages [thirdImageindex].path
    // let preventIteriation = [allImages[firstImageindex], allImages[secondImageindex], allImages[thirdImageindex]]
    //  while  (firstImageElement === preventIteriation[0]
    //     || secondImageElement === preventIteriation[1] || thirdImageElement === preventIteriation[2]) {

    //     firstImageindex = random();
    //     console.log(' firstImageindex after second attept ', firstImageindex);
    //     secondImageindex = random();
    //     console.log(' secondImageindex after second attept ', secondImageindex);
    //     thirdImageindex = random();
    //     console.log(' thirdImageindex afre second attept ', thirdImageindex);

    // firstImageElement.src = allImages[firstImageindex].path
    // secondImageElement.src = allImages[secondImageindex].path
    // thirdImageElement.src = allImages[thirdImageindex].path








    // while (allImages [firstImageindex].name === preventIteriation[0] || allImages [secondImageindex].name === preventIteriation[1] || allImages [thirdImageindex].name === preventIteriation[2] ); 
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
    firstImageElement.src = allImages[firstImageindex].path
    secondImageElement.src = allImages[secondImageindex].path
    thirdImageElement.src = allImages[thirdImageindex].path
    // }

    allImages[firstImageindex].numberOfVewis = allImages[firstImageindex].numberOfVewis + 1
    allImages[secondImageindex].numberOfVewis = allImages[secondImageindex].numberOfVewis + 1
    allImages[thirdImageindex].numberOfVewis = allImages[thirdImageindex].numberOfVewis + 1

    allImages[firstImageindex].numberOfVewis+1
    allImages[secondImageindex].numberOfVewis+1
    allImages[thirdImageindex].numberOfVewis+1
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
let maxAttempts=25
function clicktoAdd(event) {
    event.preventDefault();
    maxAttempts = event.target.NumberOfAttempts.value;
    if (maxAttempts < 25) {
        maxAttempts = event.target.NumberOfAttempts.value;
    // } else {
    //     maxAttempts = 25;
    }
}
function userClick(event) {
    // console.log(event.target.id);
    userAttempt = userAttempt + 1
    if (userAttempt <= maxAttempts) {
        if (event.target.id === 'first-image') {
            allImages[firstImageindex].votes = allImages[firstImageindex].votes + 1
            // console.log('first-votes', allImages[firstImageindex].votes++);
        }
        else if (event.target.id === 'second-image') {
            allImages[secondImageindex].votes = allImages[secondImageindex].votes + 1
            // console.log('secong-votes', allImages[secondImageindex].votes++);
        }
        else if (event.target.id === 'third-image') {
            allImages[thirdImageindex].votes = allImages[thirdImageindex].votes + 1
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
let resultBottom = document.getElementById('btn')
resultBottom.addEventListener('click', Results);
function Results(event) {
    event.preventDefault();
    let list = document.getElementById('result')
    for (let i = 0; i < allImages.length; i++) {
        let listelements = document.createElement('li');
        list.appendChild(listelements);
        listelements.textContent = `${allImages[i].name} have ${allImages[i].votes}  Votes and had ${allImages[i].numberOfVewis}`
        votesArr.push(allImages[i].votes)
numberOfVewisArr.push(allImages[i].numberOfVewis)
    }
    chart();
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