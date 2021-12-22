import React from "react";
interface Props {

}
interface State {

}
class Input extends React.Component <Props, State> {
    
    inputRef: React.RefObject<any>;
    input: HTMLInputElement | null | undefined;
    
    constructor (props:Props) {
        super(props)
        this.inputRef = React.createRef()
        // this.inputFocus = this.inputFocus.bind(this)

    }
    // inputFocus =() =>{
    //     this.inputRef.current.focus()
    // }
    render () {
        return (
            <div>
                <input type="text" id='inpu1' ref= {(input)=>{this.input = input}} />
                <button onClick={()=>{console.log(this.input)}}>buttonInput1</button>
                
                <input type="text" id='input2' ref= {this.inputRef} />
                <button onClick={ ()=>{console.log(this.inputRef.current)}}>buttonInput2</button>
            </div>
        )
    }

}
export default Input