'use client'
import { Avatar, Card, Divider, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Container } from '@/ui-kit/components/container';
import { supabase } from "@/logic/supabase/supabase-client";
import { useAuthState } from "@/logic/auth/auth-state";


export default function DashboardPage() {

  const { authState } = useAuthState()

  return (
    
    
      <Space direction="vertical" size={20} align="center" style={{
        
        width: '100%'
      }}>
        <h1>My Calendar</h1>

        <Space direction="vertical" size={16}>
        
            <div className="" style={{
              display: 'flex',
              width: '100%',
              padding:'16px'
            }}>
              <Avatar size="large" icon={<UserOutlined />} />
              <p> Name {authState.data?.user.email}</p>
            </div>
            <Divider />
            <Space direction="horizontal" size={16} style={{
              display: 'flex',
              width: '100%',
             
            }}>
              <Card title="Meeting 30 minutes" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>30 min One a One</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
        
        </Space>
        </Space>
   
    
  )
}