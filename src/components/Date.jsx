export default function TodayDate({ date, time }) {
    return (
        <div>
            <p>
                <span className="font-bold">Date:</span> {date}
            </p>
            <p>
                <span className="font-bold">Time:</span> {time}
            </p>
        </div>
    );
}
