import React from "react";
interface Props {

}
class InputFocus extends React.Component<Props> {
    inputRef: React.RefObject<any>;
    constructor (props:Props) {
        super(props)
        this.inputRef = React.createRef()
        this.focusInput =this.focusInput.bind(this)
    }
    focusInput () {
        this.inputRef.current.focus()
    }
    render () {
        return (
            <input id= 'inputFocus' type="text" ref={this.inputRef} />
        )
    }
}
export default InputFocus