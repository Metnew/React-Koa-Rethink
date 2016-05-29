require('normalize.css');
require('./../styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import AppLeftNav from './partials/AppLeftNav'

// import IconButton from 'material-ui/lib/icon-button';
import {Spacing} from 'material-ui/lib/styles';
import {StyleResizable} from 'material-ui/lib/mixins';

import {Colors} from 'material-ui/lib/styles';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyColorTheme from './assets/MyColorTheme';

const App = React.createClass({

    propTypes: {
        children: React.PropTypes.node,
        location: React.PropTypes.object
    },

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    mixins: [StyleResizable],

    getInitialState() {
        return {leftNavOpen: false, muiTheme: ThemeManager.getMuiTheme(MyColorTheme)}
    },

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme
        }
    },

    componentWillMount() {
        this.setState({
            muiTheme: this.state.muiTheme
        });
    },

    componentWillReceiveProps() {
        const newMuiTheme = this.state.muiTheme;
        this.setState({
            muiTheme: newMuiTheme
        });
    },


    getStyles() {
        const darkWhite = Colors.darkWhite;

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

        if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) || this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
            styles.content = Object.assign(styles.content, styles.contentWhenMedium);
        }

        return styles;
    },

    handleTouchTapLeftIconButton() {
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
    },

    handleChangeRequestLeftNav(open) {
        this.setState({leftNavOpen: open});
    },

    handleRequestChangeList(event, value) {
        this.context.router.push(value);
        this.setState({leftNavOpen: false});
    },

    render() {
        let {leftNavOpen} = this.state;
        const {prepareStyles} = this.state.muiTheme;

        const {location, children} = this.props;
        const router = this.context.router;
        const title =
      router.isActive('/new/group') ? 'New Group' :
      router.isActive('/new/user') ? 'New User' :
      router.isActive('/saved/users') ? 'Saved Users' :
      router.isActive('/saved/users/:id') ? 'Saved User' :
      router.isActive('/saved/groups') ? 'Saved Group' :
      router.isActive('/saved/groups/:id') ? 'Saved Group' :
      router.isActive('/settings') ? 'Settings' : 'Dashboard';

        const styles = this.getStyles();

        let docked = false;
        let showMenuIconButton = true;

        if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
            docked = true;
            leftNavOpen = true;
            showMenuIconButton = false;

            styles.leftNav = {
                zIndex: styles.appBar.zIndex - 1
            };
            styles.root.paddingLeft = 256;
            styles.footer.paddingLeft = 256;
        }

        return (
            <div className="page-layout">
                <AppBar
                    zDepth={0}
                    title={title}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    showMenuIconButton={showMenuIconButton}
                    style={styles.appBar}/>
                <div style={prepareStyles(styles.root)}>
                    <div style={prepareStyles(styles.content)}>
                        {React.cloneElement(children)}
                    </div>
                </div>
                <AppLeftNav
                    open={leftNavOpen}
                    style={styles.leftNav}
                    location={location}
                    docked={docked}
                    onRequestChangeLeftNav={this.handleChangeRequestLeftNav}
                    onRequestChangeList={this.handleRequestChangeList}/>
            </div>
        );
    }
})

export default App;
