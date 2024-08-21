import Box from '@mui/material/Box'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useLanguage } from 'app/language/use-language'
import { Country, useCountries } from 'app/utils/use-countries'

type CountrySelectProps = {
  label: string
  name: string
  onChange: (value: string) => void
  placeholder?: string
}

const filterOptions = createFilterOptions<Country>({
  matchFrom: 'start',
})

export const CountrySelect = ({
  label,
  name,
  onChange,
  placeholder,
}: CountrySelectProps) => {
  const { language } = useLanguage()
  const options = useCountries(language.locale)

  return (
    <Autocomplete
      autoHighlight
      disablePortal
      filterOptions={filterOptions}
      fullWidth
      getOptionLabel={(option) => option.name}
      id="country-autocomplete"
      isOptionEqualToValue={(option, value) => option.code === value.code}
      onChange={(_, country) => onChange(country?.name ?? 'Sverige')}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          placeholder={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props
        return (
          <Box key={key} component="li" {...optionProps}>
            {option.flag} {option.name}
          </Box>
        )
      }}
    />
  )
}
