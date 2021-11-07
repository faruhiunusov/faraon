var gamestarted = 0;
var Score = 0;

function Start() {
    if (gamestarted == 0) {
        gamestarted = 1;
        setTimeout(End, 5000);
    }
    SetRandomLoc();
    Score++;
    console.log(Score);
}

function SetRandomLoc() {
    var top = Math.random();
    top = -Math.round(top * 850 + 70);                
    var left = Math.random();
    left = Math.round(left * 1500);
    console.log(`top сдвинуто на ${top}px; left - на ${left}px`);
    document.getElementById("map__mark").style.top = + top + "px";
    document.getElementById("map__mark").style.left = left + "px";
}

function End() {
    clearTimeout();
    if (Score < 5) {
        alert(`прэкольно ваще на ${Score}`);
    }
    if ((Score >= 5) && (Score <= 9)) {
        alert(`чооо обэма ты шо крейзи ты сделал ${Score} очков`);
    }
    if (Score > 9) {
        alert(`не ну ты делаешь великолепно конечно я больше не могу придумать похвал чел ты сделал ${Score} очков`);
    }
    gamestarted = 0;
    Score = 0;
}