import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Modal from '../components/Modal/Modal.jsx'
import PetChoosingItem from '../components/PetChoosingItem/PetChoosingItem.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound.jsx'
import Friends from '../pages/Friends/Friends.jsx'
import Home from '../pages/Home/Home.jsx'
import Layout from '../layouts/Layout/Layout.jsx'
import Service from '../pages/Service/Service.jsx'
import modalData from '../utils/modalData.js'
const AppRouter = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/HappyPet/' element={<Home />} />
					<Route path='/HappyPet/friends/' element={<Friends />} />
					<Route path='/HappyPet/service/' element={<Service />} />
					<Route path='/HappyPet/contacts/' element={<Contacts/>} />
					<Route path='*' element={<ErrorNotFound />} />
				</Routes>
				<Modal title="&#10507; Searching for a &#10507;">
					{modalData.map(item => {
						return <PetChoosingItem key={item.name} name={item.name} imgSrc={item.imgSrc}/>
					})}
				</Modal>
			</Layout>
		</Router>
	)
}

export default AppRouter