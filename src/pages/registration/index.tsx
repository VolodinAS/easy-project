import React, { useEffect } from 'react';

import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import validator from 'validator';
import { Field, Form } from 'react-final-form';

import { ROUTES } from '../../constants/routes';

import { 
    Wrapper,
    FormContainer,
    Title,
    FormLink,
    Fieldset,
    TextWrapper,
    ButtonWrapper
} from './components';

import Input from '../../components/input';
import Button from '../../components/button';
import { LangSection } from '../sign-in/style';
import LanguageSelect from '../../components/language-select';
import composeValidators from '../../utils/validation';
import { useSignUpMutation } from '../../data/services/auth';
import { authToken } from '../../utils/token';
import { useAuthSuccess } from '../../hooks/auth-success';
import HeaderTitle from '../../components/title';
import ErrorText from '../../components/error/error-text';

const Registration = () => {

    useAuthSuccess();

    const {t} = useTranslation();

    const navigate = useNavigate();
    const required = value => !value && 'easy-project.dashboard.newProject.form.error.empty';
    const isValidEmail = value => validator.isEmail(value) ? undefined : 'easy-project.signin.error-email';

    const [signUp, signUpRequest] = useSignUpMutation();

    useEffect(() => {

        if ( signUpRequest.isSuccess ){
            navigate((ROUTES.SIGN_IN.url), { replace: true });
        }

    }, [signUpRequest, navigate]);


    return (
        <Wrapper>
            <HeaderTitle title={t('easy-project.header.title.signup')}/>
            <LangSection>
                <LanguageSelect />
            </LangSection>
            <Form
                
                onSubmit={signUp}
                render={({ handleSubmit }) => (
                    <FormContainer>
                        <Title>
                            {(t('easy-project.signup.title'))}
                        </Title>
                        {signUpRequest.isError && (
                            <ErrorText>
                                {signUpRequest.error?.data?.error}
                            </ErrorText>
                        )}
                        <form
                            noValidate
                            onSubmit={handleSubmit}
                            data-testid='signup-form'
                        >
                            <Fieldset>
                                <Field name="login" validate={required}>
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            labelText={(t('easy-project.signup.submitTextLogin'))}
                                            labelBold
                                            required
                                            type="text"
                                            placeholder={(t('easy-project.signup.labelPlaceholderLogin'))}
                                            errors={meta.touched && meta.error && t(meta.error)}
                                        />
                                    )}
                                </Field>
                                <Field name="name_secondname" validate={required}>
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            labelText={(t('easy-project.signup.labelTextName'))}
                                            labelBold
                                            required
                                            type="Name_SecondName"
                                            placeholder={(t('easy-project.signup.labelPlaceholderName'))}
                                            errors={meta.touched && meta.error && t(meta.error)}
                                        />
                                    )}
                                </Field>
                                <Field name='email' validate={composeValidators(required, isValidEmail)}>
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            labelText={t('easy-project.signin.labelTextEmail')}
                                            labelBold
                                            required
                                            type="email"
                                            placeholder={t('easy-project.signin.labelPlaceholderEmail')}
                                            errors={meta.touched && meta.error && t(meta.error)}
                                        />
                                    )}
                                </Field>
                                <Field name='password' validate={required}>
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}  
                                            labelText={t('easy-project.signin.labelTextPassword')}
                                            labelBold
                                            required
                                            type="password"
                                            autoComplete="off"
                                            placeholder={t('easy-project.signin.labelPlaceholderPassword')}
                                            errors={meta.touched && meta.error && t(meta.error)}
                                        />
                                    
                                    )}
                                </Field>
                            </Fieldset>
                            <TextWrapper>
                                <p>{t('easy-project.signup.signin.text')}<FormLink to={ROUTES.SIGN_IN.url} title="Войти если есть аккаунт">{t('easy-project.signup.signin.link-text')}</FormLink></p>
                            </TextWrapper>
                            <ButtonWrapper>
                                <Button color={'purple'}>{t('easy-project.signup.submitText')}</Button>
                            </ButtonWrapper>
                        </form>
                    </FormContainer>
                )}
            />
        </Wrapper>
    );
};

export default Registration;
