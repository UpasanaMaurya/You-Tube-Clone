import React, { useContext } from 'react'
import VediosContext from '../Context/VediosContext'

const useVedio = () => {
    return useContext(VediosContext)
    
}

export default useVedio