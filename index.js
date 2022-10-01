const ratingBtn = document.querySelectorAll('.rating-btn');
const ratingCard = document.querySelector('#userRatingCard');
const sumittedCard = document.querySelector('#sumittedCard');
const submitBtn = document.querySelector('#submitBtn');
const rating = document.querySelector('.rating-given');
const errorMsg = document.querySelector('.error-msg');
let selectedIndex = -1;
for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', () => {
        errorMsg.classList.add('hidden');
        if (selectedIndex == -1) {
            selectedIndex = i;
        } else {
            ratingBtn[selectedIndex].classList.remove('focused');
        }
        ratingBtn[i].classList.add('focused');
        selectedIndex = i;
    })
}

submitBtn.addEventListener('click', () => {
    if (selectedIndex == -1) {
        errorMsg.classList.remove('hidden');
    } else {
        rating.innerText = selectedIndex + 1;
        ratingCard.classList.add('hidden');
        sumittedCard.classList.remove('hidden');
    }
})