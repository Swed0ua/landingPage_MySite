//  open / close Burger menu

let MenuValue = document.querySelector('.header__menu>ul');
let BurgerMenuValue = document.querySelector('.burgerMenu');
let MenuValueClone = MenuValue.cloneNode(true);
BurgerMenuValue.append(MenuValueClone);


function burgerMenu() {
    const line = {
        l: document.querySelector('.line'),
        l1: document.querySelector('.line1'),
        l2: document.querySelector('.line2'),
        l3: document.querySelector('.line3'),
    }

    
    BurgerMenuValue.classList.toggle('burgerMenuOpen');


    

    line.l.classList.toggle('line_open')
    line.l1.classList.toggle('line1_open')
    line.l2.classList.toggle('line2_open')
    line.l3.classList.toggle('line3_open')
}


function DescItemNum () {
    let Item = document.querySelectorAll('.item__num');

    for (let i = 0; i<Item.length; i++){
        Item[i].innerHTML = i + 1;
    }
}

setTimeout(DescItemNum, 0);
