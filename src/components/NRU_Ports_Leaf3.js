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
class NRU_Ports_Leaf3 extends Component{

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
   this.state.chartData16.labels=[];   
   this.state.chartData22.labels=[];        
   this.state.chartData28.labels=[];        
   this.state.chartData34.labels=[];
   this.state.chartData40.labels=[];    
   this.state.chartData46.labels=[];    
   this.state.chartData52.labels=[];        
   this.state.chartData58.labels=[];     
   this.state.chartData64.labels=[];
   this.state.chartData70.labels=[];
   this.state.chartData76.labels=[];   
   this.state.chartData82.labels=[];   
   this.state.chartData88.labels=[];   
   
   if(document.getElementsByClassName("App")[0] != null){
   document.getElementsByClassName("App")[0].style.height = "9500px";}
}

    
    componentDidMount(){
    }

  getChartData(){
    this.setState({
        chartData16:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData22:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData28:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData34:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData40:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData46:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData52:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData58:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData64:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData70:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData76:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData82:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData88:{
            labels:[],
            datasets:[{
            label:'27-Leaf-03 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 8',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-03 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
    }
    
    );
  }


render(){

  var myHTML10 = document.getElementById('PORT_STATS');
  var textoutput10 = myHTML10.innerHTML;
  var regex_date10 = /(?<=Timestamp: )\d*/g;
  var date10 = textoutput10.match(regex_date10);
 
  
var Leaf27_3_Port1 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 1\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port2 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 2\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port3 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 3\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port4 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 4\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port8 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 8\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port10 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 10\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port13 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 13\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port17 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 17\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port81 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 81\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port85 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 85\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port86 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 86\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port87 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 87\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port88 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 88\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port89 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 89\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port90 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 90\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port91 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 91\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port92 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 92\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port93 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 93\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port94 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 94\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port95 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 95\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port96 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 96\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port97 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 97\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port98 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 98\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port99 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 99\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port100 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 100\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port101 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 101\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port102 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 102\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port103 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 103\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_3_Port104 = textoutput10.match(/27-Leaf-03\s\s\d{2}:\d{2}:\d{2} 104\s{1,5}\S{1,10}[^\n\r]*/g);

var Leaf27_3_Port1_fix = [];  var Leaf27_3_Port2_fix = [];  var Leaf27_3_Port3_fix = [];
var Leaf27_3_Port4_fix = [];  var Leaf27_3_Port8_fix = [];  var Leaf27_3_Port10_fix = [];
var Leaf27_3_Port13_fix = [];  var Leaf27_3_Port17_fix = [];  var Leaf27_3_Port81_fix = [];
var Leaf27_3_Port85_fix = [];  var Leaf27_3_Port86_fix = [];  var Leaf27_3_Port87_fix = [];
var Leaf27_3_Port88_fix = [];
var Leaf27_3_Port89_fix = [];  var Leaf27_3_Port90_fix = [];  var Leaf27_3_Port91_fix = [];
var Leaf27_3_Port92_fix = [];  var Leaf27_3_Port93_fix = [];  var Leaf27_3_Port94_fix = [];
var Leaf27_3_Port95_fix = [];  var Leaf27_3_Port96_fix = [];  var Leaf27_3_Port97_fix = [];
var Leaf27_3_Port98_fix = [];  var Leaf27_3_Port99_fix = [];  var Leaf27_3_Port100_fix = [];
var Leaf27_3_Port101_fix = [];  var Leaf27_3_Port102_fix = [];  var Leaf27_3_Port103_fix = [];
var Leaf27_3_Port104_fix = [];
var   Leaf27_3_Port1_iUpkts = [];  var   Leaf27_3_Port2_iUpkts = [];  var   Leaf27_3_Port3_iUpkts = [];
var   Leaf27_3_Port4_iUpkts = [];  var   Leaf27_3_Port8_iUpkts = [];  var  Leaf27_3_Port10_iUpkts = [];
var  Leaf27_3_Port13_iUpkts = [];  var  Leaf27_3_Port17_iUpkts = [];  var  Leaf27_3_Port81_iUpkts = [];
var  Leaf27_3_Port85_iUpkts = [];  var  Leaf27_3_Port86_iUpkts = [];  var  Leaf27_3_Port87_iUpkts = [];
var  Leaf27_3_Port88_iUpkts = [];
var  Leaf27_3_Port89_iUpkts = [];  var  Leaf27_3_Port90_iUpkts = [];  var  Leaf27_3_Port91_iUpkts = [];
var  Leaf27_3_Port92_iUpkts = [];  var  Leaf27_3_Port93_iUpkts = [];  var  Leaf27_3_Port94_iUpkts = [];
var  Leaf27_3_Port95_iUpkts = [];  var  Leaf27_3_Port96_iUpkts = [];  var  Leaf27_3_Port97_iUpkts = [];
var  Leaf27_3_Port98_iUpkts = [];  var  Leaf27_3_Port99_iUpkts = [];  var Leaf27_3_Port100_iUpkts = [];
var Leaf27_3_Port101_iUpkts = [];  var Leaf27_3_Port102_iUpkts = [];  var Leaf27_3_Port103_iUpkts = [];
var Leaf27_3_Port104_iUpkts = [];
var   Leaf27_3_Port1_iBpkts = [];  var   Leaf27_3_Port2_iBpkts = [];  var   Leaf27_3_Port3_iBpkts = [];
var   Leaf27_3_Port4_iBpkts = [];  var   Leaf27_3_Port8_iBpkts = [];  var  Leaf27_3_Port10_iBpkts = [];
var  Leaf27_3_Port13_iBpkts = [];  var  Leaf27_3_Port17_iBpkts = [];  var  Leaf27_3_Port81_iBpkts = [];
var  Leaf27_3_Port85_iBpkts = [];  var  Leaf27_3_Port86_iBpkts = [];  var  Leaf27_3_Port87_iBpkts = [];
var  Leaf27_3_Port88_iBpkts = [];
var  Leaf27_3_Port89_iBpkts = [];  var  Leaf27_3_Port90_iBpkts = [];  var  Leaf27_3_Port91_iBpkts = [];
var  Leaf27_3_Port92_iBpkts = [];  var  Leaf27_3_Port93_iBpkts = [];  var  Leaf27_3_Port94_iBpkts = [];
var  Leaf27_3_Port95_iBpkts = [];  var  Leaf27_3_Port96_iBpkts = [];  var  Leaf27_3_Port97_iBpkts = [];
var  Leaf27_3_Port98_iBpkts = [];  var  Leaf27_3_Port99_iBpkts = [];  var Leaf27_3_Port100_iBpkts = [];
var Leaf27_3_Port101_iBpkts = [];  var Leaf27_3_Port102_iBpkts = [];  var Leaf27_3_Port103_iBpkts = [];
var Leaf27_3_Port104_iBpkts = [];
var   Leaf27_3_Port1_iMpkts = [];  var   Leaf27_3_Port2_iMpkts = [];  var   Leaf27_3_Port3_iMpkts = [];
var   Leaf27_3_Port4_iMpkts = [];  var   Leaf27_3_Port8_iMpkts = [];  var  Leaf27_3_Port10_iMpkts = [];
var  Leaf27_3_Port13_iMpkts = [];  var  Leaf27_3_Port17_iMpkts = [];  var  Leaf27_3_Port81_iMpkts = [];
var  Leaf27_3_Port85_iMpkts = [];  var  Leaf27_3_Port86_iMpkts = [];  var  Leaf27_3_Port87_iMpkts = [];
var  Leaf27_3_Port88_iMpkts = [];
var  Leaf27_3_Port89_iMpkts = [];  var  Leaf27_3_Port90_iMpkts = [];  var  Leaf27_3_Port91_iMpkts = [];
var  Leaf27_3_Port92_iMpkts = [];  var  Leaf27_3_Port93_iMpkts = [];  var  Leaf27_3_Port94_iMpkts = [];
var  Leaf27_3_Port95_iMpkts = [];  var  Leaf27_3_Port96_iMpkts = [];  var  Leaf27_3_Port97_iMpkts = [];
var  Leaf27_3_Port98_iMpkts = [];  var  Leaf27_3_Port99_iMpkts = [];  var Leaf27_3_Port100_iMpkts = [];
var Leaf27_3_Port101_iMpkts = [];  var Leaf27_3_Port102_iMpkts = [];  var Leaf27_3_Port103_iMpkts = [];
var Leaf27_3_Port104_iMpkts = [];
var   Leaf27_3_Port1_iCongDrops = [];  var   Leaf27_3_Port2_iCongDrops = [];  var   Leaf27_3_Port3_iCongDrops = [];
var   Leaf27_3_Port4_iCongDrops = [];  var   Leaf27_3_Port8_iCongDrops = [];  var  Leaf27_3_Port10_iCongDrops = [];
var  Leaf27_3_Port13_iCongDrops = [];  var  Leaf27_3_Port17_iCongDrops = [];  var  Leaf27_3_Port81_iCongDrops = [];
var  Leaf27_3_Port85_iCongDrops = [];  var  Leaf27_3_Port86_iCongDrops = [];  var  Leaf27_3_Port87_iCongDrops = [];
var  Leaf27_3_Port88_iCongDrops = [];
var  Leaf27_3_Port89_iCongDrops = [];  var  Leaf27_3_Port90_iCongDrops = [];  var  Leaf27_3_Port91_iCongDrops = [];
var  Leaf27_3_Port92_iCongDrops = [];  var  Leaf27_3_Port93_iCongDrops = [];  var  Leaf27_3_Port94_iCongDrops = [];
var  Leaf27_3_Port95_iCongDrops = [];  var  Leaf27_3_Port96_iCongDrops = [];  var  Leaf27_3_Port97_iCongDrops = [];
var  Leaf27_3_Port98_iCongDrops = [];  var  Leaf27_3_Port99_iCongDrops = [];  var Leaf27_3_Port100_iCongDrops = [];
var Leaf27_3_Port101_iCongDrops = [];  var Leaf27_3_Port102_iCongDrops = [];  var Leaf27_3_Port103_iCongDrops = [];
var Leaf27_3_Port104_iCongDrops = [];
var   Leaf27_3_Port1_ierrs = [];  var   Leaf27_3_Port2_ierrs = [];  var   Leaf27_3_Port3_ierrs = [];
var   Leaf27_3_Port4_ierrs = [];  var   Leaf27_3_Port8_ierrs = [];  var  Leaf27_3_Port10_ierrs = [];
var  Leaf27_3_Port13_ierrs = [];  var  Leaf27_3_Port17_ierrs = [];  var  Leaf27_3_Port81_ierrs = [];
var  Leaf27_3_Port85_ierrs = [];  var  Leaf27_3_Port86_ierrs = [];  var  Leaf27_3_Port87_ierrs = [];
var  Leaf27_3_Port88_ierrs = [];
var  Leaf27_3_Port89_ierrs = [];  var  Leaf27_3_Port90_ierrs = [];  var  Leaf27_3_Port91_ierrs = [];
var  Leaf27_3_Port92_ierrs = [];  var  Leaf27_3_Port93_ierrs = [];  var  Leaf27_3_Port94_ierrs = [];
var  Leaf27_3_Port95_ierrs = [];  var  Leaf27_3_Port96_ierrs = [];  var  Leaf27_3_Port97_ierrs = [];
var  Leaf27_3_Port98_ierrs = [];  var  Leaf27_3_Port99_ierrs = [];  var Leaf27_3_Port100_ierrs = [];
var Leaf27_3_Port101_ierrs = [];  var Leaf27_3_Port102_ierrs = [];  var Leaf27_3_Port103_ierrs = [];
var Leaf27_3_Port104_ierrs = [];
var   Leaf27_3_Port1_obytes = [];  var   Leaf27_3_Port2_obytes = [];  var   Leaf27_3_Port3_obytes = [];
var   Leaf27_3_Port4_obytes = [];  var   Leaf27_3_Port8_obytes = [];  var  Leaf27_3_Port10_obytes = [];
var  Leaf27_3_Port13_obytes = [];  var  Leaf27_3_Port17_obytes = [];  var  Leaf27_3_Port81_obytes = [];
var  Leaf27_3_Port85_obytes = [];  var  Leaf27_3_Port86_obytes = [];  var  Leaf27_3_Port87_obytes = [];
var  Leaf27_3_Port88_obytes = [];
var  Leaf27_3_Port89_obytes = [];  var  Leaf27_3_Port90_obytes = [];  var  Leaf27_3_Port91_obytes = [];
var  Leaf27_3_Port92_obytes = [];  var  Leaf27_3_Port93_obytes = [];  var  Leaf27_3_Port94_obytes = [];
var  Leaf27_3_Port95_obytes = [];  var  Leaf27_3_Port96_obytes = [];  var  Leaf27_3_Port97_obytes = [];
var  Leaf27_3_Port98_obytes = [];  var  Leaf27_3_Port99_obytes = [];  var Leaf27_3_Port100_obytes = [];
var Leaf27_3_Port101_obytes = [];  var Leaf27_3_Port102_obytes = [];  var Leaf27_3_Port103_obytes = [];
var Leaf27_3_Port104_obytes = [];
var   Leaf27_3_Port1_oUpkts = [];  var   Leaf27_3_Port2_oUpkts = [];  var   Leaf27_3_Port3_oUpkts = [];
var   Leaf27_3_Port4_oUpkts = [];  var   Leaf27_3_Port8_oUpkts = [];  var  Leaf27_3_Port10_oUpkts = [];
var  Leaf27_3_Port13_oUpkts = [];  var  Leaf27_3_Port17_oUpkts = [];  var  Leaf27_3_Port81_oUpkts = [];
var  Leaf27_3_Port85_oUpkts = [];  var  Leaf27_3_Port86_oUpkts = [];  var  Leaf27_3_Port87_oUpkts = [];
var  Leaf27_3_Port88_oUpkts = [];
var  Leaf27_3_Port89_oUpkts = [];  var  Leaf27_3_Port90_oUpkts = [];  var  Leaf27_3_Port91_oUpkts = [];
var  Leaf27_3_Port92_oUpkts = [];  var  Leaf27_3_Port93_oUpkts = [];  var  Leaf27_3_Port94_oUpkts = [];
var  Leaf27_3_Port95_oUpkts = [];  var  Leaf27_3_Port96_oUpkts = [];  var  Leaf27_3_Port97_oUpkts = [];
var  Leaf27_3_Port98_oUpkts = [];  var  Leaf27_3_Port99_oUpkts = [];  var Leaf27_3_Port100_oUpkts = [];
var Leaf27_3_Port101_oUpkts = [];  var Leaf27_3_Port102_oUpkts = [];  var Leaf27_3_Port103_oUpkts = [];
var Leaf27_3_Port104_oUpkts = [];
var   Leaf27_3_Port1_oBpkts = [];  var   Leaf27_3_Port2_oBpkts = [];  var   Leaf27_3_Port3_oBpkts = [];
var   Leaf27_3_Port4_oBpkts = [];  var   Leaf27_3_Port8_oBpkts = [];  var  Leaf27_3_Port10_oBpkts = [];
var  Leaf27_3_Port13_oBpkts = [];  var  Leaf27_3_Port17_oBpkts = [];  var  Leaf27_3_Port81_oBpkts = [];
var  Leaf27_3_Port85_oBpkts = [];  var  Leaf27_3_Port86_oBpkts = [];  var  Leaf27_3_Port87_oBpkts = [];
var  Leaf27_3_Port88_oBpkts = [];
var  Leaf27_3_Port89_oBpkts = [];  var  Leaf27_3_Port90_oBpkts = [];  var  Leaf27_3_Port91_oBpkts = [];
var  Leaf27_3_Port92_oBpkts = [];  var  Leaf27_3_Port93_oBpkts = [];  var  Leaf27_3_Port94_oBpkts = [];
var  Leaf27_3_Port95_oBpkts = [];  var  Leaf27_3_Port96_oBpkts = [];  var  Leaf27_3_Port97_oBpkts = [];
var  Leaf27_3_Port98_oBpkts = [];  var  Leaf27_3_Port99_oBpkts = [];  var Leaf27_3_Port100_oBpkts = [];
var Leaf27_3_Port101_oBpkts = [];  var Leaf27_3_Port102_oBpkts = [];  var Leaf27_3_Port103_oBpkts = [];
var Leaf27_3_Port104_oBpkts = [];
var   Leaf27_3_Port1_oMpkts = [];  var   Leaf27_3_Port2_oMpkts = [];  var   Leaf27_3_Port3_oMpkts = [];
var   Leaf27_3_Port4_oMpkts = [];  var   Leaf27_3_Port8_oMpkts = [];  var  Leaf27_3_Port10_oMpkts = [];
var  Leaf27_3_Port13_oMpkts = [];  var  Leaf27_3_Port17_oMpkts = [];  var  Leaf27_3_Port81_oMpkts = [];
var  Leaf27_3_Port85_oMpkts = [];  var  Leaf27_3_Port86_oMpkts = [];  var  Leaf27_3_Port87_oMpkts = [];
var  Leaf27_3_Port88_oMpkts = [];
var  Leaf27_3_Port89_oMpkts = [];  var  Leaf27_3_Port90_oMpkts = [];  var  Leaf27_3_Port91_oMpkts = [];
var  Leaf27_3_Port92_oMpkts = [];  var  Leaf27_3_Port93_oMpkts = [];  var  Leaf27_3_Port94_oMpkts = [];
var  Leaf27_3_Port95_oMpkts = [];  var  Leaf27_3_Port96_oMpkts = [];  var  Leaf27_3_Port97_oMpkts = [];
var  Leaf27_3_Port98_oMpkts = [];  var  Leaf27_3_Port99_oMpkts = [];  var Leaf27_3_Port100_oMpkts = [];
var Leaf27_3_Port101_oMpkts = [];  var Leaf27_3_Port102_oMpkts = [];  var Leaf27_3_Port103_oMpkts = [];
var Leaf27_3_Port104_oMpkts = [];
var   Leaf27_3_Port1_oCongDrops = [];  var   Leaf27_3_Port2_oCongDrops = [];  var   Leaf27_3_Port3_oCongDrops = [];
var   Leaf27_3_Port4_oCongDrops = [];  var   Leaf27_3_Port8_oCongDrops = [];  var  Leaf27_3_Port10_oCongDrops = [];
var  Leaf27_3_Port13_oCongDrops = [];  var  Leaf27_3_Port17_oCongDrops = [];  var  Leaf27_3_Port81_oCongDrops = [];
var  Leaf27_3_Port85_oCongDrops = [];  var  Leaf27_3_Port86_oCongDrops = [];  var  Leaf27_3_Port87_oCongDrops = [];
var  Leaf27_3_Port88_oCongDrops = [];
var  Leaf27_3_Port89_oCongDrops = [];  var  Leaf27_3_Port90_oCongDrops = [];  var  Leaf27_3_Port91_oCongDrops = [];
var  Leaf27_3_Port92_oCongDrops = [];  var  Leaf27_3_Port93_oCongDrops = [];  var  Leaf27_3_Port94_oCongDrops = [];
var  Leaf27_3_Port95_oCongDrops = [];  var  Leaf27_3_Port96_oCongDrops = [];  var  Leaf27_3_Port97_oCongDrops = [];
var  Leaf27_3_Port98_oCongDrops = [];  var  Leaf27_3_Port99_oCongDrops = [];  var Leaf27_3_Port100_oCongDrops = [];
var Leaf27_3_Port101_oCongDrops = [];  var Leaf27_3_Port102_oCongDrops = [];  var Leaf27_3_Port103_oCongDrops = [];
var Leaf27_3_Port104_oCongDrops = [];
var   Leaf27_3_Port1_oerrs = [];  var   Leaf27_3_Port2_oerrs = [];  var   Leaf27_3_Port3_oerrs = [];
var   Leaf27_3_Port4_oerrs = [];  var   Leaf27_3_Port8_oerrs = [];  var  Leaf27_3_Port10_oerrs = [];
var  Leaf27_3_Port13_oerrs = [];  var  Leaf27_3_Port17_oerrs = [];  var  Leaf27_3_Port81_oerrs = [];
var  Leaf27_3_Port85_oerrs = [];  var  Leaf27_3_Port86_oerrs = [];  var  Leaf27_3_Port87_oerrs = [];
var  Leaf27_3_Port88_oerrs = [];
var  Leaf27_3_Port89_oerrs = [];  var  Leaf27_3_Port90_oerrs = [];  var  Leaf27_3_Port91_oerrs = [];
var  Leaf27_3_Port92_oerrs = [];  var  Leaf27_3_Port93_oerrs = [];  var  Leaf27_3_Port94_oerrs = [];
var  Leaf27_3_Port95_oerrs = [];  var  Leaf27_3_Port96_oerrs = [];  var  Leaf27_3_Port97_oerrs = [];
var  Leaf27_3_Port98_oerrs = [];  var  Leaf27_3_Port99_oerrs = [];  var Leaf27_3_Port100_oerrs = [];
var Leaf27_3_Port101_oerrs = [];  var Leaf27_3_Port102_oerrs = [];  var Leaf27_3_Port103_oerrs = [];
var Leaf27_3_Port104_oerrs = [];
var   Leaf27_3_Port1_mtu_errs = [];  var   Leaf27_3_Port2_mtu_errs = [];  var   Leaf27_3_Port3_mtu_errs = [];
var   Leaf27_3_Port4_mtu_errs = [];  var   Leaf27_3_Port8_mtu_errs = [];  var  Leaf27_3_Port10_mtu_errs = [];
var  Leaf27_3_Port13_mtu_errs = [];  var  Leaf27_3_Port17_mtu_errs = [];  var  Leaf27_3_Port81_mtu_errs = [];
var  Leaf27_3_Port85_mtu_errs = [];  var  Leaf27_3_Port86_mtu_errs = [];  var  Leaf27_3_Port87_mtu_errs = [];
var  Leaf27_3_Port88_mtu_errs = [];
var  Leaf27_3_Port89_mtu_errs = [];  var  Leaf27_3_Port90_mtu_errs = [];  var  Leaf27_3_Port91_mtu_errs = [];
var  Leaf27_3_Port92_mtu_errs = [];  var  Leaf27_3_Port93_mtu_errs = [];  var  Leaf27_3_Port94_mtu_errs = [];
var  Leaf27_3_Port95_mtu_errs = [];  var  Leaf27_3_Port96_mtu_errs = [];  var  Leaf27_3_Port97_mtu_errs = [];
var  Leaf27_3_Port98_mtu_errs = [];  var  Leaf27_3_Port99_mtu_errs = [];  var Leaf27_3_Port100_mtu_errs = [];
var Leaf27_3_Port101_mtu_errs = [];  var Leaf27_3_Port102_mtu_errs = [];  var Leaf27_3_Port103_mtu_errs = [];
var Leaf27_3_Port104_mtu_errs = [];

var parse = [];

    if(date10!=null){
        for(var i11=0;i11<date10.length;i11++){
            parse[i11] = parseInt(date10[i11], 10);
            this.state.chartData16.labels.push(parse[i11]);
            this.state.chartData22.labels.push(parse[i11]);
            this.state.chartData28.labels.push(parse[i11]);
            this.state.chartData34.labels.push(parse[i11]);
            this.state.chartData40.labels.push(parse[i11]);
            this.state.chartData46.labels.push(parse[i11]);
            this.state.chartData52.labels.push(parse[i11]);
            this.state.chartData58.labels.push(parse[i11]);
            this.state.chartData64.labels.push(parse[i11]);
            this.state.chartData70.labels.push(parse[i11]);
            this.state.chartData76.labels.push(parse[i11]);
            this.state.chartData82.labels.push(parse[i11]);
            this.state.chartData88.labels.push(parse[i11]);
                        
if(Leaf27_3_Port1[i11] !== undefined){ 
    //    console.log(Leaf27_3_Port1[i11]);
    Leaf27_3_Port1_fix[i11] = Leaf27_3_Port1[i11].slice(26, 34);
    Leaf27_3_Port1_iUpkts[i11] = Leaf27_3_Port1[i11].slice(33,40);
    Leaf27_3_Port1_iBpkts[i11] = Leaf27_3_Port1[i11].slice(40,47);
    Leaf27_3_Port1_iMpkts[i11] = Leaf27_3_Port1[i11].slice(47,54);
    Leaf27_3_Port1_iCongDrops[i11] = Leaf27_3_Port1[i11].slice(54,65);
    Leaf27_3_Port1_ierrs[i11] = Leaf27_3_Port1[i11].slice(65,71);
    Leaf27_3_Port1_obytes[i11] = Leaf27_3_Port1[i11].slice(71,78);
    Leaf27_3_Port1_oUpkts[i11] = Leaf27_3_Port1[i11].slice(78,85);
    Leaf27_3_Port1_oBpkts[i11] = Leaf27_3_Port1[i11].slice(85,92);
    Leaf27_3_Port1_oMpkts[i11] = Leaf27_3_Port1[i11].slice(92,99);
    Leaf27_3_Port1_oCongDrops[i11] = Leaf27_3_Port1[i11].slice(99,110);
    Leaf27_3_Port1_oerrs[i11] = Leaf27_3_Port1[i11].slice(110,116);
    Leaf27_3_Port1_mtu_errs[i11] = Leaf27_3_Port1[i11].slice(116,125);

    if(Leaf27_3_Port1_fix[i11].includes("G")){
        Leaf27_3_Port1_fix[i11] = Leaf27_3_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_fix[i11][0] = Leaf27_3_Port1_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_fix[i11].includes("M")){
        Leaf27_3_Port1_fix[i11] = Leaf27_3_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_fix[i11][0] = Leaf27_3_Port1_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port1_fix[i11].includes("K")){
        Leaf27_3_Port1_fix[i11] = Leaf27_3_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_fix[i11][0] = Leaf27_3_Port1_fix[i11][0]*1000;}
    else {
        Leaf27_3_Port1_fix[i11] = Leaf27_3_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_iUpkts[i11].includes("G")){
        Leaf27_3_Port1_iUpkts[i11] = Leaf27_3_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iUpkts[i11][0] = Leaf27_3_Port1_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_iUpkts[i11].includes("M")){
        Leaf27_3_Port1_iUpkts[i11] = Leaf27_3_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iUpkts[i11][0] = Leaf27_3_Port1_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_iUpkts[i11].includes("K")){
        Leaf27_3_Port1_iUpkts[i11] = Leaf27_3_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iUpkts[i11][0] = Leaf27_3_Port1_iUpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_iUpkts[i11] = Leaf27_3_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_iBpkts[i11].includes("G")){
        Leaf27_3_Port1_iBpkts[i11] = Leaf27_3_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iBpkts[i11][0] = Leaf27_3_Port1_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_iBpkts[i11].includes("M")){
        Leaf27_3_Port1_iBpkts[i11] = Leaf27_3_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iBpkts[i11][0] = Leaf27_3_Port1_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_iBpkts[i11].includes("K")){
        Leaf27_3_Port1_iBpkts[i11] = Leaf27_3_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iBpkts[i11][0] = Leaf27_3_Port1_iBpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_iBpkts[i11] = Leaf27_3_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
    if(Leaf27_3_Port1_iMpkts[i11].includes("G")){
        Leaf27_3_Port1_iMpkts[i11] = Leaf27_3_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iMpkts[i11][0] = Leaf27_3_Port1_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_iMpkts[i11].includes("M")){
        Leaf27_3_Port1_iMpkts[i11] = Leaf27_3_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iMpkts[i11][0] = Leaf27_3_Port1_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_iMpkts[i11].includes("K")){
        Leaf27_3_Port1_iMpkts[i11] = Leaf27_3_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iMpkts[i11][0] = Leaf27_3_Port1_iMpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_iMpkts[i11] = Leaf27_3_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }

    if(Leaf27_3_Port1_iCongDrops[i11].includes("G")){
        Leaf27_3_Port1_iCongDrops[i11] = Leaf27_3_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iCongDrops[i11][0] = Leaf27_3_Port1_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_iCongDrops[i11].includes("M")){
        Leaf27_3_Port1_iCongDrops[i11] = Leaf27_3_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iCongDrops[i11][0] = Leaf27_3_Port1_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port1_iCongDrops[i11].includes("K")){
        Leaf27_3_Port1_iCongDrops[i11] = Leaf27_3_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_iCongDrops[i11][0] = Leaf27_3_Port1_iCongDrops[i11][0]*1000;}
    else {
        Leaf27_3_Port1_iCongDrops[i11] = Leaf27_3_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }

    if(Leaf27_3_Port1_ierrs[i11].includes("G")){
        Leaf27_3_Port1_ierrs[i11] = Leaf27_3_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_ierrs[i11][0] = Leaf27_3_Port1_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_ierrs[i11].includes("M")){
        Leaf27_3_Port1_ierrs[i11] = Leaf27_3_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_ierrs[i11][0] = Leaf27_3_Port1_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port1_ierrs[i11].includes("K")){
        Leaf27_3_Port1_ierrs[i11] = Leaf27_3_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_ierrs[i11][0] = Leaf27_3_Port1_ierrs[i11][0]*1000;}
    else {
        Leaf27_3_Port1_ierrs[i11] = Leaf27_3_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_obytes[i11].includes("G")){
        Leaf27_3_Port1_obytes[i11] = Leaf27_3_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_obytes[i11][0] = Leaf27_3_Port1_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_obytes[i11].includes("M")){
        Leaf27_3_Port1_obytes[i11] = Leaf27_3_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_obytes[i11][0] = Leaf27_3_Port1_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port1_obytes[i11].includes("K")){
        Leaf27_3_Port1_obytes[i11] = Leaf27_3_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_obytes[i11][0] = Leaf27_3_Port1_obytes[i11][0]*1000;}
    else {
        Leaf27_3_Port1_obytes[i11] = Leaf27_3_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
    if(Leaf27_3_Port1_oUpkts[i11].includes("G")){
        Leaf27_3_Port1_oUpkts[i11] = Leaf27_3_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oUpkts[i11][0] = Leaf27_3_Port1_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_oUpkts[i11].includes("M")){
        Leaf27_3_Port1_oUpkts[i11] = Leaf27_3_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oUpkts[i11][0] = Leaf27_3_Port1_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_oUpkts[i11].includes("K")){
        Leaf27_3_Port1_oUpkts[i11] = Leaf27_3_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oUpkts[i11][0] = Leaf27_3_Port1_oUpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_oUpkts[i11] = Leaf27_3_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }

    if(Leaf27_3_Port1_oBpkts[i11].includes("G")){
        Leaf27_3_Port1_oBpkts[i11] = Leaf27_3_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oBpkts[i11][0] = Leaf27_3_Port1_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_oBpkts[i11].includes("M")){
        Leaf27_3_Port1_oBpkts[i11] = Leaf27_3_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oBpkts[i11][0] = Leaf27_3_Port1_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_oBpkts[i11].includes("K")){
        Leaf27_3_Port1_oBpkts[i11] = Leaf27_3_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oBpkts[i11][0] = Leaf27_3_Port1_oBpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_oBpkts[i11] = Leaf27_3_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_oMpkts[i11].includes("G")){
        Leaf27_3_Port1_oMpkts[i11] = Leaf27_3_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oMpkts[i11][0] = Leaf27_3_Port1_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_oMpkts[i11].includes("M")){
        Leaf27_3_Port1_oMpkts[i11] = Leaf27_3_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oMpkts[i11][0] = Leaf27_3_Port1_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port1_oMpkts[i11].includes("K")){
        Leaf27_3_Port1_oMpkts[i11] = Leaf27_3_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oMpkts[i11][0] = Leaf27_3_Port1_oMpkts[i11][0]*1000;}
    else {
        Leaf27_3_Port1_oMpkts[i11] = Leaf27_3_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_oCongDrops[i11].includes("G")){
        Leaf27_3_Port1_oCongDrops[i11] = Leaf27_3_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oCongDrops[i11][0] = Leaf27_3_Port1_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_oCongDrops[i11].includes("M")){
        Leaf27_3_Port1_oCongDrops[i11] = Leaf27_3_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oCongDrops[i11][0] = Leaf27_3_Port1_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port1_oCongDrops[i11].includes("K")){
        Leaf27_3_Port1_oCongDrops[i11] = Leaf27_3_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oCongDrops[i11][0] = Leaf27_3_Port1_oCongDrops[i11][0]*1000;}
    else {
        Leaf27_3_Port1_oCongDrops[i11] = Leaf27_3_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if(Leaf27_3_Port1_oerrs[i11].includes("G")){
        Leaf27_3_Port1_oerrs[i11] = Leaf27_3_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oerrs[i11][0] = Leaf27_3_Port1_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_oerrs[i11].includes("M")){
        Leaf27_3_Port1_oerrs[i11] = Leaf27_3_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oerrs[i11][0] = Leaf27_3_Port1_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port1_oerrs[i11].includes("K")){
        Leaf27_3_Port1_oerrs[i11] = Leaf27_3_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_oerrs[i11][0] = Leaf27_3_Port1_oerrs[i11][0]*1000;}
    else {
        Leaf27_3_Port1_oerrs[i11] = Leaf27_3_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }

    if(Leaf27_3_Port1_mtu_errs[i11].includes("G")){
        Leaf27_3_Port1_mtu_errs[i11] = Leaf27_3_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_mtu_errs[i11][0] = Leaf27_3_Port1_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port1_mtu_errs[i11].includes("M")){
        Leaf27_3_Port1_mtu_errs[i11] = Leaf27_3_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_mtu_errs[i11][0] = Leaf27_3_Port1_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port1_mtu_errs[i11].includes("K")){
        Leaf27_3_Port1_mtu_errs[i11] = Leaf27_3_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port1_mtu_errs[i11][0] = Leaf27_3_Port1_mtu_errs[i11][0]*1000;}
    else {
        Leaf27_3_Port1_mtu_errs[i11] = Leaf27_3_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }}

    if(Leaf27_3_Port2[i11] !== undefined){ 
        //    console.log(Leaf27_3_Port1[i11]);
        Leaf27_3_Port2_fix[i11] = Leaf27_3_Port2[i11].slice(26, 34);
        Leaf27_3_Port2_iUpkts[i11] = Leaf27_3_Port2[i11].slice(33,40);
        Leaf27_3_Port2_iBpkts[i11] = Leaf27_3_Port2[i11].slice(40,47);
        Leaf27_3_Port2_iMpkts[i11] = Leaf27_3_Port2[i11].slice(47,54);
        Leaf27_3_Port2_iCongDrops[i11] = Leaf27_3_Port2[i11].slice(54,65);
        Leaf27_3_Port2_ierrs[i11] = Leaf27_3_Port2[i11].slice(65,71);
        Leaf27_3_Port2_obytes[i11] = Leaf27_3_Port2[i11].slice(71,78);
        Leaf27_3_Port2_oUpkts[i11] = Leaf27_3_Port2[i11].slice(78,85);
        Leaf27_3_Port2_oBpkts[i11] = Leaf27_3_Port2[i11].slice(85,92);
        Leaf27_3_Port2_oMpkts[i11] = Leaf27_3_Port2[i11].slice(92,99);
        Leaf27_3_Port2_oCongDrops[i11] = Leaf27_3_Port2[i11].slice(99,110);
        Leaf27_3_Port2_oerrs[i11] = Leaf27_3_Port2[i11].slice(110,116);
        Leaf27_3_Port2_mtu_errs[i11] = Leaf27_3_Port2[i11].slice(116,125);

        if(Leaf27_3_Port2_fix[i11].includes("G")){
            Leaf27_3_Port2_fix[i11] =    Leaf27_3_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_fix[i11][0] = Leaf27_3_Port2_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_fix[i11].includes("M")){
            Leaf27_3_Port2_fix[i11] =    Leaf27_3_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_fix[i11][0] = Leaf27_3_Port2_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port2_fix[i11].includes("K")){
            Leaf27_3_Port2_fix[i11] =    Leaf27_3_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_fix[i11][0] = Leaf27_3_Port2_fix[i11][0]*1000;}
    else {  Leaf27_3_Port2_fix[i11] =    Leaf27_3_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if(Leaf27_3_Port2_iUpkts[i11].includes("G")){
            Leaf27_3_Port2_iUpkts[i11] =    Leaf27_3_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iUpkts[i11][0] = Leaf27_3_Port2_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_iUpkts[i11].includes("M")){
            Leaf27_3_Port2_iUpkts[i11] =    Leaf27_3_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iUpkts[i11][0] = Leaf27_3_Port2_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_iUpkts[i11].includes("K")){
            Leaf27_3_Port2_iUpkts[i11] =    Leaf27_3_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iUpkts[i11][0] = Leaf27_3_Port2_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_iUpkts[i11] =    Leaf27_3_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
    
            if(Leaf27_3_Port2_iBpkts[i11].includes("G")){
            Leaf27_3_Port2_iBpkts[i11] =    Leaf27_3_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iBpkts[i11][0] = Leaf27_3_Port2_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_iBpkts[i11].includes("M")){
            Leaf27_3_Port2_iBpkts[i11] =    Leaf27_3_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iBpkts[i11][0] = Leaf27_3_Port2_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_iBpkts[i11].includes("K")){
            Leaf27_3_Port2_iBpkts[i11] =    Leaf27_3_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iBpkts[i11][0] = Leaf27_3_Port2_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_iBpkts[i11] =    Leaf27_3_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Leaf27_3_Port2_iMpkts[i11].includes("G")){
            Leaf27_3_Port2_iMpkts[i11] =    Leaf27_3_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iMpkts[i11][0] = Leaf27_3_Port2_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_iMpkts[i11].includes("M")){
            Leaf27_3_Port2_iMpkts[i11] =    Leaf27_3_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iMpkts[i11][0] = Leaf27_3_Port2_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_iMpkts[i11].includes("K")){
            Leaf27_3_Port2_iMpkts[i11] =    Leaf27_3_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iMpkts[i11][0] = Leaf27_3_Port2_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_iMpkts[i11] =    Leaf27_3_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port2_iCongDrops[i11].includes("G")){
            Leaf27_3_Port2_iCongDrops[i11] =    Leaf27_3_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iCongDrops[i11][0] = Leaf27_3_Port2_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_iCongDrops[i11].includes("M")){
            Leaf27_3_Port2_iCongDrops[i11] =    Leaf27_3_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iCongDrops[i11][0] = Leaf27_3_Port2_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port2_iCongDrops[i11].includes("K")){
            Leaf27_3_Port2_iCongDrops[i11] =    Leaf27_3_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_iCongDrops[i11][0] = Leaf27_3_Port2_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port2_iCongDrops[i11] =    Leaf27_3_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port2_ierrs[i11].includes("G")){
            Leaf27_3_Port2_ierrs[i11] =    Leaf27_3_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_ierrs[i11][0] = Leaf27_3_Port2_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_ierrs[i11].includes("M")){
            Leaf27_3_Port2_ierrs[i11] =    Leaf27_3_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_ierrs[i11][0] = Leaf27_3_Port2_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port2_ierrs[i11].includes("K")){
            Leaf27_3_Port2_ierrs[i11] =    Leaf27_3_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_ierrs[i11][0] = Leaf27_3_Port2_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port2_ierrs[i11] =    Leaf27_3_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port2_obytes[i11].includes("G")){
            Leaf27_3_Port2_obytes[i11] =    Leaf27_3_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_obytes[i11][0] = Leaf27_3_Port2_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_obytes[i11].includes("M")){
            Leaf27_3_Port2_obytes[i11] =    Leaf27_3_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_obytes[i11][0] = Leaf27_3_Port2_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port2_obytes[i11].includes("K")){
            Leaf27_3_Port2_obytes[i11] =    Leaf27_3_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_obytes[i11][0] = Leaf27_3_Port2_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port2_obytes[i11] =    Leaf27_3_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port2_oUpkts[i11].includes("G")){
            Leaf27_3_Port2_oUpkts[i11] =    Leaf27_3_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oUpkts[i11][0] = Leaf27_3_Port2_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_oUpkts[i11].includes("M")){
            Leaf27_3_Port2_oUpkts[i11] =    Leaf27_3_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oUpkts[i11][0] = Leaf27_3_Port2_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_oUpkts[i11].includes("K")){
            Leaf27_3_Port2_oUpkts[i11] =    Leaf27_3_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oUpkts[i11][0] = Leaf27_3_Port2_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_oUpkts[i11] =    Leaf27_3_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port2_oBpkts[i11].includes("G")){
            Leaf27_3_Port2_oBpkts[i11] =    Leaf27_3_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oBpkts[i11][0] = Leaf27_3_Port2_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_oBpkts[i11].includes("M")){
            Leaf27_3_Port2_oBpkts[i11] =    Leaf27_3_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oBpkts[i11][0] = Leaf27_3_Port2_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_oBpkts[i11].includes("K")){
            Leaf27_3_Port2_oBpkts[i11] =    Leaf27_3_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oBpkts[i11][0] = Leaf27_3_Port2_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_oBpkts[i11] =    Leaf27_3_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port2_oMpkts[i11].includes("G")){
            Leaf27_3_Port2_oMpkts[i11] =    Leaf27_3_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oMpkts[i11][0] = Leaf27_3_Port2_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_oMpkts[i11].includes("M")){
            Leaf27_3_Port2_oMpkts[i11] =    Leaf27_3_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oMpkts[i11][0] = Leaf27_3_Port2_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port2_oMpkts[i11].includes("K")){
            Leaf27_3_Port2_oMpkts[i11] =    Leaf27_3_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oMpkts[i11][0] = Leaf27_3_Port2_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port2_oMpkts[i11] =    Leaf27_3_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port2_oCongDrops[i11].includes("G")){
            Leaf27_3_Port2_oCongDrops[i11] =    Leaf27_3_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oCongDrops[i11][0] = Leaf27_3_Port2_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_oCongDrops[i11].includes("M")){
            Leaf27_3_Port2_oCongDrops[i11] =    Leaf27_3_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oCongDrops[i11][0] = Leaf27_3_Port2_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port2_oCongDrops[i11].includes("K")){
            Leaf27_3_Port2_oCongDrops[i11] =    Leaf27_3_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oCongDrops[i11][0] = Leaf27_3_Port2_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port2_oCongDrops[i11] =    Leaf27_3_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port2_oerrs[i11].includes("G")){
            Leaf27_3_Port2_oerrs[i11] =    Leaf27_3_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oerrs[i11][0] = Leaf27_3_Port2_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_oerrs[i11].includes("M")){
            Leaf27_3_Port2_oerrs[i11] =    Leaf27_3_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oerrs[i11][0] = Leaf27_3_Port2_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port2_oerrs[i11].includes("K")){
            Leaf27_3_Port2_oerrs[i11] =    Leaf27_3_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_oerrs[i11][0] = Leaf27_3_Port2_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port2_oerrs[i11] =    Leaf27_3_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }

            if(Leaf27_3_Port2_mtu_errs[i11].includes("G")){
            Leaf27_3_Port2_mtu_errs[i11] =    Leaf27_3_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_mtu_errs[i11][0] = Leaf27_3_Port2_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port2_mtu_errs[i11].includes("M")){
            Leaf27_3_Port2_mtu_errs[i11] =    Leaf27_3_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_mtu_errs[i11][0] = Leaf27_3_Port2_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port2_mtu_errs[i11].includes("K")){
            Leaf27_3_Port2_mtu_errs[i11] =    Leaf27_3_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port2_mtu_errs[i11][0] = Leaf27_3_Port2_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port2_mtu_errs[i11] =    Leaf27_3_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }}     

    if(Leaf27_3_Port3[i11] !== undefined){ 
        //    console.log(Leaf27_3_Port1[i11]);
        Leaf27_3_Port3_fix[i11] =        Leaf27_3_Port3[i11].slice(26, 34);
        Leaf27_3_Port3_iUpkts[i11] =     Leaf27_3_Port3[i11].slice(33,40);
        Leaf27_3_Port3_iBpkts[i11] =     Leaf27_3_Port3[i11].slice(40,47);
        Leaf27_3_Port3_iMpkts[i11] =     Leaf27_3_Port3[i11].slice(47,54);
        Leaf27_3_Port3_iCongDrops[i11] = Leaf27_3_Port3[i11].slice(54,65);
        Leaf27_3_Port3_ierrs[i11] =      Leaf27_3_Port3[i11].slice(65,71);
        Leaf27_3_Port3_obytes[i11] =     Leaf27_3_Port3[i11].slice(71,78);
        Leaf27_3_Port3_oUpkts[i11] =     Leaf27_3_Port3[i11].slice(78,85);
        Leaf27_3_Port3_oBpkts[i11] =     Leaf27_3_Port3[i11].slice(85,92);
        Leaf27_3_Port3_oMpkts[i11] =     Leaf27_3_Port3[i11].slice(92,99);
        Leaf27_3_Port3_oCongDrops[i11] = Leaf27_3_Port3[i11].slice(99,110);
        Leaf27_3_Port3_oerrs[i11] =      Leaf27_3_Port3[i11].slice(110,116);
        Leaf27_3_Port3_mtu_errs[i11] =   Leaf27_3_Port3[i11].slice(116,125);

        if( Leaf27_3_Port3_fix[i11].includes("G")){
            Leaf27_3_Port3_fix[i11] =    Leaf27_3_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_fix[i11][0] = Leaf27_3_Port3_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_fix[i11].includes("M")){
            Leaf27_3_Port3_fix[i11] =    Leaf27_3_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_fix[i11][0] = Leaf27_3_Port3_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port3_fix[i11].includes("K")){
            Leaf27_3_Port3_fix[i11] =    Leaf27_3_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_fix[i11][0] = Leaf27_3_Port3_fix[i11][0]*1000;}
    else {  Leaf27_3_Port3_fix[i11] =    Leaf27_3_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

        if( Leaf27_3_Port3_iUpkts[i11].includes("G")){
            Leaf27_3_Port3_iUpkts[i11] =    Leaf27_3_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iUpkts[i11][0] = Leaf27_3_Port3_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_iUpkts[i11].includes("M")){
            Leaf27_3_Port3_iUpkts[i11] =    Leaf27_3_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iUpkts[i11][0] = Leaf27_3_Port3_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_iUpkts[i11].includes("K")){
            Leaf27_3_Port3_iUpkts[i11] =    Leaf27_3_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iUpkts[i11][0] = Leaf27_3_Port3_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_iUpkts[i11] =    Leaf27_3_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port3_iBpkts[i11].includes("G")){
            Leaf27_3_Port3_iBpkts[i11] =    Leaf27_3_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iBpkts[i11][0] = Leaf27_3_Port3_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_iBpkts[i11].includes("M")){
            Leaf27_3_Port3_iBpkts[i11] =    Leaf27_3_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iBpkts[i11][0] = Leaf27_3_Port3_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_iBpkts[i11].includes("K")){
            Leaf27_3_Port3_iBpkts[i11] =    Leaf27_3_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iBpkts[i11][0] = Leaf27_3_Port3_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_iBpkts[i11] =    Leaf27_3_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port3_iMpkts[i11].includes("G")){
            Leaf27_3_Port3_iMpkts[i11] =    Leaf27_3_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iMpkts[i11][0] = Leaf27_3_Port3_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_iMpkts[i11].includes("M")){
            Leaf27_3_Port3_iMpkts[i11] =    Leaf27_3_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iMpkts[i11][0] = Leaf27_3_Port3_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_iMpkts[i11].includes("K")){
            Leaf27_3_Port3_iMpkts[i11] =    Leaf27_3_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iMpkts[i11][0] = Leaf27_3_Port3_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_iMpkts[i11] =    Leaf27_3_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port3_iCongDrops[i11].includes("G")){
            Leaf27_3_Port3_iCongDrops[i11] =    Leaf27_3_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iCongDrops[i11][0] = Leaf27_3_Port3_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_iCongDrops[i11].includes("M")){
            Leaf27_3_Port3_iCongDrops[i11] =    Leaf27_3_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iCongDrops[i11][0] = Leaf27_3_Port3_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port3_iCongDrops[i11].includes("K")){
            Leaf27_3_Port3_iCongDrops[i11] =    Leaf27_3_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_iCongDrops[i11][0] = Leaf27_3_Port3_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port3_iCongDrops[i11] =    Leaf27_3_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port3_ierrs[i11].includes("G")){
            Leaf27_3_Port3_ierrs[i11] =    Leaf27_3_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_ierrs[i11][0] = Leaf27_3_Port3_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_ierrs[i11].includes("M")){
            Leaf27_3_Port3_ierrs[i11] =    Leaf27_3_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_ierrs[i11][0] = Leaf27_3_Port3_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port3_ierrs[i11].includes("K")){
            Leaf27_3_Port3_ierrs[i11] =    Leaf27_3_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_ierrs[i11][0] = Leaf27_3_Port3_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port3_ierrs[i11] =    Leaf27_3_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port3_obytes[i11].includes("G")){
            Leaf27_3_Port3_obytes[i11] =    Leaf27_3_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_obytes[i11][0] = Leaf27_3_Port3_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_obytes[i11].includes("M")){
            Leaf27_3_Port3_obytes[i11] =    Leaf27_3_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_obytes[i11][0] = Leaf27_3_Port3_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port3_obytes[i11].includes("K")){
            Leaf27_3_Port3_obytes[i11] =    Leaf27_3_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_obytes[i11][0] = Leaf27_3_Port3_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port3_obytes[i11] =    Leaf27_3_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port3_oUpkts[i11].includes("G")){
            Leaf27_3_Port3_oUpkts[i11] =    Leaf27_3_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oUpkts[i11][0] = Leaf27_3_Port3_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_oUpkts[i11].includes("M")){
            Leaf27_3_Port3_oUpkts[i11] =    Leaf27_3_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oUpkts[i11][0] = Leaf27_3_Port3_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_oUpkts[i11].includes("K")){
            Leaf27_3_Port3_oUpkts[i11] =    Leaf27_3_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oUpkts[i11][0] = Leaf27_3_Port3_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_oUpkts[i11] =    Leaf27_3_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port3_oBpkts[i11].includes("G")){
            Leaf27_3_Port3_oBpkts[i11] =    Leaf27_3_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oBpkts[i11][0] = Leaf27_3_Port3_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_oBpkts[i11].includes("M")){
            Leaf27_3_Port3_oBpkts[i11] =    Leaf27_3_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oBpkts[i11][0] = Leaf27_3_Port3_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_oBpkts[i11].includes("K")){
            Leaf27_3_Port3_oBpkts[i11] =    Leaf27_3_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oBpkts[i11][0] = Leaf27_3_Port3_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_oBpkts[i11] =    Leaf27_3_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port3_oMpkts[i11].includes("G")){
            Leaf27_3_Port3_oMpkts[i11] =    Leaf27_3_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oMpkts[i11][0] = Leaf27_3_Port3_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_oMpkts[i11].includes("M")){
            Leaf27_3_Port3_oMpkts[i11] =    Leaf27_3_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oMpkts[i11][0] = Leaf27_3_Port3_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port3_oMpkts[i11].includes("K")){
            Leaf27_3_Port3_oMpkts[i11] =    Leaf27_3_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oMpkts[i11][0] = Leaf27_3_Port3_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port3_oMpkts[i11] =    Leaf27_3_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port3_oCongDrops[i11].includes("G")){
            Leaf27_3_Port3_oCongDrops[i11] =    Leaf27_3_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oCongDrops[i11][0] = Leaf27_3_Port3_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_oCongDrops[i11].includes("M")){
            Leaf27_3_Port3_oCongDrops[i11] =    Leaf27_3_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oCongDrops[i11][0] = Leaf27_3_Port3_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port3_oCongDrops[i11].includes("K")){
            Leaf27_3_Port3_oCongDrops[i11] =    Leaf27_3_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oCongDrops[i11][0] = Leaf27_3_Port3_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port3_oCongDrops[i11] =    Leaf27_3_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port3_oerrs[i11].includes("G")){
            Leaf27_3_Port3_oerrs[i11] =    Leaf27_3_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oerrs[i11][0] = Leaf27_3_Port3_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_oerrs[i11].includes("M")){
            Leaf27_3_Port3_oerrs[i11] =    Leaf27_3_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oerrs[i11][0] = Leaf27_3_Port3_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port3_oerrs[i11].includes("K")){
            Leaf27_3_Port3_oerrs[i11] =    Leaf27_3_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_oerrs[i11][0] = Leaf27_3_Port3_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port3_oerrs[i11] =    Leaf27_3_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }

            if(Leaf27_3_Port3_mtu_errs[i11].includes("G")){
            Leaf27_3_Port3_mtu_errs[i11] =    Leaf27_3_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_mtu_errs[i11][0] = Leaf27_3_Port3_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port3_mtu_errs[i11].includes("M")){
            Leaf27_3_Port3_mtu_errs[i11] =    Leaf27_3_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_mtu_errs[i11][0] = Leaf27_3_Port3_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port3_mtu_errs[i11].includes("K")){
            Leaf27_3_Port3_mtu_errs[i11] =    Leaf27_3_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port3_mtu_errs[i11][0] = Leaf27_3_Port3_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port3_mtu_errs[i11] =    Leaf27_3_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}

    if(Leaf27_3_Port4[i11] !== undefined){ 
        //    console.log(Leaf27_3_Port1[i11]);
        Leaf27_3_Port4_fix[i11] =        Leaf27_3_Port4[i11].slice(26, 34);
        Leaf27_3_Port4_iUpkts[i11] =     Leaf27_3_Port4[i11].slice(33,40);
        Leaf27_3_Port4_iBpkts[i11] =     Leaf27_3_Port4[i11].slice(40,47);
        Leaf27_3_Port4_iMpkts[i11] =     Leaf27_3_Port4[i11].slice(47,54);
        Leaf27_3_Port4_iCongDrops[i11] = Leaf27_3_Port4[i11].slice(54,65);
        Leaf27_3_Port4_ierrs[i11] =      Leaf27_3_Port4[i11].slice(65,71);
        Leaf27_3_Port4_obytes[i11] =     Leaf27_3_Port4[i11].slice(71,78);
        Leaf27_3_Port4_oUpkts[i11] =     Leaf27_3_Port4[i11].slice(78,85);
        Leaf27_3_Port4_oBpkts[i11] =     Leaf27_3_Port4[i11].slice(85,92);
        Leaf27_3_Port4_oMpkts[i11] =     Leaf27_3_Port4[i11].slice(92,99);
        Leaf27_3_Port4_oCongDrops[i11] = Leaf27_3_Port4[i11].slice(99,110);
        Leaf27_3_Port4_oerrs[i11] =      Leaf27_3_Port4[i11].slice(110,116);
        Leaf27_3_Port4_mtu_errs[i11] =   Leaf27_3_Port4[i11].slice(116,125);

        if( Leaf27_3_Port4_fix[i11].includes("G")){
            Leaf27_3_Port4_fix[i11] =    Leaf27_3_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_fix[i11][0] = Leaf27_3_Port4_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_fix[i11].includes("M")){
            Leaf27_3_Port4_fix[i11] =    Leaf27_3_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_fix[i11][0] = Leaf27_3_Port4_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port4_fix[i11].includes("K")){
            Leaf27_3_Port4_fix[i11] =    Leaf27_3_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_fix[i11][0] = Leaf27_3_Port4_fix[i11][0]*1000;}
    else {  Leaf27_3_Port4_fix[i11] =    Leaf27_3_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port4_iUpkts[i11].includes("G")){
            Leaf27_3_Port4_iUpkts[i11] =    Leaf27_3_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iUpkts[i11][0] = Leaf27_3_Port4_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_iUpkts[i11].includes("M")){
            Leaf27_3_Port4_iUpkts[i11] =    Leaf27_3_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iUpkts[i11][0] = Leaf27_3_Port4_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_iUpkts[i11].includes("K")){
            Leaf27_3_Port4_iUpkts[i11] =    Leaf27_3_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iUpkts[i11][0] = Leaf27_3_Port4_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_iUpkts[i11] =    Leaf27_3_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port4_iBpkts[i11].includes("G")){
            Leaf27_3_Port4_iBpkts[i11] =    Leaf27_3_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iBpkts[i11][0] = Leaf27_3_Port4_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_iBpkts[i11].includes("M")){
            Leaf27_3_Port4_iBpkts[i11] =    Leaf27_3_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iBpkts[i11][0] = Leaf27_3_Port4_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_iBpkts[i11].includes("K")){
            Leaf27_3_Port4_iBpkts[i11] =    Leaf27_3_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iBpkts[i11][0] = Leaf27_3_Port4_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_iBpkts[i11] =    Leaf27_3_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port4_iMpkts[i11].includes("G")){
            Leaf27_3_Port4_iMpkts[i11] =    Leaf27_3_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iMpkts[i11][0] = Leaf27_3_Port4_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_iMpkts[i11].includes("M")){
            Leaf27_3_Port4_iMpkts[i11] =    Leaf27_3_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iMpkts[i11][0] = Leaf27_3_Port4_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_iMpkts[i11].includes("K")){
            Leaf27_3_Port4_iMpkts[i11] =    Leaf27_3_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iMpkts[i11][0] = Leaf27_3_Port4_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_iMpkts[i11] =    Leaf27_3_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

            if(Leaf27_3_Port4_iCongDrops[i11].includes("G")){
            Leaf27_3_Port4_iCongDrops[i11] =    Leaf27_3_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iCongDrops[i11][0] = Leaf27_3_Port4_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_iCongDrops[i11].includes("M")){
            Leaf27_3_Port4_iCongDrops[i11] =    Leaf27_3_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iCongDrops[i11][0] = Leaf27_3_Port4_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port4_iCongDrops[i11].includes("K")){
            Leaf27_3_Port4_iCongDrops[i11] =    Leaf27_3_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_iCongDrops[i11][0] = Leaf27_3_Port4_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port4_iCongDrops[i11] =    Leaf27_3_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port4_ierrs[i11].includes("G")){
            Leaf27_3_Port4_ierrs[i11] =    Leaf27_3_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_ierrs[i11][0] = Leaf27_3_Port4_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_ierrs[i11].includes("M")){
            Leaf27_3_Port4_ierrs[i11] =    Leaf27_3_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_ierrs[i11][0] = Leaf27_3_Port4_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port4_ierrs[i11].includes("K")){
            Leaf27_3_Port4_ierrs[i11] =    Leaf27_3_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_ierrs[i11][0] = Leaf27_3_Port4_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port4_ierrs[i11] =    Leaf27_3_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }

            if(Leaf27_3_Port4_obytes[i11].includes("G")){
            Leaf27_3_Port4_obytes[i11] =    Leaf27_3_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_obytes[i11][0] = Leaf27_3_Port4_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_obytes[i11].includes("M")){
            Leaf27_3_Port4_obytes[i11] =    Leaf27_3_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_obytes[i11][0] = Leaf27_3_Port4_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port4_obytes[i11].includes("K")){
            Leaf27_3_Port4_obytes[i11] =    Leaf27_3_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_obytes[i11][0] = Leaf27_3_Port4_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port4_obytes[i11] =    Leaf27_3_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Leaf27_3_Port4_oUpkts[i11].includes("G")){
            Leaf27_3_Port4_oUpkts[i11] =    Leaf27_3_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oUpkts[i11][0] = Leaf27_3_Port4_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_oUpkts[i11].includes("M")){
            Leaf27_3_Port4_oUpkts[i11] =    Leaf27_3_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oUpkts[i11][0] = Leaf27_3_Port4_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_oUpkts[i11].includes("K")){
            Leaf27_3_Port4_oUpkts[i11] =    Leaf27_3_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oUpkts[i11][0] = Leaf27_3_Port4_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_oUpkts[i11] =    Leaf27_3_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port4_oBpkts[i11].includes("G")){
            Leaf27_3_Port4_oBpkts[i11] =    Leaf27_3_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oBpkts[i11][0] = Leaf27_3_Port4_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_oBpkts[i11].includes("M")){
            Leaf27_3_Port4_oBpkts[i11] =    Leaf27_3_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oBpkts[i11][0] = Leaf27_3_Port4_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_oBpkts[i11].includes("K")){
            Leaf27_3_Port4_oBpkts[i11] =    Leaf27_3_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oBpkts[i11][0] = Leaf27_3_Port4_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_oBpkts[i11] =    Leaf27_3_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port4_oMpkts[i11].includes("G")){
            Leaf27_3_Port4_oMpkts[i11] =    Leaf27_3_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oMpkts[i11][0] = Leaf27_3_Port4_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_oMpkts[i11].includes("M")){
            Leaf27_3_Port4_oMpkts[i11] =    Leaf27_3_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oMpkts[i11][0] = Leaf27_3_Port4_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port4_oMpkts[i11].includes("K")){
            Leaf27_3_Port4_oMpkts[i11] =    Leaf27_3_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oMpkts[i11][0] = Leaf27_3_Port4_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port4_oMpkts[i11] =    Leaf27_3_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port4_oCongDrops[i11].includes("G")){
            Leaf27_3_Port4_oCongDrops[i11] =    Leaf27_3_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oCongDrops[i11][0] = Leaf27_3_Port4_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_oCongDrops[i11].includes("M")){
            Leaf27_3_Port4_oCongDrops[i11] =    Leaf27_3_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oCongDrops[i11][0] = Leaf27_3_Port4_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port4_oCongDrops[i11].includes("K")){
            Leaf27_3_Port4_oCongDrops[i11] =    Leaf27_3_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oCongDrops[i11][0] = Leaf27_3_Port4_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port4_oCongDrops[i11] =    Leaf27_3_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port4_oerrs[i11].includes("G")){
            Leaf27_3_Port4_oerrs[i11] =    Leaf27_3_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oerrs[i11][0] = Leaf27_3_Port4_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_oerrs[i11].includes("M")){
            Leaf27_3_Port4_oerrs[i11] =    Leaf27_3_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oerrs[i11][0] = Leaf27_3_Port4_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port4_oerrs[i11].includes("K")){
            Leaf27_3_Port4_oerrs[i11] =    Leaf27_3_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_oerrs[i11][0] = Leaf27_3_Port4_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port4_oerrs[i11] =    Leaf27_3_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port4_mtu_errs[i11].includes("G")){
            Leaf27_3_Port4_mtu_errs[i11] =    Leaf27_3_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_mtu_errs[i11][0] = Leaf27_3_Port4_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port4_mtu_errs[i11].includes("M")){
            Leaf27_3_Port4_mtu_errs[i11] =    Leaf27_3_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_mtu_errs[i11][0] = Leaf27_3_Port4_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port4_mtu_errs[i11].includes("K")){
            Leaf27_3_Port4_mtu_errs[i11] =    Leaf27_3_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port4_mtu_errs[i11][0] = Leaf27_3_Port4_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port4_mtu_errs[i11] =    Leaf27_3_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }}

    if(Leaf27_3_Port8[i11] !== undefined){ 
        Leaf27_3_Port8_fix[i11] =        Leaf27_3_Port8[i11].slice(26, 34);
        Leaf27_3_Port8_iUpkts[i11] =     Leaf27_3_Port8[i11].slice(33,40);
        Leaf27_3_Port8_iBpkts[i11] =     Leaf27_3_Port8[i11].slice(40,47);
        Leaf27_3_Port8_iMpkts[i11] =     Leaf27_3_Port8[i11].slice(47,54);
        Leaf27_3_Port8_iCongDrops[i11] = Leaf27_3_Port8[i11].slice(54,65);
        Leaf27_3_Port8_ierrs[i11] =      Leaf27_3_Port8[i11].slice(65,71);
        Leaf27_3_Port8_obytes[i11] =     Leaf27_3_Port8[i11].slice(71,78);
        Leaf27_3_Port8_oUpkts[i11] =     Leaf27_3_Port8[i11].slice(78,85);
        Leaf27_3_Port8_oBpkts[i11] =     Leaf27_3_Port8[i11].slice(85,92);
        Leaf27_3_Port8_oMpkts[i11] =     Leaf27_3_Port8[i11].slice(92,99);
        Leaf27_3_Port8_oCongDrops[i11] = Leaf27_3_Port8[i11].slice(99,110);
        Leaf27_3_Port8_oerrs[i11] =      Leaf27_3_Port8[i11].slice(110,116);
        Leaf27_3_Port8_mtu_errs[i11] =   Leaf27_3_Port8[i11].slice(116,125);

        if( Leaf27_3_Port8_fix[i11].includes("G")){
            Leaf27_3_Port8_fix[i11] =    Leaf27_3_Port8_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_fix[i11][0] = Leaf27_3_Port8_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_fix[i11].includes("M")){
            Leaf27_3_Port8_fix[i11] =    Leaf27_3_Port8_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_fix[i11][0] = Leaf27_3_Port8_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port8_fix[i11].includes("K")){
            Leaf27_3_Port8_fix[i11] =    Leaf27_3_Port8_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_fix[i11][0] = Leaf27_3_Port8_fix[i11][0]*1000;}
    else {  Leaf27_3_Port8_fix[i11] =    Leaf27_3_Port8_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

        if( Leaf27_3_Port8_iUpkts[i11].includes("G")){
            Leaf27_3_Port8_iUpkts[i11] =    Leaf27_3_Port8_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iUpkts[i11][0] = Leaf27_3_Port8_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_iUpkts[i11].includes("M")){
            Leaf27_3_Port8_iUpkts[i11] =    Leaf27_3_Port8_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iUpkts[i11][0] = Leaf27_3_Port8_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_iUpkts[i11].includes("K")){
            Leaf27_3_Port8_iUpkts[i11] =    Leaf27_3_Port8_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iUpkts[i11][0] = Leaf27_3_Port8_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_iUpkts[i11] =    Leaf27_3_Port8_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port8_iBpkts[i11].includes("G")){
            Leaf27_3_Port8_iBpkts[i11] =    Leaf27_3_Port8_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iBpkts[i11][0] = Leaf27_3_Port8_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_iBpkts[i11].includes("M")){
            Leaf27_3_Port8_iBpkts[i11] =    Leaf27_3_Port8_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iBpkts[i11][0] = Leaf27_3_Port8_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_iBpkts[i11].includes("K")){
            Leaf27_3_Port8_iBpkts[i11] =    Leaf27_3_Port8_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iBpkts[i11][0] = Leaf27_3_Port8_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_iBpkts[i11] =    Leaf27_3_Port8_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Leaf27_3_Port8_iMpkts[i11].includes("G")){
            Leaf27_3_Port8_iMpkts[i11] =    Leaf27_3_Port8_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iMpkts[i11][0] = Leaf27_3_Port8_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_iMpkts[i11].includes("M")){
            Leaf27_3_Port8_iMpkts[i11] =    Leaf27_3_Port8_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iMpkts[i11][0] = Leaf27_3_Port8_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_iMpkts[i11].includes("K")){
            Leaf27_3_Port8_iMpkts[i11] =    Leaf27_3_Port8_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iMpkts[i11][0] = Leaf27_3_Port8_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_iMpkts[i11] =    Leaf27_3_Port8_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port8_iCongDrops[i11].includes("G")){
            Leaf27_3_Port8_iCongDrops[i11] =    Leaf27_3_Port8_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iCongDrops[i11][0] = Leaf27_3_Port8_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_iCongDrops[i11].includes("M")){
            Leaf27_3_Port8_iCongDrops[i11] =    Leaf27_3_Port8_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iCongDrops[i11][0] = Leaf27_3_Port8_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port8_iCongDrops[i11].includes("K")){
            Leaf27_3_Port8_iCongDrops[i11] =    Leaf27_3_Port8_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_iCongDrops[i11][0] = Leaf27_3_Port8_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port8_iCongDrops[i11] =    Leaf27_3_Port8_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port8_ierrs[i11].includes("G")){
            Leaf27_3_Port8_ierrs[i11] =    Leaf27_3_Port8_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_ierrs[i11][0] = Leaf27_3_Port8_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_ierrs[i11].includes("M")){
            Leaf27_3_Port8_ierrs[i11] =    Leaf27_3_Port8_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_ierrs[i11][0] = Leaf27_3_Port8_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port8_ierrs[i11].includes("K")){
            Leaf27_3_Port8_ierrs[i11] =    Leaf27_3_Port8_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_ierrs[i11][0] = Leaf27_3_Port8_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port8_ierrs[i11] =    Leaf27_3_Port8_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port8_obytes[i11].includes("G")){
            Leaf27_3_Port8_obytes[i11] =    Leaf27_3_Port8_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_obytes[i11][0] = Leaf27_3_Port8_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_obytes[i11].includes("M")){
            Leaf27_3_Port8_obytes[i11] =    Leaf27_3_Port8_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_obytes[i11][0] = Leaf27_3_Port8_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port8_obytes[i11].includes("K")){
            Leaf27_3_Port8_obytes[i11] =    Leaf27_3_Port8_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_obytes[i11][0] = Leaf27_3_Port8_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port8_obytes[i11] =    Leaf27_3_Port8_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
        
            if(Leaf27_3_Port8_oUpkts[i11].includes("G")){
            Leaf27_3_Port8_oUpkts[i11] =    Leaf27_3_Port8_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oUpkts[i11][0] = Leaf27_3_Port8_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_oUpkts[i11].includes("M")){
            Leaf27_3_Port8_oUpkts[i11] =    Leaf27_3_Port8_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oUpkts[i11][0] = Leaf27_3_Port8_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_oUpkts[i11].includes("K")){
            Leaf27_3_Port8_oUpkts[i11] =    Leaf27_3_Port8_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oUpkts[i11][0] = Leaf27_3_Port8_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_oUpkts[i11] =    Leaf27_3_Port8_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port8_oBpkts[i11].includes("G")){
            Leaf27_3_Port8_oBpkts[i11] =    Leaf27_3_Port8_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oBpkts[i11][0] = Leaf27_3_Port8_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_oBpkts[i11].includes("M")){
            Leaf27_3_Port8_oBpkts[i11] =    Leaf27_3_Port8_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oBpkts[i11][0] = Leaf27_3_Port8_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_oBpkts[i11].includes("K")){
            Leaf27_3_Port8_oBpkts[i11] =    Leaf27_3_Port8_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oBpkts[i11][0] = Leaf27_3_Port8_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_oBpkts[i11] =    Leaf27_3_Port8_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port8_oMpkts[i11].includes("G")){
            Leaf27_3_Port8_oMpkts[i11] =    Leaf27_3_Port8_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oMpkts[i11][0] = Leaf27_3_Port8_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_oMpkts[i11].includes("M")){
            Leaf27_3_Port8_oMpkts[i11] =    Leaf27_3_Port8_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oMpkts[i11][0] = Leaf27_3_Port8_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port8_oMpkts[i11].includes("K")){
            Leaf27_3_Port8_oMpkts[i11] =    Leaf27_3_Port8_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oMpkts[i11][0] = Leaf27_3_Port8_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port8_oMpkts[i11] =    Leaf27_3_Port8_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port8_oCongDrops[i11].includes("G")){
            Leaf27_3_Port8_oCongDrops[i11] =    Leaf27_3_Port8_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oCongDrops[i11][0] = Leaf27_3_Port8_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_oCongDrops[i11].includes("M")){
            Leaf27_3_Port8_oCongDrops[i11] =    Leaf27_3_Port8_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oCongDrops[i11][0] = Leaf27_3_Port8_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port8_oCongDrops[i11].includes("K")){
            Leaf27_3_Port8_oCongDrops[i11] =    Leaf27_3_Port8_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oCongDrops[i11][0] = Leaf27_3_Port8_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port8_oCongDrops[i11] =    Leaf27_3_Port8_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port8_oerrs[i11].includes("G")){
            Leaf27_3_Port8_oerrs[i11] =    Leaf27_3_Port8_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oerrs[i11][0] = Leaf27_3_Port8_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_oerrs[i11].includes("M")){
            Leaf27_3_Port8_oerrs[i11] =    Leaf27_3_Port8_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oerrs[i11][0] = Leaf27_3_Port8_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port8_oerrs[i11].includes("K")){
            Leaf27_3_Port8_oerrs[i11] =    Leaf27_3_Port8_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_oerrs[i11][0] = Leaf27_3_Port8_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port8_oerrs[i11] =    Leaf27_3_Port8_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }

            if(Leaf27_3_Port8_mtu_errs[i11].includes("G")){
            Leaf27_3_Port8_mtu_errs[i11] =    Leaf27_3_Port8_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_mtu_errs[i11][0] = Leaf27_3_Port8_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port8_mtu_errs[i11].includes("M")){
            Leaf27_3_Port8_mtu_errs[i11] =    Leaf27_3_Port8_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_mtu_errs[i11][0] = Leaf27_3_Port8_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port8_mtu_errs[i11].includes("K")){
            Leaf27_3_Port8_mtu_errs[i11] =    Leaf27_3_Port8_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port8_mtu_errs[i11][0] = Leaf27_3_Port8_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port8_mtu_errs[i11] =    Leaf27_3_Port8_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }}


    if(Leaf27_3_Port10[i11] !== undefined){ 
        Leaf27_3_Port10_fix[i11] =        Leaf27_3_Port10[i11].slice(26, 34);
        Leaf27_3_Port10_iUpkts[i11] =     Leaf27_3_Port10[i11].slice(33,40);
        Leaf27_3_Port10_iBpkts[i11] =     Leaf27_3_Port10[i11].slice(40,47);
        Leaf27_3_Port10_iMpkts[i11] =     Leaf27_3_Port10[i11].slice(47,54);
        Leaf27_3_Port10_iCongDrops[i11] = Leaf27_3_Port10[i11].slice(54,65);
        Leaf27_3_Port10_ierrs[i11] =      Leaf27_3_Port10[i11].slice(65,71);
        Leaf27_3_Port10_obytes[i11] =     Leaf27_3_Port10[i11].slice(71,78);
        Leaf27_3_Port10_oUpkts[i11] =     Leaf27_3_Port10[i11].slice(78,85);
        Leaf27_3_Port10_oBpkts[i11] =     Leaf27_3_Port10[i11].slice(85,92);
        Leaf27_3_Port10_oMpkts[i11] =     Leaf27_3_Port10[i11].slice(92,99);
        Leaf27_3_Port10_oCongDrops[i11] = Leaf27_3_Port10[i11].slice(99,110);
        Leaf27_3_Port10_oerrs[i11] =      Leaf27_3_Port10[i11].slice(110,116);
        Leaf27_3_Port10_mtu_errs[i11] =   Leaf27_3_Port10[i11].slice(116,125);

        if( Leaf27_3_Port10_fix[i11].includes("G")){
            Leaf27_3_Port10_fix[i11] =    Leaf27_3_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_fix[i11][0] = Leaf27_3_Port10_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_fix[i11].includes("M")){
            Leaf27_3_Port10_fix[i11] =    Leaf27_3_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_fix[i11][0] = Leaf27_3_Port10_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port10_fix[i11].includes("K")){
            Leaf27_3_Port10_fix[i11] =    Leaf27_3_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_fix[i11][0] = Leaf27_3_Port10_fix[i11][0]*1000;}
    else {  Leaf27_3_Port10_fix[i11] =    Leaf27_3_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

        if( Leaf27_3_Port10_iUpkts[i11].includes("G")){
            Leaf27_3_Port10_iUpkts[i11] =    Leaf27_3_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iUpkts[i11][0] = Leaf27_3_Port10_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_iUpkts[i11].includes("M")){
            Leaf27_3_Port10_iUpkts[i11] =    Leaf27_3_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iUpkts[i11][0] = Leaf27_3_Port10_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_iUpkts[i11].includes("K")){
            Leaf27_3_Port10_iUpkts[i11] =    Leaf27_3_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iUpkts[i11][0] = Leaf27_3_Port10_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_iUpkts[i11] =    Leaf27_3_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
    
            if(Leaf27_3_Port10_iBpkts[i11].includes("G")){
            Leaf27_3_Port10_iBpkts[i11] =    Leaf27_3_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iBpkts[i11][0] = Leaf27_3_Port10_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_iBpkts[i11].includes("M")){
            Leaf27_3_Port10_iBpkts[i11] =    Leaf27_3_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iBpkts[i11][0] = Leaf27_3_Port10_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_iBpkts[i11].includes("K")){
            Leaf27_3_Port10_iBpkts[i11] =    Leaf27_3_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iBpkts[i11][0] = Leaf27_3_Port10_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_iBpkts[i11] =    Leaf27_3_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port10_iMpkts[i11].includes("G")){
            Leaf27_3_Port10_iMpkts[i11] =    Leaf27_3_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iMpkts[i11][0] = Leaf27_3_Port10_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_iMpkts[i11].includes("M")){
            Leaf27_3_Port10_iMpkts[i11] =    Leaf27_3_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iMpkts[i11][0] = Leaf27_3_Port10_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_iMpkts[i11].includes("K")){
            Leaf27_3_Port10_iMpkts[i11] =    Leaf27_3_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iMpkts[i11][0] = Leaf27_3_Port10_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_iMpkts[i11] =    Leaf27_3_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port10_iCongDrops[i11].includes("G")){
            Leaf27_3_Port10_iCongDrops[i11] =    Leaf27_3_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iCongDrops[i11][0] = Leaf27_3_Port10_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_iCongDrops[i11].includes("M")){
            Leaf27_3_Port10_iCongDrops[i11] =    Leaf27_3_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iCongDrops[i11][0] = Leaf27_3_Port10_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port10_iCongDrops[i11].includes("K")){
            Leaf27_3_Port10_iCongDrops[i11] =    Leaf27_3_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_iCongDrops[i11][0] = Leaf27_3_Port10_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port10_iCongDrops[i11] =    Leaf27_3_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port10_ierrs[i11].includes("G")){
            Leaf27_3_Port10_ierrs[i11] =    Leaf27_3_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_ierrs[i11][0] = Leaf27_3_Port10_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_ierrs[i11].includes("M")){
            Leaf27_3_Port10_ierrs[i11] =    Leaf27_3_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_ierrs[i11][0] = Leaf27_3_Port10_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port10_ierrs[i11].includes("K")){
            Leaf27_3_Port10_ierrs[i11] =    Leaf27_3_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_ierrs[i11][0] = Leaf27_3_Port10_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port10_ierrs[i11] =    Leaf27_3_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port10_obytes[i11].includes("G")){
            Leaf27_3_Port10_obytes[i11] =    Leaf27_3_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_obytes[i11][0] = Leaf27_3_Port10_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_obytes[i11].includes("M")){
            Leaf27_3_Port10_obytes[i11] =    Leaf27_3_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_obytes[i11][0] = Leaf27_3_Port10_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port10_obytes[i11].includes("K")){
            Leaf27_3_Port10_obytes[i11] =    Leaf27_3_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_obytes[i11][0] = Leaf27_3_Port10_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port10_obytes[i11] =    Leaf27_3_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port10_oUpkts[i11].includes("G")){
            Leaf27_3_Port10_oUpkts[i11] =    Leaf27_3_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oUpkts[i11][0] = Leaf27_3_Port10_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_oUpkts[i11].includes("M")){
            Leaf27_3_Port10_oUpkts[i11] =    Leaf27_3_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oUpkts[i11][0] = Leaf27_3_Port10_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_oUpkts[i11].includes("K")){
            Leaf27_3_Port10_oUpkts[i11] =    Leaf27_3_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oUpkts[i11][0] = Leaf27_3_Port10_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_oUpkts[i11] =    Leaf27_3_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port10_oBpkts[i11].includes("G")){
            Leaf27_3_Port10_oBpkts[i11] =    Leaf27_3_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oBpkts[i11][0] = Leaf27_3_Port10_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_oBpkts[i11].includes("M")){
            Leaf27_3_Port10_oBpkts[i11] =    Leaf27_3_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oBpkts[i11][0] = Leaf27_3_Port10_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_oBpkts[i11].includes("K")){
            Leaf27_3_Port10_oBpkts[i11] =    Leaf27_3_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oBpkts[i11][0] = Leaf27_3_Port10_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_oBpkts[i11] =    Leaf27_3_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port10_oMpkts[i11].includes("G")){
            Leaf27_3_Port10_oMpkts[i11] =    Leaf27_3_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oMpkts[i11][0] = Leaf27_3_Port10_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_oMpkts[i11].includes("M")){
            Leaf27_3_Port10_oMpkts[i11] =    Leaf27_3_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oMpkts[i11][0] = Leaf27_3_Port10_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port10_oMpkts[i11].includes("K")){
            Leaf27_3_Port10_oMpkts[i11] =    Leaf27_3_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oMpkts[i11][0] = Leaf27_3_Port10_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port10_oMpkts[i11] =    Leaf27_3_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port10_oCongDrops[i11].includes("G")){
            Leaf27_3_Port10_oCongDrops[i11] =    Leaf27_3_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oCongDrops[i11][0] = Leaf27_3_Port10_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_oCongDrops[i11].includes("M")){
            Leaf27_3_Port10_oCongDrops[i11] =    Leaf27_3_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oCongDrops[i11][0] = Leaf27_3_Port10_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port10_oCongDrops[i11].includes("K")){
            Leaf27_3_Port10_oCongDrops[i11] =    Leaf27_3_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oCongDrops[i11][0] = Leaf27_3_Port10_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port10_oCongDrops[i11] =    Leaf27_3_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port10_oerrs[i11].includes("G")){
            Leaf27_3_Port10_oerrs[i11] =    Leaf27_3_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oerrs[i11][0] = Leaf27_3_Port10_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_oerrs[i11].includes("M")){
            Leaf27_3_Port10_oerrs[i11] =    Leaf27_3_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oerrs[i11][0] = Leaf27_3_Port10_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port10_oerrs[i11].includes("K")){
            Leaf27_3_Port10_oerrs[i11] =    Leaf27_3_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_oerrs[i11][0] = Leaf27_3_Port10_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port10_oerrs[i11] =    Leaf27_3_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port10_mtu_errs[i11].includes("G")){
            Leaf27_3_Port10_mtu_errs[i11] =    Leaf27_3_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_mtu_errs[i11][0] = Leaf27_3_Port10_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port10_mtu_errs[i11].includes("M")){
            Leaf27_3_Port10_mtu_errs[i11] =    Leaf27_3_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_mtu_errs[i11][0] = Leaf27_3_Port10_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port10_mtu_errs[i11].includes("K")){
            Leaf27_3_Port10_mtu_errs[i11] =    Leaf27_3_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port10_mtu_errs[i11][0] = Leaf27_3_Port10_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port10_mtu_errs[i11] =    Leaf27_3_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }}

    if(Leaf27_3_Port13[i11] !== undefined){ 
        Leaf27_3_Port13_fix[i11] =        Leaf27_3_Port13[i11].slice(26, 34);
        Leaf27_3_Port13_iUpkts[i11] =     Leaf27_3_Port13[i11].slice(33,40);
        Leaf27_3_Port13_iBpkts[i11] =     Leaf27_3_Port13[i11].slice(40,47);
        Leaf27_3_Port13_iMpkts[i11] =     Leaf27_3_Port13[i11].slice(47,54);
        Leaf27_3_Port13_iCongDrops[i11] = Leaf27_3_Port13[i11].slice(54,65);
        Leaf27_3_Port13_ierrs[i11] =      Leaf27_3_Port13[i11].slice(65,71);
        Leaf27_3_Port13_obytes[i11] =     Leaf27_3_Port13[i11].slice(71,78);
        Leaf27_3_Port13_oUpkts[i11] =     Leaf27_3_Port13[i11].slice(78,85);
        Leaf27_3_Port13_oBpkts[i11] =     Leaf27_3_Port13[i11].slice(85,92);
        Leaf27_3_Port13_oMpkts[i11] =     Leaf27_3_Port13[i11].slice(92,99);
        Leaf27_3_Port13_oCongDrops[i11] = Leaf27_3_Port13[i11].slice(99,110);
        Leaf27_3_Port13_oerrs[i11] =      Leaf27_3_Port13[i11].slice(110,116);
        Leaf27_3_Port13_mtu_errs[i11] =   Leaf27_3_Port13[i11].slice(116,125);

        if( Leaf27_3_Port13_fix[i11].includes("G")){
            Leaf27_3_Port13_fix[i11] =    Leaf27_3_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_fix[i11][0] = Leaf27_3_Port13_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_fix[i11].includes("M")){
            Leaf27_3_Port13_fix[i11] =    Leaf27_3_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_fix[i11][0] = Leaf27_3_Port13_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port13_fix[i11].includes("K")){
            Leaf27_3_Port13_fix[i11] =    Leaf27_3_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_fix[i11][0] = Leaf27_3_Port13_fix[i11][0]*1000;}
    else {  Leaf27_3_Port13_fix[i11] =    Leaf27_3_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port13_iUpkts[i11].includes("G")){
            Leaf27_3_Port13_iUpkts[i11] =    Leaf27_3_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iUpkts[i11][0] = Leaf27_3_Port13_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_iUpkts[i11].includes("M")){
            Leaf27_3_Port13_iUpkts[i11] =    Leaf27_3_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iUpkts[i11][0] = Leaf27_3_Port13_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_iUpkts[i11].includes("K")){
            Leaf27_3_Port13_iUpkts[i11] =    Leaf27_3_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iUpkts[i11][0] = Leaf27_3_Port13_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_iUpkts[i11] =    Leaf27_3_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port13_iBpkts[i11].includes("G")){
            Leaf27_3_Port13_iBpkts[i11] =    Leaf27_3_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iBpkts[i11][0] = Leaf27_3_Port13_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_iBpkts[i11].includes("M")){
            Leaf27_3_Port13_iBpkts[i11] =    Leaf27_3_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iBpkts[i11][0] = Leaf27_3_Port13_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_iBpkts[i11].includes("K")){
            Leaf27_3_Port13_iBpkts[i11] =    Leaf27_3_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iBpkts[i11][0] = Leaf27_3_Port13_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_iBpkts[i11] =    Leaf27_3_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port13_iMpkts[i11].includes("G")){
            Leaf27_3_Port13_iMpkts[i11] =    Leaf27_3_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iMpkts[i11][0] = Leaf27_3_Port13_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_iMpkts[i11].includes("M")){
            Leaf27_3_Port13_iMpkts[i11] =    Leaf27_3_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iMpkts[i11][0] = Leaf27_3_Port13_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_iMpkts[i11].includes("K")){
            Leaf27_3_Port13_iMpkts[i11] =    Leaf27_3_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iMpkts[i11][0] = Leaf27_3_Port13_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_iMpkts[i11] =    Leaf27_3_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port13_iCongDrops[i11].includes("G")){
            Leaf27_3_Port13_iCongDrops[i11] =    Leaf27_3_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iCongDrops[i11][0] = Leaf27_3_Port13_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_iCongDrops[i11].includes("M")){
            Leaf27_3_Port13_iCongDrops[i11] =    Leaf27_3_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iCongDrops[i11][0] = Leaf27_3_Port13_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port13_iCongDrops[i11].includes("K")){
            Leaf27_3_Port13_iCongDrops[i11] =    Leaf27_3_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_iCongDrops[i11][0] = Leaf27_3_Port13_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port13_iCongDrops[i11] =    Leaf27_3_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port13_ierrs[i11].includes("G")){
            Leaf27_3_Port13_ierrs[i11] =    Leaf27_3_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_ierrs[i11][0] = Leaf27_3_Port13_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_ierrs[i11].includes("M")){
            Leaf27_3_Port13_ierrs[i11] =    Leaf27_3_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_ierrs[i11][0] = Leaf27_3_Port13_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port13_ierrs[i11].includes("K")){
            Leaf27_3_Port13_ierrs[i11] =    Leaf27_3_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_ierrs[i11][0] = Leaf27_3_Port13_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port13_ierrs[i11] =    Leaf27_3_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port13_obytes[i11].includes("G")){
            Leaf27_3_Port13_obytes[i11] =    Leaf27_3_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_obytes[i11][0] = Leaf27_3_Port13_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_obytes[i11].includes("M")){
            Leaf27_3_Port13_obytes[i11] =    Leaf27_3_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_obytes[i11][0] = Leaf27_3_Port13_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port13_obytes[i11].includes("K")){
            Leaf27_3_Port13_obytes[i11] =    Leaf27_3_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_obytes[i11][0] = Leaf27_3_Port13_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port13_obytes[i11] =    Leaf27_3_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port13_oUpkts[i11].includes("G")){
            Leaf27_3_Port13_oUpkts[i11] =    Leaf27_3_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oUpkts[i11][0] = Leaf27_3_Port13_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_oUpkts[i11].includes("M")){
            Leaf27_3_Port13_oUpkts[i11] =    Leaf27_3_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oUpkts[i11][0] = Leaf27_3_Port13_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_oUpkts[i11].includes("K")){
            Leaf27_3_Port13_oUpkts[i11] =    Leaf27_3_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oUpkts[i11][0] = Leaf27_3_Port13_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_oUpkts[i11] =    Leaf27_3_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port13_oBpkts[i11].includes("G")){
            Leaf27_3_Port13_oBpkts[i11] =    Leaf27_3_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oBpkts[i11][0] = Leaf27_3_Port13_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_oBpkts[i11].includes("M")){
            Leaf27_3_Port13_oBpkts[i11] =    Leaf27_3_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oBpkts[i11][0] = Leaf27_3_Port13_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_oBpkts[i11].includes("K")){
            Leaf27_3_Port13_oBpkts[i11] =    Leaf27_3_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oBpkts[i11][0] = Leaf27_3_Port13_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_oBpkts[i11] =    Leaf27_3_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port13_oMpkts[i11].includes("G")){
            Leaf27_3_Port13_oMpkts[i11] =    Leaf27_3_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oMpkts[i11][0] = Leaf27_3_Port13_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_oMpkts[i11].includes("M")){
            Leaf27_3_Port13_oMpkts[i11] =    Leaf27_3_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oMpkts[i11][0] = Leaf27_3_Port13_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port13_oMpkts[i11].includes("K")){
            Leaf27_3_Port13_oMpkts[i11] =    Leaf27_3_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oMpkts[i11][0] = Leaf27_3_Port13_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port13_oMpkts[i11] =    Leaf27_3_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port13_oCongDrops[i11].includes("G")){
            Leaf27_3_Port13_oCongDrops[i11] =    Leaf27_3_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oCongDrops[i11][0] = Leaf27_3_Port13_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_oCongDrops[i11].includes("M")){
            Leaf27_3_Port13_oCongDrops[i11] =    Leaf27_3_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oCongDrops[i11][0] = Leaf27_3_Port13_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port13_oCongDrops[i11].includes("K")){
            Leaf27_3_Port13_oCongDrops[i11] =    Leaf27_3_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oCongDrops[i11][0] = Leaf27_3_Port13_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port13_oCongDrops[i11] =    Leaf27_3_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port13_oerrs[i11].includes("G")){
            Leaf27_3_Port13_oerrs[i11] =    Leaf27_3_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oerrs[i11][0] = Leaf27_3_Port13_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_oerrs[i11].includes("M")){
            Leaf27_3_Port13_oerrs[i11] =    Leaf27_3_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oerrs[i11][0] = Leaf27_3_Port13_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port13_oerrs[i11].includes("K")){
            Leaf27_3_Port13_oerrs[i11] =    Leaf27_3_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_oerrs[i11][0] = Leaf27_3_Port13_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port13_oerrs[i11] =    Leaf27_3_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port13_mtu_errs[i11].includes("G")){
            Leaf27_3_Port13_mtu_errs[i11] =    Leaf27_3_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_mtu_errs[i11][0] = Leaf27_3_Port13_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port13_mtu_errs[i11].includes("M")){
            Leaf27_3_Port13_mtu_errs[i11] =    Leaf27_3_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_mtu_errs[i11][0] = Leaf27_3_Port13_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port13_mtu_errs[i11].includes("K")){
            Leaf27_3_Port13_mtu_errs[i11] =    Leaf27_3_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port13_mtu_errs[i11][0] = Leaf27_3_Port13_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port13_mtu_errs[i11] =    Leaf27_3_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }}

    if(Leaf27_3_Port17[i11] !== undefined){ 
        Leaf27_3_Port17_fix[i11] =        Leaf27_3_Port17[i11].slice(26, 34);
        Leaf27_3_Port17_iUpkts[i11] =     Leaf27_3_Port17[i11].slice(33,40);
        Leaf27_3_Port17_iBpkts[i11] =     Leaf27_3_Port17[i11].slice(40,47);
        Leaf27_3_Port17_iMpkts[i11] =     Leaf27_3_Port17[i11].slice(47,54);
        Leaf27_3_Port17_iCongDrops[i11] = Leaf27_3_Port17[i11].slice(54,65);
        Leaf27_3_Port17_ierrs[i11] =      Leaf27_3_Port17[i11].slice(65,71);
        Leaf27_3_Port17_obytes[i11] =     Leaf27_3_Port17[i11].slice(71,78);
        Leaf27_3_Port17_oUpkts[i11] =     Leaf27_3_Port17[i11].slice(78,85);
        Leaf27_3_Port17_oBpkts[i11] =     Leaf27_3_Port17[i11].slice(85,92);
        Leaf27_3_Port17_oMpkts[i11] =     Leaf27_3_Port17[i11].slice(92,99);
        Leaf27_3_Port17_oCongDrops[i11] = Leaf27_3_Port17[i11].slice(99,110);
        Leaf27_3_Port17_oerrs[i11] =      Leaf27_3_Port17[i11].slice(110,116);
        Leaf27_3_Port17_mtu_errs[i11] =   Leaf27_3_Port17[i11].slice(116,125);

        if( Leaf27_3_Port17_fix[i11].includes("G")){
            Leaf27_3_Port17_fix[i11] =    Leaf27_3_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_fix[i11][0] = Leaf27_3_Port17_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_fix[i11].includes("M")){
            Leaf27_3_Port17_fix[i11] =    Leaf27_3_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_fix[i11][0] = Leaf27_3_Port17_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port17_fix[i11].includes("K")){
            Leaf27_3_Port17_fix[i11] =    Leaf27_3_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_fix[i11][0] = Leaf27_3_Port17_fix[i11][0]*1000;}
    else {  Leaf27_3_Port17_fix[i11] =    Leaf27_3_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port17_iUpkts[i11].includes("G")){
            Leaf27_3_Port17_iUpkts[i11] =    Leaf27_3_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iUpkts[i11][0] = Leaf27_3_Port17_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_iUpkts[i11].includes("M")){
            Leaf27_3_Port17_iUpkts[i11] =    Leaf27_3_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iUpkts[i11][0] = Leaf27_3_Port17_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_iUpkts[i11].includes("K")){
            Leaf27_3_Port17_iUpkts[i11] =    Leaf27_3_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iUpkts[i11][0] = Leaf27_3_Port17_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_iUpkts[i11] =    Leaf27_3_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port17_iBpkts[i11].includes("G")){
            Leaf27_3_Port17_iBpkts[i11] =    Leaf27_3_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iBpkts[i11][0] = Leaf27_3_Port17_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_iBpkts[i11].includes("M")){
            Leaf27_3_Port17_iBpkts[i11] =    Leaf27_3_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iBpkts[i11][0] = Leaf27_3_Port17_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_iBpkts[i11].includes("K")){
            Leaf27_3_Port17_iBpkts[i11] =    Leaf27_3_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iBpkts[i11][0] = Leaf27_3_Port17_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_iBpkts[i11] =    Leaf27_3_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port17_iMpkts[i11].includes("G")){
            Leaf27_3_Port17_iMpkts[i11] =    Leaf27_3_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iMpkts[i11][0] = Leaf27_3_Port17_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_iMpkts[i11].includes("M")){
            Leaf27_3_Port17_iMpkts[i11] =    Leaf27_3_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iMpkts[i11][0] = Leaf27_3_Port17_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_iMpkts[i11].includes("K")){
            Leaf27_3_Port17_iMpkts[i11] =    Leaf27_3_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iMpkts[i11][0] = Leaf27_3_Port17_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_iMpkts[i11] =    Leaf27_3_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port17_iCongDrops[i11].includes("G")){
            Leaf27_3_Port17_iCongDrops[i11] =    Leaf27_3_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iCongDrops[i11][0] = Leaf27_3_Port17_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_iCongDrops[i11].includes("M")){
            Leaf27_3_Port17_iCongDrops[i11] =    Leaf27_3_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iCongDrops[i11][0] = Leaf27_3_Port17_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port17_iCongDrops[i11].includes("K")){
            Leaf27_3_Port17_iCongDrops[i11] =    Leaf27_3_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_iCongDrops[i11][0] = Leaf27_3_Port17_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port17_iCongDrops[i11] =    Leaf27_3_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port17_ierrs[i11].includes("G")){
            Leaf27_3_Port17_ierrs[i11] =    Leaf27_3_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_ierrs[i11][0] = Leaf27_3_Port17_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_ierrs[i11].includes("M")){
            Leaf27_3_Port17_ierrs[i11] =    Leaf27_3_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_ierrs[i11][0] = Leaf27_3_Port17_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port17_ierrs[i11].includes("K")){
            Leaf27_3_Port17_ierrs[i11] =    Leaf27_3_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_ierrs[i11][0] = Leaf27_3_Port17_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port17_ierrs[i11] =    Leaf27_3_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port17_obytes[i11].includes("G")){
            Leaf27_3_Port17_obytes[i11] =    Leaf27_3_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_obytes[i11][0] = Leaf27_3_Port17_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_obytes[i11].includes("M")){
            Leaf27_3_Port17_obytes[i11] =    Leaf27_3_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_obytes[i11][0] = Leaf27_3_Port17_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port17_obytes[i11].includes("K")){
            Leaf27_3_Port17_obytes[i11] =    Leaf27_3_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_obytes[i11][0] = Leaf27_3_Port17_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port17_obytes[i11] =    Leaf27_3_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port17_oUpkts[i11].includes("G")){
            Leaf27_3_Port17_oUpkts[i11] =    Leaf27_3_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oUpkts[i11][0] = Leaf27_3_Port17_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_oUpkts[i11].includes("M")){
            Leaf27_3_Port17_oUpkts[i11] =    Leaf27_3_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oUpkts[i11][0] = Leaf27_3_Port17_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_oUpkts[i11].includes("K")){
            Leaf27_3_Port17_oUpkts[i11] =    Leaf27_3_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oUpkts[i11][0] = Leaf27_3_Port17_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_oUpkts[i11] =    Leaf27_3_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port17_oBpkts[i11].includes("G")){
            Leaf27_3_Port17_oBpkts[i11] =    Leaf27_3_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oBpkts[i11][0] = Leaf27_3_Port17_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_oBpkts[i11].includes("M")){
            Leaf27_3_Port17_oBpkts[i11] =    Leaf27_3_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oBpkts[i11][0] = Leaf27_3_Port17_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_oBpkts[i11].includes("K")){
            Leaf27_3_Port17_oBpkts[i11] =    Leaf27_3_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oBpkts[i11][0] = Leaf27_3_Port17_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_oBpkts[i11] =    Leaf27_3_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port17_oMpkts[i11].includes("G")){
            Leaf27_3_Port17_oMpkts[i11] =    Leaf27_3_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oMpkts[i11][0] = Leaf27_3_Port17_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_oMpkts[i11].includes("M")){
            Leaf27_3_Port17_oMpkts[i11] =    Leaf27_3_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oMpkts[i11][0] = Leaf27_3_Port17_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port17_oMpkts[i11].includes("K")){
            Leaf27_3_Port17_oMpkts[i11] =    Leaf27_3_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oMpkts[i11][0] = Leaf27_3_Port17_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port17_oMpkts[i11] =    Leaf27_3_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port17_oCongDrops[i11].includes("G")){
            Leaf27_3_Port17_oCongDrops[i11] =    Leaf27_3_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oCongDrops[i11][0] = Leaf27_3_Port17_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_oCongDrops[i11].includes("M")){
            Leaf27_3_Port17_oCongDrops[i11] =    Leaf27_3_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oCongDrops[i11][0] = Leaf27_3_Port17_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port17_oCongDrops[i11].includes("K")){
            Leaf27_3_Port17_oCongDrops[i11] =    Leaf27_3_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oCongDrops[i11][0] = Leaf27_3_Port17_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port17_oCongDrops[i11] =    Leaf27_3_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port17_oerrs[i11].includes("G")){
            Leaf27_3_Port17_oerrs[i11] =    Leaf27_3_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oerrs[i11][0] = Leaf27_3_Port17_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_oerrs[i11].includes("M")){
            Leaf27_3_Port17_oerrs[i11] =    Leaf27_3_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oerrs[i11][0] = Leaf27_3_Port17_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port17_oerrs[i11].includes("K")){
            Leaf27_3_Port17_oerrs[i11] =    Leaf27_3_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_oerrs[i11][0] = Leaf27_3_Port17_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port17_oerrs[i11] =    Leaf27_3_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port17_mtu_errs[i11].includes("G")){
            Leaf27_3_Port17_mtu_errs[i11] =    Leaf27_3_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_mtu_errs[i11][0] = Leaf27_3_Port17_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port17_mtu_errs[i11].includes("M")){
            Leaf27_3_Port17_mtu_errs[i11] =    Leaf27_3_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_mtu_errs[i11][0] = Leaf27_3_Port17_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port17_mtu_errs[i11].includes("K")){
            Leaf27_3_Port17_mtu_errs[i11] =    Leaf27_3_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port17_mtu_errs[i11][0] = Leaf27_3_Port17_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port17_mtu_errs[i11] =    Leaf27_3_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }}

    if(Leaf27_3_Port81[i11] !== undefined){ 
    Leaf27_3_Port81_fix[i11] =        Leaf27_3_Port81[i11].slice(26, 34);
    Leaf27_3_Port81_iUpkts[i11] =     Leaf27_3_Port81[i11].slice(33,40);
    Leaf27_3_Port81_iBpkts[i11] =     Leaf27_3_Port81[i11].slice(40,47);
    Leaf27_3_Port81_iMpkts[i11] =     Leaf27_3_Port81[i11].slice(47,54);
    Leaf27_3_Port81_iCongDrops[i11] = Leaf27_3_Port81[i11].slice(54,65);
    Leaf27_3_Port81_ierrs[i11] =      Leaf27_3_Port81[i11].slice(65,71);
    Leaf27_3_Port81_obytes[i11] =     Leaf27_3_Port81[i11].slice(71,78);
    Leaf27_3_Port81_oUpkts[i11] =     Leaf27_3_Port81[i11].slice(78,85);
    Leaf27_3_Port81_oBpkts[i11] =     Leaf27_3_Port81[i11].slice(85,92);
    Leaf27_3_Port81_oMpkts[i11] =     Leaf27_3_Port81[i11].slice(92,99);
    Leaf27_3_Port81_oCongDrops[i11] = Leaf27_3_Port81[i11].slice(99,110);
    Leaf27_3_Port81_oerrs[i11] =      Leaf27_3_Port81[i11].slice(110,116);
    Leaf27_3_Port81_mtu_errs[i11] =   Leaf27_3_Port81[i11].slice(116,125);
    
    if( Leaf27_3_Port81_fix[i11].includes("G")){
        Leaf27_3_Port81_fix[i11] =    Leaf27_3_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_fix[i11][0] = Leaf27_3_Port81_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port81_fix[i11].includes("M")){
        Leaf27_3_Port81_fix[i11] =    Leaf27_3_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_fix[i11][0] = Leaf27_3_Port81_fix[i11][0]*1000000;}
else if(Leaf27_3_Port81_fix[i11].includes("K")){
        Leaf27_3_Port81_fix[i11] =    Leaf27_3_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_fix[i11][0] = Leaf27_3_Port81_fix[i11][0]*1000;}
else {  Leaf27_3_Port81_fix[i11] =    Leaf27_3_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

    if( Leaf27_3_Port81_iUpkts[i11].includes("G")){
        Leaf27_3_Port81_iUpkts[i11] =    Leaf27_3_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iUpkts[i11][0] = Leaf27_3_Port81_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_iUpkts[i11].includes("M")){
        Leaf27_3_Port81_iUpkts[i11] =    Leaf27_3_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iUpkts[i11][0] = Leaf27_3_Port81_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_iUpkts[i11].includes("K")){
        Leaf27_3_Port81_iUpkts[i11] =    Leaf27_3_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iUpkts[i11][0] = Leaf27_3_Port81_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_iUpkts[i11] =    Leaf27_3_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_iBpkts[i11].includes("G")){
        Leaf27_3_Port81_iBpkts[i11] =    Leaf27_3_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iBpkts[i11][0] = Leaf27_3_Port81_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_iBpkts[i11].includes("M")){
        Leaf27_3_Port81_iBpkts[i11] =    Leaf27_3_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iBpkts[i11][0] = Leaf27_3_Port81_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_iBpkts[i11].includes("K")){
        Leaf27_3_Port81_iBpkts[i11] =    Leaf27_3_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iBpkts[i11][0] = Leaf27_3_Port81_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_iBpkts[i11] =    Leaf27_3_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port81_iMpkts[i11].includes("G")){
        Leaf27_3_Port81_iMpkts[i11] =    Leaf27_3_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iMpkts[i11][0] = Leaf27_3_Port81_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_iMpkts[i11].includes("M")){
        Leaf27_3_Port81_iMpkts[i11] =    Leaf27_3_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iMpkts[i11][0] = Leaf27_3_Port81_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_iMpkts[i11].includes("K")){
        Leaf27_3_Port81_iMpkts[i11] =    Leaf27_3_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iMpkts[i11][0] = Leaf27_3_Port81_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_iMpkts[i11] =    Leaf27_3_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_iCongDrops[i11].includes("G")){
        Leaf27_3_Port81_iCongDrops[i11] =    Leaf27_3_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iCongDrops[i11][0] = Leaf27_3_Port81_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port81_iCongDrops[i11].includes("M")){
        Leaf27_3_Port81_iCongDrops[i11] =    Leaf27_3_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iCongDrops[i11][0] = Leaf27_3_Port81_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port81_iCongDrops[i11].includes("K")){
        Leaf27_3_Port81_iCongDrops[i11] =    Leaf27_3_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_iCongDrops[i11][0] = Leaf27_3_Port81_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port81_iCongDrops[i11] =    Leaf27_3_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_ierrs[i11].includes("G")){
        Leaf27_3_Port81_ierrs[i11] =    Leaf27_3_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_ierrs[i11][0] = Leaf27_3_Port81_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port81_ierrs[i11].includes("M")){
        Leaf27_3_Port81_ierrs[i11] =    Leaf27_3_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_ierrs[i11][0] = Leaf27_3_Port81_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port81_ierrs[i11].includes("K")){
        Leaf27_3_Port81_ierrs[i11] =    Leaf27_3_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_ierrs[i11][0] = Leaf27_3_Port81_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port81_ierrs[i11] =    Leaf27_3_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_obytes[i11].includes("G")){
        Leaf27_3_Port81_obytes[i11] =    Leaf27_3_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_obytes[i11][0] = Leaf27_3_Port81_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port81_obytes[i11].includes("M")){
        Leaf27_3_Port81_obytes[i11] =    Leaf27_3_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_obytes[i11][0] = Leaf27_3_Port81_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port81_obytes[i11].includes("K")){
        Leaf27_3_Port81_obytes[i11] =    Leaf27_3_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_obytes[i11][0] = Leaf27_3_Port81_obytes[i11][0]*1000;}
else {  Leaf27_3_Port81_obytes[i11] =    Leaf27_3_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port81_oUpkts[i11].includes("G")){
        Leaf27_3_Port81_oUpkts[i11] =    Leaf27_3_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oUpkts[i11][0] = Leaf27_3_Port81_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_oUpkts[i11].includes("M")){
        Leaf27_3_Port81_oUpkts[i11] =    Leaf27_3_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oUpkts[i11][0] = Leaf27_3_Port81_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_oUpkts[i11].includes("K")){
        Leaf27_3_Port81_oUpkts[i11] =    Leaf27_3_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oUpkts[i11][0] = Leaf27_3_Port81_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_oUpkts[i11] =    Leaf27_3_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_oBpkts[i11].includes("G")){
        Leaf27_3_Port81_oBpkts[i11] =    Leaf27_3_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oBpkts[i11][0] = Leaf27_3_Port81_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_oBpkts[i11].includes("M")){
        Leaf27_3_Port81_oBpkts[i11] =    Leaf27_3_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oBpkts[i11][0] = Leaf27_3_Port81_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_oBpkts[i11].includes("K")){
        Leaf27_3_Port81_oBpkts[i11] =    Leaf27_3_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oBpkts[i11][0] = Leaf27_3_Port81_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_oBpkts[i11] =    Leaf27_3_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_oMpkts[i11].includes("G")){
        Leaf27_3_Port81_oMpkts[i11] =    Leaf27_3_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oMpkts[i11][0] = Leaf27_3_Port81_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port81_oMpkts[i11].includes("M")){
        Leaf27_3_Port81_oMpkts[i11] =    Leaf27_3_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oMpkts[i11][0] = Leaf27_3_Port81_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port81_oMpkts[i11].includes("K")){
        Leaf27_3_Port81_oMpkts[i11] =    Leaf27_3_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oMpkts[i11][0] = Leaf27_3_Port81_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port81_oMpkts[i11] =    Leaf27_3_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_oCongDrops[i11].includes("G")){
        Leaf27_3_Port81_oCongDrops[i11] =    Leaf27_3_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oCongDrops[i11][0] = Leaf27_3_Port81_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port81_oCongDrops[i11].includes("M")){
        Leaf27_3_Port81_oCongDrops[i11] =    Leaf27_3_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oCongDrops[i11][0] = Leaf27_3_Port81_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port81_oCongDrops[i11].includes("K")){
        Leaf27_3_Port81_oCongDrops[i11] =    Leaf27_3_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oCongDrops[i11][0] = Leaf27_3_Port81_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port81_oCongDrops[i11] =    Leaf27_3_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_oerrs[i11].includes("G")){
        Leaf27_3_Port81_oerrs[i11] =    Leaf27_3_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oerrs[i11][0] = Leaf27_3_Port81_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port81_oerrs[i11].includes("M")){
        Leaf27_3_Port81_oerrs[i11] =    Leaf27_3_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oerrs[i11][0] = Leaf27_3_Port81_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port81_oerrs[i11].includes("K")){
        Leaf27_3_Port81_oerrs[i11] =    Leaf27_3_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_oerrs[i11][0] = Leaf27_3_Port81_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port81_oerrs[i11] =    Leaf27_3_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }

        if(Leaf27_3_Port81_mtu_errs[i11].includes("G")){
        Leaf27_3_Port81_mtu_errs[i11] =    Leaf27_3_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_mtu_errs[i11][0] = Leaf27_3_Port81_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port81_mtu_errs[i11].includes("M")){
        Leaf27_3_Port81_mtu_errs[i11] =    Leaf27_3_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_mtu_errs[i11][0] = Leaf27_3_Port81_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port81_mtu_errs[i11].includes("K")){
        Leaf27_3_Port81_mtu_errs[i11] =    Leaf27_3_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port81_mtu_errs[i11][0] = Leaf27_3_Port81_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port81_mtu_errs[i11] =    Leaf27_3_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}

    if(Leaf27_3_Port85[i11] !== undefined){ 
        Leaf27_3_Port85_fix[i11] =        Leaf27_3_Port85[i11].slice(26, 34);
        Leaf27_3_Port85_iUpkts[i11] =     Leaf27_3_Port85[i11].slice(33,40);
        Leaf27_3_Port85_iBpkts[i11] =     Leaf27_3_Port85[i11].slice(40,47);
        Leaf27_3_Port85_iMpkts[i11] =     Leaf27_3_Port85[i11].slice(47,54);
        Leaf27_3_Port85_iCongDrops[i11] = Leaf27_3_Port85[i11].slice(54,65);
        Leaf27_3_Port85_ierrs[i11] =      Leaf27_3_Port85[i11].slice(65,71);
        Leaf27_3_Port85_obytes[i11] =     Leaf27_3_Port85[i11].slice(71,78);
        Leaf27_3_Port85_oUpkts[i11] =     Leaf27_3_Port85[i11].slice(78,85);
        Leaf27_3_Port85_oBpkts[i11] =     Leaf27_3_Port85[i11].slice(85,92);
        Leaf27_3_Port85_oMpkts[i11] =     Leaf27_3_Port85[i11].slice(92,99);
        Leaf27_3_Port85_oCongDrops[i11] = Leaf27_3_Port85[i11].slice(99,110);
        Leaf27_3_Port85_oerrs[i11] =      Leaf27_3_Port85[i11].slice(110,116);
        Leaf27_3_Port85_mtu_errs[i11] =   Leaf27_3_Port85[i11].slice(116,125);
        
        if( Leaf27_3_Port85_fix[i11].includes("G")){
            Leaf27_3_Port85_fix[i11] =    Leaf27_3_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_fix[i11][0] = Leaf27_3_Port85_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_fix[i11].includes("M")){
            Leaf27_3_Port85_fix[i11] =    Leaf27_3_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_fix[i11][0] = Leaf27_3_Port85_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port85_fix[i11].includes("K")){
            Leaf27_3_Port85_fix[i11] =    Leaf27_3_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_fix[i11][0] = Leaf27_3_Port85_fix[i11][0]*1000;}
    else {  Leaf27_3_Port85_fix[i11] =    Leaf27_3_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port85_iUpkts[i11].includes("G")){
            Leaf27_3_Port85_iUpkts[i11] =    Leaf27_3_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iUpkts[i11][0] = Leaf27_3_Port85_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_iUpkts[i11].includes("M")){
            Leaf27_3_Port85_iUpkts[i11] =    Leaf27_3_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iUpkts[i11][0] = Leaf27_3_Port85_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_iUpkts[i11].includes("K")){
            Leaf27_3_Port85_iUpkts[i11] =    Leaf27_3_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iUpkts[i11][0] = Leaf27_3_Port85_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_iUpkts[i11] =    Leaf27_3_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
    
            if(Leaf27_3_Port85_iBpkts[i11].includes("G")){
            Leaf27_3_Port85_iBpkts[i11] =    Leaf27_3_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iBpkts[i11][0] = Leaf27_3_Port85_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_iBpkts[i11].includes("M")){
            Leaf27_3_Port85_iBpkts[i11] =    Leaf27_3_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iBpkts[i11][0] = Leaf27_3_Port85_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_iBpkts[i11].includes("K")){
            Leaf27_3_Port85_iBpkts[i11] =    Leaf27_3_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iBpkts[i11][0] = Leaf27_3_Port85_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_iBpkts[i11] =    Leaf27_3_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }
        
            if(Leaf27_3_Port85_iMpkts[i11].includes("G")){
            Leaf27_3_Port85_iMpkts[i11] =    Leaf27_3_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iMpkts[i11][0] = Leaf27_3_Port85_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_iMpkts[i11].includes("M")){
            Leaf27_3_Port85_iMpkts[i11] =    Leaf27_3_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iMpkts[i11][0] = Leaf27_3_Port85_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_iMpkts[i11].includes("K")){
            Leaf27_3_Port85_iMpkts[i11] =    Leaf27_3_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iMpkts[i11][0] = Leaf27_3_Port85_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_iMpkts[i11] =    Leaf27_3_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_iCongDrops[i11].includes("G")){
            Leaf27_3_Port85_iCongDrops[i11] =    Leaf27_3_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iCongDrops[i11][0] = Leaf27_3_Port85_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_iCongDrops[i11].includes("M")){
            Leaf27_3_Port85_iCongDrops[i11] =    Leaf27_3_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iCongDrops[i11][0] = Leaf27_3_Port85_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port85_iCongDrops[i11].includes("K")){
            Leaf27_3_Port85_iCongDrops[i11] =    Leaf27_3_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_iCongDrops[i11][0] = Leaf27_3_Port85_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port85_iCongDrops[i11] =    Leaf27_3_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port85_ierrs[i11].includes("G")){
            Leaf27_3_Port85_ierrs[i11] =    Leaf27_3_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_ierrs[i11][0] = Leaf27_3_Port85_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_ierrs[i11].includes("M")){
            Leaf27_3_Port85_ierrs[i11] =    Leaf27_3_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_ierrs[i11][0] = Leaf27_3_Port85_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port85_ierrs[i11].includes("K")){
            Leaf27_3_Port85_ierrs[i11] =    Leaf27_3_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_ierrs[i11][0] = Leaf27_3_Port85_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port85_ierrs[i11] =    Leaf27_3_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_obytes[i11].includes("G")){
            Leaf27_3_Port85_obytes[i11] =    Leaf27_3_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_obytes[i11][0] = Leaf27_3_Port85_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_obytes[i11].includes("M")){
            Leaf27_3_Port85_obytes[i11] =    Leaf27_3_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_obytes[i11][0] = Leaf27_3_Port85_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port85_obytes[i11].includes("K")){
            Leaf27_3_Port85_obytes[i11] =    Leaf27_3_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_obytes[i11][0] = Leaf27_3_Port85_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port85_obytes[i11] =    Leaf27_3_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port85_oUpkts[i11].includes("G")){
            Leaf27_3_Port85_oUpkts[i11] =    Leaf27_3_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oUpkts[i11][0] = Leaf27_3_Port85_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_oUpkts[i11].includes("M")){
            Leaf27_3_Port85_oUpkts[i11] =    Leaf27_3_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oUpkts[i11][0] = Leaf27_3_Port85_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_oUpkts[i11].includes("K")){
            Leaf27_3_Port85_oUpkts[i11] =    Leaf27_3_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oUpkts[i11][0] = Leaf27_3_Port85_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_oUpkts[i11] =    Leaf27_3_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_oBpkts[i11].includes("G")){
            Leaf27_3_Port85_oBpkts[i11] =    Leaf27_3_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oBpkts[i11][0] = Leaf27_3_Port85_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_oBpkts[i11].includes("M")){
            Leaf27_3_Port85_oBpkts[i11] =    Leaf27_3_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oBpkts[i11][0] = Leaf27_3_Port85_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_oBpkts[i11].includes("K")){
            Leaf27_3_Port85_oBpkts[i11] =    Leaf27_3_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oBpkts[i11][0] = Leaf27_3_Port85_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_oBpkts[i11] =    Leaf27_3_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_oMpkts[i11].includes("G")){
            Leaf27_3_Port85_oMpkts[i11] =    Leaf27_3_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oMpkts[i11][0] = Leaf27_3_Port85_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_oMpkts[i11].includes("M")){
            Leaf27_3_Port85_oMpkts[i11] =    Leaf27_3_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oMpkts[i11][0] = Leaf27_3_Port85_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port85_oMpkts[i11].includes("K")){
            Leaf27_3_Port85_oMpkts[i11] =    Leaf27_3_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oMpkts[i11][0] = Leaf27_3_Port85_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port85_oMpkts[i11] =    Leaf27_3_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_oCongDrops[i11].includes("G")){
            Leaf27_3_Port85_oCongDrops[i11] =    Leaf27_3_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oCongDrops[i11][0] = Leaf27_3_Port85_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_oCongDrops[i11].includes("M")){
            Leaf27_3_Port85_oCongDrops[i11] =    Leaf27_3_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oCongDrops[i11][0] = Leaf27_3_Port85_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port85_oCongDrops[i11].includes("K")){
            Leaf27_3_Port85_oCongDrops[i11] =    Leaf27_3_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oCongDrops[i11][0] = Leaf27_3_Port85_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port85_oCongDrops[i11] =    Leaf27_3_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }

            if(Leaf27_3_Port85_oerrs[i11].includes("G")){
            Leaf27_3_Port85_oerrs[i11] =    Leaf27_3_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oerrs[i11][0] = Leaf27_3_Port85_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_oerrs[i11].includes("M")){
            Leaf27_3_Port85_oerrs[i11] =    Leaf27_3_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oerrs[i11][0] = Leaf27_3_Port85_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port85_oerrs[i11].includes("K")){
            Leaf27_3_Port85_oerrs[i11] =    Leaf27_3_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_oerrs[i11][0] = Leaf27_3_Port85_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port85_oerrs[i11] =    Leaf27_3_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port85_mtu_errs[i11].includes("G")){
            Leaf27_3_Port85_mtu_errs[i11] =    Leaf27_3_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_mtu_errs[i11][0] = Leaf27_3_Port85_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port85_mtu_errs[i11].includes("M")){
            Leaf27_3_Port85_mtu_errs[i11] =    Leaf27_3_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_mtu_errs[i11][0] = Leaf27_3_Port85_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port85_mtu_errs[i11].includes("K")){
            Leaf27_3_Port85_mtu_errs[i11] =    Leaf27_3_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port85_mtu_errs[i11][0] = Leaf27_3_Port85_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port85_mtu_errs[i11] =    Leaf27_3_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
         }}

    if(Leaf27_3_Port86[i11] !== undefined){ 
        Leaf27_3_Port86_fix[i11] =        Leaf27_3_Port86[i11].slice(26, 34);
        Leaf27_3_Port86_iUpkts[i11] =     Leaf27_3_Port86[i11].slice(33,40);
        Leaf27_3_Port86_iBpkts[i11] =     Leaf27_3_Port86[i11].slice(40,47);
        Leaf27_3_Port86_iMpkts[i11] =     Leaf27_3_Port86[i11].slice(47,54);
        Leaf27_3_Port86_iCongDrops[i11] = Leaf27_3_Port86[i11].slice(54,65);
        Leaf27_3_Port86_ierrs[i11] =      Leaf27_3_Port86[i11].slice(65,71);
        Leaf27_3_Port86_obytes[i11] =     Leaf27_3_Port86[i11].slice(71,78);
        Leaf27_3_Port86_oUpkts[i11] =     Leaf27_3_Port86[i11].slice(78,85);
        Leaf27_3_Port86_oBpkts[i11] =     Leaf27_3_Port86[i11].slice(85,92);
        Leaf27_3_Port86_oMpkts[i11] =     Leaf27_3_Port86[i11].slice(92,99);
        Leaf27_3_Port86_oCongDrops[i11] = Leaf27_3_Port86[i11].slice(99,110);
        Leaf27_3_Port86_oerrs[i11] =      Leaf27_3_Port86[i11].slice(110,116);
        Leaf27_3_Port86_mtu_errs[i11] =   Leaf27_3_Port86[i11].slice(116,125);
        
        if( Leaf27_3_Port86_fix[i11].includes("G")){
            Leaf27_3_Port86_fix[i11] =    Leaf27_3_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_fix[i11][0] = Leaf27_3_Port86_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_fix[i11].includes("M")){
            Leaf27_3_Port86_fix[i11] =    Leaf27_3_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_fix[i11][0] = Leaf27_3_Port86_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port86_fix[i11].includes("K")){
            Leaf27_3_Port86_fix[i11] =    Leaf27_3_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_fix[i11][0] = Leaf27_3_Port86_fix[i11][0]*1000;}
    else {  Leaf27_3_Port86_fix[i11] =    Leaf27_3_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port86_iUpkts[i11].includes("G")){
            Leaf27_3_Port86_iUpkts[i11] =    Leaf27_3_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iUpkts[i11][0] = Leaf27_3_Port86_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_iUpkts[i11].includes("M")){
            Leaf27_3_Port86_iUpkts[i11] =    Leaf27_3_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iUpkts[i11][0] = Leaf27_3_Port86_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_iUpkts[i11].includes("K")){
            Leaf27_3_Port86_iUpkts[i11] =    Leaf27_3_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iUpkts[i11][0] = Leaf27_3_Port86_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_iUpkts[i11] =    Leaf27_3_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
    
            if(Leaf27_3_Port86_iBpkts[i11].includes("G")){
            Leaf27_3_Port86_iBpkts[i11] =    Leaf27_3_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iBpkts[i11][0] = Leaf27_3_Port86_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_iBpkts[i11].includes("M")){
            Leaf27_3_Port86_iBpkts[i11] =    Leaf27_3_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iBpkts[i11][0] = Leaf27_3_Port86_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_iBpkts[i11].includes("K")){
            Leaf27_3_Port86_iBpkts[i11] =    Leaf27_3_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iBpkts[i11][0] = Leaf27_3_Port86_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_iBpkts[i11] =    Leaf27_3_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port86_iMpkts[i11].includes("G")){
            Leaf27_3_Port86_iMpkts[i11] =    Leaf27_3_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iMpkts[i11][0] = Leaf27_3_Port86_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_iMpkts[i11].includes("M")){
            Leaf27_3_Port86_iMpkts[i11] =    Leaf27_3_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iMpkts[i11][0] = Leaf27_3_Port86_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_iMpkts[i11].includes("K")){
            Leaf27_3_Port86_iMpkts[i11] =    Leaf27_3_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iMpkts[i11][0] = Leaf27_3_Port86_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_iMpkts[i11] =    Leaf27_3_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port86_iCongDrops[i11].includes("G")){
            Leaf27_3_Port86_iCongDrops[i11] =    Leaf27_3_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iCongDrops[i11][0] = Leaf27_3_Port86_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_iCongDrops[i11].includes("M")){
            Leaf27_3_Port86_iCongDrops[i11] =    Leaf27_3_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iCongDrops[i11][0] = Leaf27_3_Port86_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port86_iCongDrops[i11].includes("K")){
            Leaf27_3_Port86_iCongDrops[i11] =    Leaf27_3_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_iCongDrops[i11][0] = Leaf27_3_Port86_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port86_iCongDrops[i11] =    Leaf27_3_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port86_ierrs[i11].includes("G")){
            Leaf27_3_Port86_ierrs[i11] =    Leaf27_3_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_ierrs[i11][0] = Leaf27_3_Port86_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_ierrs[i11].includes("M")){
            Leaf27_3_Port86_ierrs[i11] =    Leaf27_3_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_ierrs[i11][0] = Leaf27_3_Port86_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port86_ierrs[i11].includes("K")){
            Leaf27_3_Port86_ierrs[i11] =    Leaf27_3_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_ierrs[i11][0] = Leaf27_3_Port86_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port86_ierrs[i11] =    Leaf27_3_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port86_obytes[i11].includes("G")){
            Leaf27_3_Port86_obytes[i11] =    Leaf27_3_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_obytes[i11][0] = Leaf27_3_Port86_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_obytes[i11].includes("M")){
            Leaf27_3_Port86_obytes[i11] =    Leaf27_3_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_obytes[i11][0] = Leaf27_3_Port86_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port86_obytes[i11].includes("K")){
            Leaf27_3_Port86_obytes[i11] =    Leaf27_3_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_obytes[i11][0] = Leaf27_3_Port86_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port86_obytes[i11] =    Leaf27_3_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port86_oUpkts[i11].includes("G")){
            Leaf27_3_Port86_oUpkts[i11] =    Leaf27_3_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oUpkts[i11][0] = Leaf27_3_Port86_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_oUpkts[i11].includes("M")){
            Leaf27_3_Port86_oUpkts[i11] =    Leaf27_3_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oUpkts[i11][0] = Leaf27_3_Port86_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_oUpkts[i11].includes("K")){
            Leaf27_3_Port86_oUpkts[i11] =    Leaf27_3_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oUpkts[i11][0] = Leaf27_3_Port86_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_oUpkts[i11] =    Leaf27_3_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port86_oBpkts[i11].includes("G")){
            Leaf27_3_Port86_oBpkts[i11] =    Leaf27_3_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oBpkts[i11][0] = Leaf27_3_Port86_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_oBpkts[i11].includes("M")){
            Leaf27_3_Port86_oBpkts[i11] =    Leaf27_3_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oBpkts[i11][0] = Leaf27_3_Port86_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_oBpkts[i11].includes("K")){
            Leaf27_3_Port86_oBpkts[i11] =    Leaf27_3_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oBpkts[i11][0] = Leaf27_3_Port86_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_oBpkts[i11] =    Leaf27_3_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port86_oMpkts[i11].includes("G")){
            Leaf27_3_Port86_oMpkts[i11] =    Leaf27_3_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oMpkts[i11][0] = Leaf27_3_Port86_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_oMpkts[i11].includes("M")){
            Leaf27_3_Port86_oMpkts[i11] =    Leaf27_3_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oMpkts[i11][0] = Leaf27_3_Port86_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port86_oMpkts[i11].includes("K")){
            Leaf27_3_Port86_oMpkts[i11] =    Leaf27_3_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oMpkts[i11][0] = Leaf27_3_Port86_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port86_oMpkts[i11] =    Leaf27_3_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port86_oCongDrops[i11].includes("G")){
            Leaf27_3_Port86_oCongDrops[i11] =    Leaf27_3_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oCongDrops[i11][0] = Leaf27_3_Port86_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_oCongDrops[i11].includes("M")){
            Leaf27_3_Port86_oCongDrops[i11] =    Leaf27_3_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oCongDrops[i11][0] = Leaf27_3_Port86_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port86_oCongDrops[i11].includes("K")){
            Leaf27_3_Port86_oCongDrops[i11] =    Leaf27_3_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oCongDrops[i11][0] = Leaf27_3_Port86_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port86_oCongDrops[i11] =    Leaf27_3_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
          }

            if(Leaf27_3_Port86_oerrs[i11].includes("G")){
            Leaf27_3_Port86_oerrs[i11] =    Leaf27_3_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oerrs[i11][0] = Leaf27_3_Port86_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_oerrs[i11].includes("M")){
            Leaf27_3_Port86_oerrs[i11] =    Leaf27_3_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oerrs[i11][0] = Leaf27_3_Port86_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port86_oerrs[i11].includes("K")){
            Leaf27_3_Port86_oerrs[i11] =    Leaf27_3_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_oerrs[i11][0] = Leaf27_3_Port86_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port86_oerrs[i11] =    Leaf27_3_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port86_mtu_errs[i11].includes("G")){
            Leaf27_3_Port86_mtu_errs[i11] =    Leaf27_3_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_mtu_errs[i11][0] = Leaf27_3_Port86_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port86_mtu_errs[i11].includes("M")){
            Leaf27_3_Port86_mtu_errs[i11] =    Leaf27_3_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_mtu_errs[i11][0] = Leaf27_3_Port86_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port86_mtu_errs[i11].includes("K")){
            Leaf27_3_Port86_mtu_errs[i11] =    Leaf27_3_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port86_mtu_errs[i11][0] = Leaf27_3_Port86_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port86_mtu_errs[i11] =    Leaf27_3_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }}

    if(Leaf27_3_Port87[i11] !== undefined){ 
        Leaf27_3_Port87_fix[i11] =        Leaf27_3_Port87[i11].slice(26, 34);
        Leaf27_3_Port87_iUpkts[i11] =     Leaf27_3_Port87[i11].slice(33,40);
        Leaf27_3_Port87_iBpkts[i11] =     Leaf27_3_Port87[i11].slice(40,47);
        Leaf27_3_Port87_iMpkts[i11] =     Leaf27_3_Port87[i11].slice(47,54);
        Leaf27_3_Port87_iCongDrops[i11] = Leaf27_3_Port87[i11].slice(54,65);
        Leaf27_3_Port87_ierrs[i11] =      Leaf27_3_Port87[i11].slice(65,71);
        Leaf27_3_Port87_obytes[i11] =     Leaf27_3_Port87[i11].slice(71,78);
        Leaf27_3_Port87_oUpkts[i11] =     Leaf27_3_Port87[i11].slice(78,85);
        Leaf27_3_Port87_oBpkts[i11] =     Leaf27_3_Port87[i11].slice(85,92);
        Leaf27_3_Port87_oMpkts[i11] =     Leaf27_3_Port87[i11].slice(92,99);
        Leaf27_3_Port87_oCongDrops[i11] = Leaf27_3_Port87[i11].slice(99,110);
        Leaf27_3_Port87_oerrs[i11] =      Leaf27_3_Port87[i11].slice(110,116);
        Leaf27_3_Port87_mtu_errs[i11] =   Leaf27_3_Port87[i11].slice(116,125);

    if( Leaf27_3_Port87_fix[i11].includes("G")){
        Leaf27_3_Port87_fix[i11] =    Leaf27_3_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_fix[i11][0] = Leaf27_3_Port87_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_fix[i11].includes("M")){
        Leaf27_3_Port87_fix[i11] =    Leaf27_3_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_fix[i11][0] = Leaf27_3_Port87_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port87_fix[i11].includes("K")){
        Leaf27_3_Port87_fix[i11] =    Leaf27_3_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_fix[i11][0] = Leaf27_3_Port87_fix[i11][0]*1000;}
    else {  Leaf27_3_Port87_fix[i11] =    Leaf27_3_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
    
    if( Leaf27_3_Port87_iUpkts[i11].includes("G")){
        Leaf27_3_Port87_iUpkts[i11] =    Leaf27_3_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iUpkts[i11][0] = Leaf27_3_Port87_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_iUpkts[i11].includes("M")){
        Leaf27_3_Port87_iUpkts[i11] =    Leaf27_3_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iUpkts[i11][0] = Leaf27_3_Port87_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_iUpkts[i11].includes("K")){
        Leaf27_3_Port87_iUpkts[i11] =    Leaf27_3_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iUpkts[i11][0] = Leaf27_3_Port87_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_iUpkts[i11] =    Leaf27_3_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
    
        if(Leaf27_3_Port87_iBpkts[i11].includes("G")){
        Leaf27_3_Port87_iBpkts[i11] =    Leaf27_3_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iBpkts[i11][0] = Leaf27_3_Port87_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_iBpkts[i11].includes("M")){
        Leaf27_3_Port87_iBpkts[i11] =    Leaf27_3_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iBpkts[i11][0] = Leaf27_3_Port87_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_iBpkts[i11].includes("K")){
        Leaf27_3_Port87_iBpkts[i11] =    Leaf27_3_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iBpkts[i11][0] = Leaf27_3_Port87_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_iBpkts[i11] =    Leaf27_3_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
     }
    
        if(Leaf27_3_Port87_iMpkts[i11].includes("G")){
        Leaf27_3_Port87_iMpkts[i11] =    Leaf27_3_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iMpkts[i11][0] = Leaf27_3_Port87_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_iMpkts[i11].includes("M")){
        Leaf27_3_Port87_iMpkts[i11] =    Leaf27_3_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iMpkts[i11][0] = Leaf27_3_Port87_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_iMpkts[i11].includes("K")){
        Leaf27_3_Port87_iMpkts[i11] =    Leaf27_3_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iMpkts[i11][0] = Leaf27_3_Port87_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_iMpkts[i11] =    Leaf27_3_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
      }
    
        if(Leaf27_3_Port87_iCongDrops[i11].includes("G")){
        Leaf27_3_Port87_iCongDrops[i11] =    Leaf27_3_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iCongDrops[i11][0] = Leaf27_3_Port87_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_iCongDrops[i11].includes("M")){
        Leaf27_3_Port87_iCongDrops[i11] =    Leaf27_3_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iCongDrops[i11][0] = Leaf27_3_Port87_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port87_iCongDrops[i11].includes("K")){
        Leaf27_3_Port87_iCongDrops[i11] =    Leaf27_3_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_iCongDrops[i11][0] = Leaf27_3_Port87_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port87_iCongDrops[i11] =    Leaf27_3_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port87_ierrs[i11].includes("G")){
        Leaf27_3_Port87_ierrs[i11] =    Leaf27_3_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_ierrs[i11][0] = Leaf27_3_Port87_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_ierrs[i11].includes("M")){
        Leaf27_3_Port87_ierrs[i11] =    Leaf27_3_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_ierrs[i11][0] = Leaf27_3_Port87_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port87_ierrs[i11].includes("K")){
        Leaf27_3_Port87_ierrs[i11] =    Leaf27_3_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_ierrs[i11][0] = Leaf27_3_Port87_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port87_ierrs[i11] =    Leaf27_3_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port87_obytes[i11].includes("G")){
        Leaf27_3_Port87_obytes[i11] =    Leaf27_3_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_obytes[i11][0] = Leaf27_3_Port87_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_obytes[i11].includes("M")){
        Leaf27_3_Port87_obytes[i11] =    Leaf27_3_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_obytes[i11][0] = Leaf27_3_Port87_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port87_obytes[i11].includes("K")){
        Leaf27_3_Port87_obytes[i11] =    Leaf27_3_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_obytes[i11][0] = Leaf27_3_Port87_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port87_obytes[i11] =    Leaf27_3_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port87_oUpkts[i11].includes("G")){
        Leaf27_3_Port87_oUpkts[i11] =    Leaf27_3_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oUpkts[i11][0] = Leaf27_3_Port87_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_oUpkts[i11].includes("M")){
        Leaf27_3_Port87_oUpkts[i11] =    Leaf27_3_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oUpkts[i11][0] = Leaf27_3_Port87_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_oUpkts[i11].includes("K")){
        Leaf27_3_Port87_oUpkts[i11] =    Leaf27_3_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oUpkts[i11][0] = Leaf27_3_Port87_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_oUpkts[i11] =    Leaf27_3_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port87_oBpkts[i11].includes("G")){
        Leaf27_3_Port87_oBpkts[i11] =    Leaf27_3_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oBpkts[i11][0] = Leaf27_3_Port87_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_oBpkts[i11].includes("M")){
        Leaf27_3_Port87_oBpkts[i11] =    Leaf27_3_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oBpkts[i11][0] = Leaf27_3_Port87_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_oBpkts[i11].includes("K")){
        Leaf27_3_Port87_oBpkts[i11] =    Leaf27_3_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oBpkts[i11][0] = Leaf27_3_Port87_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_oBpkts[i11] =    Leaf27_3_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port87_oMpkts[i11].includes("G")){
        Leaf27_3_Port87_oMpkts[i11] =    Leaf27_3_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oMpkts[i11][0] = Leaf27_3_Port87_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_oMpkts[i11].includes("M")){
        Leaf27_3_Port87_oMpkts[i11] =    Leaf27_3_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oMpkts[i11][0] = Leaf27_3_Port87_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port87_oMpkts[i11].includes("K")){
        Leaf27_3_Port87_oMpkts[i11] =    Leaf27_3_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oMpkts[i11][0] = Leaf27_3_Port87_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port87_oMpkts[i11] =    Leaf27_3_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port87_oCongDrops[i11].includes("G")){
        Leaf27_3_Port87_oCongDrops[i11] =    Leaf27_3_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oCongDrops[i11][0] = Leaf27_3_Port87_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_oCongDrops[i11].includes("M")){
        Leaf27_3_Port87_oCongDrops[i11] =    Leaf27_3_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oCongDrops[i11][0] = Leaf27_3_Port87_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port87_oCongDrops[i11].includes("K")){
        Leaf27_3_Port87_oCongDrops[i11] =    Leaf27_3_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oCongDrops[i11][0] = Leaf27_3_Port87_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port87_oCongDrops[i11] =    Leaf27_3_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port87_oerrs[i11].includes("G")){
        Leaf27_3_Port87_oerrs[i11] =    Leaf27_3_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oerrs[i11][0] = Leaf27_3_Port87_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_oerrs[i11].includes("M")){
        Leaf27_3_Port87_oerrs[i11] =    Leaf27_3_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oerrs[i11][0] = Leaf27_3_Port87_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port87_oerrs[i11].includes("K")){
        Leaf27_3_Port87_oerrs[i11] =    Leaf27_3_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_oerrs[i11][0] = Leaf27_3_Port87_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port87_oerrs[i11] =    Leaf27_3_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port87_mtu_errs[i11].includes("G")){
        Leaf27_3_Port87_mtu_errs[i11] =    Leaf27_3_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_mtu_errs[i11][0] = Leaf27_3_Port87_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port87_mtu_errs[i11].includes("M")){
        Leaf27_3_Port87_mtu_errs[i11] =    Leaf27_3_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_mtu_errs[i11][0] = Leaf27_3_Port87_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port87_mtu_errs[i11].includes("K")){
        Leaf27_3_Port87_mtu_errs[i11] =    Leaf27_3_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port87_mtu_errs[i11][0] = Leaf27_3_Port87_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port87_mtu_errs[i11] =    Leaf27_3_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}

if(Leaf27_3_Port88[i11] !== undefined){ 
    Leaf27_3_Port88_fix[i11] =        Leaf27_3_Port88[i11].slice(26, 34);
    Leaf27_3_Port88_iUpkts[i11] =     Leaf27_3_Port88[i11].slice(33,40);
    Leaf27_3_Port88_iBpkts[i11] =     Leaf27_3_Port88[i11].slice(40,47);
    Leaf27_3_Port88_iMpkts[i11] =     Leaf27_3_Port88[i11].slice(47,54);
    Leaf27_3_Port88_iCongDrops[i11] = Leaf27_3_Port88[i11].slice(54,65);
    Leaf27_3_Port88_ierrs[i11] =      Leaf27_3_Port88[i11].slice(65,71);
    Leaf27_3_Port88_obytes[i11] =     Leaf27_3_Port88[i11].slice(71,78);
    Leaf27_3_Port88_oUpkts[i11] =     Leaf27_3_Port88[i11].slice(78,85);
    Leaf27_3_Port88_oBpkts[i11] =     Leaf27_3_Port88[i11].slice(85,92);
    Leaf27_3_Port88_oMpkts[i11] =     Leaf27_3_Port88[i11].slice(92,99);
    Leaf27_3_Port88_oCongDrops[i11] = Leaf27_3_Port88[i11].slice(99,110);
    Leaf27_3_Port88_oerrs[i11] =      Leaf27_3_Port88[i11].slice(110,116);
    Leaf27_3_Port88_mtu_errs[i11] =   Leaf27_3_Port88[i11].slice(116,125);

if( Leaf27_3_Port88_fix[i11].includes("G")){
    Leaf27_3_Port88_fix[i11] =    Leaf27_3_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_fix[i11][0] = Leaf27_3_Port88_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port88_fix[i11].includes("M")){
    Leaf27_3_Port88_fix[i11] =    Leaf27_3_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_fix[i11][0] = Leaf27_3_Port88_fix[i11][0]*1000000;}
else if(Leaf27_3_Port88_fix[i11].includes("K")){
    Leaf27_3_Port88_fix[i11] =    Leaf27_3_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_fix[i11][0] = Leaf27_3_Port88_fix[i11][0]*1000;}
else {  Leaf27_3_Port88_fix[i11] =    Leaf27_3_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

if( Leaf27_3_Port88_iUpkts[i11].includes("G")){
    Leaf27_3_Port88_iUpkts[i11] =    Leaf27_3_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iUpkts[i11][0] = Leaf27_3_Port88_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_iUpkts[i11].includes("M")){
    Leaf27_3_Port88_iUpkts[i11] =    Leaf27_3_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iUpkts[i11][0] = Leaf27_3_Port88_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_iUpkts[i11].includes("K")){
    Leaf27_3_Port88_iUpkts[i11] =    Leaf27_3_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iUpkts[i11][0] = Leaf27_3_Port88_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_iUpkts[i11] =    Leaf27_3_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port88_iBpkts[i11].includes("G")){
    Leaf27_3_Port88_iBpkts[i11] =    Leaf27_3_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iBpkts[i11][0] = Leaf27_3_Port88_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_iBpkts[i11].includes("M")){
    Leaf27_3_Port88_iBpkts[i11] =    Leaf27_3_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iBpkts[i11][0] = Leaf27_3_Port88_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_iBpkts[i11].includes("K")){
    Leaf27_3_Port88_iBpkts[i11] =    Leaf27_3_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iBpkts[i11][0] = Leaf27_3_Port88_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_iBpkts[i11] =    Leaf27_3_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_iMpkts[i11].includes("G")){
    Leaf27_3_Port88_iMpkts[i11] =    Leaf27_3_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iMpkts[i11][0] = Leaf27_3_Port88_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_iMpkts[i11].includes("M")){
    Leaf27_3_Port88_iMpkts[i11] =    Leaf27_3_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iMpkts[i11][0] = Leaf27_3_Port88_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_iMpkts[i11].includes("K")){
    Leaf27_3_Port88_iMpkts[i11] =    Leaf27_3_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iMpkts[i11][0] = Leaf27_3_Port88_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_iMpkts[i11] =    Leaf27_3_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port88_iCongDrops[i11].includes("G")){
    Leaf27_3_Port88_iCongDrops[i11] =    Leaf27_3_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iCongDrops[i11][0] = Leaf27_3_Port88_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port88_iCongDrops[i11].includes("M")){
    Leaf27_3_Port88_iCongDrops[i11] =    Leaf27_3_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iCongDrops[i11][0] = Leaf27_3_Port88_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port88_iCongDrops[i11].includes("K")){
    Leaf27_3_Port88_iCongDrops[i11] =    Leaf27_3_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_iCongDrops[i11][0] = Leaf27_3_Port88_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port88_iCongDrops[i11] =    Leaf27_3_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_ierrs[i11].includes("G")){
    Leaf27_3_Port88_ierrs[i11] =    Leaf27_3_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_ierrs[i11][0] = Leaf27_3_Port88_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port88_ierrs[i11].includes("M")){
    Leaf27_3_Port88_ierrs[i11] =    Leaf27_3_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_ierrs[i11][0] = Leaf27_3_Port88_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port88_ierrs[i11].includes("K")){
    Leaf27_3_Port88_ierrs[i11] =    Leaf27_3_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_ierrs[i11][0] = Leaf27_3_Port88_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port88_ierrs[i11] =    Leaf27_3_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port88_obytes[i11].includes("G")){
    Leaf27_3_Port88_obytes[i11] =    Leaf27_3_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_obytes[i11][0] = Leaf27_3_Port88_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port88_obytes[i11].includes("M")){
    Leaf27_3_Port88_obytes[i11] =    Leaf27_3_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_obytes[i11][0] = Leaf27_3_Port88_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port88_obytes[i11].includes("K")){
    Leaf27_3_Port88_obytes[i11] =    Leaf27_3_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_obytes[i11][0] = Leaf27_3_Port88_obytes[i11][0]*1000;}
else {  Leaf27_3_Port88_obytes[i11] =    Leaf27_3_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_oUpkts[i11].includes("G")){
    Leaf27_3_Port88_oUpkts[i11] =    Leaf27_3_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oUpkts[i11][0] = Leaf27_3_Port88_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_oUpkts[i11].includes("M")){
    Leaf27_3_Port88_oUpkts[i11] =    Leaf27_3_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oUpkts[i11][0] = Leaf27_3_Port88_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_oUpkts[i11].includes("K")){
    Leaf27_3_Port88_oUpkts[i11] =    Leaf27_3_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oUpkts[i11][0] = Leaf27_3_Port88_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_oUpkts[i11] =    Leaf27_3_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port88_oBpkts[i11].includes("G")){
    Leaf27_3_Port88_oBpkts[i11] =    Leaf27_3_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oBpkts[i11][0] = Leaf27_3_Port88_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_oBpkts[i11].includes("M")){
    Leaf27_3_Port88_oBpkts[i11] =    Leaf27_3_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oBpkts[i11][0] = Leaf27_3_Port88_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_oBpkts[i11].includes("K")){
    Leaf27_3_Port88_oBpkts[i11] =    Leaf27_3_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oBpkts[i11][0] = Leaf27_3_Port88_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_oBpkts[i11] =    Leaf27_3_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_oMpkts[i11].includes("G")){
    Leaf27_3_Port88_oMpkts[i11] =    Leaf27_3_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oMpkts[i11][0] = Leaf27_3_Port88_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port88_oMpkts[i11].includes("M")){
    Leaf27_3_Port88_oMpkts[i11] =    Leaf27_3_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oMpkts[i11][0] = Leaf27_3_Port88_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port88_oMpkts[i11].includes("K")){
    Leaf27_3_Port88_oMpkts[i11] =    Leaf27_3_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oMpkts[i11][0] = Leaf27_3_Port88_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port88_oMpkts[i11] =    Leaf27_3_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_oCongDrops[i11].includes("G")){
    Leaf27_3_Port88_oCongDrops[i11] =    Leaf27_3_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oCongDrops[i11][0] = Leaf27_3_Port88_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port88_oCongDrops[i11].includes("M")){
    Leaf27_3_Port88_oCongDrops[i11] =    Leaf27_3_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oCongDrops[i11][0] = Leaf27_3_Port88_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port88_oCongDrops[i11].includes("K")){
    Leaf27_3_Port88_oCongDrops[i11] =    Leaf27_3_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oCongDrops[i11][0] = Leaf27_3_Port88_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port88_oCongDrops[i11] =    Leaf27_3_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_oerrs[i11].includes("G")){
    Leaf27_3_Port88_oerrs[i11] =    Leaf27_3_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oerrs[i11][0] = Leaf27_3_Port88_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port88_oerrs[i11].includes("M")){
    Leaf27_3_Port88_oerrs[i11] =    Leaf27_3_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oerrs[i11][0] = Leaf27_3_Port88_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port88_oerrs[i11].includes("K")){
    Leaf27_3_Port88_oerrs[i11] =    Leaf27_3_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_oerrs[i11][0] = Leaf27_3_Port88_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port88_oerrs[i11] =    Leaf27_3_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port88_mtu_errs[i11].includes("G")){
    Leaf27_3_Port88_mtu_errs[i11] =    Leaf27_3_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_mtu_errs[i11][0] = Leaf27_3_Port88_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port88_mtu_errs[i11].includes("M")){
    Leaf27_3_Port88_mtu_errs[i11] =    Leaf27_3_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_mtu_errs[i11][0] = Leaf27_3_Port88_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port88_mtu_errs[i11].includes("K")){
    Leaf27_3_Port88_mtu_errs[i11] =    Leaf27_3_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port88_mtu_errs[i11][0] = Leaf27_3_Port88_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port88_mtu_errs[i11] =    Leaf27_3_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

    if(Leaf27_3_Port89[i11] !== undefined){ 
        Leaf27_3_Port89_fix[i11] =        Leaf27_3_Port89[i11].slice(26, 34);
        Leaf27_3_Port89_iUpkts[i11] =     Leaf27_3_Port89[i11].slice(33,40);
        Leaf27_3_Port89_iBpkts[i11] =     Leaf27_3_Port89[i11].slice(40,47);
        Leaf27_3_Port89_iMpkts[i11] =     Leaf27_3_Port89[i11].slice(47,54);
        Leaf27_3_Port89_iCongDrops[i11] = Leaf27_3_Port89[i11].slice(54,65);
        Leaf27_3_Port89_ierrs[i11] =      Leaf27_3_Port89[i11].slice(65,71);
        Leaf27_3_Port89_obytes[i11] =     Leaf27_3_Port89[i11].slice(71,78);
        Leaf27_3_Port89_oUpkts[i11] =     Leaf27_3_Port89[i11].slice(78,85);
        Leaf27_3_Port89_oBpkts[i11] =     Leaf27_3_Port89[i11].slice(85,92);
        Leaf27_3_Port89_oMpkts[i11] =     Leaf27_3_Port89[i11].slice(92,99);
        Leaf27_3_Port89_oCongDrops[i11] = Leaf27_3_Port89[i11].slice(99,110);
        Leaf27_3_Port89_oerrs[i11] =      Leaf27_3_Port89[i11].slice(110,116);
        Leaf27_3_Port89_mtu_errs[i11] =   Leaf27_3_Port89[i11].slice(116,125);
        
        if( Leaf27_3_Port89_fix[i11].includes("G")){
            Leaf27_3_Port89_fix[i11] =    Leaf27_3_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_fix[i11][0] = Leaf27_3_Port89_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_fix[i11].includes("M")){
            Leaf27_3_Port89_fix[i11] =    Leaf27_3_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_fix[i11][0] = Leaf27_3_Port89_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port89_fix[i11].includes("K")){
            Leaf27_3_Port89_fix[i11] =    Leaf27_3_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_fix[i11][0] = Leaf27_3_Port89_fix[i11][0]*1000;}
    else {  Leaf27_3_Port89_fix[i11] =    Leaf27_3_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port89_iUpkts[i11].includes("G")){
            Leaf27_3_Port89_iUpkts[i11] =    Leaf27_3_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iUpkts[i11][0] = Leaf27_3_Port89_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_iUpkts[i11].includes("M")){
            Leaf27_3_Port89_iUpkts[i11] =    Leaf27_3_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iUpkts[i11][0] = Leaf27_3_Port89_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_iUpkts[i11].includes("K")){
            Leaf27_3_Port89_iUpkts[i11] =    Leaf27_3_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iUpkts[i11][0] = Leaf27_3_Port89_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_iUpkts[i11] =    Leaf27_3_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
    
            if(Leaf27_3_Port89_iBpkts[i11].includes("G")){
            Leaf27_3_Port89_iBpkts[i11] =    Leaf27_3_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iBpkts[i11][0] = Leaf27_3_Port89_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_iBpkts[i11].includes("M")){
            Leaf27_3_Port89_iBpkts[i11] =    Leaf27_3_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iBpkts[i11][0] = Leaf27_3_Port89_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_iBpkts[i11].includes("K")){
            Leaf27_3_Port89_iBpkts[i11] =    Leaf27_3_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iBpkts[i11][0] = Leaf27_3_Port89_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_iBpkts[i11] =    Leaf27_3_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port89_iMpkts[i11].includes("G")){
            Leaf27_3_Port89_iMpkts[i11] =    Leaf27_3_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iMpkts[i11][0] = Leaf27_3_Port89_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_iMpkts[i11].includes("M")){
            Leaf27_3_Port89_iMpkts[i11] =    Leaf27_3_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iMpkts[i11][0] = Leaf27_3_Port89_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_iMpkts[i11].includes("K")){
            Leaf27_3_Port89_iMpkts[i11] =    Leaf27_3_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iMpkts[i11][0] = Leaf27_3_Port89_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_iMpkts[i11] =    Leaf27_3_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_iCongDrops[i11].includes("G")){
            Leaf27_3_Port89_iCongDrops[i11] =    Leaf27_3_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iCongDrops[i11][0] = Leaf27_3_Port89_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_iCongDrops[i11].includes("M")){
            Leaf27_3_Port89_iCongDrops[i11] =    Leaf27_3_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iCongDrops[i11][0] = Leaf27_3_Port89_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port89_iCongDrops[i11].includes("K")){
            Leaf27_3_Port89_iCongDrops[i11] =    Leaf27_3_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_iCongDrops[i11][0] = Leaf27_3_Port89_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port89_iCongDrops[i11] =    Leaf27_3_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_ierrs[i11].includes("G")){
            Leaf27_3_Port89_ierrs[i11] =    Leaf27_3_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_ierrs[i11][0] = Leaf27_3_Port89_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_ierrs[i11].includes("M")){
            Leaf27_3_Port89_ierrs[i11] =    Leaf27_3_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_ierrs[i11][0] = Leaf27_3_Port89_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port89_ierrs[i11].includes("K")){
            Leaf27_3_Port89_ierrs[i11] =    Leaf27_3_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_ierrs[i11][0] = Leaf27_3_Port89_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port89_ierrs[i11] =    Leaf27_3_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_obytes[i11].includes("G")){
            Leaf27_3_Port89_obytes[i11] =    Leaf27_3_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_obytes[i11][0] = Leaf27_3_Port89_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_obytes[i11].includes("M")){
            Leaf27_3_Port89_obytes[i11] =    Leaf27_3_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_obytes[i11][0] = Leaf27_3_Port89_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port89_obytes[i11].includes("K")){
            Leaf27_3_Port89_obytes[i11] =    Leaf27_3_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_obytes[i11][0] = Leaf27_3_Port89_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port89_obytes[i11] =    Leaf27_3_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port89_oUpkts[i11].includes("G")){
            Leaf27_3_Port89_oUpkts[i11] =    Leaf27_3_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oUpkts[i11][0] = Leaf27_3_Port89_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_oUpkts[i11].includes("M")){
            Leaf27_3_Port89_oUpkts[i11] =    Leaf27_3_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oUpkts[i11][0] = Leaf27_3_Port89_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_oUpkts[i11].includes("K")){
            Leaf27_3_Port89_oUpkts[i11] =    Leaf27_3_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oUpkts[i11][0] = Leaf27_3_Port89_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_oUpkts[i11] =    Leaf27_3_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_oBpkts[i11].includes("G")){
            Leaf27_3_Port89_oBpkts[i11] =    Leaf27_3_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oBpkts[i11][0] = Leaf27_3_Port89_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_oBpkts[i11].includes("M")){
            Leaf27_3_Port89_oBpkts[i11] =    Leaf27_3_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oBpkts[i11][0] = Leaf27_3_Port89_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_oBpkts[i11].includes("K")){
            Leaf27_3_Port89_oBpkts[i11] =    Leaf27_3_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oBpkts[i11][0] = Leaf27_3_Port89_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_oBpkts[i11] =    Leaf27_3_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port89_oMpkts[i11].includes("G")){
            Leaf27_3_Port89_oMpkts[i11] =    Leaf27_3_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oMpkts[i11][0] = Leaf27_3_Port89_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_oMpkts[i11].includes("M")){
            Leaf27_3_Port89_oMpkts[i11] =    Leaf27_3_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oMpkts[i11][0] = Leaf27_3_Port89_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port89_oMpkts[i11].includes("K")){
            Leaf27_3_Port89_oMpkts[i11] =    Leaf27_3_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oMpkts[i11][0] = Leaf27_3_Port89_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port89_oMpkts[i11] =    Leaf27_3_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_oCongDrops[i11].includes("G")){
            Leaf27_3_Port89_oCongDrops[i11] =    Leaf27_3_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oCongDrops[i11][0] = Leaf27_3_Port89_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_oCongDrops[i11].includes("M")){
            Leaf27_3_Port89_oCongDrops[i11] =    Leaf27_3_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oCongDrops[i11][0] = Leaf27_3_Port89_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port89_oCongDrops[i11].includes("K")){
            Leaf27_3_Port89_oCongDrops[i11] =    Leaf27_3_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oCongDrops[i11][0] = Leaf27_3_Port89_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port89_oCongDrops[i11] =    Leaf27_3_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port89_oerrs[i11].includes("G")){
            Leaf27_3_Port89_oerrs[i11] =    Leaf27_3_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oerrs[i11][0] = Leaf27_3_Port89_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_oerrs[i11].includes("M")){
            Leaf27_3_Port89_oerrs[i11] =    Leaf27_3_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oerrs[i11][0] = Leaf27_3_Port89_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port89_oerrs[i11].includes("K")){
            Leaf27_3_Port89_oerrs[i11] =    Leaf27_3_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_oerrs[i11][0] = Leaf27_3_Port89_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port89_oerrs[i11] =    Leaf27_3_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port89_mtu_errs[i11].includes("G")){
            Leaf27_3_Port89_mtu_errs[i11] =    Leaf27_3_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_mtu_errs[i11][0] = Leaf27_3_Port89_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port89_mtu_errs[i11].includes("M")){
            Leaf27_3_Port89_mtu_errs[i11] =    Leaf27_3_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_mtu_errs[i11][0] = Leaf27_3_Port89_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port89_mtu_errs[i11].includes("K")){
            Leaf27_3_Port89_mtu_errs[i11] =    Leaf27_3_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port89_mtu_errs[i11][0] = Leaf27_3_Port89_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port89_mtu_errs[i11] =    Leaf27_3_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }}

    if(Leaf27_3_Port90[i11] !== undefined){ 
        Leaf27_3_Port90_fix[i11] =        Leaf27_3_Port90[i11].slice(26, 34);
        Leaf27_3_Port90_iUpkts[i11] =     Leaf27_3_Port90[i11].slice(33,40);
        Leaf27_3_Port90_iBpkts[i11] =     Leaf27_3_Port90[i11].slice(40,47);
        Leaf27_3_Port90_iMpkts[i11] =     Leaf27_3_Port90[i11].slice(47,54);
        Leaf27_3_Port90_iCongDrops[i11] = Leaf27_3_Port90[i11].slice(54,65);
        Leaf27_3_Port90_ierrs[i11] =      Leaf27_3_Port90[i11].slice(65,71);
        Leaf27_3_Port90_obytes[i11] =     Leaf27_3_Port90[i11].slice(71,78);
        Leaf27_3_Port90_oUpkts[i11] =     Leaf27_3_Port90[i11].slice(78,85);
        Leaf27_3_Port90_oBpkts[i11] =     Leaf27_3_Port90[i11].slice(85,92);
        Leaf27_3_Port90_oMpkts[i11] =     Leaf27_3_Port90[i11].slice(92,99);
        Leaf27_3_Port90_oCongDrops[i11] = Leaf27_3_Port90[i11].slice(99,110);
        Leaf27_3_Port90_oerrs[i11] =      Leaf27_3_Port90[i11].slice(110,116);
        Leaf27_3_Port90_mtu_errs[i11] =   Leaf27_3_Port90[i11].slice(116,125);
        
        if( Leaf27_3_Port90_fix[i11].includes("G")){
            Leaf27_3_Port90_fix[i11] =    Leaf27_3_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_fix[i11][0] = Leaf27_3_Port90_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_fix[i11].includes("M")){
            Leaf27_3_Port90_fix[i11] =    Leaf27_3_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_fix[i11][0] = Leaf27_3_Port90_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port90_fix[i11].includes("K")){
            Leaf27_3_Port90_fix[i11] =    Leaf27_3_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_fix[i11][0] = Leaf27_3_Port90_fix[i11][0]*1000;}
    else {  Leaf27_3_Port90_fix[i11] =    Leaf27_3_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

        if( Leaf27_3_Port90_iUpkts[i11].includes("G")){
            Leaf27_3_Port90_iUpkts[i11] =    Leaf27_3_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iUpkts[i11][0] = Leaf27_3_Port90_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_iUpkts[i11].includes("M")){
            Leaf27_3_Port90_iUpkts[i11] =    Leaf27_3_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iUpkts[i11][0] = Leaf27_3_Port90_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_iUpkts[i11].includes("K")){
            Leaf27_3_Port90_iUpkts[i11] =    Leaf27_3_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iUpkts[i11][0] = Leaf27_3_Port90_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_iUpkts[i11] =    Leaf27_3_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
    
            if(Leaf27_3_Port90_iBpkts[i11].includes("G")){
            Leaf27_3_Port90_iBpkts[i11] =    Leaf27_3_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iBpkts[i11][0] = Leaf27_3_Port90_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_iBpkts[i11].includes("M")){
            Leaf27_3_Port90_iBpkts[i11] =    Leaf27_3_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iBpkts[i11][0] = Leaf27_3_Port90_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_iBpkts[i11].includes("K")){
            Leaf27_3_Port90_iBpkts[i11] =    Leaf27_3_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iBpkts[i11][0] = Leaf27_3_Port90_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_iBpkts[i11] =    Leaf27_3_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }
        
            if(Leaf27_3_Port90_iMpkts[i11].includes("G")){
            Leaf27_3_Port90_iMpkts[i11] =    Leaf27_3_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iMpkts[i11][0] = Leaf27_3_Port90_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_iMpkts[i11].includes("M")){
            Leaf27_3_Port90_iMpkts[i11] =    Leaf27_3_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iMpkts[i11][0] = Leaf27_3_Port90_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_iMpkts[i11].includes("K")){
            Leaf27_3_Port90_iMpkts[i11] =    Leaf27_3_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iMpkts[i11][0] = Leaf27_3_Port90_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_iMpkts[i11] =    Leaf27_3_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_iCongDrops[i11].includes("G")){
            Leaf27_3_Port90_iCongDrops[i11] =    Leaf27_3_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iCongDrops[i11][0] = Leaf27_3_Port90_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_iCongDrops[i11].includes("M")){
            Leaf27_3_Port90_iCongDrops[i11] =    Leaf27_3_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iCongDrops[i11][0] = Leaf27_3_Port90_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port90_iCongDrops[i11].includes("K")){
            Leaf27_3_Port90_iCongDrops[i11] =    Leaf27_3_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_iCongDrops[i11][0] = Leaf27_3_Port90_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port90_iCongDrops[i11] =    Leaf27_3_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_ierrs[i11].includes("G")){
            Leaf27_3_Port90_ierrs[i11] =    Leaf27_3_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_ierrs[i11][0] = Leaf27_3_Port90_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_ierrs[i11].includes("M")){
            Leaf27_3_Port90_ierrs[i11] =    Leaf27_3_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_ierrs[i11][0] = Leaf27_3_Port90_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port90_ierrs[i11].includes("K")){
            Leaf27_3_Port90_ierrs[i11] =    Leaf27_3_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_ierrs[i11][0] = Leaf27_3_Port90_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port90_ierrs[i11] =    Leaf27_3_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_obytes[i11].includes("G")){
            Leaf27_3_Port90_obytes[i11] =    Leaf27_3_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_obytes[i11][0] = Leaf27_3_Port90_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_obytes[i11].includes("M")){
            Leaf27_3_Port90_obytes[i11] =    Leaf27_3_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_obytes[i11][0] = Leaf27_3_Port90_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port90_obytes[i11].includes("K")){
            Leaf27_3_Port90_obytes[i11] =    Leaf27_3_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_obytes[i11][0] = Leaf27_3_Port90_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port90_obytes[i11] =    Leaf27_3_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }
        
            if(Leaf27_3_Port90_oUpkts[i11].includes("G")){
            Leaf27_3_Port90_oUpkts[i11] =    Leaf27_3_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oUpkts[i11][0] = Leaf27_3_Port90_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_oUpkts[i11].includes("M")){
            Leaf27_3_Port90_oUpkts[i11] =    Leaf27_3_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oUpkts[i11][0] = Leaf27_3_Port90_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_oUpkts[i11].includes("K")){
            Leaf27_3_Port90_oUpkts[i11] =    Leaf27_3_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oUpkts[i11][0] = Leaf27_3_Port90_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_oUpkts[i11] =    Leaf27_3_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
           }

            if(Leaf27_3_Port90_oBpkts[i11].includes("G")){
            Leaf27_3_Port90_oBpkts[i11] =    Leaf27_3_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oBpkts[i11][0] = Leaf27_3_Port90_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_oBpkts[i11].includes("M")){
            Leaf27_3_Port90_oBpkts[i11] =    Leaf27_3_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oBpkts[i11][0] = Leaf27_3_Port90_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_oBpkts[i11].includes("K")){
            Leaf27_3_Port90_oBpkts[i11] =    Leaf27_3_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oBpkts[i11][0] = Leaf27_3_Port90_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_oBpkts[i11] =    Leaf27_3_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_oMpkts[i11].includes("G")){
            Leaf27_3_Port90_oMpkts[i11] =    Leaf27_3_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oMpkts[i11][0] = Leaf27_3_Port90_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_oMpkts[i11].includes("M")){
            Leaf27_3_Port90_oMpkts[i11] =    Leaf27_3_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oMpkts[i11][0] = Leaf27_3_Port90_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port90_oMpkts[i11].includes("K")){
            Leaf27_3_Port90_oMpkts[i11] =    Leaf27_3_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oMpkts[i11][0] = Leaf27_3_Port90_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port90_oMpkts[i11] =    Leaf27_3_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_oCongDrops[i11].includes("G")){
            Leaf27_3_Port90_oCongDrops[i11] =    Leaf27_3_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oCongDrops[i11][0] = Leaf27_3_Port90_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_oCongDrops[i11].includes("M")){
            Leaf27_3_Port90_oCongDrops[i11] =    Leaf27_3_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oCongDrops[i11][0] = Leaf27_3_Port90_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port90_oCongDrops[i11].includes("K")){
            Leaf27_3_Port90_oCongDrops[i11] =    Leaf27_3_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oCongDrops[i11][0] = Leaf27_3_Port90_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port90_oCongDrops[i11] =    Leaf27_3_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_oerrs[i11].includes("G")){
            Leaf27_3_Port90_oerrs[i11] =    Leaf27_3_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oerrs[i11][0] = Leaf27_3_Port90_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_oerrs[i11].includes("M")){
            Leaf27_3_Port90_oerrs[i11] =    Leaf27_3_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oerrs[i11][0] = Leaf27_3_Port90_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port90_oerrs[i11].includes("K")){
            Leaf27_3_Port90_oerrs[i11] =    Leaf27_3_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_oerrs[i11][0] = Leaf27_3_Port90_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port90_oerrs[i11] =    Leaf27_3_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }

            if(Leaf27_3_Port90_mtu_errs[i11].includes("G")){
            Leaf27_3_Port90_mtu_errs[i11] =    Leaf27_3_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_mtu_errs[i11][0] = Leaf27_3_Port90_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port90_mtu_errs[i11].includes("M")){
            Leaf27_3_Port90_mtu_errs[i11] =    Leaf27_3_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_mtu_errs[i11][0] = Leaf27_3_Port90_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port90_mtu_errs[i11].includes("K")){
            Leaf27_3_Port90_mtu_errs[i11] =    Leaf27_3_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            Leaf27_3_Port90_mtu_errs[i11][0] = Leaf27_3_Port90_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port90_mtu_errs[i11] =    Leaf27_3_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
            }}

    if(Leaf27_3_Port91[i11] !== undefined){ 
        Leaf27_3_Port91_fix[i11] =        Leaf27_3_Port91[i11].slice(26, 34);
        Leaf27_3_Port91_iUpkts[i11] =     Leaf27_3_Port91[i11].slice(33,40);
        Leaf27_3_Port91_iBpkts[i11] =     Leaf27_3_Port91[i11].slice(40,47);
        Leaf27_3_Port91_iMpkts[i11] =     Leaf27_3_Port91[i11].slice(47,54);
        Leaf27_3_Port91_iCongDrops[i11] = Leaf27_3_Port91[i11].slice(54,65);
        Leaf27_3_Port91_ierrs[i11] =      Leaf27_3_Port91[i11].slice(65,71);
        Leaf27_3_Port91_obytes[i11] =     Leaf27_3_Port91[i11].slice(71,78);
        Leaf27_3_Port91_oUpkts[i11] =     Leaf27_3_Port91[i11].slice(78,85);
        Leaf27_3_Port91_oBpkts[i11] =     Leaf27_3_Port91[i11].slice(85,92);
        Leaf27_3_Port91_oMpkts[i11] =     Leaf27_3_Port91[i11].slice(92,99);
        Leaf27_3_Port91_oCongDrops[i11] = Leaf27_3_Port91[i11].slice(99,110);
        Leaf27_3_Port91_oerrs[i11] =      Leaf27_3_Port91[i11].slice(110,116);
        Leaf27_3_Port91_mtu_errs[i11] =   Leaf27_3_Port91[i11].slice(116,125);

    if( Leaf27_3_Port91_fix[i11].includes("G")){
        Leaf27_3_Port91_fix[i11] =    Leaf27_3_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_fix[i11][0] = Leaf27_3_Port91_fix[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_fix[i11].includes("M")){
        Leaf27_3_Port91_fix[i11] =    Leaf27_3_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_fix[i11][0] = Leaf27_3_Port91_fix[i11][0]*1000000;}
    else if(Leaf27_3_Port91_fix[i11].includes("K")){
        Leaf27_3_Port91_fix[i11] =    Leaf27_3_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_fix[i11][0] = Leaf27_3_Port91_fix[i11][0]*1000;}
    else {  Leaf27_3_Port91_fix[i11] =    Leaf27_3_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
    if( Leaf27_3_Port91_iUpkts[i11].includes("G")){
        Leaf27_3_Port91_iUpkts[i11] =    Leaf27_3_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iUpkts[i11][0] = Leaf27_3_Port91_iUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_iUpkts[i11].includes("M")){
        Leaf27_3_Port91_iUpkts[i11] =    Leaf27_3_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iUpkts[i11][0] = Leaf27_3_Port91_iUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_iUpkts[i11].includes("K")){
        Leaf27_3_Port91_iUpkts[i11] =    Leaf27_3_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iUpkts[i11][0] = Leaf27_3_Port91_iUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_iUpkts[i11] =    Leaf27_3_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_iBpkts[i11].includes("G")){
        Leaf27_3_Port91_iBpkts[i11] =    Leaf27_3_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iBpkts[i11][0] = Leaf27_3_Port91_iBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_iBpkts[i11].includes("M")){
        Leaf27_3_Port91_iBpkts[i11] =    Leaf27_3_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iBpkts[i11][0] = Leaf27_3_Port91_iBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_iBpkts[i11].includes("K")){
        Leaf27_3_Port91_iBpkts[i11] =    Leaf27_3_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iBpkts[i11][0] = Leaf27_3_Port91_iBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_iBpkts[i11] =    Leaf27_3_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_iMpkts[i11].includes("G")){
        Leaf27_3_Port91_iMpkts[i11] =    Leaf27_3_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iMpkts[i11][0] = Leaf27_3_Port91_iMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_iMpkts[i11].includes("M")){
        Leaf27_3_Port91_iMpkts[i11] =    Leaf27_3_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iMpkts[i11][0] = Leaf27_3_Port91_iMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_iMpkts[i11].includes("K")){
        Leaf27_3_Port91_iMpkts[i11] =    Leaf27_3_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iMpkts[i11][0] = Leaf27_3_Port91_iMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_iMpkts[i11] =    Leaf27_3_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_iCongDrops[i11].includes("G")){
        Leaf27_3_Port91_iCongDrops[i11] =    Leaf27_3_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iCongDrops[i11][0] = Leaf27_3_Port91_iCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_iCongDrops[i11].includes("M")){
        Leaf27_3_Port91_iCongDrops[i11] =    Leaf27_3_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iCongDrops[i11][0] = Leaf27_3_Port91_iCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port91_iCongDrops[i11].includes("K")){
        Leaf27_3_Port91_iCongDrops[i11] =    Leaf27_3_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_iCongDrops[i11][0] = Leaf27_3_Port91_iCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port91_iCongDrops[i11] =    Leaf27_3_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_ierrs[i11].includes("G")){
        Leaf27_3_Port91_ierrs[i11] =    Leaf27_3_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_ierrs[i11][0] = Leaf27_3_Port91_ierrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_ierrs[i11].includes("M")){
        Leaf27_3_Port91_ierrs[i11] =    Leaf27_3_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_ierrs[i11][0] = Leaf27_3_Port91_ierrs[i11][0]*1000000;}
    else if(Leaf27_3_Port91_ierrs[i11].includes("K")){
        Leaf27_3_Port91_ierrs[i11] =    Leaf27_3_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_ierrs[i11][0] = Leaf27_3_Port91_ierrs[i11][0]*1000;}
    else {  Leaf27_3_Port91_ierrs[i11] =    Leaf27_3_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port91_obytes[i11].includes("G")){
        Leaf27_3_Port91_obytes[i11] =    Leaf27_3_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_obytes[i11][0] = Leaf27_3_Port91_obytes[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_obytes[i11].includes("M")){
        Leaf27_3_Port91_obytes[i11] =    Leaf27_3_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_obytes[i11][0] = Leaf27_3_Port91_obytes[i11][0]*1000000;}
    else if(Leaf27_3_Port91_obytes[i11].includes("K")){
        Leaf27_3_Port91_obytes[i11] =    Leaf27_3_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_obytes[i11][0] = Leaf27_3_Port91_obytes[i11][0]*1000;}
    else {  Leaf27_3_Port91_obytes[i11] =    Leaf27_3_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port91_oUpkts[i11].includes("G")){
        Leaf27_3_Port91_oUpkts[i11] =    Leaf27_3_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oUpkts[i11][0] = Leaf27_3_Port91_oUpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_oUpkts[i11].includes("M")){
        Leaf27_3_Port91_oUpkts[i11] =    Leaf27_3_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oUpkts[i11][0] = Leaf27_3_Port91_oUpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_oUpkts[i11].includes("K")){
        Leaf27_3_Port91_oUpkts[i11] =    Leaf27_3_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oUpkts[i11][0] = Leaf27_3_Port91_oUpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_oUpkts[i11] =    Leaf27_3_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_oBpkts[i11].includes("G")){
        Leaf27_3_Port91_oBpkts[i11] =    Leaf27_3_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oBpkts[i11][0] = Leaf27_3_Port91_oBpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_oBpkts[i11].includes("M")){
        Leaf27_3_Port91_oBpkts[i11] =    Leaf27_3_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oBpkts[i11][0] = Leaf27_3_Port91_oBpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_oBpkts[i11].includes("K")){
        Leaf27_3_Port91_oBpkts[i11] =    Leaf27_3_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oBpkts[i11][0] = Leaf27_3_Port91_oBpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_oBpkts[i11] =    Leaf27_3_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port91_oMpkts[i11].includes("G")){
        Leaf27_3_Port91_oMpkts[i11] =    Leaf27_3_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oMpkts[i11][0] = Leaf27_3_Port91_oMpkts[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_oMpkts[i11].includes("M")){
        Leaf27_3_Port91_oMpkts[i11] =    Leaf27_3_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oMpkts[i11][0] = Leaf27_3_Port91_oMpkts[i11][0]*1000000;}
    else if(Leaf27_3_Port91_oMpkts[i11].includes("K")){
        Leaf27_3_Port91_oMpkts[i11] =    Leaf27_3_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oMpkts[i11][0] = Leaf27_3_Port91_oMpkts[i11][0]*1000;}
    else {  Leaf27_3_Port91_oMpkts[i11] =    Leaf27_3_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_oCongDrops[i11].includes("G")){
        Leaf27_3_Port91_oCongDrops[i11] =    Leaf27_3_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oCongDrops[i11][0] = Leaf27_3_Port91_oCongDrops[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_oCongDrops[i11].includes("M")){
        Leaf27_3_Port91_oCongDrops[i11] =    Leaf27_3_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oCongDrops[i11][0] = Leaf27_3_Port91_oCongDrops[i11][0]*1000000;}
    else if(Leaf27_3_Port91_oCongDrops[i11].includes("K")){
        Leaf27_3_Port91_oCongDrops[i11] =    Leaf27_3_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oCongDrops[i11][0] = Leaf27_3_Port91_oCongDrops[i11][0]*1000;}
    else {  Leaf27_3_Port91_oCongDrops[i11] =    Leaf27_3_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
       }
    
        if(Leaf27_3_Port91_oerrs[i11].includes("G")){
        Leaf27_3_Port91_oerrs[i11] =    Leaf27_3_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oerrs[i11][0] = Leaf27_3_Port91_oerrs[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_oerrs[i11].includes("M")){
        Leaf27_3_Port91_oerrs[i11] =    Leaf27_3_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oerrs[i11][0] = Leaf27_3_Port91_oerrs[i11][0]*1000000;}
    else if(Leaf27_3_Port91_oerrs[i11].includes("K")){
        Leaf27_3_Port91_oerrs[i11] =    Leaf27_3_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_oerrs[i11][0] = Leaf27_3_Port91_oerrs[i11][0]*1000;}
    else {  Leaf27_3_Port91_oerrs[i11] =    Leaf27_3_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }
    
        if(Leaf27_3_Port91_mtu_errs[i11].includes("G")){
        Leaf27_3_Port91_mtu_errs[i11] =    Leaf27_3_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_mtu_errs[i11][0] = Leaf27_3_Port91_mtu_errs[i11][0]*1000000000;}
    else if(Leaf27_3_Port91_mtu_errs[i11].includes("M")){
        Leaf27_3_Port91_mtu_errs[i11] =    Leaf27_3_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_mtu_errs[i11][0] = Leaf27_3_Port91_mtu_errs[i11][0]*1000000;}
    else if(Leaf27_3_Port91_mtu_errs[i11].includes("K")){
        Leaf27_3_Port91_mtu_errs[i11] =    Leaf27_3_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        Leaf27_3_Port91_mtu_errs[i11][0] = Leaf27_3_Port91_mtu_errs[i11][0]*1000;}
    else {  Leaf27_3_Port91_mtu_errs[i11] =    Leaf27_3_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
        }}

if(Leaf27_3_Port92[i11] !== undefined){ 
    Leaf27_3_Port92_fix[i11] =        Leaf27_3_Port92[i11].slice(26, 34);
    Leaf27_3_Port92_iUpkts[i11] =     Leaf27_3_Port92[i11].slice(33,40);
    Leaf27_3_Port92_iBpkts[i11] =     Leaf27_3_Port92[i11].slice(40,47);
    Leaf27_3_Port92_iMpkts[i11] =     Leaf27_3_Port92[i11].slice(47,54);
    Leaf27_3_Port92_iCongDrops[i11] = Leaf27_3_Port92[i11].slice(54,65);
    Leaf27_3_Port92_ierrs[i11] =      Leaf27_3_Port92[i11].slice(65,71);
    Leaf27_3_Port92_obytes[i11] =     Leaf27_3_Port92[i11].slice(71,78);
    Leaf27_3_Port92_oUpkts[i11] =     Leaf27_3_Port92[i11].slice(78,85);
    Leaf27_3_Port92_oBpkts[i11] =     Leaf27_3_Port92[i11].slice(85,92);
    Leaf27_3_Port92_oMpkts[i11] =     Leaf27_3_Port92[i11].slice(92,99);
    Leaf27_3_Port92_oCongDrops[i11] = Leaf27_3_Port92[i11].slice(99,110);
    Leaf27_3_Port92_oerrs[i11] =      Leaf27_3_Port92[i11].slice(110,116);
    Leaf27_3_Port92_mtu_errs[i11] =   Leaf27_3_Port92[i11].slice(116,125);

if( Leaf27_3_Port92_fix[i11].includes("G")){
    Leaf27_3_Port92_fix[i11] =    Leaf27_3_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_fix[i11][0] = Leaf27_3_Port92_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port92_fix[i11].includes("M")){
    Leaf27_3_Port92_fix[i11] =    Leaf27_3_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_fix[i11][0] = Leaf27_3_Port92_fix[i11][0]*1000000;}
else if(Leaf27_3_Port92_fix[i11].includes("K")){
    Leaf27_3_Port92_fix[i11] =    Leaf27_3_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_fix[i11][0] = Leaf27_3_Port92_fix[i11][0]*1000;}
else {  Leaf27_3_Port92_fix[i11] =    Leaf27_3_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

if( Leaf27_3_Port92_iUpkts[i11].includes("G")){
    Leaf27_3_Port92_iUpkts[i11] =    Leaf27_3_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iUpkts[i11][0] = Leaf27_3_Port92_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_iUpkts[i11].includes("M")){
    Leaf27_3_Port92_iUpkts[i11] =    Leaf27_3_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iUpkts[i11][0] = Leaf27_3_Port92_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_iUpkts[i11].includes("K")){
    Leaf27_3_Port92_iUpkts[i11] =    Leaf27_3_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iUpkts[i11][0] = Leaf27_3_Port92_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_iUpkts[i11] =    Leaf27_3_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_iBpkts[i11].includes("G")){
    Leaf27_3_Port92_iBpkts[i11] =    Leaf27_3_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iBpkts[i11][0] = Leaf27_3_Port92_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_iBpkts[i11].includes("M")){
    Leaf27_3_Port92_iBpkts[i11] =    Leaf27_3_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iBpkts[i11][0] = Leaf27_3_Port92_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_iBpkts[i11].includes("K")){
    Leaf27_3_Port92_iBpkts[i11] =    Leaf27_3_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iBpkts[i11][0] = Leaf27_3_Port92_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_iBpkts[i11] =    Leaf27_3_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_iMpkts[i11].includes("G")){
    Leaf27_3_Port92_iMpkts[i11] =    Leaf27_3_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iMpkts[i11][0] = Leaf27_3_Port92_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_iMpkts[i11].includes("M")){
    Leaf27_3_Port92_iMpkts[i11] =    Leaf27_3_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iMpkts[i11][0] = Leaf27_3_Port92_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_iMpkts[i11].includes("K")){
    Leaf27_3_Port92_iMpkts[i11] =    Leaf27_3_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iMpkts[i11][0] = Leaf27_3_Port92_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_iMpkts[i11] =    Leaf27_3_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_iCongDrops[i11].includes("G")){
    Leaf27_3_Port92_iCongDrops[i11] =    Leaf27_3_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iCongDrops[i11][0] = Leaf27_3_Port92_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port92_iCongDrops[i11].includes("M")){
    Leaf27_3_Port92_iCongDrops[i11] =    Leaf27_3_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iCongDrops[i11][0] = Leaf27_3_Port92_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port92_iCongDrops[i11].includes("K")){
    Leaf27_3_Port92_iCongDrops[i11] =    Leaf27_3_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_iCongDrops[i11][0] = Leaf27_3_Port92_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port92_iCongDrops[i11] =    Leaf27_3_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_ierrs[i11].includes("G")){
    Leaf27_3_Port92_ierrs[i11] =    Leaf27_3_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_ierrs[i11][0] = Leaf27_3_Port92_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port92_ierrs[i11].includes("M")){
    Leaf27_3_Port92_ierrs[i11] =    Leaf27_3_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_ierrs[i11][0] = Leaf27_3_Port92_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port92_ierrs[i11].includes("K")){
    Leaf27_3_Port92_ierrs[i11] =    Leaf27_3_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_ierrs[i11][0] = Leaf27_3_Port92_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port92_ierrs[i11] =    Leaf27_3_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port92_obytes[i11].includes("G")){
    Leaf27_3_Port92_obytes[i11] =    Leaf27_3_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_obytes[i11][0] = Leaf27_3_Port92_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port92_obytes[i11].includes("M")){
    Leaf27_3_Port92_obytes[i11] =    Leaf27_3_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_obytes[i11][0] = Leaf27_3_Port92_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port92_obytes[i11].includes("K")){
    Leaf27_3_Port92_obytes[i11] =    Leaf27_3_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_obytes[i11][0] = Leaf27_3_Port92_obytes[i11][0]*1000;}
else {  Leaf27_3_Port92_obytes[i11] =    Leaf27_3_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port92_oUpkts[i11].includes("G")){
    Leaf27_3_Port92_oUpkts[i11] =    Leaf27_3_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oUpkts[i11][0] = Leaf27_3_Port92_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_oUpkts[i11].includes("M")){
    Leaf27_3_Port92_oUpkts[i11] =    Leaf27_3_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oUpkts[i11][0] = Leaf27_3_Port92_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_oUpkts[i11].includes("K")){
    Leaf27_3_Port92_oUpkts[i11] =    Leaf27_3_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oUpkts[i11][0] = Leaf27_3_Port92_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_oUpkts[i11] =    Leaf27_3_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_oBpkts[i11].includes("G")){
    Leaf27_3_Port92_oBpkts[i11] =    Leaf27_3_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oBpkts[i11][0] = Leaf27_3_Port92_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_oBpkts[i11].includes("M")){
    Leaf27_3_Port92_oBpkts[i11] =    Leaf27_3_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oBpkts[i11][0] = Leaf27_3_Port92_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_oBpkts[i11].includes("K")){
    Leaf27_3_Port92_oBpkts[i11] =    Leaf27_3_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oBpkts[i11][0] = Leaf27_3_Port92_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_oBpkts[i11] =    Leaf27_3_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port92_oMpkts[i11].includes("G")){
    Leaf27_3_Port92_oMpkts[i11] =    Leaf27_3_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oMpkts[i11][0] = Leaf27_3_Port92_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port92_oMpkts[i11].includes("M")){
    Leaf27_3_Port92_oMpkts[i11] =    Leaf27_3_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oMpkts[i11][0] = Leaf27_3_Port92_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port92_oMpkts[i11].includes("K")){
    Leaf27_3_Port92_oMpkts[i11] =    Leaf27_3_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oMpkts[i11][0] = Leaf27_3_Port92_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port92_oMpkts[i11] =    Leaf27_3_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_oCongDrops[i11].includes("G")){
    Leaf27_3_Port92_oCongDrops[i11] =    Leaf27_3_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oCongDrops[i11][0] = Leaf27_3_Port92_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port92_oCongDrops[i11].includes("M")){
    Leaf27_3_Port92_oCongDrops[i11] =    Leaf27_3_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oCongDrops[i11][0] = Leaf27_3_Port92_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port92_oCongDrops[i11].includes("K")){
    Leaf27_3_Port92_oCongDrops[i11] =    Leaf27_3_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oCongDrops[i11][0] = Leaf27_3_Port92_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port92_oCongDrops[i11] =    Leaf27_3_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port92_oerrs[i11].includes("G")){
    Leaf27_3_Port92_oerrs[i11] =    Leaf27_3_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oerrs[i11][0] = Leaf27_3_Port92_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port92_oerrs[i11].includes("M")){
    Leaf27_3_Port92_oerrs[i11] =    Leaf27_3_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oerrs[i11][0] = Leaf27_3_Port92_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port92_oerrs[i11].includes("K")){
    Leaf27_3_Port92_oerrs[i11] =    Leaf27_3_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_oerrs[i11][0] = Leaf27_3_Port92_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port92_oerrs[i11] =    Leaf27_3_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port92_mtu_errs[i11].includes("G")){
    Leaf27_3_Port92_mtu_errs[i11] =    Leaf27_3_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_mtu_errs[i11][0] = Leaf27_3_Port92_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port92_mtu_errs[i11].includes("M")){
    Leaf27_3_Port92_mtu_errs[i11] =    Leaf27_3_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_mtu_errs[i11][0] = Leaf27_3_Port92_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port92_mtu_errs[i11].includes("K")){
    Leaf27_3_Port92_mtu_errs[i11] =    Leaf27_3_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port92_mtu_errs[i11][0] = Leaf27_3_Port92_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port92_mtu_errs[i11] =    Leaf27_3_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}


if(Leaf27_3_Port93[i11] !== undefined){ 
    Leaf27_3_Port93_fix[i11] =        Leaf27_3_Port93[i11].slice(26, 34);
    Leaf27_3_Port93_iUpkts[i11] =     Leaf27_3_Port93[i11].slice(33,40);
    Leaf27_3_Port93_iBpkts[i11] =     Leaf27_3_Port93[i11].slice(40,47);
    Leaf27_3_Port93_iMpkts[i11] =     Leaf27_3_Port93[i11].slice(47,54);
    Leaf27_3_Port93_iCongDrops[i11] = Leaf27_3_Port93[i11].slice(54,65);
    Leaf27_3_Port93_ierrs[i11] =      Leaf27_3_Port93[i11].slice(65,71);
    Leaf27_3_Port93_obytes[i11] =     Leaf27_3_Port93[i11].slice(71,78);
    Leaf27_3_Port93_oUpkts[i11] =     Leaf27_3_Port93[i11].slice(78,85);
    Leaf27_3_Port93_oBpkts[i11] =     Leaf27_3_Port93[i11].slice(85,92);
    Leaf27_3_Port93_oMpkts[i11] =     Leaf27_3_Port93[i11].slice(92,99);
    Leaf27_3_Port93_oCongDrops[i11] = Leaf27_3_Port93[i11].slice(99,110);
    Leaf27_3_Port93_oerrs[i11] =      Leaf27_3_Port93[i11].slice(110,116);
    Leaf27_3_Port93_mtu_errs[i11] =   Leaf27_3_Port93[i11].slice(116,125);

if( Leaf27_3_Port93_fix[i11].includes("G")){
    Leaf27_3_Port93_fix[i11] =    Leaf27_3_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_fix[i11][0] = Leaf27_3_Port93_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port93_fix[i11].includes("M")){
    Leaf27_3_Port93_fix[i11] =    Leaf27_3_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_fix[i11][0] = Leaf27_3_Port93_fix[i11][0]*1000000;}
else if(Leaf27_3_Port93_fix[i11].includes("K")){
    Leaf27_3_Port93_fix[i11] =    Leaf27_3_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_fix[i11][0] = Leaf27_3_Port93_fix[i11][0]*1000;}
else {  Leaf27_3_Port93_fix[i11] =    Leaf27_3_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port93_iUpkts[i11].includes("G")){
    Leaf27_3_Port93_iUpkts[i11] =    Leaf27_3_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iUpkts[i11][0] = Leaf27_3_Port93_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_iUpkts[i11].includes("M")){
    Leaf27_3_Port93_iUpkts[i11] =    Leaf27_3_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iUpkts[i11][0] = Leaf27_3_Port93_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_iUpkts[i11].includes("K")){
    Leaf27_3_Port93_iUpkts[i11] =    Leaf27_3_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iUpkts[i11][0] = Leaf27_3_Port93_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_iUpkts[i11] =    Leaf27_3_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port93_iBpkts[i11].includes("G")){
    Leaf27_3_Port93_iBpkts[i11] =    Leaf27_3_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iBpkts[i11][0] = Leaf27_3_Port93_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_iBpkts[i11].includes("M")){
    Leaf27_3_Port93_iBpkts[i11] =    Leaf27_3_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iBpkts[i11][0] = Leaf27_3_Port93_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_iBpkts[i11].includes("K")){
    Leaf27_3_Port93_iBpkts[i11] =    Leaf27_3_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iBpkts[i11][0] = Leaf27_3_Port93_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_iBpkts[i11] =    Leaf27_3_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_iMpkts[i11].includes("G")){
    Leaf27_3_Port93_iMpkts[i11] =    Leaf27_3_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iMpkts[i11][0] = Leaf27_3_Port93_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_iMpkts[i11].includes("M")){
    Leaf27_3_Port93_iMpkts[i11] =    Leaf27_3_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iMpkts[i11][0] = Leaf27_3_Port93_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_iMpkts[i11].includes("K")){
    Leaf27_3_Port93_iMpkts[i11] =    Leaf27_3_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iMpkts[i11][0] = Leaf27_3_Port93_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_iMpkts[i11] =    Leaf27_3_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_iCongDrops[i11].includes("G")){
    Leaf27_3_Port93_iCongDrops[i11] =    Leaf27_3_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iCongDrops[i11][0] = Leaf27_3_Port93_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port93_iCongDrops[i11].includes("M")){
    Leaf27_3_Port93_iCongDrops[i11] =    Leaf27_3_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iCongDrops[i11][0] = Leaf27_3_Port93_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port93_iCongDrops[i11].includes("K")){
    Leaf27_3_Port93_iCongDrops[i11] =    Leaf27_3_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_iCongDrops[i11][0] = Leaf27_3_Port93_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port93_iCongDrops[i11] =    Leaf27_3_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_ierrs[i11].includes("G")){
    Leaf27_3_Port93_ierrs[i11] =    Leaf27_3_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_ierrs[i11][0] = Leaf27_3_Port93_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port93_ierrs[i11].includes("M")){
    Leaf27_3_Port93_ierrs[i11] =    Leaf27_3_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_ierrs[i11][0] = Leaf27_3_Port93_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port93_ierrs[i11].includes("K")){
    Leaf27_3_Port93_ierrs[i11] =    Leaf27_3_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_ierrs[i11][0] = Leaf27_3_Port93_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port93_ierrs[i11] =    Leaf27_3_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port93_obytes[i11].includes("G")){
    Leaf27_3_Port93_obytes[i11] =    Leaf27_3_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_obytes[i11][0] = Leaf27_3_Port93_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port93_obytes[i11].includes("M")){
    Leaf27_3_Port93_obytes[i11] =    Leaf27_3_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_obytes[i11][0] = Leaf27_3_Port93_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port93_obytes[i11].includes("K")){
    Leaf27_3_Port93_obytes[i11] =    Leaf27_3_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_obytes[i11][0] = Leaf27_3_Port93_obytes[i11][0]*1000;}
else {  Leaf27_3_Port93_obytes[i11] =    Leaf27_3_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port93_oUpkts[i11].includes("G")){
    Leaf27_3_Port93_oUpkts[i11] =    Leaf27_3_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oUpkts[i11][0] = Leaf27_3_Port93_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_oUpkts[i11].includes("M")){
    Leaf27_3_Port93_oUpkts[i11] =    Leaf27_3_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oUpkts[i11][0] = Leaf27_3_Port93_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_oUpkts[i11].includes("K")){
    Leaf27_3_Port93_oUpkts[i11] =    Leaf27_3_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oUpkts[i11][0] = Leaf27_3_Port93_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_oUpkts[i11] =    Leaf27_3_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_oBpkts[i11].includes("G")){
    Leaf27_3_Port93_oBpkts[i11] =    Leaf27_3_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oBpkts[i11][0] = Leaf27_3_Port93_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_oBpkts[i11].includes("M")){
    Leaf27_3_Port93_oBpkts[i11] =    Leaf27_3_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oBpkts[i11][0] = Leaf27_3_Port93_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_oBpkts[i11].includes("K")){
    Leaf27_3_Port93_oBpkts[i11] =    Leaf27_3_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oBpkts[i11][0] = Leaf27_3_Port93_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_oBpkts[i11] =    Leaf27_3_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port93_oMpkts[i11].includes("G")){
    Leaf27_3_Port93_oMpkts[i11] =    Leaf27_3_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oMpkts[i11][0] = Leaf27_3_Port93_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port93_oMpkts[i11].includes("M")){
    Leaf27_3_Port93_oMpkts[i11] =    Leaf27_3_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oMpkts[i11][0] = Leaf27_3_Port93_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port93_oMpkts[i11].includes("K")){
    Leaf27_3_Port93_oMpkts[i11] =    Leaf27_3_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oMpkts[i11][0] = Leaf27_3_Port93_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port93_oMpkts[i11] =    Leaf27_3_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port93_oCongDrops[i11].includes("G")){
    Leaf27_3_Port93_oCongDrops[i11] =    Leaf27_3_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oCongDrops[i11][0] = Leaf27_3_Port93_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port93_oCongDrops[i11].includes("M")){
    Leaf27_3_Port93_oCongDrops[i11] =    Leaf27_3_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oCongDrops[i11][0] = Leaf27_3_Port93_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port93_oCongDrops[i11].includes("K")){
    Leaf27_3_Port93_oCongDrops[i11] =    Leaf27_3_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oCongDrops[i11][0] = Leaf27_3_Port93_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port93_oCongDrops[i11] =    Leaf27_3_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_oerrs[i11].includes("G")){
    Leaf27_3_Port93_oerrs[i11] =    Leaf27_3_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oerrs[i11][0] = Leaf27_3_Port93_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port93_oerrs[i11].includes("M")){
    Leaf27_3_Port93_oerrs[i11] =    Leaf27_3_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oerrs[i11][0] = Leaf27_3_Port93_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port93_oerrs[i11].includes("K")){
    Leaf27_3_Port93_oerrs[i11] =    Leaf27_3_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_oerrs[i11][0] = Leaf27_3_Port93_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port93_oerrs[i11] =    Leaf27_3_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port93_mtu_errs[i11].includes("G")){
    Leaf27_3_Port93_mtu_errs[i11] =    Leaf27_3_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_mtu_errs[i11][0] = Leaf27_3_Port93_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port93_mtu_errs[i11].includes("M")){
    Leaf27_3_Port93_mtu_errs[i11] =    Leaf27_3_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_mtu_errs[i11][0] = Leaf27_3_Port93_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port93_mtu_errs[i11].includes("K")){
    Leaf27_3_Port93_mtu_errs[i11] =    Leaf27_3_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port93_mtu_errs[i11][0] = Leaf27_3_Port93_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port93_mtu_errs[i11] =    Leaf27_3_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

if(Leaf27_3_Port94[i11] !== undefined){ 
    Leaf27_3_Port94_fix[i11] =        Leaf27_3_Port94[i11].slice(26, 34);
    Leaf27_3_Port94_iUpkts[i11] =     Leaf27_3_Port94[i11].slice(33,40);
    Leaf27_3_Port94_iBpkts[i11] =     Leaf27_3_Port94[i11].slice(40,47);
    Leaf27_3_Port94_iMpkts[i11] =     Leaf27_3_Port94[i11].slice(47,54);
    Leaf27_3_Port94_iCongDrops[i11] = Leaf27_3_Port94[i11].slice(54,65);
    Leaf27_3_Port94_ierrs[i11] =      Leaf27_3_Port94[i11].slice(65,71);
    Leaf27_3_Port94_obytes[i11] =     Leaf27_3_Port94[i11].slice(71,78);
    Leaf27_3_Port94_oUpkts[i11] =     Leaf27_3_Port94[i11].slice(78,85);
    Leaf27_3_Port94_oBpkts[i11] =     Leaf27_3_Port94[i11].slice(85,92);
    Leaf27_3_Port94_oMpkts[i11] =     Leaf27_3_Port94[i11].slice(92,99);
    Leaf27_3_Port94_oCongDrops[i11] = Leaf27_3_Port94[i11].slice(99,110);
    Leaf27_3_Port94_oerrs[i11] =      Leaf27_3_Port94[i11].slice(110,116);
    Leaf27_3_Port94_mtu_errs[i11] =   Leaf27_3_Port94[i11].slice(116,125);

if( Leaf27_3_Port94_fix[i11].includes("G")){
    Leaf27_3_Port94_fix[i11] =    Leaf27_3_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_fix[i11][0] = Leaf27_3_Port94_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port94_fix[i11].includes("M")){
    Leaf27_3_Port94_fix[i11] =    Leaf27_3_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_fix[i11][0] = Leaf27_3_Port94_fix[i11][0]*1000000;}
else if(Leaf27_3_Port94_fix[i11].includes("K")){
    Leaf27_3_Port94_fix[i11] =    Leaf27_3_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_fix[i11][0] = Leaf27_3_Port94_fix[i11][0]*1000;}
else {  Leaf27_3_Port94_fix[i11] =    Leaf27_3_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port94_iUpkts[i11].includes("G")){
    Leaf27_3_Port94_iUpkts[i11] =    Leaf27_3_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iUpkts[i11][0] = Leaf27_3_Port94_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_iUpkts[i11].includes("M")){
    Leaf27_3_Port94_iUpkts[i11] =    Leaf27_3_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iUpkts[i11][0] = Leaf27_3_Port94_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_iUpkts[i11].includes("K")){
    Leaf27_3_Port94_iUpkts[i11] =    Leaf27_3_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iUpkts[i11][0] = Leaf27_3_Port94_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_iUpkts[i11] =    Leaf27_3_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_iBpkts[i11].includes("G")){
    Leaf27_3_Port94_iBpkts[i11] =    Leaf27_3_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iBpkts[i11][0] = Leaf27_3_Port94_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_iBpkts[i11].includes("M")){
    Leaf27_3_Port94_iBpkts[i11] =    Leaf27_3_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iBpkts[i11][0] = Leaf27_3_Port94_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_iBpkts[i11].includes("K")){
    Leaf27_3_Port94_iBpkts[i11] =    Leaf27_3_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iBpkts[i11][0] = Leaf27_3_Port94_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_iBpkts[i11] =    Leaf27_3_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_iMpkts[i11].includes("G")){
    Leaf27_3_Port94_iMpkts[i11] =    Leaf27_3_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iMpkts[i11][0] = Leaf27_3_Port94_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_iMpkts[i11].includes("M")){
    Leaf27_3_Port94_iMpkts[i11] =    Leaf27_3_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iMpkts[i11][0] = Leaf27_3_Port94_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_iMpkts[i11].includes("K")){
    Leaf27_3_Port94_iMpkts[i11] =    Leaf27_3_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iMpkts[i11][0] = Leaf27_3_Port94_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_iMpkts[i11] =    Leaf27_3_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_iCongDrops[i11].includes("G")){
    Leaf27_3_Port94_iCongDrops[i11] =    Leaf27_3_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iCongDrops[i11][0] = Leaf27_3_Port94_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port94_iCongDrops[i11].includes("M")){
    Leaf27_3_Port94_iCongDrops[i11] =    Leaf27_3_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iCongDrops[i11][0] = Leaf27_3_Port94_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port94_iCongDrops[i11].includes("K")){
    Leaf27_3_Port94_iCongDrops[i11] =    Leaf27_3_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_iCongDrops[i11][0] = Leaf27_3_Port94_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port94_iCongDrops[i11] =    Leaf27_3_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_ierrs[i11].includes("G")){
    Leaf27_3_Port94_ierrs[i11] =    Leaf27_3_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_ierrs[i11][0] = Leaf27_3_Port94_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port94_ierrs[i11].includes("M")){
    Leaf27_3_Port94_ierrs[i11] =    Leaf27_3_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_ierrs[i11][0] = Leaf27_3_Port94_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port94_ierrs[i11].includes("K")){
    Leaf27_3_Port94_ierrs[i11] =    Leaf27_3_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_ierrs[i11][0] = Leaf27_3_Port94_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port94_ierrs[i11] =    Leaf27_3_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port94_obytes[i11].includes("G")){
    Leaf27_3_Port94_obytes[i11] =    Leaf27_3_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_obytes[i11][0] = Leaf27_3_Port94_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port94_obytes[i11].includes("M")){
    Leaf27_3_Port94_obytes[i11] =    Leaf27_3_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_obytes[i11][0] = Leaf27_3_Port94_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port94_obytes[i11].includes("K")){
    Leaf27_3_Port94_obytes[i11] =    Leaf27_3_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_obytes[i11][0] = Leaf27_3_Port94_obytes[i11][0]*1000;}
else {  Leaf27_3_Port94_obytes[i11] =    Leaf27_3_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_oUpkts[i11].includes("G")){
    Leaf27_3_Port94_oUpkts[i11] =    Leaf27_3_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oUpkts[i11][0] = Leaf27_3_Port94_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_oUpkts[i11].includes("M")){
    Leaf27_3_Port94_oUpkts[i11] =    Leaf27_3_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oUpkts[i11][0] = Leaf27_3_Port94_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_oUpkts[i11].includes("K")){
    Leaf27_3_Port94_oUpkts[i11] =    Leaf27_3_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oUpkts[i11][0] = Leaf27_3_Port94_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_oUpkts[i11] =    Leaf27_3_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port94_oBpkts[i11].includes("G")){
    Leaf27_3_Port94_oBpkts[i11] =    Leaf27_3_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oBpkts[i11][0] = Leaf27_3_Port94_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_oBpkts[i11].includes("M")){
    Leaf27_3_Port94_oBpkts[i11] =    Leaf27_3_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oBpkts[i11][0] = Leaf27_3_Port94_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_oBpkts[i11].includes("K")){
    Leaf27_3_Port94_oBpkts[i11] =    Leaf27_3_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oBpkts[i11][0] = Leaf27_3_Port94_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_oBpkts[i11] =    Leaf27_3_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port94_oMpkts[i11].includes("G")){
    Leaf27_3_Port94_oMpkts[i11] =    Leaf27_3_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oMpkts[i11][0] = Leaf27_3_Port94_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port94_oMpkts[i11].includes("M")){
    Leaf27_3_Port94_oMpkts[i11] =    Leaf27_3_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oMpkts[i11][0] = Leaf27_3_Port94_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port94_oMpkts[i11].includes("K")){
    Leaf27_3_Port94_oMpkts[i11] =    Leaf27_3_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oMpkts[i11][0] = Leaf27_3_Port94_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port94_oMpkts[i11] =    Leaf27_3_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port94_oCongDrops[i11].includes("G")){
    Leaf27_3_Port94_oCongDrops[i11] =    Leaf27_3_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oCongDrops[i11][0] = Leaf27_3_Port94_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port94_oCongDrops[i11].includes("M")){
    Leaf27_3_Port94_oCongDrops[i11] =    Leaf27_3_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oCongDrops[i11][0] = Leaf27_3_Port94_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port94_oCongDrops[i11].includes("K")){
    Leaf27_3_Port94_oCongDrops[i11] =    Leaf27_3_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oCongDrops[i11][0] = Leaf27_3_Port94_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port94_oCongDrops[i11] =    Leaf27_3_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_oerrs[i11].includes("G")){
    Leaf27_3_Port94_oerrs[i11] =    Leaf27_3_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oerrs[i11][0] = Leaf27_3_Port94_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port94_oerrs[i11].includes("M")){
    Leaf27_3_Port94_oerrs[i11] =    Leaf27_3_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oerrs[i11][0] = Leaf27_3_Port94_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port94_oerrs[i11].includes("K")){
    Leaf27_3_Port94_oerrs[i11] =    Leaf27_3_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_oerrs[i11][0] = Leaf27_3_Port94_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port94_oerrs[i11] =    Leaf27_3_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port94_mtu_errs[i11].includes("G")){
    Leaf27_3_Port94_mtu_errs[i11] =    Leaf27_3_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_mtu_errs[i11][0] = Leaf27_3_Port94_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port94_mtu_errs[i11].includes("M")){
    Leaf27_3_Port94_mtu_errs[i11] =    Leaf27_3_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_mtu_errs[i11][0] = Leaf27_3_Port94_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port94_mtu_errs[i11].includes("K")){
    Leaf27_3_Port94_mtu_errs[i11] =    Leaf27_3_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port94_mtu_errs[i11][0] = Leaf27_3_Port94_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port94_mtu_errs[i11] =    Leaf27_3_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}
    
if(Leaf27_3_Port95[i11] !== undefined){ 
    Leaf27_3_Port95_fix[i11] =        Leaf27_3_Port95[i11].slice(26, 34);
    Leaf27_3_Port95_iUpkts[i11] =     Leaf27_3_Port95[i11].slice(33,40);
    Leaf27_3_Port95_iBpkts[i11] =     Leaf27_3_Port95[i11].slice(40,47);
    Leaf27_3_Port95_iMpkts[i11] =     Leaf27_3_Port95[i11].slice(47,54);
    Leaf27_3_Port95_iCongDrops[i11] = Leaf27_3_Port95[i11].slice(54,65);
    Leaf27_3_Port95_ierrs[i11] =      Leaf27_3_Port95[i11].slice(65,71);
    Leaf27_3_Port95_obytes[i11] =     Leaf27_3_Port95[i11].slice(71,78);
    Leaf27_3_Port95_oUpkts[i11] =     Leaf27_3_Port95[i11].slice(78,85);
    Leaf27_3_Port95_oBpkts[i11] =     Leaf27_3_Port95[i11].slice(85,92);
    Leaf27_3_Port95_oMpkts[i11] =     Leaf27_3_Port95[i11].slice(92,99);
    Leaf27_3_Port95_oCongDrops[i11] = Leaf27_3_Port95[i11].slice(99,110);
    Leaf27_3_Port95_oerrs[i11] =      Leaf27_3_Port95[i11].slice(110,116);
    Leaf27_3_Port95_mtu_errs[i11] =   Leaf27_3_Port95[i11].slice(116,125);

if( Leaf27_3_Port95_fix[i11].includes("G")){
    Leaf27_3_Port95_fix[i11] =    Leaf27_3_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_fix[i11][0] = Leaf27_3_Port95_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port95_fix[i11].includes("M")){
    Leaf27_3_Port95_fix[i11] =    Leaf27_3_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_fix[i11][0] = Leaf27_3_Port95_fix[i11][0]*1000000;}
else if(Leaf27_3_Port95_fix[i11].includes("K")){
    Leaf27_3_Port95_fix[i11] =    Leaf27_3_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_fix[i11][0] = Leaf27_3_Port95_fix[i11][0]*1000;}
else {  Leaf27_3_Port95_fix[i11] =    Leaf27_3_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

if( Leaf27_3_Port95_iUpkts[i11].includes("G")){
    Leaf27_3_Port95_iUpkts[i11] =    Leaf27_3_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iUpkts[i11][0] = Leaf27_3_Port95_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_iUpkts[i11].includes("M")){
    Leaf27_3_Port95_iUpkts[i11] =    Leaf27_3_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iUpkts[i11][0] = Leaf27_3_Port95_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_iUpkts[i11].includes("K")){
    Leaf27_3_Port95_iUpkts[i11] =    Leaf27_3_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iUpkts[i11][0] = Leaf27_3_Port95_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_iUpkts[i11] =    Leaf27_3_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port95_iBpkts[i11].includes("G")){
    Leaf27_3_Port95_iBpkts[i11] =    Leaf27_3_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iBpkts[i11][0] = Leaf27_3_Port95_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_iBpkts[i11].includes("M")){
    Leaf27_3_Port95_iBpkts[i11] =    Leaf27_3_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iBpkts[i11][0] = Leaf27_3_Port95_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_iBpkts[i11].includes("K")){
    Leaf27_3_Port95_iBpkts[i11] =    Leaf27_3_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iBpkts[i11][0] = Leaf27_3_Port95_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_iBpkts[i11] =    Leaf27_3_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port95_iMpkts[i11].includes("G")){
    Leaf27_3_Port95_iMpkts[i11] =    Leaf27_3_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iMpkts[i11][0] = Leaf27_3_Port95_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_iMpkts[i11].includes("M")){
    Leaf27_3_Port95_iMpkts[i11] =    Leaf27_3_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iMpkts[i11][0] = Leaf27_3_Port95_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_iMpkts[i11].includes("K")){
    Leaf27_3_Port95_iMpkts[i11] =    Leaf27_3_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iMpkts[i11][0] = Leaf27_3_Port95_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_iMpkts[i11] =    Leaf27_3_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port95_iCongDrops[i11].includes("G")){
    Leaf27_3_Port95_iCongDrops[i11] =    Leaf27_3_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iCongDrops[i11][0] = Leaf27_3_Port95_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port95_iCongDrops[i11].includes("M")){
    Leaf27_3_Port95_iCongDrops[i11] =    Leaf27_3_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iCongDrops[i11][0] = Leaf27_3_Port95_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port95_iCongDrops[i11].includes("K")){
    Leaf27_3_Port95_iCongDrops[i11] =    Leaf27_3_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_iCongDrops[i11][0] = Leaf27_3_Port95_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port95_iCongDrops[i11] =    Leaf27_3_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port95_ierrs[i11].includes("G")){
    Leaf27_3_Port95_ierrs[i11] =    Leaf27_3_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_ierrs[i11][0] = Leaf27_3_Port95_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port95_ierrs[i11].includes("M")){
    Leaf27_3_Port95_ierrs[i11] =    Leaf27_3_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_ierrs[i11][0] = Leaf27_3_Port95_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port95_ierrs[i11].includes("K")){
    Leaf27_3_Port95_ierrs[i11] =    Leaf27_3_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_ierrs[i11][0] = Leaf27_3_Port95_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port95_ierrs[i11] =    Leaf27_3_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port95_obytes[i11].includes("G")){
    Leaf27_3_Port95_obytes[i11] =    Leaf27_3_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_obytes[i11][0] = Leaf27_3_Port95_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port95_obytes[i11].includes("M")){
    Leaf27_3_Port95_obytes[i11] =    Leaf27_3_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_obytes[i11][0] = Leaf27_3_Port95_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port95_obytes[i11].includes("K")){
    Leaf27_3_Port95_obytes[i11] =    Leaf27_3_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_obytes[i11][0] = Leaf27_3_Port95_obytes[i11][0]*1000;}
else {  Leaf27_3_Port95_obytes[i11] =    Leaf27_3_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port95_oUpkts[i11].includes("G")){
    Leaf27_3_Port95_oUpkts[i11] =    Leaf27_3_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oUpkts[i11][0] = Leaf27_3_Port95_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_oUpkts[i11].includes("M")){
    Leaf27_3_Port95_oUpkts[i11] =    Leaf27_3_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oUpkts[i11][0] = Leaf27_3_Port95_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_oUpkts[i11].includes("K")){
    Leaf27_3_Port95_oUpkts[i11] =    Leaf27_3_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oUpkts[i11][0] = Leaf27_3_Port95_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_oUpkts[i11] =    Leaf27_3_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port95_oBpkts[i11].includes("G")){
    Leaf27_3_Port95_oBpkts[i11] =    Leaf27_3_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oBpkts[i11][0] = Leaf27_3_Port95_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_oBpkts[i11].includes("M")){
    Leaf27_3_Port95_oBpkts[i11] =    Leaf27_3_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oBpkts[i11][0] = Leaf27_3_Port95_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_oBpkts[i11].includes("K")){
    Leaf27_3_Port95_oBpkts[i11] =    Leaf27_3_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oBpkts[i11][0] = Leaf27_3_Port95_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_oBpkts[i11] =    Leaf27_3_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port95_oMpkts[i11].includes("G")){
    Leaf27_3_Port95_oMpkts[i11] =    Leaf27_3_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oMpkts[i11][0] = Leaf27_3_Port95_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port95_oMpkts[i11].includes("M")){
    Leaf27_3_Port95_oMpkts[i11] =    Leaf27_3_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oMpkts[i11][0] = Leaf27_3_Port95_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port95_oMpkts[i11].includes("K")){
    Leaf27_3_Port95_oMpkts[i11] =    Leaf27_3_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oMpkts[i11][0] = Leaf27_3_Port95_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port95_oMpkts[i11] =    Leaf27_3_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port95_oCongDrops[i11].includes("G")){
    Leaf27_3_Port95_oCongDrops[i11] =    Leaf27_3_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oCongDrops[i11][0] = Leaf27_3_Port95_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port95_oCongDrops[i11].includes("M")){
    Leaf27_3_Port95_oCongDrops[i11] =    Leaf27_3_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oCongDrops[i11][0] = Leaf27_3_Port95_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port95_oCongDrops[i11].includes("K")){
    Leaf27_3_Port95_oCongDrops[i11] =    Leaf27_3_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oCongDrops[i11][0] = Leaf27_3_Port95_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port95_oCongDrops[i11] =    Leaf27_3_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port95_oerrs[i11].includes("G")){
    Leaf27_3_Port95_oerrs[i11] =    Leaf27_3_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oerrs[i11][0] = Leaf27_3_Port95_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port95_oerrs[i11].includes("M")){
    Leaf27_3_Port95_oerrs[i11] =    Leaf27_3_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oerrs[i11][0] = Leaf27_3_Port95_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port95_oerrs[i11].includes("K")){
    Leaf27_3_Port95_oerrs[i11] =    Leaf27_3_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_oerrs[i11][0] = Leaf27_3_Port95_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port95_oerrs[i11] =    Leaf27_3_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port95_mtu_errs[i11].includes("G")){
    Leaf27_3_Port95_mtu_errs[i11] =    Leaf27_3_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_mtu_errs[i11][0] = Leaf27_3_Port95_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port95_mtu_errs[i11].includes("M")){
    Leaf27_3_Port95_mtu_errs[i11] =    Leaf27_3_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_mtu_errs[i11][0] = Leaf27_3_Port95_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port95_mtu_errs[i11].includes("K")){
    Leaf27_3_Port95_mtu_errs[i11] =    Leaf27_3_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port95_mtu_errs[i11][0] = Leaf27_3_Port95_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port95_mtu_errs[i11] =    Leaf27_3_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}            

if(Leaf27_3_Port96[i11] !== undefined){ 
    Leaf27_3_Port96_fix[i11] =        Leaf27_3_Port96[i11].slice(26, 34);
    Leaf27_3_Port96_iUpkts[i11] =     Leaf27_3_Port96[i11].slice(33,40);
    Leaf27_3_Port96_iBpkts[i11] =     Leaf27_3_Port96[i11].slice(40,47);
    Leaf27_3_Port96_iMpkts[i11] =     Leaf27_3_Port96[i11].slice(47,54);
    Leaf27_3_Port96_iCongDrops[i11] = Leaf27_3_Port96[i11].slice(54,65);
    Leaf27_3_Port96_ierrs[i11] =      Leaf27_3_Port96[i11].slice(65,71);
    Leaf27_3_Port96_obytes[i11] =     Leaf27_3_Port96[i11].slice(71,78);
    Leaf27_3_Port96_oUpkts[i11] =     Leaf27_3_Port96[i11].slice(78,85);
    Leaf27_3_Port96_oBpkts[i11] =     Leaf27_3_Port96[i11].slice(85,92);
    Leaf27_3_Port96_oMpkts[i11] =     Leaf27_3_Port96[i11].slice(92,99);
    Leaf27_3_Port96_oCongDrops[i11] = Leaf27_3_Port96[i11].slice(99,110);
    Leaf27_3_Port96_oerrs[i11] =      Leaf27_3_Port96[i11].slice(110,116);
    Leaf27_3_Port96_mtu_errs[i11] =   Leaf27_3_Port96[i11].slice(116,125);

if( Leaf27_3_Port96_fix[i11].includes("G")){
    Leaf27_3_Port96_fix[i11] =    Leaf27_3_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_fix[i11][0] = Leaf27_3_Port96_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port96_fix[i11].includes("M")){
    Leaf27_3_Port96_fix[i11] =    Leaf27_3_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_fix[i11][0] = Leaf27_3_Port96_fix[i11][0]*1000000;}
else if(Leaf27_3_Port96_fix[i11].includes("K")){
    Leaf27_3_Port96_fix[i11] =    Leaf27_3_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_fix[i11][0] = Leaf27_3_Port96_fix[i11][0]*1000;}
else {  Leaf27_3_Port96_fix[i11] =    Leaf27_3_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port96_iUpkts[i11].includes("G")){
    Leaf27_3_Port96_iUpkts[i11] =    Leaf27_3_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iUpkts[i11][0] = Leaf27_3_Port96_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_iUpkts[i11].includes("M")){
    Leaf27_3_Port96_iUpkts[i11] =    Leaf27_3_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iUpkts[i11][0] = Leaf27_3_Port96_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_iUpkts[i11].includes("K")){
    Leaf27_3_Port96_iUpkts[i11] =    Leaf27_3_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iUpkts[i11][0] = Leaf27_3_Port96_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_iUpkts[i11] =    Leaf27_3_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port96_iBpkts[i11].includes("G")){
    Leaf27_3_Port96_iBpkts[i11] =    Leaf27_3_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iBpkts[i11][0] = Leaf27_3_Port96_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_iBpkts[i11].includes("M")){
    Leaf27_3_Port96_iBpkts[i11] =    Leaf27_3_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iBpkts[i11][0] = Leaf27_3_Port96_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_iBpkts[i11].includes("K")){
    Leaf27_3_Port96_iBpkts[i11] =    Leaf27_3_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iBpkts[i11][0] = Leaf27_3_Port96_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_iBpkts[i11] =    Leaf27_3_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port96_iMpkts[i11].includes("G")){
    Leaf27_3_Port96_iMpkts[i11] =    Leaf27_3_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iMpkts[i11][0] = Leaf27_3_Port96_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_iMpkts[i11].includes("M")){
    Leaf27_3_Port96_iMpkts[i11] =    Leaf27_3_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iMpkts[i11][0] = Leaf27_3_Port96_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_iMpkts[i11].includes("K")){
    Leaf27_3_Port96_iMpkts[i11] =    Leaf27_3_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iMpkts[i11][0] = Leaf27_3_Port96_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_iMpkts[i11] =    Leaf27_3_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port96_iCongDrops[i11].includes("G")){
    Leaf27_3_Port96_iCongDrops[i11] =    Leaf27_3_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iCongDrops[i11][0] = Leaf27_3_Port96_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port96_iCongDrops[i11].includes("M")){
    Leaf27_3_Port96_iCongDrops[i11] =    Leaf27_3_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iCongDrops[i11][0] = Leaf27_3_Port96_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port96_iCongDrops[i11].includes("K")){
    Leaf27_3_Port96_iCongDrops[i11] =    Leaf27_3_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_iCongDrops[i11][0] = Leaf27_3_Port96_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port96_iCongDrops[i11] =    Leaf27_3_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port96_ierrs[i11].includes("G")){
    Leaf27_3_Port96_ierrs[i11] =    Leaf27_3_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_ierrs[i11][0] = Leaf27_3_Port96_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port96_ierrs[i11].includes("M")){
    Leaf27_3_Port96_ierrs[i11] =    Leaf27_3_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_ierrs[i11][0] = Leaf27_3_Port96_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port96_ierrs[i11].includes("K")){
    Leaf27_3_Port96_ierrs[i11] =    Leaf27_3_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_ierrs[i11][0] = Leaf27_3_Port96_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port96_ierrs[i11] =    Leaf27_3_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port96_obytes[i11].includes("G")){
    Leaf27_3_Port96_obytes[i11] =    Leaf27_3_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_obytes[i11][0] = Leaf27_3_Port96_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port96_obytes[i11].includes("M")){
    Leaf27_3_Port96_obytes[i11] =    Leaf27_3_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_obytes[i11][0] = Leaf27_3_Port96_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port96_obytes[i11].includes("K")){
    Leaf27_3_Port96_obytes[i11] =    Leaf27_3_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_obytes[i11][0] = Leaf27_3_Port96_obytes[i11][0]*1000;}
else {  Leaf27_3_Port96_obytes[i11] =    Leaf27_3_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port96_oUpkts[i11].includes("G")){
    Leaf27_3_Port96_oUpkts[i11] =    Leaf27_3_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oUpkts[i11][0] = Leaf27_3_Port96_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_oUpkts[i11].includes("M")){
    Leaf27_3_Port96_oUpkts[i11] =    Leaf27_3_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oUpkts[i11][0] = Leaf27_3_Port96_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_oUpkts[i11].includes("K")){
    Leaf27_3_Port96_oUpkts[i11] =    Leaf27_3_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oUpkts[i11][0] = Leaf27_3_Port96_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_oUpkts[i11] =    Leaf27_3_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port96_oBpkts[i11].includes("G")){
    Leaf27_3_Port96_oBpkts[i11] =    Leaf27_3_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oBpkts[i11][0] = Leaf27_3_Port96_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_oBpkts[i11].includes("M")){
    Leaf27_3_Port96_oBpkts[i11] =    Leaf27_3_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oBpkts[i11][0] = Leaf27_3_Port96_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_oBpkts[i11].includes("K")){
    Leaf27_3_Port96_oBpkts[i11] =    Leaf27_3_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oBpkts[i11][0] = Leaf27_3_Port96_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_oBpkts[i11] =    Leaf27_3_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port96_oMpkts[i11].includes("G")){
    Leaf27_3_Port96_oMpkts[i11] =    Leaf27_3_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oMpkts[i11][0] = Leaf27_3_Port96_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port96_oMpkts[i11].includes("M")){
    Leaf27_3_Port96_oMpkts[i11] =    Leaf27_3_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oMpkts[i11][0] = Leaf27_3_Port96_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port96_oMpkts[i11].includes("K")){
    Leaf27_3_Port96_oMpkts[i11] =    Leaf27_3_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oMpkts[i11][0] = Leaf27_3_Port96_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port96_oMpkts[i11] =    Leaf27_3_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port96_oCongDrops[i11].includes("G")){
    Leaf27_3_Port96_oCongDrops[i11] =    Leaf27_3_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oCongDrops[i11][0] = Leaf27_3_Port96_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port96_oCongDrops[i11].includes("M")){
    Leaf27_3_Port96_oCongDrops[i11] =    Leaf27_3_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oCongDrops[i11][0] = Leaf27_3_Port96_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port96_oCongDrops[i11].includes("K")){
    Leaf27_3_Port96_oCongDrops[i11] =    Leaf27_3_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oCongDrops[i11][0] = Leaf27_3_Port96_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port96_oCongDrops[i11] =    Leaf27_3_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port96_oerrs[i11].includes("G")){
    Leaf27_3_Port96_oerrs[i11] =    Leaf27_3_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oerrs[i11][0] = Leaf27_3_Port96_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port96_oerrs[i11].includes("M")){
    Leaf27_3_Port96_oerrs[i11] =    Leaf27_3_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oerrs[i11][0] = Leaf27_3_Port96_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port96_oerrs[i11].includes("K")){
    Leaf27_3_Port96_oerrs[i11] =    Leaf27_3_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_oerrs[i11][0] = Leaf27_3_Port96_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port96_oerrs[i11] =    Leaf27_3_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port96_mtu_errs[i11].includes("G")){
    Leaf27_3_Port96_mtu_errs[i11] =    Leaf27_3_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_mtu_errs[i11][0] = Leaf27_3_Port96_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port96_mtu_errs[i11].includes("M")){
    Leaf27_3_Port96_mtu_errs[i11] =    Leaf27_3_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_mtu_errs[i11][0] = Leaf27_3_Port96_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port96_mtu_errs[i11].includes("K")){
    Leaf27_3_Port96_mtu_errs[i11] =    Leaf27_3_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port96_mtu_errs[i11][0] = Leaf27_3_Port96_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port96_mtu_errs[i11] =    Leaf27_3_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}}

if(Leaf27_3_Port97[i11] !== undefined){ 
    Leaf27_3_Port97_fix[i11] =        Leaf27_3_Port97[i11].slice(26, 34);
    Leaf27_3_Port97_iUpkts[i11] =     Leaf27_3_Port97[i11].slice(33,40);
    Leaf27_3_Port97_iBpkts[i11] =     Leaf27_3_Port97[i11].slice(40,47);
    Leaf27_3_Port97_iMpkts[i11] =     Leaf27_3_Port97[i11].slice(47,54);
    Leaf27_3_Port97_iCongDrops[i11] = Leaf27_3_Port97[i11].slice(54,65);
    Leaf27_3_Port97_ierrs[i11] =      Leaf27_3_Port97[i11].slice(65,71);
    Leaf27_3_Port97_obytes[i11] =     Leaf27_3_Port97[i11].slice(71,78);
    Leaf27_3_Port97_oUpkts[i11] =     Leaf27_3_Port97[i11].slice(78,85);
    Leaf27_3_Port97_oBpkts[i11] =     Leaf27_3_Port97[i11].slice(85,92);
    Leaf27_3_Port97_oMpkts[i11] =     Leaf27_3_Port97[i11].slice(92,99);
    Leaf27_3_Port97_oCongDrops[i11] = Leaf27_3_Port97[i11].slice(99,110);
    Leaf27_3_Port97_oerrs[i11] =      Leaf27_3_Port97[i11].slice(110,116);
    Leaf27_3_Port97_mtu_errs[i11] =   Leaf27_3_Port97[i11].slice(116,125);

if( Leaf27_3_Port97_fix[i11].includes("G")){
    Leaf27_3_Port97_fix[i11] =    Leaf27_3_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_fix[i11][0] = Leaf27_3_Port97_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port97_fix[i11].includes("M")){
    Leaf27_3_Port97_fix[i11] =    Leaf27_3_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_fix[i11][0] = Leaf27_3_Port97_fix[i11][0]*1000000;}
else if(Leaf27_3_Port97_fix[i11].includes("K")){
    Leaf27_3_Port97_fix[i11] =    Leaf27_3_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_fix[i11][0] = Leaf27_3_Port97_fix[i11][0]*1000;}
else {  Leaf27_3_Port97_fix[i11] =    Leaf27_3_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

if( Leaf27_3_Port97_iUpkts[i11].includes("G")){
    Leaf27_3_Port97_iUpkts[i11] =    Leaf27_3_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iUpkts[i11][0] = Leaf27_3_Port97_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_iUpkts[i11].includes("M")){
    Leaf27_3_Port97_iUpkts[i11] =    Leaf27_3_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iUpkts[i11][0] = Leaf27_3_Port97_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_iUpkts[i11].includes("K")){
    Leaf27_3_Port97_iUpkts[i11] =    Leaf27_3_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iUpkts[i11][0] = Leaf27_3_Port97_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_iUpkts[i11] =    Leaf27_3_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port97_iBpkts[i11].includes("G")){
    Leaf27_3_Port97_iBpkts[i11] =    Leaf27_3_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iBpkts[i11][0] = Leaf27_3_Port97_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_iBpkts[i11].includes("M")){
    Leaf27_3_Port97_iBpkts[i11] =    Leaf27_3_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iBpkts[i11][0] = Leaf27_3_Port97_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_iBpkts[i11].includes("K")){
    Leaf27_3_Port97_iBpkts[i11] =    Leaf27_3_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iBpkts[i11][0] = Leaf27_3_Port97_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_iBpkts[i11] =    Leaf27_3_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port97_iMpkts[i11].includes("G")){
    Leaf27_3_Port97_iMpkts[i11] =    Leaf27_3_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iMpkts[i11][0] = Leaf27_3_Port97_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_iMpkts[i11].includes("M")){
    Leaf27_3_Port97_iMpkts[i11] =    Leaf27_3_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iMpkts[i11][0] = Leaf27_3_Port97_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_iMpkts[i11].includes("K")){
    Leaf27_3_Port97_iMpkts[i11] =    Leaf27_3_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iMpkts[i11][0] = Leaf27_3_Port97_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_iMpkts[i11] =    Leaf27_3_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port97_iCongDrops[i11].includes("G")){
    Leaf27_3_Port97_iCongDrops[i11] =    Leaf27_3_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iCongDrops[i11][0] = Leaf27_3_Port97_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port97_iCongDrops[i11].includes("M")){
    Leaf27_3_Port97_iCongDrops[i11] =    Leaf27_3_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iCongDrops[i11][0] = Leaf27_3_Port97_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port97_iCongDrops[i11].includes("K")){
    Leaf27_3_Port97_iCongDrops[i11] =    Leaf27_3_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_iCongDrops[i11][0] = Leaf27_3_Port97_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port97_iCongDrops[i11] =    Leaf27_3_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port97_ierrs[i11].includes("G")){
    Leaf27_3_Port97_ierrs[i11] =    Leaf27_3_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_ierrs[i11][0] = Leaf27_3_Port97_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port97_ierrs[i11].includes("M")){
    Leaf27_3_Port97_ierrs[i11] =    Leaf27_3_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_ierrs[i11][0] = Leaf27_3_Port97_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port97_ierrs[i11].includes("K")){
    Leaf27_3_Port97_ierrs[i11] =    Leaf27_3_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_ierrs[i11][0] = Leaf27_3_Port97_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port97_ierrs[i11] =    Leaf27_3_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port97_obytes[i11].includes("G")){
    Leaf27_3_Port97_obytes[i11] =    Leaf27_3_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_obytes[i11][0] = Leaf27_3_Port97_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port97_obytes[i11].includes("M")){
    Leaf27_3_Port97_obytes[i11] =    Leaf27_3_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_obytes[i11][0] = Leaf27_3_Port97_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port97_obytes[i11].includes("K")){
    Leaf27_3_Port97_obytes[i11] =    Leaf27_3_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_obytes[i11][0] = Leaf27_3_Port97_obytes[i11][0]*1000;}
else {  Leaf27_3_Port97_obytes[i11] =    Leaf27_3_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port97_oUpkts[i11].includes("G")){
    Leaf27_3_Port97_oUpkts[i11] =    Leaf27_3_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oUpkts[i11][0] = Leaf27_3_Port97_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_oUpkts[i11].includes("M")){
    Leaf27_3_Port97_oUpkts[i11] =    Leaf27_3_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oUpkts[i11][0] = Leaf27_3_Port97_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_oUpkts[i11].includes("K")){
    Leaf27_3_Port97_oUpkts[i11] =    Leaf27_3_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oUpkts[i11][0] = Leaf27_3_Port97_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_oUpkts[i11] =    Leaf27_3_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port97_oBpkts[i11].includes("G")){
    Leaf27_3_Port97_oBpkts[i11] =    Leaf27_3_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oBpkts[i11][0] = Leaf27_3_Port97_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_oBpkts[i11].includes("M")){
    Leaf27_3_Port97_oBpkts[i11] =    Leaf27_3_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oBpkts[i11][0] = Leaf27_3_Port97_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_oBpkts[i11].includes("K")){
    Leaf27_3_Port97_oBpkts[i11] =    Leaf27_3_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oBpkts[i11][0] = Leaf27_3_Port97_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_oBpkts[i11] =    Leaf27_3_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port97_oMpkts[i11].includes("G")){
    Leaf27_3_Port97_oMpkts[i11] =    Leaf27_3_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oMpkts[i11][0] = Leaf27_3_Port97_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port97_oMpkts[i11].includes("M")){
    Leaf27_3_Port97_oMpkts[i11] =    Leaf27_3_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oMpkts[i11][0] = Leaf27_3_Port97_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port97_oMpkts[i11].includes("K")){
    Leaf27_3_Port97_oMpkts[i11] =    Leaf27_3_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oMpkts[i11][0] = Leaf27_3_Port97_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port97_oMpkts[i11] =    Leaf27_3_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port97_oCongDrops[i11].includes("G")){
    Leaf27_3_Port97_oCongDrops[i11] =    Leaf27_3_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oCongDrops[i11][0] = Leaf27_3_Port97_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port97_oCongDrops[i11].includes("M")){
    Leaf27_3_Port97_oCongDrops[i11] =    Leaf27_3_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oCongDrops[i11][0] = Leaf27_3_Port97_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port97_oCongDrops[i11].includes("K")){
    Leaf27_3_Port97_oCongDrops[i11] =    Leaf27_3_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oCongDrops[i11][0] = Leaf27_3_Port97_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port97_oCongDrops[i11] =    Leaf27_3_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port97_oerrs[i11].includes("G")){
    Leaf27_3_Port97_oerrs[i11] =    Leaf27_3_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oerrs[i11][0] = Leaf27_3_Port97_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port97_oerrs[i11].includes("M")){
    Leaf27_3_Port97_oerrs[i11] =    Leaf27_3_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oerrs[i11][0] = Leaf27_3_Port97_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port97_oerrs[i11].includes("K")){
    Leaf27_3_Port97_oerrs[i11] =    Leaf27_3_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_oerrs[i11][0] = Leaf27_3_Port97_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port97_oerrs[i11] =    Leaf27_3_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port97_mtu_errs[i11].includes("G")){
    Leaf27_3_Port97_mtu_errs[i11] =    Leaf27_3_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_mtu_errs[i11][0] = Leaf27_3_Port97_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port97_mtu_errs[i11].includes("M")){
    Leaf27_3_Port97_mtu_errs[i11] =    Leaf27_3_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_mtu_errs[i11][0] = Leaf27_3_Port97_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port97_mtu_errs[i11].includes("K")){
    Leaf27_3_Port97_mtu_errs[i11] =    Leaf27_3_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port97_mtu_errs[i11][0] = Leaf27_3_Port97_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port97_mtu_errs[i11] =    Leaf27_3_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

if(Leaf27_3_Port98[i11] !== undefined){ 
    Leaf27_3_Port98_fix[i11] =        Leaf27_3_Port98[i11].slice(26, 34);
    Leaf27_3_Port98_iUpkts[i11] =     Leaf27_3_Port98[i11].slice(33,40);
    Leaf27_3_Port98_iBpkts[i11] =     Leaf27_3_Port98[i11].slice(40,47);
    Leaf27_3_Port98_iMpkts[i11] =     Leaf27_3_Port98[i11].slice(47,54);
    Leaf27_3_Port98_iCongDrops[i11] = Leaf27_3_Port98[i11].slice(54,65);
    Leaf27_3_Port98_ierrs[i11] =      Leaf27_3_Port98[i11].slice(65,71);
    Leaf27_3_Port98_obytes[i11] =     Leaf27_3_Port98[i11].slice(71,78);
    Leaf27_3_Port98_oUpkts[i11] =     Leaf27_3_Port98[i11].slice(78,85);
    Leaf27_3_Port98_oBpkts[i11] =     Leaf27_3_Port98[i11].slice(85,92);
    Leaf27_3_Port98_oMpkts[i11] =     Leaf27_3_Port98[i11].slice(92,99);
    Leaf27_3_Port98_oCongDrops[i11] = Leaf27_3_Port98[i11].slice(99,110);
    Leaf27_3_Port98_oerrs[i11] =      Leaf27_3_Port98[i11].slice(110,116);
    Leaf27_3_Port98_mtu_errs[i11] =   Leaf27_3_Port98[i11].slice(116,125);

if( Leaf27_3_Port98_fix[i11].includes("G")){
    Leaf27_3_Port98_fix[i11] =    Leaf27_3_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_fix[i11][0] = Leaf27_3_Port98_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port98_fix[i11].includes("M")){
    Leaf27_3_Port98_fix[i11] =    Leaf27_3_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_fix[i11][0] = Leaf27_3_Port98_fix[i11][0]*1000000;}
else if(Leaf27_3_Port98_fix[i11].includes("K")){
    Leaf27_3_Port98_fix[i11] =    Leaf27_3_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_fix[i11][0] = Leaf27_3_Port98_fix[i11][0]*1000;}
else {  Leaf27_3_Port98_fix[i11] =    Leaf27_3_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port98_iUpkts[i11].includes("G")){
    Leaf27_3_Port98_iUpkts[i11] =    Leaf27_3_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iUpkts[i11][0] = Leaf27_3_Port98_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_iUpkts[i11].includes("M")){
    Leaf27_3_Port98_iUpkts[i11] =    Leaf27_3_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iUpkts[i11][0] = Leaf27_3_Port98_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_iUpkts[i11].includes("K")){
    Leaf27_3_Port98_iUpkts[i11] =    Leaf27_3_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iUpkts[i11][0] = Leaf27_3_Port98_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_iUpkts[i11] =    Leaf27_3_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port98_iBpkts[i11].includes("G")){
    Leaf27_3_Port98_iBpkts[i11] =    Leaf27_3_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iBpkts[i11][0] = Leaf27_3_Port98_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_iBpkts[i11].includes("M")){
    Leaf27_3_Port98_iBpkts[i11] =    Leaf27_3_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iBpkts[i11][0] = Leaf27_3_Port98_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_iBpkts[i11].includes("K")){
    Leaf27_3_Port98_iBpkts[i11] =    Leaf27_3_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iBpkts[i11][0] = Leaf27_3_Port98_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_iBpkts[i11] =    Leaf27_3_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port98_iMpkts[i11].includes("G")){
    Leaf27_3_Port98_iMpkts[i11] =    Leaf27_3_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iMpkts[i11][0] = Leaf27_3_Port98_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_iMpkts[i11].includes("M")){
    Leaf27_3_Port98_iMpkts[i11] =    Leaf27_3_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iMpkts[i11][0] = Leaf27_3_Port98_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_iMpkts[i11].includes("K")){
    Leaf27_3_Port98_iMpkts[i11] =    Leaf27_3_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iMpkts[i11][0] = Leaf27_3_Port98_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_iMpkts[i11] =    Leaf27_3_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port98_iCongDrops[i11].includes("G")){
    Leaf27_3_Port98_iCongDrops[i11] =    Leaf27_3_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iCongDrops[i11][0] = Leaf27_3_Port98_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port98_iCongDrops[i11].includes("M")){
    Leaf27_3_Port98_iCongDrops[i11] =    Leaf27_3_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iCongDrops[i11][0] = Leaf27_3_Port98_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port98_iCongDrops[i11].includes("K")){
    Leaf27_3_Port98_iCongDrops[i11] =    Leaf27_3_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_iCongDrops[i11][0] = Leaf27_3_Port98_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port98_iCongDrops[i11] =    Leaf27_3_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port98_ierrs[i11].includes("G")){
    Leaf27_3_Port98_ierrs[i11] =    Leaf27_3_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_ierrs[i11][0] = Leaf27_3_Port98_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port98_ierrs[i11].includes("M")){
    Leaf27_3_Port98_ierrs[i11] =    Leaf27_3_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_ierrs[i11][0] = Leaf27_3_Port98_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port98_ierrs[i11].includes("K")){
    Leaf27_3_Port98_ierrs[i11] =    Leaf27_3_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_ierrs[i11][0] = Leaf27_3_Port98_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port98_ierrs[i11] =    Leaf27_3_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port98_obytes[i11].includes("G")){
    Leaf27_3_Port98_obytes[i11] =    Leaf27_3_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_obytes[i11][0] = Leaf27_3_Port98_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port98_obytes[i11].includes("M")){
    Leaf27_3_Port98_obytes[i11] =    Leaf27_3_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_obytes[i11][0] = Leaf27_3_Port98_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port98_obytes[i11].includes("K")){
    Leaf27_3_Port98_obytes[i11] =    Leaf27_3_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_obytes[i11][0] = Leaf27_3_Port98_obytes[i11][0]*1000;}
else {  Leaf27_3_Port98_obytes[i11] =    Leaf27_3_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port98_oUpkts[i11].includes("G")){
    Leaf27_3_Port98_oUpkts[i11] =    Leaf27_3_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oUpkts[i11][0] = Leaf27_3_Port98_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_oUpkts[i11].includes("M")){
    Leaf27_3_Port98_oUpkts[i11] =    Leaf27_3_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oUpkts[i11][0] = Leaf27_3_Port98_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_oUpkts[i11].includes("K")){
    Leaf27_3_Port98_oUpkts[i11] =    Leaf27_3_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oUpkts[i11][0] = Leaf27_3_Port98_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_oUpkts[i11] =    Leaf27_3_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port98_oBpkts[i11].includes("G")){
    Leaf27_3_Port98_oBpkts[i11] =    Leaf27_3_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oBpkts[i11][0] = Leaf27_3_Port98_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_oBpkts[i11].includes("M")){
    Leaf27_3_Port98_oBpkts[i11] =    Leaf27_3_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oBpkts[i11][0] = Leaf27_3_Port98_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_oBpkts[i11].includes("K")){
    Leaf27_3_Port98_oBpkts[i11] =    Leaf27_3_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oBpkts[i11][0] = Leaf27_3_Port98_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_oBpkts[i11] =    Leaf27_3_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port98_oMpkts[i11].includes("G")){
    Leaf27_3_Port98_oMpkts[i11] =    Leaf27_3_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oMpkts[i11][0] = Leaf27_3_Port98_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port98_oMpkts[i11].includes("M")){
    Leaf27_3_Port98_oMpkts[i11] =    Leaf27_3_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oMpkts[i11][0] = Leaf27_3_Port98_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port98_oMpkts[i11].includes("K")){
    Leaf27_3_Port98_oMpkts[i11] =    Leaf27_3_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oMpkts[i11][0] = Leaf27_3_Port98_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port98_oMpkts[i11] =    Leaf27_3_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port98_oCongDrops[i11].includes("G")){
    Leaf27_3_Port98_oCongDrops[i11] =    Leaf27_3_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oCongDrops[i11][0] = Leaf27_3_Port98_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port98_oCongDrops[i11].includes("M")){
    Leaf27_3_Port98_oCongDrops[i11] =    Leaf27_3_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oCongDrops[i11][0] = Leaf27_3_Port98_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port98_oCongDrops[i11].includes("K")){
    Leaf27_3_Port98_oCongDrops[i11] =    Leaf27_3_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oCongDrops[i11][0] = Leaf27_3_Port98_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port98_oCongDrops[i11] =    Leaf27_3_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port98_oerrs[i11].includes("G")){
    Leaf27_3_Port98_oerrs[i11] =    Leaf27_3_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oerrs[i11][0] = Leaf27_3_Port98_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port98_oerrs[i11].includes("M")){
    Leaf27_3_Port98_oerrs[i11] =    Leaf27_3_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oerrs[i11][0] = Leaf27_3_Port98_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port98_oerrs[i11].includes("K")){
    Leaf27_3_Port98_oerrs[i11] =    Leaf27_3_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_oerrs[i11][0] = Leaf27_3_Port98_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port98_oerrs[i11] =    Leaf27_3_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port98_mtu_errs[i11].includes("G")){
    Leaf27_3_Port98_mtu_errs[i11] =    Leaf27_3_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_mtu_errs[i11][0] = Leaf27_3_Port98_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port98_mtu_errs[i11].includes("M")){
    Leaf27_3_Port98_mtu_errs[i11] =    Leaf27_3_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_mtu_errs[i11][0] = Leaf27_3_Port98_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port98_mtu_errs[i11].includes("K")){
    Leaf27_3_Port98_mtu_errs[i11] =    Leaf27_3_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port98_mtu_errs[i11][0] = Leaf27_3_Port98_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port98_mtu_errs[i11] =    Leaf27_3_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

if(Leaf27_3_Port99[i11] !== undefined){ 
    Leaf27_3_Port99_fix[i11] =        Leaf27_3_Port99[i11].slice(26, 34);
    Leaf27_3_Port99_iUpkts[i11] =     Leaf27_3_Port99[i11].slice(33,40);
    Leaf27_3_Port99_iBpkts[i11] =     Leaf27_3_Port99[i11].slice(40,47);
    Leaf27_3_Port99_iMpkts[i11] =     Leaf27_3_Port99[i11].slice(47,54);
    Leaf27_3_Port99_iCongDrops[i11] = Leaf27_3_Port99[i11].slice(54,65);
    Leaf27_3_Port99_ierrs[i11] =      Leaf27_3_Port99[i11].slice(65,71);
    Leaf27_3_Port99_obytes[i11] =     Leaf27_3_Port99[i11].slice(71,78);
    Leaf27_3_Port99_oUpkts[i11] =     Leaf27_3_Port99[i11].slice(78,85);
    Leaf27_3_Port99_oBpkts[i11] =     Leaf27_3_Port99[i11].slice(85,92);
    Leaf27_3_Port99_oMpkts[i11] =     Leaf27_3_Port99[i11].slice(92,99);
    Leaf27_3_Port99_oCongDrops[i11] = Leaf27_3_Port99[i11].slice(99,110);
    Leaf27_3_Port99_oerrs[i11] =      Leaf27_3_Port99[i11].slice(110,116);
    Leaf27_3_Port99_mtu_errs[i11] =   Leaf27_3_Port99[i11].slice(116,125);

if( Leaf27_3_Port99_fix[i11].includes("G")){
    Leaf27_3_Port99_fix[i11] =    Leaf27_3_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_fix[i11][0] = Leaf27_3_Port99_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port99_fix[i11].includes("M")){
    Leaf27_3_Port99_fix[i11] =    Leaf27_3_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_fix[i11][0] = Leaf27_3_Port99_fix[i11][0]*1000000;}
else if(Leaf27_3_Port99_fix[i11].includes("K")){
    Leaf27_3_Port99_fix[i11] =    Leaf27_3_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_fix[i11][0] = Leaf27_3_Port99_fix[i11][0]*1000;}
else {  Leaf27_3_Port99_fix[i11] =    Leaf27_3_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

if( Leaf27_3_Port99_iUpkts[i11].includes("G")){
    Leaf27_3_Port99_iUpkts[i11] =    Leaf27_3_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iUpkts[i11][0] = Leaf27_3_Port99_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_iUpkts[i11].includes("M")){
    Leaf27_3_Port99_iUpkts[i11] =    Leaf27_3_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iUpkts[i11][0] = Leaf27_3_Port99_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_iUpkts[i11].includes("K")){
    Leaf27_3_Port99_iUpkts[i11] =    Leaf27_3_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iUpkts[i11][0] = Leaf27_3_Port99_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_iUpkts[i11] =    Leaf27_3_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_iBpkts[i11].includes("G")){
    Leaf27_3_Port99_iBpkts[i11] =    Leaf27_3_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iBpkts[i11][0] = Leaf27_3_Port99_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_iBpkts[i11].includes("M")){
    Leaf27_3_Port99_iBpkts[i11] =    Leaf27_3_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iBpkts[i11][0] = Leaf27_3_Port99_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_iBpkts[i11].includes("K")){
    Leaf27_3_Port99_iBpkts[i11] =    Leaf27_3_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iBpkts[i11][0] = Leaf27_3_Port99_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_iBpkts[i11] =    Leaf27_3_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_iMpkts[i11].includes("G")){
    Leaf27_3_Port99_iMpkts[i11] =    Leaf27_3_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iMpkts[i11][0] = Leaf27_3_Port99_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_iMpkts[i11].includes("M")){
    Leaf27_3_Port99_iMpkts[i11] =    Leaf27_3_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iMpkts[i11][0] = Leaf27_3_Port99_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_iMpkts[i11].includes("K")){
    Leaf27_3_Port99_iMpkts[i11] =    Leaf27_3_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iMpkts[i11][0] = Leaf27_3_Port99_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_iMpkts[i11] =    Leaf27_3_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port99_iCongDrops[i11].includes("G")){
    Leaf27_3_Port99_iCongDrops[i11] =    Leaf27_3_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iCongDrops[i11][0] = Leaf27_3_Port99_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port99_iCongDrops[i11].includes("M")){
    Leaf27_3_Port99_iCongDrops[i11] =    Leaf27_3_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iCongDrops[i11][0] = Leaf27_3_Port99_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port99_iCongDrops[i11].includes("K")){
    Leaf27_3_Port99_iCongDrops[i11] =    Leaf27_3_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_iCongDrops[i11][0] = Leaf27_3_Port99_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port99_iCongDrops[i11] =    Leaf27_3_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port99_ierrs[i11].includes("G")){
    Leaf27_3_Port99_ierrs[i11] =    Leaf27_3_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_ierrs[i11][0] = Leaf27_3_Port99_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port99_ierrs[i11].includes("M")){
    Leaf27_3_Port99_ierrs[i11] =    Leaf27_3_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_ierrs[i11][0] = Leaf27_3_Port99_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port99_ierrs[i11].includes("K")){
    Leaf27_3_Port99_ierrs[i11] =    Leaf27_3_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_ierrs[i11][0] = Leaf27_3_Port99_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port99_ierrs[i11] =    Leaf27_3_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_obytes[i11].includes("G")){
    Leaf27_3_Port99_obytes[i11] =    Leaf27_3_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_obytes[i11][0] = Leaf27_3_Port99_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port99_obytes[i11].includes("M")){
    Leaf27_3_Port99_obytes[i11] =    Leaf27_3_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_obytes[i11][0] = Leaf27_3_Port99_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port99_obytes[i11].includes("K")){
    Leaf27_3_Port99_obytes[i11] =    Leaf27_3_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_obytes[i11][0] = Leaf27_3_Port99_obytes[i11][0]*1000;}
else {  Leaf27_3_Port99_obytes[i11] =    Leaf27_3_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port99_oUpkts[i11].includes("G")){
    Leaf27_3_Port99_oUpkts[i11] =    Leaf27_3_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oUpkts[i11][0] = Leaf27_3_Port99_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_oUpkts[i11].includes("M")){
    Leaf27_3_Port99_oUpkts[i11] =    Leaf27_3_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oUpkts[i11][0] = Leaf27_3_Port99_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_oUpkts[i11].includes("K")){
    Leaf27_3_Port99_oUpkts[i11] =    Leaf27_3_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oUpkts[i11][0] = Leaf27_3_Port99_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_oUpkts[i11] =    Leaf27_3_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_oBpkts[i11].includes("G")){
    Leaf27_3_Port99_oBpkts[i11] =    Leaf27_3_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oBpkts[i11][0] = Leaf27_3_Port99_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_oBpkts[i11].includes("M")){
    Leaf27_3_Port99_oBpkts[i11] =    Leaf27_3_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oBpkts[i11][0] = Leaf27_3_Port99_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_oBpkts[i11].includes("K")){
    Leaf27_3_Port99_oBpkts[i11] =    Leaf27_3_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oBpkts[i11][0] = Leaf27_3_Port99_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_oBpkts[i11] =    Leaf27_3_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_oMpkts[i11].includes("G")){
    Leaf27_3_Port99_oMpkts[i11] =    Leaf27_3_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oMpkts[i11][0] = Leaf27_3_Port99_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port99_oMpkts[i11].includes("M")){
    Leaf27_3_Port99_oMpkts[i11] =    Leaf27_3_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oMpkts[i11][0] = Leaf27_3_Port99_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port99_oMpkts[i11].includes("K")){
    Leaf27_3_Port99_oMpkts[i11] =    Leaf27_3_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oMpkts[i11][0] = Leaf27_3_Port99_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port99_oMpkts[i11] =    Leaf27_3_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_oCongDrops[i11].includes("G")){
    Leaf27_3_Port99_oCongDrops[i11] =    Leaf27_3_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oCongDrops[i11][0] = Leaf27_3_Port99_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port99_oCongDrops[i11].includes("M")){
    Leaf27_3_Port99_oCongDrops[i11] =    Leaf27_3_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oCongDrops[i11][0] = Leaf27_3_Port99_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port99_oCongDrops[i11].includes("K")){
    Leaf27_3_Port99_oCongDrops[i11] =    Leaf27_3_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oCongDrops[i11][0] = Leaf27_3_Port99_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port99_oCongDrops[i11] =    Leaf27_3_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port99_oerrs[i11].includes("G")){
    Leaf27_3_Port99_oerrs[i11] =    Leaf27_3_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oerrs[i11][0] = Leaf27_3_Port99_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port99_oerrs[i11].includes("M")){
    Leaf27_3_Port99_oerrs[i11] =    Leaf27_3_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oerrs[i11][0] = Leaf27_3_Port99_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port99_oerrs[i11].includes("K")){
    Leaf27_3_Port99_oerrs[i11] =    Leaf27_3_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_oerrs[i11][0] = Leaf27_3_Port99_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port99_oerrs[i11] =    Leaf27_3_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port99_mtu_errs[i11].includes("G")){
    Leaf27_3_Port99_mtu_errs[i11] =    Leaf27_3_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_mtu_errs[i11][0] = Leaf27_3_Port99_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port99_mtu_errs[i11].includes("M")){
    Leaf27_3_Port99_mtu_errs[i11] =    Leaf27_3_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_mtu_errs[i11][0] = Leaf27_3_Port99_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port99_mtu_errs[i11].includes("K")){
    Leaf27_3_Port99_mtu_errs[i11] =    Leaf27_3_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port99_mtu_errs[i11][0] = Leaf27_3_Port99_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port99_mtu_errs[i11] =    Leaf27_3_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

if(Leaf27_3_Port100[i11] !== undefined){ 
    Leaf27_3_Port100_fix[i11] =        Leaf27_3_Port100[i11].slice(26, 34);
    Leaf27_3_Port100_iUpkts[i11] =     Leaf27_3_Port100[i11].slice(33,40);
    Leaf27_3_Port100_iBpkts[i11] =     Leaf27_3_Port100[i11].slice(40,47);
    Leaf27_3_Port100_iMpkts[i11] =     Leaf27_3_Port100[i11].slice(47,54);
    Leaf27_3_Port100_iCongDrops[i11] = Leaf27_3_Port100[i11].slice(54,65);
    Leaf27_3_Port100_ierrs[i11] =      Leaf27_3_Port100[i11].slice(65,71);
    Leaf27_3_Port100_obytes[i11] =     Leaf27_3_Port100[i11].slice(71,78);
    Leaf27_3_Port100_oUpkts[i11] =     Leaf27_3_Port100[i11].slice(78,85);
    Leaf27_3_Port100_oBpkts[i11] =     Leaf27_3_Port100[i11].slice(85,92);
    Leaf27_3_Port100_oMpkts[i11] =     Leaf27_3_Port100[i11].slice(92,99);
    Leaf27_3_Port100_oCongDrops[i11] = Leaf27_3_Port100[i11].slice(99,110);
    Leaf27_3_Port100_oerrs[i11] =      Leaf27_3_Port100[i11].slice(110,116);
    Leaf27_3_Port100_mtu_errs[i11] =   Leaf27_3_Port100[i11].slice(116,125);

if( Leaf27_3_Port100_fix[i11].includes("G")){
    Leaf27_3_Port100_fix[i11] =    Leaf27_3_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_fix[i11][0] = Leaf27_3_Port100_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port100_fix[i11].includes("M")){
    Leaf27_3_Port100_fix[i11] =    Leaf27_3_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_fix[i11][0] = Leaf27_3_Port100_fix[i11][0]*1000000;}
else if(Leaf27_3_Port100_fix[i11].includes("K")){
    Leaf27_3_Port100_fix[i11] =    Leaf27_3_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_fix[i11][0] = Leaf27_3_Port100_fix[i11][0]*1000;}
else {  Leaf27_3_Port100_fix[i11] =    Leaf27_3_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port100_iUpkts[i11].includes("G")){
    Leaf27_3_Port100_iUpkts[i11] =    Leaf27_3_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iUpkts[i11][0] = Leaf27_3_Port100_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_iUpkts[i11].includes("M")){
    Leaf27_3_Port100_iUpkts[i11] =    Leaf27_3_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iUpkts[i11][0] = Leaf27_3_Port100_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_iUpkts[i11].includes("K")){
    Leaf27_3_Port100_iUpkts[i11] =    Leaf27_3_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iUpkts[i11][0] = Leaf27_3_Port100_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_iUpkts[i11] =    Leaf27_3_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_iBpkts[i11].includes("G")){
    Leaf27_3_Port100_iBpkts[i11] =    Leaf27_3_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iBpkts[i11][0] = Leaf27_3_Port100_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_iBpkts[i11].includes("M")){
    Leaf27_3_Port100_iBpkts[i11] =    Leaf27_3_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iBpkts[i11][0] = Leaf27_3_Port100_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_iBpkts[i11].includes("K")){
    Leaf27_3_Port100_iBpkts[i11] =    Leaf27_3_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iBpkts[i11][0] = Leaf27_3_Port100_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_iBpkts[i11] =    Leaf27_3_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port100_iMpkts[i11].includes("G")){
    Leaf27_3_Port100_iMpkts[i11] =    Leaf27_3_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iMpkts[i11][0] = Leaf27_3_Port100_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_iMpkts[i11].includes("M")){
    Leaf27_3_Port100_iMpkts[i11] =    Leaf27_3_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iMpkts[i11][0] = Leaf27_3_Port100_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_iMpkts[i11].includes("K")){
    Leaf27_3_Port100_iMpkts[i11] =    Leaf27_3_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iMpkts[i11][0] = Leaf27_3_Port100_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_iMpkts[i11] =    Leaf27_3_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_iCongDrops[i11].includes("G")){
    Leaf27_3_Port100_iCongDrops[i11] =    Leaf27_3_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iCongDrops[i11][0] = Leaf27_3_Port100_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port100_iCongDrops[i11].includes("M")){
    Leaf27_3_Port100_iCongDrops[i11] =    Leaf27_3_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iCongDrops[i11][0] = Leaf27_3_Port100_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port100_iCongDrops[i11].includes("K")){
    Leaf27_3_Port100_iCongDrops[i11] =    Leaf27_3_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_iCongDrops[i11][0] = Leaf27_3_Port100_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port100_iCongDrops[i11] =    Leaf27_3_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_ierrs[i11].includes("G")){
    Leaf27_3_Port100_ierrs[i11] =    Leaf27_3_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_ierrs[i11][0] = Leaf27_3_Port100_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port100_ierrs[i11].includes("M")){
    Leaf27_3_Port100_ierrs[i11] =    Leaf27_3_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_ierrs[i11][0] = Leaf27_3_Port100_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port100_ierrs[i11].includes("K")){
    Leaf27_3_Port100_ierrs[i11] =    Leaf27_3_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_ierrs[i11][0] = Leaf27_3_Port100_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port100_ierrs[i11] =    Leaf27_3_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_obytes[i11].includes("G")){
    Leaf27_3_Port100_obytes[i11] =    Leaf27_3_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_obytes[i11][0] = Leaf27_3_Port100_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port100_obytes[i11].includes("M")){
    Leaf27_3_Port100_obytes[i11] =    Leaf27_3_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_obytes[i11][0] = Leaf27_3_Port100_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port100_obytes[i11].includes("K")){
    Leaf27_3_Port100_obytes[i11] =    Leaf27_3_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_obytes[i11][0] = Leaf27_3_Port100_obytes[i11][0]*1000;}
else {  Leaf27_3_Port100_obytes[i11] =    Leaf27_3_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_oUpkts[i11].includes("G")){
    Leaf27_3_Port100_oUpkts[i11] =    Leaf27_3_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oUpkts[i11][0] = Leaf27_3_Port100_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_oUpkts[i11].includes("M")){
    Leaf27_3_Port100_oUpkts[i11] =    Leaf27_3_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oUpkts[i11][0] = Leaf27_3_Port100_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_oUpkts[i11].includes("K")){
    Leaf27_3_Port100_oUpkts[i11] =    Leaf27_3_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oUpkts[i11][0] = Leaf27_3_Port100_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_oUpkts[i11] =    Leaf27_3_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port100_oBpkts[i11].includes("G")){
    Leaf27_3_Port100_oBpkts[i11] =    Leaf27_3_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oBpkts[i11][0] = Leaf27_3_Port100_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_oBpkts[i11].includes("M")){
    Leaf27_3_Port100_oBpkts[i11] =    Leaf27_3_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oBpkts[i11][0] = Leaf27_3_Port100_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_oBpkts[i11].includes("K")){
    Leaf27_3_Port100_oBpkts[i11] =    Leaf27_3_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oBpkts[i11][0] = Leaf27_3_Port100_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_oBpkts[i11] =    Leaf27_3_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_oMpkts[i11].includes("G")){
    Leaf27_3_Port100_oMpkts[i11] =    Leaf27_3_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oMpkts[i11][0] = Leaf27_3_Port100_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port100_oMpkts[i11].includes("M")){
    Leaf27_3_Port100_oMpkts[i11] =    Leaf27_3_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oMpkts[i11][0] = Leaf27_3_Port100_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port100_oMpkts[i11].includes("K")){
    Leaf27_3_Port100_oMpkts[i11] =    Leaf27_3_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oMpkts[i11][0] = Leaf27_3_Port100_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port100_oMpkts[i11] =    Leaf27_3_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port100_oCongDrops[i11].includes("G")){
    Leaf27_3_Port100_oCongDrops[i11] =    Leaf27_3_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oCongDrops[i11][0] = Leaf27_3_Port100_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port100_oCongDrops[i11].includes("M")){
    Leaf27_3_Port100_oCongDrops[i11] =    Leaf27_3_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oCongDrops[i11][0] = Leaf27_3_Port100_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port100_oCongDrops[i11].includes("K")){
    Leaf27_3_Port100_oCongDrops[i11] =    Leaf27_3_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oCongDrops[i11][0] = Leaf27_3_Port100_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port100_oCongDrops[i11] =    Leaf27_3_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port100_oerrs[i11].includes("G")){
    Leaf27_3_Port100_oerrs[i11] =    Leaf27_3_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oerrs[i11][0] = Leaf27_3_Port100_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port100_oerrs[i11].includes("M")){
    Leaf27_3_Port100_oerrs[i11] =    Leaf27_3_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oerrs[i11][0] = Leaf27_3_Port100_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port100_oerrs[i11].includes("K")){
    Leaf27_3_Port100_oerrs[i11] =    Leaf27_3_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_oerrs[i11][0] = Leaf27_3_Port100_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port100_oerrs[i11] =    Leaf27_3_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port100_mtu_errs[i11].includes("G")){
    Leaf27_3_Port100_mtu_errs[i11] =    Leaf27_3_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_mtu_errs[i11][0] = Leaf27_3_Port100_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port100_mtu_errs[i11].includes("M")){
    Leaf27_3_Port100_mtu_errs[i11] =    Leaf27_3_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_mtu_errs[i11][0] = Leaf27_3_Port100_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port100_mtu_errs[i11].includes("K")){
    Leaf27_3_Port100_mtu_errs[i11] =    Leaf27_3_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port100_mtu_errs[i11][0] = Leaf27_3_Port100_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port100_mtu_errs[i11] =    Leaf27_3_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

if(Leaf27_3_Port101[i11] !== undefined){ 
    Leaf27_3_Port101_fix[i11] =        Leaf27_3_Port101[i11].slice(26, 34);
    Leaf27_3_Port101_iUpkts[i11] =     Leaf27_3_Port101[i11].slice(33,40);
    Leaf27_3_Port101_iBpkts[i11] =     Leaf27_3_Port101[i11].slice(40,47);
    Leaf27_3_Port101_iMpkts[i11] =     Leaf27_3_Port101[i11].slice(47,54);
    Leaf27_3_Port101_iCongDrops[i11] = Leaf27_3_Port101[i11].slice(54,65);
    Leaf27_3_Port101_ierrs[i11] =      Leaf27_3_Port101[i11].slice(65,71);
    Leaf27_3_Port101_obytes[i11] =     Leaf27_3_Port101[i11].slice(71,78);
    Leaf27_3_Port101_oUpkts[i11] =     Leaf27_3_Port101[i11].slice(78,85);
    Leaf27_3_Port101_oBpkts[i11] =     Leaf27_3_Port101[i11].slice(85,92);
    Leaf27_3_Port101_oMpkts[i11] =     Leaf27_3_Port101[i11].slice(92,99);
    Leaf27_3_Port101_oCongDrops[i11] = Leaf27_3_Port101[i11].slice(99,110);
    Leaf27_3_Port101_oerrs[i11] =      Leaf27_3_Port101[i11].slice(110,116);
    Leaf27_3_Port101_mtu_errs[i11] =   Leaf27_3_Port101[i11].slice(116,125);

if( Leaf27_3_Port101_fix[i11].includes("G")){
    Leaf27_3_Port101_fix[i11] =    Leaf27_3_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_fix[i11][0] = Leaf27_3_Port101_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port101_fix[i11].includes("M")){
    Leaf27_3_Port101_fix[i11] =    Leaf27_3_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_fix[i11][0] = Leaf27_3_Port101_fix[i11][0]*1000000;}
else if(Leaf27_3_Port101_fix[i11].includes("K")){
    Leaf27_3_Port101_fix[i11] =    Leaf27_3_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_fix[i11][0] = Leaf27_3_Port101_fix[i11][0]*1000;}
else {  Leaf27_3_Port101_fix[i11] =    Leaf27_3_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

if( Leaf27_3_Port101_iUpkts[i11].includes("G")){
    Leaf27_3_Port101_iUpkts[i11] =    Leaf27_3_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iUpkts[i11][0] = Leaf27_3_Port101_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_iUpkts[i11].includes("M")){
    Leaf27_3_Port101_iUpkts[i11] =    Leaf27_3_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iUpkts[i11][0] = Leaf27_3_Port101_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_iUpkts[i11].includes("K")){
    Leaf27_3_Port101_iUpkts[i11] =    Leaf27_3_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iUpkts[i11][0] = Leaf27_3_Port101_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_iUpkts[i11] =    Leaf27_3_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_iBpkts[i11].includes("G")){
    Leaf27_3_Port101_iBpkts[i11] =    Leaf27_3_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iBpkts[i11][0] = Leaf27_3_Port101_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_iBpkts[i11].includes("M")){
    Leaf27_3_Port101_iBpkts[i11] =    Leaf27_3_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iBpkts[i11][0] = Leaf27_3_Port101_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_iBpkts[i11].includes("K")){
    Leaf27_3_Port101_iBpkts[i11] =    Leaf27_3_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iBpkts[i11][0] = Leaf27_3_Port101_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_iBpkts[i11] =    Leaf27_3_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port101_iMpkts[i11].includes("G")){
    Leaf27_3_Port101_iMpkts[i11] =    Leaf27_3_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iMpkts[i11][0] = Leaf27_3_Port101_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_iMpkts[i11].includes("M")){
    Leaf27_3_Port101_iMpkts[i11] =    Leaf27_3_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iMpkts[i11][0] = Leaf27_3_Port101_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_iMpkts[i11].includes("K")){
    Leaf27_3_Port101_iMpkts[i11] =    Leaf27_3_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iMpkts[i11][0] = Leaf27_3_Port101_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_iMpkts[i11] =    Leaf27_3_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_iCongDrops[i11].includes("G")){
    Leaf27_3_Port101_iCongDrops[i11] =    Leaf27_3_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iCongDrops[i11][0] = Leaf27_3_Port101_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port101_iCongDrops[i11].includes("M")){
    Leaf27_3_Port101_iCongDrops[i11] =    Leaf27_3_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iCongDrops[i11][0] = Leaf27_3_Port101_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port101_iCongDrops[i11].includes("K")){
    Leaf27_3_Port101_iCongDrops[i11] =    Leaf27_3_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_iCongDrops[i11][0] = Leaf27_3_Port101_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port101_iCongDrops[i11] =    Leaf27_3_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_ierrs[i11].includes("G")){
    Leaf27_3_Port101_ierrs[i11] =    Leaf27_3_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_ierrs[i11][0] = Leaf27_3_Port101_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port101_ierrs[i11].includes("M")){
    Leaf27_3_Port101_ierrs[i11] =    Leaf27_3_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_ierrs[i11][0] = Leaf27_3_Port101_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port101_ierrs[i11].includes("K")){
    Leaf27_3_Port101_ierrs[i11] =    Leaf27_3_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_ierrs[i11][0] = Leaf27_3_Port101_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port101_ierrs[i11] =    Leaf27_3_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
}

    if(Leaf27_3_Port101_obytes[i11].includes("G")){
    Leaf27_3_Port101_obytes[i11] =    Leaf27_3_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_obytes[i11][0] = Leaf27_3_Port101_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port101_obytes[i11].includes("M")){
    Leaf27_3_Port101_obytes[i11] =    Leaf27_3_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_obytes[i11][0] = Leaf27_3_Port101_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port101_obytes[i11].includes("K")){
    Leaf27_3_Port101_obytes[i11] =    Leaf27_3_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_obytes[i11][0] = Leaf27_3_Port101_obytes[i11][0]*1000;}
else {  Leaf27_3_Port101_obytes[i11] =    Leaf27_3_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port101_oUpkts[i11].includes("G")){
    Leaf27_3_Port101_oUpkts[i11] =    Leaf27_3_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oUpkts[i11][0] = Leaf27_3_Port101_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_oUpkts[i11].includes("M")){
    Leaf27_3_Port101_oUpkts[i11] =    Leaf27_3_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oUpkts[i11][0] = Leaf27_3_Port101_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_oUpkts[i11].includes("K")){
    Leaf27_3_Port101_oUpkts[i11] =    Leaf27_3_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oUpkts[i11][0] = Leaf27_3_Port101_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_oUpkts[i11] =    Leaf27_3_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port101_oBpkts[i11].includes("G")){
    Leaf27_3_Port101_oBpkts[i11] =    Leaf27_3_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oBpkts[i11][0] = Leaf27_3_Port101_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_oBpkts[i11].includes("M")){
    Leaf27_3_Port101_oBpkts[i11] =    Leaf27_3_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oBpkts[i11][0] = Leaf27_3_Port101_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_oBpkts[i11].includes("K")){
    Leaf27_3_Port101_oBpkts[i11] =    Leaf27_3_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oBpkts[i11][0] = Leaf27_3_Port101_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_oBpkts[i11] =    Leaf27_3_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_oMpkts[i11].includes("G")){
    Leaf27_3_Port101_oMpkts[i11] =    Leaf27_3_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oMpkts[i11][0] = Leaf27_3_Port101_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port101_oMpkts[i11].includes("M")){
    Leaf27_3_Port101_oMpkts[i11] =    Leaf27_3_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oMpkts[i11][0] = Leaf27_3_Port101_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port101_oMpkts[i11].includes("K")){
    Leaf27_3_Port101_oMpkts[i11] =    Leaf27_3_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oMpkts[i11][0] = Leaf27_3_Port101_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port101_oMpkts[i11] =    Leaf27_3_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port101_oCongDrops[i11].includes("G")){
    Leaf27_3_Port101_oCongDrops[i11] =    Leaf27_3_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oCongDrops[i11][0] = Leaf27_3_Port101_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port101_oCongDrops[i11].includes("M")){
    Leaf27_3_Port101_oCongDrops[i11] =    Leaf27_3_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oCongDrops[i11][0] = Leaf27_3_Port101_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port101_oCongDrops[i11].includes("K")){
    Leaf27_3_Port101_oCongDrops[i11] =    Leaf27_3_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oCongDrops[i11][0] = Leaf27_3_Port101_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port101_oCongDrops[i11] =    Leaf27_3_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_oerrs[i11].includes("G")){
    Leaf27_3_Port101_oerrs[i11] =    Leaf27_3_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oerrs[i11][0] = Leaf27_3_Port101_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port101_oerrs[i11].includes("M")){
    Leaf27_3_Port101_oerrs[i11] =    Leaf27_3_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oerrs[i11][0] = Leaf27_3_Port101_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port101_oerrs[i11].includes("K")){
    Leaf27_3_Port101_oerrs[i11] =    Leaf27_3_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_oerrs[i11][0] = Leaf27_3_Port101_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port101_oerrs[i11] =    Leaf27_3_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port101_mtu_errs[i11].includes("G")){
    Leaf27_3_Port101_mtu_errs[i11] =    Leaf27_3_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_mtu_errs[i11][0] = Leaf27_3_Port101_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port101_mtu_errs[i11].includes("M")){
    Leaf27_3_Port101_mtu_errs[i11] =    Leaf27_3_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_mtu_errs[i11][0] = Leaf27_3_Port101_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port101_mtu_errs[i11].includes("K")){
    Leaf27_3_Port101_mtu_errs[i11] =    Leaf27_3_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port101_mtu_errs[i11][0] = Leaf27_3_Port101_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port101_mtu_errs[i11] =    Leaf27_3_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}
    
if(Leaf27_3_Port102[i11] !== undefined){ 
    Leaf27_3_Port102_fix[i11] =        Leaf27_3_Port102[i11].slice(26, 34);
    Leaf27_3_Port102_iUpkts[i11] =     Leaf27_3_Port102[i11].slice(33,40);
    Leaf27_3_Port102_iBpkts[i11] =     Leaf27_3_Port102[i11].slice(40,47);
    Leaf27_3_Port102_iMpkts[i11] =     Leaf27_3_Port102[i11].slice(47,54);
    Leaf27_3_Port102_iCongDrops[i11] = Leaf27_3_Port102[i11].slice(54,65);
    Leaf27_3_Port102_ierrs[i11] =      Leaf27_3_Port102[i11].slice(65,71);
    Leaf27_3_Port102_obytes[i11] =     Leaf27_3_Port102[i11].slice(71,78);
    Leaf27_3_Port102_oUpkts[i11] =     Leaf27_3_Port102[i11].slice(78,85);
    Leaf27_3_Port102_oBpkts[i11] =     Leaf27_3_Port102[i11].slice(85,92);
    Leaf27_3_Port102_oMpkts[i11] =     Leaf27_3_Port102[i11].slice(92,99);
    Leaf27_3_Port102_oCongDrops[i11] = Leaf27_3_Port102[i11].slice(99,110);
    Leaf27_3_Port102_oerrs[i11] =      Leaf27_3_Port102[i11].slice(110,116);
    Leaf27_3_Port102_mtu_errs[i11] =   Leaf27_3_Port102[i11].slice(116,125);

if( Leaf27_3_Port102_fix[i11].includes("G")){
    Leaf27_3_Port102_fix[i11] =    Leaf27_3_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_fix[i11][0] = Leaf27_3_Port102_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port102_fix[i11].includes("M")){
    Leaf27_3_Port102_fix[i11] =    Leaf27_3_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_fix[i11][0] = Leaf27_3_Port102_fix[i11][0]*1000000;}
else if(Leaf27_3_Port102_fix[i11].includes("K")){
    Leaf27_3_Port102_fix[i11] =    Leaf27_3_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_fix[i11][0] = Leaf27_3_Port102_fix[i11][0]*1000;}
else {  Leaf27_3_Port102_fix[i11] =    Leaf27_3_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

if( Leaf27_3_Port102_iUpkts[i11].includes("G")){
    Leaf27_3_Port102_iUpkts[i11] =    Leaf27_3_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iUpkts[i11][0] = Leaf27_3_Port102_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_iUpkts[i11].includes("M")){
    Leaf27_3_Port102_iUpkts[i11] =    Leaf27_3_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iUpkts[i11][0] = Leaf27_3_Port102_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_iUpkts[i11].includes("K")){
    Leaf27_3_Port102_iUpkts[i11] =    Leaf27_3_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iUpkts[i11][0] = Leaf27_3_Port102_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_iUpkts[i11] =    Leaf27_3_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_iBpkts[i11].includes("G")){
    Leaf27_3_Port102_iBpkts[i11] =    Leaf27_3_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iBpkts[i11][0] = Leaf27_3_Port102_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_iBpkts[i11].includes("M")){
    Leaf27_3_Port102_iBpkts[i11] =    Leaf27_3_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iBpkts[i11][0] = Leaf27_3_Port102_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_iBpkts[i11].includes("K")){
    Leaf27_3_Port102_iBpkts[i11] =    Leaf27_3_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iBpkts[i11][0] = Leaf27_3_Port102_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_iBpkts[i11] =    Leaf27_3_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port102_iMpkts[i11].includes("G")){
    Leaf27_3_Port102_iMpkts[i11] =    Leaf27_3_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iMpkts[i11][0] = Leaf27_3_Port102_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_iMpkts[i11].includes("M")){
    Leaf27_3_Port102_iMpkts[i11] =    Leaf27_3_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iMpkts[i11][0] = Leaf27_3_Port102_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_iMpkts[i11].includes("K")){
    Leaf27_3_Port102_iMpkts[i11] =    Leaf27_3_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iMpkts[i11][0] = Leaf27_3_Port102_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_iMpkts[i11] =    Leaf27_3_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_iCongDrops[i11].includes("G")){
    Leaf27_3_Port102_iCongDrops[i11] =    Leaf27_3_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iCongDrops[i11][0] = Leaf27_3_Port102_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port102_iCongDrops[i11].includes("M")){
    Leaf27_3_Port102_iCongDrops[i11] =    Leaf27_3_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iCongDrops[i11][0] = Leaf27_3_Port102_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port102_iCongDrops[i11].includes("K")){
    Leaf27_3_Port102_iCongDrops[i11] =    Leaf27_3_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_iCongDrops[i11][0] = Leaf27_3_Port102_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port102_iCongDrops[i11] =    Leaf27_3_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_ierrs[i11].includes("G")){
    Leaf27_3_Port102_ierrs[i11] =    Leaf27_3_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_ierrs[i11][0] = Leaf27_3_Port102_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port102_ierrs[i11].includes("M")){
    Leaf27_3_Port102_ierrs[i11] =    Leaf27_3_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_ierrs[i11][0] = Leaf27_3_Port102_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port102_ierrs[i11].includes("K")){
    Leaf27_3_Port102_ierrs[i11] =    Leaf27_3_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_ierrs[i11][0] = Leaf27_3_Port102_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port102_ierrs[i11] =    Leaf27_3_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port102_obytes[i11].includes("G")){
    Leaf27_3_Port102_obytes[i11] =    Leaf27_3_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_obytes[i11][0] = Leaf27_3_Port102_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port102_obytes[i11].includes("M")){
    Leaf27_3_Port102_obytes[i11] =    Leaf27_3_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_obytes[i11][0] = Leaf27_3_Port102_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port102_obytes[i11].includes("K")){
    Leaf27_3_Port102_obytes[i11] =    Leaf27_3_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_obytes[i11][0] = Leaf27_3_Port102_obytes[i11][0]*1000;}
else {  Leaf27_3_Port102_obytes[i11] =    Leaf27_3_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_oUpkts[i11].includes("G")){
    Leaf27_3_Port102_oUpkts[i11] =    Leaf27_3_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oUpkts[i11][0] = Leaf27_3_Port102_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_oUpkts[i11].includes("M")){
    Leaf27_3_Port102_oUpkts[i11] =    Leaf27_3_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oUpkts[i11][0] = Leaf27_3_Port102_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_oUpkts[i11].includes("K")){
    Leaf27_3_Port102_oUpkts[i11] =    Leaf27_3_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oUpkts[i11][0] = Leaf27_3_Port102_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_oUpkts[i11] =    Leaf27_3_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_oBpkts[i11].includes("G")){
    Leaf27_3_Port102_oBpkts[i11] =    Leaf27_3_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oBpkts[i11][0] = Leaf27_3_Port102_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_oBpkts[i11].includes("M")){
    Leaf27_3_Port102_oBpkts[i11] =    Leaf27_3_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oBpkts[i11][0] = Leaf27_3_Port102_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_oBpkts[i11].includes("K")){
    Leaf27_3_Port102_oBpkts[i11] =    Leaf27_3_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oBpkts[i11][0] = Leaf27_3_Port102_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_oBpkts[i11] =    Leaf27_3_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_oMpkts[i11].includes("G")){
    Leaf27_3_Port102_oMpkts[i11] =    Leaf27_3_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oMpkts[i11][0] = Leaf27_3_Port102_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port102_oMpkts[i11].includes("M")){
    Leaf27_3_Port102_oMpkts[i11] =    Leaf27_3_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oMpkts[i11][0] = Leaf27_3_Port102_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port102_oMpkts[i11].includes("K")){
    Leaf27_3_Port102_oMpkts[i11] =    Leaf27_3_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oMpkts[i11][0] = Leaf27_3_Port102_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port102_oMpkts[i11] =    Leaf27_3_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port102_oCongDrops[i11].includes("G")){
    Leaf27_3_Port102_oCongDrops[i11] =    Leaf27_3_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oCongDrops[i11][0] = Leaf27_3_Port102_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port102_oCongDrops[i11].includes("M")){
    Leaf27_3_Port102_oCongDrops[i11] =    Leaf27_3_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oCongDrops[i11][0] = Leaf27_3_Port102_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port102_oCongDrops[i11].includes("K")){
    Leaf27_3_Port102_oCongDrops[i11] =    Leaf27_3_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oCongDrops[i11][0] = Leaf27_3_Port102_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port102_oCongDrops[i11] =    Leaf27_3_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port102_oerrs[i11].includes("G")){
    Leaf27_3_Port102_oerrs[i11] =    Leaf27_3_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oerrs[i11][0] = Leaf27_3_Port102_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port102_oerrs[i11].includes("M")){
    Leaf27_3_Port102_oerrs[i11] =    Leaf27_3_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oerrs[i11][0] = Leaf27_3_Port102_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port102_oerrs[i11].includes("K")){
    Leaf27_3_Port102_oerrs[i11] =    Leaf27_3_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_oerrs[i11][0] = Leaf27_3_Port102_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port102_oerrs[i11] =    Leaf27_3_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port102_mtu_errs[i11].includes("G")){
    Leaf27_3_Port102_mtu_errs[i11] =    Leaf27_3_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_mtu_errs[i11][0] = Leaf27_3_Port102_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port102_mtu_errs[i11].includes("M")){
    Leaf27_3_Port102_mtu_errs[i11] =    Leaf27_3_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_mtu_errs[i11][0] = Leaf27_3_Port102_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port102_mtu_errs[i11].includes("K")){
    Leaf27_3_Port102_mtu_errs[i11] =    Leaf27_3_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port102_mtu_errs[i11][0] = Leaf27_3_Port102_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port102_mtu_errs[i11] =    Leaf27_3_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}
    
if(Leaf27_3_Port103[i11] !== undefined){ 
    Leaf27_3_Port103_fix[i11] =        Leaf27_3_Port103[i11].slice(26, 34);
    Leaf27_3_Port103_iUpkts[i11] =     Leaf27_3_Port103[i11].slice(33,40);
    Leaf27_3_Port103_iBpkts[i11] =     Leaf27_3_Port103[i11].slice(40,47);
    Leaf27_3_Port103_iMpkts[i11] =     Leaf27_3_Port103[i11].slice(47,54);
    Leaf27_3_Port103_iCongDrops[i11] = Leaf27_3_Port103[i11].slice(54,65);
    Leaf27_3_Port103_ierrs[i11] =      Leaf27_3_Port103[i11].slice(65,71);
    Leaf27_3_Port103_obytes[i11] =     Leaf27_3_Port103[i11].slice(71,78);
    Leaf27_3_Port103_oUpkts[i11] =     Leaf27_3_Port103[i11].slice(78,85);
    Leaf27_3_Port103_oBpkts[i11] =     Leaf27_3_Port103[i11].slice(85,92);
    Leaf27_3_Port103_oMpkts[i11] =     Leaf27_3_Port103[i11].slice(92,99);
    Leaf27_3_Port103_oCongDrops[i11] = Leaf27_3_Port103[i11].slice(99,110);
    Leaf27_3_Port103_oerrs[i11] =      Leaf27_3_Port103[i11].slice(110,116);
    Leaf27_3_Port103_mtu_errs[i11] =   Leaf27_3_Port103[i11].slice(116,125);

if( Leaf27_3_Port103_fix[i11].includes("G")){
    Leaf27_3_Port103_fix[i11] =    Leaf27_3_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_fix[i11][0] = Leaf27_3_Port103_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port103_fix[i11].includes("M")){
    Leaf27_3_Port103_fix[i11] =    Leaf27_3_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_fix[i11][0] = Leaf27_3_Port103_fix[i11][0]*1000000;}
else if(Leaf27_3_Port103_fix[i11].includes("K")){
    Leaf27_3_Port103_fix[i11] =    Leaf27_3_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_fix[i11][0] = Leaf27_3_Port103_fix[i11][0]*1000;}
else {  Leaf27_3_Port103_fix[i11] =    Leaf27_3_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

if( Leaf27_3_Port103_iUpkts[i11].includes("G")){
    Leaf27_3_Port103_iUpkts[i11] =    Leaf27_3_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iUpkts[i11][0] = Leaf27_3_Port103_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_iUpkts[i11].includes("M")){
    Leaf27_3_Port103_iUpkts[i11] =    Leaf27_3_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iUpkts[i11][0] = Leaf27_3_Port103_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_iUpkts[i11].includes("K")){
    Leaf27_3_Port103_iUpkts[i11] =    Leaf27_3_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iUpkts[i11][0] = Leaf27_3_Port103_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_iUpkts[i11] =    Leaf27_3_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_iBpkts[i11].includes("G")){
    Leaf27_3_Port103_iBpkts[i11] =    Leaf27_3_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iBpkts[i11][0] = Leaf27_3_Port103_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_iBpkts[i11].includes("M")){
    Leaf27_3_Port103_iBpkts[i11] =    Leaf27_3_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iBpkts[i11][0] = Leaf27_3_Port103_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_iBpkts[i11].includes("K")){
    Leaf27_3_Port103_iBpkts[i11] =    Leaf27_3_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iBpkts[i11][0] = Leaf27_3_Port103_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_iBpkts[i11] =    Leaf27_3_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port103_iMpkts[i11].includes("G")){
    Leaf27_3_Port103_iMpkts[i11] =    Leaf27_3_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iMpkts[i11][0] = Leaf27_3_Port103_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_iMpkts[i11].includes("M")){
    Leaf27_3_Port103_iMpkts[i11] =    Leaf27_3_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iMpkts[i11][0] = Leaf27_3_Port103_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_iMpkts[i11].includes("K")){
    Leaf27_3_Port103_iMpkts[i11] =    Leaf27_3_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iMpkts[i11][0] = Leaf27_3_Port103_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_iMpkts[i11] =    Leaf27_3_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_iCongDrops[i11].includes("G")){
    Leaf27_3_Port103_iCongDrops[i11] =    Leaf27_3_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iCongDrops[i11][0] = Leaf27_3_Port103_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port103_iCongDrops[i11].includes("M")){
    Leaf27_3_Port103_iCongDrops[i11] =    Leaf27_3_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iCongDrops[i11][0] = Leaf27_3_Port103_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port103_iCongDrops[i11].includes("K")){
    Leaf27_3_Port103_iCongDrops[i11] =    Leaf27_3_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_iCongDrops[i11][0] = Leaf27_3_Port103_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port103_iCongDrops[i11] =    Leaf27_3_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port103_ierrs[i11].includes("G")){
    Leaf27_3_Port103_ierrs[i11] =    Leaf27_3_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_ierrs[i11][0] = Leaf27_3_Port103_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port103_ierrs[i11].includes("M")){
    Leaf27_3_Port103_ierrs[i11] =    Leaf27_3_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_ierrs[i11][0] = Leaf27_3_Port103_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port103_ierrs[i11].includes("K")){
    Leaf27_3_Port103_ierrs[i11] =    Leaf27_3_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_ierrs[i11][0] = Leaf27_3_Port103_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port103_ierrs[i11] =    Leaf27_3_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_obytes[i11].includes("G")){
    Leaf27_3_Port103_obytes[i11] =    Leaf27_3_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_obytes[i11][0] = Leaf27_3_Port103_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port103_obytes[i11].includes("M")){
    Leaf27_3_Port103_obytes[i11] =    Leaf27_3_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_obytes[i11][0] = Leaf27_3_Port103_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port103_obytes[i11].includes("K")){
    Leaf27_3_Port103_obytes[i11] =    Leaf27_3_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_obytes[i11][0] = Leaf27_3_Port103_obytes[i11][0]*1000;}
else {  Leaf27_3_Port103_obytes[i11] =    Leaf27_3_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_oUpkts[i11].includes("G")){
    Leaf27_3_Port103_oUpkts[i11] =    Leaf27_3_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oUpkts[i11][0] = Leaf27_3_Port103_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_oUpkts[i11].includes("M")){
    Leaf27_3_Port103_oUpkts[i11] =    Leaf27_3_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oUpkts[i11][0] = Leaf27_3_Port103_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_oUpkts[i11].includes("K")){
    Leaf27_3_Port103_oUpkts[i11] =    Leaf27_3_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oUpkts[i11][0] = Leaf27_3_Port103_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_oUpkts[i11] =    Leaf27_3_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_oBpkts[i11].includes("G")){
    Leaf27_3_Port103_oBpkts[i11] =    Leaf27_3_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oBpkts[i11][0] = Leaf27_3_Port103_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_oBpkts[i11].includes("M")){
    Leaf27_3_Port103_oBpkts[i11] =    Leaf27_3_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oBpkts[i11][0] = Leaf27_3_Port103_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_oBpkts[i11].includes("K")){
    Leaf27_3_Port103_oBpkts[i11] =    Leaf27_3_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oBpkts[i11][0] = Leaf27_3_Port103_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_oBpkts[i11] =    Leaf27_3_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port103_oMpkts[i11].includes("G")){
    Leaf27_3_Port103_oMpkts[i11] =    Leaf27_3_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oMpkts[i11][0] = Leaf27_3_Port103_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port103_oMpkts[i11].includes("M")){
    Leaf27_3_Port103_oMpkts[i11] =    Leaf27_3_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oMpkts[i11][0] = Leaf27_3_Port103_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port103_oMpkts[i11].includes("K")){
    Leaf27_3_Port103_oMpkts[i11] =    Leaf27_3_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oMpkts[i11][0] = Leaf27_3_Port103_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port103_oMpkts[i11] =    Leaf27_3_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port103_oCongDrops[i11].includes("G")){
    Leaf27_3_Port103_oCongDrops[i11] =    Leaf27_3_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oCongDrops[i11][0] = Leaf27_3_Port103_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port103_oCongDrops[i11].includes("M")){
    Leaf27_3_Port103_oCongDrops[i11] =    Leaf27_3_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oCongDrops[i11][0] = Leaf27_3_Port103_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port103_oCongDrops[i11].includes("K")){
    Leaf27_3_Port103_oCongDrops[i11] =    Leaf27_3_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oCongDrops[i11][0] = Leaf27_3_Port103_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port103_oCongDrops[i11] =    Leaf27_3_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port103_oerrs[i11].includes("G")){
    Leaf27_3_Port103_oerrs[i11] =    Leaf27_3_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oerrs[i11][0] = Leaf27_3_Port103_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port103_oerrs[i11].includes("M")){
    Leaf27_3_Port103_oerrs[i11] =    Leaf27_3_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oerrs[i11][0] = Leaf27_3_Port103_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port103_oerrs[i11].includes("K")){
    Leaf27_3_Port103_oerrs[i11] =    Leaf27_3_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_oerrs[i11][0] = Leaf27_3_Port103_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port103_oerrs[i11] =    Leaf27_3_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port103_mtu_errs[i11].includes("G")){
    Leaf27_3_Port103_mtu_errs[i11] =    Leaf27_3_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_mtu_errs[i11][0] = Leaf27_3_Port103_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port103_mtu_errs[i11].includes("M")){
    Leaf27_3_Port103_mtu_errs[i11] =    Leaf27_3_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_mtu_errs[i11][0] = Leaf27_3_Port103_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port103_mtu_errs[i11].includes("K")){
    Leaf27_3_Port103_mtu_errs[i11] =    Leaf27_3_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port103_mtu_errs[i11][0] = Leaf27_3_Port103_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port103_mtu_errs[i11] =    Leaf27_3_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }}

if(Leaf27_3_Port104[i11] !== undefined){ 
    Leaf27_3_Port104_fix[i11] =        Leaf27_3_Port104[i11].slice(26, 34);
    Leaf27_3_Port104_iUpkts[i11] =     Leaf27_3_Port104[i11].slice(33,40);
    Leaf27_3_Port104_iBpkts[i11] =     Leaf27_3_Port104[i11].slice(40,47);
    Leaf27_3_Port104_iMpkts[i11] =     Leaf27_3_Port104[i11].slice(47,54);
    Leaf27_3_Port104_iCongDrops[i11] = Leaf27_3_Port104[i11].slice(54,65);
    Leaf27_3_Port104_ierrs[i11] =      Leaf27_3_Port104[i11].slice(65,71);
    Leaf27_3_Port104_obytes[i11] =     Leaf27_3_Port104[i11].slice(71,78);
    Leaf27_3_Port104_oUpkts[i11] =     Leaf27_3_Port104[i11].slice(78,85);
    Leaf27_3_Port104_oBpkts[i11] =     Leaf27_3_Port104[i11].slice(85,92);
    Leaf27_3_Port104_oMpkts[i11] =     Leaf27_3_Port104[i11].slice(92,99);
    Leaf27_3_Port104_oCongDrops[i11] = Leaf27_3_Port104[i11].slice(99,110);
    Leaf27_3_Port104_oerrs[i11] =      Leaf27_3_Port104[i11].slice(110,116);
    Leaf27_3_Port104_mtu_errs[i11] =   Leaf27_3_Port104[i11].slice(116,125);

if( Leaf27_3_Port104_fix[i11].includes("G")){
    Leaf27_3_Port104_fix[i11] =    Leaf27_3_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_fix[i11][0] = Leaf27_3_Port104_fix[i11][0]*1000000000;}
else if(Leaf27_3_Port104_fix[i11].includes("M")){
    Leaf27_3_Port104_fix[i11] =    Leaf27_3_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_fix[i11][0] = Leaf27_3_Port104_fix[i11][0]*1000000;}
else if(Leaf27_3_Port104_fix[i11].includes("K")){
    Leaf27_3_Port104_fix[i11] =    Leaf27_3_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_fix[i11][0] = Leaf27_3_Port104_fix[i11][0]*1000;}
else {  Leaf27_3_Port104_fix[i11] =    Leaf27_3_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

if( Leaf27_3_Port104_iUpkts[i11].includes("G")){
    Leaf27_3_Port104_iUpkts[i11] =    Leaf27_3_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iUpkts[i11][0] = Leaf27_3_Port104_iUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_iUpkts[i11].includes("M")){
    Leaf27_3_Port104_iUpkts[i11] =    Leaf27_3_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iUpkts[i11][0] = Leaf27_3_Port104_iUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_iUpkts[i11].includes("K")){
    Leaf27_3_Port104_iUpkts[i11] =    Leaf27_3_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iUpkts[i11][0] = Leaf27_3_Port104_iUpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_iUpkts[i11] =    Leaf27_3_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    }

    if(Leaf27_3_Port104_iBpkts[i11].includes("G")){
    Leaf27_3_Port104_iBpkts[i11] =    Leaf27_3_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iBpkts[i11][0] = Leaf27_3_Port104_iBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_iBpkts[i11].includes("M")){
    Leaf27_3_Port104_iBpkts[i11] =    Leaf27_3_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iBpkts[i11][0] = Leaf27_3_Port104_iBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_iBpkts[i11].includes("K")){
    Leaf27_3_Port104_iBpkts[i11] =    Leaf27_3_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iBpkts[i11][0] = Leaf27_3_Port104_iBpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_iBpkts[i11] =    Leaf27_3_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_iMpkts[i11].includes("G")){
    Leaf27_3_Port104_iMpkts[i11] =    Leaf27_3_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iMpkts[i11][0] = Leaf27_3_Port104_iMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_iMpkts[i11].includes("M")){
    Leaf27_3_Port104_iMpkts[i11] =    Leaf27_3_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iMpkts[i11][0] = Leaf27_3_Port104_iMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_iMpkts[i11].includes("K")){
    Leaf27_3_Port104_iMpkts[i11] =    Leaf27_3_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iMpkts[i11][0] = Leaf27_3_Port104_iMpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_iMpkts[i11] =    Leaf27_3_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
 }

    if(Leaf27_3_Port104_iCongDrops[i11].includes("G")){
    Leaf27_3_Port104_iCongDrops[i11] =    Leaf27_3_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iCongDrops[i11][0] = Leaf27_3_Port104_iCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port104_iCongDrops[i11].includes("M")){
    Leaf27_3_Port104_iCongDrops[i11] =    Leaf27_3_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iCongDrops[i11][0] = Leaf27_3_Port104_iCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port104_iCongDrops[i11].includes("K")){
    Leaf27_3_Port104_iCongDrops[i11] =    Leaf27_3_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_iCongDrops[i11][0] = Leaf27_3_Port104_iCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port104_iCongDrops[i11] =    Leaf27_3_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_ierrs[i11].includes("G")){
    Leaf27_3_Port104_ierrs[i11] =    Leaf27_3_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_ierrs[i11][0] = Leaf27_3_Port104_ierrs[i11][0]*1000000000;}
else if(Leaf27_3_Port104_ierrs[i11].includes("M")){
    Leaf27_3_Port104_ierrs[i11] =    Leaf27_3_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_ierrs[i11][0] = Leaf27_3_Port104_ierrs[i11][0]*1000000;}
else if(Leaf27_3_Port104_ierrs[i11].includes("K")){
    Leaf27_3_Port104_ierrs[i11] =    Leaf27_3_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_ierrs[i11][0] = Leaf27_3_Port104_ierrs[i11][0]*1000;}
else {  Leaf27_3_Port104_ierrs[i11] =    Leaf27_3_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_obytes[i11].includes("G")){
    Leaf27_3_Port104_obytes[i11] =    Leaf27_3_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_obytes[i11][0] = Leaf27_3_Port104_obytes[i11][0]*1000000000;}
else if(Leaf27_3_Port104_obytes[i11].includes("M")){
    Leaf27_3_Port104_obytes[i11] =    Leaf27_3_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_obytes[i11][0] = Leaf27_3_Port104_obytes[i11][0]*1000000;}
else if(Leaf27_3_Port104_obytes[i11].includes("K")){
    Leaf27_3_Port104_obytes[i11] =    Leaf27_3_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_obytes[i11][0] = Leaf27_3_Port104_obytes[i11][0]*1000;}
else {  Leaf27_3_Port104_obytes[i11] =    Leaf27_3_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port104_oUpkts[i11].includes("G")){
    Leaf27_3_Port104_oUpkts[i11] =    Leaf27_3_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oUpkts[i11][0] = Leaf27_3_Port104_oUpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_oUpkts[i11].includes("M")){
    Leaf27_3_Port104_oUpkts[i11] =    Leaf27_3_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oUpkts[i11][0] = Leaf27_3_Port104_oUpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_oUpkts[i11].includes("K")){
    Leaf27_3_Port104_oUpkts[i11] =    Leaf27_3_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oUpkts[i11][0] = Leaf27_3_Port104_oUpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_oUpkts[i11] =    Leaf27_3_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
  }

    if(Leaf27_3_Port104_oBpkts[i11].includes("G")){
    Leaf27_3_Port104_oBpkts[i11] =    Leaf27_3_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oBpkts[i11][0] = Leaf27_3_Port104_oBpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_oBpkts[i11].includes("M")){
    Leaf27_3_Port104_oBpkts[i11] =    Leaf27_3_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oBpkts[i11][0] = Leaf27_3_Port104_oBpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_oBpkts[i11].includes("K")){
    Leaf27_3_Port104_oBpkts[i11] =    Leaf27_3_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oBpkts[i11][0] = Leaf27_3_Port104_oBpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_oBpkts[i11] =    Leaf27_3_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_oMpkts[i11].includes("G")){
    Leaf27_3_Port104_oMpkts[i11] =    Leaf27_3_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oMpkts[i11][0] = Leaf27_3_Port104_oMpkts[i11][0]*1000000000;}
else if(Leaf27_3_Port104_oMpkts[i11].includes("M")){
    Leaf27_3_Port104_oMpkts[i11] =    Leaf27_3_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oMpkts[i11][0] = Leaf27_3_Port104_oMpkts[i11][0]*1000000;}
else if(Leaf27_3_Port104_oMpkts[i11].includes("K")){
    Leaf27_3_Port104_oMpkts[i11] =    Leaf27_3_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oMpkts[i11][0] = Leaf27_3_Port104_oMpkts[i11][0]*1000;}
else {  Leaf27_3_Port104_oMpkts[i11] =    Leaf27_3_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_oCongDrops[i11].includes("G")){
    Leaf27_3_Port104_oCongDrops[i11] =    Leaf27_3_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oCongDrops[i11][0] = Leaf27_3_Port104_oCongDrops[i11][0]*1000000000;}
else if(Leaf27_3_Port104_oCongDrops[i11].includes("M")){
    Leaf27_3_Port104_oCongDrops[i11] =    Leaf27_3_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oCongDrops[i11][0] = Leaf27_3_Port104_oCongDrops[i11][0]*1000000;}
else if(Leaf27_3_Port104_oCongDrops[i11].includes("K")){
    Leaf27_3_Port104_oCongDrops[i11] =    Leaf27_3_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oCongDrops[i11][0] = Leaf27_3_Port104_oCongDrops[i11][0]*1000;}
else {  Leaf27_3_Port104_oCongDrops[i11] =    Leaf27_3_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_oerrs[i11].includes("G")){
    Leaf27_3_Port104_oerrs[i11] =    Leaf27_3_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oerrs[i11][0] = Leaf27_3_Port104_oerrs[i11][0]*1000000000;}
else if(Leaf27_3_Port104_oerrs[i11].includes("M")){
    Leaf27_3_Port104_oerrs[i11] =    Leaf27_3_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oerrs[i11][0] = Leaf27_3_Port104_oerrs[i11][0]*1000000;}
else if(Leaf27_3_Port104_oerrs[i11].includes("K")){
    Leaf27_3_Port104_oerrs[i11] =    Leaf27_3_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_oerrs[i11][0] = Leaf27_3_Port104_oerrs[i11][0]*1000;}
else {  Leaf27_3_Port104_oerrs[i11] =    Leaf27_3_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }

    if(Leaf27_3_Port104_mtu_errs[i11].includes("G")){
    Leaf27_3_Port104_mtu_errs[i11] =    Leaf27_3_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_mtu_errs[i11][0] = Leaf27_3_Port104_mtu_errs[i11][0]*1000000000;}
else if(Leaf27_3_Port104_mtu_errs[i11].includes("M")){
    Leaf27_3_Port104_mtu_errs[i11] =    Leaf27_3_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_mtu_errs[i11][0] = Leaf27_3_Port104_mtu_errs[i11][0]*1000000;}
else if(Leaf27_3_Port104_mtu_errs[i11].includes("K")){
    Leaf27_3_Port104_mtu_errs[i11] =    Leaf27_3_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
    Leaf27_3_Port104_mtu_errs[i11][0] = Leaf27_3_Port104_mtu_errs[i11][0]*1000;}
else {  Leaf27_3_Port104_mtu_errs[i11] =    Leaf27_3_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
   }}

   this.state.chartData16.datasets[0].data.push(   Leaf27_3_Port1_fix[i11][0]);
   this.state.chartData16.datasets[1].data.push(   Leaf27_3_Port2_fix[i11][0]);
   this.state.chartData16.datasets[2].data.push(   Leaf27_3_Port3_fix[i11][0]);
   this.state.chartData16.datasets[3].data.push(   Leaf27_3_Port4_fix[i11][0]);
   this.state.chartData16.datasets[4].data.push(   Leaf27_3_Port8_fix[i11][0]);
   this.state.chartData16.datasets[5].data.push(  Leaf27_3_Port10_fix[i11][0]);
   this.state.chartData16.datasets[6].data.push(  Leaf27_3_Port13_fix[i11][0]);
   this.state.chartData16.datasets[7].data.push(  Leaf27_3_Port17_fix[i11][0]);
// this.state.chartData16.datasets[8].data.push(  Leaf27_3_Port81_fix[i11][0]);
// this.state.chartData16.datasets[9].data.push(  Leaf27_3_Port85_fix[i11][0]);
   this.state.chartData16.datasets[11].data.push( Leaf27_3_Port86_fix[i11][0]);
   this.state.chartData16.datasets[10].data.push( Leaf27_3_Port87_fix[i11][0]);
   this.state.chartData16.datasets[12].data.push( Leaf27_3_Port88_fix[i11][0]);
   this.state.chartData16.datasets[13].data.push( Leaf27_3_Port89_fix[i11][0]);
   this.state.chartData16.datasets[14].data.push( Leaf27_3_Port90_fix[i11][0]);
   this.state.chartData16.datasets[15].data.push( Leaf27_3_Port91_fix[i11][0]);
   this.state.chartData16.datasets[16].data.push( Leaf27_3_Port92_fix[i11][0]);
   this.state.chartData16.datasets[17].data.push( Leaf27_3_Port93_fix[i11][0]);
   this.state.chartData16.datasets[18].data.push( Leaf27_3_Port94_fix[i11][0]);
   this.state.chartData16.datasets[19].data.push( Leaf27_3_Port95_fix[i11][0]);
   this.state.chartData16.datasets[20].data.push( Leaf27_3_Port96_fix[i11][0]);
   this.state.chartData16.datasets[21].data.push( Leaf27_3_Port97_fix[i11][0]);
   this.state.chartData16.datasets[22].data.push( Leaf27_3_Port98_fix[i11][0]);
   this.state.chartData16.datasets[23].data.push( Leaf27_3_Port99_fix[i11][0]);
   this.state.chartData16.datasets[24].data.push(Leaf27_3_Port100_fix[i11][0]);
   this.state.chartData16.datasets[25].data.push(Leaf27_3_Port101_fix[i11][0]);
   this.state.chartData16.datasets[26].data.push(Leaf27_3_Port102_fix[i11][0]);
   this.state.chartData16.datasets[27].data.push(Leaf27_3_Port103_fix[i11][0]);
   this.state.chartData16.datasets[28].data.push(Leaf27_3_Port104_fix[i11][0]);
   this.state.chartData16.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData16.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData16.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData16.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData16.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData16.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData16.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData16.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData16.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData16.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData16.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData16.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData16.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData16.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData16.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData16.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData16.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData16.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData16.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData16.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData16.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData16.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData16.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData16.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData16.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData16.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData16.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData16.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData16.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData22.datasets[0].data.push(   Leaf27_3_Port1_iUpkts[i11][0]);
   this.state.chartData22.datasets[1].data.push(   Leaf27_3_Port2_iUpkts[i11][0]);
   this.state.chartData22.datasets[2].data.push(   Leaf27_3_Port3_iUpkts[i11][0]);
   this.state.chartData22.datasets[3].data.push(   Leaf27_3_Port4_iUpkts[i11][0]);
   this.state.chartData22.datasets[4].data.push(   Leaf27_3_Port8_iUpkts[i11][0]);
   this.state.chartData22.datasets[5].data.push(  Leaf27_3_Port10_iUpkts[i11][0]);
   this.state.chartData22.datasets[6].data.push(  Leaf27_3_Port13_iUpkts[i11][0]);
   this.state.chartData22.datasets[7].data.push(  Leaf27_3_Port17_iUpkts[i11][0]);
// this.state.chartData22.datasets[8].data.push(  Leaf27_3_Port81_iUpkts[i11][0]);
// this.state.chartData22.datasets[9].data.push(  Leaf27_3_Port85_iUpkts[i11][0]);
   this.state.chartData22.datasets[11].data.push( Leaf27_3_Port86_iUpkts[i11][0]);
   this.state.chartData22.datasets[10].data.push( Leaf27_3_Port87_iUpkts[i11][0]);
   this.state.chartData22.datasets[12].data.push( Leaf27_3_Port88_iUpkts[i11][0]);
   this.state.chartData22.datasets[13].data.push( Leaf27_3_Port89_iUpkts[i11][0]);
   this.state.chartData22.datasets[14].data.push( Leaf27_3_Port90_iUpkts[i11][0]);
   this.state.chartData22.datasets[15].data.push( Leaf27_3_Port91_iUpkts[i11][0]);
   this.state.chartData22.datasets[16].data.push( Leaf27_3_Port92_iUpkts[i11][0]);
   this.state.chartData22.datasets[17].data.push( Leaf27_3_Port93_iUpkts[i11][0]);
   this.state.chartData22.datasets[18].data.push( Leaf27_3_Port94_iUpkts[i11][0]);
   this.state.chartData22.datasets[19].data.push( Leaf27_3_Port95_iUpkts[i11][0]);
   this.state.chartData22.datasets[20].data.push( Leaf27_3_Port96_iUpkts[i11][0]);
   this.state.chartData22.datasets[21].data.push( Leaf27_3_Port97_iUpkts[i11][0]);
   this.state.chartData22.datasets[22].data.push( Leaf27_3_Port98_iUpkts[i11][0]);
   this.state.chartData22.datasets[23].data.push( Leaf27_3_Port99_iUpkts[i11][0]);
   this.state.chartData22.datasets[24].data.push(Leaf27_3_Port100_iUpkts[i11][0]);
   this.state.chartData22.datasets[25].data.push(Leaf27_3_Port101_iUpkts[i11][0]);
   this.state.chartData22.datasets[26].data.push(Leaf27_3_Port102_iUpkts[i11][0]);
   this.state.chartData22.datasets[27].data.push(Leaf27_3_Port103_iUpkts[i11][0]);
   this.state.chartData22.datasets[28].data.push(Leaf27_3_Port104_iUpkts[i11][0]);
   this.state.chartData22.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData22.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData22.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData22.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData22.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData22.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData22.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData22.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData22.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData22.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData22.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData22.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData22.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData22.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData22.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData22.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData22.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData22.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData22.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData22.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData22.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData22.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData22.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData22.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData22.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData22.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData22.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData22.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData22.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData28.datasets[0].data.push(   Leaf27_3_Port1_iBpkts[i11][0]);
   this.state.chartData28.datasets[1].data.push(   Leaf27_3_Port2_iBpkts[i11][0]);
   this.state.chartData28.datasets[2].data.push(   Leaf27_3_Port3_iBpkts[i11][0]);
   this.state.chartData28.datasets[3].data.push(   Leaf27_3_Port4_iBpkts[i11][0]);
   this.state.chartData28.datasets[4].data.push(   Leaf27_3_Port8_iBpkts[i11][0]);
   this.state.chartData28.datasets[5].data.push(  Leaf27_3_Port10_iBpkts[i11][0]);
   this.state.chartData28.datasets[6].data.push(  Leaf27_3_Port13_iBpkts[i11][0]);
   this.state.chartData28.datasets[7].data.push(  Leaf27_3_Port17_iBpkts[i11][0]);
// this.state.chartData28.datasets[8].data.push(  Leaf27_3_Port81_iBpkts[i11][0]);
// this.state.chartData28.datasets[9].data.push(  Leaf27_3_Port85_iBpkts[i11][0]);
   this.state.chartData28.datasets[11].data.push( Leaf27_3_Port86_iBpkts[i11][0]);
   this.state.chartData28.datasets[10].data.push( Leaf27_3_Port87_iBpkts[i11][0]);
   this.state.chartData28.datasets[12].data.push( Leaf27_3_Port88_iBpkts[i11][0]);
   this.state.chartData28.datasets[13].data.push( Leaf27_3_Port89_iBpkts[i11][0]);
   this.state.chartData28.datasets[14].data.push( Leaf27_3_Port90_iBpkts[i11][0]);
   this.state.chartData28.datasets[15].data.push( Leaf27_3_Port91_iBpkts[i11][0]);
   this.state.chartData28.datasets[16].data.push( Leaf27_3_Port92_iBpkts[i11][0]);
   this.state.chartData28.datasets[17].data.push( Leaf27_3_Port93_iBpkts[i11][0]);
   this.state.chartData28.datasets[18].data.push( Leaf27_3_Port94_iBpkts[i11][0]);
   this.state.chartData28.datasets[19].data.push( Leaf27_3_Port95_iBpkts[i11][0]);
   this.state.chartData28.datasets[20].data.push( Leaf27_3_Port96_iBpkts[i11][0]);
   this.state.chartData28.datasets[21].data.push( Leaf27_3_Port97_iBpkts[i11][0]);
   this.state.chartData28.datasets[22].data.push( Leaf27_3_Port98_iBpkts[i11][0]);
   this.state.chartData28.datasets[23].data.push( Leaf27_3_Port99_iBpkts[i11][0]);
   this.state.chartData28.datasets[24].data.push(Leaf27_3_Port100_iBpkts[i11][0]);
   this.state.chartData28.datasets[25].data.push(Leaf27_3_Port101_iBpkts[i11][0]);
   this.state.chartData28.datasets[26].data.push(Leaf27_3_Port102_iBpkts[i11][0]);
   this.state.chartData28.datasets[27].data.push(Leaf27_3_Port103_iBpkts[i11][0]);
   this.state.chartData28.datasets[28].data.push(Leaf27_3_Port104_iBpkts[i11][0]);
   this.state.chartData28.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData28.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData28.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData28.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData28.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData28.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData28.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData28.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData28.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData28.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData28.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData28.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData28.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData28.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData28.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData28.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData28.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData28.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData28.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData28.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData28.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData28.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData28.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData28.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData28.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData28.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData28.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData28.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData28.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');
   
   this.state.chartData34.datasets[0].data.push(   Leaf27_3_Port1_iMpkts[i11][0]);
   this.state.chartData34.datasets[1].data.push(   Leaf27_3_Port2_iMpkts[i11][0]);
   this.state.chartData34.datasets[2].data.push(   Leaf27_3_Port3_iMpkts[i11][0]);
   this.state.chartData34.datasets[3].data.push(   Leaf27_3_Port4_iMpkts[i11][0]);
   this.state.chartData34.datasets[4].data.push(   Leaf27_3_Port8_iMpkts[i11][0]);
   this.state.chartData34.datasets[5].data.push(  Leaf27_3_Port10_iMpkts[i11][0]);
   this.state.chartData34.datasets[6].data.push(  Leaf27_3_Port13_iMpkts[i11][0]);
   this.state.chartData34.datasets[7].data.push(  Leaf27_3_Port17_iMpkts[i11][0]);
// this.state.chartData34.datasets[8].data.push(  Leaf27_3_Port81_iMpkts[i11][0]);
// this.state.chartData34.datasets[9].data.push(  Leaf27_3_Port85_iMpkts[i11][0]);
   this.state.chartData34.datasets[11].data.push( Leaf27_3_Port86_iMpkts[i11][0]);
   this.state.chartData34.datasets[10].data.push( Leaf27_3_Port87_iMpkts[i11][0]);
   this.state.chartData34.datasets[12].data.push( Leaf27_3_Port88_iMpkts[i11][0]);
   this.state.chartData34.datasets[13].data.push( Leaf27_3_Port89_iMpkts[i11][0]);
   this.state.chartData34.datasets[14].data.push( Leaf27_3_Port90_iMpkts[i11][0]);
   this.state.chartData34.datasets[15].data.push( Leaf27_3_Port91_iMpkts[i11][0]);
   this.state.chartData34.datasets[16].data.push( Leaf27_3_Port92_iMpkts[i11][0]);
   this.state.chartData34.datasets[17].data.push( Leaf27_3_Port93_iMpkts[i11][0]);
   this.state.chartData34.datasets[18].data.push( Leaf27_3_Port94_iMpkts[i11][0]);
   this.state.chartData34.datasets[19].data.push( Leaf27_3_Port95_iMpkts[i11][0]);
   this.state.chartData34.datasets[20].data.push( Leaf27_3_Port96_iMpkts[i11][0]);
   this.state.chartData34.datasets[21].data.push( Leaf27_3_Port97_iMpkts[i11][0]);
   this.state.chartData34.datasets[22].data.push( Leaf27_3_Port98_iMpkts[i11][0]);
   this.state.chartData34.datasets[23].data.push( Leaf27_3_Port99_iMpkts[i11][0]);
   this.state.chartData34.datasets[24].data.push(Leaf27_3_Port100_iMpkts[i11][0]);
   this.state.chartData34.datasets[25].data.push(Leaf27_3_Port101_iMpkts[i11][0]);
   this.state.chartData34.datasets[26].data.push(Leaf27_3_Port102_iMpkts[i11][0]);
   this.state.chartData34.datasets[27].data.push(Leaf27_3_Port103_iMpkts[i11][0]);
   this.state.chartData34.datasets[28].data.push(Leaf27_3_Port104_iMpkts[i11][0]);
   this.state.chartData34.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData34.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData34.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData34.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData34.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData34.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData34.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData34.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData34.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData34.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData34.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData34.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData34.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData34.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData34.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData34.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData34.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData34.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData34.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData34.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData34.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData34.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData34.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData34.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData34.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData34.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData34.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData34.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData34.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData40.datasets[0].data.push(   Leaf27_3_Port1_iCongDrops[i11][0]);
   this.state.chartData40.datasets[1].data.push(   Leaf27_3_Port2_iCongDrops[i11][0]);
   this.state.chartData40.datasets[2].data.push(   Leaf27_3_Port3_iCongDrops[i11][0]);
   this.state.chartData40.datasets[3].data.push(   Leaf27_3_Port4_iCongDrops[i11][0]);
   this.state.chartData40.datasets[4].data.push(   Leaf27_3_Port8_iCongDrops[i11][0]);
   this.state.chartData40.datasets[5].data.push(  Leaf27_3_Port10_iCongDrops[i11][0]);
   this.state.chartData40.datasets[6].data.push(  Leaf27_3_Port13_iCongDrops[i11][0]);
   this.state.chartData40.datasets[7].data.push(  Leaf27_3_Port17_iCongDrops[i11][0]);
// this.state.chartData40.datasets[8].data.push(  Leaf27_3_Port81_iCongDrops[i11][0]);
// this.state.chartData40.datasets[9].data.push(  Leaf27_3_Port85_iCongDrops[i11][0]);
   this.state.chartData40.datasets[11].data.push( Leaf27_3_Port86_iCongDrops[i11][0]);
   this.state.chartData40.datasets[10].data.push( Leaf27_3_Port87_iCongDrops[i11][0]);
   this.state.chartData40.datasets[12].data.push( Leaf27_3_Port88_iCongDrops[i11][0]);
   this.state.chartData40.datasets[13].data.push( Leaf27_3_Port89_iCongDrops[i11][0]);
   this.state.chartData40.datasets[14].data.push( Leaf27_3_Port90_iCongDrops[i11][0]);
   this.state.chartData40.datasets[15].data.push( Leaf27_3_Port91_iCongDrops[i11][0]);
   this.state.chartData40.datasets[16].data.push( Leaf27_3_Port92_iCongDrops[i11][0]);
   this.state.chartData40.datasets[17].data.push( Leaf27_3_Port93_iCongDrops[i11][0]);
   this.state.chartData40.datasets[18].data.push( Leaf27_3_Port94_iCongDrops[i11][0]);
   this.state.chartData40.datasets[19].data.push( Leaf27_3_Port95_iCongDrops[i11][0]);
   this.state.chartData40.datasets[20].data.push( Leaf27_3_Port96_iCongDrops[i11][0]);
   this.state.chartData40.datasets[21].data.push( Leaf27_3_Port97_iCongDrops[i11][0]);
   this.state.chartData40.datasets[22].data.push( Leaf27_3_Port98_iCongDrops[i11][0]);
   this.state.chartData40.datasets[23].data.push( Leaf27_3_Port99_iCongDrops[i11][0]);
   this.state.chartData40.datasets[24].data.push(Leaf27_3_Port100_iCongDrops[i11][0]);
   this.state.chartData40.datasets[25].data.push(Leaf27_3_Port101_iCongDrops[i11][0]);
   this.state.chartData40.datasets[26].data.push(Leaf27_3_Port102_iCongDrops[i11][0]);
   this.state.chartData40.datasets[27].data.push(Leaf27_3_Port103_iCongDrops[i11][0]);
   this.state.chartData40.datasets[28].data.push(Leaf27_3_Port104_iCongDrops[i11][0]);
   this.state.chartData40.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData40.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData40.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData40.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData40.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData40.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData40.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData40.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData40.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData40.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData40.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData40.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData40.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData40.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData40.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData40.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData40.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData40.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData40.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData40.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData40.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData40.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData40.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData40.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData40.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData40.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData40.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData40.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData40.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData46.datasets[0].data.push(   Leaf27_3_Port1_ierrs[i11][0]);
   this.state.chartData46.datasets[1].data.push(   Leaf27_3_Port2_ierrs[i11][0]);
   this.state.chartData46.datasets[2].data.push(   Leaf27_3_Port3_ierrs[i11][0]);
   this.state.chartData46.datasets[3].data.push(   Leaf27_3_Port4_ierrs[i11][0]);
   this.state.chartData46.datasets[4].data.push(   Leaf27_3_Port8_ierrs[i11][0]);
   this.state.chartData46.datasets[5].data.push(  Leaf27_3_Port10_ierrs[i11][0]);
   this.state.chartData46.datasets[6].data.push(  Leaf27_3_Port13_ierrs[i11][0]);
   this.state.chartData46.datasets[7].data.push(  Leaf27_3_Port17_ierrs[i11][0]);
// this.state.chartData46.datasets[8].data.push(  Leaf27_3_Port81_ierrs[i11][0]);
// this.state.chartData46.datasets[9].data.push(  Leaf27_3_Port85_ierrs[i11][0]);
   this.state.chartData46.datasets[11].data.push( Leaf27_3_Port86_ierrs[i11][0]);
   this.state.chartData46.datasets[10].data.push( Leaf27_3_Port87_ierrs[i11][0]);
   this.state.chartData46.datasets[12].data.push( Leaf27_3_Port88_ierrs[i11][0]);
   this.state.chartData46.datasets[13].data.push( Leaf27_3_Port89_ierrs[i11][0]);
   this.state.chartData46.datasets[14].data.push( Leaf27_3_Port90_ierrs[i11][0]);
   this.state.chartData46.datasets[15].data.push( Leaf27_3_Port91_ierrs[i11][0]);
   this.state.chartData46.datasets[16].data.push( Leaf27_3_Port92_ierrs[i11][0]);
   this.state.chartData46.datasets[17].data.push( Leaf27_3_Port93_ierrs[i11][0]);
   this.state.chartData46.datasets[18].data.push( Leaf27_3_Port94_ierrs[i11][0]);
   this.state.chartData46.datasets[19].data.push( Leaf27_3_Port95_ierrs[i11][0]);
   this.state.chartData46.datasets[20].data.push( Leaf27_3_Port96_ierrs[i11][0]);
   this.state.chartData46.datasets[21].data.push( Leaf27_3_Port97_ierrs[i11][0]);
   this.state.chartData46.datasets[22].data.push( Leaf27_3_Port98_ierrs[i11][0]);
   this.state.chartData46.datasets[23].data.push( Leaf27_3_Port99_ierrs[i11][0]);
   this.state.chartData46.datasets[24].data.push(Leaf27_3_Port100_ierrs[i11][0]);
   this.state.chartData46.datasets[25].data.push(Leaf27_3_Port101_ierrs[i11][0]);
   this.state.chartData46.datasets[26].data.push(Leaf27_3_Port102_ierrs[i11][0]);
   this.state.chartData46.datasets[27].data.push(Leaf27_3_Port103_ierrs[i11][0]);
   this.state.chartData46.datasets[28].data.push(Leaf27_3_Port104_ierrs[i11][0]);
   this.state.chartData46.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData46.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData46.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData46.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData46.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData46.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData46.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData46.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData46.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData46.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData46.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData46.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData46.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData46.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData46.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData46.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData46.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData46.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData46.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData46.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData46.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData46.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData46.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData46.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData46.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData46.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData46.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData46.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData46.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData52.datasets[0].data.push(   Leaf27_3_Port1_obytes[i11][0]);
   this.state.chartData52.datasets[1].data.push(   Leaf27_3_Port2_obytes[i11][0]);
   this.state.chartData52.datasets[2].data.push(   Leaf27_3_Port3_obytes[i11][0]);
   this.state.chartData52.datasets[3].data.push(   Leaf27_3_Port4_obytes[i11][0]);
   this.state.chartData52.datasets[4].data.push(   Leaf27_3_Port8_obytes[i11][0]);
   this.state.chartData52.datasets[5].data.push(  Leaf27_3_Port10_obytes[i11][0]);
   this.state.chartData52.datasets[6].data.push(  Leaf27_3_Port13_obytes[i11][0]);
   this.state.chartData52.datasets[7].data.push(  Leaf27_3_Port17_obytes[i11][0]);
// this.state.chartData52.datasets[8].data.push(  Leaf27_3_Port81_obytes[i11][0]);
// this.state.chartData52.datasets[9].data.push(  Leaf27_3_Port85_obytes[i11][0]);
   this.state.chartData52.datasets[11].data.push( Leaf27_3_Port86_obytes[i11][0]);
   this.state.chartData52.datasets[10].data.push( Leaf27_3_Port87_obytes[i11][0]);
   this.state.chartData52.datasets[12].data.push( Leaf27_3_Port88_obytes[i11][0]);
   this.state.chartData52.datasets[13].data.push( Leaf27_3_Port89_obytes[i11][0]);
   this.state.chartData52.datasets[14].data.push( Leaf27_3_Port90_obytes[i11][0]);
   this.state.chartData52.datasets[15].data.push( Leaf27_3_Port91_obytes[i11][0]);
   this.state.chartData52.datasets[16].data.push( Leaf27_3_Port92_obytes[i11][0]);
   this.state.chartData52.datasets[17].data.push( Leaf27_3_Port93_obytes[i11][0]);
   this.state.chartData52.datasets[18].data.push( Leaf27_3_Port94_obytes[i11][0]);
   this.state.chartData52.datasets[19].data.push( Leaf27_3_Port95_obytes[i11][0]);
   this.state.chartData52.datasets[20].data.push( Leaf27_3_Port96_obytes[i11][0]);
   this.state.chartData52.datasets[21].data.push( Leaf27_3_Port97_obytes[i11][0]);
   this.state.chartData52.datasets[22].data.push( Leaf27_3_Port98_obytes[i11][0]);
   this.state.chartData52.datasets[23].data.push( Leaf27_3_Port99_obytes[i11][0]);
   this.state.chartData52.datasets[24].data.push(Leaf27_3_Port100_obytes[i11][0]);
   this.state.chartData52.datasets[25].data.push(Leaf27_3_Port101_obytes[i11][0]);
   this.state.chartData52.datasets[26].data.push(Leaf27_3_Port102_obytes[i11][0]);
   this.state.chartData52.datasets[27].data.push(Leaf27_3_Port103_obytes[i11][0]);
   this.state.chartData52.datasets[28].data.push(Leaf27_3_Port104_obytes[i11][0]);
   this.state.chartData52.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData52.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData52.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData52.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData52.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData52.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData52.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData52.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData52.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData52.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData52.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData52.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData52.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData52.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData52.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData52.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData52.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData52.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData52.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData52.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData52.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData52.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData52.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData52.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData52.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData52.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData52.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData52.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData52.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData58.datasets[0].data.push(   Leaf27_3_Port1_oUpkts[i11][0]);
   this.state.chartData58.datasets[1].data.push(   Leaf27_3_Port2_oUpkts[i11][0]);
   this.state.chartData58.datasets[2].data.push(   Leaf27_3_Port3_oUpkts[i11][0]);
   this.state.chartData58.datasets[3].data.push(   Leaf27_3_Port4_oUpkts[i11][0]);
   this.state.chartData58.datasets[4].data.push(   Leaf27_3_Port8_oUpkts[i11][0]);
   this.state.chartData58.datasets[5].data.push(  Leaf27_3_Port10_oUpkts[i11][0]);
   this.state.chartData58.datasets[6].data.push(  Leaf27_3_Port13_oUpkts[i11][0]);
   this.state.chartData58.datasets[7].data.push(  Leaf27_3_Port17_oUpkts[i11][0]);
// this.state.chartData58.datasets[8].data.push(  Leaf27_3_Port81_oUpkts[i11][0]);
// this.state.chartData58.datasets[9].data.push(  Leaf27_3_Port85_oUpkts[i11][0]);
   this.state.chartData58.datasets[11].data.push( Leaf27_3_Port86_oUpkts[i11][0]);
   this.state.chartData58.datasets[10].data.push( Leaf27_3_Port87_oUpkts[i11][0]);
   this.state.chartData58.datasets[12].data.push( Leaf27_3_Port88_oUpkts[i11][0]);
   this.state.chartData58.datasets[13].data.push( Leaf27_3_Port89_oUpkts[i11][0]);
   this.state.chartData58.datasets[14].data.push( Leaf27_3_Port90_oUpkts[i11][0]);
   this.state.chartData58.datasets[15].data.push( Leaf27_3_Port91_oUpkts[i11][0]);
   this.state.chartData58.datasets[16].data.push( Leaf27_3_Port92_oUpkts[i11][0]);
   this.state.chartData58.datasets[17].data.push( Leaf27_3_Port93_oUpkts[i11][0]);
   this.state.chartData58.datasets[18].data.push( Leaf27_3_Port94_oUpkts[i11][0]);
   this.state.chartData58.datasets[19].data.push( Leaf27_3_Port95_oUpkts[i11][0]);
   this.state.chartData58.datasets[20].data.push( Leaf27_3_Port96_oUpkts[i11][0]);
   this.state.chartData58.datasets[21].data.push( Leaf27_3_Port97_oUpkts[i11][0]);
   this.state.chartData58.datasets[22].data.push( Leaf27_3_Port98_oUpkts[i11][0]);
   this.state.chartData58.datasets[23].data.push( Leaf27_3_Port99_oUpkts[i11][0]);
   this.state.chartData58.datasets[24].data.push(Leaf27_3_Port100_oUpkts[i11][0]);
   this.state.chartData58.datasets[25].data.push(Leaf27_3_Port101_oUpkts[i11][0]);
   this.state.chartData58.datasets[26].data.push(Leaf27_3_Port102_oUpkts[i11][0]);
   this.state.chartData58.datasets[27].data.push(Leaf27_3_Port103_oUpkts[i11][0]);
   this.state.chartData58.datasets[28].data.push(Leaf27_3_Port104_oUpkts[i11][0]);
   this.state.chartData58.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData58.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData58.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData58.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData58.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData58.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData58.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData58.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData58.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData58.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData58.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData58.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData58.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData58.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData58.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData58.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData58.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData58.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData58.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData58.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData58.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData58.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData58.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData58.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData58.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData58.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData58.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData58.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData58.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData64.datasets[0].data.push(   Leaf27_3_Port1_oBpkts[i11][0]);
   this.state.chartData64.datasets[1].data.push(   Leaf27_3_Port2_oBpkts[i11][0]);
   this.state.chartData64.datasets[2].data.push(   Leaf27_3_Port3_oBpkts[i11][0]);
   this.state.chartData64.datasets[3].data.push(   Leaf27_3_Port4_oBpkts[i11][0]);
   this.state.chartData64.datasets[4].data.push(   Leaf27_3_Port8_oBpkts[i11][0]);
   this.state.chartData64.datasets[5].data.push(  Leaf27_3_Port10_oBpkts[i11][0]);
   this.state.chartData64.datasets[6].data.push(  Leaf27_3_Port13_oBpkts[i11][0]);
   this.state.chartData64.datasets[7].data.push(  Leaf27_3_Port17_oBpkts[i11][0]);
// this.state.chartData64.datasets[8].data.push(  Leaf27_3_Port81_oBpkts[i11][0]);
// this.state.chartData64.datasets[9].data.push(  Leaf27_3_Port85_oBpkts[i11][0]);
   this.state.chartData64.datasets[11].data.push( Leaf27_3_Port86_oBpkts[i11][0]);
   this.state.chartData64.datasets[10].data.push( Leaf27_3_Port87_oBpkts[i11][0]);
   this.state.chartData64.datasets[12].data.push( Leaf27_3_Port88_oBpkts[i11][0]);
   this.state.chartData64.datasets[13].data.push( Leaf27_3_Port89_oBpkts[i11][0]);
   this.state.chartData64.datasets[14].data.push( Leaf27_3_Port90_oBpkts[i11][0]);
   this.state.chartData64.datasets[15].data.push( Leaf27_3_Port91_oBpkts[i11][0]);
   this.state.chartData64.datasets[16].data.push( Leaf27_3_Port92_oBpkts[i11][0]);
   this.state.chartData64.datasets[17].data.push( Leaf27_3_Port93_oBpkts[i11][0]);
   this.state.chartData64.datasets[18].data.push( Leaf27_3_Port94_oBpkts[i11][0]);
   this.state.chartData64.datasets[19].data.push( Leaf27_3_Port95_oBpkts[i11][0]);
   this.state.chartData64.datasets[20].data.push( Leaf27_3_Port96_oBpkts[i11][0]);
   this.state.chartData64.datasets[21].data.push( Leaf27_3_Port97_oBpkts[i11][0]);
   this.state.chartData64.datasets[22].data.push( Leaf27_3_Port98_oBpkts[i11][0]);
   this.state.chartData64.datasets[23].data.push( Leaf27_3_Port99_oBpkts[i11][0]);
   this.state.chartData64.datasets[24].data.push(Leaf27_3_Port100_oBpkts[i11][0]);
   this.state.chartData64.datasets[25].data.push(Leaf27_3_Port101_oBpkts[i11][0]);
   this.state.chartData64.datasets[26].data.push(Leaf27_3_Port102_oBpkts[i11][0]);
   this.state.chartData64.datasets[27].data.push(Leaf27_3_Port103_oBpkts[i11][0]);
   this.state.chartData64.datasets[28].data.push(Leaf27_3_Port104_oBpkts[i11][0]);
   this.state.chartData64.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData64.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData64.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData64.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData64.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData64.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData64.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData64.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData64.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData64.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData64.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData64.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData64.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData64.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData64.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData64.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData64.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData64.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData64.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData64.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData64.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData64.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData64.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData64.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData64.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData64.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData64.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData64.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData64.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData70.datasets[0].data.push(   Leaf27_3_Port1_oMpkts[i11][0]);
   this.state.chartData70.datasets[1].data.push(   Leaf27_3_Port2_oMpkts[i11][0]);
   this.state.chartData70.datasets[2].data.push(   Leaf27_3_Port3_oMpkts[i11][0]);
   this.state.chartData70.datasets[3].data.push(   Leaf27_3_Port4_oMpkts[i11][0]);
   this.state.chartData70.datasets[4].data.push(   Leaf27_3_Port8_oMpkts[i11][0]);
   this.state.chartData70.datasets[5].data.push(  Leaf27_3_Port10_oMpkts[i11][0]);
   this.state.chartData70.datasets[6].data.push(  Leaf27_3_Port13_oMpkts[i11][0]);
   this.state.chartData70.datasets[7].data.push(  Leaf27_3_Port17_oMpkts[i11][0]);
// this.state.chartData70.datasets[8].data.push(  Leaf27_3_Port81_oMpkts[i11][0]);
// this.state.chartData70.datasets[9].data.push(  Leaf27_3_Port85_oMpkts[i11][0]);
   this.state.chartData70.datasets[11].data.push( Leaf27_3_Port86_oMpkts[i11][0]);
   this.state.chartData70.datasets[10].data.push( Leaf27_3_Port87_oMpkts[i11][0]);
   this.state.chartData70.datasets[12].data.push( Leaf27_3_Port88_oMpkts[i11][0]);
   this.state.chartData70.datasets[13].data.push( Leaf27_3_Port89_oMpkts[i11][0]);
   this.state.chartData70.datasets[14].data.push( Leaf27_3_Port90_oMpkts[i11][0]);
   this.state.chartData70.datasets[15].data.push( Leaf27_3_Port91_oMpkts[i11][0]);
   this.state.chartData70.datasets[16].data.push( Leaf27_3_Port92_oMpkts[i11][0]);
   this.state.chartData70.datasets[17].data.push( Leaf27_3_Port93_oMpkts[i11][0]);
   this.state.chartData70.datasets[18].data.push( Leaf27_3_Port94_oMpkts[i11][0]);
   this.state.chartData70.datasets[19].data.push( Leaf27_3_Port95_oMpkts[i11][0]);
   this.state.chartData70.datasets[20].data.push( Leaf27_3_Port96_oMpkts[i11][0]);
   this.state.chartData70.datasets[21].data.push( Leaf27_3_Port97_oMpkts[i11][0]);
   this.state.chartData70.datasets[22].data.push( Leaf27_3_Port98_oMpkts[i11][0]);
   this.state.chartData70.datasets[23].data.push( Leaf27_3_Port99_oMpkts[i11][0]);
   this.state.chartData70.datasets[24].data.push(Leaf27_3_Port100_oMpkts[i11][0]);
   this.state.chartData70.datasets[25].data.push(Leaf27_3_Port101_oMpkts[i11][0]);
   this.state.chartData70.datasets[26].data.push(Leaf27_3_Port102_oMpkts[i11][0]);
   this.state.chartData70.datasets[27].data.push(Leaf27_3_Port103_oMpkts[i11][0]);
   this.state.chartData70.datasets[28].data.push(Leaf27_3_Port104_oMpkts[i11][0]);
   this.state.chartData70.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData70.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData70.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData70.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData70.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData70.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData70.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData70.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData70.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData70.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData70.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData70.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData70.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData70.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData70.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData70.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData70.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData70.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData70.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData70.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData70.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData70.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData70.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData70.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData70.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData70.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData70.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData70.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData70.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData76.datasets[0].data.push(   Leaf27_3_Port1_oCongDrops[i11][0]);
   this.state.chartData76.datasets[1].data.push(   Leaf27_3_Port2_oCongDrops[i11][0]);
   this.state.chartData76.datasets[2].data.push(   Leaf27_3_Port3_oCongDrops[i11][0]);
   this.state.chartData76.datasets[3].data.push(   Leaf27_3_Port4_oCongDrops[i11][0]);
   this.state.chartData76.datasets[4].data.push(   Leaf27_3_Port8_oCongDrops[i11][0]);
   this.state.chartData76.datasets[5].data.push(  Leaf27_3_Port10_oCongDrops[i11][0]);
   this.state.chartData76.datasets[6].data.push(  Leaf27_3_Port13_oCongDrops[i11][0]);
   this.state.chartData76.datasets[7].data.push(  Leaf27_3_Port17_oCongDrops[i11][0]);
// this.state.chartData76.datasets[8].data.push(  Leaf27_3_Port81_oCongDrops[i11][0]);
// this.state.chartData76.datasets[9].data.push(  Leaf27_3_Port85_oCongDrops[i11][0]);
   this.state.chartData76.datasets[11].data.push( Leaf27_3_Port86_oCongDrops[i11][0]);
   this.state.chartData76.datasets[10].data.push( Leaf27_3_Port87_oCongDrops[i11][0]);
   this.state.chartData76.datasets[12].data.push( Leaf27_3_Port88_oCongDrops[i11][0]);
   this.state.chartData76.datasets[13].data.push( Leaf27_3_Port89_oCongDrops[i11][0]);
   this.state.chartData76.datasets[14].data.push( Leaf27_3_Port90_oCongDrops[i11][0]);
   this.state.chartData76.datasets[15].data.push( Leaf27_3_Port91_oCongDrops[i11][0]);
   this.state.chartData76.datasets[16].data.push( Leaf27_3_Port92_oCongDrops[i11][0]);
   this.state.chartData76.datasets[17].data.push( Leaf27_3_Port93_oCongDrops[i11][0]);
   this.state.chartData76.datasets[18].data.push( Leaf27_3_Port94_oCongDrops[i11][0]);
   this.state.chartData76.datasets[19].data.push( Leaf27_3_Port95_oCongDrops[i11][0]);
   this.state.chartData76.datasets[20].data.push( Leaf27_3_Port96_oCongDrops[i11][0]);
   this.state.chartData76.datasets[21].data.push( Leaf27_3_Port97_oCongDrops[i11][0]);
   this.state.chartData76.datasets[22].data.push( Leaf27_3_Port98_oCongDrops[i11][0]);
   this.state.chartData76.datasets[23].data.push( Leaf27_3_Port99_oCongDrops[i11][0]);
   this.state.chartData76.datasets[24].data.push(Leaf27_3_Port100_oCongDrops[i11][0]);
   this.state.chartData76.datasets[25].data.push(Leaf27_3_Port101_oCongDrops[i11][0]);
   this.state.chartData76.datasets[26].data.push(Leaf27_3_Port102_oCongDrops[i11][0]);
   this.state.chartData76.datasets[27].data.push(Leaf27_3_Port103_oCongDrops[i11][0]);
   this.state.chartData76.datasets[28].data.push(Leaf27_3_Port104_oCongDrops[i11][0]);
   this.state.chartData76.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData76.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData76.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData76.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData76.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData76.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData76.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData76.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData76.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData76.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData76.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData76.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData76.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData76.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData76.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData76.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData76.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData76.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData76.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData76.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData76.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData76.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData76.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData76.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData76.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData76.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData76.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData76.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData76.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData82.datasets[0].data.push(   Leaf27_3_Port1_oerrs[i11][0]);
   this.state.chartData82.datasets[1].data.push(   Leaf27_3_Port2_oerrs[i11][0]);
   this.state.chartData82.datasets[2].data.push(   Leaf27_3_Port3_oerrs[i11][0]);
   this.state.chartData82.datasets[3].data.push(   Leaf27_3_Port4_oerrs[i11][0]);
   this.state.chartData82.datasets[4].data.push(   Leaf27_3_Port8_oerrs[i11][0]);
   this.state.chartData82.datasets[5].data.push(  Leaf27_3_Port10_oerrs[i11][0]);
   this.state.chartData82.datasets[6].data.push(  Leaf27_3_Port13_oerrs[i11][0]);
   this.state.chartData82.datasets[7].data.push(  Leaf27_3_Port17_oerrs[i11][0]);
// this.state.chartData82.datasets[8].data.push(  Leaf27_3_Port81_oerrs[i11][0]);
// this.state.chartData82.datasets[9].data.push(  Leaf27_3_Port85_oerrs[i11][0]);
   this.state.chartData82.datasets[11].data.push( Leaf27_3_Port86_oerrs[i11][0]);
   this.state.chartData82.datasets[10].data.push( Leaf27_3_Port87_oerrs[i11][0]);
   this.state.chartData82.datasets[12].data.push( Leaf27_3_Port88_oerrs[i11][0]);
   this.state.chartData82.datasets[13].data.push( Leaf27_3_Port89_oerrs[i11][0]);
   this.state.chartData82.datasets[14].data.push( Leaf27_3_Port90_oerrs[i11][0]);
   this.state.chartData82.datasets[15].data.push( Leaf27_3_Port91_oerrs[i11][0]);
   this.state.chartData82.datasets[16].data.push( Leaf27_3_Port92_oerrs[i11][0]);
   this.state.chartData82.datasets[17].data.push( Leaf27_3_Port93_oerrs[i11][0]);
   this.state.chartData82.datasets[18].data.push( Leaf27_3_Port94_oerrs[i11][0]);
   this.state.chartData82.datasets[19].data.push( Leaf27_3_Port95_oerrs[i11][0]);
   this.state.chartData82.datasets[20].data.push( Leaf27_3_Port96_oerrs[i11][0]);
   this.state.chartData82.datasets[21].data.push( Leaf27_3_Port97_oerrs[i11][0]);
   this.state.chartData82.datasets[22].data.push( Leaf27_3_Port98_oerrs[i11][0]);
   this.state.chartData82.datasets[23].data.push( Leaf27_3_Port99_oerrs[i11][0]);
   this.state.chartData82.datasets[24].data.push(Leaf27_3_Port100_oerrs[i11][0]);
   this.state.chartData82.datasets[25].data.push(Leaf27_3_Port101_oerrs[i11][0]);
   this.state.chartData82.datasets[26].data.push(Leaf27_3_Port102_oerrs[i11][0]);
   this.state.chartData82.datasets[27].data.push(Leaf27_3_Port103_oerrs[i11][0]);
   this.state.chartData82.datasets[28].data.push(Leaf27_3_Port104_oerrs[i11][0]);
   this.state.chartData82.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData82.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData82.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData82.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData82.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData82.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData82.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData82.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData82.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData82.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData82.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData82.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData82.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData82.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData82.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData82.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData82.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData82.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData82.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData82.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData82.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData82.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData82.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData82.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData82.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData82.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData82.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData82.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData82.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

   this.state.chartData88.datasets[0].data.push(   Leaf27_3_Port1_mtu_errs[i11][0]);
   this.state.chartData88.datasets[1].data.push(   Leaf27_3_Port2_mtu_errs[i11][0]);
   this.state.chartData88.datasets[2].data.push(   Leaf27_3_Port3_mtu_errs[i11][0]);
   this.state.chartData88.datasets[3].data.push(   Leaf27_3_Port4_mtu_errs[i11][0]);
   this.state.chartData88.datasets[4].data.push(   Leaf27_3_Port8_mtu_errs[i11][0]);
   this.state.chartData88.datasets[5].data.push(  Leaf27_3_Port10_mtu_errs[i11][0]);
   this.state.chartData88.datasets[6].data.push(  Leaf27_3_Port13_mtu_errs[i11][0]);
   this.state.chartData88.datasets[7].data.push(  Leaf27_3_Port17_mtu_errs[i11][0]);
// this.state.chartData88.datasets[8].data.push(  Leaf27_3_Port81_mtu_errs[i11][0]);
// this.state.chartData88.datasets[9].data.push(  Leaf27_3_Port85_mtu_errs[i11][0]);
   this.state.chartData88.datasets[11].data.push( Leaf27_3_Port86_mtu_errs[i11][0]);
   this.state.chartData88.datasets[10].data.push( Leaf27_3_Port87_mtu_errs[i11][0]);
   this.state.chartData88.datasets[12].data.push( Leaf27_3_Port88_mtu_errs[i11][0]);
   this.state.chartData88.datasets[13].data.push( Leaf27_3_Port89_mtu_errs[i11][0]);
   this.state.chartData88.datasets[14].data.push( Leaf27_3_Port90_mtu_errs[i11][0]);
   this.state.chartData88.datasets[15].data.push( Leaf27_3_Port91_mtu_errs[i11][0]);
   this.state.chartData88.datasets[16].data.push( Leaf27_3_Port92_mtu_errs[i11][0]);
   this.state.chartData88.datasets[17].data.push( Leaf27_3_Port93_mtu_errs[i11][0]);
   this.state.chartData88.datasets[18].data.push( Leaf27_3_Port94_mtu_errs[i11][0]);
   this.state.chartData88.datasets[19].data.push( Leaf27_3_Port95_mtu_errs[i11][0]);
   this.state.chartData88.datasets[20].data.push( Leaf27_3_Port96_mtu_errs[i11][0]);
   this.state.chartData88.datasets[21].data.push( Leaf27_3_Port97_mtu_errs[i11][0]);
   this.state.chartData88.datasets[22].data.push( Leaf27_3_Port98_mtu_errs[i11][0]);
   this.state.chartData88.datasets[23].data.push( Leaf27_3_Port99_mtu_errs[i11][0]);
   this.state.chartData88.datasets[24].data.push(Leaf27_3_Port100_mtu_errs[i11][0]);
   this.state.chartData88.datasets[25].data.push(Leaf27_3_Port101_mtu_errs[i11][0]);
   this.state.chartData88.datasets[26].data.push(Leaf27_3_Port102_mtu_errs[i11][0]);
   this.state.chartData88.datasets[27].data.push(Leaf27_3_Port103_mtu_errs[i11][0]);
   this.state.chartData88.datasets[28].data.push(Leaf27_3_Port104_mtu_errs[i11][0]);
   this.state.chartData88.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
   this.state.chartData88.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
   this.state.chartData88.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
   this.state.chartData88.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
   this.state.chartData88.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
   this.state.chartData88.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
   this.state.chartData88.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
   this.state.chartData88.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
// this.state.chartData88.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
// this.state.chartData88.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
   this.state.chartData88.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
   this.state.chartData88.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
   this.state.chartData88.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
   this.state.chartData88.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
   this.state.chartData88.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
   this.state.chartData88.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
   this.state.chartData88.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
   this.state.chartData88.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
   this.state.chartData88.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
   this.state.chartData88.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
   this.state.chartData88.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
   this.state.chartData88.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
   this.state.chartData88.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
   this.state.chartData88.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
   this.state.chartData88.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
   this.state.chartData88.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
   this.state.chartData88.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
   this.state.chartData88.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
   this.state.chartData88.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');
        }
    }


    return(
        <div className="chart3">
        <div className="bar"> <Line
              data={this.state.chartData16}
              options={{
                  title: {
                  display: this.state.displayTitle,
                  text: 'NRU_10.27.28.111_STP_PORT EVENT ibytes for Leaf-03',
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
                 data={this.state.chartData22}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iUpkts for Leaf-03',
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
                 data={this.state.chartData28}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iBpkts for Leaf-03',
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
                 data={this.state.chartData34}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iMpkts for Leaf-03',
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
                 data={this.state.chartData40}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iCongDrops for Leaf-03',
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
                 data={this.state.chartData46}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT ierrs for Leaf-03',
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
                 data={this.state.chartData52}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT obytes for Leaf-03',
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
                 data={this.state.chartData58}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oUpkts for Leaf-03',
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
                 data={this.state.chartData64}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oBpkts for Leaf-03',
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
                 data={this.state.chartData70}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oMpkts for Leaf-03',
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
                 data={this.state.chartData76}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oCongDrops for Leaf-03',
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
                 data={this.state.chartData82}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oerrs for Leaf-03',
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
                  data={this.state.chartData88}
                  options={{
                      title: {
                      display: this.state.displayTitle,
                      text: 'NRU_10.27.28.111_STP_PORT EVENT mtu-oerrs for Leaf-03',
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
        </div></div></div></div></div></div></div>
        </div></div></div></div></div></div></div>
    )
    
}
}
export default NRU_Ports_Leaf3;