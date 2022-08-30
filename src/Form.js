import React,{ Component } from 'react'



class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:''
	,phoneNo:'' ,sheednumrow: '1', select:'1',
	onlike:'ฉันไม่มีสิ่งที่ชอบ',timeDay:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleSubmit(event){
	const { email, name, age, address, phoneNo ,sheednumrow, onlike, select , timeDay} = this.state
	event.preventDefault()
	alert(`
	____ข้อมูล____
	จำนวนเอกสาร : ${sheednumrow}
	ชื่อ : ${name}
    อีเมล : ${email}
	อายุ : ${age}
	ที่อยู่ : ${address}
	โทรศัพท์ : ${phoneNo}
	สิ่งที่ฉันไม่ชอบ : ${onlike}
	Select : ${select}
	Time : ${timeDay}
	`)
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
            <h2>กรอกข้อมูล</h2>
        </div>
		<input type='hidden' value={this.sheednumrow}></input>
		<div>
		<label htmlFor='email'>Email : </label>
		<input
            type='email'
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name : </label>
		<input
            type='text'
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age : </label>
		<input
            type='number'
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address : </label>
		
		
		<input
		type='textaera'
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number : </label>
		<input
            type='tel'
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        <div>
        <label htmlFor='unKnow'>สิ่งที่ไม่อยากให้ใครรู้ : </label>
        <input name='unKnow' type='password' placeholder='สิ่งที่คุณไม่อยากให้รู้' 
        value={this.state.unknow} onChange={this.handleChange}></input>
        <select>
			<option value={this.date}>วันนี้</option>
		</select>
        </div>
        <div>
            <label>ฉันไม่มีสิ่งที่ชอบ</label>
            <input type="radio" value={this.onlike} onChange={this.handleChange}></input>

        </div>
		<div>
			<label>เวลาที่ส่ง ?</label>
			<input type='time' placeholder='day' value={this.timeDay}></input>
			
		</div>
		
		
		
		
		<button>Create Account</button>
		
	</form>
	)
}
}

export default Form
