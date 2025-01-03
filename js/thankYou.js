document.addEventListener('DOMContentLoaded', () => {
    const rateSpan = document.getElementById('rate');

    if(rateSpan){
        const rating = localStorage.getItem('rateValue');
        rateSpan.textContent = rating;
    }
})