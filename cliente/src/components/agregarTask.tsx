import React, { useState } from 'react';
import { FieldMetaState } from 'react-final-form';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';

type AgregarTask = {
    titulo: string;
};


const AgregarTask = ({ titulo }: AgregarTask) => {

    const [showMessage, setShowMessage] = useState(false);


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const agregarDB = async () => {

        const task = {
            title: title,
            description: description,

        };


        try {
            const response = await fetch('https://1xxfiae67d.execute-api.us-east-1.amazonaws.com/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('Response:', data);
            setShowMessage(true);
        } catch (error) {
            console.error('Error agregando tarea:', error);
        }
    };


  




    //-------------------------------------------------------------------


    interface TaskFormValues {
        title: string;
        description: string;
        // otras propiedades si las tiene
    }

    const validate = (data: TaskFormValues) => {
        let errors: Partial<TaskFormValues> = {};

        if (!data.title) {
            errors.title = 'El título es requerido';
        }

        if (!data.description) {
            errors.description = 'La descripción es requerida';
        }

        return errors;
    };


    const onSubmit = (form: TaskFormValues) => {
        setShowMessage(true);

        setTitle('');
        setDescription('');
    };

    const isFormFieldValid = (meta: { touched: boolean; error: any }) => !!(meta && meta.touched && meta.error);


    const getFormErrorMessage = (meta: { touched: boolean; error: any }) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = (
        <div className="flex justify-content-center">
            <Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} />
        </div>
    );


    return (
        <>

            <h1>{titulo}</h1>


            <div className="form-demo">
                
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex align-items-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registro Exitoso</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Nueva tarea <b>{title}</b> con descripción: <b>{description}</b> registrada con éxito.
                        </p>
                    </div>
                </Dialog>




                <div className="flex justify-content-center">
                    <div className="card">
                        <h2 className="text-center">Registrar</h2>
                        <Form onSubmit={onSubmit} initialValues={{ title: '', description: '' }} validate={validate} render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="p-fluid">

                                <Field name="title" render={({ input, meta }) => (
                                    <div className="field">
                                        <span className="p-float-label">
                                            <InputText id="title" {...input} autoFocus className={classNames({ 'p-invalid': meta.touched && meta.error })} value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                            <label htmlFor="title" className={classNames({ 'p-error': meta.touched && meta.error })}>Titulo</label>
                                        </span>
                                        {getFormErrorMessage(meta.touched && meta.error)}
                                    </div>
                                )} />


                                <Field name="description" render={({ input, meta }) => (
                                    <div className="field">
                                        <span className="p-float-label">
                                            <InputText id="description" {...input} autoFocus className={classNames({ 'p-invalid': meta.touched && meta.error })} value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                            <label htmlFor="description" className={classNames({ 'p-error': meta.touched && meta.error })}>Descripción</label>
                                        </span>
                                        {getFormErrorMessage(meta.touched && meta.error)}
                                    </div>
                                )} />




                                <Button onClick={agregarDB} type="submit" label="Guardar" className="mt-2" />

                            </form>
                        )} />
                    </div>
                </div>


            </div>



        </>
    );

};

export default AgregarTask;