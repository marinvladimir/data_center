import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import myText3 from './Machine_3_info_ram_17_9.txt';
import myText10 from './Machine_3_info_17_9_2.txt';
import myText3part1 from './Machine_3_info_17_9.txt';
import myText3part3 from './Machine_3_info_df_17_9.txt';
import zoom from 'chartjs-plugin-zoom';

var myHTML3 = document.getElementById('ram3');
function getData3(){
    var myRequest = new Request(myText3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML3.innerHTML=text;
  });
    });
  }
getData3();

var myHTML10 = document.getElementById('ram10');
function getData10(){
    var myRequest = new Request(myText10);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML10.innerHTML=text;
  });
    });
  }
getData10();

var myHTML11 = document.getElementById('Txt3');
function getData11(){
    var myRequest = new Request(myText3part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML11.innerHTML=text;
  });
    });
  }
getData11();

var myHTML27 = document.getElementById('TxtIn');
function getData27(){
    var myRequest = new Request(myText3part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML27.innerHTML=text;
  });
    });
  }
getData27();

class Machine3 extends Component{

    constructor(props){
        // eslint-disable-next-line no-this-before-super
        super(props);
        this.state={
                chartData:props.chartData,
                displayTitle: true,
                displayLegend: true,
                legendPosition: 'right',
                location: 'RAM USAGE',
            }
    }
    
      componentWillMount(){
        this.getChartData();
        if(document.getElementsByClassName("App")[0] != null){
          document.getElementsByClassName("App")[0].style.height = "2600px";}
    }

    componentDidMount(){
    }
    
