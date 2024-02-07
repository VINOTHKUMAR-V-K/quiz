import React, { useState } from 'react'
import '../style/style.css'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../assets/images-removebg-preview.png'
import Outline from './Outline';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();
    const navigate=useNavigate();
    const toggle = () => {
        toggleSidebar();
        if (toggled) {
            console.log(true);
            collapseSidebar();
        } else {
            console.log(false);
            collapseSidebar();
        }
    };
    const TeamClick=()=>{
       navigate(`/team`)
    }
    const contactClick=()=>{
        navigate('/review')
    }
    const profileClick=()=>{
        navigate(`/profile`)
    }
    const TermClick=()=>{
        navigate(`/terms&condition`)
    }
    return (
        <div>
            <div className='bg'>
                <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                    <div>
                        <Sidebar style={{ height: "130vh" }} breakPoint="sm" transitionDuration={800}>
                            <Menu>
                                <MenuItem icon={<MenuOutlinedIcon />} style={{ textAlign: "center" }} onClick={() => { collapseSidebar() }} ><h2>Student</h2></MenuItem>
                                <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                               <MenuItem icon={<PeopleOutlinedIcon />} onClick={()=>TeamClick()}>Team</MenuItem>
                                <MenuItem icon={<ContactsOutlinedIcon />} onClick={()=>contactClick()}>Contacts</MenuItem>
                                <MenuItem icon={<CalendarTodayOutlinedIcon />}>Notification</MenuItem>
                                <MenuItem icon={<ReceiptOutlinedIcon />} onClick={()=>profileClick()}>Profile</MenuItem>
                                <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                                <MenuItem icon={<HelpOutlineOutlinedIcon />} onClick={()=>TermClick()}>Terms and Condition</MenuItem>
                            </Menu>
                        </Sidebar>
                    </div>


                    <div className='head d-flex flex-column justify-content-between mx-5'>

                        <div >
                            <img src={logo} height={"150px"} width={"150px"} onClick={() => { toggle() }} />
                           <div className='wave'>
                           <span style={{ "--i": 1 }}>Q</span>
                            <span style={{ "--i": 2 }}>U</span>
                            <span style={{ "--i": 3 }}>i</span>
                            <span style={{ "--i": 4 }}>Z</span>
                            <span style={{ "--i": 5 }}></span>
                            <span style={{ "--i": 6 }}> </span>
                            <span style={{ "--i": 7 }}>H</span>
                            <span style={{ "--i": 8 }}>O</span>
                            <span style={{ "--i": 9 }}>U</span>
                            <span style={{ "--i": 10 }}>R</span>
                            <span style={{ "--i": 11 }}>.</span>
                            <span style={{ "--i": 12 }}>.</span>
                            <span style={{ "--i": 13 }}>.</span>
                           </div>
                        </div>
                        <br/>
                        <div className='out text-center'>
                            <Outline />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home