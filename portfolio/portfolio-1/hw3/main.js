let myGraph_hw3=document.getElementById('myGraph_hw3');
//1
let hw3_trace1 ={};
hw3_trace1.type ="pie";
hw3_trace1.title="亞太地區";
hw3_trace1.labels =[];
hw3_trace1.values =[];
hw3_trace1.domain={
    row:0,
    column:0
};

for(let x=0; x<evaluation_ratio_1.length; x++){
    hw3_trace1.labels[x] =evaluation_ratio_1[x]['name'];
    hw3_trace1.values[x] =evaluation_ratio_1[x]['count'];
}

//2
let hw3_trace2 ={};
hw3_trace2.type ="pie";
hw3_trace2.title="亞非地區";
hw3_trace2.labels =[];
hw3_trace2.values =[];
hw3_trace2.domain={
    row:0,
    column:1
};

for(let x=0; x<evaluation_ratio_2.length; x++){
    hw3_trace2.labels[x] =evaluation_ratio_2[x]['name'];
    hw3_trace2.values[x] =evaluation_ratio_2[x]['count'];
}

//3
let hw3_trace3 ={};
hw3_trace3.type ="pie";
hw3_trace3.title="歐洲地區";
hw3_trace3.labels =[];
hw3_trace3.values =[];
hw3_trace3.domain={
    row:1,
    column:0
};

for(let x=0; x<evaluation_ratio_3.length; x++){
    hw3_trace3.labels[x] =evaluation_ratio_3[x]['name'];
    hw3_trace3.values[x] =evaluation_ratio_3[x]['count'];
}

//4
let hw3_trace4 ={};
hw3_trace4.type ="pie";
hw3_trace4.title="北美地區";
hw3_trace4.labels =[];
hw3_trace4.values =[];
hw3_trace4.domain={
    row:1,
    column:1
};


for(let x=0; x<evaluation_ratio_4.length; x++){
    hw3_trace4.labels[x] =evaluation_ratio_4[x]['name'];
    hw3_trace4.values[x] =evaluation_ratio_4[x]['count'];
}

let data_hw3 =[];
data_hw3.push(hw3_trace1);
data_hw3.push(hw3_trace2);
data_hw3.push(hw3_trace3);
data_hw3.push(hw3_trace4);

//設定trace的hole屬性
hw3_trace1.hole=0.58;
hw3_trace2.hole=0.58;
hw3_trace3.hole=0.58;
hw3_trace4.hole=0.58;



let layout_hw3 ={
    margin:{
        t:50,
        l:20,
    },
    title:'111年政府派遣出國訪問之團體或個人',
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph_hw3, data_hw3, layout_hw3);
