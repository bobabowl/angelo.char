let happySong = load('https://open.spotify.com/track/15rX80MpEJ2OqW3dPunQvI?si=8d6a5cd1be00490f');
let sadSong = load('https://open.spotify.com/track/4B3qvzOMzLQXLeYgPsG3KA?si=2606df89aa714218');
let energeticSong = load('https://open.spotify.com/track/22sLuJYcvZOSoLLRYev1s5?si=79eb5f8b7e744a17');
let dramaticSong = load('https://open.spotify.com/track/3znIACSXPLn3HFCf7moZ28?si=a81201d445f94042');
let currentHyperfixation = load('https://open.spotify.com/track/5QMrH5nszZZR3nefIj6Mar?si=2150a8829ea444b5');

const emotions = require('../emotions/emotions_lib.js');
const realLifeReaction = require('../biology/body_functions/physical_reaction.js');

function feelCurrentEmotion() {
    if (presentTime.currentEmotion == happy) {
        play(happySong);
    } else if (presentTime.currentEmotion == !sad && presentTime.adrenalineLevel < 50) {
        play(dramaticSong);
    } else if (presentTime.currentEmotion == happy && presentTime.adrenalineLevel < 50) {
        play(energeticSong);
    } else if (presentTime.currentEmotion == sad && presentTime.emotionalLevel < 75) {
        play(sadSong);
    } else if (presentTime.currentEmotion == happy && presentTime.hyperfixation == true) {
        play(currentHyperfixation);
    }
}

function physicalResponse (){
    for (let i = 0; i < emotions.length; i++) {
 if (emotions[i] == presentTime.currentEmotion && physicalReaction.emotionalLevelContext == 'suitable'){
    realLifeReaction.physicalReaction = emotion;
    feelCurrentEmotion();
    changePhysicalFaceToMatchWithEmotion();
 } else {
    realLifeReaction.physicalReaction = emotion;
    feelCurrentEmotion();
 }
    }
}
