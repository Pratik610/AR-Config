import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@google/model-viewer'

import BikeScreen from './screens/BikeScreen'

function App() {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<BikeScreen />}></Route>
			</Routes>
		</Router>
	)
}

export default App
