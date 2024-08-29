
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.fa-star');
    let lastClickedStar = -1;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (lastClickedStar === this) {
                this.classList.remove('colored');
                lastClickedStar = -1;
            } else {
                stars.forEach(s => s.classList.remove('colored'));
                for (let i = 0; i <= Array.from(stars).indexOf(this); i++) {
                    stars[i].classList.add('colored');
                }
                lastClickedStar = this;
            }
        });
    });
});
document.querySelector('.fa-heart').addEventListener('click', function() {
});
