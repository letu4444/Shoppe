google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// et Data
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Điện thoại',54.8],
  ['Mỹ phẩm',48.6],
  ['Đồ ăn',44.4],
  ['Trang phục',23.9],
  ['Gia vị',14.5]
]);

// Set Options
const options = {
  title:'Biểu đồ tiêu dùng',
  is3D:true
};

// Draw
const chart = new google.visualization.PieChart(document.getElementById('myChart'));
chart.draw(data, options);

}