import React from 'react'
import { Box } from 'theme-ui'
import MenuButton from 'overlays/MenuOverlay/MenuButton'
import Layout from 'components/Layout'

const IndexPage = () => {
    return (
        <Layout>
            <Box sx={{ height: 500, width: '100%' }}>
                <MenuButton sx={{ margin: "50px" }} />
            </Box>
        </Layout>
    )
}

export default IndexPage
