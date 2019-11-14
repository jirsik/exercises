import React from 'react'

import UserDetails from './User-Details.jsx'

const defaultMessage = (
	<div style={{ textAlign: 'center', color: 'white' }}>
		Please Select A User To View The Details
	</div>
)

const UserPanel = props => {
	const { user } = props

	return (
		<div className='user_panel_container'>
			{!user ? defaultMessage : <UserDetails user={user} />}
		</div>
	)
}

export default UserPanel
