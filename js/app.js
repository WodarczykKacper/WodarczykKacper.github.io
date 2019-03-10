class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isStarting = true;
    }
}

TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    
    if(this.isStarting){
        this.txt = fullTxt.substring(0,this.txt.length + 1)
    }
    
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), 100)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}


document.addEventListener('scroll', headerBG);

function headerBG(){
    const header = document.getElementById('header');
    let scrollPos = window.scrollY;
    if(scrollPos>0){
//        header.style.backgroundColor = 'black';
        header.style.height = '8vh';
    }else{
        header.style.height = '0vh';
    }
}



//
//
//function openMenu() {
//    let list = document.querySelector('header ul');
//    let menu = document.getElementById('menu-burger');
//    menu.addEventListener('click', function () {
//        list.classList.toggle('openMenu');
//    })
//}
//
//function burger(){
//    const firLine = document.getElementById('fline');
//    const secLine = document.getElementById('sline');
//    const thiLine = document.getElementById('tline');
//    const burger = document.getElementById('menu-burger');
//    
//    burger.addEventListener('click', function(){
//        firLine.classList.toggle('gofirst');
//        secLine.classList.toggle('gosecond');
//        thiLine.classList.toggle('gothird');
//    })
//}
//function nav(){
//    const load = document.getElementById('loading');
//    const bo = Math.round(pageYOffset / (document.documentElement.offsetHeight - window.outerHeight) * 100);
//    load.style.width = bo + '%';
//}
//
//window.addEventListener('scroll', nav);
//window.addEventListener('scroll', showArrow);




