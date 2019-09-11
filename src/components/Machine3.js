import React, {Component} from 'react';
import {Bar , Line} from 'react-chartjs-2';
import myText3 from './CMU_10.27.3.28_RAM_USAGE_CmdMonitor';
import myText4 from './CMU_10.27.3.88_RAM_USAGE_CmdMonitor';
import myText5 from './CMU_10.27.3.112_RAM_USAGE_CmdMonitor';
import myText6 from './CMU_10.27.4.129_RAM_USAGE_CmdMonitor';
import myText7 from './CMU_10.27.6.217_RAM_USAGE_CmdMonitor';
import myText8 from './CMU_10.27.11.60_RAM_USAGE_CmdMonitor';
import myText9 from './CMU_10.27.13.72_RAM_USAGE_CmdMonitor';
import myText10 from './CMU_10.27.23.225_RAM_USAGE_CmdMonitor';
import myText3part1 from './CMU_10.27.3.28_CmdMonitor';
import myText4part1 from './CMU_10.27.3.88_CmdMonitor';
import myText5part1 from './CMU_10.27.3.112_CmdMonitor';
import myText6part1 from './CMU_10.27.4.129_CmdMonitor';
import myText7part1 from './CMU_10.27.6.217_CmdMonitor';
import myText8part1 from './CMU_10.27.11.60_CmdMonitor';
import myText9part1 from './CMU_10.27.13.72_CmdMonitor';
import myText10part1 from './CMU_10.27.23.225_CmdMonitor';
import myText3part2 from './CMU_INODES_10.27.3.28_CmdMonitor';
import myText4part2 from './CMU_INODES_10.27.3.88_CmdMonitor';
import myText5part2 from './CMU_INODES_10.27.3.112_CmdMonitor';
import myText6part2 from './CMU_INODES_10.27.4.129_CmdMonitor';
import myText7part2 from './CMU_INODES_10.27.6.217_CmdMonitor';
import myText8part2 from './CMU_INODES_10.27.11.60_CmdMonitor';
import myText9part2 from './CMU_INODES_10.27.13.72_CmdMonitor';
import myText10part2 from './CMU_INODES_10.27.23.225_CmdMonitor';
import myText3part3 from './CMU_10.27.3.28_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText5part3 from './CMU_10.27.3.112_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText6part3 from './CMU_10.27.4.129_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText7part3 from './CMU_10.27.6.217_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText8part3 from './CMU_10.27.11.60_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText9part3 from './CMU_10.27.13.72_DF_BOOTPART_USED_SPACE_CmdMonitor';
import myText10part3 from './CMU_10.27.23.225_DF_BOOTPART_USED_SPACE_CmdMonitor';
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

var myHTML4 = document.getElementById('ram4');
function getData4(){
    var myRequest = new Request(myText4);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML4.innerHTML=text;
  });
    });
  }
getData4();

var myHTML5 = document.getElementById('ram5');
function getData5(){
    var myRequest = new Request(myText5);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML5.innerHTML=text;
  });
    });
  }
getData5();

var myHTML6 = document.getElementById('ram6');
function getData6(){
    var myRequest = new Request(myText6);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML6.innerHTML=text;
  });
    });
  }
getData6();

var myHTML7 = document.getElementById('ram7');
function getData7(){
    var myRequest = new Request(myText7);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML7.innerHTML=text;
  });
    });
  }
getData7();

var myHTML8 = document.getElementById('ram8');
function getData8(){
    var myRequest = new Request(myText8);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML8.innerHTML=text;
  });
    });
  }
getData8();

var myHTML9 = document.getElementById('ram9');
function getData9(){
    var myRequest = new Request(myText9);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML9.innerHTML=text;
  });
    });
  }
getData9();

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

var myHTML11 = document.getElementById('CMU1');
function getData11(){
    var myRequest = new Request(myText3part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML11.innerHTML=text;
  });
    });
  }
getData11();

var myHTML12 = document.getElementById('CMU2');
function getData12(){
    var myRequest = new Request(myText4part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML12.innerHTML=text;
  });
    });
  }
getData12();

var myHTML13 = document.getElementById('CMU3');
function getData13(){
    var myRequest = new Request(myText5part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML13.innerHTML=text;
  });
    });
  }
getData13();

var myHTML14 = document.getElementById('CMU4');
function getData14(){
    var myRequest = new Request(myText6part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML14.innerHTML=text;
  });
    });
  }
getData14();

var myHTML15 = document.getElementById('CMU5');
function getData15(){
    var myRequest = new Request(myText7part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML15.innerHTML=text;
  });
    });
  }
getData15();

var myHTML16 = document.getElementById('CMU6');
function getData16(){
    var myRequest = new Request(myText8part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML16.innerHTML=text;
  });
    });
  }
getData16();

var myHTML17 = document.getElementById('CMU7');
function getData17(){
    var myRequest = new Request(myText9part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML17.innerHTML=text;
  });
    });
  }
getData17();

var myHTML18 = document.getElementById('CMU8');
function getData18(){
    var myRequest = new Request(myText10part1);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML18.innerHTML=text;
  });
    });
  }
getData18();

var myHTML19 = document.getElementById('CMUIN1');
function getData19(){
    var myRequest = new Request(myText3part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML19.innerHTML=text;
  });
    });
  }
getData19();

var myHTML20 = document.getElementById('CMUIN2');
function getData20(){
    var myRequest = new Request(myText4part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML20.innerHTML=text;
  });
    });
  }
getData20();

var myHTML21 = document.getElementById('CMUIN3');
function getData21(){
    var myRequest = new Request(myText5part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML21.innerHTML=text;
  });
    });
  }
getData21();

var myHTML22 = document.getElementById('CMUIN4');
function getData22(){
    var myRequest = new Request(myText6part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML22.innerHTML=text;
  });
    });
  }
getData22();

var myHTML23 = document.getElementById('CMUIN5');
function getData23(){
    var myRequest = new Request(myText7part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML23.innerHTML=text;
  });
    });
  }
getData23();

var myHTML24 = document.getElementById('CMUIN6');
function getData24(){
    var myRequest = new Request(myText8part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML24.innerHTML=text;
  });
    });
  }
getData24();

