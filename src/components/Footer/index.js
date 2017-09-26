import React from 'react'
import { browserHistory } from 'react-router'
import { Container, Logo, List, ListItems, Link, MobileList} from './Style'
import Images from '../../themes/images'

export default class Footer extends React.Component {

    gotoPage = (path) => {
        browserHistory.push(path);
    }

    render() {
        return (
            <Container>
                <Logo>agentify<span>.me</span></Logo>
                <List>
                    <ListItems><Link onClick={() =>this.gotoPage('/home')}>Home</Link></ListItems>
                    <ListItems><Link href="">About</Link></ListItems>
                    <ListItems><Link href="">Contact</Link></ListItems>
                    <ListItems><Link href="">Privacy and GDPR</Link></ListItems>
                    <ListItems social><Link href=""><img src={Images.linkedin} alt="linkedin"/></Link></ListItems>
                    <ListItems social><Link href=""><img src={Images.facebook} alt="facebook"/></Link></ListItems>
                </List>
                <MobileList>
                    <ListItems>
                        <Link onClick={() =>this.gotoPage('/home')}>Home</Link>
                        <Link href="">About</Link>
                        <Link href="">Contact</Link>
                    </ListItems>
                    <ListItems><Link href="">Privacy and GDPR</Link></ListItems>
                    <ListItems social>
                        <Link social href=""><img src={Images.linkedin} alt="linkedin"/></Link>
                        <Link social href=""><img src={Images.facebook} alt="facebook"/></Link>
                    </ListItems>
                </MobileList>
            </Container>
        )
    }
}
