const addDoubleClickListener = (
  element,
  onClick,
  onDoubleClick,
  doubleClickDelay_MS
) => {
  let onceClicked = false
  element.addEventListener("click", () => {
    if (!onceClicked) {
      onceClicked = true
      onClick()

      setTimeout(() => {
        onceClicked = false
      }, doubleClickDelay_MS)
      return
    }

    onDoubleClick()
  })
}
