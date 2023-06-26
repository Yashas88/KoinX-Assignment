import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiStar, FiMoreVertical, FiChevronDown, FiChevronUp, FiArrowDown } from "react-icons/fi";
import { NumericFormat } from 'react-number-format';

const TableData = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap'
                );
                setTableData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    console.log(tableData, "tableData")

    return (
        <>
            <div className='container'>
                <div>
                    <h3 className='m-4'>Top 100 Cryptocurrencies by Market Cap</h3>
                    <div className='row'>
                        <div className='col'>
                            <button className='m-2 btn btn-light rounded-2 '>
                                <span className='pe-1 text-muted'><FiStar /></span>Favorites</button>
                            <button className='m-2 btn btn-light rounded-2 text-primary'>CryptoCurrencies</button>
                            <button className='m-2 btn btn-light rounded-2 '>DeFi</button>
                            <button className='m-2 btn btn-light rounded-2 '>NFT's & Collecctables</button>
                        </div>
                        <div className='col'>
                            <p>show rows</p>
                            <button className='m-2 btn btn-light rounded-2 '>
                                <span><FiChevronDown /></span>
                                100</button>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'></th>
                            <th scope="col">#</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">24H<span className='text-primary'><FiArrowDown /></span></th>
                            <th scope="col">7D</th>
                            <th scope="col">MARKET CAP</th>
                            <th scope="col">VOLUME(24H)</th>
                            <th scope="col">CIRCULATING SUPPLY</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((tableData) => (
                            <tr scope="row" key={tableData.id}>
                                <td><FiStar /></td>
                                <td>
                                    {tableData.market_cap_rank}
                                </td>
                                <td>
                                    <span>
                                        <img src={tableData.image} width={25} />
                                    </span>
                                    <span className='ps-2'>
                                        {tableData.name}
                                    </span>
                                    <span className='ps-3 text-muted'>{tableData.symbol}</span>
                                </td>
                                <td>
                                    <span>$</span>
                                    <NumericFormat value={tableData.current_price} displayType="text" thousandSeparator={true} decimalScale={2} />
                                </td>
                                <td className='text-danger'>
                                    <span><FiChevronDown /></span>
                                    {tableData.low_24h}</td>
                                <td className='text-success'>
                                    <span><FiChevronUp /></span>
                                    {tableData.high_24h}</td>
                                <td>
                                    <span>$</span>
                                    <NumericFormat value={tableData.market_cap_change_24h} displayType="text" thousandSeparator={true} decimalScale={2} />
                                </td>
                                <td>
                                    <span>$</span>
                                    <NumericFormat value={tableData.total_volume} displayType="text" thousandSeparator={true} decimalScale={2} />
                                </td>
                                <td>
                                    <span>
                                        <NumericFormat value={tableData.circulating_supply} displayType="text" thousandSeparator={true} decimalScale={2} />
                                        <span className='ps-1'>BTC</span> </span>
                                    <span>
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                style={{ width: '70%' }}></div>
                                        </div>
                                    </span>
                                </td>
                                <td>
                                    <button className='border-0 bg-transparent'> <FiMoreVertical /></button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --------------Model popup--------- */}

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>sbchbhcbhd</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableData
