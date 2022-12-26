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

// 스크롤 시 홈 화면 투명하게 만들기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    console.log('scroll');
});

// 스크롤 시 화면 상단으로 올리는 화살표 버튼 표시
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// 화살표 버튼 클릭 시 홈으로 이동
const handleArrowUp = () => {
    arrowUp.removeEventListener('click', handleArrowUp);
    scrollIntoView('#home');
    setTimeout(() => {
        arrowUp.addEventListener('click', handleArrowUp);
    }, 1000);
    console.log('click');
};
arrowUp.addEventListener('click', handleArrowUp);

// 스크롤뷰 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}