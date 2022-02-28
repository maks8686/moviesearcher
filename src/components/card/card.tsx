interface CardProps{
  title:string,
  overview:string,
  release_date:string,
  poster_path:string
}

export const Card=({title,overview}:CardProps)=>{
  return(
 <div>
   <h3>{title}</h3>
   <div>{overview}</div>
   
 </div>
  )
}