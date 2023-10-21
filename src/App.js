import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Apt from './Apt.js'
const list1=[{
  //id:'',
  //name:'',
  //date:'',
  //isFavourite:''
}]
class App extends Component{
  state={
    name:'',
    date:'',
    list2:list1
  }
  addName=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  addDate=(event)=>{
    this.setState({
      date:event.target.value
    })
  }
  addApt=(event)=>{
    event.preventDefault()
    const{name,date}=this.state
    const newapt={
      id:uuidv4(),
      name,
      date,
      isFavourite:false
    }
   this.setState(prevState=>({
    list2:[...prevState.list2,newapt],
    name:'',
    date:''
   }))
  }
  toggleIsLike=(id)=>{
    this.setState((prevState)=>(
      {list2:prevState.list2.map(eachapt=>{
        if(id===eachapt.id)
        {
          return{...eachapt,isFavourite:!eachapt.isFavourite}
        }
        return eachapt
      })}
    ))
  }
  selectFavourite=()=>{
    this.setState((prevState)=>({
      list2:prevState.list2.filter((fav)=>{
        if(fav.isFavourite===true)
        {
          return{...fav}
        }
        
      })})
    )
  }
    

  render(){
    const{name,date,list2}=this.state
   console.log(list2)
    return(
      <div className='container'>
        <div className='middle'>
        <h1>Add Appointment</h1>
        
      <form className="entireform" onSubmit={this.addApt}>
        <div className='first'>
          Title
        <div className='one'>
      <input type="text" onChange={this.addName} value={name}/></div>
      Date:
      <div className='two'>
      <input type="date" onChange={this.addDate} value={date}/></div>
      <div className='three'>
      <button type="submit">Add</button></div>
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" className='imagi' alt="sample"/>
      
      </form>
        
      <hr/>
      <div className='add'>
        <div><h2>Appointments</h2></div>
         <div><button className='but' onClick={this.selectFavourite}>Filter</button></div> 
      </div>
      <div className='bottom'>
       {list2.map((details)=>(
        <Apt details={details} toggleIsLike={this.toggleIsLike} />
      ))} </div>
      
      </div> 
        
      </div>
    )
  }
}
export default App