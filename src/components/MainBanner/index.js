import React from 'react'
import { Link } from 'react-router'

import Images from '../../themes/images'
import { Wrapper, Content, Text, Heading, SignUpLink, Image } from './Style'

export default () => {
  return (
    <Wrapper>
      <Content>
          <Text>Agents are not just for people like Zlatan and Aguilera.<br/>
           Agentify helps you find the perfect opportunity and build your career.<br/>
           We work on your temrs, and your agent is always there for you</Text>
          <Heading>Get your own Agent</Heading>
          <Link to="/signup"><SignUpLink>Go</SignUpLink></Link>
          <Text smaller><Image src={ Images.clock } />2 min. Sign up - and it's free for talent (forever)</Text>
      </Content>
    </Wrapper>
  )
}