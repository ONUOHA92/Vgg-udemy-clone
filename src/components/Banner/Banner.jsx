import React, { Component } from 'react';

import './Banner.css'



class Banner extends Component {
    render() {
    
        return (
            <div className="banner">
                <div className='container content'>
                    <div className="row">
                        <div className="col-10 colo-md-8 mt-5 text-center">
                         <h3>this is the best website for Eductional material</h3>
                        <p className='text-center bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, officiis.</p>
                            <div className="text-center">
                            <button  className="btn btn-danger"><a href="">search</a></button> 
                            </div>
                           
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Banner;