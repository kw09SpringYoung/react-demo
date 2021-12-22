import React, { useState } from "react";

interface AppStateValue {
    username: string,
    shoppingCart: {items: { id: number, name: string, email: string }[]}
}
const defaultContextValue: AppStateValue = {
    username: '阿莱克斯',
    shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined)

// 返回appContext.Provider组件，包裹全部子组件
export const AppStateProvider: React.FC = (props) => {
    const [state,setState] = useState(defaultContextValue)
    
    
    return (

        // state
        <appContext.Provider value={state}>

            {/* setState */}
            <appSetStateContext.Provider value={setState}>
                {props.children}
                {setTimeout(function(){console.log(state)},2000)}
            </appSetStateContext.Provider>
            
        </appContext.Provider>
    )
}