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
class NRU_Ports_Leaf4 extends Component{

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
    this.state.chartData17.labels=[];   
    this.state.chartData23.labels=[];        
    this.state.chartData29.labels=[];        
    this.state.chartData35.labels=[];
    this.state.chartData41.labels=[];
    this.state.chartData47.labels=[];    
    this.state.chartData53.labels=[];    
    this.state.chartData59.labels=[];        
    this.state.chartData65.labels=[];     
    this.state.chartData71.labels=[];
    this.state.chartData77.labels=[];
    this.state.chartData83.labels=[];   
    this.state.chartData89.labels=[];   
    
    if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "9500px";}
}

    
    componentDidMount(){
    }

  getChartData(){
    this.setState({
        chartData17:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData23:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData29:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData35:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData41:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData47:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData53:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData59:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData65:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},            
        chartData71:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData77:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData83:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]},
        chartData89:{
            labels:[],
            datasets:[{
            label:'27-Leaf-04 port 1',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 2',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 3',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 4',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 7',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 10',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 13',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 17',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 81',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 85',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 86',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 87',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 88',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 89',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 90',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 91',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 92',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 93',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 94',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 95',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 96',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 97',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 98',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 99',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 100',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 101',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 102',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 103',
            data: [],
            fill: false,  
            backgroundColor:[],},
            {
            label:'27-Leaf-04 port 104',
            data: [],
            fill: false,  
            backgroundColor:[],},
            ]}
    }
    
    );
  }


render(){

  var myHTML10 = document.getElementById('PORT_STATS');
  var textoutput10 = myHTML10.innerHTML;
  var regex_date10 = /(?<=Timestamp: )\d*/g; 
  var date10 = textoutput10.match(regex_date10);
  
var Leaf27_4_Port1 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 1\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port2 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 2\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port3 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 3\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port4 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 4\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port7 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 7\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port10 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 10\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port13 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 13\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port17 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 17\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port81 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 81\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port85 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 85\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port86 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 86\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port87 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 87\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port88 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 88\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port89 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 89\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port90 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 90\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port91 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 91\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port92 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 92\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port93 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 93\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port94 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 94\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port95 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 95\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port96 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 96\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port97 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 97\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port98 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 98\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port99 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 99\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port100 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 100\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port101 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 101\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port102 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 102\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port103 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 103\s{1,5}\S{1,10}[^\n\r]*/g);
var Leaf27_4_Port104 = textoutput10.match(/27-Leaf-04\s\s\d{2}:\d{2}:\d{2} 104\s{1,5}\S{1,10}[^\n\r]*/g);


var Leaf27_4_Port1_fix = [];  var Leaf27_4_Port2_fix = [];  var Leaf27_4_Port3_fix = [];
var Leaf27_4_Port4_fix = [];  var Leaf27_4_Port7_fix = [];  var Leaf27_4_Port10_fix = [];
var Leaf27_4_Port13_fix = [];  var Leaf27_4_Port17_fix = [];  var Leaf27_4_Port81_fix = [];
var Leaf27_4_Port85_fix = [];  var Leaf27_4_Port86_fix = [];  var Leaf27_4_Port87_fix = [];
var Leaf27_4_Port88_fix = [];
var Leaf27_4_Port89_fix = [];  var Leaf27_4_Port90_fix = [];  var Leaf27_4_Port91_fix = [];
var Leaf27_4_Port92_fix = [];  var Leaf27_4_Port93_fix = [];  var Leaf27_4_Port94_fix = [];
var Leaf27_4_Port95_fix = [];  var Leaf27_4_Port96_fix = [];  var Leaf27_4_Port97_fix = [];
var Leaf27_4_Port98_fix = [];  var Leaf27_4_Port99_fix = [];  var Leaf27_4_Port100_fix = [];
var Leaf27_4_Port101_fix = [];  var Leaf27_4_Port102_fix = [];  var Leaf27_4_Port103_fix = [];
var Leaf27_4_Port104_fix = [];
var   Leaf27_4_Port1_iUpkts = [];  var   Leaf27_4_Port2_iUpkts = [];  var   Leaf27_4_Port3_iUpkts = [];
var   Leaf27_4_Port4_iUpkts = [];  var   Leaf27_4_Port7_iUpkts = [];  var  Leaf27_4_Port10_iUpkts = [];
var  Leaf27_4_Port13_iUpkts = [];  var  Leaf27_4_Port17_iUpkts = [];  var  Leaf27_4_Port81_iUpkts = [];
var  Leaf27_4_Port85_iUpkts = [];  var  Leaf27_4_Port86_iUpkts = [];  var  Leaf27_4_Port87_iUpkts = [];
var  Leaf27_4_Port88_iUpkts = [];
var  Leaf27_4_Port89_iUpkts = [];  var  Leaf27_4_Port90_iUpkts = [];  var  Leaf27_4_Port91_iUpkts = [];
var  Leaf27_4_Port92_iUpkts = [];  var  Leaf27_4_Port93_iUpkts = [];  var  Leaf27_4_Port94_iUpkts = [];
var  Leaf27_4_Port95_iUpkts = [];  var  Leaf27_4_Port96_iUpkts = [];  var  Leaf27_4_Port97_iUpkts = [];
var  Leaf27_4_Port98_iUpkts = [];  var  Leaf27_4_Port99_iUpkts = [];  var Leaf27_4_Port100_iUpkts = [];
var Leaf27_4_Port101_iUpkts = [];  var Leaf27_4_Port102_iUpkts = [];  var Leaf27_4_Port103_iUpkts = [];
var Leaf27_4_Port104_iUpkts = [];
var   Leaf27_4_Port1_iBpkts = [];  var   Leaf27_4_Port2_iBpkts = [];  var   Leaf27_4_Port3_iBpkts = [];
var   Leaf27_4_Port4_iBpkts = [];  var   Leaf27_4_Port7_iBpkts = [];  var  Leaf27_4_Port10_iBpkts = [];
var  Leaf27_4_Port13_iBpkts = [];  var  Leaf27_4_Port17_iBpkts = [];  var  Leaf27_4_Port81_iBpkts = [];
var  Leaf27_4_Port85_iBpkts = [];  var  Leaf27_4_Port86_iBpkts = [];  var  Leaf27_4_Port87_iBpkts = [];
var  Leaf27_4_Port88_iBpkts = [];
var  Leaf27_4_Port89_iBpkts = [];  var  Leaf27_4_Port90_iBpkts = [];  var  Leaf27_4_Port91_iBpkts = [];
var  Leaf27_4_Port92_iBpkts = [];  var  Leaf27_4_Port93_iBpkts = [];  var  Leaf27_4_Port94_iBpkts = [];
var  Leaf27_4_Port95_iBpkts = [];  var  Leaf27_4_Port96_iBpkts = [];  var  Leaf27_4_Port97_iBpkts = [];
var  Leaf27_4_Port98_iBpkts = [];  var  Leaf27_4_Port99_iBpkts = [];  var Leaf27_4_Port100_iBpkts = [];
var Leaf27_4_Port101_iBpkts = [];  var Leaf27_4_Port102_iBpkts = [];  var Leaf27_4_Port103_iBpkts = [];
var Leaf27_4_Port104_iBpkts = [];
var   Leaf27_4_Port1_iMpkts = [];  var   Leaf27_4_Port2_iMpkts = [];  var   Leaf27_4_Port3_iMpkts = [];
var   Leaf27_4_Port4_iMpkts = [];  var   Leaf27_4_Port7_iMpkts = [];  var  Leaf27_4_Port10_iMpkts = [];
var  Leaf27_4_Port13_iMpkts = [];  var  Leaf27_4_Port17_iMpkts = [];  var  Leaf27_4_Port81_iMpkts = [];
var  Leaf27_4_Port85_iMpkts = [];  var  Leaf27_4_Port86_iMpkts = [];  var  Leaf27_4_Port87_iMpkts = [];
var  Leaf27_4_Port88_iMpkts = [];
var  Leaf27_4_Port89_iMpkts = [];  var  Leaf27_4_Port90_iMpkts = [];  var  Leaf27_4_Port91_iMpkts = [];
var  Leaf27_4_Port92_iMpkts = [];  var  Leaf27_4_Port93_iMpkts = [];  var  Leaf27_4_Port94_iMpkts = [];
var  Leaf27_4_Port95_iMpkts = [];  var  Leaf27_4_Port96_iMpkts = [];  var  Leaf27_4_Port97_iMpkts = [];
var  Leaf27_4_Port98_iMpkts = [];  var  Leaf27_4_Port99_iMpkts = [];  var Leaf27_4_Port100_iMpkts = [];
var Leaf27_4_Port101_iMpkts = [];  var Leaf27_4_Port102_iMpkts = [];  var Leaf27_4_Port103_iMpkts = [];
var Leaf27_4_Port104_iMpkts = [];
var   Leaf27_4_Port1_iCongDrops = [];  var   Leaf27_4_Port2_iCongDrops = [];  var   Leaf27_4_Port3_iCongDrops = [];
var   Leaf27_4_Port4_iCongDrops = [];  var   Leaf27_4_Port7_iCongDrops = [];  var  Leaf27_4_Port10_iCongDrops = [];
var  Leaf27_4_Port13_iCongDrops = [];  var  Leaf27_4_Port17_iCongDrops = [];  var  Leaf27_4_Port81_iCongDrops = [];
var  Leaf27_4_Port85_iCongDrops = [];  var  Leaf27_4_Port86_iCongDrops = [];  var  Leaf27_4_Port87_iCongDrops = [];
var  Leaf27_4_Port88_iCongDrops = [];
var  Leaf27_4_Port89_iCongDrops = [];  var  Leaf27_4_Port90_iCongDrops = [];  var  Leaf27_4_Port91_iCongDrops = [];
var  Leaf27_4_Port92_iCongDrops = [];  var  Leaf27_4_Port93_iCongDrops = [];  var  Leaf27_4_Port94_iCongDrops = [];
var  Leaf27_4_Port95_iCongDrops = [];  var  Leaf27_4_Port96_iCongDrops = [];  var  Leaf27_4_Port97_iCongDrops = [];
var  Leaf27_4_Port98_iCongDrops = [];  var  Leaf27_4_Port99_iCongDrops = [];  var Leaf27_4_Port100_iCongDrops = [];
var Leaf27_4_Port101_iCongDrops = [];  var Leaf27_4_Port102_iCongDrops = [];  var Leaf27_4_Port103_iCongDrops = [];
var Leaf27_4_Port104_iCongDrops = [];
var   Leaf27_4_Port1_ierrs = [];  var   Leaf27_4_Port2_ierrs = [];  var   Leaf27_4_Port3_ierrs = [];
var   Leaf27_4_Port4_ierrs = [];  var   Leaf27_4_Port7_ierrs = [];  var  Leaf27_4_Port10_ierrs = [];
var  Leaf27_4_Port13_ierrs = [];  var  Leaf27_4_Port17_ierrs = [];  var  Leaf27_4_Port81_ierrs = [];
var  Leaf27_4_Port85_ierrs = [];  var  Leaf27_4_Port86_ierrs = [];  var  Leaf27_4_Port87_ierrs = [];
var  Leaf27_4_Port88_ierrs = [];
var  Leaf27_4_Port89_ierrs = [];  var  Leaf27_4_Port90_ierrs = [];  var  Leaf27_4_Port91_ierrs = [];
var  Leaf27_4_Port92_ierrs = [];  var  Leaf27_4_Port93_ierrs = [];  var  Leaf27_4_Port94_ierrs = [];
var  Leaf27_4_Port95_ierrs = [];  var  Leaf27_4_Port96_ierrs = [];  var  Leaf27_4_Port97_ierrs = [];
var  Leaf27_4_Port98_ierrs = [];  var  Leaf27_4_Port99_ierrs = [];  var Leaf27_4_Port100_ierrs = [];
var Leaf27_4_Port101_ierrs = [];  var Leaf27_4_Port102_ierrs = [];  var Leaf27_4_Port103_ierrs = [];
var Leaf27_4_Port104_ierrs = [];
var   Leaf27_4_Port1_obytes = [];  var   Leaf27_4_Port2_obytes = [];  var   Leaf27_4_Port3_obytes = [];
var   Leaf27_4_Port4_obytes = [];  var   Leaf27_4_Port7_obytes = [];  var  Leaf27_4_Port10_obytes = [];
var  Leaf27_4_Port13_obytes = [];  var  Leaf27_4_Port17_obytes = [];  var  Leaf27_4_Port81_obytes = [];
var  Leaf27_4_Port85_obytes = [];  var  Leaf27_4_Port86_obytes = [];  var  Leaf27_4_Port87_obytes = [];
var  Leaf27_4_Port88_obytes = [];
var  Leaf27_4_Port89_obytes = [];  var  Leaf27_4_Port90_obytes = [];  var  Leaf27_4_Port91_obytes = [];
var  Leaf27_4_Port92_obytes = [];  var  Leaf27_4_Port93_obytes = [];  var  Leaf27_4_Port94_obytes = [];
var  Leaf27_4_Port95_obytes = [];  var  Leaf27_4_Port96_obytes = [];  var  Leaf27_4_Port97_obytes = [];
var  Leaf27_4_Port98_obytes = [];  var  Leaf27_4_Port99_obytes = [];  var Leaf27_4_Port100_obytes = [];
var Leaf27_4_Port101_obytes = [];  var Leaf27_4_Port102_obytes = [];  var Leaf27_4_Port103_obytes = [];
var Leaf27_4_Port104_obytes = [];
var   Leaf27_4_Port1_oUpkts = [];  var   Leaf27_4_Port2_oUpkts = [];  var   Leaf27_4_Port3_oUpkts = [];
var   Leaf27_4_Port4_oUpkts = [];  var   Leaf27_4_Port7_oUpkts = [];  var  Leaf27_4_Port10_oUpkts = [];
var  Leaf27_4_Port13_oUpkts = [];  var  Leaf27_4_Port17_oUpkts = [];  var  Leaf27_4_Port81_oUpkts = [];
var  Leaf27_4_Port85_oUpkts = [];  var  Leaf27_4_Port86_oUpkts = [];  var  Leaf27_4_Port87_oUpkts = [];
var  Leaf27_4_Port88_oUpkts = [];
var  Leaf27_4_Port89_oUpkts = [];  var  Leaf27_4_Port90_oUpkts = [];  var  Leaf27_4_Port91_oUpkts = [];
var  Leaf27_4_Port92_oUpkts = [];  var  Leaf27_4_Port93_oUpkts = [];  var  Leaf27_4_Port94_oUpkts = [];
var  Leaf27_4_Port95_oUpkts = [];  var  Leaf27_4_Port96_oUpkts = [];  var  Leaf27_4_Port97_oUpkts = [];
var  Leaf27_4_Port98_oUpkts = [];  var  Leaf27_4_Port99_oUpkts = [];  var Leaf27_4_Port100_oUpkts = [];
var Leaf27_4_Port101_oUpkts = [];  var Leaf27_4_Port102_oUpkts = [];  var Leaf27_4_Port103_oUpkts = [];
var Leaf27_4_Port104_oUpkts = [];
var   Leaf27_4_Port1_oBpkts = [];  var   Leaf27_4_Port2_oBpkts = [];  var   Leaf27_4_Port3_oBpkts = [];
var   Leaf27_4_Port4_oBpkts = [];  var   Leaf27_4_Port7_oBpkts = [];  var  Leaf27_4_Port10_oBpkts = [];
var  Leaf27_4_Port13_oBpkts = [];  var  Leaf27_4_Port17_oBpkts = [];  var  Leaf27_4_Port81_oBpkts = [];
var  Leaf27_4_Port85_oBpkts = [];  var  Leaf27_4_Port86_oBpkts = [];  var  Leaf27_4_Port87_oBpkts = [];
var  Leaf27_4_Port88_oBpkts = [];
var  Leaf27_4_Port89_oBpkts = [];  var  Leaf27_4_Port90_oBpkts = [];  var  Leaf27_4_Port91_oBpkts = [];
var  Leaf27_4_Port92_oBpkts = [];  var  Leaf27_4_Port93_oBpkts = [];  var  Leaf27_4_Port94_oBpkts = [];
var  Leaf27_4_Port95_oBpkts = [];  var  Leaf27_4_Port96_oBpkts = [];  var  Leaf27_4_Port97_oBpkts = [];
var  Leaf27_4_Port98_oBpkts = [];  var  Leaf27_4_Port99_oBpkts = [];  var Leaf27_4_Port100_oBpkts = [];
var Leaf27_4_Port101_oBpkts = [];  var Leaf27_4_Port102_oBpkts = [];  var Leaf27_4_Port103_oBpkts = [];
var Leaf27_4_Port104_oBpkts = [];
var   Leaf27_4_Port1_oMpkts = [];  var   Leaf27_4_Port2_oMpkts = [];  var   Leaf27_4_Port3_oMpkts = [];
var   Leaf27_4_Port4_oMpkts = [];  var   Leaf27_4_Port7_oMpkts = [];  var  Leaf27_4_Port10_oMpkts = [];
var  Leaf27_4_Port13_oMpkts = [];  var  Leaf27_4_Port17_oMpkts = [];  var  Leaf27_4_Port81_oMpkts = [];
var  Leaf27_4_Port85_oMpkts = [];  var  Leaf27_4_Port86_oMpkts = [];  var  Leaf27_4_Port87_oMpkts = [];
var  Leaf27_4_Port88_oMpkts = [];
var  Leaf27_4_Port89_oMpkts = [];  var  Leaf27_4_Port90_oMpkts = [];  var  Leaf27_4_Port91_oMpkts = [];
var  Leaf27_4_Port92_oMpkts = [];  var  Leaf27_4_Port93_oMpkts = [];  var  Leaf27_4_Port94_oMpkts = [];
var  Leaf27_4_Port95_oMpkts = [];  var  Leaf27_4_Port96_oMpkts = [];  var  Leaf27_4_Port97_oMpkts = [];
var  Leaf27_4_Port98_oMpkts = [];  var  Leaf27_4_Port99_oMpkts = [];  var Leaf27_4_Port100_oMpkts = [];
var Leaf27_4_Port101_oMpkts = [];  var Leaf27_4_Port102_oMpkts = [];  var Leaf27_4_Port103_oMpkts = [];
var Leaf27_4_Port104_oMpkts = [];
var   Leaf27_4_Port1_oCongDrops = [];  var   Leaf27_4_Port2_oCongDrops = [];  var   Leaf27_4_Port3_oCongDrops = [];
var   Leaf27_4_Port4_oCongDrops = [];  var   Leaf27_4_Port7_oCongDrops = [];  var  Leaf27_4_Port10_oCongDrops = [];
var  Leaf27_4_Port13_oCongDrops = [];  var  Leaf27_4_Port17_oCongDrops = [];  var  Leaf27_4_Port81_oCongDrops = [];
var  Leaf27_4_Port85_oCongDrops = [];  var  Leaf27_4_Port86_oCongDrops = [];  var  Leaf27_4_Port87_oCongDrops = [];
var  Leaf27_4_Port88_oCongDrops = [];
var  Leaf27_4_Port89_oCongDrops = [];  var  Leaf27_4_Port90_oCongDrops = [];  var  Leaf27_4_Port91_oCongDrops = [];
var  Leaf27_4_Port92_oCongDrops = [];  var  Leaf27_4_Port93_oCongDrops = [];  var  Leaf27_4_Port94_oCongDrops = [];
var  Leaf27_4_Port95_oCongDrops = [];  var  Leaf27_4_Port96_oCongDrops = [];  var  Leaf27_4_Port97_oCongDrops = [];
var  Leaf27_4_Port98_oCongDrops = [];  var  Leaf27_4_Port99_oCongDrops = [];  var Leaf27_4_Port100_oCongDrops = [];
var Leaf27_4_Port101_oCongDrops = [];  var Leaf27_4_Port102_oCongDrops = [];  var Leaf27_4_Port103_oCongDrops = [];
var Leaf27_4_Port104_oCongDrops = [];
var   Leaf27_4_Port1_oerrs = [];  var   Leaf27_4_Port2_oerrs = [];  var   Leaf27_4_Port3_oerrs = [];
var   Leaf27_4_Port4_oerrs = [];  var   Leaf27_4_Port7_oerrs = [];  var  Leaf27_4_Port10_oerrs = [];
var  Leaf27_4_Port13_oerrs = [];  var  Leaf27_4_Port17_oerrs = [];  var  Leaf27_4_Port81_oerrs = [];
var  Leaf27_4_Port85_oerrs = [];  var  Leaf27_4_Port86_oerrs = [];  var  Leaf27_4_Port87_oerrs = [];
var  Leaf27_4_Port88_oerrs = [];
var  Leaf27_4_Port89_oerrs = [];  var  Leaf27_4_Port90_oerrs = [];  var  Leaf27_4_Port91_oerrs = [];
var  Leaf27_4_Port92_oerrs = [];  var  Leaf27_4_Port93_oerrs = [];  var  Leaf27_4_Port94_oerrs = [];
var  Leaf27_4_Port95_oerrs = [];  var  Leaf27_4_Port96_oerrs = [];  var  Leaf27_4_Port97_oerrs = [];
var  Leaf27_4_Port98_oerrs = [];  var  Leaf27_4_Port99_oerrs = [];  var Leaf27_4_Port100_oerrs = [];
var Leaf27_4_Port101_oerrs = [];  var Leaf27_4_Port102_oerrs = [];  var Leaf27_4_Port103_oerrs = [];
var Leaf27_4_Port104_oerrs = [];
var   Leaf27_4_Port1_mtu_errs = [];  var   Leaf27_4_Port2_mtu_errs = [];  var   Leaf27_4_Port3_mtu_errs = [];
var   Leaf27_4_Port4_mtu_errs = [];  var   Leaf27_4_Port7_mtu_errs = [];  var  Leaf27_4_Port10_mtu_errs = [];
var  Leaf27_4_Port13_mtu_errs = [];  var  Leaf27_4_Port17_mtu_errs = [];  var  Leaf27_4_Port81_mtu_errs = [];
var  Leaf27_4_Port85_mtu_errs = [];  var  Leaf27_4_Port86_mtu_errs = [];  var  Leaf27_4_Port87_mtu_errs = [];
var  Leaf27_4_Port88_mtu_errs = [];
var  Leaf27_4_Port89_mtu_errs = [];  var  Leaf27_4_Port90_mtu_errs = [];  var  Leaf27_4_Port91_mtu_errs = [];
var  Leaf27_4_Port92_mtu_errs = [];  var  Leaf27_4_Port93_mtu_errs = [];  var  Leaf27_4_Port94_mtu_errs = [];
var  Leaf27_4_Port95_mtu_errs = [];  var  Leaf27_4_Port96_mtu_errs = [];  var  Leaf27_4_Port97_mtu_errs = [];
var  Leaf27_4_Port98_mtu_errs = [];  var  Leaf27_4_Port99_mtu_errs = [];  var Leaf27_4_Port100_mtu_errs = [];
var Leaf27_4_Port101_mtu_errs = [];  var Leaf27_4_Port102_mtu_errs = [];  var Leaf27_4_Port103_mtu_errs = [];
var Leaf27_4_Port104_mtu_errs = [];

var parse = [];

    if(date10!=null){
        for(var i11=0;i11<date10.length;i11++){
            parse[i11] = parseInt(date10[i11], 10);
            this.state.chartData17.labels.push(parse[i11]);
            this.state.chartData23.labels.push(parse[i11]);
            this.state.chartData29.labels.push(parse[i11]);
            this.state.chartData35.labels.push(parse[i11]);
            this.state.chartData41.labels.push(parse[i11]);
            this.state.chartData47.labels.push(parse[i11]);
            this.state.chartData53.labels.push(parse[i11]);
            this.state.chartData59.labels.push(parse[i11]);
            this.state.chartData65.labels.push(parse[i11]);
            this.state.chartData71.labels.push(parse[i11]);
            this.state.chartData77.labels.push(parse[i11]);
            this.state.chartData83.labels.push(parse[i11]);
            this.state.chartData89.labels.push(parse[i11]);

            if(Leaf27_4_Port1[i11] !== undefined){ 
                //    console.log(Leaf27_4_Port1[i11]);
                Leaf27_4_Port1_fix[i11] = Leaf27_4_Port1[i11].slice(26, 34);
                Leaf27_4_Port1_iUpkts[i11] = Leaf27_4_Port1[i11].slice(33,40);
                Leaf27_4_Port1_iBpkts[i11] = Leaf27_4_Port1[i11].slice(40,47);
                Leaf27_4_Port1_iMpkts[i11] = Leaf27_4_Port1[i11].slice(47,54);
                Leaf27_4_Port1_iCongDrops[i11] = Leaf27_4_Port1[i11].slice(54,65);
                Leaf27_4_Port1_ierrs[i11] = Leaf27_4_Port1[i11].slice(65,71);
                Leaf27_4_Port1_obytes[i11] = Leaf27_4_Port1[i11].slice(71,78);
                Leaf27_4_Port1_oUpkts[i11] = Leaf27_4_Port1[i11].slice(78,85);
                Leaf27_4_Port1_oBpkts[i11] = Leaf27_4_Port1[i11].slice(85,92);
                Leaf27_4_Port1_oMpkts[i11] = Leaf27_4_Port1[i11].slice(92,99);
                Leaf27_4_Port1_oCongDrops[i11] = Leaf27_4_Port1[i11].slice(99,110);
                Leaf27_4_Port1_oerrs[i11] = Leaf27_4_Port1[i11].slice(110,116);
                Leaf27_4_Port1_mtu_errs[i11] = Leaf27_4_Port1[i11].slice(116,125);
            
                if(Leaf27_4_Port1_fix[i11].includes("G")){
                    Leaf27_4_Port1_fix[i11] = Leaf27_4_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_fix[i11][0] = Leaf27_4_Port1_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_fix[i11].includes("M")){
                    Leaf27_4_Port1_fix[i11] = Leaf27_4_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_fix[i11][0] = Leaf27_4_Port1_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port1_fix[i11].includes("K")){
                    Leaf27_4_Port1_fix[i11] = Leaf27_4_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_fix[i11][0] = Leaf27_4_Port1_fix[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_fix[i11] = Leaf27_4_Port1_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
            
                if(Leaf27_4_Port1_iUpkts[i11].includes("G")){
                    Leaf27_4_Port1_iUpkts[i11] = Leaf27_4_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iUpkts[i11][0] = Leaf27_4_Port1_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_iUpkts[i11].includes("M")){
                    Leaf27_4_Port1_iUpkts[i11] = Leaf27_4_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iUpkts[i11][0] = Leaf27_4_Port1_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_iUpkts[i11].includes("K")){
                    Leaf27_4_Port1_iUpkts[i11] = Leaf27_4_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iUpkts[i11][0] = Leaf27_4_Port1_iUpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_iUpkts[i11] = Leaf27_4_Port1_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                if(Leaf27_4_Port1_iBpkts[i11].includes("G")){
                    Leaf27_4_Port1_iBpkts[i11] = Leaf27_4_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iBpkts[i11][0] = Leaf27_4_Port1_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_iBpkts[i11].includes("M")){
                    Leaf27_4_Port1_iBpkts[i11] = Leaf27_4_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iBpkts[i11][0] = Leaf27_4_Port1_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_iBpkts[i11].includes("K")){
                    Leaf27_4_Port1_iBpkts[i11] = Leaf27_4_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iBpkts[i11][0] = Leaf27_4_Port1_iBpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_iBpkts[i11] = Leaf27_4_Port1_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                if(Leaf27_4_Port1_iMpkts[i11].includes("G")){
                    Leaf27_4_Port1_iMpkts[i11] = Leaf27_4_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iMpkts[i11][0] = Leaf27_4_Port1_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_iMpkts[i11].includes("M")){
                    Leaf27_4_Port1_iMpkts[i11] = Leaf27_4_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iMpkts[i11][0] = Leaf27_4_Port1_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_iMpkts[i11].includes("K")){
                    Leaf27_4_Port1_iMpkts[i11] = Leaf27_4_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iMpkts[i11][0] = Leaf27_4_Port1_iMpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_iMpkts[i11] = Leaf27_4_Port1_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                if(Leaf27_4_Port1_iCongDrops[i11].includes("G")){
                    Leaf27_4_Port1_iCongDrops[i11] = Leaf27_4_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iCongDrops[i11][0] = Leaf27_4_Port1_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_iCongDrops[i11].includes("M")){
                    Leaf27_4_Port1_iCongDrops[i11] = Leaf27_4_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iCongDrops[i11][0] = Leaf27_4_Port1_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port1_iCongDrops[i11].includes("K")){
                    Leaf27_4_Port1_iCongDrops[i11] = Leaf27_4_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_iCongDrops[i11][0] = Leaf27_4_Port1_iCongDrops[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_iCongDrops[i11] = Leaf27_4_Port1_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                if(Leaf27_4_Port1_ierrs[i11].includes("G")){
                    Leaf27_4_Port1_ierrs[i11] = Leaf27_4_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_ierrs[i11][0] = Leaf27_4_Port1_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_ierrs[i11].includes("M")){
                    Leaf27_4_Port1_ierrs[i11] = Leaf27_4_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_ierrs[i11][0] = Leaf27_4_Port1_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port1_ierrs[i11].includes("K")){
                    Leaf27_4_Port1_ierrs[i11] = Leaf27_4_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_ierrs[i11][0] = Leaf27_4_Port1_ierrs[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_ierrs[i11] = Leaf27_4_Port1_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                if(Leaf27_4_Port1_obytes[i11].includes("G")){
                    Leaf27_4_Port1_obytes[i11] = Leaf27_4_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_obytes[i11][0] = Leaf27_4_Port1_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_obytes[i11].includes("M")){
                    Leaf27_4_Port1_obytes[i11] = Leaf27_4_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_obytes[i11][0] = Leaf27_4_Port1_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port1_obytes[i11].includes("K")){
                    Leaf27_4_Port1_obytes[i11] = Leaf27_4_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_obytes[i11][0] = Leaf27_4_Port1_obytes[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_obytes[i11] = Leaf27_4_Port1_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                if(Leaf27_4_Port1_oUpkts[i11].includes("G")){
                    Leaf27_4_Port1_oUpkts[i11] = Leaf27_4_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oUpkts[i11][0] = Leaf27_4_Port1_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_oUpkts[i11].includes("M")){
                    Leaf27_4_Port1_oUpkts[i11] = Leaf27_4_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oUpkts[i11][0] = Leaf27_4_Port1_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_oUpkts[i11].includes("K")){
                    Leaf27_4_Port1_oUpkts[i11] = Leaf27_4_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oUpkts[i11][0] = Leaf27_4_Port1_oUpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_oUpkts[i11] = Leaf27_4_Port1_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                if(Leaf27_4_Port1_oBpkts[i11].includes("G")){
                    Leaf27_4_Port1_oBpkts[i11] = Leaf27_4_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oBpkts[i11][0] = Leaf27_4_Port1_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_oBpkts[i11].includes("M")){
                    Leaf27_4_Port1_oBpkts[i11] = Leaf27_4_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oBpkts[i11][0] = Leaf27_4_Port1_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_oBpkts[i11].includes("K")){
                    Leaf27_4_Port1_oBpkts[i11] = Leaf27_4_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oBpkts[i11][0] = Leaf27_4_Port1_oBpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_oBpkts[i11] = Leaf27_4_Port1_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                if(Leaf27_4_Port1_oMpkts[i11].includes("G")){
                    Leaf27_4_Port1_oMpkts[i11] = Leaf27_4_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oMpkts[i11][0] = Leaf27_4_Port1_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_oMpkts[i11].includes("M")){
                    Leaf27_4_Port1_oMpkts[i11] = Leaf27_4_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oMpkts[i11][0] = Leaf27_4_Port1_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port1_oMpkts[i11].includes("K")){
                    Leaf27_4_Port1_oMpkts[i11] = Leaf27_4_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oMpkts[i11][0] = Leaf27_4_Port1_oMpkts[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_oMpkts[i11] = Leaf27_4_Port1_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                if(Leaf27_4_Port1_oCongDrops[i11].includes("G")){
                    Leaf27_4_Port1_oCongDrops[i11] = Leaf27_4_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oCongDrops[i11][0] = Leaf27_4_Port1_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_oCongDrops[i11].includes("M")){
                    Leaf27_4_Port1_oCongDrops[i11] = Leaf27_4_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oCongDrops[i11][0] = Leaf27_4_Port1_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port1_oCongDrops[i11].includes("K")){
                    Leaf27_4_Port1_oCongDrops[i11] = Leaf27_4_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oCongDrops[i11][0] = Leaf27_4_Port1_oCongDrops[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_oCongDrops[i11] = Leaf27_4_Port1_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
            
                if(Leaf27_4_Port1_oerrs[i11].includes("G")){
                    Leaf27_4_Port1_oerrs[i11] = Leaf27_4_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oerrs[i11][0] = Leaf27_4_Port1_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_oerrs[i11].includes("M")){
                    Leaf27_4_Port1_oerrs[i11] = Leaf27_4_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oerrs[i11][0] = Leaf27_4_Port1_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port1_oerrs[i11].includes("K")){
                    Leaf27_4_Port1_oerrs[i11] = Leaf27_4_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_oerrs[i11][0] = Leaf27_4_Port1_oerrs[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_oerrs[i11] = Leaf27_4_Port1_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
            
                if(Leaf27_4_Port1_mtu_errs[i11].includes("G")){
                    Leaf27_4_Port1_mtu_errs[i11] = Leaf27_4_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_mtu_errs[i11][0] = Leaf27_4_Port1_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port1_mtu_errs[i11].includes("M")){
                    Leaf27_4_Port1_mtu_errs[i11] = Leaf27_4_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_mtu_errs[i11][0] = Leaf27_4_Port1_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port1_mtu_errs[i11].includes("K")){
                    Leaf27_4_Port1_mtu_errs[i11] = Leaf27_4_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port1_mtu_errs[i11][0] = Leaf27_4_Port1_mtu_errs[i11][0]*1000;}
                else {
                    Leaf27_4_Port1_mtu_errs[i11] = Leaf27_4_Port1_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }}
            
                if(Leaf27_4_Port2[i11] !== undefined){ 
                    //    console.log(Leaf27_4_Port1[i11]);
                    Leaf27_4_Port2_fix[i11] = Leaf27_4_Port2[i11].slice(26, 34);
                    Leaf27_4_Port2_iUpkts[i11] = Leaf27_4_Port2[i11].slice(33,40);
                    Leaf27_4_Port2_iBpkts[i11] = Leaf27_4_Port2[i11].slice(40,47);
                    Leaf27_4_Port2_iMpkts[i11] = Leaf27_4_Port2[i11].slice(47,54);
                    Leaf27_4_Port2_iCongDrops[i11] = Leaf27_4_Port2[i11].slice(54,65);
                    Leaf27_4_Port2_ierrs[i11] = Leaf27_4_Port2[i11].slice(65,71);
                    Leaf27_4_Port2_obytes[i11] = Leaf27_4_Port2[i11].slice(71,78);
                    Leaf27_4_Port2_oUpkts[i11] = Leaf27_4_Port2[i11].slice(78,85);
                    Leaf27_4_Port2_oBpkts[i11] = Leaf27_4_Port2[i11].slice(85,92);
                    Leaf27_4_Port2_oMpkts[i11] = Leaf27_4_Port2[i11].slice(92,99);
                    Leaf27_4_Port2_oCongDrops[i11] = Leaf27_4_Port2[i11].slice(99,110);
                    Leaf27_4_Port2_oerrs[i11] = Leaf27_4_Port2[i11].slice(110,116);
                    Leaf27_4_Port2_mtu_errs[i11] = Leaf27_4_Port2[i11].slice(116,125);
            
                    if(Leaf27_4_Port2_fix[i11].includes("G")){
                        Leaf27_4_Port2_fix[i11] =    Leaf27_4_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_fix[i11][0] = Leaf27_4_Port2_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_fix[i11].includes("M")){
                        Leaf27_4_Port2_fix[i11] =    Leaf27_4_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_fix[i11][0] = Leaf27_4_Port2_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port2_fix[i11].includes("K")){
                        Leaf27_4_Port2_fix[i11] =    Leaf27_4_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_fix[i11][0] = Leaf27_4_Port2_fix[i11][0]*1000;}
                else {  Leaf27_4_Port2_fix[i11] =    Leaf27_4_Port2_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                    if(Leaf27_4_Port2_iUpkts[i11].includes("G")){
                        Leaf27_4_Port2_iUpkts[i11] =    Leaf27_4_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iUpkts[i11][0] = Leaf27_4_Port2_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_iUpkts[i11].includes("M")){
                        Leaf27_4_Port2_iUpkts[i11] =    Leaf27_4_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iUpkts[i11][0] = Leaf27_4_Port2_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_iUpkts[i11].includes("K")){
                        Leaf27_4_Port2_iUpkts[i11] =    Leaf27_4_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iUpkts[i11][0] = Leaf27_4_Port2_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_iUpkts[i11] =    Leaf27_4_Port2_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                
                        if(Leaf27_4_Port2_iBpkts[i11].includes("G")){
                        Leaf27_4_Port2_iBpkts[i11] =    Leaf27_4_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iBpkts[i11][0] = Leaf27_4_Port2_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_iBpkts[i11].includes("M")){
                        Leaf27_4_Port2_iBpkts[i11] =    Leaf27_4_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iBpkts[i11][0] = Leaf27_4_Port2_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_iBpkts[i11].includes("K")){
                        Leaf27_4_Port2_iBpkts[i11] =    Leaf27_4_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iBpkts[i11][0] = Leaf27_4_Port2_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_iBpkts[i11] =    Leaf27_4_Port2_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                    
                        if(Leaf27_4_Port2_iMpkts[i11].includes("G")){
                        Leaf27_4_Port2_iMpkts[i11] =    Leaf27_4_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iMpkts[i11][0] = Leaf27_4_Port2_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_iMpkts[i11].includes("M")){
                        Leaf27_4_Port2_iMpkts[i11] =    Leaf27_4_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iMpkts[i11][0] = Leaf27_4_Port2_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_iMpkts[i11].includes("K")){
                        Leaf27_4_Port2_iMpkts[i11] =    Leaf27_4_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iMpkts[i11][0] = Leaf27_4_Port2_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_iMpkts[i11] =    Leaf27_4_Port2_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port2_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port2_iCongDrops[i11] =    Leaf27_4_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iCongDrops[i11][0] = Leaf27_4_Port2_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port2_iCongDrops[i11] =    Leaf27_4_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iCongDrops[i11][0] = Leaf27_4_Port2_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port2_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port2_iCongDrops[i11] =    Leaf27_4_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_iCongDrops[i11][0] = Leaf27_4_Port2_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port2_iCongDrops[i11] =    Leaf27_4_Port2_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port2_ierrs[i11].includes("G")){
                        Leaf27_4_Port2_ierrs[i11] =    Leaf27_4_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_ierrs[i11][0] = Leaf27_4_Port2_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_ierrs[i11].includes("M")){
                        Leaf27_4_Port2_ierrs[i11] =    Leaf27_4_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_ierrs[i11][0] = Leaf27_4_Port2_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port2_ierrs[i11].includes("K")){
                        Leaf27_4_Port2_ierrs[i11] =    Leaf27_4_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_ierrs[i11][0] = Leaf27_4_Port2_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port2_ierrs[i11] =    Leaf27_4_Port2_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port2_obytes[i11].includes("G")){
                        Leaf27_4_Port2_obytes[i11] =    Leaf27_4_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_obytes[i11][0] = Leaf27_4_Port2_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_obytes[i11].includes("M")){
                        Leaf27_4_Port2_obytes[i11] =    Leaf27_4_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_obytes[i11][0] = Leaf27_4_Port2_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port2_obytes[i11].includes("K")){
                        Leaf27_4_Port2_obytes[i11] =    Leaf27_4_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_obytes[i11][0] = Leaf27_4_Port2_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port2_obytes[i11] =    Leaf27_4_Port2_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port2_oUpkts[i11].includes("G")){
                        Leaf27_4_Port2_oUpkts[i11] =    Leaf27_4_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oUpkts[i11][0] = Leaf27_4_Port2_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_oUpkts[i11].includes("M")){
                        Leaf27_4_Port2_oUpkts[i11] =    Leaf27_4_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oUpkts[i11][0] = Leaf27_4_Port2_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_oUpkts[i11].includes("K")){
                        Leaf27_4_Port2_oUpkts[i11] =    Leaf27_4_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oUpkts[i11][0] = Leaf27_4_Port2_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_oUpkts[i11] =    Leaf27_4_Port2_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port2_oBpkts[i11].includes("G")){
                        Leaf27_4_Port2_oBpkts[i11] =    Leaf27_4_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oBpkts[i11][0] = Leaf27_4_Port2_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_oBpkts[i11].includes("M")){
                        Leaf27_4_Port2_oBpkts[i11] =    Leaf27_4_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oBpkts[i11][0] = Leaf27_4_Port2_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_oBpkts[i11].includes("K")){
                        Leaf27_4_Port2_oBpkts[i11] =    Leaf27_4_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oBpkts[i11][0] = Leaf27_4_Port2_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_oBpkts[i11] =    Leaf27_4_Port2_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port2_oMpkts[i11].includes("G")){
                        Leaf27_4_Port2_oMpkts[i11] =    Leaf27_4_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oMpkts[i11][0] = Leaf27_4_Port2_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_oMpkts[i11].includes("M")){
                        Leaf27_4_Port2_oMpkts[i11] =    Leaf27_4_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oMpkts[i11][0] = Leaf27_4_Port2_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port2_oMpkts[i11].includes("K")){
                        Leaf27_4_Port2_oMpkts[i11] =    Leaf27_4_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oMpkts[i11][0] = Leaf27_4_Port2_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port2_oMpkts[i11] =    Leaf27_4_Port2_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port2_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port2_oCongDrops[i11] =    Leaf27_4_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oCongDrops[i11][0] = Leaf27_4_Port2_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port2_oCongDrops[i11] =    Leaf27_4_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oCongDrops[i11][0] = Leaf27_4_Port2_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port2_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port2_oCongDrops[i11] =    Leaf27_4_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oCongDrops[i11][0] = Leaf27_4_Port2_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port2_oCongDrops[i11] =    Leaf27_4_Port2_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port2_oerrs[i11].includes("G")){
                        Leaf27_4_Port2_oerrs[i11] =    Leaf27_4_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oerrs[i11][0] = Leaf27_4_Port2_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_oerrs[i11].includes("M")){
                        Leaf27_4_Port2_oerrs[i11] =    Leaf27_4_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oerrs[i11][0] = Leaf27_4_Port2_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port2_oerrs[i11].includes("K")){
                        Leaf27_4_Port2_oerrs[i11] =    Leaf27_4_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_oerrs[i11][0] = Leaf27_4_Port2_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port2_oerrs[i11] =    Leaf27_4_Port2_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port2_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port2_mtu_errs[i11] =    Leaf27_4_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_mtu_errs[i11][0] = Leaf27_4_Port2_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port2_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port2_mtu_errs[i11] =    Leaf27_4_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_mtu_errs[i11][0] = Leaf27_4_Port2_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port2_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port2_mtu_errs[i11] =    Leaf27_4_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port2_mtu_errs[i11][0] = Leaf27_4_Port2_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port2_mtu_errs[i11] =    Leaf27_4_Port2_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}     
            
                if(Leaf27_4_Port3[i11] !== undefined){ 
                    //    console.log(Leaf27_4_Port1[i11]);
                    Leaf27_4_Port3_fix[i11] =        Leaf27_4_Port3[i11].slice(26, 34);
                    Leaf27_4_Port3_iUpkts[i11] =     Leaf27_4_Port3[i11].slice(33,40);
                    Leaf27_4_Port3_iBpkts[i11] =     Leaf27_4_Port3[i11].slice(40,47);
                    Leaf27_4_Port3_iMpkts[i11] =     Leaf27_4_Port3[i11].slice(47,54);
                    Leaf27_4_Port3_iCongDrops[i11] = Leaf27_4_Port3[i11].slice(54,65);
                    Leaf27_4_Port3_ierrs[i11] =      Leaf27_4_Port3[i11].slice(65,71);
                    Leaf27_4_Port3_obytes[i11] =     Leaf27_4_Port3[i11].slice(71,78);
                    Leaf27_4_Port3_oUpkts[i11] =     Leaf27_4_Port3[i11].slice(78,85);
                    Leaf27_4_Port3_oBpkts[i11] =     Leaf27_4_Port3[i11].slice(85,92);
                    Leaf27_4_Port3_oMpkts[i11] =     Leaf27_4_Port3[i11].slice(92,99);
                    Leaf27_4_Port3_oCongDrops[i11] = Leaf27_4_Port3[i11].slice(99,110);
                    Leaf27_4_Port3_oerrs[i11] =      Leaf27_4_Port3[i11].slice(110,116);
                    Leaf27_4_Port3_mtu_errs[i11] =   Leaf27_4_Port3[i11].slice(116,125);
            
                    if( Leaf27_4_Port3_fix[i11].includes("G")){
                        Leaf27_4_Port3_fix[i11] =    Leaf27_4_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_fix[i11][0] = Leaf27_4_Port3_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_fix[i11].includes("M")){
                        Leaf27_4_Port3_fix[i11] =    Leaf27_4_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_fix[i11][0] = Leaf27_4_Port3_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port3_fix[i11].includes("K")){
                        Leaf27_4_Port3_fix[i11] =    Leaf27_4_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_fix[i11][0] = Leaf27_4_Port3_fix[i11][0]*1000;}
                else {  Leaf27_4_Port3_fix[i11] =    Leaf27_4_Port3_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                    if( Leaf27_4_Port3_iUpkts[i11].includes("G")){
                        Leaf27_4_Port3_iUpkts[i11] =    Leaf27_4_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iUpkts[i11][0] = Leaf27_4_Port3_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_iUpkts[i11].includes("M")){
                        Leaf27_4_Port3_iUpkts[i11] =    Leaf27_4_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iUpkts[i11][0] = Leaf27_4_Port3_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_iUpkts[i11].includes("K")){
                        Leaf27_4_Port3_iUpkts[i11] =    Leaf27_4_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iUpkts[i11][0] = Leaf27_4_Port3_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_iUpkts[i11] =    Leaf27_4_Port3_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                
                        if(Leaf27_4_Port3_iBpkts[i11].includes("G")){
                        Leaf27_4_Port3_iBpkts[i11] =    Leaf27_4_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iBpkts[i11][0] = Leaf27_4_Port3_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_iBpkts[i11].includes("M")){
                        Leaf27_4_Port3_iBpkts[i11] =    Leaf27_4_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iBpkts[i11][0] = Leaf27_4_Port3_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_iBpkts[i11].includes("K")){
                        Leaf27_4_Port3_iBpkts[i11] =    Leaf27_4_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iBpkts[i11][0] = Leaf27_4_Port3_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_iBpkts[i11] =    Leaf27_4_Port3_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port3_iMpkts[i11].includes("G")){
                        Leaf27_4_Port3_iMpkts[i11] =    Leaf27_4_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iMpkts[i11][0] = Leaf27_4_Port3_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_iMpkts[i11].includes("M")){
                        Leaf27_4_Port3_iMpkts[i11] =    Leaf27_4_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iMpkts[i11][0] = Leaf27_4_Port3_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_iMpkts[i11].includes("K")){
                        Leaf27_4_Port3_iMpkts[i11] =    Leaf27_4_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iMpkts[i11][0] = Leaf27_4_Port3_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_iMpkts[i11] =    Leaf27_4_Port3_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port3_iCongDrops[i11] =    Leaf27_4_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iCongDrops[i11][0] = Leaf27_4_Port3_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port3_iCongDrops[i11] =    Leaf27_4_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iCongDrops[i11][0] = Leaf27_4_Port3_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port3_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port3_iCongDrops[i11] =    Leaf27_4_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_iCongDrops[i11][0] = Leaf27_4_Port3_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port3_iCongDrops[i11] =    Leaf27_4_Port3_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port3_ierrs[i11].includes("G")){
                        Leaf27_4_Port3_ierrs[i11] =    Leaf27_4_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_ierrs[i11][0] = Leaf27_4_Port3_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_ierrs[i11].includes("M")){
                        Leaf27_4_Port3_ierrs[i11] =    Leaf27_4_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_ierrs[i11][0] = Leaf27_4_Port3_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port3_ierrs[i11].includes("K")){
                        Leaf27_4_Port3_ierrs[i11] =    Leaf27_4_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_ierrs[i11][0] = Leaf27_4_Port3_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port3_ierrs[i11] =    Leaf27_4_Port3_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_obytes[i11].includes("G")){
                        Leaf27_4_Port3_obytes[i11] =    Leaf27_4_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_obytes[i11][0] = Leaf27_4_Port3_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_obytes[i11].includes("M")){
                        Leaf27_4_Port3_obytes[i11] =    Leaf27_4_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_obytes[i11][0] = Leaf27_4_Port3_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port3_obytes[i11].includes("K")){
                        Leaf27_4_Port3_obytes[i11] =    Leaf27_4_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_obytes[i11][0] = Leaf27_4_Port3_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port3_obytes[i11] =    Leaf27_4_Port3_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port3_oUpkts[i11].includes("G")){
                        Leaf27_4_Port3_oUpkts[i11] =    Leaf27_4_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oUpkts[i11][0] = Leaf27_4_Port3_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_oUpkts[i11].includes("M")){
                        Leaf27_4_Port3_oUpkts[i11] =    Leaf27_4_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oUpkts[i11][0] = Leaf27_4_Port3_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_oUpkts[i11].includes("K")){
                        Leaf27_4_Port3_oUpkts[i11] =    Leaf27_4_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oUpkts[i11][0] = Leaf27_4_Port3_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_oUpkts[i11] =    Leaf27_4_Port3_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port3_oBpkts[i11].includes("G")){
                        Leaf27_4_Port3_oBpkts[i11] =    Leaf27_4_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oBpkts[i11][0] = Leaf27_4_Port3_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_oBpkts[i11].includes("M")){
                        Leaf27_4_Port3_oBpkts[i11] =    Leaf27_4_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oBpkts[i11][0] = Leaf27_4_Port3_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_oBpkts[i11].includes("K")){
                        Leaf27_4_Port3_oBpkts[i11] =    Leaf27_4_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oBpkts[i11][0] = Leaf27_4_Port3_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_oBpkts[i11] =    Leaf27_4_Port3_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_oMpkts[i11].includes("G")){
                        Leaf27_4_Port3_oMpkts[i11] =    Leaf27_4_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oMpkts[i11][0] = Leaf27_4_Port3_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_oMpkts[i11].includes("M")){
                        Leaf27_4_Port3_oMpkts[i11] =    Leaf27_4_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oMpkts[i11][0] = Leaf27_4_Port3_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port3_oMpkts[i11].includes("K")){
                        Leaf27_4_Port3_oMpkts[i11] =    Leaf27_4_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oMpkts[i11][0] = Leaf27_4_Port3_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port3_oMpkts[i11] =    Leaf27_4_Port3_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port3_oCongDrops[i11] =    Leaf27_4_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oCongDrops[i11][0] = Leaf27_4_Port3_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port3_oCongDrops[i11] =    Leaf27_4_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oCongDrops[i11][0] = Leaf27_4_Port3_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port3_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port3_oCongDrops[i11] =    Leaf27_4_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oCongDrops[i11][0] = Leaf27_4_Port3_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port3_oCongDrops[i11] =    Leaf27_4_Port3_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_oerrs[i11].includes("G")){
                        Leaf27_4_Port3_oerrs[i11] =    Leaf27_4_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oerrs[i11][0] = Leaf27_4_Port3_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_oerrs[i11].includes("M")){
                        Leaf27_4_Port3_oerrs[i11] =    Leaf27_4_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oerrs[i11][0] = Leaf27_4_Port3_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port3_oerrs[i11].includes("K")){
                        Leaf27_4_Port3_oerrs[i11] =    Leaf27_4_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_oerrs[i11][0] = Leaf27_4_Port3_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port3_oerrs[i11] =    Leaf27_4_Port3_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port3_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port3_mtu_errs[i11] =    Leaf27_4_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_mtu_errs[i11][0] = Leaf27_4_Port3_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port3_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port3_mtu_errs[i11] =    Leaf27_4_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_mtu_errs[i11][0] = Leaf27_4_Port3_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port3_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port3_mtu_errs[i11] =    Leaf27_4_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port3_mtu_errs[i11][0] = Leaf27_4_Port3_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port3_mtu_errs[i11] =    Leaf27_4_Port3_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
                if(Leaf27_4_Port4[i11] !== undefined){ 
                    //    console.log(Leaf27_4_Port1[i11]);
                    Leaf27_4_Port4_fix[i11] =        Leaf27_4_Port4[i11].slice(26, 34);
                    Leaf27_4_Port4_iUpkts[i11] =     Leaf27_4_Port4[i11].slice(33,40);
                    Leaf27_4_Port4_iBpkts[i11] =     Leaf27_4_Port4[i11].slice(40,47);
                    Leaf27_4_Port4_iMpkts[i11] =     Leaf27_4_Port4[i11].slice(47,54);
                    Leaf27_4_Port4_iCongDrops[i11] = Leaf27_4_Port4[i11].slice(54,65);
                    Leaf27_4_Port4_ierrs[i11] =      Leaf27_4_Port4[i11].slice(65,71);
                    Leaf27_4_Port4_obytes[i11] =     Leaf27_4_Port4[i11].slice(71,78);
                    Leaf27_4_Port4_oUpkts[i11] =     Leaf27_4_Port4[i11].slice(78,85);
                    Leaf27_4_Port4_oBpkts[i11] =     Leaf27_4_Port4[i11].slice(85,92);
                    Leaf27_4_Port4_oMpkts[i11] =     Leaf27_4_Port4[i11].slice(92,99);
                    Leaf27_4_Port4_oCongDrops[i11] = Leaf27_4_Port4[i11].slice(99,110);
                    Leaf27_4_Port4_oerrs[i11] =      Leaf27_4_Port4[i11].slice(110,116);
                    Leaf27_4_Port4_mtu_errs[i11] =   Leaf27_4_Port4[i11].slice(116,125);
            
                    if( Leaf27_4_Port4_fix[i11].includes("G")){
                        Leaf27_4_Port4_fix[i11] =    Leaf27_4_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_fix[i11][0] = Leaf27_4_Port4_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_fix[i11].includes("M")){
                        Leaf27_4_Port4_fix[i11] =    Leaf27_4_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_fix[i11][0] = Leaf27_4_Port4_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port4_fix[i11].includes("K")){
                        Leaf27_4_Port4_fix[i11] =    Leaf27_4_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_fix[i11][0] = Leaf27_4_Port4_fix[i11][0]*1000;}
                else {  Leaf27_4_Port4_fix[i11] =    Leaf27_4_Port4_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                    if( Leaf27_4_Port4_iUpkts[i11].includes("G")){
                        Leaf27_4_Port4_iUpkts[i11] =    Leaf27_4_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iUpkts[i11][0] = Leaf27_4_Port4_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_iUpkts[i11].includes("M")){
                        Leaf27_4_Port4_iUpkts[i11] =    Leaf27_4_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iUpkts[i11][0] = Leaf27_4_Port4_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_iUpkts[i11].includes("K")){
                        Leaf27_4_Port4_iUpkts[i11] =    Leaf27_4_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iUpkts[i11][0] = Leaf27_4_Port4_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_iUpkts[i11] =    Leaf27_4_Port4_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                
                        if(Leaf27_4_Port4_iBpkts[i11].includes("G")){
                        Leaf27_4_Port4_iBpkts[i11] =    Leaf27_4_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iBpkts[i11][0] = Leaf27_4_Port4_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_iBpkts[i11].includes("M")){
                        Leaf27_4_Port4_iBpkts[i11] =    Leaf27_4_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iBpkts[i11][0] = Leaf27_4_Port4_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_iBpkts[i11].includes("K")){
                        Leaf27_4_Port4_iBpkts[i11] =    Leaf27_4_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iBpkts[i11][0] = Leaf27_4_Port4_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_iBpkts[i11] =    Leaf27_4_Port4_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port4_iMpkts[i11].includes("G")){
                        Leaf27_4_Port4_iMpkts[i11] =    Leaf27_4_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iMpkts[i11][0] = Leaf27_4_Port4_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_iMpkts[i11].includes("M")){
                        Leaf27_4_Port4_iMpkts[i11] =    Leaf27_4_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iMpkts[i11][0] = Leaf27_4_Port4_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_iMpkts[i11].includes("K")){
                        Leaf27_4_Port4_iMpkts[i11] =    Leaf27_4_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iMpkts[i11][0] = Leaf27_4_Port4_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_iMpkts[i11] =    Leaf27_4_Port4_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port4_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port4_iCongDrops[i11] =    Leaf27_4_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iCongDrops[i11][0] = Leaf27_4_Port4_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port4_iCongDrops[i11] =    Leaf27_4_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iCongDrops[i11][0] = Leaf27_4_Port4_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port4_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port4_iCongDrops[i11] =    Leaf27_4_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_iCongDrops[i11][0] = Leaf27_4_Port4_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port4_iCongDrops[i11] =    Leaf27_4_Port4_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port4_ierrs[i11].includes("G")){
                        Leaf27_4_Port4_ierrs[i11] =    Leaf27_4_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_ierrs[i11][0] = Leaf27_4_Port4_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_ierrs[i11].includes("M")){
                        Leaf27_4_Port4_ierrs[i11] =    Leaf27_4_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_ierrs[i11][0] = Leaf27_4_Port4_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port4_ierrs[i11].includes("K")){
                        Leaf27_4_Port4_ierrs[i11] =    Leaf27_4_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_ierrs[i11][0] = Leaf27_4_Port4_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port4_ierrs[i11] =    Leaf27_4_Port4_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port4_obytes[i11].includes("G")){
                        Leaf27_4_Port4_obytes[i11] =    Leaf27_4_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_obytes[i11][0] = Leaf27_4_Port4_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_obytes[i11].includes("M")){
                        Leaf27_4_Port4_obytes[i11] =    Leaf27_4_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_obytes[i11][0] = Leaf27_4_Port4_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port4_obytes[i11].includes("K")){
                        Leaf27_4_Port4_obytes[i11] =    Leaf27_4_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_obytes[i11][0] = Leaf27_4_Port4_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port4_obytes[i11] =    Leaf27_4_Port4_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port4_oUpkts[i11].includes("G")){
                        Leaf27_4_Port4_oUpkts[i11] =    Leaf27_4_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oUpkts[i11][0] = Leaf27_4_Port4_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_oUpkts[i11].includes("M")){
                        Leaf27_4_Port4_oUpkts[i11] =    Leaf27_4_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oUpkts[i11][0] = Leaf27_4_Port4_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_oUpkts[i11].includes("K")){
                        Leaf27_4_Port4_oUpkts[i11] =    Leaf27_4_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oUpkts[i11][0] = Leaf27_4_Port4_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_oUpkts[i11] =    Leaf27_4_Port4_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port4_oBpkts[i11].includes("G")){
                        Leaf27_4_Port4_oBpkts[i11] =    Leaf27_4_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oBpkts[i11][0] = Leaf27_4_Port4_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_oBpkts[i11].includes("M")){
                        Leaf27_4_Port4_oBpkts[i11] =    Leaf27_4_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oBpkts[i11][0] = Leaf27_4_Port4_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_oBpkts[i11].includes("K")){
                        Leaf27_4_Port4_oBpkts[i11] =    Leaf27_4_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oBpkts[i11][0] = Leaf27_4_Port4_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_oBpkts[i11] =    Leaf27_4_Port4_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port4_oMpkts[i11].includes("G")){
                        Leaf27_4_Port4_oMpkts[i11] =    Leaf27_4_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oMpkts[i11][0] = Leaf27_4_Port4_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_oMpkts[i11].includes("M")){
                        Leaf27_4_Port4_oMpkts[i11] =    Leaf27_4_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oMpkts[i11][0] = Leaf27_4_Port4_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port4_oMpkts[i11].includes("K")){
                        Leaf27_4_Port4_oMpkts[i11] =    Leaf27_4_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oMpkts[i11][0] = Leaf27_4_Port4_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port4_oMpkts[i11] =    Leaf27_4_Port4_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port4_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port4_oCongDrops[i11] =    Leaf27_4_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oCongDrops[i11][0] = Leaf27_4_Port4_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port4_oCongDrops[i11] =    Leaf27_4_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oCongDrops[i11][0] = Leaf27_4_Port4_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port4_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port4_oCongDrops[i11] =    Leaf27_4_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oCongDrops[i11][0] = Leaf27_4_Port4_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port4_oCongDrops[i11] =    Leaf27_4_Port4_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port4_oerrs[i11].includes("G")){
                        Leaf27_4_Port4_oerrs[i11] =    Leaf27_4_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oerrs[i11][0] = Leaf27_4_Port4_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_oerrs[i11].includes("M")){
                        Leaf27_4_Port4_oerrs[i11] =    Leaf27_4_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oerrs[i11][0] = Leaf27_4_Port4_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port4_oerrs[i11].includes("K")){
                        Leaf27_4_Port4_oerrs[i11] =    Leaf27_4_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_oerrs[i11][0] = Leaf27_4_Port4_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port4_oerrs[i11] =    Leaf27_4_Port4_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port4_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port4_mtu_errs[i11] =    Leaf27_4_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_mtu_errs[i11][0] = Leaf27_4_Port4_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port4_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port4_mtu_errs[i11] =    Leaf27_4_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_mtu_errs[i11][0] = Leaf27_4_Port4_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port4_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port4_mtu_errs[i11] =    Leaf27_4_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port4_mtu_errs[i11][0] = Leaf27_4_Port4_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port4_mtu_errs[i11] =    Leaf27_4_Port4_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }}
            
                if(Leaf27_4_Port7[i11] !== undefined){ 
                    Leaf27_4_Port7_fix[i11] =        Leaf27_4_Port7[i11].slice(26, 34);
                    Leaf27_4_Port7_iUpkts[i11] =     Leaf27_4_Port7[i11].slice(33,40);
                    Leaf27_4_Port7_iBpkts[i11] =     Leaf27_4_Port7[i11].slice(40,47);
                    Leaf27_4_Port7_iMpkts[i11] =     Leaf27_4_Port7[i11].slice(47,54);
                    Leaf27_4_Port7_iCongDrops[i11] = Leaf27_4_Port7[i11].slice(54,65);
                    Leaf27_4_Port7_ierrs[i11] =      Leaf27_4_Port7[i11].slice(65,71);
                    Leaf27_4_Port7_obytes[i11] =     Leaf27_4_Port7[i11].slice(71,78);
                    Leaf27_4_Port7_oUpkts[i11] =     Leaf27_4_Port7[i11].slice(78,85);
                    Leaf27_4_Port7_oBpkts[i11] =     Leaf27_4_Port7[i11].slice(85,92);
                    Leaf27_4_Port7_oMpkts[i11] =     Leaf27_4_Port7[i11].slice(92,99);
                    Leaf27_4_Port7_oCongDrops[i11] = Leaf27_4_Port7[i11].slice(99,110);
                    Leaf27_4_Port7_oerrs[i11] =      Leaf27_4_Port7[i11].slice(110,116);
                    Leaf27_4_Port7_mtu_errs[i11] =   Leaf27_4_Port7[i11].slice(116,125);
            
                    if( Leaf27_4_Port7_fix[i11].includes("G")){
                        Leaf27_4_Port7_fix[i11] =    Leaf27_4_Port7_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_fix[i11][0] = Leaf27_4_Port7_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_fix[i11].includes("M")){
                        Leaf27_4_Port7_fix[i11] =    Leaf27_4_Port7_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_fix[i11][0] = Leaf27_4_Port7_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port7_fix[i11].includes("K")){
                        Leaf27_4_Port7_fix[i11] =    Leaf27_4_Port7_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_fix[i11][0] = Leaf27_4_Port7_fix[i11][0]*1000;}
                else {  Leaf27_4_Port7_fix[i11] =    Leaf27_4_Port7_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                    if( Leaf27_4_Port7_iUpkts[i11].includes("G")){
                        Leaf27_4_Port7_iUpkts[i11] =    Leaf27_4_Port7_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iUpkts[i11][0] = Leaf27_4_Port7_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_iUpkts[i11].includes("M")){
                        Leaf27_4_Port7_iUpkts[i11] =    Leaf27_4_Port7_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iUpkts[i11][0] = Leaf27_4_Port7_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_iUpkts[i11].includes("K")){
                        Leaf27_4_Port7_iUpkts[i11] =    Leaf27_4_Port7_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iUpkts[i11][0] = Leaf27_4_Port7_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_iUpkts[i11] =    Leaf27_4_Port7_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                
                        if(Leaf27_4_Port7_iBpkts[i11].includes("G")){
                        Leaf27_4_Port7_iBpkts[i11] =    Leaf27_4_Port7_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iBpkts[i11][0] = Leaf27_4_Port7_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_iBpkts[i11].includes("M")){
                        Leaf27_4_Port7_iBpkts[i11] =    Leaf27_4_Port7_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iBpkts[i11][0] = Leaf27_4_Port7_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_iBpkts[i11].includes("K")){
                        Leaf27_4_Port7_iBpkts[i11] =    Leaf27_4_Port7_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iBpkts[i11][0] = Leaf27_4_Port7_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_iBpkts[i11] =    Leaf27_4_Port7_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port7_iMpkts[i11].includes("G")){
                        Leaf27_4_Port7_iMpkts[i11] =    Leaf27_4_Port7_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iMpkts[i11][0] = Leaf27_4_Port7_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_iMpkts[i11].includes("M")){
                        Leaf27_4_Port7_iMpkts[i11] =    Leaf27_4_Port7_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iMpkts[i11][0] = Leaf27_4_Port7_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_iMpkts[i11].includes("K")){
                        Leaf27_4_Port7_iMpkts[i11] =    Leaf27_4_Port7_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iMpkts[i11][0] = Leaf27_4_Port7_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_iMpkts[i11] =    Leaf27_4_Port7_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port7_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port7_iCongDrops[i11] =    Leaf27_4_Port7_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iCongDrops[i11][0] = Leaf27_4_Port7_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port7_iCongDrops[i11] =    Leaf27_4_Port7_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iCongDrops[i11][0] = Leaf27_4_Port7_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port7_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port7_iCongDrops[i11] =    Leaf27_4_Port7_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_iCongDrops[i11][0] = Leaf27_4_Port7_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port7_iCongDrops[i11] =    Leaf27_4_Port7_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port7_ierrs[i11].includes("G")){
                        Leaf27_4_Port7_ierrs[i11] =    Leaf27_4_Port7_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_ierrs[i11][0] = Leaf27_4_Port7_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_ierrs[i11].includes("M")){
                        Leaf27_4_Port7_ierrs[i11] =    Leaf27_4_Port7_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_ierrs[i11][0] = Leaf27_4_Port7_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port7_ierrs[i11].includes("K")){
                        Leaf27_4_Port7_ierrs[i11] =    Leaf27_4_Port7_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_ierrs[i11][0] = Leaf27_4_Port7_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port7_ierrs[i11] =    Leaf27_4_Port7_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port7_obytes[i11].includes("G")){
                        Leaf27_4_Port7_obytes[i11] =    Leaf27_4_Port7_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_obytes[i11][0] = Leaf27_4_Port7_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_obytes[i11].includes("M")){
                        Leaf27_4_Port7_obytes[i11] =    Leaf27_4_Port7_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_obytes[i11][0] = Leaf27_4_Port7_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port7_obytes[i11].includes("K")){
                        Leaf27_4_Port7_obytes[i11] =    Leaf27_4_Port7_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_obytes[i11][0] = Leaf27_4_Port7_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port7_obytes[i11] =    Leaf27_4_Port7_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                    
                        if(Leaf27_4_Port7_oUpkts[i11].includes("G")){
                        Leaf27_4_Port7_oUpkts[i11] =    Leaf27_4_Port7_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oUpkts[i11][0] = Leaf27_4_Port7_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_oUpkts[i11].includes("M")){
                        Leaf27_4_Port7_oUpkts[i11] =    Leaf27_4_Port7_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oUpkts[i11][0] = Leaf27_4_Port7_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_oUpkts[i11].includes("K")){
                        Leaf27_4_Port7_oUpkts[i11] =    Leaf27_4_Port7_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oUpkts[i11][0] = Leaf27_4_Port7_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_oUpkts[i11] =    Leaf27_4_Port7_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port7_oBpkts[i11].includes("G")){
                        Leaf27_4_Port7_oBpkts[i11] =    Leaf27_4_Port7_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oBpkts[i11][0] = Leaf27_4_Port7_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_oBpkts[i11].includes("M")){
                        Leaf27_4_Port7_oBpkts[i11] =    Leaf27_4_Port7_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oBpkts[i11][0] = Leaf27_4_Port7_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_oBpkts[i11].includes("K")){
                        Leaf27_4_Port7_oBpkts[i11] =    Leaf27_4_Port7_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oBpkts[i11][0] = Leaf27_4_Port7_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_oBpkts[i11] =    Leaf27_4_Port7_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port7_oMpkts[i11].includes("G")){
                        Leaf27_4_Port7_oMpkts[i11] =    Leaf27_4_Port7_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oMpkts[i11][0] = Leaf27_4_Port7_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_oMpkts[i11].includes("M")){
                        Leaf27_4_Port7_oMpkts[i11] =    Leaf27_4_Port7_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oMpkts[i11][0] = Leaf27_4_Port7_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port7_oMpkts[i11].includes("K")){
                        Leaf27_4_Port7_oMpkts[i11] =    Leaf27_4_Port7_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oMpkts[i11][0] = Leaf27_4_Port7_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port7_oMpkts[i11] =    Leaf27_4_Port7_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                        if(Leaf27_4_Port7_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port7_oCongDrops[i11] =    Leaf27_4_Port7_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oCongDrops[i11][0] = Leaf27_4_Port7_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port7_oCongDrops[i11] =    Leaf27_4_Port7_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oCongDrops[i11][0] = Leaf27_4_Port7_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port7_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port7_oCongDrops[i11] =    Leaf27_4_Port7_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oCongDrops[i11][0] = Leaf27_4_Port7_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port7_oCongDrops[i11] =    Leaf27_4_Port7_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port7_oerrs[i11].includes("G")){
                        Leaf27_4_Port7_oerrs[i11] =    Leaf27_4_Port7_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oerrs[i11][0] = Leaf27_4_Port7_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_oerrs[i11].includes("M")){
                        Leaf27_4_Port7_oerrs[i11] =    Leaf27_4_Port7_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oerrs[i11][0] = Leaf27_4_Port7_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port7_oerrs[i11].includes("K")){
                        Leaf27_4_Port7_oerrs[i11] =    Leaf27_4_Port7_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_oerrs[i11][0] = Leaf27_4_Port7_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port7_oerrs[i11] =    Leaf27_4_Port7_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port7_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port7_mtu_errs[i11] =    Leaf27_4_Port7_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_mtu_errs[i11][0] = Leaf27_4_Port7_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port7_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port7_mtu_errs[i11] =    Leaf27_4_Port7_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_mtu_errs[i11][0] = Leaf27_4_Port7_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port7_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port7_mtu_errs[i11] =    Leaf27_4_Port7_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port7_mtu_errs[i11][0] = Leaf27_4_Port7_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port7_mtu_errs[i11] =    Leaf27_4_Port7_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
            
                if(Leaf27_4_Port10[i11] !== undefined){ 
                    Leaf27_4_Port10_fix[i11] =        Leaf27_4_Port10[i11].slice(26, 34);
                    Leaf27_4_Port10_iUpkts[i11] =     Leaf27_4_Port10[i11].slice(33,40);
                    Leaf27_4_Port10_iBpkts[i11] =     Leaf27_4_Port10[i11].slice(40,47);
                    Leaf27_4_Port10_iMpkts[i11] =     Leaf27_4_Port10[i11].slice(47,54);
                    Leaf27_4_Port10_iCongDrops[i11] = Leaf27_4_Port10[i11].slice(54,65);
                    Leaf27_4_Port10_ierrs[i11] =      Leaf27_4_Port10[i11].slice(65,71);
                    Leaf27_4_Port10_obytes[i11] =     Leaf27_4_Port10[i11].slice(71,78);
                    Leaf27_4_Port10_oUpkts[i11] =     Leaf27_4_Port10[i11].slice(78,85);
                    Leaf27_4_Port10_oBpkts[i11] =     Leaf27_4_Port10[i11].slice(85,92);
                    Leaf27_4_Port10_oMpkts[i11] =     Leaf27_4_Port10[i11].slice(92,99);
                    Leaf27_4_Port10_oCongDrops[i11] = Leaf27_4_Port10[i11].slice(99,110);
                    Leaf27_4_Port10_oerrs[i11] =      Leaf27_4_Port10[i11].slice(110,116);
                    Leaf27_4_Port10_mtu_errs[i11] =   Leaf27_4_Port10[i11].slice(116,125);
            
                    if( Leaf27_4_Port10_fix[i11].includes("G")){
                        Leaf27_4_Port10_fix[i11] =    Leaf27_4_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_fix[i11][0] = Leaf27_4_Port10_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_fix[i11].includes("M")){
                        Leaf27_4_Port10_fix[i11] =    Leaf27_4_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_fix[i11][0] = Leaf27_4_Port10_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port10_fix[i11].includes("K")){
                        Leaf27_4_Port10_fix[i11] =    Leaf27_4_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_fix[i11][0] = Leaf27_4_Port10_fix[i11][0]*1000;}
                else {  Leaf27_4_Port10_fix[i11] =    Leaf27_4_Port10_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                    if( Leaf27_4_Port10_iUpkts[i11].includes("G")){
                        Leaf27_4_Port10_iUpkts[i11] =    Leaf27_4_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iUpkts[i11][0] = Leaf27_4_Port10_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_iUpkts[i11].includes("M")){
                        Leaf27_4_Port10_iUpkts[i11] =    Leaf27_4_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iUpkts[i11][0] = Leaf27_4_Port10_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_iUpkts[i11].includes("K")){
                        Leaf27_4_Port10_iUpkts[i11] =    Leaf27_4_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iUpkts[i11][0] = Leaf27_4_Port10_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_iUpkts[i11] =    Leaf27_4_Port10_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                
                        if(Leaf27_4_Port10_iBpkts[i11].includes("G")){
                        Leaf27_4_Port10_iBpkts[i11] =    Leaf27_4_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iBpkts[i11][0] = Leaf27_4_Port10_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_iBpkts[i11].includes("M")){
                        Leaf27_4_Port10_iBpkts[i11] =    Leaf27_4_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iBpkts[i11][0] = Leaf27_4_Port10_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_iBpkts[i11].includes("K")){
                        Leaf27_4_Port10_iBpkts[i11] =    Leaf27_4_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iBpkts[i11][0] = Leaf27_4_Port10_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_iBpkts[i11] =    Leaf27_4_Port10_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port10_iMpkts[i11].includes("G")){
                        Leaf27_4_Port10_iMpkts[i11] =    Leaf27_4_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iMpkts[i11][0] = Leaf27_4_Port10_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_iMpkts[i11].includes("M")){
                        Leaf27_4_Port10_iMpkts[i11] =    Leaf27_4_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iMpkts[i11][0] = Leaf27_4_Port10_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_iMpkts[i11].includes("K")){
                        Leaf27_4_Port10_iMpkts[i11] =    Leaf27_4_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iMpkts[i11][0] = Leaf27_4_Port10_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_iMpkts[i11] =    Leaf27_4_Port10_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port10_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port10_iCongDrops[i11] =    Leaf27_4_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iCongDrops[i11][0] = Leaf27_4_Port10_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port10_iCongDrops[i11] =    Leaf27_4_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iCongDrops[i11][0] = Leaf27_4_Port10_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port10_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port10_iCongDrops[i11] =    Leaf27_4_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_iCongDrops[i11][0] = Leaf27_4_Port10_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port10_iCongDrops[i11] =    Leaf27_4_Port10_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port10_ierrs[i11].includes("G")){
                        Leaf27_4_Port10_ierrs[i11] =    Leaf27_4_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_ierrs[i11][0] = Leaf27_4_Port10_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_ierrs[i11].includes("M")){
                        Leaf27_4_Port10_ierrs[i11] =    Leaf27_4_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_ierrs[i11][0] = Leaf27_4_Port10_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port10_ierrs[i11].includes("K")){
                        Leaf27_4_Port10_ierrs[i11] =    Leaf27_4_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_ierrs[i11][0] = Leaf27_4_Port10_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port10_ierrs[i11] =    Leaf27_4_Port10_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port10_obytes[i11].includes("G")){
                        Leaf27_4_Port10_obytes[i11] =    Leaf27_4_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_obytes[i11][0] = Leaf27_4_Port10_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_obytes[i11].includes("M")){
                        Leaf27_4_Port10_obytes[i11] =    Leaf27_4_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_obytes[i11][0] = Leaf27_4_Port10_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port10_obytes[i11].includes("K")){
                        Leaf27_4_Port10_obytes[i11] =    Leaf27_4_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_obytes[i11][0] = Leaf27_4_Port10_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port10_obytes[i11] =    Leaf27_4_Port10_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port10_oUpkts[i11].includes("G")){
                        Leaf27_4_Port10_oUpkts[i11] =    Leaf27_4_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oUpkts[i11][0] = Leaf27_4_Port10_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_oUpkts[i11].includes("M")){
                        Leaf27_4_Port10_oUpkts[i11] =    Leaf27_4_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oUpkts[i11][0] = Leaf27_4_Port10_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_oUpkts[i11].includes("K")){
                        Leaf27_4_Port10_oUpkts[i11] =    Leaf27_4_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oUpkts[i11][0] = Leaf27_4_Port10_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_oUpkts[i11] =    Leaf27_4_Port10_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port10_oBpkts[i11].includes("G")){
                        Leaf27_4_Port10_oBpkts[i11] =    Leaf27_4_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oBpkts[i11][0] = Leaf27_4_Port10_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_oBpkts[i11].includes("M")){
                        Leaf27_4_Port10_oBpkts[i11] =    Leaf27_4_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oBpkts[i11][0] = Leaf27_4_Port10_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_oBpkts[i11].includes("K")){
                        Leaf27_4_Port10_oBpkts[i11] =    Leaf27_4_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oBpkts[i11][0] = Leaf27_4_Port10_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_oBpkts[i11] =    Leaf27_4_Port10_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port10_oMpkts[i11].includes("G")){
                        Leaf27_4_Port10_oMpkts[i11] =    Leaf27_4_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oMpkts[i11][0] = Leaf27_4_Port10_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_oMpkts[i11].includes("M")){
                        Leaf27_4_Port10_oMpkts[i11] =    Leaf27_4_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oMpkts[i11][0] = Leaf27_4_Port10_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port10_oMpkts[i11].includes("K")){
                        Leaf27_4_Port10_oMpkts[i11] =    Leaf27_4_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oMpkts[i11][0] = Leaf27_4_Port10_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port10_oMpkts[i11] =    Leaf27_4_Port10_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port10_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port10_oCongDrops[i11] =    Leaf27_4_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oCongDrops[i11][0] = Leaf27_4_Port10_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port10_oCongDrops[i11] =    Leaf27_4_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oCongDrops[i11][0] = Leaf27_4_Port10_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port10_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port10_oCongDrops[i11] =    Leaf27_4_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oCongDrops[i11][0] = Leaf27_4_Port10_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port10_oCongDrops[i11] =    Leaf27_4_Port10_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port10_oerrs[i11].includes("G")){
                        Leaf27_4_Port10_oerrs[i11] =    Leaf27_4_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oerrs[i11][0] = Leaf27_4_Port10_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_oerrs[i11].includes("M")){
                        Leaf27_4_Port10_oerrs[i11] =    Leaf27_4_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oerrs[i11][0] = Leaf27_4_Port10_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port10_oerrs[i11].includes("K")){
                        Leaf27_4_Port10_oerrs[i11] =    Leaf27_4_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_oerrs[i11][0] = Leaf27_4_Port10_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port10_oerrs[i11] =    Leaf27_4_Port10_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port10_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port10_mtu_errs[i11] =    Leaf27_4_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_mtu_errs[i11][0] = Leaf27_4_Port10_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port10_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port10_mtu_errs[i11] =    Leaf27_4_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_mtu_errs[i11][0] = Leaf27_4_Port10_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port10_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port10_mtu_errs[i11] =    Leaf27_4_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port10_mtu_errs[i11][0] = Leaf27_4_Port10_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port10_mtu_errs[i11] =    Leaf27_4_Port10_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
                if(Leaf27_4_Port13[i11] !== undefined){ 
                    Leaf27_4_Port13_fix[i11] =        Leaf27_4_Port13[i11].slice(26, 34);
                    Leaf27_4_Port13_iUpkts[i11] =     Leaf27_4_Port13[i11].slice(33,40);
                    Leaf27_4_Port13_iBpkts[i11] =     Leaf27_4_Port13[i11].slice(40,47);
                    Leaf27_4_Port13_iMpkts[i11] =     Leaf27_4_Port13[i11].slice(47,54);
                    Leaf27_4_Port13_iCongDrops[i11] = Leaf27_4_Port13[i11].slice(54,65);
                    Leaf27_4_Port13_ierrs[i11] =      Leaf27_4_Port13[i11].slice(65,71);
                    Leaf27_4_Port13_obytes[i11] =     Leaf27_4_Port13[i11].slice(71,78);
                    Leaf27_4_Port13_oUpkts[i11] =     Leaf27_4_Port13[i11].slice(78,85);
                    Leaf27_4_Port13_oBpkts[i11] =     Leaf27_4_Port13[i11].slice(85,92);
                    Leaf27_4_Port13_oMpkts[i11] =     Leaf27_4_Port13[i11].slice(92,99);
                    Leaf27_4_Port13_oCongDrops[i11] = Leaf27_4_Port13[i11].slice(99,110);
                    Leaf27_4_Port13_oerrs[i11] =      Leaf27_4_Port13[i11].slice(110,116);
                    Leaf27_4_Port13_mtu_errs[i11] =   Leaf27_4_Port13[i11].slice(116,125);
            
                    if( Leaf27_4_Port13_fix[i11].includes("G")){
                        Leaf27_4_Port13_fix[i11] =    Leaf27_4_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_fix[i11][0] = Leaf27_4_Port13_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_fix[i11].includes("M")){
                        Leaf27_4_Port13_fix[i11] =    Leaf27_4_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_fix[i11][0] = Leaf27_4_Port13_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port13_fix[i11].includes("K")){
                        Leaf27_4_Port13_fix[i11] =    Leaf27_4_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_fix[i11][0] = Leaf27_4_Port13_fix[i11][0]*1000;}
                else {  Leaf27_4_Port13_fix[i11] =    Leaf27_4_Port13_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                    if( Leaf27_4_Port13_iUpkts[i11].includes("G")){
                        Leaf27_4_Port13_iUpkts[i11] =    Leaf27_4_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iUpkts[i11][0] = Leaf27_4_Port13_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_iUpkts[i11].includes("M")){
                        Leaf27_4_Port13_iUpkts[i11] =    Leaf27_4_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iUpkts[i11][0] = Leaf27_4_Port13_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_iUpkts[i11].includes("K")){
                        Leaf27_4_Port13_iUpkts[i11] =    Leaf27_4_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iUpkts[i11][0] = Leaf27_4_Port13_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_iUpkts[i11] =    Leaf27_4_Port13_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                
                        if(Leaf27_4_Port13_iBpkts[i11].includes("G")){
                        Leaf27_4_Port13_iBpkts[i11] =    Leaf27_4_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iBpkts[i11][0] = Leaf27_4_Port13_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_iBpkts[i11].includes("M")){
                        Leaf27_4_Port13_iBpkts[i11] =    Leaf27_4_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iBpkts[i11][0] = Leaf27_4_Port13_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_iBpkts[i11].includes("K")){
                        Leaf27_4_Port13_iBpkts[i11] =    Leaf27_4_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iBpkts[i11][0] = Leaf27_4_Port13_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_iBpkts[i11] =    Leaf27_4_Port13_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port13_iMpkts[i11].includes("G")){
                        Leaf27_4_Port13_iMpkts[i11] =    Leaf27_4_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iMpkts[i11][0] = Leaf27_4_Port13_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_iMpkts[i11].includes("M")){
                        Leaf27_4_Port13_iMpkts[i11] =    Leaf27_4_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iMpkts[i11][0] = Leaf27_4_Port13_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_iMpkts[i11].includes("K")){
                        Leaf27_4_Port13_iMpkts[i11] =    Leaf27_4_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iMpkts[i11][0] = Leaf27_4_Port13_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_iMpkts[i11] =    Leaf27_4_Port13_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port13_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port13_iCongDrops[i11] =    Leaf27_4_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iCongDrops[i11][0] = Leaf27_4_Port13_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port13_iCongDrops[i11] =    Leaf27_4_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iCongDrops[i11][0] = Leaf27_4_Port13_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port13_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port13_iCongDrops[i11] =    Leaf27_4_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_iCongDrops[i11][0] = Leaf27_4_Port13_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port13_iCongDrops[i11] =    Leaf27_4_Port13_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port13_ierrs[i11].includes("G")){
                        Leaf27_4_Port13_ierrs[i11] =    Leaf27_4_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_ierrs[i11][0] = Leaf27_4_Port13_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_ierrs[i11].includes("M")){
                        Leaf27_4_Port13_ierrs[i11] =    Leaf27_4_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_ierrs[i11][0] = Leaf27_4_Port13_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port13_ierrs[i11].includes("K")){
                        Leaf27_4_Port13_ierrs[i11] =    Leaf27_4_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_ierrs[i11][0] = Leaf27_4_Port13_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port13_ierrs[i11] =    Leaf27_4_Port13_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port13_obytes[i11].includes("G")){
                        Leaf27_4_Port13_obytes[i11] =    Leaf27_4_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_obytes[i11][0] = Leaf27_4_Port13_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_obytes[i11].includes("M")){
                        Leaf27_4_Port13_obytes[i11] =    Leaf27_4_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_obytes[i11][0] = Leaf27_4_Port13_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port13_obytes[i11].includes("K")){
                        Leaf27_4_Port13_obytes[i11] =    Leaf27_4_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_obytes[i11][0] = Leaf27_4_Port13_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port13_obytes[i11] =    Leaf27_4_Port13_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port13_oUpkts[i11].includes("G")){
                        Leaf27_4_Port13_oUpkts[i11] =    Leaf27_4_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oUpkts[i11][0] = Leaf27_4_Port13_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_oUpkts[i11].includes("M")){
                        Leaf27_4_Port13_oUpkts[i11] =    Leaf27_4_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oUpkts[i11][0] = Leaf27_4_Port13_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_oUpkts[i11].includes("K")){
                        Leaf27_4_Port13_oUpkts[i11] =    Leaf27_4_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oUpkts[i11][0] = Leaf27_4_Port13_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_oUpkts[i11] =    Leaf27_4_Port13_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port13_oBpkts[i11].includes("G")){
                        Leaf27_4_Port13_oBpkts[i11] =    Leaf27_4_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oBpkts[i11][0] = Leaf27_4_Port13_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_oBpkts[i11].includes("M")){
                        Leaf27_4_Port13_oBpkts[i11] =    Leaf27_4_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oBpkts[i11][0] = Leaf27_4_Port13_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_oBpkts[i11].includes("K")){
                        Leaf27_4_Port13_oBpkts[i11] =    Leaf27_4_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oBpkts[i11][0] = Leaf27_4_Port13_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_oBpkts[i11] =    Leaf27_4_Port13_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port13_oMpkts[i11].includes("G")){
                        Leaf27_4_Port13_oMpkts[i11] =    Leaf27_4_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oMpkts[i11][0] = Leaf27_4_Port13_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_oMpkts[i11].includes("M")){
                        Leaf27_4_Port13_oMpkts[i11] =    Leaf27_4_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oMpkts[i11][0] = Leaf27_4_Port13_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port13_oMpkts[i11].includes("K")){
                        Leaf27_4_Port13_oMpkts[i11] =    Leaf27_4_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oMpkts[i11][0] = Leaf27_4_Port13_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port13_oMpkts[i11] =    Leaf27_4_Port13_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port13_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port13_oCongDrops[i11] =    Leaf27_4_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oCongDrops[i11][0] = Leaf27_4_Port13_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port13_oCongDrops[i11] =    Leaf27_4_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oCongDrops[i11][0] = Leaf27_4_Port13_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port13_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port13_oCongDrops[i11] =    Leaf27_4_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oCongDrops[i11][0] = Leaf27_4_Port13_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port13_oCongDrops[i11] =    Leaf27_4_Port13_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port13_oerrs[i11].includes("G")){
                        Leaf27_4_Port13_oerrs[i11] =    Leaf27_4_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oerrs[i11][0] = Leaf27_4_Port13_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_oerrs[i11].includes("M")){
                        Leaf27_4_Port13_oerrs[i11] =    Leaf27_4_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oerrs[i11][0] = Leaf27_4_Port13_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port13_oerrs[i11].includes("K")){
                        Leaf27_4_Port13_oerrs[i11] =    Leaf27_4_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_oerrs[i11][0] = Leaf27_4_Port13_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port13_oerrs[i11] =    Leaf27_4_Port13_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port13_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port13_mtu_errs[i11] =    Leaf27_4_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_mtu_errs[i11][0] = Leaf27_4_Port13_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port13_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port13_mtu_errs[i11] =    Leaf27_4_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_mtu_errs[i11][0] = Leaf27_4_Port13_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port13_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port13_mtu_errs[i11] =    Leaf27_4_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port13_mtu_errs[i11][0] = Leaf27_4_Port13_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port13_mtu_errs[i11] =    Leaf27_4_Port13_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
                if(Leaf27_4_Port17[i11] !== undefined){ 
                    Leaf27_4_Port17_fix[i11] =        Leaf27_4_Port17[i11].slice(26, 34);
                    Leaf27_4_Port17_iUpkts[i11] =     Leaf27_4_Port17[i11].slice(33,40);
                    Leaf27_4_Port17_iBpkts[i11] =     Leaf27_4_Port17[i11].slice(40,47);
                    Leaf27_4_Port17_iMpkts[i11] =     Leaf27_4_Port17[i11].slice(47,54);
                    Leaf27_4_Port17_iCongDrops[i11] = Leaf27_4_Port17[i11].slice(54,65);
                    Leaf27_4_Port17_ierrs[i11] =      Leaf27_4_Port17[i11].slice(65,71);
                    Leaf27_4_Port17_obytes[i11] =     Leaf27_4_Port17[i11].slice(71,78);
                    Leaf27_4_Port17_oUpkts[i11] =     Leaf27_4_Port17[i11].slice(78,85);
                    Leaf27_4_Port17_oBpkts[i11] =     Leaf27_4_Port17[i11].slice(85,92);
                    Leaf27_4_Port17_oMpkts[i11] =     Leaf27_4_Port17[i11].slice(92,99);
                    Leaf27_4_Port17_oCongDrops[i11] = Leaf27_4_Port17[i11].slice(99,110);
                    Leaf27_4_Port17_oerrs[i11] =      Leaf27_4_Port17[i11].slice(110,116);
                    Leaf27_4_Port17_mtu_errs[i11] =   Leaf27_4_Port17[i11].slice(116,125);
            
                    if( Leaf27_4_Port17_fix[i11].includes("G")){
                        Leaf27_4_Port17_fix[i11] =    Leaf27_4_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_fix[i11][0] = Leaf27_4_Port17_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_fix[i11].includes("M")){
                        Leaf27_4_Port17_fix[i11] =    Leaf27_4_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_fix[i11][0] = Leaf27_4_Port17_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port17_fix[i11].includes("K")){
                        Leaf27_4_Port17_fix[i11] =    Leaf27_4_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_fix[i11][0] = Leaf27_4_Port17_fix[i11][0]*1000;}
                else {  Leaf27_4_Port17_fix[i11] =    Leaf27_4_Port17_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                    if( Leaf27_4_Port17_iUpkts[i11].includes("G")){
                        Leaf27_4_Port17_iUpkts[i11] =    Leaf27_4_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iUpkts[i11][0] = Leaf27_4_Port17_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_iUpkts[i11].includes("M")){
                        Leaf27_4_Port17_iUpkts[i11] =    Leaf27_4_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iUpkts[i11][0] = Leaf27_4_Port17_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_iUpkts[i11].includes("K")){
                        Leaf27_4_Port17_iUpkts[i11] =    Leaf27_4_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iUpkts[i11][0] = Leaf27_4_Port17_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_iUpkts[i11] =    Leaf27_4_Port17_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                
                        if(Leaf27_4_Port17_iBpkts[i11].includes("G")){
                        Leaf27_4_Port17_iBpkts[i11] =    Leaf27_4_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iBpkts[i11][0] = Leaf27_4_Port17_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_iBpkts[i11].includes("M")){
                        Leaf27_4_Port17_iBpkts[i11] =    Leaf27_4_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iBpkts[i11][0] = Leaf27_4_Port17_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_iBpkts[i11].includes("K")){
                        Leaf27_4_Port17_iBpkts[i11] =    Leaf27_4_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iBpkts[i11][0] = Leaf27_4_Port17_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_iBpkts[i11] =    Leaf27_4_Port17_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port17_iMpkts[i11].includes("G")){
                        Leaf27_4_Port17_iMpkts[i11] =    Leaf27_4_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iMpkts[i11][0] = Leaf27_4_Port17_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_iMpkts[i11].includes("M")){
                        Leaf27_4_Port17_iMpkts[i11] =    Leaf27_4_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iMpkts[i11][0] = Leaf27_4_Port17_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_iMpkts[i11].includes("K")){
                        Leaf27_4_Port17_iMpkts[i11] =    Leaf27_4_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iMpkts[i11][0] = Leaf27_4_Port17_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_iMpkts[i11] =    Leaf27_4_Port17_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port17_iCongDrops[i11] =    Leaf27_4_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iCongDrops[i11][0] = Leaf27_4_Port17_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port17_iCongDrops[i11] =    Leaf27_4_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iCongDrops[i11][0] = Leaf27_4_Port17_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port17_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port17_iCongDrops[i11] =    Leaf27_4_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_iCongDrops[i11][0] = Leaf27_4_Port17_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port17_iCongDrops[i11] =    Leaf27_4_Port17_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_ierrs[i11].includes("G")){
                        Leaf27_4_Port17_ierrs[i11] =    Leaf27_4_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_ierrs[i11][0] = Leaf27_4_Port17_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_ierrs[i11].includes("M")){
                        Leaf27_4_Port17_ierrs[i11] =    Leaf27_4_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_ierrs[i11][0] = Leaf27_4_Port17_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port17_ierrs[i11].includes("K")){
                        Leaf27_4_Port17_ierrs[i11] =    Leaf27_4_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_ierrs[i11][0] = Leaf27_4_Port17_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port17_ierrs[i11] =    Leaf27_4_Port17_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_obytes[i11].includes("G")){
                        Leaf27_4_Port17_obytes[i11] =    Leaf27_4_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_obytes[i11][0] = Leaf27_4_Port17_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_obytes[i11].includes("M")){
                        Leaf27_4_Port17_obytes[i11] =    Leaf27_4_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_obytes[i11][0] = Leaf27_4_Port17_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port17_obytes[i11].includes("K")){
                        Leaf27_4_Port17_obytes[i11] =    Leaf27_4_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_obytes[i11][0] = Leaf27_4_Port17_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port17_obytes[i11] =    Leaf27_4_Port17_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
                    
                        if(Leaf27_4_Port17_oUpkts[i11].includes("G")){
                        Leaf27_4_Port17_oUpkts[i11] =    Leaf27_4_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oUpkts[i11][0] = Leaf27_4_Port17_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_oUpkts[i11].includes("M")){
                        Leaf27_4_Port17_oUpkts[i11] =    Leaf27_4_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oUpkts[i11][0] = Leaf27_4_Port17_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_oUpkts[i11].includes("K")){
                        Leaf27_4_Port17_oUpkts[i11] =    Leaf27_4_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oUpkts[i11][0] = Leaf27_4_Port17_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_oUpkts[i11] =    Leaf27_4_Port17_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_oBpkts[i11].includes("G")){
                        Leaf27_4_Port17_oBpkts[i11] =    Leaf27_4_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oBpkts[i11][0] = Leaf27_4_Port17_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_oBpkts[i11].includes("M")){
                        Leaf27_4_Port17_oBpkts[i11] =    Leaf27_4_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oBpkts[i11][0] = Leaf27_4_Port17_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_oBpkts[i11].includes("K")){
                        Leaf27_4_Port17_oBpkts[i11] =    Leaf27_4_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oBpkts[i11][0] = Leaf27_4_Port17_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_oBpkts[i11] =    Leaf27_4_Port17_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_oMpkts[i11].includes("G")){
                        Leaf27_4_Port17_oMpkts[i11] =    Leaf27_4_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oMpkts[i11][0] = Leaf27_4_Port17_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_oMpkts[i11].includes("M")){
                        Leaf27_4_Port17_oMpkts[i11] =    Leaf27_4_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oMpkts[i11][0] = Leaf27_4_Port17_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port17_oMpkts[i11].includes("K")){
                        Leaf27_4_Port17_oMpkts[i11] =    Leaf27_4_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oMpkts[i11][0] = Leaf27_4_Port17_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port17_oMpkts[i11] =    Leaf27_4_Port17_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port17_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port17_oCongDrops[i11] =    Leaf27_4_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oCongDrops[i11][0] = Leaf27_4_Port17_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port17_oCongDrops[i11] =    Leaf27_4_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oCongDrops[i11][0] = Leaf27_4_Port17_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port17_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port17_oCongDrops[i11] =    Leaf27_4_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oCongDrops[i11][0] = Leaf27_4_Port17_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port17_oCongDrops[i11] =    Leaf27_4_Port17_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_oerrs[i11].includes("G")){
                        Leaf27_4_Port17_oerrs[i11] =    Leaf27_4_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oerrs[i11][0] = Leaf27_4_Port17_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_oerrs[i11].includes("M")){
                        Leaf27_4_Port17_oerrs[i11] =    Leaf27_4_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oerrs[i11][0] = Leaf27_4_Port17_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port17_oerrs[i11].includes("K")){
                        Leaf27_4_Port17_oerrs[i11] =    Leaf27_4_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_oerrs[i11][0] = Leaf27_4_Port17_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port17_oerrs[i11] =    Leaf27_4_Port17_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port17_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port17_mtu_errs[i11] =    Leaf27_4_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_mtu_errs[i11][0] = Leaf27_4_Port17_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port17_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port17_mtu_errs[i11] =    Leaf27_4_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_mtu_errs[i11][0] = Leaf27_4_Port17_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port17_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port17_mtu_errs[i11] =    Leaf27_4_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port17_mtu_errs[i11][0] = Leaf27_4_Port17_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port17_mtu_errs[i11] =    Leaf27_4_Port17_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
                    if(Leaf27_4_Port81[i11] !== undefined){ 
                        Leaf27_4_Port81_fix[i11] =        Leaf27_4_Port81[i11].slice(26, 34);
                        Leaf27_4_Port81_iUpkts[i11] =     Leaf27_4_Port81[i11].slice(33,40);
                        Leaf27_4_Port81_iBpkts[i11] =     Leaf27_4_Port81[i11].slice(40,47);
                        Leaf27_4_Port81_iMpkts[i11] =     Leaf27_4_Port81[i11].slice(47,54);
                        Leaf27_4_Port81_iCongDrops[i11] = Leaf27_4_Port81[i11].slice(54,65);
                        Leaf27_4_Port81_ierrs[i11] =      Leaf27_4_Port81[i11].slice(65,71);
                        Leaf27_4_Port81_obytes[i11] =     Leaf27_4_Port81[i11].slice(71,78);
                        Leaf27_4_Port81_oUpkts[i11] =     Leaf27_4_Port81[i11].slice(78,85);
                        Leaf27_4_Port81_oBpkts[i11] =     Leaf27_4_Port81[i11].slice(85,92);
                        Leaf27_4_Port81_oMpkts[i11] =     Leaf27_4_Port81[i11].slice(92,99);
                        Leaf27_4_Port81_oCongDrops[i11] = Leaf27_4_Port81[i11].slice(99,110);
                        Leaf27_4_Port81_oerrs[i11] =      Leaf27_4_Port81[i11].slice(110,116);
                        Leaf27_4_Port81_mtu_errs[i11] =   Leaf27_4_Port81[i11].slice(116,125);
                        
                        if( Leaf27_4_Port81_fix[i11].includes("G")){
                            Leaf27_4_Port81_fix[i11] =    Leaf27_4_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_fix[i11][0] = Leaf27_4_Port81_fix[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_fix[i11].includes("M")){
                            Leaf27_4_Port81_fix[i11] =    Leaf27_4_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_fix[i11][0] = Leaf27_4_Port81_fix[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_fix[i11].includes("K")){
                            Leaf27_4_Port81_fix[i11] =    Leaf27_4_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_fix[i11][0] = Leaf27_4_Port81_fix[i11][0]*1000;}
                        else {  Leaf27_4_Port81_fix[i11] =    Leaf27_4_Port81_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                        if( Leaf27_4_Port81_iUpkts[i11].includes("G")){
                            Leaf27_4_Port81_iUpkts[i11] =    Leaf27_4_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iUpkts[i11][0] = Leaf27_4_Port81_iUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_iUpkts[i11].includes("M")){
                            Leaf27_4_Port81_iUpkts[i11] =    Leaf27_4_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iUpkts[i11][0] = Leaf27_4_Port81_iUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_iUpkts[i11].includes("K")){
                            Leaf27_4_Port81_iUpkts[i11] =    Leaf27_4_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iUpkts[i11][0] = Leaf27_4_Port81_iUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_iUpkts[i11] =    Leaf27_4_Port81_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_iBpkts[i11].includes("G")){
                            Leaf27_4_Port81_iBpkts[i11] =    Leaf27_4_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iBpkts[i11][0] = Leaf27_4_Port81_iBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_iBpkts[i11].includes("M")){
                            Leaf27_4_Port81_iBpkts[i11] =    Leaf27_4_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iBpkts[i11][0] = Leaf27_4_Port81_iBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_iBpkts[i11].includes("K")){
                            Leaf27_4_Port81_iBpkts[i11] =    Leaf27_4_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iBpkts[i11][0] = Leaf27_4_Port81_iBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_iBpkts[i11] =    Leaf27_4_Port81_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_iMpkts[i11].includes("G")){
                            Leaf27_4_Port81_iMpkts[i11] =    Leaf27_4_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iMpkts[i11][0] = Leaf27_4_Port81_iMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_iMpkts[i11].includes("M")){
                            Leaf27_4_Port81_iMpkts[i11] =    Leaf27_4_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iMpkts[i11][0] = Leaf27_4_Port81_iMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_iMpkts[i11].includes("K")){
                            Leaf27_4_Port81_iMpkts[i11] =    Leaf27_4_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iMpkts[i11][0] = Leaf27_4_Port81_iMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_iMpkts[i11] =    Leaf27_4_Port81_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port81_iCongDrops[i11].includes("G")){
                            Leaf27_4_Port81_iCongDrops[i11] =    Leaf27_4_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iCongDrops[i11][0] = Leaf27_4_Port81_iCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_iCongDrops[i11].includes("M")){
                            Leaf27_4_Port81_iCongDrops[i11] =    Leaf27_4_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iCongDrops[i11][0] = Leaf27_4_Port81_iCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_iCongDrops[i11].includes("K")){
                            Leaf27_4_Port81_iCongDrops[i11] =    Leaf27_4_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_iCongDrops[i11][0] = Leaf27_4_Port81_iCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port81_iCongDrops[i11] =    Leaf27_4_Port81_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port81_ierrs[i11].includes("G")){
                            Leaf27_4_Port81_ierrs[i11] =    Leaf27_4_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_ierrs[i11][0] = Leaf27_4_Port81_ierrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_ierrs[i11].includes("M")){
                            Leaf27_4_Port81_ierrs[i11] =    Leaf27_4_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_ierrs[i11][0] = Leaf27_4_Port81_ierrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_ierrs[i11].includes("K")){
                            Leaf27_4_Port81_ierrs[i11] =    Leaf27_4_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_ierrs[i11][0] = Leaf27_4_Port81_ierrs[i11][0]*1000;}
                        else {  Leaf27_4_Port81_ierrs[i11] =    Leaf27_4_Port81_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_obytes[i11].includes("G")){
                            Leaf27_4_Port81_obytes[i11] =    Leaf27_4_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_obytes[i11][0] = Leaf27_4_Port81_obytes[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_obytes[i11].includes("M")){
                            Leaf27_4_Port81_obytes[i11] =    Leaf27_4_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_obytes[i11][0] = Leaf27_4_Port81_obytes[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_obytes[i11].includes("K")){
                            Leaf27_4_Port81_obytes[i11] =    Leaf27_4_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_obytes[i11][0] = Leaf27_4_Port81_obytes[i11][0]*1000;}
                        else {  Leaf27_4_Port81_obytes[i11] =    Leaf27_4_Port81_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port81_oUpkts[i11].includes("G")){
                            Leaf27_4_Port81_oUpkts[i11] =    Leaf27_4_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oUpkts[i11][0] = Leaf27_4_Port81_oUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_oUpkts[i11].includes("M")){
                            Leaf27_4_Port81_oUpkts[i11] =    Leaf27_4_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oUpkts[i11][0] = Leaf27_4_Port81_oUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_oUpkts[i11].includes("K")){
                            Leaf27_4_Port81_oUpkts[i11] =    Leaf27_4_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oUpkts[i11][0] = Leaf27_4_Port81_oUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_oUpkts[i11] =    Leaf27_4_Port81_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_oBpkts[i11].includes("G")){
                            Leaf27_4_Port81_oBpkts[i11] =    Leaf27_4_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oBpkts[i11][0] = Leaf27_4_Port81_oBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_oBpkts[i11].includes("M")){
                            Leaf27_4_Port81_oBpkts[i11] =    Leaf27_4_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oBpkts[i11][0] = Leaf27_4_Port81_oBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_oBpkts[i11].includes("K")){
                            Leaf27_4_Port81_oBpkts[i11] =    Leaf27_4_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oBpkts[i11][0] = Leaf27_4_Port81_oBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_oBpkts[i11] =    Leaf27_4_Port81_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port81_oMpkts[i11].includes("G")){
                            Leaf27_4_Port81_oMpkts[i11] =    Leaf27_4_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oMpkts[i11][0] = Leaf27_4_Port81_oMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_oMpkts[i11].includes("M")){
                            Leaf27_4_Port81_oMpkts[i11] =    Leaf27_4_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oMpkts[i11][0] = Leaf27_4_Port81_oMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_oMpkts[i11].includes("K")){
                            Leaf27_4_Port81_oMpkts[i11] =    Leaf27_4_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oMpkts[i11][0] = Leaf27_4_Port81_oMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port81_oMpkts[i11] =    Leaf27_4_Port81_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_oCongDrops[i11].includes("G")){
                            Leaf27_4_Port81_oCongDrops[i11] =    Leaf27_4_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oCongDrops[i11][0] = Leaf27_4_Port81_oCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_oCongDrops[i11].includes("M")){
                            Leaf27_4_Port81_oCongDrops[i11] =    Leaf27_4_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oCongDrops[i11][0] = Leaf27_4_Port81_oCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_oCongDrops[i11].includes("K")){
                            Leaf27_4_Port81_oCongDrops[i11] =    Leaf27_4_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oCongDrops[i11][0] = Leaf27_4_Port81_oCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port81_oCongDrops[i11] =    Leaf27_4_Port81_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port81_oerrs[i11].includes("G")){
                            Leaf27_4_Port81_oerrs[i11] =    Leaf27_4_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oerrs[i11][0] = Leaf27_4_Port81_oerrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_oerrs[i11].includes("M")){
                            Leaf27_4_Port81_oerrs[i11] =    Leaf27_4_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oerrs[i11][0] = Leaf27_4_Port81_oerrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_oerrs[i11].includes("K")){
                            Leaf27_4_Port81_oerrs[i11] =    Leaf27_4_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_oerrs[i11][0] = Leaf27_4_Port81_oerrs[i11][0]*1000;}
                        else {  Leaf27_4_Port81_oerrs[i11] =    Leaf27_4_Port81_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port81_mtu_errs[i11].includes("G")){
                            Leaf27_4_Port81_mtu_errs[i11] =    Leaf27_4_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_mtu_errs[i11][0] = Leaf27_4_Port81_mtu_errs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port81_mtu_errs[i11].includes("M")){
                            Leaf27_4_Port81_mtu_errs[i11] =    Leaf27_4_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_mtu_errs[i11][0] = Leaf27_4_Port81_mtu_errs[i11][0]*1000000;}
                        else if(Leaf27_4_Port81_mtu_errs[i11].includes("K")){
                            Leaf27_4_Port81_mtu_errs[i11] =    Leaf27_4_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port81_mtu_errs[i11][0] = Leaf27_4_Port81_mtu_errs[i11][0]*1000;}
                        else {  Leaf27_4_Port81_mtu_errs[i11] =    Leaf27_4_Port81_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }}
            
                        if(Leaf27_4_Port85[i11] !== undefined){ 
                            Leaf27_4_Port85_fix[i11] =        Leaf27_4_Port85[i11].slice(26, 34);
                            Leaf27_4_Port85_iUpkts[i11] =     Leaf27_4_Port85[i11].slice(33,40);
                            Leaf27_4_Port85_iBpkts[i11] =     Leaf27_4_Port85[i11].slice(40,47);
                            Leaf27_4_Port85_iMpkts[i11] =     Leaf27_4_Port85[i11].slice(47,54);
                            Leaf27_4_Port85_iCongDrops[i11] = Leaf27_4_Port85[i11].slice(54,65);
                            Leaf27_4_Port85_ierrs[i11] =      Leaf27_4_Port85[i11].slice(65,71);
                            Leaf27_4_Port85_obytes[i11] =     Leaf27_4_Port85[i11].slice(71,78);
                            Leaf27_4_Port85_oUpkts[i11] =     Leaf27_4_Port85[i11].slice(78,85);
                            Leaf27_4_Port85_oBpkts[i11] =     Leaf27_4_Port85[i11].slice(85,92);
                            Leaf27_4_Port85_oMpkts[i11] =     Leaf27_4_Port85[i11].slice(92,99);
                            Leaf27_4_Port85_oCongDrops[i11] = Leaf27_4_Port85[i11].slice(99,110);
                            Leaf27_4_Port85_oerrs[i11] =      Leaf27_4_Port85[i11].slice(110,116);
                            Leaf27_4_Port85_mtu_errs[i11] =   Leaf27_4_Port85[i11].slice(116,125);
                            
                            if( Leaf27_4_Port85_fix[i11].includes("G")){
                                Leaf27_4_Port85_fix[i11] =    Leaf27_4_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_fix[i11][0] = Leaf27_4_Port85_fix[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_fix[i11].includes("M")){
                                Leaf27_4_Port85_fix[i11] =    Leaf27_4_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_fix[i11][0] = Leaf27_4_Port85_fix[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_fix[i11].includes("K")){
                                Leaf27_4_Port85_fix[i11] =    Leaf27_4_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_fix[i11][0] = Leaf27_4_Port85_fix[i11][0]*1000;}
                        else {  Leaf27_4_Port85_fix[i11] =    Leaf27_4_Port85_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                            if( Leaf27_4_Port85_iUpkts[i11].includes("G")){
                                Leaf27_4_Port85_iUpkts[i11] =    Leaf27_4_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iUpkts[i11][0] = Leaf27_4_Port85_iUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_iUpkts[i11].includes("M")){
                                Leaf27_4_Port85_iUpkts[i11] =    Leaf27_4_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iUpkts[i11][0] = Leaf27_4_Port85_iUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_iUpkts[i11].includes("K")){
                                Leaf27_4_Port85_iUpkts[i11] =    Leaf27_4_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iUpkts[i11][0] = Leaf27_4_Port85_iUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_iUpkts[i11] =    Leaf27_4_Port85_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                        
                                if(Leaf27_4_Port85_iBpkts[i11].includes("G")){
                                Leaf27_4_Port85_iBpkts[i11] =    Leaf27_4_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iBpkts[i11][0] = Leaf27_4_Port85_iBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_iBpkts[i11].includes("M")){
                                Leaf27_4_Port85_iBpkts[i11] =    Leaf27_4_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iBpkts[i11][0] = Leaf27_4_Port85_iBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_iBpkts[i11].includes("K")){
                                Leaf27_4_Port85_iBpkts[i11] =    Leaf27_4_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iBpkts[i11][0] = Leaf27_4_Port85_iBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_iBpkts[i11] =    Leaf27_4_Port85_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                            
                                if(Leaf27_4_Port85_iMpkts[i11].includes("G")){
                                Leaf27_4_Port85_iMpkts[i11] =    Leaf27_4_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iMpkts[i11][0] = Leaf27_4_Port85_iMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_iMpkts[i11].includes("M")){
                                Leaf27_4_Port85_iMpkts[i11] =    Leaf27_4_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iMpkts[i11][0] = Leaf27_4_Port85_iMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_iMpkts[i11].includes("K")){
                                Leaf27_4_Port85_iMpkts[i11] =    Leaf27_4_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iMpkts[i11][0] = Leaf27_4_Port85_iMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_iMpkts[i11] =    Leaf27_4_Port85_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                              }
                    
                                if(Leaf27_4_Port85_iCongDrops[i11].includes("G")){
                                Leaf27_4_Port85_iCongDrops[i11] =    Leaf27_4_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iCongDrops[i11][0] = Leaf27_4_Port85_iCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_iCongDrops[i11].includes("M")){
                                Leaf27_4_Port85_iCongDrops[i11] =    Leaf27_4_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iCongDrops[i11][0] = Leaf27_4_Port85_iCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_iCongDrops[i11].includes("K")){
                                Leaf27_4_Port85_iCongDrops[i11] =    Leaf27_4_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_iCongDrops[i11][0] = Leaf27_4_Port85_iCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port85_iCongDrops[i11] =    Leaf27_4_Port85_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port85_ierrs[i11].includes("G")){
                                Leaf27_4_Port85_ierrs[i11] =    Leaf27_4_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_ierrs[i11][0] = Leaf27_4_Port85_ierrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_ierrs[i11].includes("M")){
                                Leaf27_4_Port85_ierrs[i11] =    Leaf27_4_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_ierrs[i11][0] = Leaf27_4_Port85_ierrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_ierrs[i11].includes("K")){
                                Leaf27_4_Port85_ierrs[i11] =    Leaf27_4_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_ierrs[i11][0] = Leaf27_4_Port85_ierrs[i11][0]*1000;}
                        else {  Leaf27_4_Port85_ierrs[i11] =    Leaf27_4_Port85_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port85_obytes[i11].includes("G")){
                                Leaf27_4_Port85_obytes[i11] =    Leaf27_4_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_obytes[i11][0] = Leaf27_4_Port85_obytes[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_obytes[i11].includes("M")){
                                Leaf27_4_Port85_obytes[i11] =    Leaf27_4_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_obytes[i11][0] = Leaf27_4_Port85_obytes[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_obytes[i11].includes("K")){
                                Leaf27_4_Port85_obytes[i11] =    Leaf27_4_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_obytes[i11][0] = Leaf27_4_Port85_obytes[i11][0]*1000;}
                        else {  Leaf27_4_Port85_obytes[i11] =    Leaf27_4_Port85_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                            
                                if(Leaf27_4_Port85_oUpkts[i11].includes("G")){
                                Leaf27_4_Port85_oUpkts[i11] =    Leaf27_4_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oUpkts[i11][0] = Leaf27_4_Port85_oUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_oUpkts[i11].includes("M")){
                                Leaf27_4_Port85_oUpkts[i11] =    Leaf27_4_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oUpkts[i11][0] = Leaf27_4_Port85_oUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_oUpkts[i11].includes("K")){
                                Leaf27_4_Port85_oUpkts[i11] =    Leaf27_4_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oUpkts[i11][0] = Leaf27_4_Port85_oUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_oUpkts[i11] =    Leaf27_4_Port85_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port85_oBpkts[i11].includes("G")){
                                Leaf27_4_Port85_oBpkts[i11] =    Leaf27_4_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oBpkts[i11][0] = Leaf27_4_Port85_oBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_oBpkts[i11].includes("M")){
                                Leaf27_4_Port85_oBpkts[i11] =    Leaf27_4_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oBpkts[i11][0] = Leaf27_4_Port85_oBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_oBpkts[i11].includes("K")){
                                Leaf27_4_Port85_oBpkts[i11] =    Leaf27_4_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oBpkts[i11][0] = Leaf27_4_Port85_oBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_oBpkts[i11] =    Leaf27_4_Port85_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port85_oMpkts[i11].includes("G")){
                                Leaf27_4_Port85_oMpkts[i11] =    Leaf27_4_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oMpkts[i11][0] = Leaf27_4_Port85_oMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_oMpkts[i11].includes("M")){
                                Leaf27_4_Port85_oMpkts[i11] =    Leaf27_4_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oMpkts[i11][0] = Leaf27_4_Port85_oMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_oMpkts[i11].includes("K")){
                                Leaf27_4_Port85_oMpkts[i11] =    Leaf27_4_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oMpkts[i11][0] = Leaf27_4_Port85_oMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port85_oMpkts[i11] =    Leaf27_4_Port85_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port85_oCongDrops[i11].includes("G")){
                                Leaf27_4_Port85_oCongDrops[i11] =    Leaf27_4_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oCongDrops[i11][0] = Leaf27_4_Port85_oCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_oCongDrops[i11].includes("M")){
                                Leaf27_4_Port85_oCongDrops[i11] =    Leaf27_4_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oCongDrops[i11][0] = Leaf27_4_Port85_oCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_oCongDrops[i11].includes("K")){
                                Leaf27_4_Port85_oCongDrops[i11] =    Leaf27_4_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oCongDrops[i11][0] = Leaf27_4_Port85_oCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port85_oCongDrops[i11] =    Leaf27_4_Port85_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port85_oerrs[i11].includes("G")){
                                Leaf27_4_Port85_oerrs[i11] =    Leaf27_4_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oerrs[i11][0] = Leaf27_4_Port85_oerrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_oerrs[i11].includes("M")){
                                Leaf27_4_Port85_oerrs[i11] =    Leaf27_4_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oerrs[i11][0] = Leaf27_4_Port85_oerrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_oerrs[i11].includes("K")){
                                Leaf27_4_Port85_oerrs[i11] =    Leaf27_4_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_oerrs[i11][0] = Leaf27_4_Port85_oerrs[i11][0]*1000;}
                        else {  Leaf27_4_Port85_oerrs[i11] =    Leaf27_4_Port85_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                              }
                    
                                if(Leaf27_4_Port85_mtu_errs[i11].includes("G")){
                                Leaf27_4_Port85_mtu_errs[i11] =    Leaf27_4_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_mtu_errs[i11][0] = Leaf27_4_Port85_mtu_errs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port85_mtu_errs[i11].includes("M")){
                                Leaf27_4_Port85_mtu_errs[i11] =    Leaf27_4_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_mtu_errs[i11][0] = Leaf27_4_Port85_mtu_errs[i11][0]*1000000;}
                        else if(Leaf27_4_Port85_mtu_errs[i11].includes("K")){
                                Leaf27_4_Port85_mtu_errs[i11] =    Leaf27_4_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port85_mtu_errs[i11][0] = Leaf27_4_Port85_mtu_errs[i11][0]*1000;}
                        else {  Leaf27_4_Port85_mtu_errs[i11] =    Leaf27_4_Port85_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }}
                    
                        if(Leaf27_4_Port86[i11] !== undefined){ 
                            Leaf27_4_Port86_fix[i11] =        Leaf27_4_Port86[i11].slice(26, 34);
                            Leaf27_4_Port86_iUpkts[i11] =     Leaf27_4_Port86[i11].slice(33,40);
                            Leaf27_4_Port86_iBpkts[i11] =     Leaf27_4_Port86[i11].slice(40,47);
                            Leaf27_4_Port86_iMpkts[i11] =     Leaf27_4_Port86[i11].slice(47,54);
                            Leaf27_4_Port86_iCongDrops[i11] = Leaf27_4_Port86[i11].slice(54,65);
                            Leaf27_4_Port86_ierrs[i11] =      Leaf27_4_Port86[i11].slice(65,71);
                            Leaf27_4_Port86_obytes[i11] =     Leaf27_4_Port86[i11].slice(71,78);
                            Leaf27_4_Port86_oUpkts[i11] =     Leaf27_4_Port86[i11].slice(78,85);
                            Leaf27_4_Port86_oBpkts[i11] =     Leaf27_4_Port86[i11].slice(85,92);
                            Leaf27_4_Port86_oMpkts[i11] =     Leaf27_4_Port86[i11].slice(92,99);
                            Leaf27_4_Port86_oCongDrops[i11] = Leaf27_4_Port86[i11].slice(99,110);
                            Leaf27_4_Port86_oerrs[i11] =      Leaf27_4_Port86[i11].slice(110,116);
                            Leaf27_4_Port86_mtu_errs[i11] =   Leaf27_4_Port86[i11].slice(116,125);
                            
                            if( Leaf27_4_Port86_fix[i11].includes("G")){
                                Leaf27_4_Port86_fix[i11] =    Leaf27_4_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_fix[i11][0] = Leaf27_4_Port86_fix[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_fix[i11].includes("M")){
                                Leaf27_4_Port86_fix[i11] =    Leaf27_4_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_fix[i11][0] = Leaf27_4_Port86_fix[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_fix[i11].includes("K")){
                                Leaf27_4_Port86_fix[i11] =    Leaf27_4_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_fix[i11][0] = Leaf27_4_Port86_fix[i11][0]*1000;}
                        else {  Leaf27_4_Port86_fix[i11] =    Leaf27_4_Port86_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                            if( Leaf27_4_Port86_iUpkts[i11].includes("G")){
                                Leaf27_4_Port86_iUpkts[i11] =    Leaf27_4_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iUpkts[i11][0] = Leaf27_4_Port86_iUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_iUpkts[i11].includes("M")){
                                Leaf27_4_Port86_iUpkts[i11] =    Leaf27_4_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iUpkts[i11][0] = Leaf27_4_Port86_iUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_iUpkts[i11].includes("K")){
                                Leaf27_4_Port86_iUpkts[i11] =    Leaf27_4_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iUpkts[i11][0] = Leaf27_4_Port86_iUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_iUpkts[i11] =    Leaf27_4_Port86_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                              }
                        
                                if(Leaf27_4_Port86_iBpkts[i11].includes("G")){
                                Leaf27_4_Port86_iBpkts[i11] =    Leaf27_4_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iBpkts[i11][0] = Leaf27_4_Port86_iBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_iBpkts[i11].includes("M")){
                                Leaf27_4_Port86_iBpkts[i11] =    Leaf27_4_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iBpkts[i11][0] = Leaf27_4_Port86_iBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_iBpkts[i11].includes("K")){
                                Leaf27_4_Port86_iBpkts[i11] =    Leaf27_4_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iBpkts[i11][0] = Leaf27_4_Port86_iBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_iBpkts[i11] =    Leaf27_4_Port86_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                            
                                if(Leaf27_4_Port86_iMpkts[i11].includes("G")){
                                Leaf27_4_Port86_iMpkts[i11] =    Leaf27_4_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iMpkts[i11][0] = Leaf27_4_Port86_iMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_iMpkts[i11].includes("M")){
                                Leaf27_4_Port86_iMpkts[i11] =    Leaf27_4_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iMpkts[i11][0] = Leaf27_4_Port86_iMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_iMpkts[i11].includes("K")){
                                Leaf27_4_Port86_iMpkts[i11] =    Leaf27_4_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iMpkts[i11][0] = Leaf27_4_Port86_iMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_iMpkts[i11] =    Leaf27_4_Port86_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                              }
                    
                                if(Leaf27_4_Port86_iCongDrops[i11].includes("G")){
                                Leaf27_4_Port86_iCongDrops[i11] =    Leaf27_4_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iCongDrops[i11][0] = Leaf27_4_Port86_iCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_iCongDrops[i11].includes("M")){
                                Leaf27_4_Port86_iCongDrops[i11] =    Leaf27_4_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iCongDrops[i11][0] = Leaf27_4_Port86_iCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_iCongDrops[i11].includes("K")){
                                Leaf27_4_Port86_iCongDrops[i11] =    Leaf27_4_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_iCongDrops[i11][0] = Leaf27_4_Port86_iCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port86_iCongDrops[i11] =    Leaf27_4_Port86_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port86_ierrs[i11].includes("G")){
                                Leaf27_4_Port86_ierrs[i11] =    Leaf27_4_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_ierrs[i11][0] = Leaf27_4_Port86_ierrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_ierrs[i11].includes("M")){
                                Leaf27_4_Port86_ierrs[i11] =    Leaf27_4_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_ierrs[i11][0] = Leaf27_4_Port86_ierrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_ierrs[i11].includes("K")){
                                Leaf27_4_Port86_ierrs[i11] =    Leaf27_4_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_ierrs[i11][0] = Leaf27_4_Port86_ierrs[i11][0]*1000;}
                        else {  Leaf27_4_Port86_ierrs[i11] =    Leaf27_4_Port86_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port86_obytes[i11].includes("G")){
                                Leaf27_4_Port86_obytes[i11] =    Leaf27_4_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_obytes[i11][0] = Leaf27_4_Port86_obytes[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_obytes[i11].includes("M")){
                                Leaf27_4_Port86_obytes[i11] =    Leaf27_4_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_obytes[i11][0] = Leaf27_4_Port86_obytes[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_obytes[i11].includes("K")){
                                Leaf27_4_Port86_obytes[i11] =    Leaf27_4_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_obytes[i11][0] = Leaf27_4_Port86_obytes[i11][0]*1000;}
                        else {  Leaf27_4_Port86_obytes[i11] =    Leaf27_4_Port86_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                            
                                if(Leaf27_4_Port86_oUpkts[i11].includes("G")){
                                Leaf27_4_Port86_oUpkts[i11] =    Leaf27_4_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oUpkts[i11][0] = Leaf27_4_Port86_oUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_oUpkts[i11].includes("M")){
                                Leaf27_4_Port86_oUpkts[i11] =    Leaf27_4_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oUpkts[i11][0] = Leaf27_4_Port86_oUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_oUpkts[i11].includes("K")){
                                Leaf27_4_Port86_oUpkts[i11] =    Leaf27_4_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oUpkts[i11][0] = Leaf27_4_Port86_oUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_oUpkts[i11] =    Leaf27_4_Port86_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port86_oBpkts[i11].includes("G")){
                                Leaf27_4_Port86_oBpkts[i11] =    Leaf27_4_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oBpkts[i11][0] = Leaf27_4_Port86_oBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_oBpkts[i11].includes("M")){
                                Leaf27_4_Port86_oBpkts[i11] =    Leaf27_4_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oBpkts[i11][0] = Leaf27_4_Port86_oBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_oBpkts[i11].includes("K")){
                                Leaf27_4_Port86_oBpkts[i11] =    Leaf27_4_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oBpkts[i11][0] = Leaf27_4_Port86_oBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_oBpkts[i11] =    Leaf27_4_Port86_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port86_oMpkts[i11].includes("G")){
                                Leaf27_4_Port86_oMpkts[i11] =    Leaf27_4_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oMpkts[i11][0] = Leaf27_4_Port86_oMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_oMpkts[i11].includes("M")){
                                Leaf27_4_Port86_oMpkts[i11] =    Leaf27_4_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oMpkts[i11][0] = Leaf27_4_Port86_oMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_oMpkts[i11].includes("K")){
                                Leaf27_4_Port86_oMpkts[i11] =    Leaf27_4_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oMpkts[i11][0] = Leaf27_4_Port86_oMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port86_oMpkts[i11] =    Leaf27_4_Port86_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port86_oCongDrops[i11].includes("G")){
                                Leaf27_4_Port86_oCongDrops[i11] =    Leaf27_4_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oCongDrops[i11][0] = Leaf27_4_Port86_oCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_oCongDrops[i11].includes("M")){
                                Leaf27_4_Port86_oCongDrops[i11] =    Leaf27_4_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oCongDrops[i11][0] = Leaf27_4_Port86_oCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_oCongDrops[i11].includes("K")){
                                Leaf27_4_Port86_oCongDrops[i11] =    Leaf27_4_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oCongDrops[i11][0] = Leaf27_4_Port86_oCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port86_oCongDrops[i11] =    Leaf27_4_Port86_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port86_oerrs[i11].includes("G")){
                                Leaf27_4_Port86_oerrs[i11] =    Leaf27_4_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oerrs[i11][0] = Leaf27_4_Port86_oerrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_oerrs[i11].includes("M")){
                                Leaf27_4_Port86_oerrs[i11] =    Leaf27_4_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oerrs[i11][0] = Leaf27_4_Port86_oerrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_oerrs[i11].includes("K")){
                                Leaf27_4_Port86_oerrs[i11] =    Leaf27_4_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_oerrs[i11][0] = Leaf27_4_Port86_oerrs[i11][0]*1000;}
                        else {  Leaf27_4_Port86_oerrs[i11] =    Leaf27_4_Port86_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port86_mtu_errs[i11].includes("G")){
                                Leaf27_4_Port86_mtu_errs[i11] =    Leaf27_4_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_mtu_errs[i11][0] = Leaf27_4_Port86_mtu_errs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port86_mtu_errs[i11].includes("M")){
                                Leaf27_4_Port86_mtu_errs[i11] =    Leaf27_4_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_mtu_errs[i11][0] = Leaf27_4_Port86_mtu_errs[i11][0]*1000000;}
                        else if(Leaf27_4_Port86_mtu_errs[i11].includes("K")){
                                Leaf27_4_Port86_mtu_errs[i11] =    Leaf27_4_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port86_mtu_errs[i11][0] = Leaf27_4_Port86_mtu_errs[i11][0]*1000;}
                        else {  Leaf27_4_Port86_mtu_errs[i11] =    Leaf27_4_Port86_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }}
                    
                        if(Leaf27_4_Port87[i11] !== undefined){ 
                            Leaf27_4_Port87_fix[i11] =        Leaf27_4_Port87[i11].slice(26, 34);
                            Leaf27_4_Port87_iUpkts[i11] =     Leaf27_4_Port87[i11].slice(33,40);
                            Leaf27_4_Port87_iBpkts[i11] =     Leaf27_4_Port87[i11].slice(40,47);
                            Leaf27_4_Port87_iMpkts[i11] =     Leaf27_4_Port87[i11].slice(47,54);
                            Leaf27_4_Port87_iCongDrops[i11] = Leaf27_4_Port87[i11].slice(54,65);
                            Leaf27_4_Port87_ierrs[i11] =      Leaf27_4_Port87[i11].slice(65,71);
                            Leaf27_4_Port87_obytes[i11] =     Leaf27_4_Port87[i11].slice(71,78);
                            Leaf27_4_Port87_oUpkts[i11] =     Leaf27_4_Port87[i11].slice(78,85);
                            Leaf27_4_Port87_oBpkts[i11] =     Leaf27_4_Port87[i11].slice(85,92);
                            Leaf27_4_Port87_oMpkts[i11] =     Leaf27_4_Port87[i11].slice(92,99);
                            Leaf27_4_Port87_oCongDrops[i11] = Leaf27_4_Port87[i11].slice(99,110);
                            Leaf27_4_Port87_oerrs[i11] =      Leaf27_4_Port87[i11].slice(110,116);
                            Leaf27_4_Port87_mtu_errs[i11] =   Leaf27_4_Port87[i11].slice(116,125);
                    
                        if( Leaf27_4_Port87_fix[i11].includes("G")){
                            Leaf27_4_Port87_fix[i11] =    Leaf27_4_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_fix[i11][0] = Leaf27_4_Port87_fix[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_fix[i11].includes("M")){
                            Leaf27_4_Port87_fix[i11] =    Leaf27_4_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_fix[i11][0] = Leaf27_4_Port87_fix[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_fix[i11].includes("K")){
                            Leaf27_4_Port87_fix[i11] =    Leaf27_4_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_fix[i11][0] = Leaf27_4_Port87_fix[i11][0]*1000;}
                        else {  Leaf27_4_Port87_fix[i11] =    Leaf27_4_Port87_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                        if( Leaf27_4_Port87_iUpkts[i11].includes("G")){
                            Leaf27_4_Port87_iUpkts[i11] =    Leaf27_4_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iUpkts[i11][0] = Leaf27_4_Port87_iUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_iUpkts[i11].includes("M")){
                            Leaf27_4_Port87_iUpkts[i11] =    Leaf27_4_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iUpkts[i11][0] = Leaf27_4_Port87_iUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_iUpkts[i11].includes("K")){
                            Leaf27_4_Port87_iUpkts[i11] =    Leaf27_4_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iUpkts[i11][0] = Leaf27_4_Port87_iUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_iUpkts[i11] =    Leaf27_4_Port87_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                            if(Leaf27_4_Port87_iBpkts[i11].includes("G")){
                            Leaf27_4_Port87_iBpkts[i11] =    Leaf27_4_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iBpkts[i11][0] = Leaf27_4_Port87_iBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_iBpkts[i11].includes("M")){
                            Leaf27_4_Port87_iBpkts[i11] =    Leaf27_4_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iBpkts[i11][0] = Leaf27_4_Port87_iBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_iBpkts[i11].includes("K")){
                            Leaf27_4_Port87_iBpkts[i11] =    Leaf27_4_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iBpkts[i11][0] = Leaf27_4_Port87_iBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_iBpkts[i11] =    Leaf27_4_Port87_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                         }
                        
                            if(Leaf27_4_Port87_iMpkts[i11].includes("G")){
                            Leaf27_4_Port87_iMpkts[i11] =    Leaf27_4_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iMpkts[i11][0] = Leaf27_4_Port87_iMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_iMpkts[i11].includes("M")){
                            Leaf27_4_Port87_iMpkts[i11] =    Leaf27_4_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iMpkts[i11][0] = Leaf27_4_Port87_iMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_iMpkts[i11].includes("K")){
                            Leaf27_4_Port87_iMpkts[i11] =    Leaf27_4_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iMpkts[i11][0] = Leaf27_4_Port87_iMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_iMpkts[i11] =    Leaf27_4_Port87_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                            if(Leaf27_4_Port87_iCongDrops[i11].includes("G")){
                            Leaf27_4_Port87_iCongDrops[i11] =    Leaf27_4_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iCongDrops[i11][0] = Leaf27_4_Port87_iCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_iCongDrops[i11].includes("M")){
                            Leaf27_4_Port87_iCongDrops[i11] =    Leaf27_4_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iCongDrops[i11][0] = Leaf27_4_Port87_iCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_iCongDrops[i11].includes("K")){
                            Leaf27_4_Port87_iCongDrops[i11] =    Leaf27_4_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_iCongDrops[i11][0] = Leaf27_4_Port87_iCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port87_iCongDrops[i11] =    Leaf27_4_Port87_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                         }
                        
                            if(Leaf27_4_Port87_ierrs[i11].includes("G")){
                            Leaf27_4_Port87_ierrs[i11] =    Leaf27_4_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_ierrs[i11][0] = Leaf27_4_Port87_ierrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_ierrs[i11].includes("M")){
                            Leaf27_4_Port87_ierrs[i11] =    Leaf27_4_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_ierrs[i11][0] = Leaf27_4_Port87_ierrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_ierrs[i11].includes("K")){
                            Leaf27_4_Port87_ierrs[i11] =    Leaf27_4_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_ierrs[i11][0] = Leaf27_4_Port87_ierrs[i11][0]*1000;}
                        else {  Leaf27_4_Port87_ierrs[i11] =    Leaf27_4_Port87_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                            if(Leaf27_4_Port87_obytes[i11].includes("G")){
                            Leaf27_4_Port87_obytes[i11] =    Leaf27_4_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_obytes[i11][0] = Leaf27_4_Port87_obytes[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_obytes[i11].includes("M")){
                            Leaf27_4_Port87_obytes[i11] =    Leaf27_4_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_obytes[i11][0] = Leaf27_4_Port87_obytes[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_obytes[i11].includes("K")){
                            Leaf27_4_Port87_obytes[i11] =    Leaf27_4_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_obytes[i11][0] = Leaf27_4_Port87_obytes[i11][0]*1000;}
                        else {  Leaf27_4_Port87_obytes[i11] =    Leaf27_4_Port87_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                            if(Leaf27_4_Port87_oUpkts[i11].includes("G")){
                            Leaf27_4_Port87_oUpkts[i11] =    Leaf27_4_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oUpkts[i11][0] = Leaf27_4_Port87_oUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_oUpkts[i11].includes("M")){
                            Leaf27_4_Port87_oUpkts[i11] =    Leaf27_4_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oUpkts[i11][0] = Leaf27_4_Port87_oUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_oUpkts[i11].includes("K")){
                            Leaf27_4_Port87_oUpkts[i11] =    Leaf27_4_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oUpkts[i11][0] = Leaf27_4_Port87_oUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_oUpkts[i11] =    Leaf27_4_Port87_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                         }
                        
                            if(Leaf27_4_Port87_oBpkts[i11].includes("G")){
                            Leaf27_4_Port87_oBpkts[i11] =    Leaf27_4_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oBpkts[i11][0] = Leaf27_4_Port87_oBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_oBpkts[i11].includes("M")){
                            Leaf27_4_Port87_oBpkts[i11] =    Leaf27_4_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oBpkts[i11][0] = Leaf27_4_Port87_oBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_oBpkts[i11].includes("K")){
                            Leaf27_4_Port87_oBpkts[i11] =    Leaf27_4_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oBpkts[i11][0] = Leaf27_4_Port87_oBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_oBpkts[i11] =    Leaf27_4_Port87_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                          }
                        
                            if(Leaf27_4_Port87_oMpkts[i11].includes("G")){
                            Leaf27_4_Port87_oMpkts[i11] =    Leaf27_4_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oMpkts[i11][0] = Leaf27_4_Port87_oMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_oMpkts[i11].includes("M")){
                            Leaf27_4_Port87_oMpkts[i11] =    Leaf27_4_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oMpkts[i11][0] = Leaf27_4_Port87_oMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_oMpkts[i11].includes("K")){
                            Leaf27_4_Port87_oMpkts[i11] =    Leaf27_4_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oMpkts[i11][0] = Leaf27_4_Port87_oMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port87_oMpkts[i11] =    Leaf27_4_Port87_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port87_oCongDrops[i11].includes("G")){
                            Leaf27_4_Port87_oCongDrops[i11] =    Leaf27_4_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oCongDrops[i11][0] = Leaf27_4_Port87_oCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_oCongDrops[i11].includes("M")){
                            Leaf27_4_Port87_oCongDrops[i11] =    Leaf27_4_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oCongDrops[i11][0] = Leaf27_4_Port87_oCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_oCongDrops[i11].includes("K")){
                            Leaf27_4_Port87_oCongDrops[i11] =    Leaf27_4_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oCongDrops[i11][0] = Leaf27_4_Port87_oCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port87_oCongDrops[i11] =    Leaf27_4_Port87_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                        
                            if(Leaf27_4_Port87_oerrs[i11].includes("G")){
                            Leaf27_4_Port87_oerrs[i11] =    Leaf27_4_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oerrs[i11][0] = Leaf27_4_Port87_oerrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_oerrs[i11].includes("M")){
                            Leaf27_4_Port87_oerrs[i11] =    Leaf27_4_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oerrs[i11][0] = Leaf27_4_Port87_oerrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_oerrs[i11].includes("K")){
                            Leaf27_4_Port87_oerrs[i11] =    Leaf27_4_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_oerrs[i11][0] = Leaf27_4_Port87_oerrs[i11][0]*1000;}
                        else {  Leaf27_4_Port87_oerrs[i11] =    Leaf27_4_Port87_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                        
                            if(Leaf27_4_Port87_mtu_errs[i11].includes("G")){
                            Leaf27_4_Port87_mtu_errs[i11] =    Leaf27_4_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_mtu_errs[i11][0] = Leaf27_4_Port87_mtu_errs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port87_mtu_errs[i11].includes("M")){
                            Leaf27_4_Port87_mtu_errs[i11] =    Leaf27_4_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_mtu_errs[i11][0] = Leaf27_4_Port87_mtu_errs[i11][0]*1000000;}
                        else if(Leaf27_4_Port87_mtu_errs[i11].includes("K")){
                            Leaf27_4_Port87_mtu_errs[i11] =    Leaf27_4_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            Leaf27_4_Port87_mtu_errs[i11][0] = Leaf27_4_Port87_mtu_errs[i11][0]*1000;}
                        else {  Leaf27_4_Port87_mtu_errs[i11] =    Leaf27_4_Port87_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                         }}
                    
                    if(Leaf27_4_Port88[i11] !== undefined){ 
                        Leaf27_4_Port88_fix[i11] =        Leaf27_4_Port88[i11].slice(26, 34);
                        Leaf27_4_Port88_iUpkts[i11] =     Leaf27_4_Port88[i11].slice(33,40);
                        Leaf27_4_Port88_iBpkts[i11] =     Leaf27_4_Port88[i11].slice(40,47);
                        Leaf27_4_Port88_iMpkts[i11] =     Leaf27_4_Port88[i11].slice(47,54);
                        Leaf27_4_Port88_iCongDrops[i11] = Leaf27_4_Port88[i11].slice(54,65);
                        Leaf27_4_Port88_ierrs[i11] =      Leaf27_4_Port88[i11].slice(65,71);
                        Leaf27_4_Port88_obytes[i11] =     Leaf27_4_Port88[i11].slice(71,78);
                        Leaf27_4_Port88_oUpkts[i11] =     Leaf27_4_Port88[i11].slice(78,85);
                        Leaf27_4_Port88_oBpkts[i11] =     Leaf27_4_Port88[i11].slice(85,92);
                        Leaf27_4_Port88_oMpkts[i11] =     Leaf27_4_Port88[i11].slice(92,99);
                        Leaf27_4_Port88_oCongDrops[i11] = Leaf27_4_Port88[i11].slice(99,110);
                        Leaf27_4_Port88_oerrs[i11] =      Leaf27_4_Port88[i11].slice(110,116);
                        Leaf27_4_Port88_mtu_errs[i11] =   Leaf27_4_Port88[i11].slice(116,125);
                    
                    if( Leaf27_4_Port88_fix[i11].includes("G")){
                        Leaf27_4_Port88_fix[i11] =    Leaf27_4_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_fix[i11][0] = Leaf27_4_Port88_fix[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_fix[i11].includes("M")){
                        Leaf27_4_Port88_fix[i11] =    Leaf27_4_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_fix[i11][0] = Leaf27_4_Port88_fix[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_fix[i11].includes("K")){
                        Leaf27_4_Port88_fix[i11] =    Leaf27_4_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_fix[i11][0] = Leaf27_4_Port88_fix[i11][0]*1000;}
                    else {  Leaf27_4_Port88_fix[i11] =    Leaf27_4_Port88_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                    if( Leaf27_4_Port88_iUpkts[i11].includes("G")){
                        Leaf27_4_Port88_iUpkts[i11] =    Leaf27_4_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iUpkts[i11][0] = Leaf27_4_Port88_iUpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_iUpkts[i11].includes("M")){
                        Leaf27_4_Port88_iUpkts[i11] =    Leaf27_4_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iUpkts[i11][0] = Leaf27_4_Port88_iUpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_iUpkts[i11].includes("K")){
                        Leaf27_4_Port88_iUpkts[i11] =    Leaf27_4_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iUpkts[i11][0] = Leaf27_4_Port88_iUpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_iUpkts[i11] =    Leaf27_4_Port88_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                    
                        if(Leaf27_4_Port88_iBpkts[i11].includes("G")){
                        Leaf27_4_Port88_iBpkts[i11] =    Leaf27_4_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iBpkts[i11][0] = Leaf27_4_Port88_iBpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_iBpkts[i11].includes("M")){
                        Leaf27_4_Port88_iBpkts[i11] =    Leaf27_4_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iBpkts[i11][0] = Leaf27_4_Port88_iBpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_iBpkts[i11].includes("K")){
                        Leaf27_4_Port88_iBpkts[i11] =    Leaf27_4_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iBpkts[i11][0] = Leaf27_4_Port88_iBpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_iBpkts[i11] =    Leaf27_4_Port88_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                        if(Leaf27_4_Port88_iMpkts[i11].includes("G")){
                        Leaf27_4_Port88_iMpkts[i11] =    Leaf27_4_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iMpkts[i11][0] = Leaf27_4_Port88_iMpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_iMpkts[i11].includes("M")){
                        Leaf27_4_Port88_iMpkts[i11] =    Leaf27_4_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iMpkts[i11][0] = Leaf27_4_Port88_iMpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_iMpkts[i11].includes("K")){
                        Leaf27_4_Port88_iMpkts[i11] =    Leaf27_4_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iMpkts[i11][0] = Leaf27_4_Port88_iMpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_iMpkts[i11] =    Leaf27_4_Port88_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                    
                        if(Leaf27_4_Port88_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port88_iCongDrops[i11] =    Leaf27_4_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iCongDrops[i11][0] = Leaf27_4_Port88_iCongDrops[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port88_iCongDrops[i11] =    Leaf27_4_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iCongDrops[i11][0] = Leaf27_4_Port88_iCongDrops[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port88_iCongDrops[i11] =    Leaf27_4_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_iCongDrops[i11][0] = Leaf27_4_Port88_iCongDrops[i11][0]*1000;}
                    else {  Leaf27_4_Port88_iCongDrops[i11] =    Leaf27_4_Port88_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                        if(Leaf27_4_Port88_ierrs[i11].includes("G")){
                        Leaf27_4_Port88_ierrs[i11] =    Leaf27_4_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_ierrs[i11][0] = Leaf27_4_Port88_ierrs[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_ierrs[i11].includes("M")){
                        Leaf27_4_Port88_ierrs[i11] =    Leaf27_4_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_ierrs[i11][0] = Leaf27_4_Port88_ierrs[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_ierrs[i11].includes("K")){
                        Leaf27_4_Port88_ierrs[i11] =    Leaf27_4_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_ierrs[i11][0] = Leaf27_4_Port88_ierrs[i11][0]*1000;}
                    else {  Leaf27_4_Port88_ierrs[i11] =    Leaf27_4_Port88_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                        if(Leaf27_4_Port88_obytes[i11].includes("G")){
                        Leaf27_4_Port88_obytes[i11] =    Leaf27_4_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_obytes[i11][0] = Leaf27_4_Port88_obytes[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_obytes[i11].includes("M")){
                        Leaf27_4_Port88_obytes[i11] =    Leaf27_4_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_obytes[i11][0] = Leaf27_4_Port88_obytes[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_obytes[i11].includes("K")){
                        Leaf27_4_Port88_obytes[i11] =    Leaf27_4_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_obytes[i11][0] = Leaf27_4_Port88_obytes[i11][0]*1000;}
                    else {  Leaf27_4_Port88_obytes[i11] =    Leaf27_4_Port88_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                        if(Leaf27_4_Port88_oUpkts[i11].includes("G")){
                        Leaf27_4_Port88_oUpkts[i11] =    Leaf27_4_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oUpkts[i11][0] = Leaf27_4_Port88_oUpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_oUpkts[i11].includes("M")){
                        Leaf27_4_Port88_oUpkts[i11] =    Leaf27_4_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oUpkts[i11][0] = Leaf27_4_Port88_oUpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_oUpkts[i11].includes("K")){
                        Leaf27_4_Port88_oUpkts[i11] =    Leaf27_4_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oUpkts[i11][0] = Leaf27_4_Port88_oUpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_oUpkts[i11] =    Leaf27_4_Port88_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                     }
                    
                        if(Leaf27_4_Port88_oBpkts[i11].includes("G")){
                        Leaf27_4_Port88_oBpkts[i11] =    Leaf27_4_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oBpkts[i11][0] = Leaf27_4_Port88_oBpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_oBpkts[i11].includes("M")){
                        Leaf27_4_Port88_oBpkts[i11] =    Leaf27_4_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oBpkts[i11][0] = Leaf27_4_Port88_oBpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_oBpkts[i11].includes("K")){
                        Leaf27_4_Port88_oBpkts[i11] =    Leaf27_4_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oBpkts[i11][0] = Leaf27_4_Port88_oBpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_oBpkts[i11] =    Leaf27_4_Port88_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                    
                        if(Leaf27_4_Port88_oMpkts[i11].includes("G")){
                        Leaf27_4_Port88_oMpkts[i11] =    Leaf27_4_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oMpkts[i11][0] = Leaf27_4_Port88_oMpkts[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_oMpkts[i11].includes("M")){
                        Leaf27_4_Port88_oMpkts[i11] =    Leaf27_4_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oMpkts[i11][0] = Leaf27_4_Port88_oMpkts[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_oMpkts[i11].includes("K")){
                        Leaf27_4_Port88_oMpkts[i11] =    Leaf27_4_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oMpkts[i11][0] = Leaf27_4_Port88_oMpkts[i11][0]*1000;}
                    else {  Leaf27_4_Port88_oMpkts[i11] =    Leaf27_4_Port88_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port88_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port88_oCongDrops[i11] =    Leaf27_4_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oCongDrops[i11][0] = Leaf27_4_Port88_oCongDrops[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port88_oCongDrops[i11] =    Leaf27_4_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oCongDrops[i11][0] = Leaf27_4_Port88_oCongDrops[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port88_oCongDrops[i11] =    Leaf27_4_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oCongDrops[i11][0] = Leaf27_4_Port88_oCongDrops[i11][0]*1000;}
                    else {  Leaf27_4_Port88_oCongDrops[i11] =    Leaf27_4_Port88_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                    
                        if(Leaf27_4_Port88_oerrs[i11].includes("G")){
                        Leaf27_4_Port88_oerrs[i11] =    Leaf27_4_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oerrs[i11][0] = Leaf27_4_Port88_oerrs[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_oerrs[i11].includes("M")){
                        Leaf27_4_Port88_oerrs[i11] =    Leaf27_4_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oerrs[i11][0] = Leaf27_4_Port88_oerrs[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_oerrs[i11].includes("K")){
                        Leaf27_4_Port88_oerrs[i11] =    Leaf27_4_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_oerrs[i11][0] = Leaf27_4_Port88_oerrs[i11][0]*1000;}
                    else {  Leaf27_4_Port88_oerrs[i11] =    Leaf27_4_Port88_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port88_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port88_mtu_errs[i11] =    Leaf27_4_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_mtu_errs[i11][0] = Leaf27_4_Port88_mtu_errs[i11][0]*1000000000;}
                    else if(Leaf27_4_Port88_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port88_mtu_errs[i11] =    Leaf27_4_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_mtu_errs[i11][0] = Leaf27_4_Port88_mtu_errs[i11][0]*1000000;}
                    else if(Leaf27_4_Port88_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port88_mtu_errs[i11] =    Leaf27_4_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port88_mtu_errs[i11][0] = Leaf27_4_Port88_mtu_errs[i11][0]*1000;}
                    else {  Leaf27_4_Port88_mtu_errs[i11] =    Leaf27_4_Port88_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }}
                    
                        if(Leaf27_4_Port89[i11] !== undefined){ 
                            Leaf27_4_Port89_fix[i11] =        Leaf27_4_Port89[i11].slice(26, 34);
                            Leaf27_4_Port89_iUpkts[i11] =     Leaf27_4_Port89[i11].slice(33,40);
                            Leaf27_4_Port89_iBpkts[i11] =     Leaf27_4_Port89[i11].slice(40,47);
                            Leaf27_4_Port89_iMpkts[i11] =     Leaf27_4_Port89[i11].slice(47,54);
                            Leaf27_4_Port89_iCongDrops[i11] = Leaf27_4_Port89[i11].slice(54,65);
                            Leaf27_4_Port89_ierrs[i11] =      Leaf27_4_Port89[i11].slice(65,71);
                            Leaf27_4_Port89_obytes[i11] =     Leaf27_4_Port89[i11].slice(71,78);
                            Leaf27_4_Port89_oUpkts[i11] =     Leaf27_4_Port89[i11].slice(78,85);
                            Leaf27_4_Port89_oBpkts[i11] =     Leaf27_4_Port89[i11].slice(85,92);
                            Leaf27_4_Port89_oMpkts[i11] =     Leaf27_4_Port89[i11].slice(92,99);
                            Leaf27_4_Port89_oCongDrops[i11] = Leaf27_4_Port89[i11].slice(99,110);
                            Leaf27_4_Port89_oerrs[i11] =      Leaf27_4_Port89[i11].slice(110,116);
                            Leaf27_4_Port89_mtu_errs[i11] =   Leaf27_4_Port89[i11].slice(116,125);
                            
                            if( Leaf27_4_Port89_fix[i11].includes("G")){
                                Leaf27_4_Port89_fix[i11] =    Leaf27_4_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_fix[i11][0] = Leaf27_4_Port89_fix[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_fix[i11].includes("M")){
                                Leaf27_4_Port89_fix[i11] =    Leaf27_4_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_fix[i11][0] = Leaf27_4_Port89_fix[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_fix[i11].includes("K")){
                                Leaf27_4_Port89_fix[i11] =    Leaf27_4_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_fix[i11][0] = Leaf27_4_Port89_fix[i11][0]*1000;}
                        else {  Leaf27_4_Port89_fix[i11] =    Leaf27_4_Port89_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                            if( Leaf27_4_Port89_iUpkts[i11].includes("G")){
                                Leaf27_4_Port89_iUpkts[i11] =    Leaf27_4_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iUpkts[i11][0] = Leaf27_4_Port89_iUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_iUpkts[i11].includes("M")){
                                Leaf27_4_Port89_iUpkts[i11] =    Leaf27_4_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iUpkts[i11][0] = Leaf27_4_Port89_iUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_iUpkts[i11].includes("K")){
                                Leaf27_4_Port89_iUpkts[i11] =    Leaf27_4_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iUpkts[i11][0] = Leaf27_4_Port89_iUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_iUpkts[i11] =    Leaf27_4_Port89_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                        
                                if(Leaf27_4_Port89_iBpkts[i11].includes("G")){
                                Leaf27_4_Port89_iBpkts[i11] =    Leaf27_4_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iBpkts[i11][0] = Leaf27_4_Port89_iBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_iBpkts[i11].includes("M")){
                                Leaf27_4_Port89_iBpkts[i11] =    Leaf27_4_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iBpkts[i11][0] = Leaf27_4_Port89_iBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_iBpkts[i11].includes("K")){
                                Leaf27_4_Port89_iBpkts[i11] =    Leaf27_4_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iBpkts[i11][0] = Leaf27_4_Port89_iBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_iBpkts[i11] =    Leaf27_4_Port89_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                            
                                if(Leaf27_4_Port89_iMpkts[i11].includes("G")){
                                Leaf27_4_Port89_iMpkts[i11] =    Leaf27_4_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iMpkts[i11][0] = Leaf27_4_Port89_iMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_iMpkts[i11].includes("M")){
                                Leaf27_4_Port89_iMpkts[i11] =    Leaf27_4_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iMpkts[i11][0] = Leaf27_4_Port89_iMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_iMpkts[i11].includes("K")){
                                Leaf27_4_Port89_iMpkts[i11] =    Leaf27_4_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iMpkts[i11][0] = Leaf27_4_Port89_iMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_iMpkts[i11] =    Leaf27_4_Port89_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port89_iCongDrops[i11].includes("G")){
                                Leaf27_4_Port89_iCongDrops[i11] =    Leaf27_4_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iCongDrops[i11][0] = Leaf27_4_Port89_iCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_iCongDrops[i11].includes("M")){
                                Leaf27_4_Port89_iCongDrops[i11] =    Leaf27_4_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iCongDrops[i11][0] = Leaf27_4_Port89_iCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_iCongDrops[i11].includes("K")){
                                Leaf27_4_Port89_iCongDrops[i11] =    Leaf27_4_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_iCongDrops[i11][0] = Leaf27_4_Port89_iCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port89_iCongDrops[i11] =    Leaf27_4_Port89_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                    
                                if(Leaf27_4_Port89_ierrs[i11].includes("G")){
                                Leaf27_4_Port89_ierrs[i11] =    Leaf27_4_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_ierrs[i11][0] = Leaf27_4_Port89_ierrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_ierrs[i11].includes("M")){
                                Leaf27_4_Port89_ierrs[i11] =    Leaf27_4_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_ierrs[i11][0] = Leaf27_4_Port89_ierrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_ierrs[i11].includes("K")){
                                Leaf27_4_Port89_ierrs[i11] =    Leaf27_4_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_ierrs[i11][0] = Leaf27_4_Port89_ierrs[i11][0]*1000;}
                        else {  Leaf27_4_Port89_ierrs[i11] =    Leaf27_4_Port89_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                           }
                    
                                if(Leaf27_4_Port89_obytes[i11].includes("G")){
                                Leaf27_4_Port89_obytes[i11] =    Leaf27_4_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_obytes[i11][0] = Leaf27_4_Port89_obytes[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_obytes[i11].includes("M")){
                                Leaf27_4_Port89_obytes[i11] =    Leaf27_4_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_obytes[i11][0] = Leaf27_4_Port89_obytes[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_obytes[i11].includes("K")){
                                Leaf27_4_Port89_obytes[i11] =    Leaf27_4_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_obytes[i11][0] = Leaf27_4_Port89_obytes[i11][0]*1000;}
                        else {  Leaf27_4_Port89_obytes[i11] =    Leaf27_4_Port89_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                             }
                            
                                if(Leaf27_4_Port89_oUpkts[i11].includes("G")){
                                Leaf27_4_Port89_oUpkts[i11] =    Leaf27_4_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oUpkts[i11][0] = Leaf27_4_Port89_oUpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_oUpkts[i11].includes("M")){
                                Leaf27_4_Port89_oUpkts[i11] =    Leaf27_4_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oUpkts[i11][0] = Leaf27_4_Port89_oUpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_oUpkts[i11].includes("K")){
                                Leaf27_4_Port89_oUpkts[i11] =    Leaf27_4_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oUpkts[i11][0] = Leaf27_4_Port89_oUpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_oUpkts[i11] =    Leaf27_4_Port89_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                            }
                    
                                if(Leaf27_4_Port89_oBpkts[i11].includes("G")){
                                Leaf27_4_Port89_oBpkts[i11] =    Leaf27_4_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oBpkts[i11][0] = Leaf27_4_Port89_oBpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_oBpkts[i11].includes("M")){
                                Leaf27_4_Port89_oBpkts[i11] =    Leaf27_4_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oBpkts[i11][0] = Leaf27_4_Port89_oBpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_oBpkts[i11].includes("K")){
                                Leaf27_4_Port89_oBpkts[i11] =    Leaf27_4_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oBpkts[i11][0] = Leaf27_4_Port89_oBpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_oBpkts[i11] =    Leaf27_4_Port89_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                             }
                    
                                if(Leaf27_4_Port89_oMpkts[i11].includes("G")){
                                Leaf27_4_Port89_oMpkts[i11] =    Leaf27_4_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oMpkts[i11][0] = Leaf27_4_Port89_oMpkts[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_oMpkts[i11].includes("M")){
                                Leaf27_4_Port89_oMpkts[i11] =    Leaf27_4_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oMpkts[i11][0] = Leaf27_4_Port89_oMpkts[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_oMpkts[i11].includes("K")){
                                Leaf27_4_Port89_oMpkts[i11] =    Leaf27_4_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oMpkts[i11][0] = Leaf27_4_Port89_oMpkts[i11][0]*1000;}
                        else {  Leaf27_4_Port89_oMpkts[i11] =    Leaf27_4_Port89_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port89_oCongDrops[i11].includes("G")){
                                Leaf27_4_Port89_oCongDrops[i11] =    Leaf27_4_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oCongDrops[i11][0] = Leaf27_4_Port89_oCongDrops[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_oCongDrops[i11].includes("M")){
                                Leaf27_4_Port89_oCongDrops[i11] =    Leaf27_4_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oCongDrops[i11][0] = Leaf27_4_Port89_oCongDrops[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_oCongDrops[i11].includes("K")){
                                Leaf27_4_Port89_oCongDrops[i11] =    Leaf27_4_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oCongDrops[i11][0] = Leaf27_4_Port89_oCongDrops[i11][0]*1000;}
                        else {  Leaf27_4_Port89_oCongDrops[i11] =    Leaf27_4_Port89_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                }
                    
                                if(Leaf27_4_Port89_oerrs[i11].includes("G")){
                                Leaf27_4_Port89_oerrs[i11] =    Leaf27_4_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oerrs[i11][0] = Leaf27_4_Port89_oerrs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_oerrs[i11].includes("M")){
                                Leaf27_4_Port89_oerrs[i11] =    Leaf27_4_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oerrs[i11][0] = Leaf27_4_Port89_oerrs[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_oerrs[i11].includes("K")){
                                Leaf27_4_Port89_oerrs[i11] =    Leaf27_4_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_oerrs[i11][0] = Leaf27_4_Port89_oerrs[i11][0]*1000;}
                        else {  Leaf27_4_Port89_oerrs[i11] =    Leaf27_4_Port89_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }
                    
                                if(Leaf27_4_Port89_mtu_errs[i11].includes("G")){
                                Leaf27_4_Port89_mtu_errs[i11] =    Leaf27_4_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_mtu_errs[i11][0] = Leaf27_4_Port89_mtu_errs[i11][0]*1000000000;}
                        else if(Leaf27_4_Port89_mtu_errs[i11].includes("M")){
                                Leaf27_4_Port89_mtu_errs[i11] =    Leaf27_4_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_mtu_errs[i11][0] = Leaf27_4_Port89_mtu_errs[i11][0]*1000000;}
                        else if(Leaf27_4_Port89_mtu_errs[i11].includes("K")){
                                Leaf27_4_Port89_mtu_errs[i11] =    Leaf27_4_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                                Leaf27_4_Port89_mtu_errs[i11][0] = Leaf27_4_Port89_mtu_errs[i11][0]*1000;}
                        else {  Leaf27_4_Port89_mtu_errs[i11] =    Leaf27_4_Port89_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                               }}
                    
            
                if(Leaf27_4_Port90[i11] !== undefined){ 
                    Leaf27_4_Port90_fix[i11] =        Leaf27_4_Port90[i11].slice(26, 34);
                    Leaf27_4_Port90_iUpkts[i11] =     Leaf27_4_Port90[i11].slice(33,40);
                    Leaf27_4_Port90_iBpkts[i11] =     Leaf27_4_Port90[i11].slice(40,47);
                    Leaf27_4_Port90_iMpkts[i11] =     Leaf27_4_Port90[i11].slice(47,54);
                    Leaf27_4_Port90_iCongDrops[i11] = Leaf27_4_Port90[i11].slice(54,65);
                    Leaf27_4_Port90_ierrs[i11] =      Leaf27_4_Port90[i11].slice(65,71);
                    Leaf27_4_Port90_obytes[i11] =     Leaf27_4_Port90[i11].slice(71,78);
                    Leaf27_4_Port90_oUpkts[i11] =     Leaf27_4_Port90[i11].slice(78,85);
                    Leaf27_4_Port90_oBpkts[i11] =     Leaf27_4_Port90[i11].slice(85,92);
                    Leaf27_4_Port90_oMpkts[i11] =     Leaf27_4_Port90[i11].slice(92,99);
                    Leaf27_4_Port90_oCongDrops[i11] = Leaf27_4_Port90[i11].slice(99,110);
                    Leaf27_4_Port90_oerrs[i11] =      Leaf27_4_Port90[i11].slice(110,116);
                    Leaf27_4_Port90_mtu_errs[i11] =   Leaf27_4_Port90[i11].slice(116,125);
                    
                    if( Leaf27_4_Port90_fix[i11].includes("G")){
                        Leaf27_4_Port90_fix[i11] =    Leaf27_4_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_fix[i11][0] = Leaf27_4_Port90_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_fix[i11].includes("M")){
                        Leaf27_4_Port90_fix[i11] =    Leaf27_4_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_fix[i11][0] = Leaf27_4_Port90_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port90_fix[i11].includes("K")){
                        Leaf27_4_Port90_fix[i11] =    Leaf27_4_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_fix[i11][0] = Leaf27_4_Port90_fix[i11][0]*1000;}
                else {  Leaf27_4_Port90_fix[i11] =    Leaf27_4_Port90_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                    if( Leaf27_4_Port90_iUpkts[i11].includes("G")){
                        Leaf27_4_Port90_iUpkts[i11] =    Leaf27_4_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iUpkts[i11][0] = Leaf27_4_Port90_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_iUpkts[i11].includes("M")){
                        Leaf27_4_Port90_iUpkts[i11] =    Leaf27_4_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iUpkts[i11][0] = Leaf27_4_Port90_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_iUpkts[i11].includes("K")){
                        Leaf27_4_Port90_iUpkts[i11] =    Leaf27_4_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iUpkts[i11][0] = Leaf27_4_Port90_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_iUpkts[i11] =    Leaf27_4_Port90_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                
                        if(Leaf27_4_Port90_iBpkts[i11].includes("G")){
                        Leaf27_4_Port90_iBpkts[i11] =    Leaf27_4_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iBpkts[i11][0] = Leaf27_4_Port90_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_iBpkts[i11].includes("M")){
                        Leaf27_4_Port90_iBpkts[i11] =    Leaf27_4_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iBpkts[i11][0] = Leaf27_4_Port90_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_iBpkts[i11].includes("K")){
                        Leaf27_4_Port90_iBpkts[i11] =    Leaf27_4_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iBpkts[i11][0] = Leaf27_4_Port90_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_iBpkts[i11] =    Leaf27_4_Port90_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
                    
                        if(Leaf27_4_Port90_iMpkts[i11].includes("G")){
                        Leaf27_4_Port90_iMpkts[i11] =    Leaf27_4_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iMpkts[i11][0] = Leaf27_4_Port90_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_iMpkts[i11].includes("M")){
                        Leaf27_4_Port90_iMpkts[i11] =    Leaf27_4_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iMpkts[i11][0] = Leaf27_4_Port90_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_iMpkts[i11].includes("K")){
                        Leaf27_4_Port90_iMpkts[i11] =    Leaf27_4_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iMpkts[i11][0] = Leaf27_4_Port90_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_iMpkts[i11] =    Leaf27_4_Port90_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                      }
            
                        if(Leaf27_4_Port90_iCongDrops[i11].includes("G")){
                        Leaf27_4_Port90_iCongDrops[i11] =    Leaf27_4_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iCongDrops[i11][0] = Leaf27_4_Port90_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_iCongDrops[i11].includes("M")){
                        Leaf27_4_Port90_iCongDrops[i11] =    Leaf27_4_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iCongDrops[i11][0] = Leaf27_4_Port90_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port90_iCongDrops[i11].includes("K")){
                        Leaf27_4_Port90_iCongDrops[i11] =    Leaf27_4_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_iCongDrops[i11][0] = Leaf27_4_Port90_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port90_iCongDrops[i11] =    Leaf27_4_Port90_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port90_ierrs[i11].includes("G")){
                        Leaf27_4_Port90_ierrs[i11] =    Leaf27_4_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_ierrs[i11][0] = Leaf27_4_Port90_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_ierrs[i11].includes("M")){
                        Leaf27_4_Port90_ierrs[i11] =    Leaf27_4_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_ierrs[i11][0] = Leaf27_4_Port90_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port90_ierrs[i11].includes("K")){
                        Leaf27_4_Port90_ierrs[i11] =    Leaf27_4_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_ierrs[i11][0] = Leaf27_4_Port90_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port90_ierrs[i11] =    Leaf27_4_Port90_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port90_obytes[i11].includes("G")){
                        Leaf27_4_Port90_obytes[i11] =    Leaf27_4_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_obytes[i11][0] = Leaf27_4_Port90_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_obytes[i11].includes("M")){
                        Leaf27_4_Port90_obytes[i11] =    Leaf27_4_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_obytes[i11][0] = Leaf27_4_Port90_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port90_obytes[i11].includes("K")){
                        Leaf27_4_Port90_obytes[i11] =    Leaf27_4_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_obytes[i11][0] = Leaf27_4_Port90_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port90_obytes[i11] =    Leaf27_4_Port90_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
                    
                        if(Leaf27_4_Port90_oUpkts[i11].includes("G")){
                        Leaf27_4_Port90_oUpkts[i11] =    Leaf27_4_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oUpkts[i11][0] = Leaf27_4_Port90_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_oUpkts[i11].includes("M")){
                        Leaf27_4_Port90_oUpkts[i11] =    Leaf27_4_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oUpkts[i11][0] = Leaf27_4_Port90_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_oUpkts[i11].includes("K")){
                        Leaf27_4_Port90_oUpkts[i11] =    Leaf27_4_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oUpkts[i11][0] = Leaf27_4_Port90_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_oUpkts[i11] =    Leaf27_4_Port90_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port90_oBpkts[i11].includes("G")){
                        Leaf27_4_Port90_oBpkts[i11] =    Leaf27_4_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oBpkts[i11][0] = Leaf27_4_Port90_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_oBpkts[i11].includes("M")){
                        Leaf27_4_Port90_oBpkts[i11] =    Leaf27_4_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oBpkts[i11][0] = Leaf27_4_Port90_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_oBpkts[i11].includes("K")){
                        Leaf27_4_Port90_oBpkts[i11] =    Leaf27_4_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oBpkts[i11][0] = Leaf27_4_Port90_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_oBpkts[i11] =    Leaf27_4_Port90_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port90_oMpkts[i11].includes("G")){
                        Leaf27_4_Port90_oMpkts[i11] =    Leaf27_4_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oMpkts[i11][0] = Leaf27_4_Port90_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_oMpkts[i11].includes("M")){
                        Leaf27_4_Port90_oMpkts[i11] =    Leaf27_4_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oMpkts[i11][0] = Leaf27_4_Port90_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port90_oMpkts[i11].includes("K")){
                        Leaf27_4_Port90_oMpkts[i11] =    Leaf27_4_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oMpkts[i11][0] = Leaf27_4_Port90_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port90_oMpkts[i11] =    Leaf27_4_Port90_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port90_oCongDrops[i11].includes("G")){
                        Leaf27_4_Port90_oCongDrops[i11] =    Leaf27_4_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oCongDrops[i11][0] = Leaf27_4_Port90_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_oCongDrops[i11].includes("M")){
                        Leaf27_4_Port90_oCongDrops[i11] =    Leaf27_4_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oCongDrops[i11][0] = Leaf27_4_Port90_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port90_oCongDrops[i11].includes("K")){
                        Leaf27_4_Port90_oCongDrops[i11] =    Leaf27_4_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oCongDrops[i11][0] = Leaf27_4_Port90_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port90_oCongDrops[i11] =    Leaf27_4_Port90_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        }
            
                        if(Leaf27_4_Port90_oerrs[i11].includes("G")){
                        Leaf27_4_Port90_oerrs[i11] =    Leaf27_4_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oerrs[i11][0] = Leaf27_4_Port90_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_oerrs[i11].includes("M")){
                        Leaf27_4_Port90_oerrs[i11] =    Leaf27_4_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oerrs[i11][0] = Leaf27_4_Port90_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port90_oerrs[i11].includes("K")){
                        Leaf27_4_Port90_oerrs[i11] =    Leaf27_4_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_oerrs[i11][0] = Leaf27_4_Port90_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port90_oerrs[i11] =    Leaf27_4_Port90_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }
            
                        if(Leaf27_4_Port90_mtu_errs[i11].includes("G")){
                        Leaf27_4_Port90_mtu_errs[i11] =    Leaf27_4_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_mtu_errs[i11][0] = Leaf27_4_Port90_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port90_mtu_errs[i11].includes("M")){
                        Leaf27_4_Port90_mtu_errs[i11] =    Leaf27_4_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_mtu_errs[i11][0] = Leaf27_4_Port90_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port90_mtu_errs[i11].includes("K")){
                        Leaf27_4_Port90_mtu_errs[i11] =    Leaf27_4_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                        Leaf27_4_Port90_mtu_errs[i11][0] = Leaf27_4_Port90_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port90_mtu_errs[i11] =    Leaf27_4_Port90_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                       }}
            
                if(Leaf27_4_Port91[i11] !== undefined){ 
                    Leaf27_4_Port91_fix[i11] =        Leaf27_4_Port91[i11].slice(26, 34);
                    Leaf27_4_Port91_iUpkts[i11] =     Leaf27_4_Port91[i11].slice(33,40);
                    Leaf27_4_Port91_iBpkts[i11] =     Leaf27_4_Port91[i11].slice(40,47);
                    Leaf27_4_Port91_iMpkts[i11] =     Leaf27_4_Port91[i11].slice(47,54);
                    Leaf27_4_Port91_iCongDrops[i11] = Leaf27_4_Port91[i11].slice(54,65);
                    Leaf27_4_Port91_ierrs[i11] =      Leaf27_4_Port91[i11].slice(65,71);
                    Leaf27_4_Port91_obytes[i11] =     Leaf27_4_Port91[i11].slice(71,78);
                    Leaf27_4_Port91_oUpkts[i11] =     Leaf27_4_Port91[i11].slice(78,85);
                    Leaf27_4_Port91_oBpkts[i11] =     Leaf27_4_Port91[i11].slice(85,92);
                    Leaf27_4_Port91_oMpkts[i11] =     Leaf27_4_Port91[i11].slice(92,99);
                    Leaf27_4_Port91_oCongDrops[i11] = Leaf27_4_Port91[i11].slice(99,110);
                    Leaf27_4_Port91_oerrs[i11] =      Leaf27_4_Port91[i11].slice(110,116);
                    Leaf27_4_Port91_mtu_errs[i11] =   Leaf27_4_Port91[i11].slice(116,125);
            
                if( Leaf27_4_Port91_fix[i11].includes("G")){
                    Leaf27_4_Port91_fix[i11] =    Leaf27_4_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_fix[i11][0] = Leaf27_4_Port91_fix[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_fix[i11].includes("M")){
                    Leaf27_4_Port91_fix[i11] =    Leaf27_4_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_fix[i11][0] = Leaf27_4_Port91_fix[i11][0]*1000000;}
                else if(Leaf27_4_Port91_fix[i11].includes("K")){
                    Leaf27_4_Port91_fix[i11] =    Leaf27_4_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_fix[i11][0] = Leaf27_4_Port91_fix[i11][0]*1000;}
                else {  Leaf27_4_Port91_fix[i11] =    Leaf27_4_Port91_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                  }
                
                if( Leaf27_4_Port91_iUpkts[i11].includes("G")){
                    Leaf27_4_Port91_iUpkts[i11] =    Leaf27_4_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iUpkts[i11][0] = Leaf27_4_Port91_iUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_iUpkts[i11].includes("M")){
                    Leaf27_4_Port91_iUpkts[i11] =    Leaf27_4_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iUpkts[i11][0] = Leaf27_4_Port91_iUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_iUpkts[i11].includes("K")){
                    Leaf27_4_Port91_iUpkts[i11] =    Leaf27_4_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iUpkts[i11][0] = Leaf27_4_Port91_iUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_iUpkts[i11] =    Leaf27_4_Port91_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Leaf27_4_Port91_iBpkts[i11].includes("G")){
                    Leaf27_4_Port91_iBpkts[i11] =    Leaf27_4_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iBpkts[i11][0] = Leaf27_4_Port91_iBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_iBpkts[i11].includes("M")){
                    Leaf27_4_Port91_iBpkts[i11] =    Leaf27_4_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iBpkts[i11][0] = Leaf27_4_Port91_iBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_iBpkts[i11].includes("K")){
                    Leaf27_4_Port91_iBpkts[i11] =    Leaf27_4_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iBpkts[i11][0] = Leaf27_4_Port91_iBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_iBpkts[i11] =    Leaf27_4_Port91_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Leaf27_4_Port91_iMpkts[i11].includes("G")){
                    Leaf27_4_Port91_iMpkts[i11] =    Leaf27_4_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iMpkts[i11][0] = Leaf27_4_Port91_iMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_iMpkts[i11].includes("M")){
                    Leaf27_4_Port91_iMpkts[i11] =    Leaf27_4_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iMpkts[i11][0] = Leaf27_4_Port91_iMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_iMpkts[i11].includes("K")){
                    Leaf27_4_Port91_iMpkts[i11] =    Leaf27_4_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iMpkts[i11][0] = Leaf27_4_Port91_iMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_iMpkts[i11] =    Leaf27_4_Port91_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_iCongDrops[i11].includes("G")){
                    Leaf27_4_Port91_iCongDrops[i11] =    Leaf27_4_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iCongDrops[i11][0] = Leaf27_4_Port91_iCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_iCongDrops[i11].includes("M")){
                    Leaf27_4_Port91_iCongDrops[i11] =    Leaf27_4_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iCongDrops[i11][0] = Leaf27_4_Port91_iCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port91_iCongDrops[i11].includes("K")){
                    Leaf27_4_Port91_iCongDrops[i11] =    Leaf27_4_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_iCongDrops[i11][0] = Leaf27_4_Port91_iCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port91_iCongDrops[i11] =    Leaf27_4_Port91_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_ierrs[i11].includes("G")){
                    Leaf27_4_Port91_ierrs[i11] =    Leaf27_4_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_ierrs[i11][0] = Leaf27_4_Port91_ierrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_ierrs[i11].includes("M")){
                    Leaf27_4_Port91_ierrs[i11] =    Leaf27_4_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_ierrs[i11][0] = Leaf27_4_Port91_ierrs[i11][0]*1000000;}
                else if(Leaf27_4_Port91_ierrs[i11].includes("K")){
                    Leaf27_4_Port91_ierrs[i11] =    Leaf27_4_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_ierrs[i11][0] = Leaf27_4_Port91_ierrs[i11][0]*1000;}
                else {  Leaf27_4_Port91_ierrs[i11] =    Leaf27_4_Port91_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_obytes[i11].includes("G")){
                    Leaf27_4_Port91_obytes[i11] =    Leaf27_4_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_obytes[i11][0] = Leaf27_4_Port91_obytes[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_obytes[i11].includes("M")){
                    Leaf27_4_Port91_obytes[i11] =    Leaf27_4_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_obytes[i11][0] = Leaf27_4_Port91_obytes[i11][0]*1000000;}
                else if(Leaf27_4_Port91_obytes[i11].includes("K")){
                    Leaf27_4_Port91_obytes[i11] =    Leaf27_4_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_obytes[i11][0] = Leaf27_4_Port91_obytes[i11][0]*1000;}
                else {  Leaf27_4_Port91_obytes[i11] =    Leaf27_4_Port91_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_oUpkts[i11].includes("G")){
                    Leaf27_4_Port91_oUpkts[i11] =    Leaf27_4_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oUpkts[i11][0] = Leaf27_4_Port91_oUpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_oUpkts[i11].includes("M")){
                    Leaf27_4_Port91_oUpkts[i11] =    Leaf27_4_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oUpkts[i11][0] = Leaf27_4_Port91_oUpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_oUpkts[i11].includes("K")){
                    Leaf27_4_Port91_oUpkts[i11] =    Leaf27_4_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oUpkts[i11][0] = Leaf27_4_Port91_oUpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_oUpkts[i11] =    Leaf27_4_Port91_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_oBpkts[i11].includes("G")){
                    Leaf27_4_Port91_oBpkts[i11] =    Leaf27_4_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oBpkts[i11][0] = Leaf27_4_Port91_oBpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_oBpkts[i11].includes("M")){
                    Leaf27_4_Port91_oBpkts[i11] =    Leaf27_4_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oBpkts[i11][0] = Leaf27_4_Port91_oBpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_oBpkts[i11].includes("K")){
                    Leaf27_4_Port91_oBpkts[i11] =    Leaf27_4_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oBpkts[i11][0] = Leaf27_4_Port91_oBpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_oBpkts[i11] =    Leaf27_4_Port91_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Leaf27_4_Port91_oMpkts[i11].includes("G")){
                    Leaf27_4_Port91_oMpkts[i11] =    Leaf27_4_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oMpkts[i11][0] = Leaf27_4_Port91_oMpkts[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_oMpkts[i11].includes("M")){
                    Leaf27_4_Port91_oMpkts[i11] =    Leaf27_4_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oMpkts[i11][0] = Leaf27_4_Port91_oMpkts[i11][0]*1000000;}
                else if(Leaf27_4_Port91_oMpkts[i11].includes("K")){
                    Leaf27_4_Port91_oMpkts[i11] =    Leaf27_4_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oMpkts[i11][0] = Leaf27_4_Port91_oMpkts[i11][0]*1000;}
                else {  Leaf27_4_Port91_oMpkts[i11] =    Leaf27_4_Port91_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Leaf27_4_Port91_oCongDrops[i11].includes("G")){
                    Leaf27_4_Port91_oCongDrops[i11] =    Leaf27_4_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oCongDrops[i11][0] = Leaf27_4_Port91_oCongDrops[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_oCongDrops[i11].includes("M")){
                    Leaf27_4_Port91_oCongDrops[i11] =    Leaf27_4_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oCongDrops[i11][0] = Leaf27_4_Port91_oCongDrops[i11][0]*1000000;}
                else if(Leaf27_4_Port91_oCongDrops[i11].includes("K")){
                    Leaf27_4_Port91_oCongDrops[i11] =    Leaf27_4_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oCongDrops[i11][0] = Leaf27_4_Port91_oCongDrops[i11][0]*1000;}
                else {  Leaf27_4_Port91_oCongDrops[i11] =    Leaf27_4_Port91_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                   }
                
                    if(Leaf27_4_Port91_oerrs[i11].includes("G")){
                    Leaf27_4_Port91_oerrs[i11] =    Leaf27_4_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oerrs[i11][0] = Leaf27_4_Port91_oerrs[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_oerrs[i11].includes("M")){
                    Leaf27_4_Port91_oerrs[i11] =    Leaf27_4_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oerrs[i11][0] = Leaf27_4_Port91_oerrs[i11][0]*1000000;}
                else if(Leaf27_4_Port91_oerrs[i11].includes("K")){
                    Leaf27_4_Port91_oerrs[i11] =    Leaf27_4_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_oerrs[i11][0] = Leaf27_4_Port91_oerrs[i11][0]*1000;}
                else {  Leaf27_4_Port91_oerrs[i11] =    Leaf27_4_Port91_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }
                
                    if(Leaf27_4_Port91_mtu_errs[i11].includes("G")){
                    Leaf27_4_Port91_mtu_errs[i11] =    Leaf27_4_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_mtu_errs[i11][0] = Leaf27_4_Port91_mtu_errs[i11][0]*1000000000;}
                else if(Leaf27_4_Port91_mtu_errs[i11].includes("M")){
                    Leaf27_4_Port91_mtu_errs[i11] =    Leaf27_4_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_mtu_errs[i11][0] = Leaf27_4_Port91_mtu_errs[i11][0]*1000000;}
                else if(Leaf27_4_Port91_mtu_errs[i11].includes("K")){
                    Leaf27_4_Port91_mtu_errs[i11] =    Leaf27_4_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    Leaf27_4_Port91_mtu_errs[i11][0] = Leaf27_4_Port91_mtu_errs[i11][0]*1000;}
                else {  Leaf27_4_Port91_mtu_errs[i11] =    Leaf27_4_Port91_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                    }}
            
            if(Leaf27_4_Port92[i11] !== undefined){ 
                Leaf27_4_Port92_fix[i11] =        Leaf27_4_Port92[i11].slice(26, 34);
                Leaf27_4_Port92_iUpkts[i11] =     Leaf27_4_Port92[i11].slice(33,40);
                Leaf27_4_Port92_iBpkts[i11] =     Leaf27_4_Port92[i11].slice(40,47);
                Leaf27_4_Port92_iMpkts[i11] =     Leaf27_4_Port92[i11].slice(47,54);
                Leaf27_4_Port92_iCongDrops[i11] = Leaf27_4_Port92[i11].slice(54,65);
                Leaf27_4_Port92_ierrs[i11] =      Leaf27_4_Port92[i11].slice(65,71);
                Leaf27_4_Port92_obytes[i11] =     Leaf27_4_Port92[i11].slice(71,78);
                Leaf27_4_Port92_oUpkts[i11] =     Leaf27_4_Port92[i11].slice(78,85);
                Leaf27_4_Port92_oBpkts[i11] =     Leaf27_4_Port92[i11].slice(85,92);
                Leaf27_4_Port92_oMpkts[i11] =     Leaf27_4_Port92[i11].slice(92,99);
                Leaf27_4_Port92_oCongDrops[i11] = Leaf27_4_Port92[i11].slice(99,110);
                Leaf27_4_Port92_oerrs[i11] =      Leaf27_4_Port92[i11].slice(110,116);
                Leaf27_4_Port92_mtu_errs[i11] =   Leaf27_4_Port92[i11].slice(116,125);
            
            if( Leaf27_4_Port92_fix[i11].includes("G")){
                Leaf27_4_Port92_fix[i11] =    Leaf27_4_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_fix[i11][0] = Leaf27_4_Port92_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_fix[i11].includes("M")){
                Leaf27_4_Port92_fix[i11] =    Leaf27_4_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_fix[i11][0] = Leaf27_4_Port92_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port92_fix[i11].includes("K")){
                Leaf27_4_Port92_fix[i11] =    Leaf27_4_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_fix[i11][0] = Leaf27_4_Port92_fix[i11][0]*1000;}
            else {  Leaf27_4_Port92_fix[i11] =    Leaf27_4_Port92_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port92_iUpkts[i11].includes("G")){
                Leaf27_4_Port92_iUpkts[i11] =    Leaf27_4_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iUpkts[i11][0] = Leaf27_4_Port92_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_iUpkts[i11].includes("M")){
                Leaf27_4_Port92_iUpkts[i11] =    Leaf27_4_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iUpkts[i11][0] = Leaf27_4_Port92_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_iUpkts[i11].includes("K")){
                Leaf27_4_Port92_iUpkts[i11] =    Leaf27_4_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iUpkts[i11][0] = Leaf27_4_Port92_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_iUpkts[i11] =    Leaf27_4_Port92_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port92_iBpkts[i11].includes("G")){
                Leaf27_4_Port92_iBpkts[i11] =    Leaf27_4_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iBpkts[i11][0] = Leaf27_4_Port92_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_iBpkts[i11].includes("M")){
                Leaf27_4_Port92_iBpkts[i11] =    Leaf27_4_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iBpkts[i11][0] = Leaf27_4_Port92_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_iBpkts[i11].includes("K")){
                Leaf27_4_Port92_iBpkts[i11] =    Leaf27_4_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iBpkts[i11][0] = Leaf27_4_Port92_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_iBpkts[i11] =    Leaf27_4_Port92_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_iMpkts[i11].includes("G")){
                Leaf27_4_Port92_iMpkts[i11] =    Leaf27_4_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iMpkts[i11][0] = Leaf27_4_Port92_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_iMpkts[i11].includes("M")){
                Leaf27_4_Port92_iMpkts[i11] =    Leaf27_4_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iMpkts[i11][0] = Leaf27_4_Port92_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_iMpkts[i11].includes("K")){
                Leaf27_4_Port92_iMpkts[i11] =    Leaf27_4_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iMpkts[i11][0] = Leaf27_4_Port92_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_iMpkts[i11] =    Leaf27_4_Port92_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port92_iCongDrops[i11].includes("G")){
                Leaf27_4_Port92_iCongDrops[i11] =    Leaf27_4_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iCongDrops[i11][0] = Leaf27_4_Port92_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_iCongDrops[i11].includes("M")){
                Leaf27_4_Port92_iCongDrops[i11] =    Leaf27_4_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iCongDrops[i11][0] = Leaf27_4_Port92_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port92_iCongDrops[i11].includes("K")){
                Leaf27_4_Port92_iCongDrops[i11] =    Leaf27_4_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_iCongDrops[i11][0] = Leaf27_4_Port92_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port92_iCongDrops[i11] =    Leaf27_4_Port92_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_ierrs[i11].includes("G")){
                Leaf27_4_Port92_ierrs[i11] =    Leaf27_4_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_ierrs[i11][0] = Leaf27_4_Port92_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_ierrs[i11].includes("M")){
                Leaf27_4_Port92_ierrs[i11] =    Leaf27_4_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_ierrs[i11][0] = Leaf27_4_Port92_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port92_ierrs[i11].includes("K")){
                Leaf27_4_Port92_ierrs[i11] =    Leaf27_4_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_ierrs[i11][0] = Leaf27_4_Port92_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port92_ierrs[i11] =    Leaf27_4_Port92_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port92_obytes[i11].includes("G")){
                Leaf27_4_Port92_obytes[i11] =    Leaf27_4_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_obytes[i11][0] = Leaf27_4_Port92_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_obytes[i11].includes("M")){
                Leaf27_4_Port92_obytes[i11] =    Leaf27_4_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_obytes[i11][0] = Leaf27_4_Port92_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port92_obytes[i11].includes("K")){
                Leaf27_4_Port92_obytes[i11] =    Leaf27_4_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_obytes[i11][0] = Leaf27_4_Port92_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port92_obytes[i11] =    Leaf27_4_Port92_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port92_oUpkts[i11].includes("G")){
                Leaf27_4_Port92_oUpkts[i11] =    Leaf27_4_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oUpkts[i11][0] = Leaf27_4_Port92_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_oUpkts[i11].includes("M")){
                Leaf27_4_Port92_oUpkts[i11] =    Leaf27_4_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oUpkts[i11][0] = Leaf27_4_Port92_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_oUpkts[i11].includes("K")){
                Leaf27_4_Port92_oUpkts[i11] =    Leaf27_4_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oUpkts[i11][0] = Leaf27_4_Port92_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_oUpkts[i11] =    Leaf27_4_Port92_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_oBpkts[i11].includes("G")){
                Leaf27_4_Port92_oBpkts[i11] =    Leaf27_4_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oBpkts[i11][0] = Leaf27_4_Port92_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_oBpkts[i11].includes("M")){
                Leaf27_4_Port92_oBpkts[i11] =    Leaf27_4_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oBpkts[i11][0] = Leaf27_4_Port92_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_oBpkts[i11].includes("K")){
                Leaf27_4_Port92_oBpkts[i11] =    Leaf27_4_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oBpkts[i11][0] = Leaf27_4_Port92_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_oBpkts[i11] =    Leaf27_4_Port92_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_oMpkts[i11].includes("G")){
                Leaf27_4_Port92_oMpkts[i11] =    Leaf27_4_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oMpkts[i11][0] = Leaf27_4_Port92_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_oMpkts[i11].includes("M")){
                Leaf27_4_Port92_oMpkts[i11] =    Leaf27_4_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oMpkts[i11][0] = Leaf27_4_Port92_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port92_oMpkts[i11].includes("K")){
                Leaf27_4_Port92_oMpkts[i11] =    Leaf27_4_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oMpkts[i11][0] = Leaf27_4_Port92_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port92_oMpkts[i11] =    Leaf27_4_Port92_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_oCongDrops[i11].includes("G")){
                Leaf27_4_Port92_oCongDrops[i11] =    Leaf27_4_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oCongDrops[i11][0] = Leaf27_4_Port92_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_oCongDrops[i11].includes("M")){
                Leaf27_4_Port92_oCongDrops[i11] =    Leaf27_4_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oCongDrops[i11][0] = Leaf27_4_Port92_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port92_oCongDrops[i11].includes("K")){
                Leaf27_4_Port92_oCongDrops[i11] =    Leaf27_4_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oCongDrops[i11][0] = Leaf27_4_Port92_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port92_oCongDrops[i11] =    Leaf27_4_Port92_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port92_oerrs[i11].includes("G")){
                Leaf27_4_Port92_oerrs[i11] =    Leaf27_4_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oerrs[i11][0] = Leaf27_4_Port92_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_oerrs[i11].includes("M")){
                Leaf27_4_Port92_oerrs[i11] =    Leaf27_4_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oerrs[i11][0] = Leaf27_4_Port92_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port92_oerrs[i11].includes("K")){
                Leaf27_4_Port92_oerrs[i11] =    Leaf27_4_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_oerrs[i11][0] = Leaf27_4_Port92_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port92_oerrs[i11] =    Leaf27_4_Port92_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port92_mtu_errs[i11].includes("G")){
                Leaf27_4_Port92_mtu_errs[i11] =    Leaf27_4_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_mtu_errs[i11][0] = Leaf27_4_Port92_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port92_mtu_errs[i11].includes("M")){
                Leaf27_4_Port92_mtu_errs[i11] =    Leaf27_4_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_mtu_errs[i11][0] = Leaf27_4_Port92_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port92_mtu_errs[i11].includes("K")){
                Leaf27_4_Port92_mtu_errs[i11] =    Leaf27_4_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port92_mtu_errs[i11][0] = Leaf27_4_Port92_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port92_mtu_errs[i11] =    Leaf27_4_Port92_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}
            
            
            if(Leaf27_4_Port93[i11] !== undefined){ 
                Leaf27_4_Port93_fix[i11] =        Leaf27_4_Port93[i11].slice(26, 34);
                Leaf27_4_Port93_iUpkts[i11] =     Leaf27_4_Port93[i11].slice(33,40);
                Leaf27_4_Port93_iBpkts[i11] =     Leaf27_4_Port93[i11].slice(40,47);
                Leaf27_4_Port93_iMpkts[i11] =     Leaf27_4_Port93[i11].slice(47,54);
                Leaf27_4_Port93_iCongDrops[i11] = Leaf27_4_Port93[i11].slice(54,65);
                Leaf27_4_Port93_ierrs[i11] =      Leaf27_4_Port93[i11].slice(65,71);
                Leaf27_4_Port93_obytes[i11] =     Leaf27_4_Port93[i11].slice(71,78);
                Leaf27_4_Port93_oUpkts[i11] =     Leaf27_4_Port93[i11].slice(78,85);
                Leaf27_4_Port93_oBpkts[i11] =     Leaf27_4_Port93[i11].slice(85,92);
                Leaf27_4_Port93_oMpkts[i11] =     Leaf27_4_Port93[i11].slice(92,99);
                Leaf27_4_Port93_oCongDrops[i11] = Leaf27_4_Port93[i11].slice(99,110);
                Leaf27_4_Port93_oerrs[i11] =      Leaf27_4_Port93[i11].slice(110,116);
                Leaf27_4_Port93_mtu_errs[i11] =   Leaf27_4_Port93[i11].slice(116,125);
            
            if( Leaf27_4_Port93_fix[i11].includes("G")){
                Leaf27_4_Port93_fix[i11] =    Leaf27_4_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_fix[i11][0] = Leaf27_4_Port93_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_fix[i11].includes("M")){
                Leaf27_4_Port93_fix[i11] =    Leaf27_4_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_fix[i11][0] = Leaf27_4_Port93_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port93_fix[i11].includes("K")){
                Leaf27_4_Port93_fix[i11] =    Leaf27_4_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_fix[i11][0] = Leaf27_4_Port93_fix[i11][0]*1000;}
            else {  Leaf27_4_Port93_fix[i11] =    Leaf27_4_Port93_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port93_iUpkts[i11].includes("G")){
                Leaf27_4_Port93_iUpkts[i11] =    Leaf27_4_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iUpkts[i11][0] = Leaf27_4_Port93_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_iUpkts[i11].includes("M")){
                Leaf27_4_Port93_iUpkts[i11] =    Leaf27_4_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iUpkts[i11][0] = Leaf27_4_Port93_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_iUpkts[i11].includes("K")){
                Leaf27_4_Port93_iUpkts[i11] =    Leaf27_4_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iUpkts[i11][0] = Leaf27_4_Port93_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_iUpkts[i11] =    Leaf27_4_Port93_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_iBpkts[i11].includes("G")){
                Leaf27_4_Port93_iBpkts[i11] =    Leaf27_4_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iBpkts[i11][0] = Leaf27_4_Port93_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_iBpkts[i11].includes("M")){
                Leaf27_4_Port93_iBpkts[i11] =    Leaf27_4_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iBpkts[i11][0] = Leaf27_4_Port93_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_iBpkts[i11].includes("K")){
                Leaf27_4_Port93_iBpkts[i11] =    Leaf27_4_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iBpkts[i11][0] = Leaf27_4_Port93_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_iBpkts[i11] =    Leaf27_4_Port93_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_iMpkts[i11].includes("G")){
                Leaf27_4_Port93_iMpkts[i11] =    Leaf27_4_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iMpkts[i11][0] = Leaf27_4_Port93_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_iMpkts[i11].includes("M")){
                Leaf27_4_Port93_iMpkts[i11] =    Leaf27_4_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iMpkts[i11][0] = Leaf27_4_Port93_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_iMpkts[i11].includes("K")){
                Leaf27_4_Port93_iMpkts[i11] =    Leaf27_4_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iMpkts[i11][0] = Leaf27_4_Port93_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_iMpkts[i11] =    Leaf27_4_Port93_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port93_iCongDrops[i11].includes("G")){
                Leaf27_4_Port93_iCongDrops[i11] =    Leaf27_4_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iCongDrops[i11][0] = Leaf27_4_Port93_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_iCongDrops[i11].includes("M")){
                Leaf27_4_Port93_iCongDrops[i11] =    Leaf27_4_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iCongDrops[i11][0] = Leaf27_4_Port93_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port93_iCongDrops[i11].includes("K")){
                Leaf27_4_Port93_iCongDrops[i11] =    Leaf27_4_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_iCongDrops[i11][0] = Leaf27_4_Port93_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port93_iCongDrops[i11] =    Leaf27_4_Port93_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port93_ierrs[i11].includes("G")){
                Leaf27_4_Port93_ierrs[i11] =    Leaf27_4_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_ierrs[i11][0] = Leaf27_4_Port93_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_ierrs[i11].includes("M")){
                Leaf27_4_Port93_ierrs[i11] =    Leaf27_4_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_ierrs[i11][0] = Leaf27_4_Port93_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port93_ierrs[i11].includes("K")){
                Leaf27_4_Port93_ierrs[i11] =    Leaf27_4_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_ierrs[i11][0] = Leaf27_4_Port93_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port93_ierrs[i11] =    Leaf27_4_Port93_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port93_obytes[i11].includes("G")){
                Leaf27_4_Port93_obytes[i11] =    Leaf27_4_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_obytes[i11][0] = Leaf27_4_Port93_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_obytes[i11].includes("M")){
                Leaf27_4_Port93_obytes[i11] =    Leaf27_4_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_obytes[i11][0] = Leaf27_4_Port93_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port93_obytes[i11].includes("K")){
                Leaf27_4_Port93_obytes[i11] =    Leaf27_4_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_obytes[i11][0] = Leaf27_4_Port93_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port93_obytes[i11] =    Leaf27_4_Port93_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_oUpkts[i11].includes("G")){
                Leaf27_4_Port93_oUpkts[i11] =    Leaf27_4_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oUpkts[i11][0] = Leaf27_4_Port93_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_oUpkts[i11].includes("M")){
                Leaf27_4_Port93_oUpkts[i11] =    Leaf27_4_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oUpkts[i11][0] = Leaf27_4_Port93_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_oUpkts[i11].includes("K")){
                Leaf27_4_Port93_oUpkts[i11] =    Leaf27_4_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oUpkts[i11][0] = Leaf27_4_Port93_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_oUpkts[i11] =    Leaf27_4_Port93_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port93_oBpkts[i11].includes("G")){
                Leaf27_4_Port93_oBpkts[i11] =    Leaf27_4_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oBpkts[i11][0] = Leaf27_4_Port93_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_oBpkts[i11].includes("M")){
                Leaf27_4_Port93_oBpkts[i11] =    Leaf27_4_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oBpkts[i11][0] = Leaf27_4_Port93_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_oBpkts[i11].includes("K")){
                Leaf27_4_Port93_oBpkts[i11] =    Leaf27_4_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oBpkts[i11][0] = Leaf27_4_Port93_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_oBpkts[i11] =    Leaf27_4_Port93_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_oMpkts[i11].includes("G")){
                Leaf27_4_Port93_oMpkts[i11] =    Leaf27_4_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oMpkts[i11][0] = Leaf27_4_Port93_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_oMpkts[i11].includes("M")){
                Leaf27_4_Port93_oMpkts[i11] =    Leaf27_4_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oMpkts[i11][0] = Leaf27_4_Port93_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port93_oMpkts[i11].includes("K")){
                Leaf27_4_Port93_oMpkts[i11] =    Leaf27_4_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oMpkts[i11][0] = Leaf27_4_Port93_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port93_oMpkts[i11] =    Leaf27_4_Port93_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_oCongDrops[i11].includes("G")){
                Leaf27_4_Port93_oCongDrops[i11] =    Leaf27_4_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oCongDrops[i11][0] = Leaf27_4_Port93_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_oCongDrops[i11].includes("M")){
                Leaf27_4_Port93_oCongDrops[i11] =    Leaf27_4_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oCongDrops[i11][0] = Leaf27_4_Port93_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port93_oCongDrops[i11].includes("K")){
                Leaf27_4_Port93_oCongDrops[i11] =    Leaf27_4_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oCongDrops[i11][0] = Leaf27_4_Port93_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port93_oCongDrops[i11] =    Leaf27_4_Port93_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port93_oerrs[i11].includes("G")){
                Leaf27_4_Port93_oerrs[i11] =    Leaf27_4_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oerrs[i11][0] = Leaf27_4_Port93_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_oerrs[i11].includes("M")){
                Leaf27_4_Port93_oerrs[i11] =    Leaf27_4_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oerrs[i11][0] = Leaf27_4_Port93_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port93_oerrs[i11].includes("K")){
                Leaf27_4_Port93_oerrs[i11] =    Leaf27_4_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_oerrs[i11][0] = Leaf27_4_Port93_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port93_oerrs[i11] =    Leaf27_4_Port93_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port93_mtu_errs[i11].includes("G")){
                Leaf27_4_Port93_mtu_errs[i11] =    Leaf27_4_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_mtu_errs[i11][0] = Leaf27_4_Port93_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port93_mtu_errs[i11].includes("M")){
                Leaf27_4_Port93_mtu_errs[i11] =    Leaf27_4_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_mtu_errs[i11][0] = Leaf27_4_Port93_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port93_mtu_errs[i11].includes("K")){
                Leaf27_4_Port93_mtu_errs[i11] =    Leaf27_4_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port93_mtu_errs[i11][0] = Leaf27_4_Port93_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port93_mtu_errs[i11] =    Leaf27_4_Port93_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}
            
            if(Leaf27_4_Port94[i11] !== undefined){ 
                Leaf27_4_Port94_fix[i11] =        Leaf27_4_Port94[i11].slice(26, 34);
                Leaf27_4_Port94_iUpkts[i11] =     Leaf27_4_Port94[i11].slice(33,40);
                Leaf27_4_Port94_iBpkts[i11] =     Leaf27_4_Port94[i11].slice(40,47);
                Leaf27_4_Port94_iMpkts[i11] =     Leaf27_4_Port94[i11].slice(47,54);
                Leaf27_4_Port94_iCongDrops[i11] = Leaf27_4_Port94[i11].slice(54,65);
                Leaf27_4_Port94_ierrs[i11] =      Leaf27_4_Port94[i11].slice(65,71);
                Leaf27_4_Port94_obytes[i11] =     Leaf27_4_Port94[i11].slice(71,78);
                Leaf27_4_Port94_oUpkts[i11] =     Leaf27_4_Port94[i11].slice(78,85);
                Leaf27_4_Port94_oBpkts[i11] =     Leaf27_4_Port94[i11].slice(85,92);
                Leaf27_4_Port94_oMpkts[i11] =     Leaf27_4_Port94[i11].slice(92,99);
                Leaf27_4_Port94_oCongDrops[i11] = Leaf27_4_Port94[i11].slice(99,110);
                Leaf27_4_Port94_oerrs[i11] =      Leaf27_4_Port94[i11].slice(110,116);
                Leaf27_4_Port94_mtu_errs[i11] =   Leaf27_4_Port94[i11].slice(116,125);
            
            if( Leaf27_4_Port94_fix[i11].includes("G")){
                Leaf27_4_Port94_fix[i11] =    Leaf27_4_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_fix[i11][0] = Leaf27_4_Port94_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_fix[i11].includes("M")){
                Leaf27_4_Port94_fix[i11] =    Leaf27_4_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_fix[i11][0] = Leaf27_4_Port94_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port94_fix[i11].includes("K")){
                Leaf27_4_Port94_fix[i11] =    Leaf27_4_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_fix[i11][0] = Leaf27_4_Port94_fix[i11][0]*1000;}
            else {  Leaf27_4_Port94_fix[i11] =    Leaf27_4_Port94_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port94_iUpkts[i11].includes("G")){
                Leaf27_4_Port94_iUpkts[i11] =    Leaf27_4_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iUpkts[i11][0] = Leaf27_4_Port94_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_iUpkts[i11].includes("M")){
                Leaf27_4_Port94_iUpkts[i11] =    Leaf27_4_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iUpkts[i11][0] = Leaf27_4_Port94_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_iUpkts[i11].includes("K")){
                Leaf27_4_Port94_iUpkts[i11] =    Leaf27_4_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iUpkts[i11][0] = Leaf27_4_Port94_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_iUpkts[i11] =    Leaf27_4_Port94_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port94_iBpkts[i11].includes("G")){
                Leaf27_4_Port94_iBpkts[i11] =    Leaf27_4_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iBpkts[i11][0] = Leaf27_4_Port94_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_iBpkts[i11].includes("M")){
                Leaf27_4_Port94_iBpkts[i11] =    Leaf27_4_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iBpkts[i11][0] = Leaf27_4_Port94_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_iBpkts[i11].includes("K")){
                Leaf27_4_Port94_iBpkts[i11] =    Leaf27_4_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iBpkts[i11][0] = Leaf27_4_Port94_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_iBpkts[i11] =    Leaf27_4_Port94_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port94_iMpkts[i11].includes("G")){
                Leaf27_4_Port94_iMpkts[i11] =    Leaf27_4_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iMpkts[i11][0] = Leaf27_4_Port94_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_iMpkts[i11].includes("M")){
                Leaf27_4_Port94_iMpkts[i11] =    Leaf27_4_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iMpkts[i11][0] = Leaf27_4_Port94_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_iMpkts[i11].includes("K")){
                Leaf27_4_Port94_iMpkts[i11] =    Leaf27_4_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iMpkts[i11][0] = Leaf27_4_Port94_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_iMpkts[i11] =    Leaf27_4_Port94_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port94_iCongDrops[i11].includes("G")){
                Leaf27_4_Port94_iCongDrops[i11] =    Leaf27_4_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iCongDrops[i11][0] = Leaf27_4_Port94_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_iCongDrops[i11].includes("M")){
                Leaf27_4_Port94_iCongDrops[i11] =    Leaf27_4_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iCongDrops[i11][0] = Leaf27_4_Port94_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port94_iCongDrops[i11].includes("K")){
                Leaf27_4_Port94_iCongDrops[i11] =    Leaf27_4_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_iCongDrops[i11][0] = Leaf27_4_Port94_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port94_iCongDrops[i11] =    Leaf27_4_Port94_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port94_ierrs[i11].includes("G")){
                Leaf27_4_Port94_ierrs[i11] =    Leaf27_4_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_ierrs[i11][0] = Leaf27_4_Port94_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_ierrs[i11].includes("M")){
                Leaf27_4_Port94_ierrs[i11] =    Leaf27_4_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_ierrs[i11][0] = Leaf27_4_Port94_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port94_ierrs[i11].includes("K")){
                Leaf27_4_Port94_ierrs[i11] =    Leaf27_4_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_ierrs[i11][0] = Leaf27_4_Port94_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port94_ierrs[i11] =    Leaf27_4_Port94_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port94_obytes[i11].includes("G")){
                Leaf27_4_Port94_obytes[i11] =    Leaf27_4_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_obytes[i11][0] = Leaf27_4_Port94_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_obytes[i11].includes("M")){
                Leaf27_4_Port94_obytes[i11] =    Leaf27_4_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_obytes[i11][0] = Leaf27_4_Port94_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port94_obytes[i11].includes("K")){
                Leaf27_4_Port94_obytes[i11] =    Leaf27_4_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_obytes[i11][0] = Leaf27_4_Port94_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port94_obytes[i11] =    Leaf27_4_Port94_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port94_oUpkts[i11].includes("G")){
                Leaf27_4_Port94_oUpkts[i11] =    Leaf27_4_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oUpkts[i11][0] = Leaf27_4_Port94_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_oUpkts[i11].includes("M")){
                Leaf27_4_Port94_oUpkts[i11] =    Leaf27_4_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oUpkts[i11][0] = Leaf27_4_Port94_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_oUpkts[i11].includes("K")){
                Leaf27_4_Port94_oUpkts[i11] =    Leaf27_4_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oUpkts[i11][0] = Leaf27_4_Port94_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_oUpkts[i11] =    Leaf27_4_Port94_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port94_oBpkts[i11].includes("G")){
                Leaf27_4_Port94_oBpkts[i11] =    Leaf27_4_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oBpkts[i11][0] = Leaf27_4_Port94_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_oBpkts[i11].includes("M")){
                Leaf27_4_Port94_oBpkts[i11] =    Leaf27_4_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oBpkts[i11][0] = Leaf27_4_Port94_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_oBpkts[i11].includes("K")){
                Leaf27_4_Port94_oBpkts[i11] =    Leaf27_4_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oBpkts[i11][0] = Leaf27_4_Port94_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_oBpkts[i11] =    Leaf27_4_Port94_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port94_oMpkts[i11].includes("G")){
                Leaf27_4_Port94_oMpkts[i11] =    Leaf27_4_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oMpkts[i11][0] = Leaf27_4_Port94_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_oMpkts[i11].includes("M")){
                Leaf27_4_Port94_oMpkts[i11] =    Leaf27_4_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oMpkts[i11][0] = Leaf27_4_Port94_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port94_oMpkts[i11].includes("K")){
                Leaf27_4_Port94_oMpkts[i11] =    Leaf27_4_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oMpkts[i11][0] = Leaf27_4_Port94_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port94_oMpkts[i11] =    Leaf27_4_Port94_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port94_oCongDrops[i11].includes("G")){
                Leaf27_4_Port94_oCongDrops[i11] =    Leaf27_4_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oCongDrops[i11][0] = Leaf27_4_Port94_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_oCongDrops[i11].includes("M")){
                Leaf27_4_Port94_oCongDrops[i11] =    Leaf27_4_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oCongDrops[i11][0] = Leaf27_4_Port94_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port94_oCongDrops[i11].includes("K")){
                Leaf27_4_Port94_oCongDrops[i11] =    Leaf27_4_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oCongDrops[i11][0] = Leaf27_4_Port94_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port94_oCongDrops[i11] =    Leaf27_4_Port94_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port94_oerrs[i11].includes("G")){
                Leaf27_4_Port94_oerrs[i11] =    Leaf27_4_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oerrs[i11][0] = Leaf27_4_Port94_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_oerrs[i11].includes("M")){
                Leaf27_4_Port94_oerrs[i11] =    Leaf27_4_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oerrs[i11][0] = Leaf27_4_Port94_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port94_oerrs[i11].includes("K")){
                Leaf27_4_Port94_oerrs[i11] =    Leaf27_4_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_oerrs[i11][0] = Leaf27_4_Port94_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port94_oerrs[i11] =    Leaf27_4_Port94_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port94_mtu_errs[i11].includes("G")){
                Leaf27_4_Port94_mtu_errs[i11] =    Leaf27_4_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_mtu_errs[i11][0] = Leaf27_4_Port94_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port94_mtu_errs[i11].includes("M")){
                Leaf27_4_Port94_mtu_errs[i11] =    Leaf27_4_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_mtu_errs[i11][0] = Leaf27_4_Port94_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port94_mtu_errs[i11].includes("K")){
                Leaf27_4_Port94_mtu_errs[i11] =    Leaf27_4_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port94_mtu_errs[i11][0] = Leaf27_4_Port94_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port94_mtu_errs[i11] =    Leaf27_4_Port94_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
             }}
                
            if(Leaf27_4_Port95[i11] !== undefined){ 
                Leaf27_4_Port95_fix[i11] =        Leaf27_4_Port95[i11].slice(26, 34);
                Leaf27_4_Port95_iUpkts[i11] =     Leaf27_4_Port95[i11].slice(33,40);
                Leaf27_4_Port95_iBpkts[i11] =     Leaf27_4_Port95[i11].slice(40,47);
                Leaf27_4_Port95_iMpkts[i11] =     Leaf27_4_Port95[i11].slice(47,54);
                Leaf27_4_Port95_iCongDrops[i11] = Leaf27_4_Port95[i11].slice(54,65);
                Leaf27_4_Port95_ierrs[i11] =      Leaf27_4_Port95[i11].slice(65,71);
                Leaf27_4_Port95_obytes[i11] =     Leaf27_4_Port95[i11].slice(71,78);
                Leaf27_4_Port95_oUpkts[i11] =     Leaf27_4_Port95[i11].slice(78,85);
                Leaf27_4_Port95_oBpkts[i11] =     Leaf27_4_Port95[i11].slice(85,92);
                Leaf27_4_Port95_oMpkts[i11] =     Leaf27_4_Port95[i11].slice(92,99);
                Leaf27_4_Port95_oCongDrops[i11] = Leaf27_4_Port95[i11].slice(99,110);
                Leaf27_4_Port95_oerrs[i11] =      Leaf27_4_Port95[i11].slice(110,116);
                Leaf27_4_Port95_mtu_errs[i11] =   Leaf27_4_Port95[i11].slice(116,125);
            
            if( Leaf27_4_Port95_fix[i11].includes("G")){
                Leaf27_4_Port95_fix[i11] =    Leaf27_4_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_fix[i11][0] = Leaf27_4_Port95_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_fix[i11].includes("M")){
                Leaf27_4_Port95_fix[i11] =    Leaf27_4_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_fix[i11][0] = Leaf27_4_Port95_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port95_fix[i11].includes("K")){
                Leaf27_4_Port95_fix[i11] =    Leaf27_4_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_fix[i11][0] = Leaf27_4_Port95_fix[i11][0]*1000;}
            else {  Leaf27_4_Port95_fix[i11] =    Leaf27_4_Port95_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port95_iUpkts[i11].includes("G")){
                Leaf27_4_Port95_iUpkts[i11] =    Leaf27_4_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iUpkts[i11][0] = Leaf27_4_Port95_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_iUpkts[i11].includes("M")){
                Leaf27_4_Port95_iUpkts[i11] =    Leaf27_4_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iUpkts[i11][0] = Leaf27_4_Port95_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_iUpkts[i11].includes("K")){
                Leaf27_4_Port95_iUpkts[i11] =    Leaf27_4_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iUpkts[i11][0] = Leaf27_4_Port95_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_iUpkts[i11] =    Leaf27_4_Port95_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port95_iBpkts[i11].includes("G")){
                Leaf27_4_Port95_iBpkts[i11] =    Leaf27_4_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iBpkts[i11][0] = Leaf27_4_Port95_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_iBpkts[i11].includes("M")){
                Leaf27_4_Port95_iBpkts[i11] =    Leaf27_4_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iBpkts[i11][0] = Leaf27_4_Port95_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_iBpkts[i11].includes("K")){
                Leaf27_4_Port95_iBpkts[i11] =    Leaf27_4_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iBpkts[i11][0] = Leaf27_4_Port95_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_iBpkts[i11] =    Leaf27_4_Port95_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_iMpkts[i11].includes("G")){
                Leaf27_4_Port95_iMpkts[i11] =    Leaf27_4_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iMpkts[i11][0] = Leaf27_4_Port95_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_iMpkts[i11].includes("M")){
                Leaf27_4_Port95_iMpkts[i11] =    Leaf27_4_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iMpkts[i11][0] = Leaf27_4_Port95_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_iMpkts[i11].includes("K")){
                Leaf27_4_Port95_iMpkts[i11] =    Leaf27_4_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iMpkts[i11][0] = Leaf27_4_Port95_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_iMpkts[i11] =    Leaf27_4_Port95_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port95_iCongDrops[i11].includes("G")){
                Leaf27_4_Port95_iCongDrops[i11] =    Leaf27_4_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iCongDrops[i11][0] = Leaf27_4_Port95_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_iCongDrops[i11].includes("M")){
                Leaf27_4_Port95_iCongDrops[i11] =    Leaf27_4_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iCongDrops[i11][0] = Leaf27_4_Port95_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port95_iCongDrops[i11].includes("K")){
                Leaf27_4_Port95_iCongDrops[i11] =    Leaf27_4_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_iCongDrops[i11][0] = Leaf27_4_Port95_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port95_iCongDrops[i11] =    Leaf27_4_Port95_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port95_ierrs[i11].includes("G")){
                Leaf27_4_Port95_ierrs[i11] =    Leaf27_4_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_ierrs[i11][0] = Leaf27_4_Port95_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_ierrs[i11].includes("M")){
                Leaf27_4_Port95_ierrs[i11] =    Leaf27_4_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_ierrs[i11][0] = Leaf27_4_Port95_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port95_ierrs[i11].includes("K")){
                Leaf27_4_Port95_ierrs[i11] =    Leaf27_4_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_ierrs[i11][0] = Leaf27_4_Port95_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port95_ierrs[i11] =    Leaf27_4_Port95_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
             }
            
                if(Leaf27_4_Port95_obytes[i11].includes("G")){
                Leaf27_4_Port95_obytes[i11] =    Leaf27_4_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_obytes[i11][0] = Leaf27_4_Port95_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_obytes[i11].includes("M")){
                Leaf27_4_Port95_obytes[i11] =    Leaf27_4_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_obytes[i11][0] = Leaf27_4_Port95_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port95_obytes[i11].includes("K")){
                Leaf27_4_Port95_obytes[i11] =    Leaf27_4_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_obytes[i11][0] = Leaf27_4_Port95_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port95_obytes[i11] =    Leaf27_4_Port95_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_oUpkts[i11].includes("G")){
                Leaf27_4_Port95_oUpkts[i11] =    Leaf27_4_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oUpkts[i11][0] = Leaf27_4_Port95_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_oUpkts[i11].includes("M")){
                Leaf27_4_Port95_oUpkts[i11] =    Leaf27_4_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oUpkts[i11][0] = Leaf27_4_Port95_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_oUpkts[i11].includes("K")){
                Leaf27_4_Port95_oUpkts[i11] =    Leaf27_4_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oUpkts[i11][0] = Leaf27_4_Port95_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_oUpkts[i11] =    Leaf27_4_Port95_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_oBpkts[i11].includes("G")){
                Leaf27_4_Port95_oBpkts[i11] =    Leaf27_4_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oBpkts[i11][0] = Leaf27_4_Port95_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_oBpkts[i11].includes("M")){
                Leaf27_4_Port95_oBpkts[i11] =    Leaf27_4_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oBpkts[i11][0] = Leaf27_4_Port95_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_oBpkts[i11].includes("K")){
                Leaf27_4_Port95_oBpkts[i11] =    Leaf27_4_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oBpkts[i11][0] = Leaf27_4_Port95_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_oBpkts[i11] =    Leaf27_4_Port95_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_oMpkts[i11].includes("G")){
                Leaf27_4_Port95_oMpkts[i11] =    Leaf27_4_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oMpkts[i11][0] = Leaf27_4_Port95_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_oMpkts[i11].includes("M")){
                Leaf27_4_Port95_oMpkts[i11] =    Leaf27_4_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oMpkts[i11][0] = Leaf27_4_Port95_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port95_oMpkts[i11].includes("K")){
                Leaf27_4_Port95_oMpkts[i11] =    Leaf27_4_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oMpkts[i11][0] = Leaf27_4_Port95_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port95_oMpkts[i11] =    Leaf27_4_Port95_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
             }
            
                if(Leaf27_4_Port95_oCongDrops[i11].includes("G")){
                Leaf27_4_Port95_oCongDrops[i11] =    Leaf27_4_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oCongDrops[i11][0] = Leaf27_4_Port95_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_oCongDrops[i11].includes("M")){
                Leaf27_4_Port95_oCongDrops[i11] =    Leaf27_4_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oCongDrops[i11][0] = Leaf27_4_Port95_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port95_oCongDrops[i11].includes("K")){
                Leaf27_4_Port95_oCongDrops[i11] =    Leaf27_4_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oCongDrops[i11][0] = Leaf27_4_Port95_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port95_oCongDrops[i11] =    Leaf27_4_Port95_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_oerrs[i11].includes("G")){
                Leaf27_4_Port95_oerrs[i11] =    Leaf27_4_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oerrs[i11][0] = Leaf27_4_Port95_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_oerrs[i11].includes("M")){
                Leaf27_4_Port95_oerrs[i11] =    Leaf27_4_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oerrs[i11][0] = Leaf27_4_Port95_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port95_oerrs[i11].includes("K")){
                Leaf27_4_Port95_oerrs[i11] =    Leaf27_4_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_oerrs[i11][0] = Leaf27_4_Port95_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port95_oerrs[i11] =    Leaf27_4_Port95_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port95_mtu_errs[i11].includes("G")){
                Leaf27_4_Port95_mtu_errs[i11] =    Leaf27_4_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_mtu_errs[i11][0] = Leaf27_4_Port95_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port95_mtu_errs[i11].includes("M")){
                Leaf27_4_Port95_mtu_errs[i11] =    Leaf27_4_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_mtu_errs[i11][0] = Leaf27_4_Port95_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port95_mtu_errs[i11].includes("K")){
                Leaf27_4_Port95_mtu_errs[i11] =    Leaf27_4_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port95_mtu_errs[i11][0] = Leaf27_4_Port95_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port95_mtu_errs[i11] =    Leaf27_4_Port95_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }}            
            
            if(Leaf27_4_Port96[i11] !== undefined){ 
                Leaf27_4_Port96_fix[i11] =        Leaf27_4_Port96[i11].slice(26, 34);
                Leaf27_4_Port96_iUpkts[i11] =     Leaf27_4_Port96[i11].slice(33,40);
                Leaf27_4_Port96_iBpkts[i11] =     Leaf27_4_Port96[i11].slice(40,47);
                Leaf27_4_Port96_iMpkts[i11] =     Leaf27_4_Port96[i11].slice(47,54);
                Leaf27_4_Port96_iCongDrops[i11] = Leaf27_4_Port96[i11].slice(54,65);
                Leaf27_4_Port96_ierrs[i11] =      Leaf27_4_Port96[i11].slice(65,71);
                Leaf27_4_Port96_obytes[i11] =     Leaf27_4_Port96[i11].slice(71,78);
                Leaf27_4_Port96_oUpkts[i11] =     Leaf27_4_Port96[i11].slice(78,85);
                Leaf27_4_Port96_oBpkts[i11] =     Leaf27_4_Port96[i11].slice(85,92);
                Leaf27_4_Port96_oMpkts[i11] =     Leaf27_4_Port96[i11].slice(92,99);
                Leaf27_4_Port96_oCongDrops[i11] = Leaf27_4_Port96[i11].slice(99,110);
                Leaf27_4_Port96_oerrs[i11] =      Leaf27_4_Port96[i11].slice(110,116);
                Leaf27_4_Port96_mtu_errs[i11] =   Leaf27_4_Port96[i11].slice(116,125);
            
            if( Leaf27_4_Port96_fix[i11].includes("G")){
                Leaf27_4_Port96_fix[i11] =    Leaf27_4_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_fix[i11][0] = Leaf27_4_Port96_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_fix[i11].includes("M")){
                Leaf27_4_Port96_fix[i11] =    Leaf27_4_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_fix[i11][0] = Leaf27_4_Port96_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port96_fix[i11].includes("K")){
                Leaf27_4_Port96_fix[i11] =    Leaf27_4_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_fix[i11][0] = Leaf27_4_Port96_fix[i11][0]*1000;}
            else {  Leaf27_4_Port96_fix[i11] =    Leaf27_4_Port96_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port96_iUpkts[i11].includes("G")){
                Leaf27_4_Port96_iUpkts[i11] =    Leaf27_4_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iUpkts[i11][0] = Leaf27_4_Port96_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_iUpkts[i11].includes("M")){
                Leaf27_4_Port96_iUpkts[i11] =    Leaf27_4_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iUpkts[i11][0] = Leaf27_4_Port96_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_iUpkts[i11].includes("K")){
                Leaf27_4_Port96_iUpkts[i11] =    Leaf27_4_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iUpkts[i11][0] = Leaf27_4_Port96_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_iUpkts[i11] =    Leaf27_4_Port96_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port96_iBpkts[i11].includes("G")){
                Leaf27_4_Port96_iBpkts[i11] =    Leaf27_4_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iBpkts[i11][0] = Leaf27_4_Port96_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_iBpkts[i11].includes("M")){
                Leaf27_4_Port96_iBpkts[i11] =    Leaf27_4_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iBpkts[i11][0] = Leaf27_4_Port96_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_iBpkts[i11].includes("K")){
                Leaf27_4_Port96_iBpkts[i11] =    Leaf27_4_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iBpkts[i11][0] = Leaf27_4_Port96_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_iBpkts[i11] =    Leaf27_4_Port96_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
             }
            
                if(Leaf27_4_Port96_iMpkts[i11].includes("G")){
                Leaf27_4_Port96_iMpkts[i11] =    Leaf27_4_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iMpkts[i11][0] = Leaf27_4_Port96_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_iMpkts[i11].includes("M")){
                Leaf27_4_Port96_iMpkts[i11] =    Leaf27_4_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iMpkts[i11][0] = Leaf27_4_Port96_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_iMpkts[i11].includes("K")){
                Leaf27_4_Port96_iMpkts[i11] =    Leaf27_4_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iMpkts[i11][0] = Leaf27_4_Port96_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_iMpkts[i11] =    Leaf27_4_Port96_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_iCongDrops[i11].includes("G")){
                Leaf27_4_Port96_iCongDrops[i11] =    Leaf27_4_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iCongDrops[i11][0] = Leaf27_4_Port96_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_iCongDrops[i11].includes("M")){
                Leaf27_4_Port96_iCongDrops[i11] =    Leaf27_4_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iCongDrops[i11][0] = Leaf27_4_Port96_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port96_iCongDrops[i11].includes("K")){
                Leaf27_4_Port96_iCongDrops[i11] =    Leaf27_4_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_iCongDrops[i11][0] = Leaf27_4_Port96_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port96_iCongDrops[i11] =    Leaf27_4_Port96_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port96_ierrs[i11].includes("G")){
                Leaf27_4_Port96_ierrs[i11] =    Leaf27_4_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_ierrs[i11][0] = Leaf27_4_Port96_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_ierrs[i11].includes("M")){
                Leaf27_4_Port96_ierrs[i11] =    Leaf27_4_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_ierrs[i11][0] = Leaf27_4_Port96_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port96_ierrs[i11].includes("K")){
                Leaf27_4_Port96_ierrs[i11] =    Leaf27_4_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_ierrs[i11][0] = Leaf27_4_Port96_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port96_ierrs[i11] =    Leaf27_4_Port96_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_obytes[i11].includes("G")){
                Leaf27_4_Port96_obytes[i11] =    Leaf27_4_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_obytes[i11][0] = Leaf27_4_Port96_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_obytes[i11].includes("M")){
                Leaf27_4_Port96_obytes[i11] =    Leaf27_4_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_obytes[i11][0] = Leaf27_4_Port96_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port96_obytes[i11].includes("K")){
                Leaf27_4_Port96_obytes[i11] =    Leaf27_4_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_obytes[i11][0] = Leaf27_4_Port96_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port96_obytes[i11] =    Leaf27_4_Port96_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_oUpkts[i11].includes("G")){
                Leaf27_4_Port96_oUpkts[i11] =    Leaf27_4_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oUpkts[i11][0] = Leaf27_4_Port96_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_oUpkts[i11].includes("M")){
                Leaf27_4_Port96_oUpkts[i11] =    Leaf27_4_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oUpkts[i11][0] = Leaf27_4_Port96_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_oUpkts[i11].includes("K")){
                Leaf27_4_Port96_oUpkts[i11] =    Leaf27_4_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oUpkts[i11][0] = Leaf27_4_Port96_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_oUpkts[i11] =    Leaf27_4_Port96_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_oBpkts[i11].includes("G")){
                Leaf27_4_Port96_oBpkts[i11] =    Leaf27_4_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oBpkts[i11][0] = Leaf27_4_Port96_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_oBpkts[i11].includes("M")){
                Leaf27_4_Port96_oBpkts[i11] =    Leaf27_4_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oBpkts[i11][0] = Leaf27_4_Port96_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_oBpkts[i11].includes("K")){
                Leaf27_4_Port96_oBpkts[i11] =    Leaf27_4_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oBpkts[i11][0] = Leaf27_4_Port96_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_oBpkts[i11] =    Leaf27_4_Port96_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_oMpkts[i11].includes("G")){
                Leaf27_4_Port96_oMpkts[i11] =    Leaf27_4_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oMpkts[i11][0] = Leaf27_4_Port96_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_oMpkts[i11].includes("M")){
                Leaf27_4_Port96_oMpkts[i11] =    Leaf27_4_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oMpkts[i11][0] = Leaf27_4_Port96_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port96_oMpkts[i11].includes("K")){
                Leaf27_4_Port96_oMpkts[i11] =    Leaf27_4_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oMpkts[i11][0] = Leaf27_4_Port96_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port96_oMpkts[i11] =    Leaf27_4_Port96_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_oCongDrops[i11].includes("G")){
                Leaf27_4_Port96_oCongDrops[i11] =    Leaf27_4_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oCongDrops[i11][0] = Leaf27_4_Port96_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_oCongDrops[i11].includes("M")){
                Leaf27_4_Port96_oCongDrops[i11] =    Leaf27_4_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oCongDrops[i11][0] = Leaf27_4_Port96_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port96_oCongDrops[i11].includes("K")){
                Leaf27_4_Port96_oCongDrops[i11] =    Leaf27_4_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oCongDrops[i11][0] = Leaf27_4_Port96_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port96_oCongDrops[i11] =    Leaf27_4_Port96_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_oerrs[i11].includes("G")){
                Leaf27_4_Port96_oerrs[i11] =    Leaf27_4_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oerrs[i11][0] = Leaf27_4_Port96_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_oerrs[i11].includes("M")){
                Leaf27_4_Port96_oerrs[i11] =    Leaf27_4_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oerrs[i11][0] = Leaf27_4_Port96_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port96_oerrs[i11].includes("K")){
                Leaf27_4_Port96_oerrs[i11] =    Leaf27_4_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_oerrs[i11][0] = Leaf27_4_Port96_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port96_oerrs[i11] =    Leaf27_4_Port96_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port96_mtu_errs[i11].includes("G")){
                Leaf27_4_Port96_mtu_errs[i11] =    Leaf27_4_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_mtu_errs[i11][0] = Leaf27_4_Port96_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port96_mtu_errs[i11].includes("M")){
                Leaf27_4_Port96_mtu_errs[i11] =    Leaf27_4_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_mtu_errs[i11][0] = Leaf27_4_Port96_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port96_mtu_errs[i11].includes("K")){
                Leaf27_4_Port96_mtu_errs[i11] =    Leaf27_4_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port96_mtu_errs[i11][0] = Leaf27_4_Port96_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port96_mtu_errs[i11] =    Leaf27_4_Port96_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}
            
            if(Leaf27_4_Port97[i11] !== undefined){ 
                Leaf27_4_Port97_fix[i11] =        Leaf27_4_Port97[i11].slice(26, 34);
                Leaf27_4_Port97_iUpkts[i11] =     Leaf27_4_Port97[i11].slice(33,40);
                Leaf27_4_Port97_iBpkts[i11] =     Leaf27_4_Port97[i11].slice(40,47);
                Leaf27_4_Port97_iMpkts[i11] =     Leaf27_4_Port97[i11].slice(47,54);
                Leaf27_4_Port97_iCongDrops[i11] = Leaf27_4_Port97[i11].slice(54,65);
                Leaf27_4_Port97_ierrs[i11] =      Leaf27_4_Port97[i11].slice(65,71);
                Leaf27_4_Port97_obytes[i11] =     Leaf27_4_Port97[i11].slice(71,78);
                Leaf27_4_Port97_oUpkts[i11] =     Leaf27_4_Port97[i11].slice(78,85);
                Leaf27_4_Port97_oBpkts[i11] =     Leaf27_4_Port97[i11].slice(85,92);
                Leaf27_4_Port97_oMpkts[i11] =     Leaf27_4_Port97[i11].slice(92,99);
                Leaf27_4_Port97_oCongDrops[i11] = Leaf27_4_Port97[i11].slice(99,110);
                Leaf27_4_Port97_oerrs[i11] =      Leaf27_4_Port97[i11].slice(110,116);
                Leaf27_4_Port97_mtu_errs[i11] =   Leaf27_4_Port97[i11].slice(116,125);
            
            if( Leaf27_4_Port97_fix[i11].includes("G")){
                Leaf27_4_Port97_fix[i11] =    Leaf27_4_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_fix[i11][0] = Leaf27_4_Port97_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_fix[i11].includes("M")){
                Leaf27_4_Port97_fix[i11] =    Leaf27_4_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_fix[i11][0] = Leaf27_4_Port97_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port97_fix[i11].includes("K")){
                Leaf27_4_Port97_fix[i11] =    Leaf27_4_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_fix[i11][0] = Leaf27_4_Port97_fix[i11][0]*1000;}
            else {  Leaf27_4_Port97_fix[i11] =    Leaf27_4_Port97_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port97_iUpkts[i11].includes("G")){
                Leaf27_4_Port97_iUpkts[i11] =    Leaf27_4_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iUpkts[i11][0] = Leaf27_4_Port97_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_iUpkts[i11].includes("M")){
                Leaf27_4_Port97_iUpkts[i11] =    Leaf27_4_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iUpkts[i11][0] = Leaf27_4_Port97_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_iUpkts[i11].includes("K")){
                Leaf27_4_Port97_iUpkts[i11] =    Leaf27_4_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iUpkts[i11][0] = Leaf27_4_Port97_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_iUpkts[i11] =    Leaf27_4_Port97_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_iBpkts[i11].includes("G")){
                Leaf27_4_Port97_iBpkts[i11] =    Leaf27_4_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iBpkts[i11][0] = Leaf27_4_Port97_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_iBpkts[i11].includes("M")){
                Leaf27_4_Port97_iBpkts[i11] =    Leaf27_4_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iBpkts[i11][0] = Leaf27_4_Port97_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_iBpkts[i11].includes("K")){
                Leaf27_4_Port97_iBpkts[i11] =    Leaf27_4_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iBpkts[i11][0] = Leaf27_4_Port97_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_iBpkts[i11] =    Leaf27_4_Port97_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port97_iMpkts[i11].includes("G")){
                Leaf27_4_Port97_iMpkts[i11] =    Leaf27_4_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iMpkts[i11][0] = Leaf27_4_Port97_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_iMpkts[i11].includes("M")){
                Leaf27_4_Port97_iMpkts[i11] =    Leaf27_4_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iMpkts[i11][0] = Leaf27_4_Port97_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_iMpkts[i11].includes("K")){
                Leaf27_4_Port97_iMpkts[i11] =    Leaf27_4_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iMpkts[i11][0] = Leaf27_4_Port97_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_iMpkts[i11] =    Leaf27_4_Port97_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_iCongDrops[i11].includes("G")){
                Leaf27_4_Port97_iCongDrops[i11] =    Leaf27_4_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iCongDrops[i11][0] = Leaf27_4_Port97_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_iCongDrops[i11].includes("M")){
                Leaf27_4_Port97_iCongDrops[i11] =    Leaf27_4_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iCongDrops[i11][0] = Leaf27_4_Port97_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port97_iCongDrops[i11].includes("K")){
                Leaf27_4_Port97_iCongDrops[i11] =    Leaf27_4_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_iCongDrops[i11][0] = Leaf27_4_Port97_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port97_iCongDrops[i11] =    Leaf27_4_Port97_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port97_ierrs[i11].includes("G")){
                Leaf27_4_Port97_ierrs[i11] =    Leaf27_4_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_ierrs[i11][0] = Leaf27_4_Port97_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_ierrs[i11].includes("M")){
                Leaf27_4_Port97_ierrs[i11] =    Leaf27_4_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_ierrs[i11][0] = Leaf27_4_Port97_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port97_ierrs[i11].includes("K")){
                Leaf27_4_Port97_ierrs[i11] =    Leaf27_4_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_ierrs[i11][0] = Leaf27_4_Port97_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port97_ierrs[i11] =    Leaf27_4_Port97_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_obytes[i11].includes("G")){
                Leaf27_4_Port97_obytes[i11] =    Leaf27_4_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_obytes[i11][0] = Leaf27_4_Port97_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_obytes[i11].includes("M")){
                Leaf27_4_Port97_obytes[i11] =    Leaf27_4_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_obytes[i11][0] = Leaf27_4_Port97_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port97_obytes[i11].includes("K")){
                Leaf27_4_Port97_obytes[i11] =    Leaf27_4_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_obytes[i11][0] = Leaf27_4_Port97_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port97_obytes[i11] =    Leaf27_4_Port97_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_oUpkts[i11].includes("G")){
                Leaf27_4_Port97_oUpkts[i11] =    Leaf27_4_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oUpkts[i11][0] = Leaf27_4_Port97_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_oUpkts[i11].includes("M")){
                Leaf27_4_Port97_oUpkts[i11] =    Leaf27_4_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oUpkts[i11][0] = Leaf27_4_Port97_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_oUpkts[i11].includes("K")){
                Leaf27_4_Port97_oUpkts[i11] =    Leaf27_4_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oUpkts[i11][0] = Leaf27_4_Port97_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_oUpkts[i11] =    Leaf27_4_Port97_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_oBpkts[i11].includes("G")){
                Leaf27_4_Port97_oBpkts[i11] =    Leaf27_4_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oBpkts[i11][0] = Leaf27_4_Port97_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_oBpkts[i11].includes("M")){
                Leaf27_4_Port97_oBpkts[i11] =    Leaf27_4_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oBpkts[i11][0] = Leaf27_4_Port97_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_oBpkts[i11].includes("K")){
                Leaf27_4_Port97_oBpkts[i11] =    Leaf27_4_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oBpkts[i11][0] = Leaf27_4_Port97_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_oBpkts[i11] =    Leaf27_4_Port97_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port97_oMpkts[i11].includes("G")){
                Leaf27_4_Port97_oMpkts[i11] =    Leaf27_4_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oMpkts[i11][0] = Leaf27_4_Port97_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_oMpkts[i11].includes("M")){
                Leaf27_4_Port97_oMpkts[i11] =    Leaf27_4_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oMpkts[i11][0] = Leaf27_4_Port97_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port97_oMpkts[i11].includes("K")){
                Leaf27_4_Port97_oMpkts[i11] =    Leaf27_4_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oMpkts[i11][0] = Leaf27_4_Port97_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port97_oMpkts[i11] =    Leaf27_4_Port97_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port97_oCongDrops[i11].includes("G")){
                Leaf27_4_Port97_oCongDrops[i11] =    Leaf27_4_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oCongDrops[i11][0] = Leaf27_4_Port97_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_oCongDrops[i11].includes("M")){
                Leaf27_4_Port97_oCongDrops[i11] =    Leaf27_4_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oCongDrops[i11][0] = Leaf27_4_Port97_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port97_oCongDrops[i11].includes("K")){
                Leaf27_4_Port97_oCongDrops[i11] =    Leaf27_4_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oCongDrops[i11][0] = Leaf27_4_Port97_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port97_oCongDrops[i11] =    Leaf27_4_Port97_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_oerrs[i11].includes("G")){
                Leaf27_4_Port97_oerrs[i11] =    Leaf27_4_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oerrs[i11][0] = Leaf27_4_Port97_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_oerrs[i11].includes("M")){
                Leaf27_4_Port97_oerrs[i11] =    Leaf27_4_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oerrs[i11][0] = Leaf27_4_Port97_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port97_oerrs[i11].includes("K")){
                Leaf27_4_Port97_oerrs[i11] =    Leaf27_4_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_oerrs[i11][0] = Leaf27_4_Port97_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port97_oerrs[i11] =    Leaf27_4_Port97_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port97_mtu_errs[i11].includes("G")){
                Leaf27_4_Port97_mtu_errs[i11] =    Leaf27_4_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_mtu_errs[i11][0] = Leaf27_4_Port97_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port97_mtu_errs[i11].includes("M")){
                Leaf27_4_Port97_mtu_errs[i11] =    Leaf27_4_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_mtu_errs[i11][0] = Leaf27_4_Port97_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port97_mtu_errs[i11].includes("K")){
                Leaf27_4_Port97_mtu_errs[i11] =    Leaf27_4_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port97_mtu_errs[i11][0] = Leaf27_4_Port97_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port97_mtu_errs[i11] =    Leaf27_4_Port97_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}
            
            if(Leaf27_4_Port98[i11] !== undefined){ 
                Leaf27_4_Port98_fix[i11] =        Leaf27_4_Port98[i11].slice(26, 34);
                Leaf27_4_Port98_iUpkts[i11] =     Leaf27_4_Port98[i11].slice(33,40);
                Leaf27_4_Port98_iBpkts[i11] =     Leaf27_4_Port98[i11].slice(40,47);
                Leaf27_4_Port98_iMpkts[i11] =     Leaf27_4_Port98[i11].slice(47,54);
                Leaf27_4_Port98_iCongDrops[i11] = Leaf27_4_Port98[i11].slice(54,65);
                Leaf27_4_Port98_ierrs[i11] =      Leaf27_4_Port98[i11].slice(65,71);
                Leaf27_4_Port98_obytes[i11] =     Leaf27_4_Port98[i11].slice(71,78);
                Leaf27_4_Port98_oUpkts[i11] =     Leaf27_4_Port98[i11].slice(78,85);
                Leaf27_4_Port98_oBpkts[i11] =     Leaf27_4_Port98[i11].slice(85,92);
                Leaf27_4_Port98_oMpkts[i11] =     Leaf27_4_Port98[i11].slice(92,99);
                Leaf27_4_Port98_oCongDrops[i11] = Leaf27_4_Port98[i11].slice(99,110);
                Leaf27_4_Port98_oerrs[i11] =      Leaf27_4_Port98[i11].slice(110,116);
                Leaf27_4_Port98_mtu_errs[i11] =   Leaf27_4_Port98[i11].slice(116,125);
            
            if( Leaf27_4_Port98_fix[i11].includes("G")){
                Leaf27_4_Port98_fix[i11] =    Leaf27_4_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_fix[i11][0] = Leaf27_4_Port98_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_fix[i11].includes("M")){
                Leaf27_4_Port98_fix[i11] =    Leaf27_4_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_fix[i11][0] = Leaf27_4_Port98_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port98_fix[i11].includes("K")){
                Leaf27_4_Port98_fix[i11] =    Leaf27_4_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_fix[i11][0] = Leaf27_4_Port98_fix[i11][0]*1000;}
            else {  Leaf27_4_Port98_fix[i11] =    Leaf27_4_Port98_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port98_iUpkts[i11].includes("G")){
                Leaf27_4_Port98_iUpkts[i11] =    Leaf27_4_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iUpkts[i11][0] = Leaf27_4_Port98_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_iUpkts[i11].includes("M")){
                Leaf27_4_Port98_iUpkts[i11] =    Leaf27_4_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iUpkts[i11][0] = Leaf27_4_Port98_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_iUpkts[i11].includes("K")){
                Leaf27_4_Port98_iUpkts[i11] =    Leaf27_4_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iUpkts[i11][0] = Leaf27_4_Port98_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_iUpkts[i11] =    Leaf27_4_Port98_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port98_iBpkts[i11].includes("G")){
                Leaf27_4_Port98_iBpkts[i11] =    Leaf27_4_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iBpkts[i11][0] = Leaf27_4_Port98_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_iBpkts[i11].includes("M")){
                Leaf27_4_Port98_iBpkts[i11] =    Leaf27_4_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iBpkts[i11][0] = Leaf27_4_Port98_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_iBpkts[i11].includes("K")){
                Leaf27_4_Port98_iBpkts[i11] =    Leaf27_4_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iBpkts[i11][0] = Leaf27_4_Port98_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_iBpkts[i11] =    Leaf27_4_Port98_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port98_iMpkts[i11].includes("G")){
                Leaf27_4_Port98_iMpkts[i11] =    Leaf27_4_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iMpkts[i11][0] = Leaf27_4_Port98_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_iMpkts[i11].includes("M")){
                Leaf27_4_Port98_iMpkts[i11] =    Leaf27_4_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iMpkts[i11][0] = Leaf27_4_Port98_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_iMpkts[i11].includes("K")){
                Leaf27_4_Port98_iMpkts[i11] =    Leaf27_4_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iMpkts[i11][0] = Leaf27_4_Port98_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_iMpkts[i11] =    Leaf27_4_Port98_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_iCongDrops[i11].includes("G")){
                Leaf27_4_Port98_iCongDrops[i11] =    Leaf27_4_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iCongDrops[i11][0] = Leaf27_4_Port98_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_iCongDrops[i11].includes("M")){
                Leaf27_4_Port98_iCongDrops[i11] =    Leaf27_4_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iCongDrops[i11][0] = Leaf27_4_Port98_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port98_iCongDrops[i11].includes("K")){
                Leaf27_4_Port98_iCongDrops[i11] =    Leaf27_4_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_iCongDrops[i11][0] = Leaf27_4_Port98_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port98_iCongDrops[i11] =    Leaf27_4_Port98_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port98_ierrs[i11].includes("G")){
                Leaf27_4_Port98_ierrs[i11] =    Leaf27_4_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_ierrs[i11][0] = Leaf27_4_Port98_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_ierrs[i11].includes("M")){
                Leaf27_4_Port98_ierrs[i11] =    Leaf27_4_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_ierrs[i11][0] = Leaf27_4_Port98_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port98_ierrs[i11].includes("K")){
                Leaf27_4_Port98_ierrs[i11] =    Leaf27_4_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_ierrs[i11][0] = Leaf27_4_Port98_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port98_ierrs[i11] =    Leaf27_4_Port98_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_obytes[i11].includes("G")){
                Leaf27_4_Port98_obytes[i11] =    Leaf27_4_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_obytes[i11][0] = Leaf27_4_Port98_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_obytes[i11].includes("M")){
                Leaf27_4_Port98_obytes[i11] =    Leaf27_4_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_obytes[i11][0] = Leaf27_4_Port98_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port98_obytes[i11].includes("K")){
                Leaf27_4_Port98_obytes[i11] =    Leaf27_4_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_obytes[i11][0] = Leaf27_4_Port98_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port98_obytes[i11] =    Leaf27_4_Port98_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_oUpkts[i11].includes("G")){
                Leaf27_4_Port98_oUpkts[i11] =    Leaf27_4_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oUpkts[i11][0] = Leaf27_4_Port98_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_oUpkts[i11].includes("M")){
                Leaf27_4_Port98_oUpkts[i11] =    Leaf27_4_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oUpkts[i11][0] = Leaf27_4_Port98_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_oUpkts[i11].includes("K")){
                Leaf27_4_Port98_oUpkts[i11] =    Leaf27_4_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oUpkts[i11][0] = Leaf27_4_Port98_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_oUpkts[i11] =    Leaf27_4_Port98_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port98_oBpkts[i11].includes("G")){
                Leaf27_4_Port98_oBpkts[i11] =    Leaf27_4_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oBpkts[i11][0] = Leaf27_4_Port98_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_oBpkts[i11].includes("M")){
                Leaf27_4_Port98_oBpkts[i11] =    Leaf27_4_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oBpkts[i11][0] = Leaf27_4_Port98_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_oBpkts[i11].includes("K")){
                Leaf27_4_Port98_oBpkts[i11] =    Leaf27_4_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oBpkts[i11][0] = Leaf27_4_Port98_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_oBpkts[i11] =    Leaf27_4_Port98_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_oMpkts[i11].includes("G")){
                Leaf27_4_Port98_oMpkts[i11] =    Leaf27_4_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oMpkts[i11][0] = Leaf27_4_Port98_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_oMpkts[i11].includes("M")){
                Leaf27_4_Port98_oMpkts[i11] =    Leaf27_4_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oMpkts[i11][0] = Leaf27_4_Port98_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port98_oMpkts[i11].includes("K")){
                Leaf27_4_Port98_oMpkts[i11] =    Leaf27_4_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oMpkts[i11][0] = Leaf27_4_Port98_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port98_oMpkts[i11] =    Leaf27_4_Port98_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_oCongDrops[i11].includes("G")){
                Leaf27_4_Port98_oCongDrops[i11] =    Leaf27_4_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oCongDrops[i11][0] = Leaf27_4_Port98_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_oCongDrops[i11].includes("M")){
                Leaf27_4_Port98_oCongDrops[i11] =    Leaf27_4_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oCongDrops[i11][0] = Leaf27_4_Port98_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port98_oCongDrops[i11].includes("K")){
                Leaf27_4_Port98_oCongDrops[i11] =    Leaf27_4_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oCongDrops[i11][0] = Leaf27_4_Port98_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port98_oCongDrops[i11] =    Leaf27_4_Port98_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_oerrs[i11].includes("G")){
                Leaf27_4_Port98_oerrs[i11] =    Leaf27_4_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oerrs[i11][0] = Leaf27_4_Port98_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_oerrs[i11].includes("M")){
                Leaf27_4_Port98_oerrs[i11] =    Leaf27_4_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oerrs[i11][0] = Leaf27_4_Port98_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port98_oerrs[i11].includes("K")){
                Leaf27_4_Port98_oerrs[i11] =    Leaf27_4_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_oerrs[i11][0] = Leaf27_4_Port98_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port98_oerrs[i11] =    Leaf27_4_Port98_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port98_mtu_errs[i11].includes("G")){
                Leaf27_4_Port98_mtu_errs[i11] =    Leaf27_4_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_mtu_errs[i11][0] = Leaf27_4_Port98_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port98_mtu_errs[i11].includes("M")){
                Leaf27_4_Port98_mtu_errs[i11] =    Leaf27_4_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_mtu_errs[i11][0] = Leaf27_4_Port98_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port98_mtu_errs[i11].includes("K")){
                Leaf27_4_Port98_mtu_errs[i11] =    Leaf27_4_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port98_mtu_errs[i11][0] = Leaf27_4_Port98_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port98_mtu_errs[i11] =    Leaf27_4_Port98_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }}
            
            if(Leaf27_4_Port99[i11] !== undefined){ 
                Leaf27_4_Port99_fix[i11] =        Leaf27_4_Port99[i11].slice(26, 34);
                Leaf27_4_Port99_iUpkts[i11] =     Leaf27_4_Port99[i11].slice(33,40);
                Leaf27_4_Port99_iBpkts[i11] =     Leaf27_4_Port99[i11].slice(40,47);
                Leaf27_4_Port99_iMpkts[i11] =     Leaf27_4_Port99[i11].slice(47,54);
                Leaf27_4_Port99_iCongDrops[i11] = Leaf27_4_Port99[i11].slice(54,65);
                Leaf27_4_Port99_ierrs[i11] =      Leaf27_4_Port99[i11].slice(65,71);
                Leaf27_4_Port99_obytes[i11] =     Leaf27_4_Port99[i11].slice(71,78);
                Leaf27_4_Port99_oUpkts[i11] =     Leaf27_4_Port99[i11].slice(78,85);
                Leaf27_4_Port99_oBpkts[i11] =     Leaf27_4_Port99[i11].slice(85,92);
                Leaf27_4_Port99_oMpkts[i11] =     Leaf27_4_Port99[i11].slice(92,99);
                Leaf27_4_Port99_oCongDrops[i11] = Leaf27_4_Port99[i11].slice(99,110);
                Leaf27_4_Port99_oerrs[i11] =      Leaf27_4_Port99[i11].slice(110,116);
                Leaf27_4_Port99_mtu_errs[i11] =   Leaf27_4_Port99[i11].slice(116,125);
            
            if( Leaf27_4_Port99_fix[i11].includes("G")){
                Leaf27_4_Port99_fix[i11] =    Leaf27_4_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_fix[i11][0] = Leaf27_4_Port99_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_fix[i11].includes("M")){
                Leaf27_4_Port99_fix[i11] =    Leaf27_4_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_fix[i11][0] = Leaf27_4_Port99_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port99_fix[i11].includes("K")){
                Leaf27_4_Port99_fix[i11] =    Leaf27_4_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_fix[i11][0] = Leaf27_4_Port99_fix[i11][0]*1000;}
            else {  Leaf27_4_Port99_fix[i11] =    Leaf27_4_Port99_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port99_iUpkts[i11].includes("G")){
                Leaf27_4_Port99_iUpkts[i11] =    Leaf27_4_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iUpkts[i11][0] = Leaf27_4_Port99_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_iUpkts[i11].includes("M")){
                Leaf27_4_Port99_iUpkts[i11] =    Leaf27_4_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iUpkts[i11][0] = Leaf27_4_Port99_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_iUpkts[i11].includes("K")){
                Leaf27_4_Port99_iUpkts[i11] =    Leaf27_4_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iUpkts[i11][0] = Leaf27_4_Port99_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_iUpkts[i11] =    Leaf27_4_Port99_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_iBpkts[i11].includes("G")){
                Leaf27_4_Port99_iBpkts[i11] =    Leaf27_4_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iBpkts[i11][0] = Leaf27_4_Port99_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_iBpkts[i11].includes("M")){
                Leaf27_4_Port99_iBpkts[i11] =    Leaf27_4_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iBpkts[i11][0] = Leaf27_4_Port99_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_iBpkts[i11].includes("K")){
                Leaf27_4_Port99_iBpkts[i11] =    Leaf27_4_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iBpkts[i11][0] = Leaf27_4_Port99_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_iBpkts[i11] =    Leaf27_4_Port99_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_iMpkts[i11].includes("G")){
                Leaf27_4_Port99_iMpkts[i11] =    Leaf27_4_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iMpkts[i11][0] = Leaf27_4_Port99_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_iMpkts[i11].includes("M")){
                Leaf27_4_Port99_iMpkts[i11] =    Leaf27_4_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iMpkts[i11][0] = Leaf27_4_Port99_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_iMpkts[i11].includes("K")){
                Leaf27_4_Port99_iMpkts[i11] =    Leaf27_4_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iMpkts[i11][0] = Leaf27_4_Port99_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_iMpkts[i11] =    Leaf27_4_Port99_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port99_iCongDrops[i11].includes("G")){
                Leaf27_4_Port99_iCongDrops[i11] =    Leaf27_4_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iCongDrops[i11][0] = Leaf27_4_Port99_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_iCongDrops[i11].includes("M")){
                Leaf27_4_Port99_iCongDrops[i11] =    Leaf27_4_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iCongDrops[i11][0] = Leaf27_4_Port99_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port99_iCongDrops[i11].includes("K")){
                Leaf27_4_Port99_iCongDrops[i11] =    Leaf27_4_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_iCongDrops[i11][0] = Leaf27_4_Port99_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port99_iCongDrops[i11] =    Leaf27_4_Port99_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port99_ierrs[i11].includes("G")){
                Leaf27_4_Port99_ierrs[i11] =    Leaf27_4_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_ierrs[i11][0] = Leaf27_4_Port99_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_ierrs[i11].includes("M")){
                Leaf27_4_Port99_ierrs[i11] =    Leaf27_4_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_ierrs[i11][0] = Leaf27_4_Port99_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port99_ierrs[i11].includes("K")){
                Leaf27_4_Port99_ierrs[i11] =    Leaf27_4_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_ierrs[i11][0] = Leaf27_4_Port99_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port99_ierrs[i11] =    Leaf27_4_Port99_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_obytes[i11].includes("G")){
                Leaf27_4_Port99_obytes[i11] =    Leaf27_4_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_obytes[i11][0] = Leaf27_4_Port99_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_obytes[i11].includes("M")){
                Leaf27_4_Port99_obytes[i11] =    Leaf27_4_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_obytes[i11][0] = Leaf27_4_Port99_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port99_obytes[i11].includes("K")){
                Leaf27_4_Port99_obytes[i11] =    Leaf27_4_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_obytes[i11][0] = Leaf27_4_Port99_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port99_obytes[i11] =    Leaf27_4_Port99_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port99_oUpkts[i11].includes("G")){
                Leaf27_4_Port99_oUpkts[i11] =    Leaf27_4_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oUpkts[i11][0] = Leaf27_4_Port99_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_oUpkts[i11].includes("M")){
                Leaf27_4_Port99_oUpkts[i11] =    Leaf27_4_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oUpkts[i11][0] = Leaf27_4_Port99_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_oUpkts[i11].includes("K")){
                Leaf27_4_Port99_oUpkts[i11] =    Leaf27_4_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oUpkts[i11][0] = Leaf27_4_Port99_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_oUpkts[i11] =    Leaf27_4_Port99_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_oBpkts[i11].includes("G")){
                Leaf27_4_Port99_oBpkts[i11] =    Leaf27_4_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oBpkts[i11][0] = Leaf27_4_Port99_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_oBpkts[i11].includes("M")){
                Leaf27_4_Port99_oBpkts[i11] =    Leaf27_4_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oBpkts[i11][0] = Leaf27_4_Port99_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_oBpkts[i11].includes("K")){
                Leaf27_4_Port99_oBpkts[i11] =    Leaf27_4_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oBpkts[i11][0] = Leaf27_4_Port99_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_oBpkts[i11] =    Leaf27_4_Port99_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port99_oMpkts[i11].includes("G")){
                Leaf27_4_Port99_oMpkts[i11] =    Leaf27_4_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oMpkts[i11][0] = Leaf27_4_Port99_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_oMpkts[i11].includes("M")){
                Leaf27_4_Port99_oMpkts[i11] =    Leaf27_4_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oMpkts[i11][0] = Leaf27_4_Port99_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port99_oMpkts[i11].includes("K")){
                Leaf27_4_Port99_oMpkts[i11] =    Leaf27_4_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oMpkts[i11][0] = Leaf27_4_Port99_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port99_oMpkts[i11] =    Leaf27_4_Port99_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port99_oCongDrops[i11].includes("G")){
                Leaf27_4_Port99_oCongDrops[i11] =    Leaf27_4_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oCongDrops[i11][0] = Leaf27_4_Port99_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_oCongDrops[i11].includes("M")){
                Leaf27_4_Port99_oCongDrops[i11] =    Leaf27_4_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oCongDrops[i11][0] = Leaf27_4_Port99_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port99_oCongDrops[i11].includes("K")){
                Leaf27_4_Port99_oCongDrops[i11] =    Leaf27_4_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oCongDrops[i11][0] = Leaf27_4_Port99_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port99_oCongDrops[i11] =    Leaf27_4_Port99_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_oerrs[i11].includes("G")){
                Leaf27_4_Port99_oerrs[i11] =    Leaf27_4_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oerrs[i11][0] = Leaf27_4_Port99_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_oerrs[i11].includes("M")){
                Leaf27_4_Port99_oerrs[i11] =    Leaf27_4_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oerrs[i11][0] = Leaf27_4_Port99_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port99_oerrs[i11].includes("K")){
                Leaf27_4_Port99_oerrs[i11] =    Leaf27_4_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_oerrs[i11][0] = Leaf27_4_Port99_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port99_oerrs[i11] =    Leaf27_4_Port99_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port99_mtu_errs[i11].includes("G")){
                Leaf27_4_Port99_mtu_errs[i11] =    Leaf27_4_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_mtu_errs[i11][0] = Leaf27_4_Port99_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port99_mtu_errs[i11].includes("M")){
                Leaf27_4_Port99_mtu_errs[i11] =    Leaf27_4_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_mtu_errs[i11][0] = Leaf27_4_Port99_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port99_mtu_errs[i11].includes("K")){
                Leaf27_4_Port99_mtu_errs[i11] =    Leaf27_4_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port99_mtu_errs[i11][0] = Leaf27_4_Port99_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port99_mtu_errs[i11] =    Leaf27_4_Port99_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }}
            
            if(Leaf27_4_Port100[i11] !== undefined){ 
                Leaf27_4_Port100_fix[i11] =        Leaf27_4_Port100[i11].slice(26, 34);
                Leaf27_4_Port100_iUpkts[i11] =     Leaf27_4_Port100[i11].slice(33,40);
                Leaf27_4_Port100_iBpkts[i11] =     Leaf27_4_Port100[i11].slice(40,47);
                Leaf27_4_Port100_iMpkts[i11] =     Leaf27_4_Port100[i11].slice(47,54);
                Leaf27_4_Port100_iCongDrops[i11] = Leaf27_4_Port100[i11].slice(54,65);
                Leaf27_4_Port100_ierrs[i11] =      Leaf27_4_Port100[i11].slice(65,71);
                Leaf27_4_Port100_obytes[i11] =     Leaf27_4_Port100[i11].slice(71,78);
                Leaf27_4_Port100_oUpkts[i11] =     Leaf27_4_Port100[i11].slice(78,85);
                Leaf27_4_Port100_oBpkts[i11] =     Leaf27_4_Port100[i11].slice(85,92);
                Leaf27_4_Port100_oMpkts[i11] =     Leaf27_4_Port100[i11].slice(92,99);
                Leaf27_4_Port100_oCongDrops[i11] = Leaf27_4_Port100[i11].slice(99,110);
                Leaf27_4_Port100_oerrs[i11] =      Leaf27_4_Port100[i11].slice(110,116);
                Leaf27_4_Port100_mtu_errs[i11] =   Leaf27_4_Port100[i11].slice(116,125);
            
            if( Leaf27_4_Port100_fix[i11].includes("G")){
                Leaf27_4_Port100_fix[i11] =    Leaf27_4_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_fix[i11][0] = Leaf27_4_Port100_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_fix[i11].includes("M")){
                Leaf27_4_Port100_fix[i11] =    Leaf27_4_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_fix[i11][0] = Leaf27_4_Port100_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port100_fix[i11].includes("K")){
                Leaf27_4_Port100_fix[i11] =    Leaf27_4_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_fix[i11][0] = Leaf27_4_Port100_fix[i11][0]*1000;}
            else {  Leaf27_4_Port100_fix[i11] =    Leaf27_4_Port100_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port100_iUpkts[i11].includes("G")){
                Leaf27_4_Port100_iUpkts[i11] =    Leaf27_4_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iUpkts[i11][0] = Leaf27_4_Port100_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_iUpkts[i11].includes("M")){
                Leaf27_4_Port100_iUpkts[i11] =    Leaf27_4_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iUpkts[i11][0] = Leaf27_4_Port100_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_iUpkts[i11].includes("K")){
                Leaf27_4_Port100_iUpkts[i11] =    Leaf27_4_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iUpkts[i11][0] = Leaf27_4_Port100_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_iUpkts[i11] =    Leaf27_4_Port100_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_iBpkts[i11].includes("G")){
                Leaf27_4_Port100_iBpkts[i11] =    Leaf27_4_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iBpkts[i11][0] = Leaf27_4_Port100_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_iBpkts[i11].includes("M")){
                Leaf27_4_Port100_iBpkts[i11] =    Leaf27_4_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iBpkts[i11][0] = Leaf27_4_Port100_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_iBpkts[i11].includes("K")){
                Leaf27_4_Port100_iBpkts[i11] =    Leaf27_4_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iBpkts[i11][0] = Leaf27_4_Port100_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_iBpkts[i11] =    Leaf27_4_Port100_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_iMpkts[i11].includes("G")){
                Leaf27_4_Port100_iMpkts[i11] =    Leaf27_4_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iMpkts[i11][0] = Leaf27_4_Port100_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_iMpkts[i11].includes("M")){
                Leaf27_4_Port100_iMpkts[i11] =    Leaf27_4_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iMpkts[i11][0] = Leaf27_4_Port100_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_iMpkts[i11].includes("K")){
                Leaf27_4_Port100_iMpkts[i11] =    Leaf27_4_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iMpkts[i11][0] = Leaf27_4_Port100_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_iMpkts[i11] =    Leaf27_4_Port100_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_iCongDrops[i11].includes("G")){
                Leaf27_4_Port100_iCongDrops[i11] =    Leaf27_4_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iCongDrops[i11][0] = Leaf27_4_Port100_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_iCongDrops[i11].includes("M")){
                Leaf27_4_Port100_iCongDrops[i11] =    Leaf27_4_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iCongDrops[i11][0] = Leaf27_4_Port100_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port100_iCongDrops[i11].includes("K")){
                Leaf27_4_Port100_iCongDrops[i11] =    Leaf27_4_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_iCongDrops[i11][0] = Leaf27_4_Port100_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port100_iCongDrops[i11] =    Leaf27_4_Port100_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_ierrs[i11].includes("G")){
                Leaf27_4_Port100_ierrs[i11] =    Leaf27_4_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_ierrs[i11][0] = Leaf27_4_Port100_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_ierrs[i11].includes("M")){
                Leaf27_4_Port100_ierrs[i11] =    Leaf27_4_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_ierrs[i11][0] = Leaf27_4_Port100_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port100_ierrs[i11].includes("K")){
                Leaf27_4_Port100_ierrs[i11] =    Leaf27_4_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_ierrs[i11][0] = Leaf27_4_Port100_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port100_ierrs[i11] =    Leaf27_4_Port100_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port100_obytes[i11].includes("G")){
                Leaf27_4_Port100_obytes[i11] =    Leaf27_4_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_obytes[i11][0] = Leaf27_4_Port100_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_obytes[i11].includes("M")){
                Leaf27_4_Port100_obytes[i11] =    Leaf27_4_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_obytes[i11][0] = Leaf27_4_Port100_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port100_obytes[i11].includes("K")){
                Leaf27_4_Port100_obytes[i11] =    Leaf27_4_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_obytes[i11][0] = Leaf27_4_Port100_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port100_obytes[i11] =    Leaf27_4_Port100_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_oUpkts[i11].includes("G")){
                Leaf27_4_Port100_oUpkts[i11] =    Leaf27_4_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oUpkts[i11][0] = Leaf27_4_Port100_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_oUpkts[i11].includes("M")){
                Leaf27_4_Port100_oUpkts[i11] =    Leaf27_4_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oUpkts[i11][0] = Leaf27_4_Port100_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_oUpkts[i11].includes("K")){
                Leaf27_4_Port100_oUpkts[i11] =    Leaf27_4_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oUpkts[i11][0] = Leaf27_4_Port100_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_oUpkts[i11] =    Leaf27_4_Port100_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port100_oBpkts[i11].includes("G")){
                Leaf27_4_Port100_oBpkts[i11] =    Leaf27_4_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oBpkts[i11][0] = Leaf27_4_Port100_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_oBpkts[i11].includes("M")){
                Leaf27_4_Port100_oBpkts[i11] =    Leaf27_4_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oBpkts[i11][0] = Leaf27_4_Port100_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_oBpkts[i11].includes("K")){
                Leaf27_4_Port100_oBpkts[i11] =    Leaf27_4_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oBpkts[i11][0] = Leaf27_4_Port100_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_oBpkts[i11] =    Leaf27_4_Port100_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port100_oMpkts[i11].includes("G")){
                Leaf27_4_Port100_oMpkts[i11] =    Leaf27_4_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oMpkts[i11][0] = Leaf27_4_Port100_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_oMpkts[i11].includes("M")){
                Leaf27_4_Port100_oMpkts[i11] =    Leaf27_4_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oMpkts[i11][0] = Leaf27_4_Port100_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port100_oMpkts[i11].includes("K")){
                Leaf27_4_Port100_oMpkts[i11] =    Leaf27_4_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oMpkts[i11][0] = Leaf27_4_Port100_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port100_oMpkts[i11] =    Leaf27_4_Port100_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port100_oCongDrops[i11].includes("G")){
                Leaf27_4_Port100_oCongDrops[i11] =    Leaf27_4_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oCongDrops[i11][0] = Leaf27_4_Port100_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_oCongDrops[i11].includes("M")){
                Leaf27_4_Port100_oCongDrops[i11] =    Leaf27_4_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oCongDrops[i11][0] = Leaf27_4_Port100_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port100_oCongDrops[i11].includes("K")){
                Leaf27_4_Port100_oCongDrops[i11] =    Leaf27_4_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oCongDrops[i11][0] = Leaf27_4_Port100_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port100_oCongDrops[i11] =    Leaf27_4_Port100_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port100_oerrs[i11].includes("G")){
                Leaf27_4_Port100_oerrs[i11] =    Leaf27_4_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oerrs[i11][0] = Leaf27_4_Port100_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_oerrs[i11].includes("M")){
                Leaf27_4_Port100_oerrs[i11] =    Leaf27_4_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oerrs[i11][0] = Leaf27_4_Port100_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port100_oerrs[i11].includes("K")){
                Leaf27_4_Port100_oerrs[i11] =    Leaf27_4_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_oerrs[i11][0] = Leaf27_4_Port100_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port100_oerrs[i11] =    Leaf27_4_Port100_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port100_mtu_errs[i11].includes("G")){
                Leaf27_4_Port100_mtu_errs[i11] =    Leaf27_4_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_mtu_errs[i11][0] = Leaf27_4_Port100_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port100_mtu_errs[i11].includes("M")){
                Leaf27_4_Port100_mtu_errs[i11] =    Leaf27_4_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_mtu_errs[i11][0] = Leaf27_4_Port100_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port100_mtu_errs[i11].includes("K")){
                Leaf27_4_Port100_mtu_errs[i11] =    Leaf27_4_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port100_mtu_errs[i11][0] = Leaf27_4_Port100_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port100_mtu_errs[i11] =    Leaf27_4_Port100_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}
            
            if(Leaf27_4_Port101[i11] !== undefined){ 
                Leaf27_4_Port101_fix[i11] =        Leaf27_4_Port101[i11].slice(26, 34);
                Leaf27_4_Port101_iUpkts[i11] =     Leaf27_4_Port101[i11].slice(33,40);
                Leaf27_4_Port101_iBpkts[i11] =     Leaf27_4_Port101[i11].slice(40,47);
                Leaf27_4_Port101_iMpkts[i11] =     Leaf27_4_Port101[i11].slice(47,54);
                Leaf27_4_Port101_iCongDrops[i11] = Leaf27_4_Port101[i11].slice(54,65);
                Leaf27_4_Port101_ierrs[i11] =      Leaf27_4_Port101[i11].slice(65,71);
                Leaf27_4_Port101_obytes[i11] =     Leaf27_4_Port101[i11].slice(71,78);
                Leaf27_4_Port101_oUpkts[i11] =     Leaf27_4_Port101[i11].slice(78,85);
                Leaf27_4_Port101_oBpkts[i11] =     Leaf27_4_Port101[i11].slice(85,92);
                Leaf27_4_Port101_oMpkts[i11] =     Leaf27_4_Port101[i11].slice(92,99);
                Leaf27_4_Port101_oCongDrops[i11] = Leaf27_4_Port101[i11].slice(99,110);
                Leaf27_4_Port101_oerrs[i11] =      Leaf27_4_Port101[i11].slice(110,116);
                Leaf27_4_Port101_mtu_errs[i11] =   Leaf27_4_Port101[i11].slice(116,125);
            
            if( Leaf27_4_Port101_fix[i11].includes("G")){
                Leaf27_4_Port101_fix[i11] =    Leaf27_4_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_fix[i11][0] = Leaf27_4_Port101_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_fix[i11].includes("M")){
                Leaf27_4_Port101_fix[i11] =    Leaf27_4_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_fix[i11][0] = Leaf27_4_Port101_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port101_fix[i11].includes("K")){
                Leaf27_4_Port101_fix[i11] =    Leaf27_4_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_fix[i11][0] = Leaf27_4_Port101_fix[i11][0]*1000;}
            else {  Leaf27_4_Port101_fix[i11] =    Leaf27_4_Port101_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port101_iUpkts[i11].includes("G")){
                Leaf27_4_Port101_iUpkts[i11] =    Leaf27_4_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iUpkts[i11][0] = Leaf27_4_Port101_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_iUpkts[i11].includes("M")){
                Leaf27_4_Port101_iUpkts[i11] =    Leaf27_4_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iUpkts[i11][0] = Leaf27_4_Port101_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_iUpkts[i11].includes("K")){
                Leaf27_4_Port101_iUpkts[i11] =    Leaf27_4_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iUpkts[i11][0] = Leaf27_4_Port101_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_iUpkts[i11] =    Leaf27_4_Port101_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_iBpkts[i11].includes("G")){
                Leaf27_4_Port101_iBpkts[i11] =    Leaf27_4_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iBpkts[i11][0] = Leaf27_4_Port101_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_iBpkts[i11].includes("M")){
                Leaf27_4_Port101_iBpkts[i11] =    Leaf27_4_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iBpkts[i11][0] = Leaf27_4_Port101_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_iBpkts[i11].includes("K")){
                Leaf27_4_Port101_iBpkts[i11] =    Leaf27_4_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iBpkts[i11][0] = Leaf27_4_Port101_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_iBpkts[i11] =    Leaf27_4_Port101_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_iMpkts[i11].includes("G")){
                Leaf27_4_Port101_iMpkts[i11] =    Leaf27_4_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iMpkts[i11][0] = Leaf27_4_Port101_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_iMpkts[i11].includes("M")){
                Leaf27_4_Port101_iMpkts[i11] =    Leaf27_4_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iMpkts[i11][0] = Leaf27_4_Port101_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_iMpkts[i11].includes("K")){
                Leaf27_4_Port101_iMpkts[i11] =    Leaf27_4_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iMpkts[i11][0] = Leaf27_4_Port101_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_iMpkts[i11] =    Leaf27_4_Port101_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port101_iCongDrops[i11].includes("G")){
                Leaf27_4_Port101_iCongDrops[i11] =    Leaf27_4_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iCongDrops[i11][0] = Leaf27_4_Port101_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_iCongDrops[i11].includes("M")){
                Leaf27_4_Port101_iCongDrops[i11] =    Leaf27_4_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iCongDrops[i11][0] = Leaf27_4_Port101_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port101_iCongDrops[i11].includes("K")){
                Leaf27_4_Port101_iCongDrops[i11] =    Leaf27_4_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_iCongDrops[i11][0] = Leaf27_4_Port101_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port101_iCongDrops[i11] =    Leaf27_4_Port101_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port101_ierrs[i11].includes("G")){
                Leaf27_4_Port101_ierrs[i11] =    Leaf27_4_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_ierrs[i11][0] = Leaf27_4_Port101_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_ierrs[i11].includes("M")){
                Leaf27_4_Port101_ierrs[i11] =    Leaf27_4_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_ierrs[i11][0] = Leaf27_4_Port101_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port101_ierrs[i11].includes("K")){
                Leaf27_4_Port101_ierrs[i11] =    Leaf27_4_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_ierrs[i11][0] = Leaf27_4_Port101_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port101_ierrs[i11] =    Leaf27_4_Port101_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_obytes[i11].includes("G")){
                Leaf27_4_Port101_obytes[i11] =    Leaf27_4_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_obytes[i11][0] = Leaf27_4_Port101_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_obytes[i11].includes("M")){
                Leaf27_4_Port101_obytes[i11] =    Leaf27_4_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_obytes[i11][0] = Leaf27_4_Port101_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port101_obytes[i11].includes("K")){
                Leaf27_4_Port101_obytes[i11] =    Leaf27_4_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_obytes[i11][0] = Leaf27_4_Port101_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port101_obytes[i11] =    Leaf27_4_Port101_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_oUpkts[i11].includes("G")){
                Leaf27_4_Port101_oUpkts[i11] =    Leaf27_4_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oUpkts[i11][0] = Leaf27_4_Port101_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_oUpkts[i11].includes("M")){
                Leaf27_4_Port101_oUpkts[i11] =    Leaf27_4_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oUpkts[i11][0] = Leaf27_4_Port101_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_oUpkts[i11].includes("K")){
                Leaf27_4_Port101_oUpkts[i11] =    Leaf27_4_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oUpkts[i11][0] = Leaf27_4_Port101_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_oUpkts[i11] =    Leaf27_4_Port101_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_oBpkts[i11].includes("G")){
                Leaf27_4_Port101_oBpkts[i11] =    Leaf27_4_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oBpkts[i11][0] = Leaf27_4_Port101_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_oBpkts[i11].includes("M")){
                Leaf27_4_Port101_oBpkts[i11] =    Leaf27_4_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oBpkts[i11][0] = Leaf27_4_Port101_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_oBpkts[i11].includes("K")){
                Leaf27_4_Port101_oBpkts[i11] =    Leaf27_4_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oBpkts[i11][0] = Leaf27_4_Port101_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_oBpkts[i11] =    Leaf27_4_Port101_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port101_oMpkts[i11].includes("G")){
                Leaf27_4_Port101_oMpkts[i11] =    Leaf27_4_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oMpkts[i11][0] = Leaf27_4_Port101_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_oMpkts[i11].includes("M")){
                Leaf27_4_Port101_oMpkts[i11] =    Leaf27_4_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oMpkts[i11][0] = Leaf27_4_Port101_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port101_oMpkts[i11].includes("K")){
                Leaf27_4_Port101_oMpkts[i11] =    Leaf27_4_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oMpkts[i11][0] = Leaf27_4_Port101_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port101_oMpkts[i11] =    Leaf27_4_Port101_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_oCongDrops[i11].includes("G")){
                Leaf27_4_Port101_oCongDrops[i11] =    Leaf27_4_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oCongDrops[i11][0] = Leaf27_4_Port101_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_oCongDrops[i11].includes("M")){
                Leaf27_4_Port101_oCongDrops[i11] =    Leaf27_4_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oCongDrops[i11][0] = Leaf27_4_Port101_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port101_oCongDrops[i11].includes("K")){
                Leaf27_4_Port101_oCongDrops[i11] =    Leaf27_4_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oCongDrops[i11][0] = Leaf27_4_Port101_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port101_oCongDrops[i11] =    Leaf27_4_Port101_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_oerrs[i11].includes("G")){
                Leaf27_4_Port101_oerrs[i11] =    Leaf27_4_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oerrs[i11][0] = Leaf27_4_Port101_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_oerrs[i11].includes("M")){
                Leaf27_4_Port101_oerrs[i11] =    Leaf27_4_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oerrs[i11][0] = Leaf27_4_Port101_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port101_oerrs[i11].includes("K")){
                Leaf27_4_Port101_oerrs[i11] =    Leaf27_4_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_oerrs[i11][0] = Leaf27_4_Port101_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port101_oerrs[i11] =    Leaf27_4_Port101_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port101_mtu_errs[i11].includes("G")){
                Leaf27_4_Port101_mtu_errs[i11] =    Leaf27_4_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_mtu_errs[i11][0] = Leaf27_4_Port101_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port101_mtu_errs[i11].includes("M")){
                Leaf27_4_Port101_mtu_errs[i11] =    Leaf27_4_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_mtu_errs[i11][0] = Leaf27_4_Port101_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port101_mtu_errs[i11].includes("K")){
                Leaf27_4_Port101_mtu_errs[i11] =    Leaf27_4_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port101_mtu_errs[i11][0] = Leaf27_4_Port101_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port101_mtu_errs[i11] =    Leaf27_4_Port101_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }}
                
            if(Leaf27_4_Port102[i11] !== undefined){ 
                Leaf27_4_Port102_fix[i11] =        Leaf27_4_Port102[i11].slice(26, 34);
                Leaf27_4_Port102_iUpkts[i11] =     Leaf27_4_Port102[i11].slice(33,40);
                Leaf27_4_Port102_iBpkts[i11] =     Leaf27_4_Port102[i11].slice(40,47);
                Leaf27_4_Port102_iMpkts[i11] =     Leaf27_4_Port102[i11].slice(47,54);
                Leaf27_4_Port102_iCongDrops[i11] = Leaf27_4_Port102[i11].slice(54,65);
                Leaf27_4_Port102_ierrs[i11] =      Leaf27_4_Port102[i11].slice(65,71);
                Leaf27_4_Port102_obytes[i11] =     Leaf27_4_Port102[i11].slice(71,78);
                Leaf27_4_Port102_oUpkts[i11] =     Leaf27_4_Port102[i11].slice(78,85);
                Leaf27_4_Port102_oBpkts[i11] =     Leaf27_4_Port102[i11].slice(85,92);
                Leaf27_4_Port102_oMpkts[i11] =     Leaf27_4_Port102[i11].slice(92,99);
                Leaf27_4_Port102_oCongDrops[i11] = Leaf27_4_Port102[i11].slice(99,110);
                Leaf27_4_Port102_oerrs[i11] =      Leaf27_4_Port102[i11].slice(110,116);
                Leaf27_4_Port102_mtu_errs[i11] =   Leaf27_4_Port102[i11].slice(116,125);
            
            if( Leaf27_4_Port102_fix[i11].includes("G")){
                Leaf27_4_Port102_fix[i11] =    Leaf27_4_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_fix[i11][0] = Leaf27_4_Port102_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_fix[i11].includes("M")){
                Leaf27_4_Port102_fix[i11] =    Leaf27_4_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_fix[i11][0] = Leaf27_4_Port102_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port102_fix[i11].includes("K")){
                Leaf27_4_Port102_fix[i11] =    Leaf27_4_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_fix[i11][0] = Leaf27_4_Port102_fix[i11][0]*1000;}
            else {  Leaf27_4_Port102_fix[i11] =    Leaf27_4_Port102_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
            if( Leaf27_4_Port102_iUpkts[i11].includes("G")){
                Leaf27_4_Port102_iUpkts[i11] =    Leaf27_4_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iUpkts[i11][0] = Leaf27_4_Port102_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_iUpkts[i11].includes("M")){
                Leaf27_4_Port102_iUpkts[i11] =    Leaf27_4_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iUpkts[i11][0] = Leaf27_4_Port102_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_iUpkts[i11].includes("K")){
                Leaf27_4_Port102_iUpkts[i11] =    Leaf27_4_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iUpkts[i11][0] = Leaf27_4_Port102_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_iUpkts[i11] =    Leaf27_4_Port102_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port102_iBpkts[i11].includes("G")){
                Leaf27_4_Port102_iBpkts[i11] =    Leaf27_4_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iBpkts[i11][0] = Leaf27_4_Port102_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_iBpkts[i11].includes("M")){
                Leaf27_4_Port102_iBpkts[i11] =    Leaf27_4_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iBpkts[i11][0] = Leaf27_4_Port102_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_iBpkts[i11].includes("K")){
                Leaf27_4_Port102_iBpkts[i11] =    Leaf27_4_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iBpkts[i11][0] = Leaf27_4_Port102_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_iBpkts[i11] =    Leaf27_4_Port102_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port102_iMpkts[i11].includes("G")){
                Leaf27_4_Port102_iMpkts[i11] =    Leaf27_4_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iMpkts[i11][0] = Leaf27_4_Port102_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_iMpkts[i11].includes("M")){
                Leaf27_4_Port102_iMpkts[i11] =    Leaf27_4_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iMpkts[i11][0] = Leaf27_4_Port102_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_iMpkts[i11].includes("K")){
                Leaf27_4_Port102_iMpkts[i11] =    Leaf27_4_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iMpkts[i11][0] = Leaf27_4_Port102_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_iMpkts[i11] =    Leaf27_4_Port102_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port102_iCongDrops[i11].includes("G")){
                Leaf27_4_Port102_iCongDrops[i11] =    Leaf27_4_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iCongDrops[i11][0] = Leaf27_4_Port102_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_iCongDrops[i11].includes("M")){
                Leaf27_4_Port102_iCongDrops[i11] =    Leaf27_4_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iCongDrops[i11][0] = Leaf27_4_Port102_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port102_iCongDrops[i11].includes("K")){
                Leaf27_4_Port102_iCongDrops[i11] =    Leaf27_4_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_iCongDrops[i11][0] = Leaf27_4_Port102_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port102_iCongDrops[i11] =    Leaf27_4_Port102_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port102_ierrs[i11].includes("G")){
                Leaf27_4_Port102_ierrs[i11] =    Leaf27_4_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_ierrs[i11][0] = Leaf27_4_Port102_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_ierrs[i11].includes("M")){
                Leaf27_4_Port102_ierrs[i11] =    Leaf27_4_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_ierrs[i11][0] = Leaf27_4_Port102_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port102_ierrs[i11].includes("K")){
                Leaf27_4_Port102_ierrs[i11] =    Leaf27_4_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_ierrs[i11][0] = Leaf27_4_Port102_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port102_ierrs[i11] =    Leaf27_4_Port102_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port102_obytes[i11].includes("G")){
                Leaf27_4_Port102_obytes[i11] =    Leaf27_4_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_obytes[i11][0] = Leaf27_4_Port102_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_obytes[i11].includes("M")){
                Leaf27_4_Port102_obytes[i11] =    Leaf27_4_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_obytes[i11][0] = Leaf27_4_Port102_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port102_obytes[i11].includes("K")){
                Leaf27_4_Port102_obytes[i11] =    Leaf27_4_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_obytes[i11][0] = Leaf27_4_Port102_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port102_obytes[i11] =    Leaf27_4_Port102_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port102_oUpkts[i11].includes("G")){
                Leaf27_4_Port102_oUpkts[i11] =    Leaf27_4_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oUpkts[i11][0] = Leaf27_4_Port102_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_oUpkts[i11].includes("M")){
                Leaf27_4_Port102_oUpkts[i11] =    Leaf27_4_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oUpkts[i11][0] = Leaf27_4_Port102_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_oUpkts[i11].includes("K")){
                Leaf27_4_Port102_oUpkts[i11] =    Leaf27_4_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oUpkts[i11][0] = Leaf27_4_Port102_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_oUpkts[i11] =    Leaf27_4_Port102_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port102_oBpkts[i11].includes("G")){
                Leaf27_4_Port102_oBpkts[i11] =    Leaf27_4_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oBpkts[i11][0] = Leaf27_4_Port102_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_oBpkts[i11].includes("M")){
                Leaf27_4_Port102_oBpkts[i11] =    Leaf27_4_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oBpkts[i11][0] = Leaf27_4_Port102_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_oBpkts[i11].includes("K")){
                Leaf27_4_Port102_oBpkts[i11] =    Leaf27_4_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oBpkts[i11][0] = Leaf27_4_Port102_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_oBpkts[i11] =    Leaf27_4_Port102_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port102_oMpkts[i11].includes("G")){
                Leaf27_4_Port102_oMpkts[i11] =    Leaf27_4_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oMpkts[i11][0] = Leaf27_4_Port102_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_oMpkts[i11].includes("M")){
                Leaf27_4_Port102_oMpkts[i11] =    Leaf27_4_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oMpkts[i11][0] = Leaf27_4_Port102_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port102_oMpkts[i11].includes("K")){
                Leaf27_4_Port102_oMpkts[i11] =    Leaf27_4_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oMpkts[i11][0] = Leaf27_4_Port102_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port102_oMpkts[i11] =    Leaf27_4_Port102_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port102_oCongDrops[i11].includes("G")){
                Leaf27_4_Port102_oCongDrops[i11] =    Leaf27_4_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oCongDrops[i11][0] = Leaf27_4_Port102_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_oCongDrops[i11].includes("M")){
                Leaf27_4_Port102_oCongDrops[i11] =    Leaf27_4_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oCongDrops[i11][0] = Leaf27_4_Port102_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port102_oCongDrops[i11].includes("K")){
                Leaf27_4_Port102_oCongDrops[i11] =    Leaf27_4_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oCongDrops[i11][0] = Leaf27_4_Port102_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port102_oCongDrops[i11] =    Leaf27_4_Port102_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port102_oerrs[i11].includes("G")){
                Leaf27_4_Port102_oerrs[i11] =    Leaf27_4_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oerrs[i11][0] = Leaf27_4_Port102_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_oerrs[i11].includes("M")){
                Leaf27_4_Port102_oerrs[i11] =    Leaf27_4_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oerrs[i11][0] = Leaf27_4_Port102_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port102_oerrs[i11].includes("K")){
                Leaf27_4_Port102_oerrs[i11] =    Leaf27_4_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_oerrs[i11][0] = Leaf27_4_Port102_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port102_oerrs[i11] =    Leaf27_4_Port102_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port102_mtu_errs[i11].includes("G")){
                Leaf27_4_Port102_mtu_errs[i11] =    Leaf27_4_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_mtu_errs[i11][0] = Leaf27_4_Port102_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port102_mtu_errs[i11].includes("M")){
                Leaf27_4_Port102_mtu_errs[i11] =    Leaf27_4_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_mtu_errs[i11][0] = Leaf27_4_Port102_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port102_mtu_errs[i11].includes("K")){
                Leaf27_4_Port102_mtu_errs[i11] =    Leaf27_4_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port102_mtu_errs[i11][0] = Leaf27_4_Port102_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port102_mtu_errs[i11] =    Leaf27_4_Port102_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }}
                
            if(Leaf27_4_Port103[i11] !== undefined){ 
                Leaf27_4_Port103_fix[i11] =        Leaf27_4_Port103[i11].slice(26, 34);
                Leaf27_4_Port103_iUpkts[i11] =     Leaf27_4_Port103[i11].slice(33,40);
                Leaf27_4_Port103_iBpkts[i11] =     Leaf27_4_Port103[i11].slice(40,47);
                Leaf27_4_Port103_iMpkts[i11] =     Leaf27_4_Port103[i11].slice(47,54);
                Leaf27_4_Port103_iCongDrops[i11] = Leaf27_4_Port103[i11].slice(54,65);
                Leaf27_4_Port103_ierrs[i11] =      Leaf27_4_Port103[i11].slice(65,71);
                Leaf27_4_Port103_obytes[i11] =     Leaf27_4_Port103[i11].slice(71,78);
                Leaf27_4_Port103_oUpkts[i11] =     Leaf27_4_Port103[i11].slice(78,85);
                Leaf27_4_Port103_oBpkts[i11] =     Leaf27_4_Port103[i11].slice(85,92);
                Leaf27_4_Port103_oMpkts[i11] =     Leaf27_4_Port103[i11].slice(92,99);
                Leaf27_4_Port103_oCongDrops[i11] = Leaf27_4_Port103[i11].slice(99,110);
                Leaf27_4_Port103_oerrs[i11] =      Leaf27_4_Port103[i11].slice(110,116);
                Leaf27_4_Port103_mtu_errs[i11] =   Leaf27_4_Port103[i11].slice(116,125);
            
            if( Leaf27_4_Port103_fix[i11].includes("G")){
                Leaf27_4_Port103_fix[i11] =    Leaf27_4_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_fix[i11][0] = Leaf27_4_Port103_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_fix[i11].includes("M")){
                Leaf27_4_Port103_fix[i11] =    Leaf27_4_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_fix[i11][0] = Leaf27_4_Port103_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port103_fix[i11].includes("K")){
                Leaf27_4_Port103_fix[i11] =    Leaf27_4_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_fix[i11][0] = Leaf27_4_Port103_fix[i11][0]*1000;}
            else {  Leaf27_4_Port103_fix[i11] =    Leaf27_4_Port103_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port103_iUpkts[i11].includes("G")){
                Leaf27_4_Port103_iUpkts[i11] =    Leaf27_4_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iUpkts[i11][0] = Leaf27_4_Port103_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_iUpkts[i11].includes("M")){
                Leaf27_4_Port103_iUpkts[i11] =    Leaf27_4_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iUpkts[i11][0] = Leaf27_4_Port103_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_iUpkts[i11].includes("K")){
                Leaf27_4_Port103_iUpkts[i11] =    Leaf27_4_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iUpkts[i11][0] = Leaf27_4_Port103_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_iUpkts[i11] =    Leaf27_4_Port103_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port103_iBpkts[i11].includes("G")){
                Leaf27_4_Port103_iBpkts[i11] =    Leaf27_4_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iBpkts[i11][0] = Leaf27_4_Port103_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_iBpkts[i11].includes("M")){
                Leaf27_4_Port103_iBpkts[i11] =    Leaf27_4_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iBpkts[i11][0] = Leaf27_4_Port103_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_iBpkts[i11].includes("K")){
                Leaf27_4_Port103_iBpkts[i11] =    Leaf27_4_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iBpkts[i11][0] = Leaf27_4_Port103_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_iBpkts[i11] =    Leaf27_4_Port103_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_iMpkts[i11].includes("G")){
                Leaf27_4_Port103_iMpkts[i11] =    Leaf27_4_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iMpkts[i11][0] = Leaf27_4_Port103_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_iMpkts[i11].includes("M")){
                Leaf27_4_Port103_iMpkts[i11] =    Leaf27_4_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iMpkts[i11][0] = Leaf27_4_Port103_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_iMpkts[i11].includes("K")){
                Leaf27_4_Port103_iMpkts[i11] =    Leaf27_4_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iMpkts[i11][0] = Leaf27_4_Port103_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_iMpkts[i11] =    Leaf27_4_Port103_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_iCongDrops[i11].includes("G")){
                Leaf27_4_Port103_iCongDrops[i11] =    Leaf27_4_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iCongDrops[i11][0] = Leaf27_4_Port103_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_iCongDrops[i11].includes("M")){
                Leaf27_4_Port103_iCongDrops[i11] =    Leaf27_4_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iCongDrops[i11][0] = Leaf27_4_Port103_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port103_iCongDrops[i11].includes("K")){
                Leaf27_4_Port103_iCongDrops[i11] =    Leaf27_4_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_iCongDrops[i11][0] = Leaf27_4_Port103_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port103_iCongDrops[i11] =    Leaf27_4_Port103_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_ierrs[i11].includes("G")){
                Leaf27_4_Port103_ierrs[i11] =    Leaf27_4_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_ierrs[i11][0] = Leaf27_4_Port103_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_ierrs[i11].includes("M")){
                Leaf27_4_Port103_ierrs[i11] =    Leaf27_4_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_ierrs[i11][0] = Leaf27_4_Port103_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port103_ierrs[i11].includes("K")){
                Leaf27_4_Port103_ierrs[i11] =    Leaf27_4_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_ierrs[i11][0] = Leaf27_4_Port103_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port103_ierrs[i11] =    Leaf27_4_Port103_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_obytes[i11].includes("G")){
                Leaf27_4_Port103_obytes[i11] =    Leaf27_4_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_obytes[i11][0] = Leaf27_4_Port103_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_obytes[i11].includes("M")){
                Leaf27_4_Port103_obytes[i11] =    Leaf27_4_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_obytes[i11][0] = Leaf27_4_Port103_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port103_obytes[i11].includes("K")){
                Leaf27_4_Port103_obytes[i11] =    Leaf27_4_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_obytes[i11][0] = Leaf27_4_Port103_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port103_obytes[i11] =    Leaf27_4_Port103_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port103_oUpkts[i11].includes("G")){
                Leaf27_4_Port103_oUpkts[i11] =    Leaf27_4_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oUpkts[i11][0] = Leaf27_4_Port103_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_oUpkts[i11].includes("M")){
                Leaf27_4_Port103_oUpkts[i11] =    Leaf27_4_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oUpkts[i11][0] = Leaf27_4_Port103_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_oUpkts[i11].includes("K")){
                Leaf27_4_Port103_oUpkts[i11] =    Leaf27_4_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oUpkts[i11][0] = Leaf27_4_Port103_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_oUpkts[i11] =    Leaf27_4_Port103_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port103_oBpkts[i11].includes("G")){
                Leaf27_4_Port103_oBpkts[i11] =    Leaf27_4_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oBpkts[i11][0] = Leaf27_4_Port103_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_oBpkts[i11].includes("M")){
                Leaf27_4_Port103_oBpkts[i11] =    Leaf27_4_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oBpkts[i11][0] = Leaf27_4_Port103_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_oBpkts[i11].includes("K")){
                Leaf27_4_Port103_oBpkts[i11] =    Leaf27_4_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oBpkts[i11][0] = Leaf27_4_Port103_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_oBpkts[i11] =    Leaf27_4_Port103_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_oMpkts[i11].includes("G")){
                Leaf27_4_Port103_oMpkts[i11] =    Leaf27_4_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oMpkts[i11][0] = Leaf27_4_Port103_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_oMpkts[i11].includes("M")){
                Leaf27_4_Port103_oMpkts[i11] =    Leaf27_4_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oMpkts[i11][0] = Leaf27_4_Port103_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port103_oMpkts[i11].includes("K")){
                Leaf27_4_Port103_oMpkts[i11] =    Leaf27_4_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oMpkts[i11][0] = Leaf27_4_Port103_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port103_oMpkts[i11] =    Leaf27_4_Port103_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port103_oCongDrops[i11].includes("G")){
                Leaf27_4_Port103_oCongDrops[i11] =    Leaf27_4_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oCongDrops[i11][0] = Leaf27_4_Port103_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_oCongDrops[i11].includes("M")){
                Leaf27_4_Port103_oCongDrops[i11] =    Leaf27_4_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oCongDrops[i11][0] = Leaf27_4_Port103_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port103_oCongDrops[i11].includes("K")){
                Leaf27_4_Port103_oCongDrops[i11] =    Leaf27_4_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oCongDrops[i11][0] = Leaf27_4_Port103_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port103_oCongDrops[i11] =    Leaf27_4_Port103_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port103_oerrs[i11].includes("G")){
                Leaf27_4_Port103_oerrs[i11] =    Leaf27_4_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oerrs[i11][0] = Leaf27_4_Port103_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_oerrs[i11].includes("M")){
                Leaf27_4_Port103_oerrs[i11] =    Leaf27_4_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oerrs[i11][0] = Leaf27_4_Port103_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port103_oerrs[i11].includes("K")){
                Leaf27_4_Port103_oerrs[i11] =    Leaf27_4_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_oerrs[i11][0] = Leaf27_4_Port103_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port103_oerrs[i11] =    Leaf27_4_Port103_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
              }
            
                if(Leaf27_4_Port103_mtu_errs[i11].includes("G")){
                Leaf27_4_Port103_mtu_errs[i11] =    Leaf27_4_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_mtu_errs[i11][0] = Leaf27_4_Port103_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port103_mtu_errs[i11].includes("M")){
                Leaf27_4_Port103_mtu_errs[i11] =    Leaf27_4_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_mtu_errs[i11][0] = Leaf27_4_Port103_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port103_mtu_errs[i11].includes("K")){
                Leaf27_4_Port103_mtu_errs[i11] =    Leaf27_4_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port103_mtu_errs[i11][0] = Leaf27_4_Port103_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port103_mtu_errs[i11] =    Leaf27_4_Port103_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }}
            
            if(Leaf27_4_Port104[i11] !== undefined){ 
                Leaf27_4_Port104_fix[i11] =        Leaf27_4_Port104[i11].slice(26, 34);
                Leaf27_4_Port104_iUpkts[i11] =     Leaf27_4_Port104[i11].slice(33,40);
                Leaf27_4_Port104_iBpkts[i11] =     Leaf27_4_Port104[i11].slice(40,47);
                Leaf27_4_Port104_iMpkts[i11] =     Leaf27_4_Port104[i11].slice(47,54);
                Leaf27_4_Port104_iCongDrops[i11] = Leaf27_4_Port104[i11].slice(54,65);
                Leaf27_4_Port104_ierrs[i11] =      Leaf27_4_Port104[i11].slice(65,71);
                Leaf27_4_Port104_obytes[i11] =     Leaf27_4_Port104[i11].slice(71,78);
                Leaf27_4_Port104_oUpkts[i11] =     Leaf27_4_Port104[i11].slice(78,85);
                Leaf27_4_Port104_oBpkts[i11] =     Leaf27_4_Port104[i11].slice(85,92);
                Leaf27_4_Port104_oMpkts[i11] =     Leaf27_4_Port104[i11].slice(92,99);
                Leaf27_4_Port104_oCongDrops[i11] = Leaf27_4_Port104[i11].slice(99,110);
                Leaf27_4_Port104_oerrs[i11] =      Leaf27_4_Port104[i11].slice(110,116);
                Leaf27_4_Port104_mtu_errs[i11] =   Leaf27_4_Port104[i11].slice(116,125);
            
            if( Leaf27_4_Port104_fix[i11].includes("G")){
                Leaf27_4_Port104_fix[i11] =    Leaf27_4_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_fix[i11][0] = Leaf27_4_Port104_fix[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_fix[i11].includes("M")){
                Leaf27_4_Port104_fix[i11] =    Leaf27_4_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_fix[i11][0] = Leaf27_4_Port104_fix[i11][0]*1000000;}
            else if(Leaf27_4_Port104_fix[i11].includes("K")){
                Leaf27_4_Port104_fix[i11] =    Leaf27_4_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_fix[i11][0] = Leaf27_4_Port104_fix[i11][0]*1000;}
            else {  Leaf27_4_Port104_fix[i11] =    Leaf27_4_Port104_fix[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
            if( Leaf27_4_Port104_iUpkts[i11].includes("G")){
                Leaf27_4_Port104_iUpkts[i11] =    Leaf27_4_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iUpkts[i11][0] = Leaf27_4_Port104_iUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_iUpkts[i11].includes("M")){
                Leaf27_4_Port104_iUpkts[i11] =    Leaf27_4_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iUpkts[i11][0] = Leaf27_4_Port104_iUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_iUpkts[i11].includes("K")){
                Leaf27_4_Port104_iUpkts[i11] =    Leaf27_4_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iUpkts[i11][0] = Leaf27_4_Port104_iUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_iUpkts[i11] =    Leaf27_4_Port104_iUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_iBpkts[i11].includes("G")){
                Leaf27_4_Port104_iBpkts[i11] =    Leaf27_4_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iBpkts[i11][0] = Leaf27_4_Port104_iBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_iBpkts[i11].includes("M")){
                Leaf27_4_Port104_iBpkts[i11] =    Leaf27_4_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iBpkts[i11][0] = Leaf27_4_Port104_iBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_iBpkts[i11].includes("K")){
                Leaf27_4_Port104_iBpkts[i11] =    Leaf27_4_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iBpkts[i11][0] = Leaf27_4_Port104_iBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_iBpkts[i11] =    Leaf27_4_Port104_iBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_iMpkts[i11].includes("G")){
                Leaf27_4_Port104_iMpkts[i11] =    Leaf27_4_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iMpkts[i11][0] = Leaf27_4_Port104_iMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_iMpkts[i11].includes("M")){
                Leaf27_4_Port104_iMpkts[i11] =    Leaf27_4_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iMpkts[i11][0] = Leaf27_4_Port104_iMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_iMpkts[i11].includes("K")){
                Leaf27_4_Port104_iMpkts[i11] =    Leaf27_4_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iMpkts[i11][0] = Leaf27_4_Port104_iMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_iMpkts[i11] =    Leaf27_4_Port104_iMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port104_iCongDrops[i11].includes("G")){
                Leaf27_4_Port104_iCongDrops[i11] =    Leaf27_4_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iCongDrops[i11][0] = Leaf27_4_Port104_iCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_iCongDrops[i11].includes("M")){
                Leaf27_4_Port104_iCongDrops[i11] =    Leaf27_4_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iCongDrops[i11][0] = Leaf27_4_Port104_iCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port104_iCongDrops[i11].includes("K")){
                Leaf27_4_Port104_iCongDrops[i11] =    Leaf27_4_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_iCongDrops[i11][0] = Leaf27_4_Port104_iCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port104_iCongDrops[i11] =    Leaf27_4_Port104_iCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port104_ierrs[i11].includes("G")){
                Leaf27_4_Port104_ierrs[i11] =    Leaf27_4_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_ierrs[i11][0] = Leaf27_4_Port104_ierrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_ierrs[i11].includes("M")){
                Leaf27_4_Port104_ierrs[i11] =    Leaf27_4_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_ierrs[i11][0] = Leaf27_4_Port104_ierrs[i11][0]*1000000;}
            else if(Leaf27_4_Port104_ierrs[i11].includes("K")){
                Leaf27_4_Port104_ierrs[i11] =    Leaf27_4_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_ierrs[i11][0] = Leaf27_4_Port104_ierrs[i11][0]*1000;}
            else {  Leaf27_4_Port104_ierrs[i11] =    Leaf27_4_Port104_ierrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port104_obytes[i11].includes("G")){
                Leaf27_4_Port104_obytes[i11] =    Leaf27_4_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_obytes[i11][0] = Leaf27_4_Port104_obytes[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_obytes[i11].includes("M")){
                Leaf27_4_Port104_obytes[i11] =    Leaf27_4_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_obytes[i11][0] = Leaf27_4_Port104_obytes[i11][0]*1000000;}
            else if(Leaf27_4_Port104_obytes[i11].includes("K")){
                Leaf27_4_Port104_obytes[i11] =    Leaf27_4_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_obytes[i11][0] = Leaf27_4_Port104_obytes[i11][0]*1000;}
            else {  Leaf27_4_Port104_obytes[i11] =    Leaf27_4_Port104_obytes[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port104_oUpkts[i11].includes("G")){
                Leaf27_4_Port104_oUpkts[i11] =    Leaf27_4_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oUpkts[i11][0] = Leaf27_4_Port104_oUpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_oUpkts[i11].includes("M")){
                Leaf27_4_Port104_oUpkts[i11] =    Leaf27_4_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oUpkts[i11][0] = Leaf27_4_Port104_oUpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_oUpkts[i11].includes("K")){
                Leaf27_4_Port104_oUpkts[i11] =    Leaf27_4_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oUpkts[i11][0] = Leaf27_4_Port104_oUpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_oUpkts[i11] =    Leaf27_4_Port104_oUpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_oBpkts[i11].includes("G")){
                Leaf27_4_Port104_oBpkts[i11] =    Leaf27_4_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oBpkts[i11][0] = Leaf27_4_Port104_oBpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_oBpkts[i11].includes("M")){
                Leaf27_4_Port104_oBpkts[i11] =    Leaf27_4_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oBpkts[i11][0] = Leaf27_4_Port104_oBpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_oBpkts[i11].includes("K")){
                Leaf27_4_Port104_oBpkts[i11] =    Leaf27_4_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oBpkts[i11][0] = Leaf27_4_Port104_oBpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_oBpkts[i11] =    Leaf27_4_Port104_oBpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_oMpkts[i11].includes("G")){
                Leaf27_4_Port104_oMpkts[i11] =    Leaf27_4_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oMpkts[i11][0] = Leaf27_4_Port104_oMpkts[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_oMpkts[i11].includes("M")){
                Leaf27_4_Port104_oMpkts[i11] =    Leaf27_4_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oMpkts[i11][0] = Leaf27_4_Port104_oMpkts[i11][0]*1000000;}
            else if(Leaf27_4_Port104_oMpkts[i11].includes("K")){
                Leaf27_4_Port104_oMpkts[i11] =    Leaf27_4_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oMpkts[i11][0] = Leaf27_4_Port104_oMpkts[i11][0]*1000;}
            else {  Leaf27_4_Port104_oMpkts[i11] =    Leaf27_4_Port104_oMpkts[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_oCongDrops[i11].includes("G")){
                Leaf27_4_Port104_oCongDrops[i11] =    Leaf27_4_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oCongDrops[i11][0] = Leaf27_4_Port104_oCongDrops[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_oCongDrops[i11].includes("M")){
                Leaf27_4_Port104_oCongDrops[i11] =    Leaf27_4_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oCongDrops[i11][0] = Leaf27_4_Port104_oCongDrops[i11][0]*1000000;}
            else if(Leaf27_4_Port104_oCongDrops[i11].includes("K")){
                Leaf27_4_Port104_oCongDrops[i11] =    Leaf27_4_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oCongDrops[i11][0] = Leaf27_4_Port104_oCongDrops[i11][0]*1000;}
            else {  Leaf27_4_Port104_oCongDrops[i11] =    Leaf27_4_Port104_oCongDrops[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                }
            
                if(Leaf27_4_Port104_oerrs[i11].includes("G")){
                Leaf27_4_Port104_oerrs[i11] =    Leaf27_4_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oerrs[i11][0] = Leaf27_4_Port104_oerrs[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_oerrs[i11].includes("M")){
                Leaf27_4_Port104_oerrs[i11] =    Leaf27_4_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oerrs[i11][0] = Leaf27_4_Port104_oerrs[i11][0]*1000000;}
            else if(Leaf27_4_Port104_oerrs[i11].includes("K")){
                Leaf27_4_Port104_oerrs[i11] =    Leaf27_4_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_oerrs[i11][0] = Leaf27_4_Port104_oerrs[i11][0]*1000;}
            else {  Leaf27_4_Port104_oerrs[i11] =    Leaf27_4_Port104_oerrs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }
            
                if(Leaf27_4_Port104_mtu_errs[i11].includes("G")){
                Leaf27_4_Port104_mtu_errs[i11] =    Leaf27_4_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_mtu_errs[i11][0] = Leaf27_4_Port104_mtu_errs[i11][0]*1000000000;}
            else if(Leaf27_4_Port104_mtu_errs[i11].includes("M")){
                Leaf27_4_Port104_mtu_errs[i11] =    Leaf27_4_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_mtu_errs[i11][0] = Leaf27_4_Port104_mtu_errs[i11][0]*1000000;}
            else if(Leaf27_4_Port104_mtu_errs[i11].includes("K")){
                Leaf27_4_Port104_mtu_errs[i11] =    Leaf27_4_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
                Leaf27_4_Port104_mtu_errs[i11][0] = Leaf27_4_Port104_mtu_errs[i11][0]*1000;}
            else {  Leaf27_4_Port104_mtu_errs[i11] =    Leaf27_4_Port104_mtu_errs[i11].match(/\d{1,3}.\d{1,3}|\d*/g);
               }}

            this.state.chartData17.datasets[0].data.push(   Leaf27_4_Port1_fix[i11][0]);
            this.state.chartData17.datasets[1].data.push(   Leaf27_4_Port2_fix[i11][0]);
            this.state.chartData17.datasets[2].data.push(   Leaf27_4_Port3_fix[i11][0]);
            this.state.chartData17.datasets[3].data.push(   Leaf27_4_Port4_fix[i11][0]);
            this.state.chartData17.datasets[4].data.push(   Leaf27_4_Port7_fix[i11][0]);
            this.state.chartData17.datasets[5].data.push(  Leaf27_4_Port10_fix[i11][0]);
            this.state.chartData17.datasets[6].data.push(  Leaf27_4_Port13_fix[i11][0]);
            this.state.chartData17.datasets[7].data.push(  Leaf27_4_Port17_fix[i11][0]);
            this.state.chartData17.datasets[8].data.push(  Leaf27_4_Port81_fix[i11][0]);
            this.state.chartData17.datasets[9].data.push(  Leaf27_4_Port85_fix[i11][0]);
            this.state.chartData17.datasets[10].data.push( Leaf27_4_Port86_fix[i11][0]);
            this.state.chartData17.datasets[11].data.push( Leaf27_4_Port87_fix[i11][0]);
            this.state.chartData17.datasets[12].data.push( Leaf27_4_Port88_fix[i11][0]);
            this.state.chartData17.datasets[13].data.push( Leaf27_4_Port89_fix[i11][0]);
            this.state.chartData17.datasets[14].data.push( Leaf27_4_Port90_fix[i11][0]);
            this.state.chartData17.datasets[15].data.push( Leaf27_4_Port91_fix[i11][0]);
            this.state.chartData17.datasets[16].data.push( Leaf27_4_Port92_fix[i11][0]);
            this.state.chartData17.datasets[17].data.push( Leaf27_4_Port93_fix[i11][0]);
            this.state.chartData17.datasets[18].data.push( Leaf27_4_Port94_fix[i11][0]);
            this.state.chartData17.datasets[19].data.push( Leaf27_4_Port95_fix[i11][0]);
            this.state.chartData17.datasets[20].data.push( Leaf27_4_Port96_fix[i11][0]);
            this.state.chartData17.datasets[21].data.push( Leaf27_4_Port97_fix[i11][0]);
            this.state.chartData17.datasets[22].data.push( Leaf27_4_Port98_fix[i11][0]);
            this.state.chartData17.datasets[23].data.push( Leaf27_4_Port99_fix[i11][0]);
            this.state.chartData17.datasets[24].data.push(Leaf27_4_Port100_fix[i11][0]);
            this.state.chartData17.datasets[25].data.push(Leaf27_4_Port101_fix[i11][0]);
            this.state.chartData17.datasets[26].data.push(Leaf27_4_Port102_fix[i11][0]);
            this.state.chartData17.datasets[27].data.push(Leaf27_4_Port103_fix[i11][0]);
            this.state.chartData17.datasets[28].data.push(Leaf27_4_Port104_fix[i11][0]);
            this.state.chartData17.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData17.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData17.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData17.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData17.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData17.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData17.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData17.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData17.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData17.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData17.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData17.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData17.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData17.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData17.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData17.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData17.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData17.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData17.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData17.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData17.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData17.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData17.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData17.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData17.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData17.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData17.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData17.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData17.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData23.datasets[0].data.push(   Leaf27_4_Port1_iUpkts[i11][0]);
            this.state.chartData23.datasets[1].data.push(   Leaf27_4_Port2_iUpkts[i11][0]);
            this.state.chartData23.datasets[2].data.push(   Leaf27_4_Port3_iUpkts[i11][0]);
            this.state.chartData23.datasets[3].data.push(   Leaf27_4_Port4_iUpkts[i11][0]);
            this.state.chartData23.datasets[4].data.push(   Leaf27_4_Port7_iUpkts[i11][0]);
            this.state.chartData23.datasets[5].data.push(  Leaf27_4_Port10_iUpkts[i11][0]);
            this.state.chartData23.datasets[6].data.push(  Leaf27_4_Port13_iUpkts[i11][0]);
            this.state.chartData23.datasets[7].data.push(  Leaf27_4_Port17_iUpkts[i11][0]);
            this.state.chartData23.datasets[8].data.push(  Leaf27_4_Port81_iUpkts[i11][0]);
            this.state.chartData23.datasets[9].data.push(  Leaf27_4_Port85_iUpkts[i11][0]);
            this.state.chartData23.datasets[10].data.push( Leaf27_4_Port86_iUpkts[i11][0]);
            this.state.chartData23.datasets[11].data.push( Leaf27_4_Port87_iUpkts[i11][0]);
            this.state.chartData23.datasets[12].data.push( Leaf27_4_Port88_iUpkts[i11][0]);
            this.state.chartData23.datasets[13].data.push( Leaf27_4_Port89_iUpkts[i11][0]);
            this.state.chartData23.datasets[14].data.push( Leaf27_4_Port90_iUpkts[i11][0]);
            this.state.chartData23.datasets[15].data.push( Leaf27_4_Port91_iUpkts[i11][0]);
            this.state.chartData23.datasets[16].data.push( Leaf27_4_Port92_iUpkts[i11][0]);
            this.state.chartData23.datasets[17].data.push( Leaf27_4_Port93_iUpkts[i11][0]);
            this.state.chartData23.datasets[18].data.push( Leaf27_4_Port94_iUpkts[i11][0]);
            this.state.chartData23.datasets[19].data.push( Leaf27_4_Port95_iUpkts[i11][0]);
            this.state.chartData23.datasets[20].data.push( Leaf27_4_Port96_iUpkts[i11][0]);
            this.state.chartData23.datasets[21].data.push( Leaf27_4_Port97_iUpkts[i11][0]);
            this.state.chartData23.datasets[22].data.push( Leaf27_4_Port98_iUpkts[i11][0]);
            this.state.chartData23.datasets[23].data.push( Leaf27_4_Port99_iUpkts[i11][0]);
            this.state.chartData23.datasets[24].data.push(Leaf27_4_Port100_iUpkts[i11][0]);
            this.state.chartData23.datasets[25].data.push(Leaf27_4_Port101_iUpkts[i11][0]);
            this.state.chartData23.datasets[26].data.push(Leaf27_4_Port102_iUpkts[i11][0]);
            this.state.chartData23.datasets[27].data.push(Leaf27_4_Port103_iUpkts[i11][0]);
            this.state.chartData23.datasets[28].data.push(Leaf27_4_Port104_iUpkts[i11][0]);
            this.state.chartData23.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData23.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData23.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData23.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData23.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData23.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData23.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData23.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData23.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData23.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData23.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData23.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData23.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData23.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData23.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData23.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData23.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData23.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData23.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData23.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData23.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData23.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData23.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData23.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData23.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData23.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData23.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData23.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData23.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData29.datasets[0].data.push(   Leaf27_4_Port1_iBpkts[i11][0]);
            this.state.chartData29.datasets[1].data.push(   Leaf27_4_Port2_iBpkts[i11][0]);
            this.state.chartData29.datasets[2].data.push(   Leaf27_4_Port3_iBpkts[i11][0]);
            this.state.chartData29.datasets[3].data.push(   Leaf27_4_Port4_iBpkts[i11][0]);
            this.state.chartData29.datasets[4].data.push(   Leaf27_4_Port7_iBpkts[i11][0]);
            this.state.chartData29.datasets[5].data.push(  Leaf27_4_Port10_iBpkts[i11][0]);
            this.state.chartData29.datasets[6].data.push(  Leaf27_4_Port13_iBpkts[i11][0]);
            this.state.chartData29.datasets[7].data.push(  Leaf27_4_Port17_iBpkts[i11][0]);
            this.state.chartData29.datasets[8].data.push(  Leaf27_4_Port81_iBpkts[i11][0]);
            this.state.chartData29.datasets[9].data.push(  Leaf27_4_Port85_iBpkts[i11][0]);
            this.state.chartData29.datasets[10].data.push( Leaf27_4_Port86_iBpkts[i11][0]);
            this.state.chartData29.datasets[11].data.push( Leaf27_4_Port87_iBpkts[i11][0]);
            this.state.chartData29.datasets[12].data.push( Leaf27_4_Port88_iBpkts[i11][0]);
            this.state.chartData29.datasets[13].data.push( Leaf27_4_Port89_iBpkts[i11][0]);
            this.state.chartData29.datasets[14].data.push( Leaf27_4_Port90_iBpkts[i11][0]);
            this.state.chartData29.datasets[15].data.push( Leaf27_4_Port91_iBpkts[i11][0]);
            this.state.chartData29.datasets[16].data.push( Leaf27_4_Port92_iBpkts[i11][0]);
            this.state.chartData29.datasets[17].data.push( Leaf27_4_Port93_iBpkts[i11][0]);
            this.state.chartData29.datasets[18].data.push( Leaf27_4_Port94_iBpkts[i11][0]);
            this.state.chartData29.datasets[19].data.push( Leaf27_4_Port95_iBpkts[i11][0]);
            this.state.chartData29.datasets[20].data.push( Leaf27_4_Port96_iBpkts[i11][0]);
            this.state.chartData29.datasets[21].data.push( Leaf27_4_Port97_iBpkts[i11][0]);
            this.state.chartData29.datasets[22].data.push( Leaf27_4_Port98_iBpkts[i11][0]);
            this.state.chartData29.datasets[23].data.push( Leaf27_4_Port99_iBpkts[i11][0]);
            this.state.chartData29.datasets[24].data.push(Leaf27_4_Port100_iBpkts[i11][0]);
            this.state.chartData29.datasets[25].data.push(Leaf27_4_Port101_iBpkts[i11][0]);
            this.state.chartData29.datasets[26].data.push(Leaf27_4_Port102_iBpkts[i11][0]);
            this.state.chartData29.datasets[27].data.push(Leaf27_4_Port103_iBpkts[i11][0]);
            this.state.chartData29.datasets[28].data.push(Leaf27_4_Port104_iBpkts[i11][0]);
            this.state.chartData29.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData29.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData29.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData29.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData29.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData29.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData29.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData29.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData29.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData29.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData29.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData29.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData29.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData29.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData29.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData29.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData29.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData29.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData29.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData29.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData29.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData29.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData29.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData29.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData29.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData29.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData29.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData29.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData29.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData35.datasets[0].data.push(   Leaf27_4_Port1_iMpkts[i11][0]);
            this.state.chartData35.datasets[1].data.push(   Leaf27_4_Port2_iMpkts[i11][0]);
            this.state.chartData35.datasets[2].data.push(   Leaf27_4_Port3_iMpkts[i11][0]);
            this.state.chartData35.datasets[3].data.push(   Leaf27_4_Port4_iMpkts[i11][0]);
            this.state.chartData35.datasets[4].data.push(   Leaf27_4_Port7_iMpkts[i11][0]);
            this.state.chartData35.datasets[5].data.push(  Leaf27_4_Port10_iMpkts[i11][0]);
            this.state.chartData35.datasets[6].data.push(  Leaf27_4_Port13_iMpkts[i11][0]);
            this.state.chartData35.datasets[7].data.push(  Leaf27_4_Port17_iMpkts[i11][0]);
            this.state.chartData35.datasets[8].data.push(  Leaf27_4_Port81_iMpkts[i11][0]);
            this.state.chartData35.datasets[9].data.push(  Leaf27_4_Port85_iMpkts[i11][0]);
            this.state.chartData35.datasets[10].data.push( Leaf27_4_Port86_iMpkts[i11][0]);
            this.state.chartData35.datasets[11].data.push( Leaf27_4_Port87_iMpkts[i11][0]);
            this.state.chartData35.datasets[12].data.push( Leaf27_4_Port88_iMpkts[i11][0]);
            this.state.chartData35.datasets[13].data.push( Leaf27_4_Port89_iMpkts[i11][0]);
            this.state.chartData35.datasets[14].data.push( Leaf27_4_Port90_iMpkts[i11][0]);
            this.state.chartData35.datasets[15].data.push( Leaf27_4_Port91_iMpkts[i11][0]);
            this.state.chartData35.datasets[16].data.push( Leaf27_4_Port92_iMpkts[i11][0]);
            this.state.chartData35.datasets[17].data.push( Leaf27_4_Port93_iMpkts[i11][0]);
            this.state.chartData35.datasets[18].data.push( Leaf27_4_Port94_iMpkts[i11][0]);
            this.state.chartData35.datasets[19].data.push( Leaf27_4_Port95_iMpkts[i11][0]);
            this.state.chartData35.datasets[20].data.push( Leaf27_4_Port96_iMpkts[i11][0]);
            this.state.chartData35.datasets[21].data.push( Leaf27_4_Port97_iMpkts[i11][0]);
            this.state.chartData35.datasets[22].data.push( Leaf27_4_Port98_iMpkts[i11][0]);
            this.state.chartData35.datasets[23].data.push( Leaf27_4_Port99_iMpkts[i11][0]);
            this.state.chartData35.datasets[24].data.push(Leaf27_4_Port100_iMpkts[i11][0]);
            this.state.chartData35.datasets[25].data.push(Leaf27_4_Port101_iMpkts[i11][0]);
            this.state.chartData35.datasets[26].data.push(Leaf27_4_Port102_iMpkts[i11][0]);
            this.state.chartData35.datasets[27].data.push(Leaf27_4_Port103_iMpkts[i11][0]);
            this.state.chartData35.datasets[28].data.push(Leaf27_4_Port104_iMpkts[i11][0]);
            this.state.chartData35.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData35.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData35.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData35.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData35.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData35.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData35.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData35.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData35.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData35.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData35.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData35.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData35.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData35.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData35.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData35.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData35.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData35.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData35.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData35.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData35.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData35.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData35.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData35.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData35.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData35.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData35.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData35.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData35.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData41.datasets[0].data.push(   Leaf27_4_Port1_iCongDrops[i11][0]);
            this.state.chartData41.datasets[1].data.push(   Leaf27_4_Port2_iCongDrops[i11][0]);
            this.state.chartData41.datasets[2].data.push(   Leaf27_4_Port3_iCongDrops[i11][0]);
            this.state.chartData41.datasets[3].data.push(   Leaf27_4_Port4_iCongDrops[i11][0]);
            this.state.chartData41.datasets[4].data.push(   Leaf27_4_Port7_iCongDrops[i11][0]);
            this.state.chartData41.datasets[5].data.push(  Leaf27_4_Port10_iCongDrops[i11][0]);
            this.state.chartData41.datasets[6].data.push(  Leaf27_4_Port13_iCongDrops[i11][0]);
            this.state.chartData41.datasets[7].data.push(  Leaf27_4_Port17_iCongDrops[i11][0]);
            this.state.chartData41.datasets[8].data.push(  Leaf27_4_Port81_iCongDrops[i11][0]);
            this.state.chartData41.datasets[9].data.push(  Leaf27_4_Port85_iCongDrops[i11][0]);
            this.state.chartData41.datasets[10].data.push( Leaf27_4_Port86_iCongDrops[i11][0]);
            this.state.chartData41.datasets[11].data.push( Leaf27_4_Port87_iCongDrops[i11][0]);
            this.state.chartData41.datasets[12].data.push( Leaf27_4_Port88_iCongDrops[i11][0]);
            this.state.chartData41.datasets[13].data.push( Leaf27_4_Port89_iCongDrops[i11][0]);
            this.state.chartData41.datasets[14].data.push( Leaf27_4_Port90_iCongDrops[i11][0]);
            this.state.chartData41.datasets[15].data.push( Leaf27_4_Port91_iCongDrops[i11][0]);
            this.state.chartData41.datasets[16].data.push( Leaf27_4_Port92_iCongDrops[i11][0]);
            this.state.chartData41.datasets[17].data.push( Leaf27_4_Port93_iCongDrops[i11][0]);
            this.state.chartData41.datasets[18].data.push( Leaf27_4_Port94_iCongDrops[i11][0]);
            this.state.chartData41.datasets[19].data.push( Leaf27_4_Port95_iCongDrops[i11][0]);
            this.state.chartData41.datasets[20].data.push( Leaf27_4_Port96_iCongDrops[i11][0]);
            this.state.chartData41.datasets[21].data.push( Leaf27_4_Port97_iCongDrops[i11][0]);
            this.state.chartData41.datasets[22].data.push( Leaf27_4_Port98_iCongDrops[i11][0]);
            this.state.chartData41.datasets[23].data.push( Leaf27_4_Port99_iCongDrops[i11][0]);
            this.state.chartData41.datasets[24].data.push(Leaf27_4_Port100_iCongDrops[i11][0]);
            this.state.chartData41.datasets[25].data.push(Leaf27_4_Port101_iCongDrops[i11][0]);
            this.state.chartData41.datasets[26].data.push(Leaf27_4_Port102_iCongDrops[i11][0]);
            this.state.chartData41.datasets[27].data.push(Leaf27_4_Port103_iCongDrops[i11][0]);
            this.state.chartData41.datasets[28].data.push(Leaf27_4_Port104_iCongDrops[i11][0]);
            this.state.chartData41.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData41.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData41.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData41.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData41.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData41.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData41.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData41.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData41.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData41.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData41.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData41.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData41.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData41.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData41.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData41.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData41.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData41.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData41.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData41.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData41.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData41.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData41.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData41.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData41.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData41.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData41.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData41.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData41.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData47.datasets[0].data.push(   Leaf27_4_Port1_ierrs[i11][0]);
            this.state.chartData47.datasets[1].data.push(   Leaf27_4_Port2_ierrs[i11][0]);
            this.state.chartData47.datasets[2].data.push(   Leaf27_4_Port3_ierrs[i11][0]);
            this.state.chartData47.datasets[3].data.push(   Leaf27_4_Port4_ierrs[i11][0]);
            this.state.chartData47.datasets[4].data.push(   Leaf27_4_Port7_ierrs[i11][0]);
            this.state.chartData47.datasets[5].data.push(  Leaf27_4_Port10_ierrs[i11][0]);
            this.state.chartData47.datasets[6].data.push(  Leaf27_4_Port13_ierrs[i11][0]);
            this.state.chartData47.datasets[7].data.push(  Leaf27_4_Port17_ierrs[i11][0]);
            this.state.chartData47.datasets[8].data.push(  Leaf27_4_Port81_ierrs[i11][0]);
            this.state.chartData47.datasets[9].data.push(  Leaf27_4_Port85_ierrs[i11][0]);
            this.state.chartData47.datasets[10].data.push( Leaf27_4_Port86_ierrs[i11][0]);
            this.state.chartData47.datasets[11].data.push( Leaf27_4_Port87_ierrs[i11][0]);
            this.state.chartData47.datasets[12].data.push( Leaf27_4_Port88_ierrs[i11][0]);
            this.state.chartData47.datasets[13].data.push( Leaf27_4_Port89_ierrs[i11][0]);
            this.state.chartData47.datasets[14].data.push( Leaf27_4_Port90_ierrs[i11][0]);
            this.state.chartData47.datasets[15].data.push( Leaf27_4_Port91_ierrs[i11][0]);
            this.state.chartData47.datasets[16].data.push( Leaf27_4_Port92_ierrs[i11][0]);
            this.state.chartData47.datasets[17].data.push( Leaf27_4_Port93_ierrs[i11][0]);
            this.state.chartData47.datasets[18].data.push( Leaf27_4_Port94_ierrs[i11][0]);
            this.state.chartData47.datasets[19].data.push( Leaf27_4_Port95_ierrs[i11][0]);
            this.state.chartData47.datasets[20].data.push( Leaf27_4_Port96_ierrs[i11][0]);
            this.state.chartData47.datasets[21].data.push( Leaf27_4_Port97_ierrs[i11][0]);
            this.state.chartData47.datasets[22].data.push( Leaf27_4_Port98_ierrs[i11][0]);
            this.state.chartData47.datasets[23].data.push( Leaf27_4_Port99_ierrs[i11][0]);
            this.state.chartData47.datasets[24].data.push(Leaf27_4_Port100_ierrs[i11][0]);
            this.state.chartData47.datasets[25].data.push(Leaf27_4_Port101_ierrs[i11][0]);
            this.state.chartData47.datasets[26].data.push(Leaf27_4_Port102_ierrs[i11][0]);
            this.state.chartData47.datasets[27].data.push(Leaf27_4_Port103_ierrs[i11][0]);
            this.state.chartData47.datasets[28].data.push(Leaf27_4_Port104_ierrs[i11][0]);
            this.state.chartData47.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData47.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData47.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData47.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData47.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData47.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData47.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData47.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData47.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData47.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData47.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData47.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData47.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData47.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData47.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData47.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData47.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData47.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData47.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData47.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData47.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData47.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData47.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData47.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData47.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData47.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData47.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData47.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData47.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData53.datasets[0].data.push(   Leaf27_4_Port1_obytes[i11][0]);
            this.state.chartData53.datasets[1].data.push(   Leaf27_4_Port2_obytes[i11][0]);
            this.state.chartData53.datasets[2].data.push(   Leaf27_4_Port3_obytes[i11][0]);
            this.state.chartData53.datasets[3].data.push(   Leaf27_4_Port4_obytes[i11][0]);
            this.state.chartData53.datasets[4].data.push(   Leaf27_4_Port7_obytes[i11][0]);
            this.state.chartData53.datasets[5].data.push(  Leaf27_4_Port10_obytes[i11][0]);
            this.state.chartData53.datasets[6].data.push(  Leaf27_4_Port13_obytes[i11][0]);
            this.state.chartData53.datasets[7].data.push(  Leaf27_4_Port17_obytes[i11][0]);
            this.state.chartData53.datasets[8].data.push(  Leaf27_4_Port81_obytes[i11][0]);
            this.state.chartData53.datasets[9].data.push(  Leaf27_4_Port85_obytes[i11][0]);
            this.state.chartData53.datasets[10].data.push( Leaf27_4_Port86_obytes[i11][0]);
            this.state.chartData53.datasets[11].data.push( Leaf27_4_Port87_obytes[i11][0]);
            this.state.chartData53.datasets[12].data.push( Leaf27_4_Port88_obytes[i11][0]);
            this.state.chartData53.datasets[13].data.push( Leaf27_4_Port89_obytes[i11][0]);
            this.state.chartData53.datasets[14].data.push( Leaf27_4_Port90_obytes[i11][0]);
            this.state.chartData53.datasets[15].data.push( Leaf27_4_Port91_obytes[i11][0]);
            this.state.chartData53.datasets[16].data.push( Leaf27_4_Port92_obytes[i11][0]);
            this.state.chartData53.datasets[17].data.push( Leaf27_4_Port93_obytes[i11][0]);
            this.state.chartData53.datasets[18].data.push( Leaf27_4_Port94_obytes[i11][0]);
            this.state.chartData53.datasets[19].data.push( Leaf27_4_Port95_obytes[i11][0]);
            this.state.chartData53.datasets[20].data.push( Leaf27_4_Port96_obytes[i11][0]);
            this.state.chartData53.datasets[21].data.push( Leaf27_4_Port97_obytes[i11][0]);
            this.state.chartData53.datasets[22].data.push( Leaf27_4_Port98_obytes[i11][0]);
            this.state.chartData53.datasets[23].data.push( Leaf27_4_Port99_obytes[i11][0]);
            this.state.chartData53.datasets[24].data.push(Leaf27_4_Port100_obytes[i11][0]);
            this.state.chartData53.datasets[25].data.push(Leaf27_4_Port101_obytes[i11][0]);
            this.state.chartData53.datasets[26].data.push(Leaf27_4_Port102_obytes[i11][0]);
            this.state.chartData53.datasets[27].data.push(Leaf27_4_Port103_obytes[i11][0]);
            this.state.chartData53.datasets[28].data.push(Leaf27_4_Port104_obytes[i11][0]);
            this.state.chartData53.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData53.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData53.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData53.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData53.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData53.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData53.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData53.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData53.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData53.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData53.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData53.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData53.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData53.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData53.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData53.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData53.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData53.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData53.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData53.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData53.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData53.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData53.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData53.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData53.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData53.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData53.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData53.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData53.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData59.datasets[0].data.push(   Leaf27_4_Port1_oUpkts[i11][0]);
            this.state.chartData59.datasets[1].data.push(   Leaf27_4_Port2_oUpkts[i11][0]);
            this.state.chartData59.datasets[2].data.push(   Leaf27_4_Port3_oUpkts[i11][0]);
            this.state.chartData59.datasets[3].data.push(   Leaf27_4_Port4_oUpkts[i11][0]);
            this.state.chartData59.datasets[4].data.push(   Leaf27_4_Port7_oUpkts[i11][0]);
            this.state.chartData59.datasets[5].data.push(  Leaf27_4_Port10_oUpkts[i11][0]);
            this.state.chartData59.datasets[6].data.push(  Leaf27_4_Port13_oUpkts[i11][0]);
            this.state.chartData59.datasets[7].data.push(  Leaf27_4_Port17_oUpkts[i11][0]);
            this.state.chartData59.datasets[8].data.push(  Leaf27_4_Port81_oUpkts[i11][0]);
            this.state.chartData59.datasets[9].data.push(  Leaf27_4_Port85_oUpkts[i11][0]);
            this.state.chartData59.datasets[10].data.push( Leaf27_4_Port86_oUpkts[i11][0]);
            this.state.chartData59.datasets[11].data.push( Leaf27_4_Port87_oUpkts[i11][0]);
            this.state.chartData59.datasets[12].data.push( Leaf27_4_Port88_oUpkts[i11][0]);
            this.state.chartData59.datasets[13].data.push( Leaf27_4_Port89_oUpkts[i11][0]);
            this.state.chartData59.datasets[14].data.push( Leaf27_4_Port90_oUpkts[i11][0]);
            this.state.chartData59.datasets[15].data.push( Leaf27_4_Port91_oUpkts[i11][0]);
            this.state.chartData59.datasets[16].data.push( Leaf27_4_Port92_oUpkts[i11][0]);
            this.state.chartData59.datasets[17].data.push( Leaf27_4_Port93_oUpkts[i11][0]);
            this.state.chartData59.datasets[18].data.push( Leaf27_4_Port94_oUpkts[i11][0]);
            this.state.chartData59.datasets[19].data.push( Leaf27_4_Port95_oUpkts[i11][0]);
            this.state.chartData59.datasets[20].data.push( Leaf27_4_Port96_oUpkts[i11][0]);
            this.state.chartData59.datasets[21].data.push( Leaf27_4_Port97_oUpkts[i11][0]);
            this.state.chartData59.datasets[22].data.push( Leaf27_4_Port98_oUpkts[i11][0]);
            this.state.chartData59.datasets[23].data.push( Leaf27_4_Port99_oUpkts[i11][0]);
            this.state.chartData59.datasets[24].data.push(Leaf27_4_Port100_oUpkts[i11][0]);
            this.state.chartData59.datasets[25].data.push(Leaf27_4_Port101_oUpkts[i11][0]);
            this.state.chartData59.datasets[26].data.push(Leaf27_4_Port102_oUpkts[i11][0]);
            this.state.chartData59.datasets[27].data.push(Leaf27_4_Port103_oUpkts[i11][0]);
            this.state.chartData59.datasets[28].data.push(Leaf27_4_Port104_oUpkts[i11][0]);
            this.state.chartData59.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData59.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData59.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData59.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData59.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData59.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData59.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData59.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData59.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData59.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData59.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData59.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData59.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData59.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData59.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData59.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData59.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData59.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData59.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData59.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData59.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData59.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData59.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData59.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData59.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData59.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData59.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData59.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData59.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData65.datasets[0].data.push(   Leaf27_4_Port1_oBpkts[i11][0]);
            this.state.chartData65.datasets[1].data.push(   Leaf27_4_Port2_oBpkts[i11][0]);
            this.state.chartData65.datasets[2].data.push(   Leaf27_4_Port3_oBpkts[i11][0]);
            this.state.chartData65.datasets[3].data.push(   Leaf27_4_Port4_oBpkts[i11][0]);
            this.state.chartData65.datasets[4].data.push(   Leaf27_4_Port7_oBpkts[i11][0]);
            this.state.chartData65.datasets[5].data.push(  Leaf27_4_Port10_oBpkts[i11][0]);
            this.state.chartData65.datasets[6].data.push(  Leaf27_4_Port13_oBpkts[i11][0]);
            this.state.chartData65.datasets[7].data.push(  Leaf27_4_Port17_oBpkts[i11][0]);
            this.state.chartData65.datasets[8].data.push(  Leaf27_4_Port81_oBpkts[i11][0]);
            this.state.chartData65.datasets[9].data.push(  Leaf27_4_Port85_oBpkts[i11][0]);
            this.state.chartData65.datasets[10].data.push( Leaf27_4_Port86_oBpkts[i11][0]);
            this.state.chartData65.datasets[11].data.push( Leaf27_4_Port87_oBpkts[i11][0]);
            this.state.chartData65.datasets[12].data.push( Leaf27_4_Port88_oBpkts[i11][0]);
            this.state.chartData65.datasets[13].data.push( Leaf27_4_Port89_oBpkts[i11][0]);
            this.state.chartData65.datasets[14].data.push( Leaf27_4_Port90_oBpkts[i11][0]);
            this.state.chartData65.datasets[15].data.push( Leaf27_4_Port91_oBpkts[i11][0]);
            this.state.chartData65.datasets[16].data.push( Leaf27_4_Port92_oBpkts[i11][0]);
            this.state.chartData65.datasets[17].data.push( Leaf27_4_Port93_oBpkts[i11][0]);
            this.state.chartData65.datasets[18].data.push( Leaf27_4_Port94_oBpkts[i11][0]);
            this.state.chartData65.datasets[19].data.push( Leaf27_4_Port95_oBpkts[i11][0]);
            this.state.chartData65.datasets[20].data.push( Leaf27_4_Port96_oBpkts[i11][0]);
            this.state.chartData65.datasets[21].data.push( Leaf27_4_Port97_oBpkts[i11][0]);
            this.state.chartData65.datasets[22].data.push( Leaf27_4_Port98_oBpkts[i11][0]);
            this.state.chartData65.datasets[23].data.push( Leaf27_4_Port99_oBpkts[i11][0]);
            this.state.chartData65.datasets[24].data.push(Leaf27_4_Port100_oBpkts[i11][0]);
            this.state.chartData65.datasets[25].data.push(Leaf27_4_Port101_oBpkts[i11][0]);
            this.state.chartData65.datasets[26].data.push(Leaf27_4_Port102_oBpkts[i11][0]);
            this.state.chartData65.datasets[27].data.push(Leaf27_4_Port103_oBpkts[i11][0]);
            this.state.chartData65.datasets[28].data.push(Leaf27_4_Port104_oBpkts[i11][0]);
            this.state.chartData65.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData65.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData65.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData65.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData65.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData65.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData65.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData65.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData65.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData65.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData65.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData65.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData65.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData65.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData65.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData65.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData65.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData65.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData65.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData65.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData65.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData65.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData65.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData65.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData65.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData65.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData65.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData65.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData65.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData71.datasets[0].data.push(   Leaf27_4_Port1_oMpkts[i11][0]);
            this.state.chartData71.datasets[1].data.push(   Leaf27_4_Port2_oMpkts[i11][0]);
            this.state.chartData71.datasets[2].data.push(   Leaf27_4_Port3_oMpkts[i11][0]);
            this.state.chartData71.datasets[3].data.push(   Leaf27_4_Port4_oMpkts[i11][0]);
            this.state.chartData71.datasets[4].data.push(   Leaf27_4_Port7_oMpkts[i11][0]);
            this.state.chartData71.datasets[5].data.push(  Leaf27_4_Port10_oMpkts[i11][0]);
            this.state.chartData71.datasets[6].data.push(  Leaf27_4_Port13_oMpkts[i11][0]);
            this.state.chartData71.datasets[7].data.push(  Leaf27_4_Port17_oMpkts[i11][0]);
            this.state.chartData71.datasets[8].data.push(  Leaf27_4_Port81_oMpkts[i11][0]);
            this.state.chartData71.datasets[9].data.push(  Leaf27_4_Port85_oMpkts[i11][0]);
            this.state.chartData71.datasets[10].data.push( Leaf27_4_Port86_oMpkts[i11][0]);
            this.state.chartData71.datasets[11].data.push( Leaf27_4_Port87_oMpkts[i11][0]);
            this.state.chartData71.datasets[12].data.push( Leaf27_4_Port88_oMpkts[i11][0]);
            this.state.chartData71.datasets[13].data.push( Leaf27_4_Port89_oMpkts[i11][0]);
            this.state.chartData71.datasets[14].data.push( Leaf27_4_Port90_oMpkts[i11][0]);
            this.state.chartData71.datasets[15].data.push( Leaf27_4_Port91_oMpkts[i11][0]);
            this.state.chartData71.datasets[16].data.push( Leaf27_4_Port92_oMpkts[i11][0]);
            this.state.chartData71.datasets[17].data.push( Leaf27_4_Port93_oMpkts[i11][0]);
            this.state.chartData71.datasets[18].data.push( Leaf27_4_Port94_oMpkts[i11][0]);
            this.state.chartData71.datasets[19].data.push( Leaf27_4_Port95_oMpkts[i11][0]);
            this.state.chartData71.datasets[20].data.push( Leaf27_4_Port96_oMpkts[i11][0]);
            this.state.chartData71.datasets[21].data.push( Leaf27_4_Port97_oMpkts[i11][0]);
            this.state.chartData71.datasets[22].data.push( Leaf27_4_Port98_oMpkts[i11][0]);
            this.state.chartData71.datasets[23].data.push( Leaf27_4_Port99_oMpkts[i11][0]);
            this.state.chartData71.datasets[24].data.push(Leaf27_4_Port100_oMpkts[i11][0]);
            this.state.chartData71.datasets[25].data.push(Leaf27_4_Port101_oMpkts[i11][0]);
            this.state.chartData71.datasets[26].data.push(Leaf27_4_Port102_oMpkts[i11][0]);
            this.state.chartData71.datasets[27].data.push(Leaf27_4_Port103_oMpkts[i11][0]);
            this.state.chartData71.datasets[28].data.push(Leaf27_4_Port104_oMpkts[i11][0]);
            this.state.chartData71.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData71.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData71.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData71.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData71.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData71.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData71.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData71.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData71.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData71.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData71.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData71.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData71.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData71.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData71.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData71.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData71.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData71.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData71.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData71.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData71.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData71.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData71.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData71.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData71.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData71.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData71.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData71.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData71.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData77.datasets[0].data.push(   Leaf27_4_Port1_oCongDrops[i11][0]);
            this.state.chartData77.datasets[1].data.push(   Leaf27_4_Port2_oCongDrops[i11][0]);
            this.state.chartData77.datasets[2].data.push(   Leaf27_4_Port3_oCongDrops[i11][0]);
            this.state.chartData77.datasets[3].data.push(   Leaf27_4_Port4_oCongDrops[i11][0]);
            this.state.chartData77.datasets[4].data.push(   Leaf27_4_Port7_oCongDrops[i11][0]);
            this.state.chartData77.datasets[5].data.push(  Leaf27_4_Port10_oCongDrops[i11][0]);
            this.state.chartData77.datasets[6].data.push(  Leaf27_4_Port13_oCongDrops[i11][0]);
            this.state.chartData77.datasets[7].data.push(  Leaf27_4_Port17_oCongDrops[i11][0]);
            this.state.chartData77.datasets[8].data.push(  Leaf27_4_Port81_oCongDrops[i11][0]);
            this.state.chartData77.datasets[9].data.push(  Leaf27_4_Port85_oCongDrops[i11][0]);
            this.state.chartData77.datasets[10].data.push( Leaf27_4_Port86_oCongDrops[i11][0]);
            this.state.chartData77.datasets[11].data.push( Leaf27_4_Port87_oCongDrops[i11][0]);
            this.state.chartData77.datasets[12].data.push( Leaf27_4_Port88_oCongDrops[i11][0]);
            this.state.chartData77.datasets[13].data.push( Leaf27_4_Port89_oCongDrops[i11][0]);
            this.state.chartData77.datasets[14].data.push( Leaf27_4_Port90_oCongDrops[i11][0]);
            this.state.chartData77.datasets[15].data.push( Leaf27_4_Port91_oCongDrops[i11][0]);
            this.state.chartData77.datasets[16].data.push( Leaf27_4_Port92_oCongDrops[i11][0]);
            this.state.chartData77.datasets[17].data.push( Leaf27_4_Port93_oCongDrops[i11][0]);
            this.state.chartData77.datasets[18].data.push( Leaf27_4_Port94_oCongDrops[i11][0]);
            this.state.chartData77.datasets[19].data.push( Leaf27_4_Port95_oCongDrops[i11][0]);
            this.state.chartData77.datasets[20].data.push( Leaf27_4_Port96_oCongDrops[i11][0]);
            this.state.chartData77.datasets[21].data.push( Leaf27_4_Port97_oCongDrops[i11][0]);
            this.state.chartData77.datasets[22].data.push( Leaf27_4_Port98_oCongDrops[i11][0]);
            this.state.chartData77.datasets[23].data.push( Leaf27_4_Port99_oCongDrops[i11][0]);
            this.state.chartData77.datasets[24].data.push(Leaf27_4_Port100_oCongDrops[i11][0]);
            this.state.chartData77.datasets[25].data.push(Leaf27_4_Port101_oCongDrops[i11][0]);
            this.state.chartData77.datasets[26].data.push(Leaf27_4_Port102_oCongDrops[i11][0]);
            this.state.chartData77.datasets[27].data.push(Leaf27_4_Port103_oCongDrops[i11][0]);
            this.state.chartData77.datasets[28].data.push(Leaf27_4_Port104_oCongDrops[i11][0]);
            this.state.chartData77.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData77.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData77.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData77.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData77.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData77.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData77.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData77.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData77.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData77.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData77.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData77.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData77.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData77.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData77.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData77.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData77.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData77.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData77.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData77.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData77.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData77.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData77.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData77.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData77.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData77.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData77.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData77.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData77.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData83.datasets[0].data.push(   Leaf27_4_Port1_oerrs[i11][0]);
            this.state.chartData83.datasets[1].data.push(   Leaf27_4_Port2_oerrs[i11][0]);
            this.state.chartData83.datasets[2].data.push(   Leaf27_4_Port3_oerrs[i11][0]);
            this.state.chartData83.datasets[3].data.push(   Leaf27_4_Port4_oerrs[i11][0]);
            this.state.chartData83.datasets[4].data.push(   Leaf27_4_Port7_oerrs[i11][0]);
            this.state.chartData83.datasets[5].data.push(  Leaf27_4_Port10_oerrs[i11][0]);
            this.state.chartData83.datasets[6].data.push(  Leaf27_4_Port13_oerrs[i11][0]);
            this.state.chartData83.datasets[7].data.push(  Leaf27_4_Port17_oerrs[i11][0]);
            this.state.chartData83.datasets[8].data.push(  Leaf27_4_Port81_oerrs[i11][0]);
            this.state.chartData83.datasets[9].data.push(  Leaf27_4_Port85_oerrs[i11][0]);
            this.state.chartData83.datasets[10].data.push( Leaf27_4_Port86_oerrs[i11][0]);
            this.state.chartData83.datasets[11].data.push( Leaf27_4_Port87_oerrs[i11][0]);
            this.state.chartData83.datasets[12].data.push( Leaf27_4_Port88_oerrs[i11][0]);
            this.state.chartData83.datasets[13].data.push( Leaf27_4_Port89_oerrs[i11][0]);
            this.state.chartData83.datasets[14].data.push( Leaf27_4_Port90_oerrs[i11][0]);
            this.state.chartData83.datasets[15].data.push( Leaf27_4_Port91_oerrs[i11][0]);
            this.state.chartData83.datasets[16].data.push( Leaf27_4_Port92_oerrs[i11][0]);
            this.state.chartData83.datasets[17].data.push( Leaf27_4_Port93_oerrs[i11][0]);
            this.state.chartData83.datasets[18].data.push( Leaf27_4_Port94_oerrs[i11][0]);
            this.state.chartData83.datasets[19].data.push( Leaf27_4_Port95_oerrs[i11][0]);
            this.state.chartData83.datasets[20].data.push( Leaf27_4_Port96_oerrs[i11][0]);
            this.state.chartData83.datasets[21].data.push( Leaf27_4_Port97_oerrs[i11][0]);
            this.state.chartData83.datasets[22].data.push( Leaf27_4_Port98_oerrs[i11][0]);
            this.state.chartData83.datasets[23].data.push( Leaf27_4_Port99_oerrs[i11][0]);
            this.state.chartData83.datasets[24].data.push(Leaf27_4_Port100_oerrs[i11][0]);
            this.state.chartData83.datasets[25].data.push(Leaf27_4_Port101_oerrs[i11][0]);
            this.state.chartData83.datasets[26].data.push(Leaf27_4_Port102_oerrs[i11][0]);
            this.state.chartData83.datasets[27].data.push(Leaf27_4_Port103_oerrs[i11][0]);
            this.state.chartData83.datasets[28].data.push(Leaf27_4_Port104_oerrs[i11][0]);
            this.state.chartData83.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData83.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData83.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData83.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData83.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData83.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData83.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData83.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData83.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData83.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData83.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData83.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData83.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData83.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData83.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData83.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData83.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData83.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData83.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData83.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData83.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData83.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData83.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData83.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData83.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData83.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData83.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData83.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData83.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');

            this.state.chartData89.datasets[0].data.push(   Leaf27_4_Port1_mtu_errs[i11][0]);
            this.state.chartData89.datasets[1].data.push(   Leaf27_4_Port2_mtu_errs[i11][0]);
            this.state.chartData89.datasets[2].data.push(   Leaf27_4_Port3_mtu_errs[i11][0]);
            this.state.chartData89.datasets[3].data.push(   Leaf27_4_Port4_mtu_errs[i11][0]);
            this.state.chartData89.datasets[4].data.push(   Leaf27_4_Port7_mtu_errs[i11][0]);
            this.state.chartData89.datasets[5].data.push(  Leaf27_4_Port10_mtu_errs[i11][0]);
            this.state.chartData89.datasets[6].data.push(  Leaf27_4_Port13_mtu_errs[i11][0]);
            this.state.chartData89.datasets[7].data.push(  Leaf27_4_Port17_mtu_errs[i11][0]);
            this.state.chartData89.datasets[8].data.push(  Leaf27_4_Port81_mtu_errs[i11][0]);
            this.state.chartData89.datasets[9].data.push(  Leaf27_4_Port85_mtu_errs[i11][0]);
            this.state.chartData89.datasets[10].data.push( Leaf27_4_Port86_mtu_errs[i11][0]);
            this.state.chartData89.datasets[11].data.push( Leaf27_4_Port87_mtu_errs[i11][0]);
            this.state.chartData89.datasets[12].data.push( Leaf27_4_Port88_mtu_errs[i11][0]);
            this.state.chartData89.datasets[13].data.push( Leaf27_4_Port89_mtu_errs[i11][0]);
            this.state.chartData89.datasets[14].data.push( Leaf27_4_Port90_mtu_errs[i11][0]);
            this.state.chartData89.datasets[15].data.push( Leaf27_4_Port91_mtu_errs[i11][0]);
            this.state.chartData89.datasets[16].data.push( Leaf27_4_Port92_mtu_errs[i11][0]);
            this.state.chartData89.datasets[17].data.push( Leaf27_4_Port93_mtu_errs[i11][0]);
            this.state.chartData89.datasets[18].data.push( Leaf27_4_Port94_mtu_errs[i11][0]);
            this.state.chartData89.datasets[19].data.push( Leaf27_4_Port95_mtu_errs[i11][0]);
            this.state.chartData89.datasets[20].data.push( Leaf27_4_Port96_mtu_errs[i11][0]);
            this.state.chartData89.datasets[21].data.push( Leaf27_4_Port97_mtu_errs[i11][0]);
            this.state.chartData89.datasets[22].data.push( Leaf27_4_Port98_mtu_errs[i11][0]);
            this.state.chartData89.datasets[23].data.push( Leaf27_4_Port99_mtu_errs[i11][0]);
            this.state.chartData89.datasets[24].data.push(Leaf27_4_Port100_mtu_errs[i11][0]);
            this.state.chartData89.datasets[25].data.push(Leaf27_4_Port101_mtu_errs[i11][0]);
            this.state.chartData89.datasets[26].data.push(Leaf27_4_Port102_mtu_errs[i11][0]);
            this.state.chartData89.datasets[27].data.push(Leaf27_4_Port103_mtu_errs[i11][0]);
            this.state.chartData89.datasets[28].data.push(Leaf27_4_Port104_mtu_errs[i11][0]);
            this.state.chartData89.datasets[0].backgroundColor.push('rgba(25,175,62,0.8');
            this.state.chartData89.datasets[1].backgroundColor.push('rgba(35,155,70,0.8');
            this.state.chartData89.datasets[2].backgroundColor.push('rgba(255,175,110,0.8');
            this.state.chartData89.datasets[3].backgroundColor.push('rgba(25,195,40,0.8');
            this.state.chartData89.datasets[4].backgroundColor.push('rgba(25,125,70,0.8');
            this.state.chartData89.datasets[5].backgroundColor.push('rgba(15,115,40,0.8');
            this.state.chartData89.datasets[6].backgroundColor.push('rgba(55,75,140,0.8');
            this.state.chartData89.datasets[7].backgroundColor.push('rgba(45,75,160,0.8');
            this.state.chartData89.datasets[8].backgroundColor.push('rgba(35,75,175,0.8');
            this.state.chartData89.datasets[9].backgroundColor.push('rgba(30,60,190,0.8');
            this.state.chartData89.datasets[10].backgroundColor.push('rgba(25,55,200,0.8');
            this.state.chartData89.datasets[11].backgroundColor.push('rgba(20,80,210,0.8');
            this.state.chartData89.datasets[12].backgroundColor.push('rgba(100,140,100,0.8');
            this.state.chartData89.datasets[13].backgroundColor.push('rgba(100,150,100,0.8');
            this.state.chartData89.datasets[14].backgroundColor.push('rgba(105,160,105,0.8');
            this.state.chartData89.datasets[15].backgroundColor.push('rgba(105,170,105,0.8');
            this.state.chartData89.datasets[16].backgroundColor.push('rgba(115,180,105,0.8');
            this.state.chartData89.datasets[17].backgroundColor.push('rgba(120,185,115,0.8');
            this.state.chartData89.datasets[18].backgroundColor.push('rgba(125,195,120,0.8');
            this.state.chartData89.datasets[19].backgroundColor.push('rgba(130,200,115,0.8');
            this.state.chartData89.datasets[20].backgroundColor.push('rgba(130,210,110,0.8');
            this.state.chartData89.datasets[21].backgroundColor.push('rgba(115,215,100,0.8');
            this.state.chartData89.datasets[22].backgroundColor.push('rgba(110,225,110,0.8');
            this.state.chartData89.datasets[23].backgroundColor.push('rgba(180,35,150,0.8');
            this.state.chartData89.datasets[24].backgroundColor.push('rgba(190,35,140,0.8');
            this.state.chartData89.datasets[25].backgroundColor.push('rgba(200,35,130,0.8');
            this.state.chartData89.datasets[26].backgroundColor.push('rgba(210,35,120,0.8');
            this.state.chartData89.datasets[27].backgroundColor.push('rgba(220,35,110,0.8');
            this.state.chartData89.datasets[28].backgroundColor.push('rgba(220,35,110,0.8');
         }
        }


    return(
        <div className="chart3">
        <div className="bar"> <Line
              data={this.state.chartData17}
              options={{
                  title: {
                  display: this.state.displayTitle,
                  text: 'NRU_10.27.28.111_STP_PORT EVENT ibytes for Leaf-04',
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
                 data={this.state.chartData23}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iUpkts for Leaf-04',
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
                 data={this.state.chartData29}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iBpkts for Leaf-04',
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
                 data={this.state.chartData35}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iMpkts for Leaf-04',
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
                 data={this.state.chartData41}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT iCongDrops for Leaf-04',
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
                 data={this.state.chartData47}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT ierrs for Leaf-04',
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
                 data={this.state.chartData53}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT obytes for Leaf-04',
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
                 data={this.state.chartData59}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oUpkts for Leaf-04',
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
                 data={this.state.chartData65}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oBpkts for Leaf-04',
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
                 data={this.state.chartData71}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oMpkts for Leaf-04',
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
                 data={this.state.chartData77}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oCongDrops for Leaf-04',
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
                 data={this.state.chartData83}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT oerrs for Leaf-04',
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
                  data={this.state.chartData89}
                  options={{
                      title: {
                      display: this.state.displayTitle,
                      text: 'NRU_10.27.28.111_STP_PORT EVENT mtu-oerrs for Leaf-04',
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
        </div></div></div></div></div></div></div></div>
        </div></div></div></div></div>
    )
    }
}
export default NRU_Ports_Leaf4;