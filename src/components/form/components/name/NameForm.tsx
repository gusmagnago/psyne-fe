import type { FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { TextFieldProps } from '@mui/material';
import { Grid } from '@mui/material';

import { InputFields } from '../shared/styles';

import type { NameFormProps } from './NameForm.types';

export const NameForm = <T extends FieldValues>({
	errors,
	register,
	placeholderFirstName,
	placeholderLastName,
	disabled,
}: NameFormProps<T> & TextFieldProps) => {
	const { t } = useTranslation();

	return (
		<Grid container>
			<Grid item xs={12}>
				<InputFields
					label={t('components.form.signup.firstName')}
					fullWidth
					id='firstName'
					defaultValue={placeholderFirstName}
					{...register('firstName' as Path<T>)}
					error={!!errors.firstName}
					helperText={errors.firstName?.message as string}
					required
					disabled={disabled}
				/>
			</Grid>
			<Grid item xs={12}>
				<InputFields
					label={t('components.form.signup.lastName')}
					fullWidth
					id='lastName'
					defaultValue={placeholderLastName}
					{...register('lastName' as Path<T>)}
					error={!!errors?.lastName}
					helperText={errors?.lastName?.message as string}
					required
					disabled={disabled}
				/>
			</Grid>
		</Grid>
	);
};
