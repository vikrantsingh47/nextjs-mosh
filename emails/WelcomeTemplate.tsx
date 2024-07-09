import React, { CSSProperties } from 'react';
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body style={body}>
        <Container>
          <Tailwind>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://www.example.com">www.example.com</Link>
          </Tailwind>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  background: '#fde324',
};

export default WelcomeTemplate;
