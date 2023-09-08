document.addEventListener('DOMContentLoaded', function() {
    const firstParagraphElement = document.getElementById('first-paragraph');
    console.log(firstParagraphElement, typeof firstParagraphElement);

    setTimeout(function() {
        firstParagraphElement.textContent = 'Paragraph was replaced';
    }, 2000);

    const shoppingListElement = document.getElementById('shopping-list');
    const naItems = shoppingListElement.getElementsByClassName('na');
    console.log(naItems, typeof naItems);

    for(naItem of naItems) {
        console.log(naItem.innerHTML);
        console.log(naItem.textContent);
        console.log(naItem.attributes);
        for (cheie in naItem.attributes) {
            // console.log(naItem.attributes[cheie]);
            console.log(naItem.dataset.id, naItem.dataset.slug);
        }
        naItem.style.color = 'gray';
        naItem.classList.add('blurat');
        // const checkboxElement = naItem.getElementsByTagName('input')[0];
        const checkboxElement = naItem.childNodes[0];
        console.log(checkboxElement);
        // checkboxElement.checked = true;
        checkboxElement.disabled = true;
    }
})

window.addEventListener('load', function() {
    console.log('toate resursele sunt gata');
});
