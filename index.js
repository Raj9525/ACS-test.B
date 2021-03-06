//error box toast appearance

function Err1440() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "100px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err1366() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "90px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err700() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "75px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "33px";
  }, 3000);
}

function Err500() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "200px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "180px";
  }, 3000);

  document.getElementById("submitbtn").addEventListener("click", subm);
  document.getElementById("staticpin_tab").addEventListener("click", stat);

  function stat() {
    document.getElementById("errorBox").style.bottom = "80px";
  }

  function subm() {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "1";
    document.getElementById("errorBox").style.bottom = "100px";
    setTimeout(() => {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "0";
      document.getElementById("errorBox").style.bottom = "80px";
    }, 3000);
  }
}

function box() {
  if (window.screen.width >= 1440) {
    Err1440();
  } else if (window.screen.width <= 1439 && window.screen.width >= 1366) {
    Err1366();
  } else if (window.screen.width <= 1365 && window.screen.width >= 700) {
    Err700();
  } else if (window.screen.width <= 599 && window.screen.width >= 500) {
    Err500();
  } else {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "1";
    document.getElementById("errorBox").style.bottom = "45px";
    setTimeout(() => {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "0";
      document.getElementById("errorBox").style.bottom = "30px";
    }, 3000);
  }
}

//close error
function clserr() {
  document.getElementById("errorBox").style.opacity = "0";
}
//otp errormsg
function otperrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild OTP";

  var otpbox = document.getElementsByClassName("otpbox");
  for (var i = 0; i < otpbox.length; i++) {
    otpbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("otpexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < otpbox.length; i++) {
      otpbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("otpexclaim").style.opacity = "0";
  }, 8000);
}
//pin errormsg
function pinerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild ATM PIN";

  var pinbox = document.getElementsByClassName("pinbox");
  for (var i = 0; i < pinbox.length; i++) {
    pinbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("pinexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < pinbox.length; i++) {
      pinbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("pinexclaim").style.opacity = "0";
  }, 3000);
}
//expiry errorBox

function expiryerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Expiry date mismatch";
  document.getElementById("expbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("resetmonthbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("pinExpexclaim").style.opacity = "1";
  document.getElementById("rstexpexclaim").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("expbox").style.border = "0.5px solid #E1E7F3";
    document.getElementById("resetmonthbox").style.border =
      "0.5px solid #E1E7F3";
    document.getElementById("pinExpexclaim").style.opacity = "0";
    document.getElementById("rstexpexclaim").style.opacity = "0";
  }, 3000);
}
//password errorBox
function passerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Password doesnt matching";
  document.getElementById("passbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("passexclaim").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("passbox").style.border = "0.5px solid #E1E7F3";
    document.getElementById("passexclaim").style.opacity = "0";
  }, 3000);
}
//reset otp errormsg
function resetOTPerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild OTP";
  var rstOtpbox = document.getElementsByClassName("rstOtpbox");
  for (var i = 0; i < rstOtpbox.length; i++) {
    rstOtpbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("rstotpexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < rstOtpbox.length; i++) {
      rstOtpbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("rstotpexclaim").style.opacity = "0";
  }, 3000);
}
//disabling the links
function disablelink1() {
  document.getElementById("resendOTPbtn1").style.display = "none";
  document.getElementById("altResendotp1").style.display = "block";

  document.getElementById("sendotpBtn").disabled = "true";
  document.getElementById("sendotpBtn").style.opacity = "0.5";

  setTimeout(() => {}, 61500);
}

function disablelink2() {
  document.getElementById("setPwd").style.display = "none";
  document.getElementById("resendOTPbtn2").style.display = "none";
  document.getElementById("altResendotp2").style.display = "block";
  document.getElementById("altSetpwd").style.display = "block";

  setTimeout(() => {}, 61500);
}
//disable buttons
function dblotpbtn() {
  const otpbtn = document.getElementById("otpverifybtn");
  otpbtn.disabled = "true";
  otpbtn.value = "";
  document.getElementById("otploader").style.opacity = "1";
  document.getElementById("otploader").style.visibility = "visible";

  setTimeout(() => {
    //otpbtn.disabled = false;
    otpbtn.value = "VERIFY & PROCEED";
    document.getElementById("otploader").style.opacity = "0";
    document.getElementById("otploader").style.visibility = "hidden";
  }, 4000);
}

function dblpinbtn() {
  const pinbtn = document.getElementById("pinverifybtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("pinloader").style.opacity = "1";
  document.getElementById("pinloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.style.opacity = "1";
    pinbtn.value = "VERIFY & PROCEED";
    document.getElementById("pinloader").style.opacity = "0";
    document.getElementById("pinloader").style.visibility = "hidden";
  }, 4000);
}

function dblpassbtn() {
  const pinbtn = document.getElementById("passbtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("passloader").style.opacity = "1";
  document.getElementById("passloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.value = "VERIFY & PROCEED";
    document.getElementById("passloader").style.opacity = "0";
    document.getElementById("passloader").style.visibility = "hidden";
  }, 4000);
}

