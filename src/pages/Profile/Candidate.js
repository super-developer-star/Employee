import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';

import CircularProgressbar from '../../components/CircularProgressbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tags from '../../components/Tags';
import { 
    Wrapper,
    Heading,
    UserWrapper,
    Avatar,
    User,
    ToggleWrapper,
    DetailWrapper,
    CircleWrapper,
    BgCircle,
    Detail,
    TagWrapper,
    FieldWrapper } from './Candidate.style';
import Images from '../../themes/images';

const styles = {
    thumbOff: {
      backgroundColor: '#4cbf69',
      width: '35px',
      height: '35px',
      marginTop: '3px'
    },
    trackOff: {
      backgroundColor: '#c5eac5',
      height: '35px',
      width: '70px'
    },
    thumbSwitched: {
      backgroundColor: '#d8f1d8',
      marginTop: '3px'
    },
    trackSwitched: {
      backgroundColor: '#c5eac5',      
    },
  };

class TagList extends Component {
    constructor(props){
        super(props);        
        this.state = {
            tags: this.props.data
        }
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

    render() {
        return (
            <Tags data={ this.state.tags } removeTag={(index) => this.removeTag(index)} addTag={ (text) => this.addTag(text) } />
        )
    }
}

class Candidate extends Component {
    constructor(){
        super();
        this.state = {
            percentage: 65,
            opportunities: ["Backend Developer", "Frontend Developer"],
            skills: ["HTML5", "CSS", "Angular", "Drupal"],
            locations: ["Copenhagen", "Stockholm"]
        }
    }

    render() {
        const { percentage, opportunities, skills, locations } = this.state;
        return (
            <Wrapper>
                <Header />
                <Heading>Your Profile</Heading>
                <UserWrapper>
                    <Avatar src={Images.user} alt="user" />
                    <User>
                        <h1>Christian Henriksen</h1>
                        <p>Engineering</p>                        
                        <ToggleWrapper>
                            <p>Active</p>
                            <MuiThemeProvider>
                                <Toggle                                                      
                                    thumbStyle={styles.thumbOff}
                                    trackStyle={styles.trackOff}
                                    thumbSwitchedStyle={styles.thumbSwitched}
                                    trackSwitchedStyle={styles.trackSwitched}                            
                                />
                            </MuiThemeProvider>
                            <p>Passive</p>
                        </ToggleWrapper>                        
                    </User>
                </UserWrapper>
                <DetailWrapper>
                    <CircleWrapper>
                        <BgCircle>
                            <CircularProgressbar
                                percentage={percentage}
                                strokeWidth="12"
                                sqSize="140"/>                            
                        </BgCircle>
                        <p>complete</p>
                    </CircleWrapper>                    
                    <Detail>
                        <h1>Contacts details</h1>
                        <div>
                            <div>
                                <p>E-mail</p>
                                <p>Phone</p>
                                <p>Skype</p>    
                            </div>
                            <div>
                                <p>christian.henriksen@gmail.com</p>
                                <p>+45 66778899</p>
                                <p>codewizard_dk</p>    
                            </div>
                        </div>                                              
                    </Detail>
                </DetailWrapper>                
                <FieldWrapper>
                    <h1>Social media</h1>
                    <div>
                        <img src={Images.github} alt="git" />
                        <p>github.com/christianhenriksen</p>
                    </div>
                    <div>
                        <img src={Images.linkedin} alt="linkedin" />
                        <p>linkedin.com/in/christianhenriksen</p>
                    </div>
                    <div>
                        <img src={Images.facebook} alt="facebook" />
                        <p>facebook.com/christianhenriksen</p>
                    </div>
                </FieldWrapper>                
                <TagWrapper>
                    <h1>Opportunities I'm interested in</h1>
                    <TagList data={opportunities} />
                </TagWrapper>
                <TagWrapper>
                    <h1>My Skills</h1>
                    <TagList data={skills} />
                </TagWrapper>
                <TagWrapper>
                    <h1>Locations I'm interested in</h1>
                    <TagList data={locations} />
                </TagWrapper>
                <Footer />
            </Wrapper>
        )
    }
}

export default Candidate;