import React, { useState } from 'react';
import { differenceInDays, addDays, isSunday, isAfter, getDay } from 'date-fns';

const UpdatedSundays: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [error, setError] = useState<string>('');
    const [sundaysCount, setSundaysCount] = useState<number>(0);

    const isValidDate = (date: Date | null) => {
        return date && isAfter(date, new Date()) && getDay(date) !== 0;
    };

    const calculateSundaysCount = (start: Date, end: Date) => {
        let count = 0;
        let currentDate = start;

        while (currentDate <= end) {
            if (isSunday(currentDate) && currentDate.getDate() < 28) {
                count++;
            }
            currentDate = addDays(currentDate, 1);
        }

        return count;
    };

    const handleCalculateSundays = () => {
        if (startDate && endDate) {
            if (!isValidDate(startDate) || !isValidDate(endDate)) {
                setError('Start date must be in the future and not a Sunday. Dates must be at least two years apart.');
                setSundaysCount(0);
                return;
            }
            if (differenceInDays(endDate, startDate) < 730) {
                setError('Dates must be at least two years apart.');
                setSundaysCount(0);
            } else {
                setError('');
                setSundaysCount(calculateSundaysCount(startDate, endDate));
            }
        }
    };

    return (
        <div>
            <h1>Updated Sunday Counter</h1>
            <div>
                <label>Start Date: </label>
                <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
            </div>
            <div>
                <label>End Date: </label>
                <input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
            </div>
            <div>
                <button onClick={handleCalculateSundays}>Calculate</button>
            </div>
            {error && <p className="error">{error}</p>}
            <div>
                {sundaysCount > 0 && (
                    <p>Number of Sundays between the two dates: {sundaysCount}</p>
                )}
            </div>
        </div>
    );
};

export default UpdatedSundays;
