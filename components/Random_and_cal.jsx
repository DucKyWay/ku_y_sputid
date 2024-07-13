// random number in range 1 - 1620 
'use client'

export const Random_and_cal = () => {

    const cal_random_distance = () => {
        return 40075 - (Math.floor(Math.random() * (1620 - 1) + 1));
    };

    return (
        <div>
            <h1>Calculated Random Distance: {cal_random_distance()}</h1>
        </div>
    );

}
