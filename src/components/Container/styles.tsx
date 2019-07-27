import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;
  max-width: 1015px;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`