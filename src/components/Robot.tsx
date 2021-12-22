import React,{ useContext } from "react"; // 重要 *：useContext
import styles from "./Robot.module.css"
import { appContext,appSetStateContext } from '../AppState' // 重要 *：
interface RobotProps {
    id: number,
    name: string,
    email: string
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    // 重要 *：
    const value = useContext(appContext)
    const setState = useContext(appSetStateContext)
    
    const addToCart = () => {
        if (setState) {
            setState((state)=>{
                return {
                    ...state,
                    shoppingCart:{
                        items:[...state.shoppingCart.items, {id, name,email}]
                    }
                }
            })
        }
    }

    return (
        // <appContext.Consumer>
        //     {
        //          (value) => {
                    // return 
                     (<div className={styles.cardContainer}>
                        <img src={`https://robohash.org/${name}`} alt="" />
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>{name}</p>
                        <p>{value.username}</p>
                        <button onClick={addToCart}>加入购物车</button>
                    </div>)
        //         }
        //     }
        // </appContext.Consumer>
   )
}
export default Robot