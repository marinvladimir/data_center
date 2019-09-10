import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import './Chart.css';
import myText3 from './RteHost_CPU_LOAD_CmdMonitor';
import myText4 from './RteHost-002_CPU_LOAD_CmdMonitor';
import myText11 from './RteHost_RAM_USAGE_CmdMonitor';
import myText12 from './RteHost-002_RAM_USAGE_CmdMonitor';
import myText5 from './RteHost_DF_CmdMonitor';
import myText6 from './RteHost-002_DF_CmdMonitor';
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

var myHTML4 = document.getElementById('cpu4');
function getData4(){
    var myRequest = new Request(myText4);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML4.innerHTML=text;
  });
    });
  }
getData4();

var myHTML5 = document.getElementById('ram11');
function getData6(){
    var myRequest = new Request(myText11);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML5.innerHTML=text;
  });
    });
  }
getData6();

var myHTML6 = document.getElementById('ram12');
function getData5(){
    var myRequest = new Request(myText12);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML6.innerHTML=text;
  });
    });
  }
getData5();

var myHTML7 = document.getElementById('rtedf1');
function getData7(){
    var myRequest = new Request(myText5);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML7.innerHTML=text;
  });
    });
  }
getData7();

var myHTML8 = document.getElementById('rtedf2');
function getData8(){
    var myRequest = new Request(myText6);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML8.innerHTML=text;
  });
    });
  }
getData8();
//this is where i get my log text
class Rte_Host extends Component{

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
      document.getElementsByClassName("App")[0].style.height = "6100px";}
}

