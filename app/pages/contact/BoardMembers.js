import React, { Fragment } from 'react'

import Email from 'app/components/Email'
import Label from 'app/components/Label'

import { LARS, MIKAEL, PETER, ULLA } from 'app/utils/contacts'
import useText from 'app/utils/useText'

const BoardMembers = () => {
  const getText = useText()

  return (
    <Fragment>
      <h4>{getText('roles_title')}</h4>
      {[PETER, LARS, ULLA, MIKAEL].map(({ email, name, role }) => (
        <p key={role}>
          <Label>{getText(`roles_${role}`)}</Label>
          {name}, <Email to={email} />
        </p>
      ))}
      <p>
        Thomas&nbsp;Holmberg, Peter&nbsp;Jonsson, Jakob&nbsp;Lindwall,
        Hans&#8209;Gunnar&nbsp;Nilsson, Benny&nbsp;Paulsson, Erik&nbsp;Jonsson
      </p>
    </Fragment>
  )
}

export default BoardMembers
