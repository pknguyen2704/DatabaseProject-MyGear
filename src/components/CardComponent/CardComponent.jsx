import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell} from './style';
import { StarFilled } from '@ant-design/icons'
import hotGiftLogo from '../../assets/images/hotgift.png'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height: '200px'}}
            style={{ width: 200 }}
            bodyStyle={{padding: '10px'}}
            cover={<img alt="example" src="https://product.hstatic.net/200000722513/product/u-16gpu-16gb-512gb-silver-mphh3sa-a-1_87cecf4aadae4c0aa6d5b6aad5b75396_55741b9991794fa3bb046f135c575269_grande.png" />}
            >
            <img
                src={hotGiftLogo} 
                style={{width:'68px', height: '14px', position: 'absolute', top: -1, left:- 1, borderTopLeftRadius: '3px'}}
                alt="logo"
                />
            <StyleNameProduct>Macbook Pro 13-inch</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>4.5</span><StarFilled style={{font: '12px', color: 'rgb(253,216,54)'}}/>
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </span>
            </WrapperReportText>
            <WrapperPriceText> 
                <span style={{marginRight: '8px'}}> 20.000.000</span>
                <WrapperDiscountText>-24%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    );
}

export default CardComponent;
