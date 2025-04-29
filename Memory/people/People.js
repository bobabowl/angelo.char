var myMom, myDad, myAte, myKuya;
var alvinNguyen;
var jettReyes, melanieMelanio, mannyEstrada, shupe;

const felizaTadeo = myMom;
const ramilTadeo = myDad;
const milizaTadeo = myAte;
const jrTadeo = myKuya;

const people = [felizaTadeo, ramilTadeo, milizaTadeo, jrTadeo, alvinNguyen, jettReyes, melanieMelanio, mannyEstrada, shupe];

const ThatTimeThatThey = require('../events/Events.js');
const Perception = require('../../Headspace/Headspace.js');

function ifMeetingPerson() {
    for (let i = 0; i < people.length; i++) {
        gatherIntel();
        new ThatTimeThatThey.keyEvents.mostRelatableEventToSituation;
    }
    greetPerson();
}

function gatherIntel() {
    for (let i = 0; i < people.length; i++) {
        return Perception.find({}, function (err, perception) {
            myImpression = perception.mostRecentEncounter;
            keyEvents = perception.allKeyEvents;
            ThatTimeThatThey.keyEvents;
        });
    }
}