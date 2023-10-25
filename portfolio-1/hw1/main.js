let myGraph = document.getElementById('myGraph');

//1
let trace1 ={};
trace1.mode ="lines+markers+text";
trace1.type ="scatter";
trace1.name="文山資源回收焚化廠";
trace1.visible=true;
trace1.marker={
    size:10
};
trace1.x =[];
trace1.y =[];
trace1.text=[];
trace1.textposition="bottom center";
trace1.textfont={
    family:"Raleway, sans-serif",
    size:10
};


//2
let trace2={};
trace2.mode ="lines+markers+text";
trace2.type ="scatter";
trace2.name="烏日資源回收焚化廠";
trace2.visible=false;
trace2.line={
    color:'red'
};
trace2.marker={
    size:10
};
trace2.x =[];
trace2.y =[];
trace2.text=[];
trace2.textposition="top";
trace2.textfont={
    family:"Raleway, sans-serif",
    size:10
};

//3
let trace3={};
trace3.mode ="lines+markers+text";
trace3.type ="scatter";
trace3.name="后里資源回收焚化廠";
trace3.visible=false;
trace3.line ={
    colore:'green',
    shape:'spline'
};
trace3.marker={
    size:10
};
trace3.x =[];
trace3.y =[];
trace3.text=[];
trace3.textposition="top";
trace3.textfont={
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set1.length;i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}
for(let i=0;i<set2.length;i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}
for(let i=0;i<set3.length;i++){
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout={
    margin: { 
        t: 50 
    },
    xaxis:{
        range:[0,6] //x軸範圍為0~6
    },
    yaxis:{
        range:[0,0.85] //y軸範圍為0~0.1
    },
    title:'臺中焚化廠戴奧辛濃度數據', //圖的標題
    updatemenus:[
        {
            y:1.2,
            x:0.2,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true,false,false]],
                    label:'文山'
                },
                {
                    method:'restyle',
                    args:['visible',[false,true,false]],
                    label:'烏日'
                },
                {
                    method:'restyle',
                    args:['visible',[false,false,true]],
                    label:'后里'
                }, 
                {
                    method:'restyle',
                    args:['visible',[true,true,true]],
                    label:'台中市全部焚化廠'
                },
            ]
        }
    ]
};

Plotly.newPlot(myGraph, data,layout); //newPlot中要有三個參數(名稱，資料array，排列的方式)