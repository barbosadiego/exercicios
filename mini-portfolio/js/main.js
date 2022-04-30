const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((item) => {
      item.classList.remove('filters__active')
    })
    target.classList.add('filters__active')

    tabs.forEach((item) => {
      item.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
  })
})

