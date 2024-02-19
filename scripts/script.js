
const buttonElements = document.querySelectorAll('.seat');

let updatedSeatNumber = 0;

for (const element of buttonElements) {

    element.addEventListener('click', function(){
        updatedSeatNumber++;

    // How many Seats are Left section
    const totalSeats = parseFloat(getElementInnerTextById('forty-seats'));

    if(totalSeats < 37) {
        alert ('You cannot select more than 4 seats!');
    }

    else {

        if(totalSeats === 37) {
            removeAttributeDisabled('coupon-button');
        }

        // change the color
        element.setAttribute('disabled', true);
        element.style.backgroundColor = '#1DD100';
        setBackgroundColorById(element.innerText);


        // Updating Seat Number
        setElementInnerTextById('selected-seat', updatedSeatNumber);    
        const remainingSeats = totalSeats - 1;

        setElementInnerTextById('forty-seats', remainingSeats)
        

        // Adding Seats to the Section
        seatName(element.innerText);
        
        
        // Updating Total Price
        const totalPrice = updatedSeatNumber * 550;
        setElementInnerTextById('total-price', totalPrice)
        setElementInnerTextById('grand-total',totalPrice)

        // Updating Grand Price
        getTotalPrice(totalPrice);

    }

    })
}


function seatUpdate() {
    if (updatedSeatNumber !== 0) {
    successPage();
    }
    
    else {
        alert('Please select at least one seat!')
    }
    
}


function successPage() {
    const passengerName = document.getElementById('passenger-name').value;

    const passengerNumber = document.getElementById('passenger-number').value;

    if (passengerName === "" || passengerNumber=== "" ) {
        alert('Please fill the field with *');
        return;
    }
    else {
    }

    hideElementId('header');
    hideElementId('bestOffers'); 
    hideElementId('seatSelection');
    hideElementId('footer');
    showElementId('successSection'); 
}

function continueButton(){
    location.reload();
}





