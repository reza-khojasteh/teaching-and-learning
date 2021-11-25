//A program that sorts students using the following algorithm:
//The students will be sorted using their marks, 
//If two students have the same marks, their IDs will be used to sort them.

import java.util.*;

public class CollegeStudent extends Student {

	private int mark;
	private long id;

	public CollegeStudent(String firstName, String lastName, int mark, long id) {
		super(firstName, lastName);
		this.mark = mark;
		this.id = id;
	}

	private static final Comparator<CollegeStudent> STUDENT_ORDER = new Comparator<CollegeStudent>() {// Could be done as a Lambda....
		public int compare(CollegeStudent s1, CollegeStudent s2) {
			int markCmp = s1.mark - s2.mark;
			if (markCmp != 0)
				return markCmp;
			return s1.id < s2.id ? -1 : (s1.id == s2.id ? 0 : 1);
		}
	};

	public String toString() {
		return super.toString() + "[Mark=" + mark + ", id=" + id + "]";
	}

	public static void main(String[] args) {
		CollegeStudent[] cs = {
				new CollegeStudent("Abe", "Vu", 95, 123321),
				new CollegeStudent("Eric", "Marx", 83, 234432),
				new CollegeStudent("Cuong", "Marx", 84, 456654),
				new CollegeStudent("Oscar", "Savage", 84, 187789),
				new CollegeStudent("John", "Savage", 99, 876678) };

		List<CollegeStudent> list = Arrays.asList(cs);
		Collections.sort(list, STUDENT_ORDER); // What if we had used "Collections.sort(list);" instead?
		System.out.println(list);
	}
}
