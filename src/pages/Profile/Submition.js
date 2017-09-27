import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

import Header from '../../components/Header';
import TagList from '../../components/TagList';
import ProfileForm from '../../components/ProfileForm';
import Images from '../../themes/images';
import { 
    Wrapper,
    Content,
    FieldWrapper, 
    Form, 
    Heading, 
    SubHeading, 
    TagWrapper, 
    Img, 
    Navigation, 
    NavigationButton, 
    UnderLine,
    TextFieldWrapper,
    FlexWrapper,
    AddButton,
    IconWrapper,
    Icon } from './Style';

const styles = {
    floatingLabelStyle: {
      color: '#565252'
    },
    floatingLabelShrinkStyle: {                
        display: 'none'
    }
}

class Submition extends Component {
    constructor(){
        super();
        this.state = {
            tags: []
        };
    }

    addTag = (text) => {        
        let temp = this.state.tags.slice();
        temp.push(text);
        this.setState({ tags: temp });
    }

    removeTag = (index) => {
        let temp = this.state.tags.slice();
        temp.splice(index, 1);
        this.setState({ tags: temp });
    }

    getText = (e) => {        
        if(e.keyCode === 13 && e.target.value) {            
            this.addTag(e.target.value);            
        }
    }

    pageNavigation = (path) => {
        browserHistory.push(path);
    }

    render() {
        const { tags } = this.state;
        return (
            <Wrapper>
                <Header percent={3} />
                <Content>
                    <Heading>Almost there...</Heading>
                    <FieldWrapper>
                        <SubHeading>Where would you like to work?</SubHeading> 
                        <Form>
                            <MuiThemeProvider>
                                <TextField    
                                    onKeyDown={this.getText}                                                       
                                    floatingLabelText="Type city"
                                    floatingLabelStyle={styles.floatingLabelStyle}  
                                    floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider>                         
                        </Form>                                            
                        <UnderLine ></UnderLine>                      
                    </FieldWrapper>
                    <TagWrapper>
                        <TagList data={ tags } removeTag={(index) => this.removeTag(index)} />
                    </TagWrapper>
                    <ProfileForm item={'coffee'} />
                    <FieldWrapper>
                        <SubHeading>Please help us understand your profile</SubHeading> 
                        <IconWrapper>
                            <img src={Images.github} alt="github" />
                            <img src={Images.google1} alt="google" /> 
                            <img src={Images.facebook} alt="facebook" />
                            <img src={Images.linkedin} alt="linkedin" />
                            <img src={Images.behance} alt="behance" />                                                                                  
                        </IconWrapper>
                        <FlexWrapper>
                            <TextFieldWrapper>    
                                <Form add>
                                    <MuiThemeProvider>
                                        <TextField    
                                            onKeyDown={this.getText}                                                       
                                            floatingLabelText="http://"
                                            floatingLabelStyle={styles.floatingLabelStyle}  
                                            floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                            underlineShow={false}
                                        />              
                                    </MuiThemeProvider>                         
                                </Form>                                            
                                <UnderLine add></UnderLine> 
                            </TextFieldWrapper>
                            <AddButton>Add</AddButton>
                        </FlexWrapper>                     
                    </FieldWrapper>
                    <ProfileForm item={'status'} />
                    <Navigation>
                        <NavigationButton prev onClick={() => this.pageNavigation('/profile/category')}><Img src={Images.leftArrow} alt="left" /></NavigationButton>
                        <NavigationButton onClick={() => this.pageNavigation('/profile/completion')}>Submit<Img right src={Images.wRightArrow} alt="right" /></NavigationButton>                       
                    </Navigation>
                </Content>
            </Wrapper>
        )
    }
}

export default Submition;