import React,{ Component } from 'react'



class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:''
	,phoneNo:'' ,sheednumrow: '1', select:'ใช่ ยินยอม',
	onlike:'ฉันไม่มีสิ่งที่ชอบ',timeDay:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleSubmit(event){
	const { email, name, age, address, phoneNo ,sheednumrow, onlike, select , timeDay} = this.state
	event.preventDefault()
	alert(`
	***กรุณาตรวจสอบความถูกต้อง***
	จำนวนเอกสาร : ${sheednumrow}
	อีเมล : ${email}
	ชื่อ-สกุล : ${name}
	อายุ : ${age}
	ที่อยู่ติดต่อ : ${address}
	หมายเลขโทรศัพท์ : ${phoneNo}
	รหัสนักศึกษา : ${onlike}
	ยินยอมให้เก็บประวัติ : ${select}
	เวลา : ${timeDay}
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
            <h2>ลงทะเบียนข้อมูล</h2>
        </div>
		<input type='hidden' value={this.sheednumrow}></input>
		<div>
		<label htmlFor='email'>อีเมล : </label>
		<input
            type='email'
			name='email'
			placeholder='กรุณากรอกอีเมล'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>ชื่อ-สกุล : </label>
		<input
            type='text'
			name='name'
			placeholder='กรุณากรอก ชื่อ-สกุล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>อายุ : </label>
		<input
            type='number'
			name='age'
			placeholder='กรุณากรอกอายุ'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
        <label htmlFor='unKnow'>รหัสนักศึกษา : </label>
        <input name='unKnow' type='password' placeholder='รหัสนักศึกษา' 
        value={this.state.unknow} onChange={this.handleChange}></input>
        
        </div>
		<div>
		<label htmlFor='address'>ที่อยู่ติดต่อ : </label>
		
		
		<input
		type='textaera'
			name='address'
			placeholder='ที่อยู่ติดต่อ'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>หมายเลขโทรศัพท์ : </label>
		<input
            type='tel'
			name='phoneNo'
			placeholder='หมายเลขโทรศัพท์'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        
        <div>
            <label>ยินยอมให้เก็บประวัติ?</label>
            <input type="radio" value={this.onlike} onChange={this.handleChange}></input>

        </div>
		<div>
			<select>
			<option value={this.date}>วันนี้</option>
		</select>
			<label>เวลา</label>
			<input type='time' placeholder='day' value={this.timeDay}></input>
			
		</div>
		
		
		
		
		<button>ยืนยันข้อมูล</button>
		
	</form>
	)
}
}

export default Form
