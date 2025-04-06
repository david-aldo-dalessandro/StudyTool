/* David D'Alessandro
12/4/24 (Riley's wannabe birthday)
sightwords.js 
Holds the logic for all the sight word work in the main html file
*/

let word_list = [];
let number_list = [];
let single = false;

let addend = 0;
let repetitions = single == true ? 1 : 3;
operation = 'x';
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
    

    //digraphs
     //oi
     'coil',
     'foil',
     'voice',
     'boil',
     'coin',
     'point',
     'joint',
     'moist',

    //sh 
    "ship",
    'shop',
    "shirt",
    "sheep",
    "shoes",
    "shark",
    'shot',
    'sharp',

    //th
    'theif',
    'think',
    'thank',
    'thin',
    'thumb',
    'thunder',
    'though',
    'through',

    //ch
    'chin',
    'chip',
    'chair',
    'chess',
    'cheese',
    'choose',
    'chew',
    'chicken',

    //ph
    'photo',
    'phonics',
    'phoenix',
    'physics',
    'phase',
    'phalanx',
    'pharmacy',
    'physician',

    //wh
    'wheel',
    'whisker',
    'whisk',
    'whip',
    'whistle',
    'whisper',
    'whirl',
    'wharf',

    //wr
    'wrist',
    'wrap',
    'wrong',
    'writhe',
    'wraith',
    'wrangle',
    'wrath',
    'wrestle',

    //kn
    'knee',
    'knife',
    'knot',
    'knock',
    'knight',
    'knead',
    'knew',
    'knob',

    //qu
    'quiz',
    'quick',
    'queen',
    'quilt',
    'quite',
    'quiet',
    'quack',
    'quadrant',

    //diagraph ending
    //ng
    'sing',
    'king',
    'wrong',
    'song',
    'lung',
    'sung',
    'dang',
    'sang',

    //ck
    'duck',
    'back',
    'check',
    'pick',
    'neck',
    'truck',
    'stuck',
    'brick',

    //sh
    'fish',
    'dish',
    'brush',
    'cash',
    'wash',
    'finish',
    'wish',
    'splash',

    //th
    'bath',
    'faith',
    'teeth',
    'tooth',
    'both',
    'booth',
    'path',
    'math',

    //ch
    'inch',
    'couch',
    'bench',
    'lunch',
    'teach',
    'beach',
    'reach',
    'crunch',

    //digraphs
    //cr
    'cry',
    'crab',
    'cross',
    'crown',
    'crate',
    'cream',
    'crack',
    'cram',

    //cl
    'clam',
    'clown',
    'cloud',
    'clock',
    'clean',
    'clothes',
    'click',
    'close',

    //br
    'brush',
    'bread',
    'break',
    'brisk',
    'brother',
    'bronze',
    'brink',
    'bristle',

    //bl
    'blink',
    'blow',
    'blind',
    'block',
    'blimp',
    'blend',
    'blush',
    'blunder',

    //dr
    'dry',
    'drum',
    'drive',
    'draw',
    'dress',
    'dread',
    'drink',
    'drift',

    //fl
    'flew',
    'flu',
    'flame',
    'flag',
    'floor',
    'flight',
    'flank',
    'flow',

    //fr
    'frog',
    'fruit',
    'france',
    'fries',
    'frame',
    'fractal',
    'fraction',
    'fragment',

    //gl
    'glow',
    'glad',
    'glass',
    'gloves',
    'glide',
    'glacier',
    'glitz',
    'glamor',

    //gr
    'grade',
    'grand',
    'grapes',
    'grind',
    'greed',
    'grit',
    'greek',
    'ground',

    //pl
    'plate',
    'plant',
    'plug',
    'placate',
    'place',
    'placebo',
    'placid',
    'plague',

    //pr
    'prize',
    'print',
    'praise',
    'price',
    'proud',
    'prince',
    'prune',
    'procure',

    //sc
    'scan',
    'scarf',
    'scoop',
    'scar',
    'scout',
    'score',
    'screech',
    'scab',

    //sk
    'ski',
    'skin',
    'skate',
    'skip',
    'ska',
    'skeleton',
    'sketch',
    'skeptical',

    //sl
    'sled',
    'slow',
    'slide',
    'slip',
    'slug',
    'sleep',
    'slope',
    'sling',

    //sm
    'smell',
    'small',
    'smoke',
    'smile',
    'smart',
    'smooth',
    'smother',
    'smite',

    //sn
    'snap',
    'snail',
    'snarky',
    'snot',
    'snort',
    'sneeze',
    'snide',
    'snare',

    //sp
    'speak',
    'spice',
    'spur',
    'spite',
    'spire',
    'spree',
    'spool',
    'spore',

    //st
    'stamp',
    'stone',
    'stutter',
    'stack',
    'stain',
    'stall',
    'stare',
    'steer',

    //sw
    'swamp',
    'sweat',
    'sweep',
    'swan',
    'sweet',
    'swing',
    'swig',
    'swish',

    //tr
    'trip',
    'trick',
    'trunk',
    'treat',
    'treasure',
    'treason',
    'traitor',
    'tried',

    //tw
    'twin',
    'twist',
    'twig',
    'twice',
    'tweezers',
    'twinge',
    'twilight',
    'twinkle',

    //nd
    'send',
    'wind',
    'stand',
    'sand',
    'pond',
    'bend',
    'ascend',
    'descend',

    //nk
    'bank',
    'yank',
    'tank',
    'wink',
    'crank',
    'punk',
    'junk',
    'monk',

    //trigraphs
    //spl
    'split',
    'splat',
    'splash',
    'splinter',
    'splay',
    'splendid',
    'splurge',
    'splutter',

    //thre
    'thrice',
    'throat',
    'throw',
    'throng',
    'thrall',
    'thrash',
    'thrill',
    'throb',

    //str
    'straw',
    'street',
    'stress',
    'strong',
    'strange',
    'strangle',
    'strict',
    'strap',

    //spr
    'spray',
    'sprain',
    'sprint',
    'spring',
    'spritz',
    'spruce',
    'spry',
    'sprig',

    //scr
    'screen',
    'scream',
    'screw',
    'scratch',
    'scrape',
    'scrap',
    'script',
    'scroll',

    //squ
    'squid',
    'squash',
    'squirrel',
    'squabble',
    'squad',
    'squat',
    'squint',
    'squirt',

    //tch
    'watch',
    'witch',
    'match',
    'catch',
    'hatch',
    'snatch',
    'batch',
    'pitch',

    //dge
    'edge',
    'judge',
    'badge',
    'bridge',
    'ridge',
    'dodge',
    'lodged',
    'fudge',


