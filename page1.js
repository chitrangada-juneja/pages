import React from 'react';
import { Card } from 'antd';
import {
  SolutionOutlined,
  TagsOutlined,
  UserOutlined,
  TeamOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

// Info card without circular background
const SimpleInfoCard = ({ icon, title, value, color }) => {
  return (
    <Card
      style={{
        width: '100%',
        marginBottom: '16px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
      bodyStyle={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {/* Colored icon (no border or background) */}
      {React.cloneElement(icon, { style: { color: color, fontSize: 20 } })}

      {/* Title and value */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'center',
          fontSize: 16,
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontWeight: 'bold', flexBasis: '40%', minWidth: '150px' }}>
          {title}:
        </span>
        <span style={{ color: '#555', flexBasis: '55%', minWidth: '150px' }}>
           {value}
        </span>
      </div>
    </Card>
  );
};

// Sample data
const sampleData = {
  simulation: 'Video Interview',
  experienceLevel: 'Intermediate',
  userRole: 'Potential Employee',
  aiRole: 'HR Employee',
  preferredLanguage: 'English',
};

// App wrapper
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        padding: '32px 16px',
      }}
    >
      <Card
        title={
          <span style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            📋 Session Details
          </span>
        }
        style={{
          width: '100%',
          maxWidth: 1000,
          borderRadius: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
        bodyStyle={{ padding: 0 }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
          }}
        >
          <SimpleInfoCard
            icon={<SolutionOutlined />}
            title="Simulation"
            value={sampleData.simulation}
            color="#f5a623"
          />
          <SimpleInfoCard
            icon={<TagsOutlined />}
            title="Experience Level"
            value={sampleData.experienceLevel}
            color="#007bff"
          />
          <SimpleInfoCard
            icon={<UserOutlined />}
            title="User Role"
            value={sampleData.userRole}
            color="#28a745"
          />
          <SimpleInfoCard
            icon={<TeamOutlined />}
            title="AI Role"
            value={sampleData.aiRole}
            color="#6f42c1"
          />
          <SimpleInfoCard
            icon={<GlobalOutlined />}
            title="Preferred Language"
            value={sampleData.preferredLanguage}
            color="#17a2b8"
          />
        </div>
      </Card>
    </div>
  );
};

export default App;
