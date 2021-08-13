import * as React from 'react'
import { Text } from 'theme-ui'
import { GridWrapper } from '@thepuzzlers/pieces'

import { TextContainer } from './components'

const Article = ({ firstParagraph, secondParagraph, sx }) => {
    return (
        <GridWrapper sx={sx}>
            <TextContainer>
                <Text
                    sx={{
                        pr: ["0", "0", "37px", "0", "0", "0"],
                        pb: ["20px", "20px", "0", "20px", "20px", "20px"]
                    }}
                    variant="mainArticle"
                >{firstParagraph}</Text>
                <Text
                    variant="mainArticle"
                >{secondParagraph}</Text>
            </TextContainer>
        </GridWrapper>
    )
}

export default Article