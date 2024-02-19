
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
            removeAttribute('coupon-button');
        }

        // change the color
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
    }



    // Updating Grand Total Price


    })

}




