var options = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: 'sales',
        color:'var(--text-primary)',
        data: [70, 50, 46, 60, 89, 60, 70, 91, 78]
    }],
    chart: {
     type: 'bar',
     height: 200
   }, 
   responsive: [
     {
         breakpoint: 2000,
         options: {
           chart: {
             height: 340,
             width: 510
           }
         }
       },
     {
         breakpoint: 1600,
         options: {
           chart: {
             height: 310,
             width: 410
           }
         }
       },
     {
       breakpoint: 1400,
       options: {
         chart: {
           height: 250,
           width: 330
         }
       }
     }, {
         breakpoint: 1232,
         options: {
           chart: {
             height: 235,
             width: 330
           }
         }
       },{
         breakpoint: 992,
         options: {
           chart: {
             height: 265,
             width: 420
           }
         }
       },{
         breakpoint: 900,
         options: {
           chart: {
             height: 255,
             width: 400
           }
         }
       },{
         breakpoint: 800,
         options: {
           chart: {
             height: 255,
             width: 370
           }
         }
       },{
         breakpoint: 768,
         options: {
           chart: {
             height: 255,
             width: 400
           }
         }
       },{
         breakpoint: 700,
         options: {
           chart: {
             height: 265,
             width: 320
           }
         }
       },{
         breakpoint: 600,
         options: {
           chart: {
             height: 265,
             width: 290
           }
         }
       },{
         breakpoint: 530,
         options: {
           chart: {
             height: 265,
             width: 400,
           }
         }
       },{
         breakpoint: 500,
         options: {
           chart: {
             height: 265,
             width: 370,
           }
         }
       },{
         breakpoint: 440,
         options: {
           chart: {
             height: 265,
             width: 310,
           }
         }
       },{
         breakpoint: 370,
         options: {
           chart: {
             height: 265,
             width: 300,
           }
         }
       },{
         breakpoint: 350,
         options: {
           chart: {
             height: 265,
             width: 270,
           }
         }
       },{
         breakpoint: 330,
         options: {
           chart: {
             height: 265,
             width: 240,
           }
         }
       },
   ],
    xaxis: {
        categories: ['Jan', 'Feb', "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
   
    colors: ['#4A2C6E', '#028c92', '#9C27B0'],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '20%',
            barHeight: '90%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            endingShape: 'rounded',
            startingShape: 'flat',
            borderRadius : 2,
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
             
        },
    }
 }
 var chart = new ApexCharts(document.querySelector("#chart"), options);
 chart.render();
 