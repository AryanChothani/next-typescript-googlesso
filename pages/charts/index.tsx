import React, { useEffect, useState } from 'react';
import { ReactECharts, ReactEChartsProps } from '../../app/components/chart';
import data from '../../app/utils/data.json'

const Charts = ({ user }: any) => {

    const option: ReactEChartsProps["option"] =

    {
        dataset: [
            {
                id: 'dataset_raw',
                source: data
            },
            {
                id: 'dataset_since_1950_of_germany',
                fromDatasetId: 'dataset_raw',
                transform: {
                    type: 'filter',
                    config: {
                        and: [
                            { dimension: 'Year', gte: 1950 },
                            { dimension: 'Country', '=': 'Germany' }
                        ]
                    }
                }
            },
            {
                id: 'dataset_since_1950_of_france',
                fromDatasetId: 'dataset_raw',
                transform: {
                    type: 'filter',
                    config: {
                        and: [
                            { dimension: 'Year', gte: 1950 },
                            { dimension: 'Country', '=': 'France' }
                        ]
                    }
                }
            }
        ],
        title: {
            text: 'Income of Germany and France since 1950'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            nameLocation: 'middle'
        },
        yAxis: {
            name: 'Income'
        },
        series: [
            {
                type: 'line',
                datasetId: 'dataset_since_1950_of_germany',
                showSymbol: false,
                encode: {
                    x: 'Year',
                    y: 'Income',
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            },
            {
                type: 'line',
                datasetId: 'dataset_since_1950_of_france',
                showSymbol: false,
                encode: {
                    x: 'Year',
                    y: 'Income',
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            }
        ]
    }

    return (

        <div style={{ backgroundColor: 'white' }}>
            <ReactECharts option={option} />
        </div>

    )
};
export default Charts;