import React,{ Component } from 'react'



class Form extends Component{
constructor(props){
	super(props)
	this.state = { password:'',name:'', age:null, address:''
	,phoneNo:'' ,sheednumrow: '1', select:'ใช่ ยินยอม',
	onlike:'ฉันไม่มีสิ่งที่ชอบ',timeDay:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleSubmit(event){
	const { email, name, age, address, phoneNo ,sheednumrow, onlike, select , timeDay} = this.state
	event.preventDefault()
	return(
		<div>
			<a href="">Go TO . . .</a>
		</div>
	)
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

render(){
	return(
        
	<form onSubmit={this.handleSubmit}>
        <div class='textheader'>
            <h2>Login</h2>
        </div>
		<input type='hidden' value={this.sheednumrow}></input>
		<div>
		<label>Username</label>
		<input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>
		<label>Password</label>
		<input type="password" value={this.state.password}name="password" onChange={this.handleChange}></input>
		</div>
		<button>Login</button>
		
	</form>
	)
}
}

export default Form
