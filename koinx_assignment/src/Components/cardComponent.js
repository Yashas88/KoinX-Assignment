import React from 'react'
import { FiStar } from "react-icons/fi";


const CardComponent = () => {
    return (
        <>
            <div className='container'>
                <div></div>
                <div>
                    <h2 className="text-start mt-2">Top 100 Cryptocurrencies by Market Cap</h2>
                    <div className='row'>
                        <div className='col'>
                            <button className='m-2 btn btn-light rounded-2 '>
                                <span className='pe-1 text-muted'><FiStar /></span>Favorites</button>
                            <button className='m-2 btn btn-light rounded-2 text-primary'>CryptoCurrencies</button>
                            <button className='m-2 btn btn-light rounded-2 '>DeFi</button>
                            <button className='m-2 btn btn-light rounded-2 '>NFT's & Collecctables</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardComponent