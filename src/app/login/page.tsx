'use client'
import React, { useEffect } from 'react';
import { Button, Space, Typography, theme } from 'antd';
import { Container } from '@/ui-kit/components/container';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/logic/supabase/supabase-client';
import { useAuthState } from '@/logic/auth/auth-state';
import { useRouter } from 'next/navigation';
import { LOGIN_ROUTE } from './login_routes';
import { EnvironmentVariables } from '@/logic/internals/environment-variables';

const { Text } = Typography;

export default function PageLogin() {
  const { token } = theme.useToken();
  const { authState } = useAuthState();
  const router = useRouter()



  useEffect(() => {
    if (authState.data) {
      const urlSearchParams = new URLSearchParams(window.location.search)
      const next = urlSearchParams.get('next')

      if (next) {
        router.push(next)
      } else {
        router.push(`/`);
      }
    }


  }, [authState.data, router]);

 
  return (
    <Container>
      
      <Space>
        <Text type="secondary">Welcome back to Calendly</Text>

        <Auth 
        providers={['google']}
        providerScopes={{
          google: 'https://www.googleapis.com/auth/calendar.readonly',
        }}
        queryParams={{
          access_type: 'offline',
          prompt: 'consent',
        }}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        />

      </Space>
    </Container>
  )
}