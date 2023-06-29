import { FormEventHandler, useState } from 'react';
import { useSign } from '../hooks';
import { Heading, InputGroup, InputRightElement, Button, Input, Box, Text, Link } from '@chakra-ui/react';

interface AuthFormProps {
  testId: 'signup' | 'signin';
  title: string;
  onSubmit: (email: string, pw: string) => void;
}

export const AuthForm = ({ testId, title, onSubmit }: AuthFormProps) => {
  const { email, password, isValid, onChange } = useSign();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isValid) {
      onSubmit(email, password);
    }
  };

  // password 입력 칸에 show, hide 버튼 제어
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3" size="lg" textAlign="center" my="10px">
        {title}
      </Heading>
      <Input
        data-testid="email-input"
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="example@domain.com"
        size="lg"
        my="8px"
        autoFocus
      />
      <InputGroup size="md">
        <Input
          data-testid="password-input"
          type={show ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="password"
          size="lg"
        />
        <InputRightElement width="72px">
          <Button mt="8px" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box textAlign="center" my="10px">
        <Button
          data-testid={`${testId}-button`}
          type="submit"
          isDisabled={!isValid}
          colorScheme="teal"
          size="lg"
          w="100%"
        >
          {title}
        </Button>
      </Box>
      {title === '로그인' ? (
        <Text textAlign="center" fontSize="14px" mt="15px">
          아직 회원이 아니신가요?
          <Link color="teal.500" href="/signup" ml="10px">
            회원가입 하러가기
          </Link>
        </Text>
      ) : (
        <Text textAlign="center" fontSize="14px" mt="15px">
          이미 회원이신가요?
          <Link color="teal.500" href="/signin" ml="10px">
            로그인 하러가기
          </Link>
        </Text>
      )}
    </form>
  );
};
