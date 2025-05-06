

const favFoods = [miGoreng, tortangTalong, kareKare, sushiRoll];
const favColors = [yellow, babyBlue, babyPink, matchaGreen, jadeGreen];
const favGames = [overwatch, deadByDaylight, cultOfTheLamb, theSims4, animalCrossing];

const likes = [favFoods, favColors, favGames];

function iLikeIt() {
    for (let i = 0; i < likes.length; i++) {
        if (likes[favFoods]) {
            this.itemListed.generalOpinionLevel++;
            this.food.appetite++;
            if (this.food.existence = 'present') {
                eatFood();
                angelo.body.stomachFullness++;
                this.food.satisfaction += 2;
                physicalResponse();
            }
        } else if (likes[favColors]) {
            this.itemListed.generalOpinionLevel++;
            this.visual.aesthetic++;
            if (this.visual.existence = 'present') {
                this.visual.satisfaction += 2;
                physicalResponse();
            }
        } else if (likes[favGames]) {
            this.itemListed.generalOpinionLevel++;
            this.game.enjoyment++;
            if (this.game.existence = 'present') {
                playGame();
                this.game.playTime++;
                angelo.body.entertainmentLevel++;
                angelo.body.energyLevel -= 0.5;
                physicalResponse();
            }
        } else {
            this.itemListed.generalOpinionLevel += 0.5;
        }
    }
}