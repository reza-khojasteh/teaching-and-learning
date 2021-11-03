public class Fibonacci {
	/** Print out the Fibonacii numbers */
	
	private static final int MAX_INDEX = 40;
	
	public static void main(String[] args) {
		int lo = 1;
		int hi = 1;
		
		System.out.println("1: " + lo);
		
		for (int i = 2; i <= MAX_INDEX; i++) {
			System.out.println(i + ": " + hi);
			hi = lo + hi; //new hi is the sum of previous two terms.
			lo = hi - lo; //new lo is the old hi i. e. sum – old hi
		}
	}
}