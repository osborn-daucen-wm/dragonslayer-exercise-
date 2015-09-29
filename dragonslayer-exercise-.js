/**
 * Created by session1 on 9/28/15.
 */
var slaying = true;
var fireBreath = Math.floor(Math.random());
var youHit = Math.floor(Math.random());
var playerHealth = 25;
var oryxHealth = 10;

while(slaying){
    slaying = false;

    if(fireBreath < 0.34){
        alert("The air around you crackles and burns.");
        playerHealth -= 5;
    }
    if(youHit <= 0.67){
        alert("You strike Oryx and jump back safely.");
        oryxHealth -= 3;
    }
    if(playerHealth <= 0){
        alert("Oryx does is sick finishing move and curb-stomps you into oblivion.");
        slaying = false;
    }
    if(oryxHealth <= 0){
        alert("You tether Oryx with your super and finish him off with your Touch of Malice.")
        slaying = false;
    }

    slaying = false;
}