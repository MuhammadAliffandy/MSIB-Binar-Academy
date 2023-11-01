export const generateRandomTime = () =>  {
        const startTime = new Date(2023, 11, 1);
        startTime.setHours(8, 0, 0, 0);
    
        const endTime = new Date(2023, 11, 25);
        endTime.setHours(12, 0, 0, 0);
    
        const timeDifference = endTime - startTime;
        const randomTime = new Date(startTime.getTime() + Math.random() * timeDifference);
    
        return randomTime.toISOString();
}