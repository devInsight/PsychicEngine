
function createRobotTag() {
  var robotsTag="<meta name=\"robots\" content \"";

  if (document.getElementById("none").checked) {
    robotsTag += "none\">";
    document.getElementById("index").disabled=true;
    document.getElementById("follow").disabled=true;
  } else if (document.getElementById("none").checked==false) {
    document.getElementById("index").disabled=false;
    document.getElementById("follow").disabled=false;
    if (document.getElementById("index").checked) {
      robotsTag += "noindex, ";
    } else {
      robotsTag += "index, ";
    }
    if(document.getElementById("follow").checked) {
      robotsTag += "nofollow\">";
    } else {
      robotsTag += "follow\">";
    }
  }
  document.getElementById("tag").value = robotsTag;
}

function googTag() {
  var googleTag="<meta name=\"Googlebot\" content=\"nofollow\">";
  if (document.getElementById("googleBot").checked) {
    document.getElementById("tag2").value = googleTag;
  } else {
    document.getElementById("tag2").value = "";
  }
}

function copyToClipboard() {
  document.getElementById("tag").focus();
  document.getElementById("tag").select();
  copiedTxt=document.selection.createRange();
  copiedTxt.execCommand("Copy");
}

function copyToClipboard2() {
  document.getElementById("tag2").focus();
  document.getElementById("tag2").select();
  copiedTxt2=document.selection.createRange();
  copiedTxt2.execCommand("Copy");
}


