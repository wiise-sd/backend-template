import type {Config} from 'jest';

const config: Config = {  
  preset: 'ts-jest',
  testRegex: "((\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

export default config;
