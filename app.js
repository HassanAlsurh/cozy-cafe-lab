/*-------------------------------- Constants --------------------------------*/

// const { createElement } = require("react")

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const mainTitleEl = document.querySelector('#main-title')
// console.log(mainTitleEl)
const buttonEl = document.querySelector('#bg-color-btn')
const bodyEl = document.querySelector('body')


const quoteDayEl = document.querySelector('#quote-of-the-day')

const highlighTitleEls = document.querySelectorAll('.highlight-title')
// console.log(highlighTitleEls)

const tableEl = document.querySelector('#past-menu-items')
const liEl = document.createElement('li')

const SpecialitiesEl = document.querySelector('#cafe-specialties')

/*----------------------------- Event Listeners -----------------------------*/
buttonEl.addEventListener('click', function() {
    bodyEl.style.backgroundColor = 'bisque'
})


/*-------------------------------- Functions --------------------------------*/

mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

mainTitleEl.style.textAlign = 'cenetr';


quoteDayEl.textContent = 'With perseverance, everything is possible!'


highlighTitleEls.forEach((vlaue,valueIndex)=>{
    highlighTitleEls[valueIndex].style.fontStyle = 'italic'
})

liEl.textContent = 'Rose Cake'
tableEl.append(liEl)


console.log(SpecialitiesEl)
SpecialitiesEl.append(document.createElement('li').textContent='Karak Tea')



// Part 7
bodyEl.append(document.createElement('hr')) 

const blogEl = document.createElement('div')
blogEl.classList = 'blog-post'


const h3El = document.createElement('h3')
h3El.textContent = 'Karak Ta Testing Event'
h3El.classList = 'highlight-title'
// h3El.style.f
blogEl.append(h3El)
// class="highlight-title


// bodyEl.append(document.createElement('br')) //newline
const pEl2 = document.createElement('p')
pEl2.textContent = 'A new event where you will get to taste test our new addition to our menu, the graet Karak Tea!'
blogEl.append(pEl2)



bodyEl.append(blogEl)

console.log(blogEl)

// blogEl.style.flexDirection = 'column'





// Part 8