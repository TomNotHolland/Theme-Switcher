(function () {
  let Toggler = document.getElementById('switcher')
  currentTheme = document.documentElement
  savedTheme = localStorage.getItem('theme') || 'dark'

  if (savedTheme === 'light') Toggler.removeAttribute('checked')
  else Toggler.checked = true
  currentTheme.setAttribute('data-theme', savedTheme)

  Toggler.addEventListener('change', switchTheme, false)

  function switchTheme (e) {
    if (this.checked) {
      currentTheme.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }

    else {
      currentTheme.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }
})()
