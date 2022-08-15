import React from "react";
import Chart from "react-apexcharts";

const options = {
    chart: {
        id: "basic-bar",
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    tooltip: {
        enabled: true,
    },
    grid: {
        show: false,
    },
};

const series = [
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
];
const ChartSection = () => {
    return (
        <div>
            <Chart type="line" options={options} series={series} width={800} />
        </div>
    );
};

export default ChartSection;
