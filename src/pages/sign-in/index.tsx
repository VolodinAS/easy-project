import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/input';
import { ROUTES } from '../../constants/routes';
import composeValidators from '../../utils/validation';
import { useSignInMutation } from '../../data/services/auth';
import { authToken } from '../../utils/token';

import ChangedForm from './components/form/form';
import  { RegisterBox, Wraper } from './style';
import SignUpLink from './components/register-link';
import ForgotPasswordLink from './components/forgot-password-link';
import { useAuthSuccess } from '../../hooks/auth-success';
import HeaderTitle from '../../components/title';

function SignIn () {

    useAuthSuccess();

    const {t} = useTranslation();

    const navigate = useNavigate();
    const required = value => !value && 'easy-project.dashboard.newProject.form.error.empty';
    const isValidEmail = value => validator.isEmail(value) ? undefined : 'easy-project.signin.error';

    const [signIn, signInRequest] = useSignInMutation();

    const onSubmit = (authData) => {
        signIn(authData);
    };

    useEffect(() => {
        if ( signInRequest.isSuccess ){
            const token = signInRequest.data.data.token;
            authToken.token = token;
            navigate((ROUTES.DASHBOARD.url), { replace: true });
        }
    }, [navigate, signInRequest]);

    return (
        <>
            <HeaderTitle title={t('easy-project.header.title.signin')}/>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <ChangedForm
                        name="signIn"
                        title={t('easy-project.signin.titleSignIn')}
                        submitText={t('easy-project.signin.submitText')}
                        onSubmit={handleSubmit}
                    >
                        {signInRequest.isError && (
                            <div style={{color: 'red'}}>
                                {signInRequest.error?.data.error}
                            </div>
                        )}
                        <Wraper
                            data-testid="signin-form"
                        >
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
                                        placeholder={t('easy-project.signin.labelPlaceholderPassword')}
                                        errors={meta.touched && meta.error && t(meta.error)}
                                        autoComplete="off"
                                    />
                                    
                                )}
                            </Field>                   
                        </Wraper>
                        <RegisterBox>
                            <SignUpLink/>  
                        </RegisterBox>
                        <ForgotPasswordLink/>
                    </ChangedForm>
                )}
            />
        </>
    );
}

export default SignIn;
