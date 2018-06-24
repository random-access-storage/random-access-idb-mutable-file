/* @flow */

import * as RandomAccessStore from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof RandomAccessStore, "object")
})
