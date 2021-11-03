public class Factorial {

	public static int iterativeFactorial(int n) {
		int fact = 1;

		for (int i = 1; i <= n; i++)
			fact *= i;

		return fact;
	}

	public static int recursiveFactorial(int n) {

		if (n == 0)
			return 1;
		else
			return n * recursiveFactorial(n - 1);
	}

	public static void main(String[] args) {
		System.out.println("interative " + iterativeFactorial(10));
		System.out.println("recursive " + recursiveFactorial(10));
	}

}
