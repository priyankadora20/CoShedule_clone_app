import dayjs from "dayjs";

import { createContext, useState } from "react";

export const DayContext = createContext()


export const DayContextProvider = ({children})=>{

 const [daysechdule,setDayschdule] = useState("")
 
 const [newproject,setNewproject] = useState()
// console.log(newproject)
const [projectRefNo,setProjectrefNo] = useState('')
// console.log(projectRefNo)
 return ( 
  <DayContext.Provider value={{daysechdule,setDayschdule,newproject,setNewproject,projectRefNo,setProjectrefNo}}>
   {children}
  </DayContext.Provider>
 )
}