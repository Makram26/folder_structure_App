// get current Date

const getCurrentDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    return formattedDate;
};
export const currentDate = getCurrentDate();
const getCurrentDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();

    const dayOfWeek = date.getDay();

    return daysOfWeek[dayOfWeek];
};

// Example usage
export const currentDay = getCurrentDay();

const current = () => {
    const date = new Date();

    const day = date.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];

    const formattedDate = `${day}, ${month}`;

    return {
        formattedDate,
        day
    };
};

const getCurrentDateAndNextWeekDates = () => {
    const currentDate = new Date();
    const nextWeekDates = [];

    // Calculate the start and end date of the next week
    const nextWeekStartDate = new Date(currentDate);
    nextWeekStartDate.setDate(currentDate.getDate() + (7 - currentDate.getDay())); // Next Sunday
    const nextWeekEndDate = new Date(nextWeekStartDate);
    nextWeekEndDate.setDate(nextWeekStartDate.getDate() + 6); // Next Saturday

    // Format current date
    const currentDateFormat = currentDate.getDate();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    // Populate the dates for the next week
    let currentDatePointer = new Date(nextWeekStartDate);
    while (currentDatePointer <= nextWeekEndDate) {
        const formattedDate = currentDatePointer.getDate();
        const formattedDay = currentDatePointer.toLocaleDateString('en-US', { weekday: 'long' });
        nextWeekDates.push(`${formattedDate}, ${formattedDay}`);
        currentDatePointer.setDate(currentDatePointer.getDate() + 1);
    }

    return {
        currentDate: `${currentDateFormat}, ${currentDay}`,
        nextWeekDates
    };
};




export const getCurrentDateAndNextWeek = getCurrentDateAndNextWeekDates();


export const currentDayDate = current();

