export default function Build(startday,endday) {
    
    //Function to Build our dates from start day to end day

    const day = startday.clone().subtract(1, "day");
    const a = [];
    while (day.isBefore(endday, "day")) {
        a.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }
    return a;
}