const boxEl = document.querySelector(".box")
const btnEl = document.querySelector(".btn")

const DOUBLE_CLICKED_CLASS_NAME = "double-clicked"
const CLICKED_CLASS_NAME = "clicked"

let doubleClickDelay_MS = 500

addDoubleClickListener(
  btnEl,
  () => {
    console.log("clicked")
    boxEl.classList.add(CLICKED_CLASS_NAME)
    boxEl.classList.remove(DOUBLE_CLICKED_CLASS_NAME)
  },
  () => {
    boxEl.classList.add(DOUBLE_CLICKED_CLASS_NAME)
    boxEl.classList.remove(CLICKED_CLASS_NAME)
  },
  doubleClickDelay_MS
)
