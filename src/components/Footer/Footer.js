import React, { Component } from 'react';
import classnames from 'classnames';
import { Checkbox } from 'antd';
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        const className = classnames(
            this.props.className,
            styles.container
        );

        return (
            <div className={className}>
                <div className="ckbs">
                    <Checkbox>禁手</Checkbox>
                    <Checkbox>先手</Checkbox>
                </div>
                <div className="btns"></div>
            </div>
        );
    }
}

export default Footer;
