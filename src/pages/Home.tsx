import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import { ProductType, useGetProductsQuery } from '../redux/endpoints'


const Home = () => {
    const{data,isLoading,isFetching,isError}= useGetProductsQuery()
    


  return (
    <div className='home' style={isError?{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"80vh"}:{}}>
      <>
      {(isLoading||isFetching? Array.from(new Array(20)): data)?.map((item,i)=>{
        
        if(!item){
          return <CardSkeleton key={i}/>
        }else{
          return <Card key={item.id as number} data={item} />
        }
      })}
      {
        isError && (
          <div style={{padding:"16px" , border:"2px solid red", borderRadius:"4px"}}>
            <h2 style={{color:"red"}} >{"something is wrong"}</h2>
          </div>
        )
      }
      <div className="botton" style={{height:"50px"}}>

      </div>
      </>
    </div>
  )
}
export default Home
