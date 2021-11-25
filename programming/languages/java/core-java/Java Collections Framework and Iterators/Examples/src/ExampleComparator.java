//Comparator is a functional interface which imposes a total ordering on some collection of objects.
//Comparators can be passed to a sort method (such as Collections.sort or Arrays.sort) 
//to allow precise control over the sort order

import java.util.*;

public class ExampleComparator {

	public static void main(String[] args) {
		OperatingSystem[] oss = {
				new OperatingSystem("Windows", 8.00f),
				new OperatingSystem("Windows", 7.00f),
				new OperatingSystem("Ubuntu", 12.04f),
				new OperatingSystem("Ubuntu", 14.04f),
				new OperatingSystem("Linux", 6.32f),
				new OperatingSystem("Android", 4.44f) };

		Arrays.sort(oss, new Comparator<OperatingSystem>() {
			public int compare(OperatingSystem os1, OperatingSystem os2) {
				int compName = os1.getName().compareTo(os2.getName());
				if (compName != 0)
					return compName;
				else 
					return (int)(os1.getVersion() * 100 - os2.getVersion() * 100);
			}			
		});

		for(OperatingSystem os: oss)
			System.out.println(os);
	}
}
