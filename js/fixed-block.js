const fixedBlock = document.querySelector('.filters-price'),
    filters = document.querySelector('.filters'),
    container = document.querySelector('.container'),
    offsetLeft = container.offsetLeft + 15,
    filtersOffsetTop = filters.offsetTop,
    filtersWidth = filters.offsetWidth,
    smallOffset = 20

    console.log(filtersWidth)

const fixedScrollBlock = () => {
    let scrollDistance = window.scrollY
    
    if(scrollDistance > (filtersOffsetTop - smallOffset) && scrollDistance <= (filters.offsetHeight + filtersOffsetTop)){
        fixedBlock.style.left = `${offsetLeft}px`
        fixedBlock.style.width = `${filtersWidth}px`
        fixedBlock.classList.remove('absolute')
        fixedBlock.classList.add('fixed')
    } else{
        fixedBlock.style.left = `0px`
        fixedBlock.style.width = `100%`
        fixedBlock.classList.remove('fixed')
    }

    if(scrollDistance >= (filtersOffsetTop - smallOffset) + filters.offsetHeight - fixedBlock.offsetHeight){
        fixedBlock.classList.add('absolute')
        fixedBlock.style.left = `0px`
        fixedBlock.style.width = `100%`
        fixedBlock.classList.remove('fixed')
    }
}
window.addEventListener('scroll', fixedScrollBlock)

