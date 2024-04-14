'use client';

import { AuthEffects } from '@/logic/auth/auth-effects';
import { AuthStateProvider } from '@/logic/auth/auth-state';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';


export function Providers(props: { children: ReactNode }) {
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#006BFF',
      }
    }}
  >
    <AuthStateProvider>
      <AuthEffects>
        {props.children}
      </AuthEffects>
    </AuthStateProvider>
  </ConfigProvider>
}