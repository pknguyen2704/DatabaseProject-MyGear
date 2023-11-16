import React from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/inputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import LoginLogo from '../../assets/images/login.png'
import { Divider, Image } from 'antd'

const SignInPage = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh'}}>
            <div style={{width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex'}}>
                <WrapperContainerLeft>
                    <h1> Xin chào</h1>
                    <p> Đăng nhập vào tài khoản</p>
                    <InputForm style={{ marginBottom: '10px'}} placeholder="abc@gmail.com"/>
                    <InputForm placeholder="password"/>

                    <ButtonComponent 
                        size={40}
                        styleButton={{
                            backgroundColor: 'rgb(255,57,69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px',
                        }} 
                        styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                        textButton={'Đăng nhập'}>
                    </ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight> Tạo tài khoản tại đây</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={LoginLogo} preview={false} alt="login logo" height='203px' width='203px'/>
                    <h4> Mua sắm tại My Gear </h4>

                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;
