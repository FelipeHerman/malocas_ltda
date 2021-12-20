import React, { Component } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Topbar extends Component {
    
    render() {
        return (
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Dashboard</span>
        );
    }
}

export default Topbar;