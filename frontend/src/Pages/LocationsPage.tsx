import { Card, List, Tag, Typography } from 'antd';

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
    return (
        <>
            <Title level={3}>Canchas cerca tuyo</Title>

            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={locations}
                renderItem={(location) => (
                    <List.Item>
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
                    </List.Item>
                )}
            />
        </>
    );
}
