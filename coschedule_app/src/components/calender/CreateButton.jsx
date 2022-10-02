import { AddIcon, CalendarIcon, ChatIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList,Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import CreateButtonMenuItem from './CreateButtonMenuItem'
import dayjs from "dayjs";
import { DayContext } from '../../context/DayContext'
const CreateButton = () => {
  const {setDayschdule} = useContext(DayContext)
  return (
    
     <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton fontSize={"19px"} isActive={isOpen}  onClick={()=>{
                 // console.log(day.format("MMM-DD"))
                 setDayschdule(`${dayjs().format("DD-MMMM-YYYY")}`)
              
                }}>
        {<AddIcon marginRight={"0.1rem"}/> }  Create
      </MenuButton>
     <CreateButtonMenuItem/>
    </>
  )}
</Menu>
 
  )
}

export default CreateButton