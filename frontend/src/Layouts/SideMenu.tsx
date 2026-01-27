import { Menu } from 'antd';
import {
    EnvironmentOutlined,
    CalendarOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
    const navigate = useNavigate();

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['locations']}
            items={[
                {
                    key: 'locations',
                    icon: <EnvironmentOutlined />,
                    label: 'Canchas',
                    onClick: () => navigate('/locations'),
                },
                {
                    key: 'bookings',
                    icon: <CalendarOutlined />,
                    label: 'Reservas',
                    onClick: () => navigate('/bookings'),
                },
                {
                    key: 'profile',
                    icon: <UserOutlined />,
                    label: 'Perfil',
                    onClick: () => navigate('/profile'),
                },
            ]}
        />
    );
}
