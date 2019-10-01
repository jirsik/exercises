class Bus {
    constructor (direction, stations, seats, passengers) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = 0;
    }
    current() {
        return this.stations[this.last_station];
    }
    next() {
        this.last_station++;
        if (this.last_station >= this.stations.length) {
            this.last_station = this.stations.length - 1;
            console.log('get out');
        }
    }
    board(pas) {
        this.passengers += pas;
        if (this.passengers > this.seats) {
            this.passengers = this.seats;
        }
    }
    uboard(pas) {
        this.passengers -= pas;
        if (this.passengers < 0) {
            this.passengers = 0;
        }
    }
}