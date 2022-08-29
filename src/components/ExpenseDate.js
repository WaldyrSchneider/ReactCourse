function ExpenseDate(props) {
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.toLocaleString('default', { day: 'numeric' });
    const year = props.date.toLocaleString('default', { year: 'numeric' });

    return (
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>
    );
}

export default ExpenseDate;