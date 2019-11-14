import React, {useState } from 'react'

import UserCard from './User-Card.jsx'

const UserList = props => {
	const { users, setSelectedUser, selectedUserIndex } = props

	const userCards = users.map((user, index) => (
		<UserCard
			key={index}
			index={index}
			user={user}
			setSelectedUser={setSelectedUser}
			selectedUserIndex={selectedUserIndex}
		/>
	))
	return (<div className='card_list'>{userCards}</div>)
	
}

export default UserList
