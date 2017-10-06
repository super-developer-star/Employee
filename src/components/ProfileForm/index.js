import React from 'react'
import {Form, Checkbox } from 'react-form'

import { Wrapper, FieldWrapper, ButtonWrapper, Button, SubHeading } from './Style'

class ProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subRoles: {}
        }
    }

    render() {
        return (
            <Wrapper>
                <Form 
                    defaultValues={this.props.subRoles}
                    onSubmit={(values => {
                        console.log(values)
                        this.props.getValues(values)
                    })}
                >
                    { ({ values }) => {                                                
                        return (
                            <form>
                            { this.props.role === 'Engineering' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.Backend_Engineer}><Checkbox field="Backend_Engineer" value="Backend_Engineer"/>Backend Engineer</Button>
                                        <Button active={values.Frontend_Engineer}><Checkbox field="Frontend_Engineer" value="Frontend_Engineer"/>Frontend Engineer</Button>
                                        <Button active={values.Fullstack_Engineer}><Checkbox field="Fullstack_Engineer" value="fullstack"/>Fullstack Engineer</Button>                                                                        
                                        <Button active={values.Mobile}><Checkbox field="Mobile" value="Mobile"/>Mobile</Button>
                                        <Button active={values.DevOps_and_Tooling}><Checkbox field="DevOps_and_Tooling" value="DevOps_and_Tooling"/>DevOps and Tooling</Button>
                                        <Button active={values.QA}><Checkbox field="QA" value="QA"/>QA</Button>
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>Other</Button> */}
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.role === 'Sales' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.Sales_Representative}><Checkbox field="Sales_Representative" value="Sales_Representative"/>Sales Representative</Button>
                                        <Button active={values.Account_Executive}><Checkbox field="Account_Executive" value="Account_Executive"/>Account Executive</Button>
                                        <Button active={values.Sales_Manager}><Checkbox field="Sales_Manager" value="Sales_Manager"/>Sales Manager</Button>                                                                                     
                                        <Button active={values.Sales_Director}><Checkbox field="Sales_Director" value="Sales_Director"/>Sales Director</Button>                                                              
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>other</Button> */}
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.role === 'Product' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.Product_Analyst}><Checkbox field="Product_Analyst" value="Product_Analyst"/>Product Analyst</Button>
                                        <Button active={values.Product_Marketing_Manager}><Checkbox field="Product_Marketing_Manager" value="Product_Marketing_Manager"/>Product Marketing Manager</Button>
                                        <Button active={values.Product_Manager}><Checkbox field="Product_Manager" value="Product_Manager"/>Product Manager</Button>                                                                           
                                        <Button active={values.Product_Line_Director}><Checkbox field="Product_Line_Director" value="Product_Line_Director"/>Product Line Director</Button>                                 
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>other</Button> */}
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.role === 'Marketing' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.Growth_Hacker}><Checkbox field="Growth_Hacker" value="Growth_Hacker"/>Growth Hacker</Button>
                                        <Button active={values.Marketing_Manager}><Checkbox field="Marketing_Manager" value="Marketing_Manager"/>Marketing Manager</Button>
                                        <Button active={values.SEO_Manager}><Checkbox field="SEO_Manager" value="SEO_Manager"/>SEO Manager</Button>                                   
                                        <Button active={values.Community_Manager}><Checkbox field="Community_Manager" value="Community_Manager"/>Community Manager</Button>
                                        <Button active={values.Copy}><Checkbox field="Copy" value="Copy"/>Copy</Button>                            
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>other</Button> */}
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.role === 'Design' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.UX_Researcher}><Checkbox field="UX_Researcher" value="UX_Researcher"/>UX Researcher</Button>
                                        <Button active={values.UI_Designer}><Checkbox field="UI_Designer" value="UI_Designer"/>UI Designer</Button>
                                        <Button active={values.UI.UX_Designer}><Checkbox field="UI.UX_Designer" value="UI.UX_Designer"/>UI/UX Designer</Button>                                  
                                        <Button active={values.Art_Director}><Checkbox field="Art_Director" value="Art_Director"/>Art Director</Button>
                                        <Button active={values.Digital_Designer}><Checkbox field="Digital_Designer" value="Digital_Designer"/>Digital Designer</Button>
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>other</Button> */}
                                    </ButtonWrapper>
                                </FieldWrapper>
                            }
                            { this.props.role === 'Finance' &&
                                <FieldWrapper>
                                    <SubHeading>{this.props.role}</SubHeading>                        
                                    <ButtonWrapper>
                                        <Button active={values.Analyst}><Checkbox field="Analyst" value="Analyst"/>Analyst</Button>
                                        <Button active={values.Accountant}><Checkbox field="Accountant" value="Accountant"/>Accountant</Button>
                                        <Button active={values.Controller}><Checkbox field="Controller" value="Controller"/>Controller</Button>                                
                                        <Button active={values.Finance_Manager}><Checkbox field="Finance_Manager" value="Finance_Manager"/>Finance Manager</Button>
                                        <Button active={values.CEO}><Checkbox field="CEO" value="CEO"/>CEO</Button>
                                        {/* <Button active={values.other}><Checkbox field="other" value="other"/>other</Button>                  */}
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

export default ProfileForm;