/**
 * Log elements that can't be seen when scrolling the horizontal scrollbar
 */
const menuItemsContainer = document.querySelector('.js-menu-items')
const menuItems = document.querySelectorAll('a')

menuItemsContainer.addEventListener('scroll', () => {
  console.log(getNotYetSeenElementsInHorizontalScrollElement(menuItemsContainer, menuItems));
});


