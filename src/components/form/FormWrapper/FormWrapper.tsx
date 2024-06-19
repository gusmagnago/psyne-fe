import type { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { ModalProps } from '@mui/material';
import { Box, Button, Modal } from '@mui/material';

import { ModalContentWrapper } from './FormWrapper.styles';
import type { FormWrapperProps } from './FormWrapper.types';

export const FormWrapper = <T extends FieldValues>({
	handleSubmit,
	onSubmit,
	submitButtonLabel,
	children,
	formTitle,
	formDescription,
	open,
	onClose,
}: FormWrapperProps<T> & ModalProps) => {
	const { t } = useTranslation();

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby={`modal-form-${formTitle}`}
			aria-describedby={`modal-form-${formDescription}`}
		>
			<ModalContentWrapper onSubmit={handleSubmit(onSubmit)}>
				{children}
				<Box>
					<Button type='submit' fullWidth color='primary' variant='contained'>
						{t(submitButtonLabel)}
					</Button>
				</Box>
			</ModalContentWrapper>
		</Modal>
	);
};
