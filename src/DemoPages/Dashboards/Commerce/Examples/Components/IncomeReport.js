import React, {Component, Fragment} from 'react';
import {
    Row, Col,
    CardTitle,
    Progress,

} from 'reactstrap';

import {
    ResponsiveContainer,
    LineChart,
    Tooltip,
    Line
} from 'recharts';

const data55 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class IncomeReport extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Fragment>
                {/*<div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">*/}
                    {/*<ResponsiveContainer width="100%" height={240}>*/}
                        {/*<LineChart data={data55}*/}
                                   {/*margin={{top: 0, right: 5, left: 5, bottom: 0}}>*/}
                            {/*<Tooltip/>*/}
                            {/*<Line type="monotone" dataKey="pv" stroke="var(--pink)" strokeOpacity={.4}*/}
                                  {/*strokeWidth={2}/>*/}
                            {/*<Line type="monotone" dataKey="uv" stroke="var(--pink)"*/}
                                  {/*strokeWidth={3}/>*/}
                        {/*</LineChart>*/}
                    {/*</ResponsiveContainer>*/}
                {/*</div>*/}
                <CardTitle>

                </CardTitle>
                <Row className="mt-3">
                    <Col sm="12" md="4">
                        <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-numbers text-dark">
                                            54%
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-xs progress-bar-animated-alt"
                                        color="info"
                                        value="54"/>
                                    <div className="progress-sub-label">
                                        <div className="sub-label-left font-size-md">
                                            Participation Conversion Rate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-numbers text-dark">
                                            89%
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-xs progress-bar-animated-alt"
                                        color="success"
                                        value="89"/>
                                    <div className="progress-sub-label">
                                        <div className="sub-label-left font-size-md">
                                            Completion Rate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-numbers text-dark">
                                            92%
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-xs progress-bar-animated-alt"
                                        color="success"
                                        value="92"/>
                                    <div className="progress-sub-label">
                                        <div className="sub-label-left font-size-md">
                                            Interest in PM role at your company
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
