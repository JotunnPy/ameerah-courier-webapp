import { Divider, Title } from '@mantine/core'
import React from 'react'
import {motion} from 'framer-motion'
function faq() {
  return (
    <>
    <motion.div exit={{opacity: 0}}>
    <Title>FAQ</Title>
    <Divider></Divider>
    </motion.div>
    </>
  )
}

export default faq