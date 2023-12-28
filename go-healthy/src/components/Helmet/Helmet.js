import React, { useEffect } from 'react';

const Helmet = (props) => {
  // Mengatur judul dokumen secara global
  useEffect(() => {
    document.title = 'Go Healthy - ' + props.title;
  }, [props.title]);

  return (
    <div className='w-100'>{props.children}</div>
  );
}

export default Helmet;
