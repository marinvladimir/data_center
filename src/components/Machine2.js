import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import './Chart.css';
import myText2 from './Machine_2_info_11_9.txt';
import myText3 from './Machine-2_info_ram_11_9.txt';
import zoom from 'chartjs-plugin-zoom';

var myHTML2 = document.getElementById('ram');
function getData3(){
    var myRequest = new Request(myText3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML2.innerHTML=text;
  });
    });
  }
getData3();

var myHTML5 = document.getElementById('cpu2');
function getData2(){
    var myRequest = new Request(myText2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML5.innerHTML=text;
  });
    });
  }
getData2();

class Machine2 extends Component{

constructor(props){
    // eslint-disable-next-line no-this-before-super
    super(props);
    this.state={
            chartData:props.chartData,
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'right',
        }
}

  componentWillMount(){
    this.getChartData();
    if(document.getElementsByClassName("App")[0] != null){
      document.getElementsByClassName("App")[0].style.height = "2500px";}
}

componentWillUpdate(){
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData2.labels=[];
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData3.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData5.labels=[];

var z = document.getElementsByClassName("link1")[2];

function zzz(){
  var img = document.createElement("img");
  img.src = "https://i.imgur.com/GCNyjJY.gif";
  img.setAttribute("class","img_part1");
  img.style.position = "absolute";
  img.style.width = "50px";
  img.style.marginLeft = "-50px";
  img.style.marginTop = "-160px";
  z.appendChild(img);
  setTimeout(function(){document.getElementsByClassName("img_part1")[0].parentNode.removeChild(document.getElementsByClassName("img_part1")[0]);}, 2000);
}
z.onclick=zzz();
}

