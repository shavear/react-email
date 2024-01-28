import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate = ({ name, email, message }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{email ? email : "website"}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="flex items-center justify-center container mx-auto bg-gray-100 dark:bg-gray-900 rounded shadow-xl p-8 border border-gray-900 dark:border-gray-100 gap-y-6 dark:text-white max-w-min">
            <Heading className="text-6xl text-center">Contact</Heading>
            <Section className="flex flex-col items-start justify-center gap-y-6">
              <Row>
                <Text>
                  <strong>Name: </strong>
                  {name && name}
                </Text>
                <Text>
                  <strong>Email: </strong>
                  {email && email}
                </Text>
                <Text>
                  <strong>Message: </strong>
                  {message && message}
                </Text>
              </Row>
              <Button
                href={baseUrl}
                className="max-w-min outline outline-2 outline-black dark:outline-white hover:outline-offset-4 bg-black dark:bg-white text-white dark:text-black transition-all text-xl rounded-full px-6 py-2"
              >
                Back
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
