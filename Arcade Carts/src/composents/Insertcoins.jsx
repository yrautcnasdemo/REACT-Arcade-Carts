import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0)


    return (
    <>
        <h1>Time Warp Zone</h1>
        <div className='insertPanelcoin'>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    Insert Coin {count}
                </button>
            </div>


            <div className='pull'>
            <button onClick={() => setCount((count) => count - 1)} className='button2'>
                Card x1
            </button>

            <button onClick={() => setCount((count) => count - 3)} className='button2'>
                Booster x3
            </button>
            </div>
        </div>
    </>
    );
};





