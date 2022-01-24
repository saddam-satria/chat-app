import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface UserInterface {
  from: string;
  to: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<UserInterface>({
    from: '',
    to: '',
  });
  const navigate = useNavigate();

  const startChatHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/room-chat');
  };

  return (
    <Box bg={'propulsion.primary'} minH={'100vh'}>
      <Box marginX={{ sm: '10px', md: 0 }}>
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
          <Box shadow={'xl'} bg={'propulsion.secondary'} w={{ sm: 'full', md: '50%' }} padding={'30px'} borderRadius={'xl'}>
            <Heading as={'h5'} textTransform={'capitalize'} fontSize={'2em'} marginBottom={'1rem'} color={'propulsion.thirdy'}>
              Welcome to chat app
            </Heading>
            <Flex flexDir={'column'} h={'15vh'} justifyContent={'space-between'}>
              <Input
                border={'none'}
                placeholder="From"
                _placeholder={{ color: '#f2f8ff' }}
                _focus={{ border: 'none', outline: 'none' }}
                _active={{ border: 'none', outline: 'none' }}
                bg={'propulsion.thirdy'}
                color={'propulsion.secondary'}
                onChange={(e) => setUser({ ...user, from: e.target.value })}
              ></Input>
              <Input
                paddingY={'1rem'}
                placeholder="To"
                _placeholder={{ color: '#f2f8ff' }}
                _focus={{ border: 'none', outline: 'none' }}
                _active={{ border: 'none', outline: 'none' }}
                bg={'propulsion.thirdy'}
                color={'propulsion.secondary'}
                border={'none'}
                onChange={(e) => setUser({ ...user, to: e.target.value })}
              ></Input>
              <Box marginLeft={'auto'}>
                <Button
                  _focus={{ border: 'none', outline: 'none', backgroundColor: 'none' }}
                  _active={{ backgroundColor: '#040320' }}
                  _hover={{ backgroundColor: '#040320', opacity: '90%' }}
                  paddingX={'10px'}
                  paddingY={'5px'}
                  fontSize={'14px'}
                  color={'propulsion.secondary'}
                  bg={'propulsion.thirdy'}
                  onClick={startChatHandler}
                >
                  Start Chatting
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
