//A program to print unique strings from the command line arguments of your program.
//A unique string is a string that appears only once in a collection.
//If there are strings that appear more than once, it prints them as duplicate strings.
//Set collection cannot contain duplicate elements.

//In the following program, the set uniques contains all unique elements, 
//but when a duplicate element is found, it is added to dups set
//uniques.removeAll(dups); will remove from uniques all the elements that are duplicates. 
//Therefore, at the end, uniques set contains only unique elements from the initial input.
//Also, TreeSet provides an implementation of the Set interface that uses a tree for storage. 
//Objects are stored in sorted, ascending order.

import java.util.*;

public class FindUnique {

	public static void main(String args[]) {
		Set<String> uniques = new HashSet<>();//Use TreeSet to see the difference
		Set<String> dups = new HashSet<>();//Use TreeSet to see the difference

		for (int i = 0; i < args.length; i++)
			if (!uniques.add(args[i]))
				dups.add(args[i]);

		uniques.removeAll(dups); //Destructive set-difference

		System.out.println("Unique words: " + uniques);
		System.out.println("Duplicate words: " + dups);
	}
}
