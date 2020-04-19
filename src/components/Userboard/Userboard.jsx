import React from 'react';

const Userboard = (props) => {
    return (
        <div className="col-10 colo-md-8  mt-5 mb-5 text-center">
            <h2>name:{props.name}</h2>
            <h2>email:{props.email}</h2>
             <img src={props.url} alt=''/>
        </div>
    );
};

export default Userboard;