import styled from 'styled-components'
import React from 'react'

const StyledField = styled.div({
  marginBottom: 30
})

const Form = styled.form({})

const Label = styled.label({
  fontWeight: 600
})

type Props = {
  label: string
  children: React.ReactNode
  htmlFor: string
}

const Field = ({ label, children, ...props }: Props) => (
  <StyledField>
    <Label {...props}>{label}</Label>
    {children}
  </StyledField>
)

export default Form

export { Field }
