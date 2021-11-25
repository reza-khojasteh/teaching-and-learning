//A program to create list, iterate through it, and create a sublist.
//It uses removeIf() method with lambda expression to filter the list
import java.util.*;

public class ListExample {

	public static void main(String[] args){

		List<String> strList = new LinkedList<>();
		//adding elements to the end
		strList.add("First");
		strList.add("Second");
		strList.add("Third");
		System.out.println(strList);

		Iterator<String> it = strList.iterator();
		while(it.hasNext()){
			System.out.println(it.next());
		}

		List<String> subList = strList.subList(1,3);
		System.out.println(subList);

		System.out.println("All strings in the list: " + strList);
		strList.removeIf(s -> s.length() <= 5); 
		System.out.println("After removing all strings with length <= 5 " + strList);
	}
}
