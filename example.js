const boxEl = document.querySelector(".box")
const btnEl = document.querySelector(".btn")

const DOUBLE_CLICKED_CLASS_NAME = "double-clicked"
const CLICKED_CLASS_NAME = "clicked"

const doubleClickDelay_MS = 500
const clickHandler = () => {
  console.log("clicked")
  boxEl.classList.add(CLICKED_CLASS_NAME)
  boxEl.classList.remove(DOUBLE_CLICKED_CLASS_NAME)
}

const doubleClickHandler = () => {
  boxEl.classList.add(DOUBLE_CLICKED_CLASS_NAME)
  boxEl.classList.remove(CLICKED_CLASS_NAME)
}

addDoubleClickListener(
  btnEl,
  clickHandler,
  doubleClickHandler,
  doubleClickDelay_MS
)
