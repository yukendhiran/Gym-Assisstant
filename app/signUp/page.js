import Link from 'next/link'

export default function SignIn(){
return(
	<div className='flex bg-black w-full h-full'>
		<div className='sm:w-full lg:w-1/3 h-full mx-auto my-auto bg-white mt-5 flex flex-col p-20 justify-center items-center rounded-lg'>
				 	
  				   <div className='text-3xl text-black font-bold mt-5 ' >
						  Sign for an account
  				   </div>
  				   <div className=' font-sansl font-normal text-lg text-[#858585] h-'>
						Have an account already ? <span className='text-[#346BD4]'><a href="../signIn">Sign In</a></span>      			
      		</div>

				 	<div className='pl-6 pt-6 leading-20'>
				 	
				 		<div className='leading-10' >
							<label htmlFor="fname" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						First Name
      					</label><br/>
      					<input type="fname" id="fname" name="fname" 
      					className='bg-[#F5F5F5] w-10/12 h-10 rounded-lg p-5  placeholder-black placeholder-[16px] '
      					placeholder='johndoe' />
						</div>
						
						<div className='leading-10' >
							<label htmlFor="lname" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						Last Name
      					</label><br/>
      					<input type="lname" id="lname" name="lname" 
      					className='bg-[#F5F5F5] w-10/12 h-10 rounded-lg p-5  placeholder-black placeholder-[16px] '
      					placeholder='johndoe' />
						</div>
						
						
				 		<div className='leading-10'>
				 			<label htmlFor="email" className='font-sansl h-[19px]  font-normal text-lg  leading-[19px] text-black ' >
      						Email address
      					</label><br/>
      					<input type="email" id="email" name="email" 
      					className='bg-[#F5F5F5] w-10/12 h-10 rounded-lg p-5   placeholder-black placeholder-[16px] '
      					placeholder='johndoe@gmail.com' /> 
				 		</div>
      				
						<div className='leading-10' >
							<label htmlFor="password" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						Password
      					</label><br/>
      					<input type="password" id="password" name="password" 
      					className='bg-[#F5F5F5] w-10/12 h-10 rounded-lg p-5  placeholder-black placeholder-[16px] '
      					placeholder='••••••••' />
						</div>
						
						<div className='leading-10' >
							<label htmlFor="cpassword" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						Confirm Password
      					</label><br/>
      					<input type="cpassword" id="cpassword" name="cpassword" 
      					className='bg-[#F5F5F5] w-10/12 h-10 rounded-lg p-5  placeholder-black placeholder-[16px] '
      					placeholder='••••••••' />
						</div>
						<div className='font-sansl font-normal text-[16px] mt-[20px] text-[#346BD4]'>
							Forgot password?						
						</div>
						 		<Link href='../'>
       							 <div className="bg-black w-10/12 h-10 rounded-lg flex text-white mt-[20px] mb-10">
         							 <span className="font-sans font-bold text-[16px] leading-[19.5px] m-auto">
												Sign Up
            						</span>
        							</div>
        						</Link>
        						
        			<div className=' font-sansl font-normal text-lg text-[#858585] h-'>
						Not signed in - by signing up you agree to our privacy policy      			
      			</div>	
  			</div>
      </div>	
	</div>
)
}