import { JSUtil } from "../JSUtils.mjs";
import {
    throwsAnError,
    did,
    does,
    have,
    has,
    is,
    matches,
    getCounter,
    expectToBeTrue,
    expectValuesToMatch,
    expectArraysToBeEqual,
    expectValuesToEqual,
    expectArrayToInclude,
    expectArraytoIncludeArrayContents,
    objectsAreEquivalent,
    expectStringToInclude,
    expectObjectsAreEqual,
    expectToBeNull,
    throwsError,
    expectConstructorToThrowError,
    nullCheck
} from '../module/chaitests/Chai.mjs'

function testObjectUtils(){
    const pair = {
        fruit: 'pear'
    }

    describe('Object Utility Methods', () => {
        const subject = JSUtil.ObjToString(pair)
        const target = '{\n    fruit: pear,\n}\n'
        expectValuesToEqual('Subject String', subject, 'Target String', target)
    })

    describe('Object Utility Methods', () => {
        const subject = JSUtil.LogObject(pair, 'Pairs')
        const target = 'Pairs {\n    fruit: pear,\n}\n'
        expectValuesToEqual('Subject String', subject, 'Target String', target)
    })
}

testObjectUtils()



