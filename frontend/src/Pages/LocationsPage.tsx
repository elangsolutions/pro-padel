import {Card, Row, Col, Tag, Typography} from 'antd';
import {JSX} from "react";

const { Title, Text } = Typography;

const locations = [
    {
        id: 1,
        name: 'Padel Center Palermo',
        address: 'Av. Santa Fe 3200',
        courts: 6,
        indoor: true,
    },
    {
        id: 2,
        name: 'Nordelta Padel Club',
        address: 'Ruta 27, Tigre',
        courts: 4,
        indoor: false,
    },
];

export default function LocationsPage() {

    const content: JSX.Element[] = locations.map((location)=> (
        <Col
            key={location.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}>
            <Card
                title={location.name}
                hoverable
            >
                <Text>{location.address}</Text>
                <br />
                <Text type="secondary">
                    Courts: {location.courts}
                </Text>
                <br />
                {location.indoor ? (
                    <Tag color="green">Indoor</Tag>
                ) : (
                    <Tag color="blue">Outdoor</Tag>
                )}
            </Card>
        </Col>
    ));
    return (
        <>
            <Title level={3}>Canchas cerca tuyo</Title>
            <Row gutter={[16, 16]}>
                {content}
            </Row>
        </>
    );
}
