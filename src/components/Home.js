import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className='title'>SHELFIE</div>
                </header>

                <div className='shelves-container '>
                    <div className='shelf-container light-red-background'>
                        <div className='shelf-title '>Shelf A</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='shelf-title '>Shelf B</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='shelf-title '>Shelf C</div>
                    </div>
                    <div className='shelf-container light-red-background'>
                        <div className='shelf-title '>Shelf D</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
