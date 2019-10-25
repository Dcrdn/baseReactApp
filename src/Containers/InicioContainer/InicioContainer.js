import React, { Component } from 'react'
import Searcher from '../../Components/Searcher/Searcher';
import './InicioContainer.css';
import Image from '../../img/cuarto.jpg';


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

export default class InicioContainer extends Component {
    render() {
        return (
            <div class="fondo" style={styles.paperContainer}>
                      <Searcher />
            </div>
        )
    }
}
