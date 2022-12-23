'use strict';

// navbar보다 아래로 스크롤 됐을 때 이벤트 추가
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// 클릭 시 스크롤 이벤트 추가
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    
    scrollIntoView(link);
});

// 버튼 클릭 시 스크롤 이벤트 추가
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
});

// 스크롤뷰 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}