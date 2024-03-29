import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import type { SomeValue1 } from './somefile';
import { type SomeValue2 } from './somefile';
config();
const List = mongoose.model('List');
const jwtSecret = process.env.JWTSECRET;
const router = express.Router();
const User = mongoose.model('User');
const ListItem = mongoose.model('ListItem');
const newReg = /r\eg[A-B]Exp/;
const newNumber1: SomeValue1 = 10;
const newNumber2: SomeValue2 = 10;
void newNumber1, newNumber2;
// region
function returnAllLists(userId: any, res: any) {
  return User.findById(userId)
    .populate({
      path: 'lists',
      populate: {
        path: 'listItems',
        newReg,
      },
    })
    .exec((userErr, doc) => {
      if (!!userErr) {
        console.error('User.populate Error', userErr);
      }
      return res.status(200).json({
        success: true,
        successMessage: 'Here is the page',
        data: doc?.collection,
      });
    });
}
// endregion

debugger;
export type DummyGeneric<T> = Promise<T>;
export const brakets = () => [
  [
    [
      {
        BracketsColors: [
          {
            brakets<T>(value: T) {
              return value as T;
            },
          },
          [
            {
              brakets<T>(value: T) {
                return value as T;
              },
            },
            [
              {
                brakets<T>(value: T) {
                  return value as T;
                },
              },
              [
                {
                  brakets<T>(value: T) {
                    return value as T;
                  },
                },
                [
                  {
                    brakets<T>(value: T) {
                      return value as T;
                    },
                  },
                  [
                    {
                      brakets<T>(value: T) {
                        return value as T;
                      },
                    },
                  ],
                ],
              ],
            ],
          ],
        ],
      },
    ],
  ],
];
export function* pushPullGenerator() {
  let n = 1;
  try {
    while (true) {
      if (n > 10) {
        console.log('n > 10...');
        n += 5;
        return n;
      }
      console.log('inside :>> ', n);
      n = yield n * 2;
    }
  } catch (e) {
    console.log(e);
    return n;
  } finally {
    console.log('inside :>> ', 'finally');
    return n;
  }
}
export const tryAsyncIterator = async () => ({
  [Symbol.asyncIterator]() {},
});
export const tryAsyncGenerator = async () => ({});
export const tryIterator = async () => ({
  [Symbol.iterator]() {},
});
class ParentClass {}
export interface IInterface {
  value: string;
}

interface Arguments {
  value: string | number;
  angel?: number;
}

enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}

(() => {
  const objectLike = { propertyOne: 10, propertyTwo: 'string' };
  const { propertyOne } = objectLike;
  const myArray = [5, 10, 15, 20, 25];
  const [cinq, dix] = myArray;
  global.console.log('Hello World');
  return { propertyOne, cinq, dix };
})();
export const value = 'this';
export type defined = string | IInterface | 450 | null | true | false | undefined;

// @sealed

class Greeter {
  public greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  public greet() {
    return 'Hello, ' + this.greeting;
  }
  public static greet(greeting: string) {
    return 'Hello, ' + greeting;
  }
}
Greeter.greet('greeting');
export async function greeter(name: any) {
  return await delayedHello(name, Delays.Long);
}
export async function notMuch(ValueIn: string) {
  return { ValueIn };
}

function sealed(constructor: any): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
console.log('hello');
Promise.resolve();

export interface ICredentialsService<T> {
  _serviceBrand: T;
  getPassword(service: string, account: string): Promise<string | null>;
  setPassword(service: string, account: string, password: string): Promise<void>;
  deletePassword(service: string, account: string): Promise<boolean>;
  findPassword(service: string): Promise<string | null>;
}

/*

anObject
variable.other.constant.ts
meta.definition.variable.ts
meta.var-single-variable.expr.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.other.constant
{ "foreground": "#AADDEECC" }

Greeter
variable.other.readwrite.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.other.readwrite
{ "foreground": "#AADDEECC" }


greet
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


Greeter
variable.other.object.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member variable.other.object
{ "foreground": "#EEDDBBDD", "fontStyle": "" }

greet
variable.other.property.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.other.property
{ "foreground": "#55BBFFBB" }


fn
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


sealed
variable.other.readwrite.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.other.readwrite
{ "foreground": "#AADDEECC" }


objOut
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


objIn1
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


value
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


str
string.quoted.single.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts string.quoted.single
{ "foreground": "#DDEE33CC" }

objIn2
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


value
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object.member meta.object-literal.key
{ "foreground": "#55BBFFBB" }


str
string.quoted.single.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
source.ts
foreground	source.ts string.quoted.single
{ "foreground": "#DDEE33CC" }
*/

