import React, { FC, FormEventHandler } from 'react';

import LanguageSelect from '../../../../components/language-select';
import { LangSection } from '../../style';
import { Section, Form, Titel, Button} from './form-style';

interface ChangedFormProps { 
    name:string,
    title: string,
    submitText: string,
    onSubmit?: FormEventHandler<unknown>, 
}

const ChangedForm:FC<ChangedFormProps> = ({ name, title, children, submitText, onSubmit }) => (
    <Section>
        <LangSection>
            <LanguageSelect />
        </LangSection>
        <Form noValidate onSubmit={onSubmit}>
            <Titel>{title}</Titel>
            {children}
            <Button type="submit">{submitText}</Button>
        </Form>
    </Section>
);

export default ChangedForm;