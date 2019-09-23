import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import Badge from 'react-rainbow-components/components/Badge';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default class ChartsSection extends PureComponent {
    render() {
        const {
            chartsData,
        } = this.props;
        return (
            <section className="react-rainbow-admin-orders_cards-container">
                <Card
                    className="react-rainbow-admin-orders_card"
                    title="$20058"
                    actions={(
                        <Badge variant="brand" className="react-rainbow-admin-orders_badge">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                            20.5%
                        </Badge>
                    )}>
                    <h1 className="react-rainbow-admin-orders_chart-title">Total orders</h1>
                    <div className="react-rainbow-admin-orders_chart">
                        <Chart
                            labels={chartsData.totalOrders.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.totalOrders.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
                <Card
                    className="react-rainbow-admin-orders_card"
                    title="$20058"
                    actions={(
                        <Badge className="react-rainbow-admin-orders_badge" variant="brand">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                            20.5%
                        </Badge>
                    )}>
                    <h1 className="react-rainbow-admin-orders_chart-title">Total orders</h1>
                    <div className="react-rainbow-admin-orders_chart">
                        <Chart
                            labels={chartsData.totalOrders.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.totalOrders.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
            </section>
        );
    }
}

ChartsSection.propTypes = {
    chartsData: PropTypes.object.isRequired,
};
