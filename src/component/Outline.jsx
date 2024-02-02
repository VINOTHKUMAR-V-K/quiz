import React from 'react'
import stu from '../assets/student.png'
import teach from '../assets/teacher.png'
import test from '../assets/test.png'
import sub from '../assets/subject.png'
import '../style/dashboard.css'
import { useNavigate } from 'react-router-dom';
function Outline() {
    const navigate=useNavigate();
     const teacherClick=()=>{
        navigate(`/team`)
     }
    return (
        <div>
            <div className='container'>
               <div className='row '>
               <div className='border border-dark rounded-3 border-1 p-4 stu mx-5 g-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                 <h2>Students</h2>
                 <img src={stu} height={'150px'} width={'150px'} alt="not found" />
               </div>
                <div className='border border-dark rounded-3 border-1 p-4 teach  mx-5 g-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12' onClick={()=>teacherClick()}>
                <h2>Teachers</h2>
                <img src={teach}  height={'150px'} width={'150px'} alt="not found" />
                </div>
                <div className='border border-dark rounded-3 border-1 p-4 sub mx-5 g-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <h2>Subjects</h2>
                <img src={sub} alt="not found"  height={'150px'} width={'150px'} />
                </div>
                <div className='border border-dark rounded-3 border-1 p-4 test  mx-5 g-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <h2>Test</h2>
                <img src={test} alt="not found"  height={'150px'} width={'150px'} />
                </div>
               </div>
            </div>
        </div>
    )
}

export default Outline;