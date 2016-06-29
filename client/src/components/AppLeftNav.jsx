import React from 'react';

import LeftNav from 'material-ui/lib/left-nav';
import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import zIndex from 'material-ui/lib/styles/zIndex';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

let SelectableList = SelectableContainerEnhance(List);

const AppLeftNav = React.createClass({

    propTypes: {
        docked: React.PropTypes.bool.isRequired,
        location: React.PropTypes.object.isRequired,
        onRequestChangeLeftNav: React.PropTypes.func.isRequired,
        onRequestChangeList: React.PropTypes.func.isRequired,
        open: React.PropTypes.bool.isRequired,
        style: React.PropTypes.object
    },

    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
        router: React.PropTypes.object.isRequired
    },

    handleRequestChangeLink(event, value) {
        window.location = value;
    },

    getStyles() {
        return {
            logo: {
                width: '100%',
                height: 240
            }
        }
    },

    render() {
        const {
            location,
            docked,
            onRequestChangeLeftNav,
            onRequestChangeList,
            open,
            style
        } = this.props;
        const {prepareStyles} = this.context.muiTheme;
        const styles = this.getStyles();

        return (
            <LeftNav style={style} docked={docked} open={open} onRequestChange={onRequestChangeLeftNav} containerStyle={{
                zIndex: zIndex.leftNav - 100
            }}>
                <div style={prepareStyles(styles.logo)}>
                    <img src=""/>
                </div>
                <SelectableList valueLink={{
                    value: location.pathname,
                    requestChange: onRequestChangeList
                }}>
                    <ListItem value="/">Dashboard</ListItem>
                </SelectableList>
                <Divider/>

            </LeftNav>
        )
    }
})

export default AppLeftNav;
