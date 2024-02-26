import React, { Fragment } from 'react'

import Email from '../../components/Email'
import Label from '../../components/Label'

import { LARS, MIKAEL, THOMAS, ULLA } from '../../utils/contacts'
import useText from '../../utils/useText'

const BoardMember = ({ email, name, role }) => (
  <p>
    <Label>{role}</Label>
    {name}, <Email to={email} />
  </p>
)

const BoardMembers = () => {
  const getText = useText()

  return (
    <Fragment>
      <h4>{getText('roles_title')}</h4>
      <BoardMember email={THOMAS.email} name={THOMAS.name} role={getText(`roles_${THOMAS.role}`)} />
      <BoardMember email={LARS.email} name={LARS.name} role={getText(`roles_${LARS.role}`)} />
      <BoardMember email={ULLA.email} name={ULLA.name} role={getText(`roles_${ULLA.role}`)} />
      <BoardMember email={MIKAEL.email} name={MIKAEL.name} role={getText(`roles_${MIKAEL.role}`)} />
      <p>
        Peter&nbsp;Bahlenberg, Peter&nbsp;Jonsson, Jakob&nbsp;Lindwall,
        Hans&#8209;Gunnar&nbsp;Nilsson, Benny&nbsp;Paulsson, Erik&nbsp;Jonsson
      </p>
    </Fragment>
  )
}

export default BoardMembers
