const { add, subtract, multiply, divide, commonBehaivior } = require('./math.js')

describe('足し算メソッド', () => {
  test('1 1 1 1 を渡した場合、4 が返る', () => {
    expect(add(1, 1, 1, 1)).toBe(4)
  })

  test('計算結果が 1000 を超える場合は合計ではなく「too big」と文字列が返る', () => {
    expect(add(1000, 1)).toBe('too big')
  })
})

describe('引き算メソッド', () => {
  test('10 3 2 1 を渡した場合、4 が返る', () => {
    expect(subtract(10, 3, 2, 1)).toBe(4)
  })

  test('計算結果がマイナスの場合は「negative number」と文字列が返る', () => {
    expect(subtract(1, 1000)).toBe('negative number')
  })
})

describe('掛け算メソッド', () => {
  test('2 3 4 5 を渡した場合、120 が返る', () => {
    expect(multiply(2, 3, 4, 5)).toBe(120)
  })

  test('計算結果が 1000 を越える場合は「big big number」と文字列が返る', () => {
    expect(multiply(2, 1000)).toBe('big big number')
  })
})

describe('割り算メソッド', () => {
  test('100 1 2 5 を渡した場合、10 が返る', () => {
    expect(divide(100, 1, 2, 5)).toBe(10)
  })

  test('計算結果は小数点３桁まで表示する', () => {
    expect(divide(10, 3)).toBe(3.333)
  })
})

describe('四則演算共通メソッド', () => {
  test('1 個〜30 個までの引数を受け取る', () => {
    expect(commonBehaivior(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)).toBeUndefined()
  })

  test('31 個以上の引数を指定するとエラーが発生する', () => {
    expect(() => commonBehaivior(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 31)).toThrowError(
      new Error('Too Many Arguments!')
    )
  })

  test('引数が数字以外だとエラーが発生する', () => {
    expect(() => commonBehaivior('TEST', 1)).toThrowError(new Error('引数に数字以外のものが含まれています'))
    expect(() => commonBehaivior(1, true)).toThrowError(new Error('引数に数字以外のものが含まれています'))
  })
})
