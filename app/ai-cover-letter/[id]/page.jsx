import React from 'react'

const CoverLetter = async ({params}) => {
    const id = await params.id;
  return (
    <div>
      <div>id: {id}</div>
    </div>
  )
}

export default CoverLetter
