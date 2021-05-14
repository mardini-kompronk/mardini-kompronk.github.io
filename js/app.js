// navbar toggle

function navbarToggle() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('navigation-active');
}

// function scrool to section 

function scroolToSection(e) {
    const section = document.querySelector(`${e}`);
    section.scrollIntoView({
        behavior: 'smooth'
    })
}


// get data project from data json

fetch('asset/data-json/data-project.json')
    .then(res => res.json())
    .then(datas => {
        const projectContainer = document.querySelector('.project-container');
        datas.reverse().map(data => {
            projectContainer.innerHTML += `<div class="card">
            <img src="${data.image}">
            <span class="card-tittle">${data.name}</span>
            <a href="${data.url}" target="_blank"><button class="btn-visit">Visit</button></a>
            <a href="${data.github}" target="_blank"><button class="btn-src-code">Source</button></a>
        </div>`
        })
    })

// scroll animation on about section

function scrollAnimAbout() {
    // get elements
    const mySkill = document.querySelector('.myskill');
    const htmlProg = document.querySelector('.html-prog');
    const cssProg = document.querySelector('.css-prog');
    const jsProg = document.querySelector('.js-prog');

    // get position

    const myskillPosition = mySkill.getBoundingClientRect().top
    if (myskillPosition < window.innerHeight / 1.3) {
        mySkill.style.transform = 'scale(1)'
        setTimeout(() => {
            htmlProg.style.width = '80%';
            cssProg.style.width = '85%';
            jsProg.style.width = '75%';
        }, 1000);
    }
}

window.addEventListener('scroll', scrollAnimAbout);

// function slide certificate 

// let iImg = 0;

// fetch('asset/data-json/data-certificate.json')
//     .then(res => res.json())
//     .then(datas => {
//         const cardCertificate = document.querySelector('.card-certificate');
//         cardCertificate.innerHTML = ''
//         cardCertificate.innerHTML += `<a href="${datas[iImg].img}"><img src="${datas[iImg].img}"></a>`
//     })

// function arrowRight() {
//     iImg += 1
//     fetch('asset/data-json/data-certificate.json')
//         .then(res => res.json())
//         .then(datas => {
//             if (iImg > datas.length - 1) {
//                 iImg = 0
//             }
//             const cardCertificate = document.querySelector('.card-certificate');
//             cardCertificate.innerHTML = ''
//             cardCertificate.innerHTML += `<a href="${datas[iImg].img}"><img src="${datas[iImg].img}"></a>`
//         })
// }

// function arrowLeft() {
//     iImg -= 1
//     fetch('asset/data-json/data-certificate.json')
//         .then(res => res.json())
//         .then(datas => {
//             if (iImg < 0) {
//                 iImg = datas.length - 1
//             }
//             const cardCertificate = document.querySelector('.card-certificate');
//             cardCertificate.innerHTML = ''
//             cardCertificate.innerHTML += `<a href="${datas[iImg].img}"><img src="${datas[iImg].img}"></a>`
//         })
// }

const slideImg = [];

slideImg[0] = 'asset/img/cer-01.jpg';
slideImg[1] = 'asset/img/cer-02.jpg';
slideImg[2] = 'asset/img/cer-03.jpg';
slideImg[3] = 'asset/img/cer-04.jpg';
slideImg[4] = 'asset/img/cer-05.jpg';
slideImg[5] = 'asset/img/cer-06.jpg';
slideImg[6] = 'asset/img/cer-07.jpg';
slideImg[7] = 'asset/img/cer-08.jpg';
slideImg[8] = 'asset/img/cer-09.jpg';

let iImg = 0;

document.img.src = slideImg[iImg];
document.querySelector('.urlImg').href = slideImg[iImg];

function arrowRight() {
    iImg += 1
    if (iImg > slideImg.length - 1) {
        iImg = 0
    }
    document.img.src = slideImg[iImg];
    document.querySelector('.urlImg').href = slideImg[iImg];
}

function arrowLeft() {
    iImg -= 1
    if (iImg < 0) {
        iImg = slideImg.length - 1
    }
    document.img.src = slideImg[iImg];
    document.querySelector('.urlImg').href = slideImg[iImg];
}


