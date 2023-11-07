"use strict";
import { pointInTheResultChecker } from "./pointInTheResultChecker.js";
import { result } from "./result.js";
const operatorPlus = document.getElementById("+");
const operatorMinus = document.getElementById("-");
const operatorTimes = document.getElementById("x");
const operatorOver = document.getElementById("/");
const operatorPercent = document.getElementById("%");
const buttonNodeList = document.querySelector(".keyButtons");
const displayer1 = document.getElementById("displayer1");
const displayer2 = document.getElementById("displayer2");

let numberProducerObject = {
  number_1: "",
  number_2: "",
  decimalPoint_1: "",
  decimalPoint_2: "",
  operator_1: "",
  numberResult: "",
};
let num1 = numberProducerObject.number_1;
let num2 = numberProducerObject.number_2;
let decimalPoint_1 = numberProducerObject.decimalPoint_1;
let decimalPoint_2 = numberProducerObject.decimalPoint_2;
let operator = numberProducerObject.operator_1;

displayer2.textContent = "0";
//************** EVENT DELEGATION ******************************** */
buttonNodeList.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "TH") {
    let clicked_id = e.target.id.replace("item_", "");
    //************************Produce the first integer of the first number****** */
    if (
      !num1 &&
      !num2 &&
      !operator &&
      clicked_id != "+" &&
      clicked_id != "-" &&
      clicked_id != "x" &&
      clicked_id != "/" &&
      clicked_id != "=" &&
      clicked_id != "M" &&
      clicked_id != "CM" &&
      clicked_id != "%" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      if (clicked_id == ".") {
        num1 = "0.";
        decimalPoint_1 = "1";
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      } else {
        num1 = clicked_id;
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      }
    }
    //************************The first integer of the first number has been produced****** */
    //************************Produce the rest of the first number****** */
    else if (
      !num2 &&
      !operator &&
      clicked_id != "=" &&
      clicked_id != "M" &&
      clicked_id != "CM" &&
      clicked_id != "%" &&
      clicked_id != "+" &&
      clicked_id != "-" &&
      clicked_id != "*" &&
      clicked_id != "/" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      //****************Accept the decimal *********/
      if (
        num1 == "0" &&
        clicked_id == "." &&
        decimalPoint_1 == "" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "0" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num1 = num1 + clicked_id;
        decimalPoint_1 = "1";
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      } else if (
        num1 == "0" &&
        decimalPoint_1 == "" &&
        clicked_id == "0" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "." &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num1 = num1;

        displayer1.textContent = num1;
        displayer2.textContent = num1;
      } else if (
        num1 == "0" &&
        decimalPoint_1 == "1" &&
        clicked_id == "." &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num1 = num1;
        decimalPoint_1 = "1";
        decimalPoint_1 = "1";
        displayer1.textContent = num1;
        displayer2.textContent = num1;
        //****************Reject multiple zeros *********/
      } else if (
        num1 &&
        decimalPoint_1 == "" &&
        clicked_id == "." &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "%" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num1 = num1 + clicked_id;
        decimalPoint_1 = "1";
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      } //****************Reject the second decimal point *********/
      else if (
        num1 &&
        decimalPoint_1 == "1" &&
        clicked_id == "." &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      }

      //****************Accept the integer *********/
      else if (
        clicked_id != "." &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num1 = num1 + clicked_id;
        displayer1.textContent = num1;
        displayer2.textContent = num1;
      }
    }
    //**********************OPERATORS************************************* */

    //****************Accept the operators *********/
    operatorPlus.addEventListener("click", operatorPlusAssigner);
    function operatorPlusAssigner() {
      if (!operator) {
        operator = "+";
        console.log("artıya tıklandıı");
        displayer1.textContent = num1 + operator;
      }
    }

    operatorMinus.addEventListener("click", operatorMinusAssigner);
    function operatorMinusAssigner() {
      if (!operator) {
        operator = "-";
        console.log("eksiye tıklandıı");
        displayer1.textContent = num1 + operator;
      }
    }

    operatorTimes.addEventListener("click", operatorTimesAssigner);
    function operatorTimesAssigner() {
      if (!operator) {
        operator = "x";
        displayer1.textContent = num1 + operator;
      }
    }
    operatorOver.addEventListener("click", operatorOverAssigner);
    function operatorOverAssigner() {
      if (!operator) {
        operator = "/";
        displayer1.textContent = num1 + operator;
      }
    }
    operatorPercent.addEventListener("click", operatorPercentAssigner);
    function operatorPercentAssigner() {
      if (!operator) {
        operator = "%";
        displayer1.textContent = num1 + operator;
      }
    }
    //***********************OPERATORS ABOVE ******************************* */}
    //************************The first number has been produced.****** */
    //
    //************************PRODUCE THE SECOND NUMBER****** */
    if (
      num1 &&
      operator &&
      !num2 &&
      clicked_id != "+" &&
      clicked_id != "-" &&
      clicked_id != "x" &&
      clicked_id != "/" &&
      clicked_id != "=" &&
      clicked_id != "M" &&
      clicked_id != "CM" &&
      clicked_id != "%" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      if (clicked_id == ".") {
        num2 = "0.";
        decimalPoint_2 = "1";
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      } else {
        num2 = clicked_id;
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      }
    }
    //************************The first integer of the SECOND number has been produced****** */
    //************************Produce the rest of the SECOND number****** */
    else if (
      num1 &&
      num2 &&
      operator &&
      clicked_id != "=" &&
      clicked_id != "M" &&
      clicked_id != "CM" &&
      clicked_id != "%" &&
      clicked_id != "+" &&
      clicked_id != "-" &&
      clicked_id != "*" &&
      clicked_id != "/" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      //****************Avoid the zero before the integer *********/

      if (
        num2 == "0" &&
        clicked_id != "0" &&
        decimalPoint_2 != "1" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "." &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num2 = clicked_id;
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      } //****************Reject multiple zeros *********/
      else if (
        clicked_id == "0" &&
        num2 == "0" &&
        decimalPoint_2 != "1" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "%" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        displayer1.textContent = num1 + operator + num2;

        displayer2.textContent = num2;
      } else if (
        clicked_id == "0" &&
        decimalPoint_2 != "1" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num2 = num2 + clicked_id;
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      }

      //****************Accept the decimal *********/
      else if (
        clicked_id == "." &&
        decimalPoint_2 != "1" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num2 = num2 + clicked_id;
        decimalPoint_2 = "1";
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;

        //****************Reject the second decimal point *********/
      } else if (
        clicked_id == "." &&
        decimalPoint_2 == "1" &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      }

      //****************Accept the integer *********/
      else if (
        clicked_id != "." &&
        clicked_id != "+" &&
        clicked_id != "-" &&
        clicked_id != "x" &&
        clicked_id != "/" &&
        clicked_id != "backarrow" &&
        clicked_id != "x2" &&
        clicked_id != "squareRoot"
      ) {
        num2 = num2 + clicked_id;
        displayer1.textContent = num1 + operator + num2;
        displayer2.textContent = num2;
      }
    }

    //************************The SECOND number has been produced.****** */
    //
    //************************ADDING EXTRA NUMBERS */
    //*****************plus operator*********************** */
    if (
      num1 &&
      num2 &&
      operator &&
      clicked_id == "+" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      displayer1.textContent = result(num1, num2, operator);
      num1 = displayer1.textContent;
      displayer2.textContent = clicked_id;
      // num1 = +num1 + +num2;
      num2 = "";
      console.log("aşağıda artıya tıklandı");
      operator = clicked_id;
      decimalPoint_2 = "";
    }
    //*****************minus operator*********************** */
    if (
      num1 &&
      num2 &&
      operator &&
      clicked_id == "-" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      displayer1.textContent = result(num1, num2, operator);
      num1 = displayer1.textContent;
      displayer2.textContent = clicked_id;
      // num1 = +num1 - +num2;
      num2 = "";
      console.log("aşağıda eksiye tıklandı");
      operator = clicked_id;
      decimalPoint_2 = "";
    }
    //*****************times operator*********************** */
    if (
      num1 &&
      num2 &&
      operator &&
      clicked_id == "*" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      displayer1.textContent = result(num1, num2, operator);
      num1 = displayer1.textContent;
      displayer2.textContent = clicked_id;
      // num1 = +num1 - +num2;
      num2 = "";
      operator = clicked_id;
      decimalPoint_2 = "";
    }
    //*****************over operator*********************** */
    if (
      num1 &&
      num2 &&
      operator &&
      clicked_id == "/" &&
      clicked_id != "backarrow" &&
      clicked_id != "x2" &&
      clicked_id != "squareRoot"
    ) {
      displayer1.textContent = result(num1, num2, operator);
      num1 = displayer1.textContent;
      displayer2.textContent = clicked_id;
      // num1 = +num1 - +num2;
      num2 = "";
      operator = clicked_id;
      decimalPoint_2 = "";
    }
    //************************** EQUAL OPERATOR************** */

    if (clicked_id == "=") {
      if (operator == "+") {
        const sonuc = parseFloat(+num1 + +num2).toPrecision(10);
        numberProducerObject.numberResult = sonuc;
        displayer1.textContent = num1 + operator + num2 + clicked_id;
        let aaa = sonuc;
        displayer2.textContent = pointInTheResultChecker(aaa);

        //**********************************************ARTI YUKARIDA */
      } else if (operator == "-") {
        const sonuc = parseFloat(+num1 - +num2).toPrecision(10);
        numberProducerObject.numberResult = sonuc;
        displayer1.textContent = num1 + operator + num2 + clicked_id;
        let aaa = sonuc;
        displayer2.textContent = pointInTheResultChecker(aaa);

        //****************************************************************************** */
      } else if (operator == "x") {
        const sonuc = parseFloat(+num1 * +num2).toPrecision(10);
        displayer1.textContent = num1 + operator + num2 + clicked_id;
        let aaa = sonuc;
        displayer2.textContent = pointInTheResultChecker(aaa);

        //************************************************************************************ */
      } else if (operator == "/") {
        const sonuc = parseFloat(+num1 / +num2).toPrecision(10);
        displayer1.textContent = num1 + operator + num2 + clicked_id;
        let aaa = sonuc;
        displayer2.textContent = pointInTheResultChecker(aaa);

        //************************************************************************************************ */
      } else if (operator == "%") {
        const sonuc = parseFloat((+num1 * +num2) / 100).toPrecision(10);
        displayer1.textContent = num1 + operator + num2 + clicked_id;
        let aaa = sonuc;
        displayer2.textContent = pointInTheResultChecker(aaa);
      }
    }

    //***************************EQUAL OPERATOR ABOVE************* */

    //***************************OTHER OPERATORS ******************* */
    if (clicked_id == "x2") {
      function squareMethod() {
        console.log(num1);
        displayer1.textContent = num1 + "*" + num1;
        let aaa = Math.pow(num1, 2).toPrecision(10);
        displayer2.textContent = pointInTheResultChecker(aaa);
      }

      squareMethod();
    }
    if (clicked_id == "squareRoot") {
      function squareRootMethod() {
        displayer1.innerHTML = "&radic;" + "&nbsp;";
        displayer2.textContent = Math.sqrt(num1).toPrecision(10);
      }

      squareRootMethod();
    }

    //***************************OTHER OPERATORS ABOVE******************* */
    if (clicked_id == "C") {
      function clearFunction1() {
        displayer1.textContent = "";
        displayer2.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
        decimalPoint_1 = "";
        decimalPoint_2 = "";
        displayer2.textContent = "0";
      }

      clearFunction1();
    }

    if (clicked_id == "=") {
      function clearFunction2() {
        num1 = displayer2.textContent;
        num2 = "";
        operator = "";
        decimalPoint_1 = "";
        decimalPoint_2 = "";
      }
      clearFunction2();
    }
    if (clicked_id == "backarrow") {
      let icerik = displayer2.textContent;
      if (icerik == num1 || displayer2.textContent == "0") {
        if (operator) {
          icerik = Object.values(num1);
          icerik.push(operator);
          icerik.pop();
          num1 = icerik.join("");
          operator = "";
          console.log(operator);
          if (icerik.length == 0) {
            displayer1.textContent = 0;
            displayer2.textContent = 0;
          } else {
            displayer1.textContent = num1;
            displayer2.textContent = num1;
          }
        } else {
          icerik = Object.values(num1);
          icerik.pop();
          num1 = icerik.join("");
          if (icerik.length == 0) {
            displayer1.textContent = 0;
            displayer2.textContent = 0;
          } else {
            displayer1.textContent = num1;
            displayer2.textContent = num1;
          }
        }
      } else if (icerik == num2) {
        let icerik2 = displayer2.textContent;
        icerik2 = Object.values(num2);
        icerik2.pop();
        num2 = icerik2.join("");
        if (icerik2.length == 0) {
          displayer1.textContent = num1 + operator;
          displayer2.textContent = 0;
        } else {
          displayer1.textContent = num1 + operator + num2;
          displayer2.textContent = num2;
        }
      } else if (icerik == num2) {
        let icerik2 = displayer2.textContent;
        icerik2 = Object.values(num2);
        icerik2.pop();
        num2 = icerik2.join("");
        if (icerik2.length == 0) {
          displayer1.textContent = num1 + operator;
          displayer2.textContent = 0;
        } else {
          displayer1.textContent = num1 + operator + num2;
          displayer2.textContent = num2;
        }
      }
    }
  }
});
