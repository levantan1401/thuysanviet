
var xValues = [100,500,1000,1500,2000];
var xvalue_sale = ['Jan','Jeb',"Mar","Apr","May","Jun",'Jul','Aug',"Sep","Oct","Nov","Dec"];
var yValues = [0,500,1500,2000,3000 ];
new Chart("ChartView", {
  type: "line",
  data: {
    labels: xValues,
    data: yValues,
    datasets: [{
      data: [560,860,1030,1788,1900], 
      borderColor: "red",
      fill: true,
      // backgroundColor:"rgb(255, 227, 227)"
    }]
  },
  options: {
    legend: {display: false}
  }
});
new Chart("ChartSales", {
  type: "line",
  data: {
    labels: xvalue_sale,
    data: yValues,
    datasets: [{
      data: [710,200,450,250,354,150,360,950,480,621,1012,624], 
      borderColor: "blue",
      fill: true,
      
    }]
  },
  options: {
    legend: {display: false}
  }
});


var xValues = ["Tin tức", "Giải pháp", "Giới thiệu", "Sản phẩm", "Giỏ hàng"];
var yValues = [100,105, 59, 74, 24, 20,0];
var rowChartValue  = [61,71,31,52,42,24,61,94,64,33];
var barColors = ["red", "green", "blue", "orange", "pink"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Biển đồ lượt phản hồi"
        }
    }
});
new Chart("rowChart", {
    type: "bar",
    data: {
        labels: ["Bột tech","Cám","Vi sinh","Bột tech","Cám","Vi sinh","Bột tech","Cám","Vi sinh vật"],
        datasets: [{
            backgroundColor: "red", 
            data: rowChartValue
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Thông kê sản phẩm bán được"
        }
    }
});

var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

// Define Layout
var layout = {
  xaxis: {range: [40, 160], title: "Số lượng sản phẩm"},
  yaxis: {range: [5, 16], title: "Đơn hàng thành công"},  
  title: "Sự tăng trưởng qua các năm"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);


