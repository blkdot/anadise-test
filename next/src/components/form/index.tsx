import { useState, useEffect } from 'react';
import { Client } from "../../types/client";
import * as Yup from "yup";
import { Formik } from "formik";

type FormType = {
    firstName: string,
    lastName: string,
    email: string,
    sex: string,
    birthday: Date,
    supportTier: string,
    hourlyRate: number
};

export default function Form({handleClose, handleRegister}: {handleClose: () => void, handleRegister: () => void}) {

    const intialValues = {
        firstName: "",
        lastName: "",
        email: "",
        sex: "",
        birthday: new Date(),
        supportTier: "standard",
        hourlyRate: 60
    };

    const submitForm = (values: any) => {
        handleRegister();
    };
    
    const validate = (values: FormType) => {
        let errors: {[k: string]: any} = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
          errors.firstName = "firstName is required";
        }
        if (!values.lastName) {
            errors.lastName = "lastName is required";
        }

        if (!values.email) {
            errors.email = "email is required";
        }
        else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
        }

        if (!values.hourlyRate) {
          errors.hourlyRate = "hourlyRate is required";
        } else if (Number(values.hourlyRate) !== parseInt(String(values.hourlyRate), 10)) {
          errors.hourlyRate = "Invalid number";
        }
        return errors;
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
          .required("Firstname is required"),
      
        lastName: Yup.string()
          .required("Lastname is required"),
      
        email: Yup.string().email("Invalid email format").required("Email is required"),

        hourlyRate: Yup.number().positive("Must be more than 0")
        .integer("Must be integer")
        .required("This field is required")
      
      });

    return (
        <div className='space-y-8 divide-y divide-gray-200'>
            <div className='space-y-8 divide-y divide-gray-200'>
                <div>
                    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='photo'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Profile Photo
                            </label>
                            <div className='mt-1 flex items-center'>
                                <span className='h-12 w-12 overflow-hidden rounded-full bg-gray-100 mr-5'>
                                    <svg
                                        className='h-full w-full text-gray-300'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                    </svg>
                                </span>
                                <label
                                    htmlFor='file-upload'
                                    className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                                >
                                    <span>Upload a file</span>
                                    <input
                                        id='file-upload'
                                        name='file-upload'
                                        type='file'
                                        className='sr-only'
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={intialValues}
                    validate={validate}
                    onSubmit={submitForm}
                >
                    {(formik) => {
                        const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                        } = formik;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className='pt-8'>
                                    <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12'>
                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='firstName'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                First name
                                            </label>
                                            <div className='mt-1'>
                                                <input
                                                    type='text'
                                                    name='firstName'
                                                    id='firstName'
                                                    autoComplete='given-name'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.firstName && touched.firstName && (
                                                    <span className="text-red-400">{errors.firstName}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='lastName'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                Last name
                                            </label>
                                            <div className='mt-1'>
                                                <input
                                                    type='text'
                                                    name='lastName'
                                                    id='lastName'
                                                    autoComplete='family-name'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.lastName && touched.lastName && (
                                                    <span className="text-red-400">{errors.lastName}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='email'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                Email address
                                            </label>
                                            <div className='mt-1'>
                                                <input
                                                    id='email'
                                                    name='email'
                                                    type='email'
                                                    autoComplete='email'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.email && touched.email && (
                                                    <span className="text-red-400">{errors.email}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='gender'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                gender
                                            </label>
                                            <div className='mt-1'>
                                                <select
                                                    id='gender'
                                                    name='gender'
                                                    autoComplete='gender-name'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                >
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='hourlyRate'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                Hourly rate
                                            </label>
                                            <div className='mt-1'>
                                                <input
                                                    type='text'
                                                    name='hourlyRate'
                                                    id='hourlyRate'
                                                    autoComplete='hourlyRate'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                    value={values.hourlyRate}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.hourlyRate && touched.hourlyRate && (
                                                    <span className="text-red-400">{errors.hourlyRate}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='sm:col-span-6'>
                                            <label
                                                htmlFor='supportTier'
                                                className='block text-sm font-medium text-gray-700'
                                            >
                                                supportTier
                                            </label>
                                            <div className='mt-1'>
                                                <select
                                                    id='supportTier'
                                                    name='supportTier'
                                                    autoComplete='supportTier-name'
                                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                >
                                                    <option>standard</option>
                                                    <option>gold</option>
                                                    <option>platinum</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-8'>
                                    <div className='flex justify-end'>
                                        <button
                                            type='button'
                                            className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            onClick={() => handleClose()}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type='submit'
                                            className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}
