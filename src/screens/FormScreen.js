import React from 'react'

const FormScreen = () => {
	return (
		<div
			style={{
				backgroundImage: 'url("./images/ar-vr1.jpg")',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			className='container-fluid  height-100 width-100 '>
			<div className='row h-100'>
				<div
					style={{ background: 'url("./images/bg.png")' }}
					className='col-lg-4 bg d-flex h-100 p-lg-5 '>
					<div className='mx-auto pt-lg-5'>
						<h1 style={{ color: '#131212' }}>Lets Partner up </h1>
						<p className='mb-3' style={{ fontWeight: '500', color: '#2C2929' }}>
							Lorem Ipsum is simply dummy text of the printing
						</p>
						<div>
							<form className='main-form mt-4'>
								<label>Name</label>
								<input type='text' className='form-control' />

								<label>Email</label>
								<input type='email' className='form-control' />

								<label>Mobile Number</label>
								<input type='text' className='form-control' />

								<label>Company Name</label>
								<input type='text' className='form-control' />

								<button type='submit'>Submit</button>
							</form>
						</div>
					</div>
				</div>
				<div className='col-lg-7 d-none d-lg-block h-100 p-0  position-relative'>
					<img src='./images/logo.png' className='logo-fs img-fluid' alt='' />
					{/* <img
						src='./images/vr.jpg'
						className='img-fluid  border-rounded '
						alt=''
					/> */}
				</div>
			</div>
		</div>
	)
}

export default FormScreen
