/**
 * Created by session1 on 9/28/15.
 */
var slaying = true;
var fireBreath = Math.floor(Math.random() * 10);
var youHit = Math.floor(Math.random() * 7);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
var totalDamage = totalDamage + damageThisRound;
var playerHealth = 25;
var oryxHealth = 10;

while(slaying){
    slaying = false;
    if(playerHealth <= 0){
        alert("Oryx does is sick finishing move and curb-stomps you into oblivion.");
        slaying = false;
    }
    if(fireBreath){
        alert("The air around you crackles and burns.");
        playerHealth -= 5;
    }
    if(youHit){
        alert("You strike Oryx and jump back safely.");
        oryxHealth -= 3;
    }
    if(oryxHealth <= 0){
        alert("You tether Oryx with your super and finish him off with you Surros Regime.")
        slaying = false;
    }
    slaying = false;
}