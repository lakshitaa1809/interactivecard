let holder = document.getElementById("name");
let display = document.getElementById("namedis");
let card = document.getElementsByClassName("card");
let cardno = document.getElementById("no");
let nodisplay = document.getElementById("nodis");
let month = document.getElementById("month");
let mondisplay = document.getElementById("monthdis");
let year = document.getElementById("year");
let yeardisplay = document.getElementById("yeardis");
let key = document.getElementById("keyval");
let keyvalue = document.getElementById("cvcdis");
let click = document.getElementById("click");
let thank = document.getElementById("con");
let myform = document.getElementById("myform");
startcard();
let l = 0;
function startcard() {
  display.innerHTML = "xxxxxxx";
  nodisplay.innerHTML = "0000  0000  0000  0000";
  mondisplay.innerHTML = "00";
  yeardisplay.innerHTML = "/00";
  keyvalue.innerHTML = "000";
}
holder.addEventListener("input", out);
function out(e) {
  display.innerHTML = e.target.value;
}
cardno.addEventListener("input", out1);
function out1(e) {
  nodisplay.innerHTML = e.target.value;
  let l = cardno.value;
  var regex = /^[0-9\s]*$/;
  var numdisplay = regex.test(nodisplay.innerHTML);
  if (numdisplay == true) {
    if (l.length > 19) {
      document.getElementById("inpno").style.color = "red";
      document.getElementById("inpno").innerHTML = "Enter only upto 16 digits";
    } else {
      document.getElementById("inpno").innerHTML = "Enter only Numeric value";
    }
  }
}

month.addEventListener("input", out2);
function out2(e) {
  mondisplay.innerHTML = e.target.value;
  let m = month.value;
  if (m.length > 2) {
    document.getElementById("inpmonth").style.color = "red";
    document.getElementById("inpmonth").innerHTML = "Enter only upto 2 digits";
  } else if (m.length == 0) {
    document.getElementById("inpmonth").style.color = "red";
    document.getElementById("inpmonth").innerHTML = "Can't be blank";
  }
}
year.addEventListener("input", out3);
function out3(e) {
  yeardisplay.innerHTML = "/" + e.target.value;
  let y = year.value;
  if (y.length > 2) {
    document.getElementById("inpyear").style.color = "red";
    document.getElementById("inpyear").innerHTML = "Enter only upto 2 digits";
  }
}
key.addEventListener("input", out4);
function out4(e) {
  keyvalue.innerHTML = e.target.value;
  let cvcvalue = key.value;
  if (cvcvalue.length > 3) {
    document.getElementById("inpcvc").style.color = "red";
    document.getElementById("inpcvc").innerHTML = "Enter only upto 3 digits";
  }
}
document.getElementById("end").style.display = "none";
click.addEventListener("click", () => {
  if (
    holder.value != "" &&
    cardno.value != "" &&
    month.value != "" &&
    year.value != "" &&
    key.value != ""
  ) {
    document.getElementById("myform").style.visibility = "hidden";
    document.getElementById("end").style.display = "block";
  } else {
    alert("check all fields are entered");
  }
});
thank.addEventListener("click", () => {
  document.getElementById("end").style.visibility = "hidden";
  document.getElementById("myform").style.display = "block";
  //style.display = "block";
});

/*let cvcvalue = key.value;
let y = year.value;
let m = month.value;
let l = cardno.value;
let h = holder.value;
if (h.length && l.length && m.length && y.length && cvcvalue.lenght > 0) {
  document.getElementById("labelname").disabled = true;
}
if (cvcvalue.length == 0) {
  document.getElementBSsyId("inpcvc").style.color = "red";
  document.getElementById("inpcvc").innerHTML = "Can't be blank";
}
if (y.length == 0) {
  document.getElementById("inpyear").style.color = "red";
  document.getElementById("inpyear").innerHTML = "Can't be blank";
}
if (m.length == 0) {
  document.getElementById("inpmonth").style.color = "red";
  document.getElementById("inpmonth").innerHTML = "Can't be blank";
}
*/
