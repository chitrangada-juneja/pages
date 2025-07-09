import React from 'react';
import { Card } from 'antd';
import {
  QuestionCircleOutlined,
  UserOutlined,
  ProfileOutlined,
  CalendarOutlined,
  AimOutlined,
  HomeOutlined,
  TeamOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const SimpleInfoCard = ({ icon, title, value, color }) => (
  <Card style={{ width: '100%', marginBottom: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    bodyStyle={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    {React.cloneElement(icon, { style: { color, fontSize: 20 } })}
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px', alignItems: 'center', fontSize: 16, flex: 1, justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 'bold', flexBasis: '40%', minWidth: '150px' }}> {title}:</span>
      <span style={{ color: '#555', flexBasis: '55%', minWidth: '150px' }}>{value}</span>
    </div>
  </Card>
);

const data = {
  type: 'Behavioral Questions',
  currentStatus: 'Final year student',
  background: 'Software Engineering Internships',
  experience: '2',
  role: 'Frontend Developer',
  company: 'Google',
  interviewRole: 'UI Engineer',
  language: 'English',
};

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '32px 16px' }}>
    <Card title={<span style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}> 📋 Session Details</span>}
      style={{ width: '100%', maxWidth: 1000, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', backgroundColor: '#fff' }} bodyStyle={{ padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
        <SimpleInfoCard icon={<QuestionCircleOutlined />} title="Type of Question" value={data.type} color="#f5a623" />
        <SimpleInfoCard icon={<UserOutlined />} title="I Am Currently" value={data.currentStatus} color="#007bff" />
        <SimpleInfoCard icon={<ProfileOutlined />} title="I Have Experience In" value={data.background} color="#28a745" />
        <SimpleInfoCard icon={<CalendarOutlined />} title="Years of Experience" value={data.experience} color="#6f42c1" />
        <SimpleInfoCard icon={<AimOutlined />} title="My Target Role" value={data.role} color="#17a2b8" />
        <SimpleInfoCard icon={<HomeOutlined />} title="I Am Interviewing At" value={data.company} color="#ff6347" />
        <SimpleInfoCard icon={<TeamOutlined />} title="Interview Role" value={data.interviewRole} color="#20c997" />
        <SimpleInfoCard icon={<GlobalOutlined />} title="Preferred Language" value={data.language} color="#6610f2" />
      </div>
    </Card>
  </div>
);

export default App;
