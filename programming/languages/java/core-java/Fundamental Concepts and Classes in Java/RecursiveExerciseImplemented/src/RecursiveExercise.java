/**
 * This class provides methods to solve the given exercises:
 * 1. Write a recursive method that prints numbers from 1 to n in reverse order
 *      example: n, n-1, n-2, ..., 1, 0
 * 2. Write a recursive method that calculates n to the power of p
 *      example: 5 to the power of 3 is 125
 * 3. Write a recursive method that converts a decimal number into binary number
 *      example: 7 in decimal is 111 in binary format
 * 
 */

public class RecursiveExercise {

	/** Returns a string with numbers in reverse order; 
	 *  for instance: given 3 the method returns the string 3, 2, 1, 0 
	 */
	public static String printReverse(int n) {
		StringBuffer result = new StringBuffer();

		if (n <= 0) {
			result.append("0" );
			return result.toString();
		}
		else {
			result.append(n + ", ");
			result.append(printReverse(n-1));
		}
		return result.toString();
	}

	/**	
	 *	Calculate n at the p power, 
	 *	using recursive function to perform exponentiation,
	 *	assuming p >= 0, where n and p are integer 
	 */
	public static int exponentialValue(int n, int p) {
		if (p == 0)
			return 1;
		if (p == 1)
			return n;
		return n * exponentialValue(n, p - 1);
	}


	/** Returns a string with the binary representation of decimal number; 
	 *  for instance: given number 7 the method returns the string 111 
	 */
	public static String binaryValue(int n) {

		StringBuffer s = new StringBuffer();

		if (n > 0) {
			s.append(binaryValue(n / 2));
			s.append(n % 2);		
		}
		return s.toString();	
	}

	public static void main(String[] args) {

		/** exercise 1 */    
		System.out.println(printReverse(5));

		/** exercise 2 */ 
		System.out.println(exponentialValue(5, 4));

		/** exercise 3 */ 
		System.out.println(binaryValue(127));
	}
}
