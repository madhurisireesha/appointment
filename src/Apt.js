import './apt.css'
const Apt=(props)=>{
    const{details,toggleIsLike}=props
    const{name,date,isFavourite,id}=details
    const star=isFavourite?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    const liki=()=>{
        toggleIsLike(id)
    }
    
    return(
        <div className="m">
          
             <p>{name}</p> 
            <p>{date}</p>
            <button onClick={liki} className='star'><img src={star}/></button>
        </div>


    )
}
export default Apt