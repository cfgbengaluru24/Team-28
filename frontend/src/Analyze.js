import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto'; // This is necessary to register the components globally

const api = axios.create({ withCredentials: true });

const HaemoglobinVsWeightChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("http://localhost:8100/api/admin/hemo/graph");
                console.log('Fetched data:', response.data);

                // Check if response.data is an array
                if (Array.isArray(response.data)) {
                    const labels = response.data.map(item => item.weight);
                    const haemoglobinData = response.data.map(item => item.haemoglobin);

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                label: 'Haemoglobin',
                                data: haemoglobinData,
                                backgroundColor: 'rgba(136, 132, 216, 0.6)',
                                borderColor: 'rgba(136, 132, 216, 1)',
                                borderWidth: 1,
                                pointRadius: 5, // Bold dots
                                pointBackgroundColor: 'rgba(136, 132, 216, 1)',
                                fill: false, // Do not fill under the line
                                tension: 0.1, // Smooth line
                            },
                        ],
                    });
                } else {
                    console.error('Unexpected data format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h2>Haemoglobin vs Weight</h2>
            <div style={{ width: '100%', height: '400px' }}>
                <Line data={chartData} options={{
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Weight',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Haemoglobin',
                            },
                        },
                    },
                }} />
            </div>
        </>
    );
};

export default HaemoglobinVsWeightChart;