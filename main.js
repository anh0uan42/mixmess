const noun1 = ['The sea', 'The wind', "The suns"];
const sunVerb = ['is too hot', 'is perfect'];
const windVerb = ['is too strong', 'is not blowing', 'is at a perfect speed'];
const seaVerb = ['too rough', 'is about 2-3ft', 'is glass calm'];
const act = ['fishing', 'surfing']

const generateMessage = (arr1, arr2, arr3, arr4, arr5) => {
    const noun = arr1[Math.floor(Math.random()*(arr1.length))]
    let verb = ''
    if (noun === 'The suns') {
        verb = arr2[Math.floor(Math.random()*arr2.length)]
    } else if (noun === 'The wind') {
        verb = arr3[Math.floor(Math.random()*arr3.length)]
    } else {
        verb = arr4[Math.floor(Math.random()*arr4.length)]
    }
    const action = arr5[Math.floor(Math.random()*arr5.length)]
    const quote = `${noun} ${verb} to go ${action} this weekend`
    const elem = document.getElementById("displaymess")
    elem.innerHTML = quote
}

generateMessage(noun1, sunVerb, windVerb, seaVerb, act)