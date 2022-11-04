    //ik weet niet hoe dit werkt want hier heeft gianni aan gezeten
const btn = document.querySelector('.answer');
const clear = document.querySelector('#clear')

btn.addEventListener('click', () => {
    let input = document.querySelector('#calc').value;
    //het zelfde voor dit stukje
    const locked = document.querySelector('.locked');
    const free = document.querySelector('.free')
    const next = document.querySelector('.next')
    
    const password = "12800";

   
    
    if (input == password) {
        locked.classList.add('hide');
        free.classList.add('show')
        next.classList.add('show');

    } else {
        alert('verkeerde code, de code is 5 cijfers lang')
        
    }

})


 clear.addEventListener('click', () =>{
        location.reload()
        console.log('clear')
    })



