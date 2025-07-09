import React from 'react';
import { Card, Button, Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DeletePage = ({ onConfirm, onCancel }) => {
  return (
    <div style={{
      fontFamily: `'Inter', 'Segoe UI', 'Roboto', sans-serif`,
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <Card
        style={{ width: 400, textAlign: 'center' }}
        bordered={false}
      >
        <WarningOutlined style={{ fontSize: '48px', color: 'red' }} />
        <Title level={3} style={{ marginTop: 16,fontFamily: 'Inter' }}>
          <i> Confirm Deletion </i>
        </Title>
        <Text type="secondary">
          Are you sure you want to delete this file? This action cannot be undone.
        </Text>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-around' }}>
          <Button 
          type="primary" 
          style={{
             backgroundColor: 'green', 
             borderColor: 'green',
            boxShadow: '0 4px 12px rgba(0, 128, 0, 0.4)' 
           }} 
          onClick={onConfirm}
          
          
          >
            Yes
          </Button>
          <Button type="primary" danger 
          style={{
    boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4)' // red shadow
        }}
          onClick={onCancel}>
            No
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DeletePage;
