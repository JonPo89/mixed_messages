// function to select randomly from the lists
function prediction (arr1){
    let loc = Math.floor(Math.random()*arr1.length);
    return arr1[loc];
};

// Lists to store predictions
const cosmicDevices = ["Moon", "Sun", "planet known as Mercury", "planet known as Uranus (Not the other one... Just the planet)", "Netflix satellite", "space spider", "alien, I think his name is Harvin? Mervin?, anyway not important", "thing up there... You know the one, I don't know the name of it, but it's up there"];
const cosmicReactions = ["waning", "whining", "in retrograde", "in gatorade", "in your dreams", "really, really strong.  Like nearly as strong as Dwayne (The Rock) Johnson", "really weak, it's kind of pathetic"];
const alignmentDevices = ["food", "animals", "plants", "traffic", "yourself", "radio stations", "fashion"];
const alignmentStrength = ["good", "bad", "so-so", "strong", "weak", "strong enough to take on a bear. Not a big bear... Like a build-a-bear... but like a big build a bear"];
const avoidObjects = ["burgers", "humans", "dandelions", "roller blades", "chihuahuas", "meteorites", "doors", "the ground", "anywhere that has any kind of gravity in it", "anyone called Paul"];
const warning = ["trip over in a really public place", "bite into a pie that seems like it's the right temperature, but is actually REALLY hot inside", "be mistaken as a cute dog, and someone pats you, but you're too awkward to correct them so you just sit there being pet by a stranger and it doesn't feel as bad as you would have thought", "get donked on the head", "finally eat the thing that you've been craving, but then it isn't very good and doesn't quite get rid of the craving, but you feel like you can't justify having another one from somewhere else", "be blamed for a really bad smelling fart, and nobody believes that it wasn't you, and they all call you stinky butt, but your butt smells fine in reality, but you don't know how to convince them"];
// animal based greetings, statements and goodbyes
let animObj = [
    dogs= {
        greeting:"Bow-wow before greatness! I am the Great Rufus! Please do not snoop!",
        connection:"big dogs",
        goodbye:"Anyway if you'll excuse me, I have a cat to chase up a tree.",
    },
    cats= {
        greeting:"Purrfect you've arrived just in time! Who? Me..ow? I am the Divine Felix!",
        connection:"medium sized cats",
        goodbye:"Oop, excuse me, I seem to have a hairball. I must go.",
    },
    rabbits= {
        greeting:"OH YOU STARTLED ME! Please be quiet, my 50 children are asleep.",
        connection:"rabbits, the cute kind, not those meat ones with the saggy necks",
        goodbye:"Oh would you look at the time, I have a trillion chocolate eggs to lay.",
    },
    wolves= {
        greeting:"Oh sorry you're early, just let me WOLF down these last few bites.",
        connection:"wolves, AWOOOO. Apologies, that happens sometimes",
        goodbye:"Oh no, is it a full moon tonight!? I have to go!",
    },
    sloth= {
        greeting:"*snore* zzzz... Hmm? Oh. OH! Apologies, just resting my eyes!",
        connection:"zzz... Oh, oh sorry! Um, with sloths",
        goodbye:"Oh midday already, time for my fifth nap of the day!",
    },
    horse= {
        greeting:"Hay! Glad you're here, god I feel like I've been sitting here for ages.  A bit saddle sore!",
        connection:"majestic and beautiful horses",
        goodbye:"Do you have any further questions? Neigh? Then I really must canter back to my stable.",
    },
    seahorse= {
        greeting:"Welcome to the Sea-ance, I'm glad you could coral the time! I hope the winds weren't too rough.",
        connection:"seahorses, the stallions of the sea",
        goodbye:"Oop, I think my water just broke. Yes I am a man, and yes men can give birth. Goodbye.",
    },
]

// Function to string together predictions.
function fortune(){
    const anim = Math.floor(Math.random()*animObj.length);
    const cosm = Math.floor(Math.random()*cosmicDevices.length);
    console.log(animObj[anim].greeting);
    console.log('****~~The universe is being consulted to predict your future~~****');
    console.log('Ah yes, the connection is strong, you truly are part of the universe!');
    console.log('Sorry, before we begin...')
    switch (cosm){
        case 0:
            console.log('Did you hear the story about the dish and the spoon?');
            break;
        case 1:
            console.log('Boy is it hot today! I must tell me son to close the curtains!');
            break;
        case 2:
            console.log('Small things can pack a big punch!');
            break;
        case 3:
            console.log("There really is a large rectum of answers we can get from the universe... I mean SPECTRUM!");
            break;
        case 4:
            console.log("Do you ever want to just... chill and watch some shows?");
            break;
        case 5:
            console.log("I've been finding myself on the web a lot lately.");
            break;
        case 6:
            console.log("I've been very, very angry lately, so sorry if I raise my voice.");
            break;
        case 7:
            console.log("Um.. sorry I just lost my train of thought...");
            break;
        default:
            console.log('Oh I seem to have lost my connection for a second!');
            break;
        
    }
    console.log("Anyway!");
    console.log(`The ${cosmicDevices[cosm]} is currently ${prediction(cosmicReactions)}.`);
    console.log(`Because of this your alignments with ${prediction(alignmentDevices)} are looking ${prediction(alignmentStrength)}. You might be surprised by this, but I'm not, I have a deep connection with ${animObj[anim].connection}, which lets me see things like this.`);
    if (anim === 4){
        console.log("...");
        console.log(".....");
        console.log("zzz");
        console.log("SNORE!");
        console.log("OH! OH MY! Sorry, I seem to have dozed off.  Where was I? Oh yes");
    };
    console.log(`With alignments like that, I would recommend being careful around ${prediction(avoidObjects)}, like... Stay as far away as possible, or you might ${prediction(warning)}.`);
    console.log("Remember, this is just advice, but I'd take it, because I'm rarely wrong about these things.");
    if (cosm === 6){
        console.log(animObj[anim].goodbye.toUpperCase());
    } else{
        console.log(animObj[anim].goodbye);
    }
}


fortune();