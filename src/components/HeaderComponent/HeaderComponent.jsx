import React from 'react'
import {Badge, Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderSmallHeader, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
            <Col span={6}>
                <WrapperTextHeader>
                MyGear
                </WrapperTextHeader>
            </Col>
            <Col span={12}>
                <ButtonInputSearch
                    size='large'
                    textButton='Tìm kiếm'
                    placeholder='Nhập tên sản phẩm bạn đang mong muốn'
                    bordered={false}
                    // onSearch={onSearch}
                />
            </Col>
            <Col span={6} style = {{display:'flex', gap:'20px', alignItems:'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style ={{fontSize: '30px'}}/>
                    <div>
                        <WrapperHeaderSmallHeader> Đăng nhập/Đăng ký </WrapperHeaderSmallHeader>
                        <div>
                            <WrapperHeaderSmallHeader> Tài khoản </WrapperHeaderSmallHeader>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <Badge count={4} size="small"> 
                        <ShoppingCartOutlined style ={{fontSize: '30px', color: '#fff'}}/>
                    </Badge>
                    <WrapperHeaderSmallHeader>Giỏ hàng</WrapperHeaderSmallHeader>
                </div>
            </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent