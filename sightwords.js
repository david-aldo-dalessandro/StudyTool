/* David D'Alessandro
12/4/24 (Riley's wannabe birthday)
sightwords.js 
Holds the logic for all the sight word work in the main html file
*/

let word_list = [];
let number_list = [];
let single = false;

let addend = 12;
let repetitions = single == true ? 1 : 3;
operation = '-';
//let operation = '\u00f7';
let bigRange = 300;
let littleRange = 105;

//division operator -> \u00f7

//variable to hold the ever growing list of words
//* 
word_list = [
    /*
    'out',
    'soon',
    'pretty',
    'look',
    'not',
    'but',
    'see',
    'you',
    'this',
    'ran',
    'run',
    'now',
    'new',
    'please',
    'can',
    'put',
    'did',
    'there',
    'boy',
    'want',
    'went',
    'will',
    'well',
    'eat',
    'ate',
    'they',
    'ball',
    'had',
    'come',
    'that',
    'with',
    'our',
    'like',
    'after',
    'has',
    'jump',
    'down',
    'four',
    'are',
    'hot',
    'here',
    'good',
    'help',
    'play',
    'too',
    'into',
    'onto',
    'away',
    'she',
    'have',
    'for',
    'was',
    'big',
    'sit',
    'the',
    'make',
    'get',
    'said',
    'little',
    'say',
    'yes',
    'any',
    'find',
    'your',
    'from',
    'toy',
    'time',
    'fly',
    'find',
    'egg',
    'day',
    'sun',
    'some',
    'part',
    'past',
    'box',
    'people',
    'were',
    'more',
    'get',
    'way',
    'would',
    'made',
    'write',
    'word',
    'long',
    'use',
    'bed',
    'than',
    'then',
    'them',
    'each',
    'first',
    'last',
    'fun',
    'which',

    //bossy r's
    'ar',
    'er',
    'ir',
    'or',
    'ur',

    //ar
    'car',
    'jar',
    'star',
    'barn',

    //er
    'river',
    'spider',
    'flower',
    'hammer',

    //ir
    'bird',
    'girl',
    'shirt',
    'skirt',

    //or
    'fork',
    'corn',
    'storm',
    'sports',

    //ur
    'turtle',
    'surfer',
    'nurse',
    'purple',

    //silent e's
    'a_e',
    'e_e',
    'i_e',
    'o_e',
    'u_e',

    //a_e 
    'lake',
    'game',
    'plane',
    'whale',

    //e_e
    'these',
    'theme',
    'delete',
    'athlete',

    //u_e
    'cube',
    'mute',
    'June',
    'flute',

    //o_e
    'nose',
    'hole',
    'phone',
    'globe',

    //i_e
    'bike',
    'kite',
    'fire',
    'ride',

    //five w's and h 
    'who',
    'what',
    'when',
    'where',
    'why',
    'how',

    //animals
    'cat',
    'dog',
    'pig',

    //colors
    'red',
    'blue',
    'yellow',
    'green',
    'white',
    'purple',
    'orange',
    'pink',
    'gray',
    'black',
    'brown',

    //numbers
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    //*/

    //added 12/18/24
    //additional sight words from Fry Sight Word Lists
    // first 100 Words
    /*'about',
    'been',
    'called',
    'her',
    'him',
    'many',
    'may',
    'number',
    'oil',
    'other',
    'their',
    'water',
    //first 200 words
    'ask',
    'came',
    'does',
    'form',
    'different',
    'house',
    'home',
    'just',
    'know',
    'letter',
    'man',
    'men',
    'much',
    'must',
    'name',
    'need',
    'picture',
    'read',
    'right',
    'same',
    'should',
    'show',
    'sound',
    'spell',
    'such',
    'take',
    'tell',
    'air',
    'also',
    'animal',
    'back',
    'change',
    'end',
    'hand',
    'kind',
    'land',
    */

    /*/
    //1/2/25 
    //vowel diagraphs
    //oo
    //short oo
    'book',
    'cook',
    'blood',
    'flood',
    //long oo
    'room',
    'moon',
    'door',
    'floor',

    //ou
    //ow
    'cloud',
    'mouse',
    //or
    'four',
    'pour',
    //o
    'though',
    'boulder',
    //ew
    'group',
    'through',

    //ea
    //e
    'head',
    'bread',
    //er
    'earth',
    'learn',
    //ee
    'dream',
    'eagle',
    'clear',
    'real',
    //*/

    /*/
    //oa
    //o
    'coat',
    'soap',
    'toad',
    'goat',
    //or
    'oar',
    'soar',
    'roar',
    'board',

    //ee
    'bee',
    'tree',
    'free',
    'feet',
    'wheel',
    'cheese',
    'freeze',
    'breeze',
    //*/

    /*/
    //ai
    'rain',
    'train',
    'paint',
    'mail',
    'daily',
    'brain',
    'tail',
    'fail',

    //ue
    'glue',
    'due',
    'cue',
    'clue',
    'true',
    'value',
    'queue',
    'statue',
    

    //ie
    'lie',
    'tie',
    'pie',
    'die',
    'field',
    'thief',
    'believe',
    'belief',

    //oi
    'oil',
    'foil',
    'voice',
    'boil',
    'coin',
    'point',
    'joint',
    'moist',

    //au
    'author',
    'sauce',
    'pause',
    'autumn',
    'audio',
    'August',
    'daughter',
    'haunt',

    //ei
    //a
    'veil',
    'sleigh',
    'weight',
    //ee
    'seize',
    'receive',
    'either',
    //i
    'height',
    'neither',
    //*/

    //digraphs













]; //*/

