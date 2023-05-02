import React, { useContext } from 'react'
import VedioDispatch from '../Context/VedioDispatch'

const useDispatch = () => {
    const dispatch=useContext(VedioDispatch)
    return dispatch
}

export default useDispatch