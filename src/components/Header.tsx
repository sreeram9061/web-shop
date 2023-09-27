import { useAppSelector } from '../store/store'
import Wrapper from './Wrapper'
import {NavLink, useNavigate} from "react-router-dom"

const Header = () => {
  const nav=useNavigate()
  const cartItems=useAppSelector(state=>state.cartReducer.cartItems)
  const favoriteItems=useAppSelector(state=>state.favoriteReducer.favoriteItems)
    const NavItems=[
      {title:"Home",nav:"/"},
      {title:"Cart",nav:"/cart"},
      {title:"favorite",nav:"/favorite"}
    ]
  return (
    <nav style={{width:"100%"}}>
        <Wrapper>
            <div className="container">
            <h3 onClick={()=>nav("/")}>LOGO</h3>
            <ul>
              {
                NavItems.map(item=>
                <li>
                  <NavLink to={item.nav as string}>{item.title}</NavLink>
                  {item.title=="Cart"&& cartItems.length>0&&(<label className='quantity' >{cartItems.length}</label>)}
                  {item.title=="favorite"&& favoriteItems.length>0&&(<label className='quantity' >{favoriteItems.length}</label>)}
                </li>)
              }
            </ul>
            </div>
        </Wrapper>
    </nav>
  )
}

export default Header