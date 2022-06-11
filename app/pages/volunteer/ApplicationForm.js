import React, { useState } from 'react'
import { css } from '@emotion/core'

import Checkbox from 'app/components/Checkbox'
import Divider from 'app/components/Divider'
import Email from 'app/components/Email'
import FormField from 'app/components/FormField'
import RadioButton from 'app/components/RadioButton'
import Select, { SelectOption } from 'app/components/Select'
import TextArea from 'app/components/TextArea'
import TextField from 'app/components/TextField'

import nationalities from 'app/utils/nationality'
import useText, { interpolate } from 'app/utils/useText'
import { media } from 'app/site/GlobalStyles'

const REQUIRED_FILEDS = [
  'fname',
  'lname',
  'gender',
  'birth',
  'about',
  'timeframe',
  'email',
  'nationality',
]

const styles = css`
  margin: 40px 0 20px;

  > div {
    margin-bottom: 20px;
  }

  ${media.small} {
    display: grid;
    gap: 20px 40px;
    grid-template-columns: repeat(2, 1fr);

    > div {
      margin-bottom: 0;
    }

    .colspan {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

const ApplicationForm = ({ error, loading, onSubmit }) => {
  const [input, setInput] = useState({})
  const getText = useText()

  const handleInput = (key, val) => {
    setInput((current) => ({ ...current, [key]: val }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const isValid = (key) => input[key] && input[key].trim() !== ''

    if (!REQUIRED_FILEDS.every(isValid)) {
      return
    }

    const formData = new FormData(event.target.value)
    onSubmit(formData)
  }

  return (
    <article>
      <h3>
        {getText('volunteer_header')} {getText('volunteer_application_title')}
      </h3>
      <form css={styles} onSubmit={handleSubmit}>
        <FormField label={getText('first-name')} required>
          <TextField name="fname" onChange={handleInput} required value={input.fname} />
        </FormField>
        <FormField label={getText('last-name')} required>
          <TextField name="lname" onChange={handleInput} required value={input.lname} />
        </FormField>
        <FormField label={getText('volunteer_gender')} required>
          <RadioButton
            checked={input.gender === 'Female'}
            label={getText('volunteer_gender-f')}
            name="gender"
            onChange={handleInput}
            required
            value="Female"
          />
          <RadioButton
            checked={input.gender === 'Male'}
            label={getText('volunteer_gender-m')}
            name="gender"
            onChange={handleInput}
            required
            value="Male"
          />
          <RadioButton
            checked={input.gender === 'n/a'}
            label={getText('volunteer_gender-x')}
            name="gender"
            onChange={handleInput}
            required
            value="n/a"
          />
        </FormField>
        <FormField label={getText('volunteer_birthyear')} required>
          <TextField name="birth" onChange={handleInput} required value={input.birth} />
        </FormField>
        <FormField
          className="colspan"
          description={getText('volunteer_about-hint')}
          label={getText('volunteer_about')}
          required
        >
          <TextArea name="about" onChange={handleInput} required value={input.about} />
        </FormField>
        <FormField
          className="colspan"
          description={getText('volunteer_timeframe-hint')}
          label={getText('volunteer_timeframe')}
          required
        >
          <TextField name="timeframe" onChange={handleInput} required value={input.timeframe} />
        </FormField>
        <FormField label={getText('email')} required>
          <TextField name="email" onChange={handleInput} required value={input.email} />
        </FormField>
        <FormField label={getText('phone')}>
          <TextField name="phone" onChange={handleInput} value={input.phone} />
        </FormField>
        <FormField label={getText('volunteer_nationality')} required>
          <Select
            label={getText('select')}
            name="nationality"
            onChange={handleInput}
            required
            value={input.nationality}
          >
            {nationalities.map((locale) => (
              <SelectOption key={locale} value={locale}>
                {locale}
              </SelectOption>
            ))}
          </Select>
        </FormField>
        <div>{/* Empty */}</div>
        <FormField label={`${getText('volunteer_car')}?`}>
          <Checkbox
            checked={input.car === 'Yes'}
            label={getText('yes')}
            name="car"
            onChange={handleInput}
            value="Yes"
          />
        </FormField>
        <FormField label={`${getText('volunteer_driving-license')}?`}>
          <Checkbox
            checked={input.driver === 'Yes'}
            label={getText('yes')}
            name="driver"
            onChange={handleInput}
            value="Yes"
          />
        </FormField>
        <div className="colspan">
          <Divider color="gray" slim />
          <p>{interpolate(getText('volunteer_mandatory'), { $1: <strong>*</strong> })}</p>
        </div>
        <div>
          <button disabled={error || loading} type="submit">
            {loading ? getText('volunteer_submitting') : getText('volunteer_submit')}
          </button>
        </div>
      </form>
      {error && (
        <p>
          {interpolate(getText('volunteer_error_message'), {
            $1: <strong>{getText('volunteer_error_title')}</strong>,
            $2: <Email to="volunteer@annsjon.org" />,
          })}
        </p>
      )}
    </article>
  )
}

export default ApplicationForm
