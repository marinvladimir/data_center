import React from 'react'
import Monitor from '../giphy.gif';
import './Home.css';
import myText from './27-hds-eac-1_CPU_LOAD_CmdMonitor';
import thunder from '../bubble.gif';
import '../App.css';

var myHTML = document.getElementById('cpu2');
function getData2(){
    var myRequest = new Request(myText);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML.innerHTML=text;
  });
    });
  }
getData2();

const Home = () => {
        function GetDate(){
            var myHTML = document.getElementById('cpu2');
            var textoutput = myHTML.innerHTML;
            var regex_date = /\S{1,5}\s\S{1,5}\s\d{1,2}\s\d{2}:\d{2}:\d{2}\sCET\s\d{1,4}/g;
            var date = textoutput.match(regex_date);
            document.getElementById("result").innerHTML="From: "+date[0];
            document.getElementById("result2").innerHTML=" To: "+date[date.length-1];  
        }     

       function ChangeTheme(){
            document.getElementsByClassName("App")[0].style.backgroundColor = "rgb(30, 56, 77)";
            document.getElementsByClassName("App-header")[0].style.backgroundColor="rgb(17, 23, 57)";

            var x = document.createElement("IMG");
            x.setAttribute("src", "https://media2.giphy.com/media/8Am4Njdu7imzLbnIhc/giphy.gif");
            x.setAttribute("width", "60");
            x.setAttribute("height", "60");
            x.style.position = "absolute";
            x.style.marginTop = "-90px";
            x.style.marginLeft = "-800px";
            x.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(x);

            var w = document.createElement("IMG");
            w.setAttribute("src", "https://media2.giphy.com/media/8Am4Njdu7imzLbnIhc/giphy.gif");
            w.setAttribute("width", "60");
            w.setAttribute("height", "60");
            w.style.position = "absolute";
            w.style.marginTop = "-310px";
            w.style.marginLeft = "-900px";
            w.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(w);

            var v = document.createElement("IMG");
            v.setAttribute("src", "https://media2.giphy.com/media/8Am4Njdu7imzLbnIhc/giphy.gif");
            v.setAttribute("width", "60");
            v.setAttribute("height", "60");
            v.style.position = "absolute";
            v.style.marginTop = "-320px";
            v.style.marginLeft = "-510px";
            v.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(v);

            var y = document.createElement("IMG");
            y.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif");
            y.setAttribute("width", "120");
            y.setAttribute("height", "120");
            y.style.position = "absolute";
            y.style.marginTop = "-330px";
            y.style.marginLeft = "830px";
            y.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(y);

            var z = document.createElement("IMG");
            z.setAttribute("src", "https://media2.giphy.com/media/8Am4Njdu7imzLbnIhc/giphy.gif");
            z.setAttribute("width", "60");
            z.setAttribute("height", "60");
            z.style.position = "absolute";
            z.style.marginTop = "-90px";
            z.style.marginLeft = "-100px";
            z.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(z);

            var a = document.createElement("IMG");
            a.setAttribute("src", "https://media2.giphy.com/media/8Am4Njdu7imzLbnIhc/giphy.gif");
            a.setAttribute("width", "60");
            a.setAttribute("height", "60");
            a.style.position = "absolute";
            a.style.marginTop = "-90px";
            a.style.marginLeft = "600px";
            a.setAttribute("alt", "img");
            document.getElementsByClassName("navigation")[0].appendChild(a);
          }

       function ChangeTheme2(){
            document.getElementsByClassName("App")[0].style.backgroundColor = "rgb(10, 128, 136)";
            document.getElementsByClassName("App-header")[0].style.backgroundColor="rgb(10, 46, 99)";}
       function ChangeTheme3(){
            document.getElementsByClassName("App")[0].style.backgroundColor = "#FBD000";
            document.getElementsByClassName("App-header")[0].style.backgroundColor="#E52521";}
       
            if(document.getElementsByClassName("App")[0] != null){
                document.getElementsByClassName("App")[0].style.height = "1000px";}

    return (
        <div className="container">
            <button id='LU' onClick={GetDate}>Last Update:
                <div id="result"></div>
                <div id="result2"></div>
            </button>
            <div id='text'>Choose Theme:</div>
            <div id='container_low'>
            <button id="Btn1" onClick={ChangeTheme}><img alt ="Btn1" src="https://findicons.com/files/icons/766/base_software/128/circle_blue.png" width="30px" height="30px" />Dark</button>
            <button id="Btn2" onClick={ChangeTheme2}><img alt ="Btn2" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-5/256/stop-red-icon.png" width="30px" height="30px" />Stnd</button>
            <button id="Btn3" onClick={ChangeTheme3}><img alt ="Btn3" src="https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Circle_Yellow.png" width="30px" height="30px" />Light</button>
            </div>
            <h1 className="center">Monitoring App</h1>
            <img src={thunder} className="Thunder-logo1" alt="thunder" />
            <img src={Monitor} className="App-logo" alt="logo" />
            <img src={thunder} className="Thunder-logo2" alt="thunder" />
            <h4 className="center">Welcome to the data center monitoring application, please use navigation above to see status of each component.</h4>
        </div>
    )
}

export default Home