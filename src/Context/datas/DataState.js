import React from 'react'
import DataContext from './dataContext'

const DataState = (props) => {

  const state = {
    "isLoggedIn": Boolean,
    "token": String
  }

  return (
    <DataContext.Provider value={state}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState