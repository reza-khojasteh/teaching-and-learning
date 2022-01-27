/**
 * Main class of the Java program. 
 * 
 */

public class Main {

	public static void main(String[] args) {

		// Prints a heading
		System.out.println("Maximun Element Finder");

		// create the finder and call the function to find the maximum element
		int maxElement = 0;
		Finder myFinder = new Finder();
		int[] myArray = new int[] {0, 34, -23, 4, -1, 0, 40};

		maxElement = myFinder.findMaximumElement(myArray);

		System.out.println("The maximum element is: " + maxElement);

	}
}
