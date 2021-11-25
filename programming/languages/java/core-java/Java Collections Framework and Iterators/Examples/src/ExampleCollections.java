//The Collections class exclusively consists of static methods with algorithms that operate on collections, 
//and which return a new collection backed by a specified collection.
//The method sort(List<T> list) Sorts the specified list into ascending order, 
//according to the natural ordering of its elements. 
//All elements in the list must implement the Comparable interface. 
import java.util.*;

public class ExampleCollections {

	public static void main(String[] args) {
	
		List<String> oss = new ArrayList<>();
		oss.add("Windows");
		oss.add("Unix");
		oss.add("MacOS");
		oss.add("Android");
		oss.add("Linux");
		
		Collections.sort(oss);
		for (String os : oss)
			System.out.println(os);
	}

}