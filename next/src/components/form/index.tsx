export default function Form() {
    return (
        <form className='space-y-8 divide-y divide-gray-200'>
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

                <div className='pt-8'>
                    <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12'>
                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='first-name'
                                className='block text-sm font-medium text-gray-700'
                            >
                                First name
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='first-name'
                                    id='first-name'
                                    autoComplete='given-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='last-name'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Last name
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='last-name'
                                    id='last-name'
                                    autoComplete='family-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
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
                                />
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
                                htmlFor='hourly rate'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Hourly rate
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='hourly rate'
                                    id='hourly rate'
                                    autoComplete='hourly rate'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
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
            </div>
        </form>
    );
}
