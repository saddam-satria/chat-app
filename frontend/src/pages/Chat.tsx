import { Box, Button, Flex, Icon, Input, Tag, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GetMessage, PostMessage } from '../hooks/Messages';

const Chat: React.FC = () => {
  const { messages } = GetMessage();
  const [text, setText] = useState<string>('');

  const sendMessageHandler = (e: any) => {
    e.preventDefault();
    PostMessage({ from: 'saddam', to: 'you', message: text });
    setText('');
  };

  const sendMessagekeyupHandler = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      PostMessage({ from: 'saddam', to: 'you', message: text });

      setText('');
    }
  };

  return (
    <>
      <Box bg={'propulsion.primary'} minH={'100vh'}>
        <Box marginX={{ sm: '10px', md: 0 }}>
          <Flex justifyContent={{ sm: 'start', lg: 'center' }} paddingY={{ sm: 0, lg: '3rem' }}>
            <Box w={{ sm: 'full', lg: '80%' }} bg={'propulsion.secondary'} h={'80vh'} shadow={'xl'} padding={'20px'} borderRadius={'xl'}>
              <Flex>
                <Box flex="0.3">ss</Box>
                <Box flex="0.7" bg={'propulsion.secondary'} paddingX={'0.5rem'} shadow={'xl'} paddingY={'1rem'}>
                  <Flex>
                    <Box>
                      <Text>Room Chat</Text>
                    </Box>
                    <Box paddingX={'10px'} marginLeft={'auto'}>
                      <Flex>
                        <Icon></Icon>
                        <Icon></Icon>
                        <Icon></Icon>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              <Flex marginTop={'10px'} h={'68vh'}>
                <Box flex="0.3">ss</Box>
                <Flex flexDir={'column'} overflow={'hidden'} h={'full'} flex="0.7" bg={'propulsion.secondary'} paddingX={'0.5rem'} shadow={'xl'} paddingY={'1rem'}>
                  <Flex overflowY={'scroll'} paddingX={'10px'} flexDir={'column'} h={'full'}>
                    {messages &&
                      messages.map((message: { from: string; to: string; message: string }, index: number) => {
                        return (
                          <Flex flexDir={'column'} key={index}>
                            <Box>
                              <Tag shadow={'lg'} as={'span'} padding={'10px'} textTransform={'capitalize'} color={'propulsion.thirdy'}>
                                {message.from}
                              </Tag>
                            </Box>
                            <Box w={{ sm: 'full', md: '50%' }} bg={'propulsion.thirdy'} padding={'10px'} borderRadius={'xl'} marginY={'10px'}>
                              <Text fontSize={'14px'} color={'propulsion.secondary'}>
                                {message.message}
                              </Text>
                            </Box>
                          </Flex>
                        );
                      })}
                  </Flex>
                  <Box paddingY={'20px'} paddingX={'1rem'}>
                    <Flex>
                      <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        paddingY={'1rem'}
                        bg={'propulsion.primary'}
                        border={'none'}
                        marginRight={'10px'}
                        _focus={{ border: 'none', outline: 'none' }}
                        _active={{ border: 'none', outline: 'none' }}
                        placeholder="send message..."
                        onKeyUp={sendMessagekeyupHandler}
                      ></Input>
                      <Button
                        onClick={sendMessageHandler}
                        _focus={{ border: 'none', outline: 'none', backgroundColor: 'none' }}
                        _active={{ backgroundColor: '#040320' }}
                        _hover={{ backgroundColor: '#040320', opacity: '90%' }}
                        paddingX={'15px'}
                        paddingY={'5px'}
                        fontSize={'14px'}
                        color={'propulsion.secondary'}
                        bg={'propulsion.thirdy'}
                      >
                        Send
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
