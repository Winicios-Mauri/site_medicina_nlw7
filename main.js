window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButton()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha
  // quais dados vou precisar?

  // topo da seção
  const sectionTop = section.offsetTop
  // altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou ou ultrapassou da linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //  verificar se a base ultrapassou da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight

  //  final da seção passou da linha passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // Limite da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 200) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .card,
  #about,
  #about header,
  #about content`)
