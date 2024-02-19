
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
        // disableButton(element)
        // addButtonClickListeners();
        
        
        // Updating Total Price
        const totalPrice = updatedSeatNumber * 550;
        setElementInnerTextById('total-price', totalPrice)

        // Updating Grand Price
        getTotalPrice(totalPrice);

    }


    // Updating Grand Total Price


    })


}




