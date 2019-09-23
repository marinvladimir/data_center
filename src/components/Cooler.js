import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';
import myText from './Cooler_Stats_17_9.txt';
import myText13 from './Cooler_Panel_17_9.txt';
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
    this.state.chartData2.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData3.labels=[];
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.chartData21.labels=[];
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
                label:'Machine1_01',
                data: [],
                fill: false,
                backgroundColor:[],
            },
            {
                label:'Machine1_02',
                data: [],
                fill: false,    
                backgroundColor:[],           
            },
            {
                label:'Machine1_03',
                data: [],
                fill: false,  
                backgroundColor:[],              
            },
            {
                label:'Machine1_04',
                data: [],
                fill: false, 
                backgroundColor:[],              
            },
            {
                label:'Machine1_05',
                data: [],
                fill: false, 
                backgroundColor:[],            
            },
            {
                label:'Machine1_06',
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
            label:'Machine3_01',
            data: [],
            fill: false,
            backgroundColor:[],
        },
        {
            label:'Machine3_02',
            data: [],
            fill: false,    
            backgroundColor:[],           
        },
        {
            label:'Machine3_03',
            data: [],
            fill: false,  
            backgroundColor:[],              
        },
        {
            label:'Machine3_04',
            data: [],
            fill: false, 
            backgroundColor:[],              
        },
        {
            label:'Machine3_05',
            data: [],
            fill: false, 
            backgroundColor:[],            
        },
        {
            label:'Machine3_06',
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
        label:'System_C_1',
        data: [],
        fill: false,
        backgroundColor:[],
    },
    {
        label:'System_C_2',
        data: [],
        fill: false,    
        backgroundColor:[],           
    },
    {
        label:'System_C_3',
        data: [],
        fill: false,  
        backgroundColor:[],              
    },
    {
        label:'System_C_4',
        data: [],
        fill: false, 
        backgroundColor:[],              
    },
    {
        label:'System_C_5',
        data: [],
        fill: false, 
        backgroundColor:[],            
    },
    {
        label:'System_C_6',
        data: [],
        fill: false,  
        backgroundColor:[],               
    }
]
},
    chartData21:{
        labels:[],
        datasets:[{

        label:'Col_1',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_2',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_3',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_4',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_5',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Col_6',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
    ]},
    chartData30:{
        labels:[],
        datasets:[{
        label:'Col_1 Surface Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_1 Hyb Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_1 System Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_1 Overall Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Col_2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Comp Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Comp2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Comp3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Comp4 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Comp5 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Comp6 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Sys Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Sys Conf Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Fan 1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Fan 2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Fan 3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Fan 4 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Fan 5 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Fan 6 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Fan 7 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Fan 8 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine001 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine002 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Engine003 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Engine004 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Engine005 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Engine006 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine007 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine008 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine009 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'ATM1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'ATM2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'ATM3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'ARTS Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'DCJF Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Engine1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Engine Smart Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Controller 1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Controller 2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Controller 3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Ant Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Rad Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Chan 1 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Chan 2 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Chan 3 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Chan 4 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Chan 5 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
        {
        label:'Chan 6 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },    
        {
        label:'Chan 7 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Chan 8 TempP',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Chan 9 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        }, 
        {
        label:'Chan 10 Temp',
        data: [],
        fill: false,  
        backgroundColor:[],    
        },
    ]},
    });
  }


