///<reference path="../../../import"/>

import * as Arrays from "../../../../../source/System/Collections/Array/Compare";
import * as ArrayUtility from "../../../../../source/System/Collections/Array/Utility";
import Stopwatch from "../../../../../source/System/Diagnostics/Stopwatch";
var assert = require('../../../../../node_modules/assert/assert');


// Min/Max tests...
const minA = -10, maxA = 2000;

function initTestArray()
{
	return [5, minA, -1, maxA, -2, NaN, 20]
}

describe(".initialize(length)", ()=>
{
	function testLength(len:number):void
	{
		it("should be length " + len, ()=>
		{
			len = 100;
			var a = ArrayUtility.initialize(len);
			assert.equal(a.length, len, ".length should be " + len);
		});
	}

	testLength(100);
	testLength(100000);
});


describe(".copy(source) & .equals(old,new)", ()=>
{
	it("should equal", ()=>
	{
		var s1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3];
		var s2 = ArrayUtility.copy(s1);
		assert.ok(Arrays.areEqual(s1, s2));
	});

});

describe(".contains(source,value)", ()=>
{
	var a = initTestArray();
	it("should return true for a value contained", ()=>
	{
		assert.ok(ArrayUtility.contains(a, -1));
	});
	it("should return false for a value that is not present", ()=>
	{
		assert.ok(!ArrayUtility.contains(a, -9876));
	});
});

describe(".findIndex(source,of)", ()=>
{
	var a = initTestArray();
	it("should find and return the correct index", ()=>
	{
		assert.equal(ArrayUtility.findIndex(a, (v:number)=>v== -1), 2);
	});
	it("should return -1 when the value is not present", ()=>
	{
		assert.equal(ArrayUtility.findIndex(a, (v:number)=> v== -9876), -1);
	});
});

describe(".register(target,value)", ()=>
{
	it("should add a value that isn't present", ()=>
	{
		var a = initTestArray();
		var len = a.length;
		assert.ok(ArrayUtility.register(a, -9876));
		assert.equal(a.length, len + 1);
	});

	it("should not add a value that is present", ()=>
	{
		var a = initTestArray();
		var len = a.length;
		assert.ok(!ArrayUtility.register(a, -1));
		assert.equal(a.length, len);
	});
});


describe(".remove(target,value)", ()=>
{
	it("should remove the item/value request and return the number of instances removed", ()=>
	{
		var s = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3];
		var len = s.length;

		assert.equal(ArrayUtility.remove(s, 9), 1, "Only 9 removed once");
		assert.equal(s.length, len - 1, ".length should be less by one");
		assert.equal(s[1], 8, "Index [1] is now 8");
		len = s.length;

		assert.equal(ArrayUtility.remove(s, 2), 2, "2 removed twice");
		assert.equal(s.length, len - 2, ".length should be less by two");
		assert.equal(s[7], 1, "Index [7] is now 1");
		assert.equal(s[10], 3, "Index [10] is now 3");
		len = s.length;

		assert.equal(ArrayUtility.remove(s, 15), 0, "15 does not exist");
		assert.equal(s.length, len, ".length should be the same");
		len = s.length;

		assert.ok(ArrayUtility.removeIndex(s, 5), "Index [5] removed");
		assert.equal(s.length, len - 1, ".length should be less by one");
		len = s.length;

		assert.ok(!ArrayUtility.removeIndex(s, 15), "Index [15] doesn't exist");
		assert.equal(s.length, len, ".length should be the same");
	});

});

/*	Utility.applyTo skipped.
 It has too many permutations while being a straight forward function. */


describe(".repeat(value,count)", ()=>
{
	it("should correctly repeat the value requested", ()=>
	{
		var value = 10, count = 3;
		var r = ArrayUtility.repeat(value, count);
		assert.ok(r.length==count, ".length should be 3");
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], value);
		}
	});
});

function measureRepeated(closure:()=>void):number {
	const repeat = 50;
	var ms = 0;

	for(let i=0;i<repeat; i++) {
		ms += Stopwatch.measure(closure).total.milliseconds;
	}

	return ms;
}

function outputMeasured(suffix:string,closure:()=>void):void {
	it(measureRepeated(closure)+" milliseconds: "+suffix, ()=>{
		assert.ok(true);
	});
}

/*
 * The below code proves (for Node.js and Mocha) that best practice with arrays is:
 * 1) Initialize them.  Set their capacity when constructed or set the length before iterating.
 * 2) Standard for loops are typically compiler optimized well and i++ may be compiler optimized as well (better than ++i).
 */
//
// describe("Array Performance", ()=>
// {
// 	const max = 1000000;
// 	outputMeasured("Array.push(i)", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i = 0; i<max; i++)
// 		{
// 			a.push(i);
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// /*
// 	// Proven to be terrible!
// 	outputMeasured("Array.forEach (preset capacity ++i)", ()=>
// 	{
// 		let a:number[] = [];
// 		a.length = max;
// 		a.forEach((v,i)=>{
// 			a[i] = v;
// 		});
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});*/
//
// 	outputMeasured("Array[i] = i (preset capacity i++)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (preset length)", ()=>
// 	{
// 		let a:number[] = [];
// 		a.length = max;
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (for reverse no-init)", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i=max-1;i>=0; i--) {
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (for reverse)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		for(let i=max-1;i>=0; i--) {
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[m] = m (while reverse)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		let m = max;
// 		while(m--) {
// 			a[m] = m;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("LinkedList.add(i)", ()=>
// 	{
// 		let a = new LinkedList<number>();
// 		for(let i = 0; i<max; i++)
// 		{
// 			a.add(i);
// 		}
// 	});
//
//
//
// 	outputMeasured("LinkedListNode.next = next", ()=>
// 	{
// 		let root:LinkedNextNode = { value: -1, next:null };
// 		let next = root;
// 		for(let i = 0; i<max; i++)
// 		{
// 			next = next.next = { value: i, next:null };
// 		}
// 		return root;
// 	});
//
//
// });
//
// interface LinkedNextNode {
// 	value:number;
// 	next:LinkedNextNode;
// }