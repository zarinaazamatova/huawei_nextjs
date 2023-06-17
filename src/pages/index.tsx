import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.green};
`

export default function Home() {
  return <Title>My page</Title>
}