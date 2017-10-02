import React, { Component } from 'react'
import Switch from 'react-toggle-switch'
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css" 
import { RangeSlider } from 'reactrangeslider';

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
    FieldWrapper,
    Slider,
    Info,
    Contact } from './Candidate.style';
import Images from '../../themes/images';

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
            switched: false,
            opportunities: ["Backend Developer", "Frontend Developer"],
            skills: ["HTML5", "CSS", "Angular", "Drupal"],
            locations: ["Copenhagen", "Stockholm"],
            value : {
                start: 30,
                end: 80
            }
        }
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

    onChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { percentage, opportunities, skills, locations, value } = this.state;
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
                                <Switch onClick={this.toggleSwitch} on={this.state.switched}/>                            
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
                        <div>
                            <img src={Images.github} alt="git" />
                            <img src={Images.linkedin} alt="linkedin" />
                            <img src={Images.facebook} alt="facebook" />                            
                        </div>
                        <div>
                            <p>github.com/christianhenriksen</p>
                            <p>linkedin.com/in/christianhenriksen</p>
                            <p>facebook.com/christianhenriksen</p>
                        </div>
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
                <Slider>
                    <h1>Salary range</h1>
                    <RangeSlider
                        step={1}
                        value={value}
                        min={0}
                        max={100}
                        onChange={this.onChange}                        
                    /> 
                    <div>
                        <a>eur {value.start}.000</a>    
                        <a>eur {value.end}.000</a>
                    </div>               
                </Slider>
                <Info>
                    <h1>Additional info</h1>
                    <p>
                    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
                    </p>
                </Info>
                <Contact>
                    <a>Contact my agent</a>
                </Contact>
                <Footer />
            </Wrapper>
        )
    }
}

export default Candidate;