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
            <div className="slice-btn-container">
                <a className="slice-btn"><h3>Begin Slice!</h3></a>
            </div>
            <FormResults />
        </main>
    )
}