
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Form from '../form';

export default function Modal({open, handleClose, handleRegister}: {open: boolean, handleClose: () => void, handleRegister: () => void}) {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                                <div>
                                    <div className='mt-3 text-center sm:mt-5'>
                                        <Dialog.Title
                                            as='h1'
                                            className='text-base font-semibold leading-6 text-gray-900'
                                        >
                                            Register new client
                                        </Dialog.Title>
                                        <Form />
                                    </div>
                                </div>
                                <div className='mt-8'>
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
                                            onClick={() => handleRegister()}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}