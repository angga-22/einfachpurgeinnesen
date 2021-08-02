import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../Box'
/** @jsx jsx */
import { jsx } from "theme-ui"
const Card = () => {


  const data = useStaticQuery(graphql`
    query MyQuery {
      allPurDataJson {
        edges {
          node {
            id
            label
            description
            currentPrice
            nextPrice
            type
          }
        }
      }
    }
  `)
  console.log(data.allPurDataJson.edges)

  return (
    <div>
      {data.allPurDataJson.edges.map(item => {
        return (
          <Section>
            <h1
              sx={{
                fontFamily: 'label',
                fontSize: [2, 3, 4, 5, 6, 7]
              }}
            >{item.node.label} <span style={{ color: 'red' }}>{item.node.type === "vegan" ? "vegan" : item.node.type === "vegetarian" ? "vegetarian" : null}</span> </h1>
            <p
              sx={{
                fontFamily: 'body'
              }}
            >{item.node.description}</p>
            <p
              sx={{
                fontFamily: 'body'
              }}
            >{item.node.currentPrice}</p>
            <p
              sx={{
                fontFamily: 'body'
              }}
            >{item.node.nextPrice}</p>
          </Section>
        )
      })}
    </div>
  )
}

export default Card
