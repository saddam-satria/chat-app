import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box bg={'propulsion.primary'} minH={'100vh'}>
      <Box marginX={{ sm: '10px', md: 0 }}>
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
          <Box shadow={'xl'} bg={'propulsion.secondary'} w={{ sm: 'full', md: '50%' }} padding={'30px'} borderRadius={'xl'}>
            <Heading as={'h5'} textTransform={'capitalize'} fontSize={'2em'} marginBottom={'1rem'} color={'propulsion.thirdy'}>
              Welcome to chat app
            </Heading>
            <Flex flexDir={'column'} h={'15vh'} justifyContent={'space-between'}>
              <Input placeholder="From" _placeholder={{ color: '#f2f8ff' }} _focus={{ border: 'none', outline: 'none' }} _active={{ border: 'none', outline: 'none' }} bg={'propulsion.thirdy'} color={'propulsion.secondary'}></Input>
              <Input
                paddingY={'1rem'}
                placeholder="To"
                _placeholder={{ color: '#f2f8ff' }}
                _focus={{ border: 'none', outline: 'none' }}
                _active={{ border: 'none', outline: 'none' }}
                bg={'propulsion.thirdy'}
                color={'propulsion.secondary'}
                border={'none'}
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
                >
                  Send Message
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
