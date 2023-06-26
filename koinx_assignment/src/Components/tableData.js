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

    return (
        <>
            <div className='container'>

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
                            <tr scope="row" key={tableData.id} data-toggle="modal" data-target="#exampleModal">
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
                                    <NumericFormat value={tableData.total_volume} displayType="text" thousandSeparator={true} decimalScale={2} /> <br></br>
                                    <span className='text-muted' style={{ fontSize: "12px" }}>
                                        <NumericFormat value={tableData.atl_change_percentage} displayType="text" thousandSeparator={true} decimalScale={2} />
                                        <span className='ps-1'>BTC</span> </span>

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


        </>
    )
}

export default TableData
