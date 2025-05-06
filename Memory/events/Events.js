

const posEvents = [
    {
        event: "First Relationship",
        description: "Got with my partner through dating app. Learning to navigate through my first relationship through my partner",
        keyMem: "First date with poke and Paris Baguette. Kissed me in the parking lot for the first time.",
        relatedPeopleToEvent: [alvinNguyen]
    },
    {
        event: "Hawaii Trip 2024",
        description: "Went with my partner, mother, and sister to Hawaii. It was a new island I have not visited before, but it was my partners first time, while it was my second time in Hawaii, first time in Oahu",
        keyMem: "Walking around with the family and finally finding a bucket hat that fits my big head.",
        relatedPeopleToEvent: [alvinNguyen, milizaTadeo, felizaTadeo]
    },
    {
        event: "Fanime 2018",
        description: "Went to FanimeCon 2018 for the first time. Was extremely wow'ed.",
        keyMem: "Honey-senpai cosplay from 'Ouran High School Host Club'. Spent around 200$.",
        relatedPeopleToEvent: [jrTadeo]
    },
];
const badEvents = [
    {
        event: "Panicking about College",
        description: "Overwhelmed with how much was going on with the world, especially with college and what my future career was going to be.",
        keyMem: "Leaning over the toilet because I felt so naseous I was going to throw up. Did actually throw up.",
        relatedPeopleToEvent: null
    },
    {
        event: "Uninvited from Birthday",
        description: "I got a call from my friends, telling me that they actually uninvited me from the party without me knowing because I had outside issues where I was not able to come anyways.",
        keyMem: "I remember feeling very hurt that it was done behind my back, and I felt like such a bad friend for not being able to make it to my best friends party.",
        relatedPeopleToEvent: [jettReyes, melanieMelanio]
    },
    {
        event: "Green Out",
        description: "When I took a pen hit from shupe and got way too high. Had a small freakout.",
        keyMem: "Actual lack of memory about the events from the movie 'Scooby Doo Zombie Island'. First encounter with the munchies",
        relatedPeopleToEvent: [jettReyes, melanieMelanio, mannyEstrada, shupe]
    },
];

function reminisceOnEvents() {
    for (let i = 0; i < posEvents.length; i++) {
        load(posEvents[i]);
        presentTime.currentEmotion = ('../../emotions/emotions_lib.js');
        output(presentTime.currentEmotion.newEmotion);
        if (emotions[i] == presentTime.currentEmotion && physicalReaction.emotionalLevelContext == 'suitable') {
            realLifeReaction.physicalReaction = emotion;
            feelCurrentEmotion();
            changePhysicalFaceToMatchWithEmotion();
        } else {
            feelCurrentEmotion();
            return this.memories.similarEvents.reminisce;
        }
    }
    for (let i = 0; i < badEvents.length; i++) {
        load(badEvents[i]);
        presentTime.currentEmotion = ('../../emotions/emotions_lib.js');
        output(presentTime.currentEmotion.newEmotion);
        if (emotions[i] == presentTime.currentEmotion && physicalReaction.emotionalLevelContext == 'suitable') {
            realLifeReaction.physicalReaction = emotion;
            feelCurrentEmotion();
            changePhysicalFaceToMatchWithEmotion();
        } else {
            feelCurrentEmotion();
            return this.memories.similarEvents.reminisce;
        }
    }
}
