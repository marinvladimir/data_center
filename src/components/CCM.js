import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import './Chart.css';
import myText from './27-CCM_CPU_LOAD_CmdMonitor';
import myText2 from './27-CCM_DF_CmdMonitor';
import myText3 from './27-CCM_INODES_HDS--vg--ccm-root_CmdMonitor';
import myText5 from './27-CCM_RAM_USAGE_CmdMonitor';
import zoom from 'chartjs-plugin-zoom';

var myHTML = document.getElementById('hello');
function getData(){
    var myRequest = new Request(myText);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML.innerHTML=text;
  });
    });
  }
getData();

var myHTML2 = document.getElementById('ram2');
function getData5(){
    var myRequest = new Request(myText5);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML2.innerHTML=text;
  });
    });
  }
getData5();

var myHTML3 = document.getElementById('diskfr');
function getData2(){
    var myRequest = new Request(myText2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML3.innerHTML=text;
  });
    });
  }
getData2();

var myHTML4 = document.getElementById('inodes');
function getData3(){
    var myRequest = new Request(myText3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML4.innerHTML=text;
  });
    });
  }
getData3();

//this is where i get my log text
class CCM extends Component{

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
    document.getElementsByClassName("App")[0].style.height = "4000px";}
  }

componentWillUpdate(){
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData2.labels=[];
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData3.labels=[];
var z = document.getElementsByClassName("link1")[1];

function zzz(){
  var img = document.createElement("img");
  img.src = "https://i.imgur.com/GCNyjJY.gif";
  img.setAttribute("class","img_part1");
  img.style.position = "absolute";
  img.style.width = "50px";
  img.style.marginLeft = "-40px";
  img.style.marginTop = "-160px";
  z.appendChild(img);
  setTimeout(function(){document.getElementsByClassName("img_part1")[0].parentNode.removeChild(document.getElementsByClassName("img_part1")[0]);}, 2000);
}
z.onclick=zzz();
if(document.getElementsByClassName("App")[0] != null){
  document.getElementsByClassName("App")[0].style.height = "4000px";}
}

  getChartData(){
      //Ajax calls here
    this.setState({
      chartData:{
        labels:
            [],
        datasets:
            [{
                label:'CPU',
                data: [],
                backgroundColor:[]
            }]
    },
       chartData5:{
        labels: [],
         datasets:
             [{
                 label:'RAM',
                 data: [],
                 backgroundColor:[]
             }
            ]
       },
       chartData6:{
        labels: [],
         datasets:
             [{
                 label:'RAM%',
                 data: [],
                 backgroundColor:[]
             }
            ]
       },
       chartData2:{
        labels:
            [],
        datasets:
            [{
                label:'/run/user/1000',
                data: [],
                backgroundColor:[],
                fill: 'none'
            },
            {
                label:'/var/lib/hds/inventory',
                data: [],
                backgroundColor:[],
                fill: 'none'
            },
            {
                label:'/var/lib/hds/repo',
                data: [],
                backgroundColor:[],
                fill: 'none'
            },
            {
                 label:'/var/lib/hds/config',
                 data: [],
                 backgroundColor:[],
                 fill: 'none'
          },
          {
                  label:'/var/lib/hds',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
          },
          {
                  label:'/var/log/audit',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
          },
          {
                  label:'/home',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
           },
           {
                  label:'/var/backups/hds',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
          },
          {
                  label:'/var/tmp',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
          },
          {
                  label:'/var/log',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
         },
         {
                  label:'/var',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/tmp',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/boot',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/sys/fs/cgroup',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/run/lock',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/dev/shm',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/run',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
        {
                  label:'/dev',
                  data: [],
                  backgroundColor:[],
                  fill: 'none'
        },
          
          
        ]         
      },
      chartData3:{
        labels:
        [],
        datasets:
        [{
            label:'IUse%',
            data: [],
            backgroundColor:[],
            fill: 'none',
        }]
      }
    });
  }


render(){

  var myHTML = document.getElementById('hello');
  var textoutput = myHTML.innerHTML;
  var regex_date = /(?<=Timestamp: )\d*/g;
  var regex_CPU = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date = textoutput.match(regex_date);
  var cpu = textoutput.match(regex_CPU);

  var myHTML22 = document.getElementById('ram2');
  var textoutput22 = myHTML22.innerHTML;
  var regex_date22 = /(?<=Timestamp: )\d*/g;
  var regex_RAM2 = /[\n\r][ \t]*16040\s[ \t]*([^\n\r]*)/g;
  var date22 = textoutput22.match(regex_date22);
  var ram2 = textoutput22.match(regex_RAM2);
  var ram_split2 = [];

  var myHTML2 = document.getElementById('diskfr');
  var textoutput2 = myHTML2.innerHTML;
  var regex_date2 = /(?<=Timestamp: )\d*/g;
  var regex_DF_udev = /\d{1,3}[%]/g;
  var date2 = textoutput2.match(regex_date2);
  var df = textoutput2.match(regex_DF_udev);
  var num_reg = /\d{1,3}/g;
  var num = [];

  var myHTML3 = document.getElementById('inodes');
  var textoutput3 = myHTML3.innerHTML;
  var regex_date3 = /(?<=Timestamp: )\d*/g;
  var regex_inodes = /(\d.*)\//g;
  var date3 = textoutput3.match(regex_date3);
  var regind = textoutput3.match(regex_inodes);
  var IUse = [];

  var parse = [];
  var parse2 = [];
  var parse3 = [];
  var parse4 = [];

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
          ref.config.data.datasets[18].hidden = 0;

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
          ref.config.data.datasets[18].hidden = 1;
          ref.update();
    }}}

  function HideGraph(){
    if(document.getElementsByClassName("bar")[0].style.display === "none"){
      document.getElementsByClassName("bar")[0].style.display = "block";
      document.getElementsByClassName("chart")[1].style.marginTop = "30px";
      document.getElementById("ClickMe1").innerHTML="Hide CPU";}
    else{
      document.getElementsByClassName("bar")[0].style.display = "none";
      document.getElementsByClassName("chart")[1].style.marginTop = "0px";
      document.getElementById("ClickMe1").innerHTML="Show CPU";
    }
  }

  function HideGraph2(){
    if(document.getElementsByClassName("bar")[1].style.display == "none"){
      document.getElementsByClassName("bar")[1].style.display = "block";
      document.getElementsByClassName("bar")[2].style.display = "block";
      document.getElementsByClassName("chart")[2].style.marginTop = "30px";
      document.getElementsByClassName("chart")[3].style.marginTop = "30px";
      document.getElementById("ClickMe2").innerHTML="Hide RAM";}
    else{
      document.getElementsByClassName("bar")[1].style.display = "none";
      document.getElementsByClassName("bar")[2].style.display = "none";
      document.getElementsByClassName("chart")[2].style.marginTop = "0px";
      document.getElementsByClassName("chart")[3].style.marginTop = "0px";
      document.getElementById("ClickMe2").innerHTML="Show RAM";
    }
  }

  function HideGraph3(){
    if(document.getElementsByClassName("line")[0].style.display == "none"){
    document.getElementsByClassName("line")[0].style.display = "block";
    document.getElementsByClassName("chart")[4].style.marginTop = "30px";
    document.getElementById("ClickMe3").innerHTML="Hide DF";}
    else{
      document.getElementsByClassName("line")[0].style.display = "none";
      document.getElementsByClassName("chart")[4].style.marginTop = "0px";
      document.getElementById("ClickMe3").innerHTML="Show DF";}
  }

  function HideGraph4(){
    if(document.getElementsByClassName("line")[1].style.display == "none"){
      document.getElementsByClassName("line")[1].style.display = "block";
      document.getElementsByClassName("chart")[5].style.marginTop = "30px";
      document.getElementById("ClickMe4").innerHTML="Hide inodes";}
      else{
        document.getElementsByClassName("line")[1].style.display = "none";
        document.getElementsByClassName("chart")[5].style.marginTop = "0px";
        document.getElementById("ClickMe4").innerHTML="Show inodes";}
  }

    if(cpu!=null){
  for(var i=0;i<cpu.length;i++){
   parse[i] = parseInt(date[i], 10);
   this.state.chartData.labels.push(parse[i]);
   this.state.chartData.datasets[0].data.push(cpu[i]);
   this.state.chartData.datasets[0].backgroundColor.push('rgba(255,15,15,0.7');
  }}


