let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackcars: 40,
    rareCars: 2
};

for (let car in statistics)
{
    if (car.charAt(0) == 'r')
    {
        console.log(statistics[car]);
    }

    else if (statistics[car] % 2 == 1)
    {
        console.log(statistics[car]);
    }
}

function printNums()
{
    console.log(1);
    setTimeout(function(){ console.log(2); }, 1000);
    setTimeout(function(){ console.log(3); }, 0);
    console.log(4);
}

printNums();