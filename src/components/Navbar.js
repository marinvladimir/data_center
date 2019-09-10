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
                <Link to="/CCM" className="linkz"> <button  className="link1"><img alt ="btn1" src={histo} />CCM</button></Link>
                <Link to="/hds_eac" className="linkz"> <button className="link1"><img alt ="btn1" src={test} />HDS-EAC</button></Link>
                <Link to="/CMU" className="linkz"> <button  className="link1"><img alt ="btn1" src={graph} />CMU</button></Link>
                <Link to="/NRU" className="linkz"> <button className="link1"><img alt ="btn1" src={Diskfrag} />NRU</button></Link>
                <Link to="/NRU_Ports" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Spine1</button></Link>
                <Link to="/NRU_Ports_Spine2" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Spine2</button></Link>
                <Link to="/NRU_Ports_Leaf1" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Leaf1</button></Link>
                <Link to="/NRU_Ports_Leaf2" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Leaf2</button></Link>
                <Link to="/NRU_Ports_Leaf3" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Leaf3</button></Link>
                <Link to="/NRU_Ports_Leaf4" className="linkz"> <button className="link1"><img alt ="btn1" src={Port} />NRU:Ports Leaf4</button></Link>
                <Link to="/Rte_Host" className="linkz"> <button className="link1"><img alt ="btn1" src={Host} />Rte_Host</button></Link>
                <Link to="/Rest_Response" className="linkz"> <button className="link1"><img alt ="btn1" src={Rest} />Rest_Response</button></Link>
             </div>
        </nav>
    )
}

export default Navbar