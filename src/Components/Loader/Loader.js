import React, { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import "./Loader.css"

const Loader = () => {
    return (
        <div className='LoaderWrapper'>
            <ThreeDots
                visible={true}
                height="120"
                width="120"
                radius="9"
                color='#5a189a'
            />
        </div>
    )
}

export default Loader
