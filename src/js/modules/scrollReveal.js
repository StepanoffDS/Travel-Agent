import ScrollReveal from 'scrollreveal'
function getScrollReveal() {
  ScrollReveal({
    distance: '70px',
    duration: 2800,
    // reset: true,
  })

  ScrollReveal().reveal(`.header`, {
    origin: 'top',
  })

  ScrollReveal().reveal(`.discover__picture-hint`, {
    origin: 'left',
    distance: '150px',
  })

  ScrollReveal().reveal(`.discover__desc`, {
    origin: 'bottom',
    distance: '150px',
  })

  ScrollReveal().reveal(`.popular`, {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
  })
}

export default getScrollReveal

