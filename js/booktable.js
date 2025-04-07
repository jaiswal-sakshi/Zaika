function populateSessionTime() {
  var sessionSelect = document.getElementById("session-select");
  var sessionTimeSelect = document.getElementById("session-time");
  var selectedSession = sessionSelect.value;

  sessionTimeSelect.innerHTML = ""; // Clear previous options

  if (selectedSession === "lunch") {
    populateTimeOptions(sessionTimeSelect, ["12:00 pm", "1:00 pm", "2:00 pm"]);
  } else if (selectedSession === "breakfast") {
    populateTimeOptions(sessionTimeSelect, ["7:00 am", "9:00 am"]);
  } else if (selectedSession === "dinner") {
    populateTimeOptions(sessionTimeSelect, ["9:00 pm", "10:00 pm", "11:00 pm"]);
  }
}

function populateTimeOptions(selectElement, timeOptions) {
  for (var i = 0; i < timeOptions.length; i++) {
    var option = document.createElement("option");
    option.value = timeOptions[i];
    option.text = timeOptions[i];
    selectElement.appendChild(option);
  }
}

document.getElementById("book-btn").addEventListener("click", getTableNo);
function getTableNo() {
  //   event.preventDefault()
  var tableNo = document.getElementById("dropdown").value;
  var numOfTable = document.getElementById("dropdownt").value;
  localStorage.setItem("TableNo",tableNo)

  if (tableNo == 1) {
    if (numOfTable == 1) {
      document.getElementById("div1").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div1").style.backgroundColor = "red";
      document.getElementById("div2").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div1").style.backgroundColor = "red";
      document.getElementById("div2").style.backgroundColor = "red";
      document.getElementById("div3").style.backgroundColor = "red";
    } else if (numOfTable == 4) {
      document.getElementById("div1").style.backgroundColor = "red";
      document.getElementById("div2").style.backgroundColor = "red";
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
    }
  } else if (tableNo == 2) {
    if (numOfTable == 1) {
      document.getElementById("div2").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div2").style.backgroundColor = "red";
      document.getElementById("div3").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div2").style.backgroundColor = "red";
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div2").style.backgroundColor = "red";
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
    }
  } else if (tableNo == 3) {
    if (numOfTable == 1) {
      document.getElementById("div3").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
  } else if (tableNo == 3) {
    if (numOfTable == 1) {
      document.getElementById("div3").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
  } else if (tableNo == 3) {
    if (numOfTable == 1) {
      document.getElementById("div3").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div3").style.backgroundColor = "red";
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
  } else if (tableNo == 4) {
    if (numOfTable == 1) {
      document.getElementById("div4").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div4").style.backgroundColor = "red";
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
    }
  } else if (tableNo == 5) {
    if (numOfTable == 1) {
      document.getElementById("div5").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    }
  } else if (tableNo == 6) {
    if (numOfTable == 1) {
      document.getElementById("div6").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    }
  } else if (tableNo == 7) {
    if (numOfTable == 1) {
      document.getElementById("div7").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    }
  } else if (tableNo == 8) {
    if (numOfTable == 1) {
      document.getElementById("div8").style.backgroundColor = "red";
    } else if (numOfTable == 2) {
      document.getElementById("div8").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
    } else if (numOfTable == 3) {
      document.getElementById("div8").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
    }
    if (numOfTable == 4) {
      document.getElementById("div5").style.backgroundColor = "red";
      document.getElementById("div6").style.backgroundColor = "red";
      document.getElementById("div7").style.backgroundColor = "red";
      document.getElementById("div8").style.backgroundColor = "red";
    }
  } else {
    alert("please select table number and number of");
  }
}
var cancle = document
  .getElementById("cancle")
  .addEventListener("click", reload);
function reload() {
  window.location.reload();
}
