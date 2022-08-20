import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Category = () => {
  const location = useLocation()

  const params = useParams()
  console.log(params)
  return (
    <div
      style={{
        marginTop: 100,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        {' '}
        This is Category page (Public Route) <br />
        Parent Cat : {params.pCat} <br />
        {params.sCat && (
          <>
            Sub Cat : {params.sCat} <br />
          </>
        )}
        {params.iCat && (
          <>
            Inner Cat : {params.iCat} <br />
          </>
        )}
 
      </h1>
    </div>
  )
}

export default Category