componentWillUpdate(){
// eslint-disable-next-line react/no-direct-mutation-state
this.state.chartData5.labels=[];
// eslint-disable-next-line react/no-direct-mutation-state
this.state.chartData6.labels=[];

  var z = document.getElementsByClassName("link1")[11];
  
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
  if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "6100px";}
}

  getChartData(){
      //Ajax calls here
    this.setState({
        chartData3:{
            labels: [],
            datasets:
                [{
                    label:'CPU',
                    data: [],
                    backgroundColor:[]
                }]
        },
        chartData4:{
            labels: [],
            datasets:
                [{
                    label:'CPU',
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
                  label:'RAM',
                  data: [],
                  backgroundColor:[],
                },
                ]
          },
          chartData21:{
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
          chartData12:{
            labels:
                [],
            datasets:
                [{
                  label:'RAM',
                  data: [],
                  backgroundColor:[],
                }               
              ]
          },
          chartData22:{
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
          chartData5:{
            labels:
            [],
            datasets:[{    

            label:'/run/user/1000',
            data: [],
            backgroundColor:[],
            fill: 'none'
          },
          {
            label:'/opt/ericsson/virtualmachines',
            data: [],
            backgroundColor:[],
            fill: 'none'
          },
          {
            label:'/run/cgmanager/fs',
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
            label:'/home',
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
          }]
          }
,
      chartData6:{
        labels:
        [],
        datasets:[{    
            label:'/run/user/1000',
            data: [],
            backgroundColor:[],
            fill: 'none'
          },
          {
            label:'/run/cgmanager/fs',
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
            label:'/home',
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
        ]}});
  }


render(){

  var myHTML3 = document.getElementById('cpu3');
  var textoutput3 = myHTML3.innerHTML;
  var regex_date3 = /(?<=Timestamp: )\d*/g;
  var regex_CPU3 = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date3 = textoutput3.match(regex_date3);
  var cpu3 = textoutput3.match(regex_CPU3);

  var myHTML4 = document.getElementById('cpu4');
  var textoutput4 = myHTML4.innerHTML;
  var regex_date4 = /(?<=Timestamp: )\d*/g;
  var regex_CPU4 = /(\d*[.|]\d)|\d{2}\s\s|\d{1}\s\s/g;
  var date4 = textoutput4.match(regex_date4);
  var cpu4 = textoutput4.match(regex_CPU4);

  var myHTML11 = document.getElementById('ram11');
  var textoutput11 = myHTML11.innerHTML;
  var regex_date11 = /(?<=Timestamp: )\d*/g;
  var regex_RAM11 = /[\n\r][ \t]*386649\s[ \t]*([^\n\r]*)/g;
  var date11 = textoutput11.match(regex_date11);
  var ram11 = textoutput11.match(regex_RAM11);
  var ram_split11 = [];

  var myHTML12 = document.getElementById('ram12');
  var textoutput12 = myHTML12.innerHTML;
  var regex_date12 = /(?<=Timestamp: )\d*/g;
  var regex_RAM12 = /[\n\r][ \t]*386649\s[ \t]*([^\n\r]*)/g;
  var date12 = textoutput12.match(regex_date12);
  var ram12 = textoutput12.match(regex_RAM12);
  var ram_split12 = [];

  var myHTML5 = document.getElementById('rtedf1');
  var textoutput5 = myHTML5.innerHTML;
  var regex_date5 = /(?<=Timestamp: )\d*/g;
  var regex_DF_udev = /\d{1,3}[%]/g;
  var date5 = textoutput5.match(regex_date5);
  var df = textoutput5.match(regex_DF_udev);
  var num_reg = /\d{1,3}/g;
  var num = [];

  var myHTML6 = document.getElementById('rtedf2');
  var textoutput6 = myHTML6.innerHTML;
  var regex_date6 = /(?<=Timestamp: )\d*/g;
  var regex_DF_udev2 = /\d{1,3}[%]/g;
  var date6 = textoutput6.match(regex_date6);
  var df2 = textoutput6.match(regex_DF_udev2);
  var num_reg2 = /\d{1,3}/g;
  var num2 = [];

  var parse = [];
  var parse2 = [];
  var parse3 = [];
  var parse4 = [];
  var parse5 = [];
  var parse6 = [];

  function HideGraph(){
    if(document.getElementsByClassName("bar")[0].style.display == "none"){
      document.getElementsByClassName("bar")[0].style.display = "block";
      document.getElementsByClassName("bar")[1].style.display = "block";
      document.getElementsByClassName("chart")[1].style.marginTop = "30px";
      document.getElementsByClassName("chart")[2].style.marginTop = "30px";
      document.getElementById("ClickMe1").innerHTML="Hide CPU";}
    else{
      document.getElementsByClassName("bar")[0].style.display = "none";
      document.getElementsByClassName("bar")[1].style.display = "none";
      document.getElementsByClassName("chart")[1].style.marginTop = "0px";
      document.getElementsByClassName("chart")[2].style.marginTop = "0px";
      document.getElementById("ClickMe1").innerHTML="Show CPU";
    }
  }

  function HideGraph2(){
    if(document.getElementsByClassName("bar")[2].style.display == "none"){
      document.getElementsByClassName("bar")[2].style.display = "block";
      document.getElementsByClassName("bar")[3].style.display = "block";
      document.getElementsByClassName("bar")[4].style.display = "block";
      document.getElementsByClassName("bar")[5].style.display = "block";
      document.getElementsByClassName("chart")[3].style.marginTop = "30px";
      document.getElementsByClassName("chart")[4].style.marginTop = "30px";
      document.getElementsByClassName("chart")[5].style.marginTop = "30px";
      document.getElementsByClassName("chart")[6].style.marginTop = "30px";
      document.getElementById("ClickMe2").innerHTML="Hide RAM";}
    else{
      document.getElementsByClassName("bar")[2].style.display = "none";
      document.getElementsByClassName("bar")[3].style.display = "none";
      document.getElementsByClassName("bar")[4].style.display = "none";
      document.getElementsByClassName("bar")[5].style.display = "none";
      document.getElementsByClassName("chart")[3].style.marginTop = "0px";
      document.getElementsByClassName("chart")[4].style.marginTop = "0px";
      document.getElementsByClassName("chart")[5].style.marginTop = "0px";
      document.getElementsByClassName("chart")[6].style.marginTop = "0px";
      document.getElementById("ClickMe2").innerHTML="Show RAM";
    }
  }

  function HideGraph3(){
    if(document.getElementsByClassName("line")[0].style.display == "none"){
    document.getElementsByClassName("line")[0].style.display = "block";
    document.getElementsByClassName("line")[1].style.display = "block";
    document.getElementsByClassName("chart")[7].style.marginTop = "30px";
    document.getElementsByClassName("chart")[8].style.marginTop = "30px";
    document.getElementById("ClickMe3").innerHTML="Hide inodes";}
    else{
      document.getElementsByClassName("line")[0].style.display = "none";
      document.getElementsByClassName("line")[1].style.display = "none";
      document.getElementsByClassName("chart")[7].style.marginTop = "0px";
      document.getElementsByClassName("chart")[8].style.marginTop = "0px";
      document.getElementById("ClickMe3").innerHTML="Show inodes";}
  }

  if(cpu3!=null){
    for(var i3=0;i3<cpu3.length;i3++){
      parse[i3] = parseInt(date3[i3], 10);
      this.state.chartData3.labels.push(parse[i3]);
      this.state.chartData3.datasets[0].data.push(cpu3[i3]);
      this.state.chartData3.datasets[0].backgroundColor.push('rgba(55,19,162,0.6');
    }
  }

  if(cpu4!=null){
    for(var i4=0;i4<cpu4.length;i4++){
      parse2[i4] = parseInt(date4[i4], 10);
      this.state.chartData4.labels.push(parse2[i4]);
      this.state.chartData4.datasets[0].data.push(cpu4[i4]);
      this.state.chartData4.datasets[0].backgroundColor.push('rgba(32,94,124,0.6');
    }
  }

  if(ram11!=null){
    for(var i11=0;i11<ram11.length;i11++){
     ram_split11[i11] = ram11[i11].slice(7,ram11[i11].length);
     parse3[i11] = parseInt(date11[i11], 10);
     this.state.chartData11.labels.push(parse3[i11]);
     this.state.chartData21.labels.push(parse3[i11]);
     this.state.chartData11.datasets[0].data.push(ram_split11[i11]);
     this.state.chartData11.datasets[0].backgroundColor.push('rgba(55,189,22,0.8');
     this.state.chartData21.datasets[0].data.push(ram_split11[i11]/386649*100);
     this.state.chartData21.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
    }}

    if(ram12!=null){
      for(var i12=0;i12<ram12.length;i12++){
       ram_split12[i12] = ram12[i12].slice(7,ram12[i12].length);
       parse4[i12] = parseInt(date12[i12], 10);
       this.state.chartData12.labels.push(parse4[i12]);
       this.state.chartData22.labels.push(parse4[i12]);
       this.state.chartData12.datasets[0].data.push(ram_split12[i12]);
       this.state.chartData12.datasets[0].backgroundColor.push('rgba(55,189,22,0.8');
       this.state.chartData22.datasets[0].data.push(ram_split12[i12]/386649*100);
       this.state.chartData22.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

      if(df!=null){
        for(var i5=0;i5<date5.length;i5++){
         parse5[i5] = parseInt(date5[i5], 10);
         this.state.chartData5.labels.push(parse5[i5]);
         num[16+i5*17] = df[16+i5*17].match(num_reg);
         num[15+i5*17] = df[15+i5*17].match(num_reg);
         num[14+i5*17] = df[14+i5*17].match(num_reg);
         num[13+i5*17] = df[13+i5*17].match(num_reg);
         num[12+i5*17] = df[12+i5*17].match(num_reg);
         num[11+i5*17] = df[11+i5*17].match(num_reg);
         num[10+i5*17] = df[10+i5*17].match(num_reg);
         num[9+i5*17] = df[9+i5*17].match(num_reg);
         num[8+i5*17] = df[8+i5*17].match(num_reg);
         num[7+i5*17] = df[7+i5*17].match(num_reg);
         num[6+i5*17] = df[6+i5*17].match(num_reg);
         num[5+i5*17] = df[5+i5*17].match(num_reg);
         num[4+i5*17] = df[4+i5*17].match(num_reg);
         num[3+i5*17] = df[3+i5*17].match(num_reg);
         num[2+i5*17] = df[2+i5*17].match(num_reg);
         num[1+i5*17] = df[1+i5*17].match(num_reg);
         num[0+i5*17] = df[0+i5*17].match(num_reg);
         this.state.chartData5.datasets[0].data.push(num[16+i5*17]);
         this.state.chartData5.datasets[1].data.push(num[15+i5*17]);
         this.state.chartData5.datasets[2].data.push(num[14+i5*17]);
         this.state.chartData5.datasets[3].data.push(num[13+i5*17]);
         this.state.chartData5.datasets[4].data.push(num[12+i5*17]);
         this.state.chartData5.datasets[5].data.push(num[11+i5*17]);
         this.state.chartData5.datasets[6].data.push(num[10+i5*17]);
         this.state.chartData5.datasets[7].data.push(num[9+i5*17]);
         this.state.chartData5.datasets[8].data.push(num[8+i5*17]);
         this.state.chartData5.datasets[9].data.push(num[7+i5*17]);
         this.state.chartData5.datasets[10].data.push(num[6+i5*17]);
         this.state.chartData5.datasets[11].data.push(num[5+i5*17]);
         this.state.chartData5.datasets[12].data.push(num[4+i5*17]);
         this.state.chartData5.datasets[13].data.push(num[3+i5*17]);
         this.state.chartData5.datasets[14].data.push(num[2+i5*17]);
         this.state.chartData5.datasets[15].data.push(num[1+i5*17]);
         this.state.chartData5.datasets[16].data.push(num[0+i5*17]);
         this.state.chartData5.datasets[0].backgroundColor.push('rgba(225,199,82,0.6');
         this.state.chartData5.datasets[1].backgroundColor.push('rgba(245,99,82,0.6');
         this.state.chartData5.datasets[2].backgroundColor.push('rgba(135,125,22,0.6');
         this.state.chartData5.datasets[3].backgroundColor.push('rgba(102,12,52,0.6');
         this.state.chartData5.datasets[4].backgroundColor.push('rgba(82,105,82,0.6');
         this.state.chartData5.datasets[5].backgroundColor.push('rgba(25,152,152,0.6');
         this.state.chartData5.datasets[6].backgroundColor.push('rgba(55,192,135,0.6');
         this.state.chartData5.datasets[7].backgroundColor.push('rgba(182,255,17,0.6');
         this.state.chartData5.datasets[8].backgroundColor.push('rgba(18,14,225,0.6');
         this.state.chartData5.datasets[9].backgroundColor.push('rgba(52,85,216,0.6');
         this.state.chartData5.datasets[10].backgroundColor.push('rgba(85,122,74,0.6');
         this.state.chartData5.datasets[11].backgroundColor.push('rgba(155,105,155,0.6');
         this.state.chartData5.datasets[12].backgroundColor.push('rgba(255,105,225,0.6');
         this.state.chartData5.datasets[13].backgroundColor.push('rgba(255,225,225,0.6');
         this.state.chartData5.datasets[14].backgroundColor.push('rgba(255,255,255,0.6');
         this.state.chartData5.datasets[15].backgroundColor.push('rgba(182,55,45,0.6');
         this.state.chartData5.datasets[16].backgroundColor.push('rgba(200,200,200,0.6');
        }}

        if(df2!=null){
          for(var i6=0;i6<date6.length;i6++){
           parse6[i6] = parseInt(date6[i6], 10);
           this.state.chartData6.labels.push(parse6[i6]);
           num2[15+i6*16] = df2[15+i6*16].match(num_reg2);
           num2[14+i6*16] = df2[14+i6*16].match(num_reg2);
           num2[13+i6*16] = df2[13+i6*16].match(num_reg2);
           num2[12+i6*16] = df2[12+i6*16].match(num_reg2);
           num2[11+i6*16] = df2[11+i6*16].match(num_reg2);
           num2[10+i6*16] = df2[10+i6*16].match(num_reg2);
           num2[9+i6*16]  = df2[9+i6*16].match(num_reg2);
           num2[8+i6*16]  = df2[8+i6*16].match(num_reg2);
           num2[7+i6*16]  = df2[7+i6*16].match(num_reg2);
           num2[6+i6*16]  = df2[6+i6*16].match(num_reg2);
           num2[5+i6*16]  = df2[5+i6*16].match(num_reg2);
           num2[4+i6*16]  = df2[4+i6*16].match(num_reg2);
           num2[3+i6*16]  = df2[3+i6*16].match(num_reg2);
           num2[2+i6*16]  = df2[2+i6*16].match(num_reg2);
           num2[1+i6*16]  = df2[1+i6*16].match(num_reg2);
           num2[0+i6*16]  = df2[0+i6*16].match(num_reg2);
           this.state.chartData6.datasets[0].data.push(num2[15+i6*16]);
           this.state.chartData6.datasets[1].data.push(num2[14+i6*16]);
           this.state.chartData6.datasets[2].data.push(num2[13+i6*16]);
           this.state.chartData6.datasets[3].data.push(num2[12+i6*16]);
           this.state.chartData6.datasets[4].data.push(num2[11+i6*16]);
           this.state.chartData6.datasets[5].data.push(num2[10+i6*16]);
           this.state.chartData6.datasets[6].data.push(num2[9+i6*16]);
           this.state.chartData6.datasets[7].data.push(num2[8+i6*16]);
           this.state.chartData6.datasets[8].data.push(num2[7+i6*16]);
           this.state.chartData6.datasets[9].data.push(num2[6+i6*16]);
           this.state.chartData6.datasets[10].data.push(num2[5+i6*16]);
           this.state.chartData6.datasets[11].data.push(num2[4+i6*16]);
           this.state.chartData6.datasets[12].data.push(num2[3+i6*16]);
           this.state.chartData6.datasets[13].data.push(num2[2+i6*16]);
           this.state.chartData6.datasets[14].data.push(num2[1+i6*16]);
           this.state.chartData6.datasets[15].data.push(num2[0+i6*16]);
           this.state.chartData6.datasets[0].backgroundColor.push('rgba(225,199,82,0.6');
           this.state.chartData6.datasets[1].backgroundColor.push('rgba(245,99,82,0.6');
           this.state.chartData6.datasets[2].backgroundColor.push('rgba(135,125,22,0.6');
           this.state.chartData6.datasets[3].backgroundColor.push('rgba(102,12,52,0.6');
           this.state.chartData6.datasets[4].backgroundColor.push('rgba(82,105,82,0.6');
           this.state.chartData6.datasets[5].backgroundColor.push('rgba(25,152,152,0.6');
           this.state.chartData6.datasets[6].backgroundColor.push('rgba(55,192,135,0.6');
           this.state.chartData6.datasets[7].backgroundColor.push('rgba(182,255,17,0.6');
           this.state.chartData6.datasets[8].backgroundColor.push('rgba(18,14,225,0.6');
           this.state.chartData6.datasets[9].backgroundColor.push('rgba(52,85,216,0.6');
           this.state.chartData6.datasets[10].backgroundColor.push('rgba(85,122,74,0.6');
           this.state.chartData6.datasets[11].backgroundColor.push('rgba(155,105,155,0.6');
           this.state.chartData6.datasets[12].backgroundColor.push('rgba(255,105,225,0.6');
           this.state.chartData6.datasets[13].backgroundColor.push('rgba(255,225,225,0.6');
           this.state.chartData6.datasets[14].backgroundColor.push('rgba(255,255,255,0.6');
           this.state.chartData6.datasets[15].backgroundColor.push('rgba(182,55,45,0.6');
          }}

    return(
        <div className="chart">
          <div id="showMenu3">
          <button id="ClickMe1" onClick={HideGraph}>Hide CPU</button>
          <button id="ClickMe2" onClick={HideGraph2}>Hide RAM</button>
          <button id="ClickMe3" onClick={HideGraph3}>Hide DF</button>
          </div>
          <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData3}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost: CPU ',
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
                         labelString: "used"}}]},
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
        <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData4}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost-002 CPU',
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
                         labelString: "cpu"}}]},
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
        </div> </div>     
        <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData11}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost: RAM',
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
                yAxes: [{ticks:{beginAtZero:true},
                         scaleLabel: {
                         display: true,
                         labelString: "ram"}}]},
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
          <div className="bar"> <Bar
                 data={this.state.chartData21}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost: RAM%',
                     fontSize:25,},
                     legend:{display:this.state.displayLegend,
                             position:this.state.legendPosition},
            scales: {
              xAxes: [{
                type: 'time',
                displayFormats: {unit: 'second'},
                distribution: 'linear',
                scaleLabel: {display: true, labelString: "time"}}],
                yAxes: [{ticks:{beginAtZero:true, max: 100, min: 0},
                         scaleLabel: {
                         display: true,
                         labelString: "% of ram"}}]},
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
           <div className="bar"> <Bar
                 data={this.state.chartData12}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost-002: RAM',
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
                         labelString: "ram"}}]},
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
           <div className="chart">
           <div className="bar"> <Bar
                 data={this.state.chartData22}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost-002: RAM %',
                     fontSize:25,},
                     legend:{display:this.state.displayLegend,
                            position:this.state.legendPosition},
            scales: {
              xAxes: [{
                type: 'time',
                displayFormats: {unit: 'second'},
                distribution: 'linear',
                scaleLabel: {display: true, labelString: "time"}}],
                yAxes: [{ticks:{beginAtZero:true, min: 0},
                         scaleLabel: {
                         display: true,
                         labelString: "% of ram"}}]},
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
           <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData5}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost: DF',
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
                         labelString: "DF %"}}]},
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
           <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData6}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'RteHost-002: DF',
                     fontSize:25,},
                     legend:{display:this.state.displayLegend,
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
                        labelString: "DF %"
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
                        animationEnabled: true}}/>
           </div></div></div>)}}
export default Rte_Host;