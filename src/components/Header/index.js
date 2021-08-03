import * as React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from 'theme-ui'
import Section from '../Box'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
const Header = () => {


  const datas = useStaticQuery(graphql`
    query tes {
      allPurHoursJson {
        edges {
          node {
            id
            label
            hours
          }
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Flex as="nav"
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "4px 4px 4px black"
          }}
        >
          <Section>
            <h1>Bistrokuche?!</h1>
            {datas.allPurHoursJson.edges.map(item => {
              return (
                <div>
                  <h4>{item.node.label}</h4>
                  <p>{item.node.hours}</p>
                </div>
              )
            })}
            <div
              sx={{
                display: 'flex',
                flexDirection: "column"
              }}
            >
              <div>
                <StaticImage
                  alt="vegan"
                  width="20"
                  src={'../../images/vegan.png'}
                />
                <span>Vegan oder vegane Option</span>
              </div>
              <div sx={{
              }}>
                <StaticImage
                  width="12"
                  alt="vegetarian"
                  src={'../../images/vegetarian.png'}
                />
                <span>
                  Vegatarisch</span>
              </div>
            </div>
            <StaticImage
              width="12"
              alt="vegetarian"
              src={'../../images/close.png'}
            />
          </Section>
        </Flex>
      </header>
    </>
  )
}

export default Header
