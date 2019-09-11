import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Host from '../host.png';
import histo from '../histo.png';
import graph from '../graph.png';
import home from '../home.png';
import test from '../test.png';
import Diskfrag from '../Page_Defrag-logo.png';
import Port from '../port.png';
import Rest from '../rest.png';

const Navbar = () => {

    return(
        
        <nav className="navigation">
            <div className="container">
                <Link to="/home" className="linkz"> <button className="link1"><img alt ="btn1" src={home} />Home</button></Link>
                <Link to="/Machine1" className="linkz"> <button  className="link1"><img alt ="btn1" src={histo} />Machine1</button></Link>
                <Link to="/Machine2" className="linkz"> <button className="link1"><img alt ="btn1" src={test} />Machine2</button></Link>
                <Link to="/Machine3" className="linkz"> <button  className="link1"><img alt ="btn1" src={graph} />Machine3</button></Link>
                <Link to="/Cooler" className="linkz"> <button className="link1"><img alt ="btn1" src={Diskfrag} />Cooler</button></Link>
                <Link to="/Cooler_Port1" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port1</button></Link>
                <Link to="/Cooler_Port2" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port2</button></Link>
                <Link to="/Cooler_Port3" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port3</button></Link>
                <Link to="/Cooler_Port4" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port4</button></Link>
                <Link to="/Cooler_Port5" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port5</button></Link>
                <Link to="/Cooler_Port6" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />Cooler_Port6</button></Link>
                <Link to="/Generator" className="linkz"> <button className="link1"><img alt ="btn1" src={Host} />Generator</button></Link>
                <Link to="/Rest_Response" className="linkz"> <button className="link1"><img alt ="btn1" src={Rest} />Rest_Response</button></Link>
             </div>
        </nav>
    )
}

export default Navbar