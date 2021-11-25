//A program that sorts students in natural (alphabetical) order using the following algorithm:
//The students will be sorted using last name. If two students have the same last name, 
//their first names will be used to sort them. 
//The Student class has only two fields: last name and first name.
import java.util.*;

class AlphabeticalStudents {

	public static void main(String args[]) {
		Student[] s = { 
				new Student("John", "Savage"), 
				new Student("Eric", "Marx"),
				new Student("Cuong", "Marx"), 
				new Student("Oscar", "Savage"),
				new Student("Abe", "Vu") };

		List<Student> list = Arrays.asList(s);
		Collections.sort(list); //Sorts the specified list into ascending order, according to the natural ordering of its elements.
		System.out.println(list);
	}
}