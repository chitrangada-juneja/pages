import React from 'react';
import { Card } from 'antd';
import {
  SoundOutlined,
  TeamOutlined,
  BulbOutlined,
  AimOutlined,
  GlobalOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { FaRegLightbulb } from 'react-icons/fa';
import 'antd/dist/reset.css';

const SimpleInfoCard = ({ icon, title, value, color }) => (
  <Card
    style={{ width: '100%', marginBottom: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    bodyStyle={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
  >
    {React.cloneElement(icon, { style: { color, fontSize: 20 } })}
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px', alignItems: 'center', fontSize: 16, flex: 1, justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 'bold', flexBasis: '40%', minWidth: '150px' }}>{title}:</span>
      <span style={{ color: '#555', flexBasis: '55%', minWidth: '150px' }}> {value}</span>
    </div>
  </Card>
);

const data = {
  scenario: 'Keynote Presentation',
  audience: 'Corporate Executives',
  topicPurpose: 'Discussing company vision and innovation roadmap',
  needs: 'Clarity, inspiration, strategic insights',
  objective: 'Motivate and align the leadership team',
  language: 'English',
  custom: 'Q&A session at the end, hybrid audience setup',
};

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '32px 16px' }}>
    <Card title={<span style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}> 📋 Session Details</span>}
      style={{ width: '100%', maxWidth: 1000, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', backgroundColor: '#fff' }} bodyStyle={{ padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
        <SimpleInfoCard icon={<SoundOutlined />} title="Speaking Scenario" value={data.scenario} color="#f5a623" />
        <SimpleInfoCard icon={<TeamOutlined />} title="Audience Details" value={data.audience} color="#007bff" />
        <SimpleInfoCard icon={<BulbOutlined />} title="Topic and Purpose" value={data.topicPurpose} color="#28a745" />
        <SimpleInfoCard icon={<FaRegLightbulb />} title="Audience Needs and Interests" value={data.needs} color="#ff851b" />
        <SimpleInfoCard icon={<AimOutlined />} title="Scenario Objective" value={data.objective} color="#6f42c1" />
        <SimpleInfoCard icon={<GlobalOutlined />} title="Preferred Language" value={data.language} color="#17a2b8" />
        <SimpleInfoCard icon={<EditOutlined />} title="Custom Details" value={data.custom} color="#dc3545" />
      </div>
    </Card>
  </div>
);

export default App;
