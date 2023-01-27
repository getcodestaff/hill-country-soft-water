import React, { useState, useEffect } from 'react';

export const Copyright = () => {
    const [year, setYear] = useState(0);

    useEffect(() => {
        const today = new Date();
        setYear(today.getFullYear());
    }, [year, setYear]);

    return (
        <div className="mt-2 w-full">
            <div className="flex flex-col text-center">
                <div className="flex justify-center mt-4">
                    <p className="mb-0">
                        © Copyright 2020 - {year}{' '}
                        <strong>Carruth Home Solutions</strong>
                    </p>
                    <p>&nbsp;All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};
