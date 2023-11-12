let myGraph_hw1 = document.getElementById('myGraph_hw1');

//1
let hw1_trace1 ={};
hw1_trace1.mode ="lines+markers+text";
hw1_trace1.type ="scatter";
hw1_trace1.name="文山資源回收焚化廠";
hw1_trace1.visible=true;
hw1_trace1.marker={
    size:10
};
hw1_trace1.x =[];
hw1_trace1.y =[];
hw1_trace1.text=[];
hw1_trace1.textposition="bottom center";
hw1_trace1.textfont={
    family:"Raleway, sans-serif",
    size:10
};


//2
let hw1_trace2={};
hw1_trace2.mode ="lines+markers+text";
hw1_trace2.type ="scatter";
hw1_trace2.name="烏日資源回收焚化廠";
hw1_trace2.visible=false;
hw1_trace2.line={
    color:'red'
};
hw1_trace2.marker={
    size:10
};
hw1_trace2.x =[];
hw1_trace2.y =[];
hw1_trace2.text=[];
hw1_trace2.textposition="top";
hw1_trace2.textfont={
    family:"Raleway, sans-serif",
    size:10
};

//3
let hw1_trace3={};
hw1_trace3.mode ="lines+markers+text";
hw1_trace3.type ="scatter";
hw1_trace3.name="后里資源回收焚化廠";
hw1_trace3.visible=false;
hw1_trace3.line ={
    color:'green',
    shape:'spline'
};
hw1_trace3.marker={
    size:10
};
hw1_trace3.x =[];
hw1_trace3.y =[];
hw1_trace3.text=[];
hw1_trace3.textposition="top";
hw1_trace3.textfont={
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set1.length;i++){
    hw1_trace1.x[i] = set1[i][0];
    hw1_trace1.y[i] = set1[i][1];
    hw1_trace1.text[i] = set1[i][2];
}
for(let i=0;i<set2.length;i++){
    hw1_trace2.x[i] = set2[i][0];
    hw1_trace2.y[i] = set2[i][1];
    hw1_trace2.text[i] = set2[i][2];
}
for(let i=0;i<set3.length;i++){
    hw1_trace3.x[i] = set3[i][0];
    hw1_trace3.y[i] = set3[i][1];
    hw1_trace3.text[i] = set3[i][2];
}

let data = [];
data.push(hw1_trace1);
data.push(hw1_trace2);
data.push(hw1_trace3);


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

Plotly.newPlot(myGraph_hw1, data,layout); //newPlot中要有三個參數(名稱，資料array，排列的方式)