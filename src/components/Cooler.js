import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';
import myText from './NRU_10.27.28.111_VFLOW_STATS_COMMAND_CmdMonitor';
import myText1 from './NRU_10.27.28.111_CLUSTER_TID_COMMAND_CmdMonitor';
import myText2 from './NRU_10.27.28.11_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText3 from './NRU_10.27.28.21_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText4 from './NRU_10.27.28.31_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText5 from './NRU_10.27.28.41_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText6 from './NRU_10.27.28.111_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText7 from './NRU_10.27.28.121_FILE_DESCRIPTORS_COMMAND_CmdMonitor';
import myText8 from './NRU_10.27.28.111_FLAP_COUNT_COMMAND_CmdMonitor';
import myText9 from './NRU_10.27.28.111_STP_PORT_EVENT_COMMAND_CmdMonitor';
import myText10 from './NRU_10.27.28.111_PORT_LACP_STATS_COMMAND_CmdMonitor';
import myText11 from './NRU_10.27.28.111_STORAGE_POOL_COMMAND_CmdMonitor';
import myText12 from './NRU_10.27.28.111_SYSTEM_STATS_COMMAND_CmdMonitor';
import myText13 from './NRU_10.27.28.111_SWITCH_STATUS_COMMAND_CmdMonitor';
import zoom from 'chartjs-plugin-zoom';

var myHTML13 = document.getElementById('Sw_Stat');
function getData13(){
    var myRequest = new Request(myText13);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML13.innerHTML=text;
  });
    });
  }
getData13();

var myHTML12 = document.getElementById('PORT_SS');
function getData12(){
    var myRequest = new Request(myText12);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML12.innerHTML=text;
  });
    });
  }
getData12();

var myHTML11 = document.getElementById('PORT_SP');
function getData11(){
    var myRequest = new Request(myText11);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML11.innerHTML=text;
  });
    });
  }
getData11();

var myHTML10 = document.getElementById('PORT_LACP');
function getData10(){
    var myRequest = new Request(myText10);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML10.innerHTML=text;
  });
    });
  }
getData10();

var myHTML9 = document.getElementById('PORT_EVENT');
function getData9(){
    var myRequest = new Request(myText9);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML9.innerHTML=text;
  });
    });
  }
getData9();

var myHTML = document.getElementById('VFLOW');
function getData(){
    var myRequest = new Request(myText);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML.innerHTML=text;
  });
    });
  }
getData();

var myHTML1 = document.getElementById('CLUSTER');
function getData1(){
    var myRequest = new Request(myText1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML1.innerHTML=text;
  });
    });
  }
getData1();


var myHTML2 = document.getElementById('NRUFD1');
function getData2(){
    var myRequest = new Request(myText2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML2.innerHTML=text;
  });
    });
  }
getData2();

var myHTML3 = document.getElementById('NRUFD2');
function getData3(){
    var myRequest = new Request(myText3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML3.innerHTML=text;
  });
    });
  }
getData3();

var myHTML4 = document.getElementById('NRUFD3');
function getData4(){
    var myRequest = new Request(myText4);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML4.innerHTML=text;
  });
    });
  }
getData4();

var myHTML5 = document.getElementById('NRUFD4');
function getData5(){
    var myRequest = new Request(myText5);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML5.innerHTML=text;
  });
    });
  }
getData5();

var myHTML6 = document.getElementById('NRUFD5');
function getData6(){
    var myRequest = new Request(myText6);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML6.innerHTML=text;
  });
    });
  }
getData6();

var myHTML7 = document.getElementById('NRUFD6');
function getData7(){
    var myRequest = new Request(myText7);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML7.innerHTML=text;
  });
    });
  }
getData7();

var myHTML8 = document.getElementById('FLAP');
function getData8(){
    var myRequest = new Request(myText8);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML8.innerHTML=text;
  });
    });
  }
getData8();

//this is where i get my log text
class Cooler extends Component{

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

   componentDidMount(){
   }

