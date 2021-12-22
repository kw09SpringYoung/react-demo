import React from "react";
import FormComponent from './BasicStud_Children/FormComponent'
interface Props {

}
interface State {
    count:number
}

class BasicStudy extends React.Component <Props,State>{
    constructor (props:Props) {
        super(props)
        this.state = {
            count:0
        }
    }
    componentDidMount () {
        console.log('componentDidMount ' ,this.state.count)
    }
    static getDerivedStateFromProps () {
        console.log('getDerivedStateFromProps ')
        return 1
    }
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate',this.state.count)
        if (this.state.count > 4 )return false
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate ',prevState)
        return 'haha'
    }
    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('componentDidUpdate ',prevState,snapshot)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div className="basicStudy">
                <FormComponent></FormComponent>
                <div>
                    <span>{this.state.count}</span>
                    <button onClick={
                        ()=>{
                            this.setState({count:this.state.count<5 ? this.state.count+1: this.state.count 
                        })}
                    }>点击加 </button>

                    <button onClick = {(e)=>{
                        const elem = document.getElementsByClassName('basicStudy')[0]
                        const parentEle = elem.parentElement
                        parentEle?.removeChild(elem)
                     }}>删除</button>
            </div>
            </div>
        )
    }
}

export default BasicStudy