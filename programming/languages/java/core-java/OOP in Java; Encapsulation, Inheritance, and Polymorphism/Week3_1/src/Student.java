//provide a no-arg ctr
//ctrs are not inherited but are called from subclass ctrs
public class Student {
	private long id;
	private String firstName;
	private String lastName;
	//setters and getters needed
	
//	public Student() {
//		//Your code
//	}

	public Student(long id, String firstName, String lastName) {
		super();//it happens even if you don't say it!
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public static void main(String[] args) {
		Student student1 = new Student(1, "Reza", "Khojasteh");

		System.out.println(student1.id);
		System.out.println(student1.firstName);
		System.out.println(student1.lastName);
	}

}