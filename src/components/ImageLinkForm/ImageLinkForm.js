import React from 'react';

const ImageLinkForm = () => {
    return (
       <div>
           <p className='f3'>
               {'This Will detect faces in your pictures. Insert a URL to give it a try!'}
           </p>
           <div>
               <input className='f4 pa2 w-70 center' type='tex'/>
               <button className='w-30 grow f4 link ph3 pv2 dib white bg-light'>Detect</button>
           </div>
       </div>
    );
}

export default ImageLinkForm;