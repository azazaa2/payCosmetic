const contentBlock = document.querySelector('.main__contentBlock');
const paykeeperForm = document.querySelector('.main__paykeeper-form');
const contentBlockBtn = document.querySelector('.a1');
const paykeeperFormClose = document.querySelector('.main__paykeeper-form-close')


contentBlockBtn.addEventListener("click", () => {
    contentBlock.classList.add("active");
    paykeeperForm.classList.add("active");
} );
paykeeperFormClose.addEventListener("click", () => {
    contentBlock.classList.remove("active");
    paykeeperForm.classList.remove("active");
} );
