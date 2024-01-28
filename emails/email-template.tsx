import {
  Html,
  Head,
  Body,
  Container,
  Button,
  Preview,
  Heading,
  Text,
  Section,
  Row
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from 'react';

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, email, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{email && email}</Preview>
      <Tailwind>
        <Body>
          <Container className="flex items-center justify-center container mx-auto">
            <Section className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 rounded shadow-xl p-8 border border-gray-900 dark:border-gray-100 gap-y-6 dark:text-white max-w-min">
              <Heading as="h1" className="text-6xl">Contact</Heading>
              <Row className="flex flex-col items-start justify-center gap-y-6">
                <Text>
                  <strong>Name:{" "}</strong>
                  {name && name}
                </Text>
                <Text>
                  <strong>
                    Email:{" "}
                  </strong>
                  {email && email}
                </Text>
                <Text>
                  <strong>Message:{" "}</strong>
                  {message && message}
                </Text>
              </Row>
              <Button href="http://localhost:3000" className="max-w-min outline outline-2 outline-black dark:outline-white hover:outline-offset-4 bg-black dark:bg-white text-white dark:text-black transition-all text-xl rounded-full px-6 py-2">Back</Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}