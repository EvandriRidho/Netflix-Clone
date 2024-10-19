import React from 'react'

const SectionLayouts = ({ children }) => {
    return (
        <section className='relative bg-black w-full text-white'>
            <div className='grid sm:grid-cols-2 max-w-7xl mx-auto justify-center items-center py-16 gap-16 text-center sm:text-left'>
                {children}
            </div>
        </section>
    )
}

export default SectionLayouts