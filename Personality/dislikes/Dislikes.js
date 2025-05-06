

const badFoods = [seaUrchin, cottageCheese, blueCheese, tomatoJuice, soup, everythingBagel];
const badColors = [orange, saturatedRed, electricBlue, neonYellow, hotPink, deepGreen];
const badGames = [valorant, genshinImpact, leagueOfLegends, mapleStory];
const petPeeves = [fishSpecificallyWithTheLittleBonesThatYouCannotTakeOut, whenSomebodySaysTheyDontKnowWhatTheyWantButWhenYouMakeASuggestionTheyDontChooseIt, peopleWhoSneezeOrCoughWithoutCoveringTheirMouth, sleepingWhileItIsReallyWarm, tryingToWorkOnACraftOrASpecificTaskThatRequiresDelicateHandsButMyHandsAreSweatyBecauseOfHyperhidrosis];

const dislikes = [badFoods, badColors, badGames, petPeeves];

function iDislikeIt() {
    for (let i = 0; i < dislikes.length; i++) {
        if (dislikes[badFoods]) {
            this.itemListed.generalOpinionLevel--;
            this.food.appetite--;
            if (this.food.existence = 'present') {
                eatFood();
                angelo.body.stomachFullness++;
                this.food.satisfaction += 0.5;
                physicalResponse();
            }
        } else if (dislikes[badColorsColors]) {
            this.itemListed.generalOpinionLevel--;
            this.visual.aesthetic--;
            if (this.visual.existence = 'present') {
                this.visual.satisfaction -= 2;
                physicalResponse();
            }
        } else if (dislikes[badGames]) {
            this.itemListed.generalOpinionLevel--;
            this.game.enjoyment--;
            if (this.game.existence = 'present') {
                playGame();
                this.game.playTime++;
                angelo.body.entertainmentLevel += 0.2;
                angelo.body.energyLevel -= 2;
                physicalResponse();
            }
        } else if (dislikes[petPeeves]) {
            this.itemListed.generalOpinionLevel--;
            if (this.petPeeve.existence = 'present') {
                angelo.body.annoyanceLevel += 2;
                this.situation.enjoyment -= 2;
                physicalResponse();
            }
        } else {
            this.itemListed.generalOpinionLevel -= 0.5;
        }
    }
}