//1/20/25
//more Fry Dolch sight words 

'America',
'again',
'another',
'answer',
'because',
'before',
'even',
'follow',
'give',
'great',
'large',
'line',
'live',
'means',
'most',
'mother',


'move',
'old',
'only',
'over',
'page',
'sentence',
'set',
'still',
'study',
'thing',
'try',
'turn',
'very',
'work',
'world',
'years',
//*/

//3rd 100
'above',
'add',
'almost',
'along',
'always',
'began',
'begin',
'being',

'below',
'between',
'carry',
'children',
'city',
'country',
'cut',
'don\'t',

'enough',
'every',
'example',
'eyes',
'face',
'family',
'far',
'father',

'few',
'food',
'got',
'grown',
'hard',
'hear',
'high',
'idea',

'important',
'India',
'Indian',
'keep',
'late',
'leave',
'left',
'let',

'life',
'light',
'list',
'might',
'mile',
'miss',
'mountain',
'near',

'never',
'next',
'night',
'often',
'once',
'open',
'own',
'paper',

'saw',
'school',
'sea',
'second',
'seem',
'side',
'something',
'sometimes',

'start',
'stop',
'state',
'story',
'talk',
'those',
'thought',
'together',

'took',
'under',
'until',
'walk',
'while',
'without',
'young',
'withhold',

//4th 100
'across',
'against',
'area',
'become',
'best',
'better',
'body',
'certain',

'cold',
'color',
'complete',
'covered',
'cried',
'didn\'t',
'during',
'early',

