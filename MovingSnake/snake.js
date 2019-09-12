var Snake = {
    xPos : -5,
    yPos : 225,
    dx : 5,
    dy : 0,
    timer : null,

    startStopButton : {id: "startStopButton", type: "button", value: "Start", onclick: "Snake.startStop()"},
    leftButton : {id: "leftButton", type: "button", value: "Left", onclick: "Snake.turnLeft()"},
    rightButton : {id: "rightButton", type: "button", value: "Right", onclick: "Snake.turnRight()"},
    canvas : {id: "canvas", width: "800", height: "450"},

    startStop : function() {
        if (document.getElementById("startStopButton").value == "Start") {
            document.getElementById("startStopButton").value = "Stop";
            var drawer = document.getElementById("canvas").getContext("2d");
            drawer.fillStyle = "#FF0000"; 
            Snake.timer = setInterval(function() {
                Snake.xPos += Snake.dx;
                Snake.yPos += Snake.dy;
                if (Snake.xPos < 0 || Snake.xPos > 800 || Snake.yPos < 0 || Snake.yPos > 450) {
                    clearInterval(Snake.timer);
                    document.getElementById("startStopButton").value = "Start";
                } else {
                    drawer.fillRect(Snake.xPos, Snake.yPos, 5, 5);
                }
            }, 75);
        } else {
            clearInterval(Snake.timer);
            document.getElementById("startStopButton").value = "Start";
        }
    },

    turnLeft : function() {
        if (Snake.dy == 0) {
            if (Snake.dx > 0) {
                Snake.dy = -Snake.dx;
            } else {
                Snake.dy = -Snake.dx;
            }
            Snake.dx = 0;
        } else {
            if (Snake.dy > 0) {
                Snake.dx = Snake.dy;
            } else {
                Snake.dx = Snake.dy;
            }
            Snake.dy = 0;
        }
    },

    turnRight : function() {
        if (Snake.dy == 0) {
            if (Snake.dx > 0) {
                Snake.dy = Snake.dx;
            } else {
                Snake.dy = Snake.dx;
            }
            Snake.dx = 0;
        } else {
            if (Snake.dy > 0) {
                Snake.dx = -Snake.dy;
            } else {
                Snake.dx = -Snake.dy;
            }
            Snake.dy = 0;
        }
    },

    displayElement : function(element) {
        let s = "<input id=\"" + element.id + "\", ";
        s += "type=\"" + element.type + "\", ";
        s += "value=\"" + element.value + "\", ";
        s += "onclick=\"" + element.onclick + "\">";
        return s;
    },

    display : function() {
        let s = Snake.displayElement(Snake.startStopButton) + Snake.displayElement(Snake.leftButton) + Snake.displayElement(Snake.rightButton);
        s += "<br><canvas id=\"" + Snake.canvas.id + "\", ";
        s += "width=\"" + Snake.canvas.width + "\", ";
        s += "height=\"" + Snake.canvas.height + "\"";
        s += "style=\"border:1px solid #000000;\">Your browser does not support this game.</canvas>";
        return s;
    },

    run : function() {
        console.log(Snake.display());
        return Snake.display();
    }
}