import merge from "../src/merge";


test('merges two sorted arrays', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2)).toEqual(expected);
});

test('merges two sorted arrays with duplicates', () => {
    const collection_1 = [1, 2, 8];
    const collection_2 = [1, 2, 8];
    const expected = [1, 1, 2, 2, 8, 8];
    expect(merge(collection_1, collection_2)).toEqual(expected);
});

test('merges when one array is empty', () => {
    const collection_1: number[] = [];
    const collection_2 = [1, 2, 3];
    const expected = [1, 2, 3];
    expect(merge(collection_1, collection_2)).toEqual(expected);
});

test('merges when both arrays are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const expected: number[] = [];
    expect(merge(collection_1, collection_2)).toEqual(expected);
});

test('throws error when first array is not sorted', () => {
    const collection_1 = [9, 7, 5];
    const collection_2 = [2, 4, 6];
    expect(() => merge(collection_1, collection_2)).toThrow("Collections must be sorted");
});

test('throws an error if the second collection is not sorted', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [9, 7, 5];
    expect(() => merge(collection_1, collection_2)).toThrow("Collections must be sorted");
});

test('throws an error if both collections are not sorted', () => {
    const collection_1 = [3, 1, 2];
    const collection_2 = [9, 7, 5];
    expect(() => merge(collection_1, collection_2)).toThrow("Collections must be sorted");
});