import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';
import myText10 from './NRU_10.27.28.111_PORT_STATS_COMMAND_CmdMonitor';
import zoom from 'chartjs-plugin-zoom';

var myHTML10 = document.getElementById('PORT_STATS');
function getData10(){
    var myRequest = new Request(myText10);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML10.innerHTML=text;
  });
    });
  }
getData10();

//this is where i get my log text
class NRU_Ports extends Component{

constructor(props){
    // eslint-disable-next-line no-this-before-super
    super(props);
    this.state={
            chartData:props.chartData,
            chartData2:props.chartData2,
            chartData3:props.chartData3,
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'right',
        }
}

  componentWillMount(){
    this.getChartData();
    if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "9500px";}
  /*  var button = document.getElementById('button1');
    button.style.display='block';
    button.style.position='absolute';
    button.innerHTML='Delete';
    button.style.top='350px';
    button.style.right='850px';   

    var button2 = document.getElementById('button2');
    button2.style.display='block';
    button2.style.position='absolute';
    button2.innerHTML='Return';
    button2.style.top='350px';
    button2.style.right='950px';   */
}

    componentWillUnmount(){
    /*    var button = document.getElementById('button1');
        button.style.display='none';
        var button2 = document.getElementById('button2');
        button2.style.display='none';*/
    }

    componentWillUpdate(){
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData12.labels=[];               
    this.state.chartData54.labels=[];
    this.state.chartData36.labels=[];       
    this.state.chartData18.labels=[];             
    this.state.chartData60.labels=[];
    this.state.chartData42.labels=[];   
    this.state.chartData24.labels=[];              
    this.state.chartData66.labels=[];
    this.state.chartData48.labels=[];      
    this.state.chartData30.labels=[];        
    this.state.chartData72.labels=[];
    this.state.chartData78.labels=[];
    this.state.chartData84.labels=[];

    if(document.getElementsByClassName("App")[0] != null){
        document.getElementsByClassName("App")[0].style.height = "9500px";}
}

    
    componentDidMount(){
    }

  getChartData(){
    this.setState({
    chartData12:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData18:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData24:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData30:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData36:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData42:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData48:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData54:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData60:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData66:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData72:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData78:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]},
    chartData84:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 port 1',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 2',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 3',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 4',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 5',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 9',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 13',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 17',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 21',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 25',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 29',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 33',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 89',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 90',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 91',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 92',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 93',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 94',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 95',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 96',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 97',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 98',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 99',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 100',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 101',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 102',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 103',
        data: [],
        fill: false,  
        backgroundColor:[],},
        {
        label:'27-Spine-01 port 104',
        data: [],
        fill: false,  
        backgroundColor:[],},
        ]}}
    
    );
  }


render(){

  var myHTML10 = document.getElementById('PORT_STATS');
  var textoutput10 = myHTML10.innerHTML;
  var regex_date10 = /(?<=Timestamp: )\d*/g;
  var date10 = textoutput10.match(regex_date10);
  var Spine27_Port1 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 1\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port2 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 2\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port3 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 3\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port4 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 4\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port5 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 5\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port9 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 9\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port13 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 13\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port17 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 17\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port21 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 21\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port25 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 25\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port29 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 29\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port33 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 33\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port89 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 89\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port90 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 90\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port91 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 91\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port92 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 92\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port93 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 93\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port94 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 94\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port95 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 95\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port96 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 96\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port97 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 97\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port98 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 98\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port99 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 99\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port100 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 100\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port101 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 101\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port102 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 102\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port103 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 103\s{1,5}\S{1,10}[^\n\r]*/g);
  var Spine27_Port104 = textoutput10.match(/27-Spine-01\s\d{2}:\d{2}:\d{2} 104\s{1,5}\S{1,10}[^\n\r]*/g);

  var Spine27_Port1_fix = [];  var Spine27_Port2_fix = [];  var Spine27_Port3_fix = [];
  var Spine27_Port4_fix = [];  var Spine27_Port5_fix = [];  var Spine27_Port9_fix = [];
  var Spine27_Port13_fix = [];  var Spine27_Port17_fix = [];  var Spine27_Port21_fix = [];
  var Spine27_Port25_fix = [];  var Spine27_Port29_fix = [];  var Spine27_Port33_fix = [];
  var Spine27_Port89_fix = [];  var Spine27_Port90_fix = [];  var Spine27_Port91_fix = [];
  var Spine27_Port92_fix = [];  var Spine27_Port93_fix = [];  var Spine27_Port94_fix = [];
  var Spine27_Port95_fix = [];  var Spine27_Port96_fix = [];  var Spine27_Port97_fix = [];
  var Spine27_Port98_fix = [];  var Spine27_Port99_fix = [];  var Spine27_Port100_fix = [];
  var Spine27_Port101_fix = [];  var Spine27_Port102_fix = [];  var Spine27_Port103_fix = [];
  var Spine27_Port104_fix = [];
  var Spine27_Port1_iUpkts = [];  var Spine27_Port2_iUpkts = [];  var Spine27_Port3_iUpkts = [];
  var Spine27_Port4_iUpkts = [];  var Spine27_Port5_iUpkts = [];  var Spine27_Port9_iUpkts = [];
  var Spine27_Port13_iUpkts = [];  var Spine27_Port17_iUpkts = [];  var Spine27_Port21_iUpkts = [];
  var Spine27_Port25_iUpkts = [];  var Spine27_Port29_iUpkts = [];  var Spine27_Port33_iUpkts = [];
  var Spine27_Port89_iUpkts = [];  var Spine27_Port90_iUpkts = [];  var Spine27_Port91_iUpkts = [];
  var Spine27_Port92_iUpkts = [];  var Spine27_Port93_iUpkts = [];  var Spine27_Port94_iUpkts = [];
  var Spine27_Port95_iUpkts = [];  var Spine27_Port96_iUpkts = [];  var Spine27_Port97_iUpkts = [];
  var Spine27_Port98_iUpkts = [];  var Spine27_Port99_iUpkts = [];  var Spine27_Port100_iUpkts = [];
  var Spine27_Port101_iUpkts = [];  var Spine27_Port102_iUpkts = [];  var Spine27_Port103_iUpkts = [];
  var Spine27_Port104_iUpkts = [];
  var Spine27_Port1_iBpkts = [];  var Spine27_Port2_iBpkts = [];  var Spine27_Port3_iBpkts = [];
  var Spine27_Port4_iBpkts = [];  var Spine27_Port5_iBpkts = [];  var Spine27_Port9_iBpkts = [];
  var Spine27_Port13_iBpkts = [];  var Spine27_Port17_iBpkts = [];  var Spine27_Port21_iBpkts = [];
  var Spine27_Port25_iBpkts = [];  var Spine27_Port29_iBpkts = [];  var Spine27_Port33_iBpkts = [];
  var Spine27_Port89_iBpkts = [];  var Spine27_Port90_iBpkts = [];  var Spine27_Port91_iBpkts = [];
  var Spine27_Port92_iBpkts = [];  var Spine27_Port93_iBpkts = [];  var Spine27_Port94_iBpkts = [];
  var Spine27_Port95_iBpkts = [];  var Spine27_Port96_iBpkts = [];  var Spine27_Port97_iBpkts = [];
  var Spine27_Port98_iBpkts = [];  var Spine27_Port99_iBpkts = [];  var Spine27_Port100_iBpkts = [];
  var Spine27_Port101_iBpkts = [];  var Spine27_Port102_iBpkts = [];  var Spine27_Port103_iBpkts = [];
  var Spine27_Port104_iBpkts = [];
  var Spine27_Port1_iMpkts = [];  var Spine27_Port2_iMpkts = [];  var Spine27_Port3_iMpkts = [];
  var Spine27_Port4_iMpkts = [];  var Spine27_Port5_iMpkts = [];  var Spine27_Port9_iMpkts = [];
  var Spine27_Port13_iMpkts = [];  var Spine27_Port17_iMpkts = [];  var Spine27_Port21_iMpkts = [];
  var Spine27_Port25_iMpkts = [];  var Spine27_Port29_iMpkts = [];  var Spine27_Port33_iMpkts = [];
  var Spine27_Port89_iMpkts = [];  var Spine27_Port90_iMpkts = [];  var Spine27_Port91_iMpkts = [];
  var Spine27_Port92_iMpkts = [];  var Spine27_Port93_iMpkts = [];  var Spine27_Port94_iMpkts = [];
  var Spine27_Port95_iMpkts = [];  var Spine27_Port96_iMpkts = [];  var Spine27_Port97_iMpkts = [];
  var Spine27_Port98_iMpkts = [];  var Spine27_Port99_iMpkts = [];  var Spine27_Port100_iMpkts = [];
  var Spine27_Port101_iMpkts = [];  var Spine27_Port102_iMpkts = [];  var Spine27_Port103_iMpkts = [];
  var Spine27_Port104_iMpkts = [];
  var Spine27_Port1_iCongDrops = [];  var Spine27_Port2_iCongDrops = [];  var Spine27_Port3_iCongDrops = [];
  var Spine27_Port4_iCongDrops = [];  var Spine27_Port5_iCongDrops = [];  var Spine27_Port9_iCongDrops = [];
  var Spine27_Port13_iCongDrops = [];  var Spine27_Port17_iCongDrops = [];  var Spine27_Port21_iCongDrops = [];
  var Spine27_Port25_iCongDrops = [];  var Spine27_Port29_iCongDrops = [];  var Spine27_Port33_iCongDrops = [];
  var Spine27_Port89_iCongDrops = [];  var Spine27_Port90_iCongDrops = [];  var Spine27_Port91_iCongDrops = [];
  var Spine27_Port92_iCongDrops = [];  var Spine27_Port93_iCongDrops = [];  var Spine27_Port94_iCongDrops = [];
  var Spine27_Port95_iCongDrops = [];  var Spine27_Port96_iCongDrops = [];  var Spine27_Port97_iCongDrops = [];
  var Spine27_Port98_iCongDrops = [];  var Spine27_Port99_iCongDrops = [];  var Spine27_Port100_iCongDrops = [];
  var Spine27_Port101_iCongDrops = [];  var Spine27_Port102_iCongDrops = [];  var Spine27_Port103_iCongDrops = [];
  var Spine27_Port104_iCongDrops = [];
  var Spine27_Port1_ierrs = [];  var Spine27_Port2_ierrs = [];  var Spine27_Port3_ierrs = [];
  var Spine27_Port4_ierrs = [];  var Spine27_Port5_ierrs = [];  var Spine27_Port9_ierrs = [];
  var Spine27_Port13_ierrs = [];  var Spine27_Port17_ierrs = [];  var Spine27_Port21_ierrs = [];
  var Spine27_Port25_ierrs = [];  var Spine27_Port29_ierrs = [];  var Spine27_Port33_ierrs = [];
  var Spine27_Port89_ierrs = [];  var Spine27_Port90_ierrs = [];  var Spine27_Port91_ierrs = [];
  var Spine27_Port92_ierrs = [];  var Spine27_Port93_ierrs = [];  var Spine27_Port94_ierrs = [];
  var Spine27_Port95_ierrs = [];  var Spine27_Port96_ierrs = [];  var Spine27_Port97_ierrs = [];
  var Spine27_Port98_ierrs = [];  var Spine27_Port99_ierrs = [];  var Spine27_Port100_ierrs = [];
  var Spine27_Port101_ierrs = [];  var Spine27_Port102_ierrs = [];  var Spine27_Port103_ierrs = [];
  var Spine27_Port104_ierrs = [];
  var Spine27_Port1_obytes = [];  var Spine27_Port2_obytes = [];  var Spine27_Port3_obytes = [];
  var Spine27_Port4_obytes = [];  var Spine27_Port5_obytes = [];  var Spine27_Port9_obytes = [];
  var Spine27_Port13_obytes = [];  var Spine27_Port17_obytes = [];  var Spine27_Port21_obytes = [];
  var Spine27_Port25_obytes = [];  var Spine27_Port29_obytes = [];  var Spine27_Port33_obytes = [];
  var Spine27_Port89_obytes = [];  var Spine27_Port90_obytes = [];  var Spine27_Port91_obytes = [];
  var Spine27_Port92_obytes = [];  var Spine27_Port93_obytes = [];  var Spine27_Port94_obytes = [];
  var Spine27_Port95_obytes = [];  var Spine27_Port96_obytes = [];  var Spine27_Port97_obytes = [];
  var Spine27_Port98_obytes = [];  var Spine27_Port99_obytes = [];  var Spine27_Port100_obytes = [];
  var Spine27_Port101_obytes = [];  var Spine27_Port102_obytes = [];  var Spine27_Port103_obytes = [];
  var Spine27_Port104_obytes = [];
  var Spine27_Port1_oUpkts = [];  var Spine27_Port2_oUpkts = [];  var Spine27_Port3_oUpkts = [];
  var Spine27_Port4_oUpkts = [];  var Spine27_Port5_oUpkts = [];  var Spine27_Port9_oUpkts = [];
  var Spine27_Port13_oUpkts = [];  var Spine27_Port17_oUpkts = [];  var Spine27_Port21_oUpkts = [];
  var Spine27_Port25_oUpkts = [];  var Spine27_Port29_oUpkts = [];  var Spine27_Port33_oUpkts = [];
  var Spine27_Port89_oUpkts = [];  var Spine27_Port90_oUpkts = [];  var Spine27_Port91_oUpkts = [];
  var Spine27_Port92_oUpkts = [];  var Spine27_Port93_oUpkts = [];  var Spine27_Port94_oUpkts = [];
  var Spine27_Port95_oUpkts = [];  var Spine27_Port96_oUpkts = [];  var Spine27_Port97_oUpkts = [];
  var Spine27_Port98_oUpkts = [];  var Spine27_Port99_oUpkts = [];  var Spine27_Port100_oUpkts = [];
  var Spine27_Port101_oUpkts = [];  var Spine27_Port102_oUpkts = [];  var Spine27_Port103_oUpkts = [];
  var Spine27_Port104_oUpkts = [];
  var Spine27_Port1_oBpkts = [];  var Spine27_Port2_oBpkts = [];  var Spine27_Port3_oBpkts = [];
  var Spine27_Port4_oBpkts = [];  var Spine27_Port5_oBpkts = [];  var Spine27_Port9_oBpkts = [];
  var Spine27_Port13_oBpkts = [];  var Spine27_Port17_oBpkts = [];  var Spine27_Port21_oBpkts = [];
  var Spine27_Port25_oBpkts = [];  var Spine27_Port29_oBpkts = [];  var Spine27_Port33_oBpkts = [];
  var Spine27_Port89_oBpkts = [];  var Spine27_Port90_oBpkts = [];  var Spine27_Port91_oBpkts = [];
  var Spine27_Port92_oBpkts = [];  var Spine27_Port93_oBpkts = [];  var Spine27_Port94_oBpkts = [];
  var Spine27_Port95_oBpkts = [];  var Spine27_Port96_oBpkts = [];  var Spine27_Port97_oBpkts = [];
  var Spine27_Port98_oBpkts = [];  var Spine27_Port99_oBpkts = [];  var Spine27_Port100_oBpkts = [];
  var Spine27_Port101_oBpkts = [];  var Spine27_Port102_oBpkts = [];  var Spine27_Port103_oBpkts = [];
  var Spine27_Port104_oBpkts = [];
  var Spine27_Port1_oMpkts = [];  var Spine27_Port2_oMpkts = [];  var Spine27_Port3_oMpkts = [];
  var Spine27_Port4_oMpkts = [];  var Spine27_Port5_oMpkts = [];  var Spine27_Port9_oMpkts = [];
  var Spine27_Port13_oMpkts = [];  var Spine27_Port17_oMpkts = [];  var Spine27_Port21_oMpkts = [];
  var Spine27_Port25_oMpkts = [];  var Spine27_Port29_oMpkts = [];  var Spine27_Port33_oMpkts = [];
  var Spine27_Port89_oMpkts = [];  var Spine27_Port90_oMpkts = [];  var Spine27_Port91_oMpkts = [];
  var Spine27_Port92_oMpkts = [];  var Spine27_Port93_oMpkts = [];  var Spine27_Port94_oMpkts = [];
  var Spine27_Port95_oMpkts = [];  var Spine27_Port96_oMpkts = [];  var Spine27_Port97_oMpkts = [];
  var Spine27_Port98_oMpkts = [];  var Spine27_Port99_oMpkts = [];  var Spine27_Port100_oMpkts = [];
  var Spine27_Port101_oMpkts = [];  var Spine27_Port102_oMpkts = [];  var Spine27_Port103_oMpkts = [];
  var Spine27_Port104_oMpkts = [];
  var Spine27_Port1_oCongDrops = [];  var Spine27_Port2_oCongDrops = [];  var Spine27_Port3_oCongDrops = [];
  var Spine27_Port4_oCongDrops = [];  var Spine27_Port5_oCongDrops = [];  var Spine27_Port9_oCongDrops = [];
  var Spine27_Port13_oCongDrops = [];  var Spine27_Port17_oCongDrops = [];  var Spine27_Port21_oCongDrops = [];
  var Spine27_Port25_oCongDrops = [];  var Spine27_Port29_oCongDrops = [];  var Spine27_Port33_oCongDrops = [];
  var Spine27_Port89_oCongDrops = [];  var Spine27_Port90_oCongDrops = [];  var Spine27_Port91_oCongDrops = [];
  var Spine27_Port92_oCongDrops = [];  var Spine27_Port93_oCongDrops = [];  var Spine27_Port94_oCongDrops = [];
  var Spine27_Port95_oCongDrops = [];  var Spine27_Port96_oCongDrops = [];  var Spine27_Port97_oCongDrops = [];
  var Spine27_Port98_oCongDrops = [];  var Spine27_Port99_oCongDrops = [];  var Spine27_Port100_oCongDrops = [];
  var Spine27_Port101_oCongDrops = [];  var Spine27_Port102_oCongDrops = [];  var Spine27_Port103_oCongDrops = [];
  var Spine27_Port104_oCongDrops = [];
  var Spine27_Port1_oerrs = [];  var Spine27_Port2_oerrs = [];  var Spine27_Port3_oerrs = [];
  var Spine27_Port4_oerrs = [];  var Spine27_Port5_oerrs = [];  var Spine27_Port9_oerrs = [];
  var Spine27_Port13_oerrs = [];  var Spine27_Port17_oerrs = [];  var Spine27_Port21_oerrs = [];
  var Spine27_Port25_oerrs = [];  var Spine27_Port29_oerrs = [];  var Spine27_Port33_oerrs = [];
  var Spine27_Port89_oerrs = [];  var Spine27_Port90_oerrs = [];  var Spine27_Port91_oerrs = [];
  var Spine27_Port92_oerrs = [];  var Spine27_Port93_oerrs = [];  var Spine27_Port94_oerrs = [];
  var Spine27_Port95_oerrs = [];  var Spine27_Port96_oerrs = [];  var Spine27_Port97_oerrs = [];
  var Spine27_Port98_oerrs = [];  var Spine27_Port99_oerrs = [];  var Spine27_Port100_oerrs = [];
  var Spine27_Port101_oerrs = [];  var Spine27_Port102_oerrs = [];  var Spine27_Port103_oerrs = [];
  var Spine27_Port104_oerrs = [];
  var Spine27_Port1_mtu_errs = [];  var Spine27_Port2_mtu_errs = [];  var Spine27_Port3_mtu_errs = [];
  var Spine27_Port4_mtu_errs = [];  var Spine27_Port5_mtu_errs = [];  var Spine27_Port9_mtu_errs = [];
  var Spine27_Port13_mtu_errs = [];  var Spine27_Port17_mtu_errs = [];  var Spine27_Port21_mtu_errs = [];
  var Spine27_Port25_mtu_errs = [];  var Spine27_Port29_mtu_errs = [];  var Spine27_Port33_mtu_errs = [];
  var Spine27_Port89_mtu_errs = [];  var Spine27_Port90_mtu_errs = [];  var Spine27_Port91_mtu_errs = [];
  var Spine27_Port92_mtu_errs = [];  var Spine27_Port93_mtu_errs = [];  var Spine27_Port94_mtu_errs = [];
  var Spine27_Port95_mtu_errs = [];  var Spine27_Port96_mtu_errs = [];  var Spine27_Port97_mtu_errs = [];
  var Spine27_Port98_mtu_errs = [];  var Spine27_Port99_mtu_errs = [];  var Spine27_Port100_mtu_errs = [];
  var Spine27_Port101_mtu_errs = [];  var Spine27_Port102_mtu_errs = [];  var Spine27_Port103_mtu_errs = [];
  var Spine27_Port104_mtu_errs = [];

  var parse = [];

    if(date10!=null){
        for(var i11=0;i11<date10.length;i11++){
            parse[i11] = parseInt(date10[i11], 10);
            this.state.chartData12.labels.push(parse[i11]);
            this.state.chartData18.labels.push(parse[i11]);
            this.state.chartData24.labels.push(parse[i11]);
            this.state.chartData30.labels.push(parse[i11]);
            this.state.chartData36.labels.push(parse[i11]);
            this.state.chartData42.labels.push(parse[i11]);
            this.state.chartData48.labels.push(parse[i11]);
            this.state.chartData54.labels.push(parse[i11]);
            this.state.chartData60.labels.push(parse[i11]);
            this.state.chartData66.labels.push(parse[i11]);
            this.state.chartData72.labels.push(parse[i11]);
            this.state.chartData78.labels.push(parse[i11]);
            this.state.chartData84.labels.push(parse[i11]);

            if(Spine27_Port1[i11] !== undefined){ 
            //    console.log(Spine27_Port1[i11]);
            Spine27_Port1_fix[i11] = Spine27_Port1[i11].slice(26, 34);
            Spine27_Port1_iUpkts[i11] = Spine27_Port1[i11].slice(33,40);
            Spine27_Port1_iBpkts[i11] = Spine27_Port1[i11].slice(40,47);
            Spine27_Port1_iMpkts[i11] = Spine27_Port1[i11].slice(47,54);
            Spine27_Port1_iCongDrops[i11] = Spine27_Port1[i11].slice(54,65);
            Spine27_Port1_ierrs[i11] = Spine27_Port1[i11].slice(65,71);
            Spine27_Port1_obytes[i11] = Spine27_Port1[i11].slice(71,78);
            Spine27_Port1_oUpkts[i11] = Spine27_Port1[i11].slice(78,85);
            Spine27_Port1_oBpkts[i11] = Spine27_Port1[i11].slice(85,92);
            Spine27_Port1_oMpkts[i11] = Spine27_Port1[i11].slice(92,99);
            Spine27_Port1_oCongDrops[i11] = Spine27_Port1[i11].slice(99,110);
            Spine27_Port1_oerrs[i11] = Spine27_Port1[i11].slice(110,116);
            Spine27_Port1_mtu_errs[i11] = Spine27_Port1[i11].slice(116,125);

            if(Spine27_Port1_fix[i11].includes("G")){
                Spine27_Port1_fix[i11] = Spine27_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_fix[i11][0] = Spine27_Port1_fix[i11][0]*1000000000;}
            else if(Spine27_Port1_fix[i11].includes("M")){
                Spine27_Port1_fix[i11] = Spine27_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_fix[i11][0] = Spine27_Port1_fix[i11][0]*1000000;}
            else if(Spine27_Port1_fix[i11].includes("K")){
                Spine27_Port1_fix[i11] = Spine27_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_fix[i11][0] = Spine27_Port1_fix[i11][0]*1000;}
            else {
                Spine27_Port1_fix[i11] = Spine27_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }

            if(Spine27_Port1_iUpkts[i11].includes("G")){
                Spine27_Port1_iUpkts[i11] = Spine27_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iUpkts[i11][0] = Spine27_Port1_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_iUpkts[i11].includes("M")){
                Spine27_Port1_iUpkts[i11] = Spine27_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iUpkts[i11][0] = Spine27_Port1_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port1_iUpkts[i11].includes("K")){
                Spine27_Port1_iUpkts[i11] = Spine27_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iUpkts[i11][0] = Spine27_Port1_iUpkts[i11][0]*1000;}
            else {
                Spine27_Port1_iUpkts[i11] = Spine27_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
        
            if(Spine27_Port1_iBpkts[i11].includes("G")){
                Spine27_Port1_iBpkts[i11] = Spine27_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iBpkts[i11][0] = Spine27_Port1_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_iBpkts[i11].includes("M")){
                Spine27_Port1_iBpkts[i11] = Spine27_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iBpkts[i11][0] = Spine27_Port1_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port1_iBpkts[i11].includes("K")){
                Spine27_Port1_iBpkts[i11] = Spine27_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iBpkts[i11][0] = Spine27_Port1_iBpkts[i11][0]*1000;}
            else {
                Spine27_Port1_iBpkts[i11] = Spine27_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if(Spine27_Port1_iMpkts[i11].includes("G")){
                Spine27_Port1_iMpkts[i11] = Spine27_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iMpkts[i11][0] = Spine27_Port1_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_iMpkts[i11].includes("M")){
                Spine27_Port1_iMpkts[i11] = Spine27_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iMpkts[i11][0] = Spine27_Port1_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port1_iMpkts[i11].includes("K")){
                Spine27_Port1_iMpkts[i11] = Spine27_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iMpkts[i11][0] = Spine27_Port1_iMpkts[i11][0]*1000;}
            else {
                Spine27_Port1_iMpkts[i11] = Spine27_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }

            if(Spine27_Port1_iCongDrops[i11].includes("G")){
                Spine27_Port1_iCongDrops[i11] = Spine27_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iCongDrops[i11][0] = Spine27_Port1_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port1_iCongDrops[i11].includes("M")){
                Spine27_Port1_iCongDrops[i11] = Spine27_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iCongDrops[i11][0] = Spine27_Port1_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port1_iCongDrops[i11].includes("K")){
                Spine27_Port1_iCongDrops[i11] = Spine27_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_iCongDrops[i11][0] = Spine27_Port1_iCongDrops[i11][0]*1000;}
            else {
                Spine27_Port1_iCongDrops[i11] = Spine27_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }

            if(Spine27_Port1_ierrs[i11].includes("G")){
                Spine27_Port1_ierrs[i11] = Spine27_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_ierrs[i11][0] = Spine27_Port1_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port1_ierrs[i11].includes("M")){
                Spine27_Port1_ierrs[i11] = Spine27_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_ierrs[i11][0] = Spine27_Port1_ierrs[i11][0]*1000000;}
            else if(Spine27_Port1_ierrs[i11].includes("K")){
                Spine27_Port1_ierrs[i11] = Spine27_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_ierrs[i11][0] = Spine27_Port1_ierrs[i11][0]*1000;}
            else {
                Spine27_Port1_ierrs[i11] = Spine27_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
             }

            if(Spine27_Port1_obytes[i11].includes("G")){
                Spine27_Port1_obytes[i11] = Spine27_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_obytes[i11][0] = Spine27_Port1_obytes[i11][0]*1000000000;}
            else if(Spine27_Port1_obytes[i11].includes("M")){
                Spine27_Port1_obytes[i11] = Spine27_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_obytes[i11][0] = Spine27_Port1_obytes[i11][0]*1000000;}
            else if(Spine27_Port1_obytes[i11].includes("K")){
                Spine27_Port1_obytes[i11] = Spine27_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_obytes[i11][0] = Spine27_Port1_obytes[i11][0]*1000;}
            else {
                Spine27_Port1_obytes[i11] = Spine27_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if(Spine27_Port1_oUpkts[i11].includes("G")){
                Spine27_Port1_oUpkts[i11] = Spine27_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oUpkts[i11][0] = Spine27_Port1_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_oUpkts[i11].includes("M")){
                Spine27_Port1_oUpkts[i11] = Spine27_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oUpkts[i11][0] = Spine27_Port1_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port1_oUpkts[i11].includes("K")){
                Spine27_Port1_oUpkts[i11] = Spine27_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oUpkts[i11][0] = Spine27_Port1_oUpkts[i11][0]*1000;}
            else {
                Spine27_Port1_oUpkts[i11] = Spine27_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }

            if(Spine27_Port1_oBpkts[i11].includes("G")){
                Spine27_Port1_oBpkts[i11] = Spine27_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oBpkts[i11][0] = Spine27_Port1_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_oBpkts[i11].includes("M")){
                Spine27_Port1_oBpkts[i11] = Spine27_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oBpkts[i11][0] = Spine27_Port1_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port1_oBpkts[i11].includes("K")){
                Spine27_Port1_oBpkts[i11] = Spine27_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oBpkts[i11][0] = Spine27_Port1_oBpkts[i11][0]*1000;}
            else {
                Spine27_Port1_oBpkts[i11] = Spine27_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }

            if(Spine27_Port1_oMpkts[i11].includes("G")){
                Spine27_Port1_oMpkts[i11] = Spine27_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oMpkts[i11][0] = Spine27_Port1_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port1_oMpkts[i11].includes("M")){
                Spine27_Port1_oMpkts[i11] = Spine27_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oMpkts[i11][0] = Spine27_Port1_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port1_oMpkts[i11].includes("K")){
                Spine27_Port1_oMpkts[i11] = Spine27_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oMpkts[i11][0] = Spine27_Port1_oMpkts[i11][0]*1000;}
            else {
                Spine27_Port1_oMpkts[i11] = Spine27_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }

            if(Spine27_Port1_oCongDrops[i11].includes("G")){
                Spine27_Port1_oCongDrops[i11] = Spine27_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oCongDrops[i11][0] = Spine27_Port1_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port1_oCongDrops[i11].includes("M")){
                Spine27_Port1_oCongDrops[i11] = Spine27_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oCongDrops[i11][0] = Spine27_Port1_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port1_oCongDrops[i11].includes("K")){
                Spine27_Port1_oCongDrops[i11] = Spine27_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oCongDrops[i11][0] = Spine27_Port1_oCongDrops[i11][0]*1000;}
            else {
                Spine27_Port1_oCongDrops[i11] = Spine27_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }

            if(Spine27_Port1_oerrs[i11].includes("G")){
                Spine27_Port1_oerrs[i11] = Spine27_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oerrs[i11][0] = Spine27_Port1_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port1_oerrs[i11].includes("M")){
                Spine27_Port1_oerrs[i11] = Spine27_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oerrs[i11][0] = Spine27_Port1_oerrs[i11][0]*1000000;}
            else if(Spine27_Port1_oerrs[i11].includes("K")){
                Spine27_Port1_oerrs[i11] = Spine27_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_oerrs[i11][0] = Spine27_Port1_oerrs[i11][0]*1000;}
            else {
                Spine27_Port1_oerrs[i11] = Spine27_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }

            if(Spine27_Port1_mtu_errs[i11].includes("G")){
                Spine27_Port1_mtu_errs[i11] = Spine27_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_mtu_errs[i11][0] = Spine27_Port1_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port1_mtu_errs[i11].includes("M")){
                Spine27_Port1_mtu_errs[i11] = Spine27_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_mtu_errs[i11][0] = Spine27_Port1_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port1_mtu_errs[i11].includes("K")){
                Spine27_Port1_mtu_errs[i11] = Spine27_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port1_mtu_errs[i11][0] = Spine27_Port1_mtu_errs[i11][0]*1000;}
            else {
                Spine27_Port1_mtu_errs[i11] = Spine27_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }}

            if(Spine27_Port2[i11] !== undefined){ 
                //    console.log(Spine27_Port1[i11]);
                Spine27_Port2_fix[i11] = Spine27_Port2[i11].slice(26, 34);
                Spine27_Port2_iUpkts[i11] = Spine27_Port2[i11].slice(33,40);
                Spine27_Port2_iBpkts[i11] = Spine27_Port2[i11].slice(40,47);
                Spine27_Port2_iMpkts[i11] = Spine27_Port2[i11].slice(47,54);
                Spine27_Port2_iCongDrops[i11] = Spine27_Port2[i11].slice(54,65);
                Spine27_Port2_ierrs[i11] = Spine27_Port2[i11].slice(65,71);
                Spine27_Port2_obytes[i11] = Spine27_Port2[i11].slice(71,78);
                Spine27_Port2_oUpkts[i11] = Spine27_Port2[i11].slice(78,85);
                Spine27_Port2_oBpkts[i11] = Spine27_Port2[i11].slice(85,92);
                Spine27_Port2_oMpkts[i11] = Spine27_Port2[i11].slice(92,99);
                Spine27_Port2_oCongDrops[i11] = Spine27_Port2[i11].slice(99,110);
                Spine27_Port2_oerrs[i11] = Spine27_Port2[i11].slice(110,116);
                Spine27_Port2_mtu_errs[i11] = Spine27_Port2[i11].slice(116,125);
    
                if(Spine27_Port2_fix[i11].includes("G")){
                    Spine27_Port2_fix[i11] =    Spine27_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_fix[i11][0] = Spine27_Port2_fix[i11][0]*1000000000;}
            else if(Spine27_Port2_fix[i11].includes("M")){
                    Spine27_Port2_fix[i11] =    Spine27_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_fix[i11][0] = Spine27_Port2_fix[i11][0]*1000000;}
            else if(Spine27_Port2_fix[i11].includes("K")){
                    Spine27_Port2_fix[i11] =    Spine27_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_fix[i11][0] = Spine27_Port2_fix[i11][0]*1000;}
            else {  Spine27_Port2_fix[i11] =    Spine27_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if(Spine27_Port2_iUpkts[i11].includes("G")){
                    Spine27_Port2_iUpkts[i11] =    Spine27_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iUpkts[i11][0] = Spine27_Port2_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_iUpkts[i11].includes("M")){
                    Spine27_Port2_iUpkts[i11] =    Spine27_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iUpkts[i11][0] = Spine27_Port2_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port2_iUpkts[i11].includes("K")){
                    Spine27_Port2_iUpkts[i11] =    Spine27_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iUpkts[i11][0] = Spine27_Port2_iUpkts[i11][0]*1000;}
            else {  Spine27_Port2_iUpkts[i11] =    Spine27_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                    if(Spine27_Port2_iBpkts[i11].includes("G")){
                    Spine27_Port2_iBpkts[i11] =    Spine27_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iBpkts[i11][0] = Spine27_Port2_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_iBpkts[i11].includes("M")){
                    Spine27_Port2_iBpkts[i11] =    Spine27_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iBpkts[i11][0] = Spine27_Port2_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port2_iBpkts[i11].includes("K")){
                    Spine27_Port2_iBpkts[i11] =    Spine27_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iBpkts[i11][0] = Spine27_Port2_iBpkts[i11][0]*1000;}
            else {  Spine27_Port2_iBpkts[i11] =    Spine27_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Spine27_Port2_iMpkts[i11].includes("G")){
                    Spine27_Port2_iMpkts[i11] =    Spine27_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iMpkts[i11][0] = Spine27_Port2_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_iMpkts[i11].includes("M")){
                    Spine27_Port2_iMpkts[i11] =    Spine27_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iMpkts[i11][0] = Spine27_Port2_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port2_iMpkts[i11].includes("K")){
                    Spine27_Port2_iMpkts[i11] =    Spine27_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iMpkts[i11][0] = Spine27_Port2_iMpkts[i11][0]*1000;}
            else {  Spine27_Port2_iMpkts[i11] =    Spine27_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_iCongDrops[i11].includes("G")){
                    Spine27_Port2_iCongDrops[i11] =    Spine27_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iCongDrops[i11][0] = Spine27_Port2_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port2_iCongDrops[i11].includes("M")){
                    Spine27_Port2_iCongDrops[i11] =    Spine27_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iCongDrops[i11][0] = Spine27_Port2_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port2_iCongDrops[i11].includes("K")){
                    Spine27_Port2_iCongDrops[i11] =    Spine27_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_iCongDrops[i11][0] = Spine27_Port2_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port2_iCongDrops[i11] =    Spine27_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_ierrs[i11].includes("G")){
                    Spine27_Port2_ierrs[i11] =    Spine27_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_ierrs[i11][0] = Spine27_Port2_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port2_ierrs[i11].includes("M")){
                    Spine27_Port2_ierrs[i11] =    Spine27_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_ierrs[i11][0] = Spine27_Port2_ierrs[i11][0]*1000000;}
            else if(Spine27_Port2_ierrs[i11].includes("K")){
                    Spine27_Port2_ierrs[i11] =    Spine27_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_ierrs[i11][0] = Spine27_Port2_ierrs[i11][0]*1000;}
            else {  Spine27_Port2_ierrs[i11] =    Spine27_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_obytes[i11].includes("G")){
                    Spine27_Port2_obytes[i11] =    Spine27_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_obytes[i11][0] = Spine27_Port2_obytes[i11][0]*1000000000;}
            else if(Spine27_Port2_obytes[i11].includes("M")){
                    Spine27_Port2_obytes[i11] =    Spine27_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_obytes[i11][0] = Spine27_Port2_obytes[i11][0]*1000000;}
            else if(Spine27_Port2_obytes[i11].includes("K")){
                    Spine27_Port2_obytes[i11] =    Spine27_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_obytes[i11][0] = Spine27_Port2_obytes[i11][0]*1000;}
            else {  Spine27_Port2_obytes[i11] =    Spine27_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Spine27_Port2_oUpkts[i11].includes("G")){
                    Spine27_Port2_oUpkts[i11] =    Spine27_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oUpkts[i11][0] = Spine27_Port2_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_oUpkts[i11].includes("M")){
                    Spine27_Port2_oUpkts[i11] =    Spine27_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oUpkts[i11][0] = Spine27_Port2_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port2_oUpkts[i11].includes("K")){
                    Spine27_Port2_oUpkts[i11] =    Spine27_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oUpkts[i11][0] = Spine27_Port2_oUpkts[i11][0]*1000;}
            else {  Spine27_Port2_oUpkts[i11] =    Spine27_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_oBpkts[i11].includes("G")){
                    Spine27_Port2_oBpkts[i11] =    Spine27_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oBpkts[i11][0] = Spine27_Port2_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_oBpkts[i11].includes("M")){
                    Spine27_Port2_oBpkts[i11] =    Spine27_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oBpkts[i11][0] = Spine27_Port2_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port2_oBpkts[i11].includes("K")){
                    Spine27_Port2_oBpkts[i11] =    Spine27_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oBpkts[i11][0] = Spine27_Port2_oBpkts[i11][0]*1000;}
            else {  Spine27_Port2_oBpkts[i11] =    Spine27_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_oMpkts[i11].includes("G")){
                    Spine27_Port2_oMpkts[i11] =    Spine27_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oMpkts[i11][0] = Spine27_Port2_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port2_oMpkts[i11].includes("M")){
                    Spine27_Port2_oMpkts[i11] =    Spine27_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oMpkts[i11][0] = Spine27_Port2_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port2_oMpkts[i11].includes("K")){
                    Spine27_Port2_oMpkts[i11] =    Spine27_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oMpkts[i11][0] = Spine27_Port2_oMpkts[i11][0]*1000;}
            else {  Spine27_Port2_oMpkts[i11] =    Spine27_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                    if(Spine27_Port2_oCongDrops[i11].includes("G")){
                    Spine27_Port2_oCongDrops[i11] =    Spine27_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oCongDrops[i11][0] = Spine27_Port2_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port2_oCongDrops[i11].includes("M")){
                    Spine27_Port2_oCongDrops[i11] =    Spine27_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oCongDrops[i11][0] = Spine27_Port2_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port2_oCongDrops[i11].includes("K")){
                    Spine27_Port2_oCongDrops[i11] =    Spine27_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oCongDrops[i11][0] = Spine27_Port2_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port2_oCongDrops[i11] =    Spine27_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port2_oerrs[i11].includes("G")){
                    Spine27_Port2_oerrs[i11] =    Spine27_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oerrs[i11][0] = Spine27_Port2_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port2_oerrs[i11].includes("M")){
                    Spine27_Port2_oerrs[i11] =    Spine27_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oerrs[i11][0] = Spine27_Port2_oerrs[i11][0]*1000000;}
            else if(Spine27_Port2_oerrs[i11].includes("K")){
                    Spine27_Port2_oerrs[i11] =    Spine27_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_oerrs[i11][0] = Spine27_Port2_oerrs[i11][0]*1000;}
            else {  Spine27_Port2_oerrs[i11] =    Spine27_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                    if(Spine27_Port2_mtu_errs[i11].includes("G")){
                    Spine27_Port2_mtu_errs[i11] =    Spine27_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_mtu_errs[i11][0] = Spine27_Port2_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port2_mtu_errs[i11].includes("M")){
                    Spine27_Port2_mtu_errs[i11] =    Spine27_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_mtu_errs[i11][0] = Spine27_Port2_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port2_mtu_errs[i11].includes("K")){
                    Spine27_Port2_mtu_errs[i11] =    Spine27_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port2_mtu_errs[i11][0] = Spine27_Port2_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port2_mtu_errs[i11] =    Spine27_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}     

            if(Spine27_Port3[i11] !== undefined){ 
                //    console.log(Spine27_Port1[i11]);
                Spine27_Port3_fix[i11] =        Spine27_Port3[i11].slice(26, 34);
                Spine27_Port3_iUpkts[i11] =     Spine27_Port3[i11].slice(33,40);
                Spine27_Port3_iBpkts[i11] =     Spine27_Port3[i11].slice(40,47);
                Spine27_Port3_iMpkts[i11] =     Spine27_Port3[i11].slice(47,54);
                Spine27_Port3_iCongDrops[i11] = Spine27_Port3[i11].slice(54,65);
                Spine27_Port3_ierrs[i11] =      Spine27_Port3[i11].slice(65,71);
                Spine27_Port3_obytes[i11] =     Spine27_Port3[i11].slice(71,78);
                Spine27_Port3_oUpkts[i11] =     Spine27_Port3[i11].slice(78,85);
                Spine27_Port3_oBpkts[i11] =     Spine27_Port3[i11].slice(85,92);
                Spine27_Port3_oMpkts[i11] =     Spine27_Port3[i11].slice(92,99);
                Spine27_Port3_oCongDrops[i11] = Spine27_Port3[i11].slice(99,110);
                Spine27_Port3_oerrs[i11] =      Spine27_Port3[i11].slice(110,116);
                Spine27_Port3_mtu_errs[i11] =   Spine27_Port3[i11].slice(116,125);
    
                if( Spine27_Port3_fix[i11].includes("G")){
                    Spine27_Port3_fix[i11] =    Spine27_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_fix[i11][0] = Spine27_Port3_fix[i11][0]*1000000000;}
            else if(Spine27_Port3_fix[i11].includes("M")){
                    Spine27_Port3_fix[i11] =    Spine27_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_fix[i11][0] = Spine27_Port3_fix[i11][0]*1000000;}
            else if(Spine27_Port3_fix[i11].includes("K")){
                    Spine27_Port3_fix[i11] =    Spine27_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_fix[i11][0] = Spine27_Port3_fix[i11][0]*1000;}
            else {  Spine27_Port3_fix[i11] =    Spine27_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                if( Spine27_Port3_iUpkts[i11].includes("G")){
                    Spine27_Port3_iUpkts[i11] =    Spine27_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iUpkts[i11][0] = Spine27_Port3_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_iUpkts[i11].includes("M")){
                    Spine27_Port3_iUpkts[i11] =    Spine27_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iUpkts[i11][0] = Spine27_Port3_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port3_iUpkts[i11].includes("K")){
                    Spine27_Port3_iUpkts[i11] =    Spine27_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iUpkts[i11][0] = Spine27_Port3_iUpkts[i11][0]*1000;}
            else {  Spine27_Port3_iUpkts[i11] =    Spine27_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                    if(Spine27_Port3_iBpkts[i11].includes("G")){
                    Spine27_Port3_iBpkts[i11] =    Spine27_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iBpkts[i11][0] = Spine27_Port3_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_iBpkts[i11].includes("M")){
                    Spine27_Port3_iBpkts[i11] =    Spine27_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iBpkts[i11][0] = Spine27_Port3_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port3_iBpkts[i11].includes("K")){
                    Spine27_Port3_iBpkts[i11] =    Spine27_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iBpkts[i11][0] = Spine27_Port3_iBpkts[i11][0]*1000;}
            else {  Spine27_Port3_iBpkts[i11] =    Spine27_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Spine27_Port3_iMpkts[i11].includes("G")){
                    Spine27_Port3_iMpkts[i11] =    Spine27_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iMpkts[i11][0] = Spine27_Port3_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_iMpkts[i11].includes("M")){
                    Spine27_Port3_iMpkts[i11] =    Spine27_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iMpkts[i11][0] = Spine27_Port3_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port3_iMpkts[i11].includes("K")){
                    Spine27_Port3_iMpkts[i11] =    Spine27_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iMpkts[i11][0] = Spine27_Port3_iMpkts[i11][0]*1000;}
            else {  Spine27_Port3_iMpkts[i11] =    Spine27_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port3_iCongDrops[i11].includes("G")){
                    Spine27_Port3_iCongDrops[i11] =    Spine27_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iCongDrops[i11][0] = Spine27_Port3_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port3_iCongDrops[i11].includes("M")){
                    Spine27_Port3_iCongDrops[i11] =    Spine27_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iCongDrops[i11][0] = Spine27_Port3_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port3_iCongDrops[i11].includes("K")){
                    Spine27_Port3_iCongDrops[i11] =    Spine27_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_iCongDrops[i11][0] = Spine27_Port3_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port3_iCongDrops[i11] =    Spine27_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port3_ierrs[i11].includes("G")){
                    Spine27_Port3_ierrs[i11] =    Spine27_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_ierrs[i11][0] = Spine27_Port3_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port3_ierrs[i11].includes("M")){
                    Spine27_Port3_ierrs[i11] =    Spine27_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_ierrs[i11][0] = Spine27_Port3_ierrs[i11][0]*1000000;}
            else if(Spine27_Port3_ierrs[i11].includes("K")){
                    Spine27_Port3_ierrs[i11] =    Spine27_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_ierrs[i11][0] = Spine27_Port3_ierrs[i11][0]*1000;}
            else {  Spine27_Port3_ierrs[i11] =    Spine27_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                    if(Spine27_Port3_obytes[i11].includes("G")){
                    Spine27_Port3_obytes[i11] =    Spine27_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_obytes[i11][0] = Spine27_Port3_obytes[i11][0]*1000000000;}
            else if(Spine27_Port3_obytes[i11].includes("M")){
                    Spine27_Port3_obytes[i11] =    Spine27_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_obytes[i11][0] = Spine27_Port3_obytes[i11][0]*1000000;}
            else if(Spine27_Port3_obytes[i11].includes("K")){
                    Spine27_Port3_obytes[i11] =    Spine27_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_obytes[i11][0] = Spine27_Port3_obytes[i11][0]*1000;}
            else {  Spine27_Port3_obytes[i11] =    Spine27_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Spine27_Port3_oUpkts[i11].includes("G")){
                    Spine27_Port3_oUpkts[i11] =    Spine27_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oUpkts[i11][0] = Spine27_Port3_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_oUpkts[i11].includes("M")){
                    Spine27_Port3_oUpkts[i11] =    Spine27_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oUpkts[i11][0] = Spine27_Port3_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port3_oUpkts[i11].includes("K")){
                    Spine27_Port3_oUpkts[i11] =    Spine27_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oUpkts[i11][0] = Spine27_Port3_oUpkts[i11][0]*1000;}
            else {  Spine27_Port3_oUpkts[i11] =    Spine27_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port3_oBpkts[i11].includes("G")){
                    Spine27_Port3_oBpkts[i11] =    Spine27_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oBpkts[i11][0] = Spine27_Port3_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_oBpkts[i11].includes("M")){
                    Spine27_Port3_oBpkts[i11] =    Spine27_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oBpkts[i11][0] = Spine27_Port3_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port3_oBpkts[i11].includes("K")){
                    Spine27_Port3_oBpkts[i11] =    Spine27_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oBpkts[i11][0] = Spine27_Port3_oBpkts[i11][0]*1000;}
            else {  Spine27_Port3_oBpkts[i11] =    Spine27_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port3_oMpkts[i11].includes("G")){
                    Spine27_Port3_oMpkts[i11] =    Spine27_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oMpkts[i11][0] = Spine27_Port3_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port3_oMpkts[i11].includes("M")){
                    Spine27_Port3_oMpkts[i11] =    Spine27_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oMpkts[i11][0] = Spine27_Port3_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port3_oMpkts[i11].includes("K")){
                    Spine27_Port3_oMpkts[i11] =    Spine27_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oMpkts[i11][0] = Spine27_Port3_oMpkts[i11][0]*1000;}
            else {  Spine27_Port3_oMpkts[i11] =    Spine27_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                    if(Spine27_Port3_oCongDrops[i11].includes("G")){
                    Spine27_Port3_oCongDrops[i11] =    Spine27_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oCongDrops[i11][0] = Spine27_Port3_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port3_oCongDrops[i11].includes("M")){
                    Spine27_Port3_oCongDrops[i11] =    Spine27_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oCongDrops[i11][0] = Spine27_Port3_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port3_oCongDrops[i11].includes("K")){
                    Spine27_Port3_oCongDrops[i11] =    Spine27_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oCongDrops[i11][0] = Spine27_Port3_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port3_oCongDrops[i11] =    Spine27_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                    if(Spine27_Port3_oerrs[i11].includes("G")){
                    Spine27_Port3_oerrs[i11] =    Spine27_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oerrs[i11][0] = Spine27_Port3_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port3_oerrs[i11].includes("M")){
                    Spine27_Port3_oerrs[i11] =    Spine27_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oerrs[i11][0] = Spine27_Port3_oerrs[i11][0]*1000000;}
            else if(Spine27_Port3_oerrs[i11].includes("K")){
                    Spine27_Port3_oerrs[i11] =    Spine27_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_oerrs[i11][0] = Spine27_Port3_oerrs[i11][0]*1000;}
            else {  Spine27_Port3_oerrs[i11] =    Spine27_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port3_mtu_errs[i11].includes("G")){
                    Spine27_Port3_mtu_errs[i11] =    Spine27_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_mtu_errs[i11][0] = Spine27_Port3_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port3_mtu_errs[i11].includes("M")){
                    Spine27_Port3_mtu_errs[i11] =    Spine27_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_mtu_errs[i11][0] = Spine27_Port3_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port3_mtu_errs[i11].includes("K")){
                    Spine27_Port3_mtu_errs[i11] =    Spine27_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port3_mtu_errs[i11][0] = Spine27_Port3_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port3_mtu_errs[i11] =    Spine27_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }}

            if(Spine27_Port4[i11] !== undefined){ 
                //    console.log(Spine27_Port1[i11]);
                Spine27_Port4_fix[i11] =        Spine27_Port4[i11].slice(26, 34);
                Spine27_Port4_iUpkts[i11] =     Spine27_Port4[i11].slice(33,40);
                Spine27_Port4_iBpkts[i11] =     Spine27_Port4[i11].slice(40,47);
                Spine27_Port4_iMpkts[i11] =     Spine27_Port4[i11].slice(47,54);
                Spine27_Port4_iCongDrops[i11] = Spine27_Port4[i11].slice(54,65);
                Spine27_Port4_ierrs[i11] =      Spine27_Port4[i11].slice(65,71);
                Spine27_Port4_obytes[i11] =     Spine27_Port4[i11].slice(71,78);
                Spine27_Port4_oUpkts[i11] =     Spine27_Port4[i11].slice(78,85);
                Spine27_Port4_oBpkts[i11] =     Spine27_Port4[i11].slice(85,92);
                Spine27_Port4_oMpkts[i11] =     Spine27_Port4[i11].slice(92,99);
                Spine27_Port4_oCongDrops[i11] = Spine27_Port4[i11].slice(99,110);
                Spine27_Port4_oerrs[i11] =      Spine27_Port4[i11].slice(110,116);
                Spine27_Port4_mtu_errs[i11] =   Spine27_Port4[i11].slice(116,125);
    
                if( Spine27_Port4_fix[i11].includes("G")){
                    Spine27_Port4_fix[i11] =    Spine27_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_fix[i11][0] = Spine27_Port4_fix[i11][0]*1000000000;}
            else if(Spine27_Port4_fix[i11].includes("M")){
                    Spine27_Port4_fix[i11] =    Spine27_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_fix[i11][0] = Spine27_Port4_fix[i11][0]*1000000;}
            else if(Spine27_Port4_fix[i11].includes("K")){
                    Spine27_Port4_fix[i11] =    Spine27_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_fix[i11][0] = Spine27_Port4_fix[i11][0]*1000;}
            else {  Spine27_Port4_fix[i11] =    Spine27_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if( Spine27_Port4_iUpkts[i11].includes("G")){
                    Spine27_Port4_iUpkts[i11] =    Spine27_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iUpkts[i11][0] = Spine27_Port4_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_iUpkts[i11].includes("M")){
                    Spine27_Port4_iUpkts[i11] =    Spine27_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iUpkts[i11][0] = Spine27_Port4_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port4_iUpkts[i11].includes("K")){
                    Spine27_Port4_iUpkts[i11] =    Spine27_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iUpkts[i11][0] = Spine27_Port4_iUpkts[i11][0]*1000;}
            else {  Spine27_Port4_iUpkts[i11] =    Spine27_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                    if(Spine27_Port4_iBpkts[i11].includes("G")){
                    Spine27_Port4_iBpkts[i11] =    Spine27_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iBpkts[i11][0] = Spine27_Port4_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_iBpkts[i11].includes("M")){
                    Spine27_Port4_iBpkts[i11] =    Spine27_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iBpkts[i11][0] = Spine27_Port4_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port4_iBpkts[i11].includes("K")){
                    Spine27_Port4_iBpkts[i11] =    Spine27_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iBpkts[i11][0] = Spine27_Port4_iBpkts[i11][0]*1000;}
            else {  Spine27_Port4_iBpkts[i11] =    Spine27_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Spine27_Port4_iMpkts[i11].includes("G")){
                    Spine27_Port4_iMpkts[i11] =    Spine27_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iMpkts[i11][0] = Spine27_Port4_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_iMpkts[i11].includes("M")){
                    Spine27_Port4_iMpkts[i11] =    Spine27_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iMpkts[i11][0] = Spine27_Port4_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port4_iMpkts[i11].includes("K")){
                    Spine27_Port4_iMpkts[i11] =    Spine27_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iMpkts[i11][0] = Spine27_Port4_iMpkts[i11][0]*1000;}
            else {  Spine27_Port4_iMpkts[i11] =    Spine27_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port4_iCongDrops[i11].includes("G")){
                    Spine27_Port4_iCongDrops[i11] =    Spine27_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iCongDrops[i11][0] = Spine27_Port4_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port4_iCongDrops[i11].includes("M")){
                    Spine27_Port4_iCongDrops[i11] =    Spine27_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iCongDrops[i11][0] = Spine27_Port4_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port4_iCongDrops[i11].includes("K")){
                    Spine27_Port4_iCongDrops[i11] =    Spine27_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_iCongDrops[i11][0] = Spine27_Port4_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port4_iCongDrops[i11] =    Spine27_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port4_ierrs[i11].includes("G")){
                    Spine27_Port4_ierrs[i11] =    Spine27_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_ierrs[i11][0] = Spine27_Port4_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port4_ierrs[i11].includes("M")){
                    Spine27_Port4_ierrs[i11] =    Spine27_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_ierrs[i11][0] = Spine27_Port4_ierrs[i11][0]*1000000;}
            else if(Spine27_Port4_ierrs[i11].includes("K")){
                    Spine27_Port4_ierrs[i11] =    Spine27_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_ierrs[i11][0] = Spine27_Port4_ierrs[i11][0]*1000;}
            else {  Spine27_Port4_ierrs[i11] =    Spine27_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                    if(Spine27_Port4_obytes[i11].includes("G")){
                    Spine27_Port4_obytes[i11] =    Spine27_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_obytes[i11][0] = Spine27_Port4_obytes[i11][0]*1000000000;}
            else if(Spine27_Port4_obytes[i11].includes("M")){
                    Spine27_Port4_obytes[i11] =    Spine27_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_obytes[i11][0] = Spine27_Port4_obytes[i11][0]*1000000;}
            else if(Spine27_Port4_obytes[i11].includes("K")){
                    Spine27_Port4_obytes[i11] =    Spine27_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_obytes[i11][0] = Spine27_Port4_obytes[i11][0]*1000;}
            else {  Spine27_Port4_obytes[i11] =    Spine27_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Spine27_Port4_oUpkts[i11].includes("G")){
                    Spine27_Port4_oUpkts[i11] =    Spine27_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oUpkts[i11][0] = Spine27_Port4_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_oUpkts[i11].includes("M")){
                    Spine27_Port4_oUpkts[i11] =    Spine27_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oUpkts[i11][0] = Spine27_Port4_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port4_oUpkts[i11].includes("K")){
                    Spine27_Port4_oUpkts[i11] =    Spine27_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oUpkts[i11][0] = Spine27_Port4_oUpkts[i11][0]*1000;}
            else {  Spine27_Port4_oUpkts[i11] =    Spine27_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                    if(Spine27_Port4_oBpkts[i11].includes("G")){
                    Spine27_Port4_oBpkts[i11] =    Spine27_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oBpkts[i11][0] = Spine27_Port4_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_oBpkts[i11].includes("M")){
                    Spine27_Port4_oBpkts[i11] =    Spine27_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oBpkts[i11][0] = Spine27_Port4_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port4_oBpkts[i11].includes("K")){
                    Spine27_Port4_oBpkts[i11] =    Spine27_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oBpkts[i11][0] = Spine27_Port4_oBpkts[i11][0]*1000;}
            else {  Spine27_Port4_oBpkts[i11] =    Spine27_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port4_oMpkts[i11].includes("G")){
                    Spine27_Port4_oMpkts[i11] =    Spine27_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oMpkts[i11][0] = Spine27_Port4_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port4_oMpkts[i11].includes("M")){
                    Spine27_Port4_oMpkts[i11] =    Spine27_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oMpkts[i11][0] = Spine27_Port4_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port4_oMpkts[i11].includes("K")){
                    Spine27_Port4_oMpkts[i11] =    Spine27_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oMpkts[i11][0] = Spine27_Port4_oMpkts[i11][0]*1000;}
            else {  Spine27_Port4_oMpkts[i11] =    Spine27_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port4_oCongDrops[i11].includes("G")){
                    Spine27_Port4_oCongDrops[i11] =    Spine27_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oCongDrops[i11][0] = Spine27_Port4_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port4_oCongDrops[i11].includes("M")){
                    Spine27_Port4_oCongDrops[i11] =    Spine27_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oCongDrops[i11][0] = Spine27_Port4_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port4_oCongDrops[i11].includes("K")){
                    Spine27_Port4_oCongDrops[i11] =    Spine27_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oCongDrops[i11][0] = Spine27_Port4_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port4_oCongDrops[i11] =    Spine27_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                    if(Spine27_Port4_oerrs[i11].includes("G")){
                    Spine27_Port4_oerrs[i11] =    Spine27_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oerrs[i11][0] = Spine27_Port4_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port4_oerrs[i11].includes("M")){
                    Spine27_Port4_oerrs[i11] =    Spine27_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oerrs[i11][0] = Spine27_Port4_oerrs[i11][0]*1000000;}
            else if(Spine27_Port4_oerrs[i11].includes("K")){
                    Spine27_Port4_oerrs[i11] =    Spine27_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_oerrs[i11][0] = Spine27_Port4_oerrs[i11][0]*1000;}
            else {  Spine27_Port4_oerrs[i11] =    Spine27_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }

                    if(Spine27_Port4_mtu_errs[i11].includes("G")){
                    Spine27_Port4_mtu_errs[i11] =    Spine27_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_mtu_errs[i11][0] = Spine27_Port4_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port4_mtu_errs[i11].includes("M")){
                    Spine27_Port4_mtu_errs[i11] =    Spine27_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_mtu_errs[i11][0] = Spine27_Port4_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port4_mtu_errs[i11].includes("K")){
                    Spine27_Port4_mtu_errs[i11] =    Spine27_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port4_mtu_errs[i11][0] = Spine27_Port4_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port4_mtu_errs[i11] =    Spine27_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}

            if(Spine27_Port5[i11] !== undefined){ 
                Spine27_Port5_fix[i11] =        Spine27_Port5[i11].slice(26, 34);
                Spine27_Port5_iUpkts[i11] =     Spine27_Port5[i11].slice(33,40);
                Spine27_Port5_iBpkts[i11] =     Spine27_Port5[i11].slice(40,47);
                Spine27_Port5_iMpkts[i11] =     Spine27_Port5[i11].slice(47,54);
                Spine27_Port5_iCongDrops[i11] = Spine27_Port5[i11].slice(54,65);
                Spine27_Port5_ierrs[i11] =      Spine27_Port5[i11].slice(65,71);
                Spine27_Port5_obytes[i11] =     Spine27_Port5[i11].slice(71,78);
                Spine27_Port5_oUpkts[i11] =     Spine27_Port5[i11].slice(78,85);
                Spine27_Port5_oBpkts[i11] =     Spine27_Port5[i11].slice(85,92);
                Spine27_Port5_oMpkts[i11] =     Spine27_Port5[i11].slice(92,99);
                Spine27_Port5_oCongDrops[i11] = Spine27_Port5[i11].slice(99,110);
                Spine27_Port5_oerrs[i11] =      Spine27_Port5[i11].slice(110,116);
                Spine27_Port5_mtu_errs[i11] =   Spine27_Port5[i11].slice(116,125);
    
                if( Spine27_Port5_fix[i11].includes("G")){
                    Spine27_Port5_fix[i11] =    Spine27_Port5_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_fix[i11][0] = Spine27_Port5_fix[i11][0]*1000000000;}
            else if(Spine27_Port5_fix[i11].includes("M")){
                    Spine27_Port5_fix[i11] =    Spine27_Port5_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_fix[i11][0] = Spine27_Port5_fix[i11][0]*1000000;}
            else if(Spine27_Port5_fix[i11].includes("K")){
                    Spine27_Port5_fix[i11] =    Spine27_Port5_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_fix[i11][0] = Spine27_Port5_fix[i11][0]*1000;}
            else {  Spine27_Port5_fix[i11] =    Spine27_Port5_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if( Spine27_Port5_iUpkts[i11].includes("G")){
                    Spine27_Port5_iUpkts[i11] =    Spine27_Port5_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iUpkts[i11][0] = Spine27_Port5_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_iUpkts[i11].includes("M")){
                    Spine27_Port5_iUpkts[i11] =    Spine27_Port5_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iUpkts[i11][0] = Spine27_Port5_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port5_iUpkts[i11].includes("K")){
                    Spine27_Port5_iUpkts[i11] =    Spine27_Port5_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iUpkts[i11][0] = Spine27_Port5_iUpkts[i11][0]*1000;}
            else {  Spine27_Port5_iUpkts[i11] =    Spine27_Port5_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                 if(Spine27_Port5_iBpkts[i11].includes("G")){
                    Spine27_Port5_iBpkts[i11] =    Spine27_Port5_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iBpkts[i11][0] = Spine27_Port5_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_iBpkts[i11].includes("M")){
                    Spine27_Port5_iBpkts[i11] =    Spine27_Port5_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iBpkts[i11][0] = Spine27_Port5_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port5_iBpkts[i11].includes("K")){
                    Spine27_Port5_iBpkts[i11] =    Spine27_Port5_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iBpkts[i11][0] = Spine27_Port5_iBpkts[i11][0]*1000;}
            else {  Spine27_Port5_iBpkts[i11] =    Spine27_Port5_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Spine27_Port5_iMpkts[i11].includes("G")){
                    Spine27_Port5_iMpkts[i11] =    Spine27_Port5_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iMpkts[i11][0] = Spine27_Port5_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_iMpkts[i11].includes("M")){
                    Spine27_Port5_iMpkts[i11] =    Spine27_Port5_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iMpkts[i11][0] = Spine27_Port5_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port5_iMpkts[i11].includes("K")){
                    Spine27_Port5_iMpkts[i11] =    Spine27_Port5_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iMpkts[i11][0] = Spine27_Port5_iMpkts[i11][0]*1000;}
            else {  Spine27_Port5_iMpkts[i11] =    Spine27_Port5_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port5_iCongDrops[i11].includes("G")){
                    Spine27_Port5_iCongDrops[i11] =    Spine27_Port5_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iCongDrops[i11][0] = Spine27_Port5_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port5_iCongDrops[i11].includes("M")){
                    Spine27_Port5_iCongDrops[i11] =    Spine27_Port5_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iCongDrops[i11][0] = Spine27_Port5_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port5_iCongDrops[i11].includes("K")){
                    Spine27_Port5_iCongDrops[i11] =    Spine27_Port5_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_iCongDrops[i11][0] = Spine27_Port5_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port5_iCongDrops[i11] =    Spine27_Port5_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port5_ierrs[i11].includes("G")){
                    Spine27_Port5_ierrs[i11] =    Spine27_Port5_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_ierrs[i11][0] = Spine27_Port5_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port5_ierrs[i11].includes("M")){
                    Spine27_Port5_ierrs[i11] =    Spine27_Port5_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_ierrs[i11][0] = Spine27_Port5_ierrs[i11][0]*1000000;}
            else if(Spine27_Port5_ierrs[i11].includes("K")){
                    Spine27_Port5_ierrs[i11] =    Spine27_Port5_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_ierrs[i11][0] = Spine27_Port5_ierrs[i11][0]*1000;}
            else {  Spine27_Port5_ierrs[i11] =    Spine27_Port5_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port5_obytes[i11].includes("G")){
                    Spine27_Port5_obytes[i11] =    Spine27_Port5_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_obytes[i11][0] = Spine27_Port5_obytes[i11][0]*1000000000;}
            else if(Spine27_Port5_obytes[i11].includes("M")){
                    Spine27_Port5_obytes[i11] =    Spine27_Port5_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_obytes[i11][0] = Spine27_Port5_obytes[i11][0]*1000000;}
            else if(Spine27_Port5_obytes[i11].includes("K")){
                    Spine27_Port5_obytes[i11] =    Spine27_Port5_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_obytes[i11][0] = Spine27_Port5_obytes[i11][0]*1000;}
            else {  Spine27_Port5_obytes[i11] =    Spine27_Port5_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port5_oUpkts[i11].includes("G")){
                    Spine27_Port5_oUpkts[i11] =    Spine27_Port5_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oUpkts[i11][0] = Spine27_Port5_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_oUpkts[i11].includes("M")){
                    Spine27_Port5_oUpkts[i11] =    Spine27_Port5_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oUpkts[i11][0] = Spine27_Port5_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port5_oUpkts[i11].includes("K")){
                    Spine27_Port5_oUpkts[i11] =    Spine27_Port5_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oUpkts[i11][0] = Spine27_Port5_oUpkts[i11][0]*1000;}
            else {  Spine27_Port5_oUpkts[i11] =    Spine27_Port5_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port5_oBpkts[i11].includes("G")){
                    Spine27_Port5_oBpkts[i11] =    Spine27_Port5_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oBpkts[i11][0] = Spine27_Port5_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_oBpkts[i11].includes("M")){
                    Spine27_Port5_oBpkts[i11] =    Spine27_Port5_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oBpkts[i11][0] = Spine27_Port5_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port5_oBpkts[i11].includes("K")){
                    Spine27_Port5_oBpkts[i11] =    Spine27_Port5_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oBpkts[i11][0] = Spine27_Port5_oBpkts[i11][0]*1000;}
            else {  Spine27_Port5_oBpkts[i11] =    Spine27_Port5_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port5_oMpkts[i11].includes("G")){
                    Spine27_Port5_oMpkts[i11] =    Spine27_Port5_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oMpkts[i11][0] = Spine27_Port5_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port5_oMpkts[i11].includes("M")){
                    Spine27_Port5_oMpkts[i11] =    Spine27_Port5_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oMpkts[i11][0] = Spine27_Port5_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port5_oMpkts[i11].includes("K")){
                    Spine27_Port5_oMpkts[i11] =    Spine27_Port5_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oMpkts[i11][0] = Spine27_Port5_oMpkts[i11][0]*1000;}
            else {  Spine27_Port5_oMpkts[i11] =    Spine27_Port5_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port5_oCongDrops[i11].includes("G")){
                    Spine27_Port5_oCongDrops[i11] =    Spine27_Port5_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oCongDrops[i11][0] = Spine27_Port5_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port5_oCongDrops[i11].includes("M")){
                    Spine27_Port5_oCongDrops[i11] =    Spine27_Port5_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oCongDrops[i11][0] = Spine27_Port5_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port5_oCongDrops[i11].includes("K")){
                    Spine27_Port5_oCongDrops[i11] =    Spine27_Port5_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oCongDrops[i11][0] = Spine27_Port5_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port5_oCongDrops[i11] =    Spine27_Port5_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port5_oerrs[i11].includes("G")){
                    Spine27_Port5_oerrs[i11] =    Spine27_Port5_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oerrs[i11][0] = Spine27_Port5_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port5_oerrs[i11].includes("M")){
                    Spine27_Port5_oerrs[i11] =    Spine27_Port5_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oerrs[i11][0] = Spine27_Port5_oerrs[i11][0]*1000000;}
            else if(Spine27_Port5_oerrs[i11].includes("K")){
                    Spine27_Port5_oerrs[i11] =    Spine27_Port5_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_oerrs[i11][0] = Spine27_Port5_oerrs[i11][0]*1000;}
            else {  Spine27_Port5_oerrs[i11] =    Spine27_Port5_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }

                 if(Spine27_Port5_mtu_errs[i11].includes("G")){
                    Spine27_Port5_mtu_errs[i11] =    Spine27_Port5_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_mtu_errs[i11][0] = Spine27_Port5_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port5_mtu_errs[i11].includes("M")){
                    Spine27_Port5_mtu_errs[i11] =    Spine27_Port5_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_mtu_errs[i11][0] = Spine27_Port5_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port5_mtu_errs[i11].includes("K")){
                    Spine27_Port5_mtu_errs[i11] =    Spine27_Port5_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port5_mtu_errs[i11][0] = Spine27_Port5_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port5_mtu_errs[i11] =    Spine27_Port5_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}


            if(Spine27_Port9[i11] !== undefined){ 
                Spine27_Port9_fix[i11] =        Spine27_Port9[i11].slice(26, 34);
                Spine27_Port9_iUpkts[i11] =     Spine27_Port9[i11].slice(33,40);
                Spine27_Port9_iBpkts[i11] =     Spine27_Port9[i11].slice(40,47);
                Spine27_Port9_iMpkts[i11] =     Spine27_Port9[i11].slice(47,54);
                Spine27_Port9_iCongDrops[i11] = Spine27_Port9[i11].slice(54,65);
                Spine27_Port9_ierrs[i11] =      Spine27_Port9[i11].slice(65,71);
                Spine27_Port9_obytes[i11] =     Spine27_Port9[i11].slice(71,78);
                Spine27_Port9_oUpkts[i11] =     Spine27_Port9[i11].slice(78,85);
                Spine27_Port9_oBpkts[i11] =     Spine27_Port9[i11].slice(85,92);
                Spine27_Port9_oMpkts[i11] =     Spine27_Port9[i11].slice(92,99);
                Spine27_Port9_oCongDrops[i11] = Spine27_Port9[i11].slice(99,110);
                Spine27_Port9_oerrs[i11] =      Spine27_Port9[i11].slice(110,116);
                Spine27_Port9_mtu_errs[i11] =   Spine27_Port9[i11].slice(116,125);
    
                if( Spine27_Port9_fix[i11].includes("G")){
                    Spine27_Port9_fix[i11] =    Spine27_Port9_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_fix[i11][0] = Spine27_Port9_fix[i11][0]*1000000000;}
            else if(Spine27_Port9_fix[i11].includes("M")){
                    Spine27_Port9_fix[i11] =    Spine27_Port9_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_fix[i11][0] = Spine27_Port9_fix[i11][0]*1000000;}
            else if(Spine27_Port9_fix[i11].includes("K")){
                    Spine27_Port9_fix[i11] =    Spine27_Port9_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_fix[i11][0] = Spine27_Port9_fix[i11][0]*1000;}
            else {  Spine27_Port9_fix[i11] =    Spine27_Port9_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if( Spine27_Port9_iUpkts[i11].includes("G")){
                    Spine27_Port9_iUpkts[i11] =    Spine27_Port9_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iUpkts[i11][0] = Spine27_Port9_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_iUpkts[i11].includes("M")){
                    Spine27_Port9_iUpkts[i11] =    Spine27_Port9_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iUpkts[i11][0] = Spine27_Port9_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port9_iUpkts[i11].includes("K")){
                    Spine27_Port9_iUpkts[i11] =    Spine27_Port9_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iUpkts[i11][0] = Spine27_Port9_iUpkts[i11][0]*1000;}
            else {  Spine27_Port9_iUpkts[i11] =    Spine27_Port9_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                 if(Spine27_Port9_iBpkts[i11].includes("G")){
                    Spine27_Port9_iBpkts[i11] =    Spine27_Port9_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iBpkts[i11][0] = Spine27_Port9_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_iBpkts[i11].includes("M")){
                    Spine27_Port9_iBpkts[i11] =    Spine27_Port9_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iBpkts[i11][0] = Spine27_Port9_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port9_iBpkts[i11].includes("K")){
                    Spine27_Port9_iBpkts[i11] =    Spine27_Port9_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iBpkts[i11][0] = Spine27_Port9_iBpkts[i11][0]*1000;}
            else {  Spine27_Port9_iBpkts[i11] =    Spine27_Port9_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port9_iMpkts[i11].includes("G")){
                    Spine27_Port9_iMpkts[i11] =    Spine27_Port9_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iMpkts[i11][0] = Spine27_Port9_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_iMpkts[i11].includes("M")){
                    Spine27_Port9_iMpkts[i11] =    Spine27_Port9_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iMpkts[i11][0] = Spine27_Port9_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port9_iMpkts[i11].includes("K")){
                    Spine27_Port9_iMpkts[i11] =    Spine27_Port9_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iMpkts[i11][0] = Spine27_Port9_iMpkts[i11][0]*1000;}
            else {  Spine27_Port9_iMpkts[i11] =    Spine27_Port9_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port9_iCongDrops[i11].includes("G")){
                    Spine27_Port9_iCongDrops[i11] =    Spine27_Port9_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iCongDrops[i11][0] = Spine27_Port9_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port9_iCongDrops[i11].includes("M")){
                    Spine27_Port9_iCongDrops[i11] =    Spine27_Port9_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iCongDrops[i11][0] = Spine27_Port9_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port9_iCongDrops[i11].includes("K")){
                    Spine27_Port9_iCongDrops[i11] =    Spine27_Port9_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_iCongDrops[i11][0] = Spine27_Port9_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port9_iCongDrops[i11] =    Spine27_Port9_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port9_ierrs[i11].includes("G")){
                    Spine27_Port9_ierrs[i11] =    Spine27_Port9_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_ierrs[i11][0] = Spine27_Port9_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port9_ierrs[i11].includes("M")){
                    Spine27_Port9_ierrs[i11] =    Spine27_Port9_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_ierrs[i11][0] = Spine27_Port9_ierrs[i11][0]*1000000;}
            else if(Spine27_Port9_ierrs[i11].includes("K")){
                    Spine27_Port9_ierrs[i11] =    Spine27_Port9_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_ierrs[i11][0] = Spine27_Port9_ierrs[i11][0]*1000;}
            else {  Spine27_Port9_ierrs[i11] =    Spine27_Port9_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port9_obytes[i11].includes("G")){
                    Spine27_Port9_obytes[i11] =    Spine27_Port9_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_obytes[i11][0] = Spine27_Port9_obytes[i11][0]*1000000000;}
            else if(Spine27_Port9_obytes[i11].includes("M")){
                    Spine27_Port9_obytes[i11] =    Spine27_Port9_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_obytes[i11][0] = Spine27_Port9_obytes[i11][0]*1000000;}
            else if(Spine27_Port9_obytes[i11].includes("K")){
                    Spine27_Port9_obytes[i11] =    Spine27_Port9_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_obytes[i11][0] = Spine27_Port9_obytes[i11][0]*1000;}
            else {  Spine27_Port9_obytes[i11] =    Spine27_Port9_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                 if(Spine27_Port9_oUpkts[i11].includes("G")){
                    Spine27_Port9_oUpkts[i11] =    Spine27_Port9_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oUpkts[i11][0] = Spine27_Port9_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_oUpkts[i11].includes("M")){
                    Spine27_Port9_oUpkts[i11] =    Spine27_Port9_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oUpkts[i11][0] = Spine27_Port9_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port9_oUpkts[i11].includes("K")){
                    Spine27_Port9_oUpkts[i11] =    Spine27_Port9_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oUpkts[i11][0] = Spine27_Port9_oUpkts[i11][0]*1000;}
            else {  Spine27_Port9_oUpkts[i11] =    Spine27_Port9_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port9_oBpkts[i11].includes("G")){
                    Spine27_Port9_oBpkts[i11] =    Spine27_Port9_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oBpkts[i11][0] = Spine27_Port9_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_oBpkts[i11].includes("M")){
                    Spine27_Port9_oBpkts[i11] =    Spine27_Port9_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oBpkts[i11][0] = Spine27_Port9_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port9_oBpkts[i11].includes("K")){
                    Spine27_Port9_oBpkts[i11] =    Spine27_Port9_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oBpkts[i11][0] = Spine27_Port9_oBpkts[i11][0]*1000;}
            else {  Spine27_Port9_oBpkts[i11] =    Spine27_Port9_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port9_oMpkts[i11].includes("G")){
                    Spine27_Port9_oMpkts[i11] =    Spine27_Port9_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oMpkts[i11][0] = Spine27_Port9_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port9_oMpkts[i11].includes("M")){
                    Spine27_Port9_oMpkts[i11] =    Spine27_Port9_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oMpkts[i11][0] = Spine27_Port9_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port9_oMpkts[i11].includes("K")){
                    Spine27_Port9_oMpkts[i11] =    Spine27_Port9_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oMpkts[i11][0] = Spine27_Port9_oMpkts[i11][0]*1000;}
            else {  Spine27_Port9_oMpkts[i11] =    Spine27_Port9_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port9_oCongDrops[i11].includes("G")){
                    Spine27_Port9_oCongDrops[i11] =    Spine27_Port9_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oCongDrops[i11][0] = Spine27_Port9_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port9_oCongDrops[i11].includes("M")){
                    Spine27_Port9_oCongDrops[i11] =    Spine27_Port9_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oCongDrops[i11][0] = Spine27_Port9_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port9_oCongDrops[i11].includes("K")){
                    Spine27_Port9_oCongDrops[i11] =    Spine27_Port9_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oCongDrops[i11][0] = Spine27_Port9_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port9_oCongDrops[i11] =    Spine27_Port9_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port9_oerrs[i11].includes("G")){
                    Spine27_Port9_oerrs[i11] =    Spine27_Port9_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oerrs[i11][0] = Spine27_Port9_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port9_oerrs[i11].includes("M")){
                    Spine27_Port9_oerrs[i11] =    Spine27_Port9_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oerrs[i11][0] = Spine27_Port9_oerrs[i11][0]*1000000;}
            else if(Spine27_Port9_oerrs[i11].includes("K")){
                    Spine27_Port9_oerrs[i11] =    Spine27_Port9_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_oerrs[i11][0] = Spine27_Port9_oerrs[i11][0]*1000;}
            else {  Spine27_Port9_oerrs[i11] =    Spine27_Port9_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }

                 if(Spine27_Port9_mtu_errs[i11].includes("G")){
                    Spine27_Port9_mtu_errs[i11] =    Spine27_Port9_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_mtu_errs[i11][0] = Spine27_Port9_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port9_mtu_errs[i11].includes("M")){
                    Spine27_Port9_mtu_errs[i11] =    Spine27_Port9_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_mtu_errs[i11][0] = Spine27_Port9_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port9_mtu_errs[i11].includes("K")){
                    Spine27_Port9_mtu_errs[i11] =    Spine27_Port9_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port9_mtu_errs[i11][0] = Spine27_Port9_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port9_mtu_errs[i11] =    Spine27_Port9_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }}

            if(Spine27_Port13[i11] !== undefined){ 
                Spine27_Port13_fix[i11] =        Spine27_Port13[i11].slice(26, 34);
                Spine27_Port13_iUpkts[i11] =     Spine27_Port13[i11].slice(33,40);
                Spine27_Port13_iBpkts[i11] =     Spine27_Port13[i11].slice(40,47);
                Spine27_Port13_iMpkts[i11] =     Spine27_Port13[i11].slice(47,54);
                Spine27_Port13_iCongDrops[i11] = Spine27_Port13[i11].slice(54,65);
                Spine27_Port13_ierrs[i11] =      Spine27_Port13[i11].slice(65,71);
                Spine27_Port13_obytes[i11] =     Spine27_Port13[i11].slice(71,78);
                Spine27_Port13_oUpkts[i11] =     Spine27_Port13[i11].slice(78,85);
                Spine27_Port13_oBpkts[i11] =     Spine27_Port13[i11].slice(85,92);
                Spine27_Port13_oMpkts[i11] =     Spine27_Port13[i11].slice(92,99);
                Spine27_Port13_oCongDrops[i11] = Spine27_Port13[i11].slice(99,110);
                Spine27_Port13_oerrs[i11] =      Spine27_Port13[i11].slice(110,116);
                Spine27_Port13_mtu_errs[i11] =   Spine27_Port13[i11].slice(116,125);
    
                if( Spine27_Port13_fix[i11].includes("G")){
                    Spine27_Port13_fix[i11] =    Spine27_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_fix[i11][0] = Spine27_Port13_fix[i11][0]*1000000000;}
            else if(Spine27_Port13_fix[i11].includes("M")){
                    Spine27_Port13_fix[i11] =    Spine27_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_fix[i11][0] = Spine27_Port13_fix[i11][0]*1000000;}
            else if(Spine27_Port13_fix[i11].includes("K")){
                    Spine27_Port13_fix[i11] =    Spine27_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_fix[i11][0] = Spine27_Port13_fix[i11][0]*1000;}
            else {  Spine27_Port13_fix[i11] =    Spine27_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if( Spine27_Port13_iUpkts[i11].includes("G")){
                    Spine27_Port13_iUpkts[i11] =    Spine27_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iUpkts[i11][0] = Spine27_Port13_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_iUpkts[i11].includes("M")){
                    Spine27_Port13_iUpkts[i11] =    Spine27_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iUpkts[i11][0] = Spine27_Port13_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port13_iUpkts[i11].includes("K")){
                    Spine27_Port13_iUpkts[i11] =    Spine27_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iUpkts[i11][0] = Spine27_Port13_iUpkts[i11][0]*1000;}
            else {  Spine27_Port13_iUpkts[i11] =    Spine27_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                 if(Spine27_Port13_iBpkts[i11].includes("G")){
                    Spine27_Port13_iBpkts[i11] =    Spine27_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iBpkts[i11][0] = Spine27_Port13_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_iBpkts[i11].includes("M")){
                    Spine27_Port13_iBpkts[i11] =    Spine27_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iBpkts[i11][0] = Spine27_Port13_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port13_iBpkts[i11].includes("K")){
                    Spine27_Port13_iBpkts[i11] =    Spine27_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iBpkts[i11][0] = Spine27_Port13_iBpkts[i11][0]*1000;}
            else {  Spine27_Port13_iBpkts[i11] =    Spine27_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                 if(Spine27_Port13_iMpkts[i11].includes("G")){
                    Spine27_Port13_iMpkts[i11] =    Spine27_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iMpkts[i11][0] = Spine27_Port13_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_iMpkts[i11].includes("M")){
                    Spine27_Port13_iMpkts[i11] =    Spine27_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iMpkts[i11][0] = Spine27_Port13_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port13_iMpkts[i11].includes("K")){
                    Spine27_Port13_iMpkts[i11] =    Spine27_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iMpkts[i11][0] = Spine27_Port13_iMpkts[i11][0]*1000;}
            else {  Spine27_Port13_iMpkts[i11] =    Spine27_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port13_iCongDrops[i11].includes("G")){
                    Spine27_Port13_iCongDrops[i11] =    Spine27_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iCongDrops[i11][0] = Spine27_Port13_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port13_iCongDrops[i11].includes("M")){
                    Spine27_Port13_iCongDrops[i11] =    Spine27_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iCongDrops[i11][0] = Spine27_Port13_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port13_iCongDrops[i11].includes("K")){
                    Spine27_Port13_iCongDrops[i11] =    Spine27_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_iCongDrops[i11][0] = Spine27_Port13_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port13_iCongDrops[i11] =    Spine27_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port13_ierrs[i11].includes("G")){
                    Spine27_Port13_ierrs[i11] =    Spine27_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_ierrs[i11][0] = Spine27_Port13_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port13_ierrs[i11].includes("M")){
                    Spine27_Port13_ierrs[i11] =    Spine27_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_ierrs[i11][0] = Spine27_Port13_ierrs[i11][0]*1000000;}
            else if(Spine27_Port13_ierrs[i11].includes("K")){
                    Spine27_Port13_ierrs[i11] =    Spine27_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_ierrs[i11][0] = Spine27_Port13_ierrs[i11][0]*1000;}
            else {  Spine27_Port13_ierrs[i11] =    Spine27_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port13_obytes[i11].includes("G")){
                    Spine27_Port13_obytes[i11] =    Spine27_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_obytes[i11][0] = Spine27_Port13_obytes[i11][0]*1000000000;}
            else if(Spine27_Port13_obytes[i11].includes("M")){
                    Spine27_Port13_obytes[i11] =    Spine27_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_obytes[i11][0] = Spine27_Port13_obytes[i11][0]*1000000;}
            else if(Spine27_Port13_obytes[i11].includes("K")){
                    Spine27_Port13_obytes[i11] =    Spine27_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_obytes[i11][0] = Spine27_Port13_obytes[i11][0]*1000;}
            else {  Spine27_Port13_obytes[i11] =    Spine27_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port13_oUpkts[i11].includes("G")){
                    Spine27_Port13_oUpkts[i11] =    Spine27_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oUpkts[i11][0] = Spine27_Port13_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_oUpkts[i11].includes("M")){
                    Spine27_Port13_oUpkts[i11] =    Spine27_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oUpkts[i11][0] = Spine27_Port13_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port13_oUpkts[i11].includes("K")){
                    Spine27_Port13_oUpkts[i11] =    Spine27_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oUpkts[i11][0] = Spine27_Port13_oUpkts[i11][0]*1000;}
            else {  Spine27_Port13_oUpkts[i11] =    Spine27_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port13_oBpkts[i11].includes("G")){
                    Spine27_Port13_oBpkts[i11] =    Spine27_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oBpkts[i11][0] = Spine27_Port13_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_oBpkts[i11].includes("M")){
                    Spine27_Port13_oBpkts[i11] =    Spine27_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oBpkts[i11][0] = Spine27_Port13_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port13_oBpkts[i11].includes("K")){
                    Spine27_Port13_oBpkts[i11] =    Spine27_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oBpkts[i11][0] = Spine27_Port13_oBpkts[i11][0]*1000;}
            else {  Spine27_Port13_oBpkts[i11] =    Spine27_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port13_oMpkts[i11].includes("G")){
                    Spine27_Port13_oMpkts[i11] =    Spine27_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oMpkts[i11][0] = Spine27_Port13_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port13_oMpkts[i11].includes("M")){
                    Spine27_Port13_oMpkts[i11] =    Spine27_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oMpkts[i11][0] = Spine27_Port13_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port13_oMpkts[i11].includes("K")){
                    Spine27_Port13_oMpkts[i11] =    Spine27_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oMpkts[i11][0] = Spine27_Port13_oMpkts[i11][0]*1000;}
            else {  Spine27_Port13_oMpkts[i11] =    Spine27_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port13_oCongDrops[i11].includes("G")){
                    Spine27_Port13_oCongDrops[i11] =    Spine27_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oCongDrops[i11][0] = Spine27_Port13_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port13_oCongDrops[i11].includes("M")){
                    Spine27_Port13_oCongDrops[i11] =    Spine27_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oCongDrops[i11][0] = Spine27_Port13_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port13_oCongDrops[i11].includes("K")){
                    Spine27_Port13_oCongDrops[i11] =    Spine27_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oCongDrops[i11][0] = Spine27_Port13_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port13_oCongDrops[i11] =    Spine27_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port13_oerrs[i11].includes("G")){
                    Spine27_Port13_oerrs[i11] =    Spine27_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oerrs[i11][0] = Spine27_Port13_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port13_oerrs[i11].includes("M")){
                    Spine27_Port13_oerrs[i11] =    Spine27_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oerrs[i11][0] = Spine27_Port13_oerrs[i11][0]*1000000;}
            else if(Spine27_Port13_oerrs[i11].includes("K")){
                    Spine27_Port13_oerrs[i11] =    Spine27_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_oerrs[i11][0] = Spine27_Port13_oerrs[i11][0]*1000;}
            else {  Spine27_Port13_oerrs[i11] =    Spine27_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }

                 if(Spine27_Port13_mtu_errs[i11].includes("G")){
                    Spine27_Port13_mtu_errs[i11] =    Spine27_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_mtu_errs[i11][0] = Spine27_Port13_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port13_mtu_errs[i11].includes("M")){
                    Spine27_Port13_mtu_errs[i11] =    Spine27_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_mtu_errs[i11][0] = Spine27_Port13_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port13_mtu_errs[i11].includes("K")){
                    Spine27_Port13_mtu_errs[i11] =    Spine27_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port13_mtu_errs[i11][0] = Spine27_Port13_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port13_mtu_errs[i11] =    Spine27_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}

            if(Spine27_Port17[i11] !== undefined){ 
                Spine27_Port17_fix[i11] =        Spine27_Port17[i11].slice(26, 34);
                Spine27_Port17_iUpkts[i11] =     Spine27_Port17[i11].slice(33,40);
                Spine27_Port17_iBpkts[i11] =     Spine27_Port17[i11].slice(40,47);
                Spine27_Port17_iMpkts[i11] =     Spine27_Port17[i11].slice(47,54);
                Spine27_Port17_iCongDrops[i11] = Spine27_Port17[i11].slice(54,65);
                Spine27_Port17_ierrs[i11] =      Spine27_Port17[i11].slice(65,71);
                Spine27_Port17_obytes[i11] =     Spine27_Port17[i11].slice(71,78);
                Spine27_Port17_oUpkts[i11] =     Spine27_Port17[i11].slice(78,85);
                Spine27_Port17_oBpkts[i11] =     Spine27_Port17[i11].slice(85,92);
                Spine27_Port17_oMpkts[i11] =     Spine27_Port17[i11].slice(92,99);
                Spine27_Port17_oCongDrops[i11] = Spine27_Port17[i11].slice(99,110);
                Spine27_Port17_oerrs[i11] =      Spine27_Port17[i11].slice(110,116);
                Spine27_Port17_mtu_errs[i11] =   Spine27_Port17[i11].slice(116,125);
    
                if( Spine27_Port17_fix[i11].includes("G")){
                    Spine27_Port17_fix[i11] =    Spine27_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_fix[i11][0] = Spine27_Port17_fix[i11][0]*1000000000;}
            else if(Spine27_Port17_fix[i11].includes("M")){
                    Spine27_Port17_fix[i11] =    Spine27_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_fix[i11][0] = Spine27_Port17_fix[i11][0]*1000000;}
            else if(Spine27_Port17_fix[i11].includes("K")){
                    Spine27_Port17_fix[i11] =    Spine27_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_fix[i11][0] = Spine27_Port17_fix[i11][0]*1000;}
            else {  Spine27_Port17_fix[i11] =    Spine27_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                if( Spine27_Port17_iUpkts[i11].includes("G")){
                    Spine27_Port17_iUpkts[i11] =    Spine27_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iUpkts[i11][0] = Spine27_Port17_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_iUpkts[i11].includes("M")){
                    Spine27_Port17_iUpkts[i11] =    Spine27_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iUpkts[i11][0] = Spine27_Port17_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port17_iUpkts[i11].includes("K")){
                    Spine27_Port17_iUpkts[i11] =    Spine27_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iUpkts[i11][0] = Spine27_Port17_iUpkts[i11][0]*1000;}
            else {  Spine27_Port17_iUpkts[i11] =    Spine27_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                 if(Spine27_Port17_iBpkts[i11].includes("G")){
                    Spine27_Port17_iBpkts[i11] =    Spine27_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iBpkts[i11][0] = Spine27_Port17_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_iBpkts[i11].includes("M")){
                    Spine27_Port17_iBpkts[i11] =    Spine27_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iBpkts[i11][0] = Spine27_Port17_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port17_iBpkts[i11].includes("K")){
                    Spine27_Port17_iBpkts[i11] =    Spine27_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iBpkts[i11][0] = Spine27_Port17_iBpkts[i11][0]*1000;}
            else {  Spine27_Port17_iBpkts[i11] =    Spine27_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port17_iMpkts[i11].includes("G")){
                    Spine27_Port17_iMpkts[i11] =    Spine27_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iMpkts[i11][0] = Spine27_Port17_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_iMpkts[i11].includes("M")){
                    Spine27_Port17_iMpkts[i11] =    Spine27_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iMpkts[i11][0] = Spine27_Port17_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port17_iMpkts[i11].includes("K")){
                    Spine27_Port17_iMpkts[i11] =    Spine27_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iMpkts[i11][0] = Spine27_Port17_iMpkts[i11][0]*1000;}
            else {  Spine27_Port17_iMpkts[i11] =    Spine27_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port17_iCongDrops[i11].includes("G")){
                    Spine27_Port17_iCongDrops[i11] =    Spine27_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iCongDrops[i11][0] = Spine27_Port17_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port17_iCongDrops[i11].includes("M")){
                    Spine27_Port17_iCongDrops[i11] =    Spine27_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iCongDrops[i11][0] = Spine27_Port17_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port17_iCongDrops[i11].includes("K")){
                    Spine27_Port17_iCongDrops[i11] =    Spine27_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_iCongDrops[i11][0] = Spine27_Port17_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port17_iCongDrops[i11] =    Spine27_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port17_ierrs[i11].includes("G")){
                    Spine27_Port17_ierrs[i11] =    Spine27_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_ierrs[i11][0] = Spine27_Port17_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port17_ierrs[i11].includes("M")){
                    Spine27_Port17_ierrs[i11] =    Spine27_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_ierrs[i11][0] = Spine27_Port17_ierrs[i11][0]*1000000;}
            else if(Spine27_Port17_ierrs[i11].includes("K")){
                    Spine27_Port17_ierrs[i11] =    Spine27_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_ierrs[i11][0] = Spine27_Port17_ierrs[i11][0]*1000;}
            else {  Spine27_Port17_ierrs[i11] =    Spine27_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port17_obytes[i11].includes("G")){
                    Spine27_Port17_obytes[i11] =    Spine27_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_obytes[i11][0] = Spine27_Port17_obytes[i11][0]*1000000000;}
            else if(Spine27_Port17_obytes[i11].includes("M")){
                    Spine27_Port17_obytes[i11] =    Spine27_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_obytes[i11][0] = Spine27_Port17_obytes[i11][0]*1000000;}
            else if(Spine27_Port17_obytes[i11].includes("K")){
                    Spine27_Port17_obytes[i11] =    Spine27_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_obytes[i11][0] = Spine27_Port17_obytes[i11][0]*1000;}
            else {  Spine27_Port17_obytes[i11] =    Spine27_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port17_oUpkts[i11].includes("G")){
                    Spine27_Port17_oUpkts[i11] =    Spine27_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oUpkts[i11][0] = Spine27_Port17_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_oUpkts[i11].includes("M")){
                    Spine27_Port17_oUpkts[i11] =    Spine27_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oUpkts[i11][0] = Spine27_Port17_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port17_oUpkts[i11].includes("K")){
                    Spine27_Port17_oUpkts[i11] =    Spine27_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oUpkts[i11][0] = Spine27_Port17_oUpkts[i11][0]*1000;}
            else {  Spine27_Port17_oUpkts[i11] =    Spine27_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port17_oBpkts[i11].includes("G")){
                    Spine27_Port17_oBpkts[i11] =    Spine27_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oBpkts[i11][0] = Spine27_Port17_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_oBpkts[i11].includes("M")){
                    Spine27_Port17_oBpkts[i11] =    Spine27_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oBpkts[i11][0] = Spine27_Port17_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port17_oBpkts[i11].includes("K")){
                    Spine27_Port17_oBpkts[i11] =    Spine27_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oBpkts[i11][0] = Spine27_Port17_oBpkts[i11][0]*1000;}
            else {  Spine27_Port17_oBpkts[i11] =    Spine27_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port17_oMpkts[i11].includes("G")){
                    Spine27_Port17_oMpkts[i11] =    Spine27_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oMpkts[i11][0] = Spine27_Port17_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port17_oMpkts[i11].includes("M")){
                    Spine27_Port17_oMpkts[i11] =    Spine27_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oMpkts[i11][0] = Spine27_Port17_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port17_oMpkts[i11].includes("K")){
                    Spine27_Port17_oMpkts[i11] =    Spine27_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oMpkts[i11][0] = Spine27_Port17_oMpkts[i11][0]*1000;}
            else {  Spine27_Port17_oMpkts[i11] =    Spine27_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port17_oCongDrops[i11].includes("G")){
                    Spine27_Port17_oCongDrops[i11] =    Spine27_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oCongDrops[i11][0] = Spine27_Port17_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port17_oCongDrops[i11].includes("M")){
                    Spine27_Port17_oCongDrops[i11] =    Spine27_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oCongDrops[i11][0] = Spine27_Port17_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port17_oCongDrops[i11].includes("K")){
                    Spine27_Port17_oCongDrops[i11] =    Spine27_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oCongDrops[i11][0] = Spine27_Port17_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port17_oCongDrops[i11] =    Spine27_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port17_oerrs[i11].includes("G")){
                    Spine27_Port17_oerrs[i11] =    Spine27_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oerrs[i11][0] = Spine27_Port17_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port17_oerrs[i11].includes("M")){
                    Spine27_Port17_oerrs[i11] =    Spine27_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oerrs[i11][0] = Spine27_Port17_oerrs[i11][0]*1000000;}
            else if(Spine27_Port17_oerrs[i11].includes("K")){
                    Spine27_Port17_oerrs[i11] =    Spine27_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_oerrs[i11][0] = Spine27_Port17_oerrs[i11][0]*1000;}
            else {  Spine27_Port17_oerrs[i11] =    Spine27_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }

                 if(Spine27_Port17_mtu_errs[i11].includes("G")){
                    Spine27_Port17_mtu_errs[i11] =    Spine27_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_mtu_errs[i11][0] = Spine27_Port17_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port17_mtu_errs[i11].includes("M")){
                    Spine27_Port17_mtu_errs[i11] =    Spine27_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_mtu_errs[i11][0] = Spine27_Port17_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port17_mtu_errs[i11].includes("K")){
                    Spine27_Port17_mtu_errs[i11] =    Spine27_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port17_mtu_errs[i11][0] = Spine27_Port17_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port17_mtu_errs[i11] =    Spine27_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }}

            if(Spine27_Port21[i11] !== undefined){ 
                Spine27_Port21_fix[i11] =        Spine27_Port21[i11].slice(26, 34);
                Spine27_Port21_iUpkts[i11] =     Spine27_Port21[i11].slice(33,40);
                Spine27_Port21_iBpkts[i11] =     Spine27_Port21[i11].slice(40,47);
                Spine27_Port21_iMpkts[i11] =     Spine27_Port21[i11].slice(47,54);
                Spine27_Port21_iCongDrops[i11] = Spine27_Port21[i11].slice(54,65);
                Spine27_Port21_ierrs[i11] =      Spine27_Port21[i11].slice(65,71);
                Spine27_Port21_obytes[i11] =     Spine27_Port21[i11].slice(71,78);
                Spine27_Port21_oUpkts[i11] =     Spine27_Port21[i11].slice(78,85);
                Spine27_Port21_oBpkts[i11] =     Spine27_Port21[i11].slice(85,92);
                Spine27_Port21_oMpkts[i11] =     Spine27_Port21[i11].slice(92,99);
                Spine27_Port21_oCongDrops[i11] = Spine27_Port21[i11].slice(99,110);
                Spine27_Port21_oerrs[i11] =      Spine27_Port21[i11].slice(110,116);
                Spine27_Port21_mtu_errs[i11] =   Spine27_Port21[i11].slice(116,125);
                
                if( Spine27_Port21_fix[i11].includes("G")){
                    Spine27_Port21_fix[i11] =    Spine27_Port21_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_fix[i11][0] = Spine27_Port21_fix[i11][0]*1000000000;}
            else if(Spine27_Port21_fix[i11].includes("M")){
                    Spine27_Port21_fix[i11] =    Spine27_Port21_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_fix[i11][0] = Spine27_Port21_fix[i11][0]*1000000;}
            else if(Spine27_Port21_fix[i11].includes("K")){
                    Spine27_Port21_fix[i11] =    Spine27_Port21_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_fix[i11][0] = Spine27_Port21_fix[i11][0]*1000;}
            else {  Spine27_Port21_fix[i11] =    Spine27_Port21_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                if( Spine27_Port21_iUpkts[i11].includes("G")){
                    Spine27_Port21_iUpkts[i11] =    Spine27_Port21_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iUpkts[i11][0] = Spine27_Port21_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_iUpkts[i11].includes("M")){
                    Spine27_Port21_iUpkts[i11] =    Spine27_Port21_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iUpkts[i11][0] = Spine27_Port21_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port21_iUpkts[i11].includes("K")){
                    Spine27_Port21_iUpkts[i11] =    Spine27_Port21_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iUpkts[i11][0] = Spine27_Port21_iUpkts[i11][0]*1000;}
            else {  Spine27_Port21_iUpkts[i11] =    Spine27_Port21_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                 if(Spine27_Port21_iBpkts[i11].includes("G")){
                    Spine27_Port21_iBpkts[i11] =    Spine27_Port21_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iBpkts[i11][0] = Spine27_Port21_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_iBpkts[i11].includes("M")){
                    Spine27_Port21_iBpkts[i11] =    Spine27_Port21_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iBpkts[i11][0] = Spine27_Port21_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port21_iBpkts[i11].includes("K")){
                    Spine27_Port21_iBpkts[i11] =    Spine27_Port21_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iBpkts[i11][0] = Spine27_Port21_iBpkts[i11][0]*1000;}
            else {  Spine27_Port21_iBpkts[i11] =    Spine27_Port21_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port21_iMpkts[i11].includes("G")){
                    Spine27_Port21_iMpkts[i11] =    Spine27_Port21_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iMpkts[i11][0] = Spine27_Port21_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_iMpkts[i11].includes("M")){
                    Spine27_Port21_iMpkts[i11] =    Spine27_Port21_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iMpkts[i11][0] = Spine27_Port21_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port21_iMpkts[i11].includes("K")){
                    Spine27_Port21_iMpkts[i11] =    Spine27_Port21_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iMpkts[i11][0] = Spine27_Port21_iMpkts[i11][0]*1000;}
            else {  Spine27_Port21_iMpkts[i11] =    Spine27_Port21_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port21_iCongDrops[i11].includes("G")){
                    Spine27_Port21_iCongDrops[i11] =    Spine27_Port21_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iCongDrops[i11][0] = Spine27_Port21_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port21_iCongDrops[i11].includes("M")){
                    Spine27_Port21_iCongDrops[i11] =    Spine27_Port21_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iCongDrops[i11][0] = Spine27_Port21_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port21_iCongDrops[i11].includes("K")){
                    Spine27_Port21_iCongDrops[i11] =    Spine27_Port21_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_iCongDrops[i11][0] = Spine27_Port21_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port21_iCongDrops[i11] =    Spine27_Port21_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port21_ierrs[i11].includes("G")){
                    Spine27_Port21_ierrs[i11] =    Spine27_Port21_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_ierrs[i11][0] = Spine27_Port21_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port21_ierrs[i11].includes("M")){
                    Spine27_Port21_ierrs[i11] =    Spine27_Port21_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_ierrs[i11][0] = Spine27_Port21_ierrs[i11][0]*1000000;}
            else if(Spine27_Port21_ierrs[i11].includes("K")){
                    Spine27_Port21_ierrs[i11] =    Spine27_Port21_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_ierrs[i11][0] = Spine27_Port21_ierrs[i11][0]*1000;}
            else {  Spine27_Port21_ierrs[i11] =    Spine27_Port21_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port21_obytes[i11].includes("G")){
                    Spine27_Port21_obytes[i11] =    Spine27_Port21_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_obytes[i11][0] = Spine27_Port21_obytes[i11][0]*1000000000;}
            else if(Spine27_Port21_obytes[i11].includes("M")){
                    Spine27_Port21_obytes[i11] =    Spine27_Port21_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_obytes[i11][0] = Spine27_Port21_obytes[i11][0]*1000000;}
            else if(Spine27_Port21_obytes[i11].includes("K")){
                    Spine27_Port21_obytes[i11] =    Spine27_Port21_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_obytes[i11][0] = Spine27_Port21_obytes[i11][0]*1000;}
            else {  Spine27_Port21_obytes[i11] =    Spine27_Port21_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                 if(Spine27_Port21_oUpkts[i11].includes("G")){
                    Spine27_Port21_oUpkts[i11] =    Spine27_Port21_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oUpkts[i11][0] = Spine27_Port21_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_oUpkts[i11].includes("M")){
                    Spine27_Port21_oUpkts[i11] =    Spine27_Port21_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oUpkts[i11][0] = Spine27_Port21_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port21_oUpkts[i11].includes("K")){
                    Spine27_Port21_oUpkts[i11] =    Spine27_Port21_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oUpkts[i11][0] = Spine27_Port21_oUpkts[i11][0]*1000;}
            else {  Spine27_Port21_oUpkts[i11] =    Spine27_Port21_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port21_oBpkts[i11].includes("G")){
                    Spine27_Port21_oBpkts[i11] =    Spine27_Port21_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oBpkts[i11][0] = Spine27_Port21_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_oBpkts[i11].includes("M")){
                    Spine27_Port21_oBpkts[i11] =    Spine27_Port21_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oBpkts[i11][0] = Spine27_Port21_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port21_oBpkts[i11].includes("K")){
                    Spine27_Port21_oBpkts[i11] =    Spine27_Port21_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oBpkts[i11][0] = Spine27_Port21_oBpkts[i11][0]*1000;}
            else {  Spine27_Port21_oBpkts[i11] =    Spine27_Port21_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port21_oMpkts[i11].includes("G")){
                    Spine27_Port21_oMpkts[i11] =    Spine27_Port21_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oMpkts[i11][0] = Spine27_Port21_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port21_oMpkts[i11].includes("M")){
                    Spine27_Port21_oMpkts[i11] =    Spine27_Port21_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oMpkts[i11][0] = Spine27_Port21_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port21_oMpkts[i11].includes("K")){
                    Spine27_Port21_oMpkts[i11] =    Spine27_Port21_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oMpkts[i11][0] = Spine27_Port21_oMpkts[i11][0]*1000;}
            else {  Spine27_Port21_oMpkts[i11] =    Spine27_Port21_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port21_oCongDrops[i11].includes("G")){
                    Spine27_Port21_oCongDrops[i11] =    Spine27_Port21_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oCongDrops[i11][0] = Spine27_Port21_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port21_oCongDrops[i11].includes("M")){
                    Spine27_Port21_oCongDrops[i11] =    Spine27_Port21_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oCongDrops[i11][0] = Spine27_Port21_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port21_oCongDrops[i11].includes("K")){
                    Spine27_Port21_oCongDrops[i11] =    Spine27_Port21_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oCongDrops[i11][0] = Spine27_Port21_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port21_oCongDrops[i11] =    Spine27_Port21_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port21_oerrs[i11].includes("G")){
                    Spine27_Port21_oerrs[i11] =    Spine27_Port21_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oerrs[i11][0] = Spine27_Port21_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port21_oerrs[i11].includes("M")){
                    Spine27_Port21_oerrs[i11] =    Spine27_Port21_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oerrs[i11][0] = Spine27_Port21_oerrs[i11][0]*1000000;}
            else if(Spine27_Port21_oerrs[i11].includes("K")){
                    Spine27_Port21_oerrs[i11] =    Spine27_Port21_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_oerrs[i11][0] = Spine27_Port21_oerrs[i11][0]*1000;}
            else {  Spine27_Port21_oerrs[i11] =    Spine27_Port21_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }

                 if(Spine27_Port21_mtu_errs[i11].includes("G")){
                    Spine27_Port21_mtu_errs[i11] =    Spine27_Port21_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_mtu_errs[i11][0] = Spine27_Port21_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port21_mtu_errs[i11].includes("M")){
                    Spine27_Port21_mtu_errs[i11] =    Spine27_Port21_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_mtu_errs[i11][0] = Spine27_Port21_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port21_mtu_errs[i11].includes("K")){
                    Spine27_Port21_mtu_errs[i11] =    Spine27_Port21_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port21_mtu_errs[i11][0] = Spine27_Port21_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port21_mtu_errs[i11] =    Spine27_Port21_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}

            if(Spine27_Port25[i11] !== undefined){ 
                Spine27_Port25_fix[i11] =        Spine27_Port25[i11].slice(26, 34);
                Spine27_Port25_iUpkts[i11] =     Spine27_Port25[i11].slice(33,40);
                Spine27_Port25_iBpkts[i11] =     Spine27_Port25[i11].slice(40,47);
                Spine27_Port25_iMpkts[i11] =     Spine27_Port25[i11].slice(47,54);
                Spine27_Port25_iCongDrops[i11] = Spine27_Port25[i11].slice(54,65);
                Spine27_Port25_ierrs[i11] =      Spine27_Port25[i11].slice(65,71);
                Spine27_Port25_obytes[i11] =     Spine27_Port25[i11].slice(71,78);
                Spine27_Port25_oUpkts[i11] =     Spine27_Port25[i11].slice(78,85);
                Spine27_Port25_oBpkts[i11] =     Spine27_Port25[i11].slice(85,92);
                Spine27_Port25_oMpkts[i11] =     Spine27_Port25[i11].slice(92,99);
                Spine27_Port25_oCongDrops[i11] = Spine27_Port25[i11].slice(99,110);
                Spine27_Port25_oerrs[i11] =      Spine27_Port25[i11].slice(110,116);
                Spine27_Port25_mtu_errs[i11] =   Spine27_Port25[i11].slice(116,125);
                
                if( Spine27_Port25_fix[i11].includes("G")){
                    Spine27_Port25_fix[i11] =    Spine27_Port25_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_fix[i11][0] = Spine27_Port25_fix[i11][0]*1000000000;}
            else if(Spine27_Port25_fix[i11].includes("M")){
                    Spine27_Port25_fix[i11] =    Spine27_Port25_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_fix[i11][0] = Spine27_Port25_fix[i11][0]*1000000;}
            else if(Spine27_Port25_fix[i11].includes("K")){
                    Spine27_Port25_fix[i11] =    Spine27_Port25_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_fix[i11][0] = Spine27_Port25_fix[i11][0]*1000;}
            else {  Spine27_Port25_fix[i11] =    Spine27_Port25_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                if( Spine27_Port25_iUpkts[i11].includes("G")){
                    Spine27_Port25_iUpkts[i11] =    Spine27_Port25_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iUpkts[i11][0] = Spine27_Port25_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_iUpkts[i11].includes("M")){
                    Spine27_Port25_iUpkts[i11] =    Spine27_Port25_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iUpkts[i11][0] = Spine27_Port25_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port25_iUpkts[i11].includes("K")){
                    Spine27_Port25_iUpkts[i11] =    Spine27_Port25_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iUpkts[i11][0] = Spine27_Port25_iUpkts[i11][0]*1000;}
            else {  Spine27_Port25_iUpkts[i11] =    Spine27_Port25_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
            
                 if(Spine27_Port25_iBpkts[i11].includes("G")){
                    Spine27_Port25_iBpkts[i11] =    Spine27_Port25_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iBpkts[i11][0] = Spine27_Port25_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_iBpkts[i11].includes("M")){
                    Spine27_Port25_iBpkts[i11] =    Spine27_Port25_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iBpkts[i11][0] = Spine27_Port25_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port25_iBpkts[i11].includes("K")){
                    Spine27_Port25_iBpkts[i11] =    Spine27_Port25_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iBpkts[i11][0] = Spine27_Port25_iBpkts[i11][0]*1000;}
            else {  Spine27_Port25_iBpkts[i11] =    Spine27_Port25_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                 if(Spine27_Port25_iMpkts[i11].includes("G")){
                    Spine27_Port25_iMpkts[i11] =    Spine27_Port25_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iMpkts[i11][0] = Spine27_Port25_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_iMpkts[i11].includes("M")){
                    Spine27_Port25_iMpkts[i11] =    Spine27_Port25_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iMpkts[i11][0] = Spine27_Port25_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port25_iMpkts[i11].includes("K")){
                    Spine27_Port25_iMpkts[i11] =    Spine27_Port25_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iMpkts[i11][0] = Spine27_Port25_iMpkts[i11][0]*1000;}
            else {  Spine27_Port25_iMpkts[i11] =    Spine27_Port25_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port25_iCongDrops[i11].includes("G")){
                    Spine27_Port25_iCongDrops[i11] =    Spine27_Port25_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iCongDrops[i11][0] = Spine27_Port25_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port25_iCongDrops[i11].includes("M")){
                    Spine27_Port25_iCongDrops[i11] =    Spine27_Port25_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iCongDrops[i11][0] = Spine27_Port25_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port25_iCongDrops[i11].includes("K")){
                    Spine27_Port25_iCongDrops[i11] =    Spine27_Port25_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_iCongDrops[i11][0] = Spine27_Port25_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port25_iCongDrops[i11] =    Spine27_Port25_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port25_ierrs[i11].includes("G")){
                    Spine27_Port25_ierrs[i11] =    Spine27_Port25_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_ierrs[i11][0] = Spine27_Port25_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port25_ierrs[i11].includes("M")){
                    Spine27_Port25_ierrs[i11] =    Spine27_Port25_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_ierrs[i11][0] = Spine27_Port25_ierrs[i11][0]*1000000;}
            else if(Spine27_Port25_ierrs[i11].includes("K")){
                    Spine27_Port25_ierrs[i11] =    Spine27_Port25_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_ierrs[i11][0] = Spine27_Port25_ierrs[i11][0]*1000;}
            else {  Spine27_Port25_ierrs[i11] =    Spine27_Port25_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port25_obytes[i11].includes("G")){
                    Spine27_Port25_obytes[i11] =    Spine27_Port25_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_obytes[i11][0] = Spine27_Port25_obytes[i11][0]*1000000000;}
            else if(Spine27_Port25_obytes[i11].includes("M")){
                    Spine27_Port25_obytes[i11] =    Spine27_Port25_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_obytes[i11][0] = Spine27_Port25_obytes[i11][0]*1000000;}
            else if(Spine27_Port25_obytes[i11].includes("K")){
                    Spine27_Port25_obytes[i11] =    Spine27_Port25_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_obytes[i11][0] = Spine27_Port25_obytes[i11][0]*1000;}
            else {  Spine27_Port25_obytes[i11] =    Spine27_Port25_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port25_oUpkts[i11].includes("G")){
                    Spine27_Port25_oUpkts[i11] =    Spine27_Port25_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oUpkts[i11][0] = Spine27_Port25_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_oUpkts[i11].includes("M")){
                    Spine27_Port25_oUpkts[i11] =    Spine27_Port25_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oUpkts[i11][0] = Spine27_Port25_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port25_oUpkts[i11].includes("K")){
                    Spine27_Port25_oUpkts[i11] =    Spine27_Port25_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oUpkts[i11][0] = Spine27_Port25_oUpkts[i11][0]*1000;}
            else {  Spine27_Port25_oUpkts[i11] =    Spine27_Port25_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port25_oBpkts[i11].includes("G")){
                    Spine27_Port25_oBpkts[i11] =    Spine27_Port25_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oBpkts[i11][0] = Spine27_Port25_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_oBpkts[i11].includes("M")){
                    Spine27_Port25_oBpkts[i11] =    Spine27_Port25_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oBpkts[i11][0] = Spine27_Port25_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port25_oBpkts[i11].includes("K")){
                    Spine27_Port25_oBpkts[i11] =    Spine27_Port25_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oBpkts[i11][0] = Spine27_Port25_oBpkts[i11][0]*1000;}
            else {  Spine27_Port25_oBpkts[i11] =    Spine27_Port25_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port25_oMpkts[i11].includes("G")){
                    Spine27_Port25_oMpkts[i11] =    Spine27_Port25_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oMpkts[i11][0] = Spine27_Port25_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port25_oMpkts[i11].includes("M")){
                    Spine27_Port25_oMpkts[i11] =    Spine27_Port25_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oMpkts[i11][0] = Spine27_Port25_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port25_oMpkts[i11].includes("K")){
                    Spine27_Port25_oMpkts[i11] =    Spine27_Port25_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oMpkts[i11][0] = Spine27_Port25_oMpkts[i11][0]*1000;}
            else {  Spine27_Port25_oMpkts[i11] =    Spine27_Port25_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port25_oCongDrops[i11].includes("G")){
                    Spine27_Port25_oCongDrops[i11] =    Spine27_Port25_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oCongDrops[i11][0] = Spine27_Port25_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port25_oCongDrops[i11].includes("M")){
                    Spine27_Port25_oCongDrops[i11] =    Spine27_Port25_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oCongDrops[i11][0] = Spine27_Port25_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port25_oCongDrops[i11].includes("K")){
                    Spine27_Port25_oCongDrops[i11] =    Spine27_Port25_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oCongDrops[i11][0] = Spine27_Port25_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port25_oCongDrops[i11] =    Spine27_Port25_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port25_oerrs[i11].includes("G")){
                    Spine27_Port25_oerrs[i11] =    Spine27_Port25_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oerrs[i11][0] = Spine27_Port25_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port25_oerrs[i11].includes("M")){
                    Spine27_Port25_oerrs[i11] =    Spine27_Port25_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oerrs[i11][0] = Spine27_Port25_oerrs[i11][0]*1000000;}
            else if(Spine27_Port25_oerrs[i11].includes("K")){
                    Spine27_Port25_oerrs[i11] =    Spine27_Port25_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_oerrs[i11][0] = Spine27_Port25_oerrs[i11][0]*1000;}
            else {  Spine27_Port25_oerrs[i11] =    Spine27_Port25_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }

                 if(Spine27_Port25_mtu_errs[i11].includes("G")){
                    Spine27_Port25_mtu_errs[i11] =    Spine27_Port25_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_mtu_errs[i11][0] = Spine27_Port25_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port25_mtu_errs[i11].includes("M")){
                    Spine27_Port25_mtu_errs[i11] =    Spine27_Port25_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_mtu_errs[i11][0] = Spine27_Port25_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port25_mtu_errs[i11].includes("K")){
                    Spine27_Port25_mtu_errs[i11] =    Spine27_Port25_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port25_mtu_errs[i11][0] = Spine27_Port25_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port25_mtu_errs[i11] =    Spine27_Port25_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }}

            if(Spine27_Port29[i11] !== undefined){ 
                Spine27_Port29_fix[i11] =        Spine27_Port29[i11].slice(26, 34);
                Spine27_Port29_iUpkts[i11] =     Spine27_Port29[i11].slice(33,40);
                Spine27_Port29_iBpkts[i11] =     Spine27_Port29[i11].slice(40,47);
                Spine27_Port29_iMpkts[i11] =     Spine27_Port29[i11].slice(47,54);
                Spine27_Port29_iCongDrops[i11] = Spine27_Port29[i11].slice(54,65);
                Spine27_Port29_ierrs[i11] =      Spine27_Port29[i11].slice(65,71);
                Spine27_Port29_obytes[i11] =     Spine27_Port29[i11].slice(71,78);
                Spine27_Port29_oUpkts[i11] =     Spine27_Port29[i11].slice(78,85);
                Spine27_Port29_oBpkts[i11] =     Spine27_Port29[i11].slice(85,92);
                Spine27_Port29_oMpkts[i11] =     Spine27_Port29[i11].slice(92,99);
                Spine27_Port29_oCongDrops[i11] = Spine27_Port29[i11].slice(99,110);
                Spine27_Port29_oerrs[i11] =      Spine27_Port29[i11].slice(110,116);
                Spine27_Port29_mtu_errs[i11] =   Spine27_Port29[i11].slice(116,125);
                
                if( Spine27_Port29_fix[i11].includes("G")){
                    Spine27_Port29_fix[i11] =    Spine27_Port29_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_fix[i11][0] = Spine27_Port29_fix[i11][0]*1000000000;}
            else if(Spine27_Port29_fix[i11].includes("M")){
                    Spine27_Port29_fix[i11] =    Spine27_Port29_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_fix[i11][0] = Spine27_Port29_fix[i11][0]*1000000;}
            else if(Spine27_Port29_fix[i11].includes("K")){
                    Spine27_Port29_fix[i11] =    Spine27_Port29_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_fix[i11][0] = Spine27_Port29_fix[i11][0]*1000;}
            else {  Spine27_Port29_fix[i11] =    Spine27_Port29_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                if( Spine27_Port29_iUpkts[i11].includes("G")){
                    Spine27_Port29_iUpkts[i11] =    Spine27_Port29_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iUpkts[i11][0] = Spine27_Port29_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_iUpkts[i11].includes("M")){
                    Spine27_Port29_iUpkts[i11] =    Spine27_Port29_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iUpkts[i11][0] = Spine27_Port29_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port29_iUpkts[i11].includes("K")){
                    Spine27_Port29_iUpkts[i11] =    Spine27_Port29_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iUpkts[i11][0] = Spine27_Port29_iUpkts[i11][0]*1000;}
            else {  Spine27_Port29_iUpkts[i11] =    Spine27_Port29_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
            
                 if(Spine27_Port29_iBpkts[i11].includes("G")){
                    Spine27_Port29_iBpkts[i11] =    Spine27_Port29_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iBpkts[i11][0] = Spine27_Port29_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_iBpkts[i11].includes("M")){
                    Spine27_Port29_iBpkts[i11] =    Spine27_Port29_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iBpkts[i11][0] = Spine27_Port29_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port29_iBpkts[i11].includes("K")){
                    Spine27_Port29_iBpkts[i11] =    Spine27_Port29_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iBpkts[i11][0] = Spine27_Port29_iBpkts[i11][0]*1000;}
            else {  Spine27_Port29_iBpkts[i11] =    Spine27_Port29_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
                
                 if(Spine27_Port29_iMpkts[i11].includes("G")){
                    Spine27_Port29_iMpkts[i11] =    Spine27_Port29_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iMpkts[i11][0] = Spine27_Port29_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_iMpkts[i11].includes("M")){
                    Spine27_Port29_iMpkts[i11] =    Spine27_Port29_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iMpkts[i11][0] = Spine27_Port29_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port29_iMpkts[i11].includes("K")){
                    Spine27_Port29_iMpkts[i11] =    Spine27_Port29_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iMpkts[i11][0] = Spine27_Port29_iMpkts[i11][0]*1000;}
            else {  Spine27_Port29_iMpkts[i11] =    Spine27_Port29_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port29_iCongDrops[i11].includes("G")){
                    Spine27_Port29_iCongDrops[i11] =    Spine27_Port29_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iCongDrops[i11][0] = Spine27_Port29_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port29_iCongDrops[i11].includes("M")){
                    Spine27_Port29_iCongDrops[i11] =    Spine27_Port29_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iCongDrops[i11][0] = Spine27_Port29_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port29_iCongDrops[i11].includes("K")){
                    Spine27_Port29_iCongDrops[i11] =    Spine27_Port29_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_iCongDrops[i11][0] = Spine27_Port29_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port29_iCongDrops[i11] =    Spine27_Port29_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port29_ierrs[i11].includes("G")){
                    Spine27_Port29_ierrs[i11] =    Spine27_Port29_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_ierrs[i11][0] = Spine27_Port29_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port29_ierrs[i11].includes("M")){
                    Spine27_Port29_ierrs[i11] =    Spine27_Port29_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_ierrs[i11][0] = Spine27_Port29_ierrs[i11][0]*1000000;}
            else if(Spine27_Port29_ierrs[i11].includes("K")){
                    Spine27_Port29_ierrs[i11] =    Spine27_Port29_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_ierrs[i11][0] = Spine27_Port29_ierrs[i11][0]*1000;}
            else {  Spine27_Port29_ierrs[i11] =    Spine27_Port29_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port29_obytes[i11].includes("G")){
                    Spine27_Port29_obytes[i11] =    Spine27_Port29_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_obytes[i11][0] = Spine27_Port29_obytes[i11][0]*1000000000;}
            else if(Spine27_Port29_obytes[i11].includes("M")){
                    Spine27_Port29_obytes[i11] =    Spine27_Port29_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_obytes[i11][0] = Spine27_Port29_obytes[i11][0]*1000000;}
            else if(Spine27_Port29_obytes[i11].includes("K")){
                    Spine27_Port29_obytes[i11] =    Spine27_Port29_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_obytes[i11][0] = Spine27_Port29_obytes[i11][0]*1000;}
            else {  Spine27_Port29_obytes[i11] =    Spine27_Port29_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
                
                 if(Spine27_Port29_oUpkts[i11].includes("G")){
                    Spine27_Port29_oUpkts[i11] =    Spine27_Port29_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oUpkts[i11][0] = Spine27_Port29_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_oUpkts[i11].includes("M")){
                    Spine27_Port29_oUpkts[i11] =    Spine27_Port29_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oUpkts[i11][0] = Spine27_Port29_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port29_oUpkts[i11].includes("K")){
                    Spine27_Port29_oUpkts[i11] =    Spine27_Port29_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oUpkts[i11][0] = Spine27_Port29_oUpkts[i11][0]*1000;}
            else {  Spine27_Port29_oUpkts[i11] =    Spine27_Port29_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port29_oBpkts[i11].includes("G")){
                    Spine27_Port29_oBpkts[i11] =    Spine27_Port29_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oBpkts[i11][0] = Spine27_Port29_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_oBpkts[i11].includes("M")){
                    Spine27_Port29_oBpkts[i11] =    Spine27_Port29_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oBpkts[i11][0] = Spine27_Port29_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port29_oBpkts[i11].includes("K")){
                    Spine27_Port29_oBpkts[i11] =    Spine27_Port29_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oBpkts[i11][0] = Spine27_Port29_oBpkts[i11][0]*1000;}
            else {  Spine27_Port29_oBpkts[i11] =    Spine27_Port29_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port29_oMpkts[i11].includes("G")){
                    Spine27_Port29_oMpkts[i11] =    Spine27_Port29_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oMpkts[i11][0] = Spine27_Port29_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port29_oMpkts[i11].includes("M")){
                    Spine27_Port29_oMpkts[i11] =    Spine27_Port29_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oMpkts[i11][0] = Spine27_Port29_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port29_oMpkts[i11].includes("K")){
                    Spine27_Port29_oMpkts[i11] =    Spine27_Port29_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oMpkts[i11][0] = Spine27_Port29_oMpkts[i11][0]*1000;}
            else {  Spine27_Port29_oMpkts[i11] =    Spine27_Port29_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port29_oCongDrops[i11].includes("G")){
                    Spine27_Port29_oCongDrops[i11] =    Spine27_Port29_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oCongDrops[i11][0] = Spine27_Port29_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port29_oCongDrops[i11].includes("M")){
                    Spine27_Port29_oCongDrops[i11] =    Spine27_Port29_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oCongDrops[i11][0] = Spine27_Port29_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port29_oCongDrops[i11].includes("K")){
                    Spine27_Port29_oCongDrops[i11] =    Spine27_Port29_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oCongDrops[i11][0] = Spine27_Port29_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port29_oCongDrops[i11] =    Spine27_Port29_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port29_oerrs[i11].includes("G")){
                    Spine27_Port29_oerrs[i11] =    Spine27_Port29_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oerrs[i11][0] = Spine27_Port29_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port29_oerrs[i11].includes("M")){
                    Spine27_Port29_oerrs[i11] =    Spine27_Port29_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oerrs[i11][0] = Spine27_Port29_oerrs[i11][0]*1000000;}
            else if(Spine27_Port29_oerrs[i11].includes("K")){
                    Spine27_Port29_oerrs[i11] =    Spine27_Port29_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_oerrs[i11][0] = Spine27_Port29_oerrs[i11][0]*1000;}
            else {  Spine27_Port29_oerrs[i11] =    Spine27_Port29_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }

                 if(Spine27_Port29_mtu_errs[i11].includes("G")){
                    Spine27_Port29_mtu_errs[i11] =    Spine27_Port29_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_mtu_errs[i11][0] = Spine27_Port29_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port29_mtu_errs[i11].includes("M")){
                    Spine27_Port29_mtu_errs[i11] =    Spine27_Port29_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_mtu_errs[i11][0] = Spine27_Port29_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port29_mtu_errs[i11].includes("K")){
                    Spine27_Port29_mtu_errs[i11] =    Spine27_Port29_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port29_mtu_errs[i11][0] = Spine27_Port29_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port29_mtu_errs[i11] =    Spine27_Port29_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }}
                
            if(Spine27_Port33[i11] !== undefined){ 
                Spine27_Port33_fix[i11] =        Spine27_Port33[i11].slice(26, 34);
                Spine27_Port33_iUpkts[i11] =     Spine27_Port33[i11].slice(33,40);
                Spine27_Port33_iBpkts[i11] =     Spine27_Port33[i11].slice(40,47);
                Spine27_Port33_iMpkts[i11] =     Spine27_Port33[i11].slice(47,54);
                Spine27_Port33_iCongDrops[i11] = Spine27_Port33[i11].slice(54,65);
                Spine27_Port33_ierrs[i11] =      Spine27_Port33[i11].slice(65,71);
                Spine27_Port33_obytes[i11] =     Spine27_Port33[i11].slice(71,78);
                Spine27_Port33_oUpkts[i11] =     Spine27_Port33[i11].slice(78,85);
                Spine27_Port33_oBpkts[i11] =     Spine27_Port33[i11].slice(85,92);
                Spine27_Port33_oMpkts[i11] =     Spine27_Port33[i11].slice(92,99);
                Spine27_Port33_oCongDrops[i11] = Spine27_Port33[i11].slice(99,110);
                Spine27_Port33_oerrs[i11] =      Spine27_Port33[i11].slice(110,116);
                Spine27_Port33_mtu_errs[i11] =   Spine27_Port33[i11].slice(116,125);
                
                if( Spine27_Port33_fix[i11].includes("G")){
                    Spine27_Port33_fix[i11] =    Spine27_Port33_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_fix[i11][0] = Spine27_Port33_fix[i11][0]*1000000000;}
            else if(Spine27_Port33_fix[i11].includes("M")){
                    Spine27_Port33_fix[i11] =    Spine27_Port33_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_fix[i11][0] = Spine27_Port33_fix[i11][0]*1000000;}
            else if(Spine27_Port33_fix[i11].includes("K")){
                    Spine27_Port33_fix[i11] =    Spine27_Port33_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_fix[i11][0] = Spine27_Port33_fix[i11][0]*1000;}
            else {  Spine27_Port33_fix[i11] =    Spine27_Port33_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
    
                if( Spine27_Port33_iUpkts[i11].includes("G")){
                    Spine27_Port33_iUpkts[i11] =    Spine27_Port33_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iUpkts[i11][0] = Spine27_Port33_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_iUpkts[i11].includes("M")){
                    Spine27_Port33_iUpkts[i11] =    Spine27_Port33_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iUpkts[i11][0] = Spine27_Port33_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port33_iUpkts[i11].includes("K")){
                    Spine27_Port33_iUpkts[i11] =    Spine27_Port33_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iUpkts[i11][0] = Spine27_Port33_iUpkts[i11][0]*1000;}
            else {  Spine27_Port33_iUpkts[i11] =    Spine27_Port33_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                 if(Spine27_Port33_iBpkts[i11].includes("G")){
                    Spine27_Port33_iBpkts[i11] =    Spine27_Port33_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iBpkts[i11][0] = Spine27_Port33_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_iBpkts[i11].includes("M")){
                    Spine27_Port33_iBpkts[i11] =    Spine27_Port33_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iBpkts[i11][0] = Spine27_Port33_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port33_iBpkts[i11].includes("K")){
                    Spine27_Port33_iBpkts[i11] =    Spine27_Port33_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iBpkts[i11][0] = Spine27_Port33_iBpkts[i11][0]*1000;}
            else {  Spine27_Port33_iBpkts[i11] =    Spine27_Port33_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
                
                 if(Spine27_Port33_iMpkts[i11].includes("G")){
                    Spine27_Port33_iMpkts[i11] =    Spine27_Port33_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iMpkts[i11][0] = Spine27_Port33_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_iMpkts[i11].includes("M")){
                    Spine27_Port33_iMpkts[i11] =    Spine27_Port33_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iMpkts[i11][0] = Spine27_Port33_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port33_iMpkts[i11].includes("K")){
                    Spine27_Port33_iMpkts[i11] =    Spine27_Port33_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iMpkts[i11][0] = Spine27_Port33_iMpkts[i11][0]*1000;}
            else {  Spine27_Port33_iMpkts[i11] =    Spine27_Port33_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port33_iCongDrops[i11].includes("G")){
                    Spine27_Port33_iCongDrops[i11] =    Spine27_Port33_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iCongDrops[i11][0] = Spine27_Port33_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port33_iCongDrops[i11].includes("M")){
                    Spine27_Port33_iCongDrops[i11] =    Spine27_Port33_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iCongDrops[i11][0] = Spine27_Port33_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port33_iCongDrops[i11].includes("K")){
                    Spine27_Port33_iCongDrops[i11] =    Spine27_Port33_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_iCongDrops[i11][0] = Spine27_Port33_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port33_iCongDrops[i11] =    Spine27_Port33_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port33_ierrs[i11].includes("G")){
                    Spine27_Port33_ierrs[i11] =    Spine27_Port33_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_ierrs[i11][0] = Spine27_Port33_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port33_ierrs[i11].includes("M")){
                    Spine27_Port33_ierrs[i11] =    Spine27_Port33_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_ierrs[i11][0] = Spine27_Port33_ierrs[i11][0]*1000000;}
            else if(Spine27_Port33_ierrs[i11].includes("K")){
                    Spine27_Port33_ierrs[i11] =    Spine27_Port33_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_ierrs[i11][0] = Spine27_Port33_ierrs[i11][0]*1000;}
            else {  Spine27_Port33_ierrs[i11] =    Spine27_Port33_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port33_obytes[i11].includes("G")){
                    Spine27_Port33_obytes[i11] =    Spine27_Port33_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_obytes[i11][0] = Spine27_Port33_obytes[i11][0]*1000000000;}
            else if(Spine27_Port33_obytes[i11].includes("M")){
                    Spine27_Port33_obytes[i11] =    Spine27_Port33_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_obytes[i11][0] = Spine27_Port33_obytes[i11][0]*1000000;}
            else if(Spine27_Port33_obytes[i11].includes("K")){
                    Spine27_Port33_obytes[i11] =    Spine27_Port33_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_obytes[i11][0] = Spine27_Port33_obytes[i11][0]*1000;}
            else {  Spine27_Port33_obytes[i11] =    Spine27_Port33_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port33_oUpkts[i11].includes("G")){
                    Spine27_Port33_oUpkts[i11] =    Spine27_Port33_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oUpkts[i11][0] = Spine27_Port33_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_oUpkts[i11].includes("M")){
                    Spine27_Port33_oUpkts[i11] =    Spine27_Port33_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oUpkts[i11][0] = Spine27_Port33_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port33_oUpkts[i11].includes("K")){
                    Spine27_Port33_oUpkts[i11] =    Spine27_Port33_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oUpkts[i11][0] = Spine27_Port33_oUpkts[i11][0]*1000;}
            else {  Spine27_Port33_oUpkts[i11] =    Spine27_Port33_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
    
                 if(Spine27_Port33_oBpkts[i11].includes("G")){
                    Spine27_Port33_oBpkts[i11] =    Spine27_Port33_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oBpkts[i11][0] = Spine27_Port33_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_oBpkts[i11].includes("M")){
                    Spine27_Port33_oBpkts[i11] =    Spine27_Port33_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oBpkts[i11][0] = Spine27_Port33_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port33_oBpkts[i11].includes("K")){
                    Spine27_Port33_oBpkts[i11] =    Spine27_Port33_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oBpkts[i11][0] = Spine27_Port33_oBpkts[i11][0]*1000;}
            else {  Spine27_Port33_oBpkts[i11] =    Spine27_Port33_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
    
                 if(Spine27_Port33_oMpkts[i11].includes("G")){
                    Spine27_Port33_oMpkts[i11] =    Spine27_Port33_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oMpkts[i11][0] = Spine27_Port33_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port33_oMpkts[i11].includes("M")){
                    Spine27_Port33_oMpkts[i11] =    Spine27_Port33_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oMpkts[i11][0] = Spine27_Port33_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port33_oMpkts[i11].includes("K")){
                    Spine27_Port33_oMpkts[i11] =    Spine27_Port33_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oMpkts[i11][0] = Spine27_Port33_oMpkts[i11][0]*1000;}
            else {  Spine27_Port33_oMpkts[i11] =    Spine27_Port33_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port33_oCongDrops[i11].includes("G")){
                    Spine27_Port33_oCongDrops[i11] =    Spine27_Port33_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oCongDrops[i11][0] = Spine27_Port33_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port33_oCongDrops[i11].includes("M")){
                    Spine27_Port33_oCongDrops[i11] =    Spine27_Port33_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oCongDrops[i11][0] = Spine27_Port33_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port33_oCongDrops[i11].includes("K")){
                    Spine27_Port33_oCongDrops[i11] =    Spine27_Port33_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oCongDrops[i11][0] = Spine27_Port33_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port33_oCongDrops[i11] =    Spine27_Port33_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port33_oerrs[i11].includes("G")){
                    Spine27_Port33_oerrs[i11] =    Spine27_Port33_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oerrs[i11][0] = Spine27_Port33_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port33_oerrs[i11].includes("M")){
                    Spine27_Port33_oerrs[i11] =    Spine27_Port33_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oerrs[i11][0] = Spine27_Port33_oerrs[i11][0]*1000000;}
            else if(Spine27_Port33_oerrs[i11].includes("K")){
                    Spine27_Port33_oerrs[i11] =    Spine27_Port33_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_oerrs[i11][0] = Spine27_Port33_oerrs[i11][0]*1000;}
            else {  Spine27_Port33_oerrs[i11] =    Spine27_Port33_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }

                 if(Spine27_Port33_mtu_errs[i11].includes("G")){
                    Spine27_Port33_mtu_errs[i11] =    Spine27_Port33_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_mtu_errs[i11][0] = Spine27_Port33_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port33_mtu_errs[i11].includes("M")){
                    Spine27_Port33_mtu_errs[i11] =    Spine27_Port33_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_mtu_errs[i11][0] = Spine27_Port33_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port33_mtu_errs[i11].includes("K")){
                    Spine27_Port33_mtu_errs[i11] =    Spine27_Port33_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port33_mtu_errs[i11][0] = Spine27_Port33_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port33_mtu_errs[i11] =    Spine27_Port33_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }}

            if(Spine27_Port89[i11] !== undefined){ 
                Spine27_Port89_fix[i11] =        Spine27_Port89[i11].slice(26, 34);
                Spine27_Port89_iUpkts[i11] =     Spine27_Port89[i11].slice(33,40);
                Spine27_Port89_iBpkts[i11] =     Spine27_Port89[i11].slice(40,47);
                Spine27_Port89_iMpkts[i11] =     Spine27_Port89[i11].slice(47,54);
                Spine27_Port89_iCongDrops[i11] = Spine27_Port89[i11].slice(54,65);
                Spine27_Port89_ierrs[i11] =      Spine27_Port89[i11].slice(65,71);
                Spine27_Port89_obytes[i11] =     Spine27_Port89[i11].slice(71,78);
                Spine27_Port89_oUpkts[i11] =     Spine27_Port89[i11].slice(78,85);
                Spine27_Port89_oBpkts[i11] =     Spine27_Port89[i11].slice(85,92);
                Spine27_Port89_oMpkts[i11] =     Spine27_Port89[i11].slice(92,99);
                Spine27_Port89_oCongDrops[i11] = Spine27_Port89[i11].slice(99,110);
                Spine27_Port89_oerrs[i11] =      Spine27_Port89[i11].slice(110,116);
                Spine27_Port89_mtu_errs[i11] =   Spine27_Port89[i11].slice(116,125);
                
                if( Spine27_Port89_fix[i11].includes("G")){
                    Spine27_Port89_fix[i11] =    Spine27_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_fix[i11][0] = Spine27_Port89_fix[i11][0]*1000000000;}
            else if(Spine27_Port89_fix[i11].includes("M")){
                    Spine27_Port89_fix[i11] =    Spine27_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_fix[i11][0] = Spine27_Port89_fix[i11][0]*1000000;}
            else if(Spine27_Port89_fix[i11].includes("K")){
                    Spine27_Port89_fix[i11] =    Spine27_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_fix[i11][0] = Spine27_Port89_fix[i11][0]*1000;}
            else {  Spine27_Port89_fix[i11] =    Spine27_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
    
                if( Spine27_Port89_iUpkts[i11].includes("G")){
                    Spine27_Port89_iUpkts[i11] =    Spine27_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iUpkts[i11][0] = Spine27_Port89_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_iUpkts[i11].includes("M")){
                    Spine27_Port89_iUpkts[i11] =    Spine27_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iUpkts[i11][0] = Spine27_Port89_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port89_iUpkts[i11].includes("K")){
                    Spine27_Port89_iUpkts[i11] =    Spine27_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iUpkts[i11][0] = Spine27_Port89_iUpkts[i11][0]*1000;}
            else {  Spine27_Port89_iUpkts[i11] =    Spine27_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                 if(Spine27_Port89_iBpkts[i11].includes("G")){
                    Spine27_Port89_iBpkts[i11] =    Spine27_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iBpkts[i11][0] = Spine27_Port89_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_iBpkts[i11].includes("M")){
                    Spine27_Port89_iBpkts[i11] =    Spine27_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iBpkts[i11][0] = Spine27_Port89_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port89_iBpkts[i11].includes("K")){
                    Spine27_Port89_iBpkts[i11] =    Spine27_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iBpkts[i11][0] = Spine27_Port89_iBpkts[i11][0]*1000;}
            else {  Spine27_Port89_iBpkts[i11] =    Spine27_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
                
                 if(Spine27_Port89_iMpkts[i11].includes("G")){
                    Spine27_Port89_iMpkts[i11] =    Spine27_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iMpkts[i11][0] = Spine27_Port89_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_iMpkts[i11].includes("M")){
                    Spine27_Port89_iMpkts[i11] =    Spine27_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iMpkts[i11][0] = Spine27_Port89_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port89_iMpkts[i11].includes("K")){
                    Spine27_Port89_iMpkts[i11] =    Spine27_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iMpkts[i11][0] = Spine27_Port89_iMpkts[i11][0]*1000;}
            else {  Spine27_Port89_iMpkts[i11] =    Spine27_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
    
                 if(Spine27_Port89_iCongDrops[i11].includes("G")){
                    Spine27_Port89_iCongDrops[i11] =    Spine27_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iCongDrops[i11][0] = Spine27_Port89_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port89_iCongDrops[i11].includes("M")){
                    Spine27_Port89_iCongDrops[i11] =    Spine27_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iCongDrops[i11][0] = Spine27_Port89_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port89_iCongDrops[i11].includes("K")){
                    Spine27_Port89_iCongDrops[i11] =    Spine27_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_iCongDrops[i11][0] = Spine27_Port89_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port89_iCongDrops[i11] =    Spine27_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
    
                 if(Spine27_Port89_ierrs[i11].includes("G")){
                    Spine27_Port89_ierrs[i11] =    Spine27_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_ierrs[i11][0] = Spine27_Port89_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port89_ierrs[i11].includes("M")){
                    Spine27_Port89_ierrs[i11] =    Spine27_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_ierrs[i11][0] = Spine27_Port89_ierrs[i11][0]*1000000;}
            else if(Spine27_Port89_ierrs[i11].includes("K")){
                    Spine27_Port89_ierrs[i11] =    Spine27_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_ierrs[i11][0] = Spine27_Port89_ierrs[i11][0]*1000;}
            else {  Spine27_Port89_ierrs[i11] =    Spine27_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
    
                 if(Spine27_Port89_obytes[i11].includes("G")){
                    Spine27_Port89_obytes[i11] =    Spine27_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_obytes[i11][0] = Spine27_Port89_obytes[i11][0]*1000000000;}
            else if(Spine27_Port89_obytes[i11].includes("M")){
                    Spine27_Port89_obytes[i11] =    Spine27_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_obytes[i11][0] = Spine27_Port89_obytes[i11][0]*1000000;}
            else if(Spine27_Port89_obytes[i11].includes("K")){
                    Spine27_Port89_obytes[i11] =    Spine27_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_obytes[i11][0] = Spine27_Port89_obytes[i11][0]*1000;}
            else {  Spine27_Port89_obytes[i11] =    Spine27_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
                
                 if(Spine27_Port89_oUpkts[i11].includes("G")){
                    Spine27_Port89_oUpkts[i11] =    Spine27_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oUpkts[i11][0] = Spine27_Port89_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_oUpkts[i11].includes("M")){
                    Spine27_Port89_oUpkts[i11] =    Spine27_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oUpkts[i11][0] = Spine27_Port89_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port89_oUpkts[i11].includes("K")){
                    Spine27_Port89_oUpkts[i11] =    Spine27_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oUpkts[i11][0] = Spine27_Port89_oUpkts[i11][0]*1000;}
            else {  Spine27_Port89_oUpkts[i11] =    Spine27_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
    
                 if(Spine27_Port89_oBpkts[i11].includes("G")){
                    Spine27_Port89_oBpkts[i11] =    Spine27_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oBpkts[i11][0] = Spine27_Port89_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_oBpkts[i11].includes("M")){
                    Spine27_Port89_oBpkts[i11] =    Spine27_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oBpkts[i11][0] = Spine27_Port89_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port89_oBpkts[i11].includes("K")){
                    Spine27_Port89_oBpkts[i11] =    Spine27_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oBpkts[i11][0] = Spine27_Port89_oBpkts[i11][0]*1000;}
            else {  Spine27_Port89_oBpkts[i11] =    Spine27_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port89_oMpkts[i11].includes("G")){
                    Spine27_Port89_oMpkts[i11] =    Spine27_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oMpkts[i11][0] = Spine27_Port89_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port89_oMpkts[i11].includes("M")){
                    Spine27_Port89_oMpkts[i11] =    Spine27_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oMpkts[i11][0] = Spine27_Port89_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port89_oMpkts[i11].includes("K")){
                    Spine27_Port89_oMpkts[i11] =    Spine27_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oMpkts[i11][0] = Spine27_Port89_oMpkts[i11][0]*1000;}
            else {  Spine27_Port89_oMpkts[i11] =    Spine27_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port89_oCongDrops[i11].includes("G")){
                    Spine27_Port89_oCongDrops[i11] =    Spine27_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oCongDrops[i11][0] = Spine27_Port89_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port89_oCongDrops[i11].includes("M")){
                    Spine27_Port89_oCongDrops[i11] =    Spine27_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oCongDrops[i11][0] = Spine27_Port89_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port89_oCongDrops[i11].includes("K")){
                    Spine27_Port89_oCongDrops[i11] =    Spine27_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oCongDrops[i11][0] = Spine27_Port89_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port89_oCongDrops[i11] =    Spine27_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
    
                 if(Spine27_Port89_oerrs[i11].includes("G")){
                    Spine27_Port89_oerrs[i11] =    Spine27_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oerrs[i11][0] = Spine27_Port89_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port89_oerrs[i11].includes("M")){
                    Spine27_Port89_oerrs[i11] =    Spine27_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oerrs[i11][0] = Spine27_Port89_oerrs[i11][0]*1000000;}
            else if(Spine27_Port89_oerrs[i11].includes("K")){
                    Spine27_Port89_oerrs[i11] =    Spine27_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_oerrs[i11][0] = Spine27_Port89_oerrs[i11][0]*1000;}
            else {  Spine27_Port89_oerrs[i11] =    Spine27_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }

                 if(Spine27_Port89_mtu_errs[i11].includes("G")){
                    Spine27_Port89_mtu_errs[i11] =    Spine27_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_mtu_errs[i11][0] = Spine27_Port89_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port89_mtu_errs[i11].includes("M")){
                    Spine27_Port89_mtu_errs[i11] =    Spine27_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_mtu_errs[i11][0] = Spine27_Port89_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port89_mtu_errs[i11].includes("K")){
                    Spine27_Port89_mtu_errs[i11] =    Spine27_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port89_mtu_errs[i11][0] = Spine27_Port89_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port89_mtu_errs[i11] =    Spine27_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}

            if(Spine27_Port90[i11] !== undefined){ 
                Spine27_Port90_fix[i11] =        Spine27_Port90[i11].slice(26, 34);
                Spine27_Port90_iUpkts[i11] =     Spine27_Port90[i11].slice(33,40);
                Spine27_Port90_iBpkts[i11] =     Spine27_Port90[i11].slice(40,47);
                Spine27_Port90_iMpkts[i11] =     Spine27_Port90[i11].slice(47,54);
                Spine27_Port90_iCongDrops[i11] = Spine27_Port90[i11].slice(54,65);
                Spine27_Port90_ierrs[i11] =      Spine27_Port90[i11].slice(65,71);
                Spine27_Port90_obytes[i11] =     Spine27_Port90[i11].slice(71,78);
                Spine27_Port90_oUpkts[i11] =     Spine27_Port90[i11].slice(78,85);
                Spine27_Port90_oBpkts[i11] =     Spine27_Port90[i11].slice(85,92);
                Spine27_Port90_oMpkts[i11] =     Spine27_Port90[i11].slice(92,99);
                Spine27_Port90_oCongDrops[i11] = Spine27_Port90[i11].slice(99,110);
                Spine27_Port90_oerrs[i11] =      Spine27_Port90[i11].slice(110,116);
                Spine27_Port90_mtu_errs[i11] =   Spine27_Port90[i11].slice(116,125);
                
                if( Spine27_Port90_fix[i11].includes("G")){
                    Spine27_Port90_fix[i11] =    Spine27_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_fix[i11][0] = Spine27_Port90_fix[i11][0]*1000000000;}
            else if(Spine27_Port90_fix[i11].includes("M")){
                    Spine27_Port90_fix[i11] =    Spine27_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_fix[i11][0] = Spine27_Port90_fix[i11][0]*1000000;}
            else if(Spine27_Port90_fix[i11].includes("K")){
                    Spine27_Port90_fix[i11] =    Spine27_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_fix[i11][0] = Spine27_Port90_fix[i11][0]*1000;}
            else {  Spine27_Port90_fix[i11] =    Spine27_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                if( Spine27_Port90_iUpkts[i11].includes("G")){
                    Spine27_Port90_iUpkts[i11] =    Spine27_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iUpkts[i11][0] = Spine27_Port90_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_iUpkts[i11].includes("M")){
                    Spine27_Port90_iUpkts[i11] =    Spine27_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iUpkts[i11][0] = Spine27_Port90_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port90_iUpkts[i11].includes("K")){
                    Spine27_Port90_iUpkts[i11] =    Spine27_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iUpkts[i11][0] = Spine27_Port90_iUpkts[i11][0]*1000;}
            else {  Spine27_Port90_iUpkts[i11] =    Spine27_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                 if(Spine27_Port90_iBpkts[i11].includes("G")){
                    Spine27_Port90_iBpkts[i11] =    Spine27_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iBpkts[i11][0] = Spine27_Port90_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_iBpkts[i11].includes("M")){
                    Spine27_Port90_iBpkts[i11] =    Spine27_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iBpkts[i11][0] = Spine27_Port90_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port90_iBpkts[i11].includes("K")){
                    Spine27_Port90_iBpkts[i11] =    Spine27_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iBpkts[i11][0] = Spine27_Port90_iBpkts[i11][0]*1000;}
            else {  Spine27_Port90_iBpkts[i11] =    Spine27_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                 }
                
                 if(Spine27_Port90_iMpkts[i11].includes("G")){
                    Spine27_Port90_iMpkts[i11] =    Spine27_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iMpkts[i11][0] = Spine27_Port90_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_iMpkts[i11].includes("M")){
                    Spine27_Port90_iMpkts[i11] =    Spine27_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iMpkts[i11][0] = Spine27_Port90_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port90_iMpkts[i11].includes("K")){
                    Spine27_Port90_iMpkts[i11] =    Spine27_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iMpkts[i11][0] = Spine27_Port90_iMpkts[i11][0]*1000;}
            else {  Spine27_Port90_iMpkts[i11] =    Spine27_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port90_iCongDrops[i11].includes("G")){
                    Spine27_Port90_iCongDrops[i11] =    Spine27_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iCongDrops[i11][0] = Spine27_Port90_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port90_iCongDrops[i11].includes("M")){
                    Spine27_Port90_iCongDrops[i11] =    Spine27_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iCongDrops[i11][0] = Spine27_Port90_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port90_iCongDrops[i11].includes("K")){
                    Spine27_Port90_iCongDrops[i11] =    Spine27_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_iCongDrops[i11][0] = Spine27_Port90_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port90_iCongDrops[i11] =    Spine27_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port90_ierrs[i11].includes("G")){
                    Spine27_Port90_ierrs[i11] =    Spine27_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_ierrs[i11][0] = Spine27_Port90_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port90_ierrs[i11].includes("M")){
                    Spine27_Port90_ierrs[i11] =    Spine27_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_ierrs[i11][0] = Spine27_Port90_ierrs[i11][0]*1000000;}
            else if(Spine27_Port90_ierrs[i11].includes("K")){
                    Spine27_Port90_ierrs[i11] =    Spine27_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_ierrs[i11][0] = Spine27_Port90_ierrs[i11][0]*1000;}
            else {  Spine27_Port90_ierrs[i11] =    Spine27_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port90_obytes[i11].includes("G")){
                    Spine27_Port90_obytes[i11] =    Spine27_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_obytes[i11][0] = Spine27_Port90_obytes[i11][0]*1000000000;}
            else if(Spine27_Port90_obytes[i11].includes("M")){
                    Spine27_Port90_obytes[i11] =    Spine27_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_obytes[i11][0] = Spine27_Port90_obytes[i11][0]*1000000;}
            else if(Spine27_Port90_obytes[i11].includes("K")){
                    Spine27_Port90_obytes[i11] =    Spine27_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_obytes[i11][0] = Spine27_Port90_obytes[i11][0]*1000;}
            else {  Spine27_Port90_obytes[i11] =    Spine27_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                 if(Spine27_Port90_oUpkts[i11].includes("G")){
                    Spine27_Port90_oUpkts[i11] =    Spine27_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oUpkts[i11][0] = Spine27_Port90_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_oUpkts[i11].includes("M")){
                    Spine27_Port90_oUpkts[i11] =    Spine27_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oUpkts[i11][0] = Spine27_Port90_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port90_oUpkts[i11].includes("K")){
                    Spine27_Port90_oUpkts[i11] =    Spine27_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oUpkts[i11][0] = Spine27_Port90_oUpkts[i11][0]*1000;}
            else {  Spine27_Port90_oUpkts[i11] =    Spine27_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
    
                 if(Spine27_Port90_oBpkts[i11].includes("G")){
                    Spine27_Port90_oBpkts[i11] =    Spine27_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oBpkts[i11][0] = Spine27_Port90_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_oBpkts[i11].includes("M")){
                    Spine27_Port90_oBpkts[i11] =    Spine27_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oBpkts[i11][0] = Spine27_Port90_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port90_oBpkts[i11].includes("K")){
                    Spine27_Port90_oBpkts[i11] =    Spine27_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oBpkts[i11][0] = Spine27_Port90_oBpkts[i11][0]*1000;}
            else {  Spine27_Port90_oBpkts[i11] =    Spine27_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port90_oMpkts[i11].includes("G")){
                    Spine27_Port90_oMpkts[i11] =    Spine27_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oMpkts[i11][0] = Spine27_Port90_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port90_oMpkts[i11].includes("M")){
                    Spine27_Port90_oMpkts[i11] =    Spine27_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oMpkts[i11][0] = Spine27_Port90_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port90_oMpkts[i11].includes("K")){
                    Spine27_Port90_oMpkts[i11] =    Spine27_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oMpkts[i11][0] = Spine27_Port90_oMpkts[i11][0]*1000;}
            else {  Spine27_Port90_oMpkts[i11] =    Spine27_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port90_oCongDrops[i11].includes("G")){
                    Spine27_Port90_oCongDrops[i11] =    Spine27_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oCongDrops[i11][0] = Spine27_Port90_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port90_oCongDrops[i11].includes("M")){
                    Spine27_Port90_oCongDrops[i11] =    Spine27_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oCongDrops[i11][0] = Spine27_Port90_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port90_oCongDrops[i11].includes("K")){
                    Spine27_Port90_oCongDrops[i11] =    Spine27_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oCongDrops[i11][0] = Spine27_Port90_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port90_oCongDrops[i11] =    Spine27_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
    
                 if(Spine27_Port90_oerrs[i11].includes("G")){
                    Spine27_Port90_oerrs[i11] =    Spine27_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oerrs[i11][0] = Spine27_Port90_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port90_oerrs[i11].includes("M")){
                    Spine27_Port90_oerrs[i11] =    Spine27_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oerrs[i11][0] = Spine27_Port90_oerrs[i11][0]*1000000;}
            else if(Spine27_Port90_oerrs[i11].includes("K")){
                    Spine27_Port90_oerrs[i11] =    Spine27_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_oerrs[i11][0] = Spine27_Port90_oerrs[i11][0]*1000;}
            else {  Spine27_Port90_oerrs[i11] =    Spine27_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }

                 if(Spine27_Port90_mtu_errs[i11].includes("G")){
                    Spine27_Port90_mtu_errs[i11] =    Spine27_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_mtu_errs[i11][0] = Spine27_Port90_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port90_mtu_errs[i11].includes("M")){
                    Spine27_Port90_mtu_errs[i11] =    Spine27_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_mtu_errs[i11][0] = Spine27_Port90_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port90_mtu_errs[i11].includes("K")){
                    Spine27_Port90_mtu_errs[i11] =    Spine27_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Spine27_Port90_mtu_errs[i11][0] = Spine27_Port90_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port90_mtu_errs[i11] =    Spine27_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}

            if(Spine27_Port91[i11] !== undefined){ 
                Spine27_Port91_fix[i11] =        Spine27_Port91[i11].slice(26, 34);
                Spine27_Port91_iUpkts[i11] =     Spine27_Port91[i11].slice(33,40);
                Spine27_Port91_iBpkts[i11] =     Spine27_Port91[i11].slice(40,47);
                Spine27_Port91_iMpkts[i11] =     Spine27_Port91[i11].slice(47,54);
                Spine27_Port91_iCongDrops[i11] = Spine27_Port91[i11].slice(54,65);
                Spine27_Port91_ierrs[i11] =      Spine27_Port91[i11].slice(65,71);
                Spine27_Port91_obytes[i11] =     Spine27_Port91[i11].slice(71,78);
                Spine27_Port91_oUpkts[i11] =     Spine27_Port91[i11].slice(78,85);
                Spine27_Port91_oBpkts[i11] =     Spine27_Port91[i11].slice(85,92);
                Spine27_Port91_oMpkts[i11] =     Spine27_Port91[i11].slice(92,99);
                Spine27_Port91_oCongDrops[i11] = Spine27_Port91[i11].slice(99,110);
                Spine27_Port91_oerrs[i11] =      Spine27_Port91[i11].slice(110,116);
                Spine27_Port91_mtu_errs[i11] =   Spine27_Port91[i11].slice(116,125);

            if( Spine27_Port91_fix[i11].includes("G")){
                Spine27_Port91_fix[i11] =    Spine27_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_fix[i11][0] = Spine27_Port91_fix[i11][0]*1000000000;}
            else if(Spine27_Port91_fix[i11].includes("M")){
                Spine27_Port91_fix[i11] =    Spine27_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_fix[i11][0] = Spine27_Port91_fix[i11][0]*1000000;}
            else if(Spine27_Port91_fix[i11].includes("K")){
                Spine27_Port91_fix[i11] =    Spine27_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_fix[i11][0] = Spine27_Port91_fix[i11][0]*1000;}
            else {  Spine27_Port91_fix[i11] =    Spine27_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Spine27_Port91_iUpkts[i11].includes("G")){
                Spine27_Port91_iUpkts[i11] =    Spine27_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iUpkts[i11][0] = Spine27_Port91_iUpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_iUpkts[i11].includes("M")){
                Spine27_Port91_iUpkts[i11] =    Spine27_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iUpkts[i11][0] = Spine27_Port91_iUpkts[i11][0]*1000000;}
            else if(Spine27_Port91_iUpkts[i11].includes("K")){
                Spine27_Port91_iUpkts[i11] =    Spine27_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iUpkts[i11][0] = Spine27_Port91_iUpkts[i11][0]*1000;}
            else {  Spine27_Port91_iUpkts[i11] =    Spine27_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_iBpkts[i11].includes("G")){
                Spine27_Port91_iBpkts[i11] =    Spine27_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iBpkts[i11][0] = Spine27_Port91_iBpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_iBpkts[i11].includes("M")){
                Spine27_Port91_iBpkts[i11] =    Spine27_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iBpkts[i11][0] = Spine27_Port91_iBpkts[i11][0]*1000000;}
            else if(Spine27_Port91_iBpkts[i11].includes("K")){
                Spine27_Port91_iBpkts[i11] =    Spine27_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iBpkts[i11][0] = Spine27_Port91_iBpkts[i11][0]*1000;}
            else {  Spine27_Port91_iBpkts[i11] =    Spine27_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_iMpkts[i11].includes("G")){
                Spine27_Port91_iMpkts[i11] =    Spine27_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iMpkts[i11][0] = Spine27_Port91_iMpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_iMpkts[i11].includes("M")){
                Spine27_Port91_iMpkts[i11] =    Spine27_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iMpkts[i11][0] = Spine27_Port91_iMpkts[i11][0]*1000000;}
            else if(Spine27_Port91_iMpkts[i11].includes("K")){
                Spine27_Port91_iMpkts[i11] =    Spine27_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iMpkts[i11][0] = Spine27_Port91_iMpkts[i11][0]*1000;}
            else {  Spine27_Port91_iMpkts[i11] =    Spine27_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_iCongDrops[i11].includes("G")){
                Spine27_Port91_iCongDrops[i11] =    Spine27_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iCongDrops[i11][0] = Spine27_Port91_iCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port91_iCongDrops[i11].includes("M")){
                Spine27_Port91_iCongDrops[i11] =    Spine27_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iCongDrops[i11][0] = Spine27_Port91_iCongDrops[i11][0]*1000000;}
            else if(Spine27_Port91_iCongDrops[i11].includes("K")){
                Spine27_Port91_iCongDrops[i11] =    Spine27_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_iCongDrops[i11][0] = Spine27_Port91_iCongDrops[i11][0]*1000;}
            else {  Spine27_Port91_iCongDrops[i11] =    Spine27_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_ierrs[i11].includes("G")){
                Spine27_Port91_ierrs[i11] =    Spine27_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_ierrs[i11][0] = Spine27_Port91_ierrs[i11][0]*1000000000;}
            else if(Spine27_Port91_ierrs[i11].includes("M")){
                Spine27_Port91_ierrs[i11] =    Spine27_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_ierrs[i11][0] = Spine27_Port91_ierrs[i11][0]*1000000;}
            else if(Spine27_Port91_ierrs[i11].includes("K")){
                Spine27_Port91_ierrs[i11] =    Spine27_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_ierrs[i11][0] = Spine27_Port91_ierrs[i11][0]*1000;}
            else {  Spine27_Port91_ierrs[i11] =    Spine27_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_obytes[i11].includes("G")){
                Spine27_Port91_obytes[i11] =    Spine27_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_obytes[i11][0] = Spine27_Port91_obytes[i11][0]*1000000000;}
            else if(Spine27_Port91_obytes[i11].includes("M")){
                Spine27_Port91_obytes[i11] =    Spine27_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_obytes[i11][0] = Spine27_Port91_obytes[i11][0]*1000000;}
            else if(Spine27_Port91_obytes[i11].includes("K")){
                Spine27_Port91_obytes[i11] =    Spine27_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_obytes[i11][0] = Spine27_Port91_obytes[i11][0]*1000;}
            else {  Spine27_Port91_obytes[i11] =    Spine27_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_oUpkts[i11].includes("G")){
                Spine27_Port91_oUpkts[i11] =    Spine27_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oUpkts[i11][0] = Spine27_Port91_oUpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_oUpkts[i11].includes("M")){
                Spine27_Port91_oUpkts[i11] =    Spine27_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oUpkts[i11][0] = Spine27_Port91_oUpkts[i11][0]*1000000;}
            else if(Spine27_Port91_oUpkts[i11].includes("K")){
                Spine27_Port91_oUpkts[i11] =    Spine27_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oUpkts[i11][0] = Spine27_Port91_oUpkts[i11][0]*1000;}
            else {  Spine27_Port91_oUpkts[i11] =    Spine27_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Spine27_Port91_oBpkts[i11].includes("G")){
                Spine27_Port91_oBpkts[i11] =    Spine27_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oBpkts[i11][0] = Spine27_Port91_oBpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_oBpkts[i11].includes("M")){
                Spine27_Port91_oBpkts[i11] =    Spine27_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oBpkts[i11][0] = Spine27_Port91_oBpkts[i11][0]*1000000;}
            else if(Spine27_Port91_oBpkts[i11].includes("K")){
                Spine27_Port91_oBpkts[i11] =    Spine27_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oBpkts[i11][0] = Spine27_Port91_oBpkts[i11][0]*1000;}
            else {  Spine27_Port91_oBpkts[i11] =    Spine27_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_oMpkts[i11].includes("G")){
                Spine27_Port91_oMpkts[i11] =    Spine27_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oMpkts[i11][0] = Spine27_Port91_oMpkts[i11][0]*1000000000;}
            else if(Spine27_Port91_oMpkts[i11].includes("M")){
                Spine27_Port91_oMpkts[i11] =    Spine27_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oMpkts[i11][0] = Spine27_Port91_oMpkts[i11][0]*1000000;}
            else if(Spine27_Port91_oMpkts[i11].includes("K")){
                Spine27_Port91_oMpkts[i11] =    Spine27_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oMpkts[i11][0] = Spine27_Port91_oMpkts[i11][0]*1000;}
            else {  Spine27_Port91_oMpkts[i11] =    Spine27_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_oCongDrops[i11].includes("G")){
                Spine27_Port91_oCongDrops[i11] =    Spine27_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oCongDrops[i11][0] = Spine27_Port91_oCongDrops[i11][0]*1000000000;}
            else if(Spine27_Port91_oCongDrops[i11].includes("M")){
                Spine27_Port91_oCongDrops[i11] =    Spine27_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oCongDrops[i11][0] = Spine27_Port91_oCongDrops[i11][0]*1000000;}
            else if(Spine27_Port91_oCongDrops[i11].includes("K")){
                Spine27_Port91_oCongDrops[i11] =    Spine27_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oCongDrops[i11][0] = Spine27_Port91_oCongDrops[i11][0]*1000;}
            else {  Spine27_Port91_oCongDrops[i11] =    Spine27_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_oerrs[i11].includes("G")){
                Spine27_Port91_oerrs[i11] =    Spine27_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oerrs[i11][0] = Spine27_Port91_oerrs[i11][0]*1000000000;}
            else if(Spine27_Port91_oerrs[i11].includes("M")){
                Spine27_Port91_oerrs[i11] =    Spine27_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oerrs[i11][0] = Spine27_Port91_oerrs[i11][0]*1000000;}
            else if(Spine27_Port91_oerrs[i11].includes("K")){
                Spine27_Port91_oerrs[i11] =    Spine27_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_oerrs[i11][0] = Spine27_Port91_oerrs[i11][0]*1000;}
            else {  Spine27_Port91_oerrs[i11] =    Spine27_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Spine27_Port91_mtu_errs[i11].includes("G")){
                Spine27_Port91_mtu_errs[i11] =    Spine27_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_mtu_errs[i11][0] = Spine27_Port91_mtu_errs[i11][0]*1000000000;}
            else if(Spine27_Port91_mtu_errs[i11].includes("M")){
                Spine27_Port91_mtu_errs[i11] =    Spine27_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_mtu_errs[i11][0] = Spine27_Port91_mtu_errs[i11][0]*1000000;}
            else if(Spine27_Port91_mtu_errs[i11].includes("K")){
                Spine27_Port91_mtu_errs[i11] =    Spine27_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Spine27_Port91_mtu_errs[i11][0] = Spine27_Port91_mtu_errs[i11][0]*1000;}
            else {  Spine27_Port91_mtu_errs[i11] =    Spine27_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}

        if(Spine27_Port92[i11] !== undefined){ 
            Spine27_Port92_fix[i11] =        Spine27_Port92[i11].slice(26, 34);
            Spine27_Port92_iUpkts[i11] =     Spine27_Port92[i11].slice(33,40);
            Spine27_Port92_iBpkts[i11] =     Spine27_Port92[i11].slice(40,47);
            Spine27_Port92_iMpkts[i11] =     Spine27_Port92[i11].slice(47,54);
            Spine27_Port92_iCongDrops[i11] = Spine27_Port92[i11].slice(54,65);
            Spine27_Port92_ierrs[i11] =      Spine27_Port92[i11].slice(65,71);
            Spine27_Port92_obytes[i11] =     Spine27_Port92[i11].slice(71,78);
            Spine27_Port92_oUpkts[i11] =     Spine27_Port92[i11].slice(78,85);
            Spine27_Port92_oBpkts[i11] =     Spine27_Port92[i11].slice(85,92);
            Spine27_Port92_oMpkts[i11] =     Spine27_Port92[i11].slice(92,99);
            Spine27_Port92_oCongDrops[i11] = Spine27_Port92[i11].slice(99,110);
            Spine27_Port92_oerrs[i11] =      Spine27_Port92[i11].slice(110,116);
            Spine27_Port92_mtu_errs[i11] =   Spine27_Port92[i11].slice(116,125);
        
        if( Spine27_Port92_fix[i11].includes("G")){
            Spine27_Port92_fix[i11] =    Spine27_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_fix[i11][0] = Spine27_Port92_fix[i11][0]*1000000000;}
        else if(Spine27_Port92_fix[i11].includes("M")){
            Spine27_Port92_fix[i11] =    Spine27_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_fix[i11][0] = Spine27_Port92_fix[i11][0]*1000000;}
        else if(Spine27_Port92_fix[i11].includes("K")){
            Spine27_Port92_fix[i11] =    Spine27_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_fix[i11][0] = Spine27_Port92_fix[i11][0]*1000;}
        else {  Spine27_Port92_fix[i11] =    Spine27_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port92_iUpkts[i11].includes("G")){
            Spine27_Port92_iUpkts[i11] =    Spine27_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iUpkts[i11][0] = Spine27_Port92_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_iUpkts[i11].includes("M")){
            Spine27_Port92_iUpkts[i11] =    Spine27_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iUpkts[i11][0] = Spine27_Port92_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port92_iUpkts[i11].includes("K")){
            Spine27_Port92_iUpkts[i11] =    Spine27_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iUpkts[i11][0] = Spine27_Port92_iUpkts[i11][0]*1000;}
        else {  Spine27_Port92_iUpkts[i11] =    Spine27_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port92_iBpkts[i11].includes("G")){
            Spine27_Port92_iBpkts[i11] =    Spine27_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iBpkts[i11][0] = Spine27_Port92_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_iBpkts[i11].includes("M")){
            Spine27_Port92_iBpkts[i11] =    Spine27_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iBpkts[i11][0] = Spine27_Port92_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port92_iBpkts[i11].includes("K")){
            Spine27_Port92_iBpkts[i11] =    Spine27_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iBpkts[i11][0] = Spine27_Port92_iBpkts[i11][0]*1000;}
        else {  Spine27_Port92_iBpkts[i11] =    Spine27_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port92_iMpkts[i11].includes("G")){
            Spine27_Port92_iMpkts[i11] =    Spine27_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iMpkts[i11][0] = Spine27_Port92_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_iMpkts[i11].includes("M")){
            Spine27_Port92_iMpkts[i11] =    Spine27_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iMpkts[i11][0] = Spine27_Port92_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port92_iMpkts[i11].includes("K")){
            Spine27_Port92_iMpkts[i11] =    Spine27_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iMpkts[i11][0] = Spine27_Port92_iMpkts[i11][0]*1000;}
        else {  Spine27_Port92_iMpkts[i11] =    Spine27_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port92_iCongDrops[i11].includes("G")){
            Spine27_Port92_iCongDrops[i11] =    Spine27_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iCongDrops[i11][0] = Spine27_Port92_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port92_iCongDrops[i11].includes("M")){
            Spine27_Port92_iCongDrops[i11] =    Spine27_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iCongDrops[i11][0] = Spine27_Port92_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port92_iCongDrops[i11].includes("K")){
            Spine27_Port92_iCongDrops[i11] =    Spine27_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_iCongDrops[i11][0] = Spine27_Port92_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port92_iCongDrops[i11] =    Spine27_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port92_ierrs[i11].includes("G")){
            Spine27_Port92_ierrs[i11] =    Spine27_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_ierrs[i11][0] = Spine27_Port92_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port92_ierrs[i11].includes("M")){
            Spine27_Port92_ierrs[i11] =    Spine27_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_ierrs[i11][0] = Spine27_Port92_ierrs[i11][0]*1000000;}
        else if(Spine27_Port92_ierrs[i11].includes("K")){
            Spine27_Port92_ierrs[i11] =    Spine27_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_ierrs[i11][0] = Spine27_Port92_ierrs[i11][0]*1000;}
        else {  Spine27_Port92_ierrs[i11] =    Spine27_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port92_obytes[i11].includes("G")){
            Spine27_Port92_obytes[i11] =    Spine27_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_obytes[i11][0] = Spine27_Port92_obytes[i11][0]*1000000000;}
        else if(Spine27_Port92_obytes[i11].includes("M")){
            Spine27_Port92_obytes[i11] =    Spine27_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_obytes[i11][0] = Spine27_Port92_obytes[i11][0]*1000000;}
        else if(Spine27_Port92_obytes[i11].includes("K")){
            Spine27_Port92_obytes[i11] =    Spine27_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_obytes[i11][0] = Spine27_Port92_obytes[i11][0]*1000;}
        else {  Spine27_Port92_obytes[i11] =    Spine27_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port92_oUpkts[i11].includes("G")){
            Spine27_Port92_oUpkts[i11] =    Spine27_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oUpkts[i11][0] = Spine27_Port92_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_oUpkts[i11].includes("M")){
            Spine27_Port92_oUpkts[i11] =    Spine27_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oUpkts[i11][0] = Spine27_Port92_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port92_oUpkts[i11].includes("K")){
            Spine27_Port92_oUpkts[i11] =    Spine27_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oUpkts[i11][0] = Spine27_Port92_oUpkts[i11][0]*1000;}
        else {  Spine27_Port92_oUpkts[i11] =    Spine27_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port92_oBpkts[i11].includes("G")){
            Spine27_Port92_oBpkts[i11] =    Spine27_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oBpkts[i11][0] = Spine27_Port92_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_oBpkts[i11].includes("M")){
            Spine27_Port92_oBpkts[i11] =    Spine27_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oBpkts[i11][0] = Spine27_Port92_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port92_oBpkts[i11].includes("K")){
            Spine27_Port92_oBpkts[i11] =    Spine27_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oBpkts[i11][0] = Spine27_Port92_oBpkts[i11][0]*1000;}
        else {  Spine27_Port92_oBpkts[i11] =    Spine27_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port92_oMpkts[i11].includes("G")){
            Spine27_Port92_oMpkts[i11] =    Spine27_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oMpkts[i11][0] = Spine27_Port92_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port92_oMpkts[i11].includes("M")){
            Spine27_Port92_oMpkts[i11] =    Spine27_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oMpkts[i11][0] = Spine27_Port92_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port92_oMpkts[i11].includes("K")){
            Spine27_Port92_oMpkts[i11] =    Spine27_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oMpkts[i11][0] = Spine27_Port92_oMpkts[i11][0]*1000;}
        else {  Spine27_Port92_oMpkts[i11] =    Spine27_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port92_oCongDrops[i11].includes("G")){
            Spine27_Port92_oCongDrops[i11] =    Spine27_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oCongDrops[i11][0] = Spine27_Port92_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port92_oCongDrops[i11].includes("M")){
            Spine27_Port92_oCongDrops[i11] =    Spine27_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oCongDrops[i11][0] = Spine27_Port92_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port92_oCongDrops[i11].includes("K")){
            Spine27_Port92_oCongDrops[i11] =    Spine27_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oCongDrops[i11][0] = Spine27_Port92_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port92_oCongDrops[i11] =    Spine27_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port92_oerrs[i11].includes("G")){
            Spine27_Port92_oerrs[i11] =    Spine27_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oerrs[i11][0] = Spine27_Port92_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port92_oerrs[i11].includes("M")){
            Spine27_Port92_oerrs[i11] =    Spine27_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oerrs[i11][0] = Spine27_Port92_oerrs[i11][0]*1000000;}
        else if(Spine27_Port92_oerrs[i11].includes("K")){
            Spine27_Port92_oerrs[i11] =    Spine27_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_oerrs[i11][0] = Spine27_Port92_oerrs[i11][0]*1000;}
        else {  Spine27_Port92_oerrs[i11] =    Spine27_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port92_mtu_errs[i11].includes("G")){
            Spine27_Port92_mtu_errs[i11] =    Spine27_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_mtu_errs[i11][0] = Spine27_Port92_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port92_mtu_errs[i11].includes("M")){
            Spine27_Port92_mtu_errs[i11] =    Spine27_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_mtu_errs[i11][0] = Spine27_Port92_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port92_mtu_errs[i11].includes("K")){
            Spine27_Port92_mtu_errs[i11] =    Spine27_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port92_mtu_errs[i11][0] = Spine27_Port92_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port92_mtu_errs[i11] =    Spine27_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
        

        if(Spine27_Port93[i11] !== undefined){ 
            Spine27_Port93_fix[i11] =        Spine27_Port93[i11].slice(26, 34);
            Spine27_Port93_iUpkts[i11] =     Spine27_Port93[i11].slice(33,40);
            Spine27_Port93_iBpkts[i11] =     Spine27_Port93[i11].slice(40,47);
            Spine27_Port93_iMpkts[i11] =     Spine27_Port93[i11].slice(47,54);
            Spine27_Port93_iCongDrops[i11] = Spine27_Port93[i11].slice(54,65);
            Spine27_Port93_ierrs[i11] =      Spine27_Port93[i11].slice(65,71);
            Spine27_Port93_obytes[i11] =     Spine27_Port93[i11].slice(71,78);
            Spine27_Port93_oUpkts[i11] =     Spine27_Port93[i11].slice(78,85);
            Spine27_Port93_oBpkts[i11] =     Spine27_Port93[i11].slice(85,92);
            Spine27_Port93_oMpkts[i11] =     Spine27_Port93[i11].slice(92,99);
            Spine27_Port93_oCongDrops[i11] = Spine27_Port93[i11].slice(99,110);
            Spine27_Port93_oerrs[i11] =      Spine27_Port93[i11].slice(110,116);
            Spine27_Port93_mtu_errs[i11] =   Spine27_Port93[i11].slice(116,125);
        
        if( Spine27_Port93_fix[i11].includes("G")){
            Spine27_Port93_fix[i11] =    Spine27_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_fix[i11][0] = Spine27_Port93_fix[i11][0]*1000000000;}
        else if(Spine27_Port93_fix[i11].includes("M")){
            Spine27_Port93_fix[i11] =    Spine27_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_fix[i11][0] = Spine27_Port93_fix[i11][0]*1000000;}
        else if(Spine27_Port93_fix[i11].includes("K")){
            Spine27_Port93_fix[i11] =    Spine27_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_fix[i11][0] = Spine27_Port93_fix[i11][0]*1000;}
        else {  Spine27_Port93_fix[i11] =    Spine27_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
        if( Spine27_Port93_iUpkts[i11].includes("G")){
            Spine27_Port93_iUpkts[i11] =    Spine27_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iUpkts[i11][0] = Spine27_Port93_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_iUpkts[i11].includes("M")){
            Spine27_Port93_iUpkts[i11] =    Spine27_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iUpkts[i11][0] = Spine27_Port93_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port93_iUpkts[i11].includes("K")){
            Spine27_Port93_iUpkts[i11] =    Spine27_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iUpkts[i11][0] = Spine27_Port93_iUpkts[i11][0]*1000;}
        else {  Spine27_Port93_iUpkts[i11] =    Spine27_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port93_iBpkts[i11].includes("G")){
            Spine27_Port93_iBpkts[i11] =    Spine27_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iBpkts[i11][0] = Spine27_Port93_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_iBpkts[i11].includes("M")){
            Spine27_Port93_iBpkts[i11] =    Spine27_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iBpkts[i11][0] = Spine27_Port93_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port93_iBpkts[i11].includes("K")){
            Spine27_Port93_iBpkts[i11] =    Spine27_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iBpkts[i11][0] = Spine27_Port93_iBpkts[i11][0]*1000;}
        else {  Spine27_Port93_iBpkts[i11] =    Spine27_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_iMpkts[i11].includes("G")){
            Spine27_Port93_iMpkts[i11] =    Spine27_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iMpkts[i11][0] = Spine27_Port93_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_iMpkts[i11].includes("M")){
            Spine27_Port93_iMpkts[i11] =    Spine27_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iMpkts[i11][0] = Spine27_Port93_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port93_iMpkts[i11].includes("K")){
            Spine27_Port93_iMpkts[i11] =    Spine27_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iMpkts[i11][0] = Spine27_Port93_iMpkts[i11][0]*1000;}
        else {  Spine27_Port93_iMpkts[i11] =    Spine27_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_iCongDrops[i11].includes("G")){
            Spine27_Port93_iCongDrops[i11] =    Spine27_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iCongDrops[i11][0] = Spine27_Port93_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port93_iCongDrops[i11].includes("M")){
            Spine27_Port93_iCongDrops[i11] =    Spine27_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iCongDrops[i11][0] = Spine27_Port93_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port93_iCongDrops[i11].includes("K")){
            Spine27_Port93_iCongDrops[i11] =    Spine27_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_iCongDrops[i11][0] = Spine27_Port93_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port93_iCongDrops[i11] =    Spine27_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port93_ierrs[i11].includes("G")){
            Spine27_Port93_ierrs[i11] =    Spine27_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_ierrs[i11][0] = Spine27_Port93_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port93_ierrs[i11].includes("M")){
            Spine27_Port93_ierrs[i11] =    Spine27_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_ierrs[i11][0] = Spine27_Port93_ierrs[i11][0]*1000000;}
        else if(Spine27_Port93_ierrs[i11].includes("K")){
            Spine27_Port93_ierrs[i11] =    Spine27_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_ierrs[i11][0] = Spine27_Port93_ierrs[i11][0]*1000;}
        else {  Spine27_Port93_ierrs[i11] =    Spine27_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_obytes[i11].includes("G")){
            Spine27_Port93_obytes[i11] =    Spine27_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_obytes[i11][0] = Spine27_Port93_obytes[i11][0]*1000000000;}
        else if(Spine27_Port93_obytes[i11].includes("M")){
            Spine27_Port93_obytes[i11] =    Spine27_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_obytes[i11][0] = Spine27_Port93_obytes[i11][0]*1000000;}
        else if(Spine27_Port93_obytes[i11].includes("K")){
            Spine27_Port93_obytes[i11] =    Spine27_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_obytes[i11][0] = Spine27_Port93_obytes[i11][0]*1000;}
        else {  Spine27_Port93_obytes[i11] =    Spine27_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port93_oUpkts[i11].includes("G")){
            Spine27_Port93_oUpkts[i11] =    Spine27_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oUpkts[i11][0] = Spine27_Port93_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_oUpkts[i11].includes("M")){
            Spine27_Port93_oUpkts[i11] =    Spine27_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oUpkts[i11][0] = Spine27_Port93_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port93_oUpkts[i11].includes("K")){
            Spine27_Port93_oUpkts[i11] =    Spine27_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oUpkts[i11][0] = Spine27_Port93_oUpkts[i11][0]*1000;}
        else {  Spine27_Port93_oUpkts[i11] =    Spine27_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_oBpkts[i11].includes("G")){
            Spine27_Port93_oBpkts[i11] =    Spine27_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oBpkts[i11][0] = Spine27_Port93_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_oBpkts[i11].includes("M")){
            Spine27_Port93_oBpkts[i11] =    Spine27_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oBpkts[i11][0] = Spine27_Port93_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port93_oBpkts[i11].includes("K")){
            Spine27_Port93_oBpkts[i11] =    Spine27_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oBpkts[i11][0] = Spine27_Port93_oBpkts[i11][0]*1000;}
        else {  Spine27_Port93_oBpkts[i11] =    Spine27_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port93_oMpkts[i11].includes("G")){
            Spine27_Port93_oMpkts[i11] =    Spine27_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oMpkts[i11][0] = Spine27_Port93_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port93_oMpkts[i11].includes("M")){
            Spine27_Port93_oMpkts[i11] =    Spine27_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oMpkts[i11][0] = Spine27_Port93_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port93_oMpkts[i11].includes("K")){
            Spine27_Port93_oMpkts[i11] =    Spine27_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oMpkts[i11][0] = Spine27_Port93_oMpkts[i11][0]*1000;}
        else {  Spine27_Port93_oMpkts[i11] =    Spine27_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_oCongDrops[i11].includes("G")){
            Spine27_Port93_oCongDrops[i11] =    Spine27_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oCongDrops[i11][0] = Spine27_Port93_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port93_oCongDrops[i11].includes("M")){
            Spine27_Port93_oCongDrops[i11] =    Spine27_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oCongDrops[i11][0] = Spine27_Port93_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port93_oCongDrops[i11].includes("K")){
            Spine27_Port93_oCongDrops[i11] =    Spine27_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oCongDrops[i11][0] = Spine27_Port93_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port93_oCongDrops[i11] =    Spine27_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port93_oerrs[i11].includes("G")){
            Spine27_Port93_oerrs[i11] =    Spine27_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oerrs[i11][0] = Spine27_Port93_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port93_oerrs[i11].includes("M")){
            Spine27_Port93_oerrs[i11] =    Spine27_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oerrs[i11][0] = Spine27_Port93_oerrs[i11][0]*1000000;}
        else if(Spine27_Port93_oerrs[i11].includes("K")){
            Spine27_Port93_oerrs[i11] =    Spine27_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_oerrs[i11][0] = Spine27_Port93_oerrs[i11][0]*1000;}
        else {  Spine27_Port93_oerrs[i11] =    Spine27_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port93_mtu_errs[i11].includes("G")){
            Spine27_Port93_mtu_errs[i11] =    Spine27_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_mtu_errs[i11][0] = Spine27_Port93_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port93_mtu_errs[i11].includes("M")){
            Spine27_Port93_mtu_errs[i11] =    Spine27_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_mtu_errs[i11][0] = Spine27_Port93_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port93_mtu_errs[i11].includes("K")){
            Spine27_Port93_mtu_errs[i11] =    Spine27_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port93_mtu_errs[i11][0] = Spine27_Port93_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port93_mtu_errs[i11] =    Spine27_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }}
        
        if(Spine27_Port94[i11] !== undefined){ 
            Spine27_Port94_fix[i11] =        Spine27_Port94[i11].slice(26, 34);
            Spine27_Port94_iUpkts[i11] =     Spine27_Port94[i11].slice(33,40);
            Spine27_Port94_iBpkts[i11] =     Spine27_Port94[i11].slice(40,47);
            Spine27_Port94_iMpkts[i11] =     Spine27_Port94[i11].slice(47,54);
            Spine27_Port94_iCongDrops[i11] = Spine27_Port94[i11].slice(54,65);
            Spine27_Port94_ierrs[i11] =      Spine27_Port94[i11].slice(65,71);
            Spine27_Port94_obytes[i11] =     Spine27_Port94[i11].slice(71,78);
            Spine27_Port94_oUpkts[i11] =     Spine27_Port94[i11].slice(78,85);
            Spine27_Port94_oBpkts[i11] =     Spine27_Port94[i11].slice(85,92);
            Spine27_Port94_oMpkts[i11] =     Spine27_Port94[i11].slice(92,99);
            Spine27_Port94_oCongDrops[i11] = Spine27_Port94[i11].slice(99,110);
            Spine27_Port94_oerrs[i11] =      Spine27_Port94[i11].slice(110,116);
            Spine27_Port94_mtu_errs[i11] =   Spine27_Port94[i11].slice(116,125);
        
        if( Spine27_Port94_fix[i11].includes("G")){
            Spine27_Port94_fix[i11] =    Spine27_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_fix[i11][0] = Spine27_Port94_fix[i11][0]*1000000000;}
        else if(Spine27_Port94_fix[i11].includes("M")){
            Spine27_Port94_fix[i11] =    Spine27_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_fix[i11][0] = Spine27_Port94_fix[i11][0]*1000000;}
        else if(Spine27_Port94_fix[i11].includes("K")){
            Spine27_Port94_fix[i11] =    Spine27_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_fix[i11][0] = Spine27_Port94_fix[i11][0]*1000;}
        else {  Spine27_Port94_fix[i11] =    Spine27_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port94_iUpkts[i11].includes("G")){
            Spine27_Port94_iUpkts[i11] =    Spine27_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iUpkts[i11][0] = Spine27_Port94_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_iUpkts[i11].includes("M")){
            Spine27_Port94_iUpkts[i11] =    Spine27_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iUpkts[i11][0] = Spine27_Port94_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port94_iUpkts[i11].includes("K")){
            Spine27_Port94_iUpkts[i11] =    Spine27_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iUpkts[i11][0] = Spine27_Port94_iUpkts[i11][0]*1000;}
        else {  Spine27_Port94_iUpkts[i11] =    Spine27_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port94_iBpkts[i11].includes("G")){
            Spine27_Port94_iBpkts[i11] =    Spine27_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iBpkts[i11][0] = Spine27_Port94_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_iBpkts[i11].includes("M")){
            Spine27_Port94_iBpkts[i11] =    Spine27_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iBpkts[i11][0] = Spine27_Port94_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port94_iBpkts[i11].includes("K")){
            Spine27_Port94_iBpkts[i11] =    Spine27_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iBpkts[i11][0] = Spine27_Port94_iBpkts[i11][0]*1000;}
        else {  Spine27_Port94_iBpkts[i11] =    Spine27_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port94_iMpkts[i11].includes("G")){
            Spine27_Port94_iMpkts[i11] =    Spine27_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iMpkts[i11][0] = Spine27_Port94_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_iMpkts[i11].includes("M")){
            Spine27_Port94_iMpkts[i11] =    Spine27_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iMpkts[i11][0] = Spine27_Port94_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port94_iMpkts[i11].includes("K")){
            Spine27_Port94_iMpkts[i11] =    Spine27_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iMpkts[i11][0] = Spine27_Port94_iMpkts[i11][0]*1000;}
        else {  Spine27_Port94_iMpkts[i11] =    Spine27_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port94_iCongDrops[i11].includes("G")){
            Spine27_Port94_iCongDrops[i11] =    Spine27_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iCongDrops[i11][0] = Spine27_Port94_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port94_iCongDrops[i11].includes("M")){
            Spine27_Port94_iCongDrops[i11] =    Spine27_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iCongDrops[i11][0] = Spine27_Port94_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port94_iCongDrops[i11].includes("K")){
            Spine27_Port94_iCongDrops[i11] =    Spine27_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_iCongDrops[i11][0] = Spine27_Port94_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port94_iCongDrops[i11] =    Spine27_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_ierrs[i11].includes("G")){
            Spine27_Port94_ierrs[i11] =    Spine27_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_ierrs[i11][0] = Spine27_Port94_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port94_ierrs[i11].includes("M")){
            Spine27_Port94_ierrs[i11] =    Spine27_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_ierrs[i11][0] = Spine27_Port94_ierrs[i11][0]*1000000;}
        else if(Spine27_Port94_ierrs[i11].includes("K")){
            Spine27_Port94_ierrs[i11] =    Spine27_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_ierrs[i11][0] = Spine27_Port94_ierrs[i11][0]*1000;}
        else {  Spine27_Port94_ierrs[i11] =    Spine27_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_obytes[i11].includes("G")){
            Spine27_Port94_obytes[i11] =    Spine27_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_obytes[i11][0] = Spine27_Port94_obytes[i11][0]*1000000000;}
        else if(Spine27_Port94_obytes[i11].includes("M")){
            Spine27_Port94_obytes[i11] =    Spine27_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_obytes[i11][0] = Spine27_Port94_obytes[i11][0]*1000000;}
        else if(Spine27_Port94_obytes[i11].includes("K")){
            Spine27_Port94_obytes[i11] =    Spine27_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_obytes[i11][0] = Spine27_Port94_obytes[i11][0]*1000;}
        else {  Spine27_Port94_obytes[i11] =    Spine27_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_oUpkts[i11].includes("G")){
            Spine27_Port94_oUpkts[i11] =    Spine27_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oUpkts[i11][0] = Spine27_Port94_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_oUpkts[i11].includes("M")){
            Spine27_Port94_oUpkts[i11] =    Spine27_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oUpkts[i11][0] = Spine27_Port94_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port94_oUpkts[i11].includes("K")){
            Spine27_Port94_oUpkts[i11] =    Spine27_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oUpkts[i11][0] = Spine27_Port94_oUpkts[i11][0]*1000;}
        else {  Spine27_Port94_oUpkts[i11] =    Spine27_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_oBpkts[i11].includes("G")){
            Spine27_Port94_oBpkts[i11] =    Spine27_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oBpkts[i11][0] = Spine27_Port94_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_oBpkts[i11].includes("M")){
            Spine27_Port94_oBpkts[i11] =    Spine27_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oBpkts[i11][0] = Spine27_Port94_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port94_oBpkts[i11].includes("K")){
            Spine27_Port94_oBpkts[i11] =    Spine27_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oBpkts[i11][0] = Spine27_Port94_oBpkts[i11][0]*1000;}
        else {  Spine27_Port94_oBpkts[i11] =    Spine27_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_oMpkts[i11].includes("G")){
            Spine27_Port94_oMpkts[i11] =    Spine27_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oMpkts[i11][0] = Spine27_Port94_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port94_oMpkts[i11].includes("M")){
            Spine27_Port94_oMpkts[i11] =    Spine27_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oMpkts[i11][0] = Spine27_Port94_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port94_oMpkts[i11].includes("K")){
            Spine27_Port94_oMpkts[i11] =    Spine27_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oMpkts[i11][0] = Spine27_Port94_oMpkts[i11][0]*1000;}
        else {  Spine27_Port94_oMpkts[i11] =    Spine27_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_oCongDrops[i11].includes("G")){
            Spine27_Port94_oCongDrops[i11] =    Spine27_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oCongDrops[i11][0] = Spine27_Port94_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port94_oCongDrops[i11].includes("M")){
            Spine27_Port94_oCongDrops[i11] =    Spine27_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oCongDrops[i11][0] = Spine27_Port94_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port94_oCongDrops[i11].includes("K")){
            Spine27_Port94_oCongDrops[i11] =    Spine27_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oCongDrops[i11][0] = Spine27_Port94_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port94_oCongDrops[i11] =    Spine27_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port94_oerrs[i11].includes("G")){
            Spine27_Port94_oerrs[i11] =    Spine27_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oerrs[i11][0] = Spine27_Port94_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port94_oerrs[i11].includes("M")){
            Spine27_Port94_oerrs[i11] =    Spine27_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oerrs[i11][0] = Spine27_Port94_oerrs[i11][0]*1000000;}
        else if(Spine27_Port94_oerrs[i11].includes("K")){
            Spine27_Port94_oerrs[i11] =    Spine27_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_oerrs[i11][0] = Spine27_Port94_oerrs[i11][0]*1000;}
        else {  Spine27_Port94_oerrs[i11] =    Spine27_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port94_mtu_errs[i11].includes("G")){
            Spine27_Port94_mtu_errs[i11] =    Spine27_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_mtu_errs[i11][0] = Spine27_Port94_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port94_mtu_errs[i11].includes("M")){
            Spine27_Port94_mtu_errs[i11] =    Spine27_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_mtu_errs[i11][0] = Spine27_Port94_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port94_mtu_errs[i11].includes("K")){
            Spine27_Port94_mtu_errs[i11] =    Spine27_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port94_mtu_errs[i11][0] = Spine27_Port94_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port94_mtu_errs[i11] =    Spine27_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
            
        if(Spine27_Port95[i11] !== undefined){ 
            Spine27_Port95_fix[i11] =        Spine27_Port95[i11].slice(26, 34);
            Spine27_Port95_iUpkts[i11] =     Spine27_Port95[i11].slice(33,40);
            Spine27_Port95_iBpkts[i11] =     Spine27_Port95[i11].slice(40,47);
            Spine27_Port95_iMpkts[i11] =     Spine27_Port95[i11].slice(47,54);
            Spine27_Port95_iCongDrops[i11] = Spine27_Port95[i11].slice(54,65);
            Spine27_Port95_ierrs[i11] =      Spine27_Port95[i11].slice(65,71);
            Spine27_Port95_obytes[i11] =     Spine27_Port95[i11].slice(71,78);
            Spine27_Port95_oUpkts[i11] =     Spine27_Port95[i11].slice(78,85);
            Spine27_Port95_oBpkts[i11] =     Spine27_Port95[i11].slice(85,92);
            Spine27_Port95_oMpkts[i11] =     Spine27_Port95[i11].slice(92,99);
            Spine27_Port95_oCongDrops[i11] = Spine27_Port95[i11].slice(99,110);
            Spine27_Port95_oerrs[i11] =      Spine27_Port95[i11].slice(110,116);
            Spine27_Port95_mtu_errs[i11] =   Spine27_Port95[i11].slice(116,125);
        
        if( Spine27_Port95_fix[i11].includes("G")){
            Spine27_Port95_fix[i11] =    Spine27_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_fix[i11][0] = Spine27_Port95_fix[i11][0]*1000000000;}
        else if(Spine27_Port95_fix[i11].includes("M")){
            Spine27_Port95_fix[i11] =    Spine27_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_fix[i11][0] = Spine27_Port95_fix[i11][0]*1000000;}
        else if(Spine27_Port95_fix[i11].includes("K")){
            Spine27_Port95_fix[i11] =    Spine27_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_fix[i11][0] = Spine27_Port95_fix[i11][0]*1000;}
        else {  Spine27_Port95_fix[i11] =    Spine27_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port95_iUpkts[i11].includes("G")){
            Spine27_Port95_iUpkts[i11] =    Spine27_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iUpkts[i11][0] = Spine27_Port95_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_iUpkts[i11].includes("M")){
            Spine27_Port95_iUpkts[i11] =    Spine27_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iUpkts[i11][0] = Spine27_Port95_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port95_iUpkts[i11].includes("K")){
            Spine27_Port95_iUpkts[i11] =    Spine27_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iUpkts[i11][0] = Spine27_Port95_iUpkts[i11][0]*1000;}
        else {  Spine27_Port95_iUpkts[i11] =    Spine27_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port95_iBpkts[i11].includes("G")){
            Spine27_Port95_iBpkts[i11] =    Spine27_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iBpkts[i11][0] = Spine27_Port95_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_iBpkts[i11].includes("M")){
            Spine27_Port95_iBpkts[i11] =    Spine27_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iBpkts[i11][0] = Spine27_Port95_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port95_iBpkts[i11].includes("K")){
            Spine27_Port95_iBpkts[i11] =    Spine27_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iBpkts[i11][0] = Spine27_Port95_iBpkts[i11][0]*1000;}
        else {  Spine27_Port95_iBpkts[i11] =    Spine27_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_iMpkts[i11].includes("G")){
            Spine27_Port95_iMpkts[i11] =    Spine27_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iMpkts[i11][0] = Spine27_Port95_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_iMpkts[i11].includes("M")){
            Spine27_Port95_iMpkts[i11] =    Spine27_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iMpkts[i11][0] = Spine27_Port95_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port95_iMpkts[i11].includes("K")){
            Spine27_Port95_iMpkts[i11] =    Spine27_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iMpkts[i11][0] = Spine27_Port95_iMpkts[i11][0]*1000;}
        else {  Spine27_Port95_iMpkts[i11] =    Spine27_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_iCongDrops[i11].includes("G")){
            Spine27_Port95_iCongDrops[i11] =    Spine27_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iCongDrops[i11][0] = Spine27_Port95_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port95_iCongDrops[i11].includes("M")){
            Spine27_Port95_iCongDrops[i11] =    Spine27_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iCongDrops[i11][0] = Spine27_Port95_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port95_iCongDrops[i11].includes("K")){
            Spine27_Port95_iCongDrops[i11] =    Spine27_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_iCongDrops[i11][0] = Spine27_Port95_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port95_iCongDrops[i11] =    Spine27_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port95_ierrs[i11].includes("G")){
            Spine27_Port95_ierrs[i11] =    Spine27_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_ierrs[i11][0] = Spine27_Port95_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port95_ierrs[i11].includes("M")){
            Spine27_Port95_ierrs[i11] =    Spine27_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_ierrs[i11][0] = Spine27_Port95_ierrs[i11][0]*1000000;}
        else if(Spine27_Port95_ierrs[i11].includes("K")){
            Spine27_Port95_ierrs[i11] =    Spine27_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_ierrs[i11][0] = Spine27_Port95_ierrs[i11][0]*1000;}
        else {  Spine27_Port95_ierrs[i11] =    Spine27_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port95_obytes[i11].includes("G")){
            Spine27_Port95_obytes[i11] =    Spine27_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_obytes[i11][0] = Spine27_Port95_obytes[i11][0]*1000000000;}
        else if(Spine27_Port95_obytes[i11].includes("M")){
            Spine27_Port95_obytes[i11] =    Spine27_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_obytes[i11][0] = Spine27_Port95_obytes[i11][0]*1000000;}
        else if(Spine27_Port95_obytes[i11].includes("K")){
            Spine27_Port95_obytes[i11] =    Spine27_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_obytes[i11][0] = Spine27_Port95_obytes[i11][0]*1000;}
        else {  Spine27_Port95_obytes[i11] =    Spine27_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_oUpkts[i11].includes("G")){
            Spine27_Port95_oUpkts[i11] =    Spine27_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oUpkts[i11][0] = Spine27_Port95_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_oUpkts[i11].includes("M")){
            Spine27_Port95_oUpkts[i11] =    Spine27_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oUpkts[i11][0] = Spine27_Port95_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port95_oUpkts[i11].includes("K")){
            Spine27_Port95_oUpkts[i11] =    Spine27_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oUpkts[i11][0] = Spine27_Port95_oUpkts[i11][0]*1000;}
        else {  Spine27_Port95_oUpkts[i11] =    Spine27_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_oBpkts[i11].includes("G")){
            Spine27_Port95_oBpkts[i11] =    Spine27_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oBpkts[i11][0] = Spine27_Port95_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_oBpkts[i11].includes("M")){
            Spine27_Port95_oBpkts[i11] =    Spine27_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oBpkts[i11][0] = Spine27_Port95_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port95_oBpkts[i11].includes("K")){
            Spine27_Port95_oBpkts[i11] =    Spine27_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oBpkts[i11][0] = Spine27_Port95_oBpkts[i11][0]*1000;}
        else {  Spine27_Port95_oBpkts[i11] =    Spine27_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_oMpkts[i11].includes("G")){
            Spine27_Port95_oMpkts[i11] =    Spine27_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oMpkts[i11][0] = Spine27_Port95_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port95_oMpkts[i11].includes("M")){
            Spine27_Port95_oMpkts[i11] =    Spine27_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oMpkts[i11][0] = Spine27_Port95_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port95_oMpkts[i11].includes("K")){
            Spine27_Port95_oMpkts[i11] =    Spine27_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oMpkts[i11][0] = Spine27_Port95_oMpkts[i11][0]*1000;}
        else {  Spine27_Port95_oMpkts[i11] =    Spine27_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port95_oCongDrops[i11].includes("G")){
            Spine27_Port95_oCongDrops[i11] =    Spine27_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oCongDrops[i11][0] = Spine27_Port95_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port95_oCongDrops[i11].includes("M")){
            Spine27_Port95_oCongDrops[i11] =    Spine27_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oCongDrops[i11][0] = Spine27_Port95_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port95_oCongDrops[i11].includes("K")){
            Spine27_Port95_oCongDrops[i11] =    Spine27_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oCongDrops[i11][0] = Spine27_Port95_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port95_oCongDrops[i11] =    Spine27_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port95_oerrs[i11].includes("G")){
            Spine27_Port95_oerrs[i11] =    Spine27_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oerrs[i11][0] = Spine27_Port95_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port95_oerrs[i11].includes("M")){
            Spine27_Port95_oerrs[i11] =    Spine27_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oerrs[i11][0] = Spine27_Port95_oerrs[i11][0]*1000000;}
        else if(Spine27_Port95_oerrs[i11].includes("K")){
            Spine27_Port95_oerrs[i11] =    Spine27_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_oerrs[i11][0] = Spine27_Port95_oerrs[i11][0]*1000;}
        else {  Spine27_Port95_oerrs[i11] =    Spine27_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port95_mtu_errs[i11].includes("G")){
            Spine27_Port95_mtu_errs[i11] =    Spine27_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_mtu_errs[i11][0] = Spine27_Port95_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port95_mtu_errs[i11].includes("M")){
            Spine27_Port95_mtu_errs[i11] =    Spine27_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_mtu_errs[i11][0] = Spine27_Port95_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port95_mtu_errs[i11].includes("K")){
            Spine27_Port95_mtu_errs[i11] =    Spine27_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port95_mtu_errs[i11][0] = Spine27_Port95_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port95_mtu_errs[i11] =    Spine27_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}            

        if(Spine27_Port96[i11] !== undefined){ 
            Spine27_Port96_fix[i11] =        Spine27_Port96[i11].slice(26, 34);
            Spine27_Port96_iUpkts[i11] =     Spine27_Port96[i11].slice(33,40);
            Spine27_Port96_iBpkts[i11] =     Spine27_Port96[i11].slice(40,47);
            Spine27_Port96_iMpkts[i11] =     Spine27_Port96[i11].slice(47,54);
            Spine27_Port96_iCongDrops[i11] = Spine27_Port96[i11].slice(54,65);
            Spine27_Port96_ierrs[i11] =      Spine27_Port96[i11].slice(65,71);
            Spine27_Port96_obytes[i11] =     Spine27_Port96[i11].slice(71,78);
            Spine27_Port96_oUpkts[i11] =     Spine27_Port96[i11].slice(78,85);
            Spine27_Port96_oBpkts[i11] =     Spine27_Port96[i11].slice(85,92);
            Spine27_Port96_oMpkts[i11] =     Spine27_Port96[i11].slice(92,99);
            Spine27_Port96_oCongDrops[i11] = Spine27_Port96[i11].slice(99,110);
            Spine27_Port96_oerrs[i11] =      Spine27_Port96[i11].slice(110,116);
            Spine27_Port96_mtu_errs[i11] =   Spine27_Port96[i11].slice(116,125);
        
        if( Spine27_Port96_fix[i11].includes("G")){
            Spine27_Port96_fix[i11] =    Spine27_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_fix[i11][0] = Spine27_Port96_fix[i11][0]*1000000000;}
        else if(Spine27_Port96_fix[i11].includes("M")){
            Spine27_Port96_fix[i11] =    Spine27_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_fix[i11][0] = Spine27_Port96_fix[i11][0]*1000000;}
        else if(Spine27_Port96_fix[i11].includes("K")){
            Spine27_Port96_fix[i11] =    Spine27_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_fix[i11][0] = Spine27_Port96_fix[i11][0]*1000;}
        else {  Spine27_Port96_fix[i11] =    Spine27_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
        if( Spine27_Port96_iUpkts[i11].includes("G")){
            Spine27_Port96_iUpkts[i11] =    Spine27_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iUpkts[i11][0] = Spine27_Port96_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_iUpkts[i11].includes("M")){
            Spine27_Port96_iUpkts[i11] =    Spine27_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iUpkts[i11][0] = Spine27_Port96_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port96_iUpkts[i11].includes("K")){
            Spine27_Port96_iUpkts[i11] =    Spine27_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iUpkts[i11][0] = Spine27_Port96_iUpkts[i11][0]*1000;}
        else {  Spine27_Port96_iUpkts[i11] =    Spine27_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port96_iBpkts[i11].includes("G")){
            Spine27_Port96_iBpkts[i11] =    Spine27_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iBpkts[i11][0] = Spine27_Port96_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_iBpkts[i11].includes("M")){
            Spine27_Port96_iBpkts[i11] =    Spine27_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iBpkts[i11][0] = Spine27_Port96_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port96_iBpkts[i11].includes("K")){
            Spine27_Port96_iBpkts[i11] =    Spine27_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iBpkts[i11][0] = Spine27_Port96_iBpkts[i11][0]*1000;}
        else {  Spine27_Port96_iBpkts[i11] =    Spine27_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
        
            if(Spine27_Port96_iMpkts[i11].includes("G")){
            Spine27_Port96_iMpkts[i11] =    Spine27_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iMpkts[i11][0] = Spine27_Port96_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_iMpkts[i11].includes("M")){
            Spine27_Port96_iMpkts[i11] =    Spine27_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iMpkts[i11][0] = Spine27_Port96_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port96_iMpkts[i11].includes("K")){
            Spine27_Port96_iMpkts[i11] =    Spine27_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iMpkts[i11][0] = Spine27_Port96_iMpkts[i11][0]*1000;}
        else {  Spine27_Port96_iMpkts[i11] =    Spine27_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
        
            if(Spine27_Port96_iCongDrops[i11].includes("G")){
            Spine27_Port96_iCongDrops[i11] =    Spine27_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iCongDrops[i11][0] = Spine27_Port96_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port96_iCongDrops[i11].includes("M")){
            Spine27_Port96_iCongDrops[i11] =    Spine27_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iCongDrops[i11][0] = Spine27_Port96_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port96_iCongDrops[i11].includes("K")){
            Spine27_Port96_iCongDrops[i11] =    Spine27_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_iCongDrops[i11][0] = Spine27_Port96_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port96_iCongDrops[i11] =    Spine27_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port96_ierrs[i11].includes("G")){
            Spine27_Port96_ierrs[i11] =    Spine27_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_ierrs[i11][0] = Spine27_Port96_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port96_ierrs[i11].includes("M")){
            Spine27_Port96_ierrs[i11] =    Spine27_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_ierrs[i11][0] = Spine27_Port96_ierrs[i11][0]*1000000;}
        else if(Spine27_Port96_ierrs[i11].includes("K")){
            Spine27_Port96_ierrs[i11] =    Spine27_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_ierrs[i11][0] = Spine27_Port96_ierrs[i11][0]*1000;}
        else {  Spine27_Port96_ierrs[i11] =    Spine27_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port96_obytes[i11].includes("G")){
            Spine27_Port96_obytes[i11] =    Spine27_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_obytes[i11][0] = Spine27_Port96_obytes[i11][0]*1000000000;}
        else if(Spine27_Port96_obytes[i11].includes("M")){
            Spine27_Port96_obytes[i11] =    Spine27_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_obytes[i11][0] = Spine27_Port96_obytes[i11][0]*1000000;}
        else if(Spine27_Port96_obytes[i11].includes("K")){
            Spine27_Port96_obytes[i11] =    Spine27_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_obytes[i11][0] = Spine27_Port96_obytes[i11][0]*1000;}
        else {  Spine27_Port96_obytes[i11] =    Spine27_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port96_oUpkts[i11].includes("G")){
            Spine27_Port96_oUpkts[i11] =    Spine27_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oUpkts[i11][0] = Spine27_Port96_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_oUpkts[i11].includes("M")){
            Spine27_Port96_oUpkts[i11] =    Spine27_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oUpkts[i11][0] = Spine27_Port96_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port96_oUpkts[i11].includes("K")){
            Spine27_Port96_oUpkts[i11] =    Spine27_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oUpkts[i11][0] = Spine27_Port96_oUpkts[i11][0]*1000;}
        else {  Spine27_Port96_oUpkts[i11] =    Spine27_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port96_oBpkts[i11].includes("G")){
            Spine27_Port96_oBpkts[i11] =    Spine27_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oBpkts[i11][0] = Spine27_Port96_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_oBpkts[i11].includes("M")){
            Spine27_Port96_oBpkts[i11] =    Spine27_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oBpkts[i11][0] = Spine27_Port96_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port96_oBpkts[i11].includes("K")){
            Spine27_Port96_oBpkts[i11] =    Spine27_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oBpkts[i11][0] = Spine27_Port96_oBpkts[i11][0]*1000;}
        else {  Spine27_Port96_oBpkts[i11] =    Spine27_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port96_oMpkts[i11].includes("G")){
            Spine27_Port96_oMpkts[i11] =    Spine27_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oMpkts[i11][0] = Spine27_Port96_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port96_oMpkts[i11].includes("M")){
            Spine27_Port96_oMpkts[i11] =    Spine27_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oMpkts[i11][0] = Spine27_Port96_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port96_oMpkts[i11].includes("K")){
            Spine27_Port96_oMpkts[i11] =    Spine27_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oMpkts[i11][0] = Spine27_Port96_oMpkts[i11][0]*1000;}
        else {  Spine27_Port96_oMpkts[i11] =    Spine27_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port96_oCongDrops[i11].includes("G")){
            Spine27_Port96_oCongDrops[i11] =    Spine27_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oCongDrops[i11][0] = Spine27_Port96_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port96_oCongDrops[i11].includes("M")){
            Spine27_Port96_oCongDrops[i11] =    Spine27_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oCongDrops[i11][0] = Spine27_Port96_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port96_oCongDrops[i11].includes("K")){
            Spine27_Port96_oCongDrops[i11] =    Spine27_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oCongDrops[i11][0] = Spine27_Port96_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port96_oCongDrops[i11] =    Spine27_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port96_oerrs[i11].includes("G")){
            Spine27_Port96_oerrs[i11] =    Spine27_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oerrs[i11][0] = Spine27_Port96_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port96_oerrs[i11].includes("M")){
            Spine27_Port96_oerrs[i11] =    Spine27_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oerrs[i11][0] = Spine27_Port96_oerrs[i11][0]*1000000;}
        else if(Spine27_Port96_oerrs[i11].includes("K")){
            Spine27_Port96_oerrs[i11] =    Spine27_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_oerrs[i11][0] = Spine27_Port96_oerrs[i11][0]*1000;}
        else {  Spine27_Port96_oerrs[i11] =    Spine27_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port96_mtu_errs[i11].includes("G")){
            Spine27_Port96_mtu_errs[i11] =    Spine27_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_mtu_errs[i11][0] = Spine27_Port96_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port96_mtu_errs[i11].includes("M")){
            Spine27_Port96_mtu_errs[i11] =    Spine27_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_mtu_errs[i11][0] = Spine27_Port96_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port96_mtu_errs[i11].includes("K")){
            Spine27_Port96_mtu_errs[i11] =    Spine27_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port96_mtu_errs[i11][0] = Spine27_Port96_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port96_mtu_errs[i11] =    Spine27_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
        
        if(Spine27_Port97[i11] !== undefined){ 
            Spine27_Port97_fix[i11] =        Spine27_Port97[i11].slice(26, 34);
            Spine27_Port97_iUpkts[i11] =     Spine27_Port97[i11].slice(33,40);
            Spine27_Port97_iBpkts[i11] =     Spine27_Port97[i11].slice(40,47);
            Spine27_Port97_iMpkts[i11] =     Spine27_Port97[i11].slice(47,54);
            Spine27_Port97_iCongDrops[i11] = Spine27_Port97[i11].slice(54,65);
            Spine27_Port97_ierrs[i11] =      Spine27_Port97[i11].slice(65,71);
            Spine27_Port97_obytes[i11] =     Spine27_Port97[i11].slice(71,78);
            Spine27_Port97_oUpkts[i11] =     Spine27_Port97[i11].slice(78,85);
            Spine27_Port97_oBpkts[i11] =     Spine27_Port97[i11].slice(85,92);
            Spine27_Port97_oMpkts[i11] =     Spine27_Port97[i11].slice(92,99);
            Spine27_Port97_oCongDrops[i11] = Spine27_Port97[i11].slice(99,110);
            Spine27_Port97_oerrs[i11] =      Spine27_Port97[i11].slice(110,116);
            Spine27_Port97_mtu_errs[i11] =   Spine27_Port97[i11].slice(116,125);
        
        if( Spine27_Port97_fix[i11].includes("G")){
            Spine27_Port97_fix[i11] =    Spine27_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_fix[i11][0] = Spine27_Port97_fix[i11][0]*1000000000;}
        else if(Spine27_Port97_fix[i11].includes("M")){
            Spine27_Port97_fix[i11] =    Spine27_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_fix[i11][0] = Spine27_Port97_fix[i11][0]*1000000;}
        else if(Spine27_Port97_fix[i11].includes("K")){
            Spine27_Port97_fix[i11] =    Spine27_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_fix[i11][0] = Spine27_Port97_fix[i11][0]*1000;}
        else {  Spine27_Port97_fix[i11] =    Spine27_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port97_iUpkts[i11].includes("G")){
            Spine27_Port97_iUpkts[i11] =    Spine27_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iUpkts[i11][0] = Spine27_Port97_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_iUpkts[i11].includes("M")){
            Spine27_Port97_iUpkts[i11] =    Spine27_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iUpkts[i11][0] = Spine27_Port97_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port97_iUpkts[i11].includes("K")){
            Spine27_Port97_iUpkts[i11] =    Spine27_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iUpkts[i11][0] = Spine27_Port97_iUpkts[i11][0]*1000;}
        else {  Spine27_Port97_iUpkts[i11] =    Spine27_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_iBpkts[i11].includes("G")){
            Spine27_Port97_iBpkts[i11] =    Spine27_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iBpkts[i11][0] = Spine27_Port97_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_iBpkts[i11].includes("M")){
            Spine27_Port97_iBpkts[i11] =    Spine27_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iBpkts[i11][0] = Spine27_Port97_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port97_iBpkts[i11].includes("K")){
            Spine27_Port97_iBpkts[i11] =    Spine27_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iBpkts[i11][0] = Spine27_Port97_iBpkts[i11][0]*1000;}
        else {  Spine27_Port97_iBpkts[i11] =    Spine27_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port97_iMpkts[i11].includes("G")){
            Spine27_Port97_iMpkts[i11] =    Spine27_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iMpkts[i11][0] = Spine27_Port97_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_iMpkts[i11].includes("M")){
            Spine27_Port97_iMpkts[i11] =    Spine27_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iMpkts[i11][0] = Spine27_Port97_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port97_iMpkts[i11].includes("K")){
            Spine27_Port97_iMpkts[i11] =    Spine27_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iMpkts[i11][0] = Spine27_Port97_iMpkts[i11][0]*1000;}
        else {  Spine27_Port97_iMpkts[i11] =    Spine27_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_iCongDrops[i11].includes("G")){
            Spine27_Port97_iCongDrops[i11] =    Spine27_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iCongDrops[i11][0] = Spine27_Port97_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port97_iCongDrops[i11].includes("M")){
            Spine27_Port97_iCongDrops[i11] =    Spine27_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iCongDrops[i11][0] = Spine27_Port97_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port97_iCongDrops[i11].includes("K")){
            Spine27_Port97_iCongDrops[i11] =    Spine27_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_iCongDrops[i11][0] = Spine27_Port97_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port97_iCongDrops[i11] =    Spine27_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_ierrs[i11].includes("G")){
            Spine27_Port97_ierrs[i11] =    Spine27_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_ierrs[i11][0] = Spine27_Port97_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port97_ierrs[i11].includes("M")){
            Spine27_Port97_ierrs[i11] =    Spine27_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_ierrs[i11][0] = Spine27_Port97_ierrs[i11][0]*1000000;}
        else if(Spine27_Port97_ierrs[i11].includes("K")){
            Spine27_Port97_ierrs[i11] =    Spine27_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_ierrs[i11][0] = Spine27_Port97_ierrs[i11][0]*1000;}
        else {  Spine27_Port97_ierrs[i11] =    Spine27_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port97_obytes[i11].includes("G")){
            Spine27_Port97_obytes[i11] =    Spine27_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_obytes[i11][0] = Spine27_Port97_obytes[i11][0]*1000000000;}
        else if(Spine27_Port97_obytes[i11].includes("M")){
            Spine27_Port97_obytes[i11] =    Spine27_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_obytes[i11][0] = Spine27_Port97_obytes[i11][0]*1000000;}
        else if(Spine27_Port97_obytes[i11].includes("K")){
            Spine27_Port97_obytes[i11] =    Spine27_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_obytes[i11][0] = Spine27_Port97_obytes[i11][0]*1000;}
        else {  Spine27_Port97_obytes[i11] =    Spine27_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_oUpkts[i11].includes("G")){
            Spine27_Port97_oUpkts[i11] =    Spine27_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oUpkts[i11][0] = Spine27_Port97_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_oUpkts[i11].includes("M")){
            Spine27_Port97_oUpkts[i11] =    Spine27_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oUpkts[i11][0] = Spine27_Port97_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port97_oUpkts[i11].includes("K")){
            Spine27_Port97_oUpkts[i11] =    Spine27_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oUpkts[i11][0] = Spine27_Port97_oUpkts[i11][0]*1000;}
        else {  Spine27_Port97_oUpkts[i11] =    Spine27_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port97_oBpkts[i11].includes("G")){
            Spine27_Port97_oBpkts[i11] =    Spine27_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oBpkts[i11][0] = Spine27_Port97_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_oBpkts[i11].includes("M")){
            Spine27_Port97_oBpkts[i11] =    Spine27_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oBpkts[i11][0] = Spine27_Port97_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port97_oBpkts[i11].includes("K")){
            Spine27_Port97_oBpkts[i11] =    Spine27_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oBpkts[i11][0] = Spine27_Port97_oBpkts[i11][0]*1000;}
        else {  Spine27_Port97_oBpkts[i11] =    Spine27_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port97_oMpkts[i11].includes("G")){
            Spine27_Port97_oMpkts[i11] =    Spine27_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oMpkts[i11][0] = Spine27_Port97_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port97_oMpkts[i11].includes("M")){
            Spine27_Port97_oMpkts[i11] =    Spine27_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oMpkts[i11][0] = Spine27_Port97_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port97_oMpkts[i11].includes("K")){
            Spine27_Port97_oMpkts[i11] =    Spine27_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oMpkts[i11][0] = Spine27_Port97_oMpkts[i11][0]*1000;}
        else {  Spine27_Port97_oMpkts[i11] =    Spine27_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_oCongDrops[i11].includes("G")){
            Spine27_Port97_oCongDrops[i11] =    Spine27_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oCongDrops[i11][0] = Spine27_Port97_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port97_oCongDrops[i11].includes("M")){
            Spine27_Port97_oCongDrops[i11] =    Spine27_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oCongDrops[i11][0] = Spine27_Port97_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port97_oCongDrops[i11].includes("K")){
            Spine27_Port97_oCongDrops[i11] =    Spine27_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oCongDrops[i11][0] = Spine27_Port97_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port97_oCongDrops[i11] =    Spine27_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_oerrs[i11].includes("G")){
            Spine27_Port97_oerrs[i11] =    Spine27_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oerrs[i11][0] = Spine27_Port97_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port97_oerrs[i11].includes("M")){
            Spine27_Port97_oerrs[i11] =    Spine27_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oerrs[i11][0] = Spine27_Port97_oerrs[i11][0]*1000000;}
        else if(Spine27_Port97_oerrs[i11].includes("K")){
            Spine27_Port97_oerrs[i11] =    Spine27_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_oerrs[i11][0] = Spine27_Port97_oerrs[i11][0]*1000;}
        else {  Spine27_Port97_oerrs[i11] =    Spine27_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port97_mtu_errs[i11].includes("G")){
            Spine27_Port97_mtu_errs[i11] =    Spine27_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_mtu_errs[i11][0] = Spine27_Port97_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port97_mtu_errs[i11].includes("M")){
            Spine27_Port97_mtu_errs[i11] =    Spine27_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_mtu_errs[i11][0] = Spine27_Port97_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port97_mtu_errs[i11].includes("K")){
            Spine27_Port97_mtu_errs[i11] =    Spine27_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port97_mtu_errs[i11][0] = Spine27_Port97_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port97_mtu_errs[i11] =    Spine27_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }}
        
        if(Spine27_Port98[i11] !== undefined){ 
            Spine27_Port98_fix[i11] =        Spine27_Port98[i11].slice(26, 34);
            Spine27_Port98_iUpkts[i11] =     Spine27_Port98[i11].slice(33,40);
            Spine27_Port98_iBpkts[i11] =     Spine27_Port98[i11].slice(40,47);
            Spine27_Port98_iMpkts[i11] =     Spine27_Port98[i11].slice(47,54);
            Spine27_Port98_iCongDrops[i11] = Spine27_Port98[i11].slice(54,65);
            Spine27_Port98_ierrs[i11] =      Spine27_Port98[i11].slice(65,71);
            Spine27_Port98_obytes[i11] =     Spine27_Port98[i11].slice(71,78);
            Spine27_Port98_oUpkts[i11] =     Spine27_Port98[i11].slice(78,85);
            Spine27_Port98_oBpkts[i11] =     Spine27_Port98[i11].slice(85,92);
            Spine27_Port98_oMpkts[i11] =     Spine27_Port98[i11].slice(92,99);
            Spine27_Port98_oCongDrops[i11] = Spine27_Port98[i11].slice(99,110);
            Spine27_Port98_oerrs[i11] =      Spine27_Port98[i11].slice(110,116);
            Spine27_Port98_mtu_errs[i11] =   Spine27_Port98[i11].slice(116,125);
        
        if( Spine27_Port98_fix[i11].includes("G")){
            Spine27_Port98_fix[i11] =    Spine27_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_fix[i11][0] = Spine27_Port98_fix[i11][0]*1000000000;}
        else if(Spine27_Port98_fix[i11].includes("M")){
            Spine27_Port98_fix[i11] =    Spine27_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_fix[i11][0] = Spine27_Port98_fix[i11][0]*1000000;}
        else if(Spine27_Port98_fix[i11].includes("K")){
            Spine27_Port98_fix[i11] =    Spine27_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_fix[i11][0] = Spine27_Port98_fix[i11][0]*1000;}
        else {  Spine27_Port98_fix[i11] =    Spine27_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port98_iUpkts[i11].includes("G")){
            Spine27_Port98_iUpkts[i11] =    Spine27_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iUpkts[i11][0] = Spine27_Port98_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_iUpkts[i11].includes("M")){
            Spine27_Port98_iUpkts[i11] =    Spine27_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iUpkts[i11][0] = Spine27_Port98_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port98_iUpkts[i11].includes("K")){
            Spine27_Port98_iUpkts[i11] =    Spine27_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iUpkts[i11][0] = Spine27_Port98_iUpkts[i11][0]*1000;}
        else {  Spine27_Port98_iUpkts[i11] =    Spine27_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port98_iBpkts[i11].includes("G")){
            Spine27_Port98_iBpkts[i11] =    Spine27_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iBpkts[i11][0] = Spine27_Port98_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_iBpkts[i11].includes("M")){
            Spine27_Port98_iBpkts[i11] =    Spine27_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iBpkts[i11][0] = Spine27_Port98_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port98_iBpkts[i11].includes("K")){
            Spine27_Port98_iBpkts[i11] =    Spine27_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iBpkts[i11][0] = Spine27_Port98_iBpkts[i11][0]*1000;}
        else {  Spine27_Port98_iBpkts[i11] =    Spine27_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port98_iMpkts[i11].includes("G")){
            Spine27_Port98_iMpkts[i11] =    Spine27_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iMpkts[i11][0] = Spine27_Port98_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_iMpkts[i11].includes("M")){
            Spine27_Port98_iMpkts[i11] =    Spine27_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iMpkts[i11][0] = Spine27_Port98_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port98_iMpkts[i11].includes("K")){
            Spine27_Port98_iMpkts[i11] =    Spine27_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iMpkts[i11][0] = Spine27_Port98_iMpkts[i11][0]*1000;}
        else {  Spine27_Port98_iMpkts[i11] =    Spine27_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port98_iCongDrops[i11].includes("G")){
            Spine27_Port98_iCongDrops[i11] =    Spine27_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iCongDrops[i11][0] = Spine27_Port98_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port98_iCongDrops[i11].includes("M")){
            Spine27_Port98_iCongDrops[i11] =    Spine27_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iCongDrops[i11][0] = Spine27_Port98_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port98_iCongDrops[i11].includes("K")){
            Spine27_Port98_iCongDrops[i11] =    Spine27_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_iCongDrops[i11][0] = Spine27_Port98_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port98_iCongDrops[i11] =    Spine27_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port98_ierrs[i11].includes("G")){
            Spine27_Port98_ierrs[i11] =    Spine27_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_ierrs[i11][0] = Spine27_Port98_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port98_ierrs[i11].includes("M")){
            Spine27_Port98_ierrs[i11] =    Spine27_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_ierrs[i11][0] = Spine27_Port98_ierrs[i11][0]*1000000;}
        else if(Spine27_Port98_ierrs[i11].includes("K")){
            Spine27_Port98_ierrs[i11] =    Spine27_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_ierrs[i11][0] = Spine27_Port98_ierrs[i11][0]*1000;}
        else {  Spine27_Port98_ierrs[i11] =    Spine27_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port98_obytes[i11].includes("G")){
            Spine27_Port98_obytes[i11] =    Spine27_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_obytes[i11][0] = Spine27_Port98_obytes[i11][0]*1000000000;}
        else if(Spine27_Port98_obytes[i11].includes("M")){
            Spine27_Port98_obytes[i11] =    Spine27_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_obytes[i11][0] = Spine27_Port98_obytes[i11][0]*1000000;}
        else if(Spine27_Port98_obytes[i11].includes("K")){
            Spine27_Port98_obytes[i11] =    Spine27_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_obytes[i11][0] = Spine27_Port98_obytes[i11][0]*1000;}
        else {  Spine27_Port98_obytes[i11] =    Spine27_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port98_oUpkts[i11].includes("G")){
            Spine27_Port98_oUpkts[i11] =    Spine27_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oUpkts[i11][0] = Spine27_Port98_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_oUpkts[i11].includes("M")){
            Spine27_Port98_oUpkts[i11] =    Spine27_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oUpkts[i11][0] = Spine27_Port98_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port98_oUpkts[i11].includes("K")){
            Spine27_Port98_oUpkts[i11] =    Spine27_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oUpkts[i11][0] = Spine27_Port98_oUpkts[i11][0]*1000;}
        else {  Spine27_Port98_oUpkts[i11] =    Spine27_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port98_oBpkts[i11].includes("G")){
            Spine27_Port98_oBpkts[i11] =    Spine27_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oBpkts[i11][0] = Spine27_Port98_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_oBpkts[i11].includes("M")){
            Spine27_Port98_oBpkts[i11] =    Spine27_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oBpkts[i11][0] = Spine27_Port98_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port98_oBpkts[i11].includes("K")){
            Spine27_Port98_oBpkts[i11] =    Spine27_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oBpkts[i11][0] = Spine27_Port98_oBpkts[i11][0]*1000;}
        else {  Spine27_Port98_oBpkts[i11] =    Spine27_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port98_oMpkts[i11].includes("G")){
            Spine27_Port98_oMpkts[i11] =    Spine27_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oMpkts[i11][0] = Spine27_Port98_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port98_oMpkts[i11].includes("M")){
            Spine27_Port98_oMpkts[i11] =    Spine27_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oMpkts[i11][0] = Spine27_Port98_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port98_oMpkts[i11].includes("K")){
            Spine27_Port98_oMpkts[i11] =    Spine27_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oMpkts[i11][0] = Spine27_Port98_oMpkts[i11][0]*1000;}
        else {  Spine27_Port98_oMpkts[i11] =    Spine27_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port98_oCongDrops[i11].includes("G")){
            Spine27_Port98_oCongDrops[i11] =    Spine27_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oCongDrops[i11][0] = Spine27_Port98_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port98_oCongDrops[i11].includes("M")){
            Spine27_Port98_oCongDrops[i11] =    Spine27_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oCongDrops[i11][0] = Spine27_Port98_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port98_oCongDrops[i11].includes("K")){
            Spine27_Port98_oCongDrops[i11] =    Spine27_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oCongDrops[i11][0] = Spine27_Port98_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port98_oCongDrops[i11] =    Spine27_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port98_oerrs[i11].includes("G")){
            Spine27_Port98_oerrs[i11] =    Spine27_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oerrs[i11][0] = Spine27_Port98_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port98_oerrs[i11].includes("M")){
            Spine27_Port98_oerrs[i11] =    Spine27_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oerrs[i11][0] = Spine27_Port98_oerrs[i11][0]*1000000;}
        else if(Spine27_Port98_oerrs[i11].includes("K")){
            Spine27_Port98_oerrs[i11] =    Spine27_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_oerrs[i11][0] = Spine27_Port98_oerrs[i11][0]*1000;}
        else {  Spine27_Port98_oerrs[i11] =    Spine27_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
        
            if(Spine27_Port98_mtu_errs[i11].includes("G")){
            Spine27_Port98_mtu_errs[i11] =    Spine27_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_mtu_errs[i11][0] = Spine27_Port98_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port98_mtu_errs[i11].includes("M")){
            Spine27_Port98_mtu_errs[i11] =    Spine27_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_mtu_errs[i11][0] = Spine27_Port98_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port98_mtu_errs[i11].includes("K")){
            Spine27_Port98_mtu_errs[i11] =    Spine27_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port98_mtu_errs[i11][0] = Spine27_Port98_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port98_mtu_errs[i11] =    Spine27_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }}
        
        if(Spine27_Port99[i11] !== undefined){ 
            Spine27_Port99_fix[i11] =        Spine27_Port99[i11].slice(26, 34);
            Spine27_Port99_iUpkts[i11] =     Spine27_Port99[i11].slice(33,40);
            Spine27_Port99_iBpkts[i11] =     Spine27_Port99[i11].slice(40,47);
            Spine27_Port99_iMpkts[i11] =     Spine27_Port99[i11].slice(47,54);
            Spine27_Port99_iCongDrops[i11] = Spine27_Port99[i11].slice(54,65);
            Spine27_Port99_ierrs[i11] =      Spine27_Port99[i11].slice(65,71);
            Spine27_Port99_obytes[i11] =     Spine27_Port99[i11].slice(71,78);
            Spine27_Port99_oUpkts[i11] =     Spine27_Port99[i11].slice(78,85);
            Spine27_Port99_oBpkts[i11] =     Spine27_Port99[i11].slice(85,92);
            Spine27_Port99_oMpkts[i11] =     Spine27_Port99[i11].slice(92,99);
            Spine27_Port99_oCongDrops[i11] = Spine27_Port99[i11].slice(99,110);
            Spine27_Port99_oerrs[i11] =      Spine27_Port99[i11].slice(110,116);
            Spine27_Port99_mtu_errs[i11] =   Spine27_Port99[i11].slice(116,125);
        
        if( Spine27_Port99_fix[i11].includes("G")){
            Spine27_Port99_fix[i11] =    Spine27_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_fix[i11][0] = Spine27_Port99_fix[i11][0]*1000000000;}
        else if(Spine27_Port99_fix[i11].includes("M")){
            Spine27_Port99_fix[i11] =    Spine27_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_fix[i11][0] = Spine27_Port99_fix[i11][0]*1000000;}
        else if(Spine27_Port99_fix[i11].includes("K")){
            Spine27_Port99_fix[i11] =    Spine27_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_fix[i11][0] = Spine27_Port99_fix[i11][0]*1000;}
        else {  Spine27_Port99_fix[i11] =    Spine27_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
        if( Spine27_Port99_iUpkts[i11].includes("G")){
            Spine27_Port99_iUpkts[i11] =    Spine27_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iUpkts[i11][0] = Spine27_Port99_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_iUpkts[i11].includes("M")){
            Spine27_Port99_iUpkts[i11] =    Spine27_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iUpkts[i11][0] = Spine27_Port99_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port99_iUpkts[i11].includes("K")){
            Spine27_Port99_iUpkts[i11] =    Spine27_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iUpkts[i11][0] = Spine27_Port99_iUpkts[i11][0]*1000;}
        else {  Spine27_Port99_iUpkts[i11] =    Spine27_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port99_iBpkts[i11].includes("G")){
            Spine27_Port99_iBpkts[i11] =    Spine27_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iBpkts[i11][0] = Spine27_Port99_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_iBpkts[i11].includes("M")){
            Spine27_Port99_iBpkts[i11] =    Spine27_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iBpkts[i11][0] = Spine27_Port99_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port99_iBpkts[i11].includes("K")){
            Spine27_Port99_iBpkts[i11] =    Spine27_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iBpkts[i11][0] = Spine27_Port99_iBpkts[i11][0]*1000;}
        else {  Spine27_Port99_iBpkts[i11] =    Spine27_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port99_iMpkts[i11].includes("G")){
            Spine27_Port99_iMpkts[i11] =    Spine27_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iMpkts[i11][0] = Spine27_Port99_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_iMpkts[i11].includes("M")){
            Spine27_Port99_iMpkts[i11] =    Spine27_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iMpkts[i11][0] = Spine27_Port99_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port99_iMpkts[i11].includes("K")){
            Spine27_Port99_iMpkts[i11] =    Spine27_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iMpkts[i11][0] = Spine27_Port99_iMpkts[i11][0]*1000;}
        else {  Spine27_Port99_iMpkts[i11] =    Spine27_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port99_iCongDrops[i11].includes("G")){
            Spine27_Port99_iCongDrops[i11] =    Spine27_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iCongDrops[i11][0] = Spine27_Port99_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port99_iCongDrops[i11].includes("M")){
            Spine27_Port99_iCongDrops[i11] =    Spine27_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iCongDrops[i11][0] = Spine27_Port99_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port99_iCongDrops[i11].includes("K")){
            Spine27_Port99_iCongDrops[i11] =    Spine27_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_iCongDrops[i11][0] = Spine27_Port99_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port99_iCongDrops[i11] =    Spine27_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port99_ierrs[i11].includes("G")){
            Spine27_Port99_ierrs[i11] =    Spine27_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_ierrs[i11][0] = Spine27_Port99_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port99_ierrs[i11].includes("M")){
            Spine27_Port99_ierrs[i11] =    Spine27_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_ierrs[i11][0] = Spine27_Port99_ierrs[i11][0]*1000000;}
        else if(Spine27_Port99_ierrs[i11].includes("K")){
            Spine27_Port99_ierrs[i11] =    Spine27_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_ierrs[i11][0] = Spine27_Port99_ierrs[i11][0]*1000;}
        else {  Spine27_Port99_ierrs[i11] =    Spine27_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port99_obytes[i11].includes("G")){
            Spine27_Port99_obytes[i11] =    Spine27_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_obytes[i11][0] = Spine27_Port99_obytes[i11][0]*1000000000;}
        else if(Spine27_Port99_obytes[i11].includes("M")){
            Spine27_Port99_obytes[i11] =    Spine27_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_obytes[i11][0] = Spine27_Port99_obytes[i11][0]*1000000;}
        else if(Spine27_Port99_obytes[i11].includes("K")){
            Spine27_Port99_obytes[i11] =    Spine27_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_obytes[i11][0] = Spine27_Port99_obytes[i11][0]*1000;}
        else {  Spine27_Port99_obytes[i11] =    Spine27_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port99_oUpkts[i11].includes("G")){
            Spine27_Port99_oUpkts[i11] =    Spine27_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oUpkts[i11][0] = Spine27_Port99_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_oUpkts[i11].includes("M")){
            Spine27_Port99_oUpkts[i11] =    Spine27_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oUpkts[i11][0] = Spine27_Port99_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port99_oUpkts[i11].includes("K")){
            Spine27_Port99_oUpkts[i11] =    Spine27_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oUpkts[i11][0] = Spine27_Port99_oUpkts[i11][0]*1000;}
        else {  Spine27_Port99_oUpkts[i11] =    Spine27_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port99_oBpkts[i11].includes("G")){
            Spine27_Port99_oBpkts[i11] =    Spine27_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oBpkts[i11][0] = Spine27_Port99_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_oBpkts[i11].includes("M")){
            Spine27_Port99_oBpkts[i11] =    Spine27_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oBpkts[i11][0] = Spine27_Port99_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port99_oBpkts[i11].includes("K")){
            Spine27_Port99_oBpkts[i11] =    Spine27_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oBpkts[i11][0] = Spine27_Port99_oBpkts[i11][0]*1000;}
        else {  Spine27_Port99_oBpkts[i11] =    Spine27_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port99_oMpkts[i11].includes("G")){
            Spine27_Port99_oMpkts[i11] =    Spine27_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oMpkts[i11][0] = Spine27_Port99_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port99_oMpkts[i11].includes("M")){
            Spine27_Port99_oMpkts[i11] =    Spine27_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oMpkts[i11][0] = Spine27_Port99_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port99_oMpkts[i11].includes("K")){
            Spine27_Port99_oMpkts[i11] =    Spine27_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oMpkts[i11][0] = Spine27_Port99_oMpkts[i11][0]*1000;}
        else {  Spine27_Port99_oMpkts[i11] =    Spine27_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port99_oCongDrops[i11].includes("G")){
            Spine27_Port99_oCongDrops[i11] =    Spine27_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oCongDrops[i11][0] = Spine27_Port99_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port99_oCongDrops[i11].includes("M")){
            Spine27_Port99_oCongDrops[i11] =    Spine27_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oCongDrops[i11][0] = Spine27_Port99_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port99_oCongDrops[i11].includes("K")){
            Spine27_Port99_oCongDrops[i11] =    Spine27_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oCongDrops[i11][0] = Spine27_Port99_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port99_oCongDrops[i11] =    Spine27_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port99_oerrs[i11].includes("G")){
            Spine27_Port99_oerrs[i11] =    Spine27_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oerrs[i11][0] = Spine27_Port99_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port99_oerrs[i11].includes("M")){
            Spine27_Port99_oerrs[i11] =    Spine27_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oerrs[i11][0] = Spine27_Port99_oerrs[i11][0]*1000000;}
        else if(Spine27_Port99_oerrs[i11].includes("K")){
            Spine27_Port99_oerrs[i11] =    Spine27_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_oerrs[i11][0] = Spine27_Port99_oerrs[i11][0]*1000;}
        else {  Spine27_Port99_oerrs[i11] =    Spine27_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port99_mtu_errs[i11].includes("G")){
            Spine27_Port99_mtu_errs[i11] =    Spine27_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_mtu_errs[i11][0] = Spine27_Port99_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port99_mtu_errs[i11].includes("M")){
            Spine27_Port99_mtu_errs[i11] =    Spine27_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_mtu_errs[i11][0] = Spine27_Port99_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port99_mtu_errs[i11].includes("K")){
            Spine27_Port99_mtu_errs[i11] =    Spine27_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port99_mtu_errs[i11][0] = Spine27_Port99_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port99_mtu_errs[i11] =    Spine27_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }}
        
        if(Spine27_Port100[i11] !== undefined){ 
            Spine27_Port100_fix[i11] =        Spine27_Port100[i11].slice(26, 34);
            Spine27_Port100_iUpkts[i11] =     Spine27_Port100[i11].slice(33,40);
            Spine27_Port100_iBpkts[i11] =     Spine27_Port100[i11].slice(40,47);
            Spine27_Port100_iMpkts[i11] =     Spine27_Port100[i11].slice(47,54);
            Spine27_Port100_iCongDrops[i11] = Spine27_Port100[i11].slice(54,65);
            Spine27_Port100_ierrs[i11] =      Spine27_Port100[i11].slice(65,71);
            Spine27_Port100_obytes[i11] =     Spine27_Port100[i11].slice(71,78);
            Spine27_Port100_oUpkts[i11] =     Spine27_Port100[i11].slice(78,85);
            Spine27_Port100_oBpkts[i11] =     Spine27_Port100[i11].slice(85,92);
            Spine27_Port100_oMpkts[i11] =     Spine27_Port100[i11].slice(92,99);
            Spine27_Port100_oCongDrops[i11] = Spine27_Port100[i11].slice(99,110);
            Spine27_Port100_oerrs[i11] =      Spine27_Port100[i11].slice(110,116);
            Spine27_Port100_mtu_errs[i11] =   Spine27_Port100[i11].slice(116,125);
        
        if( Spine27_Port100_fix[i11].includes("G")){
            Spine27_Port100_fix[i11] =    Spine27_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_fix[i11][0] = Spine27_Port100_fix[i11][0]*1000000000;}
        else if(Spine27_Port100_fix[i11].includes("M")){
            Spine27_Port100_fix[i11] =    Spine27_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_fix[i11][0] = Spine27_Port100_fix[i11][0]*1000000;}
        else if(Spine27_Port100_fix[i11].includes("K")){
            Spine27_Port100_fix[i11] =    Spine27_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_fix[i11][0] = Spine27_Port100_fix[i11][0]*1000;}
        else {  Spine27_Port100_fix[i11] =    Spine27_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
        if( Spine27_Port100_iUpkts[i11].includes("G")){
            Spine27_Port100_iUpkts[i11] =    Spine27_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iUpkts[i11][0] = Spine27_Port100_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_iUpkts[i11].includes("M")){
            Spine27_Port100_iUpkts[i11] =    Spine27_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iUpkts[i11][0] = Spine27_Port100_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port100_iUpkts[i11].includes("K")){
            Spine27_Port100_iUpkts[i11] =    Spine27_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iUpkts[i11][0] = Spine27_Port100_iUpkts[i11][0]*1000;}
        else {  Spine27_Port100_iUpkts[i11] =    Spine27_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port100_iBpkts[i11].includes("G")){
            Spine27_Port100_iBpkts[i11] =    Spine27_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iBpkts[i11][0] = Spine27_Port100_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_iBpkts[i11].includes("M")){
            Spine27_Port100_iBpkts[i11] =    Spine27_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iBpkts[i11][0] = Spine27_Port100_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port100_iBpkts[i11].includes("K")){
            Spine27_Port100_iBpkts[i11] =    Spine27_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iBpkts[i11][0] = Spine27_Port100_iBpkts[i11][0]*1000;}
        else {  Spine27_Port100_iBpkts[i11] =    Spine27_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port100_iMpkts[i11].includes("G")){
            Spine27_Port100_iMpkts[i11] =    Spine27_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iMpkts[i11][0] = Spine27_Port100_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_iMpkts[i11].includes("M")){
            Spine27_Port100_iMpkts[i11] =    Spine27_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iMpkts[i11][0] = Spine27_Port100_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port100_iMpkts[i11].includes("K")){
            Spine27_Port100_iMpkts[i11] =    Spine27_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iMpkts[i11][0] = Spine27_Port100_iMpkts[i11][0]*1000;}
        else {  Spine27_Port100_iMpkts[i11] =    Spine27_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_iCongDrops[i11].includes("G")){
            Spine27_Port100_iCongDrops[i11] =    Spine27_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iCongDrops[i11][0] = Spine27_Port100_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port100_iCongDrops[i11].includes("M")){
            Spine27_Port100_iCongDrops[i11] =    Spine27_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iCongDrops[i11][0] = Spine27_Port100_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port100_iCongDrops[i11].includes("K")){
            Spine27_Port100_iCongDrops[i11] =    Spine27_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_iCongDrops[i11][0] = Spine27_Port100_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port100_iCongDrops[i11] =    Spine27_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port100_ierrs[i11].includes("G")){
            Spine27_Port100_ierrs[i11] =    Spine27_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_ierrs[i11][0] = Spine27_Port100_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port100_ierrs[i11].includes("M")){
            Spine27_Port100_ierrs[i11] =    Spine27_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_ierrs[i11][0] = Spine27_Port100_ierrs[i11][0]*1000000;}
        else if(Spine27_Port100_ierrs[i11].includes("K")){
            Spine27_Port100_ierrs[i11] =    Spine27_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_ierrs[i11][0] = Spine27_Port100_ierrs[i11][0]*1000;}
        else {  Spine27_Port100_ierrs[i11] =    Spine27_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_obytes[i11].includes("G")){
            Spine27_Port100_obytes[i11] =    Spine27_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_obytes[i11][0] = Spine27_Port100_obytes[i11][0]*1000000000;}
        else if(Spine27_Port100_obytes[i11].includes("M")){
            Spine27_Port100_obytes[i11] =    Spine27_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_obytes[i11][0] = Spine27_Port100_obytes[i11][0]*1000000;}
        else if(Spine27_Port100_obytes[i11].includes("K")){
            Spine27_Port100_obytes[i11] =    Spine27_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_obytes[i11][0] = Spine27_Port100_obytes[i11][0]*1000;}
        else {  Spine27_Port100_obytes[i11] =    Spine27_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_oUpkts[i11].includes("G")){
            Spine27_Port100_oUpkts[i11] =    Spine27_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oUpkts[i11][0] = Spine27_Port100_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_oUpkts[i11].includes("M")){
            Spine27_Port100_oUpkts[i11] =    Spine27_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oUpkts[i11][0] = Spine27_Port100_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port100_oUpkts[i11].includes("K")){
            Spine27_Port100_oUpkts[i11] =    Spine27_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oUpkts[i11][0] = Spine27_Port100_oUpkts[i11][0]*1000;}
        else {  Spine27_Port100_oUpkts[i11] =    Spine27_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_oBpkts[i11].includes("G")){
            Spine27_Port100_oBpkts[i11] =    Spine27_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oBpkts[i11][0] = Spine27_Port100_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_oBpkts[i11].includes("M")){
            Spine27_Port100_oBpkts[i11] =    Spine27_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oBpkts[i11][0] = Spine27_Port100_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port100_oBpkts[i11].includes("K")){
            Spine27_Port100_oBpkts[i11] =    Spine27_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oBpkts[i11][0] = Spine27_Port100_oBpkts[i11][0]*1000;}
        else {  Spine27_Port100_oBpkts[i11] =    Spine27_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_oMpkts[i11].includes("G")){
            Spine27_Port100_oMpkts[i11] =    Spine27_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oMpkts[i11][0] = Spine27_Port100_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port100_oMpkts[i11].includes("M")){
            Spine27_Port100_oMpkts[i11] =    Spine27_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oMpkts[i11][0] = Spine27_Port100_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port100_oMpkts[i11].includes("K")){
            Spine27_Port100_oMpkts[i11] =    Spine27_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oMpkts[i11][0] = Spine27_Port100_oMpkts[i11][0]*1000;}
        else {  Spine27_Port100_oMpkts[i11] =    Spine27_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port100_oCongDrops[i11].includes("G")){
            Spine27_Port100_oCongDrops[i11] =    Spine27_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oCongDrops[i11][0] = Spine27_Port100_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port100_oCongDrops[i11].includes("M")){
            Spine27_Port100_oCongDrops[i11] =    Spine27_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oCongDrops[i11][0] = Spine27_Port100_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port100_oCongDrops[i11].includes("K")){
            Spine27_Port100_oCongDrops[i11] =    Spine27_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oCongDrops[i11][0] = Spine27_Port100_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port100_oCongDrops[i11] =    Spine27_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port100_oerrs[i11].includes("G")){
            Spine27_Port100_oerrs[i11] =    Spine27_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oerrs[i11][0] = Spine27_Port100_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port100_oerrs[i11].includes("M")){
            Spine27_Port100_oerrs[i11] =    Spine27_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oerrs[i11][0] = Spine27_Port100_oerrs[i11][0]*1000000;}
        else if(Spine27_Port100_oerrs[i11].includes("K")){
            Spine27_Port100_oerrs[i11] =    Spine27_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_oerrs[i11][0] = Spine27_Port100_oerrs[i11][0]*1000;}
        else {  Spine27_Port100_oerrs[i11] =    Spine27_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port100_mtu_errs[i11].includes("G")){
            Spine27_Port100_mtu_errs[i11] =    Spine27_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_mtu_errs[i11][0] = Spine27_Port100_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port100_mtu_errs[i11].includes("M")){
            Spine27_Port100_mtu_errs[i11] =    Spine27_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_mtu_errs[i11][0] = Spine27_Port100_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port100_mtu_errs[i11].includes("K")){
            Spine27_Port100_mtu_errs[i11] =    Spine27_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port100_mtu_errs[i11][0] = Spine27_Port100_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port100_mtu_errs[i11] =    Spine27_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
        
        if(Spine27_Port101[i11] !== undefined){ 
            Spine27_Port101_fix[i11] =        Spine27_Port101[i11].slice(26, 34);
            Spine27_Port101_iUpkts[i11] =     Spine27_Port101[i11].slice(33,40);
            Spine27_Port101_iBpkts[i11] =     Spine27_Port101[i11].slice(40,47);
            Spine27_Port101_iMpkts[i11] =     Spine27_Port101[i11].slice(47,54);
            Spine27_Port101_iCongDrops[i11] = Spine27_Port101[i11].slice(54,65);
            Spine27_Port101_ierrs[i11] =      Spine27_Port101[i11].slice(65,71);
            Spine27_Port101_obytes[i11] =     Spine27_Port101[i11].slice(71,78);
            Spine27_Port101_oUpkts[i11] =     Spine27_Port101[i11].slice(78,85);
            Spine27_Port101_oBpkts[i11] =     Spine27_Port101[i11].slice(85,92);
            Spine27_Port101_oMpkts[i11] =     Spine27_Port101[i11].slice(92,99);
            Spine27_Port101_oCongDrops[i11] = Spine27_Port101[i11].slice(99,110);
            Spine27_Port101_oerrs[i11] =      Spine27_Port101[i11].slice(110,116);
            Spine27_Port101_mtu_errs[i11] =   Spine27_Port101[i11].slice(116,125);
        
        if( Spine27_Port101_fix[i11].includes("G")){
            Spine27_Port101_fix[i11] =    Spine27_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_fix[i11][0] = Spine27_Port101_fix[i11][0]*1000000000;}
        else if(Spine27_Port101_fix[i11].includes("M")){
            Spine27_Port101_fix[i11] =    Spine27_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_fix[i11][0] = Spine27_Port101_fix[i11][0]*1000000;}
        else if(Spine27_Port101_fix[i11].includes("K")){
            Spine27_Port101_fix[i11] =    Spine27_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_fix[i11][0] = Spine27_Port101_fix[i11][0]*1000;}
        else {  Spine27_Port101_fix[i11] =    Spine27_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
        if( Spine27_Port101_iUpkts[i11].includes("G")){
            Spine27_Port101_iUpkts[i11] =    Spine27_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iUpkts[i11][0] = Spine27_Port101_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_iUpkts[i11].includes("M")){
            Spine27_Port101_iUpkts[i11] =    Spine27_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iUpkts[i11][0] = Spine27_Port101_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port101_iUpkts[i11].includes("K")){
            Spine27_Port101_iUpkts[i11] =    Spine27_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iUpkts[i11][0] = Spine27_Port101_iUpkts[i11][0]*1000;}
        else {  Spine27_Port101_iUpkts[i11] =    Spine27_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port101_iBpkts[i11].includes("G")){
            Spine27_Port101_iBpkts[i11] =    Spine27_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iBpkts[i11][0] = Spine27_Port101_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_iBpkts[i11].includes("M")){
            Spine27_Port101_iBpkts[i11] =    Spine27_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iBpkts[i11][0] = Spine27_Port101_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port101_iBpkts[i11].includes("K")){
            Spine27_Port101_iBpkts[i11] =    Spine27_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iBpkts[i11][0] = Spine27_Port101_iBpkts[i11][0]*1000;}
        else {  Spine27_Port101_iBpkts[i11] =    Spine27_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_iMpkts[i11].includes("G")){
            Spine27_Port101_iMpkts[i11] =    Spine27_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iMpkts[i11][0] = Spine27_Port101_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_iMpkts[i11].includes("M")){
            Spine27_Port101_iMpkts[i11] =    Spine27_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iMpkts[i11][0] = Spine27_Port101_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port101_iMpkts[i11].includes("K")){
            Spine27_Port101_iMpkts[i11] =    Spine27_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iMpkts[i11][0] = Spine27_Port101_iMpkts[i11][0]*1000;}
        else {  Spine27_Port101_iMpkts[i11] =    Spine27_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_iCongDrops[i11].includes("G")){
            Spine27_Port101_iCongDrops[i11] =    Spine27_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iCongDrops[i11][0] = Spine27_Port101_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port101_iCongDrops[i11].includes("M")){
            Spine27_Port101_iCongDrops[i11] =    Spine27_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iCongDrops[i11][0] = Spine27_Port101_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port101_iCongDrops[i11].includes("K")){
            Spine27_Port101_iCongDrops[i11] =    Spine27_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_iCongDrops[i11][0] = Spine27_Port101_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port101_iCongDrops[i11] =    Spine27_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port101_ierrs[i11].includes("G")){
            Spine27_Port101_ierrs[i11] =    Spine27_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_ierrs[i11][0] = Spine27_Port101_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port101_ierrs[i11].includes("M")){
            Spine27_Port101_ierrs[i11] =    Spine27_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_ierrs[i11][0] = Spine27_Port101_ierrs[i11][0]*1000000;}
        else if(Spine27_Port101_ierrs[i11].includes("K")){
            Spine27_Port101_ierrs[i11] =    Spine27_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_ierrs[i11][0] = Spine27_Port101_ierrs[i11][0]*1000;}
        else {  Spine27_Port101_ierrs[i11] =    Spine27_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port101_obytes[i11].includes("G")){
            Spine27_Port101_obytes[i11] =    Spine27_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_obytes[i11][0] = Spine27_Port101_obytes[i11][0]*1000000000;}
        else if(Spine27_Port101_obytes[i11].includes("M")){
            Spine27_Port101_obytes[i11] =    Spine27_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_obytes[i11][0] = Spine27_Port101_obytes[i11][0]*1000000;}
        else if(Spine27_Port101_obytes[i11].includes("K")){
            Spine27_Port101_obytes[i11] =    Spine27_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_obytes[i11][0] = Spine27_Port101_obytes[i11][0]*1000;}
        else {  Spine27_Port101_obytes[i11] =    Spine27_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_oUpkts[i11].includes("G")){
            Spine27_Port101_oUpkts[i11] =    Spine27_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oUpkts[i11][0] = Spine27_Port101_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_oUpkts[i11].includes("M")){
            Spine27_Port101_oUpkts[i11] =    Spine27_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oUpkts[i11][0] = Spine27_Port101_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port101_oUpkts[i11].includes("K")){
            Spine27_Port101_oUpkts[i11] =    Spine27_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oUpkts[i11][0] = Spine27_Port101_oUpkts[i11][0]*1000;}
        else {  Spine27_Port101_oUpkts[i11] =    Spine27_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_oBpkts[i11].includes("G")){
            Spine27_Port101_oBpkts[i11] =    Spine27_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oBpkts[i11][0] = Spine27_Port101_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_oBpkts[i11].includes("M")){
            Spine27_Port101_oBpkts[i11] =    Spine27_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oBpkts[i11][0] = Spine27_Port101_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port101_oBpkts[i11].includes("K")){
            Spine27_Port101_oBpkts[i11] =    Spine27_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oBpkts[i11][0] = Spine27_Port101_oBpkts[i11][0]*1000;}
        else {  Spine27_Port101_oBpkts[i11] =    Spine27_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port101_oMpkts[i11].includes("G")){
            Spine27_Port101_oMpkts[i11] =    Spine27_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oMpkts[i11][0] = Spine27_Port101_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port101_oMpkts[i11].includes("M")){
            Spine27_Port101_oMpkts[i11] =    Spine27_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oMpkts[i11][0] = Spine27_Port101_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port101_oMpkts[i11].includes("K")){
            Spine27_Port101_oMpkts[i11] =    Spine27_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oMpkts[i11][0] = Spine27_Port101_oMpkts[i11][0]*1000;}
        else {  Spine27_Port101_oMpkts[i11] =    Spine27_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port101_oCongDrops[i11].includes("G")){
            Spine27_Port101_oCongDrops[i11] =    Spine27_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oCongDrops[i11][0] = Spine27_Port101_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port101_oCongDrops[i11].includes("M")){
            Spine27_Port101_oCongDrops[i11] =    Spine27_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oCongDrops[i11][0] = Spine27_Port101_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port101_oCongDrops[i11].includes("K")){
            Spine27_Port101_oCongDrops[i11] =    Spine27_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oCongDrops[i11][0] = Spine27_Port101_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port101_oCongDrops[i11] =    Spine27_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_oerrs[i11].includes("G")){
            Spine27_Port101_oerrs[i11] =    Spine27_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oerrs[i11][0] = Spine27_Port101_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port101_oerrs[i11].includes("M")){
            Spine27_Port101_oerrs[i11] =    Spine27_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oerrs[i11][0] = Spine27_Port101_oerrs[i11][0]*1000000;}
        else if(Spine27_Port101_oerrs[i11].includes("K")){
            Spine27_Port101_oerrs[i11] =    Spine27_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_oerrs[i11][0] = Spine27_Port101_oerrs[i11][0]*1000;}
        else {  Spine27_Port101_oerrs[i11] =    Spine27_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port101_mtu_errs[i11].includes("G")){
            Spine27_Port101_mtu_errs[i11] =    Spine27_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_mtu_errs[i11][0] = Spine27_Port101_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port101_mtu_errs[i11].includes("M")){
            Spine27_Port101_mtu_errs[i11] =    Spine27_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_mtu_errs[i11][0] = Spine27_Port101_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port101_mtu_errs[i11].includes("K")){
            Spine27_Port101_mtu_errs[i11] =    Spine27_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port101_mtu_errs[i11][0] = Spine27_Port101_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port101_mtu_errs[i11] =    Spine27_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
            
        if(Spine27_Port102[i11] !== undefined){ 
            Spine27_Port102_fix[i11] =        Spine27_Port102[i11].slice(26, 34);
            Spine27_Port102_iUpkts[i11] =     Spine27_Port102[i11].slice(33,40);
            Spine27_Port102_iBpkts[i11] =     Spine27_Port102[i11].slice(40,47);
            Spine27_Port102_iMpkts[i11] =     Spine27_Port102[i11].slice(47,54);
            Spine27_Port102_iCongDrops[i11] = Spine27_Port102[i11].slice(54,65);
            Spine27_Port102_ierrs[i11] =      Spine27_Port102[i11].slice(65,71);
            Spine27_Port102_obytes[i11] =     Spine27_Port102[i11].slice(71,78);
            Spine27_Port102_oUpkts[i11] =     Spine27_Port102[i11].slice(78,85);
            Spine27_Port102_oBpkts[i11] =     Spine27_Port102[i11].slice(85,92);
            Spine27_Port102_oMpkts[i11] =     Spine27_Port102[i11].slice(92,99);
            Spine27_Port102_oCongDrops[i11] = Spine27_Port102[i11].slice(99,110);
            Spine27_Port102_oerrs[i11] =      Spine27_Port102[i11].slice(110,116);
            Spine27_Port102_mtu_errs[i11] =   Spine27_Port102[i11].slice(116,125);
        
        if( Spine27_Port102_fix[i11].includes("G")){
            Spine27_Port102_fix[i11] =    Spine27_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_fix[i11][0] = Spine27_Port102_fix[i11][0]*1000000000;}
        else if(Spine27_Port102_fix[i11].includes("M")){
            Spine27_Port102_fix[i11] =    Spine27_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_fix[i11][0] = Spine27_Port102_fix[i11][0]*1000000;}
        else if(Spine27_Port102_fix[i11].includes("K")){
            Spine27_Port102_fix[i11] =    Spine27_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_fix[i11][0] = Spine27_Port102_fix[i11][0]*1000;}
        else {  Spine27_Port102_fix[i11] =    Spine27_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
        if( Spine27_Port102_iUpkts[i11].includes("G")){
            Spine27_Port102_iUpkts[i11] =    Spine27_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iUpkts[i11][0] = Spine27_Port102_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_iUpkts[i11].includes("M")){
            Spine27_Port102_iUpkts[i11] =    Spine27_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iUpkts[i11][0] = Spine27_Port102_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port102_iUpkts[i11].includes("K")){
            Spine27_Port102_iUpkts[i11] =    Spine27_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iUpkts[i11][0] = Spine27_Port102_iUpkts[i11][0]*1000;}
        else {  Spine27_Port102_iUpkts[i11] =    Spine27_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_iBpkts[i11].includes("G")){
            Spine27_Port102_iBpkts[i11] =    Spine27_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iBpkts[i11][0] = Spine27_Port102_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_iBpkts[i11].includes("M")){
            Spine27_Port102_iBpkts[i11] =    Spine27_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iBpkts[i11][0] = Spine27_Port102_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port102_iBpkts[i11].includes("K")){
            Spine27_Port102_iBpkts[i11] =    Spine27_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iBpkts[i11][0] = Spine27_Port102_iBpkts[i11][0]*1000;}
        else {  Spine27_Port102_iBpkts[i11] =    Spine27_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_iMpkts[i11].includes("G")){
            Spine27_Port102_iMpkts[i11] =    Spine27_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iMpkts[i11][0] = Spine27_Port102_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_iMpkts[i11].includes("M")){
            Spine27_Port102_iMpkts[i11] =    Spine27_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iMpkts[i11][0] = Spine27_Port102_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port102_iMpkts[i11].includes("K")){
            Spine27_Port102_iMpkts[i11] =    Spine27_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iMpkts[i11][0] = Spine27_Port102_iMpkts[i11][0]*1000;}
        else {  Spine27_Port102_iMpkts[i11] =    Spine27_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port102_iCongDrops[i11].includes("G")){
            Spine27_Port102_iCongDrops[i11] =    Spine27_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iCongDrops[i11][0] = Spine27_Port102_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port102_iCongDrops[i11].includes("M")){
            Spine27_Port102_iCongDrops[i11] =    Spine27_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iCongDrops[i11][0] = Spine27_Port102_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port102_iCongDrops[i11].includes("K")){
            Spine27_Port102_iCongDrops[i11] =    Spine27_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_iCongDrops[i11][0] = Spine27_Port102_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port102_iCongDrops[i11] =    Spine27_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port102_ierrs[i11].includes("G")){
            Spine27_Port102_ierrs[i11] =    Spine27_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_ierrs[i11][0] = Spine27_Port102_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port102_ierrs[i11].includes("M")){
            Spine27_Port102_ierrs[i11] =    Spine27_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_ierrs[i11][0] = Spine27_Port102_ierrs[i11][0]*1000000;}
        else if(Spine27_Port102_ierrs[i11].includes("K")){
            Spine27_Port102_ierrs[i11] =    Spine27_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_ierrs[i11][0] = Spine27_Port102_ierrs[i11][0]*1000;}
        else {  Spine27_Port102_ierrs[i11] =    Spine27_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port102_obytes[i11].includes("G")){
            Spine27_Port102_obytes[i11] =    Spine27_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_obytes[i11][0] = Spine27_Port102_obytes[i11][0]*1000000000;}
        else if(Spine27_Port102_obytes[i11].includes("M")){
            Spine27_Port102_obytes[i11] =    Spine27_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_obytes[i11][0] = Spine27_Port102_obytes[i11][0]*1000000;}
        else if(Spine27_Port102_obytes[i11].includes("K")){
            Spine27_Port102_obytes[i11] =    Spine27_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_obytes[i11][0] = Spine27_Port102_obytes[i11][0]*1000;}
        else {  Spine27_Port102_obytes[i11] =    Spine27_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Spine27_Port102_oUpkts[i11].includes("G")){
            Spine27_Port102_oUpkts[i11] =    Spine27_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oUpkts[i11][0] = Spine27_Port102_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_oUpkts[i11].includes("M")){
            Spine27_Port102_oUpkts[i11] =    Spine27_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oUpkts[i11][0] = Spine27_Port102_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port102_oUpkts[i11].includes("K")){
            Spine27_Port102_oUpkts[i11] =    Spine27_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oUpkts[i11][0] = Spine27_Port102_oUpkts[i11][0]*1000;}
        else {  Spine27_Port102_oUpkts[i11] =    Spine27_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_oBpkts[i11].includes("G")){
            Spine27_Port102_oBpkts[i11] =    Spine27_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oBpkts[i11][0] = Spine27_Port102_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_oBpkts[i11].includes("M")){
            Spine27_Port102_oBpkts[i11] =    Spine27_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oBpkts[i11][0] = Spine27_Port102_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port102_oBpkts[i11].includes("K")){
            Spine27_Port102_oBpkts[i11] =    Spine27_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oBpkts[i11][0] = Spine27_Port102_oBpkts[i11][0]*1000;}
        else {  Spine27_Port102_oBpkts[i11] =    Spine27_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_oMpkts[i11].includes("G")){
            Spine27_Port102_oMpkts[i11] =    Spine27_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oMpkts[i11][0] = Spine27_Port102_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port102_oMpkts[i11].includes("M")){
            Spine27_Port102_oMpkts[i11] =    Spine27_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oMpkts[i11][0] = Spine27_Port102_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port102_oMpkts[i11].includes("K")){
            Spine27_Port102_oMpkts[i11] =    Spine27_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oMpkts[i11][0] = Spine27_Port102_oMpkts[i11][0]*1000;}
        else {  Spine27_Port102_oMpkts[i11] =    Spine27_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_oCongDrops[i11].includes("G")){
            Spine27_Port102_oCongDrops[i11] =    Spine27_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oCongDrops[i11][0] = Spine27_Port102_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port102_oCongDrops[i11].includes("M")){
            Spine27_Port102_oCongDrops[i11] =    Spine27_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oCongDrops[i11][0] = Spine27_Port102_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port102_oCongDrops[i11].includes("K")){
            Spine27_Port102_oCongDrops[i11] =    Spine27_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oCongDrops[i11][0] = Spine27_Port102_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port102_oCongDrops[i11] =    Spine27_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_oerrs[i11].includes("G")){
            Spine27_Port102_oerrs[i11] =    Spine27_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oerrs[i11][0] = Spine27_Port102_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port102_oerrs[i11].includes("M")){
            Spine27_Port102_oerrs[i11] =    Spine27_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oerrs[i11][0] = Spine27_Port102_oerrs[i11][0]*1000000;}
        else if(Spine27_Port102_oerrs[i11].includes("K")){
            Spine27_Port102_oerrs[i11] =    Spine27_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_oerrs[i11][0] = Spine27_Port102_oerrs[i11][0]*1000;}
        else {  Spine27_Port102_oerrs[i11] =    Spine27_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port102_mtu_errs[i11].includes("G")){
            Spine27_Port102_mtu_errs[i11] =    Spine27_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_mtu_errs[i11][0] = Spine27_Port102_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port102_mtu_errs[i11].includes("M")){
            Spine27_Port102_mtu_errs[i11] =    Spine27_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_mtu_errs[i11][0] = Spine27_Port102_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port102_mtu_errs[i11].includes("K")){
            Spine27_Port102_mtu_errs[i11] =    Spine27_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port102_mtu_errs[i11][0] = Spine27_Port102_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port102_mtu_errs[i11] =    Spine27_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}
           
        if(Spine27_Port103[i11] !== undefined){ 
            Spine27_Port103_fix[i11] =        Spine27_Port103[i11].slice(26, 34);
            Spine27_Port103_iUpkts[i11] =     Spine27_Port103[i11].slice(33,40);
            Spine27_Port103_iBpkts[i11] =     Spine27_Port103[i11].slice(40,47);
            Spine27_Port103_iMpkts[i11] =     Spine27_Port103[i11].slice(47,54);
            Spine27_Port103_iCongDrops[i11] = Spine27_Port103[i11].slice(54,65);
            Spine27_Port103_ierrs[i11] =      Spine27_Port103[i11].slice(65,71);
            Spine27_Port103_obytes[i11] =     Spine27_Port103[i11].slice(71,78);
            Spine27_Port103_oUpkts[i11] =     Spine27_Port103[i11].slice(78,85);
            Spine27_Port103_oBpkts[i11] =     Spine27_Port103[i11].slice(85,92);
            Spine27_Port103_oMpkts[i11] =     Spine27_Port103[i11].slice(92,99);
            Spine27_Port103_oCongDrops[i11] = Spine27_Port103[i11].slice(99,110);
            Spine27_Port103_oerrs[i11] =      Spine27_Port103[i11].slice(110,116);
            Spine27_Port103_mtu_errs[i11] =   Spine27_Port103[i11].slice(116,125);
        
        if( Spine27_Port103_fix[i11].includes("G")){
            Spine27_Port103_fix[i11] =    Spine27_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_fix[i11][0] = Spine27_Port103_fix[i11][0]*1000000000;}
        else if(Spine27_Port103_fix[i11].includes("M")){
            Spine27_Port103_fix[i11] =    Spine27_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_fix[i11][0] = Spine27_Port103_fix[i11][0]*1000000;}
        else if(Spine27_Port103_fix[i11].includes("K")){
            Spine27_Port103_fix[i11] =    Spine27_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_fix[i11][0] = Spine27_Port103_fix[i11][0]*1000;}
        else {  Spine27_Port103_fix[i11] =    Spine27_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
        if( Spine27_Port103_iUpkts[i11].includes("G")){
            Spine27_Port103_iUpkts[i11] =    Spine27_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iUpkts[i11][0] = Spine27_Port103_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_iUpkts[i11].includes("M")){
            Spine27_Port103_iUpkts[i11] =    Spine27_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iUpkts[i11][0] = Spine27_Port103_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port103_iUpkts[i11].includes("K")){
            Spine27_Port103_iUpkts[i11] =    Spine27_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iUpkts[i11][0] = Spine27_Port103_iUpkts[i11][0]*1000;}
        else {  Spine27_Port103_iUpkts[i11] =    Spine27_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port103_iBpkts[i11].includes("G")){
            Spine27_Port103_iBpkts[i11] =    Spine27_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iBpkts[i11][0] = Spine27_Port103_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_iBpkts[i11].includes("M")){
            Spine27_Port103_iBpkts[i11] =    Spine27_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iBpkts[i11][0] = Spine27_Port103_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port103_iBpkts[i11].includes("K")){
            Spine27_Port103_iBpkts[i11] =    Spine27_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iBpkts[i11][0] = Spine27_Port103_iBpkts[i11][0]*1000;}
        else {  Spine27_Port103_iBpkts[i11] =    Spine27_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port103_iMpkts[i11].includes("G")){
            Spine27_Port103_iMpkts[i11] =    Spine27_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iMpkts[i11][0] = Spine27_Port103_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_iMpkts[i11].includes("M")){
            Spine27_Port103_iMpkts[i11] =    Spine27_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iMpkts[i11][0] = Spine27_Port103_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port103_iMpkts[i11].includes("K")){
            Spine27_Port103_iMpkts[i11] =    Spine27_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iMpkts[i11][0] = Spine27_Port103_iMpkts[i11][0]*1000;}
        else {  Spine27_Port103_iMpkts[i11] =    Spine27_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port103_iCongDrops[i11].includes("G")){
            Spine27_Port103_iCongDrops[i11] =    Spine27_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iCongDrops[i11][0] = Spine27_Port103_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port103_iCongDrops[i11].includes("M")){
            Spine27_Port103_iCongDrops[i11] =    Spine27_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iCongDrops[i11][0] = Spine27_Port103_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port103_iCongDrops[i11].includes("K")){
            Spine27_Port103_iCongDrops[i11] =    Spine27_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_iCongDrops[i11][0] = Spine27_Port103_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port103_iCongDrops[i11] =    Spine27_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port103_ierrs[i11].includes("G")){
            Spine27_Port103_ierrs[i11] =    Spine27_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_ierrs[i11][0] = Spine27_Port103_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port103_ierrs[i11].includes("M")){
            Spine27_Port103_ierrs[i11] =    Spine27_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_ierrs[i11][0] = Spine27_Port103_ierrs[i11][0]*1000000;}
        else if(Spine27_Port103_ierrs[i11].includes("K")){
            Spine27_Port103_ierrs[i11] =    Spine27_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_ierrs[i11][0] = Spine27_Port103_ierrs[i11][0]*1000;}
        else {  Spine27_Port103_ierrs[i11] =    Spine27_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port103_obytes[i11].includes("G")){
            Spine27_Port103_obytes[i11] =    Spine27_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_obytes[i11][0] = Spine27_Port103_obytes[i11][0]*1000000000;}
        else if(Spine27_Port103_obytes[i11].includes("M")){
            Spine27_Port103_obytes[i11] =    Spine27_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_obytes[i11][0] = Spine27_Port103_obytes[i11][0]*1000000;}
        else if(Spine27_Port103_obytes[i11].includes("K")){
            Spine27_Port103_obytes[i11] =    Spine27_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_obytes[i11][0] = Spine27_Port103_obytes[i11][0]*1000;}
        else {  Spine27_Port103_obytes[i11] =    Spine27_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port103_oUpkts[i11].includes("G")){
            Spine27_Port103_oUpkts[i11] =    Spine27_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oUpkts[i11][0] = Spine27_Port103_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_oUpkts[i11].includes("M")){
            Spine27_Port103_oUpkts[i11] =    Spine27_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oUpkts[i11][0] = Spine27_Port103_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port103_oUpkts[i11].includes("K")){
            Spine27_Port103_oUpkts[i11] =    Spine27_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oUpkts[i11][0] = Spine27_Port103_oUpkts[i11][0]*1000;}
        else {  Spine27_Port103_oUpkts[i11] =    Spine27_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port103_oBpkts[i11].includes("G")){
            Spine27_Port103_oBpkts[i11] =    Spine27_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oBpkts[i11][0] = Spine27_Port103_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_oBpkts[i11].includes("M")){
            Spine27_Port103_oBpkts[i11] =    Spine27_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oBpkts[i11][0] = Spine27_Port103_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port103_oBpkts[i11].includes("K")){
            Spine27_Port103_oBpkts[i11] =    Spine27_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oBpkts[i11][0] = Spine27_Port103_oBpkts[i11][0]*1000;}
        else {  Spine27_Port103_oBpkts[i11] =    Spine27_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port103_oMpkts[i11].includes("G")){
            Spine27_Port103_oMpkts[i11] =    Spine27_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oMpkts[i11][0] = Spine27_Port103_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port103_oMpkts[i11].includes("M")){
            Spine27_Port103_oMpkts[i11] =    Spine27_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oMpkts[i11][0] = Spine27_Port103_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port103_oMpkts[i11].includes("K")){
            Spine27_Port103_oMpkts[i11] =    Spine27_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oMpkts[i11][0] = Spine27_Port103_oMpkts[i11][0]*1000;}
        else {  Spine27_Port103_oMpkts[i11] =    Spine27_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port103_oCongDrops[i11].includes("G")){
            Spine27_Port103_oCongDrops[i11] =    Spine27_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oCongDrops[i11][0] = Spine27_Port103_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port103_oCongDrops[i11].includes("M")){
            Spine27_Port103_oCongDrops[i11] =    Spine27_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oCongDrops[i11][0] = Spine27_Port103_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port103_oCongDrops[i11].includes("K")){
            Spine27_Port103_oCongDrops[i11] =    Spine27_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oCongDrops[i11][0] = Spine27_Port103_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port103_oCongDrops[i11] =    Spine27_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port103_oerrs[i11].includes("G")){
            Spine27_Port103_oerrs[i11] =    Spine27_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oerrs[i11][0] = Spine27_Port103_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port103_oerrs[i11].includes("M")){
            Spine27_Port103_oerrs[i11] =    Spine27_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oerrs[i11][0] = Spine27_Port103_oerrs[i11][0]*1000000;}
        else if(Spine27_Port103_oerrs[i11].includes("K")){
            Spine27_Port103_oerrs[i11] =    Spine27_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_oerrs[i11][0] = Spine27_Port103_oerrs[i11][0]*1000;}
        else {  Spine27_Port103_oerrs[i11] =    Spine27_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port103_mtu_errs[i11].includes("G")){
            Spine27_Port103_mtu_errs[i11] =    Spine27_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_mtu_errs[i11][0] = Spine27_Port103_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port103_mtu_errs[i11].includes("M")){
            Spine27_Port103_mtu_errs[i11] =    Spine27_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_mtu_errs[i11][0] = Spine27_Port103_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port103_mtu_errs[i11].includes("K")){
            Spine27_Port103_mtu_errs[i11] =    Spine27_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port103_mtu_errs[i11][0] = Spine27_Port103_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port103_mtu_errs[i11] =    Spine27_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}
        
        if(Spine27_Port104[i11] !== undefined){ 
            Spine27_Port104_fix[i11] =        Spine27_Port104[i11].slice(26, 34);
            Spine27_Port104_iUpkts[i11] =     Spine27_Port104[i11].slice(33,40);
            Spine27_Port104_iBpkts[i11] =     Spine27_Port104[i11].slice(40,47);
            Spine27_Port104_iMpkts[i11] =     Spine27_Port104[i11].slice(47,54);
            Spine27_Port104_iCongDrops[i11] = Spine27_Port104[i11].slice(54,65);
            Spine27_Port104_ierrs[i11] =      Spine27_Port104[i11].slice(65,71);
            Spine27_Port104_obytes[i11] =     Spine27_Port104[i11].slice(71,78);
            Spine27_Port104_oUpkts[i11] =     Spine27_Port104[i11].slice(78,85);
            Spine27_Port104_oBpkts[i11] =     Spine27_Port104[i11].slice(85,92);
            Spine27_Port104_oMpkts[i11] =     Spine27_Port104[i11].slice(92,99);
            Spine27_Port104_oCongDrops[i11] = Spine27_Port104[i11].slice(99,110);
            Spine27_Port104_oerrs[i11] =      Spine27_Port104[i11].slice(110,116);
            Spine27_Port104_mtu_errs[i11] =   Spine27_Port104[i11].slice(116,125);
        
        if( Spine27_Port104_fix[i11].includes("G")){
            Spine27_Port104_fix[i11] =    Spine27_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_fix[i11][0] = Spine27_Port104_fix[i11][0]*1000000000;}
        else if(Spine27_Port104_fix[i11].includes("M")){
            Spine27_Port104_fix[i11] =    Spine27_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_fix[i11][0] = Spine27_Port104_fix[i11][0]*1000000;}
        else if(Spine27_Port104_fix[i11].includes("K")){
            Spine27_Port104_fix[i11] =    Spine27_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_fix[i11][0] = Spine27_Port104_fix[i11][0]*1000;}
        else {  Spine27_Port104_fix[i11] =    Spine27_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
        if( Spine27_Port104_iUpkts[i11].includes("G")){
            Spine27_Port104_iUpkts[i11] =    Spine27_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iUpkts[i11][0] = Spine27_Port104_iUpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_iUpkts[i11].includes("M")){
            Spine27_Port104_iUpkts[i11] =    Spine27_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iUpkts[i11][0] = Spine27_Port104_iUpkts[i11][0]*1000000;}
        else if(Spine27_Port104_iUpkts[i11].includes("K")){
            Spine27_Port104_iUpkts[i11] =    Spine27_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iUpkts[i11][0] = Spine27_Port104_iUpkts[i11][0]*1000;}
        else {  Spine27_Port104_iUpkts[i11] =    Spine27_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port104_iBpkts[i11].includes("G")){
            Spine27_Port104_iBpkts[i11] =    Spine27_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iBpkts[i11][0] = Spine27_Port104_iBpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_iBpkts[i11].includes("M")){
            Spine27_Port104_iBpkts[i11] =    Spine27_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iBpkts[i11][0] = Spine27_Port104_iBpkts[i11][0]*1000000;}
        else if(Spine27_Port104_iBpkts[i11].includes("K")){
            Spine27_Port104_iBpkts[i11] =    Spine27_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iBpkts[i11][0] = Spine27_Port104_iBpkts[i11][0]*1000;}
        else {  Spine27_Port104_iBpkts[i11] =    Spine27_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Spine27_Port104_iMpkts[i11].includes("G")){
            Spine27_Port104_iMpkts[i11] =    Spine27_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iMpkts[i11][0] = Spine27_Port104_iMpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_iMpkts[i11].includes("M")){
            Spine27_Port104_iMpkts[i11] =    Spine27_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iMpkts[i11][0] = Spine27_Port104_iMpkts[i11][0]*1000000;}
        else if(Spine27_Port104_iMpkts[i11].includes("K")){
            Spine27_Port104_iMpkts[i11] =    Spine27_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iMpkts[i11][0] = Spine27_Port104_iMpkts[i11][0]*1000;}
        else {  Spine27_Port104_iMpkts[i11] =    Spine27_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
        
            if(Spine27_Port104_iCongDrops[i11].includes("G")){
            Spine27_Port104_iCongDrops[i11] =    Spine27_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iCongDrops[i11][0] = Spine27_Port104_iCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port104_iCongDrops[i11].includes("M")){
            Spine27_Port104_iCongDrops[i11] =    Spine27_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iCongDrops[i11][0] = Spine27_Port104_iCongDrops[i11][0]*1000000;}
        else if(Spine27_Port104_iCongDrops[i11].includes("K")){
            Spine27_Port104_iCongDrops[i11] =    Spine27_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_iCongDrops[i11][0] = Spine27_Port104_iCongDrops[i11][0]*1000;}
        else {  Spine27_Port104_iCongDrops[i11] =    Spine27_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_ierrs[i11].includes("G")){
            Spine27_Port104_ierrs[i11] =    Spine27_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_ierrs[i11][0] = Spine27_Port104_ierrs[i11][0]*1000000000;}
        else if(Spine27_Port104_ierrs[i11].includes("M")){
            Spine27_Port104_ierrs[i11] =    Spine27_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_ierrs[i11][0] = Spine27_Port104_ierrs[i11][0]*1000000;}
        else if(Spine27_Port104_ierrs[i11].includes("K")){
            Spine27_Port104_ierrs[i11] =    Spine27_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_ierrs[i11][0] = Spine27_Port104_ierrs[i11][0]*1000;}
        else {  Spine27_Port104_ierrs[i11] =    Spine27_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_obytes[i11].includes("G")){
            Spine27_Port104_obytes[i11] =    Spine27_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_obytes[i11][0] = Spine27_Port104_obytes[i11][0]*1000000000;}
        else if(Spine27_Port104_obytes[i11].includes("M")){
            Spine27_Port104_obytes[i11] =    Spine27_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_obytes[i11][0] = Spine27_Port104_obytes[i11][0]*1000000;}
        else if(Spine27_Port104_obytes[i11].includes("K")){
            Spine27_Port104_obytes[i11] =    Spine27_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_obytes[i11][0] = Spine27_Port104_obytes[i11][0]*1000;}
        else {  Spine27_Port104_obytes[i11] =    Spine27_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_oUpkts[i11].includes("G")){
            Spine27_Port104_oUpkts[i11] =    Spine27_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oUpkts[i11][0] = Spine27_Port104_oUpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_oUpkts[i11].includes("M")){
            Spine27_Port104_oUpkts[i11] =    Spine27_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oUpkts[i11][0] = Spine27_Port104_oUpkts[i11][0]*1000000;}
        else if(Spine27_Port104_oUpkts[i11].includes("K")){
            Spine27_Port104_oUpkts[i11] =    Spine27_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oUpkts[i11][0] = Spine27_Port104_oUpkts[i11][0]*1000;}
        else {  Spine27_Port104_oUpkts[i11] =    Spine27_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Spine27_Port104_oBpkts[i11].includes("G")){
            Spine27_Port104_oBpkts[i11] =    Spine27_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oBpkts[i11][0] = Spine27_Port104_oBpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_oBpkts[i11].includes("M")){
            Spine27_Port104_oBpkts[i11] =    Spine27_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oBpkts[i11][0] = Spine27_Port104_oBpkts[i11][0]*1000000;}
        else if(Spine27_Port104_oBpkts[i11].includes("K")){
            Spine27_Port104_oBpkts[i11] =    Spine27_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oBpkts[i11][0] = Spine27_Port104_oBpkts[i11][0]*1000;}
        else {  Spine27_Port104_oBpkts[i11] =    Spine27_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_oMpkts[i11].includes("G")){
            Spine27_Port104_oMpkts[i11] =    Spine27_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oMpkts[i11][0] = Spine27_Port104_oMpkts[i11][0]*1000000000;}
        else if(Spine27_Port104_oMpkts[i11].includes("M")){
            Spine27_Port104_oMpkts[i11] =    Spine27_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oMpkts[i11][0] = Spine27_Port104_oMpkts[i11][0]*1000000;}
        else if(Spine27_Port104_oMpkts[i11].includes("K")){
            Spine27_Port104_oMpkts[i11] =    Spine27_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oMpkts[i11][0] = Spine27_Port104_oMpkts[i11][0]*1000;}
        else {  Spine27_Port104_oMpkts[i11] =    Spine27_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_oCongDrops[i11].includes("G")){
            Spine27_Port104_oCongDrops[i11] =    Spine27_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oCongDrops[i11][0] = Spine27_Port104_oCongDrops[i11][0]*1000000000;}
        else if(Spine27_Port104_oCongDrops[i11].includes("M")){
            Spine27_Port104_oCongDrops[i11] =    Spine27_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oCongDrops[i11][0] = Spine27_Port104_oCongDrops[i11][0]*1000000;}
        else if(Spine27_Port104_oCongDrops[i11].includes("K")){
            Spine27_Port104_oCongDrops[i11] =    Spine27_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oCongDrops[i11][0] = Spine27_Port104_oCongDrops[i11][0]*1000;}
        else {  Spine27_Port104_oCongDrops[i11] =    Spine27_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Spine27_Port104_oerrs[i11].includes("G")){
            Spine27_Port104_oerrs[i11] =    Spine27_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oerrs[i11][0] = Spine27_Port104_oerrs[i11][0]*1000000000;}
        else if(Spine27_Port104_oerrs[i11].includes("M")){
            Spine27_Port104_oerrs[i11] =    Spine27_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oerrs[i11][0] = Spine27_Port104_oerrs[i11][0]*1000000;}
        else if(Spine27_Port104_oerrs[i11].includes("K")){
            Spine27_Port104_oerrs[i11] =    Spine27_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_oerrs[i11][0] = Spine27_Port104_oerrs[i11][0]*1000;}
        else {  Spine27_Port104_oerrs[i11] =    Spine27_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }
        
            if(Spine27_Port104_mtu_errs[i11].includes("G")){
            Spine27_Port104_mtu_errs[i11] =    Spine27_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_mtu_errs[i11][0] = Spine27_Port104_mtu_errs[i11][0]*1000000000;}
        else if(Spine27_Port104_mtu_errs[i11].includes("M")){
            Spine27_Port104_mtu_errs[i11] =    Spine27_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_mtu_errs[i11][0] = Spine27_Port104_mtu_errs[i11][0]*1000000;}
        else if(Spine27_Port104_mtu_errs[i11].includes("K")){
            Spine27_Port104_mtu_errs[i11] =    Spine27_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Spine27_Port104_mtu_errs[i11][0] = Spine27_Port104_mtu_errs[i11][0]*1000;}
        else {  Spine27_Port104_mtu_errs[i11] =    Spine27_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}
            
                

            this.state.chartData12.datasets[0].data.push(Spine27_Port1_fix[i11][0]);
            this.state.chartData12.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData12.datasets[1].data.push(Spine27_Port2_fix[i11][0]);
            this.state.chartData12.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData12.datasets[2].data.push(Spine27_Port3_fix[i11][0]);
            this.state.chartData12.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData12.datasets[3].data.push(Spine27_Port4_fix[i11][0]);
            this.state.chartData12.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData12.datasets[4].data.push(Spine27_Port5_fix[i11][0]);
            this.state.chartData12.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData12.datasets[5].data.push(Spine27_Port9_fix[i11][0]);
            this.state.chartData12.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData12.datasets[6].data.push(Spine27_Port13_fix[i11][0]);
            this.state.chartData12.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData12.datasets[7].data.push(Spine27_Port17_fix[i11][0]);
            this.state.chartData12.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData12.datasets[8].data.push(Spine27_Port21_fix[i11][0]);
            this.state.chartData12.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData12.datasets[9].data.push(Spine27_Port25_fix[i11][0]);
            this.state.chartData12.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData12.datasets[10].data.push(Spine27_Port29_fix[i11][0]);
            this.state.chartData12.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData12.datasets[11].data.push(Spine27_Port33_fix[i11][0]);
            this.state.chartData12.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData12.datasets[12].data.push(Spine27_Port89_fix[i11][0]);
            this.state.chartData12.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData12.datasets[13].data.push(Spine27_Port90_fix[i11][0]);
            this.state.chartData12.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData12.datasets[14].data.push(Spine27_Port91_fix[i11][0]);
            this.state.chartData12.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData12.datasets[15].data.push(Spine27_Port92_fix[i11][0]);
            this.state.chartData12.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData12.datasets[16].data.push(Spine27_Port93_fix[i11][0]);
            this.state.chartData12.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData12.datasets[17].data.push(Spine27_Port94_fix[i11][0]);
            this.state.chartData12.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData12.datasets[18].data.push(Spine27_Port95_fix[i11][0]);
            this.state.chartData12.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData12.datasets[19].data.push(Spine27_Port96_fix[i11][0]);
            this.state.chartData12.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData12.datasets[20].data.push(Spine27_Port97_fix[i11][0]);
            this.state.chartData12.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData12.datasets[21].data.push(Spine27_Port98_fix[i11][0]);
            this.state.chartData12.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData12.datasets[22].data.push(Spine27_Port99_fix[i11][0]);
            this.state.chartData12.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData12.datasets[23].data.push(Spine27_Port100_fix[i11][0]);
            this.state.chartData12.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData12.datasets[24].data.push(Spine27_Port101_fix[i11][0]);
            this.state.chartData12.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData12.datasets[25].data.push(Spine27_Port102_fix[i11][0]);
            this.state.chartData12.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData12.datasets[26].data.push(Spine27_Port103_fix[i11][0]);
            this.state.chartData12.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData12.datasets[27].data.push(Spine27_Port104_fix[i11][0]);
            this.state.chartData12.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData18.datasets[0].data.push(Spine27_Port1_iUpkts[i11][0]);
            this.state.chartData18.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData18.datasets[1].data.push(Spine27_Port2_iUpkts[i11][0]);
            this.state.chartData18.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData18.datasets[2].data.push(Spine27_Port3_iUpkts[i11][0]);
            this.state.chartData18.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData18.datasets[3].data.push(Spine27_Port4_iUpkts[i11][0]);
            this.state.chartData18.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData18.datasets[4].data.push(Spine27_Port5_iUpkts[i11][0]);
            this.state.chartData18.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData18.datasets[5].data.push(Spine27_Port9_iUpkts[i11][0]);
            this.state.chartData18.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData18.datasets[6].data.push(Spine27_Port13_iUpkts[i11][0]);
            this.state.chartData18.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData18.datasets[7].data.push(Spine27_Port17_iUpkts[i11][0]);
            this.state.chartData18.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData18.datasets[8].data.push(Spine27_Port21_iUpkts[i11][0]);
            this.state.chartData18.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData18.datasets[9].data.push(Spine27_Port25_iUpkts[i11][0]);
            this.state.chartData18.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData18.datasets[10].data.push(Spine27_Port29_iUpkts[i11][0]);
            this.state.chartData18.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData18.datasets[11].data.push(Spine27_Port33_iUpkts[i11][0]);
            this.state.chartData18.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData18.datasets[12].data.push(Spine27_Port89_iUpkts[i11][0]);
            this.state.chartData18.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData18.datasets[13].data.push(Spine27_Port90_iUpkts[i11][0]);
            this.state.chartData18.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData18.datasets[14].data.push(Spine27_Port91_iUpkts[i11][0]);
            this.state.chartData18.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData18.datasets[15].data.push(Spine27_Port92_iUpkts[i11][0]);
            this.state.chartData18.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData18.datasets[16].data.push(Spine27_Port93_iUpkts[i11][0]);
            this.state.chartData18.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData18.datasets[17].data.push(Spine27_Port94_iUpkts[i11][0]);
            this.state.chartData18.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData18.datasets[18].data.push(Spine27_Port95_iUpkts[i11][0]);
            this.state.chartData18.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData18.datasets[19].data.push(Spine27_Port96_iUpkts[i11][0]);
            this.state.chartData18.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData18.datasets[20].data.push(Spine27_Port97_iUpkts[i11][0]);
            this.state.chartData18.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData18.datasets[21].data.push(Spine27_Port98_iUpkts[i11][0]);
            this.state.chartData18.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData18.datasets[22].data.push(Spine27_Port99_iUpkts[i11][0]);
            this.state.chartData18.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData18.datasets[23].data.push(Spine27_Port100_iUpkts[i11][0]);
            this.state.chartData18.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData18.datasets[24].data.push(Spine27_Port101_iUpkts[i11][0]);
            this.state.chartData18.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData18.datasets[25].data.push(Spine27_Port102_iUpkts[i11][0]);
            this.state.chartData18.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData18.datasets[26].data.push(Spine27_Port103_iUpkts[i11][0]);
            this.state.chartData18.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData18.datasets[27].data.push(Spine27_Port104_iUpkts[i11][0]);
            this.state.chartData18.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData24.datasets[0].data.push(Spine27_Port1_iBpkts[i11][0]);
            this.state.chartData24.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData24.datasets[1].data.push(Spine27_Port2_iBpkts[i11][0]);
            this.state.chartData24.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData24.datasets[2].data.push(Spine27_Port3_iBpkts[i11][0]);
            this.state.chartData24.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData24.datasets[3].data.push(Spine27_Port4_iBpkts[i11][0]);
            this.state.chartData24.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData24.datasets[4].data.push(Spine27_Port5_iBpkts[i11][0]);
            this.state.chartData24.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData24.datasets[5].data.push(Spine27_Port9_iBpkts[i11][0]);
            this.state.chartData24.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData24.datasets[6].data.push(Spine27_Port13_iBpkts[i11][0]);
            this.state.chartData24.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData24.datasets[7].data.push(Spine27_Port17_iBpkts[i11][0]);
            this.state.chartData24.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData24.datasets[8].data.push(Spine27_Port21_iBpkts[i11][0]);
            this.state.chartData24.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData24.datasets[9].data.push(Spine27_Port25_iBpkts[i11][0]);
            this.state.chartData24.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData24.datasets[10].data.push(Spine27_Port29_iBpkts[i11][0]);
            this.state.chartData24.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData24.datasets[11].data.push(Spine27_Port33_iBpkts[i11][0]);
            this.state.chartData24.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData24.datasets[12].data.push(Spine27_Port89_iBpkts[i11][0]);
            this.state.chartData24.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData24.datasets[13].data.push(Spine27_Port90_iBpkts[i11][0]);
            this.state.chartData24.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData24.datasets[14].data.push(Spine27_Port91_iBpkts[i11][0]);
            this.state.chartData24.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData24.datasets[15].data.push(Spine27_Port92_iBpkts[i11][0]);
            this.state.chartData24.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData24.datasets[16].data.push(Spine27_Port93_iBpkts[i11][0]);
            this.state.chartData24.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData24.datasets[17].data.push(Spine27_Port94_iBpkts[i11][0]);
            this.state.chartData24.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData24.datasets[18].data.push(Spine27_Port95_iBpkts[i11][0]);
            this.state.chartData24.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData24.datasets[19].data.push(Spine27_Port96_iBpkts[i11][0]);
            this.state.chartData24.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData24.datasets[20].data.push(Spine27_Port97_iBpkts[i11][0]);
            this.state.chartData24.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData24.datasets[21].data.push(Spine27_Port98_iBpkts[i11][0]);
            this.state.chartData24.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData24.datasets[22].data.push(Spine27_Port99_iBpkts[i11][0]);
            this.state.chartData24.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData24.datasets[23].data.push(Spine27_Port100_iBpkts[i11][0]);
            this.state.chartData24.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData24.datasets[24].data.push(Spine27_Port101_iBpkts[i11][0]);
            this.state.chartData24.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData24.datasets[25].data.push(Spine27_Port102_iBpkts[i11][0]);
            this.state.chartData24.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData24.datasets[26].data.push(Spine27_Port103_iBpkts[i11][0]);
            this.state.chartData24.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData24.datasets[27].data.push(Spine27_Port104_iBpkts[i11][0]);
            this.state.chartData24.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData30.datasets[0].data.push(Spine27_Port1_iMpkts[i11][0]);
            this.state.chartData30.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData30.datasets[1].data.push(Spine27_Port2_iMpkts[i11][0]);
            this.state.chartData30.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData30.datasets[2].data.push(Spine27_Port3_iMpkts[i11][0]);
            this.state.chartData30.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData30.datasets[3].data.push(Spine27_Port4_iMpkts[i11][0]);
            this.state.chartData30.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData30.datasets[4].data.push(Spine27_Port5_iMpkts[i11][0]);
            this.state.chartData30.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData30.datasets[5].data.push(Spine27_Port9_iMpkts[i11][0]);
            this.state.chartData30.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData30.datasets[6].data.push(Spine27_Port13_iMpkts[i11][0]);
            this.state.chartData30.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData30.datasets[7].data.push(Spine27_Port17_iMpkts[i11][0]);
            this.state.chartData30.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData30.datasets[8].data.push(Spine27_Port21_iMpkts[i11][0]);
            this.state.chartData30.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData30.datasets[9].data.push(Spine27_Port25_iMpkts[i11][0]);
            this.state.chartData30.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData30.datasets[10].data.push(Spine27_Port29_iMpkts[i11][0]);
            this.state.chartData30.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData30.datasets[11].data.push(Spine27_Port33_iMpkts[i11][0]);
            this.state.chartData30.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData30.datasets[12].data.push(Spine27_Port89_iMpkts[i11][0]);
            this.state.chartData30.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData30.datasets[13].data.push(Spine27_Port90_iMpkts[i11][0]);
            this.state.chartData30.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData30.datasets[14].data.push(Spine27_Port91_iMpkts[i11][0]);
            this.state.chartData30.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData30.datasets[15].data.push(Spine27_Port92_iMpkts[i11][0]);
            this.state.chartData30.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData30.datasets[16].data.push(Spine27_Port93_iMpkts[i11][0]);
            this.state.chartData30.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData30.datasets[17].data.push(Spine27_Port94_iMpkts[i11][0]);
            this.state.chartData30.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData30.datasets[18].data.push(Spine27_Port95_iMpkts[i11][0]);
            this.state.chartData30.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData30.datasets[19].data.push(Spine27_Port96_iMpkts[i11][0]);
            this.state.chartData30.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData30.datasets[20].data.push(Spine27_Port97_iMpkts[i11][0]);
            this.state.chartData30.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData30.datasets[21].data.push(Spine27_Port98_iMpkts[i11][0]);
            this.state.chartData30.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData30.datasets[22].data.push(Spine27_Port99_iMpkts[i11][0]);
            this.state.chartData30.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData30.datasets[23].data.push(Spine27_Port100_iMpkts[i11][0]);
            this.state.chartData30.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData30.datasets[24].data.push(Spine27_Port101_iMpkts[i11][0]);
            this.state.chartData30.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData30.datasets[25].data.push(Spine27_Port102_iMpkts[i11][0]);
            this.state.chartData30.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData30.datasets[26].data.push(Spine27_Port103_iMpkts[i11][0]);
            this.state.chartData30.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData30.datasets[27].data.push(Spine27_Port104_iMpkts[i11][0]);
            this.state.chartData30.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData36.datasets[0].data.push(Spine27_Port1_iCongDrops[i11][0]);
            this.state.chartData36.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData36.datasets[1].data.push(Spine27_Port2_iCongDrops[i11][0]);
            this.state.chartData36.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData36.datasets[2].data.push(Spine27_Port3_iCongDrops[i11][0]);
            this.state.chartData36.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData36.datasets[3].data.push(Spine27_Port4_iCongDrops[i11][0]);
            this.state.chartData36.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData36.datasets[4].data.push(Spine27_Port5_iCongDrops[i11][0]);
            this.state.chartData36.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData36.datasets[5].data.push(Spine27_Port9_iCongDrops[i11][0]);
            this.state.chartData36.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData36.datasets[6].data.push(Spine27_Port13_iCongDrops[i11][0]);
            this.state.chartData36.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData36.datasets[7].data.push(Spine27_Port17_iCongDrops[i11][0]);
            this.state.chartData36.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData36.datasets[8].data.push(Spine27_Port21_iCongDrops[i11][0]);
            this.state.chartData36.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData36.datasets[9].data.push(Spine27_Port25_iCongDrops[i11][0]);
            this.state.chartData36.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData36.datasets[10].data.push(Spine27_Port29_iCongDrops[i11][0]);
            this.state.chartData36.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData36.datasets[11].data.push(Spine27_Port33_iCongDrops[i11][0]);
            this.state.chartData36.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData36.datasets[12].data.push(Spine27_Port89_iCongDrops[i11][0]);
            this.state.chartData36.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData36.datasets[13].data.push(Spine27_Port90_iCongDrops[i11][0]);
            this.state.chartData36.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData36.datasets[14].data.push(Spine27_Port91_iCongDrops[i11][0]);
            this.state.chartData36.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData36.datasets[15].data.push(Spine27_Port92_iCongDrops[i11][0]);
            this.state.chartData36.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData36.datasets[16].data.push(Spine27_Port93_iCongDrops[i11][0]);
            this.state.chartData36.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData36.datasets[17].data.push(Spine27_Port94_iCongDrops[i11][0]);
            this.state.chartData36.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData36.datasets[18].data.push(Spine27_Port95_iCongDrops[i11][0]);
            this.state.chartData36.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData36.datasets[19].data.push(Spine27_Port96_iCongDrops[i11][0]);
            this.state.chartData36.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData36.datasets[20].data.push(Spine27_Port97_iCongDrops[i11][0]);
            this.state.chartData36.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData36.datasets[21].data.push(Spine27_Port98_iCongDrops[i11][0]);
            this.state.chartData36.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData36.datasets[22].data.push(Spine27_Port99_iCongDrops[i11][0]);
            this.state.chartData36.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData36.datasets[23].data.push(Spine27_Port100_iCongDrops[i11][0]);
            this.state.chartData36.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData36.datasets[24].data.push(Spine27_Port101_iCongDrops[i11][0]);
            this.state.chartData36.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData36.datasets[25].data.push(Spine27_Port102_iCongDrops[i11][0]);
            this.state.chartData36.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData36.datasets[26].data.push(Spine27_Port103_iCongDrops[i11][0]);
            this.state.chartData36.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData36.datasets[27].data.push(Spine27_Port104_iCongDrops[i11][0]);
            this.state.chartData36.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData42.datasets[0].data.push(Spine27_Port1_ierrs[i11][0]);
            this.state.chartData42.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData42.datasets[1].data.push(Spine27_Port2_ierrs[i11][0]);
            this.state.chartData42.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData42.datasets[2].data.push(Spine27_Port3_ierrs[i11][0]);
            this.state.chartData42.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData42.datasets[3].data.push(Spine27_Port4_ierrs[i11][0]);
            this.state.chartData42.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData42.datasets[4].data.push(Spine27_Port5_ierrs[i11][0]);
            this.state.chartData42.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData42.datasets[5].data.push(Spine27_Port9_ierrs[i11][0]);
            this.state.chartData42.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData42.datasets[6].data.push(Spine27_Port13_ierrs[i11][0]);
            this.state.chartData42.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData42.datasets[7].data.push(Spine27_Port17_ierrs[i11][0]);
            this.state.chartData42.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData42.datasets[8].data.push(Spine27_Port21_ierrs[i11][0]);
            this.state.chartData42.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData42.datasets[9].data.push(Spine27_Port25_ierrs[i11][0]);
            this.state.chartData42.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData42.datasets[10].data.push(Spine27_Port29_ierrs[i11][0]);
            this.state.chartData42.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData42.datasets[11].data.push(Spine27_Port33_ierrs[i11][0]);
            this.state.chartData42.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData42.datasets[12].data.push(Spine27_Port89_ierrs[i11][0]);
            this.state.chartData42.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData42.datasets[13].data.push(Spine27_Port90_ierrs[i11][0]);
            this.state.chartData42.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData42.datasets[14].data.push(Spine27_Port91_ierrs[i11][0]);
            this.state.chartData42.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData42.datasets[15].data.push(Spine27_Port92_ierrs[i11][0]);
            this.state.chartData42.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData42.datasets[16].data.push(Spine27_Port93_ierrs[i11][0]);
            this.state.chartData42.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData42.datasets[17].data.push(Spine27_Port94_ierrs[i11][0]);
            this.state.chartData42.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData42.datasets[18].data.push(Spine27_Port95_ierrs[i11][0]);
            this.state.chartData42.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData42.datasets[19].data.push(Spine27_Port96_ierrs[i11][0]);
            this.state.chartData42.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData42.datasets[20].data.push(Spine27_Port97_ierrs[i11][0]);
            this.state.chartData42.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData42.datasets[21].data.push(Spine27_Port98_ierrs[i11][0]);
            this.state.chartData42.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData42.datasets[22].data.push(Spine27_Port99_ierrs[i11][0]);
            this.state.chartData42.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData42.datasets[23].data.push(Spine27_Port100_ierrs[i11][0]);
            this.state.chartData42.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData42.datasets[24].data.push(Spine27_Port101_ierrs[i11][0]);
            this.state.chartData42.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData42.datasets[25].data.push(Spine27_Port102_ierrs[i11][0]);
            this.state.chartData42.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData42.datasets[26].data.push(Spine27_Port103_ierrs[i11][0]);
            this.state.chartData42.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData42.datasets[27].data.push(Spine27_Port104_ierrs[i11][0]);
            this.state.chartData42.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData48.datasets[0].data.push(Spine27_Port1_obytes[i11][0]);
            this.state.chartData48.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData48.datasets[1].data.push(Spine27_Port2_obytes[i11][0]);
            this.state.chartData48.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData48.datasets[2].data.push(Spine27_Port3_obytes[i11][0]);
            this.state.chartData48.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData48.datasets[3].data.push(Spine27_Port4_obytes[i11][0]);
            this.state.chartData48.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData48.datasets[4].data.push(Spine27_Port5_obytes[i11][0]);
            this.state.chartData48.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData48.datasets[5].data.push(Spine27_Port9_obytes[i11][0]);
            this.state.chartData48.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData48.datasets[6].data.push(Spine27_Port13_obytes[i11][0]);
            this.state.chartData48.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData48.datasets[7].data.push(Spine27_Port17_obytes[i11][0]);
            this.state.chartData48.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData48.datasets[8].data.push(Spine27_Port21_obytes[i11][0]);
            this.state.chartData48.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData48.datasets[9].data.push(Spine27_Port25_obytes[i11][0]);
            this.state.chartData48.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData48.datasets[10].data.push(Spine27_Port29_obytes[i11][0]);
            this.state.chartData48.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData48.datasets[11].data.push(Spine27_Port33_obytes[i11][0]);
            this.state.chartData48.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData48.datasets[12].data.push(Spine27_Port89_obytes[i11][0]);
            this.state.chartData48.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData48.datasets[13].data.push(Spine27_Port90_obytes[i11][0]);
            this.state.chartData48.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData48.datasets[14].data.push(Spine27_Port91_obytes[i11][0]);
            this.state.chartData48.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData48.datasets[15].data.push(Spine27_Port92_obytes[i11][0]);
            this.state.chartData48.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData48.datasets[16].data.push(Spine27_Port93_obytes[i11][0]);
            this.state.chartData48.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData48.datasets[17].data.push(Spine27_Port94_obytes[i11][0]);
            this.state.chartData48.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData48.datasets[18].data.push(Spine27_Port95_obytes[i11][0]);
            this.state.chartData48.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData48.datasets[19].data.push(Spine27_Port96_obytes[i11][0]);
            this.state.chartData48.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData48.datasets[20].data.push(Spine27_Port97_obytes[i11][0]);
            this.state.chartData48.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData48.datasets[21].data.push(Spine27_Port98_obytes[i11][0]);
            this.state.chartData48.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData48.datasets[22].data.push(Spine27_Port99_obytes[i11][0]);
            this.state.chartData48.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData48.datasets[23].data.push(Spine27_Port100_obytes[i11][0]);
            this.state.chartData48.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData48.datasets[24].data.push(Spine27_Port101_obytes[i11][0]);
            this.state.chartData48.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData48.datasets[25].data.push(Spine27_Port102_obytes[i11][0]);
            this.state.chartData48.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData48.datasets[26].data.push(Spine27_Port103_obytes[i11][0]);
            this.state.chartData48.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData48.datasets[27].data.push(Spine27_Port104_obytes[i11][0]);
            this.state.chartData48.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData54.datasets[0].data.push(Spine27_Port1_oUpkts[i11][0]);
            this.state.chartData54.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData54.datasets[1].data.push(Spine27_Port2_oUpkts[i11][0]);
            this.state.chartData54.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData54.datasets[2].data.push(Spine27_Port3_oUpkts[i11][0]);
            this.state.chartData54.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData54.datasets[3].data.push(Spine27_Port4_oUpkts[i11][0]);
            this.state.chartData54.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData54.datasets[4].data.push(Spine27_Port5_oUpkts[i11][0]);
            this.state.chartData54.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData54.datasets[5].data.push(Spine27_Port9_oUpkts[i11][0]);
            this.state.chartData54.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData54.datasets[6].data.push(Spine27_Port13_oUpkts[i11][0]);
            this.state.chartData54.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData54.datasets[7].data.push(Spine27_Port17_oUpkts[i11][0]);
            this.state.chartData54.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData54.datasets[8].data.push(Spine27_Port21_oUpkts[i11][0]);
            this.state.chartData54.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData54.datasets[9].data.push(Spine27_Port25_oUpkts[i11][0]);
            this.state.chartData54.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData54.datasets[10].data.push(Spine27_Port29_oUpkts[i11][0]);
            this.state.chartData54.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData54.datasets[11].data.push(Spine27_Port33_oUpkts[i11][0]);
            this.state.chartData54.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData54.datasets[12].data.push(Spine27_Port89_oUpkts[i11][0]);
            this.state.chartData54.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData54.datasets[13].data.push(Spine27_Port90_oUpkts[i11][0]);
            this.state.chartData54.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData54.datasets[14].data.push(Spine27_Port91_oUpkts[i11][0]);
            this.state.chartData54.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData54.datasets[15].data.push(Spine27_Port92_oUpkts[i11][0]);
            this.state.chartData54.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData54.datasets[16].data.push(Spine27_Port93_oUpkts[i11][0]);
            this.state.chartData54.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData54.datasets[17].data.push(Spine27_Port94_oUpkts[i11][0]);
            this.state.chartData54.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData54.datasets[18].data.push(Spine27_Port95_oUpkts[i11][0]);
            this.state.chartData54.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData54.datasets[19].data.push(Spine27_Port96_oUpkts[i11][0]);
            this.state.chartData54.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData54.datasets[20].data.push(Spine27_Port97_oUpkts[i11][0]);
            this.state.chartData54.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData54.datasets[21].data.push(Spine27_Port98_oUpkts[i11][0]);
            this.state.chartData54.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData54.datasets[22].data.push(Spine27_Port99_oUpkts[i11][0]);
            this.state.chartData54.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData54.datasets[23].data.push(Spine27_Port100_oUpkts[i11][0]);
            this.state.chartData54.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData54.datasets[24].data.push(Spine27_Port101_oUpkts[i11][0]);
            this.state.chartData54.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData54.datasets[25].data.push(Spine27_Port102_oUpkts[i11][0]);
            this.state.chartData54.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData54.datasets[26].data.push(Spine27_Port103_oUpkts[i11][0]);
            this.state.chartData54.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData54.datasets[27].data.push(Spine27_Port104_oUpkts[i11][0]);
            this.state.chartData54.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData60.datasets[0].data.push(Spine27_Port1_oBpkts[i11][0]);
            this.state.chartData60.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData60.datasets[1].data.push(Spine27_Port2_oBpkts[i11][0]);
            this.state.chartData60.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData60.datasets[2].data.push(Spine27_Port3_oBpkts[i11][0]);
            this.state.chartData60.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData60.datasets[3].data.push(Spine27_Port4_oBpkts[i11][0]);
            this.state.chartData60.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData60.datasets[4].data.push(Spine27_Port5_oBpkts[i11][0]);
            this.state.chartData60.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData60.datasets[5].data.push(Spine27_Port9_oBpkts[i11][0]);
            this.state.chartData60.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData60.datasets[6].data.push(Spine27_Port13_oBpkts[i11][0]);
            this.state.chartData60.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData60.datasets[7].data.push(Spine27_Port17_oBpkts[i11][0]);
            this.state.chartData60.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData60.datasets[8].data.push(Spine27_Port21_oBpkts[i11][0]);
            this.state.chartData60.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData60.datasets[9].data.push(Spine27_Port25_oBpkts[i11][0]);
            this.state.chartData60.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData60.datasets[10].data.push(Spine27_Port29_oBpkts[i11][0]);
            this.state.chartData60.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData60.datasets[11].data.push(Spine27_Port33_oBpkts[i11][0]);
            this.state.chartData60.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData60.datasets[12].data.push(Spine27_Port89_oBpkts[i11][0]);
            this.state.chartData60.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData60.datasets[13].data.push(Spine27_Port90_oBpkts[i11][0]);
            this.state.chartData60.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData60.datasets[14].data.push(Spine27_Port91_oBpkts[i11][0]);
            this.state.chartData60.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData60.datasets[15].data.push(Spine27_Port92_oBpkts[i11][0]);
            this.state.chartData60.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData60.datasets[16].data.push(Spine27_Port93_oBpkts[i11][0]);
            this.state.chartData60.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData60.datasets[17].data.push(Spine27_Port94_oBpkts[i11][0]);
            this.state.chartData60.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData60.datasets[18].data.push(Spine27_Port95_oBpkts[i11][0]);
            this.state.chartData60.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData60.datasets[19].data.push(Spine27_Port96_oBpkts[i11][0]);
            this.state.chartData60.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData60.datasets[20].data.push(Spine27_Port97_oBpkts[i11][0]);
            this.state.chartData60.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData60.datasets[21].data.push(Spine27_Port98_oBpkts[i11][0]);
            this.state.chartData60.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData60.datasets[22].data.push(Spine27_Port99_oBpkts[i11][0]);
            this.state.chartData60.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData60.datasets[23].data.push(Spine27_Port100_oBpkts[i11][0]);
            this.state.chartData60.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData60.datasets[24].data.push(Spine27_Port101_oBpkts[i11][0]);
            this.state.chartData60.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData60.datasets[25].data.push(Spine27_Port102_oBpkts[i11][0]);
            this.state.chartData60.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData60.datasets[26].data.push(Spine27_Port103_oBpkts[i11][0]);
            this.state.chartData60.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData60.datasets[27].data.push(Spine27_Port104_oBpkts[i11][0]);
            this.state.chartData60.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData66.datasets[0].data.push(Spine27_Port1_oMpkts[i11][0]);
            this.state.chartData66.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData66.datasets[1].data.push(Spine27_Port2_oMpkts[i11][0]);
            this.state.chartData66.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData66.datasets[2].data.push(Spine27_Port3_oMpkts[i11][0]);
            this.state.chartData66.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData66.datasets[3].data.push(Spine27_Port4_oMpkts[i11][0]);
            this.state.chartData66.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData66.datasets[4].data.push(Spine27_Port5_oMpkts[i11][0]);
            this.state.chartData66.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData66.datasets[5].data.push(Spine27_Port9_oMpkts[i11][0]);
            this.state.chartData66.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData66.datasets[6].data.push(Spine27_Port13_oMpkts[i11][0]);
            this.state.chartData66.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData66.datasets[7].data.push(Spine27_Port17_oMpkts[i11][0]);
            this.state.chartData66.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData66.datasets[8].data.push(Spine27_Port21_oMpkts[i11][0]);
            this.state.chartData66.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData66.datasets[9].data.push(Spine27_Port25_oMpkts[i11][0]);
            this.state.chartData66.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData66.datasets[10].data.push(Spine27_Port29_oMpkts[i11][0]);
            this.state.chartData66.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData66.datasets[11].data.push(Spine27_Port33_oMpkts[i11][0]);
            this.state.chartData66.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData66.datasets[12].data.push(Spine27_Port89_oMpkts[i11][0]);
            this.state.chartData66.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData66.datasets[13].data.push(Spine27_Port90_oMpkts[i11][0]);
            this.state.chartData66.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData66.datasets[14].data.push(Spine27_Port91_oMpkts[i11][0]);
            this.state.chartData66.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData66.datasets[15].data.push(Spine27_Port92_oMpkts[i11][0]);
            this.state.chartData66.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData66.datasets[16].data.push(Spine27_Port93_oMpkts[i11][0]);
            this.state.chartData66.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData66.datasets[17].data.push(Spine27_Port94_oMpkts[i11][0]);
            this.state.chartData66.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData66.datasets[18].data.push(Spine27_Port95_oMpkts[i11][0]);
            this.state.chartData66.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData66.datasets[19].data.push(Spine27_Port96_oMpkts[i11][0]);
            this.state.chartData66.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData66.datasets[20].data.push(Spine27_Port97_oMpkts[i11][0]);
            this.state.chartData66.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData66.datasets[21].data.push(Spine27_Port98_oMpkts[i11][0]);
            this.state.chartData66.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData66.datasets[22].data.push(Spine27_Port99_oMpkts[i11][0]);
            this.state.chartData66.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData66.datasets[23].data.push(Spine27_Port100_oMpkts[i11][0]);
            this.state.chartData66.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData66.datasets[24].data.push(Spine27_Port101_oMpkts[i11][0]);
            this.state.chartData66.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData66.datasets[25].data.push(Spine27_Port102_oMpkts[i11][0]);
            this.state.chartData66.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData66.datasets[26].data.push(Spine27_Port103_oMpkts[i11][0]);
            this.state.chartData66.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData66.datasets[27].data.push(Spine27_Port104_oMpkts[i11][0]);
            this.state.chartData66.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData72.datasets[0].data.push(Spine27_Port1_oCongDrops[i11][0]);
            this.state.chartData72.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData72.datasets[1].data.push(Spine27_Port2_oCongDrops[i11][0]);
            this.state.chartData72.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData72.datasets[2].data.push(Spine27_Port3_oCongDrops[i11][0]);
            this.state.chartData72.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData72.datasets[3].data.push(Spine27_Port4_oCongDrops[i11][0]);
            this.state.chartData72.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData72.datasets[4].data.push(Spine27_Port5_oCongDrops[i11][0]);
            this.state.chartData72.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData72.datasets[5].data.push(Spine27_Port9_oCongDrops[i11][0]);
            this.state.chartData72.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData72.datasets[6].data.push(Spine27_Port13_oCongDrops[i11][0]);
            this.state.chartData72.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData72.datasets[7].data.push(Spine27_Port17_oCongDrops[i11][0]);
            this.state.chartData72.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData72.datasets[8].data.push(Spine27_Port21_oCongDrops[i11][0]);
            this.state.chartData72.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData72.datasets[9].data.push(Spine27_Port25_oCongDrops[i11][0]);
            this.state.chartData72.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData72.datasets[10].data.push(Spine27_Port29_oCongDrops[i11][0]);
            this.state.chartData72.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData72.datasets[11].data.push(Spine27_Port33_oCongDrops[i11][0]);
            this.state.chartData72.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData72.datasets[12].data.push(Spine27_Port89_oCongDrops[i11][0]);
            this.state.chartData72.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData72.datasets[13].data.push(Spine27_Port90_oCongDrops[i11][0]);
            this.state.chartData72.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData72.datasets[14].data.push(Spine27_Port91_oCongDrops[i11][0]);
            this.state.chartData72.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData72.datasets[15].data.push(Spine27_Port92_oCongDrops[i11][0]);
            this.state.chartData72.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData72.datasets[16].data.push(Spine27_Port93_oCongDrops[i11][0]);
            this.state.chartData72.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData72.datasets[17].data.push(Spine27_Port94_oCongDrops[i11][0]);
            this.state.chartData72.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData72.datasets[18].data.push(Spine27_Port95_oCongDrops[i11][0]);
            this.state.chartData72.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData72.datasets[19].data.push(Spine27_Port96_oCongDrops[i11][0]);
            this.state.chartData72.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData72.datasets[20].data.push(Spine27_Port97_oCongDrops[i11][0]);
            this.state.chartData72.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData72.datasets[21].data.push(Spine27_Port98_oCongDrops[i11][0]);
            this.state.chartData72.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData72.datasets[22].data.push(Spine27_Port99_oCongDrops[i11][0]);
            this.state.chartData72.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData72.datasets[23].data.push(Spine27_Port100_oCongDrops[i11][0]);
            this.state.chartData72.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData72.datasets[24].data.push(Spine27_Port101_oCongDrops[i11][0]);
            this.state.chartData72.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData72.datasets[25].data.push(Spine27_Port102_oCongDrops[i11][0]);
            this.state.chartData72.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData72.datasets[26].data.push(Spine27_Port103_oCongDrops[i11][0]);
            this.state.chartData72.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData72.datasets[27].data.push(Spine27_Port104_oCongDrops[i11][0]);
            this.state.chartData72.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData78.datasets[0].data.push(Spine27_Port1_oerrs[i11][0]);
            this.state.chartData78.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData78.datasets[1].data.push(Spine27_Port2_oerrs[i11][0]);
            this.state.chartData78.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData78.datasets[2].data.push(Spine27_Port3_oerrs[i11][0]);
            this.state.chartData78.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData78.datasets[3].data.push(Spine27_Port4_oerrs[i11][0]);
            this.state.chartData78.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData78.datasets[4].data.push(Spine27_Port5_oerrs[i11][0]);
            this.state.chartData78.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData78.datasets[5].data.push(Spine27_Port9_oerrs[i11][0]);
            this.state.chartData78.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData78.datasets[6].data.push(Spine27_Port13_oerrs[i11][0]);
            this.state.chartData78.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData78.datasets[7].data.push(Spine27_Port17_oerrs[i11][0]);
            this.state.chartData78.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData78.datasets[8].data.push(Spine27_Port21_oerrs[i11][0]);
            this.state.chartData78.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData78.datasets[9].data.push(Spine27_Port25_oerrs[i11][0]);
            this.state.chartData78.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData78.datasets[10].data.push(Spine27_Port29_oerrs[i11][0]);
            this.state.chartData78.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData78.datasets[11].data.push(Spine27_Port33_oerrs[i11][0]);
            this.state.chartData78.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData78.datasets[12].data.push(Spine27_Port89_oerrs[i11][0]);
            this.state.chartData78.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData78.datasets[13].data.push(Spine27_Port90_oerrs[i11][0]);
            this.state.chartData78.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData78.datasets[14].data.push(Spine27_Port91_oerrs[i11][0]);
            this.state.chartData78.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData78.datasets[15].data.push(Spine27_Port92_oerrs[i11][0]);
            this.state.chartData78.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData78.datasets[16].data.push(Spine27_Port93_oerrs[i11][0]);
            this.state.chartData78.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData78.datasets[17].data.push(Spine27_Port94_oerrs[i11][0]);
            this.state.chartData78.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData78.datasets[18].data.push(Spine27_Port95_oerrs[i11][0]);
            this.state.chartData78.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData78.datasets[19].data.push(Spine27_Port96_oerrs[i11][0]);
            this.state.chartData78.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData78.datasets[20].data.push(Spine27_Port97_oerrs[i11][0]);
            this.state.chartData78.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData78.datasets[21].data.push(Spine27_Port98_oerrs[i11][0]);
            this.state.chartData78.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData78.datasets[22].data.push(Spine27_Port99_oerrs[i11][0]);
            this.state.chartData78.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData78.datasets[23].data.push(Spine27_Port100_oerrs[i11][0]);
            this.state.chartData78.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData78.datasets[24].data.push(Spine27_Port101_oerrs[i11][0]);
            this.state.chartData78.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData78.datasets[25].data.push(Spine27_Port102_oerrs[i11][0]);
            this.state.chartData78.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData78.datasets[26].data.push(Spine27_Port103_oerrs[i11][0]);
            this.state.chartData78.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData78.datasets[27].data.push(Spine27_Port104_oerrs[i11][0]);
            this.state.chartData78.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData84.datasets[0].data.push(Spine27_Port1_mtu_errs[i11][0]);
            this.state.chartData84.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData84.datasets[1].data.push(Spine27_Port2_mtu_errs[i11][0]);
            this.state.chartData84.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData84.datasets[2].data.push(Spine27_Port3_mtu_errs[i11][0]);
            this.state.chartData84.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData84.datasets[3].data.push(Spine27_Port4_mtu_errs[i11][0]);
            this.state.chartData84.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData84.datasets[4].data.push(Spine27_Port5_mtu_errs[i11][0]);
            this.state.chartData84.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData84.datasets[5].data.push(Spine27_Port9_mtu_errs[i11][0]);
            this.state.chartData84.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData84.datasets[6].data.push(Spine27_Port13_mtu_errs[i11][0]);
            this.state.chartData84.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData84.datasets[7].data.push(Spine27_Port17_mtu_errs[i11][0]);
            this.state.chartData84.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData84.datasets[8].data.push(Spine27_Port21_mtu_errs[i11][0]);
            this.state.chartData84.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData84.datasets[9].data.push(Spine27_Port25_mtu_errs[i11][0]);
            this.state.chartData84.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData84.datasets[10].data.push(Spine27_Port29_mtu_errs[i11][0]);
            this.state.chartData84.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData84.datasets[11].data.push(Spine27_Port33_mtu_errs[i11][0]);
            this.state.chartData84.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData84.datasets[12].data.push(Spine27_Port89_mtu_errs[i11][0]);
            this.state.chartData84.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData84.datasets[13].data.push(Spine27_Port90_mtu_errs[i11][0]);
            this.state.chartData84.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData84.datasets[14].data.push(Spine27_Port91_mtu_errs[i11][0]);
            this.state.chartData84.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData84.datasets[15].data.push(Spine27_Port92_mtu_errs[i11][0]);
            this.state.chartData84.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData84.datasets[16].data.push(Spine27_Port93_mtu_errs[i11][0]);
            this.state.chartData84.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData84.datasets[17].data.push(Spine27_Port94_mtu_errs[i11][0]);
            this.state.chartData84.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData84.datasets[18].data.push(Spine27_Port95_mtu_errs[i11][0]);
            this.state.chartData84.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData84.datasets[19].data.push(Spine27_Port96_mtu_errs[i11][0]);
            this.state.chartData84.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData84.datasets[20].data.push(Spine27_Port97_mtu_errs[i11][0]);
            this.state.chartData84.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData84.datasets[21].data.push(Spine27_Port98_mtu_errs[i11][0]);
            this.state.chartData84.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData84.datasets[22].data.push(Spine27_Port99_mtu_errs[i11][0]);
            this.state.chartData84.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData84.datasets[23].data.push(Spine27_Port100_mtu_errs[i11][0]);
            this.state.chartData84.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData84.datasets[24].data.push(Spine27_Port101_mtu_errs[i11][0]);
            this.state.chartData84.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData84.datasets[25].data.push(Spine27_Port102_mtu_errs[i11][0]);
            this.state.chartData84.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData84.datasets[26].data.push(Spine27_Port103_mtu_errs[i11][0]);
            this.state.chartData84.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData84.datasets[27].data.push(Spine27_Port104_mtu_errs[i11][0]);
            this.state.chartData84.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');}}

        return(
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData12}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT ibytes for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData18}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iUpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData24}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iBpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData30}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iMpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
         <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData36}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iCongDrops for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData42}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT ierrs for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData48}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT obytes for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData54}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oUpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData60}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oBpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData66}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oMpkts for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData72}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oCongDrops for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData78}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oerrs for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
                      }
                    }
                  ]
                },
                        // Container for pan options
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
        <div className="chart3">
           <div className="bar"> <Line
                 data={this.state.chartData84}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT mtu-oerrs for Spine-01',
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
                        ticks:{beginAtZero:true},
                      scaleLabel: {
                        display: true,
                        labelString: "Bytes"
                      }
                    }
                  ]
                },
                        // Container for pan options
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
        </div></div></div></div></div></div></div>
        </div></div></div></div></div></div>

    )
    
}
}
export default NRU_Ports;