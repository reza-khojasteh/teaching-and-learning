import java.util.*;

public class FilterStudents {
	List<Student> myStudents = new ArrayList<>();

	public FilterStudents() {
		myStudents.add(new Student("John", 55));
		myStudents.add(new Student("Mary", 75));
		myStudents.add(new Student("Wei", 80));
	}

	public void filter(Collection<Student> coll) {		
		for (Iterator<Student> it = coll.iterator(); it.hasNext();)			
			if (!cond(it.next()))
				it.remove();
	}
	
//	public void wrongFilter(List<Student> coll) {
//		for (int i = 0; i < coll.size(); i++) {
//			if (!cond(coll.get(i))) {
//				coll.remove(i);
//			}
//		}
//	}

	private static boolean cond(Student s) {
		return (s.getMark() < 70) ? false : true;
	}

	public String toString() {
		return "Students who got more than or equal to 70: " + myStudents;
	}

	public static void main(String[] args) {
		FilterStudents filteredStudents = new FilterStudents();
		filteredStudents.filter(filteredStudents.myStudents);
//		filteredStudents.wrongFilter(filteredStudents.myStudents);// test for marks below 80		
		System.out.println(filteredStudents);		
	}
}
