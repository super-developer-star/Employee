import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 

import Header from '../../components/Header';
import { Wrapper, Content, Heading, ButtonWrapper, GoogleButton, FacebookButton, CircleButton, Text, Form, UnderLine, Img, SignUpButton } from './Style';
import Images from '../../themes/images'
import { session } from '../../services/session'
import { signUpRequest } from '../../actions/auth'

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

    componentWillMount() {
        const { isLoggedIn } = this.props;
        if(isLoggedIn){
            console.log('login', isLoggedIn);
            browserHistory.push('/profile');
        }
    }

    responseGoogle(response) {
        const { dispatch } = this.props;
        const profile = response.profileObj
        const name = profile.name.split(" ")
        const obj = {
            firstName: name[0],
            LastName: name[1],
            Email: profile.email,
            accessToken: response.accessToken,
            picture: profile.imageUrl
        }
        sessionStorage.setItem('google', obj.accessToken)
        (this.props.actions.signUpRequest('Signup1', obj))
            .then(() => {
                browserHistory.push('/profile');
            })
            .catch(() => {
                //TODO: any processing
            })    
    }

    responseFacebook(response) {        
        const name = response.name.split(" ");
        const obj = {
            firstName: name[0],
            LastName: name[1],
            Email: response.email,
            accessToken: response.accessToken,
            picture: response.picture.data.url
        }
        sessionStorage.setItem('fb', obj.accessToken)  
        (this.props.actions.signUpRequest('Signup1', obj))
        .then(() => {
            browserHistory.push('/profile');
        })
        .catch(() => {
            //TODO: any processing
        })         
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
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        >
                            <GoogleButton google>
                                <img src={Images.google} alt="google" />
                                <p>Sign up with Google</p>
                            </GoogleButton>
                        </GoogleLogin>                        
                        <FacebookButton>
                            <FacebookLogin
                            appId="459046371113157"
                            autoLoad={true}
                            fields="name,email,picture,location"
                            callback={this.responseFacebook}
                            cssClass='test'
                            textButton="Sign up with Facebook"
                            />                            
                        </FacebookButton>
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

/* Map state to props */
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

/* Map Actions to Props */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            signUpRequest
        }, dispatch)
    };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);