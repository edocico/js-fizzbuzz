console.log('hello world')

const griDOMElement = document.querySelector('.app-main')
console.dir(griDOMElement)

const startDOMElement = document.getElementById('start-btn')

startDOMElement.addEventListener('click', function(){

    for (let i = 0; i < 100; i++) {
        let n = i + 1
        const boxDOMElement = document.createElement('div')
        if ((n % 3 === 0) && (n % 5 === 0)) {
            //console.log('FizzBuzz')
            griDOMElement.append(boxDOMElement)
            boxDOMElement.classList.add('box-red')
            boxDOMElement.innerHTML = n
        } else if (n % 3 === 0) {
            //console.log('Fizz')
            griDOMElement.append(boxDOMElement)
            boxDOMElement.classList.add('box-green')
            boxDOMElement.innerHTML = n
        } else if (n % 5 === 0) {
            //console.log('Buzz')
            griDOMElement.append(boxDOMElement)
            boxDOMElement.classList.add('box-yellow')
            boxDOMElement.innerHTML = n
        } else {
            //console.log(n)
            griDOMElement.append(boxDOMElement)
            boxDOMElement.classList.add('box-blu')
            boxDOMElement.innerHTML = n
        }
    }

})

