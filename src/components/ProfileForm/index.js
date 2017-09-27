import React from 'react'
import {Form, Checkbox } from 'react-form'

import { Wrapper, FieldWrapper, ButtonWrapper, Button, SubHeading } from './Style'
import Images from '../../themes/images'

export default class ProfileForm extends React.Component {



    render() {
        return (
            <Wrapper>
                <Form>
                    { ({ submitForm, values }) => {
                        return (
                            <form onSubmit={submitForm}>
                            { this.props.item === 'Engineering' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.backend}><Checkbox field="backend" value="backend"/>Backend Engineer</Button>
                                        <Button active={values.frontend}><Checkbox field="frontend" value="frontend"/>Frontend Engineer</Button>
                                        <Button active={values.fullstack}><Checkbox field="fullstack" value="fullstack"/>Fullstack Engineer</Button>                                                                        
                                        <Button active={values.mobile}><Checkbox field="mobile" value="mobile"/>Mobile</Button>
                                        <Button active={values.devops}><Checkbox field="devops" value="devops"/>DevOps and Tooling</Button>
                                        <Button active={values.qa}><Checkbox field="qa" value="qa"/>QA</Button>
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'Sales' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.sr}><Checkbox field="sr" value="sr"/>Sales Representative</Button>
                                        <Button active={values.ae}><Checkbox field="ae" value="ae"/>Account Executive</Button>
                                        <Button active={values.sm}><Checkbox field="sm" value="sm"/>Sales Manager</Button>                                                                                     
                                        <Button active={values.sd}><Checkbox field="sd" value="sd"/>Sales Director</Button>                                                              
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'Product' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.pa}><Checkbox field="pa" value="pa"/>Product Analyst</Button>
                                        <Button active={values.pmm}><Checkbox field="pmm" value="pmm"/>Product Marketing Manager</Button>
                                        <Button active={values.pm}><Checkbox field="pm" value="pm"/>Product Manager</Button>                                                                           
                                        <Button active={values.ld}><Checkbox field="ld" value="ld"/>Product Line Director</Button>                                 
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'Marketing' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.gh}><Checkbox field="gh" value="gh"/>Growth Hacker</Button>
                                        <Button active={values.mm}><Checkbox field="mm" value="mm"/>Marketing Manager</Button>
                                        <Button active={values.sm}><Checkbox field="sm" value="sm"/>SEO Manager</Button>                                   
                                        <Button active={values.cm}><Checkbox field="cm" value="cm"/>Community Manager</Button>
                                        <Button active={values.cp}><Checkbox field="cp" value="cp"/>Copy</Button>                            
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'Design' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.ur}><Checkbox field="ur" value="ur"/>UX Researcher</Button>
                                        <Button active={values.ud}><Checkbox field="ud" value="ud"/>UI Designer</Button>
                                        <Button active={values.uxd}><Checkbox field="uxd" value="uxd"/>UI/UX Designer</Button>                                  
                                        <Button active={values.ad}><Checkbox field="ad" value="ad"/>Art Director</Button>
                                        <Button active={values.dd}><Checkbox field="dd" value="dd"/>Digital Designer</Button>
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'Finance' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.item}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.an}><Checkbox field="an" value="an"/>Analyst</Button>
                                        <Button active={values.ac}><Checkbox field="ac" value="ac"/>Accountant</Button>
                                        <Button active={values.ct}><Checkbox field="ct" value="ct"/>Controller</Button>                                
                                        <Button active={values.fm}><Checkbox field="fm" value="fm"/>Finance Manager</Button>
                                        <Button active={values.ceo}><Checkbox field="ceo" value="ceo"/>CEO</Button>
                                        <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>                 
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'coffee' &&
                                <FieldWrapper>
                                    <SubHeading>What is your preffered coffee?</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.es}><Checkbox field="es" value="es"/>Espresso</Button>
                                        <Button active={values.ca}><Checkbox field="ca" value="ca"/>Cappucino</Button>
                                        <Button active={values.fw}><Checkbox field="fw" value="fw"/>Flat white</Button>                                
                                        <Button active={values.co}><Checkbox field="co" value="co"/>Cortado</Button>
                                        <Button active={values.cl}><Checkbox field="cl" value="cl"/>Caffe latte</Button>
                                        <Button active={values.ma}><Checkbox field="ma" value="ma"/>Macchiato</Button>                 
                                        <Button active={values.tea}><Checkbox field="tea" value="tea"/>Tea</Button>                 
                                        <Button active={values.un}><Checkbox field="un" value="un"/>Undecided<img src={Images.remove} alt="" /></Button>                 
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.item === 'status' &&
                                <FieldWrapper>
                                    <SubHeading>What's your current status?</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.ac}><Checkbox field="ac" value="ac"/>Active</Button>
                                        <Button active={values.pa}><Checkbox field="pa" value="pa"/>Passive</Button>
                                        <Button active={values.com}><Checkbox field="com" value="com"/>It's complicated</Button>                                                                                                                
                                        <Button active={values.un}><Checkbox field="un" value="un"/>Undecided<img src={Images.remove} alt="" /></Button>                    
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            </form>
                        )
                    }}
                </Form>
            </Wrapper>
        )
    }
}