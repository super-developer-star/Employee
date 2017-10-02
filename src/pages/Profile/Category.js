import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

import Header from '../../components/Header';
import ProfileForm from '../../components/ProfileForm';
import TagList from '../../components/TagList';
import Images from '../../themes/images';
import { Wrapper, Content, Heading, FieldWrapper, SubHeading, ButtonWrapper, Button, Form, UnderLine, TagWrapper,  Navigation, NavigationButton, Img } from './Style';

const styles = {
    floatingLabelStyle: {
      color: '#565252'
    },
    floatingLabelShrinkStyle: {                
        display: 'none'
    }
}

class Category extends Component {
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
                <Header visible percent={2} save/>                
                <Content>                    
                    <Heading>Help us by answering<br/>a few questions</Heading>                                        
                    <FieldWrapper>
                        <SubHeading>Where do you see yourself?</SubHeading>
                        <SubHeading small>(Choose up to three)</SubHeading>
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
                        <SubHeading>Preferred technology</SubHeading> 
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
                    <TagWrapper>
                        <TagList data={ tags } removeTag={(index) => this.removeTag(index)} />
                    </TagWrapper>
                    <Navigation>
                        <NavigationButton prev onClick={() => this.pageNavigation('/signup')}><Img src={Images.leftArrow} alt="left" /></NavigationButton>
                        <NavigationButton onClick={() => this.pageNavigation('/profile/submition')}>Next<Img right src={Images.wRightArrow} alt="right" /></NavigationButton>                       
                    </Navigation>
                </Content>
            </Wrapper>
        )
    }
}

export default Category;