# 泛型递归

```javascript
function recursion (level, param) {
	// terminator
	if (level > MAX_LEVEL) {
		// process result
		return result;
	}
	// process current logic
	process(level, param);
	// drill down
	recursion(level + 1, newParam);
	// revert the current level states
}
```


# 分治

```javascript
function divide_conquer(problem, param1, param2, ...) {
	// recursion terminator
	if (problem is None) {
		return result;
	}
	// prepare data
	const data = prepare_data(problem);
	subProblems = split_problem(problem, data);
	// conquer subProblems
	subResult1 = divide_conquer(subProblems[0], p1, ...);
	subResult2 = divide_conquer(subProblems[1], p1, ...);
	subResult3 = divide_conquer(subProblems[2], p1, ...);
	...
	// process and generate the final result
	result = process_result(subResult1, subResult2, subResult3, ...);

	// revert the current level states
}
```