function dblsubmitbtn() {
  const pinbtn = document.getElementById("submitbtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("resetloader").style.opacity = "1";
  document.getElementById("resetloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.value = "SUBMIT";
    document.getElementById("resetloader").style.opacity = "0";
    document.getElementById("resetloader").style.visibility = "hidden";
  }, 4000);
}
//tab switch
function tabOpen(evt, cnt) {
  var i, dyncnt, tabbtn;
  dyncnt = document.getElementsByClassName("dyncnt");
  for (i = 0; i < dyncnt.length; i++) {
    dyncnt[i].style.display = "none";
  }
  tabbtn = document.getElementsByClassName("tabbtn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" active", "");
  }
  document.getElementById(cnt).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("otptab").click();

function tabclr() {
  document.getElementById("otptab").className += " active";
}

function tabclr2() {
  document.getElementById("staticpin_tab").className += " active";
}
//container height
function container(ht, htn) {
  document.getElementById("container").style.height = ht + "px";
  document.getElementById("container").style.height = htn + "%";
}

function container1(ht, htn) {
  if (window.screen.width <= 1439 && window.screen.width >= 1366) {
    document.getElementById("container").style.height = ht + "px";
    document.getElementById("container").style.height = htn + "%";
  }
}

function container2(ht, htn) {
  if (window.screen.width >= 1440) {
    document.getElementById("container").style.height = ht + "px";
    document.getElementById("container").style.height = htn + "%";
  }
}
//Footer adjustment
function foot1(hgt, pos) {
  if (window.screen.width <= 599 && window.screen.width >= 500) {
    document.getElementById("footer").style.height = hgt + "px";
    document.getElementById("expirewrapper").style.bottom = pos + "px";
  } else {
    return null;
  }
}
//resend timer

var mins = 1;
var secs = mins * 60;

window.onload = countdown();
function countdown() {
  setTimeout("Decrement()", 60);
  mins = 1;
  secs = mins * 60;
}

function Decrement() {
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    if (seconds < 59) {
      seconds.innerHTML = secs;
    } else {
      minutes.innerHTML = getminutes();
      seconds.innerHTML = getseconds();
    }

    if (mins < 0) {
      minutes.innerHTML = 00;
      seconds.innerHTML = 00;
      document.getElementById("resendOTPbtn1").style.display = "block";
      document.getElementById("altResendotp1").style.display = "none";
    } else {
      secs--;
      setTimeout("Decrement()", 1000);
    }
  }
}

function getminutes() {
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  return secs - Math.round(mins * 60);
}

var mins1 = 1;
var secs1 = mins1 * 60;

function countdown1() {
  setTimeout("Decrement1()", 60);
  mins1 = 1;
  secs1 = mins1 * 60;
}

function Decrement1() {
  if (document.getElementById) {
    minutes1 = document.getElementById("minutes1");
    seconds1 = document.getElementById("seconds1");
    if (seconds1 < 59) {
      seconds1.innerHTML = secs;
    } else {
      minutes1.innerHTML = getminutes1();
      seconds1.innerHTML = getseconds1();
    }

    if (mins1 < 0) {
      minutes1.innerHTML = 0;
      seconds1.innerHTML = 0;
      document.getElementById("setPwd").style.display = "block";
      document.getElementById("resendOTPbtn2").style.display = "block";
      document.getElementById("altResendotp2").style.display = "none";
      document.getElementById("altSetpwd").style.display = "none";
    } else {
      secs1--;
      setTimeout("Decrement1()", 1000);
    }
  }
}

function getminutes1() {
  mins1 = Math.floor(secs1 / 60);
  return mins1;
}

function getseconds1() {
  return secs1 - Math.round(mins1 * 60);
}

window.onload = countdown2();
var mins2 = 5;
var secs2 = mins2 * 60;

function countdown2() {
  setTimeout("Decrement2()", 60);
  mins2 = 1;
  secs2 = mins2 * 60;
}

function Decrement2() {
  if (document.getElementById) {
    minutes2 = document.getElementById("minutes2");
    seconds2 = document.getElementById("seconds2");
    if (seconds2 < 59) {
      seconds2.innerHTML = secs2;
    } else {
      minutes2.innerHTML = getminutes2();
      seconds2.innerHTML = getseconds2();
    }

    if (mins2 < 0) {
      minutes2.innerHTML = 0;
      seconds2.innerHTML = 0;
    } else {
      secs2--;
      setTimeout("Decrement2()", 1000);
    }
  }
}

function getminutes2() {
  mins2 = Math.floor(secs2 / 60);
  return mins2;
}

function getseconds2() {
  return secs2 - Math.round(mins2 * 60);
}
//Tabbar configuration
function otpcnt() {
  document.getElementById("tabbar").style.display = "none";
  document.getElementById("otptab").click();
}

function pincnt() {
  document.getElementById("atmpin_tab").click();
  document.getElementById("tabbar").style.display = "none";
  document.getElementById("otpins").innerHTML =
    "Please enter your ATM PIN in the field below to confirm your identy for this purchase. This information is not shared with the merchant.";
}