'easy',
'ever',
'fall',
'farm',
'fast',
'figure',
'friends',
'happened',

'heard',
'himself',
'hold',
'horse',
'hours',
'however',
'hundred',
'listen',

'low',
'map',
'mark',
'measure',
'money',
'morning',
'music',
'north',

'numeral',
'order',
'passed',
'pattern',
'piece',
'plan',
'problem',
'products',

'pulled',
'questions',
'reached',
'remember',
'rock',
'several',
'short',
'since',

'sing',
'slowly',
'south',
'space',
'step',
'sure',
'table',
'today',

'told',
'top',
'toward',
'town',
'travel',
'true',
'false',
'unit',

'upon',
'usually',
'vowel',
'war',
'waves',
'whole',
'wood',
'steak',

//5th 100
'able',
'ago',
'among',
'base',
'became',
'behind',
'boat',
'bring',

'building',
'built',
'cannot',
'carefully',
'circle',
'class',
'common',
'contain',

'correct',
'incorrect',
'course',
'dark',
'decide',
'deep',
'done',
'equation',

'English',
'England',
'explain',
'fact',
'fiction',
'feel',
'finally',
'fine',

'force',
'front',
'full',
'gave',
'government',
'half',
'heat',
'heavy',

'inches',
'include',
'exclude',
'inside',
'outside',
'island',
'known',

'language',
'less',
'machine',
'material',
'minutes',
'note',
'nothing',
'noun',

'object',
'ocean',
'oh',
'pair',
'person',
'power',
'produce',
'quickly',

'rest',
'road',
'round',
'rule',
'scientist',
'shape',
'shown',
'size',

'special',
'stay',
'stood',
'surface',
'system',
'thousand',
'understand',
'verb',

'wait',
'warm',
'week',
'yet',
'bug',
'worm',
'blast',
'flask',

//6th 100
'anything',
'arms',
'beautiful',
'beside',
'bill',
'cause',
'cell',
'center',

'dance',
'describe',
'develop',
'difference',
'direction',
'discover',
'distance',
'diagnose',

'divide',
'drop',
'energy',
'Europe',
'European',
'exercise',
'farmers',
'felt',

'finished',
'forest',
'general',
'gone',
'grass',
'happy',
'heart',
'held',

'instruments',
'interest',
'job',
'kept',
'lay',
'legs',
'length',
'love',

'main',
'matter',
'meet',
'members',
'million',
'mind',
'months',
'paragraph',

'perhaps',
'picked',
'present',
'probably',
'race',
'raised',
'ready',
'reason',

'record',
'region',
'represent',
'return',
'root',
'sat',
'shall',
'sign',

'simple',
'site',
'sky',
'soft',
'store',
'subject',
'suddenly',
'sum',

'summer',
'syllables',
'teacher',
'test',
'third',
'wall',
'weather',
'west',

'whether',
'wide',
'wild',
'window',
'winter',
'written',
'frigid',
'molten',

//7th 100
'act',
'Africa',
'African',
'age',
'already',
'although',
'amount',
'angle',

'appear',
'baby',
'bear',
'beat',
'bottom',
'build',
'broken',
'buy',

'care',
'case',
'cat',
'century',
'consonant',
'copy',
'couldn\'t',
'count',

'dictionary',
'died',
'everyone',
'everything',
'exactly',
'factors',
'fight',
'fingers',

'French',
'France',
'gold',
'hair',
'hill',
'hope',
'ice',
'instead',

'iron',
'kill',
'lead',
'let\'s',
'lot',
'melody',
'metal',
'method',

'middle',
'milk',
'moment',
'natural',
'nation',
'natural',
'outside',
'per',

'phrase',
'poor',
'possible',
'pounds',
'pushed',
'remain',
'result',
'rolled',

'sail',
'scale',
'section',
'smiled',
'snow',
'soil',
'solve',
'someone',

'son',
'speed',
'surprise',
'tall',
'temperature',
'themselves',
'tiny',
'type',

'village',
'within',
'wonder',
'thermal',
'x-ray',
'beam',
'bean',
'boots',

