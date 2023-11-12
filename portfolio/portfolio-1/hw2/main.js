let myGraph_hw2 = document.getElementById('myGraph_hw2');
//1
let hw2_trace1 ={};
hw2_trace1.type ="bar"; //長條圖
hw2_trace1.name="男性";
hw2_trace1.text = "男性";//顯示個別動物的數量
hw2_trace1.x =[];
hw2_trace1.y =[];


hw2_trace1.x[0] = "臺北市";
hw2_trace1.y[0] = Taipei_landc[0]['count'];
hw2_trace1.x[1] = "高雄市";
hw2_trace1.y[1] = Kou_landc[0]['count'];

//顏色 文字大小
hw2_trace1.text=hw2_trace1.y;
hw2_trace1.textfont={
    color:'white',
    size:20
};

//2
let hw2_trace2 ={};
hw2_trace2.type ="bar"; //長條圖
hw2_trace2.name="女性";
hw2_trace2.text = "女性";//顯示個別動物的數量
hw2_trace2.x =[];
hw2_trace2.y =[];

hw2_trace2.x[0] = "臺北市";
hw2_trace2.y[0] = Taipei_landc[1]['count'];
hw2_trace2.x[1] = "高雄市";
hw2_trace2.y[1] = Kou_landc[1]['count'];

//顏色 文字大小
hw2_trace2.text=hw2_trace2.y;
hw2_trace2.textfont={
    color:'white',
    size:20
};

// //3
// let trace3 ={};
// trace3.type ="bar"; //長條圖
// trace3.name="男性";
// trace3.text = "男性";//顯示個別動物的數量
// trace3.x =[];
// trace3.y =[];

// trace3.x[0] = "Taipei Zoo";
// trace3.y[0] = Taipei_legislator[2]['count'];
// trace3.x[1] = "Taoyuan Zoo";
// trace3.y[1] = Taipei_citycoun[2]['count'];

// //顏色 文字大小
// trace3.text=trace3.y;
// trace3.textfont={
//     color:'white',
//     size:20
// };


let data_hw2 = [];
data_hw2.push(hw2_trace1);
data_hw2.push(hw2_trace2);
// data.push(trace3);

let layout_hw2={
    margin: { 
        t: 100 
    },
    //堆疊顯示
    barmode:'stack',
    title:'111年 臺北市及高雄市 立法委員加市議員的男女比'
};

Plotly.newPlot(myGraph_hw2, data_hw2,layout_hw2); //newPlot中要有三個參數(名稱，資料array，排列的方式)