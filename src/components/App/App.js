import React, { Component } from 'react';
import Header from '../Header/Header';
import Player from '../Player/Player';
import Chessboard from '../Chessboard/Chessboard';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends Component {
    render() {
        const data = [];
        let id = 1;

        for (let i = 0; i < 15; ++i) {
            const arr = [];
            for (let j = 0; j < 15; ++j) {
                arr.push({
                    id: id,
                    type: id % 2 + 1,
                    x: j,
                    y: i
                });
                ++id;
            }
            data.push(arr);
        }

        return (
            <div className={styles.container}>
                <Header className={styles.header}/>
                <div className={styles.middle}>
                    <Player className={styles.left}/>
                    <Chessboard
                        className={styles.center}
                        data={data}
                    />
                    <Player className={styles.right}/>
                </div>
                <Footer className={styles.footer}/>
            </div>
        );
    }
}

export default App;
