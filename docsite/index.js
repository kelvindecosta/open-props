import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/line-numbers/prism-line-numbers.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

// easing controls
document
  .querySelectorAll('.animation-control-header > button')
  .forEach(button => {
    button.addEventListener('click', e => {
      e.currentTarget
        .closest('div')
        .querySelector('.ease-demo')
        .classList.toggle('paused')
    })
  })

// animation controls
const cleanup = e => {
  setTimeout(()=> {
    e.target.style = ''
  }, 500)
}

document
  .querySelector('.animation-demo')
  .addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') return

    let sample = e.target.closest('.animation-demo-target')

    if (sample.dataset.startingStyles) {
      sample.style = sample.dataset.startingStyles

      setTimeout(()=> {
        sample.style.animation = `var(--animation-${sample.dataset.animation}) forwards`
        sample.addEventListener('animationend', cleanup, {once:true})
      }, 300)
    }
    else if (sample.style.animation != '') {
      sample.style.animation = null
      sample.removeEventListener('animationend', cleanup)
    }
    else {
      sample.style.animation = `var(--animation-${sample.dataset.animation}) forwards`
      sample.addEventListener('animationend', cleanup, {once:true})
    }
  })