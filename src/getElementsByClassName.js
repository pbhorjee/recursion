// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, elements){
    element = element || document.body;
    elements = elements || [];

    if (element.classList && element.classList.length && element.classList.contains(className)) {
        elements.push(element);
    }

    if (element.childNodes.length) {
        for (var e = 0; e < element.childNodes.length; e++) {
            getElementsByClassName(className, element.childNodes[e], elements);
        }
    }

    return elements;
};
