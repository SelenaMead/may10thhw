let disabledItem = document.querySelector('.target-for-disable');
var timesClicked = 0;


disabledItem.addEventListener('click', function(e){

        console.log(timesClicked)
        timesClicked++;

    
        if (timesClicked%2==0) {
            disabledItem.classList.add('disabled')
            disabledItem.style.textDecoration = 'line-through'
        } else {
            disabledItem.classList.remove('disabled')
            disabledItem.style.textDecoration = 'none'
        }
});
// disabledItem.addEventListener('click', function(e){
//     disabledItem.classList.remove('disabled')
//     disabledItem.style.textDecoration = 'none'
// });

let ul = document.getElementsByTagName('ul')
let li = document.getElementsByTagName('li')
let button = document.querySelector('.delete-all')

button.addEventListener('click', function(e){
    li.parentNode.removeChild(li);
});
