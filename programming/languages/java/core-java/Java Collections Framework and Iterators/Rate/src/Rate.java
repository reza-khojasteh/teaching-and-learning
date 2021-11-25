//A program that prints the number of occurrences of every string 
//(input from the command line arguments of your program.)
//Map<String, Integer> m, has a key as String and a value as Integer. 
//This code reads the array and puts the strings into the map m.
//If it finds the string in the map, it increases the value of that particular key.
//At the end the code prints "key ---> value" based on the map m's elements.

import java.util.*;

public class Rate {
	public static void main(String[] args) {
		Map<String, Integer> m = new HashMap<>();

		for (String key : args) {
			Integer val = m.get(key);
			Integer newVal = (val == null) ? 1 : val + 1;
			m.put(key, newVal);
		}

		for (Map.Entry<String, Integer> e : m.entrySet())
			System.out.println(e.getKey() + " ---> " + e.getValue());
	}
}