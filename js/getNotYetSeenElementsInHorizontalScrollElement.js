/**
 * Get not yet seen elements in a horizontal scroll element
 *
 * Implemented through calculations via getBoundingClientRect()
 *
 * @param {HTMLElement} horizontalScrollElement - Element that has a horizontal scrollbar and homes elements which we want
 *   to check if they could be seen
 * @param {NodeList} elements - The elements which we want to check if they could be seen
 * @returns {HTMLElement[]|[]} unseenElements - The elements that can't be seen
 */
function getNotYetSeenElementsInHorizontalScrollElement(horizontalScrollElement, elements) {
  const mostRightPointOfHorizontalScrollElement = horizontalScrollElement.getBoundingClientRect().left + horizontalScrollElement.getBoundingClientRect().width;

  const notYetSeenElements = [];
  elements.forEach((element) => {
    const mostRightPointOfElement = Number(element.getBoundingClientRect().left + element.getBoundingClientRect().width).toFixed();

    if (mostRightPointOfElement > mostRightPointOfHorizontalScrollElement) {
      notYetSeenElements.push(element)
    }
  });

  return notYetSeenElements;
}