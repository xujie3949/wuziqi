import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Chessboard.module.css';

import Chessman from '../Chessman/Chessman';

class Chessboard extends Component {
    render() {
        const className = classnames(
            this.props.className,
            styles.container
        );

        return (
            <div className={className}>
                {this.props.data.map(row => row.map(col => this.renderChessman(col)))}
            </div>
        );
    }

    renderChessman(item) {
        const x = item.x * 34 + 23;
        const y = item.y * 34 + 23;

        return <Chessman
            key={item.id}
            id={item.id}
            type={item.type}
            x={x}
            y={y}
        />;
    }
}

export default Chessboard;
