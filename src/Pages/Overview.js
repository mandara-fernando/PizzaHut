import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { blue } from '@material-ui/core/colors';

export const Overview = () => {
    return (
      <div className='reports'>
        <h1>Reports</h1>
      </div>
    );
  };

export const Employees = () => {

    const [tableData,setTableData] = useState([
        {name:"Ushan",position:"Manager",email:"ushan.j@gmail.com",phone:7987654367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Lasandul",position:"Manager",email:"ushan.j@gmail.com",phone:7989654367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Kamal",position:"Manager",email:"ushan.j@gmail.com",phone:7987634367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Kethaka",position:"Manager",email:"ushan.j@gmail.com",phone:7985654367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Mandara",position:"Manager",email:"ushan.j@gmail.com",phone:7981654367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Sanda",position:"Manager",email:"ushan.j@gmail.com",phone:7987624367,age:25,gender:"M",city:"Moratuwa"},
        {name:"Jemis",position:"Manager",email:"ushan.j@gmail.com",phone:7987604367,age:25,gender:"F",city:"Moratuwa"},
    ]);
    const columns=[
        {title:"Name",field:"name"},
        {title:"Position",field:"position"},
        {title:"Email",field:"email"},
        {title:"Phone Number",field:"phone"},
        {title:"Age",field:"age"},
        {title:"Gender",field:"gender",lookup:{M:"Male",F:"Female"}},
        {title:"City",field:"city"},
    ]

    return (
      <div className='employee'>
        <MaterialTable columns={columns} data={tableData} title="Employee Details"
        editable={{
            onRowAdd:(newRow) => new Promise((req,res)=>{
                setTableData([tableData,newRow])
                req()
            }),

            onRowUpdate:(newRow,oldRow)=> new Promise((req,res)=>{
                const updateData=[tableData];
                updateData[oldRow.tableData.id]=newRow;

                setTableData(updateData);
            setTimeout(()=>req(),500);
            }),

            onRowDelete:(selectedRow)=> new Promise((req,res)=>{
                const updateData=[tableData]
                updateData.splice(selectedRow.tableData.id,1)
                setTableData(updateData)
                req();
            })
        }}
        options={{filtering:true, paginationType:"stepped",exportButton:true,exportAllData:true,
        addRowPosition:'first',actionsColumnIndex:-1,grouping:true,columnsButton:true,
        headerStyle:{background:"blue"}}}/>
      </div>
    );
  };
  
  export const Employee_Reports = () => {
    return (
      <div className='employee-report'>
        <h1>Reports/reports1</h1>
      </div>
    );
  };


