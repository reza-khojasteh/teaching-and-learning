public class Student implements Comparable<Student> {

	private String firstName;
	private String lastName;

	public Student(String firstName, String lastName) {
		if (firstName == null || lastName == null)
			throw new NullPointerException();
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public String toString() {
		return firstName + " " + lastName;
	}

	public int compareTo(Student n) {
		int lastCmp = lastName.compareTo(n.lastName); //invokes the compareTo method of class String
		return (lastCmp != 0 ? lastCmp : firstName.compareTo(n.firstName));
	}
}