//8th 100
'alone',
'art',
'bad',
'bit',
'burning',
'business',
'captain',
'cents',

'child',
'climbed',
'coast',
'continue',
'control',
'cool',
'cost',
'decimal',

'desert',
'design',
'direct',
'drawing',
'ears',
'east',
'else',
'engine',

'equal',
'experiment',
'express',
'feeling',
'fell',
'foot',
'garden',
'gas',

'god',
'grew',
'history',
'human',
'hunting',
'increase',
'information',
'itself',

'joined',
'key',
'lady',
'law',
'least',
'lost',
'maybe',
'mouth',

'party',
'pay',
'period',
'plains',
'practice',
'president',
'received',
'report',

'ring',
'rise',
'row',
'save',
'seeds',
'sent',
'separate',
'serve',

'shouted',
'single',
'skin',
'statement',
'stick',
'straight',
'students',
'suppose',

'symbols',
'team',
'touch',
'trouble',
'uncle',
'valley',
'visit',
'wear',

'whose',
'wire',
'woman',
'wrote',
'yard',
'you\'re',
'yourself',

//9th 100
'addition',
'army',
'bell',
'belong',
'bones',
'branches',
'cattle',
'cheif',

'compare',
'compound',
'consider',
'corner',
'crops',
'crowd',
'current',
'doctor',

'dollars',
'electric',
'elements',
'enjoy',
'entered',
'except',
'exciting',
'expect',

'fit',
'flat',
'guess',
'hat',
'hit',
'indicate',
'industry',
'insects',

'intersting',
'Japan',
'Japanese',
'China',
'Chinese',
'lifted',
'loud',
'major',

'mall',
'meat',
'mine',
'modern',
'movement',
'necessary',
'observe',
'park',

'particular',
'planets',
'poem',
'pole',
'position',
'process',
'property',
'provide',

'rather',
'rhythm',
'rich',
'safe',
'sand',
'science',
'sell',
'sense',

'shoulder',
'soldiers',
'spot',
'spread',
'stream',
'string',
'suggest',
'supply',

'swim',
'terms',
'thick',
'thus',
'tied',
'tone',
'trade',
'tube',

'wife',
'wings',
'wasn\'t',
'won\'t',
'wrench',
'ratchet',
'span',
'impulse',

//10th 100
'action',
'actually',
'adjective',
'afraid',
'agreed',
'ahead',
'allow',

'apple',
'arrived',
'born',
'bought',
'Britiain',
'British',
'captial',
'chance',

'chart',
'church',
'column',
'company',
'conditions',
'cotton',
'cows',
'create',

'dead',
'deal',
'death',
'details',
'determine',
'difficult',
'division',
'doesn\'t',

'effect',
'entire',
'especially',
'experience',
'evening',
'factories',
'fair',
'fear',

'fig',
'forward',
'fresh',
'gun',
'hoe',
'huge',
'isn\'t',
'led',

'level',
'located',
'march',
'molecules',
'northern',
'office',
'opposite',
'oxygen',

'plural',
'prepared',
'printed',
'radio',
'repeated',
'rope',
'rose',
'seat',

'settled',
'similar',
'sir',
'ma\'am',
'sister',
'solution',
'southern',
'steel',

'stretched',
'substances',
'suffix',
'sugar',
'tools',
'total',
'track',
'underline',

'various',
'view',
'Washington',

'we\'ll',
'western',
'win',
'women',
'workers',
'wyandotte',
'waddle',
'waft',

'zipper',
'zebra',
'zest',
'Zion',
'zombie',
'zoology',
'biology',
'chemistry',



//ight
'fight',
'bright',
'sight',
'tight',
'flashlight',
'plight',
'slight',
'headlight',

//eigh
'sleigh',
'neigh',
'neighbor',
'eighth',
'eighties',
'overweight',
'outweigh',
'weighty',


//aught
'taught',
'caught',
'daughter',
'naughty',
'distraught',
'laugh',
'onslaught',
'slaughter',

//ough
'cough',
'rough',
'dough',
'plough',
'bought',
'tough',
'sought',
'wrought',







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
        if (word === 0 || word%8 === 0){
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
        /*
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