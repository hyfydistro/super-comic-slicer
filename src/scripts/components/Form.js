import React from 'react';
import FormUpload from './FormUpload';
import FormSelect from './FormSelect';
import FormOptions from './FormOptions';
import FormResults from './FormResults';

export default function Form() {
    return (
        <main>
            <h2>Start Here</h2>
            <FormUpload />
            <FormSelect />
            <FormOptions />
            <FormResults />
        </main>
    )
}