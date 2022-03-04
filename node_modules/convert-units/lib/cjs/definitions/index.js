"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeFlowRate = exports.volume = exports.voltage = exports.time = exports.temperature = exports.speed = exports.reactivePower = exports.reactiveEnergy = exports.pressure = exports.power = exports.pieces = exports.partsPer = exports.pace = exports.mass = exports.length = exports.illuminance = exports.frequency = exports.force = exports.energy = exports.each = exports.digital = exports.current = exports.charge = exports.area = exports.apparentPower = exports.angle = exports.acceleration = void 0;
var acceleration_1 = __importDefault(require("./acceleration"));
exports.acceleration = acceleration_1.default;
var angle_1 = __importDefault(require("./angle"));
exports.angle = angle_1.default;
var apparentPower_1 = __importDefault(require("./apparentPower"));
exports.apparentPower = apparentPower_1.default;
var area_1 = __importDefault(require("./area"));
exports.area = area_1.default;
var charge_1 = __importDefault(require("./charge"));
exports.charge = charge_1.default;
var current_1 = __importDefault(require("./current"));
exports.current = current_1.default;
var digital_1 = __importDefault(require("./digital"));
exports.digital = digital_1.default;
var each_1 = __importDefault(require("./each"));
exports.each = each_1.default;
var energy_1 = __importDefault(require("./energy"));
exports.energy = energy_1.default;
var force_1 = __importDefault(require("./force"));
exports.force = force_1.default;
var frequency_1 = __importDefault(require("./frequency"));
exports.frequency = frequency_1.default;
var illuminance_1 = __importDefault(require("./illuminance"));
exports.illuminance = illuminance_1.default;
var length_1 = __importDefault(require("./length"));
exports.length = length_1.default;
var mass_1 = __importDefault(require("./mass"));
exports.mass = mass_1.default;
var pace_1 = __importDefault(require("./pace"));
exports.pace = pace_1.default;
var partsPer_1 = __importDefault(require("./partsPer"));
exports.partsPer = partsPer_1.default;
var pieces_1 = __importDefault(require("./pieces"));
exports.pieces = pieces_1.default;
var power_1 = __importDefault(require("./power"));
exports.power = power_1.default;
var pressure_1 = __importDefault(require("./pressure"));
exports.pressure = pressure_1.default;
var reactiveEnergy_1 = __importDefault(require("./reactiveEnergy"));
exports.reactiveEnergy = reactiveEnergy_1.default;
var reactivePower_1 = __importDefault(require("./reactivePower"));
exports.reactivePower = reactivePower_1.default;
var speed_1 = __importDefault(require("./speed"));
exports.speed = speed_1.default;
var temperature_1 = __importDefault(require("./temperature"));
exports.temperature = temperature_1.default;
var time_1 = __importDefault(require("./time"));
exports.time = time_1.default;
var voltage_1 = __importDefault(require("./voltage"));
exports.voltage = voltage_1.default;
var volume_1 = __importDefault(require("./volume"));
exports.volume = volume_1.default;
var volumeFlowRate_1 = __importDefault(require("./volumeFlowRate"));
exports.volumeFlowRate = volumeFlowRate_1.default;
var allMeasures = {
    acceleration: acceleration_1.default,
    angle: angle_1.default,
    apparentPower: apparentPower_1.default,
    area: area_1.default,
    charge: charge_1.default,
    current: current_1.default,
    digital: digital_1.default,
    each: each_1.default,
    energy: energy_1.default,
    force: force_1.default,
    frequency: frequency_1.default,
    illuminance: illuminance_1.default,
    length: length_1.default,
    mass: mass_1.default,
    pace: pace_1.default,
    partsPer: partsPer_1.default,
    pieces: pieces_1.default,
    power: power_1.default,
    pressure: pressure_1.default,
    reactiveEnergy: reactiveEnergy_1.default,
    reactivePower: reactivePower_1.default,
    speed: speed_1.default,
    temperature: temperature_1.default,
    time: time_1.default,
    voltage: voltage_1.default,
    volume: volume_1.default,
    volumeFlowRate: volumeFlowRate_1.default,
};
exports.default = allMeasures;
