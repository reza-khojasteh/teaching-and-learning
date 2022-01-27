public class RecursiveFibonacci {

	public static void main(String[] args) {
		FibonacciCalculator fibonacciCalculator = 
				new FibonacciCalculator();
		fibonacciCalculator.DisplayFibonaccies();
	}
}

class FibonacciCalculator
{
	public void DisplayFibonaccies()
	{
		for( int i = 0; i < 50; i++ )
		{
			System.out.printf( "Fibonacci of %d is: %d\n", i,
					fibonacci( i ) );
		}
	}

	// recursive declaration of method fibonacci
	public long fibonacci( int number )
	{
		if ( ( number == 0 ) || ( number == 1 ) )
			return number;
		else
			return fibonacci( number - 1 ) + fibonacci( number - 2 );
	}	
}