import { useEffect, useState } from 'react';
import { getServices } from '../../Local Storage/localStorage';
import SelectionCard from './selectionCard';

const MySelection = () => {
    const [allPackages, setPackages] = useState(null)
    useEffect(() => {
        const packages = getServices()
        setPackages(packages)
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-7xl mx-auto my-6 md:my-8 lg:my-12'>
            {
                allPackages?.map(mySelection => <SelectionCard key={mySelection.package_id} mySelection={mySelection}></SelectionCard>)
            }
        </div>
    );
};

export default MySelection;