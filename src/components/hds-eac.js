import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import './Chart.css';
import myText from './27-hds-eac-1_INODES_HDS--vg--eac-root_CmdMonitor'
import myText2 from './27-hds-eac-1_CPU_LOAD_CmdMonitor';
import myText3 from './27-hds-eac-1_RAM_USAGE_CmdMonitor';
import myText4 from './27-hds-eac-1_DF_CmdMonitor';
import zoom from 'chartjs-plugin-zoom';

var myHTML = document.getElementById('inodes2');
function getData(){
    var myRequest = new Request(myText);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML.innerHTML=text;
  });
    });
  }
getData();


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

var myHTML3 = document.getElementById('diskfr2');
function getData4(){
    var myRequest = new Request(myText4);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML3.innerHTML=text;
  });
    });
  }
getData4();

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

class hds_eac extends Component{

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
  this.state.chartData.labels=[];
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.chartData4.labels=[];

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
    this.setState({chartData:{
      labels: [],
       datasets:
           [{
               label:'IUse%',
               data: [],
               backgroundColor:[],
               fill: 'none'
           }]
     },
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
     },
     chartData4:{
      labels: [],
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
            label:'/tmp',
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
            label:'/var/backups/hds',
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
            label:'/home',
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
    });
  }


render(){

  var myHTML = document.getElementById('inodes2');
  var textoutput = myHTML.innerHTML;
  var regex_date = /(?<=Timestamp: )\d*/g;
  var regex_inodes = /(\d.*)\//g;
  var date = textoutput.match(regex_date);
  var regind = textoutput.match(regex_inodes);
  var IUse = [];

  var myHTML2 = document.getElementById('cpu2');
  var textoutput2 = myHTML2.innerHTML;
  var regex_date2 = /(?<=Timestamp: )\d*/g;
  var regex_CPU2 = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date2 = textoutput2.match(regex_date2);
  var cpu2 = textoutput2.match(regex_CPU2);

  var myHTML3 = document.getElementById('ram');
  var textoutput3 = myHTML3.innerHTML;
  var regex_date3 = /(?<=Timestamp: )\d*/g;
  var regex_RAM = /[\n\r][ \t]*3944\s[ \t]*([^\n\r]*)/g;
  var date3 = textoutput3.match(regex_date3);
  var ram = textoutput3.match(regex_RAM);
  var ram_split = [];

  var myHTML4 = document.getElementById('diskfr2')
  var textoutput4 = myHTML4.innerHTML;
  var regex_date4 = /(?<=Timestamp: )\d*/g;
  var regex_DF_udev = /\d{1,3}[%]/g;
  var date4 = textoutput4.match(regex_date4);
  var df = textoutput4.match(regex_DF_udev);
  var num_reg = /\d{1,3}/g;
  var num = [];

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
      document.getElementById("ClickMe1").innerHTML="Hide CPU";}
    else{
      document.getElementsByClassName("bar")[0].style.display = "none";
      document.getElementsByClassName("chart")[1].style.marginTop = "0px";
      document.getElementById("ClickMe1").innerHTML="Show CPU";
    }
  }

  function HideGraph2(){
    if(document.getElementsByClassName("bar")[1].style.display === "none"){
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
    if(document.getElementsByClassName("line")[0].style.display === "none"){
    document.getElementsByClassName("line")[0].style.display = "block";
    document.getElementsByClassName("chart")[4].style.marginTop = "30px";
    document.getElementById("ClickMe3").innerHTML="Hide inodes";}
    else{
      document.getElementsByClassName("line")[0].style.display = "none";
      document.getElementsByClassName("chart")[4].style.marginTop = "0px";
      document.getElementById("ClickMe3").innerHTML="Show inodes";}
  }

  function HideGraph4(){
    if(document.getElementsByClassName("line")[1].style.display === "none"){
      document.getElementsByClassName("line")[1].style.display = "block";
      document.getElementsByClassName("chart")[5].style.marginTop = "30px";
      document.getElementById("ClickMe4").innerHTML="Hide DF";}
      else{
        document.getElementsByClassName("line")[1].style.display = "none";
        document.getElementsByClassName("chart")[5].style.marginTop = "0px";
        document.getElementById("ClickMe4").innerHTML="Show DF";}
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
     ram_split[i3] = ram[i3].slice(5,ram[i3].length);
     parse2[i3] = parseInt(date3[i3], 10);
     this.state.chartData3.labels.push(parse2[i3]);
     this.state.chartData5.labels.push(parse2[i3]);
     this.state.chartData3.datasets[0].data.push(ram_split[i3]);
     this.state.chartData3.datasets[0].backgroundColor.push('rgba(25,115,15,0.8');
     this.state.chartData5.datasets[0].data.push(ram_split[i3]/3994*100);
     this.state.chartData5.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
    }}

    if(regind!=null){
      for(var i=0;i<date.length;i++){
        IUse[i] = regind[i].slice(23,26);
        parse3[i] = parseInt(date[i], 10);
        this.state.chartData.labels.push(parse3[i]);
        this.state.chartData.datasets[0].data.push(IUse[i]);
        this.state.chartData.datasets[0].backgroundColor.push('rgba(145,149,82,0.6');
    }}

    if(df!=null){
      for(var i4=0;i4<date4.length;i4++){
       parse4[i4] = parseInt(date4[i4], 10);
       this.state.chartData4.labels.push(parse4[i4]);
       num[17+i4*18] = df[17+i4*18].match(num_reg);
       num[16+i4*18] = df[16+i4*18].match(num_reg);
       num[15+i4*18] = df[15+i4*18].match(num_reg);
       num[14+i4*18] = df[14+i4*18].match(num_reg);
       num[13+i4*18] = df[13+i4*18].match(num_reg);
       num[12+i4*18] = df[12+i4*18].match(num_reg);
       num[11+i4*18] = df[11+i4*18].match(num_reg);
       num[10+i4*18] = df[10+i4*18].match(num_reg);
       num[9+i4*18] = df[9+i4*18].match(num_reg);
       num[8+i4*18] = df[8+i4*18].match(num_reg);
       num[7+i4*18] = df[7+i4*18].match(num_reg);
       num[6+i4*18] = df[6+i4*18].match(num_reg);
       num[5+i4*18] = df[5+i4*18].match(num_reg);
       num[4+i4*18] = df[4+i4*18].match(num_reg);
       num[3+i4*18] = df[3+i4*18].match(num_reg);
       num[2+i4*18] = df[2+i4*18].match(num_reg);
       num[1+i4*18] = df[1+i4*18].match(num_reg);
       num[0+i4*18] = df[0+i4*18].match(num_reg);
       this.state.chartData4.datasets[0].data.push(num[17+i4*18]);
       this.state.chartData4.datasets[1].data.push(num[16+i4*18]);
       this.state.chartData4.datasets[2].data.push(num[15+i4*18]);
       this.state.chartData4.datasets[3].data.push(num[14+i4*18]);
       this.state.chartData4.datasets[4].data.push(num[13+i4*18]);
       this.state.chartData4.datasets[5].data.push(num[12+i4*18]);
       this.state.chartData4.datasets[6].data.push(num[11+i4*18]);
       this.state.chartData4.datasets[7].data.push(num[10+i4*18]);
       this.state.chartData4.datasets[8].data.push(num[9+i4*18]);
       this.state.chartData4.datasets[9].data.push(num[8+i4*18]);
       this.state.chartData4.datasets[10].data.push(num[7+i4*18]);
       this.state.chartData4.datasets[11].data.push(num[6+i4*18]);
       this.state.chartData4.datasets[12].data.push(num[5+i4*18]);
       this.state.chartData4.datasets[13].data.push(num[4+i4*18]);
       this.state.chartData4.datasets[14].data.push(num[3+i4*18]);
       this.state.chartData4.datasets[15].data.push(num[2+i4*18]);
       this.state.chartData4.datasets[16].data.push(num[1+i4*18]);
       this.state.chartData4.datasets[17].data.push(num[0+i4*18]);
       this.state.chartData4.datasets[0].backgroundColor.push('rgba(225,199,82,0.6');
       this.state.chartData4.datasets[1].backgroundColor.push('rgba(245,99,82,0.6');
       this.state.chartData4.datasets[2].backgroundColor.push('rgba(135,125,22,0.6');
       this.state.chartData4.datasets[3].backgroundColor.push('rgba(102,12,52,0.6');
       this.state.chartData4.datasets[4].backgroundColor.push('rgba(82,105,82,0.6');
       this.state.chartData4.datasets[5].backgroundColor.push('rgba(25,152,152,0.6');
       this.state.chartData4.datasets[6].backgroundColor.push('rgba(55,192,135,0.6');
       this.state.chartData4.datasets[7].backgroundColor.push('rgba(182,255,17,0.6');
       this.state.chartData4.datasets[8].backgroundColor.push('rgba(18,14,225,0.6');
       this.state.chartData4.datasets[9].backgroundColor.push('rgba(52,85,216,0.6');
       this.state.chartData4.datasets[10].backgroundColor.push('rgba(85,122,74,0.6');
       this.state.chartData4.datasets[11].backgroundColor.push('rgba(155,105,155,0.6');
       this.state.chartData4.datasets[12].backgroundColor.push('rgba(255,105,225,0.6');
       this.state.chartData4.datasets[13].backgroundColor.push('rgba(255,225,225,0.6');
       this.state.chartData4.datasets[14].backgroundColor.push('rgba(255,255,255,0.6');
       this.state.chartData4.datasets[15].backgroundColor.push('rgba(182,55,45,0.6');
       this.state.chartData4.datasets[16].backgroundColor.push('rgba(28,225,55,0.6');
       this.state.chartData4.datasets[17].backgroundColor.push('rgba(114,25,255,0.6');
      }}
    return(
      
        <div className="chart">
          <div id="showMenu">
          <button id="ClickMe1" onClick={HideGraph}>Hide CPU</button>
          <button id="ClickMe2" onClick={HideGraph2}>Hide RAM</button>
          <button id="ClickMe3" onClick={HideGraph3}>Hide inodes</button>
          <button id="ClickMe4" onClick={HideGraph4}>Hide DF</button>
          </div>
          <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData2}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: '27-hds-eac-1: CPU LOAD',
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
                         text: '27-hds-eac-1: RAM',
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
                         text: '27-hds-eac-1: RAM%',
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
               <div className="line"> <Line
                     data={this.state.chartData}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: '27-hds-eac-1: INodes Use%',
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
                            ticks:{beginAtZero:true , min: 0,
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
                </div></div>
                <div className="line"> <Line ref={(reference) => this.chartReference = reference }
                     data={this.state.chartData4}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: '27-hds-eac-1: DF%',
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
                            ticks:{beginAtZero:true , min: 0,
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
                      onZoom: function({chart}) { }},
                            responsive: true,
                            zoomEnabled: true,
                            animationEnabled: true
                        }}
                /></div></div>
            </div>
    )
}
}
export default hds_eac;