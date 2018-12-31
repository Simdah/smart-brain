import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onSubmit}) => {
    return(
        <div className='pa3'>
        <div>
            <p className='f3'> {'This magic brain will recognize faces. Give it a try!'}</p>
        </div>
        <div className='center'>
            <div className='pa4 br3 shadow-5 form center'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow link f4 ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Dectect</button>
            </div>
        </div>
        </div>
    )
}

export default ImageLinkForm; 