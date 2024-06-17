// test 1
const mainElement = document.getElementById("main");
mainElement.remove();

// test 2 newHeader variable that points to <h1> node
const newHeader = document.createElement('h1');

// test 3 add 'victory' id to <h1> node
newHeader.setAttribute("id", 'victory');

// test 4 add name as text to <h1> node
newHeader.textContent = "Ben McCarthy is the champion";