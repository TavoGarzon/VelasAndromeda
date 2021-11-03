import React from 'react'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars />
            Este es el PublicLayout
            {children}
        </div>
        
    )
}

export default PublicLayout
