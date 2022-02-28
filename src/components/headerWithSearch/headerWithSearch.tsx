import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { StyledHeader } from "./headerWithSearch.styled"
import { getTopMovieDataSaga } from './../../store/action';

export const HeaderWithSearch =()=>{
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTopMovieDataSaga())
  })
  const[inputName,setInputName]=useState('')
  
 
  return (
    <StyledHeader>
    <div><h2>мувисерчер</h2></div>
    <div><h3>фильмы</h3></div>
    <div><h3>сериалы</h3></div>
    <input type='text' placeholder="введи название" defaultValue={inputName}/>
    </StyledHeader>
  )
}