import React, { useEffect, useState } from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

import Input from './components/Input'
import InputFocus from './components/InputFocus'
import BasicStudy from './components/BasicStudy';

import styles from './App.module.css'; // 把css转化成了js对象
// console.log(typeof styles) // object
interface Props {
  // userName:string
}
const App: React.FC<Props> = (props) => {

  // loading
  const [loading, setLoading] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [roboGallery, setRoboGallery] = useState<any[]>([])
  // 错误信息
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `第${count}次`
  }, [count])
  useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
          const result = await fetch('http://jsonplaceholder.typicode.com/users')
          let data = await result.json()
          setRoboGallery(data)
        } catch (err: any) {
          setError(err.message)
        }
        setLoading(false)
    }
    fetchData()
    
  }, [])
  type Obj = {
    inputFocus:any
  }
  const obj:Obj = {
    inputFocus:""
  }
  obj.inputFocus = React.createRef.bind(InputFocus)()
  
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <BasicStudy></BasicStudy>

      <Input></Input>
      <p>
        <InputFocus ref={obj.inputFocus} ></InputFocus>
        <button onClick={()=>{obj.inputFocus.current.focusInput()}}>button</button>
      </p>
      
      {/* <h2>{props.userName}</h2> */}
      <button onClick={() => {
        setCount(count + 1)
      }}>Click</button>
      <span> {count}</span>
      <ShoppingCart />
      {/* loading为false的时候显示数据列表 */}
      {(error && error !== "") && <h2>网站出错：{error}</h2>}
      {!loading ?
        <div className={styles.robotList}>
          {roboGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} key={r.id} />
          )}
        </div>
        // loading为true的时候加载loading遮罩层
        : <div style={{ height: '100vh', width: '100vw', background: '#c49d9d', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, top: 0 }}><h1>(loading)加载中...</h1></div>
      }
      
    </div>

  );

}

export default App;
