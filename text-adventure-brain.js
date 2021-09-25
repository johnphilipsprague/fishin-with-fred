let dataBase = [
    {
        //location 0
        "question":'You stand at the edge of That Forest. Your friend Ned told you about this "fuckin\' dope pond" to fish at here. With fishing rod and tackle box in hand, you are excited to cast a line.',
        "answers":[
            {"title":"Enter forest","response":3},
            ]
    },
    {
        //location 1
        "question":"You exit the forest with your head hung low. You were unable to find the pond.",
        "answers":[
            {"title":"Restart?","response":0},
            ]
    },
    {
        //location 2
        "question":"You stand at the exit of That Forest. Do you want to abandon all hope that you'll find this dope fishing spot?",
        "answers":[
            {"title":"Abandon hope","response":1},
            {"title":"Turn around", "response":3},
            ]
    },
    {
        //location 3
        "question":"You come upon a dirt road. Nothing spectacular about it.",
        "answers":[
            {"title":"Continue ahead","response":5},
            {"title":"Turn around","response":2}
            ]
    },
    {
        //location 4
        "question":"You come upon a dirt road. You see the way out of That Forest.",
        "answers":[
            {"title":"Continue ahead","response":2},
            {"title":"Turn around", "response":5}
            ]
    },
    {   //location 5
        "question":"You come upon path that leads off to the right of the road. There is a mailbox next to the path.",
        "answers":[
            {"title":"Continue on road", "response":13},
            {"title":"Take path", "response":8},
            {"title":"Turn around", "response":4}
            ]
    },
    {
        //location 6
        "question":"You come upon a road that goes to the left and right. There is a mailbox next to you.",
        "answers":[
            {"title":"Take left road","response":4},
            {"title":"Take right road","response":13},
            {"title":"Turn around","response":8}
        ]
    },  
    {
        //location 7
        "question":"You come upon a path that leads off to the left of the road. There is a mailbox next to the path.",
        "answers":[
            {"title":"Continue on road","response":4},
            {"title":"Take path","response":8},
            {"title":"Turn around","response":13}
        ]
    },  
    {
        //location 8
        "question":"You are in a clearing that has a house and a small structure in it. There appears to be a man sitting on the porch of the house.",
        "answers":[
            {"title":"Approach the man","response":9},
            {"title":"Approach the small structure","response":12},
            {"title":"Turn around","response":6}
        ]
    },  
    {
        //location 9
        "question":'"Howdy stranger! The name is Billy.", says Billy. "How can I help you this fine day?"',
        "answers":[
            {"title":"Ask Billy where the pond is","response":10},
            {"title":"Say goodbye","response":8}
        ]
    },  
    {
        //location 10
        "question":'"The ol’ fishin’ pond? Just head on back to the road and take a right, then take another right, then a left. Just make sure you don\'t take a left that second time. That there\'s Frank\'s place."',
        "answers":[
            {"title":"Inquire about Frank","response":11},
            {"title":"Thank him and say goodbye","response":8}
        ]
    },  
    {
        //location 11
        "question":'"Frank is one of the fellas that lives in this here forest. He ain\'t the sharpest hunk o\' cheese, so it\'s best to avoid him or you might get hurt."',
        "answers":[
            {"title":"Thank him and say goodbye","response":8}
        ]
    },  
    {
        //location 12
        "question":'You can tell that this is an outhouse as you approach the structure, mainly because it smells like shit. You see a sign on the door that reads "Closed due to clogged plumbing"',
        "answers":[
            {"title":"Back away from outhouse","response":8}
        ]
    },  
    {
        //location 13
        "question":"The road takes you to another road that goes from the left to the right. Across from you is an abandoned horse wagon. ",
        "answers":[
            {"title":"Take left road","response":16},
            {"title":"Take right road","response":18},
            {"title":"Turn around","response":7}
        ]
    },  
    {
        //location 14
        "question":"You come upon an intersection with a road that goes straight and a road that goes to the left. To your right is an abandoned horse wagon.",
        "answers":[
            {"title":"Continue straight","response":16},
            {"title":"Take left road","response":7},
            {"title":"Turn around", "response":18}

        ]
    },
    {
        //location 15
        "question":"You come upon an intersection with a road that goes straight and a road that goes to the right. To your left is an abandoned horse wagon.",
        "answers":[
            {"title":"Continue straight","response":18},
            {"title":"Take right road","response":7},
            {"title":"Turn around","response":16}
        ]
    },  
    {
        //location 16
        "question":"You enter a clearing with a single horse in it that appears to not have noticed your arrival and is eating some grass.",
        "answers":[
            {"title":"Approach horse","response":17},
            {"title":"Turn around", "response":15}
        ]
    },  
    {
        //location 17
        "question":"You are able to get close enough to the horse that you are able to touch it. Finally it notices you and is extremely startled by your ability to just appear out of thin air. In an attempt to fend you off, the horse starts to buck around frantically. Unfortunately for you, you catch a stray rear hoof to the head and black out. Looks like you won’t be fishing today.",
        "answers":[
            {"title":"Restart?","response":0}
        ]
    },  
    {
        //location 18
        "question":"The road takes a sharp turn to the left. In the distance you hear a woodpecker going to town on some tree.",
        "answers":[
            {"title":"Continue ahead","response":20},
            {"title":"Turn around", "response":14}
        ]
    },  
    {
        //location 19
        "question":"The road takes a sharp turn to the right. In the distance you hear a woodpecker going to town on some tree.",
        "answers":[
            {"title":"Continue ahead","response":14},
            {"title":"Turn around", "response":20}
        ]
    },  
    {
        //location 20
        "question":"The road continues ahead. There is a tree down in the middle of the road, but you can easily step over it.",
        "answers":[
            {"title":"Step over tree","response":22},
            {"title":"Turn around","response":19}
        ]
    },  
    {
        //location 21
        "question":"The road continues ahead. There is a tree down in the middle of the road, but you think you can easily step over it.",
        "answers":[
            {"title":"Step over tree","response":42},
            {"title":"Turn around","response":22}
        ]
    },  
    {
        //location 22
        "question":"You come upon a 4 way interstion with roads leading to the left, right, and straight ahead.",
        "answers":[
            {"title":"Continue straight ahead","response":30},
            {"title":"Take right road","response":26},
            {"title":"Take left road","response":33},
            {"title":"Turn around","response":21}
        ]
    },  
    {
        //location 23
        "question":"You come upon a 4 way interstion with roads leading to the left, right, and straight ahead.",
        "answers":[
            {"title":"Continue straight ahead","response":33},
            {"title":"Take right road","response":30},
            {"title":"Take left road","response":21},
            {"title":"Turn around","response":26}
        ]
    },  
    {
        //location 24
        "question":"You come upon a 4 way interstion with roads leading to the left, right, and straight ahead.",
        "answers":[
            {"title":"Continue straight ahead","response":21},
            {"title":"Take right road","response":33},
            {"title":"Take left road","response":26},
            {"title":"Turn around","response":30}
        ]
    },  
    {
        //location 25
        "question":"You come upon a 4 way interstion with roads leading to the left, right, and straight ahead.",
        "answers":[
            {"title":"Continue straight ahead","response":26},
            {"title":"Take right road","response":21},
            {"title":"Take left road","response":30},
            {"title":"Turn around","response":33}
        ]
    },  
    {
        //location 26
        "question":"You come upon a dirt road. There is some horse poop in the middle of it. You can see a way out of That Forest",
        "answers":[
            {"title":"Continue ahead","response":28},
            {"title":"Turn around", "response":23}
        ]
    },  
    {
        //location 27
        "question":"You come upon a dirt road. There is some horse poop in the middle of it",
        "answers":[
            {"title":"Continue ahead","response":23},
            {"title":"Turn around","response":28}
        ]
    },  
    {
        //location 28
        "question":"You stand at the edge of That Forest. Do you want to give up on you quest to find the pond?",
        "answers":[
            {"title":"Give up","response":29},
            {"title":"Turn around","response":27}
        ]
    },  
    {
        //location 29
        "question":"You exit the forest, blinded by the sun. It feels like you haven't seen it in a lifetime. While you are sad that you did not find the pond that Ned spoke of, you are more concerned with the fact that you dont know how to get to your car from here.",
        "answers":[
            {"title":"Restart?","response":0}
        ]
    },  
    {
        //location 30
        "question":"You stand before what appears to be an abandoned house deep within the trees. All the windows are broken and there is a large oak tree that has crashed through the roof. In the front yard there is a man that is looks to be incapacitated.",
        "answers":[
            {"title":"Approach man","response":31},
            {"title":"Turn around","response":24}
        ]
    },  
    {
        //location 31
        "question":"As you approach the man, the house begins to looks even worse. You think you see a deer rummaging around in what was once the living room.",
        "answers":[
            {"title":"Check to see if man is alive","response":32},
            {"title":"Back away","response":30}
        ]
    },  
    {
        //location 32
        "question":"You shake the man. “Aye!”, he yells. “I’m tryin’ to get some sleep! Frig off!”",
        "answers":[
            {"title":"Frig off","response":30}
        ]
    },  
    {
        //location 33
        "question":"You come upon a road that continues straight ahead. Off to your left is a small trailer home. There is a man and woman sitting in lawn chairs drinking beers in the front yard.",
        "answers":[
            {"title":"Continue ahead","response":38},
            {"title":"Approach man and woman","response":34},
            {"title":"Turn around", "response":25}
        ]
    },  
    {
        //location 34
        "question":"You approach the couple who appear to be in the middle of a heated debate about a TV show. “I don’t care what you think, Tammy! They ruined it! They ruined it and you know it!” says the man. “Oh, quit your cryin’ Tommy, we got a visitor!” replies the woman, nodding in your direction. After wiping his eyes and blowing his nose, Tommy turns to you. “Well hey there, fella. Don’t you mind our bickering none. How can we help you?”",
        "answers":[
            {"title":"Ask Tommy and Tammy where the pond is","response":35},
            {"title":"Uncomfortably excuse yourself","response":36}
        ]
    },  
    {
        //location 35
        "question":"“Pooters pond?”, replies Tammy “Well you are nearly there, bud. Just keep on going up this road to the left. You can’t miss it.”",
        "answers":[
            {"title":"Thank them and say farewell","response":36}
        ]
    },  
    {
        //location 36
        "question":"You stand before a road that goes to the left and to the right. You can hear the couple resume their debate behind you.",
        "answers":[
            {"title":"Take left road","response":38},
            {"title":"Take right road","response":25},
            {"title":"Turn around","response":34}
        ]
    },
    {
        //location 37
        "question":"You come upon a road that continues straight ahead. Off to your right is a small trailer home. There is a man and woman sitting in lawn chairs drinking beers in the front yard.",
        "answers":[
            {"title":"Continue ahead","response":25},
            {"title":"Approach man and woman","response":34},
            {"title":"Turn around","response":38}
        ]
    }, 
    {
        //location 38
        "question":'You approach a large body of water with a small dock. Just before the dock is a sign that reads "Pooters Pond".',
        "answers":[
            {"title":"Go out onto dock","response":39},
            {"title":"Turn around","response":37}
        ]
    }, 
    {
        //location 39
        "question":"As you step out onto the dock you think to yourself how this is clearly a lake and not a pond, despite what everyone prior (including the sign) has said. Regardless you are happy that you have finally made it, and you are ready to finally cast a line.",
        "answers":[
            {"title":"Cast a line","response":41},
            {"title":"Turn around","repsonse":40}
        ]
    }, 
    {
        //location 40
        "question":"You stand at the foot of the dock with your back to the lake, over come with a strange urge to further explore That Forest. You can always cast a line another time.",
        "answers":[
            {"title":"Continue ahead","response":37},
            {"title":"Turn around", "repsonse":39}
        ]
    }, 
    {
        //location 41
        "question":"As you cast your lure out into the lake, you are washed over with an overwhelming sense of serenity as you finally completed your quest. You are so happy that you pee a little bit in your trousers. Congratulations, you've successfully gone Fishin' with Fred!",
        "answers":[
            {"title":"Restart?","response":0}
        ]
    },
    {
        //location 42
        "question":"You trip over the tree and land face first in a puddle of water. You quickly stand up and check to see if anyone notices. Thankfully the only living creature you see is a woodpecker perch on a tree, although it does appear to be internally laughing at you.",
        "answers":[
            {"title":"Continue ahead","response":19},
            {"title":"Turn around in shame","response":22}
        ]
    },    
    ]

let currentLocation = 0

const printCurrentLocation = () =>{
    document.getElementById("question").innerHTML = dataBase[currentLocation].question
    let answers = ''
    l = dataBase[currentLocation].answers.length
    for(i = 0; i < l; i++){
        answers += `<p><button onclick='setLocation(${dataBase[currentLocation].answers[i].response})'>${dataBase[currentLocation].answers[i].title}</button></p>`
    }
    document.getElementById("answers").innerHTML = answers
}

const setLocation = (num) => {
    currentLocation = num
    printCurrentLocation()
}

printCurrentLocation()