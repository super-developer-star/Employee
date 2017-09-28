import React from 'react'

import { Wrapper, Fraction, Slash, Number, ProgressBar, ActiveBar } from './Style'

class Progress  extends React.Component {

    render() {        
        if(this.props.visible){
            return (            
                <Wrapper>
                    <Fraction>
                        <Number>{this.props.percent}</Number>
                        <Slash />
                        <Number static>3</Number>
                    </Fraction>
                    <ProgressBar percent={this.props.percent}>
                        <ActiveBar />
                    </ProgressBar>
                </Wrapper>
            )
        } else {
            return null            
        }             
    }
}

export default  Progress;