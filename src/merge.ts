/**
 * Merge two sorted arrays into one sorted array
 * @param collection_1
 * @param collection_2
 */
export default function merge(collection_1: number[], collection_2: number[]): number[] {
    if(!isSorted(collection_1) || !isSorted(collection_2)) {
        throw new Error("Collections must be sorted!");
    } else {
        let i = 0, j = 0;
        const result: number[] = [];

        while (i < collection_1.length && j < collection_2.length) {
            if (collection_1[i] < collection_2[j]) {
                result.push(collection_1[i]);
                i++;
            } else {
                result.push(collection_2[j]);
                j++;
            }
        }

        // Collect remaining elements
        while (i < collection_1.length) {
            result.push(collection_1[i]);
            i++;
        }
        while (j < collection_2.length) {
            result.push(collection_2[j]);
            j++;
        }

        return result;
    }

}

/**
 * Helper function: Check if a collection is sorted
 * @param collection
 */
function isSorted(collection: number[]): boolean {
    for (let i = 1; i < collection.length; i++) {
        if (collection[i - 1] > collection[i]) {
            return false;
        }
    }
    return true;
}



