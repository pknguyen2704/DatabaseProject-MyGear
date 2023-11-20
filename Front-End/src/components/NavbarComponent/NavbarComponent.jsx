import React from 'react';
import { WrapperLableText, WrapperTextContent, WrapperTextPrice, WrapperTextValue } from './style';
import { Checkbox, Col, Rate, Row } from 'antd';

const NavbarComponent = () => {
    const onChange = () => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) =>{
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{marginLeft: 0}}value = {option.value}> {option.lable}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return (options.map((option) => {
                    console.log('check', option)
                    return (
                        <div style={{display:'flex', gap: '4px'}}>
                            <Rate style={{fontSize: '12px', }}disabled defaultValue={option} />
                            <span>Từ {option} sao</span>
                        </div>
                    )
                }))
            case 'price':
                return (options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                }))
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
            <WrapperTextContent>
                {renderContent('text', ['Laptop', 'Laptop Gaming', 'Main - CPU - VGA', 'Case - Nguồn - Phụ kiện', 'SSD - RAM - HDD', 'Apple', 'Màn hình', 'Bàn phím', 'Chuột, lót chuột', 'Tai nghe - Loa', 'Ghế - bàn', 'Phần mềm & Mạng', 'Phụ kiện'])}

            </WrapperTextContent>
        </div>
    );
}

export default NavbarComponent;
