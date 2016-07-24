const scrollerEl = document.querySelector('.js-scroller')
const scrollerContentEl = document.querySelector('.js-scroller-content')

const scrollerContentFrag = document.createDocumentFragment()
const scrollerItemsEl = document.createElement('div')
const scrollerItemsClonedEl = document.createElement('div')

scrollerItemsEl.className = 'u-fl'
scrollerItemsEl.innerHTML = scrollerContentEl.innerHTML
scrollerContentFrag.appendChild(scrollerItemsEl)

scrollerItemsClonedEl.className = 'u-fl'
scrollerItemsClonedEl.innerHTML = scrollerContentEl.innerHTML
scrollerContentFrag.appendChild(scrollerItemsClonedEl)

scrollerContentEl.innerHTML = ''
scrollerContentEl.appendChild(scrollerContentFrag)

function marquee() {
  if (scrollerItemsClonedEl.offsetWidth - scrollerEl.scrollLeft <= 0) {
    scrollerEl.scrollLeft = scrollerEl.scrollLeft - scrollerItemsEl.offsetWidth
  } else {
    scrollerEl.scrollLeft = scrollerEl.scrollLeft + 1
  }
  requestAnimationFrame(marquee)
}

requestAnimationFrame(marquee)
