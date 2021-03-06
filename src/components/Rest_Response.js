import React, {Component} from 'react';
import {Line, Bubble} from 'react-chartjs-2';
import './Chart.css';
import myText from './RestAPI.txt';
import zoom from 'chartjs-plugin-zoom';

var myHTML = document.getElementById('Rest');
function getData(){
    var myRequest = new Request(myText);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML.innerHTML=text;
  });
    });
  }
getData();

//this is where i get my log text
class Rest_Response extends Component{

constructor(props){
    // eslint-disable-next-line no-this-before-super
    super(props);
    this.state={
            chartData:props.chartData,
            displayTitle: true,
            displayLegend: true,
        }
}

  componentWillMount(){
    this.getChartData();
    if(document.getElementsByClassName("App")[0] != null){
      document.getElementsByClassName("App")[0].style.height = "1600px";}
}

componentWillUpdate(){
/*    this.setState({
        chartData:{
            labels:[],
        datasets:[{
            data:[]}]}})
*/
//console.log(this.state.chartData.labels);
// eslint-disable-next-line react/no-direct-mutation-state
this.state.chartData.labels=[];

  if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "1600px";}
}

  getChartData(){
      //Ajax calls here
    this.setState({
      legend:{
        legendPosition:"right",
      },
      chartData:{
        labels:
            [],
        datasets:
            [{
                label:'REST_Fun1',
                data: [],
                backgroundColor:[],
                fill: 'none',           
            },
            {
                label:'REST_Fun2',
                data: [],
                backgroundColor:[],
                fill: 'none', 
            },
            {
                label:'REST_Fun3',
                data: [],
                backgroundColor:[],
                fill: 'none',
            },
            {
                label:'REST_Fun4',
                data: [],
                backgroundColor:[],
                fill: 'none',
            },
            {
                label:'REST_Fun5',
                data: [],
                backgroundColor:[],
                fill: 'none',
           },
            ]
    }
    });
  }


render(){

  var myHTML = document.getElementById('Rest');
  var textoutput = myHTML.innerHTML;
  var regex_date = /(?<=Time: ).*/g;
  var regex_Rest = /[^T]*/g;
  var date = textoutput.match(regex_date);
  var Rest = textoutput.match(regex_Rest);
  var Rest_fix = [];
  var Rest_min = [];

  var parse = [];
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

  function Change5(){
    if(ref !== undefined){
    if(ref.config.data.datasets[0].hidden === 1 && ref.config.data.datasets[1].hidden === 1){
      ref.config.data.datasets[0].hidden = 0;
      ref.config.data.datasets[1].hidden = 0;
      ref.update();}
    else{
      ref.config.data.datasets[0].hidden = 1;
      ref.config.data.datasets[1].hidden = 1;
      ref.update();
    }}}

  //access.state.chartData.datasets[0].hidden = 0;
  function Change6(){
    if(ref !== undefined){
    if(ref.config.data.datasets[2].hidden === 1 && ref.config.data.datasets[0].hidden === 1){
      ref.config.data.datasets[2].hidden = 0;
      ref.config.data.datasets[0].hidden = 0;
      ref.update();}
    else{
      ref.config.data.datasets[2].hidden = 1;
      ref.config.data.datasets[0].hidden = 1;
      ref.update();
  }}}

  function Change7(){
    if(ref !== undefined){
    if(ref.config.data.datasets[3].hidden === 1 && ref.config.data.datasets[1].hidden === 1){
      ref.config.data.datasets[3].hidden = 0;
      ref.config.data.datasets[1].hidden = 0;
      ref.update();}
    else{
      ref.config.data.datasets[3].hidden = 1;
      ref.config.data.datasets[1].hidden = 1;
      ref.update();
  }}}

  function Change8(){
    if(ref !== undefined){
      if(ref.config.data.datasets[0].hidden === 1 && ref.config.data.datasets[1].hidden === 1 && ref.config.data.datasets[2].hidden === 1 && ref.config.data.datasets[3].hidden === 1){
        ref.config.data.datasets[0].hidden = 0;
        ref.config.data.datasets[1].hidden = 0;
        ref.config.data.datasets[2].hidden = 0;
        ref.config.data.datasets[3].hidden = 0;
        ref.config.data.datasets[4].hidden = 0;
        ref.update();}
      else{
        ref.config.data.datasets[0].hidden = 1;
        ref.config.data.datasets[1].hidden = 1;
        ref.config.data.datasets[2].hidden = 1;
        ref.config.data.datasets[3].hidden = 1;
        ref.config.data.datasets[4].hidden = 0;
        ref.update();
  }}}

  if(Rest != null){
    for(var m=0; m< Rest.length; m++){
      Rest_fix[m] = Rest[m].slice(17,Rest[m].length);
      Rest_min[m] = Rest_fix[m].match(/\d{3}/g);
      if(Rest_min[m]!==null){
        this.state.chartData.datasets[0].data.push(Rest_min[m][0]);
        this.state.chartData.datasets[0].backgroundColor.push('rgba(128,175,69,0.6');
        this.state.chartData.datasets[1].data.push(Rest_min[m][1]);
        this.state.chartData.datasets[1].backgroundColor.push('rgba(124,144,177,0.7');
        this.state.chartData.datasets[2].data.push(Rest_min[m][2]);
        this.state.chartData.datasets[2].backgroundColor.push('rgba(135,225,215,0.7');
        this.state.chartData.datasets[3].data.push(Rest_min[m][3]);
        this.state.chartData.datasets[3].backgroundColor.push('rgba(74,179,211,0.7');
        this.state.chartData.datasets[4].data.push(Rest_min[m][4]);
        this.state.chartData.datasets[4].backgroundColor.push('rgba(135,53,225,0.5');
      }
    }
  }

  if(date != null){
    for(var i=0; i< date.length; i++){
      // moramo ga pretvoriti u int jer ne prima stringove date
      parse[i] = parseInt(date[i], 10);
      this.state.chartData.labels.push(parse[i]);
    }
  }

    return(
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
          <button id="Btn_Leg5" onClick={Change5}>On/Off Machine1</button>
          <button id="Btn_Leg6" onClick={Change6}>On/Off Machine2</button>
          <button id="Btn_Leg7" onClick={Change7}>On/Off Machine3</button>
          <button id="Btn_Leg8" onClick={Change8}>On/Off ALL</button>
          </div></div>
           <div className="line"> <Line ref={(reference) => this.chartReference = reference }
                 data={this.state.chartData}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RestAPI',
                     fontSize:25,},
            legend:{display:true,
                   },
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
                      }}]},
                        pan: {
                            enabled: true,
                            mode: 'x',
                            speed: 0.1,
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
                        /></div>
            <div className="bubble"> <Bubble ref={(reference) => this.chartReference = reference }
                 data={this.state.chartData}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RestAPI',
                     fontSize:25,},
            legend:{display:true,
                   },
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
                      }}]},
                        pan: {
                            enabled: true,
                            mode: 'x',
                            speed: 0.1,
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
                        /></div></div>
                              
    )
}
}
export default Rest_Response;