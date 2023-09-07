const navBtn = document.querySelector('.nav-btn');
const navigation = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    navigation.classList.toggle('show-nav');
});