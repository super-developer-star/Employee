import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { browserHistory } from 'react-router'

import Header from '../../../components/Header'
import TagList from '../../../components/TagList'
import Images from '../../../themes/images'
import { 
    Wrapper,
    Content,
    FieldWrapper, 
    ButtonWrapper,
    Button,
    Input, 
    Heading, 
    SubHeading, 
    TagWrapper, 
    Img, 
    Navigation,
    PrevButton, 
    NavigationButton, 
    UnderLine,
    TextFieldWrapper,
    FlexWrapper,
    AddButton,
    IconWrapper } from './Style'

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
        super()
        this.state = {
            tags: [],
            beverage: '',
            status: null
        }
    }

    addTag = (text) => {        
        let temp = this.state.tags.slice()
        temp.push(text)
        this.setState({ tags: temp })
    }

    removeTag = (index) => {
        let temp = this.state.tags.slice()
        temp.splice(index, 1)
        this.setState({ tags: temp })
    }

    getBeverage = (beverage) => {
        this.setState({
            beverage: beverage
        })
    }

    getBeverage = (num) => {
        this.setState({
            status: num
        })
    }

    getText = (e) => {        
        if(e.keyCode === 13 && e.target.value) {            
            this.addTag(e.target.value)  
            e.target.value = ''          
        }
    }

    pageNavigation = (path) => {
        browserHistory.push(path)
    }

    render() {
        const { tags, beverage, status } = this.state
        return (
            <Wrapper>
                <Header visible percent={3} save/>
                <Content>
                    <Heading>Almost there...</Heading>
                    <FieldWrapper>
                        <SubHeading>Where would you like to work?</SubHeading> 
                        <Input>
                            <MuiThemeProvider>
                                <TextField    
                                    onKeyDown={this.getText}                                                       
                                    floatingLabelText="Type city"
                                    floatingLabelStyle={styles.floatingLabelStyle}  
                                    floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider>                         
                        </Input>                                            
                        <UnderLine ></UnderLine>                      
                    </FieldWrapper>
                    <TagWrapper>
                        <TagList data={ tags } removeTag={(index) => this.removeTag(index)} />
                    </TagWrapper>
                    <FieldWrapper>
                        <SubHeading>What is your preffered coffee?</SubHeading>                        
                        <ButtonWrapper>
                            <Button active={beverage === 'Espresso'} onClick={() => this.getBeverage('Espresso')}>Espresso</Button>
                            <Button active={beverage === 'Cappucino'} onClick={() => this.getBeverage('Cappucino')}>Cappucino</Button>
                            <Button active={beverage === 'Flat white'} onClick={() => this.getBeverage('Flat white')}>Flat white</Button>                                
                            <Button active={beverage === 'Cortado'} onClick={() => this.getBeverage('Cortado')}>Cortado</Button>
                            <Button active={beverage === 'Caffe latte'} onClick={() => this.getBeverage('Caffe latte')}>Caffe latte</Button>
                            <Button active={beverage === 'Macchiato'} onClick={() => this.getBeverage('Macchiato')}>Macchiato</Button>                 
                            <Button active={beverage === 'Tea'} onClick={() => this.getBeverage('Tea')}>Tea</Button>                 
                            <Button active={beverage === 'Undecided'} onClick={() => this.getBeverage('Undecided')}>Undecided<img src={Images.remove} alt="" /></Button>                 
                        </ButtonWrapper>
                    </FieldWrapper>
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
                                <Input add>
                                    <MuiThemeProvider>
                                        <TextField    
                                            onKeyDown={this.getText}                                                       
                                            floatingLabelText="http://"
                                            floatingLabelStyle={styles.floatingLabelStyle}  
                                            floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                            underlineShow={false}
                                        />              
                                    </MuiThemeProvider>                         
                                </Input>                                            
                                <UnderLine add></UnderLine> 
                            </TextFieldWrapper>
                            <AddButton>Add</AddButton>
                        </FlexWrapper>                     
                    </FieldWrapper>
                    <FieldWrapper>
                        <SubHeading>What's your current status?</SubHeading>                        
                        <ButtonWrapper>
                            <Button active={status === 1} onClick={() => this.getStatus(1)}>Active</Button>
                            <Button active={status === 2} onClick={() => this.getStatus(1)}>Passive</Button>
                            <Button active={status === 3} onClick={() => this.getStatus(1)}>It's complicated</Button>                                                                                                                
                            <Button active={status === 4} onClick={() => this.getStatus(1)}>Undecided<img src={Images.remove} alt="" /></Button>                    
                        </ButtonWrapper>
                    </FieldWrapper>
                    <Navigation>
                        <PrevButton prev onClick={() => this.pageNavigation('/profile/talent/category')}><Img src={Images.leftArrow} alt="left" /></PrevButton>
                        <NavigationButton onClick={() => this.pageNavigation('/profile/talent/candidate')}>Submit<Img right src={Images.wRightArrow} alt="right" /></NavigationButton>                       
                    </Navigation>
                </Content>
            </Wrapper>
        )
    }
}

export default Submition