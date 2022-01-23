import React from 'react';
import Slick from '../Slick/Slick'

function Modal({close,ob,word}) {
  const cl = () =>  close()
  return (<Slick closem={() => cl()} ind={ob.indexOf(word)} ob={ob}/>
  );
}

export default Modal;