    componentWillUpdate(){    
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.chartData11.labels=[]; 
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.chartData27.labels=[];
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.chartData33.labels=[];


    var z = document.getElementsByClassName("link1")[3];

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
      document.getElementsByClassName("App")[0].style.height = "27600px";}
    }
    
      getChartData(){
          //Ajax calls here
        this.setState({
      chartData3:{
        labels:
            [],
        datasets:
            [{
                label:'RAM',
                data: [],
                backgroundColor:[],
            },          
          ]
    },
    chartData333:{
      labels:
          [],
      datasets:
          [
          {
              label:'% of RAM used',
              data: [],
              backgroundColor:[]                  
          }
        
        ]
  },
chartData10:{
  labels:
      [],
  datasets:
      [{
          label:'RAM',
          data: [],
          backgroundColor:[],
      },
      ]
},
chartData100:{
  labels:
      [],
  datasets:
      [
      {
          label:'% of RAM used',
          data: [],
          backgroundColor:[]                  
      }
      ]
},
chartData11:{
  labels:
      [],
  datasets:
      [{
          label:'% space used',
          data: [],
          backgroundColor:[],
          fill: 'none',
      },    
    ]
},
chartData27:{
  labels:
      [],
  datasets:
      [{
          label:'% space used',
          data: [],
          backgroundColor:[],
          fill: 'none',
      },    
    ]
},
chartData33:{
  labels:
      [],
  datasets:
      [{
          label:'% space used',
          data: [],
          backgroundColor:[],
          fill: 'none',
      },    
    ]
},
        });
      }
    
    
    render(){

      var myHTML3 = document.getElementById('ram3');
      var textoutput3 = myHTML3.innerHTML;
      var regex_date3 = /(?<=Time: )\d*/g;
      var regex_RAM3 = /888\s[ \t]*([^\n\r]*)/g;
      var date3 = textoutput3.match(regex_date3);
      var ram3 = textoutput3.match(regex_RAM3);
      var ram_split3 = [];

      var myHTML10 = document.getElementById('ram10');
      var textoutput10 = myHTML10.innerHTML;
      var regex_date10 = /(?<=Time: )\d*/g;
      var regex_RAM10 = /888\s[ \t]*([^\n\r]*)/g;
      var date10 = textoutput10.match(regex_date10);
      var ram10 = textoutput10.match(regex_RAM10);
      var ram_split10 = [];

      var myHTML11 = document.getElementById('Txt3');
      var textoutput11 = myHTML11.innerHTML;
      var regex_date11 = /(?<=Time: )\d*/g;
      var date11 = textoutput11.match(regex_date11);
      var regex_percentage = /\d{1,3}[%]/g;
      var percentage = textoutput11.match(regex_percentage);
      var perc = [];

      var myHTML27 = document.getElementById('TxtIn');
      var textoutput27 = myHTML27.innerHTML;
      var regex_date27 = /(?<=Time: )\d*/g;
      var date27 = textoutput27.match(regex_date27);
      var regex_percentage17 = /\d{1,3}[%]/g;
      var percentage17 = textoutput27.match(regex_percentage17);
      var perc17 = [];

      var parse = [];
      var parse8 = [];
      var parse9 = [];
      var parse25 = [];

      function HideGraph(){
        if(document.getElementsByClassName("bar")[0].style.display == "none"){
          document.getElementsByClassName("bar")[0].style.display = "block";
          document.getElementsByClassName("bar")[1].style.display = "block";
          document.getElementsByClassName("bar")[2].style.display = "block";
          document.getElementsByClassName("bar")[3].style.display = "block";
          document.getElementsByClassName("chart")[0].style.marginTop = "30px";
          document.getElementsByClassName("chart")[1].style.marginTop = "30px";
          document.getElementsByClassName("chart")[2].style.marginTop = "30px";
          document.getElementsByClassName("chart")[3].style.marginTop = "30px";
          document.getElementById("ClickMe1").innerHTML="Off RAM";}
        else{
          document.getElementsByClassName("bar")[0].style.display = "none";
          document.getElementsByClassName("bar")[1].style.display = "none";
          document.getElementsByClassName("bar")[2].style.display = "none";
          document.getElementsByClassName("bar")[3].style.display = "none";
          document.getElementsByClassName("chart")[0].style.marginTop = "0px";
          document.getElementsByClassName("chart")[1].style.marginTop = "0px";
          document.getElementsByClassName("chart")[2].style.marginTop = "0px";
          document.getElementsByClassName("chart")[3].style.marginTop = "0px";
          document.getElementById("ClickMe1").innerHTML="On RAM";
        }
      }
    
      function HideGraph2(){
        if(document.getElementsByClassName("line")[0].style.display == "none"){
          document.getElementsByClassName("line")[0].style.display = "block";
          document.getElementsByClassName("line")[1].style.display = "block";
          document.getElementsByClassName("chart")[4].style.marginTop = "30px";
          document.getElementsByClassName("chart")[5].style.marginTop = "30px";
          document.getElementById("ClickMe2").innerHTML="Off Panel";}
        else{
          document.getElementsByClassName("line")[0].style.display = "none";
          document.getElementsByClassName("line")[1].style.display = "none";
          document.getElementsByClassName("chart")[4].style.marginTop = "0px";
          document.getElementsByClassName("chart")[5].style.marginTop = "0px";
          document.getElementById("ClickMe2").innerHTML="On Panel";
        }
      }

    if(ram3!=null){
      for(var i3=0;i3<ram3.length;i3++){
        ram_split3[i3] = ram3[i3].slice(4,ram3[i3].length);
        parse[i3] = parseInt(date3[i3], 10);
        this.state.chartData3.labels.push(parse[i3]);
        this.state.chartData333.labels.push(parse[i3]);
        this.state.chartData3.datasets[0].data.push(ram_split3[i3]);
        this.state.chartData3.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData333.datasets[0].data.push(ram_split3[i3]/888*100);
        this.state.chartData333.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram10!=null){
      for(var i10=0;i10<ram10.length;i10++){
        ram_split10[i10] = ram10[i10].slice(4,ram10[i10].length);
        parse8[i10] = parseInt(date10[i10], 10);
        this.state.chartData10.labels.push(parse8[i10]);
        this.state.chartData100.labels.push(parse8[i10]);
        this.state.chartData10.datasets[0].data.push(ram_split10[i10]);
        this.state.chartData10.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData100.datasets[0].data.push(ram_split10[i10]/888*100);
        this.state.chartData100.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(date11!=null){
        for(var i11=0;i11<date11.length;i11++){
        parse9[i11] = parseInt(date11[i11], 10); 
        this.state.chartData11.labels.push(parse9[i11]);
        var regex_1 = /\d{1,3}/g;
        perc[i11] = percentage[i11].match(regex_1);
        this.state.chartData11.datasets[0].data.push(perc[i11]);
        this.state.chartData11.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date27!=null){
      for(var i27=0;i27<date27.length;i27++){
      parse25[i27] = parseInt(date27[i27], 10);  
      this.state.chartData27.labels.push(parse25[i27]);
      var regex_17 = /\d{1,3}/g;
      perc17[i27] = percentage17[i27].match(regex_17);
      this.state.chartData27.datasets[0].data.push(perc17[i27]);
      this.state.chartData27.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}
        
        return(
               <div className="chart">
               <div id="showMenu">
               <button id="ClickMe1" onClick={HideGraph}>Off RAM</button>
               <button id="ClickMe2" onClick={HideGraph2}>Off Panel</button>
               </div>
               <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData3}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Block 1 RAM MB',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "ram"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}
                />
            </div></div>
            <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData333}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Block 1 RAM%',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0, max: 100,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "% of ram"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}
                />
            </div></div>
            <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData10}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Block 2 RAM MB',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "ram"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}/>
            </div></div>
            <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData100}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Block 2 RAM%',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0, max: 100,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "% of ram"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}/>
            </div></div>
            <div className="chart">
               <div className="line"> <Line
                     data={this.state.chartData11}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Control',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "% space used"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}/>
            </div></div>
              <div className="chart">
              <div className="line"> <Line
                     data={this.state.chartData27}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'Machine 3-Disk Fragmentation',
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                       position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0,
                             stepSize: 300,},
                             scaleLabel: {                          
                             display: true,
                             labelString: "% space used"}}]},
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
                      onZoom: function({chart}) { }},
                  responsive: true,
                  zoomEnabled: true,
                  animationEnabled: true}}/>
               </div></div>
                </div>)}}
export default Machine3;