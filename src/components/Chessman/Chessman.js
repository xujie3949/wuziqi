import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Chessman.module.css';

class Chessman extends Component {
    render() {
        const className = classnames(
            this.props.className,
            styles.container,
            this.props.type === 1 ? styles.black : styles.white
        );

        const style = {
            left: `${this.props.x - 17}px`,
            top: `${this.props.y - 17}px`
        };

        return (
            <div
                className={className}
                style={style}
            >
                {this.props.id}
            </div>
        );
    }
}

export default Chessman;