if(ram2!=null){
  for(var i5=0;i5<ram2.length;i5++){
   ram_split2[i5] = ram2[i5].slice(6,ram2[i5].length);
   parse2[i5] = parseInt(date22[i5], 10);
   this.state.chartData5.labels.push(parse2[i5]);
   this.state.chartData6.labels.push(parse2[i5]);
   this.state.chartData5.datasets[0].data.push(ram_split2[i5]);
   this.state.chartData5.datasets[0].backgroundColor.push('rgba(29,55,172,0.8');
   this.state.chartData6.datasets[0].data.push(ram_split2[i5]/16040*100);
   this.state.chartData6.datasets[0].backgroundColor.push('rgba(59,15,152,0.8');
  }}

  if(df!=null){
    for(var i3=0;i3<date2.length;i3++){
     parse3[i3] = parseInt(date2[i3], 10);
     this.state.chartData2.labels.push(parse3[i3]);
     num[18+i3*19] = df[18+i3*19].match(num_reg);
     num[17+i3*19] = df[17+i3*19].match(num_reg);
     num[16+i3*19] = df[16+i3*19].match(num_reg);
     num[15+i3*19] = df[15+i3*19].match(num_reg);
     num[14+i3*19] = df[14+i3*19].match(num_reg);
     num[13+i3*19] = df[13+i3*19].match(num_reg);
     num[12+i3*19] = df[12+i3*19].match(num_reg);
     num[11+i3*19] = df[11+i3*19].match(num_reg);
     num[10+i3*19] = df[10+i3*19].match(num_reg);
     num[9+i3*19] = df[9+i3*19].match(num_reg);
     num[8+i3*19] = df[8+i3*19].match(num_reg);
     num[7+i3*19] = df[7+i3*19].match(num_reg);
     num[6+i3*19] = df[6+i3*19].match(num_reg);
     num[5+i3*19] = df[5+i3*19].match(num_reg);
     num[4+i3*19] = df[4+i3*19].match(num_reg);
     num[3+i3*19] = df[3+i3*19].match(num_reg);
     num[2+i3*19] = df[2+i3*19].match(num_reg);
     num[1+i3*19] = df[1+i3*19].match(num_reg);
     num[0+i3*19] = df[0+i3*19].match(num_reg);
     this.state.chartData2.datasets[0].data.push(num[18+i3*19]);
     this.state.chartData2.datasets[1].data.push(num[17+i3*19]);
     this.state.chartData2.datasets[2].data.push(num[16+i3*19]);
     this.state.chartData2.datasets[3].data.push(num[15+i3*19]);
     this.state.chartData2.datasets[4].data.push(num[14+i3*19]);
     this.state.chartData2.datasets[5].data.push(num[13+i3*19]);
     this.state.chartData2.datasets[6].data.push(num[12+i3*19]);
     this.state.chartData2.datasets[7].data.push(num[11+i3*19]);
     this.state.chartData2.datasets[8].data.push(num[10+i3*19]);
     this.state.chartData2.datasets[9].data.push(num[9+i3*19]);
     this.state.chartData2.datasets[10].data.push(num[8+i3*19]);
     this.state.chartData2.datasets[11].data.push(num[7+i3*19]);
     this.state.chartData2.datasets[12].data.push(num[6+i3*19]);
     this.state.chartData2.datasets[13].data.push(num[5+i3*19]);
     this.state.chartData2.datasets[14].data.push(num[4+i3*19]);
     this.state.chartData2.datasets[15].data.push(num[3+i3*19]);
     this.state.chartData2.datasets[16].data.push(num[2+i3*19]);
     this.state.chartData2.datasets[17].data.push(num[1+i3*19]);
     this.state.chartData2.datasets[18].data.push(num[0+i3*19]);
     this.state.chartData2.datasets[0].backgroundColor.push('rgba(225,199,82,0.6');
     this.state.chartData2.datasets[1].backgroundColor.push('rgba(245,99,82,0.6');
     this.state.chartData2.datasets[2].backgroundColor.push('rgba(135,125,22,0.6');
     this.state.chartData2.datasets[3].backgroundColor.push('rgba(102,12,52,0.6');
     this.state.chartData2.datasets[4].backgroundColor.push('rgba(82,105,82,0.6');
     this.state.chartData2.datasets[5].backgroundColor.push('rgba(25,152,152,0.6');
     this.state.chartData2.datasets[6].backgroundColor.push('rgba(55,192,135,0.6');
     this.state.chartData2.datasets[7].backgroundColor.push('rgba(182,255,17,0.6');
     this.state.chartData2.datasets[8].backgroundColor.push('rgba(18,14,225,0.6');
     this.state.chartData2.datasets[9].backgroundColor.push('rgba(52,85,216,0.6');
     this.state.chartData2.datasets[10].backgroundColor.push('rgba(85,122,74,0.6');
     this.state.chartData2.datasets[11].backgroundColor.push('rgba(155,105,155,0.6');
     this.state.chartData2.datasets[12].backgroundColor.push('rgba(255,105,225,0.6');
     this.state.chartData2.datasets[13].backgroundColor.push('rgba(255,225,225,0.6');
     this.state.chartData2.datasets[14].backgroundColor.push('rgba(255,255,255,0.6');
     this.state.chartData2.datasets[15].backgroundColor.push('rgba(182,55,45,0.6');
     this.state.chartData2.datasets[16].backgroundColor.push('rgba(28,225,55,0.6');
     this.state.chartData2.datasets[17].backgroundColor.push('rgba(114,25,255,0.6');
     this.state.chartData2.datasets[18].backgroundColor.push('rgba(185,95,25,0.6');
    }}

    if(regind!=null){
      for(var i6=0;i6<date3.length;i6++){
        IUse[i6] = regind[i6].slice(23,26);
        parse4[i6] = parseInt(date3[i6], 10);
        this.state.chartData3.labels.push(parse4[i6]);
        this.state.chartData3.datasets[0].data.push(IUse[i6]);
        this.state.chartData3.datasets[0].backgroundColor.push('rgba(145,149,82,0.6');
    }}

    return(
        <div className="chart">
          <div id="showMenu">
          <button id="ClickMe1" onClick={HideGraph}>Hide CPU</button>
          <button id="ClickMe2" onClick={HideGraph2}>Hide RAM</button>
          <button id="ClickMe3" onClick={HideGraph3}>Hide DF</button>
          <button id="ClickMe4" onClick={HideGraph4}>Hide inodes</button>
          </div>
          <div className="chart">
          <div className="bar"> <Bar
                 data={this.state.chartData}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: '27-CCM: CPU ',
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
                yAxes: [{
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "cpu"
                      }}]
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
                     data={this.state.chartData5}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: '27-CCM: RAM',
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
                    yAxes: [{
                            ticks:{beginAtZero:true , min: 0,
                              stepSize: 300,},
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
                  },  responsive: true,
                      zoomEnabled: true,
                      animationEnabled: true}}
                />
                </div></div>
                <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData6}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: '27-CCM: RAM %',
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
                              stepSize: 300,},
                          scaleLabel: {                          
                            display: true,
                            labelString: "% ram"
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
                      onPan: function({chart}) { }},
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
                />
                </div></div>
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
          </div></div>
           <div className="line"> <Line ref={(reference) => this.chartReference = reference }
                 data={this.state.chartData2}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: '27-CCM: DF',
                     fontSize:25,},
                 legend:{display:this.state.displayLegend,
                         position:this.state.legendPosition,
                         labels:{}},
            scales: {
              xAxes: [{
                type: 'time',
                displayFormats: {unit: 'second'},
                distribution: 'linear',
                scaleLabel: {display: true, labelString: "time"}}],
                yAxes: [
                    {
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Use% of 1K-blocks",
                        fontColor: '#C0C0C0'
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
                  onZoom: function({chart}) { }},        responsive: true,
                        zoomEnabled: true,
                        animationEnabled: true
                    }}
            />
        </div></div>
        <div className="chart">
        <div className="line"> <Line
                 data={this.state.chartData3}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: '27-CCM: INODES ',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Use of Disk Space in MB/%",
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
                        animationEnabled: true
                    }}
            />
        </div>
        </div></div>
    )
}
}
export default CCM;