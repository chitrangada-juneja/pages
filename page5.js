import React from 'react';
import { Card } from 'antd';
import {
  RobotOutlined,
  BulbOutlined,
  GlobalOutlined,
  SlidersOutlined,
  SmileOutlined,
  KeyOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const SimpleInfoCard = ({ icon, title, value, color }) => (
  <Card style={{ width: '100%', marginBottom: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    bodyStyle={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    {React.cloneElement(icon, { style: { color, fontSize: 20 } })}
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px', alignItems: 'center', fontSize: 16, flex: 1, justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 'bold', flexBasis: '40%', minWidth: '150px' }}>🏷️ {title}:</span>
      <span style={{ color: '#555', flexBasis: '55%', minWidth: '150px' }}>📝 {value}</span>
    </div>
  </Card>
);

const data = {
  goal: 'Improve leadership communication',
  situation: 'Handling performance reviews',
  language: 'English',
  level: 'Advanced',
  style: 'Friendly and direct',
  keyPoints: 'Be honest but tactful, emphasize growth opportunities',
};

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '32px 16px' }}>
    <Card title={<span style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><RobotOutlined style={{ marginRight: 8 }} /> AI Coaching Session</span>}
      style={{ width: '100%', maxWidth: 700, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', backgroundColor: '#fff' }} bodyStyle={{ padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
        <SimpleInfoCard icon={<BulbOutlined />} title="Goal of Coaching Session" value={data.goal} color="#f5a623" />
        <SimpleInfoCard icon={<SmileOutlined />} title="Situation to Discuss" value={data.situation} color="#007bff" />
        <SimpleInfoCard icon={<GlobalOutlined />} title="Preferred Language" value={data.language} color="#17a2b8" />
        <SimpleInfoCard icon={<SlidersOutlined />} title="Level of AI Coach" value={data.level} color="#28a745" />
        <SimpleInfoCard icon={<RobotOutlined />} title="Edy's Talking Style" value={data.style} color="#6f42c1" />
        <SimpleInfoCard icon={<KeyOutlined />} title="Key Points for Edy" value={data.keyPoints} color="#dc3545" />
      </div>
    </Card>
  </div>
);

export default App;
