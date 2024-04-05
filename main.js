// function to select randomly from the lists
function prediction (arr1){
    let loc = Math.floor(Math.random()*arr1.length);
    return arr1[loc];
};

// Lists to store predictions
const cosmicDevices = ["moon", "sun", "planet known as mercury", "planet known as uranus (Not the other one... Just the planet)", "netflix sattelite", "space spider", "alien, I think his name is Paul", "thing up there... You know the one, I don't know the name of it, but it's up there"];
const cosmicReactions = ["waning", "whining", "in retrograde", "in gatorade", "in your dreams", "really, really strong.  Like nearly as strong as Dwayne (The Rock) Johnson", "really weak, it's kind of pathetic"];
const alignmentDevices = ["food", "animals", "plants", "traffic", "yourself", "radio stations", "fashion"];
const alignmentStrength = ["good", "bad", "so-so", "strong", "weak", "strong enough to take on a bear. Not a big bear... Like a build-a-bear... but like a big build a bear"];
const animals = ["big dogs", "medium sized cats", "rabbits, the cute kind, not those meat ones", "wolves, AWOOOO. Sorry that happens sometimes", "zzz... Oh, oh sorry! Um, with sloths", "horses", "seahorses"]
const avoidObjects = ["burgers", "humans", "dandelions", "roller blades", "chihuahuas", "meteorites", "doors", "the ground", "anywhere that has any kind of gravity in it", "anyone called Paul"];
const warning = ["trip over in a really public place", "bite into a pie that seems like it's the right temperature, but is actually REALLY hot inside", "be mistaken as a cute dog, and someone pats you, but you're too awkward to correct them so you just sit there being pet by a stranger and it doesn't feel as bad as you would have thought", "get donked on the head", "finally eat the thing that you've been craving, but then it isn't very good and doesn't quite get rid of the craving, but you feel like you can't justify having another one from somewhere else", "be blamed for a really bad smelling fart, and nobody believes that it wasn't you, and they all call you stinky butt, but your butt smells fine in reality, but you don't know how to convince them"];

// Function to string together predictions.
function fortune(){
    console.log('****~~The universe is being consulted to predict your future~~****');
    console.log('Ah yes, the connection is strong, you truly are part of the universe!');
    console.log("");
    console.log(`The ${prediction(cosmicDevices)} is currently ${prediction(cosmicReactions)}.`);
    console.log(`Because of this your alignments with ${prediction(alignmentDevices)} are looking ${prediction(alignmentStrength)}. You might be surprised by this, but I'm not, I have a deep connection with ${prediction(animals)}, which lets me see things like this.`);
    console.log(`With alignments like that, I would recommend being careful around ${prediction(avoidObjects)}, like... Stay as far away as possible, or you might ${prediction(warning)}.`);
    console.log("Remember, this is just advice, but I'd take it, because I'm rarely wrong about these things.")
}


fortune();