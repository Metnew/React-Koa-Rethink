import React from 'react';
import { Link, routerShape } from 'react-router'

// const MenuItem = ({ meta, children, ...rest }) => (
//   <Link to={getRoute(meta)} {...rest}>
//     {children || meta.name}
//   </Link>
// )
// MenuItem.propTypes = {
//   activeClassName: PropTypes.string,
//   children: PropTypes.node,
//   className: PropTypes.string,
//   meta: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired,
// }
// MenuItem.defaultProps = {
//   activeClassName: 'active',
//   className: 'item',
// }

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        docked: React.PropTypes.bool,
        location: React.PropTypes.object,
        onRequestChangeLeftNav: React.PropTypes.func,
        onRequestChangeList: React.PropTypes.func,
        open: React.PropTypes.bool,
        style: React.PropTypes.object
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleRequestChangeLink(event, value) {
        window.location = value;
    }

    getStyles() {
        return {

        }
    }

    render() {
        const {
            location,
            docked,
            onRequestChangeLeftNav,
            onRequestChangeList,
            open
        } = this.props;
        const style = this.getStyles();

        return (
            <sidebar></sidebar>
            // <Menu vertical fixed='left' inverted style={{
            //     ...style
            // }}>
            //     <Menu.Item>
                    // <Logo spaced='right' size='mini'/>
                    // <strong>
                    //     Semantic-UI-React &nbsp;
                    //     <small>
                    //         <em>{pkg.version}</em>
                    //     </small>
                    // </strong>
            //    {/* </Menu.Item>
            //</Menu> */}
        )
    }
}

export default Sidebar;
