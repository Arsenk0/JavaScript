function runTasks() {
    console.clear();

    function computeAreaOfARectangle(length, width) {
        return length * width;
    }

    function computeAreaOfACircle(radius) {
        return Math.PI * radius * radius;
    }

    function computePower(num, exp) {
        return Math.pow(num, exp);
    }

    function computeSquareRoot(num) {
        return Math.sqrt(num);
    }

    function getLengthOfThreeWords(word1, word2, word3) {
        return word1.length + word2.length + word3.length;
    }

    function joinArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }

    function getProductOfAllElementsAtProperty(obj, key) {
        if (!Array.isArray(obj[key]) || obj[key].length === 0) return 0;
        return obj[key].reduce((product, val) => product * val, 1);
    }

    function sumDigits(num) {
        let str = Math.abs(num).toString();
        let sum = str.split('').reduce((acc, val) => acc + Number(val), 0);
        return num < 0 ? -Number(str[0]) + sum - Number(str[0]) : sum;
    }

    function findShortestWordAmongMixedElements(arr) {
        const words = arr.filter(el => typeof el === "string");
        if (words.length === 0) return "";
        return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
    }

    function findSmallestNumberAmongMixedElements(arr) {
        const nums = arr.filter(el => typeof el === "number");
        if (nums.length === 0) return "";
        return Math.min(...nums);
    }

    function modulo(a, b) {
        if (isNaN(a) || isNaN(b)) return NaN;
        if (b === 0) return NaN;
        if (a === 0) return 0;
        return a - Math.floor(a / b) * b;
    }

    function reverseChunks(str, n) {
        if (n <= 1) return str;
        let result = '';
        for (let i = 0; i < str.length; i += n) {
            result += str.substr(i, n).split('').reverse().join('');
        }
        return result;
    }

    function findUniqueParity(numbers) {
        const even = numbers.filter(n => n % 2 === 0);
        const odd = numbers.filter(n => n % 2 !== 0);
        return even.length === 1 ? even[0] : odd[0];
    }

    function findPairForSum(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
            }
        }
        return [];
    }

    function areMirrorStrings(str1, str2) {
        return str1 === str2.split('').reverse().join('');
    }

    function binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    function isIsogram(str) {
        const letters = str.toLowerCase().split('');
        return new Set(letters).size === letters.length;
    }

    function containsPalindromeWords(sentence) {
        return sentence.split(' ').some(word => word === word.split('').reverse().join(''));
    }

    // === Вивід результатів у консоль ===

    console.log("1.1:", computeAreaOfARectangle(5, 3));
    console.log("1.2:", computeAreaOfACircle(4));
    console.log("1.3:", computePower(2, 5));
    console.log("1.4:", computeSquareRoot(49));
    console.log("1.5:", getLengthOfThreeWords("hello", "world", "js"));
    console.log("1.6:", joinArrays([1, 2], [3, 4]));
    console.log("1.7:", getProductOfAllElementsAtProperty({ a: [2, 3, 4] }, "a"));
    console.log("1.8:", sumDigits(-316)); // -3 + 1 + 6 = 4
    console.log("1.9:", findShortestWordAmongMixedElements([4, "two", 2, "three"]));
    console.log("1.10:", findSmallestNumberAmongMixedElements([4, "one", 2, "three"]));
    console.log("1.11:", modulo(7, 3));
    console.log("1.12:", reverseChunks("abcdefg", 3));
    console.log("1.13:", findUniqueParity([2, 4, 6, 7]));
    console.log("1.14:", findPairForSum([10, 20, 30, 40], 50));
    console.log("1.15:", areMirrorStrings("abc", "cba"));
    console.log("1.16:", binarySearch([1, 3, 5, 7, 9], 7));
    console.log("Isogram 'machine':", isIsogram("machine"));
    console.log("Contains palindrome in 'madam drives civic':", containsPalindromeWords("madam drives civic"));
}
