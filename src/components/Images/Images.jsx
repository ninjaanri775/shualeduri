import React from 'react'
import { useState } from 'react';
import './Images.css'

export default function Images() {
    const images = ['1.png', '2.png', '3.png', '4.png'];
    const [mainimg, setMainimg] = useState(images[0])
    const [secimg, setsecimg] = useState(images[0])
    const [show, setshow] = useState(false)
    const [count, setcount] = useState(1)


    const nexthandler = () => {
        if (count >= images.length) {
            setcount(0)
        } else {
            setcount(count + 1)
            setsecimg(images[count])
        }

    }


    const prevhandler = () => {
        if (count <= 0) {
            setcount(images.length - 1)
            setsecimg(images[count])
        } else {
            setcount(count - 1)
            setsecimg(images[count])
        }


    }

    return (
        <>

            <div className='main'>
                <div className='imagess'>
                    <img src={`/assets/${mainimg}`} alt="" width={384} onClick={() => setshow(true)} />

                    <div style={{ display: 'flex', gap: "10px" }}>
                        {images.map(el => (
                            <img onClick={() => { setMainimg(el) }} key={el} src={`/assets/${el}`} width={88} />
                        ))}
                    </div>


                </div>

                <div className='information'>
                    <h3 className='comp'>SNEAKER COMPANY</h3>
                    <h1 className='name'>Fall Limited Sneakers</h1>
                    <p className='big'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <h2 className='price'>$125.00 <span className='discount'>50%</span></h2>
                    <h3 className='discounted'>$250.00</h3>
                </div>
                {show && <div className='modal' >
                        <button className='x' onClick={() => setshow(false)}> X </button>
                        <button className='prevhandler' onClick={prevhandler}><img className='vector' src="/assets/left.png" alt="" /></button>
                        <img className='modalimg' src={`/assets/${secimg}`} alt="" width={300} />
                        <button className='nexthandler' onClick={nexthandler}> <img className='vector' src="/assets/right.png" alt="" /></button>
                        <div style={{ display: 'flex', gap: "10px" }}>
                            {images.map(el => (
                                <img className='modalsecimg' onClick={() => { setsecimg(el) }} key={el} src={`/assets/${el}`} width={100} />
                            ))}
                        </div>
                    </div>}
            </div>
        </>
    )
}
