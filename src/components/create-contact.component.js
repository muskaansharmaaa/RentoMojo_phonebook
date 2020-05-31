import React from 'react';

import axios from 'axios';


export default class CreateContact extends React.Component{
 
  constructor(props){
    super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeMobile_No = this.onChangeMobile_No.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeDOB = this.onChangeDOB.bind(this);
      this.onSubmit=this.onSubmit.bind(this);

    this.state={
     Name: '',
     Mobile_No: '',
     Email: '',
     Dob: '',
     
    
    }
  }

   onChangeName(e){
    this.setState({
        Name: e.target.value
    });
  }
  
  onChangeMobile_No(e){
    this.setState({
        Mobile_No: e.target.value
    });
  }  
  
  onChangeEmail(e){
    this.setState({
        Email: e.target.value
    });
  }

  onChangeDOB(e){
    this.setState({
      
      DOB: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log(`FORM SUBMITTED`);
    console.log(`Name : ${this.state.Name}`);
    console.log(`Mobile_no : ${this.state.Mobile_No}`);
    console.log(`Email : ${this.state.Email}`);
    console.log(`DOB : ${this.state.DOB}`);

    alert(`FORM SUBMITTED`);
    
    
  const user = {
    Name: this.state.Name,
    Mobile_no:this.state.Mobile_No,
    Email: this.state.Email,
    DOB: this.state.dob,

    }

    console.log(user);

    axios.post('http://localhost:5000/contactlist/add',user)
       .then(res => console.log(res.data))
      .catch(err => console.error(err));


    this.setState({
      
        Name: '',
        Mobile_No: '',
        Email: '',
        DOB: ''
       
    })
  }
 render(){
   return(
   
    <div >
       <form class='form js-form' onSubmit={this.onSubmit}>

					<h2 class="form-title"> Add new contact </h2>

          	<div class="form-group">
            <label class='form-label'>Name:</label>
            <input
             class='form-input form-name' 
             type='text' 
             value={this.state.Name}
             onChange={this.onChangeName}
             required/>
					</div>

					<div class="form-group">
	          <label class='form-label' for='form-link-input'>Mobile No:</label>
            <input class='form-input form-phone'
             type='tel' 
             value={this.state.Mobile_No}
             onChange={this.onChangeMobile_No}
             required/><span>&#43;</span>
					</div>

					<div class="form-group">
						<label class='form-label' for='form-link-input'>Email:</label>
            <input class='form-input form-email'
             type='email'
             value={this.state.Email}
             onChange={this.onChangeEmail}
              required/><span>&#43;</span>
							  </div>
          
					<div class="form-group">
								<label class='form-label' for='form-link-input'>DOB:</label>
                <input class='form-input form-dob' 
                type='date'
                value={this.state.DOB}
                onChange={this.onChangeDOB}
                />
						</div>
          
          <button type="submit" class="js-submit btn btn-primary">Submit</button>
					<button type="button" class="js-cancel btn btn-danger">Cancel</button>
        </form>
    </div>

   )

 }

}