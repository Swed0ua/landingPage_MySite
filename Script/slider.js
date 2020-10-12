let slideList = document.querySelectorAll('.news__slide'),
 slidePos = slideList.length / 2;

 function CurrentGear (i){
    let currentPos = i;
    let currentList = document.querySelectorAll('.slide__currentItem');
     for (let j = 0; j<currentList.length; j++){
        currentList[j].classList.remove('slide__currentItem_Active');
        }
     
        currentList[i].classList.add('slide__currentItem_Active');
        slidePos = i+1;
        sliderJsFile(0);
}

function sliderJsFile (n) {
    slidePos =  Math.round(slidePos);
    

    const CurrentAutoGear = (i) => {
        let currentPos = i;
        let currentList = document.querySelectorAll('.slide__currentItem');
         for (let j = 0; j<currentList.length; j++){
            currentList[j].classList.remove('slide__currentItem_Active');
            }
         
            currentList[i].classList.add('slide__currentItem_Active');
            slidePos = i+1;
    }
    CurrentAutoGear(slidePos-1);

    if(n == null){
        n = 0
    }

    let slider = document.querySelector('.news__slider'),
        slideWidth = -slideList[0].offsetWidth-40,
        windowWidth = document.querySelector('body').offsetWidth;

    
    for (let i = 0; i<slideList.length; i++){
        let slideNumber = slideList[i].querySelector('.slide__number');
        let sliderMN = i+1;

        slideNumber.innerHTML = "0" + sliderMN;
    }

    const SliderGear = (a) => {
       
        SliderLimit(a);
        SliderButton();
       
        
        let MarginLeft__slider = (windowWidth/2) + (slidePos * slideWidth) - (slideWidth/2);
        slider.style.marginLeft = MarginLeft__slider  + "px";
        console.log(slidePos);       
}


const SliderButton = () => {
    if (slidePos + 1 > slideList.length){
        document.querySelector('.slider__buttonRight').classList.add('slide__buttonLimitOn');
    } else {
        document.querySelector('.slider__buttonRight').classList.remove('slide__buttonLimitOn');
    }
    
    if ( slidePos + -1 <= 0){
        document.querySelector('.slider__buttonLeft').classList.add('slide__buttonLimitOn');
    } else {
        document.querySelector('.slider__buttonLeft').classList.remove('slide__buttonLimitOn');
    }
}
const SliderLimit = (a) => {
         if (slidePos + a > slideList.length || slidePos + a <= 0){
            slidePos = slidePos;
        } else {
            slidePos += a;
        }

    }



    SliderGear(n);
}


setTimeout(sliderJsFile, 0);
setInterval(sliderJsFile, 1000);