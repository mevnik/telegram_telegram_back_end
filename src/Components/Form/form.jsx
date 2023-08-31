
import React, {useEffect, useState} from 'react';
import {useTelegram} from '../../Hooks/useTelegram.jsx'
import './form.css';

export function Form(props){

	const {tg} = useTelegram()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState('')

	const onChangeName = (e) => {
		setName(e.target.value)
	}

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value)
	}

	const onSendData = (e) => {
		console.log('vot')
		const data = {
			name,
			email,
			status
		}
		tg.sendData(JSON.strigify(data))
	}

	useEffect(() => {
    	tg.MainButton.setParams({
    		text: 'send data'
    	})
        
    })

    useEffect(() => {
    	tg.onEvent('mainButtonClicked', onSendData)
    	//return tg.MainButton.offEvent('mainButtonClicked', onSendData) //???
        
    })

	useEffect(() => {
		if(!name || !email) tg.MainButton.hide()
	    else tg.MainButton.show()
	        
	    }, [name,email,tg.MainButton])

	return(
		<div className = {'formContainer'}>
		<form className = {'form'} action="#" method="post">
			<label>Put in form</label>
			<input type="text" placeholder = 'your name' name = 'user name' value = {name} onChange={onChangeName}/>
			<input type="email" placeholder = 'your email address' name = 'user email' value = {email} onChange = {onChangeEmail} />
			<p><select size="2">
		    <option selected value={status} className = {'form_select'} onChange = {onChangeStatus}>physical</option>
		    <option value="organization">organization</option>
		   </select></p>
			<input type="submit" placeholder = 'submit'/>
		</form>
		</div>
		)
}