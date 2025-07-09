import React from 'react';
import { Card } from 'antd';
import {
  CustomerServiceOutlined,
  UserSwitchOutlined,
  AppstoreOutlined,
  AimOutlined,
  ProfileOutlined,
  ToolOutlined,
  GlobalOutlined
 
} from '@ant-design/icons';
import 'antd/dist/reset.css';

// Reusable InfoCard component styled like the original design
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
      {React.cloneElement(icon, { style: { color: color, fontSize: 20 } })}
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

const InfoDisplay = ({ data }) => {
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
          <span
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              display: 'flex',
              alignItems: 'center',
            }}
          >
           
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
            icon={<CustomerServiceOutlined />}
            title="Customer Service Scenario"
            value={data.scenario}
            color="#f5a623"
          />
          <SimpleInfoCard
            icon={<UserSwitchOutlined />}
            title="Customer Type"
            value={data.type}
            color="#007bff"
          />
          <SimpleInfoCard
            icon={<AppstoreOutlined />}
            title="Service Name"
            value={data.name}
            color="#28a745"
          />
          <SimpleInfoCard
            icon={<AimOutlined />}
            title="Scenario Objective"
            value={data.objective}
            color="#6f42c1"
          />
          <SimpleInfoCard
            icon={<ProfileOutlined />}
            title="Product Overview"
            value={data.overview}
            color="#17a2b8"
          />
          <SimpleInfoCard
            icon={<ToolOutlined />}
            title="Custom Details"
            value={data.details}
            color="#dc3545"
          />
          <SimpleInfoCard
            icon={<GlobalOutlined />}
            title="Preferred Language"
            value={data.language}
            color="#6610f2"
          />
        </div>
      </Card>
    </div>
  );
};

// Sample data
const customerData = {
  scenario: 'Escalation Handling',
  type: 'Upset Customer',
  name: 'CloudOps Pro',
  objective: 'Scalability, Security, and Cost-efficiency',
  overview: 'A robust cloud platform with managed services',
  details: 'Client currently uses hybrid setup with 3 data centers',
  language: 'English',
};

function App() {
  return <InfoDisplay data={customerData} />;
}

export default App;
