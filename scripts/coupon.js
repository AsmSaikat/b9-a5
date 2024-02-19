let totalPrice;

function getTotalPrice (total) {
    totalPrice = total;
}

const applyButton = document.getElementById('coupon-button').addEventListener('click', function (){
    const couponInput = getElementById('coupon-input').value;
    document.getElementById('coupon-input').value = '';

    if(couponInput === 'NEW15') {

        const totalDiscount = totalPrice - (totalPrice * .15);
        setElementInnerTextById('total-discounted-price', totalDiscount);
        setElementInnerTextById('grand-total',totalDiscount)


        removeAttributeHidden('discount-price')
        hideElementById('coupon-input');
        hideElementById('coupon-button');
    }

    else if (couponInput === 'Couple 20'){

        const totalDiscount = totalPrice - (totalPrice * .20);
        setElementInnerTextById('total-discounted-price', totalDiscount);
        setElementInnerTextById('grand-total',totalDiscount)


        removeAttributeHidden('discount-price')
        hideElementById('coupon-input');
        hideElementById('coupon-button');
    }

    else {
        alert('Please Give a Valid Coupon!');
    }

})