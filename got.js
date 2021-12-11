$(document).ready(function(){
//the url for fetching data

    var charactersUrl = "https://thronesapi.com/api/v2/Characters"
    //element where card will be added
    var charactersElement = $("#characters")

//fetch call to get data
    fetch(charactersUrl)
    .then(response =>response.json())
    .then(data =>{
//data is an array that iterate through
        console.log(data)
for(let i = 0; i < data.length; i++){
    //use each element in the array to customize the card, then append the card to character div
    charactersElement.append(`
    <div class="col-6 col-sm 6 col-md 4 col-lg 4" align="center">
<div class="card" style="width: 18rem;">
<img src="${data[i].imageUrl}" class="card-img-top" height="300">
            <div class="card-body">
            <h5 class="card-title">${data[i].firstName  +" " + data[i].lastName}</h5>
            <button class="btn btn-dark characterButton">${isStringEmpty(data[i].family)}</button>
            </div>
            </div>
            </div>`)
} 

//click event to print each individual house for card
$(".characterButton").on('click', function(){
    //use each buttons inner html to print the house... 
    //this is used to reference the button itself, to grab it's unique inner html
    console.log($(this).html());
    //gets the modal to pop up
    $("#houseModal").modal("show");
    //changes the modal title 
    $('.modal-title').html($(this).html());
    $('.modal-body').html(`Information about ${$(this).html()} with be written here`)
})


    })
})
// function tot check if string is empty, return unknown if it is
function isStringEmpty(str){
    if(str === ""){
        return "UnKnown"
    }else{
        return str;
    }
}


