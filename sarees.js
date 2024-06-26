document.querySelectorAll('.filter-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const toggle = title.querySelector('.toggle');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            toggle.textContent = '+';
        } else {
            content.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});

const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');

minPrice.addEventListener('input', () => {
    minPriceValue.textContent = `$${minPrice.value}.00`;
});

maxPrice.addEventListener('input', () => {
    maxPriceValue.textContent = `$${maxPrice.value}.00`;
});