const anObject = {
  Greeter,
  greet: Greeter.greet,
  fn: sealed,
  objOut: {
    objIn1: { value: 'str' },
    objIn2: { value: 'str' },
  },
};

const {
  Greeter: GreeterClass,
  fn: sealed2,
  objOut: { objIn1: renamedObj, objIn2 },
} = anObject;

sealed2;
GreeterClass;
renamedObj;
objIn2;
/*
// ------------------------------------------------------------------------------
Greeter :
variable.object.property.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.object.property
{ "foreground": "#55BBFFBB" }


GreeterClass :
variable.other.constant.ts
meta.definition.variable.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object-binding-pattern-variable variable.other.constant
{ "foreground": "#55BBFFBB" }


objOut :
variable.object.property.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.object.property
{ "foreground": "#55BBFFBB" }


objIn1 :
variable.object.property.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts variable.object.property
{ "foreground": "#55BBFFBB" }


renamedObj :
variable.other.constant.ts
meta.definition.variable.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object-binding-pattern-variable variable.other.constant
{ "foreground": "#55BBFFBB" }


objIn2 :
variable.other.constant.ts
meta.definition.variable.ts
meta.object-binding-pattern-variable.ts
meta.var.expr.ts
source.ts
foreground	source.ts meta.object-binding-pattern-variable variable.other.constant
{ "foreground": "#55BBFFBB" }
 */
async function asyncFunction(): Promise<any> {
  const objectLike = { propertyOne: 10, propertyTwo: 'string' };
  const { propertyOne } = objectLike;

  let path: `/home/user/${number}/target`;
  let customPath: number = 10;
  const variable1 = 2 + 10;
  let message: string = 'this is a string indeed';
  message = 'this is a ${"string"}  indeed';

  path = `/home/user/${customPath}/target`;

  path;
  const variable3 = new Greeter(message);

  const variable2 = variable1.toFixed(200 - 400);
  return { variable2, variable3, propertyOne };
}
export type anyone = number | string;

asyncFunction.somemethode = (): 10 | anyone | (() => 10) | null => {
  return 10;
};

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  const angel = checker ? 48 : 47;
  const some = new ClassName({ value: 'value', angel });
  const values = {
    logoly: angel,
    angels: 'inthesky',
    numbers: 1024,
  };
  const { angels: glx } = values;
  void values, glx;
  const others = [some?.otherMethodeValue, 450, null, NaN, Infinity, this, true, false, undefined];
  return { some, variable1, others };
};
{
  {
    // function name(params:type) {
    // }
  }
}
/**
 * Some predefined delays (in milliseconds).
 */

/**
 * Returns a Promise<string> that resolves after given time.
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay
 *  resolution of the Promise.
 * @returns {Promise<string>}
 * @see https://www.exemple.com
 */
