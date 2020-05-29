//Slide movement function
function slidesOffset(){
    var sOffset = -100 * iCurrent + '%'
    var oSlides = document.querySelector('.slides')
    oSlides.style.left = sOffset
}

function moveNext(){
    iCurrent++

    if(iCurrent >= iTotal){
        iCurrent = iTotal - 1 
    }

    slidesOffset()
}

function movePrev(){
    iCurrent--

    if(iCurrent <= 0){
        iCurrent = 0
    }

    slidesOffset()
}

var oTotal = document.querySelector('.slides')

var iCurrent = 0
var iTotal = oTotal.children.length

var oNext = document.querySelector('.btn-right')
oNext.addEventListener('click', moveNext)

var oPrev = document.querySelector('.btn-left')
oPrev.addEventListener('click', movePrev)