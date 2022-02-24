import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
            </div>
        )
    }
}
