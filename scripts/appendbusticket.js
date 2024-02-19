function seatName (seat) {
    const pseat = seat;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'justify-evenly', 'pl-14', 'py-2');

    const seat_ = document.createElement('p');
    const cls = document.createElement('p');
    const price = document.createElement('p');

    seat_.textContent = pseat;
    console.log(seat_.textContent);
    cls.textContent = 'Economy';
    price.textContent = '550';

    containerDiv.appendChild(seat_);
    containerDiv.appendChild(cls);
    containerDiv.appendChild(price);


    const hrElement = document.createElement('hr');
    hrElement.classList.add('my-3');
    containerDiv.appendChild(hrElement);

    const parentDiv = document.getElementById('bus-ticket-update')

    parentDiv.appendChild(containerDiv);
}   