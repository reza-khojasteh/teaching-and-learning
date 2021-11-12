import java.util.Map;
import java.util.HashMap;

public class Fibonacci {
	// Lookup table/memoization
	private static final Map<String, Long> lookup = new HashMap<>();

	// Recursive solution: not a DP solution!
	public static long fib1(int n) {
		lookup.put("fib1", lookup.get("fib1") + 1);// To track how many times we called this function (each call is a node in the call tree)

		if (n == 0 || n == 1) {
			return n;
		} else {
			return fib1(n - 1) + fib1(n - 2);
		}
	}
	// In above solution, T(n) = O(φ ^ n) where φ ≈ 1.618
	// Also, S(n) = n = O(n) which is the maximum size of the call stack.

	// Top-down DP approach: recursive solution, this time utilizing the lookup table/memoization
	public static long fib2(int n) {
		lookup.put("fib2", lookup.get("fib2") + 1);// To track how many times we called this function (each call is a node in the call tree)

		if (lookup.get(n + "") != null) {
			return lookup.get(n + "");
		}
		else if (n == 0 || n == 1) {
			return n;
		} else {
			lookup.put(n + "", (fib2(n - 1) + fib2(n - 2)));
			return lookup.get(n + "");
		}
	}
	// In above solution, the number of subproblems is n + 1 and cost of solving each of the subproblems is O(1). Therefore, T(n) = (n + 1) * O(1) = O(n)
	// Just note that it uses more space-- of O(n)[= number of entries added] * O(1)[= size of each key / value pair for Fibonacci] on lookup-- to do that but seems worth it!
	// Also, S(n) = O(n) + (n + 1) * O(1) = O(n)
	// Note that the size of call stack storing all these active recursive calls in O(n) in both cases. So, overall, adding memoization doesn't impact the space complexity in here -- O(n) + O(n) = O(n) -- [in some examples it does because either the number of the keys is not simply a "1 changing parameter," or the size of each value in each pair isn't just an integer and hence, not O(1)!].

	// Bottom-up DP approach: an iterative solution, this time utilizing tabulation
	public static long fib3(int n) {
		long[] dp = new long[n + 1];
		dp[0] = 0;
		dp[1] = 1;

		for (int i = 2; i < dp.length; i++) {
			dp[i] = dp[i - 1] + dp[i - 2];
		}
		return dp[n];
	};
	// In above solution, T(n) = (n - 1) * O(1) = O(n)
	// Also, S(n) = (n + 1) * O(1) = O(n)

	// Bottom-up DP approach: this time saving even more space!
	public static long fib4(int n) {
		long current = 0;
		long previous = 0;
		long beforePrevious = 0;

		beforePrevious = 0;
		previous = 1;

		for (int i = 2; i <= n; i++) {
			current = previous + beforePrevious;
			beforePrevious = previous;
			previous = current;
		}
		return previous;
	};
	// In above solution, T(n) = (n - 1) * O(1) = O(n) and hence, no change.
	// But S(n) = 3 = O(1)

	public static void main(String[] args) {
		lookup.put("fib1", 0L);// Represents the number of times fib1 has been called
		lookup.put("fib2", 0L);// Represents the number of times fib2 has been called

		// Testing....
		long start = System.currentTimeMillis();
		System.out.printf("fib value: %d, no. of nodes in the call tree: %d\n", fib1(45), lookup.get("fib1"));// 1134903170 3672623805(no. of nodes in the call tree)
		long end = System.currentTimeMillis();
		long elapsedTime = end - start;
		System.out.printf("Execution Time: %d\n", elapsedTime);// Around 50 seconds on my device 

		start = System.currentTimeMillis();
		System.out.printf("fib value: %d, no. of nodes in the call tree: %d\n", fib2(45), lookup.get("fib2"));// 1134903170 89(no. of nodes in the call tree)
		end = System.currentTimeMillis();
		elapsedTime = end - start;
		System.out.printf("Execution Time: %d\n", elapsedTime);// 1 millisecond on my device!

		start = System.currentTimeMillis();
		System.out.printf("fib value: %d\n", fib3(45));// 1134903170
		end = System.currentTimeMillis();
		elapsedTime = end - start;
		System.out.printf("Execution Time: %d\n", elapsedTime);// Less than 1 millisecond on my device! 

		start = System.currentTimeMillis();
		System.out.printf("fib value: %d\n", fib4(45));// 1134903170
		end = System.currentTimeMillis();
		elapsedTime = end - start;
		System.out.printf("Execution Time: %d\n", elapsedTime);// Less than 1 millisecond on my device (with saving more space of course!)
	}
}