var myHTML25 = document.getElementById('CMUIN7');
function getData25(){
    var myRequest = new Request(myText9part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML25.innerHTML=text;
  });
    });
  }
getData25();

var myHTML26 = document.getElementById('CMUIN8');
function getData26(){
    var myRequest = new Request(myText10part2);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML26.innerHTML=text;
  });
    });
  }
getData26();

var myHTML27 = document.getElementById('CMUDF1');
function getData27(){
    var myRequest = new Request(myText3part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML27.innerHTML=text;
  });
    });
  }
getData27();

var myHTML28 = document.getElementById('CMUDF3');
function getData28(){
    var myRequest = new Request(myText5part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML28.innerHTML=text;
  });
    });
  }
getData28();

var myHTML29 = document.getElementById('CMUDF4');
function getData29(){
    var myRequest = new Request(myText6part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML29.innerHTML=text;
  });
    });
  }
getData29();

var myHTML30 = document.getElementById('CMUDF5');
function getData30(){
    var myRequest = new Request(myText7part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML30.innerHTML=text;
  });
    });
  }
getData30();

var myHTML31 = document.getElementById('CMUDF6');
function getData31(){
    var myRequest = new Request(myText8part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML31.innerHTML=text;
  });
    });
  }
getData31();

var myHTML32 = document.getElementById('CMUDF7');
function getData32(){
    var myRequest = new Request(myText9part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML32.innerHTML=text;
  });
    });
  }
getData32();

var myHTML33 = document.getElementById('CMUDF8');
function getData33(){
    var myRequest = new Request(myText10part3);
    fetch(myRequest).then(function(reponse){
  return reponse.text().then(function(text){
    myHTML33.innerHTML=text;
  });
    });
  }
getData33();

