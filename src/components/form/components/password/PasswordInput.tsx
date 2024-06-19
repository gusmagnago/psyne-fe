import { useState } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { TextFieldProps } from '@mui/material';
import { IconButton, InputAdornment } from '@mui/material';
import { NotVisible, Visible } from '@psycron/components/icons';

import { InputFields } from '../shared/styles';

import type { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = <T extends FieldValues>({
	hasToConfirm,
	errors,
	register,
}: PasswordInputProps<T> & TextFieldProps) => {
	const { t } = useTranslation();

	const passwordInputId: Path<T> = 'password' as Path<T>;
	const confirmPasswordInputId: Path<T> = 'confirmPassword' as Path<T>;

	const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
		[passwordInputId]: false,
		[confirmPasswordInputId]: false,
	});

	const [passwordValue, setPasswordValue] = useState<string | undefined>();
	const [confirmPasswordValue, setConfirmPasswordValue] = useState<string | undefined>();

	const toggleVisibility = (id: Path<T>) => {
		setIsVisible((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleInputChange = (id: Path<T>, value: string | undefined) => {
		if (id === passwordInputId) {
			setPasswordValue(value);
		} else if (id === confirmPasswordInputId) {
			setConfirmPasswordValue(value);
		}
	};

	return (
		<>
			<InputFields
				label={t('globals.password')}
				id={passwordInputId}
				fullWidth
				type={!isVisible[passwordInputId] ? 'password' : 'text'}
				autoComplete="new-password"
				{...register(passwordInputId)}
				error={!!errors.password}
				helperText={errors.password?.message as string}
				onChange={(e) => {
					handleInputChange(passwordInputId, e.target.value);
				}}
				InputProps={{
					endAdornment: passwordValue?.length ? (
						<InputAdornment position="end">
							<IconButton
								onMouseEnter={() => toggleVisibility(passwordInputId)}
								onMouseLeave={() => toggleVisibility(passwordInputId)}
								edge="end"
							>
								{!isVisible[passwordInputId] ? <NotVisible /> : <Visible />}
							</IconButton>
						</InputAdornment>
					) : null,
				}}
			/>
			{hasToConfirm ? (
				<InputFields
					label={t('components.form.confirm-password')}
					fullWidth
					id={confirmPasswordInputId}
					type={!isVisible[confirmPasswordInputId] ? 'password' : 'text'}
					autoComplete="new-password"
					{...register(confirmPasswordInputId)}
					error={!!errors.confirmPassword}
					helperText={errors.confirmPassword?.message as string}
					onChange={(e) => {
						handleInputChange(confirmPasswordInputId, e.target.value);
					}}
					InputProps={{
						endAdornment: confirmPasswordValue?.length ? (
							<InputAdornment position="end">
								<IconButton
									onMouseEnter={() => toggleVisibility(confirmPasswordInputId)}
									onMouseLeave={() => toggleVisibility(confirmPasswordInputId)}
									edge="end"
								>
									{!isVisible[confirmPasswordInputId] ? <NotVisible /> : <Visible />}
								</IconButton>
							</InputAdornment>
						) : null,
					}}
				/>
			) : null}
		</>
	);
};
