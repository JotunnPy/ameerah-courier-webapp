import { Button, Title } from '@mantine/core'
import React from 'react'
import {motion} from 'framer-motion'
import { Settings } from 'tabler-icons-react'
function index() {
  return (
    <motion.div exit={{opacity: 0}}>
    <>
    <Title order={1}>Home</Title>
    </>
    </motion.div>
  )
}

export default index