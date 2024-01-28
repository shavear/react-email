import {
  Tailwind,
  Html,
  Head,
  Body,
  Container,
  Button,
  Preview,
  Heading,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <title>Contact Email</title>
          <Preview>{email ? email : ""}</Preview>
        </Head>
        <Body>
          <Container className="flex items-center justify-center container mx-auto">
            <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 rounded shadow-xl p-8 border border-gray-900 dark:border-gray-100 gap-y-6 dark:text-white max-w-min">
              <Heading as="h1" className="text-6xl">
                Contact
              </Heading>
              <div className="flex flex-col items-start justify-center gap-y-6">
                <Text>
                  <strong>Name: </strong>
                  {name ? name : ""}
                </Text>
                <Text>
                  <strong>Email: </strong>
                  {email ? email : ""}
                </Text>
                <Text>
                  <strong>Message: </strong>
                  {message ? message : ""}
                </Text>
              </div>
              <Button
                href="http://localhost:3000"
                className="max-w-min outline outline-2 outline-black dark:outline-white hover:outline-offset-4 bg-black dark:bg-white text-white dark:text-black transition-all text-xl rounded-full px-6 py-2"
              >
                Go back
              </Button>
            </div>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailTemplate;