  getChartData(){
      //Ajax calls here
    this.setState({
    chartData2:{
      labels: [],
       datasets:
           [{
               label:'CPU',
               data: [],
               backgroundColor:[]
           }]
     }
     ,
    chartData3:{
      labels: [],
       datasets:
           [{
               label:'RAM',
               data: [],
               backgroundColor:[]
           }
          ]
     },
     chartData5:{
      labels: [],
       datasets:
           [{
            label:'RAM%',
            data: [],
            backgroundColor:[]
           }
          ]
        }   
    });
  }


render(){

  var myHTML2 = document.getElementById('cpu2');
  var textoutput2 = myHTML2.innerHTML;
  var regex_date2 = /(?<=Time: )\d*/g;
  var regex_CPU2 = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date2 = textoutput2.match(regex_date2);
  var cpu2 = textoutput2.match(regex_CPU2);

  var myHTML3 = document.getElementById('ram');
  var textoutput3 = myHTML3.innerHTML;
  var regex_date3 = /(?<=Time: )\d*/g;
  var regex_RAM = /1024\s[ \t]*([^\n\r]*)/g;
  var date3 = textoutput3.match(regex_date3);
  var ram = textoutput3.match(regex_RAM);
  var ram_split = [];

  var parse = [];
  var parse2 = [];

  var ref;
  var ch = this.state.legend;
  var access = this;
  if(this.chartReference !== undefined ){
  ref = this.chartReference.chartInstance;
  }

  function Hide(){
    if(document.getElementById("legendMenu").style.display === "block"){
    document.getElementById("legendMenu").style.display="none";
    document.getElementById("legendCtrl").style.display="none";
    document.getElementById("mainMenu").style.backgroundColor = "#e76a6a";
    document.getElementById("mainMenu").style.borderColor = "#8c1717";
  }
    else{
    document.getElementById("legendMenu").style.display="block";
    document.getElementById("legendCtrl").style.display="block";
    document.getElementById("mainMenu").style.backgroundColor = "rgb(129, 192, 184)";
    document.getElementById("mainMenu").style.borderColor = "cadetblue";
    if(ref === undefined){
    access.forceUpdate();}
    }
  }

  function Change(){
    if(ref !== undefined){
    ref.config.options.legend.position = "left";
    //ref.resetZoom();
   // ref.config.options.legend.position = "left";
   // on zoom animacija -> ref.config.options.zoom.onZoom();
   // ref.config.options.elements.point.hoverRadius = 15;
   // ref.config.options.elements.point.pointStyle = "triangle";
   // ref.config.options.elements.line.borderColor = "rgba(255,255,255,0.1)";
   // ref.config.options.scales.xAxes[0].gridLines.color = "rgba(255,255,255,0.1)";
   // ref.config.options.tooltips.backgroundColor = "rgba(255,255,255,0.1)";
   // ref.config.options.tooltips.displayColors = 0;
   // ref.config.options.tooltips.intersect = 0;
   // ref.config.options.tooltips.mode = "index";
   // ref.config.options.hover.mode = "index";
   // ref.config.options.hover.animationDuration = 1000;
   // ref.config.options.elements.line.tension = 0.22;
   // ref.config.options.animation.duration = 5000;
   // ref.config.options.animation.onComplete(console.log("t")); 
   // ref.animating = 1;
    ref.update();
   // console.log(ref.config.options);
  }}
  
    function Change2(){
      if(ref !== undefined){
        ref.config.options.legend.position = "bottom";
        ref.update();
      }}
  
    function Change3(){
      if(ref !== undefined){
        ref.config.options.legend.position = "top";
        ref.update(); }}
  
    function Change4(){
      if(ref!== undefined){
        ref.config.options.legend.position = "right";
        ref.update(); }}
  
    function Change8(){
      if(ref !== undefined){
        if(ref.config.data.datasets[0].hidden === 1 && ref.config.data.datasets[1].hidden === 1 && ref.config.data.datasets[2].hidden === 1 && ref.config.data.datasets[3].hidden === 1){
          ref.config.data.datasets[0].hidden = 0;
          ref.config.data.datasets[1].hidden = 0;
          ref.config.data.datasets[2].hidden = 0;
          ref.config.data.datasets[3].hidden = 0;
          ref.config.data.datasets[4].hidden = 0;
          ref.config.data.datasets[5].hidden = 0;
          ref.config.data.datasets[6].hidden = 0;
          ref.config.data.datasets[7].hidden = 0;
          ref.config.data.datasets[8].hidden = 0;
          ref.config.data.datasets[9].hidden = 0;
          ref.config.data.datasets[10].hidden = 0;
          ref.config.data.datasets[11].hidden = 0;
          ref.config.data.datasets[12].hidden = 0;
          ref.config.data.datasets[13].hidden = 0;
          ref.config.data.datasets[14].hidden = 0;
          ref.config.data.datasets[15].hidden = 0;
          ref.config.data.datasets[16].hidden = 0;
          ref.config.data.datasets[17].hidden = 0;

          ref.update();}
        else{
          ref.config.data.datasets[0].hidden = 1;
          ref.config.data.datasets[1].hidden = 1;
          ref.config.data.datasets[2].hidden = 1;
          ref.config.data.datasets[3].hidden = 1;
          ref.config.data.datasets[4].hidden = 1;
          ref.config.data.datasets[5].hidden = 1;
          ref.config.data.datasets[6].hidden = 1;
          ref.config.data.datasets[7].hidden = 1;
          ref.config.data.datasets[8].hidden = 1;
          ref.config.data.datasets[9].hidden = 1;
          ref.config.data.datasets[10].hidden = 1;
          ref.config.data.datasets[11].hidden = 1;
          ref.config.data.datasets[12].hidden = 1;
          ref.config.data.datasets[13].hidden = 1;
          ref.config.data.datasets[14].hidden = 1;
          ref.config.data.datasets[15].hidden = 1;
          ref.config.data.datasets[16].hidden = 1;
          ref.config.data.datasets[17].hidden = 1;
          ref.update();
    }}}

  function HideGraph(){
    if(document.getElementsByClassName("bar")[0].style.display === "none"){
      document.getElementsByClassName("bar")[0].style.display = "block";
      document.getElementsByClassName("chart")[1].style.marginTop = "30px";
      document.getElementById("ClickMe1").innerHTML="Off CPU";}
    else{
      document.getElementsByClassName("bar")[0].style.display = "none";
      document.getElementsByClassName("chart")[1].style.marginTop = "0px";
      document.getElementById("ClickMe1").innerHTML="On CPU";
    }
  }

  function HideGraph2(){
    if(document.getElementsByClassName("bar")[1].style.display === "none"){
      document.getElementsByClassName("bar")[1].style.display = "block";
      document.getElementsByClassName("bar")[2].style.display = "block";
      document.getElementsByClassName("chart")[2].style.marginTop = "30px";
      document.getElementsByClassName("chart")[3].style.marginTop = "30px";
      document.getElementById("ClickMe2").innerHTML="Off RAM";}
    else{
      document.getElementsByClassName("bar")[1].style.display = "none";
      document.getElementsByClassName("bar")[2].style.display = "none";
      document.getElementsByClassName("chart")[2].style.marginTop = "0px";
      document.getElementsByClassName("chart")[3].style.marginTop = "0px";
      document.getElementById("ClickMe2").innerHTML="On RAM";
    }
  }

  if(cpu2!=null){
    for(var i2=0;i2<cpu2.length;i2++){
      parse[i2] = parseInt(date2[i2], 10);
      this.state.chartData2.labels.push(parse[i2]);
      this.state.chartData2.datasets[0].data.push(cpu2[i2]);
      this.state.chartData2.datasets[0].backgroundColor.push('rgba(25,225,22,0.8');
    }
  }

  if(ram!=null){
    for(var i3=0;i3<ram.length;i3++){
     ram_split[i3] = ram[i3].slice(4,ram[i3].length);
     parse2[i3] = parseInt(date3[i3], 10);
     this.state.chartData3.labels.push(parse2[i3]);
     this.state.chartData5.labels.push(parse2[i3]);
     this.state.chartData3.datasets[0].data.push(ram_split[i3]);
     this.state.chartData3.datasets[0].backgroundColor.push('rgba(25,115,15,0.8');
     this.state.chartData5.datasets[0].data.push(ram_split[i3]/3994*100);
     this.state.chartData5.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
    }}

    return(
      
        <div className="chart">
          <div id="showMenu">
          <button id="ClickMe1" onClick={HideGraph}>Off CPU</button>
          <button id="ClickMe2" onClick={HideGraph2}>Off RAM</button>
          </div>
          <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData2}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Machine2-1: CPU',
                     fontSize:25,},
            legend:
                        {display:this.state.displayLegend,
                         position:this.state.legendPosition},
            scales: {
              xAxes: [{
                type: 'time',
                displayFormats: {unit: 'second'},
                distribution: 'linear',
                scaleLabel: {display: true, labelString: "time"}}],
                yAxes: [
                    {
                      ticks:{beginAtZero:true , min: 0, max: 100,
                        stepSize: 100,},
                      scaleLabel: {
                        display: true,
                        labelString: "cpu"
                      }
                    }
                  ]
                },
                pan: {
                  enabled: true,
                  mode: 'x',
                  rangeMin: {x: null,y: null},
                  rangeMax: {x: null,y: null},
                  speed: 15,
                  onPan: function({chart}) { }
              },
              zoom: {
                  enabled: true,
                  drag:false,            
                  mode: 'x',
                  speed: 0.1,
              onZoom: function({chart}) { }},
                        responsive: true,
                        zoomEnabled: true,
                        animationEnabled: true}}
            />
        </div></div>  
        <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData3}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine2-1: RAM',
                         fontSize:25,
    
                            },
                legend:
                            {
                                display:this.state.displayLegend,
                                position:this.state.legendPosition
                            },
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0,
                             stepSize: 100,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "ram"
                          }
                        }
                      ]
                    },
                    pan: {
                      enabled: true,
                      mode: 'x',
                      rangeMin: {x: null,y: null},
                      rangeMax: {x: null,y: null},
                      speed: 15,
                      onPan: function({chart}) { }
                  },
                  zoom: {
                      enabled: true,
                      drag:false,            
                      mode: 'x',
                      speed: 0.1,
                                onZoom: function({chart}) { }
                            },
                            responsive: true,
                            zoomEnabled: true,
                            animationEnabled: true}}
                /></div></div>
                     <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData5}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine2-1: RAM%',
                         fontSize:25,
    
                            },
                legend:
                            {
                                display:this.state.displayLegend,
                                position:this.state.legendPosition
                            },
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [
                        {
                            ticks:{beginAtZero:true , min: 0, max: 100,
                              stepSize: 100,},
                          scaleLabel: {                          
                            display: true,
                            labelString: "% of ram"
                          }
                        }
                      ]
                    },
                    pan: {
                      enabled: true,
                      mode: 'x',
                      rangeMin: {x: null,y: null},
                      rangeMax: {x: null,y: null},
                      speed: 15,
                      onPan: function({chart}) { }
                  },
                  zoom: {
                      enabled: true,
                      drag:false,            
                      mode: 'x',
                      speed: 0.1,
                            onZoom: function({chart}) { }},
                            responsive: true,
                            zoomEnabled: true,
                            animationEnabled: true
                        
                    
                }}
                /></div></div>
                <div className="chart">
                <div id="main">
                <button id="mainMenu" onClick={Hide}> Menu On/Off</button>
                </div>
                <div id="menuList">
                <div id="legendMenu"> Legend
                <button id="Btn_Leg" onClick={Change}>Move Left</button>
                <button id="Btn_Leg2" onClick={Change2}>Move Down</button>
                <button id="Btn_Leg3" onClick={Change3}>Move Up</button>
                <button id="Btn_Leg4" onClick={Change4}>Move Right</button>
                </div>
                <div id="legendCtrl"> Legend Control
                <button id="Btn_Leg5" onClick={Change8}>Show/Hide ALL</button>
                </div></div></div>
            </div>
    )
}
}
export default Machine2;