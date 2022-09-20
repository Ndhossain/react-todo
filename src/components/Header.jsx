import { useEffect, useState } from 'react';
import TodayDate from './Date';
import Logo from './Logo';

export default function Header() {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
        })
    );
    const today = new Date().toLocaleDateString();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: 'numeric',
                    minute: 'numeric',
                })
            );
        }, 60000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <header className="flex justify-between items-center px-3 sm:px-7 py-5 backdrop-blur-sm bg-white/10 border-b">
            <Logo />
            <TodayDate date={today} time={time} />
        </header>
    );
}
