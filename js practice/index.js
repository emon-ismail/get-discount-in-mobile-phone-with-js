// function findDiscount()

document.getElementById('discount-button').addEventListener('click', function() {
    const  discountCodeField=document.getElementById("discount-code-input");
    const newInputCodeField=discountCodeField.value;
    discountCodeField.value=' ';
    const mobilePriceWithoutDiscount=document.getElementById('mobile-price-without-discount');
    const mobilePreviousOriginalPrice=mobilePriceWithoutDiscount.innerText;

    if (newInputCodeField=='dom') {

        discountValue=mobilePriceWithoutDiscount.innerText/100;
        discountValueNew=discountValue*30;
        finalDiscount=mobilePriceWithoutDiscount.innerText - discountValueNew;
        mobilePriceWithoutDiscount.innerText=finalDiscount;
}
else{
    alert('Invalid code');
}


})


document.getElementById('discount-button-2').addEventListener('click', function() {
    const  discountCodeField=document.getElementById("discount-code-input-2");
    const newInputCodeField=discountCodeField.value;
    discountCodeField.value=' ';
    const mobilePriceWithoutDiscount=document.getElementById('mobile-price-without-discount-2');
    const mobilePreviousOriginalPrice=mobilePriceWithoutDiscount.innerText;

    if (newInputCodeField=='dom') {

        discountValue=mobilePriceWithoutDiscount.innerText/100;
        discountValueNew=discountValue*30;
        finalDiscount=mobilePriceWithoutDiscount.innerText - discountValueNew;
        mobilePriceWithoutDiscount.innerText=finalDiscount;
}
else{
    alert('Invalid code');
}


})