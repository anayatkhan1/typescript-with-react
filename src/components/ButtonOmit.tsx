import React from 'react'

type User = {
    sessionId: string;
    name: string;
}

type Guest = Omit<User, "name">;

const ButtonOmit = () => {
  return (
    <div>ButtonOmit</div>
  )
}

export default ButtonOmit