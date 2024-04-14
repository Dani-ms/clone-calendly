'use client'
import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import Link from 'next/link';
import { LOGIN_ROUTE } from './login/login_routes';
import { useAuthState } from '@/logic/auth/auth-state';
import { supabase } from '@/logic/supabase/supabase-client';
import { DASHBOARD_ROUTE } from './dashboard/dashboard_routes';


export function Header (){
  const { authState } = useAuthState()

  const [current, setCurrent] = useState('mail');
  const onClickLogout = () => {
    supabase.auth.signOut()
  };

  const [next, setNext] = useState("/")

  useEffect(() => {
    setNext(`${window.location.pathname}?${window.location.search}`)
  }, [])

  const items: MenuProps['items'] = [
    {
      label:(<Link href='/'> Home </Link> ),
      key: 'Home',
     
    },
    
   
    
    {
      label: 'Solutions',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'By Role',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'By Industry',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: 'Enterprise',
      key: 'enterprise',
      
    },
    {
      label: 'Pricing',
      key: 'pricing',
      
    },
    
    ...(() => {
      if (authState.data == null) {
        return (
          [
          {
              label: 'Resource',
              key: 'resource',
              
           },
          {
            label: (
              <Link href={LOGIN_ROUTE.getHref(next)}> Login</Link> 
            ),
            key: 'login'
          },
          {
            label: (
              <Button type="primary">Get started</Button>
            ),
            key: 'button',
          },]
        )
      } else if (authState.data) {
        return [
          {
            label: (<Link href={DASHBOARD_ROUTE.getHref()}> Dashboard </Link> ),
            key: 'Dashboard',
           
          },
          {
            label: (
              <Link href='/' onClick={onClickLogout}> Logout</Link> 
            ),
            key: 'logout'
          }
        ]
      } else {
        return [ ]
      }
    })(),
    
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  
 
  return (
    <header style={{  padding:'16px', 
          justifyContent:'center',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          
          alignItems: 'center',
          }}> 
        
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </header>
  );
}