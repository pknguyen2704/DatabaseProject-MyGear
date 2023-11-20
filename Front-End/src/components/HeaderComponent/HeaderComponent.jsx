import React from 'react'
import {Badge, Col } from 'antd'
import { WapperHeader1, WrapperHeader, WrapperHeaderAccount, WrapperHeaderSmallHeader, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {Image} from 'antd'
import logoFile from '../../assets/images/MyGearLogo.svg'
const HeaderComponent = () => {
    return (
        <div style={{width: '100%', background:'linear-gradient(to right, #000, #515154)', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader>
            <Col span={5}>
                <WrapperTextHeader>
                    <Image src={logoFile} preview={false}/>
                </WrapperTextHeader>
            </Col>
            <Col span={13}>
                <ButtonInputSearch
                    size='large'
                    textButton='Tìm kiếm'
                    placeholder='Nhập tên sản phẩm bạn đang mong muốn'
                    bordered={false}
                    // onSearch={onSearch}
                />
            </Col>
            <Col span={6} style = {{display:'flex', gap:'54px', alignItems:'center'}}>
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