/*/
number_list = single == true ? [
    
    16, 24, 18, 27, 55, 
    //page break 
    61, 75, 89, 91, 101

] : [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14 ]//*/


//create a place for the user to write their name at the top
let div_name = document.querySelector('.name'); 
let h1_name = document.createElement('h1');
h1_name.textContent = 'Name:_________'
div_name.appendChild(h1_name);


//create rows of words based on a file or string of words separated by a space.
let div_words = document.querySelector('.words');
if(word_list){
    for(let word in word_list){

        //*
        if (word%8 === 0){
            let currentWord = word_list[word];
            let row = document.createElement('div');
            row.setAttribute('class', 'repeat-text');
            //print the word list duplicate to account for the header
            for(let i = 0; i < 3; i++){
                let column = document.createElement('div');
                column.setAttribute('class', 'sightWord')
                column.textContent = currentWord;
                row.appendChild(column);
            }
            div_words.appendChild(row);

        }//*/
        //*
        if (word%8 === 0){
            let currentWord = word_list[word];
            let row = document.createElement('div');
            row.setAttribute('class', 'repeat-text');
            //print the word list duplicate to account for the header
            for(let i = 0; i < repetitions; i++){
                let column = document.createElement('div');
                column.setAttribute('class', 'sightWord')
                column.textContent = currentWord;
                row.appendChild(column);
            }
            div_words.appendChild(row);

        }//*/
        

        let currentWord = word_list[word];
        let row = document.createElement('div');
    
        row.setAttribute('class', 'repeat-text');
    
    
        //print the word list
        for(let i = 0; i < repetitions; i++){
            let column = document.createElement('div');
            column.setAttribute('class', 'sightWord')
            column.textContent = currentWord;
            row.appendChild(column);
        }
        div_words.appendChild(row);
    }
}

//create rows of numbers based on a file or list of numbers 
let div_numbers = document.querySelector('.numbers');
if(number_list){
    
    for( let number in number_list){
        
        if(number_list[number]%5 === 0){
            let row = document.createElement('div');
            addend = single == true ? Math.floor(Math.random() * (bigRange - littleRange + 1)) + 20 : addend;
            row.setAttribute('class', 'equation stacked');
    
            for (let i = 0; i < repetitions; i++){
            let topNumber = document.createElement('span');
            topNumber.setAttribute('class','number');
            topNumber.textContent = addend;
    
            let operator = document.createElement('span');
            operator.setAttribute('class','operator');
            operator.textContent = operation;
    
            let bottomNumber = document.createElement('span');
            bottomNumber.setAttribute('class', 'number');
            bottomNumber.textContent = number_list[number];
    
            let equals = document.createElement('span');
            equals.setAttribute('class','equals');
    
            let finalNumber = document.createElement('span');
            finalNumber.setAttribute('class', 'number');
            finalNumber.textContent = single == true ? addend + number_list[number] : '';
            single == true ? ' ' : finalNumber.textContent = operation === '+' ? addend + number_list[number] : operation === '-' ? addend - number_list[number] : operation === 'x' ? addend * number_list[number] : addend / number_list[number]; 
    
            
    
            
                let column = document.createElement('div');
                column.setAttribute('class', 'column');
                column.appendChild(topNumber);
                column.appendChild(operator);
                column.appendChild(bottomNumber);
                column.appendChild(equals);
                single == true ?  ' ' : column.appendChild(finalNumber);
                row.appendChild(column);
            }
            div_numbers.appendChild(row);
        }

        let row = document.createElement('div');
        row.setAttribute('class', 'equation stacked');
        addend = single == true ? Math.floor(Math.random() * (bigRange - littleRange + 1)) + 20 : addend;

        for (let i = 0; i < repetitions; i++){
        let topNumber = document.createElement('span');
        topNumber.setAttribute('class','number');
        topNumber.textContent = addend;

        let operator = document.createElement('span');
        operator.setAttribute('class','operator');
        operator.textContent = operation;

        let bottomNumber = document.createElement('span');
        bottomNumber.setAttribute('class', 'number');
        bottomNumber.textContent = operation === '-' ? number_list[number] + addend : operation === '\u00f7' ? number_list[number] * addend : number_list[number];

        let equals = document.createElement('span');
        equals.setAttribute('class','equals');

        let finalNumber = document.createElement('span');
        finalNumber.setAttribute('class', 'number');
        finalNumber.textContent = single == true ? addend + number_list[number] : '';
        single == true ? ' ' : finalNumber.textContent = operation === '+' ? addend + number_list[number] : operation === '-' ? (number_list[number] + addend) - addend : operation === 'x' ? addend * number_list[number] : (number_list[number] * addend) / addend;

        

        
            let column = document.createElement('div');
            column.setAttribute('class', 'column');
            column.appendChild(operation === '-' || operation === '\u00f7' ? bottomNumber : topNumber);
            column.appendChild(operator);
            column.appendChild(operation === '-' || operation === '\u00f7' ? topNumber : bottomNumber);
            column.appendChild(equals);
            single == true ? ' ' : column.appendChild(finalNumber);
            row.appendChild(column);
        }
        div_numbers.appendChild(row);
        
    }
    
}