import React, {Component} from 'react';
import '../App.css';

class Create extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className='title'>SHELFIE</div>
                </header>
                <div className="create-container">
                    <img src="http://lorempixel.com/200/200/business/" alt=""/>
                    <div className='input-box-title'>
                        Name
                    </div>
                    <input type="text" className='input-box'/>
                    <div className='input-box-title'>
                        Price
                    </div>
                    <input type="text" className='input-box'/>
                    <div className='shelves-container'>
                        <div className='shelf-container green-background'>
                            <div className='add-inventory'>+ Add to Inventory</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Create;
