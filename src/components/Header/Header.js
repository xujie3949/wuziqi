import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        const className = classnames(
            this.props.className,
            styles.container
        );

        return (
            <div className={className}>
                五子棋小游戏
            </div>
        );
    }
}

export default Header;
