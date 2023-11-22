const showMore = document.querySelector('.show-more-button');
const content = document.querySelector('.hidden');

showMore.addEventListener('click', () => {
    content.classList.toggle('.show');
    // content.classList.toggle('.visible');
});
