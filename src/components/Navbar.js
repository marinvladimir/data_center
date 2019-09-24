import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Host from '../host.png';
import histo from '../histo.png';
import graph from '../graph.png';
import home from '../home.png';
import test from '../test.png';
import Diskfrag from '../Page_Defrag-logo.png';
import Rest from '../rest.png';

const Navbar = () => {

    return(
        
        <nav className="navigation">
            <div className="container">
                <Link to="/data_center/Home" className="linkz"> <button className="link1"><img alt ="btn1" src={home} />Home</button></Link>
                <Link to="/data_center/Machine1" className="linkz"> <button  className="link1"><img alt ="btn1" src={histo} />Machine1</button></Link>
                <Link to="/data_center/Machine2" className="linkz"> <button className="link1"><img alt ="btn1" src={test} />Machine2</button></Link>
                <Link to="/data_center/Machine3" className="linkz"> <button  className="link1"><img alt ="btn1" src={graph} />Machine3</button></Link>
                <Link to="/data_center/Cooler" className="linkz"> <button className="link1"><img alt ="btn1" src={Diskfrag} />Cooler</button></Link>
                <Link to="/data_center/Generator" className="linkz"> <button className="link1"><img alt ="btn1" src={Host} />Generator</button></Link>
                <Link to="/data_center/Rest_Response" className="linkz"> <button className="link1"><img alt ="btn1" src={Rest} />Rest_Response</button></Link>
             </div>
        </nav>
    )
}

export default Navbar