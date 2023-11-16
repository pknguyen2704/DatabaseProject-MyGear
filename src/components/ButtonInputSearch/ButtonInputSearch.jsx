import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton, bordered, 
        backgroundColorInput ='#fff', 
        backgroundColorButton ='rgb(12,92,182)',
        colorButton ='#fff'
    } = props
    return (
        <div style={{display:'flex'}}>
            <InputComponent size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor:backgroundColorInput}}
            />
            <ButtonComponent
                size={size} 
                styleButton={{backgroundColor:backgroundColorButton, border:!bordered && 'none'}} 
                styleTextButton={{color: colorButton}}
                textButton={textButton}
                icon={<SearchOutlined color={colorButton} style={{color:'#fff'}} />}
                />
        </div>
    )
}
export default ButtonInputSearch