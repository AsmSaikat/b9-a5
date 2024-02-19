
const buttonElements = document.querySelectorAll('.seat');
let updatedSeatNumber = 0;

for (const element of buttonElements) {

    element.addEventListener('click', function(){
        updatedSeatNumber++;
        setBackgroundColorById(element.innerText);


    // Updating Seat Number
    setElementInnerTextById('selected-seat', updatedSeatNumber);

    const fortySeats = getElementInnerTextById('forty-seats');
    console.log(fortySeats);
    let newSeatNumber = parseFloat(fortySeats) - parseFloat(updatedSeatNumber);
    console.log(newSeatNumber);

    // How many Seats are Left section
    setElementInnerTextById('forty-seats', newSeatNumber)

    })

}




