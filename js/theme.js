function Dark({ buttonDark, buttonLight }) {
    buttonDark.addEventListener('click', () => {
      buttonDark.classList.add('hide')
      buttonLight.classList.remove('hide')
  
      document.body.classList.remove('dark-theme')
    })
  
    buttonLight.addEventListener('click', () => {
      buttonDark.classList.remove('hide')
      buttonLight.classList.add('hide')
      
  
      document.body.classList.add('dark-theme')
    })
  }
  
  export { Dark }