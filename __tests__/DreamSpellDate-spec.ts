import DreamSpellDate from '../src/DreamSpellDate';
import { Chromatic, Dots } from '../src/enums';
import Kin from '../src/Kin';
import Sign from '../src/Sign';
import Tone from '../src/Tone';

test('DreamSpellDate_Kin_260', () => {
  const cosmicSun = new DreamSpellDate(new Date(2010, 12-1, 24));
  expect(cosmicSun.Kin).toEqual(new Kin(260));
  expect(cosmicSun.Kin.Sign).toEqual(Sign.YellowSun);
  expect(cosmicSun.Kin.Tone).toEqual(Tone.Cosmic);
});

test('DreamSpellDate_Kin_1', () => {
  const magneticDragon = new DreamSpellDate(new Date(2010, 12-1, 25));
  expect(magneticDragon.Kin).toEqual(new Kin(1));
  expect(magneticDragon.Kin.Sign).toEqual(Sign.RedDragon);
  expect(magneticDragon.Kin.Tone).toEqual(Tone.Magnetic);
});

test('DreamSpellDate_Kin_EndOfCycle', () => {
  const resonantHand = new DreamSpellDate(new Date(2012, 12-1, 21));
  expect(resonantHand.Kin).toEqual(new Kin(207));
  expect(resonantHand.Kin.Sign).toEqual(Sign.BlueHand);
  expect(resonantHand.Kin.Tone).toEqual(Tone.Crystal);
});

test('DreamSpellDate_Kin_My', () => {
  const electricDragon = new DreamSpellDate(new Date(1985, 7 - 1, 23));
  expect(electricDragon.Kin).toEqual(new Kin(81));
  expect(electricDragon.Kin.Sign).toEqual(Sign.RedDragon);
  expect(electricDragon.Kin.Tone).toEqual(Tone.Electric);
  expect(electricDragon.Moon).toEqual(Tone.Cosmic.Number);
  expect(electricDragon.Day).toEqual(27);
  expect(electricDragon.DayOfWeek).toEqual(6);
  expect(electricDragon.Week).toEqual(Chromatic.Yellow);
});

test('DreamSpellDate_1328', () => {
  const date = new DreamSpellDate(new Date(2014, 6 - 1, 11));
  expect(date.Kin).toEqual(new Kin(224));
  expect(date.Moon).toEqual(Tone.Crystal.Number);
  expect(date.Day).toEqual(13);
  expect(date.DayOfWeek).toEqual(6);
  expect(date.Week).toEqual(Chromatic.White);
});
