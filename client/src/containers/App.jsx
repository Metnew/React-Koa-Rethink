require('normalize.css');
require('./../styles/App.scss');

import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite} from 'material-ui/styles/colors'
import {Spacing} from 'material-ui/styles/spacing';
import AppLeftNav from '../components/AppLeftNav'
import MyColorTheme from '../assets/MyColorTheme';

class App extends React.Component {
    constructor() {
        super();
        this.propTypes = {
            children: React.PropTypes.node,
            location: React.PropTypes.object
        }

        this.contextTypes = {
            router: React.PropTypes.object.isRequired
        }

        this.childContextTypes = {
            muiTheme: React.PropTypes.object
        }

    }

    getInitialState() {
        return {leftNavOpen: false, muiTheme: getMuiTheme(MyColorTheme)}
    }

    getChildContext() {
        return {muiTheme: this.state.muiTheme}
    }

    componentWillMount() {
        this.setState({muiTheme: this.state.muiTheme});
    }

    componentWillReceiveProps() {
        const newMuiTheme = this.state.muiTheme;
        this.setState({muiTheme: newMuiTheme});
    }

    getStyles() {

        const styles = {
            appBar: {
                position: 'fixed',
                // Needed to overlap the examples
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0
            },
            root: {
                paddingTop: Spacing.desktopKeylineIncrement,
                minHeight: 400
            },
            content: {
                margin: Spacing.desktopGutter
            },
            contentWhenMedium: {
                margin: `${Spacing.desktopGutter * 2}px ${Spacing.desktopGutter * 3}px`
            },
            footer: {
                textAlign: 'center'
            },
            leftNav: {},
            a: {
                color: darkWhite
            },
            p: {
                margin: '0 auto',
                padding: 0,
                maxWidth: 335
            },
            iconButton: {}
        };

        console.log(styles)

        return styles;
    }

    handleTouchTapLeftIconButton() {
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
    }

    handleChangeRequestLeftNav(open) {
        this.setState({leftNavOpen: open});
    }

    handleRequestChangeList(event, value) {
        this.context.router.push(value);
        this.setState({leftNavOpen: false});
    }

    render() {
        let {leftNavOpen} = this.state;
        const {prepareStyles} = this.state.muiTheme;

        const {location, children} = this.props;
        // const router = this.context.router;
        const title = 'Dashboard';

        const styles = this.getStyles();

        let docked = false;
        let showMenuIconButton = true;

        // if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
        //     docked = true;
        //     leftNavOpen = true;
        //     showMenuIconButton = false;
        //
        //     styles.leftNav = {
        //         zIndex: styles.appBar.zIndex - 1
        //     };
        //     styles.root.paddingLeft = 256;
        //     styles.footer.paddingLeft = 256;
        // }

        return (
            <div className="page-layout">
                <AppBar zDepth={0} title={title} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton} showMenuIconButton={showMenuIconButton} style={styles.appBar}/>
                <div style={prepareStyles(styles.root)}>
                    <div style={prepareStyles(styles.content)}>
                        {React.cloneElement(children)}
                    </div>
                </div>
                <AppLeftNav open={leftNavOpen} style={styles.leftNav} location={location} docked={docked} onRequestChangeLeftNav={this.handleChangeRequestLeftNav} onRequestChangeList={this.handleRequestChangeList}/>
            </div>
        );
    }
}

export default App;
