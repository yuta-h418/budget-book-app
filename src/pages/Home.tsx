import { Box } from '@mui/material'
import React from 'react'
import MonthlySummary from '../components/MonthlySummary'
import Calender from '../components/Calender'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'

const Home = () => {
    return (
        <Box sx={{display: "flex"}}>
            <Box sx={{flexGrow: 1}}>
                <MonthlySummary />
                <Calender />
            </Box>
            <Box>
                <TransactionMenu />
                <TransactionForm />
            </Box>
        </Box>
    )
}

export default Home