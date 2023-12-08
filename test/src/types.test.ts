import cleanDeep from '../..';

interface TestType {
  porp1: string;
  prop2: number;
}

const testObject: TestType = {
  porp1: 'test',
  prop2: 1,
};

const cleanedObject1 = cleanDeep(testObject, {
  emptyArrays: false,
  emptyObjects: false,
  emptyStrings: false,
  nullValues: false,
});

const prop1_1: string | undefined = cleanedObject1.porp1;
const prop1_2: number | undefined = cleanedObject1.prop2;

const cleanedObject2 = cleanDeep(testObject, {
  emptyArrays: false,
  emptyObjects: false,
  emptyStrings: false,
  nullValues: false,
  keepType: true,
});

const prop2_1: string = cleanedObject2.porp1;
const prop2_2: number = cleanedObject2.prop2;
