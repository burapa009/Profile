const getFullYear = () => {
    const currentYear = new Date().getFullYear();

    return <footer>
       <p className='text-center text-neutral-500 text-sm'>
        &copy; {currentYear} Burapa Pratumchai. All rights reserved.
       </p>
    </footer>
}

export default getFullYear;