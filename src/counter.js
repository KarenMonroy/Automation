let er = /\r\n|\r|\n/

function counterCharacters (phrase){
    return phrase.replace(er, '').length
}

function counterWords(phrase){
    return phrase.replace(er, ' ').split(' ').length
}

function counterRepeatWords(phrase){
  let array = phrase.toLowerCase().replace(er, ' ').split(' ')
  let words = {}

    for (let i = 0; i < array.length; i++) {
        if (words[array[i]] === undefined) {
            words[array[i]] = 1;
        } else {
            words[array[i]]++;
        }
        console.log(array[i])
    }
    return words
}

try {
    let text = 'lumu lumu lumu lumu lumu illuminates illuminates attacks and adversaries\n' +
        'lumu illuminates all attacks and adversaries'
    console.log(counterCharacters(text));
    console.log(counterWords(text));
    console.log(counterRepeatWords(text));
}catch (e){
    console.log('Error')
}


