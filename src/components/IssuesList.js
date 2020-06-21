import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux"
import IssuesCard from './IssuesCard'

const IssuesList = () => {
  const state = useSelector(state => state.issues)
  const dispatch = useDispatch()
  const [issues, setIssues]= useState()


useEffect(()=>{
dispatch(setIssues(state))
}, [dispatch])

  return (
    <div>
      {issues.map(info => {
        return(
        <IssuesCard key={info.id} name={info.name} desc={info.desc} state={info.state} zip={info.zip} image={info.image} vote={info.vote}/>
        )
      })}
      
    </div>
  )
}

export default IssuesList
