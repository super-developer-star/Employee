import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Header from '../../components/Header';
import { Wrapper, Content, Heading, ButtonWrapper, SocialButton, CircleButton, Text, Form, UnderLine, Img, SignUpButton } from './Style';
import Images from '../../themes/images'

const styles = {
    floatingLabelStyle: {
        color: '#565252'
    },
    focusStyle: {
        color: '#333',
        fontWeight: 700,
        transform: 'scale(0.75) translate(0px, -35px)'
    }
}

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isName: '',
            isEmail: '',
            isPlace: '',
            isRequired: false
        };
    }

    getName = (e) => {
        let name = (e.target.value).toLowerCase();
        this.setState({
            isName: name,
            isRequired: false
        });
    }

    getEmail = (e) => {
        let email = (e.target.value).toLowerCase();
        this.setState({
            isEmail: email,
            isRequired: false
        });
    }

    getPlace = (e) => {
        let place = (e.target.value).toLowerCase();
        this.setState({
            isPlace: place,
            isRequired: false
        });
    }

    gotoNextPage = () => {
        const { isName, isEmail, isPlace, isRequired } = this.state;
        let name = '', email = '', place = '';
        if(isName === '' || isName === 'error'){
            if(isName === ''){
                name = 'error';
                this.setState({isName: name})
            }      
        }
        if(isEmail === '' || isEmail === 'error'){
            if(isEmail === ''){
                email = 'error'
                this.setState({isEmail: email})
            }
        }
        if(isPlace === '' || isPlace === 'error'){
            if(isPlace === ''){
                place = 'error'
                this.setState({isPlace: place})
            }
        } 
        if(name !== 'error' && email !== 'error' && place !== 'error' && isName !== 'error' && isEmail !== 'error' && isPlace !== 'error'){
            // let credential = {};
            // credential = {
            //     Name: isName,
            //     Email: isEmail,
            //     Place: isPlace
            // }      
            browserHistory.push('/profile')
        }   else if(!isRequired){
                this.setState({
                isRequired: true,        
            })
        }
    }

    render() {
        const { isName, isEmail, isPlace, isRequired } = this.state;          
        return (
            <Wrapper>                      
                <Header visible percent={1}/>                       
                <Content>
                    <Heading>Sign up now</Heading>
                    <ButtonWrapper>
                        <SocialButton google>
                            <img src={Images.google} alt="google" />
                            <p>Sign up with Google</p>
                        </SocialButton>
                        <SocialButton>
                            <img src={Images.facebook1} alt="facebook" />
                            <p>Sign up with facebook</p>
                        </SocialButton>
                    </ButtonWrapper>
                    <CircleButton>Or</CircleButton>
                    { isRequired &&
                        <Text>Please fill in required fields</Text>
                    }
                    { isName !== 'error' ?
                        <Form>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getName}
                                    floatingLabelText="Full Name"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                  />              
                            </MuiThemeProvider> 
                            { isName === '' ?
                                <Img empty></Img> : <Img src={Images.check} alt="checked"></Img>
                            }
                        </Form> :                                
                        <Form error>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getName}
                                    floatingLabelText="Full Name"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider> 
                            <Img src={Images.warnning} alt="warnning"></Img>
                        </Form>
                    }
                    { isName !== 'error' ?
                        <UnderLine ></UnderLine> : <UnderLine empty></UnderLine>
                    }
                    { isEmail !== 'error' ?
                        <Form>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getEmail}
                                    floatingLabelText="E-mail"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider> 
                            { isEmail === '' ?
                                <Img empty></Img> : <Img src={Images.check} alt="checked"></Img>
                            }
                        </Form> : 
                        <Form error>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getEmail}
                                    floatingLabelText="E-mail"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider> 
                            <Img src={Images.warnning} alt="warnning"></Img>
                        </Form>
                    }
                    { isEmail !== 'error' ?
                        <UnderLine ></UnderLine> : <UnderLine empty></UnderLine>
                    }
                    { isPlace !== 'error' ?
                        <Form>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getPlace}
                                    floatingLabelText="Where do you live?"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider> 
                            { isPlace === '' ?
                                <Img empty></Img> : <Img src={Images.check} alt="checked"></Img>
                            }
                        </Form> :           
                        <Form error>
                            <MuiThemeProvider>
                                <TextField
                                    onChange={this.getPlace}
                                    floatingLabelText="Where do you live?"
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelShrinkStyle={styles.focusStyle}
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider> 
                            <Img src={Images.warnning} alt="warnning"></Img>
                        </Form>
                    }
                    { isPlace !== 'error' ?
                        <UnderLine ></UnderLine> : <UnderLine empty></UnderLine>
                    }
                    <ButtonWrapper signup>
                        <SignUpButton active={!isRequired} onClick={this.gotoNextPage}>Sign up</SignUpButton>
                    </ButtonWrapper>
                </Content>
            </Wrapper>
        )
    }
}

export default SignUp;