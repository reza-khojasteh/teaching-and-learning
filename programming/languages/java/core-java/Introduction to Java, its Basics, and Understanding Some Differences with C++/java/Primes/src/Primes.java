
public class Primes {
	private static void findPrimes(int nValues, boolean printPrimes) {
		boolean isPrime = true;

		for (int i = 2; i <= nValues; i++) {
			isPrime = true;

			for (int j = 2; j < i; j++) {
				if (i % j == 0) {
					isPrime = false;
					break;
				}
			}

			if (printPrimes && isPrime) {
				System.out.println(i);
			}
		}
	}

	private static void findPrimesFaster(int nValues, boolean printPrimes) {
		// boolean isPrime = true;

		loop: for (int i = 2; i <= nValues; i++) {
			// isPrime = true;

			for (int j = 2; j <= (int)(Math.sqrt(i)); j++) {
				if (i % j == 0) {
					// isPrime = false;
					continue loop;
				}
			}

			if (printPrimes /*&& isPrime*/) {
				System.out.println(i);
			}
		}
	}

	public static void main(String[] args) {

		// Find and print all primes between 0 and 50.

		System.out.println("Running method findPrimes:");
		findPrimes(50, true);

		System.out.println("\nRunning method findPrimesFaster:");
		findPrimesFaster(50, true);

		// Time how long it takes to find primes.

		long startTime = 0;
		long endTime = 0;

		System.out.print("\n\nTiming method findPrimes:");
		startTime = System.currentTimeMillis();
		findPrimes(20000, false);
		endTime = System.currentTimeMillis();
		System.out.println("  " + (endTime - startTime) + " milliseconds");

		System.out.print("\nTiming method findPrimesFaster:");
		startTime = System.currentTimeMillis();
		findPrimesFaster(20000, false);
		endTime = System.currentTimeMillis();
		System.out.println("  " + (endTime - startTime) + " milliseconds");

		System.out.print("\n\nTiming method findPrimes:");
		startTime = System.currentTimeMillis();
		findPrimes(50000, false);
		endTime = System.currentTimeMillis();
		System.out.println("  " + (endTime - startTime) + " milliseconds");

		System.out.print("\nTiming method findPrimesFaster:");
		startTime = System.currentTimeMillis();
		findPrimesFaster(50000, false);
		endTime = System.currentTimeMillis();
		System.out.println("  " + (endTime - startTime) + " milliseconds");
	}
}
