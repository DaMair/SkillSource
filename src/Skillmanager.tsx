import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Table from 'react-bootstrap/Table'
const Skillmanager = () => {
   const options = {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    title: {
        text: ''
      },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.3
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Backend', 'UI', 'VR/AR Design', 'UX', 'Visual Design', 'App', 'Interaction','Web']
    }
  };

 const series= 
       [{
          name: "Current",
          data: [3, 5, 3, 2, 4, 4,3,3]
        },{
            name: "Previous",
            data: [3, 5, 3, 4, 4, 4,4,3]
          }];
   

    return (
      <>
      <div style={{backgroundColor: '#303F9F', flex: 1}}>
        <div style={{color:'white',padding:15, textAlign:'left'}}>
      <h2>Welcome to your Skillmanager, John Doe</h2>
      <h3>Here you can find your Skill progress</h3>
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex:1,marginLeft:30,marginRight:10,marginTop:30}}>
        <h2 style={{textAlign:'left',marginTop:10}}>Skills</h2>
       <Table hover >

  <tbody>
    <tr>
      <td>Backend</td>
      <td>3/5</td>
    </tr>
    <tr>
      <td>UI</td>
      <td>5/5</td>
    </tr>
    <tr>
      <td>VR/AR Design</td>
      <td>3/5</td>
    </tr>
    <tr>
      <td>UX</td>
      <td>2/5</td>
      <td style={{color:'red'}}>-2</td>
    </tr>
    <tr>
      <td>Visual Design</td>
      <td>3/5</td>
    </tr>
    <tr>
      <td>App</td>
      <td>4/5</td>
    </tr>
    <tr>
      <td>Interaction</td>
      <td>3/5</td>
      <td style={{color:'red'}}>-1</td>
    </tr>
    <tr>
      <td>Web</td>
      <td>3/5</td>
    </tr>
  </tbody>
  </Table>
          </div>
      <div style={{flex:2}}>
      <ReactApexChart options={options} series={series} type="radar" height={800} />
      </div>
      </div>
    
      <div style={{flex: 1}}>
     
    </div>
    </>
    );
  }
  
  export default Skillmanager;
  