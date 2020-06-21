import React from 'react'

const IssuesCard = ({name, desc, state, zip, image, vote}) => {
  return (
    <div>
      <div>
        <img src={image} alt="community problem"/>
      </div>
      <section>
        <h1>{name}</h1>
        <h4>{desc}</h4>
        <p>
          <li>{state}</li>
          <li>{zip}</li>
          {vote}
        </p>
      </section>
    </div>
  )
}

export default IssuesCard
