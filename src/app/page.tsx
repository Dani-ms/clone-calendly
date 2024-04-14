'use client'

import { Container } from '@/ui-kit/components/container';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Home() {

  return (
    <main className="home-page" style={{ height: 500 }}>
      <Container>
        <Title style={{ margin: 0 ,  }}> Easy scheduling ahead</Title>
      </Container>
    </main>
  )
}
