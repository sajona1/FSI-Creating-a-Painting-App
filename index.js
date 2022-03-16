let selectedColor = 'blue'
const painting = document.querySelector('.painting')


painting.addEventListener('click', function(e){
	//console.log('testing, testing, 123')
    //console.log('e.target')
    //e.target.style.backgroundColor = 'blue'
    e.target . style.backgroundColor = selectedColor
})