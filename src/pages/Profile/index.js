import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

import Header from '../../components/Header';
import ProfileForm from '../../components/ProfileForm';
import TagList from '../../components/TagList';
import Images from '../../themes/images';
import { Wrapper, Content, Title, FieldWrapper, Text, ButtonWrapper, Button, Form, UnderLine, TapWrapper,  Navigation, NavigationButton, Img } from './Style';

export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : 'Engineering',
            tags: []           
        }
    }

    getItem = (item) => {
        console.log(item);
        this.setState({
            item: item
        });
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
        const { item, tags } = this.state;
        return (
            <Wrapper>
                <Header percent={2} />
                <Content>                    
                    <Title>Help us by answering<br/>a few questions</Title>                                        
                    <FieldWrapper>
                        <Text>Where do you see yourself?</Text>
                        <Text small>(Choose up to three)</Text>
                        <ButtonWrapper>
                            <Button active={item === 'Engineering'} onClick={() => this.getItem('Engineering')}>Engineering</Button>
                            <Button active={item === 'Sales'} onClick={() => this.getItem('Sales')}>Sales</Button>
                            <Button active={item === 'Product'} onClick={() => this.getItem('Product')}>Product</Button>
                            <Button active={item === 'Marketing'} onClick={() => this.getItem('Sales')}>Marketing</Button>
                            <Button active={item === 'Design'} onClick={() => this.getItem('Design')}>Design</Button>
                            <Button active={item === 'Finance'} onClick={() => this.getItem('Finance')}>Finance</Button>
                            <Button active={item === 'Other'} onClick={() => this.getItem('Other')}>Other</Button>                            
                        </ButtonWrapper>
                    </FieldWrapper>
                    <ProfileForm item={item} />
                    <FieldWrapper>
                        <Text>Preferred technology</Text> 
                        <Form>
                            <MuiThemeProvider>
                                <TextField    
                                    onKeyDown={this.getText}                                                       
                                    floatingLabelText="Type here..."
                                    floatingLabelStyle={styles.floatingLabelStyle}  
                                    floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider>                         
                        </Form>                                            
                        <UnderLine ></UnderLine>                      
                    </FieldWrapper>
                    <TapWrapper>
                        <TagList data={ tags } removeTag={(index) => this.removeTag(index)} />
                    </TapWrapper>
                    <Navigation>
                        <NavigationButton prev onClick={() => this.pageNavigation('/signup')}><Img src={Images.leftArrow} alt="left" /></NavigationButton>
                        <NavigationButton onClick={() => this.pageNavigation('/complete')}>Next<Img right src={Images.wRightArrow} alt="right" /></NavigationButton>                       
                    </Navigation>
                </Content>
            </Wrapper>
        )
    }
}

const styles = {
    floatingLabelStyle: {
      color: '#565252'
    },
    floatingLabelShrinkStyle: {                
        display: 'none'
    }
  }