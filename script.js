var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();


setInterval(
    function() {
        d = new Date();              // d is a variable that gets the date automatically
        second = d.getSeconds() * 6; //this is so that the "seconds-hand" can move 6 times
        minute = d.getMinutes() * 6; //the same thing is applied here
        hour = d.getHours() * 30 + Math.round(minute / 12);      //we have 12 hours it has to be divided by 12 i.e 360(deg)/12 gives 30
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)"; //to enable the "seconds hand" to move
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)"; //to enable the "minutes hand" to move
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)"; //to enable the "hour hand" to move
    },1000
)