import React, { useState, useEffect } from 'react'
import '../bikeScreen.css'

const BikeScreen = () => {
	const [collapse, setCollapse] = useState(false)
	const [collapseMobile, setCollapseMobile] = useState(false)

	const [bike, setBike] = useState(0)
	const allBikes = [
		{
			name: 'Xplorer',
			model: './Japan/XPL.gltf',
			background: './images/bg-xplorer.png',
			poster: './images/exp1.png',
		},
		{
			name: 'Glyder',
			model: './Japan/Glyder.gltf',
			background: './images/bg-glyder1.png',
			poster: './images/glyder1.png',
		},
		{
			name: 'Dolphin',
			model: './Japan/Dolphine.gltf',
			background: './images/bg-dolphine.png',
			poster: './images/Dolphin.png',
		},

		{
			name: 'EMX',
			model: './Japan/EMX.gltf',
			background: './images/bg-emx1.png',
			poster: './images/emx.png',
		},
		{
			name: 'Shanghai',
			model: './Japan/Shanghai.gltf',
			background: './images/bg-shanghai.png',
			poster: './images/shanghai.png',
		},
		{
			name: 'Viper',
			model: 'https://ar-config-japan.s3.us-west-1.amazonaws.com/VP.gltf',
			background: './images/bg-viper.png',
			poster: './images/viper.png',
		},
	]

	// const changeBike = () => {
	// 	const d = document.getElementById('change-bike').value
	// 	setBike(d)
	// }

	useEffect(() => {
		const onProgress = (event) => {
			const progressBar = event.target.querySelector('.load')
			// const updatingBar = event.target.querySelector('.update-bar')
			// updatingBar.style.width = `${event.detail.totalProgress * 100}%`

			const percentage = event.target.querySelector('.percentage')
			percentage.innerHTML = `${parseInt(event.detail.totalProgress * 100)}%`
			console.log(event.detail.totalProgress)
			if (event.detail.totalProgress === 1) {
				progressBar.classList.add('hide')
			} else {
				progressBar.classList.remove('hide')
				if (event.detail.totalProgress === 0) {
					event.target.querySelector('.center-pre-prompt').classList.add('hide')
				}
			}
		}
		document
			.querySelector('model-viewer')
			.addEventListener('progress', onProgress)
	}, [bike])

	return (
		<div className='container-fluid height-100 p-0 width-100'>
			<div className='d-lg-flex h-100 p-0 bg-dark'>
				<div
					id='model-screen'
					className={`h-100  position-relative ${
						!collapse ? 'open-model' : 'close-model'
					} `}>
					<img src='./images/logo.png' className='logo-bs' alt='' />
					<button
						className={`collapse-btn d-none d-lg-block  ${
							collapse && 'rotate'
						}`}
						onClick={() => setCollapse(!collapse)}>
						<i class='fa-solid fa-chevron-left '></i>
					</button>

					<button
						className={`collapse-btn-mobile d-block d-lg-none  `}
						onClick={() => setCollapseMobile(!collapseMobile)}>
						<i
							class={`fa-solid fa-chevron-left ${
								collapseMobile && 'rotate'
							}`}></i>
					</button>

					{/* ..... */}

					<div
						className={`bike-list-mobile  pl-3 mb-2   ${
							!collapseMobile ? 'd-none' : 'd-flex'
						} `}>
						{allBikes.map((b, i) => (
							<div
								onClick={() => setBike(i)}
								style={{
									backgroundImage: 'url(' + b.background + ')',
									backgroundSize: 'cover',
									cursor: 'pointer',
								}}
								className='bike-card p-2   mr-3 d-flex justify-content-evenly  '>
								<div className='pl-2 align-items-center d-flex'>
									<h2 className='text-light'>{b.name}</h2>
								</div>
								<div className=''>
									<img src={b.poster} className='' width={150} alt='' />
								</div>
							</div>
						))}
					</div>

					{/* <select
						id='change-bike'
						class='form-select d-lg-none'
						onChange={changeBike}>
						{allBikes.map((b, i) => (
							<option key={i} value={`${i}`}>
								{b.name}
							</option>
						))}
					</select> */}

					<div
						className={` h-100 main-div ${
							bike === 0
								? 'xplorer'
								: bike === 1
								? 'glyder'
								: bike === 2
								? 'dolphine'
								: bike === 5
								? 'viper'
								: bike === 4
								? 'shanghai'
								: ''
						} `}>
						<model-viewer
							id='hotspot-camera-view-demo'
							bounds='tight'
							className=''
							enable-pan
							src={allBikes[bike].model}
							ar
							interaction-prompt='none'
							ar-placement='floor'
							render-scale='1'
							ar-modes='scene-viewer webxr quick-look'
							camera-controls
							camera-orbit='-90deg 80deg   '
							environment-image='neutral'
							shadow-intensity='3'>
							<div className='load position-relative h-100 w-100 bg-em'>
								<div className='main-load'>
									<span class='loader'></span>
									<p className='text-center percentage text-light text-bold'>
										0%
									</p>
								</div>
							</div>

							<button slot='ar-button' id='ar-button'>
								<i class='fa-solid d-block d-lg-none fa-vr-cardboard'></i>
								<span className='d-none d-lg-block'>View in your space</span>
							</button>
							<div id='ar-prompt'></div>
						</model-viewer>
					</div>
				</div>
				<div
					id='bike-list'
					className={`h-100 bg-light d-none d-lg-block  ${
						collapse ? 'open-list' : 'close-list'
					}`}>
					<div className='main-list height-100 overflow-auto p-4 '>
						<div className='d-flex justify-content-between '>
							<h4 className='mb-2'>EM Bikes</h4>
						</div>
						<div className='d-flex d-lg-block'>
							{allBikes.map((b, i) => (
								<div
									onClick={() => setBike(i)}
									style={{
										backgroundImage: 'url(' + b.background + ')',
										backgroundSize: 'cover',
										cursor: 'pointer',
									}}
									className='bike-card p-2  mt-3 mb-3 d-flex justify-content-evenly  '>
									<div
										style={{ width: '40%' }}
										className='pl-2 align-items-center d-flex'>
										<h2 className='text-light'>{b.name}</h2>
									</div>
									<div style={{ width: '60%' }} className=''>
										<img src={b.poster} className='img-fluid' alt='' />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BikeScreen
