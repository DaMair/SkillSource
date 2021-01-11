import React, { useState,useCallback } from 'react';
import ReactApexChart from "react-apexcharts";
 import Table from 'react-bootstrap/Table'

 import ReactDataGrid from '@inovua/reactdatagrid-community'
 import '@inovua/reactdatagrid-community/index.css'
 import skills from './skills'


 const gridStyle = { minHeight: 550 };

 const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, minWidth: 100, type: 'number', editable: false },
  { name: 'skill', header: 'skill', defaultFlex: 1, minWidth: 250 },
  { name: 'rating', header: 'rating', defaultFlex: 1, minWidth: 250 },
  { name: 'change', header: 'change', defaultFlex: 1, editable: false }
];

const Skillmanager = () => {
  const [dataSource, setDataSource] = useState(skills);

  const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
    const data = [...dataSource];
    data[rowIndex] = Object.assign({}, data[rowIndex], { [columnId]: value })

    setDataSource(data);
     
  }, [dataSource])
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
      categories: dataSource.map(({ skill }) => skill)
    }
  };

 const series= 
       [{
          name: "Current",
          data: dataSource.map(({ rating }) => rating)
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
        <div style={{flex:2,marginLeft:30,marginTop:30,justifyContent:'end'}}>
        <h2 style={{textAlign:'left',marginTop:10}}>Skills</h2>

        <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        dataSource={dataSource}
      />
       {/* <Table hover >

  <tbody>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>Backend</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>3/5</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>UI</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>5/5</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>VR/AR Design</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>3/5</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>UX</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>2/5</td>
      <td style={{color:'red'}}>-2</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>Visual Design</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>3/5</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>App</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>4/5</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>Interaction</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>3/5</td>
      <td style={{color:'red'}}>-1</td>
    </tr>
    <tr style={{ lineHeight: 3, minHeight: 3, height: 3}}>
      <td>Web</td>
      <td style={{color:'#303F9F',fontWeight:'bold'}}>3/5</td>
    </tr>
  </tbody>
  </Table> */}
          </div>
      <div style={{flex:3}}>
      <ReactApexChart options={options} series={series} type="radar" height={800} />
      </div>
      </div>
    
      <div style={{flex: 1}}>
     
    </div>
    </>
    );
  }
  
  export default Skillmanager;
  