//this is where i get my log text

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
          document.getElementsByClassName("App")[0].style.height = "27600px";}
    }

    componentDidMount(){
    }
    
    componentWillUpdate(){    
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
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.chartData31.labels=[];
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.chartData32.labels=[];
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
    chartData4:{
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
  chartData44:{
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
    datasets:
        [{
            label:'RAM',
            data: [],
            backgroundColor:[],
        },
        ]
},
chartData55:{
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
chartData6:{
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
chartData66:{
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
chartData7:{
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
chartData77:{
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
chartData8:{
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
chartData88:{
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
chartData9:{
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
chartData99:{
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
chartData12:{
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
chartData13:{
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
chartData14:{
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
chartData15:{
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
chartData16:{
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
chartData17:{
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
chartData18:{
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
chartData19:{
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
chartData20:{
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
chartData21:{
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
chartData22:{
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
chartData23:{
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
chartData24:{
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
chartData25:{
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
chartData26:{
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
chartData28:{
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
chartData29:{
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
chartData30:{
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
chartData31:{
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
chartData32:{
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
      var regex_date3 = /(?<=Timestamp: )\d*/g;
      var regex_RAM3 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date3 = textoutput3.match(regex_date3);
      var ram3 = textoutput3.match(regex_RAM3);
      var ram_split3 = [];
      
      var myHTML4 = document.getElementById('ram4');
      var textoutput4 = myHTML4.innerHTML;
      var regex_date4 = /(?<=Timestamp: )\d*/g;
      var regex_RAM4 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date4 = textoutput4.match(regex_date4);
      var ram4 = textoutput4.match(regex_RAM4);
      var ram_split4 = [];

      var myHTML5 = document.getElementById('ram5');
      var textoutput5 = myHTML5.innerHTML;
      var regex_date5 = /(?<=Timestamp: )\d*/g;
      var regex_RAM5 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date5 = textoutput5.match(regex_date5);
      var ram5 = textoutput5.match(regex_RAM5);
      var ram_split5 = [];

      var myHTML6 = document.getElementById('ram6');
      var textoutput6 = myHTML6.innerHTML;
      var regex_date6 = /(?<=Timestamp: )\d*/g;
      var regex_RAM6 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date6 = textoutput6.match(regex_date6);
      var ram6 = textoutput6.match(regex_RAM6);
      var ram_split6 = [];

      var myHTML7 = document.getElementById('ram7');
      var textoutput7 = myHTML7.innerHTML;
      var regex_date7 = /(?<=Timestamp: )\d*/g;
      var regex_RAM7 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date7 = textoutput7.match(regex_date7);
      var ram7 = textoutput7.match(regex_RAM7);
      var ram_split7 = [];

      var myHTML8 = document.getElementById('ram8');
      var textoutput8 = myHTML8.innerHTML;
      var regex_date8 = /(?<=Timestamp: )\d*/g;
      var regex_RAM8 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date8 = textoutput8.match(regex_date8);
      var ram8 = textoutput8.match(regex_RAM8);
      var ram_split8 = [];

      var myHTML9 = document.getElementById('ram9');
      var textoutput9 = myHTML9.innerHTML;
      var regex_date9 = /(?<=Timestamp: )\d*/g;
      var regex_RAM9 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date9 = textoutput9.match(regex_date9);
      var ram9 = textoutput9.match(regex_RAM9);
      var ram_split9 = [];

      var myHTML10 = document.getElementById('ram10');
      var textoutput10 = myHTML10.innerHTML;
      var regex_date10 = /(?<=Timestamp: )\d*/g;
      var regex_RAM10 = /[\n\r][ \t]*1006\s[ \t]*([^\n\r]*)/g;
      var date10 = textoutput10.match(regex_date10);
      var ram10 = textoutput10.match(regex_RAM10);
      var ram_split10 = [];

      var myHTML11 = document.getElementById('CMU1');
      var textoutput11 = myHTML11.innerHTML;
      var regex_date11 = /(?<=Timestamp: )\d*/g;
      var date11 = textoutput11.match(regex_date11);
      var regex_percentage = /\d{1,3}[%]/g;
      var percentage = textoutput11.match(regex_percentage);
      var perc = [];

      var myHTML12 = document.getElementById('CMU2');
      var textoutput12 = myHTML12.innerHTML;
      var regex_date12 = /(?<=Timestamp: )\d*/g;
      var date12 = textoutput12.match(regex_date12);
      var regex_percentage2 = /\d{1,3}[%]/g;
      var percentage2 = textoutput12.match(regex_percentage2);
      var perc2 = [];

      var myHTML13 = document.getElementById('CMU3');
      var textoutput13 = myHTML13.innerHTML;
      var regex_date13 = /(?<=Timestamp: )\d*/g;
      var date13 = textoutput13.match(regex_date13);
      var regex_percentage3 = /\d{1,3}[%]/g;
      var percentage3 = textoutput13.match(regex_percentage3);
      var perc3 = [];

      var myHTML14 = document.getElementById('CMU4');
      var textoutput14 = myHTML14.innerHTML;
      var regex_date14 = /(?<=Timestamp: )\d*/g;
      var date14 = textoutput14.match(regex_date14);
      var regex_percentage4 = /\d{1,3}[%]/g;
      var percentage4 = textoutput14.match(regex_percentage4);
      var perc4 = [];

      var myHTML15 = document.getElementById('CMU5');
      var textoutput15 = myHTML15.innerHTML;
      var regex_date15 = /(?<=Timestamp: )\d*/g;
      var date15 = textoutput15.match(regex_date15);
      var regex_percentage5 = /\d{1,3}[%]/g;
      var percentage5 = textoutput15.match(regex_percentage5);
      var perc5 = [];

      var myHTML16 = document.getElementById('CMU6');
      var textoutput16 = myHTML16.innerHTML;
      var regex_date16 = /(?<=Timestamp: )\d*/g;
      var date16 = textoutput16.match(regex_date16);
      var regex_percentage6 = /\d{1,3}[%]/g;
      var percentage6 = textoutput16.match(regex_percentage6);
      var perc6 = [];

      var myHTML17 = document.getElementById('CMU7');
      var textoutput17 = myHTML17.innerHTML;
      var regex_date17 = /(?<=Timestamp: )\d*/g;
      var date17 = textoutput17.match(regex_date17);
      var regex_percentage7 = /\d{1,3}[%]/g;
      var percentage7 = textoutput17.match(regex_percentage7);
      var perc7 = [];

      var myHTML18 = document.getElementById('CMU8');
      var textoutput18 = myHTML18.innerHTML;
      var regex_date18 = /(?<=Timestamp: )\d*/g;
      var date18 = textoutput18.match(regex_date18);
      var regex_percentage8 = /\d{1,3}[%]/g;
      var percentage8 = textoutput18.match(regex_percentage8);
      var perc8 = [];

      var myHTML19 = document.getElementById('CMUIN1');
      var textoutput19 = myHTML19.innerHTML;
      var regex_date19 = /(?<=Timestamp: )\d*/g;
      var date19 = textoutput19.match(regex_date19);
      var regex_percentage9 = /\d{1,3}[%]/g;
      var percentage9 = textoutput19.match(regex_percentage9);
      var perc9 = [];

      var myHTML20 = document.getElementById('CMUIN2');
      var textoutput20 = myHTML20.innerHTML;
      var regex_date20 = /(?<=Timestamp: )\d*/g;
      var date20 = textoutput20.match(regex_date20);
      var regex_percentage10 = /\d{1,3}[%]/g;
      var percentage10 = textoutput20.match(regex_percentage10);
      var perc10 = [];

      var myHTML21 = document.getElementById('CMUIN3');
      var textoutput21 = myHTML21.innerHTML;
      var regex_date21 = /(?<=Timestamp: )\d*/g;
      var date21 = textoutput21.match(regex_date21);
      var regex_percentage11 = /\d{1,3}[%]/g;
      var percentage11 = textoutput21.match(regex_percentage11);
      var perc11 = [];

      var myHTML22 = document.getElementById('CMUIN4');
      var textoutput22 = myHTML22.innerHTML;
      var regex_date22 = /(?<=Timestamp: )\d*/g;
      var date22 = textoutput22.match(regex_date22);
      var regex_percentage12 = /\d{1,3}[%]/g;
      var percentage12 = textoutput22.match(regex_percentage12);
      var perc12 = [];
      
      var myHTML23 = document.getElementById('CMUIN5');
      var textoutput23 = myHTML23.innerHTML;
      var regex_date23 = /(?<=Timestamp: )\d*/g;
      var date23 = textoutput23.match(regex_date23);
      var regex_percentage13 = /\d{1,3}[%]/g;
      var percentage13 = textoutput23.match(regex_percentage13);
      var perc13 = [];

      var myHTML24 = document.getElementById('CMUIN6');
      var textoutput24 = myHTML24.innerHTML;
      var regex_date24 = /(?<=Timestamp: )\d*/g;
      var date24 = textoutput24.match(regex_date24);
      var regex_percentage14 = /\d{1,3}[%]/g;
      var percentage14 = textoutput24.match(regex_percentage14);
      var perc14 = [];

      var myHTML25 = document.getElementById('CMUIN7');
      var textoutput25 = myHTML25.innerHTML;
      var regex_date25 = /(?<=Timestamp: )\d*/g;
      var date25 = textoutput25.match(regex_date25);
      var regex_percentage15 = /\d{1,3}[%]/g;
      var percentage15 = textoutput25.match(regex_percentage15);
      var perc15 = [];
      
      var myHTML26 = document.getElementById('CMUIN8');
      var textoutput26 = myHTML26.innerHTML;
      var regex_date26 = /(?<=Timestamp: )\d*/g;
      var date26 = textoutput26.match(regex_date26);
      var regex_percentage16 = /\d{1,3}[%]/g;
      var percentage16 = textoutput26.match(regex_percentage16);
      var perc16 = [];

      var myHTML27 = document.getElementById('CMUDF1');
      var textoutput27 = myHTML27.innerHTML;
      var regex_date27 = /(?<=Timestamp: )\d*/g;
      var date27 = textoutput27.match(regex_date27);
      var regex_percentage17 = /\d{1,3}[%]/g;
      var percentage17 = textoutput27.match(regex_percentage17);
      var perc17 = [];

      var myHTML28 = document.getElementById('CMUDF3');
      var textoutput28 = myHTML28.innerHTML;
      var regex_date28 = /(?<=Timestamp: )\d*/g;
      var date28 = textoutput28.match(regex_date28);
      var regex_percentage18 = /\d{1,3}[%]/g;
      var percentage18 = textoutput28.match(regex_percentage18);
      var perc18 = [];

      var myHTML29 = document.getElementById('CMUDF4');
      var textoutput29 = myHTML29.innerHTML;
      var regex_date29 = /(?<=Timestamp: )\d*/g;
      var date29 = textoutput29.match(regex_date29);
      var regex_percentage19 = /\d{1,3}[%]/g;
      var percentage19 = textoutput29.match(regex_percentage19);
      var perc19 = [];

      var myHTML30 = document.getElementById('CMUDF5');
      var textoutput30 = myHTML30.innerHTML;
      var regex_date30 = /(?<=Timestamp: )\d*/g;
      var date30 = textoutput30.match(regex_date30);
      var regex_percentage20 = /\d{1,3}[%]/g;
      var percentage20 = textoutput30.match(regex_percentage20);
      var perc20 = [];

      var myHTML31 = document.getElementById('CMUDF6');
      var textoutput31 = myHTML31.innerHTML;
      var regex_date31 = /(?<=Timestamp: )\d*/g;
      var date31 = textoutput31.match(regex_date31);
      var regex_percentage21 = /\d{1,3}[%]/g;
      var percentage21 = textoutput31.match(regex_percentage21);
      var perc21 = [];

      var myHTML32 = document.getElementById('CMUDF7');
      var textoutput32 = myHTML32.innerHTML;
      var regex_date32 = /(?<=Timestamp: )\d*/g;
      var date32 = textoutput32.match(regex_date32);
      var regex_percentage22 = /\d{1,3}[%]/g;
      var percentage22 = textoutput32.match(regex_percentage22);
      var perc22 = [];

      var myHTML33 = document.getElementById('CMUDF8');
      var textoutput33 = myHTML33.innerHTML;
      var regex_date33 = /(?<=Timestamp: )\d*/g;
      var date33 = textoutput33.match(regex_date33);
      var regex_percentage23 = /\d{1,3}[%]/g;
      var percentage23 = textoutput33.match(regex_percentage23);
      var perc23 = [];

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
      var parse15 = [];
      var parse16 = [];
      var parse17 = [];
      var parse18 = [];
      var parse19 = [];
      var parse20 = [];
      var parse21 = [];
      var parse22 = [];
      var parse23 = [];
      var parse24 = [];
      var parse25 = [];
      var parse26 = [];
      var parse27 = [];
      var parse28 = [];
      var parse29 = [];
      var parse30 = [];
      var parse31 = [];

      function HideGraph(){
        if(document.getElementsByClassName("bar")[0].style.display == "none"){
          document.getElementsByClassName("bar")[0].style.display = "block";
          document.getElementsByClassName("bar")[1].style.display = "block";
          document.getElementsByClassName("bar")[3].style.display = "block";
          document.getElementsByClassName("bar")[4].style.display = "block";
          document.getElementsByClassName("bar")[5].style.display = "block";
          document.getElementsByClassName("bar")[6].style.display = "block";
          document.getElementsByClassName("bar")[7].style.display = "block";
          document.getElementsByClassName("bar")[8].style.display = "block";
          document.getElementsByClassName("bar")[9].style.display = "block";
          document.getElementsByClassName("bar")[10].style.display = "block";
          document.getElementsByClassName("bar")[11].style.display = "block";
          document.getElementsByClassName("bar")[12].style.display = "block";
          document.getElementsByClassName("bar")[13].style.display = "block";
          document.getElementsByClassName("bar")[14].style.display = "block";
          document.getElementsByClassName("bar")[15].style.display = "block";
          document.getElementsByClassName("chart")[1].style.marginTop = "30px";
          document.getElementsByClassName("chart")[2].style.marginTop = "30px";
          document.getElementsByClassName("chart")[3].style.marginTop = "30px";
          document.getElementsByClassName("chart")[4].style.marginTop = "30px";
          document.getElementsByClassName("chart")[5].style.marginTop = "30px";
          document.getElementsByClassName("chart")[6].style.marginTop = "30px";
          document.getElementsByClassName("chart")[7].style.marginTop = "30px";
          document.getElementsByClassName("chart")[8].style.marginTop = "30px";
          document.getElementsByClassName("chart")[9].style.marginTop = "30px";
          document.getElementsByClassName("chart")[10].style.marginTop = "30px";
          document.getElementsByClassName("chart")[11].style.marginTop = "30px";
          document.getElementsByClassName("chart")[12].style.marginTop = "30px";
          document.getElementsByClassName("chart")[13].style.marginTop = "30px";
          document.getElementsByClassName("chart")[14].style.marginTop = "30px";
          document.getElementsByClassName("chart")[15].style.marginTop = "30px";
          document.getElementsByClassName("chart")[16].style.marginTop = "30px";
          document.getElementById("ClickMe1").innerHTML="Hide RAM";}
        else{
          document.getElementsByClassName("bar")[0].style.display = "none";
          document.getElementsByClassName("bar")[1].style.display = "none";
          document.getElementsByClassName("bar")[2].style.display = "none";
          document.getElementsByClassName("bar")[3].style.display = "none";
          document.getElementsByClassName("bar")[4].style.display = "none";
          document.getElementsByClassName("bar")[5].style.display = "none";
          document.getElementsByClassName("bar")[6].style.display = "none";
          document.getElementsByClassName("bar")[7].style.display = "none";
          document.getElementsByClassName("bar")[8].style.display = "none";
          document.getElementsByClassName("bar")[9].style.display = "none";
          document.getElementsByClassName("bar")[10].style.display = "none";
          document.getElementsByClassName("bar")[11].style.display = "none";
          document.getElementsByClassName("bar")[12].style.display = "none";
          document.getElementsByClassName("bar")[13].style.display = "none";
          document.getElementsByClassName("bar")[14].style.display = "none";
          document.getElementsByClassName("bar")[15].style.display = "none";
          document.getElementsByClassName("chart")[1].style.marginTop = "0px";
          document.getElementsByClassName("chart")[2].style.marginTop = "0px";
          document.getElementsByClassName("chart")[3].style.marginTop = "0px";
          document.getElementsByClassName("chart")[4].style.marginTop = "0px";
          document.getElementsByClassName("chart")[5].style.marginTop = "0px";
          document.getElementsByClassName("chart")[6].style.marginTop = "0px";
          document.getElementsByClassName("chart")[7].style.marginTop = "0px";
          document.getElementsByClassName("chart")[8].style.marginTop = "0px";
          document.getElementsByClassName("chart")[9].style.marginTop = "0px";
          document.getElementsByClassName("chart")[10].style.marginTop = "0px";
          document.getElementsByClassName("chart")[11].style.marginTop = "0px";
          document.getElementsByClassName("chart")[12].style.marginTop = "0px";
          document.getElementsByClassName("chart")[13].style.marginTop = "0px";
          document.getElementsByClassName("chart")[14].style.marginTop = "0px";
          document.getElementsByClassName("chart")[15].style.marginTop = "0px";
          document.getElementsByClassName("chart")[16].style.marginTop = "0px";
          document.getElementById("ClickMe1").innerHTML="Show RAM";
        }
      }
    
      function HideGraph2(){
        if(document.getElementsByClassName("line")[0].style.display == "none"){
          document.getElementsByClassName("line")[0].style.display = "block";
          document.getElementsByClassName("line")[1].style.display = "block";
          document.getElementsByClassName("line")[2].style.display = "block";
          document.getElementsByClassName("line")[3].style.display = "block";
          document.getElementsByClassName("line")[4].style.display = "block";
          document.getElementsByClassName("line")[5].style.display = "block";
          document.getElementsByClassName("line")[6].style.display = "block";
          document.getElementsByClassName("line")[7].style.display = "block";
          document.getElementsByClassName("chart")[17].style.marginTop = "30px";
          document.getElementsByClassName("chart")[18].style.marginTop = "30px";
          document.getElementsByClassName("chart")[19].style.marginTop = "30px";
          document.getElementsByClassName("chart")[20].style.marginTop = "30px";
          document.getElementsByClassName("chart")[21].style.marginTop = "30px";
          document.getElementsByClassName("chart")[22].style.marginTop = "30px";
          document.getElementsByClassName("chart")[23].style.marginTop = "30px";
          document.getElementsByClassName("chart")[24].style.marginTop = "30px";
          document.getElementById("ClickMe2").innerHTML="Hide Ports";}
        else{
          document.getElementsByClassName("line")[0].style.display = "none";
          document.getElementsByClassName("line")[1].style.display = "none";
          document.getElementsByClassName("line")[2].style.display = "none";
          document.getElementsByClassName("line")[3].style.display = "none";
          document.getElementsByClassName("line")[4].style.display = "none";
          document.getElementsByClassName("line")[5].style.display = "none";
          document.getElementsByClassName("line")[6].style.display = "none";
          document.getElementsByClassName("line")[7].style.display = "none";
          document.getElementsByClassName("chart")[17].style.marginTop = "0px";
          document.getElementsByClassName("chart")[18].style.marginTop = "0px";
          document.getElementsByClassName("chart")[19].style.marginTop = "0px";
          document.getElementsByClassName("chart")[20].style.marginTop = "0px";
          document.getElementsByClassName("chart")[21].style.marginTop = "0px";
          document.getElementsByClassName("chart")[22].style.marginTop = "0px";
          document.getElementsByClassName("chart")[23].style.marginTop = "0px";
          document.getElementsByClassName("chart")[24].style.marginTop = "0px";
          document.getElementById("ClickMe2").innerHTML="Show Ports";
        }
      }
    
      function HideGraph3(){
        if(document.getElementsByClassName("line")[8].style.display == "none"){
          document.getElementsByClassName("line")[8].style.display = "block";
          document.getElementsByClassName("line")[9].style.display = "block";
          document.getElementsByClassName("line")[10].style.display = "block";
          document.getElementsByClassName("line")[11].style.display = "block";
          document.getElementsByClassName("line")[12].style.display = "block";
          document.getElementsByClassName("line")[13].style.display = "block";
          document.getElementsByClassName("line")[14].style.display = "block";
          document.getElementsByClassName("line")[15].style.display = "block";
          document.getElementsByClassName("chart")[25].style.marginTop = "30px";
          document.getElementsByClassName("chart")[26].style.marginTop = "30px";
          document.getElementsByClassName("chart")[27].style.marginTop = "30px";
          document.getElementsByClassName("chart")[28].style.marginTop = "30px";
          document.getElementsByClassName("chart")[29].style.marginTop = "30px";
          document.getElementsByClassName("chart")[30].style.marginTop = "30px";
          document.getElementsByClassName("chart")[31].style.marginTop = "30px";
          document.getElementsByClassName("chart")[32].style.marginTop = "30px";
        document.getElementById("ClickMe3").innerHTML="Hide inodes";}
        else{
          document.getElementsByClassName("line")[8].style.display = "none";
          document.getElementsByClassName("line")[9].style.display = "none";
          document.getElementsByClassName("line")[10].style.display = "none";
          document.getElementsByClassName("line")[11].style.display = "none";
          document.getElementsByClassName("line")[12].style.display = "none";
          document.getElementsByClassName("line")[13].style.display = "none";
          document.getElementsByClassName("line")[14].style.display = "none";
          document.getElementsByClassName("line")[15].style.display = "none";
          document.getElementsByClassName("chart")[25].style.marginTop = "0px";
          document.getElementsByClassName("chart")[26].style.marginTop = "0px";
          document.getElementsByClassName("chart")[27].style.marginTop = "0px";
          document.getElementsByClassName("chart")[28].style.marginTop = "0px";
          document.getElementsByClassName("chart")[29].style.marginTop = "0px";
          document.getElementsByClassName("chart")[30].style.marginTop = "0px";
          document.getElementsByClassName("chart")[31].style.marginTop = "0px";
          document.getElementsByClassName("chart")[32].style.marginTop = "0px";
          document.getElementById("ClickMe3").innerHTML="Show inodes";}
      }

      function HideGraph4(){
        if(document.getElementsByClassName("line")[16].style.display == "none"){
          document.getElementsByClassName("line")[16].style.display = "block";
          document.getElementsByClassName("line")[17].style.display = "block";
          document.getElementsByClassName("line")[18].style.display = "block";
          document.getElementsByClassName("line")[19].style.display = "block";
          document.getElementsByClassName("line")[20].style.display = "block";
          document.getElementsByClassName("line")[21].style.display = "block";
          document.getElementsByClassName("line")[22].style.display = "block";
          document.getElementsByClassName("chart")[33].style.marginTop = "30px";
          document.getElementsByClassName("chart")[34].style.marginTop = "30px";
          document.getElementsByClassName("chart")[35].style.marginTop = "30px";
          document.getElementsByClassName("chart")[36].style.marginTop = "30px";
          document.getElementsByClassName("chart")[37].style.marginTop = "30px";
          document.getElementsByClassName("chart")[38].style.marginTop = "30px";
          document.getElementsByClassName("chart")[39].style.marginTop = "30px";
        document.getElementById("ClickMe4").innerHTML="Hide DF";}
        else{
          document.getElementsByClassName("line")[16].style.display = "none";
          document.getElementsByClassName("line")[17].style.display = "none";
          document.getElementsByClassName("line")[18].style.display = "none";
          document.getElementsByClassName("line")[19].style.display = "none";
          document.getElementsByClassName("line")[20].style.display = "none";
          document.getElementsByClassName("line")[21].style.display = "none";
          document.getElementsByClassName("line")[22].style.display = "none";
          document.getElementsByClassName("chart")[33].style.marginTop = "0px";
          document.getElementsByClassName("chart")[34].style.marginTop = "0px";
          document.getElementsByClassName("chart")[35].style.marginTop = "0px";
          document.getElementsByClassName("chart")[36].style.marginTop = "0px";
          document.getElementsByClassName("chart")[37].style.marginTop = "0px";
          document.getElementsByClassName("chart")[38].style.marginTop = "0px";
          document.getElementsByClassName("chart")[39].style.marginTop = "0px";
          document.getElementById("ClickMe4").innerHTML="Show DF";}
      }

    if(ram3!=null){
      for(var i3=0;i3<ram3.length;i3++){
        ram_split3[i3] = ram3[i3].slice(5,ram3[i3].length);
        parse[i3] = parseInt(date3[i3], 10);
        this.state.chartData3.labels.push(parse[i3]);
        this.state.chartData333.labels.push(parse[i3]);
        this.state.chartData3.datasets[0].data.push(ram_split3[i3]);
        this.state.chartData3.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData333.datasets[0].data.push(ram_split3[i3]/1006*100);
        this.state.chartData333.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram4!=null){
      for(var i4=0;i4<ram4.length;i4++){
        ram_split4[i4] = ram4[i4].slice(5,ram4[i4].length);
        parse2[i4] = parseInt(date4[i4], 10);
        this.state.chartData4.labels.push(parse2[i4]);
        this.state.chartData44.labels.push(parse2[i4]);
        this.state.chartData4.datasets[0].data.push(ram_split4[i4]);
        this.state.chartData4.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData44.datasets[0].data.push(ram_split4[i4]/1006*100);
        this.state.chartData44.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram5!=null){
      for(var i5=0;i5<ram5.length;i5++){
        ram_split5[i5] = ram5[i5].slice(5,ram5[i5].length);
        parse3[i5] = parseInt(date5[i5], 10);
        this.state.chartData5.labels.push(parse3[i5]);
        this.state.chartData55.labels.push(parse3[i5]);
        this.state.chartData5.datasets[0].data.push(ram_split5[i5]);
        this.state.chartData5.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData55.datasets[0].data.push(ram_split5[i5]/1006*100);
        this.state.chartData55.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram6!=null){
      for(var i6=0;i6<ram6.length;i6++){
        ram_split6[i6] = ram6[i6].slice(5,ram6[i6].length);
        parse4[i6] = parseInt(date6[i6], 10);
        this.state.chartData6.labels.push(parse4[i6]);
        this.state.chartData66.labels.push(parse4[i6]);
        this.state.chartData6.datasets[0].data.push(ram_split6[i6]);
        this.state.chartData6.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData66.datasets[0].data.push(ram_split6[i6]/1006*100);
        this.state.chartData66.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram7!=null){
      for(var i7=0;i7<ram7.length;i7++){
        ram_split7[i7] = ram7[i7].slice(5,ram7[i7].length);
        parse5[i7] = parseInt(date7[i7], 10);
        this.state.chartData7.labels.push(parse5[i7]);
        this.state.chartData77.labels.push(parse5[i7]);
        this.state.chartData7.datasets[0].data.push(ram_split7[i7]);
        this.state.chartData7.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData77.datasets[0].data.push(ram_split7[i7]/1006*100);
        this.state.chartData77.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram8!=null){
      for(var i8=0;i8<ram8.length;i8++){
        ram_split8[i8] = ram8[i8].slice(5,ram8[i8].length);
        parse6[i8] = parseInt(date8[i8], 10);
        this.state.chartData8.labels.push(parse6[i8]);
        this.state.chartData88.labels.push(parse6[i8]);
        this.state.chartData8.datasets[0].data.push(ram_split8[i8]);
        this.state.chartData8.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData88.datasets[0].data.push(ram_split8[i8]/1006*100);
        this.state.chartData88.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram9!=null){
      for(var i9=0;i9<ram9.length;i9++){
        ram_split9[i9] = ram9[i9].slice(5,ram9[i9].length);
        parse7[i9] = parseInt(date9[i9], 10);
        this.state.chartData9.labels.push(parse7[i9]);
        this.state.chartData99.labels.push(parse7[i9]);
        this.state.chartData9.datasets[0].data.push(ram_split9[i9]);
        this.state.chartData9.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData99.datasets[0].data.push(ram_split9[i9]/1006*100);
        this.state.chartData99.datasets[0].backgroundColor.push('rgba(215,159,112,0.8');
      }}

    if(ram10!=null){
      for(var i10=0;i10<ram10.length;i10++){
        ram_split10[i10] = ram10[i10].slice(5,ram10[i10].length);
        parse8[i10] = parseInt(date10[i10], 10);
        this.state.chartData10.labels.push(parse8[i10]);
        this.state.chartData100.labels.push(parse8[i10]);
        this.state.chartData10.datasets[0].data.push(ram_split10[i10]);
        this.state.chartData10.datasets[0].backgroundColor.push('rgba(189,55,22,0.8');
        this.state.chartData100.datasets[0].data.push(ram_split10[i10]/1006*100);
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

    if(date12!=null){
      for(var i12=0;i12<date12.length;i12++){
      parse10[i12] = parseInt(date12[i12], 10);  
      this.state.chartData12.labels.push(parse10[i12]);
      var regex_2 = /\d{1,3}/g;
      perc2[i12] = percentage2[i12].match(regex_2);
      this.state.chartData12.datasets[0].data.push(perc2[i12]);
      this.state.chartData12.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date13!=null){
      for(var i13=0;i13<date13.length;i13++){
      parse11[i13] = parseInt(date13[i13], 10); 
      this.state.chartData13.labels.push(parse11[i13]);
      var regex_3 = /\d{1,3}/g;
      perc3[i13] = percentage3[i13].match(regex_3);
        this.state.chartData13.datasets[0].data.push(perc3[i13]);
        this.state.chartData13.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date14!=null){
      for(var i14=0;i14<date14.length;i14++){
      parse12[i14] = parseInt(date14[i14], 10); 
      this.state.chartData14.labels.push(parse12[i14]);
      var regex_4 = /\d{1,3}/g;
      perc4[i14] = percentage4[i14].match(regex_4);
      this.state.chartData14.datasets[0].data.push(perc4[i14]);
      this.state.chartData14.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date15!=null){
      for(var i15=0;i15<date15.length;i15++){
      parse13[i15] = parseInt(date15[i15], 10);   
      this.state.chartData15.labels.push(parse13[i15]);
      var regex_5 = /\d{1,3}/g;
      perc5[i15] = percentage5[i15].match(regex_5);
      this.state.chartData15.datasets[0].data.push(perc5[i15]);
      this.state.chartData15.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date16!=null){
      for(var i16=0;i16<date16.length;i16++){
      parse14[i16] = parseInt(date16[i16], 10);  
      this.state.chartData16.labels.push(parse14[i16]);
      var regex_6 = /\d{1,3}/g;
      perc6[i16] = percentage6[i16].match(regex_6);
      this.state.chartData16.datasets[0].data.push(perc6[i16]);
      this.state.chartData16.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date17!=null){
      for(var i17=0;i17<date17.length;i17++){
      parse15[i17] = parseInt(date17[i17], 10); 
      this.state.chartData17.labels.push(parse15[i17]);
      var regex_7 = /\d{1,3}/g;
      perc7[i17] = percentage7[i17].match(regex_7);
      this.state.chartData17.datasets[0].data.push(perc7[i17]);
      this.state.chartData17.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date18!=null){
      for(var i18=0;i18<date18.length;i18++){
      parse16[i18] = parseInt(date18[i18], 10); 
      this.state.chartData18.labels.push(parse16[i18]);
      var regex_8 = /\d{1,3}/g;
      perc8[i18] = percentage8[i18].match(regex_8);
      this.state.chartData18.datasets[0].data.push(perc8[i18]);
      this.state.chartData18.datasets[0].backgroundColor.push('rgba(20,155,252,0.8');
      }}

    if(date19!=null){
      for(var i19=0;i19<date19.length;i19++){
      parse17[i19] = parseInt(date19[i19], 10); 
      this.state.chartData19.labels.push(parse17[i19]);
      var regex_9 = /\d{1,3}/g;
      perc9[i19] = percentage9[i19].match(regex_9);
      this.state.chartData19.datasets[0].data.push(perc9[i19]);
      this.state.chartData19.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date20!=null){
      for(var i20=0;i20<date20.length;i20++){
      parse18[i20] = parseInt(date20[i20], 10); 
      this.state.chartData20.labels.push(parse18[i20]);
      var regex_10 = /\d{1,3}/g;
      perc10[i20] = percentage10[i20].match(regex_10);
      this.state.chartData20.datasets[0].data.push(perc10[i20]);
      this.state.chartData20.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date21!=null){
      for(var i21=0;i21<date21.length;i21++){
      parse19[i21] = parseInt(date21[i21], 10); 
      this.state.chartData21.labels.push(parse19[i21]);
      var regex_11 = /\d{1,3}/g;
      perc11[i21] = percentage11[i21].match(regex_11);
      this.state.chartData21.datasets[0].data.push(perc11[i21]);
      this.state.chartData21.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date22!=null){
      for(var i22=0;i22<date22.length;i22++){
      parse20[i22] = parseInt(date22[i22], 10);
      this.state.chartData22.labels.push(parse20[i22]);
      var regex_12 = /\d{1,3}/g;
      perc12[i22] = percentage12[i22].match(regex_12);
      this.state.chartData22.datasets[0].data.push(perc12[i22]);
      this.state.chartData22.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date23!=null){
      for(var i23=0;i23<date23.length;i23++){
      parse21[i23] = parseInt(date23[i23], 10);
      this.state.chartData23.labels.push(parse21[i23]);
      var regex_13 = /\d{1,3}/g;
      perc13[i23] = percentage13[i23].match(regex_13);
      this.state.chartData23.datasets[0].data.push(perc13[i23]);
      this.state.chartData23.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date24!=null){
      for(var i24=0;i24<date24.length;i24++){
      parse22[i24] = parseInt(date24[i24], 10);  
      this.state.chartData24.labels.push(parse22[i24]);
      var regex_14 = /\d{1,3}/g;
      perc14[i24] = percentage14[i24].match(regex_14);
      this.state.chartData24.datasets[0].data.push(perc14[i24]);
      this.state.chartData24.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date25!=null){
      for(var i25=0;i25<date25.length;i25++){
      parse23[i25] = parseInt(date25[i25], 10);
      this.state.chartData25.labels.push(parse23[i25]);
      var regex_15 = /\d{1,3}/g;
      perc15[i25] = percentage15[i25].match(regex_15);
      this.state.chartData25.datasets[0].data.push(perc15[i25]);
      this.state.chartData25.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
      }}

    if(date26!=null){
      for(var i26=0;i26<date26.length;i26++){
      parse24[i26] = parseInt(date26[i26], 10);  
      this.state.chartData26.labels.push(parse24[i26]);
      var regex_16 = /\d{1,3}/g;
      perc16[i26] = percentage16[i26].match(regex_16);
      this.state.chartData26.datasets[0].data.push(perc16[i26]);
      this.state.chartData26.datasets[0].backgroundColor.push('rgba(225,155,72,0.8');
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

    if(date28!=null){
      for(var i28=0;i28<date28.length;i28++){
      parse26[i28] = parseInt(date28[i28], 10);
      this.state.chartData28.labels.push(parse26[i28]);
      var regex_18 = /\d{1,3}/g;
      perc18[i28] = percentage18[i28].match(regex_18);
      this.state.chartData28.datasets[0].data.push(perc18[i28]);
      this.state.chartData28.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}

    if(date29!=null){
      for(var i29=0;i29<date29.length;i29++){
      parse27[i29] = parseInt(date29[i29], 10);
      this.state.chartData29.labels.push(parse27[i29]);
      var regex_19 = /\d{1,3}/g;
      perc19[i29] = percentage19[i29].match(regex_19);
        this.state.chartData29.datasets[0].data.push(perc19[i29]);
        this.state.chartData29.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}

    if(date30!=null){
      for(var i30=0;i30<date30.length;i30++){
      parse28[i30] = parseInt(date30[i30], 10);
      this.state.chartData30.labels.push(parse28[i30]);
      var regex_20 = /\d{1,3}/g;
      perc20[i30] = percentage20[i30].match(regex_20);
      this.state.chartData30.datasets[0].data.push(perc20[i30]);
      this.state.chartData30.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}

    if(date31!=null){
      for(var i31=0;i31<date31.length;i31++){
      parse29[i31] = parseInt(date31[i31], 10);
      this.state.chartData31.labels.push(parse29[i31]);
      var regex_21 = /\d{1,3}/g;
      perc21[i31] = percentage21[i31].match(regex_21);
      this.state.chartData31.datasets[0].data.push(perc21[i31]);
      this.state.chartData31.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}

    if(date32!=null){
      for(var i32=0;i32<date32.length;i32++){
      parse30[i32] = parseInt(date32[i32], 10);
      this.state.chartData32.labels.push(parse30[i32]);
      var regex_22 = /\d{1,3}/g;
      perc22[i32] = percentage22[i32].match(regex_22);
      this.state.chartData32.datasets[0].data.push(perc22[i32]);
      this.state.chartData32.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}

    if(date33!=null){
      for(var i33=0;i33<date33.length;i33++){
      parse31[i33] = parseInt(date33[i33], 10);
      this.state.chartData33.labels.push(parse31[i33]);
      var regex_23 = /\d{1,3}/g;
      perc23[i33] = percentage23[i33].match(regex_23);
      this.state.chartData33.datasets[0].data.push(perc23[i33]);
      this.state.chartData33.datasets[0].backgroundColor.push('rgba(172,77,155,0.8');
      }}
        
        return(
               <div className="chart">
               <div id="showMenu">
               <button id="ClickMe1" onClick={HideGraph}>Hide RAM</button>
               <button id="ClickMe2" onClick={HideGraph2}>Hide Ports</button>
               <button id="ClickMe3" onClick={HideGraph3}>Hide inodes</button>
               <button id="ClickMe4" onClick={HideGraph4}>Hide DF</button>
               </div>
               <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData3}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.28: ' + this.state.location,
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
                         text: 'CMU_10.27.3.28: %' + this.state.location,
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
                     data={this.state.chartData4}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.88: ' + this.state.location,
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
                     data={this.state.chartData44}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.88: %' + this.state.location,
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0, max:100,
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
                     data={this.state.chartData5}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.112: ' + this.state.location,
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
                          animationEnabled: true}}/>
            </div></div>
            <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData55}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.112: %' + this.state.location,
                         fontSize:25,},
                legend:{display:this.state.displayLegend,
                        position:this.state.legendPosition},
                scales: {
                  xAxes: [{
                    type: 'time',
                    displayFormats: {unit: 'second'},
                    distribution: 'linear',
                    scaleLabel: {display: true, labelString: "time"}}],
                    yAxes: [{ticks:{beginAtZero:true , min: 0, max:100,
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
                  animationEnabled: true}}/>
            </div></div>
            <div className="chart">
               <div className="bar"> <Bar
                     data={this.state.chartData6}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.4.129: ' + this.state.location,
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
                     data={this.state.chartData66}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.4.129: %' + this.state.location,
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
                     data={this.state.chartData7}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.6.217: ' + this.state.location,
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
                     data={this.state.chartData77}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.6.217: %' + this.state.location,
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
               <div className="bar"> <Bar
                     data={this.state.chartData8}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.11.60: ' + this.state.location,
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
                     data={this.state.chartData88}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.11.60: %' + this.state.location,
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
               <div className="bar"> <Bar
                     data={this.state.chartData9}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.13.72: ' + this.state.location,
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
                     data={this.state.chartData99}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.13.72: %' + this.state.location,
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
               <div className="bar"> <Bar
                     data={this.state.chartData10}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.23.225: ' + this.state.location,
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
                         text: 'CMU_10.27.23.225: %' + this.state.location,
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
                         text: 'CMU_10.27.3.28: Cmd',
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
                     data={this.state.chartData12}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.88: Cmd',
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
                     data={this.state.chartData13}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.112: Cmd',
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
                     data={this.state.chartData14}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.4.129: Cmd',
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
                     data={this.state.chartData15}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.6.217: Cmd',
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
                     data={this.state.chartData16}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.11.60: Cmd',
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
                     data={this.state.chartData17}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.13.72: Cmd',
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
                     data={this.state.chartData18}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.23.225: Cmd',
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
                     data={this.state.chartData19}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.3.28: Cmd',
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
                     data={this.state.chartData20}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.3.88: Cmd',
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
                     data={this.state.chartData21}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.3.112: Cmd',
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
                     data={this.state.chartData22}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.4.129: Cmd',
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
                     data={this.state.chartData23}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.6.217: Cmd',
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
                     data={this.state.chartData24}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.11.60: Cmd',
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
                     data={this.state.chartData25}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.13.72: Cmd',
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
                     data={this.state.chartData26}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_INODES_10.27.23.225: Cmd',
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
                         text: 'CMU_10.27.3.28_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData28}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.3.112_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData29}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.4.129_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData30}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.6.217_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData31}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.11.60_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData32}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.13.72_DF_BOOTPART_USED_SPACE',
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
                     data={this.state.chartData33}
                     options={{
                         title: {
                         display: this.state.displayTitle,
                         text: 'CMU_10.27.23.225_DF_BOOTPART_USED_SPACE',
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