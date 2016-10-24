import React from 'react'
import ReactTelInput from 'react-telephone-input/lib/withStyles'

class Phone extends React.Component {
	render() {
		return (
			<div classNam="grid-container">
				<div className="grid-item-checkout-main">
					<div className="form-field-wrapper">
						<div className="form-field-phone">
							<ReactTelInput
									defaultCountry='nl'
									preferredCountries={['nl' ,'fr', 'es', 'de', 'it', 'sv', 'no']}
									flagsImagePath='/assets/flags.png'
									value='+31611119999'
								/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Phone