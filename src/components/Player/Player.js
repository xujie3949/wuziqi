import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Player.module.css';

class Player extends Component {
    render() {
        const className = classnames(
            this.props.className,
            styles.container
        );

        return (
            <div className={className}>
            </div>
        );
    }
}

export default Player;
