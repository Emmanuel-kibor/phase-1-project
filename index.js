document.addEventListener('DOMContentLoaded', () =>{
    let formInput = document.getElementById('ppty-form')
    formInput.addEventListener("submit", function (e){
        e.preventDefault()
        
   
       addPpty()
   
       formInput.reset()
    })
   
    function addPpty() {

        const title = document.createElement('h2');
        const location = document.createElement('div'); 
        const details = document.createElement('h3')
        const bids = document.createElement('h3');
        
      
       fetch(`http://localhost:3000/propertyData/${propertyTitle.value}`)
       .then(response => response.json())
           .then(data => {
           
       
           
             
               title.innerText = data.title;
   
               location.innerText = data.location;
   
               details.innerText=data.details;
              
               bids.innerText = data.bids;
              
               });
   
           const container = document.createElement('div')
           container.setAttribute('id', 'container')
           
           container.append(title,details,location,bids)
           
           const myDiv = document.getElementById("ppty-list")
           myDiv.append(container)
             }
   
           
       
   })
const bidForms = document.querySelectorAll("form");

bidForms.forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
        const bidInput = form.querySelector("input[type='number']");
        const bidAmount = bidInput.value;
        alert(`Your bid of $${bidAmount} has been submitted!`);
    });
});