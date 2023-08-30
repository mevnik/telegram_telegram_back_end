import React from 'react';
import { Route,Routes } from 'react-router';
import { Form } from '../Components/Form/form.jsx';
import { MainPage } from '../Components/Pages/main_page.jsx';



const TelegramRoutes = () => {

	return(
	     <Routes>

	        <Route path="form" element={<Form />} />
	        <Route path="main" element={<MainPage />} />} />
	        <Route
	          path="*"
	          element={
	            <main style={{ padding: "1rem" }}>
	              <p>There's nothing here!</p>
	            </main>
	          }
	        />
	      </Routes>
		)
}

        

export default TelegramRoutes;


