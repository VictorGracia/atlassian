import React, { Fragment } from 'react';
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

import Form, {
    CheckboxField,
    ErrorMessage,
    Field,
    FormFooter,
    FormHeader,
    FormSection,
    HelperMessage,
    RequiredAsterisk,
    ValidMessage,
} from '@atlaskit/form';

const handleRedirect = () => {
    window.location.href = '/dashboard';
  };

const FormDefaultExample = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            alignItems: 'center'
        }}>
            <div
                style={{
                    display: 'flex',
                    width: '600px',
                    maxWidth: '600px',
                    margin: '0 auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Form<{ username: string; password: string; remember: boolean }>
                    onSubmit={(data) => {
                        console.log('form data', data);
                        
                        return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
                            data.username === 'error' ? { username: 'IN_USE' } : undefined,
                        );
                    }}
                >
                    {({ formProps, submitting }) => (
                        <form {...formProps}>
                            <FormHeader title="Sign in">
                                <p aria-hidden="true">
                                    Required fields are marked with an asterisk <RequiredAsterisk />
                                </p>
                            </FormHeader>
                            <FormSection>
                                <Field
                                    aria-required={true}
                                    name="username"
                                    label="Username"
                                    isRequired
                                    defaultValue="dst12"
                                >
                                    {({ fieldProps, error }) => (
                                        <Fragment>
                                            <TextField autoComplete="off" {...fieldProps} />
                                            {!error && (
                                                <HelperMessage>
                                                    You can use letters, numbers, and periods.
                                                </HelperMessage>
                                            )}
                                            {error && (
                                                <ErrorMessage>
                                                    This username is already in use, try another one.
                                                </ErrorMessage>
                                            )}
                                        </Fragment>
                                    )}
                                </Field>
                                <Field
                                    aria-required={true}
                                    name="password"
                                    label="Password"
                                    defaultValue=""
                                    isRequired
                                    validate={(value) =>
                                        value && value.length < 8 ? 'TOO_SHORT' : undefined
                                    }
                                >
                                    {({ fieldProps, error, valid, meta }) => {
                                        return (
                                            <Fragment>
                                                <TextField type="password" {...fieldProps} />
                                                {error && !valid && (
                                                    <HelperMessage>
                                                        Use 8 or more characters with a mix of letters, numbers,
                                                        and symbols.
                                                    </HelperMessage>
                                                )}
                                                {error && (
                                                    <ErrorMessage>
                                                        Password needs to be more than 8 characters.
                                                    </ErrorMessage>
                                                )}
                                                {valid && meta.dirty ? (
                                                    <ValidMessage>Awesome password!</ValidMessage>
                                                ) : null}
                                            </Fragment>
                                        );
                                    }}
                                </Field>
                                <CheckboxField name="remember" label="Remember me" defaultIsChecked>
                                    {({ fieldProps }) => (
                                        <Checkbox
                                            {...fieldProps}
                                            label="Always sign in on this device"
                                        />
                                    )}
                                </CheckboxField>
                            </FormSection>

                            <FormFooter>
                                <ButtonGroup label="Form submit options">
                                    <Button appearance="subtle">Cancel</Button>
                                    <LoadingButton
                                        type="submit"
                                        appearance="primary"
                                        isLoading={submitting}
                                        onClick={handleRedirect}
                                    >
                                        Sign up
                                    </LoadingButton>
                                </ButtonGroup>
                            </FormFooter>
                        </form>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default FormDefaultExample;