  componentWillMount(){
    this.getChartData();
    if(document.getElementsByClassName("App")[0] != null){
    document.getElementsByClassName("App")[0].style.height = "23000px";}
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
    this.state.chartData.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData1.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData2.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData3.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData4.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData5.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData6.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData7.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData8.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData9.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData10.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData11.labels=[]; 
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData12.labels=[]; 
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData13.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData14.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData15.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData16.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData17.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData18.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData19.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData20.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData21.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData22.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData23.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData24.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData25.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData26.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData27.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData28.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData29.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData30.labels=[];

    console.log(this.chartReference.chartInstance.update);
    this.chartReference.chartInstance.chart.legend.right = 1100;

var z = document.getElementsByClassName("link1")[4];

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
    document.getElementsByClassName("App")[0].style.height = "23000px";}
    }

  getChartData(){
    this.setState({
      chartData:{
        labels:[],
        datasets:
            [{
                label:'27_Spine_01',
                data: [],
                fill: false,
                backgroundColor:[],
            },
            {
                label:'27_Spine_02',
                data: [],
                fill: false,    
                backgroundColor:[],           
            },
            {
                label:'27-Leaf-01',
                data: [],
                fill: false,  
                backgroundColor:[],              
            },
            {
                label:'27-Leaf-02',
                data: [],
                fill: false, 
                backgroundColor:[],              
            },
            {
                label:'27-Leaf-03',
                data: [],
                fill: false, 
                backgroundColor:[],            
            },
            {
                label:'27-Leaf-04',
                data: [],
                fill: false,  
                backgroundColor:[],               
            }
        ]
    },  chartData1:{
        labels:[],
        datasets:
            [{
                label:'27_Spine_01',
                data: [],
                fill: false,
                backgroundColor:[],
            },
            {
                label:'27_Spine_02',
                data: [],
                fill: false,    
                backgroundColor:[],           
            },
            {
                label:'27-Leaf-01',
                data: [],
                fill: false,  
                backgroundColor:[],              
            },
            {
                label:'27-Leaf-02',
                data: [],
                fill: false, 
                backgroundColor:[],              
            },
            {
                label:'27-Leaf-03',
                data: [],
                fill: false, 
                backgroundColor:[],            
            },
            {
                label:'27-Leaf-04',
                data: [],
                fill: false,  
                backgroundColor:[],               
            }
        ]
    },
    chartData2:{

        labels:[],
    datasets:
        [{
            label:'27_Spine_01',
            data: [],
            fill: false,
            backgroundColor:[],
        },
        {
            label:'27_Spine_02',
            data: [],
            fill: false,    
            backgroundColor:[],           
        },
        {
            label:'27-Leaf-01',
            data: [],
            fill: false,  
            backgroundColor:[],              
        },
        {
            label:'27-Leaf-02',
            data: [],
            fill: false, 
            backgroundColor:[],              
        },
        {
            label:'27-Leaf-03',
            data: [],
            fill: false, 
            backgroundColor:[],            
        },
        {
            label:'27-Leaf-04',
            data: [],
            fill: false,  
            backgroundColor:[],               
        }
    ]
},
chartData3:{

    labels:[],
datasets:
    [{
        label:'27_Spine_01',
        data: [],
        fill: false,
        backgroundColor:[],
    },
    {
        label:'27_Spine_02',
        data: [],
        fill: false,    
        backgroundColor:[],           
    },
    {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],              
    },
    {
        label:'27-Leaf-02',
        data: [],
        fill: false, 
        backgroundColor:[],              
    },
    {
        label:'27-Leaf-03',
        data: [],
        fill: false, 
        backgroundColor:[],            
    },
    {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],               
    }
]
},

chartData4:{
    labels:[],
datasets:[
    {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
    }]},

chartData5:{
    labels:[],
    datasets:[{

    label:'27-Leaf-02',
    data: [],
    fill: false,  
    backgroundColor:[],    
    }]},

    chartData6:{
        labels:[],
        datasets:[{

        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }]},

    chartData7:{
        labels:[],
        datasets:[{

        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }]},

    chartData8:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }]},  

    chartData9:{
        labels:[],
        datasets:[{

        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }]},  

    chartData10:{
        labels:[],
        datasets:[{

        label:'spine-2/leaf-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-2/leaf-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-2/leaf-3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-2/leaf-4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-4/spine-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-4/spine-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-4/leaf-3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-1/spine-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-1/spine-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-1/leaf-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-1/leaf-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-1/leaf-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-1/leaf-3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'spine-1/leaf-4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-3/spine-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-3/spine-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-3/leaf-4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-2/spine-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-2/spine-2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {

        label:'leaf-2/leaf-1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }
     ]},
     chartData11:{
        labels:[],
        datasets:[{
        label:'27-Leaf-04_81_1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04_129_0',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-04_129_1',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-01_25_1',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-01_21_1',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-02_21_1',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-02_25_0',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-02_25_1',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-01_21_0',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-01_25_0',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
        {
        label:'27-Leaf-02_21_0',
        data: [],
        fill: false,  
        backgroundColor:[],   
        },
    ]
    },
    chartData12:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},  
    chartData13:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData14:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData15:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData16:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData17:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData18:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData19:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData20:{
        labels:[],
        datasets:[{

        label:'27-Leaf-01_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02_14',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04_81',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData21:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData22:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData23:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData24:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData25:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData26:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData27:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData28:{
        labels:[],
        datasets:[{

        label:'27-Spine-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData29:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Spine-01 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-01 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-01 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Spine-02 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-01 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-02 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-03 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 fan1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 fan2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 fan3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 fan4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 fan5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04 fan6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 fan7',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 fan8',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData30:{
        labels:[],
        datasets:[{
        label:'27-Spine-01 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-01 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Spine-01 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-01 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-01 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-01 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Spine-02 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Spine-02 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Spine-02 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-01 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-01 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-01 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-02 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-02 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-02 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-03 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-03 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-03 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 CPU1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 CPU2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 Peripheral Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'27-Leaf-04 PCH Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'27-Leaf-04 P1-DIMMA1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 P1-DIMMC1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 P2-DIMME1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'27-Leaf-04 P2-DIMMG1 TEMP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
    ]},
    });
  }


render(){
    var myHTML11 = document.getElementById("PORT_SP");
    var textoutput11 = myHTML11.innerHTML;
    var regex_date11 = /(?<=Timestamp: )\d*/g;
    var date11 = textoutput11.match(regex_date11);

    var myHTML12 = document.getElementById("PORT_SS");
    var textoutput12 = myHTML12.innerHTML;
    var regex_date12 = /(?<=Timestamp: )\d*/g;
    var date12 = textoutput12.match(regex_date12);

    var myHTML13 = document.getElementById("Sw_Stat");
    var textoutput13 = myHTML13.innerHTML;
    var regex_date13 = /(?<=Timestamp: )\d*/g;
    var date13 = textoutput13.match(regex_date13);

    var Spine01_CPU1Temp_Reg = /(?<=Spine-01\s{1}CPU1 Temp).*/g;
    var Spine01_CPU1Temp = textoutput13.match(Spine01_CPU1Temp_Reg);
    var Spine01_CPU1Temp_fix = [];
    var Spine01_CPU2Temp_Reg = /(?<=Spine-01\s{1}CPU2 Temp).*/g;
    var Spine01_CPU2Temp = textoutput13.match(Spine01_CPU2Temp_Reg);
    var Spine01_CPU2Temp_fix = [];
    var Spine01_SystemTemp_Reg = /(?<=Spine-01\s{1}System Temp).*/g;
    var Spine01_SystemTemp = textoutput13.match(Spine01_SystemTemp_Reg);
    var Spine01_SystemTemp_fix = [];
    var Spine01_PeripheralTemp_Reg = /(?<=Spine-01\s{1}Peripheral Temp).*/g;
    var Spine01_PeripheralTemp = textoutput13.match(Spine01_PeripheralTemp_Reg);
    var Spine01_PeripheralTemp_fix = [];
    var Spine01_PCHTemp_Reg = /(?<=Spine-01\s{1}PCH Temp).*/g;
    var Spine01_PCHTemp = textoutput13.match(Spine01_PCHTemp_Reg);
    var Spine01_PCHTemp_fix = [];
    var Spine01_P1DIMMA1Temp_Reg = /(?<=Spine-01\s{1}P1-DIMMA1 TEMP).*/g;
    var Spine01_P1DIMMA1Temp = textoutput13.match(Spine01_P1DIMMA1Temp_Reg);
    var Spine01_P1DIMMA1Temp_fix = [];
    var Spine01_P1DIMMC1Temp_Reg = /(?<=Spine-01\s{1}P1-DIMMC1 TEMP).*/g;
    var Spine01_P1DIMMC1Temp = textoutput13.match(Spine01_P1DIMMC1Temp_Reg);
    var Spine01_P1DIMMC1Temp_fix = [];
    var Spine01_P2DIMME1Temp_Reg = /(?<=Spine-01\s{1}P2-DIMME1 TEMP).*/g;
    var Spine01_P2DIMME1Temp = textoutput13.match(Spine01_P2DIMME1Temp_Reg);
    var Spine01_P2DIMME1Temp_fix = [];
    var Spine01_P2DIMMG1Temp_Reg = /(?<=Spine-01\s{1}P2-DIMMG1 TEMP).*/g;
    var Spine01_P2DIMMG1Temp = textoutput13.match(Spine01_P2DIMMG1Temp_Reg);
    var Spine01_P2DIMMG1Temp_fix = [];

    var Spine02_CPU1Temp_Reg = /(?<=Spine-02\s{1}CPU1 Temp).*/g;
    var Spine02_CPU1Temp = textoutput13.match(Spine02_CPU1Temp_Reg);
    var Spine02_CPU1Temp_fix = [];
    var Spine02_CPU2Temp_Reg = /(?<=Spine-02\s{1}CPU2 Temp).*/g;
    var Spine02_CPU2Temp = textoutput13.match(Spine02_CPU2Temp_Reg);
    var Spine02_CPU2Temp_fix = [];
    var Spine02_SystemTemp_Reg = /(?<=Spine-02\s{1}System Temp).*/g;
    var Spine02_SystemTemp = textoutput13.match(Spine02_SystemTemp_Reg);
    var Spine02_SystemTemp_fix = [];
    var Spine02_PeripheralTemp_Reg = /(?<=Spine-02\s{1}Peripheral Temp).*/g;
    var Spine02_PeripheralTemp = textoutput13.match(Spine02_PeripheralTemp_Reg);
    var Spine02_PeripheralTemp_fix = [];
    var Spine02_PCHTemp_Reg = /(?<=Spine-02\s{1}PCH Temp).*/g;
    var Spine02_PCHTemp = textoutput13.match(Spine02_PCHTemp_Reg);
    var Spine02_PCHTemp_fix = [];
    var Spine02_P1DIMMA1Temp_Reg = /(?<=Spine-02\s{1}P1-DIMMA1 TEMP).*/g;
    var Spine02_P1DIMMA1Temp = textoutput13.match(Spine02_P1DIMMA1Temp_Reg);
    var Spine02_P1DIMMA1Temp_fix = [];
    var Spine02_P1DIMMC1Temp_Reg = /(?<=Spine-02\s{1}P1-DIMMC1 TEMP).*/g;
    var Spine02_P1DIMMC1Temp = textoutput13.match(Spine02_P1DIMMC1Temp_Reg);
    var Spine02_P1DIMMC1Temp_fix = [];
    var Spine02_P2DIMME1Temp_Reg = /(?<=Spine-02\s{1}P2-DIMME1 TEMP).*/g;
    var Spine02_P2DIMME1Temp = textoutput13.match(Spine02_P2DIMME1Temp_Reg);
    var Spine02_P2DIMME1Temp_fix = [];
    var Spine02_P2DIMMG1Temp_Reg = /(?<=Spine-02\s{1}P2-DIMMG1 TEMP).*/g;
    var Spine02_P2DIMMG1Temp = textoutput13.match(Spine02_P2DIMMG1Temp_Reg);
    var Spine02_P2DIMMG1Temp_fix = [];

    var Leaf01_CPU1Temp_Reg = /(?<=Leaf-01\s{2}CPU1 Temp).*/g;
    var Leaf01_CPU1Temp = textoutput13.match(Leaf01_CPU1Temp_Reg);
    var Leaf01_CPU1Temp_fix = [];
    var Leaf01_CPU2Temp_Reg = /(?<=Leaf-01\s{2}CPU2 Temp).*/g;
    var Leaf01_CPU2Temp = textoutput13.match(Leaf01_CPU2Temp_Reg);
    var Leaf01_CPU2Temp_fix = [];
    var Leaf01_SystemTemp_Reg = /(?<=Leaf-01\s{2}System Temp).*/g;
    var Leaf01_SystemTemp = textoutput13.match(Leaf01_SystemTemp_Reg);
    var Leaf01_SystemTemp_fix = [];
    var Leaf01_PeripheralTemp_Reg = /(?<=Leaf-01\s{2}Peripheral Temp).*/g;
    var Leaf01_PeripheralTemp = textoutput13.match(Leaf01_PeripheralTemp_Reg);
    var Leaf01_PeripheralTemp_fix = [];
    var Leaf01_PCHTemp_Reg = /(?<=Leaf-01\s{2}PCH Temp).*/g;
    var Leaf01_PCHTemp = textoutput13.match(Leaf01_PCHTemp_Reg);
    var Leaf01_PCHTemp_fix = [];
    var Leaf01_P1DIMMA1Temp_Reg = /(?<=Leaf-01\s{2}P1-DIMMA1 TEMP).*/g;
    var Leaf01_P1DIMMA1Temp = textoutput13.match(Leaf01_P1DIMMA1Temp_Reg);
    var Leaf01_P1DIMMA1Temp_fix = [];
    var Leaf01_P1DIMMC1Temp_Reg = /(?<=Leaf-01\s{2}P1-DIMMC1 TEMP).*/g;
    var Leaf01_P1DIMMC1Temp = textoutput13.match(Leaf01_P1DIMMC1Temp_Reg);
    var Leaf01_P1DIMMC1Temp_fix = [];
    var Leaf01_P2DIMME1Temp_Reg = /(?<=Leaf-01\s{2}P2-DIMME1 TEMP).*/g;
    var Leaf01_P2DIMME1Temp = textoutput13.match(Leaf01_P2DIMME1Temp_Reg);
    var Leaf01_P2DIMME1Temp_fix = [];
    var Leaf01_P2DIMMG1Temp_Reg = /(?<=Leaf-01\s{2}P2-DIMMG1 TEMP).*/g;
    var Leaf01_P2DIMMG1Temp = textoutput13.match(Leaf01_P2DIMMG1Temp_Reg);
    var Leaf01_P2DIMMG1Temp_fix = [];

    var Leaf02_CPU1Temp_Reg = /(?<=Leaf-02\s{2}CPU1 Temp).*/g;
    var Leaf02_CPU1Temp = textoutput13.match(Leaf02_CPU1Temp_Reg);
    var Leaf02_CPU1Temp_fix = [];
    var Leaf02_CPU2Temp_Reg = /(?<=Leaf-02\s{2}CPU2 Temp).*/g;
    var Leaf02_CPU2Temp = textoutput13.match(Leaf02_CPU2Temp_Reg);
    var Leaf02_CPU2Temp_fix = [];
    var Leaf02_SystemTemp_Reg = /(?<=Leaf-02\s{2}System Temp).*/g;
    var Leaf02_SystemTemp = textoutput13.match(Leaf02_SystemTemp_Reg);
    var Leaf02_SystemTemp_fix = [];
    var Leaf02_PeripheralTemp_Reg = /(?<=Leaf-02\s{2}Peripheral Temp).*/g;
    var Leaf02_PeripheralTemp = textoutput13.match(Leaf02_PeripheralTemp_Reg);
    var Leaf02_PeripheralTemp_fix = [];
    var Leaf02_PCHTemp_Reg = /(?<=Leaf-02\s{2}PCH Temp).*/g;
    var Leaf02_PCHTemp = textoutput13.match(Leaf02_PCHTemp_Reg);
    var Leaf02_PCHTemp_fix = [];
    var Leaf02_P1DIMMA1Temp_Reg = /(?<=Leaf-02\s{2}P1-DIMMA1 TEMP).*/g;
    var Leaf02_P1DIMMA1Temp = textoutput13.match(Leaf02_P1DIMMA1Temp_Reg);
    var Leaf02_P1DIMMA1Temp_fix = [];
    var Leaf02_P1DIMMC1Temp_Reg = /(?<=Leaf-02\s{2}P1-DIMMC1 TEMP).*/g;
    var Leaf02_P1DIMMC1Temp = textoutput13.match(Leaf02_P1DIMMC1Temp_Reg);
    var Leaf02_P1DIMMC1Temp_fix = [];
    var Leaf02_P2DIMME1Temp_Reg = /(?<=Leaf-02\s{2}P2-DIMME1 TEMP).*/g;
    var Leaf02_P2DIMME1Temp = textoutput13.match(Leaf02_P2DIMME1Temp_Reg);
    var Leaf02_P2DIMME1Temp_fix = [];
    var Leaf02_P2DIMMG1Temp_Reg = /(?<=Leaf-02\s{2}P2-DIMMG1 TEMP).*/g;
    var Leaf02_P2DIMMG1Temp = textoutput13.match(Leaf02_P2DIMMG1Temp_Reg);
    var Leaf02_P2DIMMG1Temp_fix = [];

    var Leaf03_CPU1Temp_Reg = /(?<=Leaf-03\s{2}CPU1 Temp).*/g;
    var Leaf03_CPU1Temp = textoutput13.match(Leaf03_CPU1Temp_Reg);
    var Leaf03_CPU1Temp_fix = [];
    var Leaf03_CPU2Temp_Reg = /(?<=Leaf-03\s{2}CPU2 Temp).*/g;
    var Leaf03_CPU2Temp = textoutput13.match(Leaf03_CPU2Temp_Reg);
    var Leaf03_CPU2Temp_fix = [];
    var Leaf03_SystemTemp_Reg = /(?<=Leaf-03\s{2}System Temp).*/g;
    var Leaf03_SystemTemp = textoutput13.match(Leaf03_SystemTemp_Reg);
    var Leaf03_SystemTemp_fix = [];
    var Leaf03_PeripheralTemp_Reg = /(?<=Leaf-03\s{2}Peripheral Temp).*/g;
    var Leaf03_PeripheralTemp = textoutput13.match(Leaf03_PeripheralTemp_Reg);
    var Leaf03_PeripheralTemp_fix = [];
    var Leaf03_PCHTemp_Reg = /(?<=Leaf-03\s{2}PCH Temp).*/g;
    var Leaf03_PCHTemp = textoutput13.match(Leaf03_PCHTemp_Reg);
    var Leaf03_PCHTemp_fix = [];
    var Leaf03_P1DIMMA1Temp_Reg = /(?<=Leaf-03\s{2}P1-DIMMA1 TEMP).*/g;
    var Leaf03_P1DIMMA1Temp = textoutput13.match(Leaf03_P1DIMMA1Temp_Reg);
    var Leaf03_P1DIMMA1Temp_fix = [];
    var Leaf03_P1DIMMC1Temp_Reg = /(?<=Leaf-03\s{2}P1-DIMMC1 TEMP).*/g;
    var Leaf03_P1DIMMC1Temp = textoutput13.match(Leaf03_P1DIMMC1Temp_Reg);
    var Leaf03_P1DIMMC1Temp_fix = [];
    var Leaf03_P2DIMME1Temp_Reg = /(?<=Leaf-03\s{2}P2-DIMME1 TEMP).*/g;
    var Leaf03_P2DIMME1Temp = textoutput13.match(Leaf03_P2DIMME1Temp_Reg);
    var Leaf03_P2DIMME1Temp_fix = [];
    var Leaf03_P2DIMMG1Temp_Reg = /(?<=Leaf-03\s{2}P2-DIMMG1 TEMP).*/g;
    var Leaf03_P2DIMMG1Temp = textoutput13.match(Leaf03_P2DIMMG1Temp_Reg);
    var Leaf03_P2DIMMG1Temp_fix = [];

    var Leaf04_CPU1Temp_Reg = /(?<=Leaf-04\s{2}CPU1 Temp).*/g;
    var Leaf04_CPU1Temp = textoutput13.match(Leaf04_CPU1Temp_Reg);
    var Leaf04_CPU1Temp_fix = [];
    var Leaf04_CPU2Temp_Reg = /(?<=Leaf-04\s{2}CPU2 Temp).*/g;
    var Leaf04_CPU2Temp = textoutput13.match(Leaf04_CPU2Temp_Reg);
    var Leaf04_CPU2Temp_fix = [];
    var Leaf04_SystemTemp_Reg = /(?<=Leaf-04\s{2}System Temp).*/g;
    var Leaf04_SystemTemp = textoutput13.match(Leaf04_SystemTemp_Reg);
    var Leaf04_SystemTemp_fix = [];
    var Leaf04_PeripheralTemp_Reg = /(?<=Leaf-04\s{2}Peripheral Temp).*/g;
    var Leaf04_PeripheralTemp = textoutput13.match(Leaf04_PeripheralTemp_Reg);
    var Leaf04_PeripheralTemp_fix = [];
    var Leaf04_PCHTemp_Reg = /(?<=Leaf-04\s{2}PCH Temp).*/g;
    var Leaf04_PCHTemp = textoutput13.match(Leaf04_PCHTemp_Reg);
    var Leaf04_PCHTemp_fix = [];
    var Leaf04_P1DIMMA1Temp_Reg = /(?<=Leaf-04\s{2}P1-DIMMA1 TEMP).*/g;
    var Leaf04_P1DIMMA1Temp = textoutput13.match(Leaf04_P1DIMMA1Temp_Reg);
    var Leaf04_P1DIMMA1Temp_fix = [];
    var Leaf04_P1DIMMC1Temp_Reg = /(?<=Leaf-04\s{2}P1-DIMMC1 TEMP).*/g;
    var Leaf04_P1DIMMC1Temp = textoutput13.match(Leaf04_P1DIMMC1Temp_Reg);
    var Leaf04_P1DIMMC1Temp_fix = [];
    var Leaf04_P2DIMME1Temp_Reg = /(?<=Leaf-04\s{2}P2-DIMME1 TEMP).*/g;
    var Leaf04_P2DIMME1Temp = textoutput13.match(Leaf04_P2DIMME1Temp_Reg);
    var Leaf04_P2DIMME1Temp_fix = [];
    var Leaf04_P2DIMMG1Temp_Reg = /(?<=Leaf-04\s{2}P2-DIMMG1 TEMP).*/g;
    var Leaf04_P2DIMMG1Temp = textoutput13.match(Leaf04_P2DIMMG1Temp_Reg);
    var Leaf04_P2DIMMG1Temp_fix = [];

    var Spine01_Fan1_Reg = /(?<=Spine-01\sfan-1).*/g;
    var Spine_01_Fan1 = textoutput13.match(Spine01_Fan1_Reg);
    var Spine_01_Fan1_fix = [];
    var Spine01_Fan2_Reg = /(?<=Spine-01\sfan-2).*/g;
    var Spine_01_Fan2 = textoutput13.match(Spine01_Fan2_Reg);
    var Spine_01_Fan2_fix = [];
    var Spine01_Fan3_Reg = /(?<=Spine-01\sfan-3).*/g;
    var Spine_01_Fan3 = textoutput13.match(Spine01_Fan3_Reg);
    var Spine_01_Fan3_fix = [];
    var Spine01_Fan4_Reg = /(?<=Spine-01\sfan-4).*/g;
    var Spine_01_Fan4 = textoutput13.match(Spine01_Fan4_Reg);
    var Spine_01_Fan4_fix = [];
    var Spine01_Fan5_Reg = /(?<=Spine-01\sfan-5).*/g;
    var Spine_01_Fan5 = textoutput13.match(Spine01_Fan5_Reg);
    var Spine_01_Fan5_fix = [];
    var Spine01_Fan6_Reg = /(?<=Spine-01\sfan-6).*/g;
    var Spine_01_Fan6 = textoutput13.match(Spine01_Fan6_Reg);
    var Spine_01_Fan6_fix = [];
    var Spine01_Fan7_Reg = /(?<=Spine-01\sfan-7).*/g;
    var Spine_01_Fan7 = textoutput13.match(Spine01_Fan7_Reg);
    var Spine_01_Fan7_fix = [];
    var Spine01_Fan8_Reg = /(?<=Spine-01\sfan-8).*/g;
    var Spine_01_Fan8 = textoutput13.match(Spine01_Fan8_Reg);
    var Spine_01_Fan8_fix = [];

    var Spine02_Fan1_Reg = /(?<=Spine-02\sfan-1).*/g;
    var Spine_02_Fan1 = textoutput13.match(Spine02_Fan1_Reg);
    var Spine_02_Fan1_fix = [];
    var Spine02_Fan2_Reg = /(?<=Spine-02\sfan-2).*/g;
    var Spine_02_Fan2 = textoutput13.match(Spine02_Fan2_Reg);
    var Spine_02_Fan2_fix = [];
    var Spine02_Fan3_Reg = /(?<=Spine-02\sfan-3).*/g;
    var Spine_02_Fan3 = textoutput13.match(Spine02_Fan3_Reg);
    var Spine_02_Fan3_fix = [];
    var Spine02_Fan4_Reg = /(?<=Spine-02\sfan-4).*/g;
    var Spine_02_Fan4 = textoutput13.match(Spine02_Fan4_Reg);
    var Spine_02_Fan4_fix = [];
    var Spine02_Fan5_Reg = /(?<=Spine-02\sfan-5).*/g;
    var Spine_02_Fan5 = textoutput13.match(Spine02_Fan5_Reg);
    var Spine_02_Fan5_fix = [];
    var Spine02_Fan6_Reg = /(?<=Spine-02\sfan-6).*/g;
    var Spine_02_Fan6 = textoutput13.match(Spine02_Fan6_Reg);
    var Spine_02_Fan6_fix = [];
    var Spine02_Fan7_Reg = /(?<=Spine-02\sfan-7).*/g;
    var Spine_02_Fan7 = textoutput13.match(Spine02_Fan7_Reg);
    var Spine_02_Fan7_fix = [];
    var Spine02_Fan8_Reg = /(?<=Spine-02\sfan-8).*/g;
    var Spine_02_Fan8 = textoutput13.match(Spine02_Fan8_Reg);
    var Spine_02_Fan8_fix = [];

    var Leaf01_Fan1_Reg = /(?<=Leaf-01\s{2}fan-1).*/g;
    var Leaf_01_Fan1 = textoutput13.match(Leaf01_Fan1_Reg);
    var Leaf_01_Fan1_fix = [];
    var Leaf01_Fan2_Reg = /(?<=Leaf-01\s{2}fan-2).*/g;
    var Leaf_01_Fan2 = textoutput13.match(Leaf01_Fan2_Reg);
    var Leaf_01_Fan2_fix = [];
    var Leaf01_Fan3_Reg = /(?<=Leaf-01\s{2}fan-3).*/g;
    var Leaf_01_Fan3 = textoutput13.match(Leaf01_Fan3_Reg);
    var Leaf_01_Fan3_fix = [];
    var Leaf01_Fan4_Reg = /(?<=Leaf-01\s{2}fan-4).*/g;
    var Leaf_01_Fan4 = textoutput13.match(Leaf01_Fan4_Reg);
    var Leaf_01_Fan4_fix = [];
    var Leaf01_Fan5_Reg = /(?<=Leaf-01\s{2}fan-5).*/g;
    var Leaf_01_Fan5 = textoutput13.match(Leaf01_Fan5_Reg);
    var Leaf_01_Fan5_fix = [];
    var Leaf01_Fan6_Reg = /(?<=Leaf-01\s{2}fan-6).*/g;
    var Leaf_01_Fan6 = textoutput13.match(Leaf01_Fan6_Reg);
    var Leaf_01_Fan6_fix = [];
    var Leaf01_Fan7_Reg = /(?<=Leaf-01\s{2}fan-7).*/g;
    var Leaf_01_Fan7 = textoutput13.match(Leaf01_Fan7_Reg);
    var Leaf_01_Fan7_fix = [];
    var Leaf01_Fan8_Reg = /(?<=Leaf-01\s{2}fan-8).*/g;
    var Leaf_01_Fan8 = textoutput13.match(Leaf01_Fan8_Reg);
    var Leaf_01_Fan8_fix = [];

    var Leaf02_Fan1_Reg = /(?<=Leaf-02\s{2}fan-1).*/g;
    var Leaf_02_Fan1 = textoutput13.match(Leaf02_Fan1_Reg);
    var Leaf_02_Fan1_fix = [];
    var Leaf02_Fan2_Reg = /(?<=Leaf-02\s{2}fan-2).*/g;
    var Leaf_02_Fan2 = textoutput13.match(Leaf02_Fan2_Reg);
    var Leaf_02_Fan2_fix = [];
    var Leaf02_Fan3_Reg = /(?<=Leaf-02\s{2}fan-3).*/g;
    var Leaf_02_Fan3 = textoutput13.match(Leaf02_Fan3_Reg);
    var Leaf_02_Fan3_fix = [];
    var Leaf02_Fan4_Reg = /(?<=Leaf-02\s{2}fan-4).*/g;
    var Leaf_02_Fan4 = textoutput13.match(Leaf02_Fan4_Reg);
    var Leaf_02_Fan4_fix = [];
    var Leaf02_Fan5_Reg = /(?<=Leaf-02\s{2}fan-5).*/g;
    var Leaf_02_Fan5 = textoutput13.match(Leaf02_Fan5_Reg);
    var Leaf_02_Fan5_fix = [];
    var Leaf02_Fan6_Reg = /(?<=Leaf-02\s{2}fan-6).*/g;
    var Leaf_02_Fan6 = textoutput13.match(Leaf02_Fan6_Reg);
    var Leaf_02_Fan6_fix = [];
    var Leaf02_Fan7_Reg = /(?<=Leaf-02\s{2}fan-7).*/g;
    var Leaf_02_Fan7 = textoutput13.match(Leaf02_Fan7_Reg);
    var Leaf_02_Fan7_fix = [];
    var Leaf02_Fan8_Reg = /(?<=Leaf-02\s{2}fan-8).*/g;
    var Leaf_02_Fan8 = textoutput13.match(Leaf02_Fan8_Reg);
    var Leaf_02_Fan8_fix = [];

    var Leaf03_Fan1_Reg = /(?<=Leaf-03\s{2}fan-1).*/g;
    var Leaf_03_Fan1 = textoutput13.match(Leaf03_Fan1_Reg);
    var Leaf_03_Fan1_fix = [];
    var Leaf03_Fan2_Reg = /(?<=Leaf-03\s{2}fan-2).*/g;
    var Leaf_03_Fan2 = textoutput13.match(Leaf03_Fan2_Reg);
    var Leaf_03_Fan2_fix = [];
    var Leaf03_Fan3_Reg = /(?<=Leaf-03\s{2}fan-3).*/g;
    var Leaf_03_Fan3 = textoutput13.match(Leaf03_Fan3_Reg);
    var Leaf_03_Fan3_fix = [];
    var Leaf03_Fan4_Reg = /(?<=Leaf-03\s{2}fan-4).*/g;
    var Leaf_03_Fan4 = textoutput13.match(Leaf03_Fan4_Reg);
    var Leaf_03_Fan4_fix = [];
    var Leaf03_Fan5_Reg = /(?<=Leaf-03\s{2}fan-5).*/g;
    var Leaf_03_Fan5 = textoutput13.match(Leaf03_Fan5_Reg);
    var Leaf_03_Fan5_fix = [];
    var Leaf03_Fan6_Reg = /(?<=Leaf-03\s{2}fan-6).*/g;
    var Leaf_03_Fan6 = textoutput13.match(Leaf03_Fan6_Reg);
    var Leaf_03_Fan6_fix = [];
    var Leaf03_Fan7_Reg = /(?<=Leaf-03\s{2}fan-7).*/g;
    var Leaf_03_Fan7 = textoutput13.match(Leaf03_Fan7_Reg);
    var Leaf_03_Fan7_fix = [];
    var Leaf03_Fan8_Reg = /(?<=Leaf-03\s{2}fan-8).*/g;
    var Leaf_03_Fan8 = textoutput13.match(Leaf03_Fan8_Reg);
    var Leaf_03_Fan8_fix = [];

    var Leaf04_Fan1_Reg = /(?<=Leaf-04\s{2}fan-1).*/g;
    var Leaf_04_Fan1 = textoutput13.match(Leaf04_Fan1_Reg);
    var Leaf_04_Fan1_fix = [];
    var Leaf04_Fan2_Reg = /(?<=Leaf-04\s{2}fan-2).*/g;
    var Leaf_04_Fan2 = textoutput13.match(Leaf04_Fan2_Reg);
    var Leaf_04_Fan2_fix = [];
    var Leaf04_Fan3_Reg = /(?<=Leaf-04\s{2}fan-3).*/g;
    var Leaf_04_Fan3 = textoutput13.match(Leaf04_Fan3_Reg);
    var Leaf_04_Fan3_fix = [];
    var Leaf04_Fan4_Reg = /(?<=Leaf-04\s{2}fan-4).*/g;
    var Leaf_04_Fan4 = textoutput13.match(Leaf04_Fan4_Reg);
    var Leaf_04_Fan4_fix = [];
    var Leaf04_Fan5_Reg = /(?<=Leaf-04\s{2}fan-5).*/g;
    var Leaf_04_Fan5 = textoutput13.match(Leaf04_Fan5_Reg);
    var Leaf_04_Fan5_fix = [];
    var Leaf04_Fan6_Reg = /(?<=Leaf-04\s{2}fan-6).*/g;
    var Leaf_04_Fan6 = textoutput13.match(Leaf04_Fan6_Reg);
    var Leaf_04_Fan6_fix = [];
    var Leaf04_Fan7_Reg = /(?<=Leaf-04\s{2}fan-7).*/g;
    var Leaf_04_Fan7 = textoutput13.match(Leaf04_Fan7_Reg);
    var Leaf_04_Fan7_fix = [];
    var Leaf04_Fan8_Reg = /(?<=Leaf-04\s{2}fan-8).*/g;
    var Leaf_04_Fan8 = textoutput13.match(Leaf04_Fan8_Reg);
    var Leaf_04_Fan8_fix = [];

    var reg_spine01 =/(?<=Spine-01\s).*/g ;
    var reg_spine02 =/(?<=Spine-02\s).*/g ;
    var reg_leaf01 =/(?<=Leaf-01\s).*/g ;
    var reg_leaf02 =/(?<=Leaf-02\s).*/g ;
    var reg_leaf03 =/(?<=Leaf-03\s).*/g ;
    var reg_leaf04 =/(?<=Leaf-04\s).*/g ;

    var SP_Spine01 = textoutput11.match(reg_spine01);
    var SP_Spine02 = textoutput11.match(reg_spine02);
    var SP_Leaf01 = textoutput11.match(reg_leaf01);
    var SP_Leaf02 = textoutput11.match(reg_leaf02);
    var SP_Leaf03 = textoutput11.match(reg_leaf03);
    var SP_Leaf04 = textoutput11.match(reg_leaf04);

    var SS_Spine01 = textoutput12.match(reg_spine01);
    var SS_Spine02 = textoutput12.match(reg_spine02);
    var SS_Leaf01 = textoutput12.match(reg_leaf01);
    var SS_Leaf02 = textoutput12.match(reg_leaf02);
    var SS_Leaf03 = textoutput12.match(reg_leaf03);
    var SS_Leaf04 = textoutput12.match(reg_leaf04);

    var SS_Spine01_used_mem = [];     var SS_Spine01_used_mem_fix = [];
    var SS_Spine01_used_swap = [];    var SS_Spine01_used_swap_fix = [];
    var SS_Spine01_paging = [];    var SS_Spine01_paging_fix = [];
    var SS_Spine01_cpu_user = [];    var SS_Spine01_cpu_user_fix = [];
    var SS_Spine01_cpu_sys = [];    var SS_Spine01_cpu_sys_fix = [];
    var SS_Spine01_cpu_idle = [];    var SS_Spine01_cpu_idle_fix = [];

    var SS_Spine02_used_mem = [];     var SS_Spine02_used_mem_fix = [];
    var SS_Spine02_used_swap = [];    var SS_Spine02_used_swap_fix = [];
    var SS_Spine02_paging = [];    var SS_Spine02_paging_fix = [];
    var SS_Spine02_cpu_user = [];    var SS_Spine02_cpu_user_fix = [];
    var SS_Spine02_cpu_sys = [];    var SS_Spine02_cpu_sys_fix = [];
    var SS_Spine02_cpu_idle = [];    var SS_Spine02_cpu_idle_fix = [];

    var SS_Leaf01_used_mem = [];     var SS_Leaf01_used_mem_fix = [];
    var SS_Leaf01_used_swap = [];    var SS_Leaf01_used_swap_fix = [];
    var SS_Leaf01_paging = [];    var SS_Leaf01_paging_fix = [];
    var SS_Leaf01_cpu_user = [];    var SS_Leaf01_cpu_user_fix = [];
    var SS_Leaf01_cpu_sys = [];    var SS_Leaf01_cpu_sys_fix = [];
    var SS_Leaf01_cpu_idle = [];    var SS_Leaf01_cpu_idle_fix = [];

    var SS_Leaf02_used_mem = [];     var SS_Leaf02_used_mem_fix = [];
    var SS_Leaf02_used_swap = [];    var SS_Leaf02_used_swap_fix = [];
    var SS_Leaf02_paging = [];    var SS_Leaf02_paging_fix = [];
    var SS_Leaf02_cpu_user = [];    var SS_Leaf02_cpu_user_fix = [];
    var SS_Leaf02_cpu_sys = [];    var SS_Leaf02_cpu_sys_fix = [];
    var SS_Leaf02_cpu_idle = [];    var SS_Leaf02_cpu_idle_fix = [];

    var SS_Leaf03_used_mem = [];     var SS_Leaf03_used_mem_fix = [];
    var SS_Leaf03_used_swap = [];    var SS_Leaf03_used_swap_fix = [];
    var SS_Leaf03_paging = [];    var SS_Leaf03_paging_fix = [];
    var SS_Leaf03_cpu_user = [];    var SS_Leaf03_cpu_user_fix = [];
    var SS_Leaf03_cpu_sys = [];    var SS_Leaf03_cpu_sys_fix = [];
    var SS_Leaf03_cpu_idle = [];    var SS_Leaf03_cpu_idle_fix = [];

    var SS_Leaf04_used_mem = [];     var SS_Leaf04_used_mem_fix = [];
    var SS_Leaf04_used_swap = [];    var SS_Leaf04_used_swap_fix = [];
    var SS_Leaf04_paging = [];    var SS_Leaf04_paging_fix = [];
    var SS_Leaf04_cpu_user = [];    var SS_Leaf04_cpu_user_fix = [];
    var SS_Leaf04_cpu_sys = [];    var SS_Leaf04_cpu_sys_fix = [];
    var SS_Leaf04_cpu_idle = [];    var SS_Leaf04_cpu_idle_fix = [];

    var SP_Spine01_used = [];       var SP_Spine01_avail = [];
    var SP_Spine01_used_fix = [];       var SP_Spine01_avail_fix = [];
    var SP_Spine02_used = [];       var SP_Spine02_avail = [];
    var SP_Spine02_used_fix = [];       var SP_Spine02_avail_fix = [];
    var SP_Leaf01_used = [];       var SP_Leaf01_avail = [];
    var SP_Leaf01_used_fix = [];       var SP_Leaf01_avail_fix = [];
    var SP_Leaf02_used = [];       var SP_Leaf02_avail = [];
    var SP_Leaf02_used_fix = [];       var SP_Leaf02_avail_fix = [];
    var SP_Leaf03_used = [];       var SP_Leaf03_avail = [];
    var SP_Leaf03_used_fix = [];       var SP_Leaf03_avail_fix = [];
    var SP_Leaf04_used = [];       var SP_Leaf04_avail = [];
    var SP_Leaf04_used_fix = [];       var SP_Leaf04_avail_fix = [];

    var myHTML10 = document.getElementById("PORT_LACP");
    var textoutput10 = myHTML10.innerHTML;
    var regex_date10 = /(?<=Timestamp: )\d*/g;
    var date10 = textoutput10.match(regex_date10);

    var reg_dat = /(?<=Leaf-01\s\d{2}:\d{2}:\d{2}\s6).*/g;
    var reg_dat2 = /(?<=Leaf-01\s\d{2}:\d{2}:\d{2}\s14).*/g;
    var reg_dat3 = /(?<=Leaf-02\s\d{2}:\d{2}:\d{2}\s6).*/g;
    var reg_dat4 = /(?<=Leaf-02\s\d{2}:\d{2}:\d{2}\s14).*/g;
    var reg_dat5 = /(?<=Leaf-03\s\d{2}:\d{2}:\d{2}\s81).*/g;
    var reg_dat6 = /(?<=Leaf-04\s\d{2}:\d{2}:\d{2}\s81).*/g;

    var Leaf1_Port6_Lacp = textoutput10.match(reg_dat);
    var Leaf1_Port14_Lacp = textoutput10.match(reg_dat2);
    var Leaf2_Port6_Lacp = textoutput10.match(reg_dat3);
    var Leaf2_Port14_Lacp = textoutput10.match(reg_dat4);
    var Leaf3_Port81_Lacp = textoutput10.match(reg_dat5);
    var Leaf4_Port81_Lacp = textoutput10.match(reg_dat6);

    var Leaf1_Port6_Lacp_portup = [];
    var Leaf1_Port6_Lacp_portdown = [];
    var Leaf1_Port6_Lacp_pdutx = [];
    var Leaf1_Port6_Lacp_pdurx = [];
    var Leaf1_Port6_Lacp_markertx = [];
    var Leaf1_Port6_Lacp_markerrx = [];
    var Leaf1_Port6_Lacp_allofail = [];
    var Leaf1_Port6_Lacp_expire = [];
    var Leaf1_Port6_Lacp_defaulted = [];
    var Leaf1_Port6_Lacp_pdutx_fix = [];
    var Leaf1_Port6_Lacp_pdurx_fix = [];

    var Leaf1_Port14_Lacp_portup = [];
    var Leaf1_Port14_Lacp_portdown = [];
    var Leaf1_Port14_Lacp_pdutx = [];
    var Leaf1_Port14_Lacp_pdurx = [];
    var Leaf1_Port14_Lacp_markertx = [];
    var Leaf1_Port14_Lacp_markerrx = [];
    var Leaf1_Port14_Lacp_allofail = [];
    var Leaf1_Port14_Lacp_expire = [];
    var Leaf1_Port14_Lacp_defaulted = [];
    var Leaf1_Port14_Lacp_pdutx_fix = [];
    var Leaf1_Port14_Lacp_pdurx_fix = [];

    var Leaf2_Port6_Lacp_portup = [];
    var Leaf2_Port6_Lacp_portdown = [];
    var Leaf2_Port6_Lacp_pdutx = [];
    var Leaf2_Port6_Lacp_pdurx = [];
    var Leaf2_Port6_Lacp_markertx = [];
    var Leaf2_Port6_Lacp_markerrx = [];
    var Leaf2_Port6_Lacp_allofail = [];
    var Leaf2_Port6_Lacp_expire = [];
    var Leaf2_Port6_Lacp_defaulted = [];
    var Leaf2_Port6_Lacp_pdutx_fix = [];
    var Leaf2_Port6_Lacp_pdurx_fix = [];

    var Leaf2_Port14_Lacp_portup = [];
    var Leaf2_Port14_Lacp_portdown = [];
    var Leaf2_Port14_Lacp_pdutx = [];
    var Leaf2_Port14_Lacp_pdurx = [];
    var Leaf2_Port14_Lacp_markertx = [];
    var Leaf2_Port14_Lacp_markerrx = [];
    var Leaf2_Port14_Lacp_allofail = [];
    var Leaf2_Port14_Lacp_expire = [];
    var Leaf2_Port14_Lacp_defaulted = [];
    var Leaf2_Port14_Lacp_pdutx_fix = [];
    var Leaf2_Port14_Lacp_pdurx_fix = [];

    var Leaf3_Port81_Lacp_portup = [];
    var Leaf3_Port81_Lacp_portdown = [];
    var Leaf3_Port81_Lacp_pdutx = [];
    var Leaf3_Port81_Lacp_pdurx = [];
    var Leaf3_Port81_Lacp_markertx = [];
    var Leaf3_Port81_Lacp_markerrx = [];
    var Leaf3_Port81_Lacp_allofail = [];
    var Leaf3_Port81_Lacp_expire = [];
    var Leaf3_Port81_Lacp_defaulted = [];
    var Leaf3_Port81_Lacp_pdutx_fix = [];
    var Leaf3_Port81_Lacp_pdurx_fix = [];

    var Leaf4_Port81_Lacp_portup = [];
    var Leaf4_Port81_Lacp_portdown = [];
    var Leaf4_Port81_Lacp_pdutx = [];
    var Leaf4_Port81_Lacp_pdurx = [];
    var Leaf4_Port81_Lacp_markertx = [];
    var Leaf4_Port81_Lacp_markerrx = [];
    var Leaf4_Port81_Lacp_allofail = [];
    var Leaf4_Port81_Lacp_expire = [];
    var Leaf4_Port81_Lacp_defaulted = [];
    var Leaf4_Port81_Lacp_portup_fix = [];
    var Leaf4_Port81_Lacp_portdown_fix = [];
    var Leaf4_Port81_Lacp_pdutx_fix = [];
    var Leaf4_Port81_Lacp_pdurx_fix = [];
    var Leaf4_Port81_Lacp_markertx_fix = [];
    var Leaf4_Port81_Lacp_markerrx_fix = [];
    var Leaf4_Port81_Lacp_expire_fix = [];
    var Leaf4_Port81_Lacp_defaulted_fix = [];

    var myHTML9 = document.getElementById("PORT_EVENT");
    var textoutput9 = myHTML9.innerHTML;
    var regex_date9 =  /(?<=Timestamp: )\d*/g;
    var date9 = textoutput9.match(regex_date9);
    var datis = /[^V]*/gm;
    var dat = textoutput9.match(datis);

  var myHTML = document.getElementById('VFLOW');
  var textoutput = myHTML.innerHTML;
  var myHTML1 = document.getElementById('CLUSTER');
  var textoutput1 = myHTML1.innerHTML;
  var Spine_27_01 = /[\n\r][ \t]*27-Spine-01\s[ \t]*([^\n\r]*)/g;
  var Spine_27_02 = /[\n\r][ \t]*27-Spine-02\s[ \t]*([^\n\r]*)/g;
  var Leaf_27_01 = /[\n\r][ \t]*27-Leaf-01\s[ \t]*([^\n\r]*)/g;
  var Leaf_27_02 = /[\n\r][ \t]*27-Leaf-02\s[ \t]*([^\n\r]*)/g;
  var Leaf_27_03 = /[\n\r][ \t]*27-Leaf-03\s[ \t]*([^\n\r]*)/g;
  var Leaf_27_04 = /[\n\r][ \t]*27-Leaf-04\s[ \t]*([^\n\r]*)/g;
  var regex_date =  /(?<=Timestamp: )\d*/g;

  var Spine_27_01_all = textoutput.match(Spine_27_01);
  var Spine_27_02_all = textoutput.match(Spine_27_02);
  var Leaf_27_01_all = textoutput.match(Leaf_27_01);
  var Leaf_27_02_all = textoutput.match(Leaf_27_02);
  var Leaf_27_03_all = textoutput.match(Leaf_27_03);
  var Leaf_27_04_all = textoutput.match(Leaf_27_04);
  var date = textoutput.match(regex_date);

  var Spine27_01_cluster = textoutput1.match(Spine_27_01);
  var Spine27_02_cluster = textoutput1.match(Spine_27_02);
  var Leaf_27_01_cluster = textoutput1.match(Leaf_27_01);
  var Leaf_27_02_cluster = textoutput1.match(Leaf_27_02);
  var Leaf_27_03_cluster = textoutput1.match(Leaf_27_03);
  var Leaf_27_04_cluster = textoutput1.match(Leaf_27_04);
  var date1 = textoutput1.match(regex_date);
  var spine1Cluster = [];
  var spine2Cluster = [];
  var Leaf1Cluster = [];
  var Leaf2Cluster = [];
  var Leaf3Cluster = [];
  var Leaf4Cluster = [];  
  
  var Spine_27_01_all_prepare = [];
  var Spine_27_01_all_cpubytes = [];
  var Spine_27_01_all_drops = [];
  var Spine_27_01_all_dropbytes = [];

  var Spine_27_02_all_prepare = [];
  var Spine_27_02_all_cpubytes = [];
  var Spine_27_02_all_drops = [];
  var Spine_27_02_all_dropbytes = [];

  var Leaf_27_01_all_prepare = [];
  var Leaf_27_01_all_cpubytes = [];
  var Leaf_27_01_all_drops = [];
  var Leaf_27_01_all_dropbytes = [];

  var Leaf_27_02_all_prepare = [];
  var Leaf_27_02_all_cpubytes = [];
  var Leaf_27_02_all_drops = [];
  var Leaf_27_02_all_dropbytes = [];

  var Leaf_27_03_all_prepare = [];
  var Leaf_27_03_all_cpubytes = [];
  var Leaf_27_03_all_drops = [];
  var Leaf_27_03_all_dropbytes = [];

  var Leaf_27_04_all_prepare = [];
  var Leaf_27_04_all_cpubytes = [];
  var Leaf_27_04_all_drops = [];
  var Leaf_27_04_all_dropbytes = [];

  var myHTML2 = document.getElementById('NRUFD1');
  var textoutput2 = myHTML2.innerHTML;
  var myHTML3 = document.getElementById('NRUFD2');
  var textoutput3 = myHTML3.innerHTML;
  var myHTML4 = document.getElementById('NRUFD3');
  var textoutput4 = myHTML4.innerHTML;
  var myHTML5 = document.getElementById('NRUFD4');
  var textoutput5 = myHTML5.innerHTML;
  var myHTML6 = document.getElementById('NRUFD5');
  var textoutput6 = myHTML6.innerHTML;
  var myHTML7 = document.getElementById('NRUFD6');
  var textoutput7 = myHTML7.innerHTML;
  var LeafSearch = /[\n\r][ \t]*[Password:]*\d[\s \t]*([^\n\r]*)/g;
  var regex_date2 = /(?<=Timestamp: )\d*/g;
  var leaf01 = textoutput2.match(LeafSearch);
  var date2 = textoutput2.match(regex_date2);
  var leaf02 = textoutput3.match(LeafSearch);
  var date3 = textoutput3.match(regex_date2);
  var leaf03 = textoutput4.match(LeafSearch);
  var date4 = textoutput4.match(regex_date2);
  var leaf04 = textoutput5.match(LeafSearch);
  var date5 = textoutput5.match(regex_date2);
  var leaf05 = textoutput6.match(LeafSearch);
  var date6 = textoutput6.match(regex_date2);
  var leaf06 = textoutput7.match(LeafSearch);
  var date7 = textoutput7.match(regex_date2);

  var myHTML8 = document.getElementById('FLAP');
  var textoutput8 = myHTML8.innerHTML;
  var vrouter_spine2_leaf1_regex = /(?<=vrouter-spine-2)(.*)(?=vrouter-leaf-1)/g; 
  var vrouter_spine2_leaf2_regex = /(?<=vrouter-spine-2)(.*)(?=vrouter-leaf-2)/g;
  var vrouter_spine2_leaf3_regex = /(?<=vrouter-spine-2)(.*)(?=vrouter-leaf-3)/g;
  var vrouter_spine2_leaf4_regex = /(?<=vrouter-spine-2)(.*)(?=vrouter-leaf-4)/g;
  var vrouter_leaf4_spine1_regex = /(?<=vrouter-leaf-4)(.*)(?=vrouter-spine-1)/g;
  var vrouter_leaf4_spine2_regex = /(?<=vrouter-leaf-4)(.*)(?=vrouter-spine-2)/g;
  var vrouter_leaf4_leaf3_regex = /(?<=vrouter-leaf-4)(.*)(?=vrouter-leaf-3)/g;
  var vrouter_leaf1_spine1_regex = /(?<=vrouter-leaf-1)(.*)(?=vrouter-spine-1)/g;
  var vrouter_leaf1_spine2_regex = /(?<=vrouter-leaf-1)(.*)(?=vrouter-spine-2)/g;
  var vrouter_leaf1_leaf2_regex = /(?<=vrouter-leaf-1)(.*)(?=vrouter-leaf-2)/g;
  var vrouter_spine1_leaf1_regex = /(?<=vrouter-spine-1)(.*)(?=vrouter-leaf-1)/g;
  var vrouter_spine1_leaf2_regex = /(?<=vrouter-spine-1)(.*)(?=vrouter-leaf-2)/g;
  var vrouter_spine1_leaf3_regex = /(?<=vrouter-spine-1)(.*)(?=vrouter-leaf-3)/g;
  var vrouter_spine1_leaf4_regex = /(?<=vrouter-spine-1)(.*)(?=vrouter-leaf-4)/g;
  var vrouter_leaf3_spine1_regex = /(?<=vrouter-leaf-3)(.*)(?=vrouter-spine-1)/g;
  var vrouter_leaf3_spine2_regex = /(?<=vrouter-leaf-3)(.*)(?=vrouter-spine-2)/g;
  var vrouter_leaf3_leaf4_regex = /(?<=vrouter-leaf-3)(.*)(?=vrouter-leaf-4)/g;
  var vrouter_leaf2_spine1_regex = /(?<=vrouter-leaf-2)(.*)(?=vrouter-spine-1)/g;
  var vrouter_leaf2_spine2_regex = /(?<=vrouter-leaf-2)(.*)(?=vrouter-spine-2)/g;
  var vrouter_leaf2_leaf1_regex = /(?<=vrouter-leaf-2)(.*)(?=vrouter-leaf-1)/g;
  var regex_date8 = /(?<=Timestamp: )\d*/g;

  var date8 = textoutput8.match(regex_date8);

  var spine2_flap_array = textoutput8.match(vrouter_spine2_leaf1_regex);
  var spine2_regex2_flap_array = textoutput8.match(vrouter_spine2_leaf2_regex);
  var spine2_regex3_flap_array = textoutput8.match(vrouter_spine2_leaf3_regex);
  var spine2_regex4_flap_array = textoutput8.match(vrouter_spine2_leaf4_regex);
  var leaf4_regex1_flap_array = textoutput8.match(vrouter_leaf4_spine1_regex);
  var leaf4_regex2_flap_array = textoutput8.match(vrouter_leaf4_spine2_regex);
  var leaf4_regex3_flap_array = textoutput8.match(vrouter_leaf4_leaf3_regex);
  var leaf1_regex1_flap_array = textoutput8.match(vrouter_leaf1_spine1_regex);
  var leaf1_regex2_flap_array = textoutput8.match(vrouter_leaf1_spine2_regex);
  var leaf1_regex3_flap_array = textoutput8.match(vrouter_leaf1_leaf2_regex);
  var spine1_regex1_flap_array = textoutput8.match(vrouter_spine1_leaf1_regex);
  var spine1_regex2_flap_array = textoutput8.match(vrouter_spine1_leaf2_regex);
  var spine1_regex3_flap_array = textoutput8.match(vrouter_spine1_leaf3_regex);
  var spine1_regex4_flap_array = textoutput8.match(vrouter_spine1_leaf4_regex);
  var leaf3_regex1_flap_array = textoutput8.match(vrouter_leaf3_spine1_regex);
  var leaf3_regex2_flap_array = textoutput8.match(vrouter_leaf3_spine2_regex);
  var leaf3_regex3_flap_array = textoutput8.match(vrouter_leaf3_leaf4_regex);
  var leaf2_regex1_flap_array = textoutput8.match(vrouter_leaf2_spine1_regex);
  var leaf2_regex2_flap_array = textoutput8.match(vrouter_leaf2_spine2_regex);
  var leaf2_regex3_flap_array = textoutput8.match(vrouter_leaf2_leaf1_regex);

  var k=0; var b; var t=0;
  var clean=[];  var clean_resize=[];
  var clean2=[];  var clean_resize2=[];
  var clean3=[];  var clean_resize3=[];
  var clean4=[];  var clean_resize4=[];
  var clean5=[];  var clean_resize5=[];
  var clean6=[];  var clean_resize6=[];
  var clean7=[];  var clean_resize7=[];
  var clean8=[];  var clean_resize8=[];
  var clean9=[];  var clean_resize9=[];
  var clean10=[];  var clean_resize10=[];
  var clean11=[];  var clean_resize11=[];
  var clean12=[];  var clean_resize12=[];
  var clean13=[];  var clean_resize13=[];
  var clean14=[];  var clean_resize14=[];
  var clean15=[];  var clean_resize15=[];
  var clean16=[];  var clean_resize16=[];

  var Leaf4_switch_port_129_0 = [];
  var Leaf4_switch_port_129_1 = [];
  var Leaf4_switch_port_81_1 = [];
  var Leaf1_switch_port_25_1 = [];
  var Leaf1_switch_port_21_1 = [];
  var Leaf2_switch_port_21_1 = [];
  var Leaf2_switch_port_25_0 = [];
  var Leaf2_switch_port_25_1 = [];
  var Leaf1_switch_port_21_0 = [];
  var Leaf1_switch_port_25_0 = [];
  var Leaf2_switch_port_21_0 = [];

  var portcount = 0; var port = [];

  var parse = [];
  var parse2 = [];
  var parse3 = [];
  var parse4 = [];
  var parse5 = [];
  var parse6 = [];
  var parse7 = [];
  var parse8 = [];
  var parse9 = [];
  var parse10 = [];
  var parse11 = [];
  var parse12 = [];
  var parse13 = [];
  var parse14 = [];

  function HideGraph(){
    if(document.getElementsByClassName("line")[0].style.display == "none"){
      document.getElementsByClassName("line")[0].style.display = "block";
      document.getElementsByClassName("line")[1].style.display = "block";
      document.getElementsByClassName("line")[2].style.display = "block";
      document.getElementsByClassName("chart")[1].style.marginTop = "30px";
      document.getElementsByClassName("chart")[2].style.marginTop = "30px";
      document.getElementsByClassName("chart")[3].style.marginTop = "30px";
      document.getElementById("ClickMe11").innerHTML="Hide VFlow";}
    else{
        document.getElementsByClassName("line")[0].style.display = "none";
        document.getElementsByClassName("line")[1].style.display = "none";
        document.getElementsByClassName("line")[2].style.display = "none";
        document.getElementsByClassName("chart")[1].style.marginTop = "0px";
        document.getElementsByClassName("chart")[2].style.marginTop = "0px";
        document.getElementsByClassName("chart")[3].style.marginTop = "0px";
      document.getElementById("ClickMe11").innerHTML="Show VFlow";
    }
  }

  function HideGraph2(){
    if(document.getElementsByClassName("line")[3].style.display == "none"){
      document.getElementsByClassName("line")[3].style.display = "block";
      document.getElementsByClassName("chart")[4].style.marginTop = "30px";
      document.getElementById("ClickMe12").innerHTML="Hide Cluster";}
    else{
        document.getElementsByClassName("line")[3].style.display = "none";
      document.getElementsByClassName("chart")[4].style.marginTop = "0px";
      document.getElementById("ClickMe12").innerHTML="Show Cluster";
    }
  }

  function HideGraph3(){
    if(document.getElementsByClassName("line")[4].style.display == "none"){
      document.getElementsByClassName("line")[4].style.display = "block";
      document.getElementsByClassName("line")[5].style.display = "block";
      document.getElementsByClassName("line")[6].style.display = "block";
      document.getElementsByClassName("line")[7].style.display = "block";
      document.getElementsByClassName("line")[8].style.display = "block";
      document.getElementsByClassName("line")[9].style.display = "block";
      document.getElementsByClassName("chart")[5].style.marginTop = "30px";
      document.getElementsByClassName("chart")[6].style.marginTop = "30px";
      document.getElementsByClassName("chart")[7].style.marginTop = "30px";
      document.getElementsByClassName("chart")[8].style.marginTop = "30px";
      document.getElementsByClassName("chart")[9].style.marginTop = "30px";
      document.getElementsByClassName("chart")[10].style.marginTop = "30px";
      document.getElementById("ClickMe13").innerHTML="Hide FD";}
    else{
        document.getElementsByClassName("line")[4].style.display = "none";
        document.getElementsByClassName("line")[5].style.display = "none";
        document.getElementsByClassName("line")[6].style.display = "none";
        document.getElementsByClassName("line")[7].style.display = "none";
        document.getElementsByClassName("line")[8].style.display = "none";
        document.getElementsByClassName("line")[9].style.display = "none";
        document.getElementsByClassName("chart")[5].style.marginTop = "0px";
        document.getElementsByClassName("chart")[6].style.marginTop = "0px";
        document.getElementsByClassName("chart")[7].style.marginTop = "0px";
        document.getElementsByClassName("chart")[8].style.marginTop = "0px";
        document.getElementsByClassName("chart")[9].style.marginTop = "0px";
        document.getElementsByClassName("chart")[10].style.marginTop = "0px";
      document.getElementById("ClickMe13").innerHTML="Show FD";
    }
  }

  function HideGraph4(){
    if(document.getElementsByClassName("line")[10].style.display == "none"){
      document.getElementsByClassName("line")[10].style.display = "block";
      document.getElementsByClassName("chart")[11].style.marginTop = "30px";
      document.getElementById("ClickMe14").innerHTML="Hide Flap";}
    else{
      document.getElementsByClassName("line")[10].style.display = "none";
      document.getElementsByClassName("chart")[11].style.marginTop = "0px";
      document.getElementById("ClickMe14").innerHTML="Show Flap";
    }
  }

  function HideGraph5(){
    if(document.getElementsByClassName("line")[11].style.display == "none"){
      document.getElementsByClassName("line")[11].style.display = "block";
      document.getElementsByClassName("chart")[12].style.marginTop = "30px";
      document.getElementById("ClickMe15").innerHTML="Hide Port Events";}
    else{
      document.getElementsByClassName("line")[11].style.display = "none";
      document.getElementsByClassName("chart")[12].style.marginTop = "0px";
      document.getElementById("ClickMe15").innerHTML="Show Port Events";
    }
  }

  function HideGraph6(){
    if(document.getElementsByClassName("line")[12].style.display == "none"){
        document.getElementsByClassName("line")[12].style.display = "block";
        document.getElementsByClassName("line")[13].style.display = "block";
        document.getElementsByClassName("line")[14].style.display = "block";
        document.getElementsByClassName("line")[15].style.display = "block";
        document.getElementsByClassName("line")[16].style.display = "block";
        document.getElementsByClassName("line")[17].style.display = "block";
        document.getElementsByClassName("line")[18].style.display = "block";
        document.getElementsByClassName("line")[19].style.display = "block";
        document.getElementsByClassName("line")[20].style.display = "block";
      document.getElementsByClassName("chart")[13].style.marginTop = "30px";
      document.getElementsByClassName("chart")[14].style.marginTop = "30px";
      document.getElementsByClassName("chart")[15].style.marginTop = "30px";
      document.getElementsByClassName("chart")[16].style.marginTop = "30px";
      document.getElementsByClassName("chart")[17].style.marginTop = "30px";
      document.getElementsByClassName("chart")[18].style.marginTop = "30px";
      document.getElementsByClassName("chart")[19].style.marginTop = "30px";
      document.getElementsByClassName("chart")[20].style.marginTop = "30px";
      document.getElementsByClassName("chart")[21].style.marginTop = "30px";
      document.getElementById("ClickMe16").innerHTML="Hide Lacp";}
    else{
        document.getElementsByClassName("line")[12].style.display = "none";
        document.getElementsByClassName("line")[13].style.display = "none";
        document.getElementsByClassName("line")[14].style.display = "none";
        document.getElementsByClassName("line")[15].style.display = "none";
        document.getElementsByClassName("line")[16].style.display = "none";
        document.getElementsByClassName("line")[17].style.display = "none";
        document.getElementsByClassName("line")[18].style.display = "none";
        document.getElementsByClassName("line")[19].style.display = "none";
        document.getElementsByClassName("line")[20].style.display = "none";
      document.getElementsByClassName("chart")[13].style.marginTop = "0px";
      document.getElementsByClassName("chart")[14].style.marginTop = "0px";
      document.getElementsByClassName("chart")[15].style.marginTop = "0px";
      document.getElementsByClassName("chart")[16].style.marginTop = "0px";
      document.getElementsByClassName("chart")[17].style.marginTop = "0px";
      document.getElementsByClassName("chart")[18].style.marginTop = "0px";
      document.getElementsByClassName("chart")[19].style.marginTop = "0px";
      document.getElementsByClassName("chart")[20].style.marginTop = "0px";
      document.getElementsByClassName("chart")[21].style.marginTop = "0px";
      document.getElementById("ClickMe16").innerHTML="Show Lacp";
    }
  }

  function HideGraph7(){
    if(document.getElementsByClassName("line")[21].style.display == "none"){
      document.getElementsByClassName("line")[21].style.display = "block";
      document.getElementsByClassName("line")[22].style.display = "block";
      document.getElementsByClassName("chart")[22].style.marginTop = "30px";
      document.getElementsByClassName("chart")[23].style.marginTop = "30px";
      document.getElementById("ClickMe17").innerHTML="Hide StorageUsed";}
    else{
      document.getElementsByClassName("line")[21].style.display = "none";  
      document.getElementsByClassName("line")[22].style.display = "none";
      document.getElementsByClassName("chart")[22].style.marginTop = "0px";
      document.getElementsByClassName("chart")[23].style.marginTop = "0px";
      document.getElementById("ClickMe17").innerHTML="Show StorageUsed";
    }
  }

  function HideGraph8(){
    if(document.getElementsByClassName("line")[23].style.display == "none"){
      document.getElementsByClassName("line")[23].style.display = "block";
      document.getElementsByClassName("line")[24].style.display = "block";
      document.getElementsByClassName("line")[25].style.display = "block";
      document.getElementsByClassName("line")[26].style.display = "block";
      document.getElementsByClassName("line")[27].style.display = "block";
      document.getElementsByClassName("line")[28].style.display = "block";
      document.getElementsByClassName("chart")[24].style.marginTop = "30px";
      document.getElementsByClassName("chart")[25].style.marginTop = "30px";
      document.getElementsByClassName("chart")[26].style.marginTop = "30px";
      document.getElementsByClassName("chart")[27].style.marginTop = "30px";
      document.getElementsByClassName("chart")[28].style.marginTop = "30px";
      document.getElementsByClassName("chart")[29].style.marginTop = "30px";
      document.getElementById("ClickMe18").innerHTML="Hide System Stats";}
    else{
      document.getElementsByClassName("line")[23].style.display = "none";
      document.getElementsByClassName("line")[24].style.display = "none";
      document.getElementsByClassName("line")[25].style.display = "none";
      document.getElementsByClassName("line")[26].style.display = "none";
      document.getElementsByClassName("line")[27].style.display = "none";
      document.getElementsByClassName("line")[28].style.display = "none";
      document.getElementsByClassName("chart")[24].style.marginTop = "0px";
      document.getElementsByClassName("chart")[25].style.marginTop = "0px";
      document.getElementsByClassName("chart")[26].style.marginTop = "0px";
      document.getElementsByClassName("chart")[27].style.marginTop = "0px";
      document.getElementsByClassName("chart")[28].style.marginTop = "0px";
      document.getElementsByClassName("chart")[29].style.marginTop = "0px";
      document.getElementById("ClickMe18").innerHTML="Show System Stats";
    }
  }

  function HideGraph9(){
    if(document.getElementsByClassName("temp")[0].style.display == "none"){
      document.getElementsByClassName("temp")[0].style.display = "block";
      document.getElementsByClassName("temp")[1].style.display = "block";
      document.getElementsByClassName("chart")[30].style.marginTop = "30px";
      document.getElementsByClassName("chart")[31].style.marginTop = "30px";
      document.getElementById("ClickMe19").innerHTML="Hide Switch Status";}
    else{
        document.getElementsByClassName("temp")[0].style.display = "none";
        document.getElementsByClassName("temp")[1].style.display = "none";
        document.getElementsByClassName("chart")[30].style.marginTop = "0px";
        document.getElementsByClassName("chart")[31].style.marginTop = "0px";
      document.getElementById("ClickMe19").innerHTML="Show Switch Status";
    }
  }

  if(dat!=null){
    for(var z=0;z<dat.length;z++){
        if(z%2===0 && z!== 0){
            port[portcount] = dat[z];
            portcount++;
        }
    }
    }

    if(date13!=null){
        for(var i13=0;i13<date13.length;i13++){
           Spine_01_Fan1_fix[i13] = Spine_01_Fan1[i13].slice(11,17);
           Spine_01_Fan2_fix[i13] = Spine_01_Fan2[i13].slice(11,17);
           Spine_01_Fan3_fix[i13] = Spine_01_Fan3[i13].slice(11,17);
           Spine_01_Fan4_fix[i13] = Spine_01_Fan4[i13].slice(11,17);
           Spine_01_Fan5_fix[i13] = Spine_01_Fan5[i13].slice(11,17);
           Spine_01_Fan6_fix[i13] = Spine_01_Fan6[i13].slice(11,17);
           Spine_01_Fan7_fix[i13] = Spine_01_Fan7[i13].slice(11,17);
           Spine_01_Fan8_fix[i13] = Spine_01_Fan8[i13].slice(11,17);

           Spine_02_Fan1_fix[i13] = Spine_02_Fan1[i13].slice(11,17);
           Spine_02_Fan2_fix[i13] = Spine_02_Fan2[i13].slice(11,17);
           Spine_02_Fan3_fix[i13] = Spine_02_Fan3[i13].slice(11,17);
           Spine_02_Fan4_fix[i13] = Spine_02_Fan4[i13].slice(11,17);
           Spine_02_Fan5_fix[i13] = Spine_02_Fan5[i13].slice(11,17);
           Spine_02_Fan6_fix[i13] = Spine_02_Fan6[i13].slice(11,17);
           Spine_02_Fan7_fix[i13] = Spine_02_Fan7[i13].slice(11,17);
           Spine_02_Fan8_fix[i13] = Spine_02_Fan8[i13].slice(11,17);

           Leaf_01_Fan1_fix[i13] = Leaf_01_Fan1[i13].slice(11,17);
           Leaf_01_Fan2_fix[i13] = Leaf_01_Fan2[i13].slice(11,17);
           Leaf_01_Fan3_fix[i13] = Leaf_01_Fan3[i13].slice(11,17);
           Leaf_01_Fan4_fix[i13] = Leaf_01_Fan4[i13].slice(11,17);
           Leaf_01_Fan5_fix[i13] = Leaf_01_Fan5[i13].slice(11,17);
           Leaf_01_Fan6_fix[i13] = Leaf_01_Fan6[i13].slice(11,17);
           Leaf_01_Fan7_fix[i13] = Leaf_01_Fan7[i13].slice(11,17);
           Leaf_01_Fan8_fix[i13] = Leaf_01_Fan8[i13].slice(11,17);

           Leaf_02_Fan1_fix[i13] = Leaf_02_Fan1[i13].slice(11,17);
           Leaf_02_Fan2_fix[i13] = Leaf_02_Fan2[i13].slice(11,17);
           Leaf_02_Fan3_fix[i13] = Leaf_02_Fan3[i13].slice(11,17);
           Leaf_02_Fan4_fix[i13] = Leaf_02_Fan4[i13].slice(11,17);
           Leaf_02_Fan5_fix[i13] = Leaf_02_Fan5[i13].slice(11,17);
           Leaf_02_Fan6_fix[i13] = Leaf_02_Fan6[i13].slice(11,17);
           Leaf_02_Fan7_fix[i13] = Leaf_02_Fan7[i13].slice(11,17);
           Leaf_02_Fan8_fix[i13] = Leaf_02_Fan8[i13].slice(11,17);

           Leaf_03_Fan1_fix[i13] = Leaf_03_Fan1[i13].slice(11,17);
           Leaf_03_Fan2_fix[i13] = Leaf_03_Fan2[i13].slice(11,17);
           Leaf_03_Fan3_fix[i13] = Leaf_03_Fan3[i13].slice(11,17);
           Leaf_03_Fan4_fix[i13] = Leaf_03_Fan4[i13].slice(11,17);
           Leaf_03_Fan5_fix[i13] = Leaf_03_Fan5[i13].slice(11,17);
           Leaf_03_Fan6_fix[i13] = Leaf_03_Fan6[i13].slice(11,17);
           Leaf_03_Fan7_fix[i13] = Leaf_03_Fan7[i13].slice(11,17);
           Leaf_03_Fan8_fix[i13] = Leaf_03_Fan8[i13].slice(11,17);

           Leaf_04_Fan1_fix[i13] = Leaf_04_Fan1[i13].slice(11,17);
           Leaf_04_Fan2_fix[i13] = Leaf_04_Fan2[i13].slice(11,17);
           Leaf_04_Fan3_fix[i13] = Leaf_04_Fan3[i13].slice(11,17);
           Leaf_04_Fan4_fix[i13] = Leaf_04_Fan4[i13].slice(11,17);
           Leaf_04_Fan5_fix[i13] = Leaf_04_Fan5[i13].slice(11,17);
           Leaf_04_Fan6_fix[i13] = Leaf_04_Fan6[i13].slice(11,17);
           Leaf_04_Fan7_fix[i13] = Leaf_04_Fan7[i13].slice(11,17);
           Leaf_04_Fan8_fix[i13] = Leaf_04_Fan8[i13].slice(11,17);

           if(Spine01_CPU1Temp[i13] !== undefined){
           Spine01_CPU1Temp_fix[i13] = Spine01_CPU1Temp[i13].slice(0,13);
           this.state.chartData30.datasets[0].data.push(Spine01_CPU1Temp_fix[i13]);
           this.state.chartData30.datasets[0].backgroundColor.push('rgba(35,135,225,0.5');
        }
        else{
            this.state.chartData30.datasets[0].data.push(0);
        }

            if(Spine01_CPU2Temp[i13] !== undefined){
            Spine01_CPU2Temp_fix[i13] = Spine01_CPU2Temp[i13].slice(0,13);
            this.state.chartData30.datasets[1].data.push(Spine01_CPU2Temp_fix[i13]);
            this.state.chartData30.datasets[1].backgroundColor.push('rgba(45,155,235,0.5');
        }
        else{
            this.state.chartData30.datasets[1].data.push(0);
        }

            if(Spine01_SystemTemp[i13] !== undefined){
                Spine01_SystemTemp_fix[i13] = Spine01_SystemTemp[i13].slice(0,11);
            this.state.chartData30.datasets[2].data.push(Spine01_SystemTemp_fix[i13]);
            this.state.chartData30.datasets[2].backgroundColor.push('rgba(35,165,213,0.5');
        }
        else{
            this.state.chartData30.datasets[2].data.push(0);
        }

        if(Spine01_PeripheralTemp[i13] !== undefined){
            Spine01_PeripheralTemp_fix[i13] = Spine01_PeripheralTemp[i13].slice(0,7);
        this.state.chartData30.datasets[3].data.push(Spine01_PeripheralTemp_fix[i13]);
        this.state.chartData30.datasets[3].backgroundColor.push('rgba(15,145,223,0.5');
        }
        else{
            this.state.chartData30.datasets[3].data.push(0);
        }

        if(Spine01_PCHTemp[i13] !== undefined){
            Spine01_PCHTemp_fix[i13] = Spine01_PCHTemp[i13].slice(0,14);
        this.state.chartData30.datasets[4].data.push(Spine01_PCHTemp_fix[i13]);
        this.state.chartData30.datasets[4].backgroundColor.push('rgba(55,165,233,0.5');
        }
        else{
            this.state.chartData30.datasets[4].data.push(0);
        }

        if(Spine01_P1DIMMA1Temp[i13] !== undefined){
            Spine01_P1DIMMA1Temp_fix[i13] = Spine01_P1DIMMA1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[5].data.push(Spine01_P1DIMMA1Temp_fix[i13]);
        this.state.chartData30.datasets[5].backgroundColor.push('rgba(45,165,215,0.5');
        }
        else{
            this.state.chartData30.datasets[5].data.push(0);
        }

        if(Spine01_P1DIMMC1Temp[i13] !== undefined){
            Spine01_P1DIMMC1Temp_fix[i13] = Spine01_P1DIMMC1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[6].data.push(Spine01_P1DIMMC1Temp_fix[i13]);
        this.state.chartData30.datasets[6].backgroundColor.push('rgba(55,148,219,0.5');
        }
        else{
            this.state.chartData30.datasets[6].data.push(0);
        }

        if(Spine01_P2DIMME1Temp[i13] !== undefined){
            Spine01_P2DIMME1Temp_fix[i13] = Spine01_P2DIMME1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[7].data.push(Spine01_P2DIMME1Temp_fix[i13]);
        this.state.chartData30.datasets[7].backgroundColor.push('rgba(35,172,203,0.5');
        }
        else{
            this.state.chartData30.datasets[7].data.push(0);
        }

        if(Spine01_P2DIMMG1Temp[i13] !== undefined){
            Spine01_P2DIMMG1Temp_fix[i13] = Spine01_P2DIMMG1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[8].data.push(Spine01_P2DIMMG1Temp_fix[i13]);
        this.state.chartData30.datasets[8].backgroundColor.push('rgba(28,185,234,0.5');
        }
        else{
            this.state.chartData30.datasets[8].data.push(0);
        }

        if(Spine02_CPU1Temp[i13] !== undefined){
            Spine02_CPU1Temp_fix[i13] = Spine02_CPU1Temp[i13].slice(0,13);
            this.state.chartData30.datasets[9].data.push(Spine02_CPU1Temp_fix[i13]);
            this.state.chartData30.datasets[9].backgroundColor.push('rgba(215,55,75,0.5');
         }
         else{
             this.state.chartData30.datasets[9].data.push(0);
         }
        
        if(Spine02_CPU2Temp[i13] !== undefined){
        Spine02_CPU2Temp_fix[i13] = Spine02_CPU2Temp[i13].slice(0,13);
        this.state.chartData30.datasets[10].data.push(Spine02_CPU2Temp_fix[i13]);
        this.state.chartData30.datasets[10].backgroundColor.push('rgba(225,68,52,0.5');
         }
         else{
             this.state.chartData30.datasets[10].data.push(0);
         }
        
        if(Spine02_SystemTemp[i13] !== undefined){
            Spine02_SystemTemp_fix[i13] = Spine02_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[11].data.push(Spine02_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[11].backgroundColor.push('rgba(208,88,49,0.5');
         }
         else{
             this.state.chartData30.datasets[11].data.push(0);
         }
        
         if(Spine02_PeripheralTemp[i13] !== undefined){
             Spine02_PeripheralTemp_fix[i13] = Spine02_PeripheralTemp[i13].slice(0,7);
         this.state.chartData30.datasets[12].data.push(Spine02_PeripheralTemp_fix[i13]);
         this.state.chartData30.datasets[12].backgroundColor.push('rgba(222,53,62,0.5');
         }
         else{
             this.state.chartData30.datasets[12].data.push(0);
         }
        
         if(Spine02_PCHTemp[i13] !== undefined){
             Spine02_PCHTemp_fix[i13] = Spine02_PCHTemp[i13].slice(0,14);
         this.state.chartData30.datasets[13].data.push(Spine02_PCHTemp_fix[i13]);
         this.state.chartData30.datasets[13].backgroundColor.push('rgba(245,33,52,0.5');
         }
         else{
             this.state.chartData30.datasets[13].data.push(0);
         }
        
         if(Spine02_P1DIMMA1Temp[i13] !== undefined){
             Spine02_P1DIMMA1Temp_fix[i13] = Spine02_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[14].data.push(Spine02_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[14].backgroundColor.push('rgba(211,23,82,0.5');
         }
         else{
             this.state.chartData30.datasets[14].data.push(0);
         }
        
         if(Spine02_P1DIMMC1Temp[i13] !== undefined){
             Spine02_P1DIMMC1Temp_fix[i13] = Spine02_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[15].data.push(Spine02_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[15].backgroundColor.push('rgba(215,58,21,0.5');
         }
         else{
             this.state.chartData30.datasets[15].data.push(0);
         }
        
         if(Spine02_P2DIMME1Temp[i13] !== undefined){
             Spine02_P2DIMME1Temp_fix[i13] = Spine02_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[16].data.push(Spine02_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[16].backgroundColor.push('rgba(191,38,41,0.5');
         }
         else{
             this.state.chartData30.datasets[16].data.push(0);
         }
        
         if(Spine02_P2DIMMG1Temp[i13] !== undefined){
             Spine02_P2DIMMG1Temp_fix[i13] = Spine02_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[17].data.push(Spine02_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[17].backgroundColor.push('rgba(225,98,41,0.5');
         }
         else{
             this.state.chartData30.datasets[17].data.push(0);
         }

        if(Leaf01_CPU1Temp[i13] !== undefined){
            Leaf01_CPU1Temp_fix[i13] = Leaf01_CPU1Temp[i13].slice(0,13);
        this.state.chartData30.datasets[18].data.push(Leaf01_CPU1Temp_fix[i13]);
        this.state.chartData30.datasets[18].backgroundColor.push('rgba(25,175,35,0.5');
         }
         else{
             this.state.chartData30.datasets[18].data.push(0);
         }
        
        if(Leaf01_CPU2Temp[i13] !== undefined){
        Leaf01_CPU2Temp_fix[i13] = Leaf01_CPU2Temp[i13].slice(0,13);
        this.state.chartData30.datasets[19].data.push(Leaf01_CPU2Temp_fix[i13]);
        this.state.chartData30.datasets[19].backgroundColor.push('rgba(35,168,42,0.5');
         }
         else{
             this.state.chartData30.datasets[19].data.push(0);
         }
        
        if(Leaf01_SystemTemp[i13] !== undefined){
            Leaf01_SystemTemp_fix[i13] = Leaf01_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[20].data.push(Leaf01_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[20].backgroundColor.push('rgba(42,155,47,0.5');
         }
         else{
             this.state.chartData30.datasets[20].data.push(0);
         }
        
         if(Leaf01_PeripheralTemp[i13] !== undefined){
             Leaf01_PeripheralTemp_fix[i13] = Leaf01_PeripheralTemp[i13].slice(0,7);
         this.state.chartData30.datasets[21].data.push(Leaf01_PeripheralTemp_fix[i13]);
         this.state.chartData30.datasets[21].backgroundColor.push('rgba(40,182,15,0.5');
         }
         else{
             this.state.chartData30.datasets[21].data.push(0);
         }
        
         if(Leaf01_PCHTemp[i13] !== undefined){
             Leaf01_PCHTemp_fix[i13] = Leaf01_PCHTemp[i13].slice(0,14);
         this.state.chartData30.datasets[22].data.push(Leaf01_PCHTemp_fix[i13]);
         this.state.chartData30.datasets[22].backgroundColor.push('rgba(30,152,45,0.5');
         }
         else{
             this.state.chartData30.datasets[22].data.push(0);
         }
        
         if(Leaf01_P1DIMMA1Temp[i13] !== undefined){
             Leaf01_P1DIMMA1Temp_fix[i13] = Leaf01_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[23].data.push(Leaf01_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[23].backgroundColor.push('rgba(55,189,29,0.5');
         }
         else{
             this.state.chartData30.datasets[23].data.push(0);
         }
        
         if(Leaf01_P1DIMMC1Temp[i13] !== undefined){
             Leaf01_P1DIMMC1Temp_fix[i13] = Leaf01_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[24].data.push(Leaf01_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[24].backgroundColor.push('rgba(53,219,89,0.5');
         }
         else{
             this.state.chartData30.datasets[24].data.push(0);
         }
        
         if(Leaf01_P2DIMME1Temp[i13] !== undefined){
             Leaf01_P2DIMME1Temp_fix[i13] = Leaf01_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[25].data.push(Leaf01_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[25].backgroundColor.push('rgba(89,219,52,0.5');
         }
         else{
             this.state.chartData30.datasets[25].data.push(0);
         }
        
         if(Leaf01_P2DIMMG1Temp[i13] !== undefined){
             Leaf01_P2DIMMG1Temp_fix[i13] = Leaf01_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[26].data.push(Leaf01_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[26].backgroundColor.push('rgba(69,225,32,0.5');
         }
         else{
             this.state.chartData30.datasets[26].data.push(0);
         }

         if(Leaf02_CPU1Temp[i13] !== undefined){
            Leaf02_CPU1Temp_fix[i13] = Leaf02_CPU1Temp[i13].slice(0,13);
        this.state.chartData30.datasets[27].data.push(Leaf02_CPU1Temp_fix[i13]);
        this.state.chartData30.datasets[27].backgroundColor.push('rgba(215,205,25,0.4');
         }
         else{
             this.state.chartData30.datasets[27].data.push(0);
         }
        
        if(Leaf02_CPU2Temp[i13] !== undefined){
            Leaf02_CPU2Temp_fix[i13] = Leaf02_CPU2Temp[i13].slice(0,13);
        this.state.chartData30.datasets[28].data.push(Leaf02_CPU2Temp_fix[i13]);
        this.state.chartData30.datasets[28].backgroundColor.push('rgba(209,191,42,0.4');
         }
         else{
             this.state.chartData30.datasets[28].data.push(0);
         }
        
        if(Leaf02_SystemTemp[i13] !== undefined){
            Leaf02_SystemTemp_fix[i13] = Leaf02_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[29].data.push(Leaf02_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[29].backgroundColor.push('rgba(199,198,57,0.4');
         }
         else{
             this.state.chartData30.datasets[29].data.push(0);
         }
        
         if(Leaf02_PeripheralTemp[i13] !== undefined){
             Leaf02_PeripheralTemp_fix[i13] = Leaf02_PeripheralTemp[i13].slice(0,7);
         this.state.chartData30.datasets[30].data.push(Leaf02_PeripheralTemp_fix[i13]);
         this.state.chartData30.datasets[30].backgroundColor.push('rgba(188,173,37,0.4');
         }
         else{
             this.state.chartData30.datasets[30].data.push(0);
         }
        
         if(Leaf02_PCHTemp[i13] !== undefined){
             Leaf02_PCHTemp_fix[i13] = Leaf02_PCHTemp[i13].slice(0,14);
         this.state.chartData30.datasets[31].data.push(Leaf02_PCHTemp_fix[i13]);
         this.state.chartData30.datasets[31].backgroundColor.push('rgba(221,170,55,0.5');
         }
         else{
             this.state.chartData30.datasets[31].data.push(0);
         }
        
         if(Leaf02_P1DIMMA1Temp[i13] !== undefined){
             Leaf02_P1DIMMA1Temp_fix[i13] = Leaf02_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[32].data.push(Leaf02_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[32].backgroundColor.push('rgba(239,175,66,0.4');
         }
         else{
             this.state.chartData30.datasets[32].data.push(0);
         }
        
         if(Leaf02_P1DIMMC1Temp[i13] !== undefined){
             Leaf02_P1DIMMC1Temp_fix[i13] = Leaf02_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[33].data.push(Leaf02_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[33].backgroundColor.push('rgba(251,222,59,0.5');
         }
         else{
             this.state.chartData30.datasets[33].data.push(0);
         }
        
         if(Leaf02_P2DIMME1Temp[i13] !== undefined){
             Leaf02_P2DIMME1Temp_fix[i13] = Leaf02_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[34].data.push(Leaf02_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[34].backgroundColor.push('rgba(239,212,76,0.5');
         }
         else{
             this.state.chartData30.datasets[34].data.push(0);
         }
        
         if(Leaf02_P2DIMMG1Temp[i13] !== undefined){
             Leaf02_P2DIMMG1Temp_fix[i13] = Leaf02_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[35].data.push(Leaf02_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[35].backgroundColor.push('rgba(249,202,63,0.5');
         }
         else{
             this.state.chartData30.datasets[35].data.push(0);
         }

         
        if(Leaf03_CPU1Temp[i13] !== undefined){
            Leaf03_CPU1Temp_fix[i13] = Leaf03_CPU1Temp[i13].slice(0,13);
        this.state.chartData30.datasets[36].data.push(Leaf03_CPU1Temp_fix[i13]);
        this.state.chartData30.datasets[36].backgroundColor.push('rgba(15,235,211,0.4');
        }
        else{
            this.state.chartData30.datasets[36].data.push(0);
        }

        if(Leaf03_CPU2Temp[i13] !== undefined){
            Leaf03_CPU2Temp_fix[i13] = Leaf03_CPU2Temp[i13].slice(0,13);
        this.state.chartData30.datasets[37].data.push(Leaf03_CPU2Temp_fix[i13]);
        this.state.chartData30.datasets[37].backgroundColor.push('rgba(22,219,209,0.4');
        }
        else{
            this.state.chartData30.datasets[37].data.push(0);
        }

        if(Leaf03_SystemTemp[i13] !== undefined){
            Leaf03_SystemTemp_fix[i13] = Leaf03_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[38].data.push(Leaf03_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[38].backgroundColor.push('rgba(28,200,212,0.4');
        }
        else{
            this.state.chartData30.datasets[38].data.push(0);
        }

        if(Leaf03_PeripheralTemp[i13] !== undefined){
            Leaf03_PeripheralTemp_fix[i13] = Leaf03_PeripheralTemp[i13].slice(0,7);
        this.state.chartData30.datasets[39].data.push(Leaf03_PeripheralTemp_fix[i13]);
        this.state.chartData30.datasets[39].backgroundColor.push('rgba(38,220,211,0.4');
        }
        else{
            this.state.chartData30.datasets[39].data.push(0);
        }

        if(Leaf03_PCHTemp[i13] !== undefined){
            Leaf03_PCHTemp_fix[i13] = Leaf03_PCHTemp[i13].slice(0,14);
        this.state.chartData30.datasets[40].data.push(Leaf03_PCHTemp_fix[i13]);
        this.state.chartData30.datasets[40].backgroundColor.push('rgba(50,209,211,0.4');
        }
        else{
            this.state.chartData30.datasets[40].data.push(0);
        }

        if(Leaf03_P1DIMMA1Temp[i13] !== undefined){
            Leaf03_P1DIMMA1Temp_fix[i13] = Leaf03_P1DIMMA1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[41].data.push(Leaf03_P1DIMMA1Temp_fix[i13]);
        this.state.chartData30.datasets[41].backgroundColor.push('rgba(60,227,206,0.4');
        }
        else{
            this.state.chartData30.datasets[41].data.push(0);
        }

        if(Leaf03_P1DIMMC1Temp[i13] !== undefined){
            Leaf03_P1DIMMC1Temp_fix[i13] = Leaf03_P1DIMMC1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[42].data.push(Leaf03_P1DIMMC1Temp_fix[i13]);
        this.state.chartData30.datasets[42].backgroundColor.push('rgba(53,219,249,0.5');
        }
        else{
            this.state.chartData30.datasets[42].data.push(0);
        }

        if(Leaf03_P2DIMME1Temp[i13] !== undefined){
            Leaf03_P2DIMME1Temp_fix[i13] = Leaf03_P2DIMME1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[43].data.push(Leaf03_P2DIMME1Temp_fix[i13]);
        this.state.chartData30.datasets[43].backgroundColor.push('rgba(83,229,219,0.5');
        }
        else{
            this.state.chartData30.datasets[43].data.push(0);
        }

        if(Leaf03_P2DIMMG1Temp[i13] !== undefined){
            Leaf03_P2DIMMG1Temp_fix[i13] = Leaf03_P2DIMMG1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[44].data.push(Leaf03_P2DIMMG1Temp_fix[i13]);
        this.state.chartData30.datasets[44].backgroundColor.push('rgba(23,249,219,0.5');
        }
        else{
            this.state.chartData30.datasets[44].data.push(0);
        }

        if(Leaf04_CPU1Temp[i13] !== undefined){
            Leaf04_CPU1Temp_fix[i13] = Leaf04_CPU1Temp[i13].slice(0,13);
        this.state.chartData30.datasets[45].data.push(Leaf04_CPU1Temp_fix[i13]);
        this.state.chartData30.datasets[45].backgroundColor.push('rgba(231,85,222,0.4');
         }
         else{
             this.state.chartData30.datasets[45].data.push(0);
         }
        
        if(Leaf04_CPU2Temp[i13] !== undefined){
            Leaf04_CPU2Temp_fix[i13] = Leaf04_CPU2Temp[i13].slice(0,13);
        this.state.chartData30.datasets[46].data.push(Leaf04_CPU2Temp_fix[i13]);
        this.state.chartData30.datasets[46].backgroundColor.push('rgba(202,65,244,0.4');
         }
         else{
             this.state.chartData30.datasets[46].data.push(0);
         }
        
        if(Leaf04_SystemTemp[i13] !== undefined){
            Leaf04_SystemTemp_fix[i13] = Leaf04_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[47].data.push(Leaf04_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[47].backgroundColor.push('rgba(211,66,224,0.4');
         }
         else{
             this.state.chartData30.datasets[47].data.push(0);
         }
        
         if(Leaf04_PeripheralTemp[i13] !== undefined){
             Leaf04_PeripheralTemp_fix[i13] = Leaf04_PeripheralTemp[i13].slice(0,7);
         this.state.chartData30.datasets[48].data.push(Leaf04_PeripheralTemp_fix[i13]);
         this.state.chartData30.datasets[48].backgroundColor.push('rgba(255,5,245,0.4');
         }
         else{
             this.state.chartData30.datasets[48].data.push(0);
         }
        
         if(Leaf04_PCHTemp[i13] !== undefined){
             Leaf04_PCHTemp_fix[i13] = Leaf04_PCHTemp[i13].slice(0,14);
         this.state.chartData30.datasets[49].data.push(Leaf04_PCHTemp_fix[i13]);
         this.state.chartData30.datasets[49].backgroundColor.push('rgba(222,55,244,0.4');
         }
         else{
             this.state.chartData30.datasets[49].data.push(0);
         }
        
         if(Leaf04_P1DIMMA1Temp[i13] !== undefined){
             Leaf04_P1DIMMA1Temp_fix[i13] = Leaf04_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[50].data.push(Leaf04_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[50].backgroundColor.push('rgba(249,22,200,0.4');
         }
         else{
             this.state.chartData30.datasets[50].data.push(0);
         }
        
         if(Leaf04_P1DIMMC1Temp[i13] !== undefined){
             Leaf04_P1DIMMC1Temp_fix[i13] = Leaf04_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[51].data.push(Leaf04_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[51].backgroundColor.push('rgba(202,81,195,0.4');
         }
         else{
             this.state.chartData30.datasets[51].data.push(0);
         }
        
         if(Leaf04_P2DIMME1Temp[i13] !== undefined){
             Leaf04_P2DIMME1Temp_fix[i13] = Leaf04_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[52].data.push(Leaf04_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[52].backgroundColor.push('rgba(219,55,202,0.4');
         }
         else{
             this.state.chartData30.datasets[52].data.push(0);
         }
        
         if(Leaf04_P2DIMMG1Temp[i13] !== undefined){
             Leaf04_P2DIMMG1Temp_fix[i13] = Leaf04_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[53].data.push(Leaf04_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[53].backgroundColor.push('rgba(235,35,215,0.4');
         }
         else{
             this.state.chartData30.datasets[53].data.push(0);
         }

           parse[i13] = parseInt(date13[i13], 10);
           this.state.chartData29.labels.push(parse[i13]);
           this.state.chartData29.datasets[0].data.push(Spine_01_Fan1_fix[i13]);
           this.state.chartData29.datasets[0].backgroundColor.push('rgba(35,135,225,0.5');
           this.state.chartData29.datasets[1].data.push(Spine_01_Fan2_fix[i13]);
           this.state.chartData29.datasets[1].backgroundColor.push('rgba(85,155,235,0.5');
           this.state.chartData29.datasets[2].data.push(Spine_01_Fan3_fix[i13]);
           this.state.chartData29.datasets[2].backgroundColor.push('rgba(55,135,245,0.5');
           this.state.chartData29.datasets[3].data.push(Spine_01_Fan4_fix[i13]);
           this.state.chartData29.datasets[3].backgroundColor.push('rgba(65,149,225,0.5');
           this.state.chartData29.datasets[4].data.push(Spine_01_Fan5_fix[i13]);
           this.state.chartData29.datasets[4].backgroundColor.push('rgba(75,159,215,0.5');
           this.state.chartData29.datasets[5].data.push(Spine_01_Fan6_fix[i13]);
           this.state.chartData29.datasets[5].backgroundColor.push('rgba(35,179,235,0.5');
           this.state.chartData29.datasets[6].data.push(Spine_01_Fan7_fix[i13]);
           this.state.chartData29.datasets[6].backgroundColor.push('rgba(25,169,215,0.5');
           this.state.chartData29.datasets[7].data.push(Spine_01_Fan8_fix[i13]);
           this.state.chartData29.datasets[7].backgroundColor.push('rgba(15,159,205,0.5');

           this.state.chartData29.datasets[8].data.push(Spine_02_Fan1_fix[i13]);
           this.state.chartData29.datasets[8].backgroundColor.push('rgba(215,55,75,0.4');
           this.state.chartData29.datasets[9].data.push(Spine_02_Fan2_fix[i13]);
           this.state.chartData29.datasets[9].backgroundColor.push('rgba(230,25,35,0.4');
           this.state.chartData29.datasets[10].data.push(Spine_02_Fan3_fix[i13]);
           this.state.chartData29.datasets[10].backgroundColor.push('rgba(222,65,55,0.4');
           this.state.chartData29.datasets[11].data.push(Spine_02_Fan4_fix[i13]);
           this.state.chartData29.datasets[11].backgroundColor.push('rgba(203,78,25,0.4');
           this.state.chartData29.datasets[12].data.push(Spine_02_Fan5_fix[i13]);
           this.state.chartData29.datasets[12].backgroundColor.push('rgba(218,88,85,0.4');
           this.state.chartData29.datasets[13].data.push(Spine_02_Fan6_fix[i13]);
           this.state.chartData29.datasets[13].backgroundColor.push('rgba(209,99,35,0.4');
           this.state.chartData29.datasets[14].data.push(Spine_02_Fan7_fix[i13]);
           this.state.chartData29.datasets[14].backgroundColor.push('rgba(222,35,99,0.4');
           this.state.chartData29.datasets[15].data.push(Spine_02_Fan8_fix[i13]);
           this.state.chartData29.datasets[15].backgroundColor.push('rgba(235,15,15,0.4');

           this.state.chartData29.datasets[16].data.push(Leaf_01_Fan1_fix[i13]);
           this.state.chartData29.datasets[16].backgroundColor.push('rgba(25,175,35,0.4');
           this.state.chartData29.datasets[17].data.push(Leaf_01_Fan2_fix[i13]);
           this.state.chartData29.datasets[17].backgroundColor.push('rgba(35,155,65,0.4');
           this.state.chartData29.datasets[18].data.push(Leaf_01_Fan3_fix[i13]);
           this.state.chartData29.datasets[18].backgroundColor.push('rgba(55,195,25,0.4');
           this.state.chartData29.datasets[19].data.push(Leaf_01_Fan4_fix[i13]);
           this.state.chartData29.datasets[19].backgroundColor.push('rgba(44,184,34,0.4');
           this.state.chartData29.datasets[20].data.push(Leaf_01_Fan5_fix[i13]);
           this.state.chartData29.datasets[20].backgroundColor.push('rgba(54,215,67,0.4');
           this.state.chartData29.datasets[21].data.push(Leaf_01_Fan6_fix[i13]);
           this.state.chartData29.datasets[21].backgroundColor.push('rgba(74,225,37,0.4');
           this.state.chartData29.datasets[22].data.push(Leaf_01_Fan7_fix[i13]);
           this.state.chartData29.datasets[22].backgroundColor.push('rgba(47,235,53,0.4');
           this.state.chartData29.datasets[23].data.push(Leaf_01_Fan8_fix[i13]);
           this.state.chartData29.datasets[23].backgroundColor.push('rgba(78,245,37,0.4');

           this.state.chartData29.datasets[24].data.push(Leaf_02_Fan1_fix[i13]);
           this.state.chartData29.datasets[24].backgroundColor.push('rgba(215,155,25,0.4');
           this.state.chartData29.datasets[25].data.push(Leaf_02_Fan2_fix[i13]);
           this.state.chartData29.datasets[25].backgroundColor.push('rgba(219,135,55,0.4');
           this.state.chartData29.datasets[26].data.push(Leaf_02_Fan3_fix[i13]);
           this.state.chartData29.datasets[26].backgroundColor.push('rgba(199,175,35,0.4');
           this.state.chartData29.datasets[27].data.push(Leaf_02_Fan4_fix[i13]);
           this.state.chartData29.datasets[27].backgroundColor.push('rgba(193,168,45,0.4');
           this.state.chartData29.datasets[28].data.push(Leaf_02_Fan5_fix[i13]);
           this.state.chartData29.datasets[28].backgroundColor.push('rgba(228,178,55,0.4');
           this.state.chartData29.datasets[29].data.push(Leaf_02_Fan6_fix[i13]);
           this.state.chartData29.datasets[29].backgroundColor.push('rgba(229,189,25,0.4');
           this.state.chartData29.datasets[30].data.push(Leaf_02_Fan7_fix[i13]);
           this.state.chartData29.datasets[30].backgroundColor.push('rgba(225,222,79,0.4');
           this.state.chartData29.datasets[31].data.push(Leaf_02_Fan8_fix[i13]);
           this.state.chartData29.datasets[31].backgroundColor.push('rgba(235,215,55,0.4');

           this.state.chartData29.datasets[32].data.push(Leaf_03_Fan1_fix[i13]);
           this.state.chartData29.datasets[32].backgroundColor.push('rgba(15,235,211,0.4');
           this.state.chartData29.datasets[33].data.push(Leaf_03_Fan2_fix[i13]);
           this.state.chartData29.datasets[33].backgroundColor.push('rgba(19,245,215,0.4');
           this.state.chartData29.datasets[34].data.push(Leaf_03_Fan3_fix[i13]);
           this.state.chartData29.datasets[34].backgroundColor.push('rgba(99,245,205,0.4');
           this.state.chartData29.datasets[35].data.push(Leaf_03_Fan4_fix[i13]);
           this.state.chartData29.datasets[35].backgroundColor.push('rgba(93,248,215,0.4');
           this.state.chartData29.datasets[36].data.push(Leaf_03_Fan5_fix[i13]);
           this.state.chartData29.datasets[36].backgroundColor.push('rgba(28,248,225,0.4');
           this.state.chartData29.datasets[37].data.push(Leaf_03_Fan6_fix[i13]);
           this.state.chartData29.datasets[37].backgroundColor.push('rgba(29,239,225,0.4');
           this.state.chartData29.datasets[38].data.push(Leaf_03_Fan7_fix[i13]);
           this.state.chartData29.datasets[38].backgroundColor.push('rgba(35,222,219,0.4');
           this.state.chartData29.datasets[39].data.push(Leaf_03_Fan8_fix[i13]);
           this.state.chartData29.datasets[39].backgroundColor.push('rgba(55,235,215,0.4');

           this.state.chartData29.datasets[40].data.push(Leaf_04_Fan1_fix[i13]);
           this.state.chartData29.datasets[40].backgroundColor.push('rgba(225,45,225,0.4');
           this.state.chartData29.datasets[41].data.push(Leaf_04_Fan2_fix[i13]);
           this.state.chartData29.datasets[41].backgroundColor.push('rgba(219,35,255,0.4');
           this.state.chartData29.datasets[42].data.push(Leaf_04_Fan3_fix[i13]);
           this.state.chartData29.datasets[42].backgroundColor.push('rgba(249,45,215,0.4');
           this.state.chartData29.datasets[43].data.push(Leaf_04_Fan4_fix[i13]);
           this.state.chartData29.datasets[43].backgroundColor.push('rgba(213,68,245,0.4');
           this.state.chartData29.datasets[44].data.push(Leaf_04_Fan5_fix[i13]);
           this.state.chartData29.datasets[44].backgroundColor.push('rgba(228,78,225,0.4');
           this.state.chartData29.datasets[45].data.push(Leaf_04_Fan6_fix[i13]);
           this.state.chartData29.datasets[45].backgroundColor.push('rgba(229,19,225,0.4');
           this.state.chartData29.datasets[46].data.push(Leaf_04_Fan7_fix[i13]);
           this.state.chartData29.datasets[46].backgroundColor.push('rgba(225,22,229,0.4');
           this.state.chartData29.datasets[47].data.push(Leaf_04_Fan8_fix[i13]);
           this.state.chartData29.datasets[47].backgroundColor.push('rgba(235,35,215,0.4');

           this.state.chartData30.labels.push(parse[i13]);
        }}

    if(date12!=null){
        for(var i12=0;i12<date12.length;i12++){
            SS_Spine01_used_mem[i12] = SS_Spine01[i12].slice(0,9);
            SS_Spine01_used_mem_fix[i12] = SS_Spine01_used_mem[i12].match(/\d*/g);
            SS_Spine01_used_swap[i12] = SS_Spine01[i12].slice(9,19);
            SS_Spine01_used_swap_fix[i12] = SS_Spine01_used_swap[i12].match(/\d*/g);
            SS_Spine01_paging[i12] = SS_Spine01[i12].slice(19,26);
            SS_Spine01_paging_fix[i12] = SS_Spine01_paging[i12].match(/\d*/g);
            SS_Spine01_cpu_user[i12] = SS_Spine01[i12].slice(26,35);
            SS_Spine01_cpu_user_fix[i12] = SS_Spine01_cpu_user[i12].match(/\d*/g);
            SS_Spine01_cpu_sys[i12] = SS_Spine01[i12].slice(35,43);
            SS_Spine01_cpu_sys_fix[i12] = SS_Spine01_cpu_sys[i12].match(/\d*/g);
            SS_Spine01_cpu_idle[i12] = SS_Spine01[i12].slice(43,52);
            SS_Spine01_cpu_idle_fix[i12] = SS_Spine01_cpu_idle[i12].match(/\d*/g);

            SS_Spine02_used_mem[i12] = SS_Spine02[i12].slice(0,9);
            SS_Spine02_used_mem_fix[i12] = SS_Spine02_used_mem[i12].match(/\d*/g);
            SS_Spine02_used_swap[i12] = SS_Spine02[i12].slice(9,19);
            SS_Spine02_used_swap_fix[i12] = SS_Spine02_used_swap[i12].match(/\d*/g);
            SS_Spine02_paging[i12] = SS_Spine02[i12].slice(19,26);
            SS_Spine02_paging_fix[i12] = SS_Spine02_paging[i12].match(/\d*/g);
            SS_Spine02_cpu_user[i12] = SS_Spine02[i12].slice(26,35);
            SS_Spine02_cpu_user_fix[i12] = SS_Spine02_cpu_user[i12].match(/\d*/g);
            SS_Spine02_cpu_sys[i12] = SS_Spine02[i12].slice(35,43);
            SS_Spine02_cpu_sys_fix[i12] = SS_Spine02_cpu_sys[i12].match(/\d*/g);
            SS_Spine02_cpu_idle[i12] = SS_Spine02[i12].slice(43,52);
            SS_Spine02_cpu_idle_fix[i12] = SS_Spine02_cpu_idle[i12].match(/\d*/g);

            SS_Leaf01_used_mem[i12] = SS_Leaf01[i12].slice(1,10);
            SS_Leaf01_used_mem_fix[i12] = SS_Leaf01_used_mem[i12].match(/\d*/g);
            SS_Leaf01_used_swap[i12] = SS_Leaf01[i12].slice(10,20);
            SS_Leaf01_used_swap_fix[i12] = SS_Leaf01_used_swap[i12].match(/\d*/g);
            SS_Leaf01_paging[i12] = SS_Leaf01[i12].slice(20,27);
            SS_Leaf01_paging_fix[i12] = SS_Leaf01_paging[i12].match(/\d*/g);
            SS_Leaf01_cpu_user[i12] = SS_Leaf01[i12].slice(27,36);
            SS_Leaf01_cpu_user_fix[i12] = SS_Leaf01_cpu_user[i12].match(/\d*/g);
            SS_Leaf01_cpu_sys[i12] = SS_Leaf01[i12].slice(36,44);
            SS_Leaf01_cpu_sys_fix[i12] = SS_Leaf01_cpu_sys[i12].match(/\d*/g);
            SS_Leaf01_cpu_idle[i12] = SS_Leaf01[i12].slice(44,53);
            SS_Leaf01_cpu_idle_fix[i12] = SS_Leaf01_cpu_idle[i12].match(/\d*/g);

            SS_Leaf02_used_mem[i12] = SS_Leaf02[i12].slice(1,10);
            SS_Leaf02_used_mem_fix[i12] = SS_Leaf02_used_mem[i12].match(/\d*/g);
            SS_Leaf02_used_swap[i12] = SS_Leaf02[i12].slice(10,20);
            SS_Leaf02_used_swap_fix[i12] = SS_Leaf02_used_swap[i12].match(/\d*/g);
            SS_Leaf02_paging[i12] = SS_Leaf02[i12].slice(20,27);
            SS_Leaf02_paging_fix[i12] = SS_Leaf02_paging[i12].match(/\d*/g);
            SS_Leaf02_cpu_user[i12] = SS_Leaf02[i12].slice(27,36);
            SS_Leaf02_cpu_user_fix[i12] = SS_Leaf02_cpu_user[i12].match(/\d*/g);
            SS_Leaf02_cpu_sys[i12] = SS_Leaf02[i12].slice(36,44);
            SS_Leaf02_cpu_sys_fix[i12] = SS_Leaf02_cpu_sys[i12].match(/\d*/g);
            SS_Leaf02_cpu_idle[i12] = SS_Leaf02[i12].slice(44,53);
            SS_Leaf02_cpu_idle_fix[i12] = SS_Leaf02_cpu_idle[i12].match(/\d*/g);

            SS_Leaf03_used_mem[i12] = SS_Leaf03[i12].slice(1,10);
            SS_Leaf03_used_mem_fix[i12] = SS_Leaf03_used_mem[i12].match(/\d*/g);
            SS_Leaf03_used_swap[i12] = SS_Leaf03[i12].slice(10,20);
            SS_Leaf03_used_swap_fix[i12] = SS_Leaf03_used_swap[i12].match(/\d*/g);
            SS_Leaf03_paging[i12] = SS_Leaf03[i12].slice(20,27);
            SS_Leaf03_paging_fix[i12] = SS_Leaf03_paging[i12].match(/\d*/g);
            SS_Leaf03_cpu_user[i12] = SS_Leaf03[i12].slice(27,36);
            SS_Leaf03_cpu_user_fix[i12] = SS_Leaf03_cpu_user[i12].match(/\d*/g);
            SS_Leaf03_cpu_sys[i12] = SS_Leaf03[i12].slice(36,44);
            SS_Leaf03_cpu_sys_fix[i12] = SS_Leaf03_cpu_sys[i12].match(/\d*/g);
            SS_Leaf03_cpu_idle[i12] = SS_Leaf03[i12].slice(44,53);
            SS_Leaf03_cpu_idle_fix[i12] = SS_Leaf03_cpu_idle[i12].match(/\d*/g);

            SS_Leaf04_used_mem[i12] = SS_Leaf04[i12].slice(1,10);
            SS_Leaf04_used_mem_fix[i12] = SS_Leaf04_used_mem[i12].match(/\d*/g);
            SS_Leaf04_used_swap[i12] = SS_Leaf04[i12].slice(10,20);
            SS_Leaf04_used_swap_fix[i12] = SS_Leaf04_used_swap[i12].match(/\d*/g);
            SS_Leaf04_paging[i12] = SS_Leaf04[i12].slice(20,27);
            SS_Leaf04_paging_fix[i12] = SS_Leaf04_paging[i12].match(/\d*/g);
            SS_Leaf04_cpu_user[i12] = SS_Leaf04[i12].slice(27,36);
            SS_Leaf04_cpu_user_fix[i12] = SS_Leaf04_cpu_user[i12].match(/\d*/g);
            SS_Leaf04_cpu_sys[i12] = SS_Leaf04[i12].slice(36,44);
            SS_Leaf04_cpu_sys_fix[i12] = SS_Leaf04_cpu_sys[i12].match(/\d*/g);
            SS_Leaf04_cpu_idle[i12] = SS_Leaf04[i12].slice(44,53);
            SS_Leaf04_cpu_idle_fix[i12] = SS_Leaf04_cpu_idle[i12].match(/\d*/g);

            parse2[i12] = parseInt(date12[i12], 10);
            this.state.chartData23.labels.push(parse2[i12]);
            this.state.chartData24.labels.push(parse2[i12]);
            this.state.chartData25.labels.push(parse2[i12]);
            this.state.chartData26.labels.push(parse2[i12]);
            this.state.chartData27.labels.push(parse2[i12]);
            this.state.chartData28.labels.push(parse2[i12]);

            this.state.chartData23.datasets[0].data.push(SS_Spine01_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData24.datasets[0].data.push(SS_Spine01_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData25.datasets[0].data.push(SS_Spine01_paging_fix[i12][0]);
            this.state.chartData25.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData26.datasets[0].data.push(SS_Spine01_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData27.datasets[0].data.push(SS_Spine01_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData28.datasets[0].data.push(SS_Spine01_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');

            this.state.chartData23.datasets[1].data.push(SS_Spine02_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData24.datasets[1].data.push(SS_Spine02_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData25.datasets[1].data.push(SS_Spine02_paging_fix[i12][0]);
            this.state.chartData25.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData26.datasets[1].data.push(SS_Spine02_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData27.datasets[1].data.push(SS_Spine02_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData28.datasets[1].data.push(SS_Spine02_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');

            this.state.chartData23.datasets[2].data.push(SS_Leaf01_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData24.datasets[2].data.push(SS_Leaf01_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData25.datasets[2].data.push(SS_Leaf01_paging_fix[i12][0]);
            this.state.chartData25.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData26.datasets[2].data.push(SS_Leaf01_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData27.datasets[2].data.push(SS_Leaf01_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData28.datasets[2].data.push(SS_Leaf01_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');

            this.state.chartData23.datasets[3].data.push(SS_Leaf02_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData24.datasets[3].data.push(SS_Leaf02_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData25.datasets[3].data.push(SS_Leaf02_paging_fix[i12][0]);
            this.state.chartData25.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData26.datasets[3].data.push(SS_Leaf02_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData27.datasets[3].data.push(SS_Leaf02_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData28.datasets[3].data.push(SS_Leaf02_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');

            this.state.chartData23.datasets[4].data.push(SS_Leaf03_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');
            this.state.chartData24.datasets[4].data.push(SS_Leaf03_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');
            this.state.chartData25.datasets[4].data.push(SS_Leaf03_paging_fix[i12][0]);
            this.state.chartData25.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');
            this.state.chartData26.datasets[4].data.push(SS_Leaf03_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');
            this.state.chartData27.datasets[4].data.push(SS_Leaf03_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');
            this.state.chartData28.datasets[4].data.push(SS_Leaf03_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[4].backgroundColor.push('rgba(159,32,219,0.9');

            this.state.chartData23.datasets[5].data.push(SS_Leaf04_used_mem_fix[i12][0]);
            this.state.chartData23.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
            this.state.chartData24.datasets[5].data.push(SS_Leaf04_used_swap_fix[i12][0]);
            this.state.chartData24.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
            this.state.chartData25.datasets[5].data.push(SS_Leaf04_paging_fix[i12][0]);
            this.state.chartData25.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
            this.state.chartData26.datasets[5].data.push(SS_Leaf04_cpu_user_fix[i12][0]);
            this.state.chartData26.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
            this.state.chartData27.datasets[5].data.push(SS_Leaf04_cpu_sys_fix[i12][0]);
            this.state.chartData27.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
            this.state.chartData28.datasets[5].data.push(SS_Leaf04_cpu_idle_fix[i12][0]);
            this.state.chartData28.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');
        }}

    if(date11!=null){
        for(var i11=0;i11<date11.length;i11++){
            SP_Spine01_used[i11] = SP_Spine01[i11].slice(0,6);
            SP_Spine01_used_fix[i11] = SP_Spine01_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Spine01_avail[i11] = SP_Spine01[i11].slice(6,13);
            SP_Spine01_avail_fix[i11] = SP_Spine01_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Spine02_used[i11] = SP_Spine02[i11].slice(0,6);
            SP_Spine02_used_fix[i11] = SP_Spine02_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Spine02_avail[i11] = SP_Spine02[i11].slice(6,13);
            SP_Spine02_avail_fix[i11] = SP_Spine02_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf01_used[i11] = SP_Leaf01[i11].slice(0,6);
            SP_Leaf01_used_fix[i11] = SP_Leaf01_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf01_avail[i11] = SP_Leaf01[i11].slice(6,13);
            SP_Leaf01_avail_fix[i11] = SP_Leaf01_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf02_used[i11] = SP_Leaf02[i11].slice(0,6);
            SP_Leaf02_used_fix[i11] = SP_Leaf02_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf02_avail[i11] = SP_Leaf02[i11].slice(6,13);
            SP_Leaf02_avail_fix[i11] = SP_Leaf02_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf03_used[i11] = SP_Leaf03[i11].slice(0,6);
            SP_Leaf03_used_fix[i11] = SP_Leaf03_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf03_avail[i11] = SP_Leaf03[i11].slice(6,13);
            SP_Leaf03_avail_fix[i11] = SP_Leaf03_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf04_used[i11] = SP_Leaf04[i11].slice(0,6);
            SP_Leaf04_used_fix[i11] = SP_Leaf04_used[i11].match(/\d{1,3}(.?)\d{1,3}/g);
            SP_Leaf04_avail[i11] = SP_Leaf04[i11].slice(6,13);
            SP_Leaf04_avail_fix[i11] = SP_Leaf04_avail[i11].match(/\d{1,3}(.?)\d{1,3}/g);

            this.state.chartData21.datasets[0].data.push(SP_Spine01_used_fix[i11]);
            this.state.chartData21.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData21.datasets[1].data.push(SP_Spine02_used_fix[i11]);
            this.state.chartData21.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData21.datasets[2].data.push(SP_Leaf01_used_fix[i11]);
            this.state.chartData21.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData21.datasets[3].data.push(SP_Leaf02_used_fix[i11]);
            this.state.chartData21.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData21.datasets[4].data.push(SP_Leaf03_used_fix[i11]);
            this.state.chartData21.datasets[4].backgroundColor.push('rgba(11,12,39,0.9');
            this.state.chartData21.datasets[5].data.push(SP_Leaf04_used_fix[i11]);
            this.state.chartData21.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');

            this.state.chartData22.datasets[0].data.push(SP_Spine01_avail_fix[i11]);
            this.state.chartData22.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData22.datasets[1].data.push(SP_Spine02_avail_fix[i11]);
            this.state.chartData22.datasets[1].backgroundColor.push('rgba(115,105,145,0.9');
            this.state.chartData22.datasets[2].data.push(SP_Leaf01_avail_fix[i11]);
            this.state.chartData22.datasets[2].backgroundColor.push('rgba(165,85,115,0.9');
            this.state.chartData22.datasets[3].data.push(SP_Leaf02_avail_fix[i11]);
            this.state.chartData22.datasets[3].backgroundColor.push('rgba(95,48,131,0.9');
            this.state.chartData22.datasets[4].data.push(SP_Leaf03_avail_fix[i11]);
            this.state.chartData22.datasets[4].backgroundColor.push('rgba(11,12,39,0.9');
            this.state.chartData22.datasets[5].data.push(SP_Leaf04_avail_fix[i11]);
            this.state.chartData22.datasets[5].backgroundColor.push('rgba(255,255,255,0.9');

            parse3[i11] = parseInt(date11[i11], 10);
            this.state.chartData21.labels.push(parse3[i11]);
            this.state.chartData22.labels.push(parse3[i11]);
        }}

    if(date10!=null){
        for(var i10=0;i10<date10.length;i10++){
            Leaf1_Port6_Lacp_portup[i10] = Leaf1_Port6_Lacp[i10].slice(3,17);
            Leaf1_Port6_Lacp_portdown[i10] = Leaf1_Port6_Lacp[i10].slice(17,32);
            Leaf1_Port6_Lacp_pdutx[i10] = Leaf1_Port6_Lacp[i10].slice(32,44);
            Leaf1_Port6_Lacp_pdurx[i10] = Leaf1_Port6_Lacp[i10].slice(44,56);
            Leaf1_Port6_Lacp_markertx[i10] = Leaf1_Port6_Lacp[i10].slice(56,71);
            Leaf1_Port6_Lacp_markerrx[i10] = Leaf1_Port6_Lacp[i10].slice(71,86);
            Leaf1_Port6_Lacp_allofail[i10] = Leaf1_Port6_Lacp[i10].slice(86,108);
            Leaf1_Port6_Lacp_expire[i10] = Leaf1_Port6_Lacp[i10].slice(108,120);
            Leaf1_Port6_Lacp_defaulted[i10] = Leaf1_Port6_Lacp[i10].slice(120,135);

            Leaf1_Port14_Lacp_portup[i10] = Leaf1_Port14_Lacp[i10].slice(2,15);
            Leaf1_Port14_Lacp_portdown[i10] =  Leaf1_Port14_Lacp[i10].slice(15,30);
            Leaf1_Port14_Lacp_pdutx[i10] =  Leaf1_Port14_Lacp[i10].slice(30,42);
            Leaf1_Port14_Lacp_pdurx[i10] = Leaf1_Port14_Lacp[i10].slice(42,54);
            Leaf1_Port14_Lacp_markertx[i10] = Leaf1_Port14_Lacp[i10].slice(54,69);
            Leaf1_Port14_Lacp_markerrx[i10] = Leaf1_Port14_Lacp[i10].slice(69,84);
            Leaf1_Port14_Lacp_allofail[i10] = Leaf1_Port14_Lacp[i10].slice(84,106);
            Leaf1_Port14_Lacp_expire[i10] = Leaf1_Port14_Lacp[i10].slice(106,118);
            Leaf1_Port14_Lacp_defaulted[i10] = Leaf1_Port14_Lacp[i10].slice(118,133);

            Leaf2_Port6_Lacp_portup[i10] = Leaf2_Port6_Lacp[i10].slice(3,17);
            Leaf2_Port6_Lacp_portdown[i10] = Leaf2_Port6_Lacp[i10].slice(17,32);
            Leaf2_Port6_Lacp_pdutx[i10] = Leaf2_Port6_Lacp[i10].slice(32,44);
            Leaf2_Port6_Lacp_pdurx[i10] = Leaf2_Port6_Lacp[i10].slice(44,56);
            Leaf2_Port6_Lacp_markertx[i10] = Leaf2_Port6_Lacp[i10].slice(56,71);
            Leaf2_Port6_Lacp_markerrx[i10] = Leaf2_Port6_Lacp[i10].slice(71,86);
            Leaf2_Port6_Lacp_allofail[i10] = Leaf2_Port6_Lacp[i10].slice(86,108);
            Leaf2_Port6_Lacp_expire[i10] = Leaf2_Port6_Lacp[i10].slice(108,120);
            Leaf2_Port6_Lacp_defaulted[i10] = Leaf2_Port6_Lacp[i10].slice(120,135);
        
            Leaf2_Port14_Lacp_portup[i10] = Leaf2_Port14_Lacp[i10].slice(2,15);
            Leaf2_Port14_Lacp_portdown[i10] =  Leaf2_Port14_Lacp[i10].slice(15,30);
            Leaf2_Port14_Lacp_pdutx[i10] =  Leaf2_Port14_Lacp[i10].slice(30,42);
            Leaf2_Port14_Lacp_pdurx[i10] = Leaf2_Port14_Lacp[i10].slice(42,54);
            Leaf2_Port14_Lacp_markertx[i10] = Leaf2_Port14_Lacp[i10].slice(54,69);
            Leaf2_Port14_Lacp_markerrx[i10] = Leaf2_Port14_Lacp[i10].slice(69,84);
            Leaf2_Port14_Lacp_allofail[i10] = Leaf2_Port14_Lacp[i10].slice(84,106);
            Leaf2_Port14_Lacp_expire[i10] = Leaf2_Port14_Lacp[i10].slice(106,118);
            Leaf2_Port14_Lacp_defaulted[i10] = Leaf2_Port14_Lacp[i10].slice(118,133);

            Leaf3_Port81_Lacp_portup[i10] = Leaf3_Port81_Lacp[i10].slice(2,15);
            Leaf3_Port81_Lacp_portdown[i10] =  Leaf3_Port81_Lacp[i10].slice(15,30);
            Leaf3_Port81_Lacp_pdutx[i10] =  Leaf3_Port81_Lacp[i10].slice(30,42);
            Leaf3_Port81_Lacp_pdurx[i10] = Leaf3_Port81_Lacp[i10].slice(42,54);
            Leaf3_Port81_Lacp_markertx[i10] = Leaf3_Port81_Lacp[i10].slice(54,69);
            Leaf3_Port81_Lacp_markerrx[i10] = Leaf3_Port81_Lacp[i10].slice(69,84);
            Leaf3_Port81_Lacp_allofail[i10] = Leaf3_Port81_Lacp[i10].slice(84,106);
            Leaf3_Port81_Lacp_expire[i10] = Leaf3_Port81_Lacp[i10].slice(106,118);
            Leaf3_Port81_Lacp_defaulted[i10] = Leaf3_Port81_Lacp[i10].slice(118,133);
        
            Leaf4_Port81_Lacp_portup[i10] = Leaf4_Port81_Lacp[i10].slice(2,15);
            Leaf4_Port81_Lacp_portdown[i10] =  Leaf4_Port81_Lacp[i10].slice(15,30);
            Leaf4_Port81_Lacp_pdutx[i10] =  Leaf4_Port81_Lacp[i10].slice(30,42);
            Leaf4_Port81_Lacp_pdurx[i10] = Leaf4_Port81_Lacp[i10].slice(42,54);
            Leaf4_Port81_Lacp_markertx[i10] = Leaf4_Port81_Lacp[i10].slice(54,69);
            Leaf4_Port81_Lacp_markerrx[i10] = Leaf4_Port81_Lacp[i10].slice(69,84);
            Leaf4_Port81_Lacp_allofail[i10] = Leaf4_Port81_Lacp[i10].slice(84,106);
            Leaf4_Port81_Lacp_expire[i10] = Leaf4_Port81_Lacp[i10].slice(106,118);
            Leaf4_Port81_Lacp_defaulted[i10] = Leaf4_Port81_Lacp[i10].slice(118,133);

            if(Leaf4_Port81_Lacp_portup[i10].includes("K")){
                Leaf4_Port81_Lacp_portup_fix[i10] = Leaf4_Port81_Lacp_portup[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_portup_fix[i10] = Leaf4_Port81_Lacp_portup[i10]; }

            if(Leaf4_Port81_Lacp_portdown[i10].includes("K")){
                Leaf4_Port81_Lacp_portdown_fix[i10] = Leaf4_Port81_Lacp_portdown[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_portdown_fix[i10] = Leaf4_Port81_Lacp_portdown[i10]; }

            if(Leaf1_Port6_Lacp_pdutx[i10].includes("K")){
                Leaf1_Port6_Lacp_pdutx_fix[i10] = Leaf1_Port6_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf1_Port6_Lacp_pdutx_fix[i10] = Leaf1_Port6_Lacp_pdutx[i10]; }

            if(Leaf1_Port6_Lacp_pdurx[i10].includes("K")){
                Leaf1_Port6_Lacp_pdurx_fix[i10] = Leaf1_Port6_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf1_Port6_Lacp_pdurx_fix[i10] = Leaf1_Port6_Lacp_pdurx[i10]; }

            if(Leaf1_Port14_Lacp_pdutx[i10].includes("K")){
                Leaf1_Port14_Lacp_pdutx_fix[i10] = Leaf1_Port14_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf1_Port14_Lacp_pdutx_fix[i10] = Leaf1_Port14_Lacp_pdutx[i10]; }

            if(Leaf1_Port14_Lacp_pdurx[i10].includes("K")){
                Leaf1_Port14_Lacp_pdurx_fix[i10] = Leaf1_Port14_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf1_Port14_Lacp_pdurx_fix[i10] = Leaf1_Port14_Lacp_pdurx[i10]; }

            if(Leaf2_Port6_Lacp_pdutx[i10].includes("K")){
                Leaf2_Port6_Lacp_pdutx_fix[i10] = Leaf2_Port6_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf2_Port6_Lacp_pdutx_fix[i10] = Leaf2_Port6_Lacp_pdutx[i10]; }

            if(Leaf2_Port6_Lacp_pdurx[i10].includes("K")){
                Leaf2_Port6_Lacp_pdurx_fix[i10] = Leaf2_Port6_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf2_Port6_Lacp_pdurx_fix[i10] = Leaf2_Port6_Lacp_pdurx[i10]; }

            if(Leaf2_Port14_Lacp_pdutx[i10].includes("K")){
                Leaf2_Port14_Lacp_pdutx_fix[i10] = Leaf2_Port14_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf2_Port14_Lacp_pdutx_fix[i10] = Leaf2_Port14_Lacp_pdutx[i10]; }

            if(Leaf2_Port14_Lacp_pdurx[i10].includes("K")){
                Leaf2_Port14_Lacp_pdurx_fix[i10] = Leaf2_Port14_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf2_Port14_Lacp_pdurx_fix[i10] = Leaf2_Port14_Lacp_pdurx[i10]; }

            if(Leaf3_Port81_Lacp_pdutx[i10].includes("K")){
                Leaf3_Port81_Lacp_pdutx_fix[i10] = Leaf3_Port81_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf3_Port81_Lacp_pdutx_fix[i10] = Leaf3_Port81_Lacp_pdutx[i10]; }

            if(Leaf3_Port81_Lacp_pdurx[i10].includes("K")){
                Leaf3_Port81_Lacp_pdurx_fix[i10] = Leaf3_Port81_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf3_Port81_Lacp_pdurx_fix[i10] = Leaf3_Port81_Lacp_pdurx[i10]; }

            if(Leaf4_Port81_Lacp_pdutx[i10].includes("K")){
                Leaf4_Port81_Lacp_pdutx_fix[i10] = Leaf4_Port81_Lacp_pdutx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_pdutx_fix[i10] = Leaf4_Port81_Lacp_pdutx[i10]; }

            if(Leaf4_Port81_Lacp_pdurx[i10].includes("K")){
                Leaf4_Port81_Lacp_pdurx_fix[i10] = Leaf4_Port81_Lacp_pdurx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_pdurx_fix[i10] = Leaf4_Port81_Lacp_pdurx[i10]; }

            if(Leaf4_Port81_Lacp_markerrx[i10].includes("K")){
                Leaf4_Port81_Lacp_markerrx_fix[i10] = Leaf4_Port81_Lacp_markerrx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_markerrx_fix[i10] = Leaf4_Port81_Lacp_markerrx[i10]; }

            if(Leaf4_Port81_Lacp_markertx[i10].includes("K")){
                Leaf4_Port81_Lacp_markertx_fix[i10] = Leaf4_Port81_Lacp_markertx[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_markertx_fix[i10] = Leaf4_Port81_Lacp_markertx[i10]; }

            if(Leaf4_Port81_Lacp_expire[i10].includes("K")){
                Leaf4_Port81_Lacp_expire_fix[i10] = Leaf4_Port81_Lacp_expire[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_expire_fix[i10] = Leaf4_Port81_Lacp_expire[i10]; }

            if(Leaf4_Port81_Lacp_defaulted[i10].includes("K")){
                Leaf4_Port81_Lacp_defaulted_fix[i10] = Leaf4_Port81_Lacp_defaulted[i10].match(/\d{1,3}.\d{1,3}/g)*1000;
            }
            else{Leaf4_Port81_Lacp_defaulted_fix[i10] = Leaf4_Port81_Lacp_defaulted[i10]; }

            parse4[i10] = parseInt(date10[i10], 10);
            this.state.chartData12.labels.push(parse4[i10]);
            this.state.chartData13.labels.push(parse4[i10]);
            this.state.chartData14.labels.push(parse4[i10]);
            this.state.chartData15.labels.push(parse4[i10]);
            this.state.chartData16.labels.push(parse4[i10]);
            this.state.chartData17.labels.push(parse4[i10]);
            this.state.chartData18.labels.push(parse4[i10]);
            this.state.chartData19.labels.push(parse4[i10]);
            this.state.chartData20.labels.push(parse4[i10]);

            this.state.chartData12.datasets[0].data.push(Leaf1_Port6_Lacp_portup[i10]);
            this.state.chartData12.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData12.datasets[1].data.push(Leaf1_Port14_Lacp_portup[i10]);
            this.state.chartData12.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData12.datasets[2].data.push(Leaf2_Port6_Lacp_portup[i10]);
            this.state.chartData12.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData12.datasets[3].data.push(Leaf2_Port14_Lacp_portup[i10]);
            this.state.chartData12.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData12.datasets[4].data.push(Leaf3_Port81_Lacp_portup[i10]);
            this.state.chartData12.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData12.datasets[5].data.push(Leaf4_Port81_Lacp_portup_fix[i10]);
            this.state.chartData12.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData13.datasets[0].data.push(Leaf1_Port6_Lacp_portdown[i10]);
            this.state.chartData13.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData13.datasets[1].data.push(Leaf1_Port14_Lacp_portdown[i10]);
            this.state.chartData13.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData13.datasets[2].data.push(Leaf2_Port6_Lacp_portdown[i10]);
            this.state.chartData13.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData13.datasets[3].data.push(Leaf2_Port14_Lacp_portdown[i10]);
            this.state.chartData13.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData13.datasets[4].data.push(Leaf3_Port81_Lacp_portdown[i10]);
            this.state.chartData13.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData13.datasets[5].data.push(Leaf4_Port81_Lacp_portdown_fix[i10]);
            this.state.chartData13.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData14.datasets[0].data.push(Leaf1_Port6_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData14.datasets[1].data.push(Leaf1_Port14_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData14.datasets[2].data.push(Leaf2_Port6_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData14.datasets[3].data.push(Leaf2_Port14_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData14.datasets[4].data.push(Leaf3_Port81_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData14.datasets[5].data.push(Leaf4_Port81_Lacp_pdutx_fix[i10]);
            this.state.chartData14.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData15.datasets[0].data.push(Leaf1_Port6_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData15.datasets[1].data.push(Leaf1_Port14_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData15.datasets[2].data.push(Leaf2_Port6_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData15.datasets[3].data.push(Leaf2_Port14_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData15.datasets[4].data.push(Leaf3_Port81_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData15.datasets[5].data.push(Leaf4_Port81_Lacp_pdurx_fix[i10]);
            this.state.chartData15.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData16.datasets[0].data.push(Leaf1_Port6_Lacp_markertx[i10]);
            this.state.chartData16.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData16.datasets[1].data.push(Leaf1_Port14_Lacp_markertx[i10]);
            this.state.chartData16.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData16.datasets[2].data.push(Leaf2_Port6_Lacp_markertx[i10]);
            this.state.chartData16.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData16.datasets[3].data.push(Leaf2_Port14_Lacp_markertx[i10]);
            this.state.chartData16.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData16.datasets[4].data.push(Leaf3_Port81_Lacp_markertx[i10]);
            this.state.chartData16.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData16.datasets[5].data.push(Leaf4_Port81_Lacp_markertx_fix[i10]);
            this.state.chartData16.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData17.datasets[0].data.push(Leaf1_Port6_Lacp_markerrx[i10]);
            this.state.chartData17.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData17.datasets[1].data.push(Leaf1_Port14_Lacp_markerrx[i10]);
            this.state.chartData17.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData17.datasets[2].data.push(Leaf2_Port6_Lacp_markerrx[i10]);
            this.state.chartData17.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData17.datasets[3].data.push(Leaf2_Port14_Lacp_markerrx[i10]);
            this.state.chartData17.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData17.datasets[4].data.push(Leaf3_Port81_Lacp_markerrx[i10]);
            this.state.chartData17.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData17.datasets[5].data.push(Leaf4_Port81_Lacp_markerrx_fix[i10]);
            this.state.chartData17.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData18.datasets[0].data.push(Leaf1_Port6_Lacp_allofail[i10]);
            this.state.chartData18.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData18.datasets[1].data.push(Leaf1_Port14_Lacp_allofail[i10]);
            this.state.chartData18.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData18.datasets[2].data.push(Leaf2_Port6_Lacp_allofail[i10]);
            this.state.chartData18.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData18.datasets[3].data.push(Leaf2_Port14_Lacp_allofail[i10]);
            this.state.chartData18.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData18.datasets[4].data.push(Leaf3_Port81_Lacp_allofail[i10]);
            this.state.chartData18.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData18.datasets[5].data.push(Leaf4_Port81_Lacp_allofail[i10]);
            this.state.chartData18.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData19.datasets[0].data.push(Leaf1_Port6_Lacp_expire[i10]);
            this.state.chartData19.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData19.datasets[1].data.push(Leaf1_Port14_Lacp_expire[i10]);
            this.state.chartData19.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData19.datasets[2].data.push(Leaf2_Port6_Lacp_expire[i10]);
            this.state.chartData19.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData19.datasets[3].data.push(Leaf2_Port14_Lacp_expire[i10]);
            this.state.chartData19.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData19.datasets[4].data.push(Leaf3_Port81_Lacp_expire[i10]);
            this.state.chartData19.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData19.datasets[5].data.push(Leaf4_Port81_Lacp_expire_fix[i10]);
            this.state.chartData19.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');

            this.state.chartData20.datasets[0].data.push(Leaf1_Port6_Lacp_defaulted[i10]);
            this.state.chartData20.datasets[0].backgroundColor.push('rgba(45,155,245,0.9');
            this.state.chartData20.datasets[1].data.push(Leaf1_Port14_Lacp_defaulted[i10]);
            this.state.chartData20.datasets[1].backgroundColor.push('rgba(95,121,245,0.9');
            this.state.chartData20.datasets[2].data.push(Leaf2_Port6_Lacp_defaulted[i10]);
            this.state.chartData20.datasets[2].backgroundColor.push('rgba(148,111,255,0.9');
            this.state.chartData20.datasets[3].data.push(Leaf2_Port14_Lacp_defaulted[i10]);
            this.state.chartData20.datasets[3].backgroundColor.push('rgba(45,121,115,0.9');
            this.state.chartData20.datasets[4].data.push(Leaf3_Port81_Lacp_defaulted[i10]);
            this.state.chartData20.datasets[4].backgroundColor.push('rgba(151,211,115,0.9');
            this.state.chartData20.datasets[5].data.push(Leaf4_Port81_Lacp_defaulted_fix[i10]);
            this.state.chartData20.datasets[5].backgroundColor.push('rgba(129,36,54,0.9');
        }
    }

  if(spine2_flap_array!=null){
      for(var i8=0;i8<spine2_flap_array.length;i8++){
          if(spine2_flap_array[i8] !== null){
            clean[k] = spine2_flap_array[i8].toString();
            clean2[k] = spine2_regex2_flap_array[i8].toString();
            clean3[k] = spine2_regex3_flap_array[i8].toString();
            clean4[k] = spine2_regex4_flap_array[i8].toString();
            clean5[k] = leaf4_regex1_flap_array[i8].toString();
            clean6[k] = leaf4_regex2_flap_array[i8].toString();
            clean7[k] = leaf1_regex1_flap_array[i8].toString();
            clean8[k] = leaf1_regex2_flap_array[i8].toString();
            clean9[k] = spine1_regex1_flap_array[i8].toString();
            clean10[k] = spine1_regex2_flap_array[i8].toString();
            clean11[k] = spine1_regex3_flap_array[i8].toString();
            clean12[k] = spine1_regex4_flap_array[i8].toString();
            clean13[k] = leaf3_regex1_flap_array[i8].toString();
            clean14[k] = leaf3_regex2_flap_array[i8].toString();
            clean15[k] = leaf2_regex1_flap_array[i8].toString();
            clean16[k] = leaf2_regex2_flap_array[i8].toString();
            k++;}}}

      for(b=0;b<clean.length;b++){
        if(b%3===0){
            clean_resize[t]=clean[b];
            clean_resize2[t]=clean2[b];
            clean_resize3[t]=clean3[b];
            clean_resize4[t]=clean4[b];
            clean_resize5[t]=clean5[b];
            clean_resize6[t]=clean6[b];
            clean_resize7[t]=clean7[b];
            clean_resize8[t]=clean8[b];
            clean_resize9[t]=clean9[b];
            clean_resize10[t]=clean10[b];
            clean_resize11[t]=clean11[b];
            clean_resize12[t]=clean12[b];
            clean_resize13[t]=clean13[b];
            clean_resize14[t]=clean14[b];
            clean_resize15[t]=clean15[b];
            clean_resize16[t]=clean16[b];
            this.state.chartData10.datasets[0].data.push(clean_resize[t]);
            this.state.chartData10.datasets[0].backgroundColor.push('rgba(215,15,85,0.8');
            this.state.chartData10.datasets[1].data.push(clean_resize2[t]);
            this.state.chartData10.datasets[1].backgroundColor.push('rgba(175,15,85,0.8');
            this.state.chartData10.datasets[2].data.push(clean_resize3[t]);
            this.state.chartData10.datasets[2].backgroundColor.push('rgba(155,15,85,0.8');
            this.state.chartData10.datasets[3].data.push(clean_resize4[t]);
            this.state.chartData10.datasets[3].backgroundColor.push('rgba(25,35,85,0.8');
            this.state.chartData10.datasets[4].data.push(clean_resize5[t]);
            this.state.chartData10.datasets[4].backgroundColor.push('rgba(25,45,85,0.8');
            this.state.chartData10.datasets[5].data.push(clean_resize6[t]);
            this.state.chartData10.datasets[5].backgroundColor.push('rgba(25,55,85,0.8');
            this.state.chartData10.datasets[7].data.push(clean_resize7[t]);
            this.state.chartData10.datasets[7].backgroundColor.push('rgba(55,155,25,0.8');
            this.state.chartData10.datasets[8].data.push(clean_resize8[t]);
            this.state.chartData10.datasets[8].backgroundColor.push('rgba(55,145,25,0.8');
            this.state.chartData10.datasets[10].data.push(clean_resize9[t]);
            this.state.chartData10.datasets[10].backgroundColor.push('rgba(215,215,75,0.8');
            this.state.chartData10.datasets[11].data.push(clean_resize10[t]);
            this.state.chartData10.datasets[11].backgroundColor.push('rgba(215,215,55,0.8');
            this.state.chartData10.datasets[12].data.push(clean_resize11[t]);
            this.state.chartData10.datasets[12].backgroundColor.push('rgba(215,215,35,0.8');
            this.state.chartData10.datasets[13].data.push(clean_resize12[t]);
            this.state.chartData10.datasets[13].backgroundColor.push('rgba(215,215,15,0.8');
            this.state.chartData10.datasets[14].data.push(clean_resize13[t]);
            this.state.chartData10.datasets[14].backgroundColor.push('rgba(189,44,44,0.8');
            this.state.chartData10.datasets[15].data.push(clean_resize14[t]);
            this.state.chartData10.datasets[15].backgroundColor.push('rgba(169,44,44,0.8');
            this.state.chartData10.datasets[17].data.push(clean_resize15[t]);
            this.state.chartData10.datasets[17].backgroundColor.push('rgba(189,154,144,0.8');
            this.state.chartData10.datasets[18].data.push(clean_resize16[t]);
            this.state.chartData10.datasets[18].backgroundColor.push('rgba(189,154,154,0.8');
            t++;
        }
      }

  if(spine2_flap_array!=null){
    for(var i9=0;i9<date8.length;i9++){
        parse5[i9] = parseInt(date8[i9], 10);
        this.state.chartData10.labels.push(parse5[i9]);
        this.state.chartData10.datasets[6].data.push(leaf4_regex3_flap_array[i9]);
        this.state.chartData10.datasets[6].backgroundColor.push('rgba(25,65,85,0.8');
        this.state.chartData10.datasets[9].data.push(leaf1_regex3_flap_array[i9]);
        this.state.chartData10.datasets[9].backgroundColor.push('rgba(55,135,25,0.8');
        this.state.chartData10.datasets[16].data.push(leaf3_regex3_flap_array[i9]);
        this.state.chartData10.datasets[16].backgroundColor.push('rgba(149,44,44,0.8');
        this.state.chartData10.datasets[19].data.push(leaf2_regex3_flap_array[i9]);
        this.state.chartData10.datasets[19].backgroundColor.push('rgba(189,154,164,0.8');
      }
  }

  if(leaf01!=null){
    for(var i2=0;i2<date2.length;i2++){
     parse6[i2] = parseInt(date2[i2], 10);
     this.state.chartData4.labels.push(parse6[i2]);
     this.state.chartData4.datasets[0].data.push(leaf01[i2]);
     this.state.chartData4.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
    }}
   
    if(leaf02!=null){
    for(var i3=0;i3<date3.length;i3++){
        parse7[i3] = parseInt(date3[i3], 10);
        this.state.chartData5.labels.push(parse7[i3]);
        this.state.chartData5.datasets[0].data.push(leaf02[i3]);
        this.state.chartData5.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
    }}

    if(leaf03!=null){
    for(var i4=0;i4<date4.length;i4++){
        parse8[i4] = parseInt(date4[i4], 10);
        this.state.chartData6.labels.push(parse8[i4]);
        this.state.chartData6.datasets[0].data.push(leaf03[i4]);
        this.state.chartData6.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
    }}

    if(leaf04!=null){
    for(var i5=0;i5<date5.length;i5++){
        parse9[i5] = parseInt(date5[i5], 10);
        this.state.chartData7.labels.push(parse9[i5]);
        this.state.chartData7.datasets[0].data.push(leaf04[i5]);
        this.state.chartData7.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
    }}

    if(leaf05!=null){
    for(var i6=0;i6<date6.length;i6++){
        parse10[i6] = parseInt(date6[i6], 10);
        this.state.chartData8.labels.push(parse10[i6]);
        this.state.chartData8.datasets[0].data.push(leaf05[i6]);
        this.state.chartData8.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
    }}

    if(leaf06!=null){
        for(var i7=0;i7<date7.length;i7++){
            parse11[i7] = parseInt(date7[i7], 10);
            this.state.chartData9.labels.push(parse11[i7]);
            this.state.chartData9.datasets[0].data.push(leaf06[i7]);
            this.state.chartData9.datasets[0].backgroundColor.push('rgba(55,109,255,0.8');
        }}

        if(Spine27_01_cluster!=null){
            for(var i1=0;i1<date1.length;i1++){
             spine1Cluster[i1] = Spine27_01_cluster[i1].slice(12,Spine27_01_cluster[i1].length);
             spine2Cluster[i1] = Spine27_02_cluster[i1].slice(12,Spine27_02_cluster[i1].length);
             Leaf1Cluster[i1] = Leaf_27_01_cluster[i1].slice(12,Leaf_27_01_cluster[i1].length);
             Leaf2Cluster[i1] = Leaf_27_02_cluster[i1].slice(12,Leaf_27_02_cluster[i1].length);
             Leaf3Cluster[i1] = Leaf_27_03_cluster[i1].slice(12,Leaf_27_03_cluster[i1].length);
             Leaf4Cluster[i1] = Leaf_27_04_cluster[i1].slice(12,Leaf_27_04_cluster[i1].length);
             parse12[i1] = parseInt(date1[i1], 10);
             this.state.chartData1.labels.push(parse12[i1]);
             this.state.chartData1.datasets[0].data.push(spine1Cluster[i1]);
             this.state.chartData1.datasets[0].backgroundColor.push('rgba(75,79,195,0.8');
             this.state.chartData1.datasets[1].data.push(spine2Cluster[i1]);
             this.state.chartData1.datasets[1].backgroundColor.push('rgba(225,109,145,0.8');
             this.state.chartData1.datasets[2].data.push(Leaf1Cluster[i1]);
             this.state.chartData1.datasets[2].backgroundColor.push('rgba(121,19,55,0.8');
             this.state.chartData1.datasets[3].data.push(Leaf2Cluster[i1]);
             this.state.chartData1.datasets[3].backgroundColor.push('rgba(11,129,255,0.8');
             this.state.chartData1.datasets[4].data.push(Leaf3Cluster[i1]);
             this.state.chartData1.datasets[4].backgroundColor.push('rgba(182,119,9,0.8');
             this.state.chartData1.datasets[5].data.push(Leaf4Cluster[i1]);
             this.state.chartData1.datasets[5].backgroundColor.push('rgba(151,119,125,0.8');
            }}

    if(Spine_27_01_all!=null){
  for(var i=0;i<Spine_27_01_all.length;i++){
   Spine_27_01_all_prepare[i] = Spine_27_01_all[i].slice(12, Spine_27_01_all[i].length);
   Spine_27_01_all_cpubytes[i] = Spine_27_01_all_prepare[i].slice(0, 8);
   Spine_27_01_all_drops[i] = Spine_27_01_all_prepare[i].slice(8,17);
   Spine_27_01_all_dropbytes[i] = Spine_27_01_all_prepare[i].slice(17,25);

   Spine_27_02_all_prepare[i] = Spine_27_02_all[i].slice(12, Spine_27_01_all[i].length);
   Spine_27_02_all_cpubytes[i] = Spine_27_02_all_prepare[i].slice(0, 8);
   Spine_27_02_all_drops[i] = Spine_27_02_all_prepare[i].slice(8,17);
   Spine_27_02_all_dropbytes[i] = Spine_27_02_all_prepare[i].slice(17,25);

   Leaf_27_01_all_prepare[i] = Leaf_27_01_all[i].slice(12, Leaf_27_01_all[i].length);
   Leaf_27_01_all_cpubytes[i] = Leaf_27_01_all_prepare[i].slice(0, 8);
   Leaf_27_01_all_drops[i] = Leaf_27_01_all_prepare[i].slice(8,17);
   Leaf_27_01_all_dropbytes[i] = Leaf_27_01_all_prepare[i].slice(17,25);

   Leaf_27_02_all_prepare[i] = Leaf_27_02_all[i].slice(12, Leaf_27_02_all[i].length);
   Leaf_27_02_all_cpubytes[i] = Leaf_27_02_all_prepare[i].slice(0, 8);
   Leaf_27_02_all_drops[i] = Leaf_27_02_all_prepare[i].slice(8,17);
   Leaf_27_02_all_dropbytes[i] = Leaf_27_02_all_prepare[i].slice(17,25);

   Leaf_27_03_all_prepare[i] = Leaf_27_03_all[i].slice(12, Leaf_27_03_all[i].length);
   Leaf_27_03_all_cpubytes[i] = Leaf_27_03_all_prepare[i].slice(0, 8);
   Leaf_27_03_all_drops[i] = Leaf_27_03_all_prepare[i].slice(8,17);
   Leaf_27_03_all_dropbytes[i] = Leaf_27_03_all_prepare[i].slice(17,25);

   Leaf_27_04_all_prepare[i] = Leaf_27_04_all[i].slice(12, Leaf_27_04_all[i].length);
   Leaf_27_04_all_cpubytes[i] = Leaf_27_04_all_prepare[i].slice(0, 8);
   Leaf_27_04_all_drops[i] = Leaf_27_04_all_prepare[i].slice(8,17);
   Leaf_27_04_all_dropbytes[i] = Leaf_27_04_all_prepare[i].slice(17,25);
   var g=[];

// logic for drops of Spine_27_01 in case of K or M showing in a string
if(Spine_27_01_all_drops[i].includes("K")){
    g[i] = Spine_27_01_all_drops[i];
    Spine_27_01_all_drops[i] = Spine_27_01_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_01_all_drops[i]))
    {
        Spine_27_01_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_01_all_drops[i].includes("M")){
    g[i] = Spine_27_01_all_drops[i];
    Spine_27_01_all_drops[i] = Spine_27_01_all_drops[i].match(/\d*.\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_01_all_drops[i]))
    {
        Spine_27_01_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Spine_27_01 in case of K or M showing in a string
if(Spine_27_01_all_dropbytes[i].includes("K")){
    g[i] = Spine_27_01_all_dropbytes[i];
    Spine_27_01_all_dropbytes[i] = Spine_27_01_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_01_all_dropbytes[i]))
    {
        Spine_27_01_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_01_all_dropbytes[i].includes("M")){
    g[i] = Spine_27_01_all_dropbytes[i];
    Spine_27_01_all_dropbytes[i] = Spine_27_01_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_01_all_dropbytes[i]))
    {
        Spine_27_01_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for cpubytes of Spine_27_01 in case of K or M showing in a string
if(Spine_27_01_all_cpubytes[i].includes("K")){
    g[i] = Spine_27_01_all_cpubytes[i];
    Spine_27_01_all_cpubytes[i] = Spine_27_01_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_01_all_cpubytes[i]))
    {
        Spine_27_01_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_01_all_cpubytes[i].includes("M")){
    g[i] = Spine_27_01_all_cpubytes[i];
    Spine_27_01_all_cpubytes[i] = Spine_27_01_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_01_all_cpubytes[i]))
    {
        Spine_27_01_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for drops of Spine_27_02 in case of K or M showing in a string
if(Spine_27_02_all_drops[i].includes("K")){
    g[i] = Spine_27_02_all_drops[i];
    Spine_27_02_all_drops[i] = Spine_27_02_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_02_all_drops[i]))
    {
        Spine_27_02_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_02_all_drops[i].includes("M")){
    g[i] = Spine_27_02_all_drops[i];
    Spine_27_02_all_drops[i] = Spine_27_02_all_drops[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_02_all_drops[i]))
    {
        Spine_27_02_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Spine_27_02 in case of K or M showing in a string
if(Spine_27_02_all_dropbytes[i].includes("K")){
    g[i] = Spine_27_02_all_dropbytes[i];
    Spine_27_02_all_dropbytes[i] = Spine_27_02_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_02_all_dropbytes[i]))
    {
        Spine_27_02_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_02_all_dropbytes[i].includes("M")){
    g[i] = Spine_27_02_all_dropbytes[i];
    Spine_27_02_all_dropbytes[i] = Spine_27_02_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_02_all_dropbytes[i]))
    {
        Spine_27_02_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for cpubytes of Spine_27_02 in case of K or M showing in a string
if(Spine_27_02_all_cpubytes[i].includes("K")){
    g[i] = Spine_27_02_all_cpubytes[i];
    Spine_27_02_all_cpubytes[i] = Spine_27_02_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Spine_27_02_all_cpubytes[i]))
    {
        Spine_27_02_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Spine_27_02_all_cpubytes[i].includes("M")){
    g[i] = Spine_27_02_all_cpubytes[i];
    Spine_27_02_all_cpubytes[i] = Spine_27_02_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Spine_27_02_all_cpubytes[i]))
    {
        Spine_27_02_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }


// logic for drops of Leaf_27_01 in case of K or M showing in a string
if(Leaf_27_01_all_drops[i].includes("K")){
    g[i] = Leaf_27_01_all_drops[i];
    Leaf_27_01_all_drops[i] = Leaf_27_01_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_01_all_drops[i]))
    {
        Leaf_27_01_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_01_all_drops[i].includes("M")){
    g[i] = Leaf_27_01_all_drops[i];
    Leaf_27_01_all_drops[i] = Leaf_27_01_all_drops[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_01_all_drops[i]))
    {
        Leaf_27_01_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Leaf_27_01 in case of K or M showing in a string
if(Leaf_27_01_all_dropbytes[i].includes("K")){
    g[i] = Leaf_27_01_all_dropbytes[i];
    Leaf_27_01_all_dropbytes[i] = Leaf_27_01_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_01_all_dropbytes[i]))
    {
        Leaf_27_01_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_01_all_dropbytes[i].includes("M")){
    g[i] = Leaf_27_01_all_dropbytes[i];
    Leaf_27_01_all_dropbytes[i] = Leaf_27_01_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_01_all_dropbytes[i]))
    {
        Leaf_27_01_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for cpubytes of Leaf_27_01 in case of K or M showing in a string
if(Leaf_27_01_all_cpubytes[i].includes("K")){
    g[i] = Leaf_27_01_all_cpubytes[i];
    Leaf_27_01_all_cpubytes[i] = Leaf_27_01_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_01_all_cpubytes[i]))
    {
        Leaf_27_01_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_01_all_cpubytes[i].includes("M")){
    g[i] = Leaf_27_01_all_cpubytes[i];
    Leaf_27_01_all_cpubytes[i] = Leaf_27_01_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_01_all_cpubytes[i]))
    {
        Leaf_27_01_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }


// logic for drops of Leaf_27_02 in case of K or M showing in a string
if(Leaf_27_02_all_drops[i].includes("K")){
    g[i] = Leaf_27_02_all_drops[i];
    Leaf_27_02_all_drops[i] = Leaf_27_02_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_02_all_drops[i]))
    {
        Leaf_27_02_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_02_all_drops[i].includes("M")){
    g[i] = Leaf_27_02_all_drops[i];
    Leaf_27_02_all_drops[i] = Leaf_27_02_all_drops[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_02_all_drops[i]))
    {
        Leaf_27_02_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Leaf_27_02 in case of K or M showing in a string
if(Leaf_27_02_all_dropbytes[i].includes("K")){
    g[i] = Leaf_27_02_all_dropbytes[i];
    Leaf_27_02_all_dropbytes[i] = Leaf_27_02_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_02_all_dropbytes[i]))
    {
        Leaf_27_02_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_02_all_dropbytes[i].includes("M")){
    g[i] = Leaf_27_02_all_dropbytes[i];
    Leaf_27_02_all_dropbytes[i] = Leaf_27_02_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_02_all_dropbytes[i]))
    {
        Leaf_27_02_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for cpubytes of Leaf_27_02 in case of K or M showing in a string
    if(Leaf_27_02_all_cpubytes[i].includes("K")){
    g[i] = Leaf_27_02_all_cpubytes[i];
    Leaf_27_02_all_cpubytes[i] = Leaf_27_02_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_02_all_cpubytes[i]))
    {
        Leaf_27_02_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Leaf_27_02_all_cpubytes[i].includes("M")){
    g[i] = Leaf_27_02_all_cpubytes[i];
    Leaf_27_02_all_cpubytes[i] = Leaf_27_02_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_02_all_cpubytes[i]))
    {
        Leaf_27_02_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for drops of Leaf_27_03 in case of K or M showing in a string
    if(Leaf_27_03_all_drops[i].includes("K")){
    g[i] = Leaf_27_03_all_drops[i];
    Leaf_27_03_all_drops[i] = Leaf_27_03_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_03_all_drops[i]))
    {
        Leaf_27_03_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
else if(Leaf_27_03_all_drops[i].includes("M")){
    g[i] = Leaf_27_03_all_drops[i];
    Leaf_27_03_all_drops[i] = Leaf_27_03_all_drops[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_03_all_drops[i]))
    {
        Leaf_27_03_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Leaf_27_03 in case of K or M showing in a string
if(Leaf_27_03_all_dropbytes[i].includes("K")){
    g[i] = Leaf_27_03_all_dropbytes[i];
    Leaf_27_03_all_dropbytes[i] = Leaf_27_03_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_03_all_dropbytes[i]))
    {
        Leaf_27_03_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Leaf_27_03_all_dropbytes[i].includes("M")){
    g[i] = Leaf_27_03_all_dropbytes[i];
    Leaf_27_03_all_dropbytes[i] = Leaf_27_03_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_03_all_dropbytes[i]))
    {
        Leaf_27_03_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for cpubytes of Leaf_27_03 in case of K or M showing in a string
if(Leaf_27_03_all_cpubytes[i].includes("K")){
    g[i] = Leaf_27_03_all_cpubytes[i];
    Leaf_27_03_all_cpubytes[i] = Leaf_27_03_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_03_all_cpubytes[i]))
    {
        Leaf_27_03_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Leaf_27_03_all_cpubytes[i].includes("M")){
    g[i] = Leaf_27_03_all_cpubytes[i];
    Leaf_27_03_all_cpubytes[i] = Leaf_27_03_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_03_all_cpubytes[i]))
    {
        Leaf_27_03_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for drops of Leaf_27_04 in case of K or M showing in a string
if(Leaf_27_04_all_drops[i].includes("K")){
    g[i] = Leaf_27_04_all_drops[i];
    Leaf_27_04_all_drops[i] = Leaf_27_04_all_drops[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_04_all_drops[i]))
    {
        Leaf_27_04_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Leaf_27_04_all_drops[i].includes("M")){
    g[i] = Leaf_27_04_all_drops[i];
    Leaf_27_04_all_drops[i] = Leaf_27_04_all_drops[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_04_all_drops[i]))
    {
        Leaf_27_04_all_drops[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for dropbytes of Leaf_27_04 in case of K or M showing in a string
   if(Leaf_27_04_all_dropbytes[i].includes("K")){
    g[i] = Leaf_27_04_all_dropbytes[i];
    Leaf_27_04_all_dropbytes[i] = Leaf_27_04_all_dropbytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_04_all_dropbytes[i]))
    {
        Leaf_27_04_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Leaf_27_04_all_dropbytes[i].includes("M")){
    g[i] = Leaf_27_04_all_dropbytes[i];
    Leaf_27_04_all_dropbytes[i] = Leaf_27_04_all_dropbytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_04_all_dropbytes[i]))
    {
        Leaf_27_04_all_dropbytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for cpubytes of Leaf_27_04 in case of K or M showing in a string
   if(Leaf_27_04_all_cpubytes[i].includes("K")){
    g[i] = Leaf_27_04_all_cpubytes[i];
    Leaf_27_04_all_cpubytes[i] = Leaf_27_04_all_cpubytes[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Leaf_27_04_all_cpubytes[i]))
    {
        Leaf_27_04_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Leaf_27_04_all_cpubytes[i].includes("M")){
    g[i] = Leaf_27_04_all_cpubytes[i];
    Leaf_27_04_all_cpubytes[i] = Leaf_27_04_all_cpubytes[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Leaf_27_04_all_cpubytes[i]))
    {
        Leaf_27_04_all_cpubytes[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

   parse13[i] = parseInt(date[i], 10);
   this.state.chartData.labels.push(parse13[i]);
   this.state.chartData2.labels.push(parse13[i]);
   this.state.chartData3.labels.push(parse13[i]);
  
   this.state.chartData.datasets[0].data.push(Spine_27_01_all_drops[i]);
   this.state.chartData.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData.datasets[1].data.push(Spine_27_02_all_drops[i]);
   this.state.chartData.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData.datasets[2].data.push(Leaf_27_01_all_drops[i]);
   this.state.chartData.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData.datasets[3].data.push(Leaf_27_02_all_drops[i]);
   this.state.chartData.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData.datasets[4].data.push(Leaf_27_03_all_drops[i]);
   this.state.chartData.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData.datasets[5].data.push(Leaf_27_04_all_drops[i]);
   this.state.chartData.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');

   this.state.chartData2.datasets[0].data.push(Spine_27_01_all_dropbytes[i]);
   this.state.chartData2.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData2.datasets[1].data.push(Spine_27_02_all_dropbytes[i]);
   this.state.chartData2.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData2.datasets[2].data.push(Leaf_27_01_all_dropbytes[i]);
   this.state.chartData2.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData2.datasets[3].data.push(Leaf_27_02_all_dropbytes[i]);
   this.state.chartData2.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData2.datasets[4].data.push(Leaf_27_03_all_dropbytes[i]);
   this.state.chartData2.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData2.datasets[5].data.push(Leaf_27_04_all_dropbytes[i]);
   this.state.chartData2.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');

   this.state.chartData3.datasets[0].data.push(Spine_27_01_all_cpubytes[i]);
   this.state.chartData3.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData3.datasets[1].data.push(Spine_27_02_all_cpubytes[i]);
   this.state.chartData3.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData3.datasets[2].data.push(Leaf_27_01_all_cpubytes[i]);
   this.state.chartData3.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData3.datasets[3].data.push(Leaf_27_02_all_cpubytes[i]);
   this.state.chartData3.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData3.datasets[4].data.push(Leaf_27_03_all_cpubytes[i]);
   this.state.chartData3.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData3.datasets[5].data.push(Leaf_27_04_all_cpubytes[i]);
   this.state.chartData3.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');
}}
   if(date9!=null){
    for(var i55=0;i55<date9.length;i55++){
     parse14[i55] = parseInt(date9[i55], 10);
     this.state.chartData11.labels.push(parse14[i55]);
     Leaf4_switch_port_81_1[i55] =  port[i55].match(/(?<=27-Leaf-04\s81\s\s\s1)(.*)/g);
     Leaf4_switch_port_129_0[i55] = port[i55].match(/(?<=27-Leaf-04\s129\s\s0)(.*)/g);
     Leaf4_switch_port_129_1[i55] = port[i55].match(/(?<=27-Leaf-04\s129\s\s1)(.*)/g);
     Leaf1_switch_port_25_1[i55] =  port[i55].match(/(?<=27-Leaf-01\s25\s\s\s1)(.*)/g);
     Leaf1_switch_port_21_1[i55] =  port[i55].match(/(?<=27-Leaf-01\s21\s\s\s1)(.*)/g);
     Leaf2_switch_port_21_1[i55] =  port[i55].match(/(?<=27-Leaf-02\s21\s\s\s1)(.*)/g);
     Leaf2_switch_port_25_0[i55] =  port[i55].match(/(?<=27-Leaf-02\s25\s\s\s0)(.*)/g);
     Leaf2_switch_port_25_1[i55] =  port[i55].match(/(?<=27-Leaf-02\s25\s\s\s1)(.*)/g);
     Leaf1_switch_port_21_0[i55] =  port[i55].match(/(?<=27-Leaf-01\s21\s\s\s0)(.*)/g);
     Leaf1_switch_port_25_0[i55] =  port[i55].match(/(?<=27-Leaf-01\s25\s\s\s0)(.*)/g);
     Leaf2_switch_port_21_0[i55] =  port[i55].match(/(?<=27-Leaf-02\s21\s\s\s0)(.*)/g);

     //this returns us an array of all the Leaf-04-129-0 data, we need just first ones
     // we will return first element of an array above
     //   console.log(Leaf4_switch_port_81_1[i10]);
     if(Leaf4_switch_port_81_1[i55] == null){
        Leaf4_switch_port_81_1[i55] = [];
    }
     this.state.chartData11.datasets[0].data.push(Leaf4_switch_port_81_1[i55][0]);
     this.state.chartData11.datasets[0].backgroundColor.push('rgba(15,102,62,0.8');
     if(Leaf4_switch_port_129_0[i55] == null){
        Leaf4_switch_port_129_0[i55] = [];
    }
     this.state.chartData11.datasets[1].data.push(Leaf4_switch_port_129_0[i55][0]);
     this.state.chartData11.datasets[1].backgroundColor.push('rgba(15,115,62,0.8');
        if(Leaf4_switch_port_129_1[i55] == null){
            Leaf4_switch_port_129_1[i55] = [];
        }
     this.state.chartData11.datasets[2].data.push(Leaf4_switch_port_129_1[i55][0]); 
     this.state.chartData11.datasets[2].backgroundColor.push('rgba(15,132,62,0.8');
        if(Leaf1_switch_port_25_1[i55] == null){
            Leaf1_switch_port_25_1[i55] = [];
        }
     this.state.chartData11.datasets[3].data.push(Leaf1_switch_port_25_1[i55][0]); 
     this.state.chartData11.datasets[3].backgroundColor.push('rgba(50,50,185,0.8');
     if(Leaf1_switch_port_21_1[i55] == null){
        Leaf1_switch_port_21_1[i55] = [];
    }
     this.state.chartData11.datasets[4].data.push(Leaf1_switch_port_21_1[i55][0]); 
     this.state.chartData11.datasets[4].backgroundColor.push('rgba(50,50,185,0.8');
     if(Leaf2_switch_port_21_1[i55] == null){
        Leaf2_switch_port_21_1[i55] = [];
    }
     this.state.chartData11.datasets[5].data.push(Leaf2_switch_port_21_1[i55][0]); 
     this.state.chartData11.datasets[5].backgroundColor.push('rgba(115,65,75,0.8');
     if(Leaf2_switch_port_25_0[i55] == null){
        Leaf2_switch_port_25_0[i55] = [];
    }
     this.state.chartData11.datasets[6].data.push(Leaf2_switch_port_25_0[i55][0]); 
     this.state.chartData11.datasets[6].backgroundColor.push('rgba(125,65,75,0.8');
     if(Leaf2_switch_port_25_1[i55] == null){
        Leaf2_switch_port_25_1[i55] = [];
    }
     this.state.chartData11.datasets[7].data.push(Leaf2_switch_port_25_1[i55][0]); 
     this.state.chartData11.datasets[7].backgroundColor.push('rgba(135,65,75,0.8');
     if(Leaf1_switch_port_21_0[i55] == null){
        Leaf1_switch_port_21_0[i55] = [];
    }
     this.state.chartData11.datasets[8].data.push(Leaf1_switch_port_21_0[i55][0]); 
     this.state.chartData11.datasets[8].backgroundColor.push('rgba(50,50,185,0.8');
     if(Leaf1_switch_port_25_0[i55] == null){
        Leaf1_switch_port_25_0[i55] = [];
    }
     this.state.chartData11.datasets[9].data.push(Leaf1_switch_port_25_0[i55][0]); 
     this.state.chartData11.datasets[9].backgroundColor.push('rgba(50,50,195,0.8');
     if(Leaf2_switch_port_21_0[i55] == null){
        Leaf2_switch_port_21_0[i55] = [];
    }
     this.state.chartData11.datasets[10].data.push(Leaf2_switch_port_21_0[i55][0]); 
     this.state.chartData11.datasets[10].backgroundColor.push('rgba(145,65,75,0.8');
}}

    return(
        <div className="chart">
          <div id="showMenu2">
          <button id="ClickMe11" onClick={HideGraph}>Hide VFlow</button>
          <button id="ClickMe12" onClick={HideGraph2}>Hide Cluster</button>
          <button id="ClickMe13" onClick={HideGraph3}>Hide FD</button>
          <button id="ClickMe14" onClick={HideGraph4}>Hide Flap</button>
          <button id="ClickMe15" onClick={HideGraph5}>Hide Port Events</button>
          <button id="ClickMe16" onClick={HideGraph6}>Hide Lacp</button>
          <button id="ClickMe17" onClick={HideGraph7}>Hide StorageUsed</button>
          <button id="ClickMe18" onClick={HideGraph8}>Hide System Stats</button>
          <button id="ClickMe19" onClick={HideGraph9}>Hide Switch Status</button>
          </div>
        <div className="chart">
           <div className="line" id="chart_drops"> <Line ref={(reference) => this.chartReference = reference }
                 data={this.state.chartData}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_VFLOW_STATS_COMMAND: drops ',
                     fontSize:25,

                        },
            legend:  {
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />
        </div></div>
        <div className="chart" >
           <div className="line"> <Line
                 data={this.state.chartData2}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_VFLOW_STATS_COMMAND: dropbytes',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData3}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_VFLOW_STATS_COMMAND: cpubytes',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData1}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_CLUSTER_TID_COMMAND: Cmd',
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
                        labelString: "cluster-tid"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData4}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.11_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />          
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData5}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.21_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div> 
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData6}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.31_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData7}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.41_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData8}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData9}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.121_FILE_DESCRIPTORS_COMMAND: Cmd',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData10}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_FLAP_COUNT_Cmd',
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
                        labelString: "flap-count"
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
                          animationEnabled: true}}
            />  
            </div></div>
            <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData11}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT EVENT',
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
                        labelString: "count"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData12}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Port-Up',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData13}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Port-Down',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData14}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Pdu-Tx',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData15}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Pdu-Rx',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData16}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Marker-Tx',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData17}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Marker-Rx',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData18}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Allocate-Failure',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData19}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Expired',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData20}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STP_PORT LACP STATS: Lacp-Defaulted',
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
                    onZoom: function({chart}) { }},        responsive: true,
                          zoomEnabled: true,
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData21}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STORAGE POOL_Used',
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
                        labelString: "GB"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData22}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_STORAGE POOL_Available',
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
                        labelString: "GB"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData23}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_used-mem',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData24}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_used-swap',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData25}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_paging',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData26}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_cpu-user',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData27}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_cpu-sys',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="line"> <Line
                 data={this.state.chartData28}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM STATS_cpu-idle',
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
                        labelString: "%"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="temp"> <Line
                 data={this.state.chartData29}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM SWITCH STATUS RPM',
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
                        labelString: "rpm"
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
                          animationEnabled: true}}
            />           
        </div></div>
        <div className="chart">
           <div className="temp"> <Line
                 data={this.state.chartData30}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'NRU_10.27.28.111_SYSTEM SWITCH STATUS Temperature',
                     fontSize:25,

                        },
            legend:
                        {
                            display:this.state.displayLegend,
                            position:'right'
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
                        labelString: "degrees-C"
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
export default Cooler;