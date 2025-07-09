import React from 'react';
import { Card } from 'antd';
import {
 
  UserOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  AimOutlined,
  EditOutlined,
  WarningOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

// Reusable InfoCard component styled like the first design
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

// Display component
const InfoDisplay = ({ salesData }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: '32px 16px',
      }}
    >
      <Card
        title={
          <span style={{ fontWeight: 'bold', color: 'black', fontSize: 20, display: 'flex', alignItems: 'center' }}>
            
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
            icon={<AimOutlined />}
            title="Scenario"
            value={salesData.scenario}
            color="#f5a623"
          />
          <SimpleInfoCard
            icon={<UserOutlined />}
            title="Client Persona"
            value={salesData.persona}
            color="#007bff"
          />
          <SimpleInfoCard
            icon={<CheckCircleOutlined />}
            title="Service Name"
            value={salesData.serviceName}
            color="#28a745"
          />
          <SimpleInfoCard
            icon={<BulbOutlined />}
            title="Client’s Key Needs"
            value={salesData.keyNeeds}
            color="#6f42c1"
          />
          <SimpleInfoCard
            icon={<InfoCircleOutlined />}
            title="Product Overview"
            value={salesData.overview}
            color="#17a2b8"
          />
          <SimpleInfoCard
            icon={<AimOutlined />}
            title="Scenario Objective"
            value={salesData.objective}
            color="#ff6347"
          />
          <SimpleInfoCard
            icon={<EditOutlined />}
            title="Custom Details"
            value={salesData.customDetails}
            color="#20c997"
          />
          <SimpleInfoCard
            icon={<WarningOutlined />}
            title="Obstacles to Address"
            value={salesData.obstacles}
            color="#dc3545"
          />
          <SimpleInfoCard
            icon={<GlobalOutlined />}
            title="Preferred Language"
            value={salesData.language}
            color="#6610f2"
          />
        </div>
      </Card>
    </div>
  );
};

// Sample data
const salesData = {
  scenario: 'Enterprise Cloud Migration Pitch',
  persona: 'CTO at a logistics company',
  serviceName: 'CloudOps Pro',
  keyNeeds: 'Scalability, Security, and Cost-efficiency',
  overview: 'A robust cloud platform with managed services',
  objective: 'Convince CTO to switch from on-prem to our cloud service',
  customDetails: 'Client currently uses hybrid setup with 3 data centers',
  obstacles: 'Resistance to change, concern over downtime',
  language: 'English',
};

// Main App
function App() {
  return <InfoDisplay salesData={salesData} />;
}

export default App;
