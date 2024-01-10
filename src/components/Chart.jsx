import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import "./Chart.css"
export default function Graph(props) {
    const {emmissions,revenue}=useSelector((state)=>state.data);
    const [graphHeight, setGraphHeight] = useState(400);
  const [options, setOptions] = useState({
    colors : [ '#536FC6','#91CB74',"yellow","red"],
    chart: {
      height: graphHeight,
      type: "line",
    },
    stroke: {
      width:[0,2]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    
    yaxis: [
      {
        title: {
          text: "Emissions",
        },
      },
      {
        opposite: true,
        title: {
          text: "E/R",
        },
      },
    ],
    
  });

  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: revenue
    },
        {
            name:'Emissions',
            type:'column',
        data: emmissions
        },
        {
          name: "R/E",
          type: "line",
          data: [40, 50, 41, 67, 22,20,10,45,7,8,9,10]
        },
        {
          name:'R/E-2022',
          type:'line',
          data:[40, 50, 41, 67, 22,20,10,45,67,28,19,18]
        },
  ]);
  useEffect(()=>{
    setSeries([
      {
        name: "Emissions-2023",
        type: "column",
        data: revenue
      },
      
      {
          name:'Emissions-2022',
          type:'column',
      data: emmissions
      },
        {
          name: "R/E-2023",
          type: "line",
          data: [120, 96.5, 109.1, 112.3, 134, 143.1, 131.1, 118.2, 130, 150.4, 157.8, 147.8]
          
        },
        {
          name:'R/E-2022',
          type:'line',
          data: [137, 99.5, 122.6, 130, 124.2, 124.2, 165.1, 131.2, 128, 157.4, 163.8,144.6]
            
        }
      ])
  },[emmissions])

  useEffect(() => {
    const handleResize = () => {
      setGraphHeight(window.innerWidth > 600 ? 400 : 250); // Adjust the heights as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="barLine">
    <div>
      <p>Emission/Revenue</p>
    </div>
    <div>
    <ReactApexChart
        options={options}
        series={series}
        type='line'
        height={graphHeight}
      />
    </div>
      
    </div>
  );
}