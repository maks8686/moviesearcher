import { Card } from "../card/card"
import { useTypedSelector } from './../../hooks/useTypedSelector';

export const CardHolder:React.FC=()=>{
  const movies=useTypedSelector(state=>state.movie.results)
  if (movies){return(
    <div>
      {movies.map((item)=>
      {return(
         <Card key={item.id} title={item.title} overview={item.overview} release_date={item.release_date} poster_path={item.poster_path}/>)
     })}
    </div>
  )
}
return(null)
}