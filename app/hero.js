import Image from 'next/image'
import Plans from './plans'
export default function Hero () {
	return(
	<div>
		<div className='bg-white  overfolw:scroll lg:flex'>
				<div className='p-7 lg:w-1/2'>
					<div className='text-6xl text-black font-bold mt-24 ' >
					Get &nbsp;
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							fit &nbsp;
						</span> 
						with &nbsp;
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>AI</span>
						<div className='text-lg font-bold pl-1 pt-5'>
								Introducing GymGenie: tailored workout routines for <br/>
							<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>you</span> 
						</div>	
					 </div>
					 <div className="text-lg pt-7 text-black"	>&#x2728; Just Released &#x2728;</div>	
					<div className='text-4xl pt-7 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-black'> Workout Plans </div>	
					<div className='text-lg font-bold text-black' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supercharge your personalized workout with AI-powered meal plans tailored to your fitness goals and Effortlessly enter your food and snacks and get an instant analysis of calories, protein, carbohydrates, and fats </div>
					<div className='pt-7 text-black'> 1,128,537 workout routines generated so far.</div>
					<div className='text-gray-400 text-black'>No credit card required.</div>
					
					<button className='bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 sm:w-full text-white h-3 mt-5 flex items-center justify-center font-bold  p-5  rounded	'>Get Started</button>		
				   		
				</div>
				<div className='mx-auto my-auto sm:flex'>
					<Image 
					className='mx-auto my-auto mt-10'
					src='/genie.svg'
					alt="GymGenie"
        			width={250}
        			height={250}					
					 />				
				</div>
			</div>
			
			<div id="about" className='flex flex-col mt-20 text-gray-900'>
					<div className='text-4xl font-bold mx-auto '>Trusted by people across the world</div>
					<div className='text-lg mt-5 font-bold mx-auto text-gray-500' >GymGenie has helped people in USA, India, Canada, UAE, and 80 more countries </div>			
			</div>
			
		<div className='flex lg:flex-row sm:flex-col   justify-center items-center mt-5 mb-7 space-x-1'>
			<div className='sm:w-full  lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold  lg:text-6xl sm:text-3xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>100%</span> <span className='text-gray-500  sm:text-sm text-lg mb-5 '> Completion</span>	</div>
			<div className='sm:w-full lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold sm:text-3xl lg:text-6xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>24/7</span> <span className='text-gray-500  sm:text-sm text-lg mb-5 '> Delivery</span>	</div>
			<div className='sm:w-full lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold sm:text-3xl lg:text-6xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>100K</span> <span className='text-gray-500  sm:text-sm  ext-lg mb-5 '> Workout routines generated</span>	</div>		
		</div>
		
		<div id="workplan"><Plans /> </div>
		
		
	</div>	
	)

}