render(){

    var myHTML13 = document.getElementById("Sw_Stat");
    var textoutput13 = myHTML13.innerHTML;
    var regex_date13 = /(?<=Time: )\d*/g;
    var date13 = textoutput13.match(regex_date13);

    var Sourc01_DGABTemp_Reg = /(?<=MachnABC\s{1}DGAB Temp).*/g;
    var Sourc01_DGABTemp = textoutput13.match(Sourc01_DGABTemp_Reg);
    var Sourc01_DGABTemp_fix = [];
    var Sourc01_DGARTemp_Reg = /(?<=MachnABC\s{1}DGAR Temp).*/g;
    var Sourc01_DGARTemp = textoutput13.match(Sourc01_DGARTemp_Reg);
    var Sourc01_DGARTemp_fix = [];
    var Sourc01_SystemTemp_Reg = /(?<=MachnABC\s{1}System Temp).*/g;
    var Sourc01_SystemTemp = textoutput13.match(Sourc01_SystemTemp_Reg);
    var Sourc01_SystemTemp_fix = [];
    var Sourc01_DARCGHADAVTemp_Reg = /(?<=MachnABC\s{1}DARCGHADAV Temp).*/g;
    var Sourc01_DARCGHADAVTemp = textoutput13.match(Sourc01_DARCGHADAVTemp_Reg);
    var Sourc01_DARCGHADAVTemp_fix = [];
    var Sourc01_DDDTemp_Reg = /(?<=MachnABC\s{1}DDD Temp).*/g;
    var Sourc01_DDDTemp = textoutput13.match(Sourc01_DDDTemp_Reg);
    var Sourc01_DDDTemp_fix = [];
    var Sourc01_P1DIMMA1Temp_Reg = /(?<=MachnABC\s{1}TB0DARCWD TEMP).*/g;
    var Sourc01_P1DIMMA1Temp = textoutput13.match(Sourc01_P1DIMMA1Temp_Reg);
    var Sourc01_P1DIMMA1Temp_fix = [];
    var Sourc01_P1DIMMC1Temp_Reg = /(?<=MachnABC\s{1}TB0DARCWD TEMP).*/g;
    var Sourc01_P1DIMMC1Temp = textoutput13.match(Sourc01_P1DIMMC1Temp_Reg);
    var Sourc01_P1DIMMC1Temp_fix = [];
    var Sourc01_P2DIMME1Temp_Reg = /(?<=MachnABC\s{1}TB0DARCWD TEMP).*/g;
    var Sourc01_P2DIMME1Temp = textoutput13.match(Sourc01_P2DIMME1Temp_Reg);
    var Sourc01_P2DIMME1Temp_fix = [];
    var Sourc01_P2DIMMG1Temp_Reg = /(?<=MachnABC\s{1}TB0DARCWD TEMP).*/g;
    var Sourc01_P2DIMMG1Temp = textoutput13.match(Sourc01_P2DIMMG1Temp_Reg);
    var Sourc01_P2DIMMG1Temp_fix = [];

    var Sourc02_DGABTemp_Reg = /(?<=MachnBCD\s{1}DGAB Temp).*/g;
    var Sourc02_DGABTemp = textoutput13.match(Sourc02_DGABTemp_Reg);
    var Sourc02_DGABTemp_fix = [];
    var Sourc02_DGARTemp_Reg = /(?<=MachnBCD\s{1}DGAR Temp).*/g;
    var Sourc02_DGARTemp = textoutput13.match(Sourc02_DGARTemp_Reg);
    var Sourc02_DGARTemp_fix = [];
    var Sourc02_SystemTemp_Reg = /(?<=MachnBCD\s{1}System Temp).*/g;
    var Sourc02_SystemTemp = textoutput13.match(Sourc02_SystemTemp_Reg);
    var Sourc02_SystemTemp_fix = [];
    var Sourc02_DARCGHADAVTemp_Reg = /(?<=MachnBCD\s{1}DARCGHADAV Temp).*/g;
    var Sourc02_DARCGHADAVTemp = textoutput13.match(Sourc02_DARCGHADAVTemp_Reg);
    var Sourc02_DARCGHADAVTemp_fix = [];
    var Sourc02_DDDTemp_Reg = /(?<=MachnBCD\s{1}DDD Temp).*/g;
    var Sourc02_DDDTemp = textoutput13.match(Sourc02_DDDTemp_Reg);
    var Sourc02_DDDTemp_fix = [];
    var Sourc02_P1DIMMA1Temp_Reg = /(?<=MachnBCD\s{1}TB0DARCWD TEMP).*/g;
    var Sourc02_P1DIMMA1Temp = textoutput13.match(Sourc02_P1DIMMA1Temp_Reg);
    var Sourc02_P1DIMMA1Temp_fix = [];
    var Sourc02_P1DIMMC1Temp_Reg = /(?<=MachnBCD\s{1}TB0DARCWD TEMP).*/g;
    var Sourc02_P1DIMMC1Temp = textoutput13.match(Sourc02_P1DIMMC1Temp_Reg);
    var Sourc02_P1DIMMC1Temp_fix = [];
    var Sourc02_P2DIMME1Temp_Reg = /(?<=MachnBCD\s{1}TB0DARCWD TEMP).*/g;
    var Sourc02_P2DIMME1Temp = textoutput13.match(Sourc02_P2DIMME1Temp_Reg);
    var Sourc02_P2DIMME1Temp_fix = [];
    var Sourc02_P2DIMMG1Temp_Reg = /(?<=MachnBCD\s{1}TB0DARCWD TEMP).*/g;
    var Sourc02_P2DIMMG1Temp = textoutput13.match(Sourc02_P2DIMMG1Temp_Reg);
    var Sourc02_P2DIMMG1Temp_fix = [];

    var Port01_DGABTemp_Reg = /(?<=EngnABC\s{2}DGAB Temp).*/g;
    var Port01_DGABTemp = textoutput13.match(Port01_DGABTemp_Reg);
    var Port01_DGABTemp_fix = [];
    var Port01_DGARTemp_Reg = /(?<=EngnABC\s{2}DGAR Temp).*/g;
    var Port01_DGARTemp = textoutput13.match(Port01_DGARTemp_Reg);
    var Port01_DGARTemp_fix = [];
    var Port01_SystemTemp_Reg = /(?<=EngnABC\s{2}System Temp).*/g;
    var Port01_SystemTemp = textoutput13.match(Port01_SystemTemp_Reg);
    var Port01_SystemTemp_fix = [];
    var Port01_DARCGHADAVTemp_Reg = /(?<=EngnABC\s{2}DARCGHADAV Temp).*/g;
    var Port01_DARCGHADAVTemp = textoutput13.match(Port01_DARCGHADAVTemp_Reg);
    var Port01_DARCGHADAVTemp_fix = [];
    var Port01_DDDTemp_Reg = /(?<=EngnABC\s{2}DDD Temp).*/g;
    var Port01_DDDTemp = textoutput13.match(Port01_DDDTemp_Reg);
    var Port01_DDDTemp_fix = [];
    var Port01_P1DIMMA1Temp_Reg = /(?<=EngnABC\s{2}TB0DARCWD TEMP).*/g;
    var Port01_P1DIMMA1Temp = textoutput13.match(Port01_P1DIMMA1Temp_Reg);
    var Port01_P1DIMMA1Temp_fix = [];
    var Port01_P1DIMMC1Temp_Reg = /(?<=EngnABC\s{2}TB0DARCWD TEMP).*/g;
    var Port01_P1DIMMC1Temp = textoutput13.match(Port01_P1DIMMC1Temp_Reg);
    var Port01_P1DIMMC1Temp_fix = [];
    var Port01_P2DIMME1Temp_Reg = /(?<=EngnABC\s{2}TB0DARCWD TEMP).*/g;
    var Port01_P2DIMME1Temp = textoutput13.match(Port01_P2DIMME1Temp_Reg);
    var Port01_P2DIMME1Temp_fix = [];
    var Port01_P2DIMMG1Temp_Reg = /(?<=EngnABC\s{2}TB0DARCWD TEMP).*/g;
    var Port01_P2DIMMG1Temp = textoutput13.match(Port01_P2DIMMG1Temp_Reg);
    var Port01_P2DIMMG1Temp_fix = [];

    var Port02_DGABTemp_Reg = /(?<=EngnBCD\s{2}DGAB Temp).*/g;
    var Port02_DGABTemp = textoutput13.match(Port02_DGABTemp_Reg);
    var Port02_DGABTemp_fix = [];
    var Port02_DGARTemp_Reg = /(?<=EngnBCD\s{2}DGAR Temp).*/g;
    var Port02_DGARTemp = textoutput13.match(Port02_DGARTemp_Reg);
    var Port02_DGARTemp_fix = [];
    var Port02_SystemTemp_Reg = /(?<=EngnBCD\s{2}System Temp).*/g;
    var Port02_SystemTemp = textoutput13.match(Port02_SystemTemp_Reg);
    var Port02_SystemTemp_fix = [];
    var Port02_DARCGHADAVTemp_Reg = /(?<=EngnBCD\s{2}DARCGHADAV Temp).*/g;
    var Port02_DARCGHADAVTemp = textoutput13.match(Port02_DARCGHADAVTemp_Reg);
    var Port02_DARCGHADAVTemp_fix = [];
    var Port02_DDDTemp_Reg = /(?<=EngnBCD\s{2}DDD Temp).*/g;
    var Port02_DDDTemp = textoutput13.match(Port02_DDDTemp_Reg);
    var Port02_DDDTemp_fix = [];
    var Port02_P1DIMMA1Temp_Reg = /(?<=EngnBCD\s{2}TB0DARCWD TEMP).*/g;
    var Port02_P1DIMMA1Temp = textoutput13.match(Port02_P1DIMMA1Temp_Reg);
    var Port02_P1DIMMA1Temp_fix = [];
    var Port02_P1DIMMC1Temp_Reg = /(?<=EngnBCD\s{2}TB0DARCWD TEMP).*/g;
    var Port02_P1DIMMC1Temp = textoutput13.match(Port02_P1DIMMC1Temp_Reg);
    var Port02_P1DIMMC1Temp_fix = [];
    var Port02_P2DIMME1Temp_Reg = /(?<=EngnBCD\s{2}TB0DARCWD TEMP).*/g;
    var Port02_P2DIMME1Temp = textoutput13.match(Port02_P2DIMME1Temp_Reg);
    var Port02_P2DIMME1Temp_fix = [];
    var Port02_P2DIMMG1Temp_Reg = /(?<=EngnBCD\s{2}TB0DARCWD TEMP).*/g;
    var Port02_P2DIMMG1Temp = textoutput13.match(Port02_P2DIMMG1Temp_Reg);
    var Port02_P2DIMMG1Temp_fix = [];

    var Port03_DGABTemp_Reg = /(?<=EngnCDE\s{2}DGAB Temp).*/g;
    var Port03_DGABTemp = textoutput13.match(Port03_DGABTemp_Reg);
    var Port03_DGABTemp_fix = [];
    var Port03_DGARTemp_Reg = /(?<=EngnCDE\s{2}DGAR Temp).*/g;
    var Port03_DGARTemp = textoutput13.match(Port03_DGARTemp_Reg);
    var Port03_DGARTemp_fix = [];
    var Port03_SystemTemp_Reg = /(?<=EngnCDE\s{2}System Temp).*/g;
    var Port03_SystemTemp = textoutput13.match(Port03_SystemTemp_Reg);
    var Port03_SystemTemp_fix = [];
    var Port03_DARCGHADAVTemp_Reg = /(?<=EngnCDE\s{2}DARCGHADAV Temp).*/g;
    var Port03_DARCGHADAVTemp = textoutput13.match(Port03_DARCGHADAVTemp_Reg);
    var Port03_DARCGHADAVTemp_fix = [];
    var Port03_DDDTemp_Reg = /(?<=EngnCDE\s{2}DDD Temp).*/g;
    var Port03_DDDTemp = textoutput13.match(Port03_DDDTemp_Reg);
    var Port03_DDDTemp_fix = [];
    var Port03_P1DIMMA1Temp_Reg = /(?<=EngnCDE\s{2}TB0DARCWD TEMP).*/g;
    var Port03_P1DIMMA1Temp = textoutput13.match(Port03_P1DIMMA1Temp_Reg);
    var Port03_P1DIMMA1Temp_fix = [];
    var Port03_P1DIMMC1Temp_Reg = /(?<=EngnCDE\s{2}TB0DARCWD TEMP).*/g;
    var Port03_P1DIMMC1Temp = textoutput13.match(Port03_P1DIMMC1Temp_Reg);
    var Port03_P1DIMMC1Temp_fix = [];
    var Port03_P2DIMME1Temp_Reg = /(?<=EngnCDE\s{2}TB0DARCWD TEMP).*/g;
    var Port03_P2DIMME1Temp = textoutput13.match(Port03_P2DIMME1Temp_Reg);
    var Port03_P2DIMME1Temp_fix = [];
    var Port03_P2DIMMG1Temp_Reg = /(?<=EngnCDE\s{2}TB0DARCWD TEMP).*/g;
    var Port03_P2DIMMG1Temp = textoutput13.match(Port03_P2DIMMG1Temp_Reg);
    var Port03_P2DIMMG1Temp_fix = [];

    var Port04_DGABTemp_Reg = /(?<=EngnDEF\s{2}DGAB Temp).*/g;
    var Port04_DGABTemp = textoutput13.match(Port04_DGABTemp_Reg);
    var Port04_DGABTemp_fix = [];
    var Port04_DGARTemp_Reg = /(?<=EngnDEF\s{2}DGAR Temp).*/g;
    var Port04_DGARTemp = textoutput13.match(Port04_DGARTemp_Reg);
    var Port04_DGARTemp_fix = [];
    var Port04_SystemTemp_Reg = /(?<=EngnDEF\s{2}System Temp).*/g;
    var Port04_SystemTemp = textoutput13.match(Port04_SystemTemp_Reg);
    var Port04_SystemTemp_fix = [];
    var Port04_DARCGHADAVTemp_Reg = /(?<=EngnDEF\s{2}DARCGHADAV Temp).*/g;
    var Port04_DARCGHADAVTemp = textoutput13.match(Port04_DARCGHADAVTemp_Reg);
    var Port04_DARCGHADAVTemp_fix = [];
    var Port04_DDDTemp_Reg = /(?<=EngnDEF\s{2}DDD Temp).*/g;
    var Port04_DDDTemp = textoutput13.match(Port04_DDDTemp_Reg);
    var Port04_DDDTemp_fix = [];
    var Port04_P1DIMMA1Temp_Reg = /(?<=EngnDEF\s{2}TB0DARCWD TEMP).*/g;
    var Port04_P1DIMMA1Temp = textoutput13.match(Port04_P1DIMMA1Temp_Reg);
    var Port04_P1DIMMA1Temp_fix = [];
    var Port04_P1DIMMC1Temp_Reg = /(?<=EngnDEF\s{2}TB0DARCWD TEMP).*/g;
    var Port04_P1DIMMC1Temp = textoutput13.match(Port04_P1DIMMC1Temp_Reg);
    var Port04_P1DIMMC1Temp_fix = [];
    var Port04_P2DIMME1Temp_Reg = /(?<=EngnDEF\s{2}TB0DARCWD TEMP).*/g;
    var Port04_P2DIMME1Temp = textoutput13.match(Port04_P2DIMME1Temp_Reg);
    var Port04_P2DIMME1Temp_fix = [];
    var Port04_P2DIMMG1Temp_Reg = /(?<=EngnDEF\s{2}TB0DARCWD TEMP).*/g;
    var Port04_P2DIMMG1Temp = textoutput13.match(Port04_P2DIMMG1Temp_Reg);
    var Port04_P2DIMMG1Temp_fix = [];

    var reg_Sourc01 =/(?<=MachnABC\s).*/g ;
    var reg_Sourc02 =/(?<=MachnBCD\s).*/g ;

    var SP_Sourc01_used = [];       var SP_Sourc01_avail = [];
    var SP_Sourc01_used_fix = [];       var SP_Sourc01_avail_fix = [];
    var SP_Sourc02_used = [];       var SP_Sourc02_avail = [];
    var SP_Sourc02_used_fix = [];       var SP_Sourc02_avail_fix = [];


  var myHTML = document.getElementById('VFLOW');
  var textoutput = myHTML.innerHTML;
  var Sourc_27_01 = /[\n\r][ \t]*MachnABC\s[ \t]*([^\n\r]*)/g;
  var Sourc_27_02 = /[\n\r][ \t]*MachnBCD\s[ \t]*([^\n\r]*)/g;
  var Port_27_01 = /[\n\r][ \t]*EngnABC\s[ \t]*([^\n\r]*)/g;
  var Port_27_02 = /[\n\r][ \t]*EngnBCD\s[ \t]*([^\n\r]*)/g;
  var Port_27_03 = /[\n\r][ \t]*EngnCDE\s[ \t]*([^\n\r]*)/g;
  var Port_27_04 = /[\n\r][ \t]*EngnDEF\s[ \t]*([^\n\r]*)/g;
  var regex_date =  /(?<=Time: )\d*/g;

  var Sourc_27_01_all = textoutput.match(Sourc_27_01);
  var Sourc_27_02_all = textoutput.match(Sourc_27_02);
  var Port_27_01_all = textoutput.match(Port_27_01);
  var Port_27_02_all = textoutput.match(Port_27_02);
  var Port_27_03_all = textoutput.match(Port_27_03);
  var Port_27_04_all = textoutput.match(Port_27_04);
  var date = textoutput.match(regex_date);
  
  var Dynm_1 = [];
  var Dynm_2 = [];
  var Dynm_3 = [];
  var Dynm_4 = [];

  var Dynm_1_2 = [];
  var Dynm_2_2 = [];
  var Dynm_3_2 = [];
  var Dynm_4_2 = [];

  var Dynm_1_3 = [];
  var Dynm_2_3 = [];
  var Dynm_3_3 = [];
  var Dynm_4_3 = [];

  var Dynm_1_4 = [];
  var Dynm_2_4 = [];
  var Dynm_3_4 = [];
  var Dynm_4_4 = [];

  var Dynm_1_5 = [];
  var Dynm_2_5 = [];
  var Dynm_3_5 = [];
  var Dynm_4_5 = [];

  var Dynm_1_6 = [];
  var Dynm_2_6 = [];
  var Dynm_3_6 = [];
  var Dynm_4_6 = [];

  var parse = [];
  var parse13 = [];

    if(date13!=null){
        for(var i13=0;i13<date13.length;i13++){
         
           if(Sourc01_DGABTemp[i13] !== undefined){
           Sourc01_DGABTemp_fix[i13] = Sourc01_DGABTemp[i13].slice(0,13);
           this.state.chartData30.datasets[0].data.push(Sourc01_DGABTemp_fix[i13]);
           this.state.chartData30.datasets[0].backgroundColor.push('rgba(35,135,225,0.5');
        }
        else{
            this.state.chartData30.datasets[0].data.push(0);
        }

            if(Sourc01_DGARTemp[i13] !== undefined){
            Sourc01_DGARTemp_fix[i13] = Sourc01_DGARTemp[i13].slice(0,13);
            this.state.chartData30.datasets[1].data.push(Sourc01_DGARTemp_fix[i13]);
            this.state.chartData30.datasets[1].backgroundColor.push('rgba(45,155,235,0.5');
        }
        else{
            this.state.chartData30.datasets[1].data.push(0);
        }

            if(Sourc01_SystemTemp[i13] !== undefined){
                Sourc01_SystemTemp_fix[i13] = Sourc01_SystemTemp[i13].slice(0,11);
            this.state.chartData30.datasets[2].data.push(Sourc01_SystemTemp_fix[i13]);
            this.state.chartData30.datasets[2].backgroundColor.push('rgba(35,165,213,0.5');
        }
        else{
            this.state.chartData30.datasets[2].data.push(0);
        }

        if(Sourc01_DARCGHADAVTemp[i13] !== undefined){
            Sourc01_DARCGHADAVTemp_fix[i13] = Sourc01_DARCGHADAVTemp[i13].slice(0,7);
        this.state.chartData30.datasets[3].data.push(Sourc01_DARCGHADAVTemp_fix[i13]);
        this.state.chartData30.datasets[3].backgroundColor.push('rgba(15,145,223,0.5');
        }
        else{
            this.state.chartData30.datasets[3].data.push(0);
        }

        if(Sourc01_DDDTemp[i13] !== undefined){
            Sourc01_DDDTemp_fix[i13] = Sourc01_DDDTemp[i13].slice(0,14);
        this.state.chartData30.datasets[4].data.push(Sourc01_DDDTemp_fix[i13]);
        this.state.chartData30.datasets[4].backgroundColor.push('rgba(55,165,233,0.5');
        }
        else{
            this.state.chartData30.datasets[4].data.push(0);
        }

        if(Sourc01_P1DIMMA1Temp[i13] !== undefined){
            Sourc01_P1DIMMA1Temp_fix[i13] = Sourc01_P1DIMMA1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[5].data.push(Sourc01_P1DIMMA1Temp_fix[i13]);
        this.state.chartData30.datasets[5].backgroundColor.push('rgba(45,165,215,0.5');
        }
        else{
            this.state.chartData30.datasets[5].data.push(0);
        }

        if(Sourc01_P1DIMMC1Temp[i13] !== undefined){
            Sourc01_P1DIMMC1Temp_fix[i13] = Sourc01_P1DIMMC1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[6].data.push(Sourc01_P1DIMMC1Temp_fix[i13]);
        this.state.chartData30.datasets[6].backgroundColor.push('rgba(55,148,219,0.5');
        }
        else{
            this.state.chartData30.datasets[6].data.push(0);
        }

        if(Sourc01_P2DIMME1Temp[i13] !== undefined){
            Sourc01_P2DIMME1Temp_fix[i13] = Sourc01_P2DIMME1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[7].data.push(Sourc01_P2DIMME1Temp_fix[i13]);
        this.state.chartData30.datasets[7].backgroundColor.push('rgba(35,172,203,0.5');
        }
        else{
            this.state.chartData30.datasets[7].data.push(0);
        }

        if(Sourc01_P2DIMMG1Temp[i13] !== undefined){
            Sourc01_P2DIMMG1Temp_fix[i13] = Sourc01_P2DIMMG1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[8].data.push(Sourc01_P2DIMMG1Temp_fix[i13]);
        this.state.chartData30.datasets[8].backgroundColor.push('rgba(28,185,234,0.5');
        }
        else{
            this.state.chartData30.datasets[8].data.push(0);
        }

        if(Sourc02_DGABTemp[i13] !== undefined){
            Sourc02_DGABTemp_fix[i13] = Sourc02_DGABTemp[i13].slice(0,13);
            this.state.chartData30.datasets[9].data.push(Sourc02_DGABTemp_fix[i13]);
            this.state.chartData30.datasets[9].backgroundColor.push('rgba(215,55,75,0.5');
         }
         else{
             this.state.chartData30.datasets[9].data.push(0);
         }
        
        if(Sourc02_DGARTemp[i13] !== undefined){
        Sourc02_DGARTemp_fix[i13] = Sourc02_DGARTemp[i13].slice(0,13);
        this.state.chartData30.datasets[10].data.push(Sourc02_DGARTemp_fix[i13]);
        this.state.chartData30.datasets[10].backgroundColor.push('rgba(225,68,52,0.5');
         }
         else{
             this.state.chartData30.datasets[10].data.push(0);
         }
        
        if(Sourc02_SystemTemp[i13] !== undefined){
            Sourc02_SystemTemp_fix[i13] = Sourc02_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[11].data.push(Sourc02_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[11].backgroundColor.push('rgba(208,88,49,0.5');
         }
         else{
             this.state.chartData30.datasets[11].data.push(0);
         }
        
         if(Sourc02_DARCGHADAVTemp[i13] !== undefined){
             Sourc02_DARCGHADAVTemp_fix[i13] = Sourc02_DARCGHADAVTemp[i13].slice(0,7);
         this.state.chartData30.datasets[12].data.push(Sourc02_DARCGHADAVTemp_fix[i13]);
         this.state.chartData30.datasets[12].backgroundColor.push('rgba(222,53,62,0.5');
         }
         else{
             this.state.chartData30.datasets[12].data.push(0);
         }
        
         if(Sourc02_DDDTemp[i13] !== undefined){
             Sourc02_DDDTemp_fix[i13] = Sourc02_DDDTemp[i13].slice(0,14);
         this.state.chartData30.datasets[13].data.push(Sourc02_DDDTemp_fix[i13]);
         this.state.chartData30.datasets[13].backgroundColor.push('rgba(245,33,52,0.5');
         }
         else{
             this.state.chartData30.datasets[13].data.push(0);
         }
        
         if(Sourc02_P1DIMMA1Temp[i13] !== undefined){
             Sourc02_P1DIMMA1Temp_fix[i13] = Sourc02_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[14].data.push(Sourc02_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[14].backgroundColor.push('rgba(211,23,82,0.5');
         }
         else{
             this.state.chartData30.datasets[14].data.push(0);
         }
        
         if(Sourc02_P1DIMMC1Temp[i13] !== undefined){
             Sourc02_P1DIMMC1Temp_fix[i13] = Sourc02_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[15].data.push(Sourc02_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[15].backgroundColor.push('rgba(215,58,21,0.5');
         }
         else{
             this.state.chartData30.datasets[15].data.push(0);
         }
        
         if(Sourc02_P2DIMME1Temp[i13] !== undefined){
             Sourc02_P2DIMME1Temp_fix[i13] = Sourc02_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[16].data.push(Sourc02_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[16].backgroundColor.push('rgba(191,38,41,0.5');
         }
         else{
             this.state.chartData30.datasets[16].data.push(0);
         }
        
         if(Sourc02_P2DIMMG1Temp[i13] !== undefined){
             Sourc02_P2DIMMG1Temp_fix[i13] = Sourc02_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[17].data.push(Sourc02_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[17].backgroundColor.push('rgba(225,98,41,0.5');
         }
         else{
             this.state.chartData30.datasets[17].data.push(0);
         }

        if(Port01_DGABTemp[i13] !== undefined){
            Port01_DGABTemp_fix[i13] = Port01_DGABTemp[i13].slice(0,13);
        this.state.chartData30.datasets[18].data.push(Port01_DGABTemp_fix[i13]);
        this.state.chartData30.datasets[18].backgroundColor.push('rgba(25,175,35,0.5');
         }
         else{
             this.state.chartData30.datasets[18].data.push(0);
         }
        
        if(Port01_DGARTemp[i13] !== undefined){
        Port01_DGARTemp_fix[i13] = Port01_DGARTemp[i13].slice(0,13);
        this.state.chartData30.datasets[19].data.push(Port01_DGARTemp_fix[i13]);
        this.state.chartData30.datasets[19].backgroundColor.push('rgba(35,168,42,0.5');
         }
         else{
             this.state.chartData30.datasets[19].data.push(0);
         }
        
        if(Port01_SystemTemp[i13] !== undefined){
            Port01_SystemTemp_fix[i13] = Port01_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[20].data.push(Port01_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[20].backgroundColor.push('rgba(42,155,47,0.5');
         }
         else{
             this.state.chartData30.datasets[20].data.push(0);
         }
        
         if(Port01_DARCGHADAVTemp[i13] !== undefined){
             Port01_DARCGHADAVTemp_fix[i13] = Port01_DARCGHADAVTemp[i13].slice(0,7);
         this.state.chartData30.datasets[21].data.push(Port01_DARCGHADAVTemp_fix[i13]);
         this.state.chartData30.datasets[21].backgroundColor.push('rgba(40,182,15,0.5');
         }
         else{
             this.state.chartData30.datasets[21].data.push(0);
         }
        
         if(Port01_DDDTemp[i13] !== undefined){
             Port01_DDDTemp_fix[i13] = Port01_DDDTemp[i13].slice(0,14);
         this.state.chartData30.datasets[22].data.push(Port01_DDDTemp_fix[i13]);
         this.state.chartData30.datasets[22].backgroundColor.push('rgba(30,152,45,0.5');
         }
         else{
             this.state.chartData30.datasets[22].data.push(0);
         }
        
         if(Port01_P1DIMMA1Temp[i13] !== undefined){
             Port01_P1DIMMA1Temp_fix[i13] = Port01_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[23].data.push(Port01_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[23].backgroundColor.push('rgba(55,189,29,0.5');
         }
         else{
             this.state.chartData30.datasets[23].data.push(0);
         }
        
         if(Port01_P1DIMMC1Temp[i13] !== undefined){
             Port01_P1DIMMC1Temp_fix[i13] = Port01_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[24].data.push(Port01_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[24].backgroundColor.push('rgba(53,219,89,0.5');
         }
         else{
             this.state.chartData30.datasets[24].data.push(0);
         }
        
         if(Port01_P2DIMME1Temp[i13] !== undefined){
             Port01_P2DIMME1Temp_fix[i13] = Port01_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[25].data.push(Port01_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[25].backgroundColor.push('rgba(89,219,52,0.5');
         }
         else{
             this.state.chartData30.datasets[25].data.push(0);
         }
        
         if(Port01_P2DIMMG1Temp[i13] !== undefined){
             Port01_P2DIMMG1Temp_fix[i13] = Port01_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[26].data.push(Port01_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[26].backgroundColor.push('rgba(69,225,32,0.5');
         }
         else{
             this.state.chartData30.datasets[26].data.push(0);
         }

         if(Port02_DGABTemp[i13] !== undefined){
            Port02_DGABTemp_fix[i13] = Port02_DGABTemp[i13].slice(0,13);
        this.state.chartData30.datasets[27].data.push(Port02_DGABTemp_fix[i13]);
        this.state.chartData30.datasets[27].backgroundColor.push('rgba(215,205,25,0.4');
         }
         else{
             this.state.chartData30.datasets[27].data.push(0);
         }
        
        if(Port02_DGARTemp[i13] !== undefined){
            Port02_DGARTemp_fix[i13] = Port02_DGARTemp[i13].slice(0,13);
        this.state.chartData30.datasets[28].data.push(Port02_DGARTemp_fix[i13]);
        this.state.chartData30.datasets[28].backgroundColor.push('rgba(209,191,42,0.4');
         }
         else{
             this.state.chartData30.datasets[28].data.push(0);
         }
        
        if(Port02_SystemTemp[i13] !== undefined){
            Port02_SystemTemp_fix[i13] = Port02_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[29].data.push(Port02_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[29].backgroundColor.push('rgba(199,198,57,0.4');
         }
         else{
             this.state.chartData30.datasets[29].data.push(0);
         }
        
         if(Port02_DARCGHADAVTemp[i13] !== undefined){
             Port02_DARCGHADAVTemp_fix[i13] = Port02_DARCGHADAVTemp[i13].slice(0,7);
         this.state.chartData30.datasets[30].data.push(Port02_DARCGHADAVTemp_fix[i13]);
         this.state.chartData30.datasets[30].backgroundColor.push('rgba(188,173,37,0.4');
         }
         else{
             this.state.chartData30.datasets[30].data.push(0);
         }
        
         if(Port02_DDDTemp[i13] !== undefined){
             Port02_DDDTemp_fix[i13] = Port02_DDDTemp[i13].slice(0,14);
         this.state.chartData30.datasets[31].data.push(Port02_DDDTemp_fix[i13]);
         this.state.chartData30.datasets[31].backgroundColor.push('rgba(221,170,55,0.5');
         }
         else{
             this.state.chartData30.datasets[31].data.push(0);
         }
        
         if(Port02_P1DIMMA1Temp[i13] !== undefined){
             Port02_P1DIMMA1Temp_fix[i13] = Port02_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[32].data.push(Port02_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[32].backgroundColor.push('rgba(239,175,66,0.4');
         }
         else{
             this.state.chartData30.datasets[32].data.push(0);
         }
        
         if(Port02_P1DIMMC1Temp[i13] !== undefined){
             Port02_P1DIMMC1Temp_fix[i13] = Port02_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[33].data.push(Port02_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[33].backgroundColor.push('rgba(251,222,59,0.5');
         }
         else{
             this.state.chartData30.datasets[33].data.push(0);
         }
        
         if(Port02_P2DIMME1Temp[i13] !== undefined){
             Port02_P2DIMME1Temp_fix[i13] = Port02_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[34].data.push(Port02_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[34].backgroundColor.push('rgba(239,212,76,0.5');
         }
         else{
             this.state.chartData30.datasets[34].data.push(0);
         }
        
         if(Port02_P2DIMMG1Temp[i13] !== undefined){
             Port02_P2DIMMG1Temp_fix[i13] = Port02_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[35].data.push(Port02_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[35].backgroundColor.push('rgba(249,202,63,0.5');
         }
         else{
             this.state.chartData30.datasets[35].data.push(0);
         }

         
        if(Port03_DGABTemp[i13] !== undefined){
            Port03_DGABTemp_fix[i13] = Port03_DGABTemp[i13].slice(0,13);
        this.state.chartData30.datasets[36].data.push(Port03_DGABTemp_fix[i13]);
        this.state.chartData30.datasets[36].backgroundColor.push('rgba(15,235,211,0.4');
        }
        else{
            this.state.chartData30.datasets[36].data.push(0);
        }

        if(Port03_DGARTemp[i13] !== undefined){
            Port03_DGARTemp_fix[i13] = Port03_DGARTemp[i13].slice(0,13);
        this.state.chartData30.datasets[37].data.push(Port03_DGARTemp_fix[i13]);
        this.state.chartData30.datasets[37].backgroundColor.push('rgba(22,219,209,0.4');
        }
        else{
            this.state.chartData30.datasets[37].data.push(0);
        }

        if(Port03_SystemTemp[i13] !== undefined){
            Port03_SystemTemp_fix[i13] = Port03_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[38].data.push(Port03_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[38].backgroundColor.push('rgba(28,200,212,0.4');
        }
        else{
            this.state.chartData30.datasets[38].data.push(0);
        }

        if(Port03_DARCGHADAVTemp[i13] !== undefined){
            Port03_DARCGHADAVTemp_fix[i13] = Port03_DARCGHADAVTemp[i13].slice(0,7);
        this.state.chartData30.datasets[39].data.push(Port03_DARCGHADAVTemp_fix[i13]);
        this.state.chartData30.datasets[39].backgroundColor.push('rgba(38,220,211,0.4');
        }
        else{
            this.state.chartData30.datasets[39].data.push(0);
        }

        if(Port03_DDDTemp[i13] !== undefined){
            Port03_DDDTemp_fix[i13] = Port03_DDDTemp[i13].slice(0,14);
        this.state.chartData30.datasets[40].data.push(Port03_DDDTemp_fix[i13]);
        this.state.chartData30.datasets[40].backgroundColor.push('rgba(50,209,211,0.4');
        }
        else{
            this.state.chartData30.datasets[40].data.push(0);
        }

        if(Port03_P1DIMMA1Temp[i13] !== undefined){
            Port03_P1DIMMA1Temp_fix[i13] = Port03_P1DIMMA1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[41].data.push(Port03_P1DIMMA1Temp_fix[i13]);
        this.state.chartData30.datasets[41].backgroundColor.push('rgba(60,227,206,0.4');
        }
        else{
            this.state.chartData30.datasets[41].data.push(0);
        }

        if(Port03_P1DIMMC1Temp[i13] !== undefined){
            Port03_P1DIMMC1Temp_fix[i13] = Port03_P1DIMMC1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[42].data.push(Port03_P1DIMMC1Temp_fix[i13]);
        this.state.chartData30.datasets[42].backgroundColor.push('rgba(53,219,249,0.5');
        }
        else{
            this.state.chartData30.datasets[42].data.push(0);
        }

        if(Port03_P2DIMME1Temp[i13] !== undefined){
            Port03_P2DIMME1Temp_fix[i13] = Port03_P2DIMME1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[43].data.push(Port03_P2DIMME1Temp_fix[i13]);
        this.state.chartData30.datasets[43].backgroundColor.push('rgba(83,229,219,0.5');
        }
        else{
            this.state.chartData30.datasets[43].data.push(0);
        }

        if(Port03_P2DIMMG1Temp[i13] !== undefined){
            Port03_P2DIMMG1Temp_fix[i13] = Port03_P2DIMMG1Temp[i13].slice(0,7);
        this.state.chartData30.datasets[44].data.push(Port03_P2DIMMG1Temp_fix[i13]);
        this.state.chartData30.datasets[44].backgroundColor.push('rgba(23,249,219,0.5');
        }
        else{
            this.state.chartData30.datasets[44].data.push(0);
        }

        if(Port04_DGABTemp[i13] !== undefined){
            Port04_DGABTemp_fix[i13] = Port04_DGABTemp[i13].slice(0,13);
        this.state.chartData30.datasets[45].data.push(Port04_DGABTemp_fix[i13]);
        this.state.chartData30.datasets[45].backgroundColor.push('rgba(231,85,222,0.4');
         }
         else{
             this.state.chartData30.datasets[45].data.push(0);
         }
        
        if(Port04_DGARTemp[i13] !== undefined){
            Port04_DGARTemp_fix[i13] = Port04_DGARTemp[i13].slice(0,13);
        this.state.chartData30.datasets[46].data.push(Port04_DGARTemp_fix[i13]);
        this.state.chartData30.datasets[46].backgroundColor.push('rgba(202,65,244,0.4');
         }
         else{
             this.state.chartData30.datasets[46].data.push(0);
         }
        
        if(Port04_SystemTemp[i13] !== undefined){
            Port04_SystemTemp_fix[i13] = Port04_SystemTemp[i13].slice(0,11);
        this.state.chartData30.datasets[47].data.push(Port04_SystemTemp_fix[i13]);
        this.state.chartData30.datasets[47].backgroundColor.push('rgba(211,66,224,0.4');
         }
         else{
             this.state.chartData30.datasets[47].data.push(0);
         }
        
         if(Port04_DARCGHADAVTemp[i13] !== undefined){
             Port04_DARCGHADAVTemp_fix[i13] = Port04_DARCGHADAVTemp[i13].slice(0,7);
         this.state.chartData30.datasets[48].data.push(Port04_DARCGHADAVTemp_fix[i13]);
         this.state.chartData30.datasets[48].backgroundColor.push('rgba(255,5,245,0.4');
         }
         else{
             this.state.chartData30.datasets[48].data.push(0);
         }
        
         if(Port04_DDDTemp[i13] !== undefined){
             Port04_DDDTemp_fix[i13] = Port04_DDDTemp[i13].slice(0,14);
         this.state.chartData30.datasets[49].data.push(Port04_DDDTemp_fix[i13]);
         this.state.chartData30.datasets[49].backgroundColor.push('rgba(222,55,244,0.4');
         }
         else{
             this.state.chartData30.datasets[49].data.push(0);
         }
        
         if(Port04_P1DIMMA1Temp[i13] !== undefined){
             Port04_P1DIMMA1Temp_fix[i13] = Port04_P1DIMMA1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[50].data.push(Port04_P1DIMMA1Temp_fix[i13]);
         this.state.chartData30.datasets[50].backgroundColor.push('rgba(249,22,200,0.4');
         }
         else{
             this.state.chartData30.datasets[50].data.push(0);
         }
        
         if(Port04_P1DIMMC1Temp[i13] !== undefined){
             Port04_P1DIMMC1Temp_fix[i13] = Port04_P1DIMMC1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[51].data.push(Port04_P1DIMMC1Temp_fix[i13]);
         this.state.chartData30.datasets[51].backgroundColor.push('rgba(202,81,195,0.4');
         }
         else{
             this.state.chartData30.datasets[51].data.push(0);
         }
        
         if(Port04_P2DIMME1Temp[i13] !== undefined){
             Port04_P2DIMME1Temp_fix[i13] = Port04_P2DIMME1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[52].data.push(Port04_P2DIMME1Temp_fix[i13]);
         this.state.chartData30.datasets[52].backgroundColor.push('rgba(219,55,202,0.4');
         }
         else{
             this.state.chartData30.datasets[52].data.push(0);
         }
        
         if(Port04_P2DIMMG1Temp[i13] !== undefined){
             Port04_P2DIMMG1Temp_fix[i13] = Port04_P2DIMMG1Temp[i13].slice(0,7);
         this.state.chartData30.datasets[53].data.push(Port04_P2DIMMG1Temp_fix[i13]);
         this.state.chartData30.datasets[53].backgroundColor.push('rgba(235,35,215,0.4');
         }
         else{
             this.state.chartData30.datasets[53].data.push(0);
         }
           parse[i13] = parseInt(date13[i13], 10);
           this.state.chartData30.labels.push(parse[i13]);
        }}

    if(Sourc_27_01_all!=null){
  for(var i=0;i<Sourc_27_01_all.length;i++){
   Dynm_1[i] = Sourc_27_01_all[i].slice(9, Sourc_27_01_all[i].length);
   Dynm_2[i] = Dynm_1[i].slice(0, 8);
   Dynm_3[i] = Dynm_1[i].slice(8,17);
   Dynm_4[i] = Dynm_1[i].slice(17,25);

   Dynm_1_2[i] = Sourc_27_02_all[i].slice(9, Sourc_27_01_all[i].length);
   Dynm_2_2[i] = Dynm_1_2[i].slice(0, 8);
   Dynm_3_2[i] = Dynm_1_2[i].slice(8,17);
   Dynm_4_2[i] = Dynm_1_2[i].slice(17,25);

   Dynm_1_3[i] = Port_27_01_all[i].slice(9, Port_27_01_all[i].length);
   Dynm_2_3[i] = Dynm_1_3[i].slice(0, 8);
   Dynm_3_3[i] = Dynm_1_3[i].slice(8,17);
   Dynm_4_3[i] = Dynm_1_3[i].slice(17,25);

   Dynm_1_4[i] = Port_27_02_all[i].slice(9, Port_27_02_all[i].length);
   Dynm_2_4[i] = Dynm_1_4[i].slice(0, 8);
   Dynm_3_4[i] = Dynm_1_4[i].slice(8,17);
   Dynm_4_4[i] = Dynm_1_4[i].slice(17,25);

   Dynm_1_5[i] = Port_27_03_all[i].slice(9, Port_27_03_all[i].length);
   Dynm_2_5[i] = Dynm_1_5[i].slice(0, 8);
   Dynm_3_5[i] = Dynm_1_5[i].slice(8,17);
   Dynm_4_5[i] = Dynm_1_5[i].slice(17,25);

   Dynm_1_6[i] = Port_27_04_all[i].slice(9, Port_27_04_all[i].length);
   Dynm_2_6[i] = Dynm_1_6[i].slice(0, 8);
   Dynm_3_6[i] = Dynm_1_6[i].slice(8,17);
   Dynm_4_6[i] = Dynm_1_6[i].slice(17,25);
   var g=[];

// logic for drops of Sourc_27_01 in case of K or M showing in a string
if(Dynm_3[i].includes("K")){
    g[i] = Dynm_3[i];
    Dynm_3[i] = Dynm_3[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3[i]))
    {
        Dynm_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_3[i].includes("M")){
    g[i] = Dynm_3[i];
    Dynm_3[i] = Dynm_3[i].match(/\d*.\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3[i]))
    {
        Dynm_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Sourc_27_01 in case of K or M showing in a string
if(Dynm_4[i].includes("K")){
    g[i] = Dynm_4[i];
    Dynm_4[i] = Dynm_4[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4[i]))
    {
        Dynm_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_4[i].includes("M")){
    g[i] = Dynm_4[i];
    Dynm_4[i] = Dynm_4[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4[i]))
    {
        Dynm_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

if(Dynm_2[i].includes("K")){
    g[i] = Dynm_2[i];
    Dynm_2[i] = Dynm_2[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2[i]))
    {
        Dynm_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_2[i].includes("M")){
    g[i] = Dynm_2[i];
    Dynm_2[i] = Dynm_2[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2[i]))
    {
        Dynm_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for drops of Sourc_27_02 in case of K or M showing in a string
if(Dynm_3_2[i].includes("K")){
    g[i] =Dynm_3_2[i];
   Dynm_3_2[i] =Dynm_3_2[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3_2[i]))
    {
       Dynm_3_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_3_2[i].includes("M")){
    g[i] =Dynm_3_2[i];
   Dynm_3_2[i] =Dynm_3_2[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3_2[i]))
    {
       Dynm_3_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Sourc_27_02 in case of K or M showing in a string
if(Dynm_4_2[i].includes("K")){
    g[i] = Dynm_4_2[i];
    Dynm_4_2[i] = Dynm_4_2[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4_2[i]))
    {
        Dynm_4_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_4_2[i].includes("M")){
    g[i] = Dynm_4_2[i];
    Dynm_4_2[i] = Dynm_4_2[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4_2[i]))
    {
        Dynm_4_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

if(Dynm_2_2[i].includes("K")){
    g[i] = Dynm_2_2[i];
    Dynm_2_2[i] = Dynm_2_2[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2_2[i]))
    {
        Dynm_2_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_2_2[i].includes("M")){
    g[i] = Dynm_2_2[i];
    Dynm_2_2[i] = Dynm_2_2[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2_2[i]))
    {
        Dynm_2_2[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }


// logic for drops of Port_27_01 in case of K or M showing in a string
if(Dynm_3_3[i].includes("K")){
    g[i] = Dynm_3_3[i];
    Dynm_3_3[i] = Dynm_3_3[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3_3[i]))
    {
        Dynm_3_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_3_3[i].includes("M")){
    g[i] = Dynm_3_3[i];
    Dynm_3_3[i] = Dynm_3_3[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3_3[i]))
    {
        Dynm_4_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Port_27_01 in case of K or M showing in a string
if(Dynm_4_3[i].includes("K")){
    g[i] = Dynm_4_3[i];
    Dynm_4_3[i] = Dynm_4_3[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4_3[i]))
    {
        Dynm_4_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_4_3[i].includes("M")){
    g[i] = Dynm_4_3[i];
    Dynm_4_3[i] = Dynm_4_3[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4_3[i]))
    {
        Dynm_4_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

if(Dynm_2_3[i].includes("K")){
    g[i] = Dynm_2_3[i];
    Dynm_2_3[i] = Dynm_2_3[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2_3[i]))
    {
        Dynm_2_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_2_3[i].includes("M")){
    g[i] = Dynm_2_3[i];
    Dynm_2_3[i] = Dynm_2_3[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2_3[i]))
    {
        Dynm_2_3[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }


// logic for drops of Port_27_02 in case of K or M showing in a string
if(Dynm_3_4[i].includes("K")){
    g[i] = Dynm_3_4[i];
    Dynm_3_4[i] = Dynm_3_4[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3_4[i]))
    {
        Dynm_3_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_3_4[i].includes("M")){
    g[i] = Dynm_3_4[i];
    Dynm_3_4[i] = Dynm_3_4[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3_4[i]))
    {
        Dynm_3_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Port_27_02 in case of K or M showing in a string
if(Dynm_4_4[i].includes("K")){
    g[i] = Dynm_4_4[i];
    Dynm_4_4[i] = Dynm_4_4[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4_4[i]))
    {
        Dynm_4_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_4_4[i].includes("M")){
    g[i] = Dynm_4_4[i];
    Dynm_4_4[i] = Dynm_4_4[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4_4[i]))
    {
        Dynm_4_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

    if(Dynm_2_4[i].includes("K")){
    g[i] = Dynm_2_4[i];
    Dynm_2_4[i] = Dynm_2_4[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2_4[i]))
    {
        Dynm_2_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
    else if(Dynm_2_4[i].includes("M")){
    g[i] = Dynm_2_4[i];
    Dynm_2_4[i] = Dynm_2_4[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2_4[i]))
    {
        Dynm_2_4[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for drops of Port_27_03 in case of K or M showing in a string
    if(Dynm_3_5[i].includes("K")){
    g[i] = Dynm_3_5[i];
    Dynm_3_5[i] = Dynm_3_5[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3_5[i]))
    {
        Dynm_3_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
    }
else if(Dynm_3_5[i].includes("M")){
    g[i] = Dynm_3_5[i];
    Dynm_3_5[i] = Dynm_3_5[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3_5[i]))
    {
        Dynm_3_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
    }

// logic for dropbytes of Port_27_03 in case of K or M showing in a string
if(Dynm_4_5[i].includes("K")){
    g[i] =Dynm_4_5[i];
   Dynm_4_5[i] =Dynm_4_5[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4_5[i]))
    {
       Dynm_4_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Dynm_4_5[i].includes("M")){
    g[i] =Dynm_4_5[i];
   Dynm_4_5[i] =Dynm_4_5[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4_5[i]))
    {
       Dynm_4_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

if(Dynm_2_5[i].includes("K")){
    g[i] = Dynm_2_5[i];
    Dynm_2_5[i] = Dynm_2_5[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2_5[i]))
    {
        Dynm_2_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Dynm_2_5[i].includes("M")){
    g[i] = Dynm_2_5[i];
    Dynm_2_5[i] = Dynm_2_5[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2_5[i]))
    {
        Dynm_2_5[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for drops of Port_27_04 in case of K or M showing in a string
if(Dynm_3_6[i].includes("K")){
    g[i] = Dynm_3_6[i];
    Dynm_3_6[i] = Dynm_3_6[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_3_6[i]))
    {
        Dynm_3_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Dynm_3_6[i].includes("M")){
    g[i] = Dynm_3_6[i];
    Dynm_3_6[i] = Dynm_3_6[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_3_6[i]))
    {
        Dynm_3_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

// logic for dropbytes of Port_27_04 in case of K or M showing in a string
   if(Dynm_4_6[i].includes("K")){
    g[i] = Dynm_4_6[i];
    Dynm_4_6[i] = Dynm_4_6[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_4_6[i]))
    {
        Dynm_4_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Dynm_4_6[i].includes("M")){
    g[i] = Dynm_4_6[i];
    Dynm_4_6[i] = Dynm_4_6[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_4_6[i]))
    {
        Dynm_4_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

   if(Dynm_2_6[i].includes("K")){
    g[i] = Dynm_2_6[i];
    Dynm_2_6[i] = Dynm_2_6[i].match(/(\d*.\d{1,2})/g) * 1000;
    if(Number.isNaN(Dynm_2_6[i]))
    {
        Dynm_2_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000;
    }
   }
   else if(Dynm_2_6[i].includes("M")){
    g[i] = Dynm_2_6[i];
    Dynm_2_6[i] = Dynm_2_6[i].match(/\d*\d{1,2}/g) * 1000000;
    if(Number.isNaN(Dynm_2_6[i]))
    {
        Dynm_2_6[i] = g[i].match(/\d*\.\d{1,2}/g) * 1000000;
    }
   }

   parse13[i] = parseInt(date[i], 10);
   this.state.chartData.labels.push(parse13[i]);
   this.state.chartData2.labels.push(parse13[i]);
   this.state.chartData3.labels.push(parse13[i]);
  
   this.state.chartData.datasets[0].data.push(Dynm_3[i]);
   this.state.chartData.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData.datasets[1].data.push(Dynm_3_2[i]);
   this.state.chartData.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData.datasets[2].data.push(Dynm_3_3[i]);
   this.state.chartData.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData.datasets[3].data.push(Dynm_3_4[i]);
   this.state.chartData.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData.datasets[4].data.push(Dynm_3_5[i]);
   this.state.chartData.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData.datasets[5].data.push(Dynm_3_6[i]);
   this.state.chartData.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');

   this.state.chartData2.datasets[0].data.push(Dynm_4[i]);
   this.state.chartData2.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData2.datasets[1].data.push(Dynm_4_2[i]);
   this.state.chartData2.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData2.datasets[2].data.push(Dynm_4_3[i]);
   this.state.chartData2.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData2.datasets[3].data.push(Dynm_4_4[i]);
   this.state.chartData2.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData2.datasets[4].data.push(Dynm_4_5[i]);
   this.state.chartData2.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData2.datasets[5].data.push(Dynm_4_6[i]);
   this.state.chartData2.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');

   this.state.chartData3.datasets[0].data.push(Dynm_2[i]);
   this.state.chartData3.datasets[0].backgroundColor.push('rgba(255,99,132,0.6');
   this.state.chartData3.datasets[1].data.push(Dynm_2_2[i]);
   this.state.chartData3.datasets[1].backgroundColor.push('rgba(155,250,32,0.6');
   this.state.chartData3.datasets[2].data.push(Dynm_2_3[i]);
   this.state.chartData3.datasets[2].backgroundColor.push('rgba(105,99,232,0.6');
   this.state.chartData3.datasets[3].data.push(Dynm_2_4[i]);
   this.state.chartData3.datasets[3].backgroundColor.push('rgba(54,49,42,0.6');
   this.state.chartData3.datasets[4].data.push(Dynm_2_5[i]);
   this.state.chartData3.datasets[4].backgroundColor.push('rgba(215,199,42,0.6');
   this.state.chartData3.datasets[5].data.push(Dynm_2_6[i]);
   this.state.chartData3.datasets[5].backgroundColor.push('rgba(125,29,112,0.6');
}}
    return(
        <div className="chart">
        <div className="chart">
           <div className="line" id="chart_drops"> <Line ref={(reference) => this.chartReference = reference }
                 data={this.state.chartData}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Cooler: Control CC ',
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
                     text: 'Cooler: BytesPS',
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
                     text: 'Cooler Rest',
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
           <div className="temp"> <Line
                 data={this.state.chartData30}
                 options={{
                     title: {
                     display: this.state.displayTitle,
                     text: 'Cooler Heat',
                     fontSize:25,

                        },
            legend:
                        {
                            display:this.state.displayLegend,
                            position:'bottom'
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