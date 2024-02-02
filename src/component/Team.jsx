import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import stu from '../assets/stu.jpg'
import { useNavigate } from 'react-router-dom';

function Team() {
    const navigate=useNavigate();
     const homeClick=()=>{
        navigate(`/`)
     }
    return (
        <div className='bg'>
            <h1  style={{margin:'auto',color:'purple', fontFamily:'Roboto'}} className='pt-5'>OUR TEAM</h1>
            <hr style={{width:'50%',margin:'auto'}} />
            <div className='d-flex justify-content-evenly pt-5 flex-wrap '>
            <Card style={{ width: '18rem' }} className='cs'>
                <Card.Img variant="top" src={stu}/>
                <Card.Body>
                    <Card.Title style={{color:"darkgrey"}}>Mr.Kalaivaanan</Card.Title>
                    <Card.Text>
                        <h3>Tamil professor</h3>
                        <h4>A student's wisdom is more valuable than a professor's knowledge.</h4>
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cs'>
                <Card.Img variant="top" src={stu}/>
                <Card.Body>
                    <Card.Title style={{color:"darkgrey"}}>Mr.Kalaivaanan</Card.Title>
                    <Card.Text>
                        <h3>Tamil professor</h3>
                        <h4>A student's wisdom is more valuable than a professor's knowledge.</h4>
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cs'>
                <Card.Img variant="top" src={stu}/>
                <Card.Body>
                    <Card.Title style={{color:"darkgrey"}}>Mr.Kalaivaanan</Card.Title>
                    <Card.Text>
                        <h3>Tamil professor</h3>
                        <h4>A student's wisdom is more valuable than a professor's knowledge.</h4>
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <button className='btn-outline-warning my-5 rounded-3' style={{margin:'auto'}} onClick={()=>homeClick()}>Go back to Home page</button>
        </div>
    )
}

export default Team