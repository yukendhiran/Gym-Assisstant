import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Foot(){
	return(
		<div className='bg-gray-900'>
			<div className='flex flex-row space-x-20 p-16 justify-center mt-10'>
				<div className='sm:flex flex-col spac-y-1'> <span className='font-bold text-white text-xl'> Support</span> <br/> <span className='font-bold text-gray-300 text-lg'>Pricing </span> </div>
				<div className='sm:flex flex-col spac-y-1'> <span className='font-bold text-white text-xl'> COMPANY</span> <br/>  <span className='font-bold text-gray-300 text-lg'>About </span> </div>
				<div className='sm:flex flex-col spac-y-1'> <span className='font-bold text-white text-xl '> LEGAL</span> <br/>  <span className='font-bold text-gray-300 text-lg'>Privacy </span><br/>  <span className='font-bold text-gray-300 text-lg'>Terms </span> </div>
				<div className='sm:flex sm:flex-col sm:spac-y-1 '> <span className='font-bold text-white text-xl'> SUBSCRIBE TO OUR NEWSLETTER</span> <br/>  <span className='font-bold text-gray-300 text-lg'>The latest news, articles, and resources, sent to your inbox weekly. </span> 
					<br/>
					 <div className='lg:flex lg:flex-row'>
							<input type="email" id="email" name="email" 
      					className='bg-[#F5F5F5] w-36 h-5 lg:w-52 lg:h-10 rounded-10 placeholder-black placeholder-[16px] px-[10px] py-[15px]'
      					 /> 
      					 <button className='text-white bg-indigo-600 ml-2 p-3 w-28 rounded lg:h-10  '>Subscribe </button>					
					</div>
      		</div>
			</div>	
			 <hr className=" border-t-2 p-2 border-gray-400 w-5/6 mx-auto my-auto "/>	
			 <div className='flex mx-20'>
				<div className='text-gray-400 p-3'>2023 GymGenie. All rights reserved.</div>	
				<div className='ml-auto flex flex-row space-x-4  text-gray-400 text-2xl'>
					 <FaFacebook  />
      			 <FaInstagram />
      			 <FaTwitter />				
				</div>		 
			 </div>	
			
		</div>
	)

}