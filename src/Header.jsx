import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Header = (props) => {
    const notify = () => toast.success("Wow so easy!");
    
    useEffect(() => {
        if(props?.value){
            notify();
        }
    }, [props]);
    
    return (
        <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
            Header Title |
            <ToastContainer />
        </div>
    );
}

export default Header;
