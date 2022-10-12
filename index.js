// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation > 42){
        return (pickUpLocation - 42)
    } else {
        return (42 - pickUpLocation)
    }
}
function distanceFromHqInFeet(value){
    return (distanceFromHqInBlocks(value) * 264)
}
function distanceTravelledInFeet(start, finish){
    if (start > finish) {
        return ((start - finish) * 264)
    } else {
        return ((finish - start) * 264)
    }
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400)
        return 0
    else if (distanceTravelledInFeet(start, destination) <= 2000)
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    else if (distanceTravelledInFeet(start,destination) <= 2500)
        return 25
    else if (distanceTravelledInFeet(start, destination) > 2500)
        return 'cannot travel that far'
}