import React from 'react';

const UserCard = props => {
	// const onCheckboxClick = () => {
	// 	setChecked(prevChecked => !prevChecked)
	// }
	const { user, index, setSelectedUser, selectedUserIndex } = props

	return (
		<div
			className={`card_container${
				index === selectedUserIndex ? ' selected_user' : ''
			} `}
			onClick={() => {
				setSelectedUser(index)
			}}
		>
			<h5>{user.name}</h5>
			<div className='card_details'>
				<p>Age: {user.age}</p>
				<p>Rank: {user.rank}</p>
			</div>
		</div>
	)
}

export default UserCard