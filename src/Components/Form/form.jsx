 
import React, {useEffect, useState ,useCallback} from 'react';
import {useTelegram} from '../../Hooks/useTelegram.jsx'
import './form.css';

export function Form(props){

	const {tg, query_id} = useTelegram()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState('')
	const [info, setInfo] = useState('')

	const onChangeName = (e) => {
		setName(e.target.value)
	}

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value)
	}

	const onSendData = useCallback(() => {

		const data2 = {
	    		//basket: basket,
	    		all_price: 1234,
	    		query_id: query_id,
	    	}

	    	fetch('http://159.253.18.191:8000/web-api',{
	    		method: 'POST',
    			headers:{
    				'Content-Type':'application/json',
    			},
    			body: JSON.stringify(data2)
	    	})
		const data = {
			name,
			email,
			status
		}
//		tg.MainButton.hide()
		tg.sendData(JSON.stringify(data))
		setInfo('send data' + data.name)
	},[name,email,status,tg, query_id])

	useEffect(() => {
    	tg.MainButton.setParams({
    		text: 'send data'
    	})
        
    })

    useEffect(() => {
    	tg.onEvent('mainButtonClicked', onSendData)
    	return () => {
    		tg.offEvent('mainButtonClicked', onSendData)
    	}
        
    },[tg,onSendData])

	useEffect(() => {
		if(!name || !email) tg.MainButton.hide()
	    else tg.MainButton.show()
	        
	    }, [name,email,tg.MainButton])

	return(
		<div className = {'formContainer'}>
		<p>info:{info}</p>
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