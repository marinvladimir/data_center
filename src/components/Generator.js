import React, {Component} from 'react';
import {Bar , Pie, Polar} from 'react-chartjs-2';
import './Chart.css';
import myText3 from './Generator_Monitor.txt';
import zoom from 'chartjs-plugin-zoom';

var myHTML3 = document.getElementById('cpu3');
function getData3(){
    var myRequest = new Request(myText3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML3.innerHTML=text;
  });
    });
  }
getData3();

//this is where i get my log text
class Generator extends Component{

constructor(props){
    // eslint-disable-next-line no-this-before-super
    super(props);
    this.state={
            chartData:props.chartData,
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'right',
            location: 'DF_udev',
        }
}

  componentWillMount(){
    this.getChartData();
    if(document.getElementsByClassName("App")[0] != null){
      document.getElementsByClassName("App")[0].style.height = "2500px";}
}

componentWillUpdate(){
// eslint-disable-next-line react/no-direct-mutation-state
this.state.chartData3.labels = [];
    
  if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "1100px";}
}

  getChartData(){
      //Ajax calls here
    this.setState({
        chartData3:{
            labels: [Gen_Round],
            datasets:
                [{
                    data: [],
                    backgroundColor:[]
                }]
                   },
          chartData4:{
              labels: ['Num_Gen1',
              'Num_Gen2',
              'Num_Gen3',
              'Num_Gen4'],
              datasets:
                  [{
                      data: [1,2,3,4],
                      backgroundColor:['rgba(155,159,22,0.5','rgba(15,19,165,0.7','rgba(25,155,111,0.6','rgba(111,11,112,0.6']
                  }]
                   },
          chartData4:{
              labels: ['25C',
              '30C',
              '35C',
              '40C',
              '45C',
              '50C',],
              datasets:
                  [{
                      data: [100,120,335,425,155,385],
                      backgroundColor:['rgba(155,159,22,0.5','rgba(15,19,165,0.7','rgba(225,155,111,0.6','rgba(111,11,112,0.6','rgba(141,243,92,0.6','rgba(84,241,182,0.8']
                  }]
                    },
        });
      }

render(){

  var myHTML3 = document.getElementById('cpu3');
  var textoutput3 = myHTML3.innerHTML;
  var regex_date3 = /(?<=Time: )\d*/g;
  var regex_CPU3 = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date3 = textoutput3.match(regex_date3);
  var cpu3 = textoutput3.match(regex_CPU3);

  var parse = [];

  if(cpu3!=null){
    for(var i3=0;i3<cpu3.length;i3++){
      parse[i3] = parseInt(date3[i3], 10);
      this.state.chartData3.labels.push(parse[i3]);
      this.state.chartData3.datasets[0].data.push(cpu3[i3]);
      this.state.chartData3.datasets[0].backgroundColor.push('rgba(55,19,162,0.6');
    }
  }

    return(
        <div>
          <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData3}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Gen: Rounds ',
                     fontSize:25,},
            legend:{display:this.state.displayLegend,
                    position:this.state.legendPosition},
            scales: {
              xAxes: [{
                type: 'time',
                displayFormats: {unit: 'second'},
                distribution: 'linear',
                scaleLabel: {display: true, labelString: "time"}}],
                yAxes: [{ticks:{beginAtZero:true},
                         scaleLabel: {
                         display: true,
                         labelString: "rounds"}}]},
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
                        animationEnabled: true}}/>
        </div></div>
        <div className="chart2">
        <div className="pie"> <Pie
                 data={this.state.chartData4}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Gen: Rounds ',
                     fontSize:25,},
            scales: {},
                 }}/>
        </div>
        <div className="chart2">
        <div className="polarArea"> <Polar
                 data={this.state.chartData4}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Gen: Warmth Positioning ',
                     fontSize:25,},
            scales: {},
                 }}/>
        </div></div>
        </div>
       </div>)}}
export default Generator;