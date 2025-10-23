'use strict';

// 1.1
// Lamborghini Urus 2020
// https://auto.ria.com/uk/auto_lamborghini_urus_38573832.html

console.log('завдання 1 (опис ламби)');

const car = {
  brand: 'Lamborghini',
  model: 'Urus',
  year: 2020,
  avgSpeed: 120,
  tankSize: 85,
  fuelUse: 15,
  price: 10943400,
  drivers: ['Даніїл'],

  showInfo() {
    console.log(`Машина: ${this.brand} ${this.model} (${this.year})
      Ціна: ${this.price.toLocaleString()} грн
      Середня швидкість: ${this.avgSpeed} км/год
      Бак: ${this.tankSize} л
      Витрата палива: ${this.fuelUse} л / 100 км
      Водії: ${this.drivers.join(', ')}`);
  },


  // 1.2
  addDriver(name) {
    if (!this.drivers.includes(name)) {
      this.drivers.push(name);
      console.log(`Машиною заволодів новий водій: ${name}`);
    } else {
      console.log(`${name} вже є у списку водіїв, пупупу.`);
    }
  },

  // 1.3
  hasDriver(name) {
    if (this.drivers.includes(name)) {
      console.log(`${name} може керувати Lamborghini Urus.`);
    } else {
      console.log(`${name} не внесений у список водіїв.`);
    }
  },

  // 1.4
  tripInfo(distance) {
    const time = distance / this.avgSpeed;
    const breaks = Math.floor(time / 4);
    const totalTime = time + breaks;
    const fuel = (distance / 100) * this.fuelUse;

    console.log(`Відстань: ${distance} км
      Час у дорозі (з відпочинком): ${totalTime.toFixed(1)} год
      Необхідна кількість палива: ${fuel.toFixed(1)} л`);
  }
};

car.showInfo();
car.addDriver('Іван');
car.hasDriver('Роман');
car.tripInfo(1000);

console.log('завдання 2 (опис часу, якого в нас нема)');

const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  // 2.1
  showTime() {
    console.log(`Поточний час: ${this.hours} год ${this.minutes} хв ${this.seconds} сек`);
  },

  // 2.2
  addSeconds(sec) {
    this.seconds += sec;
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes++;
    }

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }

    this.showTime();
  },

  // 2.3
  addMinutes(min) {
    this.addSeconds(min * 60);
  },

  // 2.4
  addHours(hr) {
    this.addSeconds(hr * 3600);
  }
};

time.showTime();
time.addSeconds(30);
time.addMinutes(75);
time.addHours(12);
