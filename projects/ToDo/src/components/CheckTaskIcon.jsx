import {CheckMark} from "./icons/CheckMark"
import {XMark} from "./icons/XMark"

export const CheckTaskIcon = ({isCheck}) => {
    
    if(isCheck) {
        return <XMark/>
    }
    
    return <CheckMark/>
}