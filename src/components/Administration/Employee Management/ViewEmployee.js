import React from "react";
import { Link } from "react-router-dom";

function ViewEmployee(props) {
  return <main >
        
  <div class='body' align='center' style={{ marginTop: "80px" }} >
    <div class='card' style={{ backgroundColor: "white", width: "1250px", height:'auto' }}>
    <h1 className="form-titles ">EMPLOYEE MANAGEMENT</h1>

    <button className="btn btn-danger">Add Employee</button>
    <br/>

  <table class='table'>
    <thead class='thead-dark'>
      <tr class='table-success'>
        <th scope='col'>Employee ID</th>
        <th></th>
        <th scope='col'>Employee Name</th>
        <th scope='col'>Role</th>
        <th scope='col'>Phone</th>
        <th scope='col'>Remove</th>
        <th scope='col'>Edit</th>
        
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td>
          
          </td>
          <td></td>
          <td style={{ paddingTop: "30px" }}>
          
          </td>
          <td >
          
          </td>
          <td >
          
          </td>
          <td >
          <Link
          
              class='btn btn-danger'
              /*to={`/admin/usermanagement/deletemembers/${item._id}`}*/
            >
              <i class='fa fa-trash'></i> delete
            </Link>
          </td>
          <td>
          <Link
    
              class='btn btn'
              /*to={`/admin/usermanagement/editmembers/${item._id}`}*/
            >
            <i class="fa fa-edit" style={{fontSize:'28px',color:'red'}}></i>
            </Link>
          </td>
          

        </tr>
     
    </tbody>
  </table>
</div>
</div>
</main>;
}

export default ViewEmployee;
