'use client'
import { Container } from "@/ui-kit/components/container";
import { Col, Divider, Flex, Row, Typography, theme } from "antd";
import Link from "next/link";
import type { FlexProps, SegmentedProps } from 'antd';
import { useState } from "react";

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

export function Footer(){
  const { token } = theme.useToken();
  const [justify, setJustify] = useState<FlexProps['justify']>(justifyOptions[0]);
  return(
    <footer style={{
      backgroundColor: token.colorPrimaryBg,
      paddingBottom: `${token.padding}px`,
      width: '100%',
    }}
      
      >
     <Divider />
    <Container>
   
      <Row gutter={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <Col span={6} xs={{ order: 1 }} >
            <Flex justify={justify} vertical gap="middle">
          
              <Link href={'#'}>Product</Link>
              <Link href={'#'}>Routing</Link>
              <Link href={'#'}>Availabity</Link>
              <Link href={'#'}>Team Scheduling</Link>
              <Link href={'#'}>Integrations</Link>
            </Flex>
        </Col>
        <Col span={6} xs={{ order: 2 }} >
            <Flex justify={justify} vertical gap="middle">
              <Link href={'#'}>About Calendly</Link>
              <Link href={'#'}>Contact Sales</Link>
              <Link href={'#'}>Newsrooms</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Security</Link>
            </Flex>
        </Col>
        <Col span={6} xs={{ order: 3 }} >
            <Flex justify={justify} vertical gap="middle">
              <Link href={'#'}>About Calendly</Link>
              <Link href={'#'}>Contact Sales</Link>
              <Link href={'#'}>Newsrooms</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Security</Link>
            </Flex>
        </Col>
        <Col span={6} xs={{ order: 4 }} >
          <Flex justify={justify} vertical gap="middle">
              <Link href={'#'}>About Calendly</Link>
              <Link href={'#'}>Contact Sales</Link>
              <Link href={'#'}>Newsrooms</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Security</Link>
          </Flex>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}