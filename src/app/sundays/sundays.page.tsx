import React, { useState } from 'react';
import moment from 'moment';

const Sundays = () => {
    const [startDate, setStartDate] = useState<null | Date>(null);
    const [endDate, setEndDate] = useState<null | Date>(null);
    const [error, setError] = useState('');
    const [sundaysCount, setSundaysCount] = useState(0);

    const isValidDate = (date: moment.MomentInput) => {
        return date && moment(date).isAfter(moment()) && moment(date).day() !== 0;
    };

    const calculateSundaysCount = (start: moment.MomentInput, end: moment.MomentInput) => {
        let count = 0;
        let currentDate = moment(start);

        while (currentDate.isBefore(moment(end).add(1, 'days'))) {
            if (currentDate.day() === 0 && currentDate.date() < 28) {
                count++;
            }
            currentDate.add(1, 'days');
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
            if (moment(endDate).diff(moment(startDate), 'days') < 730) {
                setError('Dates must be at least two years apart.');
                setSundaysCount(0);
            } else {
                setError('');
                setSundaysCount(calculateSundaysCount(startDate, endDate));
            }
        }
    }

    return (
        <div>
            <h1>Sunday Counter</h1>
            <div>
                <label>Start Date: </label>
                <input type="date" onChange={(e) => setStartDate(moment(e.target.value).toDate())} />
            </div>
            <div>
                <label>End Date: </label>
                <input type="date" onChange={(e) => setEndDate(moment(e.target.value).toDate())} />
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

export default Sundays;
