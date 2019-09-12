var Calc = {
  Model : {
    operand1 : "",
    operand2 : "",
    operator : "",
    memory : 0
  },

  View : {
    textRow : {id: "textRow", type: "text", value: "", onclick: ""},
    button0 : {id: "button0", type: "button", value: 0, onclick: ""},
    button1 : {id: "button1", type: "button", value: 1, onclick: ""},
    button2 : {id: "button2", type: "button", value: 2, onclick: ""},
    button3 : {id: "button3", type: "button", value: 3, onclick: ""},
    button4 : {id: "button4", type: "button", value: 4, onclick: ""},
    button5 : {id: "button5", type: "button", value: 5, onclick: ""},
    button6 : {id: "button6", type: "button", value: 6, onclick: ""},
    button7 : {id: "button7", type: "button", value: 7, onclick: ""},
    button8 : {id: "button8", type: "button", value: 8, onclick: ""},
    button9 : {id: "button9", type: "button", value: 9, onclick: ""},
    buttonDecimal : {id: "buttonDecimal", type: "button", value: ".", onclick: ""},
    buttonAdd : {id: "buttonAdd", type: "button", value: "+", onclick: ""},
    buttonSubtract : {id: "buttonSubtract", type: "button", value: "-", onclick: ""},
    buttonMultiply : {id: "buttonMultiply", type: "button", value: "*", onclick: ""},
    buttonDivide : {id: "buttonDivide", type: "button", value: "/", onclick: ""},
    buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick: ""},
    buttonClear : {id: "buttonClear", type: "button", value: "C", onclick: ""},
    buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick: ""},
    buttonMSubtract : {id: "buttonM-", type: "button", value: "M-", onclick: ""},
    buttonMAdd : {id: "buttonM+", type: "button", value: "M+", onclick: ""},
    buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick: ""}
  },

  Controller : {
    operandHandler : function(that) {
      document.getElementById("textRow").value += that.value;
    },

    operatorHandler : function(that) {
      if (document.getElementById("textRow").value == "") {
        if (that.value == "-") { // For entering negative numbers
          document.getElementById("textRow").value = "-";
        }
      } else if (that.value == "=") {
        if (document.getElementById("textRow") != "" && Calc.Model.operand1 != "") {
          Calc.Model.operand2 = document.getElementById("textRow").value;
          document.getElementById("textRow").value = eval(Calc.Model.operand1 + Calc.Model.operator.value + Calc.Model.operand2);
          Calc.Model.operand1 = "";
          Calc.Model.operand2 = "";
          document.getElementById(Calc.Model.operator.id).style.color = "black";
          Calc.Model.operator = "";
        }
      } else {
        that.style.color = "red";
        Calc.Model.operand1 = document.getElementById("textRow").value;
        Calc.Model.operator = that;
        document.getElementById("textRow").value = "";
      }
    },

    memoryHandler : function(that) {
      if (that.value == "MR") {
        document.getElementById("textRow").value = Calc.Model.memory;
      } else if (that.value == "M-") {
        Calc.Model.memory -= document.getElementById("textRow").value;
      } else if (that.value == "M+") {
        Calc.Model.memory += document.getElementById("textRow").value;
      } else if (that.value == "MC") {
        Calc.Model.memory = 0;
      }
    },

    clearFunction : function() {
      Calc.Model.operand1 = "";
      Calc.Model.operand2 = "";
      if (Calc.Model.operator != "") {
        document.getElementById(Calc.Model.operator.id).style.color = "black";
        Calc.Model.operator = "";
      }
      document.getElementById("textRow").value = "";
    }
  },

  run : function() {
    Calc.attachHandlers();
    console.log(Calc.display());
    return Calc.display();
  },
  
  displayElement : function (element) {
    var s = "<input ";
    s += " id=\"" + element.id + "\"";
    s += " type=\"" + element.type + "\"";
    s += " value= \"" + element.value + "\"";
    s += " onclick= \"" + element.onclick + "\"";
    s += ">";
    return s;
  },

  display : function() {
    var s;
    s = "<table id=\"myTable\" border=2>"
    s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.button1)
      + Calc.displayElement(Calc.View.button2)
      + Calc.displayElement(Calc.View.button3)
      + Calc.displayElement(Calc.View.buttonAdd);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.button4)
      + Calc.displayElement(Calc.View.button5)
      + Calc.displayElement(Calc.View.button6)
      + Calc.displayElement(Calc.View.buttonSubtract);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.button7)
      + Calc.displayElement(Calc.View.button8)
      + Calc.displayElement(Calc.View.button9)
      + Calc.displayElement(Calc.View.buttonMultiply);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.button0)
      + Calc.displayElement(Calc.View.buttonDecimal)
      + Calc.displayElement(Calc.View.buttonEquals)
      + Calc.displayElement(Calc.View.buttonDivide);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.buttonClear)
      + Calc.displayElement(Calc.View.buttonMR)
      + Calc.displayElement(Calc.View.buttonMSubtract)
      + Calc.displayElement(Calc.View.buttonMAdd);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.buttonMC)
      + "</tr></td></table>";
    return s;
  },

  attachHandlers : function() {
    for (var i = 0; i <= 9; i++) {
      Calc.View["button" + i].onclick = "Calc.Controller.operandHandler(this)";
    }
    Calc.View.buttonDecimal.onclick = "Calc.Controller.operandHandler(this)";
    Calc.View.buttonAdd.onclick = "Calc.Controller.operatorHandler(this)";
    Calc.View.buttonSubtract.onclick = "Calc.Controller.operatorHandler(this)";
    Calc.View.buttonMultiply.onclick = "Calc.Controller.operatorHandler(this)";
    Calc.View.buttonDivide.onclick = "Calc.Controller.operatorHandler(this)";
    Calc.View.buttonEquals.onclick = "Calc.Controller.operatorHandler(this)";
    Calc.View.buttonClear.onclick = "Calc.Controller.clearFunction()";
    Calc.View.buttonMR.onclick = "Calc.Controller.memoryHandler(this)";
    Calc.View.buttonMSubtract.onclick = "Calc.Controller.memoryHandler(this)";
    Calc.View.buttonMAdd.onclick = "Calc.Controller.memoryHandler(this)";
    Calc.View.buttonMC.onclick = "Calc.Controller.memoryHandler(this)";
  }
}