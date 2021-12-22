import React from "react";
interface Props {

}
interface State {
    username: string
}

class FormComponent extends React.Component<Props, State>{
    inputEle: any;
    
    constructor(props:Props) {
        super(props)
        this.state = {
            username: ""
        }
        this.nameChanged = this.nameChanged.bind(this)
        this.submitData = this.submitData.bind(this)
    }

    nameChanged(e: any) {
        this.setState({ username: e.target.value })
    }

    submitData (e: { preventDefault: () => void; }) {
        // 获得input中的值
       const data =  this.inputEle.value
       console.log(data)
       e.preventDefault()
    }

    render() {
        return (
            <div>
                {/* 受控表单 */}
                <form action="">
                    <p>
                        受控表单 :表单控件中的值由组件的 state 对象来管理，state对象中存储的值和表单控件中的值时同步状态的
                        <p>{this.state.username}</p>
                        <input type="text" value={this.state.username}
                            onChange={this.nameChanged}
                        />
                    </p>
                </form>

                {/*  非受控表单*/}
                <form action="" onSubmit={this.submitData}>
                    <p>非受控表单:表单元素的值由 DOM 元素本身管理。 </p>
                    <input type="text" ref={(inputEle)=>this.inputEle = inputEle} />
                </form>
            </div>
        )
    }
}

export default FormComponent