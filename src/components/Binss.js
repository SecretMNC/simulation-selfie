import React, { Component } from 'react';
import '../App.css';

class Binss extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className='title'>SHELFIE</div>
                </header>

                <div className='shelves-container'>
                    <div className='shelf-container light-red-background'>
                        <div className='bin-title'>Bin 1</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='bin-title'>Bin 2</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='bin-title'>Bin 3</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='bin-title'>Bin 4</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='bin-title'>Bin 5</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Binss;
