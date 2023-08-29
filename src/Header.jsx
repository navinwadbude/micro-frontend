import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Header = (props) => {
    const notify = () => toast.success("Welcome User!");
    
    useEffect(() => {
            notify();
    }, [props?.value]);
    
    return (
        <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
            Header Micro-Fronted |
            <ToastContainer theme='colored'/>
        </div>
    );
}

export default Header;