function delayedHello(name: string, delay: number = Delays.Medium): Promise<any> {
  return new Promise((resolve: (value?: string) => void) => setTimeout(() => resolve(`Hello, ${name}`), delay));
}
export class ClassName extends ParentClass implements IInterface {
  public set otherMethodeValue(some) {
    this._othervalue = some;
    const anyhow = this._otherMethode().souris;
    console.log(some, anyhow, Math.PI);
  }
  public get otherMethodeValue() {
    return this._otherMethode();
  }
  public static staticValue: any;
  public value: string;
  public angel: any;
  public some: any;
  public othervalue: any;
  private _othervalue: any;
  public constructor(parametre: Arguments) {
    super();
    if (isNaN(parametre.angel as any) && typeof parametre.value === 'number') {
      this.angel = Infinity;
    }
  }
  public async asyncMethode() {
    let checker: boolean;
    checker = true;
    checker = false;
    const angel = checker ? 48 : 47;
    const aNewClass = new ClassName({ value: 'value', angel: angel });
    console.log(aNewClass.value, checker, Math.PI);
    const myObjeWithClass = { ClassName: ClassName };
    myObjeWithClass.ClassName.staticValue;
    ClassName.staticValue;

    /*

## {ClassName:ClassName}
meta.object-literal.key.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts

## {...:ClassName}
variable.other.readwrite.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts

## {ClassName}
variable.other.readwrite.ts
meta.object.member.ts
meta.objectliteral.ts
meta.var.expr.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts


## myObjeWithClass
variable.other.object.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts

## ClassName
variable.other.object.property.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts

## staticValue
variable.other.property.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts

## ClassName (loner)
variable.other.object.ts
meta.block.ts
meta.method.declaration.ts
meta.class.ts
source.ts
    */

    const others = [450, null, true, false, undefined];
    return { aNewClass, others };
  }
  public otherMethode() {
    //
  }
  private _otherMethode() {
    try {
      const popo: string = 'ceci est un canon';
      let mice = 'jerry';
      mice = 'ichy';
      console.log('mice', mice);
      return {
        values: [null, NaN, Infinity, this._othervalue, true, false, 450 as number, undefined as undefined],
        popo,
        souris: mice,
      };
    } catch (error) {
      throw new global.GLOBAL.global.Error(error.message);
    }
  }
}
export { jwtSecret, List, ListItem, returnAllLists, router, User };
let receiveMessage: any = function () {};
function waitForNextMessage() {
  return new Promise(resolve => {
    receiveMessage = resolve;
  });
}
async function* createMessageStream() {
  while (true) {
    yield waitForNextMessage();
  }
}

async function startConsumingMessageStream() {
  let messageStream = createMessageStream();
  for await (let message of messageStream) {
    console.log(message);
  }
}

startConsumingMessageStream();

setTimeout(() => {
  receiveMessage('Hello');
}, 500);
setTimeout(() => {
  receiveMessage('world');
}, 1000);
setTimeout(() => {
  receiveMessage('!!!');
}, 3000);

export function formatStockChartData(stockChartDataInfos: any[]): any[] {
  return stockChartDataInfos.map(stockChartData => {
    return {
      symbol: stockChartData.symbol,
      iexSymbolID: stockChartData.iexSymbolID,
      qtSymbolID: stockChartData.qtSymbolID,
      date: stockChartData.date,
      minute: stockChartData.minute,
      label: stockChartData.label,
      candle: {
        high: stockChartData.high,
        low: stockChartData.low,
        open: stockChartData.open,
        close: stockChartData.close,
      },
      volume: stockChartData.volume,
      average: stockChartData.average,
      notional: stockChartData.notional,
      numberOfTrades: stockChartData.numberOfTrades,
      marketHigh: stockChartData.marketHigh,
      marketLow: stockChartData.marketLow,
      marketAverage: stockChartData.marketAverage,
      marketVolume: stockChartData.marketVolume,
      marketNotional: stockChartData.marketNotional,
      marketNumberOfTrades: stockChartData.marketNumberOfTrades,
      marketOpen: stockChartData.marketOpen,
      marketClose: stockChartData.marketClose,
      changeOverTime: stockChartData.changeOverTime,
      marketChangeOverTime: stockChartData.marketChangeOverTime,
    };
  });
}

const APPLE = 'pomme';
export const braketColors = [
  [
    {
      bolo: 'pomme',
      bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
    },
    [
      {
        bolo: APPLE,
        bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
      },
      [
        {
          bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
        },
        [
          {
            bileboquet: (1 * ((3 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
          },
          [
            {
              bileboquet: (1 * ((3 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
            },
            [
              {
                bolo: 'pomme',
                bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
              },
              [
                {
                  bolo: 'pomme',
                  bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                },
                [
                  {
                    bolo: 'pomme',
                    bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                  },
                  [
                    {
                      bolo: 'pomme',
                      bileboquet: (1 * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                    },
                    [
                      {
                        bolo: 'pomme',
                        bileboquet: ((1 + 2) * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                      },
                      [
                        {
                          bolo: 'pomme',
                          bileboquet: ((1 + 2) * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                        },
                        {
                          bolo: 'pomme',
                          bileboquet: ((1 + 2) * ((143 / (2 - 5 * (3 + (4 * (3 + 1) - 8)))) * 3)) / 5,
                        },
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
