
import React from 'react'

const UserCard = ({ name, username, email, image }) => {
  return (
    <li className="user-card">
      <img
        src={image}
        alt={name}
        className="user-image"
      />
      <h3>{name}</h3>
      <p>@{username}</p>
      <p>{email}</p>
    </li>
  )
}

export default UserCard
