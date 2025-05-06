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
            myImpression = this.perception.mostRecentEncounter;
            keyEvents = this.perception.allKeyEvents;
            this.ThatTimeThatThey.keyEvents;
        });
    }
}

function greetPerson() {
    for (let i = 0; i < people.length; i++) {
        if (this.people.Event.IsPresent == true) {
            if (this.people.Perception.PersonalOpinion == like) {
                this.positiveGreetingBehavior();
                while (this.people.Event.IsPresent == true) {
                    bond++;
                    energy -= 0.05;
                }
            } else if (this.people.Perception.PersonalOpinion == neutral) {
                this.neutralGreetingBehavior();
            } else if (this.people.Perception.PersonalOpinion == dislike || this.people.Perception.PersonalOpinion == hate) {
                this.passiveAgressiveBehavior();
            } else if (this.people.Perception.PersonalOpinion == like && this.people.Relationship == partner) {
                this.showAffectionateBehavior();
                while (this.people.Event.IsPresent == true) {
                    love++;
                    energy -= 0.005;
                }
            }
        }
    }

}
