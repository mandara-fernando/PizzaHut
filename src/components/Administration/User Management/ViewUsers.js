import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Modal from './Modal';

function ViewUsers(props) {

  const [showPop,setShowPop] = useState(false);
  const openPop = () =>{
      setShowPop(prev => !prev)}
  return <main >
        
  <div class='body' align='center' style={{ marginTop: "80px" }} >
    <div class='card' style={{ backgroundColor: "white", width: "1250px", height:'auto' }}>
    <h1 className="form-titles ">USER MANAGEMENT</h1>
    <Button
          
              class='btn btn-danger'
              /*to={`/admin/usermanagement/deletemembers/${item._id}`}*/
            >
              <i class='fa fa-plus'></i> Add User
    </Button>
    
    <br/>

  <table class='table'>
    <thead class='thead-dark'>
      <tr class='table-success'>
        <th scope='col'>Profile</th>
        <th></th>
        <th scope='col'>User Name</th>
        <th scope='col'>Role</th>
        <th scope='col'>Remove</th>
        <th scope='col'>Edit</th>
        <th scope='col'>Contact</th>
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
          <div className="form-group">
                  
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                           >
                  <option selected>Select the category</option>
                  <option value="Research">Research</option>
                  <option value="Workshop">Workshop</option>
                  </select>
                  
              </div>
          </td>
          <td >
          <Button
              onClick={openPop}
              class='btn btn-danger'
              /*to={`/admin/usermanagement/deletemembers/${item._id}`}*/
            >
              <i class='fa fa-trash'></i> delete
            </Button>
            <Modal showPop={showPop} setShowPop={setShowPop}/>
            <globalStyle/>
          </td>
          <td>
          <Link
    
              class='btn btn'
              /*to={`/admin/usermanagement/editmembers/${item._id}`}*/
            >
            <i class="fa fa-edit" style={{fontSize:'28px',color:'red'}}></i>
            </Link>
          </td>
          <td>
          <Link
    
              class='btn btn'
              /*to={`/admin/usermanagement/editmembers/${item._id}`}*/
            >
            <i class="fa fa-envelope" style={{fontSize:'28px',color:'red'}}></i>
            </Link>
          </td>

        </tr>
     
    </tbody>
  </table>
</div>
</div>
</main>;
}

export default ViewUsers;
