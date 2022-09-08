import { CHARACTERS } from './constants';

export const generatePassword = (
  passwordLength: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
) => {
  let result: string = '';
  const charactersList = `${uppercase ? CHARACTERS.UPPERCASE : ''}${
    lowercase ? CHARACTERS.LOWERCASE : ''
  }${numbers ? CHARACTERS.NUMBERS : ''}${symbols ? CHARACTERS.SYMBOLS : ''}`;
  for (let i = 0; i < passwordLength; i++) {
    result += charactersList.charAt(
      Math.floor(Math.random() * charactersList.length)
    );
  }

  const strength: number = calcPassStrength(
    passwordLength,
    uppercase,
    lowercase,
    numbers,
    symbols
  );

  return { result, strength };
};

const calcPassStrength = (
  passwordLength: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
) => {
  let strength: number = 0;
  let score: number = passwordLength;

  if (lowercase) {
    score += 2;
  }
  if (uppercase) {
    score += 3;
  }
  if (numbers) {
    score += 4;
  }
  if (symbols) {
    score += 5;
  }

  if (score < 14) {
    strength = 1;
  }
  if (score < 18 && score >= 14) {
    strength = 2;
  }
  if (score < 22 && score >= 18) {
    strength = 3;
  }
  if (score >= 22) {
    strength = 4;
  }

  return strength;
};
