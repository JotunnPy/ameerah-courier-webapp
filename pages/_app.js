import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  CSSObject,
  Group,
  Title
} from '@mantine/core';
import { CashBanknote, Home, Phone, QuestionMark, Settings, User } from 'tabler-icons-react';
import ActionButton from '../components/LinkActionButton'
import { AnimatePresence } from 'framer-motion';

export default function MyApp({Component, pageProps}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const disappear = CSSObject = {
    display : 'none'
  }
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <>
        <MediaQuery smallerThan={'lg'} largerThan={'sm'} styles={disappear}>
        <Footer style={{borderRadius: 40, boxShadow: '0px 0px 10px gray', marginBottom: 10 }} height={80} p="xs">
            <Group spacing={'sm'} position='center'>
              <ActionButton glow='red' icon={<QuestionMark/>} page='/faq' />
              <ActionButton glow='blue' icon={<User />} page='/about' />
              <ActionButton glow='green' icon={<Home />} page='/' size={60} />
              <ActionButton glow='purple' icon={<Phone />} page='/contact' />
              <ActionButton glow='black' icon={<CashBanknote />} page='/pricing' />
            </Group>
        </Footer>
        </MediaQuery>
        </>
      }
      header={
        <Header height={70} p="md" >
          <Group position='left'>
            <ActionButton  glow='black' size={'lg'} icon={<Settings></Settings>} page='/settings' />
            <Title></Title>
          </Group>
        </Header>
      }
    >
        <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
        </AnimatePresence>
    </AppShell>
  );
}