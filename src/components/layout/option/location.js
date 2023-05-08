import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from 'axios'
const Location = ({setLocation}) => {
const [lockerlocation, setLockerLocation] = useState([])
const lockerLocation = ""
const getLockerLocation = () => {
    axios.get('https://pandorav2-0-vlak.onrender.com/api/getAll/location').then(res=>
    {
        console.log(res.data)
        setLockerLocation(res.data)
    })
}
useEffect(() => {
    getLockerLocation()
},[])
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    
                    <select id="locker-location"  onChange={(e)=> setLocation(e.target.value)} className="fs-15 rounded border-dark text-dark col-md-6 height-66 text-left">
                        <option value="0000">Select location</option>
                            {
                            lockerlocation
                                .map(
                                    item => 
                                    {
                                        
                                        const lockerLocationOption = <option value={item.location} key={item.location}>{item.lockerLocationName}</option>  
                                        return lockerLocationOption
                                    }
                                    
                                )
                                
                            } 
                       
                    </select>
                </div>
            </div>
        </>
    )
}

export default Location