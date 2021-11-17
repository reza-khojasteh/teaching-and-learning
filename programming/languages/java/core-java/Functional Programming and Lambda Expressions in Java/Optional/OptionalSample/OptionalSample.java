import java.util.Optional;
import java.util.Random;

/**
 * The OptionalSample program implements a simple application utilizing Optional that:
 * 1- simply creates a random number between 0 and 999 and prints it, 
 * 
 * 2- returns an Optional with the specified present non-null value - by calling Optional.of(randomNumber), 
 * 3- returns an optional Integer based on the lambda passed to filter - by calling filter(i -> i % 2 != 0), 
 * 4- returns an optional String based on the lambda passed to map - by calling map(i -> "Your random number, " + i + ", is odd!"),  
 * 5- and finally, if a value is present, performs the given action (printing using method reference println of System.out) with the value, 
 *    otherwise performs the given action. (printing "Your random was even!")
 *
 * @author Reza Khojasteh
 * @version 1.0
 */
public class OptionalSample {
	public static void main(String[] args) {
		int randomNumber = new Random().nextInt(1000);
		System.out.printf("Your random number is %d\n", randomNumber);

		Optional.of(randomNumber)
		.filter(i -> i % 2 != 0)
		.map(i -> "Your random number, " + i + ", is odd!")
		.ifPresentOrElse(System.out::println, () -> System.out.println("Your random number was even!"));
	}
}
