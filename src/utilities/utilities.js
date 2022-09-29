const getStoredTime = (name) => {
    let storedTime = {};
    const storedTimeObj = localStorage.getItem(name);
    if (storedTimeObj) {
        storedTime = JSON.parse(storedTimeObj);
    }
    return storedTime;
};

const addToLocalDb = (name, id, timeTaken) => {
    let storedTime = getStoredTime(name);

    const time = storedTime[id];
    if (time) {
        const newTime = time + timeTaken;
        storedTime[id] = newTime;
    } else {
        storedTime[id] = timeTaken;
    }

    localStorage.setItem(name, JSON.stringify(storedTime));
};
const addIntervalToLocalDb = (name, id, timeTaken) => {
    const storeTime = {};
    storeTime[id] = timeTaken;
    localStorage.setItem(name, JSON.stringify(storeTime));
};

export { addToLocalDb, getStoredTime, addIntervalToLocalDb };
