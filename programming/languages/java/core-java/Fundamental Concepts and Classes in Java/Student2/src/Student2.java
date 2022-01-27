public class Student2 {
	//This time, fields have been set to private.
	//Also, Obj. state could be defined this way (but it is better to use constructors)
	private long id = 1;
	private String firstName = "Reza";
	private String lastName = "Khojasteh";

	public static void main(String[] args) {
		Student2 student1 = new Student2();//Using default ctr, note that obj. state is changed this time after its creation using the above values!

		System.out.println(student1.id);//OK in the same class to access the private fields!
		System.out.println(student1.firstName);
		System.out.println(student1.lastName);
	}
}
