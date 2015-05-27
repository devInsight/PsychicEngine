
var navName = navigator.appName ;
var brVer = navigator.userAgent; var brNum; var reg = new RegExp('/');
function verNumIE() {
   var brVerId = brVer.indexOf('MSIE');
   brNum = brVer.substr(brVerId,8);
}
function verNumOt() {
   var brVerId = brVer.search(reg);
   brNum = brVer.substring(brVerId+1);
}
//  

if (navigator.appName == 'Microsoft Internet Explorer') {
  verNumIE() ;
} else {
  verNumOt() ;
}
document.write("<CENTER>");
document.write("<TABLE BORDER=2>");
document.write("<CAPTION Align=Top><b>Your Browser Informations</b></CAPTION>");
document.write("<Tr>");
document.write("<td bgcolor=#C0C0C0><b>Browser Name : </b></td>");
document.write("<td>",navName,"</td>");
document.write("</Tr>");
document.write("<Tr>");
document.write("<td bgcolor=#C0C0C0><b>Platform Name : </b></td>");
document.write("<td>",navigator.platform,"</td>");
document.write("</Tr>");
document.write("<Tr>");
document.write("<td bgcolor=#C0C0C0><b>Browser Version : </b></td>");
document.write("<td>",brNum,"</td>");
document.write("</Tr>");
document.write("<Tr>");
document.write("<td bgcolor=#C0C0C0><b>Is Java enabled ? : </b></td>");
if ( !(navigator.javaEnabled()) ) {
  java="No" ;
} else {
  java="Yes" ;
}
document.write("<td>",java,"</td>");
document.write("</Tr>");
document.write("</TABLE>");
document.write("</CENTER>");
