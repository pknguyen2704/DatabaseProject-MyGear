import { Col, Row, Image, InputNumber } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/macbook.png';
import imageProductSmall from '../../assets/images/macbookSmall.png';
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import { StarFilled, PlusOutlined, MinusOutlined }from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailComponent = () => {
    const onChange = () => {}
    return (
        <div>
            <Row style={{padding: '16px', background: '#fff', borderRadius: '4px'}}>
                <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight: '8px'}}>
                    <Image src={imageProduct} alt="image product" preview={false}/>
                    <Row style={{paddingTop: '10px', justifyContent:'space-between'}}>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image product small" preview={false}/>
                        </WrapperStyleColImage>
                    </Row>
                </Col>
                <Col span={14} style={{paddingLeft: '10px'}}>
                    <WrapperStyleNameProduct>
                        Macbook Pro 14-inch
                    </WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}}/>
                        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>20.000.000 VNĐ</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className="address">Số 8, ngõ 3, phố Cầu trì, Sơn Tây, Hà Nội</span>
                        <span className="change-address"> - Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <div style={{margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                        <div style={{marginBlock: '10px'}}> Số lượng </div>
                        <WrapperQualityProduct>
                        <button style ={{border: 'none', background: 'transparent'}}>
                            <MinusOutlined style={{color: '#000', fontSize: '20px'}}/>
                        </button>
                            <WrapperInputNumber defaultValue={1} onChange={onChange} size='small' />
                        <button style ={{border: 'none', background: 'transparent'}}>
                            <PlusOutlined style={{color: '#000', fontSize: '20px'}}/>
                        </button>
                        </WrapperQualityProduct>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <ButtonComponent 
                            size={40}
                            styleButton={{
                                backgroundColor: 'rgb(255,57,69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }} 
                            styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                            textButton={'Chọn mua'}>
                        </ButtonComponent>

                        <ButtonComponent 
                            size={40}
                            styleButton={{
                                backgroundColor: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(12,92,192)',
                                borderRadius: '4px'
                            }} 
                            styleTextButton={{color: 'rgb(12,92,192)', fontSize: '15px', fontWeight: '700'}}
                            textButton={'Thêm vào giỏ hàng'}>
                        </ButtonComponent>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetailComponent;