function passcnt() {
  document.getElementById("staticpin_tab").click();
  document.getElementById("tabbar").style.display = "none";
  document.getElementById("otpins").innerHTML =
    "Please enter your PASSWORD in the field below to confirm your identy for this purchase. This information is not shared with the merchant.";
}
//Redirect link after timout
/*    window.setTimeout( function(){
      window.location = "https://yappay.in";
  }, 300000 );*/

//next otp box
function mvCursor(from, to, valid) {
  var lgth = document.getElementById(from).value.length;
  var from = document.getElementById(from);
  var to = document.getElementById(to);
  var maxLgth = from.getAttribute("maxlength");
  var minLgth = from.getAttribute("minlength");

  if (lgth == minLgth) {
    document.getElementById("resetconfirm").disabled = false;
  } else if (lgth !== maxLgth && !from.value.match(valid)) {
    to.disabled = "true";
    from.focus();
    // alert("should be between" + val);
    return false;
  } else if (lgth == maxLgth && from.value.match(valid)) {
    to.disabled = false;
    to.focus();
    //getvalues();
  }
}

/*

    function InvalidMsg(textbox) { 
  
            if (textbox.value === '') { 
                textbox.setCustomValidity 
                      ('Input Required!'); 
            } else if (textbox.validity.typeMismatch) { 
                textbox.setCustomValidity 
                      ('Enter a value in required format!'); 
            } else { 
                textbox.setCustomValidity(''); 
            } 
  
            return true; 
} 
        
*/

$("#resetconfirm,#resetcreate").on("keyup", function () {
  if ($("#resetcreate").val() == $("#resetconfirm").val()) {
    $("#resetconfirm").css("border", "0.5px solid #7CFC00");
    $("#resetconfirm").css("color", "#7CFC00");
    $("#resetcreate").css("border", "0.5px solid #7CFC00");
    $("#resetcreate").css("color", "#7CFC00");
  } else {
    $("#resetconfirm").css("color", "red");
    $("#resetconfirm").css("border", "0.5px solid #e1e7f3");
    $("#resetcreate").css("color", "black");
    $("#resetcreate").css("border", "0.5px solid #e1e7f3");
    //$('.req').html('Please match with created password')
  }
});

function otpvalid(val, idi) {
  if (idi.value.match(val)) {
    document.getElementById("otpverifybtn").disabled = false;
    document.getElementById("pinverifybtn").disabled = false;
    document.getElementById("passbtn").disabled = false;
    document.getElementById("submitbtn").disabled = false;
  }
}

function otpemptied(e) {
  e.preventDefault();
  var i, otp;
  var boxes = 0;
  otp = document.getElementsByClassName("otpbox");
  for (i = 0; i < otp.length; i++) {
    if (otp[i].value == "") {
      boxes++;
      document.getElementById("msginvalid").innerHTML = "Fill all the fields";
      return false;
    }
  }
  //console.log("stat" + boxes);
  if (boxes == 0) {
    alert("success");
  }
}

function pinemptied(e) {
  e.preventDefault();
  var i, pin;
  var boxes = 0;
  pin = document.getElementsByClassName("pinbox");
  for (i = 0; i < pin.length; i++) {
    if (pin[i].value == "") {
      boxes++;
      document.getElementById("msginvalid").innerHTML = "Fill all the fields";
      return false;
    }
  }
  //console.log("stat" + boxes);
  monthindex = document.getElementById("month").selectedIndex;
  yearindex = document.getElementById("year").selectedIndex;
  if (boxes == 0 && monthindex != 0 && yearindex != 0) {
    alert("success");
  }
}

function subemptied(e) {
  e.preventDefault();
  var i, sub;
  var boxes = 0;
  sub = document.getElementsByClassName("rstOtpbox");
  for (i = 0; i < sub.length; i++) {
    if (sub[i].value == "") {
      boxes++;
      document.getElementById("msginvalid").innerHTML = "Fill all the fields";
      return false;
    }
  }
  //console.log("stat" + boxes);
  monthindex = document.getElementById("rstmonth").selectedIndex;
  yearindex = document.getElementById("rstyear").selectedIndex;
  if (boxes == 0 && monthindex != 0 && yearindex != 0) {
    alert("success");
  }
}

window.onload = foc();
setInterval(function focparent() {
  foc();
}, 2000);
function foc() {
  otpbox1 = document.getElementById("otpbox1");
  pinbox1 = document.getElementById("pinbox1");
  passbox = document.getElementById("passbox");
  rstotpbox1 = document.getElementById("rstotpbox1");
  otpbox1.focus();
  $("otpbox1").focus();
  otpbox1.click();
  $("otpbox1").click();

  if (otpbox1 == "") {
    alert("empty");
    otpbox1.focus();
  }
  //for (var i = 0; i < otpinps.length; i++) {
  //var otpinp = otpinps[i];
}

function backsp(from, pre) {
  pre = document.getElementById(pre);
  //from = document.getElementById(from);
  var key = event.keyCode || event.charCode;
  if (key == 8 || key == 46) {
    pre.value = "";
    from.value = "";
    pre.focus();
    //alert(key);
  }
  //alert(key);
}
