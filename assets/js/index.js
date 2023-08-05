// Select DOM elements
let
    // Element to hide on key press                  
    pressText = document.querySelector('#pressText'),
    // Main container element 
    container = document.querySelector('#container'),
    // h1 element to show keyCode      
    h1Ele = document.querySelector('#container h1'),
    // Element to show key value 
    keyEvent = document.querySelector('#key'),
    // Element to show location value  
    locationEvent = document.querySelector('#location'),
    // Element to show which value  
    whichEvent = document.querySelector('#which'),
    // Element to show code value
    codeEvent = document.querySelector('#code');

// On key down:      
document.addEventListener('keydown', item => {
    // Hide pressText           
    pressText.classList = 'hide';
    // Show container           
    container.classList.remove('hide');
    // Update h1 with keyCode          
    h1Ele.innerHTML = `${item.keyCode}`;
    // Show key value        
    keyEvent.innerHTML = `${item.key}`;
    // Show location value 
    locationEvent.innerHTML = `${item.location}`;
    // Show which value                           
    whichEvent.innerHTML = `${item.which}`;
    // Show code value               
    codeEvent.innerHTML = `${item.code}`;
})