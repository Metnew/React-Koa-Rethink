import React, {Component} from 'react';
import {AppBar, Sidebar} from '../components'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNavOpen: false
        }
    }

    static propTypes = {
        children: React.PropTypes.node,
        location: React.PropTypes.object
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    // componentWillMount() {}
    //
    // componentWillReceiveProps() {}
    //
    // handleTouchTapLeftIconButton() {
    //     this.setState({
    //         leftNavOpen: !this.state.leftNavOpen
    //     });
    // }
    //
    // handleChangeRequestLeftNav(open) {
    //     this.setState({leftNavOpen: open});
    // }
    //
    // handleRequestChangeList(event, value) {
    //     this.context.router.push(value);
    //     this.setState({leftNavOpen: false});
    // }

    render() {
        // let {leftNavOpen} = this.state;

        // const {location, children} = this.props;
        // const router = this.context.router;
        // let docked = false;
        // let showMenuIconButton = true;

        // docked = true;
        // leftNavOpen = true;
        // showMenuIconButton = false;


        // styles.root.paddingLeft = 256;
        // styles.footer.paddingLeft = 256;

        return (
                <div className="page-layout">
                    <AppBar/>
                    {/* zDepth={0} title={title || ''} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton} showMenuIconButton={showMenuIconButton || null} */}
                    <div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <Sidebar/>
                    {/* <Sidebar open={leftNavOpen} style={styles.leftNav} location={location} docked={docked} onRequestChangeLeftNav={this.handleChangeRequestLeftNav} onRequestChangeList={this.handleRequestChangeList}/> */}
                </div>
        );
    }
}

export default App
