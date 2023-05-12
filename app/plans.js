import Card from './card'


export default function Plans() {
	return(
		<div className = 'bg-gray-900 flex lg:flex-row sm:flex-col sm:justify-center sm:items-center sm:space-y-2  lg:	space-x-4'>
				<Card 
					image='/genie.svg'
					imageName='Free Plan'	
					title='Free Plan '
					details='This include free access to AI for 60 minutes per day '
					rate='$0'		
				/> 
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='Basic Plan'
					details='This include access to AI  with  Meal and Exercise  models '
					rate='$10'		
				/>
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='Premiu Plan'
					details='This include full access to AI with one-one personalised trainer '
					rate='$40'		
				/>
		</div>	
	)

}