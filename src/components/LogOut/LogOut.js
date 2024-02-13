import React, { useEffect, useState } from 'react'

const LogOut = () => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if(checked){
            setChecked(false)
          }
    }, [checked])
    

  return (
    <div className='logoutContainer'>
        <label className='switch'>
            <input 
                onChange={(e) => setChecked(e.target.checked)}
                type='checkbox'
                checked={checked}
            />
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default LogOut